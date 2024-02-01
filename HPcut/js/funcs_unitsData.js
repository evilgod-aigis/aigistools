funcs.unitsData = {};

// ユニット追加
funcs.unitsData.AddUnit = type => {
    if(!(type in lists.units)) return;
    
    const isOnHit = type === "onHit";
    const skillState = {};
    if(document.getElementById("check_modalSkillInfo-0").checked) skillState["通常"] = 0;
    if(document.getElementById("check_modalSkillInfo-1").checked) skillState["覚醒"] = 1;
    const noHPred = {};
    _.forEach(skillState, (index, state) => {
        const modalSkillInfo = document.getElementById(`modalSkillInfo-${index}`);
        noHPred[state] = _.every(modalSkillInfo.getElementsByClassName("modalOptset3"), elem => 
            !(elem.getElementsByClassName("modalTarget")[0].value && Number(elem.getElementsByClassName("modalHPred")[0].value))
        );
    });
    if(document.getElementsByClassName("reqMark").length || _.some(noHPred, bool => bool)) {
        const lackTerms = _.intersection(
            [ "ユニット名", "配置型", "レアリティ", "クラス", "好感度ボーナス" ]
            , _.map(document.getElementsByClassName("reqMark"), elem => elem.innerText)
        );
        if(isOnHit) {
            const checkbox_modalAtkInt0 = document.getElementById("check_modalAtkInt-0");
            if(checkbox_modalAtkInt0.checked && checkbox_modalAtkInt0.parentElement.getElementsByClassName("reqMark").length)
                lackTerms.push("非スキル中の攻撃間隔");
            _.forEach(skillState, (index, state) => {
                if(document.getElementById(`check_modalAtkInt-${index + 1}`).parentElement.getElementsByClassName("reqMark").length)
                    lackTerms.push(`${state}スキル中の攻撃間隔`);
            });
        }
        _.forEach(skillState, (index, state) => {
            const modalSkillInfo = document.getElementById(`modalSkillInfo-${index}`);
            if(modalSkillInfo.getElementsByClassName("reqMark").length)
                lackTerms.push(`${state}スキル`);
            else if(noHPred[state])
                lackTerms.push(`${state}スキルのHP減少率(全てなしか0になっている)`);
        });
        
        document.getElementById("addUnitAlart").innerHTML = `
            ※以下の事項が記入されてません<br>
            <span class="inline-block">${lackTerms.join("、</span><span class='inline-block'>")}</span>
        `;
        return;
    }
    const newUnitData = _.cloneDeep(lists.units[type].template);
    const inputs = {
        unitName: document.getElementById("modalName").value
        , attr: _.compact(_.map(document.getElementsByClassName("modalAttr"), elem => elem.value))
        , depType: document.getElementById("modalDepType").value
        , rarity: document.getElementById("modalRarity").value
        , cl: _.compact(_.map(document.getElementsByClassName("modalClass"), elem => elem.value))
        , aff: document.getElementById("modalAff").value
        , note: _.compact(_.map(document.getElementsByClassName("modalNote"), elem => elem.value))
        , atkInt: {}
        , skillInfo: {}
    };
    if(isOnHit) {
        if(document.getElementById("check_modalAtkInt-0").checked)
            inputs.atkInt.notSkill = _.map(document.getElementsByClassName("modalAtkInt-0"), elem => Number(elem.value) * 2);
        else inputs.atkInt.notSkill = [ null, null, null ];
    }
    _.forEach(skillState, (index, state) => {
        if(isOnHit)
            inputs.atkInt[state] = _.map(document.getElementsByClassName(`modalAtkInt-${index + 1}`), elem => Number(elem.value) * 2);
        inputs.skillInfo[state] = []
        _.forEach(document.getElementById(`modalSkillInfo-${index}`).getElementsByClassName("modalOptset3"), (elem, i) => {
            const obj = {
                CT: Number(elem.getElementsByClassName("modalCT")[0].value)
                , dur: Number(elem.getElementsByClassName("modalDur")[0].value)
                , next: Number(elem.getElementsByClassName("modalNext")[0].value) - 1
            };
            inputs.skillInfo[state].push(obj);
            const target = elem.getElementsByClassName("modalTarget")[0].value;
            if(target) {
                const HPred = Number(elem.getElementsByClassName("modalHPred")[0].value);
                if(HPred) {
                    obj.target = target;
                    obj.HPred = HPred;
                    const simult = Number(elem.getElementsByClassName("modalSimult")[0].value);
                    if(target === "射程内") {
                        if(simult > 0) obj.simult = simult;
                        else obj.simult = Infinity;
                    }
                }
            }
            if(elem.getElementsByClassName("check_modalWT")[0].checked)
                obj.WT = Number(elem.getElementsByClassName("modalWT")[0].value);
            if(elem.getElementsByClassName("check_modalDmgMul")[0].checked) {
                obj.dmgMul = {};
                obj.dmgMul.mul = Number(elem.getElementsByClassName("modalDmgMul")[0].value);
                obj.dmgMul.target = elem.getElementsByClassName("modalDmgMulTarget")[0].value;
            }
            if(elem.getElementsByClassName("check_modalHPremMul")[0].checked) {
                const borders = elem.getElementsByClassName("modalHPremMul-border");
                const muls = elem.getElementsByClassName("modalHPremMul-mul");
                const arr = _.map(borders, (border, i) => [ Number(border.value) / 100.0, Number(muls[i].value) ]);
                obj.HPremMul = _.uniqBy(_.orderBy(arr, [0, 1], ["asc", "desc"]), 0);
            }
            if(obj.next < 0) {
                obj.next = i + 1;
                inputs.skillInfo[state].push({CT: Infinity, dur: Infinity, next: i + 1});
                return false;
            } else if(obj.next <= i) return false;
        })
    });
    
    newUnitData.id = _.last(lists.units[type].list).id + 1;
    newUnitData.added = true;
    
    const info = newUnitData.unitInfo;
    info.unitName = inputs.unitName;
    info.attribution = inputs.attr;
    if(info.attribution.length === 0) {
        info.attribution.push("なし");
    }
    info.deployType = inputs.depType;
    info.rarity = inputs.rarity;
    info.unitClass.selected = inputs.cl[0];
    if(inputs.cl.length > 1) info.unitClass.options = inputs.cl;
    info.affection.bonus = inputs.aff;
    switch(info.affection.bonus) {
        case "再動短縮":
        case "攻撃硬直":
            info.affection.percentage = 150;
            break;
        case "時間延長":
            if(isOnHit) info.affection.percentage = 150;
            else info.affection.percentage = 100;
            break;
    }
    info.note = inputs.note;
    if(isOnHit) {
        _.forEach(inputs.atkInt, (arr, state) => {
            info.atkInterval.corr[state] = { startup: null, remain: null, cooldown: null };
            info.atkInterval.uncorr[state] = { startup: arr[0], remain: arr[1], cooldown: arr[2] };
            if(state !== "notSkill" && inputs.atkInt.notSkill[0] !== null && !_.isEqual(inputs.atkInt.notSkill, arr))
                info.atkInterval.uncorr[state].isFixed = true;
        });
    }
    
    newUnitData.skill.selected = Object.keys(skillState)[0];
    _.forEach(skillState, (noUse, state) => {
        const skill = newUnitData.skill.detail[state] = [];
        _.forEach(inputs.skillInfo[state], (skillInfo, i) => {
            skill.push({
                corr: { WT: null, CT: null, dur: null }
                , uncorr: { CT: skillInfo.CT, dur: skillInfo.dur }
                , next: skillInfo.next
            });
            const obj = skill[i];
            if("target" in skillInfo) {
                obj.target = skillInfo.target;
                obj.corr.HPred = null;
                obj.uncorr.HPred = skillInfo.HPred;
                if("simult" in skillInfo) obj.simult = skillInfo.simult;
            }
            if("WT" in skillInfo) obj.uncorr.WT = skillInfo.WT;
            if("dmgMul" in skillInfo) {
                obj.dmgMul = {};
                obj.dmgMul.checked = false;
                obj.dmgMul.mul = skillInfo.dmgMul.mul;
                obj.dmgMul.target = skillInfo.dmgMul.target;
            }
            if("HPremMul" in skillInfo) obj.HPremMul = skillInfo.HPremMul;
        });
    });
    funcs.unitsData.SetBufferInfo(newUnitData);    
    lists.units[type].list.push(newUnitData);
    if(saveData.db) funcs.saveData.UpdateData("added", `${type}[${lists.units[type].num.added}]`, newUnitData);
    ++lists.units[type].num.added;
    funcs.createHTML.modal.Destroy(type);
    funcs.SetBuffDisabled(type, newUnitData);
    funcs.graph.SetGraphData("add", type, newUnitData);
}
// ユニット削除
funcs.unitsData.DeleteUnit = (type, id) => {
    if(!(type in lists.units)) return;
    
    const index = _.findIndex(lists.units[type].list, { id: id });
    lists.units[type].list.splice(index, 1);
    if(saveData.db) funcs.saveData.DeleteData("added", `${type}[${index - lists.units[type].num.notEP - lists.units[type].num.EP}]`);
    --lists.units[type].num.added;
    funcs.SetBuffDisabled();
    const tableBody = document.getElementById(`table_${type}`);
    tableBody.children[index].remove();
    const seriesIndex = type === "onSkillAct" ? index : index + lists.units.onSkillAct.list.length;
    graph.chart.series.removeIndex(seriesIndex);
    graph.legend.itemContainers.removeIndex(seriesIndex);
}

