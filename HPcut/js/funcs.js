const funcs = {};

// id付け
funcs.SetID = list => Array.isArray(list) ? _.forEach(list, (elem, i) => elem.id = i) : true

// bufferの表記設定
funcs.SetBufferDisplay = () => {
    _.forEach(lists.buff, (buff, buffType) => {
        if(buffType === "rCTdepType") return;
        _.forEach(buff.list, bufferInfo => {
            const rarity = "rarity" in bufferInfo ? `[${bufferInfo.rarity}]` : "";
            const aw = "showAwaken" in bufferInfo ? `(${bufferInfo.awaken})` : "";
            bufferInfo.display = `${bufferInfo.buffer}${rarity}${aw}`;
        });
    });
}

// compoundにidやタイミングの情報を追加
funcs.AddCompoundInfo = () => {
    const priority = { team: 0, deploy: 1, skill: 2 };
    _.forEach(lists.buff, (buff, buffType) => {
        if(buffType === "rCTdepType") return;
        _.forEach(buff.list, bufferInfo => {
            if(!("compound" in bufferInfo)) return;
            
            const priority_buffer = priority[bufferInfo.req];
            const isClass_buffer = "isClass" in bufferInfo;
            _.forEach(bufferInfo.compound, (compObj, compType) => {
                if(compType === "rCTdepType") return;
                _.forEach(compObj, comp => {
                    const target = _.reduce(_.filter(lists.buff[compType].list, comp), (arr, compBufferInfo) => {
                        // 0: 同時, 1: trueになるとき, -1: falseになるとき
                        let when = Math.sign(priority_buffer - priority[compBufferInfo.req]);
                        const diff_isClass = ("isClass" in compBufferInfo) - isClass_buffer;
                        if(when * diff_isClass < 0) return arr;
                        if(!when) when = diff_isClass;  // バフタイプが一致
                        arr.push({ bufferInfo: compBufferInfo, when: when });
                        return arr;
                    }, []);
                    if(target.length) comp.target = target;
                });
            });
        });
    });
}

// オプションのdisabled設定
funcs.SetBuffDisabled = (type = null, unit = null) => {
    _.forEach(lists.buff, (buff, buffType) => {
        if(buffType === "rCTdepType") return;
        if(unit) {
            _.forEach(buff.list, bufferInfo => {
                const checkbox = document.getElementById(`${buffType}-${bufferInfo.id}`).getElementsByTagName('input')[0];
                if(!checkbox.disabled || (buffType === "haste" || buffType === "hasteFixed") && type === "onSkillAct") return;
                checkbox.disabled = bufferInfo.disabled = !funcs.unitsData.IsTarget(unit, bufferInfo);
                if(checkbox.disabled) checkbox.checked = false;
            });
        } else {
            _.forEach(buff.list, bufferInfo => {
                let existTarget;
                _.forEach([ "onSkillAct", "onHit" ], type =>
                    ((buffType === "haste" || buffType === "hasteFixed") && type === "onSkillAct")
                    || !(existTarget = _.some(lists.units[type].list, unit => funcs.unitsData.IsTarget(unit, bufferInfo)))
                );
                _.forEach(lists.buff, (buff2, buffType2) => 
                    !(existTarget || buffType === "haste" || buffType === "hasteFixed")
                    && (buffType2 === "rCTdepType"
                        || !_.some(buff2.list, bufferInfo2 =>
                            "unitInfo" in bufferInfo2 && (existTarget = funcs.unitsData.IsTarget(bufferInfo2, bufferInfo))
                        )
                    )
                );
                const checkbox = document.getElementById(`${buffType}-${bufferInfo.id}`).getElementsByTagName('input')[0];
                checkbox.disabled = bufferInfo.disabled = !existTarget;
                if(checkbox.disabled) checkbox.checked = false;
            });
        }
    });
}

// 入力制限
funcs.LimitNum_int = (thisElem, min, max) => {
    const val = parseInt(thisElem.value);
    if(Number.isNaN(val) || val < min) {
        thisElem.value = min;
    } else if(val > max) {
        thisElem.value = max;
    } else {
        thisElem.value = Math.floor(val);
    }
}
funcs.LimitNum_float = (thisElem, min, max) => {
    const val = parseFloat(thisElem.value);
    if(Number.isNaN(val) || val < min) {
        thisElem.value = min;
    } else if(val > max) {
        thisElem.value = max;
    }
}