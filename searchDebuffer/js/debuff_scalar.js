// スカラー
debuff.scalar = [
    {
        name: "アナベラ", rarity: "白", cl: "スカラー", AW: "覚醒前"
        , stats: {
            atk: [ "-5%", "→-15%" ]
            , def: [ "-5%", "→-15%" ]
            , mr: [ "-5%", "→-15%" ]
        }
    }
    , {
        name: "アナベラ", rarity: "白", cl: "スカラー", AW: "覚醒後"
        , stats: {
            atk: [ "-5%", "→-20%" ]
            , def: [ "-5%", "→-20%" ]
            , mr: [ "-5%", "→-20%" ]
        }
    }
    , {
        name: "アナベラ", rarity: "白", cl: "スカラー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "*1.2", def: "*1.2", mr: "*1.2" }
        , target: { attr: [ "ゴーレム" ] }
    }
    , {
        name: "アナベラ", rarity: "白", cl: "スカラー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "*1.2", def: "*1.2", mr: "*1.2" }
        , target: { attr: [ "ゴーレム" ] }
    }
    , {
        name: "アナベラ", rarity: "白", cl: "スカラー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "*1.2", def: "*1.2", mr: "*1.2" }
        , target: { attr: [ "ゴーレム" ] }
    }
    , {
        name: "フェリシア", rarity: "白", cl: "スカラー", AW: "覚醒前"
        , stats: {
            atk: [ "-5%", "→-15%" ]
            , def: [ "-5%", "→-15%" ]
            , mr: [ "-5%", "→-15%" ]
        }
    }
    , {
        name: "フェリシア", rarity: "白", cl: "スカラー", AW: "覚醒後"
        , stats: {
            atk: [ "-5%", "→-20%" ]
            , def: [ "-5%", "→-20%" ]
            , mr: [ "-5%", "→-20%" ]
        }
    }
    , {
        name: "フェリシア", rarity: "白", cl: "スカラー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "*1.5", def: "*1.5", mr: "*1.5" }
        , target: { attr: [ "神獣", "魔獣", "妖獣", "獣", "獣人" ] }
    }
    , {
        name: "フェリシア", rarity: "白", cl: "スカラー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "*1.5", def: "*1.5", mr: "*1.5" }
        , target: { attr: [ "神獣", "魔獣", "妖獣", "獣", "獣人" ] }
    }
    , {
        name: "フェリシア", rarity: "白", cl: "スカラー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "*1.2", def: "*1.2", mr: "*1.2" }
        , target: { attr: [ "神獣", "魔獣", "妖獣", "獣", "獣人" ] }
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒後", skill: ""
        , stats: { : "" }
        , target: { attr: [ "" ] }
        , target: [
            { : [ "" ] }
            , { : [ "" ] }
        ]
    }
    
    黒 白 青 金 ちび 銀 銅 鉄 トークン
    
    覚醒前 覚醒後 覚1 覚2a 覚2b
    
    常時 非 通常 覚醒
    
    hp atk def mr atkCd stop other
    
    target
    
    attr 人間 ゴブリン オーク ドラゴン 妖怪
    
    巨人 ゴーレム アンデッド デーモン 魔神
    
    天使 天界人 神 神獣 魔獣 妖獣 獣 獣人
    
    植物 インセクト 魚人 水棲 機械 アーマー 英傑
    
    atkAttr 物理 魔法 貫通
    
    cond 地上 飛行
    
    note 発動時 分類未確認 物理 魔法
    
    正月 温泉 バレンタイン 学園 バニー
    
    花嫁 水着 浴衣 ハロウィン クリスマス

*/