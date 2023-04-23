funcs.createHTML = {};

// 次の要素を活性化/非活性化
funcs.createHTML.ToggleActive = thisElem => {
    const next = thisElem.nextElementSibling;
    const inputs = next.getElementsByTagName("input");
    if(thisElem.checked) {
        next.classList.remove("inactive");
        _.forEach(inputs, input => { input.disabled = false; });
    } else {
        next.classList.add("inactive");
        _.forEach(inputs, input => { input.disabled = true; });
    }
}

// オプション(checkbox)生成
funcs.createHTML.Opt_checkbox = (list, buffType) => {
    if(!(buffType in lists.buff) || buffType === "rCTdepType" || !list) return;
    
    let txt = "";
    const buffChecked = saveData.data ? saveData.data.buffChecked[buffType] : null;
    _.forEach(list, bufferInfo => {
        let txt_saveInfo = "";
        let txt_checked = "";
        if(buffChecked) {
            if(!(bufferInfo.display in buffChecked)) {
                funcs.saveData.UpdateData("buffChecked", `${buffType}[${bufferInfo.display}]`, false);
            } else if(buffChecked[bufferInfo.display]) txt_checked = "checked";
            txt_saveInfo = `funcs.saveData.UpdateData('buffChecked', '${buffType}[${bufferInfo.display}]', this.checked); `;
        }
        const txt_comp = "compound" in bufferInfo ? `funcs.createHTML.ChangeCompound(this, '${buffType}'); ` : "";
        txt += `
            <div id="${buffType}-${bufferInfo.id}" class="box">
                <label class="tooltip-ts" data-tippy-content="${bufferInfo.tooltip}">
                    <input
                        type="checkbox"
                        value="${bufferInfo.id}"
                        onchange="${txt_saveInfo}${txt_comp}funcs.graph.SetGraphData('${buffType}')"
                        ${txt_checked}
                    >
                    ${bufferInfo.display}
                </label>
            </div>
        `;
    });
    document.getElementById(buffType).innerHTML = txt;
}
// 紐付けされたオプションを変更
funcs.createHTML.ChangeCompound = (thisElem, buffType) => {
    const bufferInfo = _.find(lists.buff[buffType].list, { id: Number(thisElem.value) });
    if(!("compound" in bufferInfo)) return;
    
    const checked = thisElem.checked;
    const checkedToSign = checked - 0.5;
    _.forEach(bufferInfo.compound, (compObj, compType) => {
        if(compType === "rCTdepType") {
            _.forEach(compObj, (value, deployType) => {
                const list = lists.buff.rCTdepType.list;
                if(value <= list[deployType]) return;
                const selector = document.getElementById(`rCTdepType-${deployType}`).getElementsByTagName("select")[0];
                _.find(selector.options, { value: value.toString() }).selected = true;
                list[deployType] = value;
                if(saveData.db) funcs.saveData.UpdateData("rCTdepType", deployType, value);
            });
            return;
        }
        _.forEach(compObj, comp => {
            _.forEach(comp.target, target => {
                const compCheckbox = document.getElementById(`${compType}-${target.bufferInfo.id}`).getElementsByTagName("input")[0];
                if(compCheckbox.disabled) return;
                if(target.when * checkedToSign >= 0) {
                    compCheckbox.checked = checked;
                    if(saveData.db) funcs.saveData.UpdateData("buffChecked", `${compType}[${target.bufferInfo.display}]`, checked);
                }
            });
        });
    });
}

// オプション(再動短縮(配置型別))生成
funcs.createHTML.Opt_rCTdepType = () => {
    let txt = "";
    const values = [ 0, 25, 30, 35, 40, 45, 50, 60 ];
    _.forEach(lists.buff.rCTdepType.list, (value, depType) => {
        const txt_saveInfo = saveData.db ? `funcs.saveData.UpdateData('rCTdepType', '${depType}', this.value); ` : "";
        txt += `
            <div id="rCTdepType-${depType}" class="box">
                ${depType}
                <select onchange="lists.buff.rCTdepType.list['${depType}']=Number(this.value); ${txt_saveInfo}funcs.graph.SetGraphData('rCTdepType')">`;
        _.forEach(values, v => {
            if(depType === "遠近距離型" && v === 45) return;
            txt += `
                <option value='${v}'${v === value ? " selected" : ""}>${v}</option>`
        });
        txt += `
                </select>%
            </div>
        `
    });
    document.getElementById("rCTdepType").innerHTML = txt;
}

