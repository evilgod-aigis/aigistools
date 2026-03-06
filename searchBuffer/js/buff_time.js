const buff = {};

// 時間経過
buff.time = [
    {
        name: "ホルミース", rarity: "黒", cl: "吟遊詩人", AW: "未"
        , stats: { hp: "+10%", atk: "+10%", def: "+10%" }
        , target: { race: [ "人間", "神", "半神" ] }
        , note: [ "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "ホルミース", rarity: "黒", cl: "吟遊詩人", AW: "覚1"
        , stats: { hp: "+20%", atk: "+20%", def: "+20%" }
        , target: { race: [ "人間", "神", "半神" ] }
        , note: [ "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "ホルミース", rarity: "黒", cl: "吟遊詩人", AW: "覚2a"
        , stats: { hp: "+20%", atk: "+20%", def: "+20%" }
        , target: { race: [ "人間", "神", "半神" ] }
        , note: [ "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "ホルミース", rarity: "黒", cl: "吟遊詩人", AW: "覚2b"
        , stats: { hp: "+30%", atk: "+30%", def: "+30%" }
        , target: { race: [ "人間", "神", "半神" ] }
        , note: [ "範囲", "最大値(+?%/?秒)" ]
    }
    , {
        name: "ホルミース", rarity: "黒", cl: "吟遊詩人", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*1.2", def: "*1.2", other: "" }
        , target: { race: [ "人間", "神", "半神" ] }
        , note: [ "範囲", "上限(+2%/3秒)" ]
    }
    , {
        name: "ルクシエ", rarity: "黒", cl: "吟遊詩人", AW: "未"
        , stats: { atk: "+20%", def: "+20%" }
        , target: [
            { depType: [ "近接" ] }
            , { race: [ "鳥人" ] }
            , { others: [ "深海" ] }
        ]
        , note: [ "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "ルクシエ", rarity: "黒", cl: "吟遊詩人", AW: "未", skill: "通常"
        , stats: { atk: "+30%", def: "+30%", other: "" }
        , target: [
            { depType: [ "近接" ] }
            , { race: [ "鳥人" ] }
            , { others: [ "深海" ] }
        ]
        , note: [ "範囲", "最大値(+2%/3秒)", "永続スキル" ]
    }
    , {
        name: "ルクシエ", rarity: "黒", cl: "吟遊詩人", AW: "覚醒"
        , stats: { atk: "+20%", def: "+20%" }
        , target: [
            { depType: [ "近接" ] }
            , { race: [ "鳥人" ] }
            , { others: [ "深海" ] }
        ]
        , note: [ "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "ルクシエ", rarity: "黒", cl: "吟遊詩人", AW: "覚醒", skill: "通常"
        , stats: { atk: "+30%", def: "+30%", other: "" }
        , target: [
            { depType: [ "近接" ] }
            , { race: [ "鳥人" ] }
            , { others: [ "深海" ] }
        ]
        , note: [ "範囲", "最大値(+2%/3秒)", "永続スキル" ]
    }
    , {
        name: "ルクシエ", rarity: "黒", cl: "吟遊詩人", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "+40%", def: "+40%", other: "" }
        , target: [
            { depType: [ "近接" ] }
            , { race: [ "鳥人" ] }
            , { others: [ "深海" ] }
        ]
        , note: [ "範囲", "最大値(+2%/2秒)", "永続スキル" ]
    }
    , {
        name: "ルクシエ", rarity: "黒", cl: "吟遊詩人", AW: "覚2b"
        , stats: { atk: "+30%", def: "+30%" }
        , target: [
            { depType: [ "近接" ] }
            , { race: [ "鳥人" ] }
            , { others: [ "深海" ] }
        ]
        , note: [ "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "ルクシエ", rarity: "黒", cl: "吟遊詩人", AW: "覚2b", skill: "通常"
        , stats: { atk: "+45%", def: "+45%", other: "" }
        , target: [
            { depType: [ "近接" ] }
            , { race: [ "鳥人" ] }
            , { others: [ "深海" ] }
        ]
        , note: [ "範囲", "最大値(+2%/3秒)", "永続スキル" ]
    }
    , {
        name: "ルクシエ", rarity: "黒", cl: "吟遊詩人", AW: "覚2b", skill: "覚醒"
        , stats: { atk: "+60%", def: "+60%", other: "" }
        , target: [
            { depType: [ "近接" ] }
            , { race: [ "鳥人" ] }
            , { others: [ "深海" ] }
        ]
        , note: [ "範囲", "最大値(+2%/2秒)", "永続スキル" ]
    }
    , {
        name: "アミー", rarity: "白", cl: "吟遊詩人", AW: "未"
        , stats: { atk: "+15%", def: "+15%" }
        , target: { others: [ "魔界" ] }
        , note: [ "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "アミー", rarity: "白", cl: "吟遊詩人", AW: "覚醒"
        , stats: { atk: "+25%", def: "+25%" }
        , target: { others: [ "魔界" ] }
        , note: [ "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "アミー", rarity: "白", cl: "吟遊詩人", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*1.2", def: "*1.2", other: "" }
        , target: { others: [ "魔界" ] }
        , note: [ "範囲", "上限(+2%/3秒)", "永続スキル" ]
    }
    , {
        name: "トットン", rarity: "白", cl: "吟遊詩人", AW: "未"
        , stats: { atk: "+15%", def: "+15%" }
        , target: { home: [ "白の帝国" ] }
        , note: [ "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "トットン", rarity: "白", cl: "吟遊詩人", AW: "覚1"
        , stats: { atk: "+25%", def: "+25%" }
        , target: { home: [ "白の帝国" ] }
        , note: [ "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "トットン", rarity: "白", cl: "吟遊詩人", AW: "覚2b"
        , stats: { atk: "+35%", def: "+35%" }
        , target: { home: [ "白の帝国" ] }
        , note: [ "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "トットン", rarity: "白", cl: "吟遊詩人", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*1.2", def: "*1.2", other: "" }
        , target: { home: [ "白の帝国" ] }
        , note: [ "範囲", "上限(+2%/3秒)" ]
    }
    , {
        name: "プルーシア", rarity: "白", cl: "吟遊詩人", AW: "未"
        , stats: { hp: "+15%", atk: "+15%" }
        , target: { home: [ "王国" ] }
        , note: [ "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "プルーシア", rarity: "白", cl: "吟遊詩人", AW: "覚1"
        , stats: { hp: "+25%", atk: "+25%" }
        , target: { home: [ "王国" ] }
        , note: [ "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "プルーシア", rarity: "白", cl: "吟遊詩人", AW: "覚2b"
        , stats: { hp: "+35%", atk: "+35%" }
        , target: { home: [ "王国" ] }
        , note: [ "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "プルーシア", rarity: "白", cl: "吟遊詩人", AW: "覚醒", skill: "覚醒"
        , stats: { hp: "*1.2", atk: "*1.2", other: "" }
        , target: { home: [ "王国" ] }
        , note: [ "範囲", "上限(+2%/3秒)", "永続スキル" ]
    }
    , {
        name: "ヤサカ", rarity: "白", cl: "吟遊詩人", AW: "未"
        , stats: { atk: "+15%", def: "+15%" }
        , target: { home: [ "東の国" ] }
        , note: [ "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "ヤサカ", rarity: "白", cl: "吟遊詩人", AW: "覚醒"
        , stats: { atk: "+25%", def: "+25%" }
        , target: { home: [ "東の国" ] }
        , note: [ "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "ヤサカ", rarity: "白", cl: "吟遊詩人", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , target: { home: [ "東の国" ] }
        , note: [ "範囲", "+2%/2秒", "永続スキル" ]
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
    
    note
    
    正月 水着 浴衣 バニー 花嫁

*/