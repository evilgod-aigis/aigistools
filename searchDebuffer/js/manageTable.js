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
        list: [ "area", "global" ]
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
    // 非表示になる可能性のある列(except stats)
    table.hidable = [ "rarity", "AW", "skill", "atkAttr", "dur", "target" ];
    
    // picked: 検索条件に合うものを入れる
    // sortedBy: 今何でソートされているか
    table.list = {};
    _.forEach(table.debuffType.common, type => table.list[type] = { picked: [], sortedBy: "id" });
    _.forEach(table.debuffType.domain, type => table.list[type] = { picked: [], sortedBy: "id" });
    _.forEach(table.debuffType.type, (obj, stat) =>
        _.forEach(obj.list, type =>
            table.list[`${stat}-${type}`] = { picked: [], sortedBy: "id" }
        )
    );
    
    // フィルタ設定保存用
    table.filter = {};
    // レアリティ
    table.filter.rarity = {};
    _.forEach(table.rarity, rarity => table.filter.rarity[rarity] = true);
    // 覚醒
    table.filter.AW = { "覚醒前": false, "覚醒後": true, "空欄": true };
    // デバフ区分
    table.filter.debuffType = {};
    _.forEach(table.debuffType.common, type => table.filter.debuffType[type] = true);
    // デバフ種類
    table.filter.stats = {};
    _.forEach(table.stats, stat => table.filter.stats[stat] = true);
    table.filter.stats.forceMode = false;
    table.filter.stats.other = true;
    
    // 覚醒前か後か(フィルタ用)
    table.AW_rep = {};
    _.forEach(table.AW, (AW, i) => table.AW_rep[AW] = i <= table.AW.indexOf("覚醒前") ? "覚醒前" : "覚醒後");
}

