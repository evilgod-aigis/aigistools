const table = {};

table.word = {
    team: "編成", area: "範囲", global: "全体", noAttr: "属性不問", limAttr: "属性指定"
    , clAttr: "クラス特性", fixed: "固定値", hit: "攻撃命中", scalar: "スカラー"
    
    , id: "id", name: "ユニット", rarity: "レア", cl: "クラス", AW: "覚醒等", skill: "スキル"
    
    , hp: "HP", atk: "攻撃力", def: "防御力", mr: "魔法<br>耐性", atkCd: "攻撃<br>硬直", stop: "停止"
    , attr: "属性", dur: "継続"
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
table.AW_rep = Object.assign(..._.map(table.AW, (key, i) => {
    if(i <= table.AW.indexOf("覚醒前")) return { [key]: "覚醒前" }
    else return { [key]: "覚醒後" }
}));
table.attr = [ "物理", "魔法", "貫通" ];
table.debuffType = {};
table.debuffType.common = [ "team", "hit", "scalar" ];
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
table.list = {};
_.forEach(table.debuffType.common, type => table.list[type] = { picked: [], sortedBy: "id" });
_.forEach(table.debuffType.domain, type => table.list[type] = { picked: [], sortedBy: "id" });
_.forEach(table.debuffType.type, (obj, stat) =>
    _.forEach(obj.list, type =>
        table.list[`${stat}-${type}`] = { picked: [], sortedBy: "id" }
    )
);
table.stats = [ "hp", "atk", "def", "mr", "atkCd", "stop" ];
table.before = [ "id", "name", "rarity", "AW", "skill" ];
table.after = [ "attr", "dur", "target", "note" ];
table.column = [ ...table.before, ...table.stats, ...table.after ];
table.sortable = [ "id", "rarity", ...table.stats, "attr", "dur", "value" ];


// フィルタ設定生成
table.CreateFilter = () => {
    _.forEachRight(table.debuffType.common, (type, i) => {
        if(!(type in debuff)) table.debuffType.common.splice(i, 1);
    })
    // フィルタ設定保存用
    table.filter = {};
    table.filter.rarity = Object.assign(..._.map(table.rarity, key => ({ [key]: true })));
    table.filter.AW = { "覚醒前": false, "覚醒後": true };
    table.filter.debuffType = Object.assign(..._.map(table.debuffType.common, key => ({ [key]: true })));
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
    
    // debuffType
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
    newCheckboxArea.id = "filter_debuffType";
    newCheckboxArea.className = "filter-checkbox-area";
    CreateButtons(newCheckboxArea);
    newBr = document.createElement("br");
    newCheckboxArea.appendChild(newBr);
    _.forEach(table.debuffType.common, elem => {
        newLabel = document.createElement("label");
        newLabel.innerHTML = `
            <input
                type="checkbox"
                checked
                onchange="table.filter.debuffType.${elem}=this.checked; table.ApplyFilter()"
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
    
    _.forEach(table.debuffType.common, type => {
        // 検索条件に合うdebufferをpickedに入れる
        table.list[type].picked = _.filter(debuff[type], debuffer => target.IsMatch(debuffer.target));
        
        const newTableArea = document.createElement("div");
        newTableArea.id = `table-area_${type}`;
        newTableArea.className = "table-area";
        const newTableName = document.createElement("span");
        newTableName.className = "table-name";
        newTableName.innerHTML = `${table.word[type]}デバフ`;
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
        _.forEach(table.list[type].picked, debuffer => {
            newTr = document.createElement("tr");
            _.forEach(table.before, elem => {
                const newTd = document.createElement("td");
                if(elem in debuffer) {
                    newTd.innerHTML = Array.isArray(debuffer[elem]) ? debuffer[elem].join("<br>") : debuffer[elem];
                }
                newTr.appendChild(newTd);
            });
            _.forEach(table.stats, elem => {
                const newTd = document.createElement("td");
                if(elem in debuffer.stats) {
                    newTd.className = "cell-filled";
                    newTd.innerHTML = Array.isArray(debuffer.stats[elem]) ? debuffer.stats[elem].join("<br>") : debuffer.stats[elem];
                }
                newTr.appendChild(newTd);
            });
            
            let newTd = document.createElement("td");
            if("attr" in debuffer) {
                if(debuffer.attr[0] !== "?")
                    newTd.className = `cell-attr_${table.eng[debuffer.attr]}`;
                newTd.innerHTML = Array.isArray(debuffer.attr) ? debuffer.attr.join("<br>") : debuffer.attr;
            }
            newTr.appendChild(newTd);
            
            newTd = document.createElement("td");
            if("dur" in debuffer) {
                newTd.innerHTML = Array.isArray(debuffer.dur) ? debuffer.dur.join("<br>") : debuffer.dur;
            }
            newTr.appendChild(newTd);
            
            newTd = document.createElement("td");
            if("target" in debuffer) {
                let textArr = [];
                if(Array.isArray(debuffer.target)) {
                    _.forEach(debuffer.target, and => {
                        let textArrSub = [ "" ];
                        _.forEach(and, (arr, cat) => {
                            _.forEach(textArrSub, (text, i) =>
                                textArrSub[i] = _.map(
                                    arr
                                    , target => `${text}${text !== "" ? "&" : ""}${target}`
                                )
                            );
                            textArrSub = _.flatten(textArrSub);
                        });
                        textArr.push(...textArrSub);
                    });
                } else {
                    textArr.push("");
                    _.forEach(debuffer.target, (arr, cat) => {
                        _.forEach(textArr, (text, i) => 
                            textArr[i] = _.map(
                                arr
                                , target => `${text}${text !== "" ? "&" : ""}${target}`
                            )
                        );
                        textArr = _.flatten(textArr);
                    });
                }
                newTd.innerHTML = `
                    <span class="inline-block">${textArr.join(`、</span>
                    <span class="inline-block">`)}</span>
                `;
            }
            newTr.appendChild(newTd);
            
            newTd = document.createElement("td");
            if("note" in debuffer) {
                if("other" in debuffer.stats) newTd.className = "cell-filled";
                newTd.innerHTML = Array.isArray(debuffer.note) ? debuffer.note.join("<br>") : debuffer.note;
            }
            newTr.appendChild(newTd);
            newTbody.appendChild(newTr);
        });
        newTable.appendChild(newTbody);
        newScroller.appendChild(newTable);
        newTableArea.appendChild(newScroller);
        tables.appendChild(newTableArea);
    });
    const newMixture = document.createElement("div");
    table.CreateTable_mixture[table.mixture](newMixture);
    
    table.ApplyFilter();
}
table.CreateTable_mixture = {};
// 効果範囲優先
table.CreateTable_mixture.domain = (_div) => {
    // 検索条件に合うdebufferをpickedに入れる
    _.forEach(table.debuffType.domain, type => table.list[type].picked.splice(0));
    _.forEach(debuff.mixture, debuffer => {
        if(!target.IsMatch(debuffer.target)) return;
        table.list[debuffer.domain].picked.push(debuffer);
    });
    _.forEach(table.debuffType.domain, type => {
        const newTableArea = document.createElement("div");
        newTableArea.id = `table-area_${type}`;
        newTableArea.className = "table-area";
        const newTableName = document.createElement("span");
        newTableName.className = "table-name";
        newTableName.innerHTML = `効果範囲：${table.word[type]}`;
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
        _.forEach(table.list[type].picked, debuffer => {
            newTr = document.createElement("tr");
            _.forEach(table.before, elem => {
                const newTd = document.createElement("td");
                if(elem in debuffer) {
                    newTd.innerHTML = Array.isArray(debuffer[elem]) ? debuffer[elem].join("<br>") : debuffer[elem];
                }
                newTr.appendChild(newTd);
            });
            const showType = [];
            _.forEach(table.stats, elem => {
                const newTd = document.createElement("td");
                if(elem in debuffer.stats) {
                    newTd.className = "cell-filled";
                    newTd.innerHTML = Array.isArray(debuffer.stats[elem].value)
                        ? debuffer.stats[elem].value.join("<br>")
                        : debuffer.stats[elem].value;
                    if(debuffer.stats[elem].type !== debuffer.domain)
                        showType.push(elem);
                }
                newTr.appendChild(newTd);
            });
            // attr
            let newTd = document.createElement("td");
            newTr.appendChild(newTd);
            // dur
            newTd = document.createElement("td");
            newTr.appendChild(newTd);
            
            newTd = document.createElement("td");
            if("target" in debuffer) {
                let textArr = [];
                if(Array.isArray(debuffer.target)) {
                    _.forEach(debuffer.target, and => {
                        let textArrSub = [ "" ];
                        _.forEach(and, (arr, cat) => {
                            _.forEach(textArrSub, (text, i) =>
                                textArrSub[i] = _.map(
                                    arr
                                    , target => `${text}${text !== "" ? "&" : ""}${target}`
                                )
                            );
                            textArrSub = _.flatten(textArrSub);
                        });
                        textArr.push(...textArrSub);
                    });
                } else {
                    textArr.push("");
                    _.forEach(debuffer.target, (arr, cat) => {
                        _.forEach(textArr, (text, i) => 
                            textArr[i] = _.map(
                                arr
                                , target => `${text}${text !== "" ? "&" : ""}${target}`
                            )
                        );
                        textArr = _.flatten(textArr);
                    });
                }
                newTd.innerHTML = `
                    <span class="inline-block">${textArr.join(`、</span>
                    <span class="inline-block">`)}</span>
                `;
            }
            newTr.appendChild(newTd);
            
            newTd = document.createElement("td");
            newTd.innerHTML += _.map(showType, stat =>
                `${table.word[stat].replace(/<br>/g, "")}：${table.word[debuffer.stats[stat].type]}`
            ).join("<br>");
            if("note" in debuffer) {
                if(showType.length !== 0) newTd.innerHTML += "<br>";
                if("other" in debuffer.stats) newTd.className = "cell-filled";
                newTd.innerHTML = Array.isArray(debuffer.note) ? debuffer.note.join("<br>") : debuffer.note;
            }
            newTr.appendChild(newTd);
            newTbody.appendChild(newTr);
        });
        newTable.appendChild(newTbody);
        newScroller.appendChild(newTable);
        newTableArea.appendChild(newScroller);
        tables.appendChild(newTableArea);
    });
}
// 区分優先
table.CreateTable_mixture.type = (_div) => {
    // 検索条件に合うdebufferをpickedに入れる
    _.forEach(table.debuffType.type, (obj, stat) =>
        _.forEach(obj.list, type =>
            table.list[`${stat}-${type}`].picked.splice(0)
        )
    );
    _.forEach(debuff.mixture, debuffer => {
        if(!target.IsMatch(debuffer.target)) return;
        _.forEach(debuffer.stats, (obj, stat) => {
            if(!("type" in obj)) return;
            table.list[`${stat}-${obj.type}`].picked.push(debuffer);
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
        
        _.forEach(obj.list, type => {
            const name = `${stat}-${type}`;
            const newTableAreaSub = document.createElement("div");
            newTableAreaSub.id = `table-area_${name}`;
            newTableAreaSub.className = "table-area-sub inline-block";
            const newTableName = document.createElement("span");
            newTableName.className = "table-name";
            newTableName.innerHTML = `区分：${table.word[type]}`;
            newTableAreaSub.appendChild(newTableName);
            const newScroller = document.createElement("div");
            newScroller.className = "table-scroll";
            const newTable = document.createElement("table");
            newTable.id = `table_${name}`;
            const newThead = document.createElement("thead");
            let newTr = document.createElement("tr");
            _.forEach([ ...table.before, "value", "target", "note" ], elem => {
                const newTh = document.createElement("th");
                if(_.includes(table.sortable, elem)) {
                    newTh.className = "sortable";
                    newTh.setAttribute("onclick", `table.Sort("${name}", "${elem === "value" ? stat : elem}")`);
                }
                newTh.innerHTML = table.word[elem];
                newTr.appendChild(newTh);
            });
            newThead.appendChild(newTr);
            newTable.appendChild(newThead);
            
            const newTbody = document.createElement("tbody");
            _.forEach(table.list[`${name}`].picked, debuffer => {
                newTr = document.createElement("tr");
                _.forEach(table.before, elem => {
                    const newTd = document.createElement("td");
                    if(elem in debuffer) {
                        newTd.innerHTML = Array.isArray(debuffer[elem]) ? debuffer[elem].join("<br>") : debuffer[elem];
                    }
                    newTr.appendChild(newTd);
                });
                let newTd = document.createElement("td");
                newTd.className = "cell-filled";
                newTd.innerHTML = Array.isArray(debuffer.stats[stat].value)
                    ? debuffer.stats[stat].value.join("<br>")
                    : debuffer.stats[stat].value;
                newTr.appendChild(newTd);
                
                newTd = document.createElement("td");
                if("target" in debuffer) {
                    let textArr = [];
                    if(Array.isArray(debuffer.target)) {
                        _.forEach(debuffer.target, and => {
                            let textArrSub = [ "" ];
                            _.forEach(and, (arr, cat) => {
                                _.forEach(textArrSub, (text, i) =>
                                    textArrSub[i] = _.map(
                                        arr
                                        , target => `${text}${text !== "" ? "&" : ""}${target}`
                                    )
                                );
                                textArrSub = _.flatten(textArrSub);
                            });
                            textArr.push(...textArrSub);
                        });
                    } else {
                        textArr.push("");
                        _.forEach(debuffer.target, (arr, cat) => {
                            _.forEach(textArr, (text, i) => 
                                textArr[i] = _.map(
                                    arr
                                    , target => `${text}${text !== "" ? "&" : ""}${target}`
                                )
                            );
                            textArr = _.flatten(textArr);
                        });
                    }
                    newTd.innerHTML = `
                        <span class="inline-block">${textArr.join(`、</span>
                        <span class="inline-block">`)}</span>
                    `;
                }
                newTr.appendChild(newTd);
                
                newTd = document.createElement("td");
                const showDomain = (debuffer.domain === "area" && type !== "area")
                    || (debuffer.domain === "global" && type === "area");
                if("note" in debuffer) {
                    if("other" in debuffer.stats) newTd.className = "cell-filled";
                    newTd.innerHTML = Array.isArray(debuffer.note) ? debuffer.note.join("<br>") : debuffer.note;
                    if(showDomain) newTd.innerHTML += "<br>";
                }
                if(showDomain) newTd.innerHTML += table.word[debuffer.domain];
                newTr.appendChild(newTd);
                newTbody.appendChild(newTr);
            });
            newTable.appendChild(newTbody);
            
            newScroller.appendChild(newTable);
            newTableAreaSub.appendChild(newScroller);
            newTableArea.appendChild(newTableAreaSub);
        });
        tables.appendChild(newTableArea);
    });
}

// フィルタ適用
table.ApplyFilter = () => {
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
            tableArea.style.display = "none";
            return;
        }
        tableArea.style.display = "block";
        
        // 行の処理
        const HideRows = (tableArea, tableName) => {
            const debuffTable = tableArea.getElementsByTagName("table")[0];
            const trs = debuffTable.querySelectorAll("tbody tr");
            const shownRowIndexes = [];
            _.forEach(table.list[tableName].picked, (debuffer, i) => {
                if(((!("rarity" in debuffer) && table.filter.rarity["空欄"]) || table.filter.rarity[debuffer.rarity])
                    && (!("AW" in debuffer) || table.filter.AW[table.AW_rep[debuffer.AW]])
                    && _.some(debuffer.stats, (_, stat) => table.filter.stats[stat])) {
                    trs[i].style.display = "table-row";
                    shownRowIndexes.push(i);
                } else
                    trs[i].style.display = "none";
            });
            const tableNameElem = tableArea.getElementsByClassName("table-name")[0];
            if(shownRowIndexes.length === 0) {
                debuffTable.parentElement.style.display = "none";
                tableNameElem.classList.add("table-empty");
            } else {
                debuffTable.parentElement.style.display = "block";
                tableNameElem.classList.remove("table-empty");
            }
            return shownRowIndexes;
        }
        
        const shownRowIndexes = [];
        if(isStat) {
            const tableAreaSubs = tableArea.getElementsByClassName("table-area-sub");
            const colIndex = table.before.length + 2;    // target
            let allNone = true;
            _.forEach(table.debuffType.type[type].list, (statType, i) => {
                const name = `${type}-${statType}`;
                tableAreaSubs[i].classList.remove("is-unshown");
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
                if(_.every(shownRowIndexes, rowIndex => tds[rowIndex].innerHTML === "")) {
                    _.forEach(ths, th => th.style.display = "none");
                    _.forEach(tds, td => td.style.display = "none");
                }
                table.Sort(name, "id", false);
            });
            const tableStat = tableArea.getElementsByClassName("table-stat")[0];
            if(allNone) {
                _.forEach(tableAreaSubs, sub => sub.classList.add("is-unshown"));
                tableStat.classList.add("table-empty");
            } else
                tableStat.classList.remove("table-empty");
            return;
        } else {
            shownRowIndexes.push(...HideRows(tableArea, type));
            if(shownRowIndexes.length === 0) return;
        }
        
        // 列の処理
        const debuffTable = tableArea.getElementsByTagName("table")[0];
        const empty = [];
        let colIndex = table.before.indexOf("AW") + 1;
        let ths;
        let tds;
        _.forEach([ "AW", "skill" ], colName => {
            ths = debuffTable.querySelectorAll(`th:nth-child(${colIndex})`);
            tds = debuffTable.querySelectorAll(`td:nth-child(${colIndex})`);
            if(!ths || !tds) return;
            if(_.every(shownRowIndexes, rowIndex => tds[rowIndex].innerHTML === ""))
                empty.push(colName);
            
            ++colIndex;
        });
        colIndex = table.before.length + 1;
        _.forEach(table.filter.stats, (isShown, stat) => {
            if(stat === "forceMode" || stat === "other") return;
            
            ths = debuffTable.querySelectorAll(`th:nth-child(${colIndex})`);
            tds = debuffTable.querySelectorAll(`td:nth-child(${colIndex})`);
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
        _.forEach(table.after, term => {
            if(term === "note") return;
            ths = debuffTable.querySelectorAll(`th:nth-child(${colIndex})`);
            tds = debuffTable.querySelectorAll(`td:nth-child(${colIndex})`);
            if(!ths || !tds) return;
            if(_.every(shownRowIndexes, rowIndex => tds[rowIndex].innerHTML === ""))
                empty.push(term);
            ++colIndex;
        });
        
        // 空の列を非表示
        _.forEach(empty, colName => {
            colIndex = table.column.indexOf(colName) + 1;
            ths = debuffTable.querySelectorAll(`th:nth-child(${colIndex})`);
            tds = debuffTable.querySelectorAll(`td:nth-child(${colIndex})`);
            if(!ths || !tds) return;
            _.forEach(ths, th => th.style.display = "none");
            _.forEach(tds, td => td.style.display = "none");
        });
        
        table.Sort(type, "id", false);
    });
}

// ソート
table.Sort = (_debuffType, _colName, _allowReverse = true) => {
    const debuffTable = document.getElementById(`table_${_debuffType}`);
    const trs = debuffTable.querySelectorAll("tbody tr");
    const trs_array = Array.from(trs);
    const isSub = table.mixture === "type"
        && !_.includes(table.debuffTable.common, _debuffType)
        && _.includes(table.stats, _colName);
    if(_allowReverse && _colName === table.list[_debuffType].sortedBy) {
        if(_colName === "id"
        || _colName === "rarity"
        || isSub)
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
        const colIndex = isSub ? table.before.length : table.column.indexOf(_colName);
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
        } else if(_colName === "attr") {
            trs_array.sort((a, b) => {
                const tds_a = a.children;
                const tds_b = b.children;
                const id_a = Number(tds_a[colIndex_id].innerHTML);
                const id_b = Number(tds_b[colIndex_id].innerHTML);
                const attr_a = tds_a[colIndex].innerHTML;
                const attr_b = tds_b[colIndex].innerHTML;
                if(attr_a === attr_b) return id_a - id_b;
                if(attr_a === "") return 1;
                if(attr_b === "") return -1;
                return table.attr.indexOf(attr_a) - table.attr.indexOf(attr_b);
            });
        } else if(_colName === "dur") {
            trs_array.sort((a, b) => {
                const tds_a = a.children;
                const tds_b = b.children;
                const id_a = Number(tds_a[colIndex_id].innerHTML);
                const id_b = Number(tds_b[colIndex_id].innerHTML);
                const dur_a = tds_a[colIndex].innerHTML;
                const dur_b = tds_b[colIndex].innerHTML;
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
                if(priority_a === 3) return diff * -1;
                return diff * dir;
            });
        }
        table.list[_debuffType].sortedBy = _colName;
    }
    
    _.forEach(
        _.map(trs_array, tr => [ tr.style.display, tr.innerHTML ])
        , (html, i) => {
            trs[i].style.display = html[0];
            trs[i].innerHTML = html[1];
        }
    );
}