// 自身がバッファーならその情報を保持させる
funcs.unitsData.SetBufferInfo = (unit, isBuffer = false) => {
    if(isBuffer && !("unitInfo" in unit)) return;
    delete unit.buff;
    delete unit.selfBuff;
    const asBuffer = {}, selfBuff = {};
    const unitName = unit.unitInfo.unitName;
    const rarity = unit.unitInfo.rarity;
    const unitClass = unit.unitInfo.unitClass;
    const RT_array = Object.keys(lists.RearguardTactician);
    _.forEach(lists.selfBuff, (list, buffType) => {
        const buffs = [];
        _.forEach(_.filter(list, { buffer: unitName }), bufferInfo => {
            if("rarity" in bufferInfo && bufferInfo.rarity !== rarity) return;
            buffs.push(bufferInfo);
        });
        if("options" in unitClass) 
            _.forEach(unitClass.options, cl => _.forEach(_.filter(list, { buffer: cl }), bufferInfo => buffs.push(bufferInfo)));
        else
            _.forEach(_.filter(list, { buffer: unitClass.selected }), bufferInfo => buffs.push(bufferInfo));
        if(buffs.length) selfBuff[buffType] = buffs;
    });
    if(isBuffer) {
        if(_.size(selfBuff)) unit.unitInfo.selfBuff = selfBuff;
        return;
    }
    _.forEach(lists.buff, (buff, buffType) => {
        if(buffType === "rCTdepType") {
            const unitClass_RT = "options" in unitClass
                ? _.intersection(unitClass.options, RT_array)
                : _.intersection([ unitClass.selected ], RT_array);
            if(unitClass_RT.length) {
                asBuffer.rCTdepType = {};
                _.forEach(unitClass_RT, cl => asBuffer.rCTdepType[cl] = lists.RearguardTactician[cl]);
            }
            return;
        }
        const buffs = [];
        _.forEach(_.filter(buff.list, { buffer: unitName }), bufferInfo => {
            if("rarity" in bufferInfo && bufferInfo.rarity !== rarity) return;
            buffs.push(bufferInfo);
        });
        if("options" in unitClass) 
            _.forEach(unitClass.options, cl => _.forEach(_.filter(buff.list, { buffer: cl }), bufferInfo => buffs.push(bufferInfo)));
        else
            _.forEach(_.filter(buff.list, { buffer: unitClass.selected }), bufferInfo => buffs.push(bufferInfo));
        if(buffs.length) asBuffer[buffType] = buffs;
    });
    if(_.size(asBuffer)) unit.buff = asBuffer;
    if(_.size(selfBuff)) unit.selfBuff = selfBuff;
}

