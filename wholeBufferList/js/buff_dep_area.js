// 範囲配置
buff.dep_area = [
    {
        name: "光槍ビルガの継承者", cl: "光槍ビルガの継承者", AW: "覚1"
        , stats: { atk: "×1.15" }
    }
    , {
        name: "フォートレス", cl: "重装砲兵", AW: "覚2b"
        , stats: { def: "×1.15" }
        , note: "重装砲兵系"
    }
    , {
        name: "ウォーストリンガー", cl: "妖糸使い", AW: "覚2a"
        , stats: { atk: "×1.07", def: "×1.07" }
        , note: [ "妖糸使い系", "分類未確認" ]
    }
    , {
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
        name: "ハリンヘイム", rarity: "白", cl: "砲術士", AW: "未"
        , stats: { atk: "×1.1" }
    }
    , {
        name: "ハリンヘイム", rarity: "白", cl: "砲術士", AW: "覚醒"
        , stats: { atk: "×1.15" }
    }
    , {
        name: "シャルキー/新装", rarity: "黒", cl: "ダンサー", AW: "覚醒"
        , stats: { poison: "-100%", abn: "-100%" }
    }
    , {
        name: "ソシエ/ハロウィン", rarity: "黒", cl: "モンスタースレイヤー", AW: "覚醒"
        , stats: { atk: "×1.1" }
        , note: "分類未確認"
    }
    , {
        name: "コンカラー", cl: "ロード", AW: "覚2b"
        , stats: { atk: "×1.15" }
        , note: "ロード系"
    }
    , {
        name: "神威狛犬", cl: "狛犬", AW: "覚2a"
        , stats: { other: "" }
        , note: [ "狛犬系", "HP回復量×1.2" ]
    }
    , {
        name: "時の俯瞰者", cl: "時の俯瞰者", AW: "未"
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
        name: "メディック", cl: "メディック", AW: "未"
        , stats: { rege: [ "50/秒", "25/15f" ], abn: "-100%" }
    }
    , {
        name: "メディックチーフ", cl: "メディック", AW: "覚1"
        , stats: { rege: [ "70/秒", "35/15f" ], abn: "-100%" }
        , note: "メディック系"
    }
    , {
        name: "軍部医局長", cl: "メディック", AW: "覚2a"
        , stats: { rege: [ "80/秒", "40/15f" ], abn: "-100%" }
        , note: "メディック系"
    }
    , {
        name: "医神の代行者", cl: "メディック", AW: "覚2b"
        , stats: { abn: "-100%" }
        , note: "メディック系"
    }
    , {
        name: "セレン", rarity: "白", cl: "メディック", AW: "未"
        , stats: { other: "" }
        , note: "HP回復量×1.2"
    }
    , {
        name: "セレン", rarity: "白", cl: "メディック", AW: "覚醒"
        , stats: { other: "" }
        , note: "HP回復量×1.3"
    }
    , {
        name: "桃源郷", rarity: "金", cl: "桃源郷"
        , stats: { hp: "+10%", atk: "×0.8" }
        , note: "分類未確認"
    }
    , {
        name: "ストレイソッド", rarity: "金", cl: "ストレイソッド"
        , stats: { def: "×0.8", mr: "×0.9" }
        , note: "分類未確認"
    }
    , {
        name: "ゼス警察長官【ランス】", cl: "ゼス警察長官【ランス】", AW: "未"
        , stats: { atk: "×1.05", def: "×1.05" }
        , note: "分類未確認"
    }
    , {
        name: "ゼス四天王【ランス】", cl: "ゼス警察長官【ランス】", AW: "覚1"
        , stats: { atk: "×1.1", def: "×1.1" }
        , note: [ "ゼス警察長官【ランス】系", "分類未確認" ]
    }
    , {
        name: "森林霊符", rarity: "トークン", AW: "未"
        , stats: { atk: "×1.1", def: "×1.1" }
        , note: [ "リャオレン", "分類未確認" ]
    }
    , {
        name: "大森林霊符", rarity: "トークン", AW: "覚醒"
        , stats: { atk: "×1.2", def: "×1.2" }
        , note: [ "リャオレン", "分類未確認" ]
    }
    /*
    , {
        name: "イルミナトークン", rarity: "トークン", AW: "未"
        , stats: { atk: "×1.1", mr: "+" }
        , note: "イルミナ"
    }
    */
    , {
        name: [ "イルミナトークン", "(攻・魔耐)" ], rarity: "トークン", AW: "覚醒"
        , stats: { atk: "×1.2", mr: "+10" }
        , note: "イルミナ"
    }
    , {
        name: [ "イルミナトークン", "(防・魔耐)" ], rarity: "トークン", AW: "覚醒"
        , stats: { def: "×1.2", mr: "+10" }
        , note: "イルミナ"
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒", skill: ""
        , stats: { : "" }
    }
    
    黒 白 青 金 ちび 銀 トークン
    
    未 覚醒 覚1 覚2a 覚2b
    
    常時 非 通常 覚醒
    
    hp atk def mr range cost wt ct dur atkCd
    
    rege: [ "/秒", "/f" ]
    
    poison abn eva nul draw redep other
    
    target note

*/