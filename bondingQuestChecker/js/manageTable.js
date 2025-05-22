const table = {};

table.word = {
    id: "id", unitName: "ユニット", class: "クラス", implDate: "ユニット<br />実装日", implDate_bq: "クエスト<br />実装日"
    , own: "所持<br />", clear: "クリア<br />"
    , name: "簡易", fullName: "ゲーム準拠", icon: "アイコン"
    , bh: "ブラック[英傑]", b: "ブラック", ph: "プラチナ[英傑]", p: "プラチナ", g: "ゴールド", s: "サファイア", sl: "シルバー"
    , gc: "ちび(ゴールド)"
    , sh: "召喚"
    , ev: "イベント", drop: "ドロップ", star: "試練", item: "収集", subj: "大討伐", popu: "人気闘兵", maji: "魔神最終決戦"
    , tr: "交換", rain: "虹水晶", demo: "魔水晶", dark: "闇水晶", mili: "武勲結晶", hero: "英傑結晶", evil: "悪霊結晶"
    , sp: "その他", gift: "配布", shop: "課金", code: "シリアルコード", else: "その他"
    , vang: "近接", rear: "遠距離", both: "遠近距離"
    , none: "未実装", "year_bq-none": "クエ未実装"
};

table.unitName = [ "name", "fullName", "icon" ];
table.rarity = [ "bh", "b", "ph", "p", "g", "s" ];
table.obtain = {
    sh: []
    , ev: [ "drop", "star", "item", "subj", "popu", "maji", "else" ]
    , tr: [ "rain", "demo", "dark", "mili", "hero", "evil", "else" ]
    , sp: [ "gift", "shop", "code", "else" ]
};
table.depType = [ "vang", "rear", "both" ];
table.derivation = [ "無印", "白の帝国", "お正月", "温泉", "バレンタイン", "学園", "バニー", "花嫁", "水着", "浴衣", "ハロウィン", "クリスマス", "私服", "その他" ];
table.class = {
    vang: [
        // 英傑
        "魔竜騎士", "バーバリアンクイーン", "古代魔導機兵", "銀腕の神話", "ウェポンマスター", "魔導生命体", "アヤカシの王", "黎明の翼"
        , "トゥルーブラッド", "暁光の神話", "神獣騎士", "王国軍初代副司令", "大華の神話", "マギステルミリトゥム", "光槍ビルガの継承者", "祖竜"
        , "開天の神話", "魔境の主"
        // 通常
        , "ソルジャー", "ヘビーアーマー", "ワルキューレ", "ローグ", "プリンセス", "ヴァンパイアプリンセス", "イモータルプリンセス", "イビルプリンセス"
        , "バンデット", "中級竜兵", "ドラゴンプリンセス", "サムライ", "忍者", "ペガサスライダー", "ダークファイター", "アベンジャー", "モンク"
        , "前衛戦術家", "魔法剣士", "エンジェル", "くぐつ使い", "セーラー", "妖狐", "神官戦士", "メイジアーマー", "ドラゴンライダー", "ボウライダー"
        , "メイド", "ヴァンパイアロード", "ソードマスター", "ロイヤルガード", "仙人", "魔神", "仙猿", "戦の聖霊", "ダークストーカー", "ぬらりひょん"
        , "重装砲兵", "鬼", "インペリアルナイト", "天狗", "鍛冶職人", "グラディエーター", "キョンシー", "雷公", "モンスターブレイカー", "風伯"
        , "グランドナイト", "グリフィンライダー", "サッパー", "真人", "邪仙", "魔王親衛隊", "ぬえ", "鬼刃忍", "ランスマスター", "デーモンロード"
        , "犬神", "料理人", "デモンルーン", "スチームナイト", "エンプレス", "かまいたち", "シーソルジャー", "アクアナイト", "テンプルナイト"
        , "迷宮の悪霊", "オートマタ", "ぬりかべ", "霊刀つくもがみ", "戦巫女", "シャークウォリアー", "儀仗軍神", "武侠", "サベージファイター"
        , "ハデスソルジャー", "隧道掘削兵", "シールダー", "女王子", "一目の竜", "天尊", "ダーク王子", "処刑人", "白の帝国城", "神話の継承者"
        , "デモンリドゥ", "カオスルーラー", "衛士", "コロッサス", "妖糸使い", "憤怒の海神", "初代皇帝", "王城", "夜の魔女"
        , "小悪魔アイドル", "王国民的アイドル"
        , "グレーターデーモン", "ガオレオン", "皇帝"
        , "試作型英雄騎"
        // コラボ
        , "ねんどろいどプリンセス"
        , "王太子"
        , "ホーネット派魔人【ランス】", "忍者【ランス】", "上杉家当主【ランス】", "ゼス警察長官【ランス】", "逃亡悪魔【ランス】", "旅人【ランス】"
        , "武将【恋姫】", "君主【恋姫】", "奸雄【恋姫】", "勇士【恋姫】", "小覇王【恋姫】", "王女【恋姫】"
        , "騎士【七つの大罪】", "盗賊【七つの大罪】", "巨人【七つの大罪】", "妖精【七つの大罪】"
        , "騎士【封緘】"
        , "怪盗【GBM】", "戯曲作家【GBM】", "物語を渡る者【GBM】", "心ある虫【GBM】", "刑事【GBM】"
        , "鬼【ななリン】"
        , "黒竜娘【モンスター娘TD】", "鉄腕娘【モンスター娘TD】"
        , "対魔忍 超人【対魔忍】", "対魔忍 魔性【対魔忍】", "対魔忍 精神【対魔忍】", "対魔忍 科学【対魔忍】"
    ]
    , rear: [
        // 英傑
        "占星術師", "チェイスハンター", "ジオマンサー", "転生魔導士", "ファラオ", "ピューティアー", "カースウィスパラー", "未踏海域の覇者", "ギアマンサー"
        // 通常
        , "アーチャー", "メイジ", "ヒーラー", "ウィッチ", "パイレーツ", "ドラゴンシャーマン", "ヴァンパイアハンター", "シャーマン", "ビショップ"
        , "後衛戦術家", "陰陽師", "サモナー", "風水使い", "砲術士", "ダンサー", "政務官", "ネクロマンサー", "クロノウィッチ", "ドルイド"
        , "アルケミスト", "レンジャー", "シーフ", "呪術使い", "魔物使い", "ダークプリースト", "エンチャンター", "マーチャント", "フェンリルシャーマン"
        , "モンスタースレイヤー", "デモンサモナー", "エレメンタラー", "猫又", "道化師", "ライフリンカー", "幻獣使い", "ルーンアコライト", "ロード"
        , "支援工兵", "デモンシャーマン", "異界召喚士", "シービショップ", "発明家", "符術士", "狛犬", "儀式魔術師", "幻術士", "ハーバリスト"
        , "霊宝つくもがみ", "スカラー", "夜行さん", "ドラグーン", "ドラゴンメイジ", "座敷わらし", "魔界総帥", "雪娘", "英傑の塔", "リッチ【闇の軍勢】"
        , "政務官【闇の軍勢】", "ガンスリンガー", "時の俯瞰者", "アイギス神殿", "ハデスシャーマン", "メディック", "豊穣神", "吟遊詩人", "呪命師"
        , "悪疫の王"
        , "アイドル召喚士"
        , "支援の聖霊", "ゴブリン博士", "メカゴブリンクイーン"
        // コラボ
        , "アコライト", "魔法使い【ランス】", "初代大統領【ランス】", "ホーネット派代表【ランス】"
        , "軍師【恋姫】", "暴君【恋姫】", "弓将【恋姫】"
        , "王女【七つの大罪】"
        , "傀儡人形【封緘】"
        , "水底の支配者【GBM】", "錬金術師【GBM】"
        , "新米刑事【流星WA】", "交通課職員【流星WA】"
        , "百腕娘【モンスター娘TD】"
    ]
    , both: [
        // 英傑
        "異世界戦士", "盤上の支配者"
        // 通常
        , "妖狸", "ロケットトルーパー", "スカイウォリアー", "スカイシューター", "スカウト", "スカイヒーラー", "エアセイラー"
        , "帝国アイドル"
        // コラボ
        , "不死鳥娘【モンスター娘TD】"
        , "対魔忍 自然【対魔忍】"
    ]
};
// アイギスリリース年
const YEAR_RELEASE = 2013;
// 交流クエスト実装年
const YEAR_THE_FIRST_BQ_IMPLEMENTED = 2016;
table.year = _.map(
    [...new Array((new Date()).getFullYear() - YEAR_RELEASE + 1)]
    , (_, i) => {
        const year = YEAR_RELEASE + i;
        table.word[year] = `${year}年`;
        return year;
    }
);
// 表の見出し
table.column = [ "id", "unitName", "class", "implDate", "implDate_bq", "own", "clear" ];
// ソート可能な見出し
table.sortable = [ "id", "class", "implDate", "implDate_bq", "own", "clear" ];
// 非表示可能な見出し
table.hidable = [ "class", "implDate", "implDate_bq" ];

