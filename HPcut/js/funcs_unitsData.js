funcs.unitsData = {};

//ユニット追加
funcs.unitsData.AddUnit = type => {
    if(!(type in lists.units)) return;
    
    const newUnitData = _.cloneDeep(lists.units[type].template);
    const isAddable = document.getElementsByClassName("reqMark").length === 0;
    const inputs = {
        "ユニット名": document.getElementById("modalName").value,
        "属性": _.compact(_.map(document.getElementsByClassName("modalAttr"), elem => elem.value)),
        "配置型": document.getElementById("modalDepType").value,
        "レアリティ": document.getElementById("modalRarity").value,
        "クラス": _.compact(_.map(document.getElementsByClassName("modalClass"), elem => elem.value)),
        "好感度ボーナス": document.getElementById("modalAff").value,
        "その他": _.compact(_.map(document.getElementsByClassName("modalNote"), elem => elem.value)),
        "攻撃間隔": {
            "非スキル中": _.map(document.getElementsByClassName("modalAtkInt-0"), elem => elem.value),
            "通常スキル中": _.map(document.getElementsByClassName("modalAtkInt-1"), elem => elem.value),
            "覚醒スキル中": _.map(document.getElementsByClassName("modalAtkInt-2"), elem => elem.value)
        },
        "対象": _.map(document.getElementsByClassName("modalTarget"), elem => elem.value),
        "スキル遷移": _.map(document.getElementsByClassName("modalTrans"), elem => elem.value),
        "HP減少発生": _.map(document.getElementsByClassName("modalTrig"), elem => elem.value),
        "再動": {
            A: _.map(document.getElementsByClassName("modalCT_A"), elem => elem.value),
            B: _.map(document.getElementsByClassName("modalCT_B"), elem => elem.value)
        },
        "継続": {
            A: _.map(document.getElementsByClassName("modalDur_A"), elem => elem.value),
            B: _.map(document.getElementsByClassName("modalDur_B"), elem => elem.value)
        },
        "HP減少率": _.map(document.getElementsByClassName("modalHPred"), elem => elem.value),
        "特攻": {
            "倍率": _.map(document.getElementsByClassName("modalDmgMul"), elem => elem.value),
            "対象": _.map(document.getElementsByClassName("modalDmgMulTarget"), elem => elem.value)
        },
        "スキル回数倍率": [
            _.map(document.getElementsByClassName("modalMulByNum-0"), elem => Number(elem.value)),
            _.map(document.getElementsByClassName("modalMulByNum-1"), elem => Number(elem.value))
        ]
    };
    const checked = {
        "スキル": [
            document.getElementById("check_modalSkillInfo-0").checked,
            document.getElementById("check_modalSkillInfo-1").checked
        ],
        "特攻": [
            document.getElementById("check_modalDmgMul-0").checked,
            document.getElementById("check_modalDmgMul-1").checked
        ]
    };
    if(type === "onHit") {
        checked["攻撃間隔"] = [
            document.getElementById("check_modalAtkInt-0").checked,
            document.getElementById("check_modalAtkInt-1").checked,
            document.getElementById("check_modalAtkInt-2").checked
        ];
    }
    const atkIntTerm = [ "非スキル中", "通常スキル中", "覚醒スキル中" ];
    const skillState = [ "通常", "覚醒" ];
    
    if(isAddable) {
        newUnitData.id = lists.units[type].list.slice(-1)[0].id + 1;
        newUnitData.added = true;
        
        const info = newUnitData.unitInfo;
        info.unitName = inputs["ユニット名"];
        info.attribution = inputs["属性"];
        if(info.attribution.length === 0) {
            info.attribution.push("なし");
        }
        info.deployType = inputs["配置型"];
        info.rarity = inputs["レアリティ"];
        info.unitClass.selectable = inputs["クラス"].length > 1;
        info.unitClass.selected = inputs["クラス"][0];
        info.unitClass.options = inputs["クラス"];
        info.affection.bonus = inputs["好感度ボーナス"];
        switch(info.affection.bonus) {
            case "再動短縮":
            case "攻撃硬直":
                info.affection.percentage = 150;
                break;
            case "時間延長":
                info.affection.percentage = 100;
                break;
        }
        info.note = inputs["その他"];
        if(type === "onHit") {
            for(let i = 0; i < 3; ++i) {
                if(!checked["攻撃間隔"][i]) continue;
                info.atkInterval_uncorr[i].startup = Number(inputs["攻撃間隔"][atkIntTerm[i]][0]);
                info.atkInterval_uncorr[i].remain = Number(inputs["攻撃間隔"][atkIntTerm[i]][1]);
                info.atkInterval_uncorr[i].cooldown = Number(inputs["攻撃間隔"][atkIntTerm[i]][2]);
            }
        }
        
        const skill = newUnitData.skill;
        for(let i = 0; i < 2; ++i) {
            if(!checked["スキル"][i]) continue;
            skill.awaken.selected = skillState[i];
            skill.target[i] = inputs["対象"][i];
            skill.trans[i] = inputs["スキル遷移"][i];
            skill.CT_uncorr[i].A = Number(inputs["再動"].A[i]);
            skill.dur_uncorr[i].A = Number(inputs["継続"].A[i]);
            skill.HPred_uncorr[i] = Number(inputs["HP減少率"][i]);
            if(checked["特攻"][i]) {
                skill.dmgMul.options[i] = "あり";
                skill.dmgMul.mul[i] = Number(inputs["特攻"]["倍率"][i]);
                skill.dmgMul.target[i] = inputs["特攻"]["対象"][i];
            }
            skill.mulByNum[i] = inputs["スキル回数倍率"][i];
            
            switch(skill.trans[i]) {
                case "-":
                    if(type === "onHit") {
                        skill.trigger[i] = "スキル中hit";
                    }
                    break;
                case "交互":
                case "初回A":
                    skill.trigger[i] = inputs["HP減少発生"][i];
                    skill.CT_uncorr[i].B = Number(inputs["再動"].B[i]);
                    skill.dur_uncorr[i].B = Number(inputs["継続"].B[i]);
                    break;
            }
        }
        if(checked["スキル"][0] && checked["スキル"][1]) {
            skill.awaken.selectable = true;
            skill.awaken.selected = "通常";
        }
        
        lists.units[type].list.push(newUnitData);
        ++lists.units[type].num.added;
        funcs.createHTML.modal.Destroy(type);
        funcs.graph.SetGraphData([ "onSkillAct", "onHit" ].map(ty => ty === type));
    } else {
        const reqTerms = [ "ユニット名", "配置型", "レアリティ", "好感度ボーナス" ];
        const lackTerms = [];
        
        reqTerms.forEach(reqTerm => {
            if(inputs[reqTerm] === "") {
                lackTerms.push(reqTerm);
            }
        });
        if(_.isEmpty(inputs["クラス"])) {
            lackTerms.push("クラス");
        }
        if(type === "onHit") {
            for(let i = 0; i < 3; ++i) {
                if(!checked["攻撃間隔"][i]) continue;
                if(_.compact(inputs["攻撃間隔"][atkIntTerm[i]]).length !== 3) {
                    lackTerms.push(`${atkIntTerm[i]}の攻撃間隔`);
                }
            }
        }
        for(let i = 0; i < 2; ++i) {
            if(!checked["スキル"][i]) continue;
            switch(inputs["スキル遷移"][i]) {
                case "交互":
                case "初回A":
                    if(inputs["HP減少発生"][i] === ""
                    || inputs["再動"].B[i] === ""
                    || inputs["継続"].B[i] === "") {
                        lackTerms.push(`${skillState[i]}スキル`);
                        continue;
                    }
                case "-":
                    if(inputs["再動"].A[i] === ""
                    || inputs["継続"].A[i] === ""
                    || inputs["HP減少率"][i] === ""
                    || (checked["特攻"][i] && inputs["特攻"]["倍率"][i] === "")) {
                        lackTerms.push(`${skillState[i]}スキル`);
                        continue;
                    }
                    break;
            }
        }
        
        const elem_addUnitAlart = document.getElementById("addUnitAlart");
        elem_addUnitAlart.innerHTML = `
            ※以下の事項が記入されてません<br>
            ${lackTerms.join("、")}
        `;
    }
}
//ユニット削除
funcs.unitsData.DeleteUnit = (type, id) => {
    if(!(type in lists.units)) return;
    
    const index = _.findIndex(lists.units[type].list, { id: id });
    lists.units[type].list.splice(index, 1);
    --lists.units[type].num.added; 
    funcs.graph.SetGraphData([ "onSkillAct", "onHit" ].map(ty => ty === type));
}