// 指定されたバフ量を返す
funcs.unitsData.GetBuffValue = (unit, buffType, isRate = true, withSelfBuff = true) => {
    if(!(buffType in lists.buff)) return;
    const unitName = unit.unitInfo.unitName;
    const unitClass = unit.unitInfo.unitClass.selected;
    const depTypes = [ unit.unitInfo.deployType ];
    if(depTypes[0] === "遠近距離型") {
        const depTypeCount = _.findKey(lists.depTypeCount, arr => _.includes(arr, unitClass));
        if(depTypeCount) depTypes.push(depTypeCount);
    }
    let buffValue = 0;
    let buffValue_self = 0;
    let unforced = false;
    let bufferInfo;
    const list = lists.buff[buffType].list;
    if(buffType === "rCT") {
        // 配置型の再動短縮
        let rCTdepType = lists.buff.rCTdepType.list;
        _.forEach(depTypes, depType => buffValue = Math.max(buffValue, rCTdepType[depType]));
        // 自身による効果
        if("buff" in unit && "rCTdepType" in unit.buff) {
            rCTdepType = unit.buff.rCTdepType[unitClass];
            _.forEach(depTypes, depType => buffValue = Math.max(buffValue, rCTdepType[depType]));
        }
    }
    // 自身による効果
    if("buff" in unit && buffType in unit.buff) {
        _.forEach(_.filter(unit.buff[buffType], { buffer: unitName }), bufferInfo => {
            if(withSelfBuff || bufferInfo.req !== "skill")
                buffValue = Math.max(buffValue, bufferInfo.value * funcs.unitsData.IsTarget(unit, bufferInfo));
        });
        // 順番的にユニット名→クラス名(未覚醒→覚醒)で入れているので後ろから探したほうが早いはず
        bufferInfo = _.findLast(unit.buff[buffType], { buffer: unitClass });
        if(bufferInfo && (withSelfBuff || bufferInfo.req !== "skill"))
            buffValue = Math.max(buffValue, bufferInfo.value * funcs.unitsData.IsTarget(unit, bufferInfo));
    }
    // 自己バフ
    if("selfBuff" in unit && buffType in unit.selfBuff && withSelfBuff) {
        bufferInfo = _.find(unit.selfBuff[buffType], { buffer: unitName });
        if(bufferInfo) buffValue_self = bufferInfo.value;
        bufferInfo = _.find(unit.selfBuff[buffType], { buffer: unitClass });
        // 個人のバフと職バフが重なったら加算? 乗算? 最大値?
        if(bufferInfo) buffValue_self += bufferInfo.value;
    }
    // 選択したオプションによる効果
    _.forEach(_.filter(document.getElementById(buffType).getElementsByTagName("input"), elem => elem.checked), elem => {
        bufferInfo = _.find(list, { id: Number(elem.value) });
        const tmp = bufferInfo.value * funcs.unitsData.IsTarget(unit, bufferInfo);
        if(tmp > buffValue) {
            buffValue = tmp;
            unforced = "unforced" in bufferInfo;
        } else if(tmp === buffValue)
            unforced &= "unforced" in bufferInfo;
        //buffValue = Math.max(buffValue, bufferInfo.value * funcs.unitsData.IsTarget(unit, bufferInfo));
    });
    
    if(buffType === "skillExtend") return (100 + buffValue) * (100 + buffValue_self) / 10000.0 - 1.0;
    if(buffType === "haste") return [ buffValue / 100.0, buffValue_self / 100.0 ];
    if(isRate) return Math.max(buffValue, buffValue_self) / 100.0;
    return [ Math.max(buffValue, buffValue_self), unforced ];
}

