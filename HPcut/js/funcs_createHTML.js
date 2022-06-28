funcs.createHTML = {};

//次の要素を活性化/非活性化
funcs.createHTML.ToggleActive = thisElem => {
    if(thisElem.checked) {
        thisElem.nextElementSibling.classList.remove("inactive");
    } else {
        thisElem.nextElementSibling.classList.add("inactive");
    }
}

//オプション(checkbox)生成
funcs.createHTML.Opt_checkbox = option => {
    if(!(option in lists.buff) || option === "rCTdepType") return;
    
    let txt = "";
    lists.buff[option].list.forEach(elem => {
        let txt_comp = "";
        if("compound" in elem) {
            elem.compound.forEach(comp => {
                txt_comp += `document.querySelector('#${comp}-${_.find(lists.buff[comp].list, { buffer: elem.buffer, awaken: elem.awaken }).id} input').checked=this.checked; `;
            });
        }
        txt += `
            <div id="${option}-${elem.id}" class="box">
                <label class="tooltip-ts" data-tippy-content="${elem.tooltip}">
                    <input type="checkbox" value="{ buffer: '${elem.buffer}', awaken: '${elem.awaken}' }" onchange="${txt_comp}funcs.graph.SetGraphData(lists.buff.${option}.updateTable)"${elem.disabled ? " disabled" : ""}>
                    ${elem.buffer}${elem.showAwaken ? `(${elem.awaken})` : ""}
                </label>
            </div>
        `
    });
    document.getElementById(option).innerHTML = txt;
}

//オプション(再動短縮(配置型別))生成
funcs.createHTML.Opt_rCTdepType = () => {
    let txt = "";
    lists.buff.rCTdepType.list.forEach(elem => {
        txt += `
            <div id="rCTdepType-${elem.id}" class="box">
                ${elem.deployType}
                <select onchange="lists.buff.rCTdepType.list[${elem.id}].rate=Number(this.value); funcs.graph.SetGraphData(lists.buff.rCTdepType.updateTable)">
                    <option value="0">0</option>
                    <option value="25">25</option>
                    <option value="30">30</option>
                    <option value="35">35</option>
                    ${elem.deployType !== "遠近距離型" ? `<option value="45">45</option>` : ""}
                    <option value="50">50</option>
                    <option value="60">60</option>
                </select>%
            </div>
        `
    });
    document.getElementById("rCTdepType").innerHTML = txt;
}

//オプション(数値入力)生成
funcs.createHTML.Opt_number = option => {
    if(!(option in num)) return;
    
    const hasUse = "use" in num[option];
    const hasMin = "min" in num[option];
    const updateTable = "updateTable" in num[option] ? `[${num[option].updateTable}]` : "";
    
    let txt = `
        <div id="input_${option}" class="box">`;
    if(hasUse) {
        txt += `
            <input type="checkbox" onchange="funcs.createHTML.ToggleActive(this); num.${option}.use=this.checked; funcs.graph.SetGraphData(${updateTable})">
            <span class="inactive">`;
    }
    txt += `
        <label`;
    if(hasMin) {
        txt += ` class="tooltip-ts" data-tippy-content="${num[option].min.toLocaleString()}～${num[option].max.toLocaleString()}${num[option].txt[0]}"`;
    } else if(num[option].txt[0] !== "") {
        txt += ` class="tooltip-ts" data-tippy-content="${num[option].txt[0]}"`;
    }
    txt += `>
            ${num[option].txt[1]}<input type="number" class="${num[option].cl}" value="${num[option].value}" onchange="`;
    if(hasMin) {
        txt += `funcs.LimitNum_${num[option].type}(this, num.${option}.min, num.${option}.max); `;
    } else {
        txt += `funcs.LimitNum_float(this); `
    }
    txt += `num.${option}.value=Number(this.value); funcs.graph.SetGraphData(${updateTable})">${num[option].txt[2]}
        </label>`;
    if(hasUse) {
        txt += `
            </span>`;
    }
    txt += `
        </div>
    `;
    document.getElementById(option).innerHTML = txt;
}

