const Initialize = () => {
    if(saveData.data) {
        _.forEach(saveData.data.rCTdepType, (value, depType) => {
            if(depType in lists.buff.rCTdepType.list) lists.buff.rCTdepType.list[depType] = value;
        });
        _.forEach(saveData.data.numeral, (obj, key) => {
            if(!(key in num)) return;
            num[key].value = obj.value;
            if("use" in obj && "use" in num[key]) num[key].use = obj.use;
            if("value2" in obj && "value2" in num[key]) num[key].value2 = obj.value2;
        });
        _.forEach(saveData.data.units, (units, type) => {
            if(!(type in lists.units)) return;
            _.forEach(units, (unitInfo, unitName) => {
                const unit = _.find(lists.units[type].list, { unitInfo: { unitName: unitName } });
                if(!unit) return;
                unit.hidden = unitInfo.hidden;
                unit.unitInfo.unitClass.selected = unitInfo.class;
                unit.unitInfo.affection.percentage = unitInfo.aff;
                unit.skill.selected = unitInfo.skill;
                if("dmgMul" in unitInfo) {
                    _.forEach(unitInfo.dmgMul, (dmgMul, state) => {
                        if(!(state in unit.skill.detail)) return;
                        const skills = unit.skill.detail[state];
                        _.forEach(dmgMul, (checked, index) => {
                            if(skills[index] && "dmgMul" in skills[index]) skills[index].dmgMul.checked = checked;
                        });
                    });
                }
            });
            lists.units[type].list.push(...saveData.data.added[type]);
        });
        lists.customFlow.push(...saveData.data.customFlow);
        funcs.graph.ToggleSequent(saveData.data.graphSequent);
    }
    
    _.forEach(lists.buff, (buff, buffType) => {
        funcs.SetID(buff.list);
        if(buffType !== "rCTdepType") _.forEach(buff.list, bufferInfo => funcs.unitsData.SetBufferInfo(bufferInfo, true));
    });
    _.forEach(lists.selfBuff, buff => funcs.SetID(buff));
    _.forEach(lists.units, units => {
        funcs.SetID(units.list);
        _.forEach(units.list, unit => funcs.unitsData.SetBufferInfo(unit));
    });
    
    _.forEach(lists.buff, (buff, buffType) => funcs.createHTML.Opt_checkbox(buff.list, buffType));
    funcs.AddCompoundInfo();
    funcs.SetBuffDisabled();
    funcs.createHTML.Opt_rCTdepType();
    _.forEach(num, (obj, key) => funcs.createHTML.Opt_number(key, obj));
    funcs.createHTML.GraphlineDispBtn("onSkillAct");
    funcs.createHTML.GraphlineDispBtn("onHit");
    funcs.createHTML.UpdateHistory();
    funcs.graph.SetChart();
    funcs.createHTML.CustomFlowTable();
    tippy(".tooltip-t", {
        placement: "top"
        , allowHTML: true
        , maxWidth: "1000px"
    });
    tippy(".tooltip-ts", {
        placement: "top-start"
        , allowHTML: true
        , maxWidth: "1000px"
    });
    saveData.data = null;
}