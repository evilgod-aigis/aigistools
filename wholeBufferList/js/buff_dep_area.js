// 範囲配置
buff.dep_area = {};
buff.dep_area.picked = [];
buff.dep_area.sortedBy = "id";
buff.dep_area.list = [
    {
        name: "セイント", cl: "ヒーラー", AW: "覚1"
        , stats: { abn: [ "-50%", "(時間)" ] }
        , note: "ヒーラー系"
    }
    , {
        name: "ハイエロファント", cl: "ヒーラー", AW: "覚2a"
        , stats: { abn: [ "-50%", "(時間)" ] }
        , note: "ヒーラー系"
    }
    , {
        name: "オラクル", cl: "ヒーラー", AW: "覚2b"
        , stats: { abn: [ "-50%", "(時間)" ] }
        , note: "ヒーラー系"
    }
    , {
        name: "コンカラー", cl: "ロード", AW: "覚2b"
        , stats: { atk: "+15%" }
        , note: "ロード系"
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒後", skill: ""
        , stats: { : "" }
    }
    
    黒 白 青 金 ちび 銀 トークン
    
    CC前 CC後 CC55 覚醒前 覚醒後 覚1 覚2a 覚2b
    
    常時 非 通常 覚醒
    
    hp atk def mr range cost wt ct dur atkCd
    
    rege: [ "/秒", "/f" ]
    
    poison abn eva nul draw redep other
    
    target note

*/