// オブジェクト生成
table.SetObjects = () => {
    if("tables" in table) return;
    
    // list: 各レアリティのユニットを格納
    // sortedBy: 今何でソートされているか
    table.tables = {};
    _.forEach(table.rarity, rarity => table.tables[rarity] = { list: [], sortedBy: "id" });
    _.forEach(unitList, (unit, id) => {
        const rarity = unit.rarity;
        if("male" in unit || "collabo" in unit || rarity === "sl" || rarity === "gc") return;
        if(id !== unit.id) {
            console.log(`0x${unit.id.toString(16).padStart(4, "0")} -> 0x${id.toString(16).padStart(4, "0")}`)
            return;
        }
        table.tables[rarity].list.push(unit);
    });
    
    // 設定保存用
    table.setting = {};
    // ユニット表示
    table.setting.unitName = "name";
    // 背景色
    table.setting.backgroundColor = {
        "own": "#ffcc00"
        , "year_bq-none": "#e0e0e0"
        , "clear": "#aaccff"
    };
    
    // フィルタ保存用
    table.filter = {};
    // 列
    table.filter.column = {};
    _.forEach(table.hidable, colName => table.filter.column[colName] = true);
    const winWidth = document.body.clientWidth;
    table.filter.column.class = winWidth > 702;
    table.filter.column.implDate = winWidth > 530;
    table.filter.column.implDate_bq = winWidth > 429;
    // レアリティ
    table.filter.rarity = {};
    _.forEach(table.rarity, rarity => table.filter.rarity[rarity] = true);
    // 入手
    table.filter.obtain = {};
    _.forEach(table.obtain, (arr, obtain) => {
        table.filter.obtain[obtain] = { checked: true, part: {} };
        _.forEach(arr, part => table.filter.obtain[obtain].part[part] = true);
    });
    // 配置型
    table.filter.depType = {};
    _.forEach(table.depType, depType => table.filter.depType[depType] = true);
    // 衣装違い等
    table.filter.derivation = {};
    _.forEach(table.derivation, derivation => table.filter.derivation[derivation] = true);
    // ユニット実装年
    table.filter.year = {};
    _.forEach(table.year, year => table.filter.year[year] = true);
    // 交流クエスト実装年
    table.filter.year_bq = {};
    _.forEach(table.year, year => {
        if(year >= YEAR_THE_FIRST_BQ_IMPLEMENTED) table.filter.year_bq[year] = true;
    });
    table.filter.year_bq.none = true;
    // 所持
    table.filter.own = 3;
    // クリア
    table.filter.clear = 3;
}

