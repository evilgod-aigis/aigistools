const table = {};

table.word = {
    team: "編成", area: "範囲", global: "全体", noAttr: "属性不問", limAttr: "属性指定"
    , clAttr: "クラス特性", fixed: "固定値", hit: "攻撃命中", counter: "反撃"
    , scalar: "スカラー", death: "死亡時", takenDmg: "被ダメージ"
    
    , id: "id", name: "ユニット", rarity: "レア", cl: "クラス", AW: "覚醒等", skill: "スキル"
    
    , hp: "HP", atk: "攻撃力", def: "防御力", mr: "魔法<br>耐性", atkCd: "攻撃<br>硬直", stop: "停止"
    , atkAttr: "攻撃<br>属性", dur: "継続"
    , value: "数値"
    , target: "対象", note: "備考"
}
table.eng = { "物理": "physical", "魔法": "magical", "貫通": "true" };

table.sortDir = {
    // 昇順
    "1": [ "hp", "atk", "def", "mr" ]
    // 降順
    , "-1": [ "atkCd", "stop" ]
    // なし
    , "0": []
}

table.rarity = [ "黒", "白", "青", "金", "ちび", "銀", "銅", "鉄", "トークン", "空欄" ];
table.AW = [ "CC前", "CC後", "CC55", "覚醒前", "覚醒後", "覚1", "覚2a", "覚2b" ];
table.atkAttr = [ "物理", "魔法", "貫通" ];
table.debuffType = {};
table.debuffType.common = [ "team", "hit", "counter", "scalar", "death", "takenDmg" ];
table.debuffType.domain = [ "area", "global" ];
table.debuffType.type = {
    hp: {
        list: []
        , color: "rgba(0, 255, 0, 0.3)"
    }
    , atk: {
        list: [ "noAttr", "limAttr" ]
        , color: "rgba(255, 0, 0, 0.3)"
    }
    , def: {
        list: [ "area", "global", "death" ]
        , color: "rgba(0, 0, 255, 0.3)"
    }
    , mr: {
        list: [ "area", "global", "clAttr", "fixed" ]
        , color: "rgba(255, 255, 0, 0.3)"
    }
    , atkCd: {
        list: []
        , color: "rgba(255, 127, 0, 0.3)"
    }
    , stop: {
        list: [ "area", "global" ]
        , color: "rgba(100, 100, 100, 0.3)"
    }
};
table.stats = [ "hp", "atk", "def", "mr", "atkCd", "stop", "value" ];
table.before = [ "id", "name", "rarity", "AW", "skill" ];
table.after = [ "atkAttr", "dur", "target", "note" ];


