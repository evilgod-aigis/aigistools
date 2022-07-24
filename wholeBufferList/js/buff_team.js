const buff = {};

// 編成
buff.team = [
    {
        name: "王子【神器装備】", cl: "王子"
        , stats: { hp: "+10%" }
    }
    , {
        name: "王子【ケラウノス】", cl: "王子"
        , stats: { hp: "+10%" }
    }
    , {
        name: "王子【英雄王】", cl: "王子"
        , stats: { hp: "+20%" }
    }
    , {
        name: "王子【神槍】", cl: "王子"
        , stats: { hp: "+10%" }
    }
    , {
        name: "王子【祝賀】", cl: "王子"
        , stats: { hp: "+10%" }
    }
    , {
        name: "王子【太鼓】", cl: "王子"
        , stats: { hp: "+15%" }
    }
    , {
        name: "アリア", rarity: "金", cl: "ソルジャー", AW: "覚醒後"
        , stats: { atk: "+2%" }
    }
    , {
        name: "ケイティ", rarity: "金", cl: "ソルジャー", AW: "覚醒後"
        , stats: { def: "+2%" }
    }
    , {
        name: "ルイーズ", rarity: "白", cl: "プリンセス", AW: "覚醒後"
        , stats: { def: "+17%", cost: "+2" }
    }
    , {
        name: "ウズメ", rarity: "白", cl: "前衛戦術家", AW: "覚醒後"
        , stats: { atk: "+5%" }
        , note: "レオラと競合"
    }
    , {
        name: "レオラ", rarity: "白", cl: "前衛戦術家", AW: "覚醒後"
        , stats: { atk: "+5%" }
        , note: "ウズメと競合"
    }
    , {
        name: "デーモンロード", cl: "デーモンロード", AW: "覚醒前"
        , stats: { other: "" }
        , note: "魔界-50%"
    }
    , {
        name: "デーモンハイロード", cl: "デーモンロード", AW: "覚1"
        , stats: { other: "" }
        , note: [ "魔界-50%", "デーモンロード系" ]
    }
    , {
        name: "エンプレス", cl: "エンプレス", AW: "覚醒前"
        , stats: { wt: "-15%" }
    }
    , {
        name: "アウトクラトール", cl: "エンプレス", AW: "覚1"
        , stats: { wt: "-20%" }
        , note: "エンプレス系"
    }
    , {
        name: "ドミヌスサクルム", cl: "エンプレス", AW: "覚2a"
        , stats: { wt: "-40%" }
        , note: "エンプレス系"
    }
    , {
        name: "インヴィクタス", cl: "エンプレス", AW: "覚2b"
        , stats: { wt: "-25%" }
        , note: "エンプレス系"
    }
    , {
        name: "ユキザクラ", rarity: "黒", cl: "霊刀つくもがみ", AW: "覚醒前"
        , stats: { other: "" }
        , note: "呪殺(9%)付与"
    }
    , {
        name: "ユキザクラ", rarity: "黒", cl: "霊刀つくもがみ", AW: "覚醒後"
        , stats: { other: "" }
        , note: "呪殺(9%)付与"
    }
    , {
        name: "フジムラサキ", rarity: "黒", cl: "霊刀つくもがみ", AW: "覚醒前"
        , stats: { other: "" }
        , note: "奇跡の盾(16%)付与"
    }
    , {
        name: "フジムラサキ", rarity: "黒", cl: "霊刀つくもがみ", AW: "覚醒後"
        , stats: { other: "" }
        , note: "奇跡の盾(16%)付与"
    }
    , {
        name: "イリス", rarity: "黒", cl: "ヒーラー", AW: "覚醒後"
        , stats: { def: "+7%" }
    }
    , {
        name: "アデル", rarity: "白", cl: "ウィッチ", AW: "覚醒後"
        , stats: { hp: "+10%" }
    }
    , {
        name: "キキョウ", rarity: "黒", cl: "シャーマン", AW: "覚醒後"
        , stats: { atk: "+7%" }
    }
    , {
        name: "アイシャ", rarity: "黒", cl: "後衛戦術家", AW: "覚醒後"
        , stats: { hp: "+20%" }
    }
    , {
        name: "レン", rarity: "白", cl: "後衛戦術家", AW: "覚醒後"
        , stats: { def: "+5%" }
    }
    , {
        name: "アクアマリー", rarity: "白", cl: "サモナー", AW: "覚醒前"
        , stats: { poison: "-15%", abn: "-15%" }
    }
    , {
        name: "アクアマリー", rarity: "白", cl: "サモナー", AW: "覚醒後"
        , stats: { poison: "-30%", abn: "-30%" }
    }
    , {
        name: "ミヤビ", rarity: "黒", cl: "ダンサー", AW: "覚醒後"
        , stats: { mr: "+5" }
    }
    , {
        name: "トワ", rarity: "黒", cl: "クロノウィッチ", AW: "覚醒前"
        , stats: { atkCd: "-20%" }
    }
    , {
        name: "トワ", rarity: "黒", cl: "クロノウィッチ", AW: "覚醒後"
        , stats: { atkCd: "-20%" }
    }
    , {
        name: "ちびトワ", rarity: "ちび", cl: "クロノウィッチ"
        , stats: { atkCd: "-20%" }
    }
    , {
        name: "天狼巫女", cl: "フェンリルシャーマン", AW: "覚2a"
        , stats: { hp: "+15%" }
        , note: "フェンリルシャーマン系"
    }
    , {
        name: "シンフー", rarity: "黒", cl: " 幻獣使い", AW: "覚醒後"
        , stats: { hp: "+5%" }
    }
    , {
        name: "ハルフゥ", rarity: "黒", cl: " シービショップ", AW: "覚醒後"
        , stats: { other: "" }
        , note: "深海-30%"
    }
    , {
        name: "イーファ", rarity: "黒", cl: " ドラグーン", AW: "覚醒後"
        , stats: { hp: "+10%" }
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒後", skill: ""
        , stats: { : "" }
    }
    
    黒 白 青 金 ちび
    
    覚醒前 覚醒後 覚1 覚2a 覚2b
    
    常時 非 通常 覚醒
    
    hp atk def mr range cost wt ct dur atkCd
    
    rege poison abn eva nul draw redep other
    
    target note
    
    正月 水着 浴衣 バニー 花嫁
    
    お正月 温泉 バレンタイン 学園 エッグハント
    
    ジューンブライド サマー ハロウィン クリスマス

*/