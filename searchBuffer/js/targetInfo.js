const target = {};

target.word = {
    rarity: "レアリティ", depType: "配置", cl: "クラス", sex: "性別"
    , home: "所属", race: "種族", season: "季節", others: "その他"
    , year: "実装年"
};

target.rarity = [ "黒", "白", "青", "金", "銀", "銅", "鉄" ];
target.depType = [ "近接", "遠距離", "遠近距離" ];
target.cl = {
    "近接": {
        prince: [ "王子" ]
        , hero: [
            "魔竜騎士", "バーバリアンクイーン", "古代魔導機兵", "銀腕の神話", "ウェポンマスター", "魔導生命体", "アヤカシの王", "黎明の翼"
            , "トゥルーブラッド", "暁光の神話", "神獣騎士", "王国軍初代副司令", "大華の神話", "マギステルミリトゥム"
        ]
        , normal: [
            "ソルジャー", "ヘビーアーマー", "ワルキューレ", "ローグ", "プリンセス", "ヴァンパイアプリンセス", "イモータルプリンセス", "イビルプリンセス"
            , "バンデット", "中級竜兵", "ドラゴンプリンセス", "サムライ", "忍者", "ペガサスライダー", "ダークファイター", "アベンジャー", "モンク"
            , "前衛戦術家", "魔法剣士", "エンジェル", "くぐつ使い", "セーラー", "妖狐", "神官戦士", "メイジアーマー", "ドラゴンライダー", "ボウライダー"
            , "メイド", "ヴァンパイアロード", "ソードマスター", "ロイヤルガード", "仙人", "魔神", "仙猿", "戦の聖霊", "ダークストーカー", "ぬらりひょん"
            , "重装砲兵", "鬼", "インペリアルナイト", "天狗", "鍛冶職人", "グラディエーター", "キョンシー", "雷公", "モンスターブレイカー", "風伯"
            , "グランドナイト", "グリフィンライダー", "サッパー", "真人", "邪仙", "魔王親衛隊", "ぬえ", "鬼刃忍", "ランスマスター", "デーモンロード"
            , "犬神", "料理人", "デモンルーン", "スチームナイト", "エンプレス", "かまいたち", "アクアナイト", "シーソルジャー", "テンプルナイト"
            , "迷宮の悪霊", "オートマタ", "ぬりかべ", "霊刀つくもがみ", "戦巫女", "シャークウォリアー", "儀仗軍神", "武侠", "サベージファイター"
            , "ハデスソルジャー", "隧道掘削兵", "シールダー", "女王子", "一目の竜", "天尊", "ダーク王子", "処刑人", "白の帝国城", "神話の継承者"
            , "デモンリドゥ", "カオスルーラー"
            , "小悪魔アイドル"
            , "グレーターデーモン", "皇帝"
        ]
        , collabo: [
            "ねんどろいどプリンセス"
            , "王太子"
            , "ホーネット派魔人【ランス】", "忍者【ランス】"
            , "武将【恋姫】", "君主【恋姫】", "奸雄【恋姫】", "勇士【恋姫】", "小覇王【恋姫】", "王女【恋姫】"
            , "騎士【七つの大罪】", "盗賊【七つの大罪】", "巨人【七つの大罪】", "妖精【七つの大罪】"
            , "騎士【封緘】"
            , "怪盗【GBM】", "戯曲作家【GBM】", "物語を渡る者【GBM】", "心ある虫【GBM】", "刑事【GBM】"
            , "鬼【ななリン】"
            , "黒竜娘【モンスター娘TD】"
            , "対魔忍 超人【対魔忍】", "対魔忍 魔性【対魔忍】", "対魔忍 精神【対魔忍】", "対魔忍 科学【対魔忍】"
        ]
    }
    , "遠距離": {
        prince: []
        , hero: [
            "占星術師", "チェイスハンター", "ジオマンサー", "転生魔導士", "ファラオ", "ピューティアー", "カースウィスパラー", "未踏海域の覇者"
        ]
        , normal: [
            "アーチャー", "メイジ", "ヒーラー", "ウィッチ", "パイレーツ", "ドラゴンシャーマン", "ヴァンパイアハンター", "シャーマン"
            , "ビショップ", "後衛戦術家", "陰陽師", "サモナー", "風水使い", "砲術士", "ダンサー", "政務官", "ネクロマンサー", "クロノウィッチ"
            , "ドルイド", "アルケミスト", "レンジャー", "シーフ", "呪術使い", "魔物使い", "ダークプリースト", "エンチャンター", "マーチャント"
            , "フェンリルシャーマン", "モンスタースレイヤー", "デモンサモナー", "エレメンタラー", "猫又", "道化師", "ライフリンカー", "幻獣使い"
            , "ルーンアコライト", "ロード", "支援工兵", "デモンシャーマン", "異界召喚士", "シービショップ", "発明家", "符術士", "狛犬", "儀式魔術師"
            , "幻術士", "ハーバリスト", "霊宝つくもがみ", "スカラー", "夜行さん", "ドラグーン", "ドラゴンメイジ", "座敷わらし", "魔界総帥", "雪娘"
            , "英傑の塔", "リッチ【闇の軍勢】", "政務官【闇の軍勢】", "ガンスリンガー", "時の俯瞰者"
            , "アイドル召喚士"
            , "支援の聖霊", "ゴブリン博士"
        ]
        , collabo: [
            "アコライト", "魔法使い【ランス】", "初代大統領【ランス】"
            , "軍師【恋姫】", "暴君【恋姫】", "弓将【恋姫】"
            , "王女【七つの大罪】"
            , "傀儡人形【封緘】"
            , "水底の支配者【GBM】", "錬金術師【GBM】"
            , "新米刑事【流星WA】", "交通課職員【流星WA】"
        ]
    }
    , "遠近距離": {
        prince: []
        , hero: [
            "異世界戦士"
        ]
        , normal: [
            "妖狸", "ロケットトルーパー", "スカイウォリアー", "スカイシューター", "スカウト", "スカイヒーラー", "エアセイラー"
        ]
        , collabo: [
            "不死鳥娘【モンスター娘TD】"
            , "対魔忍 自然【対魔忍】"
        ]
    }
};
target.sex = [ "男性", "女性" ];
target.home = [ "王国", "白の帝国", "砂漠の国", "東の国", "華の国", "パルス王国", "恋姫" ];
target.race = [
    "聖霊", "人間", "獣人", "竜人", "エルフ系", "ドワーフ", "ヴァンパイア", "デーモン系", "天使", "妖怪", "仙人"
    , "オーク", "ゴブリン", "鳥人", "魚人", "神", "天界人", "冥界人", "半神", "ねんどろいど"
];
target.season = [
    "お正月", "温泉", "バレンタイン", "学園", "エッグハント"
    , "ジューンブライド", "サマー", "ハロウィン", "クリスマス"
];
target.others = [
    "英傑", "ちび", "弓兵", "魔術師", "アンデッド", "機械", "騎兵", "重装", "聖職者", "魔界", "ドラゴン", "砲兵", "銃士", "飛行", "深海", "高貴"
    , "＜七つの大罪＞"
    /*, "竜族"*/, "全プリンセス系", "GG持ち", "HP回復不可", "魔界適応", "深海適応", "天界適応"
];
const theYearAigisReleased = 2014;
target.year = _.map(
    [...new Array((new Date()).getFullYear() - theYearAigisReleased + 1)]
    , (_, i) => `${theYearAigisReleased + i}年`
);
target.selected = {};

