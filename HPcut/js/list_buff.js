const lists = {};
lists.buff = {};

//初動短縮リスト
lists.buff.rWT = {};
lists.buff.rWT.updateTable = [ true, false ];
lists.buff.rWT.list = [
    {
        id: null, buffer: "エンプレス", awaken: "未覚醒", showAwaken: false,
        rate: 15, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip: "[編成] 全味方の初動-15%"
    },
    {
        id: null, buffer: "アウトクラトール", awaken: "覚醒", showAwaken: false,
        rate: 20, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip: "[編成] 全味方の初動-20%"
    },
    {
        id: null, buffer: "ドミヌスサクルム", awaken: "覚2a", showAwaken: false,
        rate: 40, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        //compound: [ "rCT" ],
        tooltip:
        "[編成] 全味方の初動-40%<br>\
        [配置] 全味方の再動-30%"
    },
    {
        id: null, buffer: "インヴィクタス", awaken: "覚2b", showAwaken: false,
        rate: 20, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip: "[編成] 全味方の初動-25%"
    },
    {
        id: null, buffer: "発明家", awaken: "未覚醒", showAwaken: false,
        rate: 20, disabled: true,
        AndOr: "or", target: [ { attribution: [ "機械" ] } ],
        tooltip: "[編成] 属性：機械の初動-20%"
    },
    {
        id: null, buffer: "大発明家", awaken: "覚醒", showAwaken: false,
        rate: 30, disabled: true,
        AndOr: "or", target: [ { attribution: [ "機械" ] } ],
        tooltip: "[編成] 属性：機械の初動-30%"
    },
    {
        id: null, buffer: "小覇王【恋姫】", awaken: "未覚醒", showAwaken: false,
        rate: 10, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip: "[編成] 全味方の初動-10%"
    },
    {
        id: null, buffer: "風雲児【恋姫】", awaken: "覚醒", showAwaken: false,
        rate: 20, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip: "[編成] 全味方の初動-20%"
    },
    {
        id: null, buffer: "白浴衣の弓乙女ナナリー", awaken: "覚醒", showAwaken: false,
        rate: 15, disabled: false,
        AndOr: "or", target: [ { rarity: [ "白", "青", "金", "銀", "銅" ] } ],
        tooltip: "[編成] レアリティ：白以下の初動-15%"
    },
    {
        id: null, buffer: "竜姫婚姻譚メリュジアナ", awaken: "未覚醒", showAwaken: true,
        rate: 20, disabled: false,
        AndOr: "or", target: [
            { attribution: [ "ジューンブライド", "竜族" ] },
            { note: [ "ドラゴンライダー系", "ドラグーン系" ] }
        ],
        tooltip:
        "[編成] 属性：ジューンブライド・<br>\
         　　　　　　 竜族(ドラゴンライダー・ドラグーン系含)の初動-20%"
    },
    {
        id: null, buffer: "竜姫婚姻譚メリュジアナ", awaken: "覚醒", showAwaken: true,
        rate: 25, disabled: false,
        AndOr: "or", target: [
            { attribution: [ "ジューンブライド", "竜族" ] },
            { note: [ "ドラゴンライダー系", "ドラグーン系" ] }
        ],
        tooltip:
        "[編成] 属性：ジューンブライド・<br>\
         　　　　　　 竜族(ドラゴンライダー・ドラグーン系含)の初動-25%"
    },
    {
        id: null, buffer: "波斬りの剣士サンドラ", awaken: "覚醒", showAwaken: false,
        rate: 30, disabled: true,
        AndOr: "or", target: [
            { unitClass: [ "ソードマスター系", "ちびソードマスター", "ちび剣聖", "ソードマスター", "剣聖", "デッドリーエッジ", "剣神" ] },
            { attribution: [ "サマー" ] }
        ],
        tooltip:
        "[編成] クラス：ソードマスター系、<br>\
         　　　 属性：サマーの初動-30%"
    },
    {
        id: null, buffer: "闇炎の魔将イルムガルト", awaken: "覚醒", showAwaken: false,
        rate: 30, disabled: true,
        AndOr: "or", target: [
            { attribution: [ "オーク", "ゴブリン", "デーモン" ] }
        ],
        tooltip: "[編成] 属性：デーモン・オーク・ゴブリンの初動-30%"
    },
    {
        id: null, buffer: "砂漠の傭兵ナシート", awaken: "未覚醒", showAwaken: true,
        rate: 30, disabled: true,
        AndOr: "or", target: [ { attribution: [ "砂漠の国" ] } ],
        tooltip: "[編成] 属性：砂漠の国の初動-30%"
    },
    {
        id: null, buffer: "砂漠の傭兵ナシート", awaken: "覚醒", showAwaken: true,
        rate: 50, disabled: true,
        AndOr: "or", target: [ { attribution: [ "砂漠の国" ] } ],
        tooltip: "[編成] 属性：砂漠の国の初動-50%"
    },
    {
        id: null, buffer: "陰陽師タマミ", awaken: "覚醒", showAwaken: false,
        rate: 25, disabled: false,
        AndOr: "or", target: [ { rarity: [ "白" ] } ],
        tooltip: "[編成] レアリティ：白の初動-25%"
    },
    {
        id: null, buffer: "ロゼット", awaken: "未覚醒", showAwaken: false,
        rate: 30, disabled: true,
        AndOr: "or", target: [ { rarity: [ "銀" ] } ],
        tooltip: "[編成] レアリティ：銀の初動-30%"
    }
];