// オプション(数値入力)生成
funcs.createHTML.Opt_number = (option, obj) => {
    if(!(option in num)) return;
    
    const hasUse = "use" in obj;
    let hasMin = "min" in obj;
    
    let txt = `
        <div id="input_${option}" class="box">
        ${hasUse
            ? `
            <input
                type="checkbox"
                onchange="
                    funcs.createHTML.ToggleActive(this);
                    num.${option}.use=this.checked;
                    ${saveData.db ? `funcs.saveData.UpdateData('numeral', '${option}.use', this.checked); ` : ""
                    }funcs.graph.SetGraphData('${option}')
                "
                ${obj.use ? "checked" : ""}
            >
            <span class="inactive">`
            : ""
        }
        <label${hasMin
            ? ` class="tooltip-ts" data-tippy-content="${obj.min.toLocaleString()}～${obj.max.toLocaleString()}${obj.txt[0]}"`
            : obj.txt[0] !== ""
            ? ` class="tooltip-ts" data-tippy-content="${obj.txt[0]}"`
            : ""
        }>
            ${obj.txt[1]}
            <input
                type="number"
                class="${obj.cl}"
                value="${obj.value}"
                onchange="
                    ${hasMin
                        ? `funcs.LimitNum_${obj.type}(this, num.${option}.min, num.${option}.max); `
                        : `funcs.LimitNum_float(this); `
                    }num.${option}.value=Number(this.value);
                    ${saveData.db ? `funcs.saveData.UpdateData('numeral', '${option}.value', Number(this.value)); ` : ""
                    }funcs.graph.SetGraphData('${option}')
                "
                ${hasUse ? "disabled" : ""}
            >${obj.txt[2]}
        </label>`;
    
    if("value2" in obj) {
        hasMin = "min2" in obj;
        txt += `
            <label${hasMin
                ? ` class="tooltip-ts" data-tippy-content="${obj.min2.toLocaleString()}～${obj.max2.toLocaleString()}${obj.txt2[0]}"`
                : obj.txt2[0] !== ""
                ? ` class="tooltip-ts" data-tippy-content="${obj.txt2[0]}"`
                : ""
            }>
                ${obj.txt2[1]}
                <input
                    type="number"
                    class="${obj.cl2}"
                    value="${obj.value2}"
                    onchange="
                        ${hasMin
                            ? `funcs.LimitNum_${obj.type2}(this, num.${option}.min2, num.${option}.max2); `
                            : `funcs.LimitNum_float(this); `
                        }num.${option}.value2=Number(this.value);
                        ${saveData.db ? `funcs.saveData.UpdateData('numeral', '${option}.value2', Number(this.value)); ` : ""
                        }funcs.graph.SetGraphData('${option}')
                    "
                    ${hasUse ? "disabled" : ""}
                >${obj.txt2[2]}
            </label>`;
        
    }
    txt += `
            ${hasUse ? "</span>" : ""}
        </div>
    `;
    document.getElementById(option).innerHTML = txt;
}