//ユニットがバフ等の対象か判定
funcs.unitsData.IsTarget = (unit, info) => {
    const unitInfos = {
        deployType: [unit.unitInfo.deployType], //array
        rarity: unit.unitInfo.rarity,
        unitClass: unit.unitInfo.unitClass.selected,
        attribution: unit.unitInfo.attribution,        //array
        note: unit.unitInfo.note                //array
    };
    unitInfos.deployType.push(_.findKey(lists.depTypeCount, arr => _.includes(arr, unitInfos.unitClass)));
    const IsTargetSub = target => {
        const key = Object.keys(target)[0];
        if(key in unitInfos) {
            if(Array.isArray(unitInfos[key])) {
                return !_.isEmpty(_.intersection(target[key], unitInfos[key]));
            } else {
                return _.includes(target[key], unitInfos[key]);
            }
        } else {
            return 1;
        }
    }
    let isTarget = 0;
    if(info.AndOr === "and") {
        isTarget = 1;
        info.target.forEach(tar => isTarget &= IsTargetSub(tar));
    } else if(info.AndOr === "or") {
        isTarget = 0;
        info.target.forEach(tar => isTarget |= IsTargetSub(tar));
    }
    return isTarget;
}

//好感度ボーナス込みの初動・再動
funcs.unitsData.CorrectSkill = unit => {
    const unitName = unit.unitInfo.unitName;
    const rarity = unit.unitInfo.rarity;
    const AW = unit.skill.awaken.selected;
    const aff = unit.unitInfo.affection;    //object
    const WT = unit.skill.WT;               //object
    const CT = unit.skill.CT;               //object
    const dur = unit.skill.dur;             //object
    const index = [ "通常", "覚醒" ].indexOf(AW);
    const CT_uncorr = unit.skill.CT_uncorr[index];      //object
    const dur_uncorr = unit.skill.dur_uncorr[index];    //object
    const toggle = CT_uncorr.B !== null;
    let corr = NaN;
    //150%ボーナスの補正値
    if(aff.bonus !== null && aff.bonus !== "その他") {
        if(_.includes(unit.unitInfo.attribution, "ちび")) {
            corr = 0.15;
        } else {
            corr = Number(_.findKey(lists.specialAff[aff.bonus][rarity], arr => _.includes(arr, unitName)));
        }
    }
    if(_.isNaN(corr)) {
        switch(rarity) {
            case "黒":
                corr = 0.25; 
                break;
            case "白":
            case "青":
                corr = 0.2;
                break;
            case "金":
                corr = 0.18;
                break;
        }
        if(_.includes(unit.unitInfo.note, "男性")) {
            corr = _.floor(corr * 0.9, 2);
        }
    }
    //CT・スキル時間の計算
    switch(aff.bonus) {
        case "再動短縮":
            aff.changeRate = -Math.round(corr * (aff.percentage - 100) * 2);
            CT.A = CT_uncorr.A * (1 + aff.changeRate / 100);
            if(toggle) CT.B = CT_uncorr.B * (1 + aff.changeRate / 100);
            dur.A = dur_uncorr.A;
            dur.B = dur_uncorr.B;
            break;
        case "時間延長":
            aff.changeRate = Math.round(corr * (aff.percentage - 100) * 2);
            CT.A = CT_uncorr.A;
            CT.B = CT_uncorr.B;
            dur.A = dur_uncorr.A * (1 + aff.changeRate / 100);
            if(toggle) dur.B = dur_uncorr.B * (1 + aff.changeRate / 100);
            break;
        default:
            CT.A = CT_uncorr.A;
            CT.B = CT_uncorr.B;
            dur.A = dur_uncorr.A;
            dur.B = dur_uncorr.B;
    }
    //スキル時間延長(固定値)
    let bufferInfo = _.findLast(lists.buff.skillExtend_fixed.list, { buffer: unitName, awaken: AW });
    let extend = 0;
    if(bufferInfo !== undefined) {
        extend = Math.max(extend, bufferInfo.value);
    }
    const elems_checkbox = document.querySelectorAll("#skillExtend_fixed input");
    const checked = [];
    _.forEach(elems_checkbox, elem => {
        if(elem.checked) {
            checked.push(new Function(`return ${elem.value}`)());
        }
    });
    checked.forEach(buffer => {
        bufferInfo = _.find(lists.buff.skillExtend_fixed.list, { buffer: buffer.buffer, awaken: buffer.awaken });
        extend = Math.max(extend, bufferInfo.value * funcs.unitsData.IsTarget(unit, bufferInfo));
    });
    dur.A += extend;
    if(toggle) dur.B += extend;
    
    //初動の計算
    const specialWT = _.find(lists.specialWT, { unitName: unitName, rarity: rarity, skillAwaken: AW });
    if(specialWT !== undefined) {
        WT.A = specialWT.WT;
    } else {
        switch(rarity) {
            case "黒":
                WT.A = AW === "通常" ? 1 : 5;
                if(toggle) WT.B = AW === "通常" ? 1 : 5;
                break;
            case "白":
                WT.A = CT_uncorr.A * 0.5;
                if(toggle) WT.B = CT_uncorr.B * 0.5;
                break;
            case "青":
                WT.A = CT_uncorr.A * 0.6;
                if(toggle) WT.B = CT_uncorr.B * 0.6;
                break;
            case "金":
                WT.A = CT_uncorr.A * 0.66;
                if(toggle) WT.B = CT_uncorr.B * 0.66;
                break;
            default:
                WT.A = CT_uncorr.A;
                if(toggle) WT.B = CT_uncorr.B;
        }
    }
}