//再動短縮(配置型別)
lists.buff.rCTdepType = {};
lists.buff.rCTdepType.updateTable = [ true, false ];
lists.buff.rCTdepType.list = [
    {
        id: null, deployType: "近接型", rate: 0
    },
    {
        id: null, deployType: "遠距離型", rate: 0
    },
    {
        id: null, deployType: "遠近距離型", rate: 0
    }
];

//再動短縮リスト
lists.buff.rCT = {};
lists.buff.rCT.updateTable = [ true, false ];
lists.buff.rCT.list = [
    {
        id: null, buffer: "妖狐絢爛", awaken: "覚2a", showAwaken: false,
        rate: 50, disabled: false,
        AndOr: "or", target: [ { attribution: [ "妖怪" ] } ],
        tooltip: "[配置] 属性：妖怪の再動-50%"
    },
    {
        id: null, buffer: "ドミヌスサクルム", awaken: "覚2a", showAwaken: false,
        rate: 30, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        //compound: [ "rWT" ],
        tooltip:
        "[編成] 全味方の初動-40%<br>\
        [配置] 全味方の再動-30%"
    },
    {
        id: null, buffer: "メイガスアデプト", awaken: "覚2a", showAwaken: false,
        rate: 50, disabled: false,
        AndOr: "or", target: [ { attribution: [ "魔術師" ] } ],
        tooltip: "[配置] 属性：魔術師の再動-50%"
    },
    {
        id: null, buffer: "約束の花嫁ディエーラ", awaken: "覚醒", showAwaken: false,
        rate: 45, disabled: false,
        AndOr: "or", target: [ { attribution: [ "ジューンブライド" ] } ],
        tooltip: "[配置] 属性：ジューンブライドの再動-45%"
    },
    {
        id: null, buffer: "黒兎の魔剣士タラニア", awaken: "覚醒", showAwaken: false,
        rate: 30, disabled: false,
        AndOr: "or", target: [ { attribution: [ "魔術師" ] } ],
        tooltip: "[配置] 属性：魔術師の再動-30%"
    },
    {
        id: null, buffer: "天穿の槍士フィロ", awaken: "覚醒", showAwaken: false,
        rate: 50, disabled: true,
        AndOr: "or", target: [
            { unitClass: [
                "ランスマスター系", "ちびランスマスター", "ちび槍聖", "ランスマスター", "槍聖", "レイジランサー", "槍神",
                "ワルキューレ系", "ちびワルキューレ", "ちびブリュンヒルデ", "ワルキューレ", "ユニコーンナイト", "ブリュンヒルデ", "レギンレイヴ", "ゲイレルル",
                "ロイヤルガード系", "ちびロイヤルガード", "ちびロイヤルオーダー", "ロイヤルガード", "ロイヤルオーダー", "ロードオブロイヤルズ", "セイクリッドガード"
            ] }
        ],
        tooltip:
        "[配置] クラス：ランスマスター系・<br>\
         　　　　　　　 ワルキューレ系・ロイヤルガード系の再動-50%"
    },
    {
        id: null, buffer: "犬神ツムジ", awaken: "覚醒", showAwaken: false,
        rate: 50, disabled: false,
        AndOr: "or", target: [
            { unitClass: [
                "犬神系", "ちび犬神", "ちび犬神頭", "犬神", "犬神頭",
                "陰陽師系", "ちび陰陽師", "ちび陰陽頭", "陰陽師", "陰陽頭", "悟徳陰陽頭", "召鬼陰陽頭",
                "邪仙系", "ちび邪仙", "ちび大邪仙", "邪仙", "大邪仙",
                "呪術使い系", "ちび呪術使い", "ちび大呪術師長", "呪術使い", "呪術師", "大呪術師長", "大呪術師祖", "妖厄神"
            ] }
        ],
        tooltip:
        "[配置] クラス：犬神系・陰陽師系・<br>\
         　　　　　　　 邪仙系・呪術使い系の再動-50%"
    },
    {
        id: null, buffer: "ねこみみ購買部ミネット", awaken: "覚醒", showAwaken: false,
        rate: 40, disabled: true,
        AndOr: "or", target: [ { attribution: [ "学園" ] } ],
        tooltip: "[配置] 属性：学園の再動-40%"
    }
];

