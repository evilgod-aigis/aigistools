function importJS() {
    const scripts = [
        "buff_team"
        , "buff_own"
        , "buff_perm"
        , "buff_dep_gl"
        , "buff_dep_area"
        , "buff_skill_area"
        //, "buff_skill_gl"
        , "buff_skill_cat"
        , "buff_add"
        , "buff_unique"
        , "updateHistory"
        , "createHTML"
        , "targetInfo"
        , "manageTable"
        , "initialize"
    ];
    scripts.forEach(elem => document.write(`<script src="./searchBuffer/js/${elem}.js"></script>`));
}

importJS();