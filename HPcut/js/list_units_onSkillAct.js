if(!("units" in lists)) lists.units = {};

lists.units.onSkillAct = {};

//テンプレ
lists.units.onSkillAct.template = {
    id: null,
    added: false,
    unitInfo: {
        unitName: "", deployType: "", rarity: "",
        unitClass: {
            selectable: false, selected: "",
            options: [ "" ]
        },
        attribution: [ "", "", "", "" ],
        affection: { percentage: null, bonus: "", changeRate: null },
        note: [ "" ]
    },
    skill: {
        awaken: {
            selectable: false, selected: "通常",
            options: [ "通常", "覚醒" ]
        },
        target: [ null, null ],
        WT: { A: null, B: null },
        CT: { A: null, B: null },
        CT_uncorr: [ { A: null, B: null }, { A: null, B: null } ],
        dur: { A: null, B: null },
        dur_uncorr: [ { A: null, B: null }, { A: null, B: null } ],
        firstTime: null, interval: null,
        trigger: [ null, null ], trans: [ "-", "-" ],
        HPred: [ null, null ], HPred_uncorr: [ null, null ],
        mulByNum: [ [ 1 ], [ 1 ] ],
        dmgMul: { options: [ "-", "-" ], mul: [ 1, 1 ], target: [ null, null ] }
    }
};

lists.units.onSkillAct.num = {
    //非イビルプリンセス系のユニット数
    notEP: 0,
    //非イビルプリンセス系のユニット数
    EP: 0,
    //追加されたユニット数
    added: 0
};

