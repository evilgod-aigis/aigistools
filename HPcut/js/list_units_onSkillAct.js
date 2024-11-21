if(!("units" in lists)) lists.units = {};

lists.units.onSkillAct = {};

// テンプレ
lists.units.onSkillAct.template = {
    id: null, hidden: false
    , unitInfo: {
        unitName: "", deployType: "", rarity: ""
        , unitClass: { selected: ""/*, options: [ "" ]*/ }
        , attribution: [ "", "", "", "", "" ]
        , affection: { percentage: null, bonus: "", changeRate: null }
        , note: [ "" ]
    }
    , skill: {
        selected: null
        , detail: {}
    }
};

lists.units.onSkillAct.num = {
    // 非イビルプリンセス系のユニット数
    notEP: 0
    // 非イビルプリンセス系のユニット数
    , EP: 0
    // 追加されたユニット数
    , added: 0
};

// ユニットリスト
lists.units.onSkillAct.list = [
    {
        id: null, hidden: false
        , unitInfo: {
            unitName: "ソハヤノツルギ", deployType: "近接型", rarity: "-"
            , unitClass: { selected: "" }
            , attribution: []
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: []
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { WT: 1, CT: 60, dur: 5, HPred: 8 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "マリオネットII", deployType: "近接型", rarity: "-"
            , unitClass: { selected: "" }
            , attribution: []
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "トークン(ララネ)" ]
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "射程内", simult: Infinity
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { WT: 1, CT: Infinity, dur: 2, HPred: 10 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "頂に座す者アルコゥ", deployType: "近接型", rarity: "黒"
            , unitClass: { selected: "祖竜" }
            , attribution: [ "竜人", "魔界", "ドラゴン", "英傑" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性", "魔界適応" ]
        }
        , skill: {
            selected: "覚醒"
            , detail: {
                "通常": [
                    {
                        target: "全員"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 40, dur: 30, HPred: 10 }
                        , next: 0
                    }
                ]
                , "覚醒": [
                    {
                        target: "全員"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 85, dur: 40, HPred: 20 }
                        , next: 1
                    }
                    , {
                        target: "全員"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 70, dur: 40, HPred: 20 }
                        , next: 2
                    }
                    , {
                        target: "全員"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 50, dur: 40, HPred: 20 }
                        , next: 2
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "九尾狐カヨウ", deployType: "近接型", rarity: "黒"
            , unitClass: { selected: "妖狐絢爛", options: [ "妖狐系", "妖狐絢爛" ] }
            , attribution: [ "東の国", "妖怪" ]
            , affection: { percentage: 150, bonus: "再動短縮", changeRate: null }
            , note: [ "女性" ]
        }
        , skill: {
            selected: "覚醒"
            , detail: {
                "覚醒": [
                    {
                        target: "全員"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 10, dur: 3, HPred: 20 }
                        , next: 1
                    }
                    , {
                        corr: { WT: null, CT: null, dur: null }
                        , uncorr: { CT: 30, dur: 30 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "恋の親衛隊シャディア", deployType: "近接型", rarity: "黒"
            , unitClass: { selected: "魔王親衛隊系", options: [ "魔王親衛隊系", "アビスレイダー" ] }
            , attribution: [ "人間", "魔界", "バレンタイン" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性", "魔界適応" ]
        }
        , skill: {
            selected: "覚醒"
            , detail: {
                "覚醒": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 50, dur: 40, HPred: 15 }
                        , HPremMul: [ [ 0.31, 1.5 ], [ 0.51, 1.35 ], [ 0.71, 1.2 ], [ 0.91, 1.05 ] ]
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "元始天尊", deployType: "近接型", rarity: "黒"
            , unitClass: { selected: "天尊系" }
            , attribution: [ "神", "飛行" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性", "状態異常無効" ]
        }
        , skill: {
            selected: "覚醒"
            , detail: {
                "覚醒": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 50, dur: 2, HPred: 10 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "黒紫の巫女キキョウ", deployType: "遠距離型", rarity: "黒"
            , unitClass: { selected: "シャーマン系" }
            , attribution: [ "東の国", "人間" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性" ]
        }
        , skill: {
            selected: "覚醒"
            , detail: {
                "覚醒": [
                    {
                        corr: { WT: null, CT: null, dur: null }
                        , uncorr: { CT: 15, dur: 10 }
                        , next: 1
                    }
                    , {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 15, dur: 20, HPred: 5 }
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
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 50, dur: 30, HPred: 15 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "混沌霊使いニーヴ", deployType: "遠距離型", rarity: "黒"
            , unitClass: { selected: "エレメンタラー系" }
            , attribution: [ "人間" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性" ]
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "射程内", simult: Infinity
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 10, dur: 2, HPred: 10 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "猫又コハル", deployType: "遠距離型", rarity: "黒"
            , unitClass: { selected: "猫又系" }
            , attribution: [ "東の国", "妖怪" ]
            , affection: { percentage: 100, bonus: "時間延長", changeRate: null }
            , note: [ "女性" ]
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 70, dur: 30, HPred: 16 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "悪戯な黒猫コハル", deployType: "遠距離型", rarity: "黒"
            , unitClass: { selected: "猫又系" }
            , attribution: [ "東の国", "妖怪", "ハロウィン" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性" ]
        }
        , skill: {
            selected: "覚醒"
            , detail: {
                "覚醒": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 40, dur: 30, HPred: 16 }
                        , next: 1
                    }
                    , {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 40, dur: 30, HPred: 20 }
                        , next: 2
                    }
                    , {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 40, dur: 30, HPred: 24 }
                        , next: 3
                    }
                    , {
                        corr: { WT: null, CT: null, dur: null }
                        , uncorr: { CT: Infinity, dur: Infinity }
                        , next: 3
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "闇の墓守リッチ", deployType: "遠距離型", rarity: "黒"
            , unitClass: { selected: "リッチ【闇の軍勢】系" }
            , attribution: [ "アンデッド", "魔術師" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性", "状態異常無効", "HP回復不可" ]
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "全員"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 45, dur: 40, HPred: 10 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "清心の花嫁スイレン", deployType: "近接型", rarity: "白"
            , unitClass: { selected: "ドラゴンライダー系" }
            , attribution: [ "華の国", "人間", "騎兵", "ドラゴン", "高貴", "ジューンブライド" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性" ]
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "射程内", simult: Infinity
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 55, dur: 1, HPred: 20 }
                        , next: 0
                    }
                ]
                , "覚醒": [
                    {
                        corr: { WT: null, CT: null, dur: null }
                        , uncorr: { CT: 50, dur: 1 }
                        , next: 1
                    }
                    , {
                        target: "射程内", simult: Infinity
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 55, dur: 1, HPred: 20 }
                        , next: 1
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "召喚士アクアマリー", deployType: "遠距離型", rarity: "白"
            , unitClass: { selected: "サモナー系" }
            , attribution: [ "人間", "魔術師" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性" ]
        }
        , skill: {
            selected: "覚醒"
            , detail: {
                "通常": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 25, dur: 40, HPred: 15 }
                        , next: 0
                    }
                ]
                , "覚醒": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 30, dur: 25, HPred: 10 }
                        , next: 1
                    }
                    , {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 30, dur: 25, HPred: 15 }
                        , next: 2
                    }
                    , {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 30, dur: 25, HPred: 20 }
                        , next: 3
                    }
                    , {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 30, dur: 25, HPred: 25 }
                        , next: 4
                    }
                    , {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 30, dur: 25, HPred: 30 }
                        , next: 4
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "帝国悪魔召喚士ザミエル", deployType: "遠距離型", rarity: "白"
            , unitClass: { selected: "デモンサモナー系" }
            , attribution: [ "白の帝国", "デーモン", "魔術師", "魔界" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性", "魔界適応" ]
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 40, dur: 15, HPred: 10 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "魔神の共鳴者レライエ", deployType: "遠距離型", rarity: "白"
            , unitClass: { selected: "デモンシャーマン系" }
            , attribution: [ "人間", "魔界" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性", "HP回復不可", "魔界適応" ]
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 30, dur: 30, HPred: 8 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "ちびコハル", deployType: "遠距離型", rarity: "金"
            , unitClass: { selected: "猫又系" }
            , attribution: [ "東の国", "妖怪", "ちび" ]
            , affection: { percentage: 100, bonus: "時間延長", changeRate: null }
            , note: [ "女性" ]
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 70, dur: 30, HPred: 16 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "孫権 仲謀", deployType: "近接型", rarity: "白"
            , unitClass: { selected: "君主【恋姫】系" }
            , attribution: [ "恋姫", "人間" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性" ]
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "全員"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 40, dur: 20, HPred: 10 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "祝祭の南瓜姫ミサ", deployType: "近接型", rarity: "黒"
            , unitClass: { selected: "イビルクイーン", options: [ "イビルクイーン", "イビルシーカー", "デスブリンガー" ] }
            , attribution: [ "魔界", "高貴", "ハロウィン" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性", "HP回復不可", "魔界適応" ]
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 20, dur: 40, HPred: 10 }
                        , dmgMul: { checked: false, mul: 1.8, target: "人間" }
                        , next: 0
                    }
                ]
                , "覚醒": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 35, dur: Infinity, HPred: 10 }
                        , dmgMul: { checked: false, mul: 1.5, target: "人間" }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "海魔の麗姫スキュレ", deployType: "近接型", rarity: "白"
            , unitClass: { selected: "デスブリンガー", options: [ "イビルクイーン", "デスブリンガー" ] }
            , attribution: [ "魔界", "高貴", "深海" ]
            , affection: { percentage: 100, bonus: "時間延長", changeRate: null }
            , note: [ "女性", "HP回復不可", "魔界適応", "深海適応" ]
        }
        , skill: {
            selected: "覚醒"
            , detail: {
                "通常": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 35, dur: 30, HPred: 10 }
                        , dmgMul: { checked: false, mul: 1.5, target: "魔法敵" }
                        , next: 0
                    }
                ]
                , "覚醒": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 40, dur: 30, HPred: 10 }
                        , dmgMul: { checked: false, mul: 2.5, target: "魔法敵" }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "狼剣の魔姫ピリカ", deployType: "近接型", rarity: "白"
            , unitClass: { selected: "デスブリンガー", options: [ "イビルクイーン", "デスブリンガー" ] }
            , attribution: [ "魔界", "高貴" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性", "HP回復不可", "魔界適応" ]
        }
        , skill: {
            selected: "覚醒"
            , detail: {
                "通常": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 30, dur: 20, HPred: 10 }
                        , next: 0
                    }
                ]
                , "覚醒": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 40, dur: 10, HPred: 10 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "夏祭りの金魚姫スキュレ", deployType: "近接型", rarity: "白"
            , unitClass: { selected: "イビルシーカー", options: [ "イビルクイーン", "イビルシーカー" ] }
            , attribution: [ "魔界", "高貴", "深海", "サマー" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性", "HP回復不可", "魔界適応", "深海適応" ]
        }
        , skill: {
            selected: "覚醒"
            , detail: {
                "通常": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 50, dur: 25, HPred: 15 }
                        , next: 0
                    }
                ]
                , "覚醒": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 50, dur: 20, HPred: 15 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "降魔の戦姫トコヨ", deployType: "近接型", rarity: "青"
            , unitClass: { selected: "イビルシーカー", options: [ "イビルクイーン", "イビルシーカー" ] }
            , attribution: [ "東の国", "魔界" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性", "HP回復不可", "魔界適応" ]
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 35, dur: 10, HPred: 15 }
                        , next: 0
                    }
                ]
                , "覚醒": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 45, dur: 20, HPred: 15 }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "ちびミサ", deployType: "近接型", rarity: "金"
            , unitClass: { selected: "ちびイビルプリンセス" }
            , attribution: [ "魔界", "高貴", "ハロウィン", "ちび" ]
            , affection: { percentage: null, bonus: "その他", changeRate: null }
            , note: [ "女性", "HP回復不可", "魔界適応" ]
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 20, dur: 40, HPred: 10 }
                        , dmgMul: { checked: false, mul: 1.8, target: "人間" }
                        , next: 0
                    }
                ]
            }
        }
    }
    , {
        id: null, hidden: false
        , unitInfo: {
            unitName: "ちびスキュレ", deployType: "近接型", rarity: "金"
            , unitClass: { selected: "ちびイビルプリンセス" }
            , attribution: [ "魔界", "高貴", "深海", "ちび" ]
            , affection: { percentage: 100, bonus: "時間延長", changeRate: null }
            , note: [ "女性", "HP回復不可", "魔界適応", "深海適応" ]
        }
        , skill: {
            selected: "通常"
            , detail: {
                "通常": [
                    {
                        target: "全敵"
                        , corr: { WT: null, CT: null, dur: null, HPred: null }
                        , uncorr: { CT: 35, dur: 30, HPred: 10 }
                        , dmgMul: { checked: false, mul: 1.5, target: "魔法敵" }
                        , next: 0
                    }
                ]
            }
        }
    }
];