// 設定生成
table.CreateSetting = () => {
    // html
    const settings = document.getElementById("settings");
    settings.innerHTML = "";
    const newButton = document.createElement("button");
    newButton.type = "button";
    newButton.id = "toggler-setting";
    newButton.setAttribute("onclick", "table.ToggleSettingShown(this)");
    newButton.innerHTML = "設定";
    settings.appendChild(newButton);
    const newSettingWindow = document.createElement("div");
    newSettingWindow.id = "setting-window";
    newSettingWindow.className = "is-unshown";
    newSettingWindow.innerHTML = `
        <p style="font-size: 20px;">
            設定
        </p>
    `;
    const newSettingCont = document.createElement("div");
    newSettingCont.id = "setting-content";
    
    const CreateSettingArea = title => {
        const newSettingArea = document.createElement("div");
        newSettingArea.className = "setting-area";
        const newTitleArea = document.createElement("div");
        newTitleArea.className = "setting-title-area";
        const newTitle = document.createElement("span");
        newTitle.className = "setting-title";
        newTitle.innerHTML = title;
        newTitleArea.appendChild(newTitle);
        newSettingArea.appendChild(newTitleArea);
        return newSettingArea;
    }
    
    // ロック
    let newSettingArea = CreateSettingArea("ロック");
    const newButtonArea = document.createElement("div");
    newButtonArea.id = "setting_lock";
    newButtonArea.className = "setting-button-area";
    _.forEach({ "ロック": true, "解除": false }, (bool, text) => {
        const newButton = document.createElement("button");
        newButton.type = "button";
        if(text === "ロック") {
            newButton.classList.add("tooltip-ts");
            newButton.setAttribute(
                "data-tippy-content"
                , "チェック済みのものをロック"
            );
        }
        newButton.setAttribute("onclick", `table.ToggleCheckbox.lock(${bool})`);
        newButton.innerHTML = text;
        newButtonArea.appendChild(newButton);
    });
    newSettingArea.appendChild(newButtonArea);
    newSettingCont.appendChild(newSettingArea);
    
    // ユニット名の表示
    newSettingArea = CreateSettingArea("ユニット名");
    const newRadioArea = document.createElement("div");
    newRadioArea.id = "setting_unitName";
    newRadioArea.className = "setting-radio-area";
    _.forEach(table.unitName, key => {
        const newLabel = document.createElement("label");
        const newRadio = document.createElement("input");
        newRadio.type = "radio";
        newRadio.setAttribute("name", "unitName");
        if(table.setting.unitName === key) newRadio.setAttribute("checked", "true");
        newRadio.setAttribute("onchange", `table.setting.unitName="${key}"; table.ToggleNameDisplay()`);
        newLabel.appendChild(newRadio);
        newLabel.innerHTML += table.word[key];
        newRadioArea.appendChild(newLabel);
    });
    newSettingArea.appendChild(newRadioArea);
    newSettingCont.appendChild(newSettingArea);
    
    // 背景色の変更
    newSettingArea = CreateSettingArea("行の色");
    const newColorArea = document.createElement("div");
    newColorArea.id = "setting_backgroundColor";
    newColorArea.className = "setting-color-area";
    _.forEach(table.setting.backgroundColor, (color, className) => {
        const newLabel = document.createElement("label");
        if(className === "own") {
            newLabel.classList.add("tooltip-ts");
            newLabel.setAttribute(
                "data-tippy-content"
                , "交流クエスト実装済み かつ 未クリア の時のみ有効"
            );
        }
        const newColor = document.createElement("input");
        newColor.type = "color";
        newColor.setAttribute("name", "backgroundColor");
        newColor.setAttribute("value", color);
        newColor.setAttribute("onchange", `table.setting.backgroundColor["${className}"]=value; table.ChangeBackColor("${className}")`);
        newLabel.appendChild(newColor);
        newLabel.innerHTML += `${table.word[className].replace(/<br \/>/g, "")}${className === "year_bq-none" ? "": "済"}`;
        newColorArea.appendChild(newLabel);
    });
    newSettingArea.appendChild(newColorArea);
    newSettingCont.appendChild(newSettingArea);
    
    // フィルタ
    const newFilterCont = document.createElement("div");
    newFilterCont.id = "filter-content";
    newFilterCont.innerHTML = "<p>フィルタ</p>";
    
    const CreateFilterArea = (title, filterType, isNest = false) => {
        const newFliterArea = document.createElement("div");
        newFliterArea.className = "setting-area";
        const newTitleArea = document.createElement("div");
        newTitleArea.className = "setting-title-area";
        const newTitle = document.createElement("span");
        newTitle.className = "setting-title";
        newTitle.innerHTML = title;
        newTitleArea.appendChild(newTitle);
        newFliterArea.appendChild(newTitleArea);
        if(typeof table.filter[filterType] === "object") {
            const newCheckboxArea = document.createElement("div");
            newCheckboxArea.id = `filter_${filterType}`;
            newCheckboxArea.className = "setting-checkbox-area";
            CreateButtons(newCheckboxArea, filterType);
            /* //--
            _.forEach({ "全部ON": true, "全部OFF": false }, (bool, text) => {
                const newButton = document.createElement("button");
                newButton.type = "button";
                newButton.setAttribute("onclick", `table.ToggleAllFilter(this.parentElement, ${bool}, "${filterType}")`);
                newButton.innerHTML = text;
                newCheckboxArea.appendChild(newButton);
            });
            */
            newCheckboxArea.appendChild(document.createElement("br"));
            if(isNest) {
                _.forEach(table.filter[filterType], (obj, key) => {
                    let newLabel = document.createElement("label");
                    let newCheckbox = document.createElement("input");
                    newCheckbox.type = "checkbox";
                    if(obj.checked) newCheckbox.setAttribute("checked", "true");
                    newCheckbox.setAttribute(
                        "onchange"
                        , `table.filter.${filterType}["${key}"].checked=this.checked;
                            table.ToggleNestedCheckboxes(document.getElementById("${filterType}-${key}"), this.checked);
                            table.ApplyFilter("${filterType}")`
                    );
                    newLabel.appendChild(newCheckbox);
                    newLabel.innerHTML += key in table.word ? table.word[key].replace(/<br \/>/g, "") : key;
                    newCheckboxArea.appendChild(newLabel);
                    if(_.size(obj.part)) CreateButtons(newCheckboxArea, `${filterType}-${key}`);
                    const newNestArea = document.createElement("div");
                    newNestArea.id = `${filterType}-${key}`;
                    newNestArea.classList.add("nest-area");
                    if(!obj.checked) newNestArea.classList.add("inactive");
                    _.forEach(obj.part, (bool, part) => {
                        newLabel = document.createElement("label");
                        newCheckbox = document.createElement("input");
                        newCheckbox.type = "checkbox";
                        if(bool) newCheckbox.setAttribute("checked", "true");
                        newCheckbox.disabled = !obj.checked;
                        newCheckbox.setAttribute(
                            "onchange"
                            , `table.filter.${filterType}["${key}"].part["${part}"]=this.checked;
                                table.ApplyFilter("${filterType}")`
                        );
                        newLabel.appendChild(newCheckbox);
                        newLabel.innerHTML += part in table.word ? table.word[part].replace(/<br \/>/g, "") : key;
                        newNestArea.appendChild(newLabel);
                    });
                    newCheckboxArea.appendChild(newNestArea);
                });
            } else {
                _.forEach(table.filter[filterType], (bool, key) => {
                    //if(_.includes(except, key)) return;
                    const newLabel = document.createElement("label");
                    const newCheckbox = document.createElement("input");
                    newCheckbox.type = "checkbox";
                    if(bool) newCheckbox.setAttribute("checked", "true");
                    newCheckbox.setAttribute("onchange", `table.filter.${filterType}["${key}"]=this.checked; table.ApplyFilter("${filterType}")`);
                    newLabel.appendChild(newCheckbox);
                    newLabel.innerHTML += key in table.word ? table.word[key].replace(/<br \/>/g, "") : key;
                    newCheckboxArea.appendChild(newLabel);
                });
            }
            newFliterArea.appendChild(newCheckboxArea);
        } else {
            const newRadioArea = document.createElement("div");
            newRadioArea.id = `filter_${filterType}`;
            newRadioArea.className = "setting-radio-area";
            const labelNames = _.reduce([ "全部", `${title}済`, `未${title}` ], (obj, key, i) => {
                obj[key] = 3 - i;
                return obj;
            }, {});
            _.forEach(labelNames, (value, labelName) => {
                const newLabel = document.createElement("label");
                const newRadio = document.createElement("input");
                newRadio.type = "radio";
                newRadio.setAttribute("name", filterType);
                if(table.filter[filterType] === value) newRadio.setAttribute("checked", "true");
                newRadio.setAttribute("onchange", `table.filter.${filterType}=${value}; table.ApplyFilter("${filterType}")`);
                newLabel.appendChild(newRadio);
                newLabel.innerHTML += labelName;
                newRadioArea.appendChild(newLabel);
            });
            newFliterArea.appendChild(newRadioArea);
        }
        newFilterCont.appendChild(newFliterArea);
    }
    const CreateButtons = (element, filterType) => {
        _.forEach({ "全部ON": true, "全部OFF": false }, (bool, text) => {
            const newButton = document.createElement("button");
            newButton.type = "button";
            newButton.setAttribute("onclick", `table.ToggleAllFilter(this.parentElement, ${bool}, "${filterType}")`);
            newButton.innerHTML = text;
            element.appendChild(newButton);
        });
    }
    
    CreateFilterArea("列", "column");
    CreateFilterArea("レアリティ", "rarity");
    CreateFilterArea("入手", "obtain", true);
    CreateFilterArea("配置型", "depType");
    CreateFilterArea("衣装違い等", "derivation");
    CreateFilterArea("ユニ実装年", "year");
    CreateFilterArea("クエ実装年", "year_bq");
    CreateFilterArea("所持", "own");
    CreateFilterArea("クリア", "clear");
    
    newSettingCont.appendChild(newFilterCont);
    newSettingWindow.appendChild(newSettingCont);
    settings.appendChild(newSettingWindow);
}
// 設定表示/非表示
table.ToggleSettingShown = _this => {
    const settingWindow = document.getElementById("setting-window");
    if(settingWindow.classList.contains("is-unshown")) {
        settingWindow.classList.remove("is-unshown");
        _this.innerHTML = "閉じる";
    } else {
        settingWindow.classList.add("is-unshown");
        _this.innerHTML = "設定";
    }
}
// フィルタ一括ON/OFF
table.ToggleAllFilter = (_element, _bool, _filterType) => {
    if(_filterType === "obtain") {
        _.forEach(_element.children, elem1 => {
            if(elem1.tagName === "LABEL"/*&& !elem1.classList.contains("except")*/) elem1.firstElementChild.checked = _bool;
            else if(elem1.classList.contains("nest-area")) {
                if(_bool) elem1.classList.remove("inactive");
                else elem1.classList.add("inactive");
                _.forEach(elem1.children, elem2 => {
                    if(elem2.tagName === "LABEL"/*&& !elem2.classList.contains("except")*/) elem2.firstElementChild.disabled = !_bool;
                });
            }
        });
        _.forEach(table.filter[_filterType], obj => { obj.checked = _bool; });
    } else if(_.includes(_filterType, "obtain")) {
        _.forEach(document.getElementById(_filterType).children, elem => {
            if(elem.tagName === "LABEL"/*&& !elem.classList.contains("except")*/) elem.firstElementChild.checked = _bool;
        });
        const [ filterType, key ] = _filterType.split("-");
        _.forEach(table.filter[filterType][key].part, (_, part, obj) => { obj[part] = _bool; });
    } else {
        _.forEach(_element.children, elem => {
            if(elem.tagName === "LABEL"/*&& !elem.classList.contains("except")*/) elem.firstElementChild.checked = _bool;
        });
        _.forEach(table.filter[_filterType], (_, key, obj) => { obj[key] = _bool; });
    }
    table.ApplyFilter(_filterType.split("-")[0]);
}
// ネストされたチェックボックスのactive/inactive化
table.ToggleNestedCheckboxes = (_element, _bool) => {
    if(_bool) _element.classList.remove("inactive");
    else _element.classList.add("inactive");
    _.forEach(_element.getElementsByTagName("input"), elem => { elem.disabled = !_bool; });
}