//指定されたバフの率を返す
funcs.unitsData.GetRate = (unit, term) => {
    if(!(term in lists.buff)) return;
    const unitName = unit.unitInfo.unitName;
    const unitClass = unit.unitInfo.unitClass.selected;
    let buffRate = 0;
    let bufferInfo;
    if(term === "rCT") {
        //近接型・遠距離型・遠近距離型の再動短縮
        bufferInfo = _.find(lists.buff.rCTdepType.list, { deployType: unit.unitInfo.deployType });
        buffRate = bufferInfo.rate;
    }
    //自身による効果
    bufferInfo = _.findLast(lists.buff[term].list, { buffer: unitName });
    if(bufferInfo !== undefined) {
        buffRate = Math.max(buffRate, bufferInfo.rate);
    }
    bufferInfo = _.findLast(lists.buff[term].list, { buffer: unitClass });
    if(bufferInfo !== undefined) {
        buffRate = Math.max(buffRate, bufferInfo.rate);
    }
    if(term in lists.selfBuff) {
        bufferInfo = _.find(lists.selfBuff[term], { buffer: unitName });
        if(bufferInfo !== undefined) {
            buffRate = Math.max(buffRate, bufferInfo.rate);
        }
        bufferInfo = _.find(lists.selfBuff[term], { buffer: unitClass });
        if(bufferInfo !== undefined) {
            buffRate = Math.max(buffRate, bufferInfo.rate);
        }
    }
    //選択したオプションによる効果
    const elems_checkbox = document.querySelectorAll(`#${term} input`);
    const checked = [];
    _.forEach(elems_checkbox, elem => {
        if(elem.checked) {
            checked.push(new Function(`return ${elem.value}`)());
        }
    });
    checked.forEach(buffer => {
        bufferInfo = _.find(lists.buff[term].list, { buffer: buffer.buffer, awaken: buffer.awaken });
        buffRate = Math.max(buffRate, bufferInfo.rate * funcs.unitsData.IsTarget(unit, bufferInfo));
    });
    return buffRate / 100;
}

