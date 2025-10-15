// 反撃
debuff.counter = [
    {
        name: "カオスルーラー", cl: "カオスルーラー", AW: "未"
        , stats: { atk: "-10%", def: "-10%", mr: "-10%" }
        , atkAttr: "貫通", dur: "150f"
    }
    , {
        name: "カオスブリンガー", cl: "カオスルーラー", AW: "覚1"
        , stats: { atk: "-20%", def: "-20%", mr: "-20%" }
        , atkAttr: "貫通", dur: "150f"
        , note: "カオスルーラー系"
    }
    , {
        name: "災禍を解く者", cl: "カオスルーラー", AW: "覚2a"
        , stats: { atk: "-20%", def: "-20%", mr: "-20%" }
        , atkAttr: "貫通", dur: "150f"
        , note: "カオスルーラー系"
    }
    , {
        name: "世界を閉じる者", cl: "カオスルーラー", AW: "覚2b"
        , stats: { atk: "-25%", def: "-25%", mr: "-25%" }
        , atkAttr: "貫通", dur: "150f"
        , note: "カオスルーラー系"
    }
    , {
        name: "イコル", rarity: "黒", cl: "カオスルーラー", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*1.4", def: "*1.4", mr: "*1.4" }
        , atkAttr: "貫通", dur: "150f"
    }
    , {
        name: "イコル/水着", rarity: "黒", cl: "カオスルーラー", AW: "未", skill: "通常"
        , stats: { atk: "*1.3", def: "*1.3", mr: "*1.3" }
        , atkAttr: "貫通", dur: "150f"
    }
    , {
        name: "イコル/水着", rarity: "黒", cl: "カオスルーラー", AW: "覚醒", skill: "通常"
        , stats: { atk: "*1.5", def: "*1.5", mr: "*1.5" }
        , atkAttr: "貫通", dur: "150f"
    }
    , {
        name: "イコル/水着", rarity: "黒", cl: "カオスルーラー", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*1.5", def: "*1.5", mr: "*1.5" }
        , atkAttr: "貫通", dur: "150f"
        , note: "永続スキル"
    }
    , {
        name: "スウィーティア", rarity: "黒", cl: "サキュバス", AW: "未"
        , stats: { def: "-20%", mr: "-20%" }
        , atkAttr: "貫通", dur: "150f"
        , note: "分類未確認"
    }
    , {
        name: "スウィーティア", rarity: "黒", cl: "サキュバス", AW: "覚醒"
        , stats: { def: "-30%", mr: "-30%" }
        , atkAttr: "貫通", dur: "150f"
        , note: "分類未確認"
    }
    , {
        name: "スウィーティア", rarity: "黒", cl: "サキュバス", AW: "覚醒", skill: "覚醒"
        , stats: { def: "*1.5", mr: "*1.5" }
        , atkAttr: "貫通", dur: "150f"
        , note: "分類未確認"
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒", skill: ""
        , stats: { : "" }
        , atkAttr: "", dur: ""
        , target: { : [ "" ] }
        , target: [
            { : [ "" ] }
            , { : [ "" ] }
        ]
    }
    
    黒 白 青 金 ちび 銀 銅 鉄 トークン
    
    未 覚醒 覚1 覚2a 覚2b
    
    常時 非 通常 覚醒 奇 偶
    
    hp atk def mr atkCd other
    
    stop: "○"
    
    物理 魔法 貫通
    
    target
    
    attr 人間 ゴブリン オーク ドラゴン 妖怪
    
    巨人 ゴーレム アンデッド デーモン 魔神
    
    天使 天界人 神 神獣 魔獣 妖獣 獣 獣人
    
    植物 インセクト 魚人 水棲 機械 アーマー 英傑
    
    atkAttr 物理 魔法 貫通
    
    cond 地上 飛行
    
    note 死亡時 発動時 分類未確認
    
    正月 温泉 バレンタイン 学園 バニー
    
    花嫁 水着 浴衣 ハロウィン クリスマス

*/