//スキル時間延長リスト
lists.buff.skillExtend = {};
lists.buff.skillExtend.updateTable = [ true, false ];
lists.buff.skillExtend.list = [
    {
        id: null, buffer: "天馬騎士団長エスタ", awaken: "未覚醒", showAwaken: true,
        rate: 20, disabled: true,
        AndOr: "or", target: [
            { unitClass: [ "ペガサスライダー系", "ちびペガサスライダー", "ちびペガサスロード", "ペガサスライダー", "ペガサスナイト", "ペガサスロード", "スカイキャバリア", "ペガサスマスター" ] }
        ],
        tooltip: "[編成] クラス：ペガサスライダー系のスキル時間+20%"
    },
    {
        id: null, buffer: "天馬騎士団長エスタ", awaken: "覚醒", showAwaken: true,
        rate: 50, disabled: true,
        AndOr: "or", target: [
            { unitClass: [ "ペガサスライダー系", "ちびペガサスライダー", "ちびペガサスロード", "ペガサスライダー", "ペガサスナイト", "ペガサスロード", "スカイキャバリア", "ペガサスマスター" ] }
        ],
        tooltip: "[編成] クラス：ペガサスライダー系のスキル時間+50%"
    },
    {
        id: null, buffer: "暗黒騎士", awaken: "覚醒", showAwaken: false,
        rate: 30, disabled: true,
        AndOr: "or", target: [
            { unitClass: [ "ダークファイター系", "ちびダークファイター", "ちびパラディン", "ダークファイター", "ダークナイト", "パラディン", "マスターパラディン", "カオスナイト" ] }
        ],
        tooltip: "[編成] クラス：ダークファイター系のスキル時間+30%"
    },
    {
        id: null, buffer: "時空魔法の優等生トワ", awaken: "未覚醒", showAwaken: true,
        rate: 10, disabled: false,
        AndOr: "or", target: [ { deployType: [ "遠距離型" ] } ],
        tooltip: "[編成] 遠距離ユニットのスキル時間+10%"
    },
    {
        id: null, buffer: "時空魔法の優等生トワ", awaken: "覚醒", showAwaken: true,
        rate: 15, disabled: false,
        AndOr: "or", target: [ { deployType: [ "遠距離型" ] } ],
        tooltip: "[編成] 遠距離ユニットのスキル時間+15%"
    },
    {
        id: null, buffer: "提督リーンベル", awaken: "覚醒", showAwaken: false,
        rate: 30, disabled: true,
        AndOr: "or", target: [
            { unitClass: [ "セーラー系", "ちびセーラー", "ちびセーラーエリート", "セーラー", "セーラーチーフ", "セーラーエリート", "アドミラル", "ドレッドノート" ] }
        ],
        tooltip: "[編成] クラス：セーラー系のスキル時間+30%"
    },
    {
        id: null, buffer: "弓騎兵カティナ", awaken: "覚醒", showAwaken: false,
        rate: 20, disabled: true,
        AndOr: "or", target: [
            { unitClass: [ "ボウライダー系", "ちびボウライダー", "ちびボウライダーエリート", "ボウライダー", "ボウライダーチーフ", "ボウライダーエリート", "ボウライダーマスター", "ボウストームキャバリア" ] }
        ],
        tooltip: "[編成] クラス：ボウライダー系のスキル時間+20%"
    },
    {
        id: null, buffer: "術士女官シャーリー", awaken: "未覚醒", showAwaken: true,
        rate: 20, disabled: true,
        AndOr: "or", target: [
            { unitClass: [ "メイジ系", "下級メイジ", "ちびメイジ", "ちびアークメイジ", "メイジ", "ウォーロック", "アークメイジ", "メイガスアデプト", "メイジデストラクト" ] }
        ],
        tooltip: "[編成] クラス：メイジ系のスキル時間+20%"
    },
    {
        id: null, buffer: "術士女官シャーリー", awaken: "覚醒", showAwaken: true,
        rate: 30, disabled: true,
        AndOr: "or", target: [
            { unitClass: [ "メイジ系", "下級メイジ", "ちびメイジ", "ちびアークメイジ", "メイジ", "ウォーロック", "アークメイジ", "メイガスアデプト", "メイジデストラクト" ] }
        ],
        tooltip: "[編成] クラス：メイジ系のスキル時間+30%"
    },
    {
        id: null, buffer: "召使いアイリーン", awaken: "-", showAwaken: false,
        rate: 20, disabled: true,
        AndOr: "or", target: [
            { unitClass: [ "ローグ系", "ちびローグ", "ちびマスターアサシン", "ローグ", "アサシン", "マスターアサシン", "ナイトアサシン", "エンフォーサー" ] }
        ],
        tooltip: "[編成] クラス：ローグ系のスキル時間+20%"
    },
    {
        id: null, buffer: "悪魔召喚士リヴル", awaken: "覚醒", showAwaken: false,
        rate: 20, disabled: true,
        AndOr: "or", target: [
            { unitClass: [ "デモンサモナー系", "ちびデモンサモナー", "ちびデモンマスター", "デモンサモナー", "デモンマスター", "デモンルーラー", "デモンブリンガー" ] }
        ],
        tooltip: "[編成] クラス：デモンサモナー系のスキル時間+20%"
    },
    {
        id: null, buffer: "風水士ピピン", awaken: "覚醒", showAwaken: false,
        rate: 20, disabled: true,
        AndOr: "or", target: [
            { unitClass: [ "風水使い系", "ちび風水使い", "ちび風水導士", "風水使い", "風水士", "風水導士", "風水仙人", "八門風水導士" ] }
        ],
        tooltip: "[編成] クラス：風水使い系のスキル時間+20%"
    }
];