// ユニットがバフ等の対象か判定
funcs.unitsData.IsTarget = (unit, info) => {
    if(!("target" in info)) return true;
    
    const unitInfos = {
        deployType: [ unit.unitInfo.deployType ]    // array
        , rarity: unit.unitInfo.rarity
        , unitClass: unit.unitInfo.unitClass.selected
        , attribution: unit.unitInfo.attribution    // array
        , note: unit.unitInfo.note                  // array
    };
    if(unitInfos.deployType[0] === "遠近距離型") {
        const depTypeCount = _.findKey(lists.depTypeCount, arr => _.includes(arr, unitInfos.unitClass));
        if(depTypeCount) unitInfos.deployType.push(depTypeCount);
    }
    
    return _.some(info.target, tar =>
        _.every(tar, (arr, key) => {
            if(Array.isArray(unitInfos[key])) {
                return !_.isEmpty(_.intersection(arr, unitInfos[key]));
            } else {
                return _.includes(arr, unitInfos[key])
                    || (key === "unitClass" && _.includes(arr, "王子") && _.includes(unitInfos.unitClass, "王子"));
            }
        })
    );
}

// 好感度ボーナス込みの初動・再動
funcs.unitsData.CorrectSkill = (unit, withBuff = true) => {
    const rateByAff = { CT: 1.0, dur: 1.0 };
    const unitName = unit.unitInfo.unitName;
    const rarity = unit.unitInfo.rarity;
    const aff = unit.unitInfo.affection;    // object
    const AW = unit.skill.selected;
    const skill = unit.skill.detail[AW];   // array
    const IsBomb = (obj) => obj.uncorr.dur < 5 || ((unitName === "爆砲の新兵カノン" || unitName === "聖夜の祝星砲カノン") && AW === "覚醒" && obj.uncorr.dur === 5)
    
    let corr = 0.0;
    let corr_WT = 1.0;
    // 150%ボーナスの補正値
    switch(rarity) {
        case "黒":
            corr = 0.25;
            break;
        case "白":
            corr = 0.2;
            corr_WT = 0.5;
            break;
        case "青":
            corr = 0.2;
            corr_WT = 0.6;
            break;
        case "金":
            corr = 0.18;
            corr_WT = 0.66;
            break;
    }
    if(_.includes(unit.unitInfo.note, "男性")) corr = _.floor(corr * 0.9, 2);
    if(_.includes(unit.unitInfo.attribution, "ちび")) corr = 0.15;
    if(aff.bonus in lists.specialAff) {
        const corr_specail = Number(_.findKey(lists.specialAff[aff.bonus][rarity], arr => _.includes(arr, unitName)));
        if(!isNaN(corr_specail)) corr = corr_specail;
    }
    
    // 好感度150%ボーナス
    switch(aff.bonus) {
        case "再動短縮":
            aff.changeRate = -Math.round(corr * (aff.percentage - 100) * 2);
            rateByAff.CT += aff.changeRate / 100;
            break;
        case "時間延長":
            aff.changeRate = Math.round(corr * (aff.percentage - 100) * 2);
            rateByAff.dur += aff.changeRate / 100;
            break;
    }
    
    if(withBuff) {
        const buffValue = {
            WT: 1.0 - funcs.unitsData.GetBuffValue(unit, "rWT")
            , CT: 1.0 - funcs.unitsData.GetBuffValue(unit, "rCT", true, false)
            , dur: 1.0 + funcs.unitsData.GetBuffValue(unit, "skillExtend")
            , dur_fixed: funcs.unitsData.GetBuffValue(unit, "skillExtendFixed", false)[0]
        };
        _.forEach(skill, obj => {
            if("WT" in obj.uncorr) obj.corr.WT = obj.uncorr.WT * buffValue.WT;
            else {
                if(rarity === "黒") obj.corr.WT = (AW === "通常" ? 1 : 5) * buffValue.WT;
                else obj.corr.WT = obj.uncorr.CT * corr_WT * buffValue.WT;
            }
            obj.corr.CT = obj.uncorr.CT * rateByAff.CT * buffValue.CT;
            if(IsBomb(obj)) obj.corr.dur = obj.uncorr.dur;
            else obj.corr.dur = obj.uncorr.dur * rateByAff.dur * buffValue.dur + buffValue.dur_fixed;
        });
    } else {
        _.forEach(skill, obj => {
            if("WT" in obj.uncorr) obj.corr.WT = obj.uncorr.WT;
            else {
                if(rarity === "黒") obj.corr.WT = (AW === "通常" ? 1 : 5);
                else obj.corr.WT = obj.uncorr.CT * corr_WT;
            }
            obj.corr.CT = obj.uncorr.CT * rateByAff.CT;
            if(IsBomb(obj)) obj.corr.dur = obj.uncorr.dur;
            else obj.corr.dur = obj.uncorr.dur * rateByAff.dur;
        });
    }
}

