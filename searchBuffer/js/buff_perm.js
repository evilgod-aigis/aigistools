// 永続
buff.perm = [
    {
        name: "王子【聖夜】", cl: "王子", skill: "通常(1)"
        , stats: { hp: "×1.1" }
        , target: { season: [ "クリスマス" ] }
        , note: "スキル発動時"
    }
    , {
        name: "王子【聖夜】", cl: "王子", skill: "通常(2)"
        , stats: { atk: "×1.1" }
        , target: { season: [ "クリスマス" ] }
        , note: "スキル発動時"
    }
    , {
        name: "王子【聖夜】", cl: "王子", skill: "通常(3)"
        , stats: { def: "×1.1" }
        , target: { season: [ "クリスマス" ] }
        , note: "スキル発動時"
    }
    , {
        name: "ユッタ/水着", rarity: "白", cl: "料理人", AW: "覚醒", skill: "覚醒"
        , stats: { hp: "×1.2" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "サマー" ] }
        ]
        , note: "スキル発動時"
    }
    , {
        name: "ラウラ", rarity: "黒", cl: "ドラゴンシャーマン", AW: "覚醒", skill: "覚醒(1)"
        , stats: { hp: "×1.2" }
        , target: { others: [ "ドラゴン" ] }
        , note: [ "スキル発動時", "ボムスキル" ]
    }
    , {
        name: "ラウラ", rarity: "黒", cl: "ドラゴンシャーマン", AW: "覚醒", skill: "覚醒(2)"
        , stats: { atk: "×1.2" }
        , target: { others: [ "ドラゴン" ] }
        , note: [ "スキル発動時", "ボムスキル" ]
    }
    , {
        name: "ラウラ", rarity: "黒", cl: "ドラゴンシャーマン", AW: "覚醒", skill: "覚醒(3)"
        , stats: { def: "×1.2" }
        , target: { others: [ "ドラゴン" ] }
        , note: [ "スキル発動時", "ボムスキル" ]
    }
    , {
        name: "アンナ/バレンタイン", rarity: "黒", cl: "政務官", AW: "覚醒", skill: "覚醒(1)"
        , stats: { atk: "×1.05", def: "×1.05" }
        , target: [
            { cl: [ "王子" ] }
            , { season: [ "バレンタイン" ] }
        ]
        , note: "分類未確認"
    }
    , {
        name: "アヴィリコ", rarity: "白", cl: "エアセイラー", AW: "覚醒", skill: "覚醒(1)"
        , stats: { hp: "×1.06", atk: "×1.06", def: "×1.06" }
        , target: { others: [ "機械" ] }
        , note: "スキル発動時"
    }
    , {
        name: "アヴィリコ", rarity: "白", cl: "エアセイラー", AW: "覚醒", skill: "覚醒(2)"
        , stats: { hp: "×1.12", atk: "×1.12", def: "×1.12" }
        , target: { others: [ "機械" ] }
        , note: "スキル発動時"
    }
    , {
        name: "斎主の獅子", rarity: "トークン", AW: "未", skill: "通常(1)"
        , stats: { hp: "×1.5" }
        , target: { cl: [ "狛犬" ] }
        , note: [ "コマ/花嫁", "スキル発動時", "ボムスキル" ]
    }
    , {
        name: "斎主の大獅子", rarity: "トークン", AW: "覚1", skill: "通常(1)"
        , stats: { hp: "×1.5" }
        , target: { cl: [ "狛犬" ] }
        , note: [ "コマ/花嫁", "スキル発動時", "ボムスキル" ]
    }
    , {
        name: "斎主の大獅子【神威】", rarity: "トークン", AW: "覚2a", skill: "通常(1)"
        , stats: { hp: "×1.5" }
        , target: { cl: [ "狛犬" ] }
        , note: [ "コマ/花嫁", "スキル発動時", "ボムスキル" ]
    }
    , {
        name: "斎主の大獅子【邪祓】", rarity: "トークン", AW: "覚2b", skill: "通常(1)"
        , stats: { hp: "×1.5" }
        , target: { cl: [ "狛犬" ] }
        , note: [ "コマ/花嫁", "スキル発動時", "ボムスキル" ]
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
    
    eva nul draw
    
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
    
    note 発動時
    
    正月 水着 浴衣 バニー 花嫁

*/