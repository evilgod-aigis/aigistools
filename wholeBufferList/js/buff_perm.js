// 永続
buff.perm = {};
buff.perm.picked = [];
buff.perm.sortedBy = "id";
buff.perm.list = [
    {
        name: "ホルテウス", rarity: "黒", cl: "ファラオ", AW: "覚醒後", skill: "通常"
        , stats: { hp: "×1.15", atk: "×1.15", def: "×1.15" }
        , note: "初回発動時"
    }
    , {
        name: "ホルテウス", rarity: "黒", cl: "ファラオ", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "×1.15", atk: "×1.15", def: "×1.15" }
        , note: "初回発動時"
    }
    , {
        name: "ホルテウス", rarity: "白", cl: "ファラオ", AW: "覚醒後", skill: "通常"
        , stats: { hp: "×1.1", atk: "×1.1", def: "×1.1" }
        , note: "初回発動時"
    }
    , {
        name: "ホルテウス", rarity: "白", cl: "ファラオ", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "×1.1", atk: "×1.1", def: "×1.1" }
        , note: "初回発動時"
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒後", skill: ""
        , stats: { : "" }
    }
    
    黒 白 青 金 ちび
    
    覚醒前 覚醒後 覚1 覚2a 覚2b
    
    常時 非 通常 覚醒
    
    hp atk def mr range cost wt ct dur atkCd
    
    rege poison abn eva nul draw redep other
    
    target note

*/