// 特殊なオブジェクト生成
table.SetObjects = () => {
    // 全タイプに亘って空なオプションを探し、消す
    delete table.empty;
    table.empty = {};
    options = [ "rarity", "AW" ];
    _.forEach(options, opt => {
        table.empty[opt] = {};
        _.forEach(table[opt], key => table.empty[opt][key] = true);
    });
    _.forEach(table.debuffType.common, type => {
        _.forEach(debuff[type], debuffer => {
            if("rarity" in debuffer)
                table.empty.rarity[debuffer.rarity] = false;
            else
                table.empty.rarity["空欄"] = false;
                
            if("AW" in debuffer)
                table.empty.AW[debuffer.AW] = false;
        });
    });
    _.forEach(debuff.mixture, debuffer => {
        if("rarity" in debuffer)
            table.empty.rarity[debuffer.rarity] = false;
        else
            table.empty.rarity["空欄"] = false;
            
        if("AW" in debuffer)
            table.empty.AW[debuffer.AW] = false;
    });
    _.forEach(table.empty, (optObj, opt) => {
        _.forEach(optObj, (isEmpty, key) => {
            if(isEmpty) table[opt].splice(table[opt].indexOf(key), 1);
        });
    });
    // 表の見出し
    table.column = [];
    table.column.push(...table.before);
    table.column.push(...table.stats);
    table.column.push(...table.after);
    // 表のソート可能な列
    table.sortable = [ "id", "rarity", ...table.stats, "atkAttr", "dur" ];
    
    // picked: 検索条件に合うものを入れる
    // sortedBy: 今何でソートされているか
    delete table.list;
    table.list = {};
    _.forEach(table.debuffType.common, type => table.list[type] = { picked: [], sortedBy: "id" });
    _.forEach(table.debuffType.domain, type => table.list[type] = { picked: [], sortedBy: "id" });
    _.forEach(table.debuffType.type, (obj, stat) =>
        _.forEach(obj.list, type =>
            table.list[`${stat}-${type}`] = { picked: [], sortedBy: "id" }
        )
    );
    
    // フィルタ設定保存用
    delete table.filter;
    table.filter = {};
    table.filter.rarity = {};
    _.forEach(table.rarity, rarity => table.filter.rarity[rarity] = true);
    table.filter.AW = { "覚醒前": false, "覚醒後": true };
    table.filter.debuffType = {};
    _.forEach(table.debuffType.common, type => table.filter.debuffType[type] = true);
    table.filter.stats = {};
    _.forEach(table.stats, stat => table.filter.stats[stat] = true);
    table.filter.stats.forceMode = false;
    table.filter.stats.other = true;
    
    // 覚醒前か後か(フィルタ用)
    delete table.AW_rep;
    table.AW_rep = {};
    _.forEach(table.AW, (AW, i) => table.AW_rep[AW] = i <= table.AW.indexOf("覚醒前") ? "覚醒前" : "覚醒後");
}