//初回HP減少発生までの時間
//  攻撃ヒット時発生型で非スキル中hitとか出てきたら要編集
funcs.unitsData.SetFirstTime = unit => {
    funcs.unitsData.CorrectSkill(unit);
    const WTred = funcs.unitsData.GetRate(unit, "rWT");
    const CTred = funcs.unitsData.GetRate(unit, "rCT");
    const extend = funcs.unitsData.GetRate(unit, "skillExtend");
    const unitName = unit.unitInfo.unitName;
    const index = [ "通常", "覚醒" ].indexOf(unit.skill.awaken.selected);
    const isBomb = {
        A: (unit.skill.dur.A < 5) || ((unitName === "爆砲の新兵カノン" || unitName === "聖夜の祝星砲カノン") && index === 1 && unit.skill.dur.A === 5),
        B: unit.skill.dur.B < 5
    };
    const WT = {
        A: unit.skill.WT.A * (1 - WTred),
        B: unit.skill.WT.B * (1 - WTred)
    };
    const CT = {
        A: unit.skill.CT.A * (1 - CTred),
        B: unit.skill.CT.B * (1 - CTred)
    };
    const dur = {
        A: unit.skill.dur.A * (1 + extend * !isBomb.A),
        B: unit.skill.dur.B * (1 + extend * !isBomb.B)
    };
    
    let firstTime = WT.A;
    if(unit.skill.trigger[index] === "B"
    || unit.skill.trigger[index] === "スキル中hitB") {
        let delta = dur.A + CT.A;
        if(num.redeployInterval.use) {
            delta =
                Math.min(
                    delta,
                    num.redeployInterval.value + WT.B
                );
        }
        firstTime += delta;
    }
    unit.skill.firstTime = firstTime;
}