//スキル時間延長(固定値)リスト
lists.buff.skillExtend_fixed = {};
lists.buff.skillExtend_fixed.updateTable = [ true, false ];
lists.buff.skillExtend_fixed.list = [
    {
        id: null, buffer: "手甲鍛冶師フィスティア", awaken: "覚醒", showAwaken: false,
        value: 5, disabled: true,
        AndOr: "or", target: [
            { unitClass: [
                "王子", "王子【神器装備】", "王子【ケラウノス】", "王子【砂漠】", "王子【獣装】",
                "王子【巨像】", "王子【風護】", "王子【英魂】", "王子【ダーク】", "王子【英雄王】",
                "王子【四神】", "王子【神槍】", "王子【ナンディ】", "王子【海鎮】", "王子【ドゥン】",
                "王子【焔竜】", "王子【祝賀】", "王子【太鼓】", "王子【水着】", "王子【天羽々斬】", "王子【幼少】", "ちび王子",
                "バンデット系", "ちびバンデット", "ちびデストロイヤー", "下級バンデット", "バンデット", "バーサーカー", "デストロイヤー", "フューリーブリガンド", "オブリタレイター",
                "モンク系", "ちびモンク", "ちび拳聖", "モンク", "マスターモンク", "拳聖", "拳王", "修羅",
                "アベンジャー系", "ちびアベンジャー", "ちびデスアベンジャー", "アベンジャー", "デスアベンジャー", "ヴェンデッタ", "リヴェンジェンス",
                "グラディエーター系", "ちびグラディエーター", "ちび筆頭剣闘士", "グラディエーター", "次席剣闘士", "筆頭剣闘士", "オークブレイバー", "オンスロート",
                "モンスターブレイカー系", "ちびモンスターブレイカー", "ちびモンスターパニッシャー", "モンスターブレイカー", "モンスターパニッシャー", "シールインヘリット", "モンスターデモリッシャー"
            ] }
        ],
        tooltip:
        "[スキル・全体] 王子とクラス：バンデット系・モンク系・アベンジャー系・<br>\
         　　　　　　　 グラディエーター系・モンスターブレイカー系のスキル時間+5秒"
    }
];

