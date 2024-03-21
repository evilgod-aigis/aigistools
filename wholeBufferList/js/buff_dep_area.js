// 範囲配置
buff.dep_area = [
    {
        name: "セイント", cl: "ヒーラー", AW: "覚1"
        , stats: { abn: [ "-50%", "(時間)" ] }
        , note: "ヒーラー系"
    }
    , {
        name: "ハイエロファント", cl: "ヒーラー", AW: "覚2a"
        , stats: { abn: [ "-50%", "(時間)" ] }
        , note: "ヒーラー系"
    }
    , {
        name: "オラクル", cl: "ヒーラー", AW: "覚2b"
        , stats: { abn: [ "-50%", "(時間)" ] }
        , note: "ヒーラー系"
    }
    , {
        name: "ハリンヘイム", rarity: "白", cl: "砲術士", AW: "覚醒前"
        , stats: { atk: "×1.1" }
    }
    , {
        name: "ハリンヘイム", rarity: "白", cl: "砲術士", AW: "覚醒後"
        , stats: { atk: "×1.15" }
    }
    , {
        name: "ソシエ/ハロウィン", rarity: "黒", cl: "モンスタースレイヤー", AW: "覚醒後"
        , stats: { atk: "×1.1" }
        , note: "分類未確認"
    }
    , {
        name: "コンカラー", cl: "ロード", AW: "覚2b"
        , stats: { atk: "×1.15" }
        , note: "ロード系"
    }
    , {
        name: "時の俯瞰者", cl: "時の俯瞰者", AW: "覚醒前"
        , stats: { mr: "×1.1" }
    }
    , {
        name: "時の干渉者", cl: "時の俯瞰者", AW: "覚1"
        , stats: { mr: "×1.15" }
        , note: "時の俯瞰者系"
    }
    , {
        name: "時の先導者", cl: "時の俯瞰者", AW: "覚2a"
        , stats: { mr: "×1.2" }
        , note: "時の俯瞰者系"
    }
    , {
        name: "ラピドゥスアイオーン", cl: "時の俯瞰者", AW: "覚2b"
        , stats: { mr: "×1.15" }
        , note: "時の俯瞰者系"
    }
    , {
        name: "メディック", cl: "メディック", AW: "覚醒前"
        , stats: { rege: [ "50/秒", "?/?f" ], abn: "-100%" }
    }
    , {
        name: "メディックチーフ", cl: "メディック", AW: "覚1"
        , stats: { rege: [ "70/秒", "?/?f" ], abn: "-100%" }
        , note: "メディック系"
    }
    , {
        name: "軍部医局長", cl: "メディック", AW: "覚2a"
        , stats: { rege: [ "80/秒", "?/?f" ], abn: "-100%" }
        , note: "メディック系"
    }
    /*
    , {
        name: "", cl: "メディック", AW: "覚2b"
        , stats: { rege: [ "0/秒", "?/?f" ], abn: "-100%" }
        , note: "メディック系"
    }
    */
    , {
        name: "桃源郷", rarity: "金", cl: "桃源郷"
        , stats: { hp: "+10%", atk: "×0.8" }
        , note: "分類未確認"
    }
    , {
        name: "森林霊符", rarity: "トークン", AW: "覚醒前"
        , stats: { atk: "×1.1", def: "×1.1" }
        , note: [ "リャオレン", "分類未確認" ]
    }
    , {
        name: "大森林霊符", rarity: "トークン", AW: "覚醒後"
        , stats: { atk: "×1.2", def: "×1.2" }
        , note: [ "リャオレン", "分類未確認" ]
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒後", skill: ""
        , stats: { : "" }
    }
    
    黒 白 青 金 ちび 銀 トークン
    
    CC前 CC後 CC55 覚醒前 覚醒後 覚1 覚2a 覚2b
    
    常時 非 通常 覚醒
    
    hp atk def mr range cost wt ct dur atkCd
    
    rege: [ "/秒", "/f" ]
    
    poison abn eva nul draw redep other
    
    target note

*/