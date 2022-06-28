_.forEach(lists.buff, buff => funcs.SetID(buff.list));
_.forEach(lists.selfBuff, buff => funcs.SetID(buff));
_.forEach(lists.units, units => funcs.SetID(units.list));

window.addEventListener("DOMContentLoaded", () => {
    _.forEach(lists.buff, (_, key) => funcs.createHTML.Opt_checkbox(key));
    funcs.createHTML.Opt_rCTdepType();
    _.forEach(num, (_, key) => funcs.createHTML.Opt_number(key));
    funcs.createHTML.GraphlineDispBtn("onSkillAct");
    funcs.createHTML.GraphlineDispBtn("onHit");
    funcs.createHTML.UpdateHistory();
    funcs.graph.Chart();
    funcs.graph.SetGraphData([ true, true ]);
    
    tippy(".tooltip-t", {
        placement: "top",
        allowHTML: true
    });
    tippy(".tooltip-ts", {
        placement: "top-start",
        allowHTML: true
    });
});