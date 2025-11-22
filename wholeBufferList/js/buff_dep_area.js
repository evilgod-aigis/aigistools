// 範囲配置
buff.dep_area = [
    {
        name: "光槍ビルガの継承者", cl: "光槍ビルガの継承者", AW: "覚1"
        , stats: { atk: "×1.15" }
    }
    , {
        name: "盤上の支配者", cl: "盤上の支配者", AW: "覚1"
        , stats: { atkCd: "-35%" }
    }
    , {
        name: "フォートレス", cl: "重装砲兵", AW: "覚2b"
        , stats: { def: "×1.2" }
        , note: "重装砲兵系"
    }
    , {
        name: "ウォーストリンガー", cl: "妖糸使い", AW: "覚2a"
        , stats: { atk: "×1.07", def: "×1.07" }
        , note: [ "妖糸使い系", "分類未確認" ]
    }
    , {
        name: "ヒーラー", cl: "ヒーラー", AW: "未"
        , stats: { other: "" }
        , note: "被HP回復量×1.3"
    }
    , {
        name: "セイント", cl: "ヒーラー", AW: "覚1"
        , stats: { abn: [ "-50%", "(時間)" ], other: "" }
        , note: [ "ヒーラー系", "被HP回復量×1.5" ]
    }
    , {
        name: "ハイエロファント", cl: "ヒーラー", AW: "覚2a"
        , stats: { abn: [ "-50%", "(時間)" ], other: "" }
        , note: [ "ヒーラー系", "被HP回復量×1.5" ]
    }
    , {
        name: "オラクル", cl: "ヒーラー", AW: "覚2b"
        , stats: { abn: [ "-50%", "(時間)" ], other: "" }
        , note: [ "ヒーラー系", "被HP回復量×1.5" ]
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
        name: "ダークプリースト", cl: "ダークプリースト", AW: "未"
        , stats: { atk: "×1.03" }
    }
    , {
        name: "ダークカーディナル", cl: "ダークプリースト", AW: "覚1"
        , stats: { atk: "×1.05" }
        , note: "ダークプリースト系"
    }
    , {
        name: "ダークファウンダー", cl: "ダークプリースト", AW: "覚2a"
        , stats: { atk: "×1.05" }
        , note: "ダークプリースト系"
    }
    , {
        name: "ダークサクセサー", cl: "ダークプリースト", AW: "覚2b"
        , stats: { atk: "×1.05" }
        , note: "ダークプリースト系"
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
        name: "ピュレスカ", rarity: "黒", cl: "シービショップ", AW: "未"
        , stats: { other: "" }
        , note: "被HP回復量×1.3"
    }
    , {
        name: "ピュレスカ", rarity: "黒", cl: "シービショップ", AW: "覚醒"
        , stats: { other: "" }
        , note: "被HP回復量×1.5"
    }
    , {
        name: "神威狛犬", cl: "狛犬", AW: "覚2a"
        , stats: { other: "" }
        , note: [ "狛犬系", "被HP回復量×1.2" ]
    }
    , {
        name: "ステルゥ", rarity: "白", cl: "スカラー", AW: "覚醒"
        , stats: { poison: "-100%", abn: "-100%" }
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
        , note: "被HP回復量×1.2"
    }
    , {
        name: "セレン", rarity: "白", cl: "メディック", AW: "覚醒"
        , stats: { other: "" }
        , note: "被HP回復量×1.3"
    }
    , {
        name: "チャージサポーター", cl: "ポーター", AW: "覚2a"
        , stats: { rege: [ "100/秒", "50/15f" ] }
        , note: "ポーター系"
    }
    , {
        name: "グッズデリバリー", cl: "ポーター", AW: "覚2b"
        , stats: { atk: "×1.1" }
        , note: "ポーター系"
    }
    , {
        name: "攻防変換薬", rarity: "金", cl: "ふしぎな薬"
        , stats: { atk: "×1.1" }
        , note: "分類未確認"
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
        name: "個人防衛魔力障壁", rarity: "金", cl: "個人防衛魔力障壁"
        , stats: { def: "×1.1", mr: "+10", rege: [ "50/秒", "?/?f" ] }
        , note: [ "重ね置き(遠近)", "分類未確認" ]
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
        name: "モリグナン[黒]トークン(狼)", rarity: "トークン", AW: "覚醒"
        , stats: { atk: "×1.25" }
        , note: [ "モリグナン[黒]", "重ね置き(遠近)" ]
    }
    , {
        name: "モリグナン[黒]トークン(烏)", rarity: "トークン", AW: "覚醒"
        , stats: { atk: "×1.15", def: "×1.15" }
        , note: [ "モリグナン[黒]", "重ね置き(遠近)" ]
    }
    , {
        name: "森林霊符", rarity: "トークン", AW: "未"
        , stats: { atk: "×1.1", def: "×1.1" }
        , note: [ "リャオレン", "自壊(HP-1%/55f)", "分類未確認" ]
    }
    , {
        name: "大森林霊符", rarity: "トークン", AW: "覚醒"
        , stats: { atk: "×1.2", def: "×1.2" }
        , note: [ "リャオレン", "自壊(HP-1%/55f)", "分類未確認" ]
    }
    , {
        name: [ "イルミナトークン", "(防・魔耐)" ], rarity: "トークン", AW: "未"
        , stats: { def: "×1.1", mr: "+5" }
        , note: [ "イルミナ", "重ね置き(遠近)", "自壊(HP-1%/18f)" ]
    }
    , {
        name: [ "イルミナトークン", "(攻・魔耐)" ], rarity: "トークン", AW: "覚醒"
        , stats: { atk: "×1.2", mr: "+10" }
        , note: [ "イルミナ", "重ね置き(遠近)", "自壊(HP-1%/18f)" ]
    }
    , {
        name: [ "イルミナトークン", "(防・魔耐)" ], rarity: "トークン", AW: "覚醒"
        , stats: { def: "×1.2", mr: "+10" }
        , note: [ "イルミナ", "重ね置き(遠近)", "自壊(HP-1%/18f)" ]
    }
    , {
        name: "クロノシアトークン", rarity: "トークン", AW: "覚醒"
        , stats: { atkCd: "-60%" }
        , note: [ "クロノシア", "指定範囲", "継続：20秒" ]
    }
    , {
        name: "ちびクロノシアトークン", rarity: "トークン", AW: "覚醒"
        , stats: { atkCd: "-40%" }
        , note: [ "ちびクロノシア", "指定範囲", "継続：20秒" ]
    }
    , {
        name: "ポワワトークン", rarity: "トークン", AW: "未"
        , stats: { rege: [ "150/秒", "75/15f" ] }
        , note: [ "ポワワ", "重ね置き(遠近)", "自壊(HP-30/15f)" ]
    }
    , {
        name: "ポワワトークン", rarity: "トークン", AW: "覚醒"
        , stats: { rege: [ "250/秒", "125/15f" ] }
        , note: [ "ポワワ", "重ね置き(遠近)", "自壊(HP-40/15f)" ]
    }
    , {
        name: "サリエットトークン", rarity: "トークン", AW: "未"
        , stats: { atk: "×1.1", def: "×1.1", mr: "+10" }
        , note: [ "サリエット", "重ね置き(遠近)" ]
    }
    , {
        name: "サリエットトークン", rarity: "トークン", AW: "覚醒"
        , stats: { atk: "×1.1", def: "×1.1", mr: "+10" }
        , note: [ "サリエット", "重ね置き(遠近)" ]
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