//硬直短縮リスト
lists.buff.haste = {};
lists.buff.haste.updateTable = [ false, true ];
lists.buff.haste.list = [
    {
        id: null, buffer: "雷鳴大妖ぬえ", awaken: "覚2a", showAwaken: false,
        rate: 20, disabled: false,
        AndOr: "or", target: [ { attribution: [ "妖怪" ] } ],
        tooltip: "[編成] 属性：妖怪の攻撃硬直-20%"
    },
    {
        id: null, buffer: "エルダードラゴンメイガス", awaken: "覚2a?", showAwaken: false,
        rate: 20, disabled: true,
        AndOr: "or", target: [
            { attribution: [ "竜族" ] },
            { note: [ "ドラゴンライダー系", "ドラグーン系" ] }
        ],
        tooltip: "[配置] 属性：竜族(ドラゴンライダー・ドラグーン系含)の攻撃硬直-20%"
    },
    {
        id: null, buffer: "恋慕の堕天使ソフィー", awaken: "覚醒", showAwaken: false,
        rate: 40, disabled: true,
        AndOr: "or", target: [
            { unitClass: [
                "王子", "王子【神器装備】", "王子【ケラウノス】", "王子【砂漠】", "王子【獣装】",
                "王子【巨像】", "王子【風護】", "王子【英魂】", "王子【ダーク】", "王子【英雄王】",
                "王子【四神】", "王子【神槍】", "王子【ナンディ】", "王子【海鎮】", "王子【ドゥン】",
                "王子【焔竜】", "王子【祝賀】", "王子【太鼓】", "王子【水着】", "王子【天羽々斬】", "王子【幼少】", "ちび王子"
            ] }
        ],
        tooltip: "[編成] 自身と王子の攻撃硬直-40%"
    },
    {
        id: null, buffer: "湯けむり吸血鬼エマ", awaken: "-", showAwaken: false,
        rate: 20, disabled: true,
        AndOr: "or", target: [ { attribution: [ "アンデッド", "温泉" ] } ],
        tooltip: "[編成] 属性：アンデッド・温泉の攻撃硬直-20%"
    },
    {
        id: null, buffer: "時の調停者トワ", awaken: "-", showAwaken: false,
        rate: 20, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip: "[編成] 全味方の攻撃硬直-20%"
    },
    {
        id: null, buffer: "帝国辺境総督アレイダ", awaken: "未覚醒", showAwaken: true,
        rate: 25, disabled: true,
        AndOr: "and", target: [ { deployType: [ "近接型" ] }, { attribution: [ "白の帝国" ] } ],
        tooltip: "[編成] 属性：帝国の近接ユニットの攻撃硬直-25%"
    },
    {
        id: null, buffer: "帝国辺境総督アレイダ", awaken: "覚醒", showAwaken: true,
        rate: 35, disabled: true,
        AndOr: "and", target: [ { deployType: [ "近接型" ] }, { attribution: [ "白の帝国" ] } ],
        tooltip: "[編成] 属性：帝国の近接ユニットの攻撃硬直-35%"
    },
    {
        id: null, buffer: "金獣の領主リンクス", awaken: "未覚醒", showAwaken: true,
        rate: 25, disabled: true,
        AndOr: "or", target: [ { attribution: [ "獣人" ] } ],
        tooltip: "[編成] 属性：獣人の攻撃硬直-25%"
    },
    {
        id: null, buffer: "金獣の領主リンクス", awaken: "覚醒", showAwaken: true,
        rate: 35, disabled: true,
        AndOr: "or", target: [ { attribution: [ "獣人" ] } ],
        tooltip: "[編成] 属性：獣人の攻撃硬直-35%"
    },
    {
        id: null, buffer: "雷光の魔剣士タラニア", awaken: "覚醒", showAwaken: false,
        rate: 20, disabled: true,
        AndOr: "or", target: [
            { unitClass: [
                "魔法剣士系", "ちび魔法剣士", "ちびルーンロード", "魔法剣士", "ルーンフェンサー", "ルーンロード", "ルーンデルヴァー", "ルーンスレイヤー",
                "メイジ系", "下級メイジ", "ちびメイジ", "ちびアークメイジ", "メイジ", "ウォーロック", "アークメイジ", "メイガスアデプト", "メイジデストラクト"
            ] }
        ],
        tooltip: "[編成] クラス：魔法剣士系・メイジ系の攻撃硬直-20%"
    },
    {
        id: null, buffer: "砲術教官エイプリル", awaken: "覚醒", showAwaken: false,
        rate: 30, disabled: true,
        AndOr: "or", target: [
            { unitClass: [
                "砲術士系", "ちび砲術士", "ちびキャノンマスター", "砲術士", "重砲士", "キャノンマスター", "ハイキャノンマスター", "超重巨砲士",
                "重装砲兵系", "ちび重装砲兵", "ちびギガキャノンアーマー", "重装砲兵", "キャノンアーマー", "ギガキャノンアーマー", "バスターアーマー", "フォートレス",
                "モンスタースレイヤー系", "ちびモンスタースレイヤー", "ちびモンスターバスター", "モンスタースレイヤー", "モンスターバスター", "ペネトレーター", "ヘビートリガー"
            ] }
        ],
        tooltip:
        "[編成] クラス：砲術士系・重装砲兵系・<br>\
         　　　　　　　 モンスタースレイヤー系の攻撃硬直-30%"
    },
    {
        id: null, buffer: "孫策 伯符", awaken: "-", showAwaken: false,
        rate: 20, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip: "[編成] 全味方の攻撃硬直-20%"
    },
];