// HP減少発生タイミング(初回/間隔)
// 攻撃間隔(非スキル中/スキル中)
funcs.unitsData.GetTimingOrAtkInt = (type, unit) => {
    if(!(type in lists.units)) return;
    
    const AW = unit.skill.selected;
    
    switch(type) {
        case "onSkillAct":
            const skill = unit.skill.detail[AW];    // array
            let now = skill[0];                     // object
            let times = 0; 
            // timing[0]: 初回まで, timing[1]: 間隔
            const timing = [ now.corr.WT, 0 ];
            let delta;
            while(true) {
                if("target" in now && times++) break;
                const next = skill[now.next];       // object
                delta = now.corr.dur + now.corr.CT;
                if(num.redeployInterval.use) delta = Math.min(delta, num.redeployInterval.value + next.corr.WT);
                timing[times] += delta;
                now = next;
            }
            return _.map(timing, t => `${t.toFixed(2)}秒`);
        case "onHit":
            const atkIntervalInfo = unit.unitInfo.atkInterval.corr;
            const atkInterval = [ null, null ];
            _.forEach([ atkIntervalInfo.notSkill, atkIntervalInfo[AW] ], (atkInt, i) => {
                if(atkInt.startup)
                    atkInterval[i] = Math.floor((atkInt.startup + atkInt.remain - 1) / 2) + Math.floor((atkInt.cooldown - 1) / 2) + 2;
            });
            return _.map(atkInterval, atkInt => atkInt ? `${atkInt}f` : "-");
    }
}