target.count = {};
target.count.depType = {
    "近接": {
        prince: []
        , hero: []
        , normal: [ "スカイウォリアー", "スカウト" ]
        , collabo: [ "対魔忍 自然【対魔忍】" ]
    }
    , "遠距離": {
        prince: []
        , hero: [ "異世界戦士" ]
        , normal: [ "ロケットトルーパー", "スカイシューター", "スカイヒーラー", "エアセイラー" ]
        , collabo: [ "不死鳥娘【モンスター娘TD】" ]
    }
};
target.count.sex = {
    "男性": [ "王子", "シャークウォリアー", "皇帝" ]
    , "女性": [ "女王子" ]
};
target.count.home = {
    "王国": [
        "王子", "王国軍初代副司令", "マギステルミリトゥム", "迷宮の悪霊", "女王子", "ダーク王子"
        , "転生魔導士", "政務官", "英傑の塔", "政務官【闇の軍勢】"
    ]
    ,"白の帝国": [ "インペリアルナイト", "エンプレス", "隧道掘削兵", "白の帝国城", "皇帝", "支援工兵" ]
    , "砂漠の国": [ "サベージファイター", "ファラオ" ]
    , "東の国": [
        "アヤカシの王", "サムライ", "ぬらりひょん", "天狗", "雷公", "風伯", "ぬえ", "鬼刃忍", "犬神", "かまいたち", "ぬりかべ"
        , "シャーマン", "陰陽師", "猫又", "符術士", "狛犬", "霊宝つくもがみ", "夜行さん", "座敷わらし", "雪娘"
        , "妖狸"
    ]
    , "華の国": [ "大華の神話", "仙人", "仙猿", "キョンシー", "真人", "邪仙", "武侠" ]
    , "パルス王国": [ "王太子" ]
    , "恋姫": [
        "武将【恋姫】", "君主【恋姫】", "奸雄【恋姫】", "勇士【恋姫】", "小覇王【恋姫】", "王女【恋姫】"
        , "軍師【恋姫】", "暴君【恋姫】", "弓将【恋姫】"
    ]
};
target.count.race = {
    "聖霊": [ "戦の聖霊", "支援の聖霊" ]
    , "人間": []
    , "獣人": []
    , "竜人": [ "中級竜兵", "ドラゴンプリンセス", "ドラゴンシャーマン", "ドラゴンメイジ", "黒竜娘【モンスター娘TD】" ]
    , "エルフ系": [ "チェイスハンター", "ダークストーカー", "グリフィンライダー", "エンプレス" ]
    , "ドワーフ": []
    , "ヴァンパイア": [ "トゥルーブラッド", "ヴァンパイアプリンセス", "イモータルプリンセス", "ヴァンパイアロード" ]
    , "デーモン系": [
        "魔神", "デーモンロード", "デモンルーン", "デモンリドゥ"
        , "小悪魔アイドル"
        , "グレーターデーモン"
    ]
    , "天使": [ "黎明の翼", "エンジェル" ]
    , "妖怪": [
        "アヤカシの王", "妖狐", "ぬらりひょん", "鬼", "天狗", "雷公", "風伯", "ぬえ", "犬神", "かまいたち", "ぬりかべ", "霊刀つくもがみ", "一目の竜"
        , "白の帝国城"
        , "猫又", "狛犬", "霊宝つくもがみ", "夜行さん", "座敷わらし", "雪娘", "英傑の塔"
        , "妖狸"
    ]
    , "仙人": [ "仙人", "仙猿", "真人", "邪仙" ]
    , "オーク": []
    , "ゴブリン": [ "ゴブリン博士" ]
    , "鳥人": [ "スカイウォリアー", "スカイシューター", "スカイヒーラー", "不死鳥娘【モンスター娘TD】" ]
    , "魚人": [ "シーソルジャー", "シャークウォリアー", "シービショップ" ]
    , "神": [ "銀腕の神話", "暁光の神話", "大華の神話", "儀仗軍神", "天尊", "カオスルーラー", "儀式魔術師", "魔界総帥", "時の俯瞰者" ]
    , "天界人": [ "ウェポンマスター", "神獣騎士" ]
    , "冥界人": [ "ハデスソルジャー" ]
    , "半神": [ "神話の継承者" ]
    , "ねんどろいど": [ "ねんどろいどプリンセス" ]
};
target.count.others = {
    "英傑": [
        "魔竜騎士", "バーバリアンクイーン", "古代魔導機兵", "銀腕の神話", "ウェポンマスター", "魔導生命体", "アヤカシの王", "黎明の翼"
        , "トゥルーブラッド", "暁光の神話", "神獣騎士", "王国軍初代副司令", "大華の神話", "マギステルミリトゥム"
        , "占星術師", "チェイスハンター", "ジオマンサー", "転生魔導士", "ファラオ", "ピューティアー", "カースウィスパラー", "未踏海域の覇者"
        , "異世界戦士"
    ]
    , "ちび": []
    , "弓兵": [ "チェイスハンター", "ボウライダー", "アーチャー", "レンジャー", "スカイシューター" ]
    , "魔術師": [
        "魔導生命体", "転生魔導士", "カースウィスパラー"
        , "魔法剣士", "メイジアーマー"
        , "メイジ", "ウィッチ", "ビショップ", "サモナー", "ネクロマンサー", "クロノウィッチ", "呪術使い", "エンチャンター", "デモンサモナー", "異界召喚士"
        , "シービショップ", "儀式魔術師", "ドラゴンメイジ", "リッチ【闇の軍勢】", "時の俯瞰者"
        , "アイドル召喚士"
        , "魔法使い【ランス】"
    ]
    , "アンデッド": [ "トゥルーブラッド", "ヴァンパイアプリンセス", "イモータルプリンセス", "ヴァンパイアロード", "キョンシー", "ネクロマンサー", "リッチ【闇の軍勢】" ]
    , "機械": [ "古代魔導機兵", "くぐつ使い", "サッパー", "スチームナイト", "アクアナイト", "オートマタ", "隧道掘削兵", "発明家", "ロケットトルーパー", "エアセイラー" ]
    , "騎兵": [ "魔竜騎士", "神獣騎士", "ワルキューレ", "ペガサスライダー", "ドラゴンライダー", "ボウライダー", "グリフィンライダー", "ドラグーン" ]
    , "重装": [
        "マギステルミリトゥム", "ヘビーアーマー", "メイジアーマー", "ロイヤルガード", "重装砲兵", "グランドナイト", "スチームナイト", "アクアナイト", "シールダー", "白の帝国城"
    ]
    , "聖職者": [ "神官戦士", "ヒーラー", "ビショップ", "ダークプリースト" , "ルーンアコライト", "シービショップ", "スカイヒーラー" ]
    , "魔界": [
        "魔竜騎士"
        , "イビルプリンセス", "中級竜兵", "ドラゴンプリンセス", "魔神", "ダークストーカー", "グラディエーター", "魔王親衛隊", "デーモンロード", "デモンルーン", "ダーク王子"
        , "デモンリドゥ", "カオスルーラー"
        , "小悪魔アイドル"
        , "グレーターデーモン"
        , "ドラゴンシャーマン", "魔物使い", "ダークプリースト", "デモンサモナー", "デモンシャーマン", "異界召喚士", "魔界総帥", "政務官【闇の軍勢】"
        , "ゴブリン博士"
        /*, "騎士【七つの大罪】"*/
    ]
    , "ドラゴン": [
        "竜人", "魔竜騎士", "中級竜兵", "ドラゴンプリンセス", "ドラゴンライダー"
        , "ドラゴンシャーマン", "ドラグーン", "ドラゴンメイジ"
        , "黒竜娘【モンスター娘TD】"
    ]
    , "砲兵": [ "重装砲兵", "白の帝国城", "砲術士", "ドラグーン" ]
    , "銃士": [ "異世界戦士", "セーラー", "パイレーツ", "マーチャント", "モンスタースレイヤー", "ガンスリンガー", "ロケットトルーパー" ]
    , "飛行": [
        "ペガサスライダー", "仙人", "仙猿", "天狗", "雷公", "風伯", "グリフィンライダー", "真人", "邪仙", "一目の竜", "天尊"
        , "妖精【七つの大罪】"
        , "ロケットトルーパー", "スカイウォリアー", "スカイシューター", "スカイヒーラー", "エアセイラー"
        , "不死鳥娘【モンスター娘TD】"
    ]
    , "深海": [ "未踏海域の覇者", "シーソルジャー", "アクアナイト", "シャークウォリアー", "シービショップ" ]
    , "高貴": [
        "王子", "バーバリアンクイーン", "銀腕の神話", "トゥルーブラッド"
        , "プリンセス", "ヴァンパイアプリンセス", "イモータルプリンセス"/*, "イビルプリンセス"*/, "ドラゴンプリンセス"
        , "エンプレス", "儀仗軍神", "女王子", "ダーク王子", "皇帝"
        , "ねんどろいどプリンセス"//, "王太子"
        , "ファラオ", "ロード", "儀式魔術師"//, "魔界総帥"
        //, "王女【七つの大罪】"
    ]
    , "＜七つの大罪＞": [ "騎士【七つの大罪】", "盗賊【七つの大罪】", "巨人【七つの大罪】", "妖精【七つの大罪】" ]
    /*
    , "竜族": [
        "竜人", "魔竜騎士", "中級竜兵", "ドラゴンプリンセス", "ドラゴンライダー"
        , "ドラゴンシャーマン", "ドラグーン", "ドラゴンメイジ"
    ]
    */
    , "全プリンセス系": [ "プリンセス", "ヴァンパイアプリンセス", "イモータルプリンセス", "イビルプリンセス", "ドラゴンプリンセス", "ねんどろいどプリンセス" ]
    , "GG持ち": [ "バンデット", "シーフ" ]
    , "HP回復不可": [
        "古代魔導機兵", "ヴァンパイアプリンセス", "イモータルプリンセス", "イビルプリンセス", "くぐつ使い", "キョンシー", "デモンルーン", "オートマタ", "隧道掘削兵"
        , "小悪魔アイドル"
        , "デモンシャーマン", "リッチ【闇の軍勢】"
        , "物語を渡る者【GBM】"
        , "エアセイラー"
    ]
    , "魔界適応": [
        "魔竜騎士", "黎明の翼", "神獣騎士"
        , "イビルプリンセス", "中級竜兵", "ドラゴンプリンセス", "魔神", "ダークストーカー", "グラディエーター", "魔王親衛隊", "デーモンロード", "デモンルーン"
        , "ダーク王子"
        , "小悪魔アイドル"
        , "グレーターデーモン"
        , "ドラゴンシャーマン", "魔物使い", "ダークプリースト", "デモンサモナー", "デモンシャーマン", "異界召喚士", "魔界総帥", "政務官【闇の軍勢】"
        , "ゴブリン博士"
        , "騎士【七つの大罪】"
    ]
    , "深海適応": [ "未踏海域の覇者", "シーソルジャー", "アクアナイト", "シャークウォリアー", "シービショップ" ]
    , "天界適応": [ "銀腕の神話", "ウェポンマスター", "黎明の翼", "暁光の神話", "神獣騎士", "エンジェル", "スカイウォリアー", "スカイシューター", "スカイヒーラー" ]
};

