if(!("units" in lists)) lists.units = {};

lists.units.onHit = {};

//テンプレ
lists.units.onHit.template = {
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
        note: [ "" ],
        atkInterval: [
            { startup: null, remain: null, cooldown: null },
            { startup: null, remain: null, cooldown: null }
        ],
        atkInterval_uncorr: [
            { startup: null, remain: null, cooldown: null },
            { startup: null, remain: null, cooldown: null },
            { startup: null, remain: null, cooldown: null }
        ]
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

lists.units.onHit.num = {
    //非イビルプリンセス系のユニット数
    notEP: 0,
    //非イビルプリンセス系のユニット数
    EP: 0,
    //追加されたユニット数
    added: 0
};

//ユニットリスト
lists.units.onHit.list = [
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "犬神シロ", deployType: "近接型", rarity: "黒",
            unitClass: {
                selectable: false, selected: "犬神系",
                options: [ "犬神系" ]
            },
            attribution: [ "妖怪", "東の国" ],
            affection: { percentage: null, bonus: "その他", changeRate: null },
            note: [ "女性" ],
            atkInterval: [
                { startup: null, remain: null, cooldown: null },
                { startup: null, remain: null, cooldown: null }
            ],
            atkInterval_uncorr: [
                { startup: null, remain: null, cooldown: null },
                { startup: 21, remain: 18, cooldown: 56 },
                { startup: 21, remain: 18, cooldown: 56 }
            ]
        },
        skill: {
            awaken: {
                selectable: true, selected: "通常",
                options: [ "通常", "覚醒" ]
            },
            target: [ "射程内", "射程内" ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 35, B: null }, { A: 50, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 15, B: null }, { A: 70, B: null } ],
            firstTime: null, interval: null,
            trigger: [ "スキル中hit", "スキル中hit" ], trans: [ "-", "-" ],
            HPred: [ null, null ], HPred_uncorr: [ 4, 2 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { options: [ "-", "-" ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    },
    {
        id: null,
        added: false,
        unitInfo: {
            unitName: "犬神ツムジ", deployType: "近接型", rarity: "白",
            unitClass: {
                selectable: false, selected: "犬神系",
                options: [ "犬神系" ]
            },
            attribution: [ "妖怪", "東の国" ],
            affection: { percentage: 150, bonus: "攻撃硬直", changeRate: null },
            note: [ "女性" ],
            atkInterval: [
                { startup: null, remain: null, cooldown: null },
                { startup: null, remain: null, cooldown: null }
            ],
            atkInterval_uncorr: [
                { startup: null, remain: null, cooldown: null },
                { startup: 21, remain: 18, cooldown: 56 },
                { startup: 21, remain: 18, cooldown: 56 }
            ]
        },
        skill: {
            awaken: {
                selectable: true, selected: "覚醒",
                options: [ "通常", "覚醒" ]
            },
            target: [ "3体", "1体" ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 40, B: null }, { A: 60, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 40, B: null }, { A: 60, B: null } ],
            firstTime: null, interval: null,
            trigger: [ "スキル中hit", "スキル中hit" ], trans: [ "-", "-" ],
            HPred: [ null, null ], HPred_uncorr: [ 1, 1 ],
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
            note: [ "女性", "状態異常無効" ],
            atkInterval: [
                { startup: null, remain: null, cooldown: null },
                { startup: null, remain: null, cooldown: null }
            ],
            atkInterval_uncorr: [
                { startup: 41, remain: 30, cooldown: 101 },
                { startup: 41, remain: 30, cooldown: 31 },
                { startup: 41, remain: 30, cooldown: 31 }
            ]
        },
        skill: {
            awaken: {
                selectable: false, selected: "覚醒",
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
            unitName: "道化師ワンダーハート", deployType: "遠距離型", rarity: "白",
            unitClass: {
                selectable: false, selected: "道化師系",
                options: [ "道化師系" ]
            },
            attribution: [ "人間" ],
            affection: { percentage: null, bonus: "その他", changeRate: null },
            note: [ "女性" ],
            atkInterval: [
                { startup: null, remain: null, cooldown: null },
                { startup: null, remain: null, cooldown: null }
            ],
            atkInterval_uncorr: [
                { startup: 9, remain: 12, cooldown: 31 },
                { startup: 9, remain: 12, cooldown: 31 },
                { startup: 13, remain: 9/*37*/, cooldown: 2 }
            ]
        },
        skill: {
            awaken: {
                selectable: false, selected: "覚醒",
                options: [ "通常", "覚醒" ]
            },
            target: [ "3体", "射程内" ],
            WT: { A: null, B: null },
            CT: { A: null, B: null },
            CT_uncorr: [ { A: 30, B: null }, { A: 40, B: null } ],
            dur: { A: null, B: null },
            dur_uncorr: [ { A: 15, B: null }, { A: 20, B: null } ],
            firstTime: null, interval: null,
            trigger: [ null, "スキル中hit" ], trans: [ "-", "-" ],
            HPred: [ null, null ], HPred_uncorr: [ null, 1 ],
            mulByNum: [ [ 1 ], [ 1 ] ],
            dmgMul: { options: [ "-", "-" ], mul: [ 1, 1 ], target: [ null, null ] }
        }
    }
];