// フィルタ設定生成
table.CreateFilter = () => {
    // html
    const CreateButtons = element => {
        _.forEach({ "全部ON": true, "全部OFF": false }, (checked, text) => {
            const newButton = document.createElement("button");
            newButton.type = "button";
            newButton.setAttribute("onclick", `table.ToggleAllFilter(this.parentElement, ${checked})`);
            newButton.innerHTML = text;
            element.appendChild(newButton);
        });
    }
    const filters = document.getElementById("filters");
    const newButton = document.createElement("button");
    newButton.type = "button";
    newButton.id = "toggler-filter";
    newButton.setAttribute("onclick", "table.ToggleFilterShown(this)");
    newButton.innerHTML = "フィルタ";
    filters.appendChild(newButton);
    const filterCont = document.createElement("div");
    filterCont.id = "filter-content";
    filterCont.className = "is-unshown";
    filterCont.innerHTML = `
        <span style="font-size: 18px;">
            フィルタ設定
        </span>
    `;
    CreateButtons(filterCont);
    
    let newFliterArea, newTitleArea, newTitle, newCheckboxArea, newLabel, newCheckbox, newBr;
    const CreateFilterArea = (title, filterType) => {
        newFliterArea = document.createElement("div");
        newFliterArea.className = "filter-area";
        newTitleArea = document.createElement("div");
        newTitleArea.className = "filter-title-area";
        newTitle = document.createElement("span");
        newTitle.className = "filter-title";
        newTitle.innerHTML = title;
        newTitleArea.appendChild(newTitle);
        newFliterArea.appendChild(newTitleArea);
        newCheckboxArea = document.createElement("div");
        newCheckboxArea.id = `filter_${filterType}`;
        newCheckboxArea.className = "filter-checkbox-area";
        CreateButtons(newCheckboxArea);
        newBr = document.createElement("br");
        newCheckboxArea.appendChild(newBr);
        CreateCheckbox(newCheckboxArea, filterType);
        newFliterArea.appendChild(newCheckboxArea);
        filterCont.appendChild(newFliterArea);
    }
    const CreateCheckbox = (element, filterType, except = []) => {
        _.forEach(table.filter[filterType], (checked, key) => {
            if(_.includes(except, key)) return;
            newLabel = document.createElement("label");
            newCheckbox = document.createElement("input");
            newCheckbox.type = "checkbox";
            if(checked) newCheckbox.setAttribute("checked", "true");
            newCheckbox.setAttribute("onchange", `table.filter.${filterType}.${key}=this.checked; table.ApplyFilter()`);
            newLabel.appendChild(newCheckbox);
            newLabel.innerHTML += key in table.word ? table.word[key].replace(/<br>/g, "") : key;
            element.appendChild(newLabel);
        });
    }
    
    // rarity
    CreateFilterArea("レアリティ", "rarity");
    
    // AW
    CreateFilterArea("覚醒", "AW");
    
    // buffType
    CreateFilterArea("区分", "debuffType");
    
    // stats
    newFliterArea = document.createElement("div");
    newFliterArea.className = "filter-area";
    newTitleArea = document.createElement("div");
    newTitleArea.className = "filter-title-area";
    newTitle = document.createElement("span");
    newTitle.className = "filter-title tooltip-ts";
    newTitle.setAttribute(
        "data-tippy-content"
        , "チェックしたバフを持つユニットがすべて表示される"
    );
    newTitle.innerHTML = "種類";
    newTitleArea.appendChild(newTitle);
    newFliterArea.appendChild(newTitleArea);
    newCheckboxArea = document.createElement("div");
    newCheckboxArea.id = "filter_stats";
    newCheckboxArea.className = "filter-checkbox-area";
    newLabel = document.createElement("label");
    newLabel.className = "except";
    newLabel.innerHTML = `
        チェックのない列を強制的に隠す
        <input
            type="checkbox"
            onchange="table.filter.stats.forceMode=this.checked; table.ApplyFilter()"
        >
    `;
    newCheckboxArea.appendChild(newLabel);
    newBr = document.createElement("br");
    newCheckboxArea.appendChild(newBr);
    CreateButtons(newCheckboxArea);
    newBr = document.createElement("br");
    newCheckboxArea.appendChild(newBr);
    CreateCheckbox(newCheckboxArea, "stats", [ "value", "forceMode", "other" ]);
    /*
    newLabel = document.createElement("label");
    newLabel.className = "tooltip-b";
    newLabel.setAttribute(
        "data-tippy-content"
        , "備考に書かれているデバフ"
    );
    newLabel.innerHTML = `
        <input
            type="checkbox"
            checked
            onchange="table.filter.stats.other=this.checked; table.ApplyFilter()"
        >
        その他
    `;
    newCheckboxArea.appendChild(newLabel);
    */
    newFliterArea.appendChild(newCheckboxArea);
    filterCont.appendChild(newFliterArea);
    filters.appendChild(filterCont);
}
// フィルタ表示/非表示
table.ToggleFilterShown = (_this) => {
    const filterCont = document.getElementById("filter-content");
    if(filterCont.classList.contains("is-unshown")) {
        filterCont.classList.remove("is-unshown");
        _this.innerHTML = "閉じる";
    } else {
        filterCont.classList.add("is-unshown");
        _this.innerHTML = "フィルタ";
    }
}
// フィルタ一括ON/OFF
table.ToggleAllFilter = (_element, _checked) => {
    const labels = _element.getElementsByTagName("label");
    _.forEach(labels, label => {
        if(!label.classList.contains("except")) label.firstElementChild.checked = _checked;
    });
    
    const category = _element.id.substring(_element.id.indexOf("_") + 1);
    if(category in table.filter) {
        _.forEach(table.filter[category], (_, key) => {
            if(key !== "forceMode") table.filter[category][key] = _checked;
        });
    } else {
        _.forEach(table.filter, optObj =>
            _.forEach(optObj, (_, key) => {
                if(key !== "forceMode") optObj[key] = _checked;
            })
        );
    }
    
    table.ApplyFilter();
}