// テーブル生成
table.CreateTable = () => {
    const tables = document.getElementById("tables");
    tables.innerHTML = "";
    
    const CreateButtonArea = (tableArea, rarity) => {
        const newButtonArea = document.createElement("div");
        newButtonArea.className = "table-button-area";
        CreateButton(newButtonArea, rarity, "all", "全部ON", true);
        CreateButton(newButtonArea, rarity, "all", "全部OFF", false);
        //CreateButton(newButtonArea, rarity, "allOwnOn", "全所持済");
        //CreateButton(newButtonArea, rarity, "allClearOff", "全未クリア");
        tableArea.appendChild(newButtonArea);
    }
    const CreateButton = (buttonArea, rarity, func, text, toggle = null) => {
        const argText = toggle !== null ? `, ${toggle}` : "";
        const newButton = document.createElement("button");
        newButton.type = "button";
        newButton.setAttribute("onclick", `table.ToggleCheckbox.${func}(event, "${rarity}"${argText}); table.Display("${rarity}")`);
        newButton.innerHTML = text;
        buttonArea.appendChild(newButton);
    }
    
    _.forEach(table.tables, (obj, rarity) => {
        const newTableArea = document.createElement("div");
        newTableArea.id = `table-area_${rarity}`;
        newTableArea.className = "table-area";
        const newTableName = document.createElement("span");
        newTableName.className = "table-name";
        newTableName.innerHTML = table.word[rarity];
        newTableArea.appendChild(newTableName);
        CreateButtonArea(newTableArea, rarity);
        const newScroller = document.createElement("div");
        newScroller.className = "table-scroll";
        const newTable = document.createElement("table");
        newTable.id = `table_${rarity}`;
        const newThead = document.createElement("thead");
        let newTr = document.createElement("tr");
        _.forEach(table.column, elem => {
            const newTh = document.createElement("th");
            newTh.className = `column-${elem}`;
            if(_.includes(table.sortable, elem)) {
                newTh.classList.add("sortable");
                newTh.setAttribute("onclick", `table.Sort("${rarity}", "${elem}")`);
            }
            newTh.innerHTML = table.word[elem];
            if(elem === "own") CreateButton(newTh, rarity, "allOwnOn", "全部ON");
            else if(elem === "clear") CreateButton(newTh, rarity, "allClearOff", "全部OFF");
            newTr.appendChild(newTh);
        });
        newThead.appendChild(newTr);
        newTable.appendChild(newThead);
        
        const newTbody = document.createElement("tbody");
        _.forEach(obj.list, unit => {
            newTr = document.createElement("tr");
            newTr.classList.add(`obtain-${unit.obtain[0]}`);
            if(unit.obtain[1]) newTr.classList.add(`obtain-${unit.obtain[0]}-${unit.obtain[1]}`);
            newTr.classList.add(`depType-${unit.depType}`);
            let isGeneric = true;
            if("derivation" in unit) {
                if(_.includes(table.derivation, unit.derivation))
                    newTr.classList.add(`derivation-${unit.derivation}`);
                else newTr.classList.add(`derivation-その他`);
                isGeneric = false;
            }
            if("latent" in unit) {
                _.forEach(Array.isArray(unit.latent) ? unit.latent : [unit.latent ], latent => {
                    if(_.includes(table.derivation, latent))
                        newTr.classList.add(`derivation-${latent}`);
                    else newTr.classList.add(`derivation-その他`);
                    if(latent === "白の帝国") isGeneric = false;
                });
            }
            if(isGeneric) newTr.classList.add(`derivation-無印`);
            newTr.classList.add(`year-${unit.implDate.slice(0, 4)}`);
            if(unit.implDate_bq) newTr.classList.add(`year_bq-${unit.implDate_bq.slice(0, 4)}`);
            else newTr.classList.add("year_bq-none");
            if("extra" in unit) {
                newTr.classList.add(`obtain-${unit.extra.obtain[0]}`);
                if(unit.extra.obtain[1]) newTr.classList.add(`obtain-${unit.extra.obtain[0]}-${unit.extra.obtain[1]}`);
            }
            _.forEach(table.column, elem => {
                const newTd = document.createElement("td");
                newTd.className = `column-${elem}`;
                switch(elem) {
                    case "unitName": {
                            const display = { name: unit.name, fullName: "" };
                            if(unit.derivation) display.name += `/${unit.derivation}`;
                            if(unit.modifier) display.fullName += unit.modifier;
                            display.fullName += unit.name;
                            if(unit.qualifier) display.fullName += unit.qualifier;
                            _.forEach(table.unitName, key => {
                                if(key === "icon") {
                                    const newImg = document.createElement("img");
                                    newImg.className = `display-${key}`;
                                    const title = display.name === display.fullName ? display.name : `${display.fullName}\n${display.name}`;
                                    newImg.setAttribute("title", title);
                                    newImg.setAttribute("alt", title);
                                    newImg.setAttribute("draggable", false);
                                    newImg.setAttribute("src", `./icon/${unit.id.toString().padStart(5, "0")}.png`);
                                    newTd.appendChild(newImg);
                                } else {
                                    const newSpan = document.createElement("span");
                                    newSpan.className = `display-${key}`;
                                    newSpan.innerText = display[key];
                                    newTd.appendChild(newSpan);
                                }
                            });
                        }
                        break;
                    case "implDate_bq":
                        newTd.innerHTML = unit.implDate_bq ? unit.implDate_bq : "未実装";
                        break;
                    case "own":
                    case "clear": {
                            const newLabel = document.createElement("label");
                            const newCheckbox = document.createElement("input");
                            newCheckbox.type = "checkbox";
                            if(!unit.implDate_bq && elem === "clear") {
                                // 交流クエスト未実装
                                newCheckbox.disabled = true;
                                newTd.classList.add("inactive");
                            } else if(unit[elem].check) {
                                newTr.classList.add(`${elem}`);
                                newCheckbox.setAttribute("checked", "true");
                                newCheckbox.disabled = unit[elem].lock;
                            }
                            newCheckbox.setAttribute("onchange", `table.ToggleCheckbox.${elem}(this, ${unit.id}); table.Display("${rarity}")`);
                            newLabel.appendChild(newCheckbox);
                            newTd.appendChild(newLabel);
                        }
                        break;
                    default:
                        newTd.innerHTML = unit[elem];
                }
                newTr.appendChild(newTd);
            });
            newTbody.appendChild(newTr);
        });
        newTable.appendChild(newTbody);
        
        newScroller.appendChild(newTable);
        newTableArea.appendChild(newScroller);
        tables.appendChild(newTableArea);
        
        table.Sort(rarity, "class");
    });
    
    // 設定用にスタイル生成
    if(!document.getElementById("created-style")) {
        newStyle = document.createElement("style");
        newStyle.id = "created-style";
        document.getElementsByTagName('head')[0].appendChild(newStyle);
        const sheet = newStyle.sheet;
        sheet.insertRule("#tables table td.column-unitName {}", sheet.cssRules.length);
        _.forEach(table.unitName, key => sheet.insertRule(`#tables .display-${key} {}`, sheet.cssRules.length));
        _.forEach(table.setting.backgroundColor, (color, className) =>
            sheet.insertRule(`#tables .${className} td { background-color: ${color}; }`, sheet.cssRules.length)
        );
        _.forEach(table.filter, (obj, filterType) => {
            if(typeof obj !== "object") {
                sheet.insertRule(`#tables .${filterType} {}`, sheet.cssRules.length);
                sheet.insertRule(`#tables tbody tr:not(.${filterType}) {}`, sheet.cssRules.length);
            }/* else if(filterType === "obtain") {
                _.forEach(obj, (obj2, key) => {
                    sheet.insertRule(`#tables .${filterType}-${key} {}`, sheet.cssRules.length);
                    _.forEach(obj2.part, (bool, part) => sheet.insertRule(`#tables .${filterType}-${key}-${part} {}`, sheet.cssRules.length));
                });
            } */else if(filterType !== "rarity" || filterType !== "obtain" || filterType !== "derivation")
                _.forEach(obj, (bool, key) => sheet.insertRule(`#tables .${filterType}-${key} {}`, sheet.cssRules.length));
        });
    }
    
    table.ToggleNameDisplay();
    table.ApplyFilter();
}

