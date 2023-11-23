(function() {
    const scripts = [
        "debuff_team"
        , "debuff_mixture"
        , "debuff_hit"
        , "debuff_counter"
        , "debuff_scalar"
        , "debuff_takenDmg"
        , "updateHistory"
        , "createHTML"
        , "targetInfo"
        , "manageTable"
        , "initialize"
    ];
    scripts.forEach(elem => document.write(`<script src="./searchDebuffer/js/${elem}.js"></script>`));
})();