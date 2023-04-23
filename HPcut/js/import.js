const isPC = !navigator.userAgent.match(/iPhone|Android.+Mobile/);
(() => {
    const scripts = [
        "list_buff"
        , "list_selfBuff"
        , "list_special"
        , "list_units_onSkillAct"
        , "list_units_onHit"
        , "list_attr"
        , "numeral"
        , "updateHistory"
        , "funcs"
        , "funcs_createHTML"
        , "funcs_createModal"
        , "funcs_unitsData"
        , "funcs_graph"
        , "customFlow"
        , "saveData"
        , "initialize"
    ];
    _.forEach(scripts, elem => document.write(`<script src="./HPcut/js/${elem}.js"></script>`));
    window.addEventListener("DOMContentLoaded", () => {
        funcs.SetBufferDisplay();
        funcs.saveData.OpenDB();
    });
})();