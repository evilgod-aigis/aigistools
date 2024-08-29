const table = {};

table.word = {
    team: "編成", own: "所持", perm: "永続", dep_gl: "全体配置", dep_area: "範囲配置"
    , skill_area: "範囲スキル", skill_gl: "全体スキル", skill_cat: "属性スキル", cons_cost: "コスト消費"
    , add: "加算", unique: "その他"
    
    , id: "id", name: "ユニット", rarity: "レア", cl: "クラス", AW: "覚醒", skill: "スキル"
    
    , hp: "HP", atk: "攻撃力", def: "防御力", mr: "魔法<br>耐性", range: "射程", cost: "コスト"
    , wt: "スキル<br>初動", ct: "スキル<br>再動", dur: "スキル<br>時間", atkCd: "攻撃<br>硬直"
    , rege: "リジェネ", poison: "毒", abn: "状態<br>異常", eva: "回避<br>付与", nul: "無効化<br>付与"
    , draw: "撤退<br>扱い", redep: "再出撃", target: "対象", note: "備考"
}

table.sortDir = {
    // 昇順
    "1": [ "cost", "wt", "ct", "atkCd", "poison", "abn", "redep" ]
    // 降順
    , "-1": [ "hp", "atk", "def", "mr", "range", "dur", "rege", "eva", "nul" ]
    // なし
    , "0": [ "draw" ]
}

table.rarity = [ "黒", "白", "青", "金", "ちび", "銀", "銅", "鉄", "トークン", "空欄" ];
table.AW = [ "未55", "未", "覚醒", "覚1", "覚2a", "覚2b" ];
table.buffType = [
    "team", "own", "perm", "dep_gl", "dep_area"
    , "skill_area", "skill_gl", "skill_cat", "cons_cost", "add", "unique"
];
table.stats = [
    "hp", "atk", "def", "mr", "range", "cost", "wt", "ct", "dur", "atkCd"
    , "rege", "poison", "abn", "eva", "nul", "draw", "redep"
];
table.before = [ "id", "name", "rarity", "AW", "skill" ];
table.after = [ "target", "note" ];