//スキル点火時を基点としたHP減少発生の間隔
//  攻撃ヒット時発生型で非スキル中hitとか出てきたら要編集
funcs.unitsData.SetInterval = (unit, type) => {
    //funcs.unitsData.CorrectSkill(unit);
    const WTred = funcs.unitsData.GetRate(unit, "rWT");
    const CTred = funcs.unitsData.GetRate(unit, "rCT");
    const extend = funcs.unitsData.GetRate(unit, "skillExtend");
    const unitName = unit.unitInfo.unitName;
    const index = [ "通常", "覚醒" ].indexOf(unit.skill.awaken.selected);
    const isBomb = {
        A: (unit.skill.dur.A < 5) || ((unitName === "爆砲の新兵カノン" || unitName === "聖夜の祝星砲カノン") && index === 1 && unit.skill.dur.A === 5),
        B: unit.skill.dur.B < 5
    };
    const WT = {
        A: unit.skill.WT.A * (1 - WTred),
        B: unit.skill.WT.B * (1 - WTred)
    };
    const CT = {
        A: unit.skill.CT.A * (1 - CTred),
        B: unit.skill.CT.B * (1 - CTred)
    };
    const dur = {
        A: unit.skill.dur.A * (1 + extend * !isBomb.A),
        B: unit.skill.dur.B * (1 + extend * !isBomb.B)
    };
    
    let interval = 0;
    let intervalRedeploy = 0;
    switch(unit.skill.trans[index]) {
        case "-":
            interval = dur.A + CT.A;
            intervalRedeploy = num.redeployInterval.value + WT.A + (type === "onSkillAct" ? 0 : dur.A);
            break;
        case "交互":
            interval = dur.A + CT.A + dur.B + CT.B;
            switch(unit.skill.trigger[index]) {
                case "スキル中hitA":
                    intervalRedeploy =
                        dur.A + num.redeployInterval.value
                        + Math.min(
                            WT.B + dur.B + CT.B,    //A終了直後撤退
                            CT.A + WT.A,            //B点火直後撤退
                            WT.B + num.redeployInterval.value + WT.A    //B点火直後撤退+A終了直後撤退
                        );
                    break;
                case "スキル中hitB":
                    intervalRedeploy =
                        dur.B + num.redeployInterval.value
                        + Math.min(
                            WT.A + dur.A + CT.A,    //B終了直後撤退
                            WT.B + CT.B,            //A点火直後撤退
                            WT.A + num.redeployInterval.value + WT.B    //A点火直後撤退+B終了直後撤退
                        );
                    break;
                default:
                    intervalRedeploy =
                        num.redeployInterval.value
                        + Math.min(
                            WT.A + dur.A + CT.A,    //B点火直後撤退
                            WT.B + dur.B + CT.B,    //A点火直後撤退
                            num.redeployInterval.value + WT.A + WT.B    //A点火直後撤退+B点火直後撤退
                        );
            }
            break;
        case "初回A":
            switch(unit.skill.trigger[index]) {
                case "A":
                case "スキル中hitA":
                    interval = Infinity;
                    intervalRedeploy = Infinity;
                    break;
                case "B":
                case "スキル中hitB":
                    interval = dur.B + CT.B;
                    intervalRedeploy = num.redeployInterval.value + WT.B + (type === "onSkillAct" ? 0 : dur.B);
                    break;
            }
            break;
    }
    unit.skill.interval = num.redeployInterval.use ? Math.min(interval, intervalRedeploy) : interval;
}