//硬直短縮(固定値化)リスト
lists.buff.hasteFixed = {};
lists.buff.hasteFixed.updateTable = [ false, true ];
lists.buff.hasteFixed.list = [
    {
        id: null, buffer: "叡智の杖", awaken: "-", showAwaken: false,
        atkCooldown: 21, disabled: false,
        AndOr: "or", target: [ { attribution: [ "魔術師" ] } ],
        tooltip: "[スキル・全体] 属性：魔術師の攻撃硬直11f化"
    },
    {
        id: null, buffer: "秋祭の大魔女デスピア", awaken: "通常", showAwaken: false,
        atkCooldown: 11, disabled: true,
        AndOr: "or", target: [ { attribution: [ "ハロウィン" ] } ],
        tooltip: "[スキル・全体] 属性：ハロウィンの攻撃硬直6f化"
    },
    {
        id: null, buffer: "聖夜の炸裂海賊デューオ", awaken: "通常", showAwaken: false,
        atkCooldown: 16, disabled: true,
        AndOr: "or", target: [ { attribution: [ "クリスマス" ] } ],
        tooltip: "[スキル・全体] 属性：クリスマスの攻撃硬直8f化"
    },
    {
        id: null, buffer: "時の調停者トワ", awaken: "通常", showAwaken: true,
        atkCooldown: 11, disabled: true,
        AndOr: "or", target: [
            { unitClass: [
                "ウィッチ系", "ちびウィッチ", "ちびアークウィッチ", "ウィッチ", "ロードウィッチ", "アークウィッチ", "ホーリーウィッチ", "ソーサレス",
                "クロノウィッチ系", "ちびクロノウィッチ", "ちびアーククロノウィッチ", "クロノウィッチ", "アーククロノウィッチ", "クロノマスター", "クロノマンサー"
            ] }
        ],
        tooltip:
        "[スキル・射程内] クラス：ウィッチ系・<br>\
         　　　　　　　　　　　　 クロノウィッチ系の攻撃硬直6f化"
    },
    {
        id: null, buffer: "時の調停者トワ", awaken: "覚醒", showAwaken: true,
        atkCooldown: 11, disabled: true,
        AndOr: "or", target: [
            { unitClass: [
                "メイジ系", "下級メイジ", "ちびメイジ", "ちびアークメイジ", "メイジ", "ウォーロック", "アークメイジ", "メイガスアデプト", "メイジデストラクト",
                "ウィッチ系", "ちびウィッチ", "ちびアークウィッチ", "ウィッチ", "ロードウィッチ", "アークウィッチ", "ホーリーウィッチ", "ソーサレス",
                "クロノウィッチ系", "ちびクロノウィッチ", "ちびアーククロノウィッチ", "クロノウィッチ", "アーククロノウィッチ", "クロノマスター", "クロノマンサー"
            ] }
        ],
        tooltip:
        "[スキル・射程内] クラス：メイジ系・ウィッチ系・<br>\
         　　　　　　　　　　　　 クロノウィッチ系の攻撃硬直6f化"
    },
    {
        id: null, buffer: "胡喜美", awaken: "通常", showAwaken: false,
        atkCooldown: 21, disabled: true,
        AndOr: "or", target: [ { attribution: [ "仙人" ] } ],
        tooltip: "[スキル・全体] 属性：仙人の攻撃硬直11f化"
    },
    {
        id: null, buffer: "弓兵の湯浴みソーマ", awaken: "覚醒", showAwaken: false,
        atkCooldown: 4, disabled: true,
        AndOr: "or", target: [
            { unitClass: [ "アーチャー系", "下級アーチャー", "ちびアーチャー", "ちびアルテミス", "アーチャー", "スナイパー", "アルテミス", "セレーネ", "ラピッドシューター" ] }
        ],
        tooltip: "[スキル・射程内] クラス：アーチャー系の攻撃硬直2f化"
    },
    {
        id: null, buffer: "疾風軍師の祝福祭シナト", awaken: "覚醒", showAwaken: false,
        atkCooldown: 2, disabled: true,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip: "[スキル・射程内] 全味方の攻撃硬直1f化"
    },
    {
        id: null, buffer: "お祭り夕涼みココロ", awaken: "覚醒", showAwaken: false,
        atkCooldown: 11, disabled: true,
        AndOr: "and", target: [ { deployType: [ "遠距離型" ] }, { attribution: [ "サマー" ] } ],
        tooltip: "[スキル・射程内] 属性：サマーの遠距離ユニットの攻撃硬直6f化"
    },
    {
        id: null, buffer: "付与魔術師ハーニィ", awaken: "通常", showAwaken: false,
        atkCooldown: 11, disabled: false,
        AndOr: "or", target: [ { deployType: [ "近接型" ] } ],
        tooltip: "[スキル・射程内] 近接ユニットの攻撃硬直6f化"
    }
];