// テーブル生成
funcs.createHTML.UnitsTable = () => {
    _.forEach([ "onSkillAct", "onHit" ], type => {
        document.getElementById(`table_${type}`).innerHTML = `
            <tr id="addUnitBtnArea_${type}">
                <td colspan="14">
                    <button type="button" class="addUnitBtn" onclick="funcs.createHTML.modal.Create('${type}')">追加</button>
                </td>
            </tr>
        `;
        _.forEach(lists.units[type].list, unit => funcs.createHTML.addUnitToTable(type, unit));
    });
}
// テーブルに追加
funcs.createHTML.addUnitToTable = (type, unit) => {
    if(!(type in lists.units)) return;
    
    funcs.unitsData.CorrectSkill(unit);
    funcs.unitsData.CorrectAtkInterval(unit);
    funcs.unitsData.SetHPred(unit);
    const id = `unit_${type}-${unit.id}`;
    const newTr = document.createElement("tr");
    newTr.id = id;
    newTr.className = "unitsBody";
    
    const canSave = saveData.db && !("added" in unit);
    const txt_toList = `lists.units.${type}.list`;
    const unitIndex = _.findIndex(lists.units[type].list, { id: unit.id });
    const unitName = unit.unitInfo.unitName;
    const unitClass = unit.unitInfo.unitClass;
    let txt_class = "";
    if("options" in unitClass) {
        txt_class = `
            <select
                onchange="
                    ${txt_toList}[${unitIndex}].unitInfo.unitClass.selected=this.value;
                    ${canSave ? `funcs.saveData.UpdateData('units', '${type}[${unitName}].class', this.value); ` : ""
                    }funcs.graph.SetGraphData('${id}')
                "
            >`;
        _.forEach(unitClass.options, cl =>
            txt_class += `
                <option value="${cl}"${unitClass.selected === cl ? " selected" : ""}>${cl}</option>`
        );
        txt_class += `
            </select>
        `;
    } else
        txt_class = unitClass.selected;
    
    const aff = unit.unitInfo.affection;
    let txt_aff = "";
    if(!aff.bonus)
        txt_aff = "不明";
    else if(aff.bonus !== "その他") {
        txt_aff = `
            ${aff.bonus} ${aff.changeRate}%<br>
            好感度
            <select
                onchange="
                    ${txt_toList}[${unitIndex}].unitInfo.affection.percentage=Number(this.value);
                    ${canSave ? `funcs.saveData.UpdateData('units', '${type}[${unitName}].aff', this.value); ` : ""
                    }funcs.graph.SetGraphData('${id}')
                "
            >`;
        for(let p = 100; p <= 150; p +=10) {
            txt_aff += `
                <option value="${p}"${aff.percentage === p ? " selected" : ""}>${p}</option>`;
        }
        txt_aff += `
            </select>%
        `;
    }
    
    const skillAW = unit.skill.selected;
    const skills = unit.skill.detail;
    let txt_skillAW = "";
    if(_.size(skills) > 1) {
        txt_skillAW = `
            <select
                onchange="
                    ${txt_toList}[${unitIndex}].skill.selected=this.value;
                    ${canSave ? `funcs.saveData.UpdateData('units', '${type}[${unitName}].skill', this.value); ` : ""
                    }funcs.graph.SetGraphData('${id}')
                "
            >`;
        _.forEach(skills, (noUse, aw) =>
            txt_skillAW += `
                <option value="${aw}"${aw === skillAW ? " selected" : ""}>${aw}</option>`
        );
        txt_skillAW += `
            </select>
        `;
    } else
        txt_skillAW = skillAW;
    
    const txt_w = funcs.unitsData.GetTimingOrAtkInt(type, unit);
    
    const txt_target = [];
    const txt_HPred = [];
    const txt_dmgMul = [];
    _.forEach(skills[skillAW], (skill, index) => {
        if(!("target" in skill)) return;
        txt_target.push(skill.target);
        txt_HPred.push(`${Number(skill.corr.HPred.toFixed(3))}%`);
        if("dmgMul" in skill) {
            txt_dmgMul.push(`
                <label
                    class="tooltip-t"
                    data-tippy-content="${skill.dmgMul.target ? `${skill.dmgMul.target}に` : ""}${skill.dmgMul.mul}倍"
                    style="white-space: nowrap;"
                >#${index + 1}
                    <input
                        type="checkbox"
                        onchange="
                            ${txt_toList}[${unitIndex}].skill.detail['${skillAW}'][${index}].dmgMul.checked=this.checked;
                            ${canSave ? `funcs.saveData.UpdateData('units', '${type}[${unitName}].dmgMul[${skillAW}][${index}]', this.checked); ` : ""
                            }funcs.graph.SetGraphData('${id}')
                        "
                        ${skill.dmgMul.checked ? "checked" : ""}
                    >
                </label>
            `);
        }
    });
    
    newTr.innerHTML = `
            <td>${unitName}</td>
            <td>${unit.unitInfo.attribution.join("<br>")}</td>
            <td>${unit.unitInfo.note.join("<br>")}</td>
            <td>${unit.unitInfo.deployType}</td>
            <td>${unit.unitInfo.rarity}</td>
            <td>${txt_class}</td>
            <td>${txt_aff}</td>
            <td>${txt_skillAW}</td>
            <td>${txt_target.join("<br>")}</td>
            <td>${txt_w[0]}</td>
            <td>${txt_w[1]}</td>
            <td>${txt_HPred.join("<br>")}</td>
            <td>${txt_dmgMul.join("<br>")}</td>
            <td>
            ${"added" in unit ?
                `<button type="button" class="delUnitBtn" onclick="funcs.unitsData.DeleteUnit('${type}', ${unit.id})">削除</button>`
                : ""
            }
            </td>
        `;
    document.getElementById(`table_${type}`).insertBefore(newTr, document.getElementById(`addUnitBtnArea_${type}`));
}
// テーブル書き換え
funcs.createHTML.EditUnitsTable = (term, type = null, unit = null) => {
    if(type && unit) {
        if(!(type in lists.units)) return;
        const elemID = `unit_${type}-${unit.id}`;
        const tr = document.getElementById(elemID);
        if(!tr) return;
        const skillAW = unit.skill.selected;
        const skillInfo = unit.skill.detail[skillAW];
        switch(term) {
            case "timing":
                funcs.unitsData.CorrectSkill(unit);
                [ tr.children[9].innerText, tr.children[10].innerText ] = funcs.unitsData.GetTimingOrAtkInt(type, unit);
                break;
            case "atkInterval":
                funcs.unitsData.CorrectAtkInterval(unit);
                [ tr.children[9].innerText, tr.children[10].innerText ] = funcs.unitsData.GetTimingOrAtkInt(type, unit);
                break;
            case "HPred":
                funcs.unitsData.SetHPred(unit);
                tr.children[11].innerHTML = _.reduce(skillInfo, (arr, skill) => {
                        if("target" in skill) arr.push(`${Number(skill.corr.HPred.toFixed(3))}%`);
                        return arr;
                    }, []).join("<br>");
                break;
            case null:
                funcs.unitsData.CorrectSkill(unit);
                funcs.unitsData.CorrectAtkInterval(unit);
                funcs.unitsData.SetHPred(unit);
                [ tr.children[9].innerText, tr.children[10].innerText ] = funcs.unitsData.GetTimingOrAtkInt(type, unit);
                const txt_target = [];
                const txt_HPred = [];
                const txt_dmgMul = [];
                const unitIndex = _.findIndex(lists.units[type].list, { id: unit.id });
                _.forEach(skillInfo, (skill, index) => {
                    if(!("target" in skill)) return;
                    txt_target.push(skill.target);
                    txt_HPred.push(`${Number(skill.corr.HPred.toFixed(3))}%`);
                    if("dmgMul" in skill) {
                        txt_dmgMul.push(`
                            <label
                                class="tooltip-t"
                                data-tippy-content="${skill.dmgMul.target ? `${skill.dmgMul.target}に` : ""}${skill.dmgMul.mul}倍"
                                style="white-space: nowrap;"
                            >#${index + 1}
                                <input
                                    type="checkbox"
                                    onchange="
                                        lists.units.${type}.list[${unitIndex}].skill.detail['${skillAW}'][${index}].dmgMul.checked=this.checked;
                                        ${saveData.db && !("added") in unit ? `funcs.saveData.UpdateData('units', '${type}[${unitName}].dmgMul[${skillAW}][${index}]', this.checked); ` : ""
                                        }funcs.graph.SetGraphData('${elemID}')
                                    "
                                    ${skill.dmgMul.checked ? "checked" : ""}
                                >
                            </label>
                        `);
                    }
                });
                tr.children[8].innerHTML = txt_target.join("<br>");
                tr.children[11].innerHTML = txt_HPred.join("<br>");
                tr.children[12].innerHTML = txt_dmgMul.join("<br>");
                tippy(".tooltip-t", {
                    placement: "top"
                    , allowHTML: true
                    , maxWidth: "1000px"
                });
                break;
        }
        return;
    }
    switch(term) {
        case "timing":
            _.forEach(lists.units.onSkillAct.list, unit => funcs.createHTML.EditUnitsTable(term, "onSkillAct", unit));
            _.forEach(lists.units.onHit.list, unit => funcs.unitsData.CorrectSkill(unit));
            break;
        case "atkInterval":
            _.forEach(lists.units.onHit.list, unit => funcs.createHTML.EditUnitsTable(term, "onHit", unit));
            break;
        case "HPred":
            _.forEach(lists.units.onSkillAct.list, unit => funcs.createHTML.EditUnitsTable(term, "onSkillAct", unit));
            _.forEach(lists.units.onHit.list, unit => funcs.createHTML.EditUnitsTable(term, "onHit", unit));
            break;
    }
}

// グラフライン表示/非表示ボタン生成
funcs.createHTML.GraphlineDispBtn = type => {
    if(!(type in lists.units)) return;
    
    let txt = `
        <div class="optcap10em">
            <span class="tooltip-t" data-tippy-content="${_.first(lists.units[type].list).unitInfo.unitName}～${_.last(lists.units[type].list).unitInfo.unitName}">
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

// 更新履歴生成
funcs.createHTML.UpdateHistory = () => {
    let txt = "";
    _.forEach(updateHistory, history =>
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
    );
    document.getElementById("updateHistory").innerHTML = txt;
}