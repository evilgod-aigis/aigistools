// その他
buff.unique = [
    // ダモクレスの剣
    {
        name: "ちびロゼット", rarity: "ちび", cl: "プリンセス", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { rarity: [ "銀" ] }
        , type: "damocles"
        , note: [ "区分：ダモクレスの剣", "終了時HP-50%" ]
    }
    , {
        name: "ロゼット", rarity: "銀", cl: "プリンセス", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { rarity: [ "銀" ] }
        , type: "damocles"
       , note: [ "区分：ダモクレスの剣", "終了時HP-50%" ]
    }
    
    // レライエ死亡時
    , {
        name: "レライエ", rarity: "白", cl: "デモンシャーマン", AW: "覚醒後"
        , stats: { atk: "×1.3" }
        , target: { race: [ "デーモン系" ] }
        , type: "Leraye"
        , note: [ "区分：レライエ死亡時", "死亡時", "継続:20秒" ]
    }
    , {
        name: "レライエ/ハロウィン", rarity: "白", cl: "デモンシャーマン", AW: "覚醒後"
        , stats: { atk: "×1.25", def: "×1.25" }
        , target: { season: [ "ハロウィン" ] }
        , type: "Leraye"
        , note: [ "区分：レライエ死亡時", "死亡時", "継続:30秒", "分類未確認" ]
    }
    
    // 特効
    , {
        name: "ヘンドリカ", rarity: "白", cl: "発明家", AW: "覚醒後"
        , stats: { atk: "×1.15", other: "" }
        , target: { home: [ "白の帝国" ] }
        , type: "special"
        , note: [ "区分：特効", "編成", "竜族" ]
    }
    , {
        name: "カラザ", rarity: "白", cl: "ドラゴンメイジ", AW: "覚醒後"
        , stats: { atk: "×1.1", other: "" }
        , target: { others: [ "竜族" ] }
        , type: "special"
        , note: [ "区分：特効", "編成", "地上" ]
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
    
    others 英傑 ちび 弓兵 魔術師 アンデッド 機械 騎兵 重装 聖職者 魔界 ドラゴン ＜七つの大罪＞
    
    竜族 全プリンセス系 GG持ち HP回復不可 魔界適応 深海適応 天界適応
    
    year 年
    
    type
    
    spot_mul damocles Leraye demon-rune Lukifer SF nekomata
    
    special atk-up_mag dmg-red dmg-red_mag
    
    note
    
    範囲 死亡時 物理 魔法 属性不問 区分：
    
    正月 水着 浴衣 バニー 花嫁
    
    お正月 温泉 バレンタイン 学園 エッグハント
    
    ジューンブライド サマー ハロウィン クリスマス

*/