//特攻付与リスト
lists.buff.giveDmgMul = {};
lists.buff.giveDmgMul.updateTable = [ true, true ];
lists.buff.giveDmgMul.list = [
    {
        id: null, buffer: "超古代発明家アルレット", awaken: "未覚醒", showAwaken: true,
        rate: 15, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip:
        "[編成] 飛行敵に対して<br>\
         　　　 全味方の攻撃力が15%上昇"
    },
    {
        id: null, buffer: "超古代発明家アルレット", awaken: "覚醒", showAwaken: true,
        rate: 20, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip:
        "[編成] 飛行敵に対して<br>\
         　　　 全味方の攻撃力が20%上昇"
    },
    {
        id: null, buffer: "奇想の発明家タバサ", awaken: "未覚醒", showAwaken: true,
        rate: 10, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip:
        "[編成] 神獣・魔獣・妖獣・獣・獣人・水棲に対して<br>\
         　　　 全味方の攻撃力が10%上昇"
    },
    {
        id: null, buffer: "奇想の発明家タバサ", awaken: "覚醒", showAwaken: true,
        rate: 15, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip:
        "[編成] 神獣・魔獣・妖獣・獣・獣人・水棲に対して<br>\
         　　　 全味方の攻撃力が15%上昇"
    },
    {
        id: null, buffer: "帝国発明家ヘンドリカ", awaken: "未覚醒", showAwaken: true,
        rate: 10, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip: "[編成] 天使に対して全味方の攻撃力が10%上昇"
    },
    {
        id: null, buffer: "帝国発明家ヘンドリカ", awaken: "覚醒", showAwaken: true,
        rate: 15, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip:
        "[編成] 天使に対して全味方の攻撃力が15%上昇<br>\
         　　　 竜族に対して属性：帝国の攻撃力が15%上昇<br>\
         　　　 (敵の属性は特に指定してないので、2行目は特に意味ない)"
    },
    {
        id: null, buffer: "天性の発明家マギー", awaken: "未覚醒", showAwaken: true,
        rate: 10, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip:
        "[編成] アーマー・ゴーレムに対して<br>\
         　　　 全味方の攻撃力が10%上昇"
    },
    {
        id: null, buffer: "天性の発明家マギー", awaken: "覚醒", showAwaken: true,
        rate: 15, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip:
        "[編成] アーマー・ゴーレムに対して<br>\
         　　　 全味方の攻撃力が15%上昇"
    }
];

//鈍化(マップ)軽減リスト
lists.buff.redMapEff = {};
lists.buff.redMapEff.updateTable = [ false, true ];
lists.buff.redMapEff.list = [
    {
        id: null, buffer: "王子【海鎮】", awaken: null, showAwaken: false,
        map: "深海", rate: 50, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip: "[配置] 全味方の深海の影響を50%軽減"
    },
    {
        id: null, buffer: "紫鱗の海巫女ハルフゥ", awaken: "覚醒", showAwaken: false,
        map: "深海", rate: 30, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip: "[編成] 全味方の深海の影響を30%軽減"
    },
    {
        id: null, buffer: "渦潮の亜神メシナ", awaken: "未覚醒", showAwaken: true,
        map: "深海", rate: 30, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip: "[配置] 全味方の深海の影響を30%軽減"
    },
    {
        id: null, buffer: "渦潮の亜神メシナ", awaken: "覚醒", showAwaken: true,
        map: "深海", rate: 50, disabled: false,
        AndOr: "or", target: [ { "-": [] } ],
        tooltip: "[配置] 全味方の深海の影響を50%軽減"
    },
];