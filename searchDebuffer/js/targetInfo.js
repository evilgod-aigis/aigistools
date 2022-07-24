const target = {};

target.word = {
    attr: "属性"
};

target.attr = [
    "人間", "ゴブリン", "オーク", "ドラゴン", "妖怪", "巨人", "ゴーレム", "アンデッド"
    , "デーモン", "魔神", "天使", "天界人", "神", "神獣", "魔獣", "妖獣", "獣", "獣人"
    , "植物", "インセクト", "魚人", "水棲", "機械", "アーマー", "英傑"
];
target.selected = {};

target.CreateForm = () => {
    const targetInfo = document.getElementById("target-info");
    targetInfo.innerHTML = "";
    const newTable = document.createElement("table");
    newTable.setAttribute("border", "1");
    
    let newTr, newTh, newTd, newForm, newLabel, newCheckbox, newRadio, newBr;
    
    /*
    const CreateRadioForm = (category, tr, colspan) => {
        newTh = document.createElement("th");
        newTh.colSpan = colspan;
        newTh.innerHTML = target.word[category];
        tr.appendChild(newTh);
        newTd = document.createElement("td");
        newForm = document.createElement("form");
        newForm.id = `target-info_${category}`;
        
        CreateRadio(newForm, "すべて含める");
        CreateRadio(newForm, "すべて含めない");
        newBr = document.createElement("br");
        newForm.appendChild(newBr);
        _.forEach(target[category], value => CreateRadio(newForm, value));
        newForm.options[1].checked = true;
        newTd.appendChild(newForm);
        tr.appendChild(newTd);
        newTable.appendChild(tr);
    }
    const CreateRadio = (form, value) => {
        newLabel = document.createElement("label");
        newRadio = document.createElement("input");
        newRadio.type = "radio";
        newRadio.name = "options";
        newRadio.value = value;
        newLabel.appendChild(newRadio);
        newLabel.innerHTML += value;
        form.appendChild(newLabel);
    }
    */
    
    // attr
    newTr = document.createElement("tr");
    newTh = document.createElement("th");
    newTh.innerHTML = target.word["attr"];
    newTr.appendChild(newTh);
    newTd = document.createElement("td");
    _.forEach({ "全部ON": true, "全部OFF": false }, (checked, text) => {
        const newButton = document.createElement("button");
        newButton.type = "button";
        newButton.setAttribute("onclick", `target.ToggleAllAttr(${checked})`);
        newButton.innerHTML = text;
        newTd.appendChild(newButton);
    });
    newForm = document.createElement("form");
    newForm.id = "target-info_attr";
    newLabel = document.createElement("label");
    newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.name = "options";
    newCheckbox.value = "indisc";
    newCheckbox.setAttribute("checked", "true");
    newLabel.appendChild(newCheckbox);
    newLabel.innerHTML += "対象を指定しないものを含める";
    newForm.appendChild(newLabel);
    newBr = document.createElement("br");
    newForm.appendChild(newBr);
    _.forEach(target.attr, value => {
        newLabel = document.createElement("label");
        newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.name = "options";
        newCheckbox.value = value;
        newLabel.appendChild(newCheckbox);
        newLabel.innerHTML += value;
        newForm.appendChild(newLabel);
    });
    newTd.appendChild(newForm);
    newTr.appendChild(newTd);
    newTable.appendChild(newTr);
    
    // table option
    newTr = document.createElement("tr");
    newTh = document.createElement("th");
    newTh.className = "tooltip-ts";
    newTh.setAttribute(
        "data-tippy-content"
        , "編成/命中/スカラーはデバフ区分が共通だが<br>それ以外はバラバラなので…"
    );
    newTh.innerHTML = "表示方法";
    newTr.appendChild(newTh);
    newTd = document.createElement("td");
    newForm = document.createElement("form");
    newForm.id = "target-info_tableOption";
    _.forEach(
        [
            {
                value: "domain"
                , label: "効果範囲優先"
                , tooltip: "効果範囲：範囲/全体で分ける<br>同一ユニットによる効果か分かりやすい"
            }
            , {
                value: "type"
                , label: "区分優先"
                , tooltip: "区分で分ける<br>競合の有無が分かりやすい"
            }
        ]
        , elem => {
            newLabel = document.createElement("label");
            newLabel.className = "tooltip-ts";
            newLabel.setAttribute("data-tippy-content", elem.tooltip);
            newRadio = document.createElement("input");
            newRadio.type = "radio";
            newRadio.name = "options";
            newRadio.value = elem.value;
            newLabel.appendChild(newRadio);
            newLabel.innerHTML += elem.label;
            newForm.appendChild(newLabel);
        }
    );
    newForm.options[0].checked = true;
    newTd.appendChild(newForm);
    newTr.appendChild(newTd);
    newTable.appendChild(newTr);
    targetInfo.appendChild(newTable);
    
    const newButton = document.createElement("button");
    newButton.type = "button";
    newButton.id = "search";
    newButton.setAttribute("onclick", "target.Search()");
    newButton.innerHTML = "検索";
    targetInfo.appendChild(newButton);
}

// 属性一括ON/OFF
target.ToggleAllAttr = _checked => {
    const othersForm = document.getElementById("target-info_attr");
    _.forEach(othersForm.options, option => { option.checked = _checked; });
}

// 検索実行
target.Search = () => {
    const attrForm = document.getElementById("target-info_attr");
    target.selected.attr = [];
    _.forEach(attrForm.options, option => {
        if(option.checked) target.selected.attr.push(option.value);
    });
    
    table.mixture = document.getElementById("target-info_tableOption").options.value;
    
    const filters = document.getElementById("filters");
    const tables = document.getElementById("tables");
    filters.classList.remove("is-unshown");
    tables.classList.remove("is-unshown");
    table.CreateTable();
}

// 絞り込み用
target.IsMatch = _target => {
    let match = false;
    if(_target === undefined)
        return _.includes(target.selected.attr, "indisc");
    else if(Array.isArray(_target)) {
        _.forEach(_target, and => {
            let matchSub = true;
            _.forEach(and, (arr, cat) => {
                if(Array.isArray(target.selected[cat]))
                    matchSub &= _.reduce(target.selected[cat], (result, selected) =>
                        result |= _.includes(arr, selected)
                    , false);
                else matchSub &= _.includes(arr, target.selected[cat]);
            });
            match |= matchSub;
            if(match) return false;
        });
    } else {
        match = true;
        _.forEach(_target, (arr, cat) => {
            if(Array.isArray(target.selected[cat]))
                match &= _.reduce(target.selected[cat], (result, selected) =>
                    result |= _.includes(arr, selected)
                , false);
            else match &= _.includes(arr, target.selected[cat]);
        });
    }
    return match;
}