// テーブル生成
table.CreateTable = () => {
    const tables = document.getElementById("tables");
    tables.innerHTML = "";
    _.forEach(table.list, type => type.picked.splice(0));
    // 共通部分
    _.forEach(table.debuffType.common, type =>
        table.list[type].picked = _.filter(debuff[type], debuffer => target.IsMatch(debuffer.target))
    );
    table.CreateTableSub(tables, table.debuffType.common, true);
    // 非共通部分
    switch(table.mixture) {
        case "domain":
            _.forEach(debuff.mixture, debuffer => {
                if(target.IsMatch(debuffer.target)) //table.list[debuffer.domain].picked.push(debuffer);
                {
                    try {
                        table.list[debuffer.domain].picked.push(debuffer);
                    } catch(e) {
                        console.log(e);
                    }
                }
            });
            table.CreateTableSub(tables, table.debuffType.domain, false);
            break;
        case "type":
            _.forEach(debuff.mixture, debuffer => {
                if(!target.IsMatch(debuffer.target)) return;
                _.forEach(debuffer.stats, (obj, stat) => {
                    if("type" in obj) table.list[`${stat}-${obj.type}`].picked.push(debuffer);
                })
            });
            _.forEach(table.debuffType.type, (obj, stat) => {
                if(obj.list.length === 0) return;
                
                const newTableArea = document.createElement("div");
                newTableArea.id = `table-area_${stat}`;
                newTableArea.className = "table-area";
                newTableArea.style.backgroundColor = obj.color;
                const newStat = document.createElement("span");
                newStat.className = "table-stat";
                newStat.innerHTML = `${table.word[stat].replace(/<br>/g, "")}デバフ`;
                newTableArea.appendChild(newStat);
                table.CreateTableSub(newTableArea, obj.list, false, stat);
                tables.appendChild(newTableArea);
            });
            break;
    }
    
    table.ApplyFilter();
}
table.CreateTableSub = (_element, _list, _isCommon, _stat = "") => {
    const isDomain = !_isCommon && table.mixture === "domain";
    const isType = !_isCommon && table.mixture === "type";
    const column = isType ? [ ...table.before, "value", "target", "note" ] : table.column;
    _.forEach(_list, type => {
        const name = isType ? `${_stat}-${type}` : type;
        const newTableArea = document.createElement("div");
        newTableArea.id = `table-area_${name}`;
        newTableArea.className = isType ? "table-area-sub inline-block" : "table-area";
        const newTableName = document.createElement("span");
        newTableName.className = "table-name";
        newTableName.innerHTML =
            _isCommon ? `${table.word[type]}デバフ`
            : isDomain ? `効果範囲：${table.word[type]}`
            : `区分：${table.word[type]}`;
        newTableArea.appendChild(newTableName);
        const newScroller = document.createElement("div");
        newScroller.className = "table-scroll";
        const newTable = document.createElement("table");
        newTable.id = `table_${name}`;
        const newThead = document.createElement("thead");
        let newTr = document.createElement("tr");
        _.forEach(column, elem => {
            const newTh = document.createElement("th");
            if(_.includes(table.sortable, elem)) {
                newTh.className = "sortable";
                newTh.setAttribute("onclick", `table.Sort("${name}", "${isType && elem === "value" ? _stat : elem}")`);
            }
            newTh.innerHTML = table.word[elem];
            newTr.appendChild(newTh);
        });
        newThead.appendChild(newTr);
        newTable.appendChild(newThead);
        
        const newTbody = document.createElement("tbody");
        _.forEach(table.list[name].picked, debuffer => {
            newTr = document.createElement("tr");
            _.forEach(table.before, elem => {
                const newTd = document.createElement("td");
                if(elem in debuffer) {
                    newTd.innerHTML = Array.isArray(debuffer[elem]) ? debuffer[elem].join("<br>") : debuffer[elem];
                }
                newTr.appendChild(newTd);
            });
            const showType = [];
            if(isType) {
                let newTd = document.createElement("td");
                newTd.className = "cell-filled";
                newTd.innerHTML = Array.isArray(debuffer.stats[_stat].value)
                    ? debuffer.stats[_stat].value.join("<br>")
                    : debuffer.stats[_stat].value;
                newTr.appendChild(newTd);
            } else {
                _.forEach(table.stats, elem => {
                    const newTd = document.createElement("td");
                    if(elem in debuffer.stats) {
                        newTd.className = "cell-filled";
                        if(_isCommon)
                            newTd.innerHTML = Array.isArray(debuffer.stats[elem])
                                ? debuffer.stats[elem].join("<br>")
                                : debuffer.stats[elem];
                        else {
                            newTd.innerHTML = Array.isArray(debuffer.stats[elem].value)
                                ? debuffer.stats[elem].value.join("<br>")
                                : debuffer.stats[elem].value;
                            if(debuffer.stats[elem].type !== debuffer.domain)
                                showType.push(elem);
                        }
                    }
                    newTr.appendChild(newTd);
                });
                // atkAttr
                let newTd = document.createElement("td");
                if("atkAttr" in debuffer) {
                    if(debuffer.atkAttr[0] !== "?") newTd.className = `cell-atkAttr_${table.eng[debuffer.atkAttr]}`;
                    newTd.innerHTML = Array.isArray(debuffer.atkAttr) ? debuffer.atkAttr.join("<br>") : debuffer.atkAttr;
                }
                newTr.appendChild(newTd);
                // dur
                newTd = document.createElement("td");
                if("dur" in debuffer) {
                    newTd.innerHTML = Array.isArray(debuffer.dur) ? debuffer.dur.join("<br>") : debuffer.dur;
                }
                newTr.appendChild(newTd);
            }
            
            newTd = document.createElement("td");
            if("target" in debuffer) {
                let textArr = [];
                if(Array.isArray(debuffer.target)) {
                    _.forEach(debuffer.target, and => {
                        let textArrSub = [ "" ];
                        _.forEach(and, arr => {
                            _.forEach(textArrSub, (text, i) => textArrSub[i] = _.map(arr, target =>`${text}${text !== "" ? "&" : ""}${target}`));
                            textArrSub = _.flatten(textArrSub);
                        });
                        textArr.push(...textArrSub);
                    });
                } else {
                    textArr.push("");
                    _.forEach(debuffer.target, arr => {
                        _.forEach(textArr, (text, i) => textArr[i] = _.map(arr, target => `${text}${text !== "" ? "&" : ""}${target}`));
                        textArr = _.flatten(textArr);
                    });
                }
                newTd.innerHTML = `
                    <span class="inline-block">${textArr.join(`、</span><span class="inline-block">`)}</span>
                `;
            }
            newTr.appendChild(newTd);
            
            newTd = document.createElement("td");
            const showDomain = isType
                && ((debuffer.domain === "area" && type !== "area") || (debuffer.domain === "global" && type === "area"));
            newTd.innerHTML = _.map(showType, stat =>
                `${table.word[stat].replace(/<br>/g, "")}：${table.word[debuffer.stats[stat].type]}`
            ).join("<br>");
            if("note" in debuffer) {
                if(showType.length !== 0) newTd.innerHTML += "<br>";
                if("other" in debuffer.stats) newTd.className = "cell-filled";
                newTd.innerHTML += Array.isArray(debuffer.note) ? debuffer.note.join("<br>") : debuffer.note;
                if(showDomain) newTd.innerHTML += "<br>";
            }
            if(showDomain) newTd.innerHTML += table.word[debuffer.domain];
            newTr.appendChild(newTd);
            newTbody.appendChild(newTr);
        });
        newTable.appendChild(newTbody);
        newScroller.appendChild(newTable);
        newTableArea.appendChild(newScroller);
        _element.appendChild(newTableArea);
    });
}