target.CreateForm = () => {
    const targetInfo = document.getElementById("target-info");
    targetInfo.innerHTML = "";
    const newTable = document.createElement("table");
    newTable.setAttribute("border", "1");
    
    let newTr, newTh, newTd, newForm, newLabel, newRadio, newCheckbox, newBr;
    
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

    // all
    newTr = document.createElement("tr");
    newTh = document.createElement("th");
    newTh.colSpan = "2";
    newTh.innerHTML = "全部";
    newTr.appendChild(newTh);
    newTd = document.createElement("td");
    _.forEach({ "ON": true, "OFF": false }, (checked, text) => {
        const newButton = document.createElement("button");
        newButton.type = "button";
        newButton.setAttribute("onclick", `target.ToggleAll(${checked})`);
        newButton.innerHTML = text;
        newTd.appendChild(newButton);
    });
    newTr.appendChild(newTd);
    newTable.appendChild(newTr);
    
    // rarity
    newTr = document.createElement("tr");
    CreateRadioForm("rarity", newTr, "2");
    
    // depType
    newTr = document.createElement("tr");
    CreateRadioForm("depType", newTr, "2");
    
    // class
    newTr = document.createElement("tr");
    newTh = document.createElement("th");
    newTh.colSpan = "2";
    newTh.innerHTML = target.word["cl"];
    newTr.appendChild(newTh);
    newTd = document.createElement("td");
    const newSelect = document.createElement("select");
    newSelect.id = "target-info_cl";
    newSelect.setAttribute("onchange", "target.AutoCheck(this.value)");
    newTd.appendChild(newSelect);
    newBr = document.createElement("br");
    newTd.appendChild(newBr);
    newLabel = document.createElement("label");
    newLabel.className = "tooltip-b";
    newLabel.setAttribute(
        "data-tippy-content"
        , "ONにすると、クラス選択時に<br>\
        そのクラス固有っぽいものを<br>\
        自動的にチェックする<br>\
        ONにしたままの方が検索漏れが減る(と思う)"
    );
    newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.id = "auto-check";
    newCheckbox.setAttribute("checked", "true");
    newLabel.appendChild(newCheckbox);
    newLabel.innerHTML += "オートチェックを有効化";
    newTd.appendChild(newLabel);
    newTr.appendChild(newTd);
    newTable.appendChild(newTr);
    
    // sex
    newTr = document.createElement("tr");
    CreateRadioForm("sex", newTr, "2");
    
    // attr
    newTr = document.createElement("tr");
    newTh = document.createElement("th");
    newTh.rowSpan = "4";
    newTh.innerHTML = "属性等";
    newTr.appendChild(newTh);
    // home
    CreateRadioForm("home", newTr, "1");
    // race
    newTr = document.createElement("tr");
    CreateRadioForm("race", newTr, "1");
    // season
    newTr = document.createElement("tr");
    CreateRadioForm("season", newTr, "1");
    // others
    newTr = document.createElement("tr");
    newTh = document.createElement("th");
    newTh.innerHTML = target.word["others"];
    newTr.appendChild(newTh);
    newTd = document.createElement("td");
    _.forEach({ "全部ON": true, "全部OFF": false }, (checked, text) => {
        const newButton = document.createElement("button");
        newButton.type = "button";
        newButton.setAttribute("onclick", `target.ToggleAllOthers(${checked})`);
        newButton.innerHTML = text;
        newTd.appendChild(newButton);
    });
    newForm = document.createElement("form");
    newForm.id = "target-info_others";
    _.forEach(target.others, value => {
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
    
    // year
    newTr = document.createElement("tr");
    CreateRadioForm("year", newTr, "2");
    targetInfo.appendChild(newTable);
    
    const newButton = document.createElement("button");
    newButton.type = "button";
    newButton.id = "search";
    newButton.setAttribute("onclick", "target.Search()");
    newButton.innerHTML = "検索";
    targetInfo.appendChild(newButton);
    
    const depTypeForm = document.getElementById("target-info_depType");
    _.forEach(depTypeForm.options, option =>
        option.addEventListener("change", target.CreateClassOptions)
    );
    const raceForm = document.getElementById("target-info_race");
    _.forEach(raceForm.options, option => {
        if(option.value === "竜人") option.addEventListener("change", target.CheckDragon);
    });
    
    target.CreateClassOptions();
}

// 一括ON/OFF
target.ToggleAll = _checked => {
    const index = _checked ? 0 : 1;
    const categories = [ "rarity", "depType", "sex", "home", "race", "season", "year" ];
    _.forEach(categories, category => {
        const form = document.getElementById(`target-info_${category}`);
        form.options[index].checked = true;
    });
    target.CreateClassOptions();
    const clSelect = document.getElementById("target-info_cl");
    clSelect.children[index].selected = true;
    target.ToggleAllOthers(_checked);
}

// クラスの選択肢生成
target.CreateClassOptions = () => {
    const clSelect = document.getElementById("target-info_cl");
    const depTypeForm = document.getElementById("target-info_depType");
    const depType = depTypeForm.options.value;
    const CreateOption = (value, selected) => {
        const match = selected === value;
        const newOption = document.createElement("option");
        newOption.value = value;
        newOption.selected = match;
        newOption.innerHTML = value;
        if(value !== "すべて含める" && value !== "すべて含めない") newOption.innerHTML += "系";
        clSelect.add(newOption);
        return match;
    }
    const selected = clSelect.value;
    clSelect.innerHTML = "";
    if(depType === "すべて含めない") {
        CreateOption("すべて含める", "すべて含める");
        CreateOption("すべて含めない", "すべて含めない");
        clSelect.disabled = true;
        return;
    }
    clSelect.disabled = false;
    let include = false;
    include |= CreateOption("すべて含める", selected);
    include |= CreateOption("すべて含めない", selected);
    const clCategory = [ "prince", "hero", "normal", "collabo" ];
    if(depType === "すべて含める") {
        _.forEach(clCategory, cat => {
            _.forEach(target.cl["近接"][cat], cl => include |= CreateOption(cl, selected));
            _.forEach(target.cl["遠距離"][cat], cl => include |= CreateOption(cl, selected));
            _.forEach(target.cl["遠近距離"][cat], cl => include |= CreateOption(cl, selected));
        });
    } else if(depType === "遠近距離") {
        _.forEach(clCategory, cat =>
            _.forEach(target.cl["遠近距離"][cat], cl => include |= CreateOption(cl, selected))
        );
    } else {
        _.forEach(clCategory, cat => {
            _.forEach(target.cl[depType][cat], cl => include |= CreateOption(cl, selected));
            _.forEach(target.count.depType[depType][cat], cl => include |= CreateOption(cl, selected));
        });
    }
    if(!include) clSelect.value = "すべて含めない";
}

// クラス選択時、他のオプションを自動的にON
target.AutoCheck = _cl => {
    const valid = document.getElementById("auto-check");
    if(!valid.checked) return;
    
    // depType
    const depType = _.findKey(target.cl, depType =>
        _.includes(_.flatten(_.toArray(depType)), _cl)
    );
    if(depType === undefined) return;
    const depTypeForm = document.getElementById("target-info_depType");
    _.forEach(depTypeForm.options, elem => { elem.checked = elem.value === depType; });
    
    // home, race
    _.forEach([ "home", "race" ], category => {
        const key = _.findKey(target.count[category], arr => _.includes(arr, _cl));
        if(key === undefined) return;
        const form = document.getElementById(`target-info_${category}`);
        _.forEach(form.options, elem => { elem.checked = elem.value === key; });
    });
    
    // others
    const othersForm = document.getElementById("target-info_others");
    _.forEach(othersForm.options, elem => {
        if(_.includes(target.count.others[elem.value], _cl)) elem.checked = true;
    });
}

// 属性等その他一括ON/OFF
target.ToggleAllOthers = _checked => {
    const othersForm = document.getElementById("target-info_others");
    _.forEach(othersForm.options, option => { option.checked = _checked; });
}

// 竜人→竜族チェック
target.CheckDragon = () => {
    const othersForm = document.getElementById("target-info_others");
    _.forEach(othersForm.options, option => {
        if(option.value === "ドラゴン" || option.value === "竜族") {
            option.checked = true;
            //return false;
        }
    });
}

// 検索実行
target.Search = () => {
    const categories = [ "rarity", "depType", "sex", "home", "race", "season", "year" ];
    _.forEach(categories, category => {
        const form = document.getElementById(`target-info_${category}`);
        target.selected[category] = form.options.value;
    });
    const clSelect = document.getElementById("target-info_cl")
    target.selected.cl = clSelect.value;
    if(target.selected.cl === "すべて含める") {
        target.selected.cl = _.map(clSelect.children, option => option.value);
        _.drop(target.selected.cl, 2);
    } else if(target.selected.depType === "遠近距離") {
        const depTypeCount = _.findKey(target.count.depType, depType =>
            _.includes(_.flatten(_.toArray(depType)), target.selected.cl)
        );
        if(depTypeCount !== undefined)
            target.selected.depType = [ "遠近距離", depTypeCount ];
    }
    const othersForm = document.getElementById("target-info_others");
    target.selected.others = [];
    _.forEach(othersForm.options, option => {
        if(option.checked) target.selected.others.push(option.value);
    });
    
    const filters = document.getElementById("filters");
    const tables = document.getElementById("tables");
    filters.classList.remove("is-unshown");
    tables.classList.remove("is-unshown");
    table.CreateTable();
}

// 絞り込み用
target.IsMatch = _target => {
    let match = false;
    if(Array.isArray(_target)) {
        _.forEach(_target, and => {
            let matchSub = true;
            _.forEach(and, (arr, cat) => {
                if(target.selected[cat] === "すべて含める") {
                    matchSub &= true;
                    return;
                }
                if(target.selected[cat] === "すべて含めない") {
                    matchSub = false;
                    return false;
                }
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
            if(target.selected[cat] === "すべて含める") {
                match &= true;
                return;
            }
            if(target.selected[cat] === "すべて含めない") {
                match = false;
                return false;
            }
            if(Array.isArray(target.selected[cat]))
                match &= _.reduce(target.selected[cat], (result, selected) =>
                    result |= _.includes(arr, selected)
                , false);
            else match &= _.includes(arr, target.selected[cat]);
        });
    }
    return match;
}