// 所持/クリア check/lock
table.ToggleCheckbox = {
    own: (_own, _id) => {
        // 所持OFF→クリア強制OFF
        const tr = _own.closest("tr");
        const clear = tr.getElementsByTagName("input")[1];
        if(!_own.checked) {
            if(!clear.disabled) {
                clear.checked = false;
                tr.classList.remove("clear");
            }
        }
        tr.classList.toggle("own");
        saveData.checkbox.Save(_id, _own, clear);
    }
    , clear: (_clear, _id) => {
        // クリアON→所持強制ON
        const tr = _clear.closest("tr");
        const own = tr.getElementsByTagName("input")[0];
        if(_clear.checked) {
            if(!own.disabled) {
                own.checked = true;
                tr.classList.add("own");
            }
        }
        tr.classList.toggle("clear");
        saveData.checkbox.Save(_id, own, _clear);
    }
    , all: (_event, _rarity, _bool) => {
        const rarityTable = document.getElementById(`table_${_rarity}`);
        const trs = rarityTable.querySelectorAll("tbody tr");
        _.forEach(trs, tr => {
            if(document.defaultView.getComputedStyle(tr).display === "none") return;
            const [ own, clear ] = tr.getElementsByTagName("input");
            let isChanged = false;
            if(!own.disabled && own.checked !== _bool) {
                isChanged = true;
                (own.checked = _bool) ? tr.classList.add("own") : tr.classList.remove("own");
            }
            if(!clear.disabled && clear.checked !== _bool) {
                isChanged = true;
                (clear.checked = _bool) ? tr.classList.add("clear") : tr.classList.remove("clear");
            }
            if(isChanged) {
                const id = Number(tr.children[table.column.indexOf("id")].innerText);
                saveData.checkbox.Save(id, own, clear);
            }
        });
    }
    , allOwnOn: (_event, _rarity) => {
        _event.stopPropagation();
        const rarityTable = document.getElementById(`table_${_rarity}`);
        const trs = rarityTable.querySelectorAll("tbody tr");
        _.forEach(trs, tr => {
            if(document.defaultView.getComputedStyle(tr).display === "none") return;
            const [ own, clear ] = tr.getElementsByTagName("input");
            if(own.disabled || own.checked) return;
            own.checked = true;
            tr.classList.add("own");
            const id = Number(tr.children[table.column.indexOf("id")].innerText);
            saveData.checkbox.Save(id, own, clear);
        });
    }
    , allClearOff: (_event, _rarity) => {
        _event.stopPropagation();
        const rarityTable = document.getElementById(`table_${_rarity}`);
        const trs = rarityTable.querySelectorAll("tbody tr");
        _.forEach(trs, tr => {
            if(document.defaultView.getComputedStyle(tr).display === "none") return;
            const [ own, clear ] = tr.getElementsByTagName("input");
            if(clear.disabled || !clear.checked) return;
            clear.checked = false;
            tr.classList.remove("clear");
            const id = Number(tr.children[table.column.indexOf("id")].innerText);
            saveData.checkbox.Save(id, own, clear);
        });
    }
    , lock: _bool => {
        // ロック・アンロック
        _.forEach(table.rarity, rarity => {
            const rarityTable = document.getElementById(`table_${rarity}`);
            const trs = rarityTable.querySelectorAll("tbody tr");
            _.forEach(trs, tr => {
                //if(document.defaultView.getComputedStyle(tr).display === "none") return;
                const [ own, clear ] = tr.getElementsByTagName("input");
                let isChanged = false;
                if(own.checked && own.disabled !== _bool) {
                    isChanged = true;
                    own.disabled = _bool;
                }
                if(clear.checked && clear.disabled !== _bool) {
                    isChanged = true;
                    clear.disabled = _bool;
                }
                if(isChanged) {
                    const id = Number(tr.children[table.column.indexOf("id")].innerText);
                    saveData.checkbox.Save(id, own, clear);
                }
            });
        });
    }
    , load: () => {
        _.forEach(table.rarity, rarity => {
            const rarityTable = document.getElementById(`table_${rarity}`);
            const trs = rarityTable.querySelectorAll("tbody tr");
            _.forEach(trs, tr => {
                const id = Number(tr.children[table.column.indexOf("id")].innerText);
                const unit = unitList[id];
                
                const [ own, clear ] = tr.getElementsByTagName("input");
                own.checked = unit.own.check;
                own.disabled = unit.own.lock;
                unit.own.check ? tr.classList.add("own") : tr.classList.remove("own");
                
                if(unit.implDate_bq) {
                    clear.checked = unit.clear.check;
                    clear.disabled = unit.clear.lock;
                    unit.clear.check ? tr.classList.add("clear") : tr.classList.remove("clear");
                }
            });
        });
    }
}