// フィルタ適用
table.ApplyFilter = () => {
    // 行の処理用
    const HideRows = (tableArea, tableName) => {
        const debuffTable = tableArea.getElementsByTagName("table")[0];
        const trs = debuffTable.querySelectorAll("tbody tr");
        const shownRowIndexes = [];
        _.forEach(table.list[tableName].picked, (debuffer, i) => {
            if(
                ((!("rarity" in debuffer) && table.filter.rarity["空欄"]) || table.filter.rarity[debuffer.rarity])
                && (!("AW" in debuffer) || table.filter.AW[table.AW_rep[debuffer.AW]])
                && _.some(debuffer.stats, (_, stat) => table.filter.stats[stat])
            ) {
                trs[i].classList.remove("is-unshown");
                shownRowIndexes.push(i);
            } else
                trs[i].classList.add("is-unshown");
        });
        const tableNameElem = tableArea.getElementsByClassName("table-name")[0];
        if(shownRowIndexes.length === 0) {
            debuffTable.parentElement.classList.add("is-unshown");
            tableNameElem.classList.add("table-empty");
        } else {
            debuffTable.parentElement.classList.remove("is-unshown");
            tableNameElem.classList.remove("table-empty");
        }
        return shownRowIndexes;
    }
    
    const tableAreaNames = [ ...table.debuffType.common ];
    switch(table.mixture) {
        case "domain":
            tableAreaNames.push(...table.debuffType.domain);
            break;
        case "type":
            _.forEach(table.debuffType.type, (obj, stat) => {
                if(obj.list.length !== 0) tableAreaNames.push(stat);
            });
            break;
    }
    _.forEach(tableAreaNames, type => {
        const isStat = table.mixture === "type" && _.includes(table.stats, type);
        const tableArea = document.getElementById(`table-area_${type}`);
        if((type in table.filter.debuffType && !table.filter.debuffType[type])
        || (isStat && !table.filter.stats[type])) {
            tableArea.classList.add("is-unshown");
            return;
        }
        tableArea.classList.remove("is-unshown");
        
        const shownRowIndexes = [];
        if(isStat) {
            const tableAreaSubs = tableArea.getElementsByClassName("table-area-sub");
            const colIndex = table.before.length + 2;    // target
            let allNone = true;
            _.forEach(table.debuffType.type[type].list, (statType, i) => {
                const name = `${type}-${statType}`;
                tableAreaSubs[i].classList.remove("is-unshown");
                table.Sort(name, "id", false);
                shownRowIndexes.splice(0);
                shownRowIndexes.push(...HideRows(tableAreaSubs[i], name));
                if(shownRowIndexes.length === 0) {
                    tableAreaSubs[i].classList.remove("inline-block");
                    return;
                }
                tableAreaSubs[i].classList.add("inline-block");
                allNone = false;
                const debuffTable = tableAreaSubs[i].getElementsByTagName("table")[0];
                const ths = debuffTable.querySelectorAll(`th:nth-child(${colIndex})`);
                const tds = debuffTable.querySelectorAll(`td:nth-child(${colIndex})`);
                if(_.some(shownRowIndexes, rowIndex => tds[rowIndex].innerHTML !== "")) {
                    _.forEach(ths, th => th.classList.remove("is-unshown"));
                    _.forEach(tds, td => td.classList.remove("is-unshown"));
                } else {
                    _.forEach(ths, th => th.classList.add("is-unshown"));
                    _.forEach(tds, td => td.classList.add("is-unshown"));
                }
            });
            const tableStat = tableArea.getElementsByClassName("table-stat")[0];
            if(allNone) {
                _.forEach(tableAreaSubs, sub => sub.classList.add("is-unshown"));
                tableStat.classList.add("table-empty");
            } else
                tableStat.classList.remove("table-empty");
            return;
        } else {
            table.Sort(type, "id", false);
            shownRowIndexes.push(...HideRows(tableArea, type));
            if(shownRowIndexes.length === 0) return;
        }
        
        // 列の処理
        const debuffTable = tableArea.getElementsByTagName("table")[0];
        let colIndex = table.before.indexOf("AW") + 1;
        let ths, tds;
        _.forEach([ "AW", "skill" ], colName => {
            ths = debuffTable.querySelectorAll(`th:nth-child(${colIndex})`);
            tds = debuffTable.querySelectorAll(`td:nth-child(${colIndex})`);
            if(!ths || !tds) return;
            if(_.every(shownRowIndexes, rowIndex => tds[rowIndex].innerHTML === "")) {
                _.forEach(ths, th => th.classList.add("is-unshown"));
                _.forEach(tds, td => td.classList.add("is-unshown"));
            }
            ++colIndex;
        });
        colIndex = table.before.length + 1;
        _.forEach(table.filter.stats, (isShown, stat) => {
            if(stat === "forceMode" || stat === "other") return;
            
            ths = debuffTable.querySelectorAll(`th:nth-child(${colIndex})`);
            tds = debuffTable.querySelectorAll(`td:nth-child(${colIndex})`);
            if(!ths || !tds) return;
            if(table.filter.stats.forceMode && !isShown) {
                _.forEach(ths, th => th.classList.add("is-unshown"));
                _.forEach(tds, td => td.classList.add("is-unshown"));
            } else {
                _.forEach(ths, th => th.classList.remove("is-unshown"));
                _.forEach(tds, td => td.classList.remove("is-unshown"));
                if(_.every(shownRowIndexes, rowIndex => tds[rowIndex].innerHTML === "")) {
                    _.forEach(ths, th => th.classList.add("is-unshown"));
                    _.forEach(tds, td => td.classList.add("is-unshown"));
                }
            }
            ++colIndex;
        });
        colIndex = table.before.length + table.stats.length + 1;
        _.forEach(table.after, term => {
            if(term === "note") return;
            ths = debuffTable.querySelectorAll(`th:nth-child(${colIndex})`);
            tds = debuffTable.querySelectorAll(`td:nth-child(${colIndex})`);
            if(!ths || !tds) return;
            if(_.every(shownRowIndexes, rowIndex => tds[rowIndex].innerHTML === "")) {
                _.forEach(ths, th => th.classList.add("is-unshown"));
                _.forEach(tds, td => td.classList.add("is-unshown"));
            }
            ++colIndex;
        });
    });
}

