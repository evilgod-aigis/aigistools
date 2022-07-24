// 加算
buff.add = [
    {
        name: "モーティマ/学園", rarity: "白", cl: "バンデット", AW: "覚醒前"
        , stats: { hp: "max1000", atk: "max400", def: "max400" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "モーティマ/学園", rarity: "白", cl: "バンデット", AW: "覚醒後"
        , stats: { hp: "max1200", atk: "max600", def: "max600" }
        , target: [
            { sex: [ "男性" ] }
            , { season: [ "学園" ] }
        ]
    }
    , {
        name: "オーガスタ", rarity: "黒", cl: "料理人", AW: "覚醒前"
        , stats: { hp: "max2250", atk: "max1050", def: "max1050" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "オーガスタ", rarity: "黒", cl: "料理人", AW: "覚醒後"
        , stats: { hp: "max3000", atk: "max1500", def: "max1500" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "オーガスタ/バレンタイン", rarity: "黒", cl: "料理人", AW: "覚醒前"
        , stats: { hp: "max1200", atk: "max600", def: "max600" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "オーガスタ/バレンタイン", rarity: "黒", cl: "料理人", AW: "覚醒後"
        , stats: { hp: "max1600", atk: "max800", def: "max800" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "タオパオ", rarity: "白", cl: "料理人", AW: "覚醒前"
        , stats: { hp: "max1800", atk: "max900", def: "max900" }
        , target: { others: [ "魔術師" ] }
    }
    , {
        name: "タオパオ", rarity: "白", cl: "料理人", AW: "覚醒後"
        , stats: { hp: "max2400", atk: "max1200", def: "max1200" }
        , target: { others: [ "魔術師" ] }
    }
    , {
        name: "キホル", rarity: "白", cl: "料理人", AW: "覚醒前"
        , stats: { hp: "max1800", atk: "max900", def: "max900" }
        , target: { race: [ "デーモン系" ] }
    }
    , {
        name: "キホル", rarity: "白", cl: "料理人", AW: "覚醒後"
        , stats: { hp: "max2400", atk: "max1200", def: "max1200" }
        , target: { race: [ "デーモン系" ] }
    }
    , {
        name: "ユッタ", rarity: "白", cl: "料理人", AW: "覚醒前"
        , stats: { hp: "max1800", atk: "max900", def: "max900" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "ユッタ", rarity: "白", cl: "料理人", AW: "覚醒後"
        , stats: { hp: "max2400", atk: "max1200", def: "max1200" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "アヅミ", rarity: "白", cl: "料理人", AW: "覚醒前"
        , stats: { hp: "max1800", atk: "max900", def: "max900" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "アヅミ", rarity: "白", cl: "料理人", AW: "覚醒後"
        , stats: { hp: "max2400", atk: "max1200", def: "max1200" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "アシュリン", rarity: "白", cl: "料理人", AW: "覚醒前"
        , stats: { hp: "max1800", atk: "max900", def: "max900" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "アシュリン", rarity: "白", cl: "料理人", AW: "覚醒後"
        , stats: { hp: "max2400", atk: "max1200", def: "max1200" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "ヤマブキ", rarity: "金", cl: "料理人", AW: "覚醒前"
        , stats: { hp: "max1800", atk: "max900", def: "max900" }
        , target: { others: [ "弓兵" ] }
    }
    , {
        name: "ヤマブキ", rarity: "金", cl: "料理人", AW: "覚醒後"
        , stats: { hp: "max2400", atk: "max1200", def: "max1200" }
        , target: { others: [ "弓兵" ] }
    }
    , {
        name: "ちびオーガスタ", rarity: "ちび", cl: "料理人"
        , stats: { hp: "max3000", atk: "max1500", def: "max1500" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "政務官", cl: "政務官"
        , stats: { atk: "10%", def: "10%" }
        , target: { cl: [ "王子" ] }
        , note: "範囲"
    }
    , {
        name: "アンナ", rarity: "黒", cl: "政務官", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , target: { cl: [ "王子" ] }
        , note: "範囲"
    }
    , {
        name: "アンナ/メイド", rarity: "黒", cl: "政務官", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , target: { cl: [ "王子" ] }
        , note: "範囲"
    }
    , {
        name: "アンナ/水着", rarity: "黒", cl: "政務官", skill: "通常(2〜)"
        , stats: { atk: "*12", def: "*12" }
        , target: { cl: [ "王子" ] }
        , note: [ "範囲", "永続" ]
    }
    , {
        name: "アンナ/戦場", rarity: "黒", cl: "政務官", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , target: { cl: [ "王子" ] }
        , note: "範囲"
    }
    , {
        name: "アンナ/アイドル", rarity: "黒", cl: "政務官", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , target: { cl: [ "王子" ] }
        , note: [ "範囲", "永続" ]
    }
    , {
        name: "マレブランケ", rarity: "黒", cl: "ダークプリースト", AW: "覚醒後"
        , stats: { mr: "+20" }
        , target: { home: [ "白の帝国" ] }
        , note: "範囲"
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒後", skill: ""
        , stats: { : "" }
        , target: { : [ "" ] }
        , target: [
            { : [ "" ] }
            , { : [ "" ] }
        ]
    }
    
    黒 白 青 金 ちび 銀 銅 鉄 トークン
    
    CC前 CC後 覚醒前 覚醒後 覚1 覚2a 覚2b
    
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
    
    others 英傑 ちび 弓兵 魔術師 アンデッド 機械 ＜七つの大罪＞
    
    竜族 全プリンセス系 GG持ち HP回復不可 魔界適応 深海適応 天界適応
    
    year 年
    
    note 範囲 分類未確認
    
    正月 水着 浴衣 バニー 花嫁

*/