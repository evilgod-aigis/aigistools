(function() {
    const scripts = [
        "unitList"
        , "updateHistory"
        , "createHTML"
        , "manageTable"
        , "saveData"
        , "initialize"
    ];
    scripts.forEach(elem => document.write(`<script src="./bondingQuestChecker/js/${elem}.js"></script>`));
})();