// 特殊なオブジェクト生成
table.SetObjects = () => {
    // 全タイプに亘って空なオプションを探し、消す
    delete table.empty;
    table.empty = {};
    options = [ "rarity", "AW", "stats" ];
    _.forEach(options, opt => {
        table.empty[opt] = {};
        _.forEach(table[opt], key => table.empty[opt][key] = true);
    });
    _.forEachRight(table.buffType, (type, i) => {
        if(!(type in buff)) {
            table.buffType.splice(i, 1);
            return;
        }
        _.forEach(buff[type], buffer => {
            if("rarity" in buffer)
                table.empty.rarity[buffer.rarity] = false;
            else
                table.empty.rarity["空欄"] = false;
                
            if("AW" in buffer)
                table.empty.AW[buffer.AW] = false;
            
            _.forEach(buffer.stats, (_, stat) => { table.empty.stats[stat] = false; });
        });
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
    table.sortable = [ "id", "rarity", ...table.stats ];
    // 非表示になる可能性のある列(except stats)
    table.hidable = [ "rarity", "AW", "skill" ];
    
    // picked: 検索条件に合うものを入れる
    // sortedBy: 今何でソートされているか
    table.list = {};
    _.forEach(table.buffType, type => table.list[type] = { picked: [], sortedBy: "id" });
    
    // フィルタ設定保存用
    table.filter = {};
    // レアリティ
    table.filter.rarity = {};
    _.forEach(table.rarity, rarity => table.filter.rarity[rarity] = true);
    // 覚醒
    table.filter.AW = { "未": false, "覚醒": true, "空欄": true };
    // バフ区分
    table.filter.buffType = {};
    _.forEach(table.buffType, type => table.filter.buffType[type] = true);
    // バフ種類
    table.filter.stats = {};
    _.forEach(table.stats, stat => table.filter.stats[stat] = true);
    table.filter.stats.forceMode = false;
    table.filter.stats.other = true;
    
    // 覚醒前か後か(フィルタ用)
    table.AW_rep = {};
    _.forEach(table.AW, (AW, i) => table.AW_rep[AW] = i <= table.AW.indexOf("未") ? "未" : "覚醒");
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
        CreateButtons(newCheckboxArea, filterType);
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
    CreateFilterArea("区分", "buffType");
    
    // バフ種類
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
            onchange="table.filter.stats.forceMode=this.checked; table.ApplyFilter('stats')"
        >
    `;
    newCheckboxArea.appendChild(newLabel);
    newCheckboxArea.appendChild(document.createElement("br"));
    CreateButtons(newCheckboxArea, "stats");
    newCheckboxArea.appendChild(document.createElement("br"));
    CreateCheckbox(newCheckboxArea, "stats", [ "forceMode", "other" ]);
    newLabel = document.createElement("label");
    newLabel.className = "tooltip-b";
    newLabel.setAttribute(
        "data-tippy-content"
        , "備考に書かれているバフ"
    );
    newLabel.innerHTML = `
        <input
            type="checkbox"
            checked
            onchange="table.filter.stats.other=this.checked; table.ApplyFilter('stats')"
        >
        その他
    `;
    newCheckboxArea.appendChild(newLabel);
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
    
    table.ApplyFilter(_filterType);
}

// テーブル生成
table.CreateTable = () => {
    const tables = document.getElementById("tables");
    tables.innerHTML = "";
    
    _.forEach(table.buffType, type => {
        // 検索条件に合うbufferをpickedに入れる
        table.list[type].picked = _.filter(buff[type], buffer => target.IsMatch(buffer.target));
        
        const newTableArea = document.createElement("div");
        newTableArea.id = `table-area_${type}`;
        newTableArea.className = "table-area";
        const newTableName = document.createElement("span");
        newTableName.className = "table-name";
        newTableName.innerHTML = `${table.word[type]}バフ`;
        newTableArea.appendChild(newTableName);
        const newScroller = document.createElement("div");
        newScroller.className = "table-scroll";
        const newTable = document.createElement("table");
        newTable.id = `table_${type}`;
        const newThead = document.createElement("thead");
        let newTr = document.createElement("tr");
        _.forEach(table.column, elem => {
            const newTh = document.createElement("th");
            newTh.classList.add(`column-${elem}`);
            if(elem === "name") {
                newTh.classList.add("sortable");
                newTh.setAttribute("onclick", `table.Sort("${type}", "id", false)`);
                newTh.innerHTML = table.word[elem];
                newTh.appendChild(document.createElement("br"));
                const newSpan = document.createElement("span");
                newSpan.classList.add("sort-text");
                newSpan.innerHTML = "ソートリセット";
                newTh.appendChild(newSpan);
            } else if(_.includes(table.sortable, elem)) {
                newTh.classList.add("sortable");
                newTh.setAttribute("onclick", `table.Sort("${type}", "${elem}")`);
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
        _.forEach(table.list[type].picked, buffer => {
            newTr = document.createElement("tr");
            _.forEach([ "rarity", "AW", "skill" ], colName => {
                const className = `${colName}-${colName in buffer ? buffer[colName] : "空欄"}`;
                newTr.classList.add(className);
            });
            if("AW" in buffer) newTr.classList.add(`AW-${table.AW_rep[buffer.AW]}`);
            
            _.forEach(table.before, elem => {
                const newTd = document.createElement("td");
                newTd.classList.add(`column-${elem}`);
                if(elem in buffer)
                    newTd.innerHTML = Array.isArray(buffer[elem]) ? buffer[elem].join("<br>") : buffer[elem];
                newTr.appendChild(newTd);
            });
            _.forEach(table.stats, elem => {
                const newTd = document.createElement("td");
                newTd.classList.add(`column-${elem}`);
                if(elem in buffer.stats) {
                    newTr.classList.add(`stats-${elem}`);
                    newTd.classList.add("cell-filled");
                    if(Array.isArray(buffer.stats[elem]))
                        newTd.innerHTML = buffer.stats[elem].join("<br>");
                    else if(buffer.stats[elem][0] === "m" && buffer.stats[elem].length === 6)
                        newTd.innerHTML = `max<span style="margin-left: 0.5em;">${buffer.stats[elem].substring(3)}</span>`;
                    else
                        newTd.innerHTML = buffer.stats[elem];
                }
                newTr.appendChild(newTd);
            });
            let newTd = document.createElement("td");
            //newTd.classList.add("column-target");
            if("target" in buffer) {
                let textArr = [];
                if(Array.isArray(buffer.target)) {
                    _.forEach(buffer.target, and => {
                        let textArrSub = [ "" ];
                        _.forEach(and, (arr, cat) => {
                            _.forEach(textArrSub, (text, i) =>
                                textArrSub[i] = _.map(arr, target => `${text}${text !== "" ? "&" : ""}${target}${cat === "cl" ? "系" : ""}`)
                            );
                            textArrSub = _.flatten(textArrSub);
                        });
                        textArr.push(...textArrSub);
                    });
                } else {
                    textArr.push("");
                    _.forEach(buffer.target, (arr, cat) => {
                        _.forEach(textArr, (text, i) =>
                            textArr[i] = _.map(arr, target => `${text}${text !== "" ? "&" : ""}${target}${cat === "cl" ? "系" : ""}`)
                        );
                        textArr = _.flatten(textArr);
                    });
                }
                newTd.innerHTML = `
                    <span class="inline-block">${textArr.join(`、</span><span class="inline-block">`)}</span>
                `;
            }
            newTr.appendChild(newTd);
            
            newTd = document.createElement("td");
            //newTd.classList.add("column-note");
            if("note" in buffer) {
                if("other" in buffer.stats) {
                    newTr.classList.add("stats-other");
                    newTd.classList.add("cell-filled");
                }
                newTd.innerHTML = Array.isArray(buffer.note) ? buffer.note.join("<br>") : buffer.note;
            }
            newTr.appendChild(newTd);
            newTbody.appendChild(newTr);
        });
        newTable.appendChild(newTbody);
        newScroller.appendChild(newTable);
        newTableArea.appendChild(newScroller);
        tables.appendChild(newTableArea);
    });
    
    // 設定用にスタイル生成
    if(!document.getElementById("created-style")) {
        newStyle = document.createElement("style");
        newStyle.id = "created-style";
        document.getElementsByTagName('head')[0].appendChild(newStyle);
        const sheet = newStyle.sheet;
        // 行
        _.forEach(table.filter, (obj, filterType) => {
            if(filterType !== "buffType" || filterType !== "stats")
                _.forEach(obj, (bool, key) => sheet.insertRule(`#tables .${filterType}-${key} {}`, sheet.cssRules.length));
        });
        // 列
        _.forEach(table.buffType, type =>
            _.forEach([ ...table.hidable, ...table.stats ], colName => sheet.insertRule(`#table_${type} .column-${colName} {}`, sheet.cssRules.length))
        );
    }
    
    table.ApplyFilter();
}