// 攻撃間隔
funcs.unitsData.CorrectAtkInterval = (unit, withBuff = true) => {
    if(!("atkInterval" in unit.unitInfo)) return;
    const unitName = unit.unitInfo.unitName;
    const unitClass = unit.unitInfo.unitClass.selected;
    const rarity = unit.unitInfo.rarity;
    const aff = unit.unitInfo.affection;    // object
    const keys = [ "notSkill", ...Object.keys(unit.skill.detail) ];
    let corr = 0.0;
    let bufferInfo;
    // 150%ボーナスの補正値
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
    if(_.includes(unit.unitInfo.note, "男性")) corr = _.floor(corr * 0.95, 2);
    if(_.includes(unit.unitInfo.attribution, "ちび")) corr = 0.10;
    if(aff.bonus in lists.specialAff) {
        const corr_specail = Number(_.findKey(lists.specialAff[aff.bonus][rarity], arr => _.includes(arr, unitName)));
        if(!isNaN(corr_specail)) corr = corr_specail;
    }
    
    // 攻撃速度の計算
    // 好感度ボーナス
    let rate = 1.0;
    switch(aff.bonus) {
        case "攻撃硬直":
            aff.changeRate = -Math.round(corr * (aff.percentage - 100) * 2);
            rate = 1 + aff.changeRate / 100;
            break;
    }
    
    // 第二覚醒等で変化するもの(min? max? 個人とクラスが被ったときはどうか?)
    const changed = { startup: Infinity, remain: Infinity, cooldown: Infinity };
    if("selfBuff" in unit && "hasteFixed" in unit.selfBuff) {
        bufferInfo = _.find(unit.selfBuff.hasteFixed, { buffer: unitName });
        if(bufferInfo) changed[bufferInfo.change] = bufferInfo.value;
        bufferInfo = _.find(unit.selfBuff.hasteFixed, { buffer: unitClass });
        if(bufferInfo) changed[bufferInfo.change] = Math.min(changed[bufferInfo.change], bufferInfo.value);
    }
    
    if(withBuff) {
        const buffValue = {
            haste: _.map(funcs.unitsData.GetBuffValue(unit, "haste"), rate => 1.0 - rate)
            , atkCD_fixed: funcs.unitsData.GetBuffValue(unit, "hasteFixed", false, false)   // 0: value, 1: unforced
            , redMapEff: 1.0 - funcs.unitsData.GetBuffValue(unit, "redMapEff")
        }
        _.forEach(keys, key => {
            const isNotFixed = !("isFixed" in unit.unitInfo.atkInterval.uncorr[key]);
            const atkStartup = Number.isFinite(changed.startup) && isNotFixed ? changed.startup : unit.unitInfo.atkInterval.uncorr[key].startup;
            if(!atkStartup) return;
            
            const atkRemain = Number.isFinite(changed.remain) && isNotFixed ? changed.remain : unit.unitInfo.atkInterval.uncorr[key].remain;
            let atkCooldown = Number.isFinite(changed.cooldown) && isNotFixed ? changed.cooldown : unit.unitInfo.atkInterval.uncorr[key].cooldown;
            
            if(aff.bonus === "攻撃硬直") atkCooldown = Math.ceil((atkCooldown - 1) * rate + 1);
            atkCooldown = Math.floor((atkCooldown - 1) * _.min(buffValue.haste) + 1);
            if(buffValue.atkCD_fixed[0]) {
                const atkCD_fixed = Math.floor((buffValue.atkCD_fixed[0] - 1) * buffValue.haste[0] + 1);
                atkCooldown = buffValue.atkCD_fixed[1] ? Math.min(atkCooldown, atkCD_fixed) : atkCD_fixed;
            }
            /*
            atkCooldown = buffValue.atkCD_fixed
                ? Math.floor((buffValue.atkCD_fixed - 1) * buffValue.haste[0] + 1)
                : Math.floor((atkCooldown - 1) * _.min(buffValue.haste) + 1);
            //         ↑ceil?
            */
            if(!_.includes(unit.unitInfo.note, "状態異常無効"))
                atkCooldown += num.incAtkCooldown_enemy.value * 2;
            if(!_.includes(unit.unitInfo.note, "深海適応"))
                atkCooldown += Math.ceil(num.incAtkCooldown_map.value * buffValue.redMapEff) * 2;
            unit.unitInfo.atkInterval.corr[key].startup = atkStartup;
            unit.unitInfo.atkInterval.corr[key].remain = atkRemain;
            unit.unitInfo.atkInterval.corr[key].cooldown = atkCooldown;
        });
    } else {
        _.forEach(keys, key => {
            const isNotFixed = !("isFixed" in unit.unitInfo.atkInterval.uncorr[key]);
            const atkStartup = Number.isFinite(changed.startup) && isNotFixed ? changed.startup : unit.unitInfo.atkInterval.uncorr[key].startup;
            if(!atkStartup) return;
            
            const atkRemain = Number.isFinite(changed.remain) && isNotFixed ? changed.remain : unit.unitInfo.atkInterval.uncorr[key].remain;
            let atkCooldown = Number.isFinite(changed.cooldown) && isNotFixed ? changed.cooldown : unit.unitInfo.atkInterval.uncorr[key].cooldown;
            
            if(aff.bonus === "攻撃硬直") atkCooldown = Math.ceil((atkCooldown - 1) * rate + 1);
            unit.unitInfo.atkInterval.corr[key].startup = atkStartup;
            unit.unitInfo.atkInterval.corr[key].remain = atkRemain;
            unit.unitInfo.atkInterval.corr[key].cooldown = atkCooldown;
        });
    }
}