//攻撃間隔
funcs.unitsData.SetAtkInterval = unit => {
    if(!("atkInterval" in unit.unitInfo)) return;
    const hasteRate = funcs.unitsData.GetRate(unit, "hasteTeam");
    const redMapEffRate = funcs.unitsData.GetRate(unit, "redMapEff");
    const unitName = unit.unitInfo.unitName;
    const rarity = unit.unitInfo.rarity;
    const aff = unit.unitInfo.affection;    //object
    const skillAW = unit.skill.awaken.selected;
    const indexes = [ 0, [ "通常", "覚醒" ].indexOf(skillAW) + 1 ];
    let corr = NaN;
    let atkCooldownBySkill = 0;
    let bufferInfo;
    //150%ボーナスの補正値
    if(aff.bonus !== null && aff.bonus !== "その他") {
        if(_.includes(unit.unitInfo.attribution, "ちび")) {
            corr = 0.10;
        } else {
            corr = Number(_.findKey(lists.specialAff[aff.bonus][rarity], arr => _.includes(arr, unitName)));
        }
    }
    if(_.isNaN(corr)) {
        switch(rarity) {
            case "黒":
                corr = 0.18; 
                break;
            case "白":
            case "青":
                corr = 0.14;
                break;
            case "金":
                corr = 0.13;
                break;
        }
        if(_.includes(unit.unitInfo.note, "男性")) {
            corr = _.floor(corr * 0.95, 2);
        }
    }
    //攻撃速度の計算
    //好感度ボーナス
    switch(aff.bonus) {
        case "攻撃硬直":
            aff.changeRate = -Math.round(corr * (aff.percentage - 100) * 2);
            break;
    }
    //硬直短縮(スキル)
    //選択したオプションによる効果
    const elems_checkbox = document.querySelectorAll("#hasteSkill input");
    const checked = [];
    _.forEach(elems_checkbox, elem => {
        if(elem.checked) {
            checked.push(new Function(`return ${elem.value}`)());
        }
    });
    checked.forEach(buffer => {
        bufferInfo = _.find(lists.buff.hasteSkill.list, { buffer: buffer.buffer, awaken: buffer.awaken });
        atkCooldownBySkill = Math.max(atkCooldownBySkill, bufferInfo.atkCooldown * funcs.unitsData.IsTarget(unit, bufferInfo));
    });
    
    indexes.forEach((index, i) => {
        const atkStartup = unit.unitInfo.atkInterval_uncorr[index].startup;
        const atkRemain = unit.unitInfo.atkInterval_uncorr[index].remain;
        let atkCooldown = unit.unitInfo.atkInterval_uncorr[index].cooldown;
        
        if(atkStartup !== null) {
            if(aff.bonus === "攻撃硬直") {
                atkCooldown = Math.ceil((atkCooldown - 1) * (1 + aff.changeRate / 100) + 1);
            }
            //硬直短縮(スキル)
            //自身による効果
            if(index !== 0) {
                bufferInfo = _.findLast(lists.buff.hasteSkill.list, { buffer: unitName, awaken: skillAW });
                if(bufferInfo !== undefined) {
                    atkCooldownBySkill = Math.max(atkCooldownBySkill, bufferInfo.atkCooldown);
                }
            }
            //                 ↓ceil?
            atkCooldown = Math.floor(((atkCooldownBySkill > 0 ? atkCooldownBySkill : atkCooldown) - 1) * (1 - hasteRate) + 1);
            if(!_.includes(unit.unitInfo.note, "状態異常無効")) {
                atkCooldown += num.incAtkCooldown_enemy.value * 2;
            }
            if(!_.includes(unit.unitInfo.note, "深海適応")) {
                atkCooldown += Math.ceil(num.incAtkCooldown_map.value * (1 - redMapEffRate)) * 2;
            }
            unit.unitInfo.atkInterval[i].startup = atkStartup;
            unit.unitInfo.atkInterval[i].remain = atkRemain;
            unit.unitInfo.atkInterval[i].cooldown = atkCooldown;
        }
    });
}