// ユニット名切り替え
table.ToggleNameDisplay = () => {
    const style = document.getElementById("created-style");
    _.forEach(table.unitName, key => {
        const rule = _.find(style.sheet.cssRules, rule => rule.selectorText === `#tables .display-${key}`);
        if(table.setting.unitName === key) rule.style.removeProperty("display");
        else rule.style.setProperty("display", "none", "important");
    });
    const rule = _.find(style.sheet.cssRules, rule => rule.selectorText === "#tables table td.column-unitName");
    if(table.setting.unitName === "icon")
        rule.style.setProperty("min-width", "5em");
    else rule.style.setProperty("min-width", "12em");
    saveData.setting.Save("unitName");
}

// 背景色変更
table.ChangeBackColor = _className => {
    const style = document.getElementById("created-style");
    const rule = _.find(style.sheet.cssRules, rule => rule.selectorText === `#tables .${_className} td`);
    rule.style.setProperty("background-color", table.setting.backgroundColor[_className]);
    saveData.setting.Save("backgroundColor")
}

// フィルタ適用
table.ApplyFilter = (_filterType = null, _judgeDisplay = true) => {
    const rules = document.getElementById("created-style").sheet.cssRules;
    let rule;
    switch(_filterType) {
        case null:
            _.forEach(table.filter, (obj, filterType) => table.ApplyFilter(filterType, false));
            break;
        case "rarity":
            _.forEach(table.filter.rarity, (bool, rarity) => {
                const tableArea = document.getElementById(`table-area_${rarity}`);
                if(bool) tableArea.classList.remove("is-unshown");
                else tableArea.classList.add("is-unshown");
            });
            break;
        case "obtain":
            // OR
            _.forEach(document.querySelectorAll("#tables tbody"), tbody => {
                _.forEach(tbody.children, tr => {
                    const isShown = _.some(tr.classList, className => {
                        if(!_.includes(className, "obtain-")) return;
                        const [ noUse, obtain, part ] = className.split("-");
                        if(obtain === "sh") return table.filter.obtain.sh.checked;
                        if(!part) return false;
                        if(!table.filter.obtain[obtain].checked) return false;
                        return table.filter.obtain[obtain].part[part];
                    });
                    // 他のフィルタタイプトはAND
                    if(isShown) {
                        if(!_.some(tr.classList, className => _.includes(className, "is-unshown-") && className !== "is-unshown-obtain"))
                            tr.classList.remove("is-unshown");
                        tr.classList.remove("is-unshown-obtain");
                    } else {
                        tr.classList.add("is-unshown");
                        tr.classList.add("is-unshown-obtain");
                    }
                });
            });
            break;
        case "derivation":
            // OR
            _.forEach(document.querySelectorAll("#tables tbody"), tbody => {
                _.forEach(tbody.children, tr => {
                    const isShown = _.some(tr.classList, className => {
                        if(!_.includes(className, "derivation-")) return;
                        return table.filter.derivation[className.split("-")[1]];
                    });
                    // 他のフィルタタイプトはAND
                    if(isShown) {
                        if(!_.some(tr.classList, className => _.includes(className, "is-unshown-") && className !== "is-unshown-derivation"))
                            tr.classList.remove("is-unshown");
                        tr.classList.remove("is-unshown-derivation");
                    } else {
                        tr.classList.add("is-unshown");
                        tr.classList.add("is-unshown-derivation");
                    }
                });
            });
            break;
        case "own":
        case "clear":
            rule = _.find(rules, rule => rule.selectorText === `#tables .${_filterType}`);
            if(table.filter[_filterType] & 0b10)
                rule.style.removeProperty("display");
            else rule.style.setProperty("display", "none", "important");
            rule = _.find(rules, rule => rule.selectorText === `#tables tbody tr:not(.${_filterType})`);
            if(table.filter[_filterType] & 0b01)
                rule.style.removeProperty("display");
            else rule.style.setProperty("display", "none", "important");
            break;
        default:
            // AND
            _.forEach(table.filter[_filterType], (bool, key) => {
                rule = _.find(rules, rule => rule.selectorText === `#tables .${_filterType}-${key}`);
                if(bool) rule.style.removeProperty("display");
                else rule.style.setProperty("display", "none", "important");
            });
    }
    
    if(_filterType) saveData.setting.Save(_filterType);
    if(_judgeDisplay) _.forEach(table.rarity, rarity => table.Display(rarity));
}

