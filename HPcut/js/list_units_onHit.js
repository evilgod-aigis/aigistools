if(!("units" in lists)) lists.units = {};

lists.units.onHit = {};

// テンプレ
lists.units.onHit.template = {
    id: null, hidden: false
    , unitInfo: {
        unitName: "", deployType: "", rarity: ""
        , unitClass: { selected: ""/*, options: [ "" ]*/ }
        , attribution: [ "", "", "", "", "" ]
        , affection: { percentage: null, bonus: "", changeRate: null }
        , note: [ "" ]
        , atkInterval: {
            corr: {}
            , uncorr: {}
        }
    }
    , skill: {
        selected: null
        , detail: {}
    }
};

lists.units.onHit.num = {
    // 非イビルプリンセス系のユニット数
    notEP: 0
    // 非イビルプリンセス系のユニット数
    , EP: 0
    // 追加されたユニット数
    , added: 0
};

// ユニットリスト
lists.units.onHit.list = [
    {
        id: null, hidden: false
        , unitInfo: {
            unitName: "犬神シロ", deployType: "近接型", rarity: "黒"
            , unitClass: { selected: "お犬さま" , options: [ "犬神系", "お犬さま" ] }
            , attribution: [ "東の国", "妖怪" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性" ]
            , atkInterval: {
                corr: {
                    notSkill: { startup: null, remain: null, cooldown: null }
                    , "通常": { startup: null, remain: null, cooldown: null }
                    , "覚醒": { startup: null, remain: null, cooldown: null }
                }
                , uncorr: {
                    notSkill: { startup: null, remain: null, cooldown: null }
                    , "通常": { startup: 21, remain: 18, cooldown: 56 }
                    , "覚醒": { startup: 21, remain: 18, cooldown: 56 }
                }
            }
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "射程内", simult: Infinity
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 35, dur: 15, HPred: 4 }
                        , next: 0
                    }
                ]
                , "覚醒": [
                    {
                        target: "射程内", simult: Infinity
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 50, dur: 70, HPred: 2 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "犬神ツムジ", deployType: "近接型", rarity: "白"
            , unitClass: { selected: "お犬さま" , options: [ "犬神系", "お犬さま" ] }
            , attribution: [ "東の国", "妖怪" ]
            , affection: { percentage: 150, bonus: "攻撃硬直", changeRate: null }
            , note: [ "女性" ]
            , atkInterval: {
                corr: {
                    notSkill: { startup: null, remain: null, cooldown: null }
                    , "通常": { startup: null, remain: null, cooldown: null }
                    , "覚醒": { startup: null, remain: null, cooldown: null }
                }
                , uncorr: {
                    notSkill: { startup: null, remain: null, cooldown: null }
                    , "通常": { startup: 21, remain: 18, cooldown: 56 }
                    , "覚醒": { startup: 21, remain: 18, cooldown: 56 }
                }
            }
        }
        , skill: {
            selected: "覚醒"
            , detail: {
                "通常": [
                    {
                        target: "3体", simult: 3
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 40, dur: 40, HPred: 1 }
                        , next: 0
                    }
                ]
                , "覚醒": [
                    {
                        target: "1体", simult: 1
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 60, dur: 60, HPred: 1 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "ちびツムジ", deployType: "近接型", rarity: "金"
            , unitClass: { selected: "犬神系" }
            , attribution: [ "東の国", "妖怪", "ちび" ]
            , affection: { percentage: 150, bonus: "攻撃硬直", changeRate: null }
            , note: [ "女性" ]
            , atkInterval: {
                corr: {
                    notSkill: { startup: null, remain: null, cooldown: null }
                    , "通常": { startup: null, remain: null, cooldown: null }
                    , "覚醒": { startup: null, remain: null, cooldown: null }
                }
                , uncorr: {
                    notSkill: { startup: null, remain: null, cooldown: null }
                    , "通常": { startup: 21, remain: 18, cooldown: 56 }
                    , "覚醒": { startup: null, remain: null, cooldown: null }
                }
            }
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "3体", simult: 3
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 40, dur: 40, HPred: 1 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "迎春の呪姫オロチヒメ", deployType: "遠距離型", rarity: "黒"
            , unitClass: { selected: "呪術使い系" }
            , attribution: [ "東の国", "人間", "魔術師", "お正月" ]
            , affection: { percentage: 150, bonus: "再動短縮", changeRate: null }
            , note: [ "女性", "状態異常無効" ]
            , atkInterval: {
                corr: {
                    notSkill: { startup: null, remain: null, cooldown: null }
                    , "覚醒": { startup: null, remain: null, cooldown: null }
                }
                , uncorr: {
                    notSkill: { startup: 41, remain: 30, cooldown: 101 }
                    , "覚醒": { startup: 41, remain: 30, cooldown: 31 }
                }
            }
        }
        , skill: {
            selected: "覚醒"
            , detail: {
                "覚醒": [
                    {
                        target: "6-7体", simult: 7
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 55, dur: 40, HPred: 2 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "道化師ワンダーハート", deployType: "遠距離型", rarity: "白"
            , unitClass: { selected: "道化師系" }
            , attribution: [ "人間" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性" ]
            , atkInterval: {
                corr: {
                    notSkill: { startup: null, remain: null, cooldown: null }
                    , "覚醒": { startup: null, remain: null, cooldown: null }
                }
                , uncorr: {
                    notSkill: { startup: 9, remain: 12, cooldown: 31 }
                    , "覚醒": { startup: 13, remain: 9, cooldown: 2 }
                }
            }
        }
        , skill: {
            selected: "覚醒"
            , detail: {
                "覚醒": [
                    {
                        target: "射程内", simult: Infinity
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 40, dur: 20, HPred: 1 }
                        , next: 0
                    }
                ]
            }
        }
    }
];