function importJS() {
    const scripts = [
        "list_buff"
        , "list_selfBuff"
        , "list_special"
        , "list_units_onSkillAct"
        , "list_units_onHit"
        , "list_attr"
        , "numericalValue"
        , "updateHistory"
        , "funcs"
        , "funcs_createHTML"
        , "funcs_createModal"
        , "funcs_unitsData"
        , "funcs_graph"
        , "initialize"
    ];
    scripts.forEach(elem => document.write(`<script src="./HPcut/js/${elem}.js"></script>`));
}

importJS();