//ユニットリスト
lists.units.onSkillAct.list = [
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "九尾狐カヨウ", deployType: "近接型", rarity: "黒",
            unitClass: {
                selectable: true, selected: "妖狐絢爛",
                options: [ "妖狐系", "妖狐絢爛" ]
            },
            attribution: [ "妖怪", "東の国" ],
            affection: { percentage: 150, bonus: "再動短縮", changeRate: null },
            note: [ "女性" ]
        },
        skill: {
            awaken: {
                selectable: false, selected: "覚醒",
                options: [ "通常", "覚醒" ]
            },
            target: [ null, "全員" ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 22, B: null }, { A: 10, B: 30 } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 30, B: null }, { A: 3, B: 30 } ],
            firstTime: null, interval: null,
            trigger: [ null, "A" ], trans: [ "-", "交互" ],
            HPred: [ null, null ], HPred_uncorr: [ null, 20 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { options: [ "-", "-" ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "黒紫の巫女キキョウ", deployType: "遠距離型", rarity: "黒",
            unitClass: {
                selectable: false, selected: "シャーマン系",
                options: [ "シャーマン系" ]
            },
            attribution: [ "人間", "東の国" ],
            affection: { percentage: null, bonus: "その他", changeRate: null },
            note: [ "女性" ]
        },
        skill: {
            awaken: {
                selectable: false, selected: "覚醒",
                options: [ "通常", "覚醒" ]
            },
            target: [ null, "全敵" ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 15, B: 15 }, { A: 15, B: 15 } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 1, B: 1 }, { A: 10, B: 20 } ],
            firstTime: null, interval: null,
            trigger: [ null, "B" ], trans: [ "交互", "交互" ],
            HPred: [ null, null ], HPred_uncorr: [ null, 5 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { options: [ "-", "-" ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "迎春の呪姫オロチヒメ", deployType: "遠距離型", rarity: "黒",
            unitClass: {
                selectable: false, selected: "呪術使い系",
                options: [ "呪術使い系" ]
            },
            attribution: [ "人間", "魔術師", "東の国", "お正月" ],
            affection: { percentage: 150, bonus: "再動短縮", changeRate: null },
            note: [ "女性", "状態異常無効" ]
        },
        skill: {
            awaken: {
                selectable: false, selected: "通常",
                options: [ "通常", "覚醒" ]
            },
            target: [ "全敵", "6-7体" ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 50, B: null }, { A: 55, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 30, B: null }, { A: 40, B: null } ],
            firstTime: null, interval: null,
            trigger: [ "-", "スキル中hit" ], trans: [ "-", "-" ],
            HPred: [ null, null ], HPred_uncorr: [ 15, 2 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { options: [ "-", "-" ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "混沌霊使いニーヴ", deployType: "遠距離型", rarity: "黒",
            unitClass: {
                selectable: false, selected: "エレメンタラー系",
                options: [ "エレメンタラー系" ]
            },
            attribution: [ "人間" ],
            affection: { percentage: null, bonus: "その他", changeRate: null },
            note: [ "女性" ]
        },
        skill: {
            awaken: {
                selectable: false, selected: "通常",
                options: [ "通常", "覚醒" ]
            },
            target: [ "射程内", null ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 10, B: null }, { A: 80, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 2, B: null }, { A: Infinity, B: null } ],
            firstTime: null, interval: null,
            trigger: [ "-", null ], trans: [ "-", "-" ],
            HPred: [ null, null ], HPred_uncorr: [ 10, null ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { options: [ "-", "-" ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "猫又コハル", deployType: "遠距離型", rarity: "黒",
            unitClass: {
                selectable: false, selected: "猫又系",
                options: [ "猫又系" ]
            },
            attribution: [ "妖怪", "東の国" ],
            affection: { percentage: 100, bonus: "時間延長", changeRate: null },
            note: [ "女性" ]
        },
        skill: {
            awaken: {
                selectable: false, selected: "通常",
                options: [ "通常", "覚醒" ]
            },
            target: [ "全敵", null ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [  { A: 70, B: null }, { A: 60, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 30, B: null }, { A: 30, B: null } ],
            firstTime: null, interval: null,
            trigger: [ "-", null ], trans: [ "-", "-" ],
            HPred: [ null, null ], HPred_uncorr: [ 16, null ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { options: [ "-", "-" ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "清心の花嫁スイレン", deployType: "近接型", rarity: "白",
            unitClass: {
                selectable: false, selected: "ドラゴンライダー系",
                options: [ "ドラゴンライダー系" ]
            },
            attribution: [ "人間", "騎兵", "ジューンブライド" ],
            affection: { percentage: null, bonus: "その他", changeRate: null },
            note: [ "女性", "ドラゴンライダー系" ]
        },
        skill: {
            awaken: {
                selectable: true, selected: "通常",
                options: [ "通常", "覚醒" ]
            },
            target: [ "射程内", "射程内" ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 55, B: null }, { A: 50, B: 55 } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 1, B: null }, { A: 1, B: 1 } ],
            firstTime: null, interval: null,
            trigger: [ "-", "B" ], trans: [ "-", "初回A" ],
            HPred: [ null, null ], HPred_uncorr: [ 20, 20 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { options: [ "-", "-" ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "召喚士アクアマリー", deployType: "遠距離型", rarity: "白",
            unitClass: {
                selectable: false, selected: "サモナー系",
                options: [ "サモナー系" ]
            },
            attribution: [ "人間", "魔術師" ],
            affection: { percentage: null, bonus: "その他", changeRate: null },
            note: [ "女性" ]
        },
        skill: {
            awaken: {
                selectable: true, selected: "覚醒",
                options: [ "通常", "覚醒" ]
            },
            target: [ "全敵", "全敵" ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 25, B: null }, { A: 30, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 40, B: null }, { A: 25, B: null } ],
            firstTime: null, interval: null,
            trigger: [ "-", "-" ], trans: [ "-", "-" ],
            HPred: [ null, null ], HPred_uncorr: [ 15, 10 ],
            mulByNum: [ [ 1 ], [ 1, 1.5, 2, 2.5, 3 ] ],
            dmgMul: { options: [ "-", "-" ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "魔神の共鳴者レライエ", deployType: "遠距離型", rarity: "白",
            unitClass: {
                selectable: false, selected: "デモンシャーマン系",
                options: [ "デモンシャーマン系" ]
            },
            attribution: [ "人間", "魔界" ],
            affection: { percentage: null, bonus: "その他", changeRate: null },
            note: [ "女性", "HP回復不可", "魔界適応" ]
        },
        skill: {
            awaken: {
                selectable: false, selected: "通常",
                options: [ "通常", "覚醒" ]
            },
            target: [ "全敵", null ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 30, B: null }, { A: null, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 30, B: null }, { A: null, B: null } ],
            firstTime: null, interval: null,
            trigger: [ "-", null ], trans: [ "-", null ],
            HPred: [ null, null ], HPred_uncorr: [ 8, null ],
            mulByNum: [ [ 1 ], null ],
            dmgMul: { options: [ "-", null ], mul: [ 1, null ], target: [ null, null ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "ちびコハル", deployType: "遠距離型", rarity: "金",
            unitClass: {
                selectable: false, selected: "猫又系",
                options: [ "猫又系" ]
            },
            attribution: [ "妖怪", "東の国", "ちび" ],
            affection: { percentage: 100, bonus: "時間延長", changeRate: null },
            note: [ "女性" ]
        },
        skill: {
            awaken: {
                selectable: false, selected: "通常",
                options: [ "通常" ]
            },
            target: [ "全敵", null ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [  { A: 70, B: null }, { A: null, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 30, B: null }, { A: null, B: null } ],
            firstTime: null, interval: null,
            trigger: [ "-", null ], trans: [ "-", null ],
            HPred: [ null, null ], HPred_uncorr: [ 16, null ],
            mulByNum: [ [ 1 ], null ],
            dmgMul: { options: [ "-", null ], mul: [ 1, null ], target: [ null, null ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "孫権 仲謀", deployType: "近接型", rarity: "白",
            unitClass: {
                selectable: false, selected: "君主【恋姫】系",
                options: [ "君主【恋姫】系" ]
            },
            attribution: [ "人間", "恋姫" ],
            affection: { percentage: null, bonus: "その他", changeRate: null },
            note: [ "女性" ]
        },
        skill: {
            awaken: {
                selectable: false, selected: "通常",
                options: [ "通常", "覚醒" ]
            },
            target: [ "全員", null ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [  { A: 40, B: null }, { A: null, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 20, B: null }, { A: null, B: null } ],
            firstTime: null, interval: null,
            trigger: [ "-", null ], trans: [ "-", null ],
            HPred: [ null, null ], HPred_uncorr: [ 10, null ],
            mulByNum: [ [ 1 ], null ],
            dmgMul: { options: [ "-", null ], mul: [ 1, null ], target: [ null, null ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "祝祭の南瓜姫ミサ", deployType: "近接型", rarity: "黒",
            unitClass: {
                selectable: true, selected: "イビルクイーン",
                options: [ "イビルクイーン", "イビルシーカー", "デスブリンガー" ]
            },
            attribution: [ "魔界", "ハロウィン" ],
            affection: { percentage: null, bonus: "その他", changeRate: null },
            note: [ "女性", "HP回復不可", "魔界適応" ]
        },
        skill: {
            awaken: {
                selectable: true, selected: "通常",
                options: [ "通常", "覚醒" ]
            },
            target: [ "全敵", "全敵" ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 20, B: null }, { A: 35, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 40, B: null }, { A: Infinity, B: null } ],
            firstTime: null, interval: null,
            trigger: [ "-", "-" ], trans: [ "-", "-" ],
            HPred: [ null, null ], HPred_uncorr: [ 10, 10 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { options: [ "なし", "なし" ], mul: [ 1.8, 1.5 ], target: [ "人間", "人間" ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "海魔の麗姫スキュレ", deployType: "近接型", rarity: "白",
            unitClass: {
                selectable: true, selected: "デスブリンガー",
                options: [ "イビルクイーン", "デスブリンガー" ]
            },
            attribution: [ "魔界" ],
            affection: { percentage: 100, bonus: "時間延長", changeRate: null },
            note: [ "女性", "HP回復不可", "魔界適応", "深海適応" ]
        },
        skill: {
            awaken: {
                selectable: true, selected: "覚醒",
                options: [ "通常", "覚醒" ]
            },
            target: [ "全敵", "全敵" ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 35, B: null }, { A: 40, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 30, B: null }, { A: 30, B: null } ],
            firstTime: null, interval: null,
            trigger: [ "-", "-" ], trans: [ "-", "-" ],
            HPred: [ null, null ], HPred_uncorr: [ 10, 10 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { options: [ "なし", "なし" ], mul: [ 1.5, 2.5 ], target: [ "魔法敵", "魔法敵" ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "狼剣の魔姫ピリカ", deployType: "近接型", rarity: "白",
            unitClass: {
                selectable: true, selected: "デスブリンガー",
                options: [ "イビルクイーン", "デスブリンガー" ]
            },
            attribution: [ "魔界" ],
            affection: { percentage: null, bonus: "その他", changeRate: null },
            note: [ "女性", "HP回復不可", "魔界適応" ]
        },
        skill: {
            awaken: {
                selectable: true, selected: "覚醒",
                options: [ "通常", "覚醒" ]
            },
            target: [ "全敵", "全敵" ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 30, B: null }, { A: 40, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 20, B: null }, { A: 10, B: null } ],
            firstTime: null, interval: null,
            trigger: [ "-", "-" ], trans: [ "-", "-" ],
            HPred: [ null, null ], HPred_uncorr: [ 10, 10 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { options: [ "-", "-" ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "夏祭りの金魚姫スキュレ", deployType: "近接型", rarity: "白",
            unitClass: {
                selectable: true, selected: "イビルシーカー",
                options: [ "イビルクイーン", "イビルシーカー" ]
            },
            attribution: [ "魔界", "サマー" ],
            affection: { percentage: null, bonus: "その他", changeRate: null },
            note: [ "女性", "HP回復不可", "魔界適応", "深海適応" ]
        },
        skill: {
            awaken: {
                selectable: true, selected: "覚醒",
                options: [ "通常", "覚醒" ]
            },
            target: [ "全敵", "全敵" ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 50, B: null }, { A: 50, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 25, B: null }, { A: 20, B: null } ],
            firstTime: null, interval: null,
            trigger: [ "-", "-" ], trans: [ "-", "-" ],
            HPred: [ null, null ], HPred_uncorr: [ 15, 15 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { options: [ "-", "-" ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "降魔の戦姫トコヨ", deployType: "近接型", rarity: "青",
            unitClass: {
                selectable: true, selected: "イビルシーカー",
                options: [ "イビルクイーン", "イビルシーカー" ]
            },
            attribution: [ "東の国", "魔界" ],
            affection: { percentage: null, bonus: "その他", changeRate: null },
            note: [ "女性", "HP回復不可", "魔界適応" ]
        },
        skill: {
            awaken: {
                selectable: true, selected: "通常",
                options: [ "通常", "覚醒" ]
            },
            target: [ "全敵", "全敵" ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 35, B: null }, { A: 45, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 10, B: null }, { A: 20, B: null } ],
            firstTime: null, interval: null,
            trigger: [ "-", "-" ], trans: [ "-", "-" ],
            HPred: [ null, null ], HPred_uncorr: [ 15, 15 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { options: [ "-", "-" ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "ちびミサ", deployType: "近接型", rarity: "金",
            unitClass: {
                selectable: false, selected: "ちびイビルプリンセス",
                options: [ "ちびイビルプリンセス" ]
            },
            attribution: [ "魔界", "ちび", "ハロウィン" ],
            affection: { percentage: null, bonus: "その他", changeRate: null },
            note: [ "女性", "HP回復不可", "魔界適応" ]
        },
        skill: {
            awaken: {
                selectable: false, selected: "通常",
                options: [ "通常", null ]
            },
            target: [ "全敵", null ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 20, B: null }, { A: null, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 40, B: null }, { A: null, B: null } ],
            firstTime: null, interval: null,
            trigger: [ "-", null ], trans: [ "-", null ],
            HPred: [ null, null ], HPred_uncorr: [ 10, null ],
            mulByNum: [ [ 1 ], null ],
            dmgMul: { options: [ "なし", null ], mul: [ 1.8, null ], target: [ "人間", null ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "ちびスキュレ", deployType: "近接型", rarity: "金",
            unitClass: {
                selectable: false, selected: "ちびイビルプリンセス",
                options: [ "ちびイビルプリンセス" ]
            },
            attribution: [ "魔界", "ちび" ],
            affection: { percentage: null/*100*/, bonus: null/*"時間延長"*/, changeRate: null },
            note: [ "女性", "HP回復不可", "魔界適応", "深海適応" ]
        },
        skill: {
            awaken: {
                selectable: false, selected: "通常",
                options: [ "通常", null ]
            },
            target: [ "全敵", null ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 35, B: null }, { A: null, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 30, B: null }, { A: null, B: null } ],
            firstTime: null, interval: null,
            trigger: [ "-", null ], trans: [ "-", null ],
            HPred: [ null, null ], HPred_uncorr: [ 10, null ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { options: [ "なし", null ], mul: [ 1.5, null ], target: [ "魔法敵", null ] }
        }
    }
];