// フィルタ設定生成
table.CreateFilter = () => {
    // html
    const CreateButtons = (element, filterType = null) => {
        _.forEach({ "全部ON": true, "全部OFF": false }, (bool, text) => {
            const newButton = document.createElement("button");
            newButton.type = "button";
            newButton.setAttribute("onclick", `table.ToggleAllFilter(this.parentElement, ${bool}, ${filterType ? `"${filterType}"` : ""})`);
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
    
    let newFliterArea, newTitleArea, newTitle, newCheckboxArea, newLabel, newCheckbox;
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
        newCheckboxArea.appendChild(document.createElement("br"));
        CreateCheckbox(newCheckboxArea, filterType);
        newFliterArea.appendChild(newCheckboxArea);
        filterCont.appendChild(newFliterArea);
    }
    const CreateCheckbox = (element, filterType, except = []) => {
        _.forEach(table.filter[filterType], (bool, key) => {
            if(_.includes(except, key)) return;
            newLabel = document.createElement("label");
            newCheckbox = document.createElement("input");
            newCheckbox.type = "checkbox";
            if(bool) newCheckbox.setAttribute("checked", "true");
            newCheckbox.setAttribute("onchange", `table.filter.${filterType}.${key}=this.checked; table.ApplyFilter("${filterType}")`);
            newLabel.appendChild(newCheckbox);
            newLabel.innerHTML += key in table.word ? table.word[key].replace(/<br>/g, "") : key;
            element.appendChild(newLabel);
        });
    }
    
    CreateFilterArea("レアリティ", "rarity");
    CreateFilterArea("覚醒", "AW");
    CreateFilterArea("区分", "debuffType");
    
    // デバフ種類
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
    newCheckboxArea.appendChild(document.createElement("br"));
    CreateButtons(newCheckboxArea);
    newCheckboxArea.appendChild(document.createElement("br"));
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
table.ToggleAllFilter = (_element, _bool, _filterType = null) => {
    const labels = _element.getElementsByTagName("label");
    _.forEach(labels, label => {
        if(!label.classList.contains("except")) label.firstElementChild.checked = _bool;
    });
    
    if(_filterType) {
        _.forEach(table.filter[_filterType], (_, key, obj) => {
            if(key !== "forceMode") obj[key] = _bool;
        });
    } else {
        _.forEach(table.filter, filterObj =>
            _.forEach(filterObj, (_, key, obj) => {
                if(key !== "forceMode") obj[key] = _bool;
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
                });
            });
            _.forEach(table.debuffType.type, (obj, stat) => {
                if(!obj.list.length) return;
                
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
    
    // 設定用にスタイル生成 あとで修正
    if(!document.getElementById("created-style")) {
        newStyle = document.createElement("style");
        newStyle.id = "created-style";
        document.getElementsByTagName('head')[0].appendChild(newStyle);
        const sheet = newStyle.sheet;
        // 行
        _.forEach(table.filter, (obj, filterType) => {
            if(filterType !== "debuffType" || filterType !== "stats")
                _.forEach(obj, (bool, key) => sheet.insertRule(`#tables .${filterType}-${key} {}`, sheet.cssRules.length));
        });
        // 列
        _.forEach([ "common", "domain" ], div =>
            _.forEach(table.debuffType[div], type =>
                _.forEach([ ...table.hidable, ...table.stats ], colName => {
                    sheet.insertRule(`#table_${type} .column-${colName} {}`, sheet.cssRules.length);
                })
            )
        );
        _.forEach(table.debuffType.type, (statObj, stat) =>
            _.forEach(statObj.list, type =>
                _.forEach(table.hidable, colName =>
                    sheet.insertRule(`#table_${stat}-${type} .column-${colName} {}`, sheet.cssRules.length)
                )
            )
        );
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
            newTh.classList.add(`column-${elem}`);
            if(elem === "name") {
                newTh.classList.add("sortable");
                newTh.setAttribute("onclick", `table.Sort("${name}", "id", false)`);
                newTh.innerHTML = table.word[elem];
                newTh.appendChild(document.createElement("br"));
                const newSpan = document.createElement("span");
                newSpan.classList.add("sort-text");
                newSpan.innerHTML = "ソートリセット";
                newTh.appendChild(newSpan);
            } else if(_.includes(table.sortable, elem)) {
                newTh.classList.add("sortable");
                newTh.setAttribute("onclick", `table.Sort("${name}", "${isType && elem === "value" ? _stat : elem}")`);
                const newSpan = document.createElement("span");
                newSpan.classList.add("sort-text");
                newSpan.innerHTML = table.word[elem];
                newTh.appendChild(newSpan);
            } else
                newTh.innerHTML = table.word[elem];
            newTr.appendChild(newTh);
        });
        newThead.appendChild(newTr);
        newTable.appendChild(newThead);
        
        const newTbody = document.createElement("tbody");
        _.forEach(table.list[name].picked, debuffer => {
            newTr = document.createElement("tr");
            _.forEach([ "rarity", "AW", "skill" ], colName => {
                const className = `${colName}-${colName in debuffer ? debuffer[colName] : "空欄"}`;
                newTr.classList.add(className);
            });
            if("AW" in debuffer) newTr.classList.add(`AW-${table.AW_rep[debuffer.AW]}`);
            
            _.forEach(table.before, elem => {
                const newTd = document.createElement("td");
                newTd.classList.add(`column-${elem}`);
                if(elem in debuffer)
                    newTd.innerHTML = Array.isArray(debuffer[elem]) ? debuffer[elem].join("<br>") : debuffer[elem];
                newTr.appendChild(newTd);
            });
            const showType = [];
            if(isType) {
                // value
                let newTd = document.createElement("td");
                newTd.classList.add("cell-filled");
                newTd.innerHTML = Array.isArray(debuffer.stats[_stat].value)
                    ? debuffer.stats[_stat].value.join("<br>")
                    : debuffer.stats[_stat].value;
                newTr.appendChild(newTd);
            } else {
                _.forEach(table.stats, elem => {
                    const newTd = document.createElement("td");
                    newTd.classList.add(`column-${elem}`);
                    if(elem in debuffer.stats) {
                        newTr.classList.add(`stats-${elem}`);
                        newTd.classList.add("cell-filled");
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
                newTd.classList.add("column-atkAttr");
                if("atkAttr" in debuffer) {
                    if(debuffer.atkAttr[0] !== "?") newTd.className = `cell-atkAttr_${table.eng[debuffer.atkAttr]}`;
                    newTd.innerHTML = Array.isArray(debuffer.atkAttr) ? debuffer.atkAttr.join("<br>") : debuffer.atkAttr;
                } else
                    newTr.classList.add("atkAttr-空欄");
                newTr.appendChild(newTd);
                // dur
                newTd = document.createElement("td");
                newTd.classList.add("column-dur");
                if("dur" in debuffer) {
                    newTd.innerHTML = Array.isArray(debuffer.dur) ? debuffer.dur.join("<br>") : debuffer.dur;
                } else
                    newTr.classList.add("dur-空欄");
                newTr.appendChild(newTd);
            }
            
            // target
            let newTd = document.createElement("td");
            newTd.classList.add("column-target");
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
            } else
                newTr.classList.add("target-空欄");
            newTr.appendChild(newTd);
            
            newTd = document.createElement("td");
            //newTd.classList.add("column-note");
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
table.ApplyFilter = (_filterType = null, _judgeDisplay = true) => {
    const style = document.getElementById("created-style");
    switch(_filterType) {
        case null:
            _.forEach(table.filter, (obj, filterType) => table.ApplyFilter(filterType, false));
            break;
        case "debuffType":
            _.forEach(table.filter.debuffType, (bool, type) => {
                const tableArea = document.getElementById(`table-area_${type}`);
                if(bool) tableArea.classList.remove("is-unshown");
                else tableArea.classList.add("is-unshown");
            });
            break;
        case "stats":
            _.forEach(table.filter.stats, (bool, stat) => {
                if(stat === "value" || stat === "forceMode") return;
                const rule1 = _.find(style.sheet.cssRules, rule => rule.selectorText === `#tables .stats-${stat}`);
                if(stat === "other") {
                    if(bool) rule1.style.removeProperty("display");
                    return;
                }
                const rule2 = _.filter(style.sheet.cssRules, rule => _.includes(rule.selectorText, `.column-${stat}`));
                if(bool) rule1.style.removeProperty("display");
                else if(table.filter.stats.forceMode) {
                    _.forEach(rule2, rule => rule.style.setProperty("display", "none", "important"));
                    return;
                }
                _.forEach(rule2, rule => rule.style.removeProperty("display"));
                
                const tableArea = document.getElementById(`table-area_${stat}`);
                if(!tableArea) return;
                if(bool) tableArea.classList.remove("is-unshown");
                else tableArea.classList.add("is-unshown");
            });
            break;
        default:
            _.forEach(table.filter[_filterType], (bool, key) => {
                const rule = _.find(style.sheet.cssRules, rule => rule.selectorText === `#tables .${_filterType}-${key}`);
                if(bool) rule.style.removeProperty("display");
                else rule.style.setProperty("display", "none", "important");
            });
    }
    
    if(_judgeDisplay) {
        _.forEach(table.debuffType.common, type => {
            if(table.filter.debuffType[type]) table.Display(type)
        });
        switch(table.mixture) {
            case "domain":
                _.forEach(table.debuffType.domain, type => { table.Display(type) });
                break;
            case "type":
                _.forEach(table.debuffType.type, (statObj, stat) => {
                    if(!statObj.list.length) return;
                    const isEmpty = _.reduce(statObj.list, (isEmpty, type) =>
                        table.Display(`${stat}-${type}`, true) && isEmpty
                    , true);
                    const tableArea = document.getElementById(`table-area_${stat}`);
                    if(isEmpty) {
                        _.forEach(tableArea.children, (child, i) => {
                            if(i) child.classList.add("is-unshown");
                            else child.classList.add("table-empty");
                        });
                    } else {
                        _.forEach(tableArea.children, (child, i) => {
                            if(i) child.classList.remove("is-unshown");
                            else child.classList.remove("table-empty");
                        });
                    }
                });
                break;
        }
        
    }
}

// 表・行・列の表示/非表示
table.Display = (_name, _isType = false) => {
    const tableArea = document.getElementById(`table-area_${_name}`);
    const tableName = `table_${_name}`;
    const debuffTable = document.getElementById(tableName);
    const trs = debuffTable.querySelectorAll("tbody tr");
    const isNotForceMode = !table.filter.stats.forceMode;
    const isEmpty = {};
    if(_isType) {
        _.forEach([ "table", ...table.hidable ], elem => isEmpty[elem] = true);
        _.forEach(trs, tr => {
            if(document.defaultView.getComputedStyle(tr).display === "none") return;
            _.forEach(table.hidable, colName => {
                if(!tr.classList.contains(`${colName}-空欄`)) isEmpty[colName] = false;
            });
            isEmpty.table = false;
        });
    } else {
        _.forEach([ "table", ...table.hidable, ...table.stats ], elem => isEmpty[elem] = true);
        _.forEach(trs, tr => {
            tr.classList.remove("is-unshown");
            if(document.defaultView.getComputedStyle(tr).display === "none") return;
            _.forEach(table.hidable, colName => {
                if(!tr.classList.contains(`${colName}-空欄`)) isEmpty[colName] = false;
            });
            let isEmpty_tr = true;
            const classList = _.filter(tr.classList, className => _.includes(className, "stats"));
            const isEmpty_sub = _.reduce(_.map(classList, className => className.split("-")[1]), (result, stat) => {
                const isNotOther = stat !== "other";
                if(table.filter.stats[stat]) {
                    isEmpty_tr = false;
                    if(isNotOther) isEmpty[stat] = false;
                } else if(isNotForceMode && isNotOther) result.push(stat);
                return result;
            }, []);
            if(isEmpty_tr) tr.classList.add("is-unshown");
            else {
                tr.classList.remove("is-unshown");
                isEmpty.table = false;
                _.forEach(isEmpty_sub, stat => { isEmpty[stat] = false; });
            }
        });
    }
    if(isEmpty.table) {
        tableArea.children[0].classList.add("table-empty");
        tableArea.children[1].classList.add("is-unshown");
        if(_isType) tableArea.classList.remove("inline-block");
    } else {
        tableArea.children[0].classList.remove("table-empty");
        tableArea.children[1].classList.remove("is-unshown");
        const style = document.getElementById("created-style");
        if(_isType) {
            tableArea.classList.add("inline-block");
            _.forEach(table.hidable, colName => {
                const rule = _.find(style.sheet.cssRules, rule => rule.selectorText === `#${tableName} .column-${colName}`);
                if(isEmpty[colName]) rule.style.setProperty("display", "none", "important");
                else rule.style.removeProperty("display");
            });
        } else {
            _.forEach([ ...table.hidable, ...table.stats ], colName => {
                const rule = _.find(style.sheet.cssRules, rule => rule.selectorText === `#${tableName} .column-${colName}`);
                if(!rule) console.log(_name)
                if(isEmpty[colName]) rule.style.setProperty("display", "none", "important");
                else rule.style.removeProperty("display");
            });
        }
    }
    return isEmpty.table;
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
            const trs_filled = _.takeWhile(trs_array, tr => tr.classList.contains(`stats-${_colName}`));
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
                if(_.includes(text_a, "?")) return 1;
                if(_.includes(text_b, "?")) return -1;
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
    
    const tbody = debuffTable.getElementsByTagName("tbody")[0];
    _.forEach(trs_array, tr => tbody.appendChild(tr));
}