//テーブル生成
funcs.createHTML.UnitsTable = type => {
    if(!(type in lists.units)) return;
    
    const updateTable = [ "onSkillAct", "onHit" ].map(ty => ty === type);
    
    let txt = "";
    const txt_toList = `lists.units.${type}.list`;
    lists.units[type].list.forEach(unit => {
        const index_skillAW = [ "通常", "覚醒" ].indexOf(unit.skill.awaken.selected);
        
        const unitClass = unit.unitInfo.unitClass;
        let txt_class = "";
        if(unitClass.selectable) {
            txt_class = `
                <select onchange="${txt_toList}[${unit.id}].unitInfo.unitClass.selected=this.value; funcs.graph.SetGraphData([${updateTable}])">`;
            unitClass.options.forEach(cl => {
                txt_class += `
                    <option value="${cl}"${unitClass.selected === cl ? " selected" : ""}>${cl}</option>`;
            });
            txt_class += `
                </select>
            `;
        } else {
            txt_class = unitClass.selected;
        }
        
        const aff = unit.unitInfo.affection;
        let txt_aff = "";
        if(_.isEmpty(aff.bonus)) {
            txt_aff = "不明";
        } else if(aff.bonus !== "その他") {
            txt_aff = `
                ${aff.bonus} ${aff.changeRate}%<br>
                好感度
                <select onchange="${txt_toList}[${unit.id}].unitInfo.affection.percentage=Number(this.value); funcs.graph.SetGraphData([${updateTable}])">`;
            for(let p = 100; p <= 150; p +=10) {
                txt_aff += `
                    <option value="${p}"${aff.percentage === p ? " selected" : ""}>${p}</option>`;
            }
            txt_aff += `
                </select>%
            `;
        }
        
        const awaken = unit.skill.awaken;
        let txt_awaken = "";
        if(awaken.selectable) {
            txt_awaken = `
                <select onchange="${txt_toList}[${unit.id}].skill.awaken.selected=this.value; funcs.graph.SetGraphData([${updateTable}])">`;
            awaken.options.forEach(aw => {
                txt_awaken += `
                    <option value="${aw}"${awaken.selected === aw ? " selected" : ""}>${aw}</option>`;
            });
            txt_awaken += `
                </select>
            `;
        } else {
            txt_awaken = awaken.selected;
        }
        
        const dmgMul = unit.skill.dmgMul;
        let txt_dmgMul = "";
        if(dmgMul.options[index_skillAW] !== "-") {
            txt_dmgMul = `
                <select
                    class="tooltip-t"
                    data-tippy-content="${dmgMul.target[index_skillAW]}に${dmgMul.mul[index_skillAW]}倍"
                    onchange="${txt_toList}[${unit.id}].skill.dmgMul.options[${index_skillAW}]=this.value; funcs.graph.SetGraphData([${updateTable}])"
                >
                    <option value="あり"${dmgMul.options[index_skillAW] === "あり" ? " selected" : ""}>あり</option>
                    <option value="なし"${dmgMul.options[index_skillAW] === "なし" ? " selected" : ""}>なし</option>
                </select>
            `;
        }
        
        const txt_w = [
            `${unit.skill.firstTime.toFixed(2)}秒`,
            `${unit.skill.interval.toFixed(2)}秒`
        ];
        if(type === "onHit") {
            for(let i = 0; i < 2; ++i) {
                if(unit.unitInfo.atkInterval[i].startup !== null) {
                    const atkMotion = Math.floor((unit.unitInfo.atkInterval[i].startup + unit.unitInfo.atkInterval[i].remain - 1) / 2);
                    const atkCooldown = Math.floor((unit.unitInfo.atkInterval[i].cooldown - 1) / 2);
                    txt_w[i] = `${atkMotion + atkCooldown + 2}f`;
                } else {
                    txt_w[i] = "-";
                }
            }
        }
        
        txt += `
            <tr id="unit_${type}-${unit.id}" class="unitsBody">
                <td>${unit.unitInfo.unitName}</td>
                <td>${unit.unitInfo.attribution.join("<br>")}</td>
                <td>${unit.unitInfo.note.join("<br>")}</td>
                <td>${unit.unitInfo.deployType}</td>
                <td>${unit.unitInfo.rarity}</td>
                <td>${txt_class}</td>
                <td>${txt_aff}</td>
                <td>${txt_awaken}</td>
                <td>${unit.skill.target[index_skillAW]}</td>
                <td>${txt_w[0]}</td>
                <td>${txt_w[1]}</td>
                <td>${unit.skill.HPred[index_skillAW]}%</td>
                <td>${txt_dmgMul}</td>
                ${unit.added ?
                    `<td>
                        <button type="button" class="delUnitBtn" onclick="funcs.unitsData.DeleteUnit('${type}', ${unit.id})">削除</button>
                    </td>
                    `
                    : ""
                }</tr>`;
    });
    txt += `
        <tr>
            <td colspan="13">
                <button type="button" class="unitAddBtn" onclick="funcs.createHTML.modal.Create('${type}')">追加</button>
            </td>
        </tr>
    `;
    document.getElementById(`table_${type}`).innerHTML = txt;
}

//グラフライン表示/非表示ボタン生成
funcs.createHTML.GraphlineDispBtn = type => {
    if(!(type in lists.units)) return;
    
    let txt = `
        <div class="optcap10em">
            <span class="tooltip-t" data-tippy-content="${lists.units[type].list[0].unitInfo.unitName}～${lists.units[type].list.slice(-1)[0].unitInfo.unitName}">
                ${type === "onSkillAct" ? "スキル発動" : "攻撃ヒット"}時発生型：
            </span>
        </div>
        <div class="optset">
            <div class="wrap_checkbox">
                <label>
                    <input type="checkbox" onclick="funcs.graph.HideGraphline(this, '${type}')">
                    <span>全部表示</span>
                </label>
            </div>
        </div>
    `;
    document.getElementById(`graphline_${type}`).innerHTML = txt;
}

//更新履歴生成
funcs.createHTML.UpdateHistory = () => {
    let txt = "";
    updateHistory.forEach(history => {
        txt += `
            <div class="updateElem">
                <div class="date">
                    ${history.date}：
                </div>
                <div class="detail">
                    ${history.detail.map(elem => "・" + elem).join("<br>")}
                </div>
            </div>
        `
    });
    document.getElementById("updateHistory").innerHTML = txt;
}