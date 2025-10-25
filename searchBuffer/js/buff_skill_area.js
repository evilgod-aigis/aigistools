// 範囲スキル
buff.skill_area = [
    {
        name: "イヴリール/水着", rarity: "白", cl: "未踏海域の覇者", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.5", def: "×1.5" }
        , target: [
            { season: [ "サマー" ] }
            , { others: [ "深海" ] }
        ]
        , note: [ "全域", "最大値(倍率+0.1/サマー、深海属性ユニット)" ]
    }
    , {
        name: "ベラドンナ", rarity: "黒", cl: "プリンセス", AW: "未", skill: "通常"
        , stats: { atk: "×1.1", def: "×1.1" }
        , target: [
            { home: [ "白の帝国" ] }
            , { others: [ "高貴" ] }
        ]
        , note: [ "全域", "永続スキル" ]
    }
    , {
        name: "ベラドンナ", rarity: "黒", cl: "プリンセス", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.1", def: "×1.1" }
        , target: [
            { home: [ "白の帝国" ] }
            , { others: [ "高貴" ] }
        ]
        , note: [ "全域", "永続スキル" ]
    }
    , {
        name: "グレン/学園", rarity: "白", cl: "天狗", AW: "未", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.2" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "グレン/学園", rarity: "白", cl: "天狗", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.2" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "グレン/学園", rarity: "白", cl: "天狗", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "アスラハ", rarity: "黒", cl: "グランドナイト", AW: "未", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { home: [ "砂漠の国" ] }
        , note: "全域"
    }
    , {
        name: "アスラハ", rarity: "黒", cl: "グランドナイト", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { home: [ "砂漠の国" ] }
        , note: "全域"
    }
    , {
        name: "金糸雀姉妹/花嫁", rarity: "白", cl: "かまいたち", AW: "未", skill: "通常"
        , stats: { atkCd: "6f化" }
        , target: { cl: [ "かまいたち" ] }
    }
    , {
        name: "金糸雀姉妹/花嫁", rarity: "白", cl: "かまいたち", AW: "覚醒", skill: "通常"
        , stats: { atkCd: "6f化" }
        , target: { cl: [ "かまいたち" ] }
    }
    , {
        name: "コウメ/水着", rarity: "白", cl: "戦巫女", AW: "未", skill: "通常"
        , stats: { def: "×1.8" }
        , target: [
            { home: [ "東の国" ] }
            , { race: [ "人間", "半神" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "コウメ/水着", rarity: "白", cl: "戦巫女", AW: "覚醒", skill: "通常"
        , stats: { def: "×1.8" }
        , target: [
            { home: [ "東の国" ] }
            , { race: [ "人間", "半神" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "ソーマ/温泉", rarity: "白", cl: "アーチャー", AW: "覚醒", skill: "覚醒"
        , stats: { atkCd: "2f化" }
        , target: { cl: [ "アーチャー" ] }
    }
    , {
        name: "レオナ/新装", rarity: "黒", cl: "後衛戦術家", AW: "未", skill: "通常"
        , stats: { def: "×1.4", mr: "×1.4" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "レオナ/新装", rarity: "黒", cl: "後衛戦術家", AW: "覚醒", skill: "通常"
        , stats: { def: "×1.4", mr: "×1.4" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "シナト", rarity: "白", cl: "後衛戦術家", AW: "未", skill: "通常"
        , stats: { ct: "-100%" }
        , target: { depType: [ "遠距離" ] }
        , note: "ボムスキル"
    }
    , {
        name: "シナト", rarity: "白", cl: "後衛戦術家", AW: "覚醒", skill: "通常"
        , stats: { ct: "-100%" }
        , target: { depType: [ "遠距離" ] }
        , note: "ボムスキル"
    }
    , {
        name: "リノ/新装", rarity: "黒", cl: "サモナー", AW: "未", skill: "通常"
        , stats: { atkCd: "-?%" }
        , target: { cl: [ "サモナー" ] }
    }
    , {
        name: "リノ/新装", rarity: "黒", cl: "サモナー", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: { atkCd: "-?%" }
        , target: { cl: [ "サモナー" ] }
    }
    , {
        name: "アンナ/お正月", rarity: "黒", cl: "政務官", AW: "覚醒", skill: "覚醒"
        , stats: { eva: "20%" }
        , target: [
            { cl: [ "王子" ] }
            , { season: [ "お正月" ] }
        ]
        , note: "永続スキル"
    }
    , {
        name: "トワ", rarity: "黒", cl: "クロノウィッチ", AW: "覚醒", skill: "覚醒"
        , stats: { atkCd: "6f化" }
        , target: { others: [ "魔術師" ] }
    }
    , {
        name: "ココロ/浴衣", rarity: "白", cl: "クロノウィッチ", AW: "覚醒", skill: "覚醒"
        , stats: { atkCd: "6f化" }
        , target: { season: [ "サマー" ], depType: [ "遠距離" ] }
    }
    , {
        name: "フィオレ", rarity: "黒", cl: "ドルイド", AW: "未", skill: "通常"
        , stats: { other: "" }
        , target: { depType: [ "遠距離" ] }
        , note: "隠密付与"
    }
    , {
        name: "ちびフィオレ", rarity: "ちび", cl: "ドルイド", skill: "通常"
        , stats: { other: "" }
        , target: { depType: [ "遠距離" ] }
        , note: "隠密付与"
    }
    , {
        name: "ハーニィ", rarity: "白", cl: "エンチャンター", AW: "未", skill: "通常"
        , stats: { atkCd: "6f化", eva: "50%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "ハーニィ", rarity: "白", cl: "エンチャンター", AW: "覚醒", skill: "通常"
        , stats: { atkCd: "6f化", eva: "50%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "ザミエル", rarity: "白", cl: "デモンサモナー", AW: "覚醒", skill: "覚醒"
        , stats: { ct: "-50%" }
        , target: [
            { home: [ "白の帝国" ] }
            , { others: [ "魔界" ] }
        ]
        , note: "永続スキル"
    }
    , {
        name: "パトリシア/水着", rarity: "白", cl: "支援工兵", AW: "覚醒", skill: "覚醒"
        , stats: { hp: "+50%" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "イルミナ", rarity: "白", cl: "儀式魔術師", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.2" }
        , target: { others: [ "魔術師" ] }
    }
    , {
        name: "アナベラ", rarity: "白", cl: "スカラー", AW: "覚醒", skill: "覚醒"
        , stats: { range: "×1.1" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "ニーカ", rarity: "白", cl: "メディック", AW: "覚醒", skill: "覚醒(～2)"
        , stats: { atk: "×1.2" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "ニーカ", rarity: "白", cl: "メディック", AW: "覚醒", skill: "覚醒(3～)"
        , stats: { atk: "×1.3" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "夏侯淵 妙才", rarity: "黒", cl: "弓将【恋姫】", AW: "未", skill: "通常"
        , stats: { atkCd: "-?%" }
        , target: { home: [ "恋姫" ] }
    }
    , {
        name: "夏侯淵 妙才", rarity: "黒", cl: "弓将【恋姫】", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: { atkCd: "-?%" }
        , target: { home: [ "恋姫" ] }
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒", skill: ""
        , stats: { : "" }
        , target: { : [ "" ] }
        , target: [
            { : [ "" ] }
            , { : [ "" ] }
        ]
    }
    
    黒 白 青 金 ちび 銀 銅 鉄 トークン
    
    未 覚醒 覚1 覚2a 覚2b
    
    常時 非 通常 覚醒
    
    hp atk def mr range cost wt ct dur atkCd
    
    rege: [ "/秒", "/f" ]
    
    poison: "-100%", abn: "-100%"
    
    eva nul redep
    
    draw
    ○
    (○)
    
    other
    
    depType 近接 遠距離 遠近距離
    
    sex 男性 女性
    
    home 白の帝国 砂漠の国 東の国 パルス王国
    
    race 聖霊 人間 獣人 竜人 エルフ系 ドワーフ ヴァンパイア
    
    デーモン系 天使 妖怪 仙人 オーク ゴブリン 鳥人 魚人
    
    神 天界人 ねんどろいど
    
    season お正月 温泉 バレンタイン 学園 エッグハント
    
    ジューンブライド サマー ハロウィン クリスマス
    
    others 英傑 ちび 弓兵 魔術師 アンデッド 機械 騎兵 重装 聖職者 魔界 ドラゴン ＜七つの大罪＞
    
    全プリンセス系 GG持ち HP回復不可 魔界適応 深海適応 天界適応
    
    year 年
    
    note 全域 分類未確認
    
    正月 水着 浴衣 バニー 花嫁

*/