//HP減少率
funcs.unitsData.SetHPred = unit => {
    let dmgMul = 1 + funcs.unitsData.GetRate(unit, "giveDmgMul");
    const unitName = unit.unitInfo.unitName;
    const unitClass = unit.unitInfo.unitClass.selected;
    const skillAW = unit.skill.awaken.selected;
    const skillState = [ "通常", "覚醒" ];
    for(let i = 0; i < 2; ++i) {
        switch(unitClass) {
            case "ちびイビルプリンセス":
            case "ちびイビルクイーン":
            case "イビルプリンセス":
            case "イビルクイーン":
            case "デスブリンガー":
                unit.skill.HPred_uncorr[i] = 10;
                break;
            case "イビルシーカー":
                unit.skill.HPred_uncorr[i] = 15;
                break;
        }
        
        let HPred = unit.skill.HPred_uncorr[i];
        if(HPred === null) continue;
        if(unit.skill.dmgMul.options[i] === "あり") {
            dmgMul = Math.max(dmgMul, unit.skill.dmgMul.mul[i]);
        }
        unit.skill.HPred[i] = HPred * dmgMul;
    }
}

//ユニット数カウント
funcs.unitsData.CountUnits = () => {
    const evilPrincess = [
        "ちびイビルプリンセス",
        "ちびイビルクイーン",
        "イビルプリンセス",
        "イビルクイーン",
        "イビルシーカー",
        "デスブリンガー",
    ];
    _.forEach([ "onSkillAct", "onHit" ], type => {
        const sum = _.reduce(lists.units[type].num, (sum, n) => sum + n, 0);
        if(lists.units[type].list.length === sum) return;
        //保持しているユニット数データと異なる場合に数え直し
        _.forEach(lists.units[type].num, (n, key) => lists.units[type].num[key] = 0);
        lists.units[type].list.forEach(unit => {
            if(unit.added) {
                //追加分
                ++lists.units[type].num.added;
            } else if(_.includes(evilPrincess, unit.unitInfo.unitClass.selected)) {
                //イビルプリンセス系
                ++lists.units[type].num.EP;
            } else {
                //非イビルプリンセス系
                ++lists.units[type].num.notEP;
            }
        });
    });
}
