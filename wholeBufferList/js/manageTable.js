const table = {};

table.word = {
    team: "編成", own: "所持", perm: "永続", dep_gl: "全体配置", dep_area: "範囲配置"
    , skill_area: "範囲スキル", skill_gl: "全体スキル", skill_cat: "属性スキル"
    , add: "加算", unique: "その他"
    
    , id: "id", name: "ユニット", rarity: "レア", cl: "クラス", AW: "覚醒等", skill: "スキル"
    
    , hp: "HP", atk: "攻撃力", def: "防御力", mr: "魔法<br>耐性", range: "射程", cost: "コスト"
    , wt: "スキル<br>初動", ct: "スキル<br>再動", dur: "スキル<br>持続", atkCd: "攻撃<br>硬直"
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
table.AW = [ "CC前", "CC後", "CC55", "覚醒前", "覚醒後", "覚1", "覚2a", "覚2b" ];
table.AW_rep = Object.assign(..._.map(table.AW, (key, i) => {
    if(i <= table.AW.indexOf("覚醒前")) return { [key]: "覚醒前" }
    else return { [key]: "覚醒後" }
}));
table.buffType = [
    "team", "own", "perm", "dep_gl", "dep_area"
    , "skill_area", "skill_gl", "skill_cat", "add", "unique"
];
table.stats = [
    "hp", "atk", "def", "mr", "range", "cost", "wt", "ct", "dur", "atkCd"
    , "rege", "poison", "abn", "eva", "nul", "draw", "redep"
];
table.before = [ "id", "name", "rarity", "AW", "skill" ];
table.after = [ "target", "note" ];


// フィルタ設定生成
table.CreateFilter = () => {
    // 全タイプに亘って空なオプションを探し、消す
    table.empty = {};
    options = [ "rarity", "AW", "stats" ];
    _.forEach(options, opt =>
        table.empty[opt] = Object.assign(..._.map(table[opt], key => ({ [key]: true })))
    );
    _.forEachRight(table.buffType, (type, i) => {
        if(!(type in buff)) {
            table.buffType.splice(i, 1);
            return;
        }
        _.forEach(buff[type].list, buffer => {
            if("rarity" in buffer)
                table.empty.rarity[buffer.rarity] = false;
            else
                table.empty.rarity["空欄"] = false;
                
            if("AW" in buffer)
                table.empty.AW[buffer.AW] = false;
            
            _.forEach(buffer.stats, (_, stat) => {
                if(stat in table.empty.stats) table.empty.stats[stat] = false;
            });
        });
    });
    _.forEach(table.empty, (optObj, opt) => {
        _.forEach(optObj, (isEmpty, elem) => {
            if(isEmpty) table[opt].splice(table[opt].indexOf(elem), 1);
        });
    });
    table.column = [];
    table.column.push(...table.before);
    table.column.push(...table.stats);
    table.column.push(...table.after);
    table.sortable = [ "id", "rarity", ...table.stats ];
    
    // フィルタ設定保存用
    table.filter = {};
    table.filter.rarity = Object.assign(..._.map(table.rarity, key => ({ [key]: true })));
    table.filter.AW = { "覚醒前": false, "覚醒後": true };
    table.filter.buffType = Object.assign(..._.map(table.buffType, key => ({ [key]: true })));
    table.filter.stats = Object.assign(..._.map(table.stats, key => ({ [key]: true })));
    table.filter.stats.forceMode = false;
    table.filter.stats.other = true;
    
    // html
    const CreateButtons = (element) => {
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
    filterCont.id = "filter-content"
    filterCont.innerHTML = `
        <span style="font-size: 18px;">
            フィルタ設定
        </span>
    `;
    CreateButtons(filterCont);
    
    let newFliterArea, newTitleArea, newTitle, newCheckboxArea, newLabel, newBr;
    
    // rarity
    newFliterArea = document.createElement("div");
    newFliterArea.className = "filter-area";
    newTitleArea = document.createElement("div");
    newTitleArea.className = "filter-title-area";
    newTitle = document.createElement("span");
    newTitle.className = "filter-title";
    newTitle.innerHTML = "レアリティ";
    newTitleArea.appendChild(newTitle);
    newFliterArea.appendChild(newTitleArea);
    newCheckboxArea = document.createElement("div");
    newCheckboxArea.id = "filter_rarity";
    newCheckboxArea.className = "filter-checkbox-area";
    CreateButtons(newCheckboxArea);
    newBr = document.createElement("br");
    newCheckboxArea.appendChild(newBr);
    _.forEach(table.rarity, elem => {
        newLabel = document.createElement("label");
        newLabel.innerHTML = `
            <input
                type="checkbox"
                value="${elem}"
                checked
                onchange="table.filter.rarity['${elem}']=this.checked; table.ApplyFilter()"
            >
            ${elem}
        `;
        newCheckboxArea.appendChild(newLabel);
    });
    newFliterArea.appendChild(newCheckboxArea);
    filterCont.appendChild(newFliterArea);
    
    // AW
    newFliterArea = document.createElement("div");
    newFliterArea.className = "filter-area";
    newTitleArea = document.createElement("div");
    newTitleArea.className = "filter-title-area";
    newTitle = document.createElement("span");
    newTitle.className = "filter-title";
    newTitle.innerHTML = "覚醒";
    newTitleArea.appendChild(newTitle);
    newFliterArea.appendChild(newTitleArea);
    newCheckboxArea = document.createElement("div");
    newCheckboxArea.id = "filter_AW";
    newCheckboxArea.className = "filter-checkbox-area";
    CreateButtons(newCheckboxArea);
    newBr = document.createElement("br");
    newCheckboxArea.appendChild(newBr);
    _.forEach([ "覚醒前", "覚醒後" ], elem => {
        newLabel = document.createElement("label");
        newLabel.innerHTML = `
            <input
                type="checkbox"
                ${elem === "覚醒前" ? "" : `checked
                `}onchange="table.filter.AW['${elem}']=this.checked; table.ApplyFilter()"
            >
            ${elem}
        `;
        newCheckboxArea.appendChild(newLabel);
    });
    newFliterArea.appendChild(newCheckboxArea);
    filterCont.appendChild(newFliterArea);
    
    // buffType
    newFliterArea = document.createElement("div");
    newFliterArea.className = "filter-area";
    newTitleArea = document.createElement("div");
    newTitleArea.className = "filter-title-area";
    newTitle = document.createElement("span");
    newTitle.className = "filter-title";
    newTitle.innerHTML = "区分";
    newTitleArea.appendChild(newTitle);
    newFliterArea.appendChild(newTitleArea);
    newCheckboxArea = document.createElement("div");
    newCheckboxArea.id = "filter_buffType";
    newCheckboxArea.className = "filter-checkbox-area";
    CreateButtons(newCheckboxArea);
    newBr = document.createElement("br");
    newCheckboxArea.appendChild(newBr);
    _.forEach(table.buffType, elem => {
        newLabel = document.createElement("label");
        newLabel.innerHTML = `
            <input
                type="checkbox"
                checked
                onchange="table.filter.buffType.${elem}=this.checked; table.ApplyFilter()"
            >
            ${table.word[elem]}
        `;
        newCheckboxArea.appendChild(newLabel);
    });
    newFliterArea.appendChild(newCheckboxArea);
    filterCont.appendChild(newFliterArea);
    
    // stats
    newFliterArea = document.createElement("div");
    newFliterArea.className = "filter-area";
    newTitleArea = document.createElement("div");
    newTitleArea.className = "filter-title-area";
    newTitle = document.createElement("span");
    newTitle.className = "filter-title tooltip-ts";
    newTitle.setAttribute(
        "data-tippy-content"
        , "チェックしたバフを持つユニットをすべて表示"
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
    _.forEach(table.stats, elem => {
        newLabel = document.createElement("label");
        newLabel.innerHTML = `
            <input
                type="checkbox"
                checked
                onchange="table.filter.stats.${elem}=this.checked; table.ApplyFilter()"
            >
            ${table.word[elem].replace(/<br>/g, "")}
        `;
        newCheckboxArea.appendChild(newLabel);
    });
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
            onchange="table.filter.stats.other=this.checked; table.ApplyFilter()"
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
    if(filterCont.classList.contains("is-shown")) {
        filterCont.classList.remove("is-shown");
        _this.innerHTML = "フィルタ";
    } else {
        filterCont.classList.add("is-shown");
        _this.innerHTML = "閉じる";
    }
}
// フィルタ一括ON/OFF
table.ToggleAllFilter = (_element, _checked) => {
    const labels = _element.getElementsByTagName("label");
    _.forEach(labels, label => {
        if(label.classList.contains("except")) return;
        label.firstElementChild.checked = _checked;
    });
    
    const category = _element.id.substr(_element.id.indexOf("_") + 1);
    if(category in table.filter)
        _.forEach(table.filter[category], (_, key) => {
            if(key !== "forceMode") table.filter[category][key] = _checked;
        });
    else
        _.forEach(table.filter, optObj =>
            _.forEach(optObj, (_, key) => {
                optObj[key] = _checked;
            })
        );
    
    table.ApplyFilter();
}

// テーブル生成
table.CreateTable = () => {
    const tables = document.getElementById("tables");
    tables.innerHTML = "";
    
    _.forEach(table.buffType, type => {
        // 検索条件に合うbufferをpickedに入れる
        buff[type].picked = _.filter(buff[type].list, buffer => true);
        
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
            if(_.includes(table.sortable, elem)) {
                newTh.className = "sortable";
                newTh.setAttribute("onclick", `table.Sort("${type}", "${elem}")`);
            }
            newTh.innerHTML = table.word[elem];
            newTr.appendChild(newTh);
        });
        newThead.appendChild(newTr);
        newTable.appendChild(newThead);
        
        const newTbody = document.createElement("tbody");
        _.forEach(buff[type].picked, buffer => {
            newTr = document.createElement("tr");
            _.forEach(table.before, elem => {
                const newTd = document.createElement("td");
                if(elem in buffer) {
                    newTd.innerHTML = Array.isArray(buffer[elem]) ? buffer[elem].join("<br>") : buffer[elem];
                }
                newTr.appendChild(newTd);
            });
            _.forEach(table.stats, elem => {
                const newTd = document.createElement("td");
                if(elem in buffer.stats) {
                    newTd.className = "cell-filled";
                    newTd.innerHTML = Array.isArray(buffer.stats[elem]) ? buffer.stats[elem].join("<br>") : buffer.stats[elem];
                }
                newTr.appendChild(newTd);
            });
            _.forEach(table.after, elem => {
                const newTd = document.createElement("td");
                if(elem in buffer) {
                    if(elem === "note" && "other" in buffer.stats) newTd.className = "cell-filled";
                    newTd.innerHTML = Array.isArray(buffer[elem]) ? buffer[elem].join("<br>") : buffer[elem];
                }
                newTr.appendChild(newTd);
            });
            newTbody.appendChild(newTr);
        });
        newTable.appendChild(newTbody);
        
        newScroller.appendChild(newTable);
        newTableArea.appendChild(newScroller);
        tables.appendChild(newTableArea);
    });
    
    table.ApplyFilter();
}

// フィルタ適用
table.ApplyFilter = () => {
    _.forEach(table.buffType, type => {
        const tableArea = document.getElementById(`table-area_${type}`);
        if(!table.filter.buffType[type]) {
            tableArea.style.display = "none";
            return;
        }
        tableArea.style.display = "block";
        const buffTable = document.getElementById(`table_${type}`);
        
        // 行の処理
        const trs = buffTable.querySelectorAll("tbody tr");
        const shownRowIndexes = [];
        _.forEach(buff[type].picked, (buffer, i) => {
            if(((!("rarity" in buffer) && table.filter.rarity["空欄"]) || table.filter.rarity[buffer.rarity])
                && (!("AW" in buffer) || table.filter.AW[table.AW_rep[buffer.AW]])
                && _.some(buffer.stats, (_, stat) => table.filter.stats[stat])) {
                trs[i].style.display = "table-row";
                shownRowIndexes.push(i);
            } else
                trs[i].style.display = "none";
        });
        const tableName = tableArea.getElementsByClassName("table-name")[0];
        if(shownRowIndexes.length === 0) {
            buffTable.parentElement.style.display = "none";
            tableName.classList.add("table-empty");
            return;
        } else {
            buffTable.parentElement.style.display = "block";
            tableName.classList.remove("table-empty");
        }
        
        // 列の処理
        const empty = [];
        let colIndex = table.before.indexOf("AW") + 1;
        let ths;
        let tds;
        _.forEach([ "AW", "skill" ], colName => {
            ths = buffTable.querySelectorAll(`th:nth-child(${colIndex})`);
            tds = buffTable.querySelectorAll(`td:nth-child(${colIndex})`);
            if(!ths || !tds) return;
            if(_.every(shownRowIndexes, rowIndex => tds[rowIndex].innerHTML === ""))
                empty.push(colName);
            
            ++colIndex;
        });
        colIndex = table.before.length + 1;
        _.forEach(table.filter.stats, (isShown, stat) => {
            if(stat === "forceMode" || stat === "other") return;
            
            ths = buffTable.querySelectorAll(`th:nth-child(${colIndex})`);
            tds = buffTable.querySelectorAll(`td:nth-child(${colIndex})`);
            if(!ths || !tds) return;
            if(table.filter.stats.forceMode && !isShown) {
                _.forEach(ths, th => th.style.display = "none");
                _.forEach(tds, td => td.style.display = "none");
                empty.push(stat);
            } else {
                _.forEach(ths, th => th.style.display = "table-cell");
                _.forEach(tds, td => td.style.display = "table-cell");
                if(_.every(shownRowIndexes, rowIndex => tds[rowIndex].innerHTML === ""))
                    empty.push(stat);
            }
            ++colIndex;
        });
        colIndex = table.before.length + table.stats.length + 1;
        ths = buffTable.querySelectorAll(`th:nth-child(${colIndex})`);
        tds = buffTable.querySelectorAll(`td:nth-child(${colIndex})`);
        if(!ths || !tds) return;
        if(_.every(shownRowIndexes, rowIndex => tds[rowIndex].innerHTML === ""))
            empty.push("target");
        
        // 空の列を非表示
        _.forEach(empty, colName => {
            colIndex = table.column.indexOf(colName) + 1;
            ths = buffTable.querySelectorAll(`th:nth-child(${colIndex})`);
            tds = buffTable.querySelectorAll(`td:nth-child(${colIndex})`);
            if(!ths || !tds) return;
            _.forEach(ths, th => th.style.display = "none");
            _.forEach(tds, td => td.style.display = "none");
        });
        
        table.Sort(type, "id", false);
    });
}

// ソート
table.Sort = (_buffType, _colName, _allowReverse = true) => {
    const buffTable = document.getElementById(`table_${_buffType}`);
    const trs = buffTable.querySelectorAll("tbody tr");
    const trs_array = Array.from(trs);
    if(_allowReverse && _colName === buff[_buffType].sortedBy) {
        if(_colName === "id" || _colName === "rarity")
            trs_array.reverse();
        else {
            const colIndex = table.column.indexOf(_colName);
            const trs_filled = _.takeWhile(
                trs_array
                , tr => tr.children[colIndex].innerHTML !== ""
            );
            trs_filled.reverse();
            _.forEach(trs_filled, (tr, i) => trs_array[i] = tr);
        }
    } else {
        const colIndex_id = table.column.indexOf("id");
        const colIndex = table.column.indexOf(_colName);
        if(_colName === "id") {
            trs_array.sort((a, b) => 
                Number(a.children[colIndex_id].innerHTML) - Number(b.children[colIndex_id].innerHTML)
            );
        } else if(_colName === "rarity") {
            trs_array.sort((a, b) => {
                const tds_a = a.children;
                const tds_b = b.children;
                const id_a = Number(tds_a[colIndex_id].innerHTML);
                const id_b = Number(tds_b[colIndex_id].innerHTML);
                const rarity_a = tds_a[colIndex].innerHTML;
                const rarity_b = tds_b[colIndex].innerHTML;
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
                const id_a = Number(tds_a[colIndex_id].innerHTML);
                const id_b = Number(tds_b[colIndex_id].innerHTML);
                const text_a = tds_a[colIndex].innerHTML;
                const text_b = tds_b[colIndex].innerHTML;
                if(text_a === text_b) return id_a - id_b;
                if(text_a === "") return 1;
                if(text_b === "") return -1;
                let priority_a = 1;
                let priority_b = 1;
                let value_a;
                let valur_b;
                switch(text_a[0]) {
                    case "×":
                        priority_a = 2;
                        value_a = Number.parseFloat(text_a.substr(1));
                        break;
                    case "*":
                        priority_a = 3;
                        value_a = Number.parseFloat(text_a.substr(1));
                        break;
                    case "m":
                        priority_a = 4;
                        value_a = Number.parseFloat(text_a.substr(3));
                        break;
                    default:
                        if(_.includes(text_a, "%")) priority_a = 0;
                        value_a = Number.parseFloat(text_a);
                }
                switch(text_b[0]) {
                    case "×":
                        priority_b = 2;
                        value_b = Number.parseFloat(text_b.substr(1));
                        break;
                    case "*":
                        priority_b = 3;
                        value_b = Number.parseFloat(text_b.substr(1));
                        break;
                    case "m":
                        priority_b = 4;
                        value_b = Number.parseFloat(text_b.substr(3));
                        break;
                    default:
                        if(_.includes(text_b, "%")) priority_b = 0;
                        value_b = Number.parseFloat(text_b);
                }
                let diff = priority_a - priority_b;
                if(diff !== 0) return diff;
                diff = value_a - value_b;
                if(diff === 0) return id_a - id_b;
                return diff * dir;
            });
        }
        buff[_buffType].sortedBy = _colName;
    }
    
    _.forEach(
        _.map(trs_array, tr => [ tr.style.display, tr.innerHTML ])
        , (html, i) => {
            trs[i].style.display = html[0];
            trs[i].innerHTML = html[1];
        }
    );
}