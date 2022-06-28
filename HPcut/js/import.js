function importJS() {
    const scripts = [
        "./js/list_buff.js"
        , "./js/list_selfBuff.js"
        , "./js/list_special.js"
        , "./js/list_units_onSkillAct.js"
        , "./js/list_units_onHit.js"
        , "./js/list_attr.js"
        , "./js/numericalValue.js"
        , "./js/updateHistory.js"
        , "./js/funcs.js"
        , "./js/funcs_createHTML.js"
        , "./js/funcs_createModal.js"
        , "./js/funcs_unitsData.js"
        , "./js/funcs_graph.js"
        , "./js/initialize.js"
    ];
    scripts.forEach(elem => document.write(`<script src="${elem}"></script>`));
}

importJS();