// 表の表示/非表示
table.Display = _rarity => {
    const tableArea = document.getElementById(`table-area_${_rarity}`);
    const rarityTable = document.getElementById(`table_${_rarity}`);
    const trs = rarityTable.querySelectorAll("tbody tr");
    if(_.every(trs, tr => document.defaultView.getComputedStyle(tr).display === "none")) {
        tableArea.children[0].classList.add("table-empty");
        tableArea.children[1].classList.add("is-unshown");
        tableArea.children[2].classList.add("is-unshown");
    } else {
        tableArea.children[0].classList.remove("table-empty");
        tableArea.children[1].classList.remove("is-unshown");
        tableArea.children[2].classList.remove("is-unshown");
    }
}

// ソート
table.Sort = (_rarity, _colName, _allowReverse = true) => {
    const rarityTable = document.getElementById(`table_${_rarity}`);
    const trs = rarityTable.querySelectorAll("tbody tr");
    const trs_array = Array.from(trs);
    if(_allowReverse && _colName === table.tables[_rarity].sortedBy) {
        if(_colName === "implDate_bq") {
            const trs_implemented = _.takeWhile(trs_array, tr => !tr.classList.contains("year_bq-none"));
            trs_implemented.reverse();
            _.forEach(trs_implemented, (tr, i) => trs_array[i] = tr);
        } else
            trs_array.reverse();
    } else {
        const colIndex_id = table.column.indexOf("id");
        const colIndex = table.column.indexOf(_colName);
        const length = trs_array.length;
        switch(_colName) {
            case "id":
            case "implDate":
                // キャラ実装順と同義
                trs_array.sort((a, b) => 
                    Number(a.children[colIndex_id].innerText) - Number(b.children[colIndex_id].innerText)
                );
                break;
            case "class":
                trs_depType = _.reduce(trs_array, (obj, tr) => {
                    const depType = _.split(_.find(tr.classList, className => _.includes(className, "depType")), "-")[1];
                    obj[depType].push(tr);
                    return obj;
                }, _.zipObject(table.depType, _.zipWith(table.depType, () => [])));
                _.remove(trs_array);
                _.forEach(trs_depType, (trs, depType) => {
                    trs.sort((a, b) => {
                        const tds_a = a.children;
                        const tds_b = b.children;
                        const class_a = tds_a[colIndex].innerText;
                        const class_b = tds_b[colIndex].innerText;
                        if(class_a === class_b)
                            return Number(tds_a[colIndex_id].innerText) - Number(tds_b[colIndex_id].innerText);
                        return table.class[depType].indexOf(class_a) - table.class[depType].indexOf(class_b);
                    });
                    trs_array.push(...trs);
                });
                break;
            /*
            case "implDate":
                trs_array.sort((a, b) => {
                    const tds_a = a.children;
                    const tds_b = b.children;
                    const date_a = new Date(tds_a[colIndex].innerText);
                    const date_b = new Date(tds_b[colIndex].innerText);
                    const diff = -(date_a - date_b);
                    if(!diff) return Number(tds_a[colIndex_id].innerText) - Number(tds_b[colIndex_id].innerText);
                    return diff;
                });
                break;
            */
            case "implDate_bq":
                trs_array.sort((a, b) => {
                    const tds_a = a.children;
                    const tds_b = b.children;
                    const date_text_a = tds_a[colIndex].innerText;
                    const date_text_b = tds_b[colIndex].innerText;
                    if(date_text_a === date_text_b)
                        return Number(tds_a[colIndex_id].innerText) - Number(tds_b[colIndex_id].innerText);
                    if(date_text_a === "未実装") return 1;
                    if(date_text_b === "未実装") return -1;
                    return -(new Date(date_text_a) - new Date(date_text_b));
                });
                break;
            case "own":
            case "clear":
                for(let i = 0, j = 0; i < length; ++i) {
                    if(trs_array[j].classList.contains(_colName)) ++j;
                    else trs_array.push(..._.pullAt(trs_array, j));
                }
                break;
            default:
        }
        table.tables[_rarity].sortedBy = _colName;
    }
    
    const tbody = rarityTable.getElementsByTagName("tbody")[0];
    _.forEach(trs_array, tr => tbody.appendChild(tr));
}