// ソート
table.Sort = (_debuffType, _colName, _allowReverse = true) => {
    const debuffTable = document.getElementById(`table_${_debuffType}`);
    const trs = debuffTable.querySelectorAll("tbody tr");
    const trs_array = Array.from(trs);
    const isSub = table.mixture === "type"
        && !_.includes(table.debuffType.common, _debuffType)
        && _.includes(table.stats, _colName);
    if(_allowReverse && _colName === table.list[_debuffType].sortedBy) {
        if(_colName === "id" || _colName === "rarity" || isSub)
            trs_array.reverse();
        else {
            const colIndex = table.column.indexOf(_colName);
            const trs_filled = _.takeWhile(trs_array, tr => tr.children[colIndex].innerHTML !== "");
            trs_filled.reverse();
            _.forEach(trs_filled, (tr, i) => trs_array[i] = tr);
        }
    } else {
        const colIndex_id = table.column.indexOf("id");
        const colIndex = isSub ? table.before.length : table.column.indexOf(_colName);
        if(_colName === "id") {
            trs_array.sort((a, b) => 
                Number(a.children[colIndex_id].innerText) - Number(b.children[colIndex_id].innerText)
            );
        } else if(_colName === "rarity") {
            trs_array.sort((a, b) => {
                const tds_a = a.children;
                const tds_b = b.children;
                const id_a = Number(tds_a[colIndex_id].innerText);
                const id_b = Number(tds_b[colIndex_id].innerText);
                const rarity_a = tds_a[colIndex].innerText;
                const rarity_b = tds_b[colIndex].innerText;
                if(rarity_a === rarity_b) return id_a - id_b;
                if(rarity_a === "") return 1;
                if(rarity_b === "") return -1;
                return table.rarity.indexOf(rarity_a) - table.rarity.indexOf(rarity_b);
            });
        } else if(_colName === "atkAttr") {
            trs_array.sort((a, b) => {
                const tds_a = a.children;
                const tds_b = b.children;
                const id_a = Number(tds_a[colIndex_id].innerText);
                const id_b = Number(tds_b[colIndex_id].innerText);
                const atkAttr_a = tds_a[colIndex].innerText;
                const atkAttr_b = tds_b[colIndex].innerText;
                if(atkAttr_a === atkAttr_b) return id_a - id_b;
                if(atkAttr_a === "") return 1;
                if(atkAttr_b === "") return -1;
                return table.atkAttr.indexOf(atkAttr_a) - table.atkAttr.indexOf(atkAttr_b);
            });
        } else if(_colName === "dur") {
            trs_array.sort((a, b) => {
                const tds_a = a.children;
                const tds_b = b.children;
                const id_a = Number(tds_a[colIndex_id].innerText);
                const id_b = Number(tds_b[colIndex_id].innerText);
                const dur_a = tds_a[colIndex].innerText;
                const dur_b = tds_b[colIndex].innerText;
                if(dur_a === dur_b) return id_a - id_b;
                if(dur_a === "") return 1;
                if(dur_b === "") return -1;
                if(dur_a === "∞") return -1;
                if(dur_b === "∞") return 1;
                if(dur_a === "?f") return 1;
                if(dur_b === "?f") return -1;
                return (Number.parseInt(dur_a) - Number.parseInt(dur_b)) * -1;
            });
        } else {
            const dir = Number(_.findKey(table.sortDir, arr => _.includes(arr, _colName)));
            trs_array.sort((a, b) => {
                const tds_a = a.children;
                const tds_b = b.children;
                const id_a = Number(tds_a[colIndex_id].innerText);
                const id_b = Number(tds_b[colIndex_id].innerText);
                const text_a = tds_a[colIndex].innerText;
                const text_b = tds_b[colIndex].innerText;
                if(text_a === text_b) return id_a - id_b;
                if(text_a === "") return 1;
                if(text_b === "") return -1;
                let priority_a = 1;
                let priority_b = 1;
                let value_a;
                let value_b;
                switch(text_a[0]) {
                    case "×":
                        priority_a = 2;
                        value_a = Number.parseFloat(text_a.substring(1));
                        break;
                    case "*":
                        priority_a = 3;
                        value_a = Number.parseFloat(text_a.substring(1));
                        break;
                    case "m":
                        priority_a = 4;
                        value_a = Number.parseFloat(text_a.substring(3));
                        break;
                    default:
                        if(_.includes(text_a, "%")) priority_a = 0;
                        value_a = Number.parseFloat(text_a);
                }
                switch(text_b[0]) {
                    case "×":
                        priority_b = 2;
                        value_b = Number.parseFloat(text_b.substring(1));
                        break;
                    case "*":
                        priority_b = 3;
                        value_b = Number.parseFloat(text_b.substring(1));
                        break;
                    case "m":
                        priority_b = 4;
                        value_b = Number.parseFloat(text_b.substring(3));
                        break;
                    default:
                        if(_.includes(text_b, "%")) priority_b = 0;
                        value_b = Number.parseFloat(text_b);
                }
                let diff = priority_a - priority_b;
                if(diff !== 0) return diff;
                diff = value_a - value_b;
                if(diff === 0) return id_a - id_b;
                if(priority_a === 3) return diff * -1;
                return diff * dir;
            });
        }
        table.list[_debuffType].sortedBy = _colName;
    }
    
    _.forEach(
        _.map(trs_array, tr => ({
            classList: [ ...tr.classList ]
            , innerHTML: tr.innerHTML
        }))
        , (html, i) => {
            trs[i].classList.remove(...trs[i].classList);
            trs[i].classList.add(...html.classList);
            trs[i].innerHTML = html.innerHTML;
        }
    );
}