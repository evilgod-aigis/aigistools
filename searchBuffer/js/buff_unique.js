// その他
buff.unique = [
    // ダモクレスの剣
    {
        name: "ちびロゼット", rarity: "ちび", cl: "プリンセス", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { rarity: [ "銀" ] }
        , type: "damocles"
        , note: [ "区分：ダモクレスの剣", "終了時、対象のHP-50%" ]
    }
    , {
        name: "ロゼット", rarity: "銀", cl: "プリンセス", AW: "未", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { rarity: [ "銀" ] }
        , type: "damocles"
       , note: [ "区分：ダモクレスの剣", "終了時、対象のHP-50%" ]
    }
    
    // 時間経過
    , {
        name: "ホルミース", rarity: "黒", cl: "吟遊詩人", AW: "未"
        , stats: { hp: "+10%", atk: "+10%", def: "+10%" }
        , target: { race: [ "人間", "神", "半神" ] }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "ホルミース", rarity: "黒", cl: "吟遊詩人", AW: "覚1"
        , stats: { hp: "+20%", atk: "+20%", def: "+20%" }
        , target: { race: [ "人間", "神", "半神" ] }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "ホルミース", rarity: "黒", cl: "吟遊詩人", AW: "覚2a"
        , stats: { hp: "+20%", atk: "+20%", def: "+20%" }
        , target: { race: [ "人間", "神", "半神" ] }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "ホルミース", rarity: "黒", cl: "吟遊詩人", AW: "覚2b"
        , stats: { hp: "+30%", atk: "+30%", def: "+30%" }
        , target: { race: [ "人間", "神", "半神" ] }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "最大値(+?%/?秒)" ]
    }
    , {
        name: "ホルミース", rarity: "黒", cl: "吟遊詩人", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*1.2", def: "*1.2" }
        , target: { race: [ "人間", "神", "半神" ] }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "最大値(+2%/3秒)" ]
    }
    , {
        name: "アミー", rarity: "白", cl: "吟遊詩人", AW: "未"
        , stats: { atk: "+15%", def: "+15%" }
        , target: { others: [ "魔界" ] }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "アミー", rarity: "白", cl: "吟遊詩人", AW: "覚醒"
        , stats: { atk: "+25%", def: "+25%" }
        , target: { others: [ "魔界" ] }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "アミー", rarity: "白", cl: "吟遊詩人", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*1.2", def: "*1.2" }
        , target: { others: [ "魔界" ] }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "最大値(+2%/3秒)", "永続スキル" ]
    }
    , {
        name: "トットン", rarity: "白", cl: "吟遊詩人", AW: "未"
        , stats: { atk: "+15%", def: "+15%" }
        , target: { home: [ "白の帝国" ] }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "トットン", rarity: "白", cl: "吟遊詩人", AW: "覚1"
        , stats: { atk: "+25%", def: "+25%" }
        , target: { home: [ "白の帝国" ] }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "トットン", rarity: "白", cl: "吟遊詩人", AW: "覚2b"
        , stats: { atk: "+35%", def: "+35%" }
        , target: { home: [ "白の帝国" ] }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "最大値(+2%/4秒)" ]
    }
    , {
        name: "トットン", rarity: "白", cl: "吟遊詩人", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*1.2", def: "*1.2" }
        , target: { home: [ "白の帝国" ] }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "最大値(+2%/3秒)" ]
    }
    
    // 死亡時
    , {
        name: "レライエ", rarity: "白", cl: "デモンシャーマン", AW: "覚醒"
        , stats: { atk: "+30%" }
        , target: { race: [ "デーモン系" ] }
        , type: "death"
        , note: [ "区分：死亡時", "死亡時", "継続:20秒" ]
    }
    , {
        name: "レライエ/ハロウィン", rarity: "白", cl: "デモンシャーマン", AW: "覚醒"
        , stats: { atk: "+25%", def: "+25%" }
        , target: { season: [ "ハロウィン" ] }
        , type: "death"
        , note: [ "区分：死亡時", "死亡時", "継続:30秒" ]
    }
    
    // 特効
    , {
        name: "ボルカ", rarity: "黒", cl: "発明家", AW: "未"
        , stats: { atk: "×1.2", other: "" }
        , target: { others: [ "機械" ] }
        , type: "special"
        , note: [ "区分：特効(編成)", "地上" ]
    }
    , {
        name: "ボルカ", rarity: "黒", cl: "発明家", AW: "覚醒"
        , stats: { atk: "×1.3", other: "" }
        , target: { others: [ "機械" ] }
        , type: "special"
        , note: [ "区分：特効(編成)", "地上" ]
    }
    , {
        name: "ヘンドリカ", rarity: "白", cl: "発明家", AW: "覚醒"
        , stats: { atk: "×1.15", other: "" }
        , target: { home: [ "白の帝国" ] }
        , type: "special"
        , note: [ "区分：特効(編成)", "竜族" ]
    }
    , {
        name: "カラザ", rarity: "白", cl: "ドラゴンメイジ", AW: "覚醒"
        , stats: { atk: "×1.1", other: "" }
        , target: { others: [ "ドラゴン" ] }
        , type: "special"
        , note: [ "区分：特効(編成)", "地上" ]
    }
    
    // 被ダメージ軽減
    , {
        name: "アラン/お正月", rarity: "黒", cl: "儀仗軍神", AW: "未", skill: "通常"
        , stats: { other: "" }
        , target: [
            { race: [ "神", "半神" ] }
            , { season: [ "お正月" ] }
        ]
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-40%(範囲)" ]
    }
    , {
        name: "アラン/お正月", rarity: "黒", cl: "儀仗軍神", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , target: [
            { race: [ "神", "半神" ] }
            , { season: [ "お正月" ] }
        ]
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-40%(範囲)" ]
    }
    , {
        name: "アンナ/夏服", rarity: "黒", cl: "政務官", AW: "未", skill: "通常"
        , stats: { other: "" }
        , target: { cl: [ "王子" ] }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "物理-70%(範囲)", "分類未確認" ]
    }
    , {
        name: "アンナ/夏服", rarity: "黒", cl: "政務官", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , target: { cl: [ "王子" ] }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "物理-70%(範囲)", "分類未確認" ]
    }
    , {
        name: "アンナ/夏服", rarity: "黒", cl: "政務官", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , target: [
            { cl: [ "王子" ] }
            , { season: [ "サマー" ] }
        ]
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-20%(範囲)", "分類未確認" ]
    }
    , {
        name: "遠見の眷属猫", rarity: "トークン", AW: "未", skill: "通常"
        , stats: { other: "" }
        , target: [
            { home: [ "砂漠の国" ] }
            , { race: [ "獣人" ] }
        ]
        , type: "dmg-red"
        , note: [ "バスティス", "区分：被ダメージ軽減", "属性不問-15%(範囲)" ]
    }
    , {
        name: "遠見の眷属猫・改", rarity: "トークン", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , target: [
            { home: [ "砂漠の国" ] }
            , { race: [ "獣人" ] }
        ]
        , type: "dmg-red"
        , note: [ "バスティス", "区分：被ダメージ軽減", "属性不問-25%(範囲)" ]
    }
    , {
        name: "世界樹のカカオ苗", rarity: "トークン", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ] }
        ]
        , type: "dmg-red"
        , note: [ "ラタトスク/バレンタイン", "区分：被ダメージ軽減", "属性不問?-25%(範囲)", "スキル終了→HP0", "分類未確認" ]
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
    
    type
    
    spot_mul damocles death Lukifer nekomata
    
    special atk-up_mag dmg-red
    
    note
    
    範囲 死亡時 物理 魔法 属性不問 区分：
    
    正月 水着 浴衣 バニー 花嫁
    
    お正月 温泉 バレンタイン 学園 エッグハント
    
    ジューンブライド サマー ハロウィン クリスマス

*/