// フィルタ適用
table.ApplyFilter = (_filterType = null, _judgeDisplay = true) => {
    const style = document.getElementById("created-style");
    switch(_filterType) {
        case null:
            _.forEach(table.filter, (obj, filterType) => table.ApplyFilter(filterType, false));
            break;
        case "buffType":
            _.forEach(table.filter.buffType, (bool, type) => {
                const tableArea = document.getElementById(`table-area_${type}`);
                if(bool) tableArea.classList.remove("is-unshown");
                else tableArea.classList.add("is-unshown");
            });
            break;
        case "stats":
            _.forEach(table.filter.stats, (bool, stat) => {
                if(stat === "forceMode") return;
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
            });
            break;
        default:
            _.forEach(table.filter[_filterType], (bool, key) => {
                const rule = _.find(style.sheet.cssRules, rule => rule.selectorText === `#tables .${_filterType}-${key}`);
                if(bool) rule.style.removeProperty("display");
                else rule.style.setProperty("display", "none", "important");
            });
    }
    
    if(_judgeDisplay) _.forEach(table.buffType, type => table.Display(type));
}

// 表・行・列の表示/非表示
table.Display = _buffType => {
    if(!table.filter.buffType[_buffType]) return;
    const tableArea = document.getElementById(`table-area_${_buffType}`);
    const tableName = `table_${_buffType}`;
    const buffTable = document.getElementById(tableName);
    const trs = buffTable.querySelectorAll("tbody tr");
    const isUnique = _buffType === "unique";
    let preType = null;
    const isNotForceMode = !table.filter.stats.forceMode;
    const isEmpty = {};
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
            if(isUnique) {
                const td_id = tr.children[0]
                const hasDblLine = td_id.classList.contains("dbl-line");
                const type = buff.unique[td_id.innerText].type;
                if(preType && type !== preType) {
                    if(!hasDblLine) _.forEach(tr.children, td => td.classList.add("dbl-line"));
                } else {
                    if(hasDblLine) _.forEach(tr.children, td => td.classList.remove("dbl-line"));
                }
                preType = type;
            }
        }
    });
    if(isEmpty.table) {
        tableArea.children[0].classList.add("table-empty");
        tableArea.children[1].classList.add("is-unshown");
    } else {
        tableArea.children[0].classList.remove("table-empty");
        tableArea.children[1].classList.remove("is-unshown");
        const style = document.getElementById("created-style");
        _.forEach([ ...table.hidable, ...table.stats ], colName => {
            const rule = _.find(style.sheet.cssRules, rule => rule.selectorText === `#${tableName} .column-${colName}`);
            if(isEmpty[colName]) rule.style.setProperty("display", "none", "important");
            else rule.style.removeProperty("display");
        });
    }
}