// HP減少率
funcs.unitsData.SetHPred = (unit, withBuff = true) => {
    //const unitName = unit.unitInfo.unitName;
    const unitClass = unit.unitInfo.unitClass.selected;
    const HPred = _.includes(lists.evilPrincess, unitClass)
        ? (unitClass === "イビルシーカー" ? 15 : 10)
        : null;
    
    if(withBuff) {
        const buffValue = {
            dmgMul: 1.0 + funcs.unitsData.GetBuffValue(unit, "giveDmgMul")
            , takenDmg: 1.0 + funcs.unitsData.GetBuffValue(unit, "takenDmg")
        };
        _.forEach(unit.skill.detail[unit.skill.selected], obj => {
            if(!("target" in obj)) return;
            if(HPred) obj.uncorr.HPred = HPred;
            if("dmgMul" in obj && obj.dmgMul.checked)
                obj.corr.HPred = obj.uncorr.HPred * Math.max(buffValue.dmgMul, obj.dmgMul.mul) * buffValue.takenDmg;
            else obj.corr.HPred = obj.uncorr.HPred * buffValue.dmgMul * buffValue.takenDmg;
        });
    } else {
        if(!HPred) return;
        _.forEach(unit.skill.detail[unit.skill.selected], obj => {
            if(!("target" in obj)) return;
            obj.uncorr.HPred = HPred;
        });
    }
}

// ユニット数カウント
funcs.unitsData.CountUnits = () => {
    _.forEach([ "onSkillAct", "onHit" ], type => {
        const sum = _.reduce(lists.units[type].num, (sum, n) => sum + n, 0);
        if(lists.units[type].list.length === sum) return;
        // 保持しているユニット数データと異なる場合に数え直し
        _.forEach(lists.units[type].num, (n, key) => lists.units[type].num[key] = 0);
        _.forEach(lists.units[type].list, unit => {
            if("added" in unit)
                ++lists.units[type].num.added;  // 追加分
            else if(_.includes(lists.evilPrincess, unit.unitInfo.unitClass.selected))
                ++lists.units[type].num.EP;     // イビルプリンセス系
            else
                ++lists.units[type].num.notEP;  // 非イビルプリンセス系
        });
    });
}