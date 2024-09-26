// 属性スキル
buff.skill_cat = [
    {
        name: "ヘレナ", rarity: "白", cl: "前衛戦術家", AW: "未", skill: "通常(奇)"
        , stats: { def: "×1.2" }
    }
    , {
        name: "ヘレナ", rarity: "白", cl: "前衛戦術家", AW: "未", skill: "通常(偶)"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "ヘレナ", rarity: "白", cl: "前衛戦術家", AW: "覚醒", skill: "通常(奇)"
        , stats: { def: "×1.2" }
    }
    , {
        name: "ヘレナ", rarity: "白", cl: "前衛戦術家", AW: "覚醒", skill: "通常(偶)"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "ヘイズル", rarity: "黒", cl: "インペリアルナイト", AW: "覚醒", skill: "覚醒(3～)"
        , stats: { atk: "×1.3", def: "×1.3" }
    }
    , {
        name: "オーガスタ/バレンタイン", rarity: "黒", cl: "料理人", AW: "未", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
    }
    , {
        name: "オーガスタ/バレンタイン", rarity: "黒", cl: "料理人", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
    }
    , {
        name: "女王子/アイドル", rarity: "黒", cl: "王国民的アイドル", AW: "覚醒", skill: "通常"
        , stats: { hp: "+30%", def: "×1.3" }
        , note: "範囲"
    }
    , {
        name: "リノ/バレンタイン", rarity: "白", cl: "サモナー", AW: "未", skill: "通常"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "リノ/バレンタイン", rarity: "白", cl: "サモナー", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "リノ/バレンタイン", rarity: "白", cl: "サモナー", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , note: "範囲"
    }
    , {
        name: "コレット", rarity: "白", cl: "スカラー", AW: "未", skill: "通常"
        , stats: { atk: "×1.15" }
    }
    , {
        name: "コレット", rarity: "白", cl: "スカラー", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.15" }
    }
    , {
        name: "英傑の塔", rarity: "黒", cl: "英傑の塔", AW: "未", skill: "通常"
        , stats: { atk: "×1.5", range: "×1.2" }
        , target: { not: [ "others" ], others: [ "英傑" ] }
    }
    , {
        name: "英傑の塔", rarity: "黒", cl: "英傑の塔", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.5", range: "×1.2" }
        , target: { not: [ "others" ], others: [ "英傑" ] }
    }
    , {
        name: "ダルフィア", rarity: "白", cl: "騎士【封緘】", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.1" }
    }
    , {
        name: "ダルフィア", rarity: "白", cl: "騎士【封緘】", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.1" }
        , note: "永続"
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒", skill: ""
        , stats: { : "" }
    }
    
    黒 白 青 金 ちび
    
    未 覚醒 覚1 覚2a 覚2b
    
    常時 非 通常 覚醒
    
    hp atk def mr range cost wt ct dur atkCd
    
    rege: [ "/秒", "/f" ]
    
    poison abn eva nul redep other
    
    draw
    ○
    (○)
    
    target note 範囲 発動時 分類未確認
    
    正月 水着 浴衣 バニー 花嫁
    
    お正月 温泉 バレンタイン 学園 エッグハント
    
    ジューンブライド サマー ハロウィン クリスマス

*/