// ソート
table.Sort = (_buffType, _colName, _allowReverse = true) => {
    const buffTable = document.getElementById(`table_${_buffType}`);
    const trs = buffTable.querySelectorAll("tbody tr");
    const trs_array = Array.from(trs);
    if(_allowReverse && _colName === table.list[_buffType].sortedBy) {
        if(_colName === "id" || _colName === "rarity")
            trs_array.reverse();
        else {
            const trs_filled = _.takeWhile(trs_array, tr => tr.classList.contains(`stats-${_colName}`));
            trs_filled.reverse();
            _.forEach(trs_filled, (tr, i) => trs_array[i] = tr);
        }
    } else {
        const colIndex_id = table.column.indexOf("id");
        const colIndex = table.column.indexOf(_colName);
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
                if(priority_a === 2) return diff * -1;
                return diff * dir;
            });
        }
        table.list[_buffType].sortedBy = _colName;
    }
    
    const tbody = buffTable.getElementsByTagName("tbody")[0];
    if(_buffType === "unique") {
        let preType = null;
        _.forEach(trs_array, tr => {
            tbody.appendChild(tr);
            if(document.defaultView.getComputedStyle(tr).display === "none") return;
            const td_id = tr.children[0]
            const hasDblLine = td_id.classList.contains("dbl-line");
            const type = buff.unique[td_id.innerText].type;
            if(preType && type !== preType) {
                if(!hasDblLine) _.forEach(tr.children, td => td.classList.add("dbl-line"));
            } else {
                if(hasDblLine) _.forEach(tr.children, td => td.classList.remove("dbl-line"));
            }
            preType = type;
        });
    } else
        _.forEach(trs_array, tr => tbody.appendChild(tr));
}