const lists = {};
lists.buff = {};

// 初動短縮リスト
lists.buff.rWT = {};
lists.buff.rWT.jap = "初動短縮";
lists.buff.rWT.list = [
    {
        id: null, buffer: "エンプレス", isClass: true, awaken: "未"
        , value: 15, disabled: null, req: "team"
        , tooltip: "[編成] 全味方の初動-15%"
    }
    , {
        id: null, buffer: "アウトクラトール", awaken: "覚醒"
        , value: 20, disabled: null, req: "team"
        , tooltip: "[編成] 全味方の初動-20%"
    }
    , {
        id: null, buffer: "ドミヌスサクルム", isClass: true, awaken: "覚2a"
        , value: 40, disabled: null, req: "team"
        , compound: { rCT: [ { buffer: "ドミヌスサクルム" } ] }
        , tooltip: "\
            [編成] 全味方の初動-40%<br>\
            [配置] 全味方の再動-30%\
        "
    }
    , {
        id: null, buffer: "インヴィクタス", isClass: true, awaken: "覚2b"
        , value: 20, disabled: null, req: "team"
        , tooltip: "[編成] 全味方の初動-25%"
    }
    , {
        id: null, buffer: "発明家", isClass: true, awaken: "未"
        , value: 20, disabled: null, req: "team"
        , target: [ { attribution: [ "機械" ] } ]
        , compound: { rWT: [
            { buffer: "超古代発明家アルレット", awaken: "未" }
            , { buffer: "奇想の発明家タバサ", awaken: "未" }
            , { buffer: "帝国発明家ヘンドリカ", awaken: "未" }
            , { buffer: "天性の発明家マギー", awaken: "未" }
            , { buffer: "魔電流の発明家レクテ", awaken: "未" }
        ] }
        , tooltip: "[編成] 属性：機械の初動-20%"
    }
    , {
        id: null, buffer: "大発明家", isClass: true, awaken: "覚醒"
        , value: 30, disabled: null, req: "team"
        , target: [ { attribution: [ "機械" ] } ]
        , compound: { rWT: [
            { buffer: "超古代発明家アルレット", awaken: "覚醒" }
            , { buffer: "奇想の発明家タバサ", awaken: "覚醒" }
            , { buffer: "帝国発明家ヘンドリカ", awaken: "覚醒" }
            , { buffer: "天性の発明家マギー", awaken: "覚醒" }
            , { buffer: "魔電流の発明家レクテ", awaken: "覚醒" }
        ] }
        , tooltip: "[編成] 属性：機械の初動-30%"
    }
    , {
        id: null, buffer: "超発明王", isClass: true, awaken: "覚2a"
        , value: 45, disabled: null, req: "team"
        , target: [ { attribution: [ "機械" ] } ]
        , compound: { rWT: [
            { buffer: "奇想の発明家タバサ", awaken: "覚醒" }
            , { buffer: "帝国発明家ヘンドリカ", awaken: "覚醒" }
        ] }
        , tooltip: "[編成] 属性：機械の初動-45%"
    }
    , {
        id: null, buffer: "大機関博士", isClass: true, awaken: "覚2b"
        , value: 30, disabled: null, req: "team"
        , target: [ { attribution: [ "機械" ] } ]
        , compound: { rWT: [
            { buffer: "天性の発明家マギー", awaken: "覚醒" }
            , { buffer: "魔電流の発明家レクテ", awaken: "覚醒" }
        ] }
        , tooltip: "[編成] 属性：機械の初動-30%"
    }
    , {
        id: null, buffer: "小覇王【恋姫】", isClass: true, awaken: "未"
        , value: 10, disabled: null, req: "team"
        , tooltip: "[編成] 全味方の初動-10%"
    }
    , {
        id: null, buffer: "風雲児【恋姫】", isClass: true, awaken: "覚醒"
        , value: 20, disabled: null, req: "team"
        , compound: { haste: [ { buffer: "孫策 伯符" } ] }
        , tooltip: "[編成] 全味方の初動-20%"
    }
    , {
        id: null, buffer: "井河アサギ", awaken: "覚醒"
        , value: 40, disabled: null, req: "team"
        , target: [ { deployType: [ "近接型" ] } ]
        , tooltip: "[編成] 近接ユニットの初動-40%"
    }
    , {
        id: null, buffer: "白浴衣の弓乙女ナナリー", awaken: "覚醒"
        , value: 15, disabled: null, req: "team"
        , target: [ { rarity: [ "白", "青", "金", "銀", "銅" ] } ]
        , tooltip: "[編成] レアリティ：白以下の初動-15%"
    }
    , {
        id: null, buffer: "純真海日記ピューロ", awaken: "覚醒"
        , value: 30, disabled: null, req: "team"
        , target: [ { attribution: [ "騎兵" ] } ]
        , tooltip: "[編成] 属性：騎兵の初動-30%"
    }
    , {
        id: null, buffer: "竜姫婚姻譚メリュジアナ", awaken: "未", showAwaken: true
        , value: 20, disabled: null, req: "team"
        , target: [ { attribution: [ "ジューンブライド", "ドラゴン" ] } ]
        , tooltip: "\
            [編成] 属性：ジューンブライド・ドラゴンの初動-20%\
        "
    }
    , {
        id: null, buffer: "竜姫婚姻譚メリュジアナ", awaken: "覚醒", showAwaken: true
        , value: 25, disabled: null, req: "team"
        , target: [
            { attribution: [ "ジューンブライド", "ドラゴン" ] } ]
        , tooltip: "\
            [編成] 属性：ジューンブライド・ドラゴンの初動-25%\
        "
    }
    , {
        id: null, buffer: "波斬りの剣士サンドラ", awaken: "覚醒"
        , value: 30, disabled: null, req: "team"
        , target: [
            { unitClass: [ "ソードマスター系", "ちびソードマスター", "ちび剣聖", "ソードマスター", "剣聖", "デッドリーエッジ", "剣神" ] }
            , { attribution: [ "サマー" ] }
        ]
        , tooltip: "\
            [編成] クラス：ソードマスター系、<br>\
            　　　 属性：サマーの初動-30%\
        "
    }
    , {
        id: null, buffer: "闇炎の魔将イルムガルト", awaken: "覚醒"
        , value: 30, disabled: null, req: "team"
        , target: [
            { attribution: [ "オーク", "ゴブリン", "デーモン" ] }
        ]
        , tooltip: "[編成] 属性：デーモン・オーク・ゴブリンの初動-30%"
    }
    , {
        id: null, buffer: "砂漠の傭兵ナシート", awaken: "未", showAwaken: true
        , value: 30, disabled: null, req: "team"
        , target: [ { attribution: [ "砂漠の国" ] } ]
        , tooltip: "[編成] 属性：砂漠の国の初動-30%"
    }
    , {
        id: null, buffer: "砂漠の傭兵ナシート", awaken: "覚醒", showAwaken: true
        , value: 50, disabled: null, req: "team"
        , target: [ { attribution: [ "砂漠の国" ] } ]
        , tooltip: "[編成] 属性：砂漠の国の初動-50%"
    }
    , {
        id: null, buffer: "陰陽師タマミ", awaken: "覚醒"
        , value: 25, disabled: null, req: "team"
        , target: [ { rarity: [ "白" ] } ]
        , tooltip: "[編成] レアリティ：白の初動-25%"
    }
    , {
        id: null, buffer: "夏の花火師メル", awaken: "未", showAwaken: true
        , value: 10, disabled: null, req: "team"
        , target: [ { attribution: [ "サマー" ] } ]
        , tooltip: "[編成] 属性：サマーの初動-10%"
    }
    , {
        id: null, buffer: "夏の花火師メル", awaken: "覚醒", showAwaken: true
        , value: 15, disabled: null, req: "team"
        , target: [ { attribution: [ "サマー" ] } ]
        , tooltip: "[編成] 属性：サマーの初動-15%"
    }
    , {
        id: null, buffer: "ロゼット", awaken: "未"
        , value: 30, disabled: null, req: "team"
        , target: [ { rarity: [ "銀" ] } ]
        , tooltip: "[編成] レアリティ：銀の初動-30%"
    }
];

// 再動短縮(配置型別)
lists.buff.rCTdepType = {};
lists.buff.rCTdepType.jap = "再動短縮(配置型別)";
lists.buff.rCTdepType.list = { "近接型": 0, "遠距離型": 0, "遠近距離型": 0 };

// 再動短縮リスト
lists.buff.rCT = {};
lists.buff.rCT.jap = "再動短縮";
lists.buff.rCT.list = [
    {
        id: null, buffer: "流転の本", awaken: "-"
        , value: 30, disabled: null, req: "skill"
        , target: [ { attribution: [ "魔術師" ] } ]
        , tooltip: "[スキル・全体] 属性：魔術師の再動-30%"
        , unitInfo: {
            unitName: "流転の本", deployType: "近接型", rarity: "黒"
            , unitClass: { selected: "流転の本" }
            , attribution: [], note: []
            , WT: 1, CT: 0, dur: Infinity
        }
    }
    , {
        id: null, buffer: "迅速の王冠", awaken: "-"
        , value: 30, disabled: null, req: "skill"
        , target: [ { attribution: [ "高貴" ] } ]
        , tooltip: "[スキル・全体] 属性：高貴の再動-30%"
        , unitInfo: {
            unitName: "迅速の王冠", deployType: "近接型", rarity: "黒"
            , unitClass: { selected: "迅速の王冠" }
            , attribution: [], note: []
            , WT: 1, CT: 0, dur: Infinity
        }
    }
    , {
        id: null, buffer: "狂竜の牙", awaken: "-"
        , value: 30, disabled: null, req: "skill"
        , target: [ { attribution: [ "ドラゴン" ] } ]
        , tooltip: "[スキル・全体] 属性：ドラゴンの再動-30%"
        , unitInfo: {
            unitName: "狂竜の牙", deployType: "近接型", rarity: "黒"
            , unitClass: { selected: "狂竜の牙" }
            , attribution: [], note: []
            , WT: 1, CT: 0, dur: Infinity
        }
    }
    , {
        id: null, buffer: "妖狐絢爛", isClass: true, awaken: "覚2a"
        , value: 50, disabled: null, req: "deploy"
        , target: [ { attribution: [ "妖怪" ] } ]
        , tooltip: "[配置] 属性：妖怪の再動-50%"
    }
    , {
        id: null, buffer: "ドミヌスサクルム", isClass: true, awaken: "覚2a"
        , value: 30, disabled: null, req: "deploy"
        , compound: { rWT: [ { buffer: "ドミヌスサクルム" } ] }
        , tooltip: "\
            [編成] 全味方の初動-40%<br>\
            [配置] 全味方の再動-30%\
        "
    }
    , {
        id: null, buffer: "メイガスアデプト", isClass: true, awaken: "覚2a"
        , value: 50, disabled: null, req: "deploy"
        , target: [ { attribution: [ "魔術師" ] } ]
        , tooltip: "[配置] 属性：魔術師の再動-50%"
    }
    , {
        id: null, buffer: "ビショップ", isClass: true, awaken: "未"
        , value: 20, disabled: null, req: "deploy"
        , target: [ { attribution: [ "聖職者" ] } ]
        , tooltip: "[配置] 属性：聖職者の再動-20%"
    }
    , {
        id: null, buffer: "エルダービショップ", isClass: true, awaken: "覚1"
        , value: 30, disabled: null, req: "deploy"
        , target: [ { attribution: [ "聖職者" ] } ]
        , tooltip: "[配置] 属性：聖職者の再動-30%"
    }
    , {
        id: null, buffer: "パトリアーク", isClass: true, awaken: "覚2a"
        , value: 50, disabled: null, req: "deploy"
        , target: [ { attribution: [ "聖職者" ] } ]
        , tooltip: "[配置] 属性：聖職者の再動-50%"
    }
    , {
        id: null, buffer: "フィロソファー", isClass: true, awaken: "覚2b"
        , value: 35, disabled: null, req: "deploy"
        , target: [ { attribution: [ "聖職者" ] } ]
        , tooltip: "[配置] 属性：聖職者の再動-35%"
    }
    , {
        id: null, buffer: "闘志の癒し湯アナトリア", awaken: "覚醒"
        , value: 35, disabled: null, req: "deploy"
        , target: [ { attribution: [ "温泉", "魔界" ] } ]
        , tooltip: "[配置] 属性：温泉・魔界の再動-35%"
    }
    , {
        id: null, buffer: "戦場の政務官アンナ", awaken: "覚醒"
        , value: 50, disabled: null, req: "skill"
        , target: [ { unitClass: [ "王子" ] } ]
        , tooltip: "[スキル・全体] 王子の再動-50%"
        , unitInfo: {
            unitName: "戦場の政務官アンナ", deployType: "遠距離型", rarity: "黒"
            , unitClass: { selected: "政務官系" }
            , attribution: [ "王国", "人間" ], note: [ "女性" ]
            , WT: 5, CT: 50, dur: 30
        }
    }
    , {
        id: null, buffer: "学園政務官アンナ", awaken: "通常"
        , value: 20, disabled: null, req: "skill"
        , target: [
            { unitClass: [ "王子" ] }
            , { attribution: [ "学園" ] }
        ]
        , tooltip: "[スキル・射程内] 王子・学園の再動-20%"
        , unitInfo: {
            unitName: "学園政務官アンナ", deployType: "遠距離型", rarity: "黒"
            , unitClass: { selected: "政務官系" }
            , attribution: [ "王国", "人間", "学園" ], note: [ "女性" ]
            , WT: 1, CT: 80, dur: Infinity
        }
    }
    , {
        id: null, buffer: "約束の花嫁ディエーラ", awaken: "覚醒"
        , value: 45, disabled: null, req: "deploy"
        , target: [ { attribution: [ "ジューンブライド" ] } ]
        , tooltip: "[配置] 属性：ジューンブライドの再動-45%"
    }
    , {
        id: null, buffer: "黒兎の魔剣士タラニア", awaken: "覚醒"
        , value: 30, disabled: null, req: "deploy"
        , target: [ { attribution: [ "魔術師" ] } ]
        , tooltip: "[配置] 属性：魔術師の再動-30%"
    }
    , {
        id: null, buffer: "夏空の鍛冶師グラティア", awaken: "覚醒"
        , value: 50, disabled: null, req: "skill"
        , target: [
            { unitClass: [ "王子" ] }
            , { attribution: [ "白の帝国" ], deployType: [ "近接型" ] }
            , { attribution: [ "サマー" ], deployType: [ "近接型" ] }
        ]
        , tooltip: "[スキル・全体] 王子、属性：白の帝国・サマーの近接ユニットの再動-50%"
        , unitInfo: {
            unitName: "夏空の鍛冶師グラティア", deployType: "近接型", rarity: "白"
            , unitClass: { selected: "鍛冶職人系" }
            , attribution: [ "白の帝国", "人間", "サマー" ], note: [ "女性" ]
            , WT: 20, CT: 40, dur: 30
        }
    }
    , {
        id: null, buffer: "天穿の槍士フィロ", awaken: "覚醒"
        , value: 50, disabled: null, req: "deploy"
        , target: [
            { unitClass: [
                "ランスマスター系", "ちびランスマスター", "ちび槍聖", "ランスマスター", "槍聖", "レイジランサー", "槍神"
                , "ワルキューレ系", "ちびワルキューレ", "ちびブリュンヒルデ", "ワルキューレ", "ブリュンヒルデ", "レギンレイヴ", "ゲイレルル"
                , "ロイヤルガード系", "ちびロイヤルガード", "ちびロイヤルオーダー", "ロイヤルガード", "ロイヤルオーダー", "ロードオブロイヤルズ", "セイクリッドガード"
            ] }
        ]
        , tooltip: "\
            [配置] クラス：ランスマスター系・<br>\
            　　　　　　　 ワルキューレ系・ロイヤルガード系の再動-50%\
        "
    }
    , {
        id: null, buffer: "犬神ツムジ", awaken: "覚醒"
        , value: 50, disabled: null, req: "deploy"
        , target: [
            { unitClass: [
                "犬神系", "ちび犬神", "ちび犬神頭", "犬神", "犬神頭", "お犬さま", "厄神霊犬"
                , "陰陽師系", "ちび陰陽師", "ちび陰陽頭", "陰陽師", "陰陽頭", "悟徳陰陽頭", "召鬼陰陽頭"
                , "邪仙系", "ちび邪仙", "ちび大邪仙", "邪仙", "大邪仙", "邪神仙", "邪鬼仙"
                , "呪術使い系", "ちび呪術使い", "ちび大呪術師長", "呪術使い", "大呪術師長", "大呪術師祖", "妖厄神"
            ] }
        ]
        , tooltip: "\
            [配置] クラス：犬神系・陰陽師系・<br>\
            　　　　　　　 邪仙系・呪術使い系の再動-50%\
        "
    }
    , {
        id: null, buffer: "ねこみみ購買部ミネット", awaken: "覚醒"
        , value: 40, disabled: null, req: "deploy"
        , target: [ { attribution: [ "学園" ] } ]
        , tooltip: "[配置] 属性：学園の再動-40%"
    }
    , {
        id: null, buffer: "帝国悪魔召喚士ザミエル", awaken: "覚醒"
        , value: 50, disabled: null, req: "skill"
        , target: [ { attribution: [ "白の帝国", "魔界" ] } ]
        , tooltip: "[スキル・範囲] 属性：白の帝国・魔界の再動-50%"
        , unitInfo: {
            unitName: "帝国悪魔召喚士ザミエル", deployType: "遠距離型", rarity: "白"
            , unitClass: { selected: "デモンサモナー系" }
            , attribution: [ "白の帝国", "デーモン", "魔術師", "魔界" ]
            , note: [ "女性", "魔界適応" ]
            , WT: 35, CT: 75, dur: Infinity
        }
    }
    , {
        id: null, buffer: "魔種人類学者ステルゥ", awaken: "通常"
        , value: 50, disabled: null, req: "skill"
        , target: [ { deployType: [ "近接型" ] } ]
        , tooltip: "[スキル・全体] 近接ユニットの再動-50%"
        , unitInfo: {
            unitName: "魔種人類学者ステルゥ", deployType: "遠距離型", rarity: "白"
            , unitClass: { selected: "スカラー系" }
            , attribution: [ "人間", "魔術師" ]
            , note: [ "女性" ]
            , WT: 27.5, CT: 55, dur: Infinity
        }
    }
    , {
        id: null, buffer: "ちびメカゴブリンクイーン", awaken: "-"
        , value: 30, disabled: null, req: "deploy"
        , target: [ { attribution: [ "ゴブリン", "機械" ] } ]
        , tooltip: "[配置] 属性：ゴブリン、機械の再動-40%"
    }
];

// スキル時間延長リスト
lists.buff.skillExtend = {};
lists.buff.skillExtend.jap = "スキル時間延長";
lists.buff.skillExtend.list = [
    {
        id: null, buffer: "誓いの妖精姫オリヴィエ", awaken: "未", showAwaken: true
        , value: 20, disabled: null, req: "team"
        , target: [ { unitClass: [ "王子" ] } ]
        , tooltip: "[編成] 王子のスキル時間+20%"
    }
    , {
        id: null, buffer: "誓いの妖精姫オリヴィエ", awaken: "覚醒", showAwaken: true
        , value: 30, disabled: null, req: "team"
        , target: [ { unitClass: [ "王子" ] } ]
        , tooltip: "[編成] 王子のスキル時間+30%"
    }
    , {
        id: null, buffer: "天馬騎士団長エスタ", awaken: "未", showAwaken: true
        , value: 20, disabled: null, req: "team"
        , target: [
            { unitClass: [ "ペガサスライダー系", "ちびペガサスライダー", "ちびペガサスロード", "ペガサスライダー", "ペガサスロード", "スカイキャバリア", "ペガサスマスター" ] }
        ]
        , tooltip: "[編成] クラス：ペガサスライダー系のスキル時間+20%"
    }
    , {
        id: null, buffer: "天馬騎士団長エスタ", awaken: "覚醒", showAwaken: true
        , value: 50, disabled: null, req: "team"
        , target: [
            { unitClass: [ "ペガサスライダー系", "ちびペガサスライダー", "ちびペガサスロード", "ペガサスライダー", "ペガサスロード", "スカイキャバリア", "ペガサスマスター" ] }
        ]
        , tooltip: "[編成] クラス：ペガサスライダー系のスキル時間+50%"
    }
    , {
        id: null, buffer: "暗黒騎士", awaken: "覚醒"
        , value: 30, disabled: null, req: "team"
        , target: [
            { unitClass: [ "ダークファイター系", "ちびダークファイター", "ちびパラディン", "ダークファイター", "パラディン", "マスターパラディン", "カオスナイト" ] }
        ]
        , tooltip: "[編成] クラス：ダークファイター系のスキル時間+30%"
    }
    , {
        id: null, buffer: "時空魔法の優等生トワ", awaken: "未", showAwaken: true
        , value: 10, disabled: null, req: "team"
        , target: [ { deployType: [ "遠距離型" ] } ]
        , tooltip: "[編成] 遠距離ユニットのスキル時間+10%"
    }
    , {
        id: null, buffer: "時空魔法の優等生トワ", awaken: "覚醒", showAwaken: true
        , value: 15, disabled: null, req: "team"
        , target: [ { deployType: [ "遠距離型" ] } ]
        , tooltip: "[編成] 遠距離ユニットのスキル時間+15%"
    }
    , {
        id: null, buffer: "提督リーンベル", awaken: "覚醒"
        , value: 30, disabled: null, req: "team"
        , target: [
            { unitClass: [ "セーラー系", "ちびセーラー", "ちびセーラーエリート", "セーラー", "セーラーエリート", "アドミラル", "ドレッドノート" ] }
        ]
        , tooltip: "[編成] クラス：セーラー系のスキル時間+30%"
    }
    , {
        id: null, buffer: "弓騎兵カティナ", awaken: "覚醒"
        , value: 20, disabled: null, req: "team"
        , target: [
            { unitClass: [ "ボウライダー系", "ちびボウライダー", "ちびボウライダーエリート", "ボウライダー", "ボウライダーエリート", "ボウライダーマスター", "ボウストームキャバリア" ] }
        ]
        , tooltip: "[編成] クラス：ボウライダー系のスキル時間+20%"
    }
    , {
        id: null, buffer: "術士女官シャーリー", awaken: "未", showAwaken: true
        , value: 20, disabled: null, req: "team"
        , target: [
            { unitClass: [ "メイジ系", "下級メイジ", "ちびメイジ", "ちびアークメイジ", "メイジ", "アークメイジ", "メイガスアデプト", "メイジデストラクト" ] }
        ]
        , tooltip: "[編成] クラス：メイジ系のスキル時間+20%"
    }
    , {
        id: null, buffer: "術士女官シャーリー", awaken: "覚醒", showAwaken: true
        , value: 30, disabled: null, req: "team"
        , target: [
            { unitClass: [ "メイジ系", "下級メイジ", "ちびメイジ", "ちびアークメイジ", "メイジ", "アークメイジ", "メイガスアデプト", "メイジデストラクト" ] }
        ]
        , tooltip: "[編成] クラス：メイジ系のスキル時間+30%"
    }
    , {
        id: null, buffer: "召使いアイリーン", awaken: "-"
        , value: 20, disabled: null, req: "team"
        , target: [
            { unitClass: [ "ローグ系", "ちびローグ", "ちびマスターアサシン", "ローグ", "マスターアサシン", "ナイトアサシン", "エンフォーサー" ] }
        ]
        , tooltip: "[編成] クラス：ローグ系のスキル時間+20%"
    }
    , {
        id: null, buffer: "悪魔召喚士リヴル", awaken: "覚醒"
        , value: 20, disabled: null, req: "team"
        , target: [
            { unitClass: [ "デモンサモナー系", "ちびデモンサモナー", "ちびデモンマスター", "デモンサモナー", "デモンマスター", "デモンルーラー", "デモンブリンガー" ] }
        ]
        , tooltip: "[編成] クラス：デモンサモナー系のスキル時間+20%"
    }
    , {
        id: null, buffer: "風水士ピピン", awaken: "覚醒"
        , value: 20, disabled: null, req: "team"
        , target: [
            { unitClass: [ "風水使い系", "ちび風水使い", "ちび風水導士", "風水使い", "風水導士", "風水仙人", "八門風水導士" ] }
        ]
        , tooltip: "[編成] クラス：風水使い系のスキル時間+20%"
    }
];

// スキル時間延長(固定値)リスト
lists.buff.skillExtendFixed = {};
lists.buff.skillExtendFixed.jap = "スキル時間延長(固定値)";
lists.buff.skillExtendFixed.list = [
    {
        id: null, buffer: "手甲鍛冶師フィスティア", awaken: "覚醒"
        , value: 5, disabled: null, req: "skill"
        , target: [
            { unitClass: [
                "王子"
                , "バンデット系", "ちびバンデット", "ちびデストロイヤー", "下級バンデット", "バンデット", "デストロイヤー", "フューリーブリガンド", "オブリタレイター"
                , "モンク系", "ちびモンク", "ちび拳聖", "モンク", "拳聖", "拳王", "修羅"
                , "アベンジャー系", "ちびアベンジャー", "ちびデスアベンジャー", "アベンジャー", "デスアベンジャー", "ヴェンデッタ", "リヴェンジェンス"
                , "グラディエーター系", "ちびグラディエーター", "ちび筆頭剣闘士", "グラディエーター", "筆頭剣闘士", "オークブレイバー", "オンスロート"
                , "モンスターブレイカー系", "ちびモンスターブレイカー", "ちびモンスターパニッシャー", "モンスターブレイカー", "モンスターパニッシャー", "シールインヘリット", "モンスターデモリッシャー"
            ] }
        ]
        , tooltip:
        "[スキル・全体] 王子とクラス：バンデット系・モンク系・アベンジャー系・<br>\
         　　　　　　　 グラディエーター系・モンスターブレイカー系のスキル時間+5秒"
        , unitInfo: {
            unitName: "手甲鍛冶師フィスティア", deployType: "近接型", rarity: "白"
            , unitClass: { selected: "神匠鍛冶師" }
            , attribution: [ "華の国", "仙人" ]
            , note: [ "女性" ]
            , WT: 22.5, CT: 45, dur: 30
        }
    }
];

// 硬直短縮リスト
lists.buff.haste = {};
lists.buff.haste.jap = "硬直短縮";
lists.buff.haste.list = [
    {
        id: null, buffer: "盤上の支配者", isClass: true, awaken: "覚1"
        , value: 35, disabled: null, req: "deploy"
        , tooltip: "[射程内] 全味方の攻撃硬直-35%"
    }
    , {
        id: null, buffer: "雷鳴大妖ぬえ", isClass: true, awaken: "覚2a"
        , value: 20, disabled: null, req: "team"
        , target: [ { attribution: [ "妖怪" ] } ]
        , tooltip: "[編成] 属性：妖怪の攻撃硬直-20%"
    }
    , {
        id: null, buffer: "エルダードラゴンメイガス", isClass: true, awaken: "覚2a?"
        , value: 20, disabled: null, req: "deploy"
        , target: [ { attribution: [ "ドラゴン" ] } ]
        , compound: { giveDmgMul: [ { buffer: "氷竜魔術士カラザ" } ] }
        , tooltip: "[配置] 属性：ドラゴンの攻撃硬直-20%"
    }
    , {
        id: null, buffer: "恋慕の堕天使ソフィー", awaken: "覚醒"
        , value: 40, disabled: null, req: "team"
        , target: [ { unitClass: [ "王子" ] }
        ]
        , tooltip: "[編成] 自身と王子の攻撃硬直-40%"
    }
    , {
        id: null, buffer: "湯けむり吸血鬼エマ", awaken: "-"
        , value: 20, disabled: null, req: "team"
        , target: [ { attribution: [ "アンデッド", "温泉" ] } ]
        , tooltip: "[編成] 属性：アンデッド・温泉の攻撃硬直-20%"
    }
    , {
        id: null, buffer: "歴戦弓兵ダニエラ", awaken: "-"
        , value: 20, disabled: null, req: "team"
        , target: [ { attribution: [ "弓兵" ] } ]
        , tooltip: "[編成] 属性：弓兵の攻撃硬直-20%"
    }
    , {
        id: null, buffer: "聖夜の訪問者クルス", awaken: "-"
        , value: 20, disabled: null, req: "team"
        , target: [ { attribution: [ "クリスマス" ] } ]
        , tooltip: "[編成] 属性：クリスマスの攻撃硬直-20%"
    }
    , {
        id: null, buffer: "時の調停者トワ", awaken: "-"
        , value: 20, disabled: null, req: "team"
        , compound: { hasteFixed: [ { buffer: "時の調停者トワ" } ] }
        , tooltip: "[編成] 全味方の攻撃硬直-20%"
    }
    , {
        id: null, buffer: "帝国辺境総督アレイダ", awaken: "未", showAwaken: true
        , value: 25, disabled: null, req: "team"
        , target: [ { deployType: [ "近接型" ] , attribution: [ "白の帝国" ] } ]
        , tooltip: "[編成] 属性：白の帝国の近接ユニットの攻撃硬直-25%"
    }
    , {
        id: null, buffer: "帝国辺境総督アレイダ", awaken: "覚醒", showAwaken: true
        , value: 35, disabled: null, req: "team"
        , target: [ { deployType: [ "近接型" ] , attribution: [ "白の帝国" ] } ]
        , tooltip: "[編成] 属性：白の帝国の近接ユニットの攻撃硬直-35%"
    }
    , {
        id: null, buffer: "金獣の領主リンクス", awaken: "未", showAwaken: true
        , value: 25, disabled: null, req: "team"
        , target: [ { attribution: [ "獣人" ] } ]
        , tooltip: "[編成] 属性：獣人の攻撃硬直-25%"
    }
    , {
        id: null, buffer: "金獣の領主リンクス", awaken: "覚醒", showAwaken: true
        , value: 35, disabled: null, req: "team"
        , target: [ { attribution: [ "獣人" ] } ]
        , tooltip: "[編成] 属性：獣人の攻撃硬直-35%"
    }
    , {
        id: null, buffer: "闇の墓守リッチ", awaken: "-"
        , value: 15, disabled: null, req: "team"
        , target: [ { attribution: [ "アンデッド" ] } ]
        , tooltip: "[編成] 属性：アンデッドの攻撃硬直-15%"
    }
    , {
        id: null, buffer: "雷光の魔剣士タラニア", awaken: "覚醒"
        , value: 20, disabled: null, req: "team"
        , target: [
            { unitClass: [
                "魔法剣士系", "ちび魔法剣士", "ちびルーンロード", "魔法剣士", "ルーンロード", "ルーンデルヴァー", "ルーンスレイヤー"
                , "メイジ系", "下級メイジ", "ちびメイジ", "ちびアークメイジ", "メイジ", "アークメイジ", "メイガスアデプト", "メイジデストラクト"
            ] }
        ]
        , tooltip: "[編成] クラス：魔法剣士系・メイジ系の攻撃硬直-20%"
    }
    , {
        id: null, buffer: "砲術教官エイプリル", awaken: "覚醒"
        , value: 30, disabled: null, req: "team"
        , target: [
            { unitClass: [
                "砲術士系", "ちび砲術士", "ちびキャノンマスター", "砲術士", "キャノンマスター", "ハイキャノンマスター", "超重巨砲士"
                , "重装砲兵系", "ちび重装砲兵", "ちびギガキャノンアーマー", "重装砲兵", "ギガキャノンアーマー", "バスターアーマー", "フォートレス"
                , "モンスタースレイヤー系", "ちびモンスタースレイヤー", "ちびモンスターバスター", "モンスタースレイヤー", "モンスターバスター", "ペネトレーター", "ヘビートリガー"
            ] }
        ]
        , tooltip: "\
            [編成] クラス：砲術士系・重装砲兵系・<br>\
            　　　　　　　 モンスタースレイヤー系の攻撃硬直-30%\
        "
    }
    , {
        id: null, buffer: "新年撃ち初めイーファ", awaken: "未", showAwaken: true
        , value: 20, disabled: null, req: "team"
        , target: [ { attribution: [ "お正月", "ドラゴン" ] } ]
        , tooltip: "[範囲] 属性：お正月・ドラゴンの攻撃硬直-20%"
    }
    , {
        id: null, buffer: "新年撃ち初めイーファ", awaken: "覚醒", showAwaken: true
        , value: 30, disabled: null, req: "team"
        , target: [ { attribution: [ "お正月", "ドラゴン" ] } ]
        , tooltip: "[範囲] 属性：お正月・ドラゴンの攻撃硬直-30%"
    }
    , {
        id: null, buffer: "歴史の観測者ホルミース", awaken: "覚2a", showAwaken: true
        , value: 30, disabled: null, req: "deploy"
        , target: [ { attribution: [ "人間", "神", "半神" ] } ]
        , tooltip: "[範囲] 属性：人間・神・半神の攻撃硬直-30%"
    }
    , {
        id: null, buffer: "妖魔の旋律アミー", awaken: "覚2a", showAwaken: true
        , value: 30, disabled: null, req: "deploy"
        , target: [ { attribution: [ "魔界" ] } ]
        , tooltip: "[範囲] 属性：魔界の攻撃硬直-30%"
    }
    , {
        id: null, buffer: "孫策 伯符", awaken: "-"
        , value: 20, disabled: null, req: "team"
        , compound: { rWT: [ { buffer: "風雲児【恋姫】" } ] }
        , tooltip: "[編成] 全味方の攻撃硬直-20%"
    }
    , {
        // 区分が好感度と同じらしいので、対象が出てきたら要プログラム見直し
        id: null, buffer: "夜行わらし【馬廻】", awaken: "-"
        , value: 50, disabled: null, req: "skill"
        , target: [
            { unitClass: [
                "夜行さん系", "ちび夜行さん", "ちび百妖夜行", "夜行さん", "百妖夜行", "月下夜行", "絢爛千妖夜行"
            ] }
        ]
        , tooltip: "[スキル・全体] クラス：夜行さん系の攻撃硬直-50%"
        , unitInfo: {
            unitName: "夜行わらし【馬廻】", deployType: "遠距離型", rarity: "-"
            , unitClass: { selected: "-" }
            , attribution: [], note: []
            , WT: 1, CT: 60, dur: Infinity
        }
    }
];

// 硬直短縮(固定値化)リスト
lists.buff.hasteFixed = {};
lists.buff.hasteFixed.jap = "硬直短縮(固定値化)";
lists.buff.hasteFixed.list = [
    {
        id: null, buffer: "叡智の杖", awaken: "-"
        , value: 21, disabled: null, req: "skill"
        , target: [ { attribution: [ "魔術師" ] } ]
        , tooltip: "[スキル・全体] 属性：魔術師の攻撃硬直11f化"
        , unitInfo: {
            unitName: "叡智の杖", deployType: "近接型", rarity: "-"
            , unitClass: { selected: "叡智の杖" }
            , attribution: [], note: []
            , WT: 1, CT: 0, dur: Infinity
        }
    }
    , {
        id: null, buffer: "狂暴の翼", awaken: "-"
        , value: 11, disabled: null, req: "skill"
        , target: [ { attribution: [ "魔界" ] } ]
        , tooltip: "[スキル・全体] 属性：魔界の攻撃硬直6f化"
        , unitInfo: {
            unitName: "狂暴の翼", deployType: "近接型", rarity: "-"
            , unitClass: { selected: "狂暴の翼" }
            , attribution: [], note: []
            , WT: 1, CT: 0, dur: Infinity
        }
    }
    , {
        id: null, buffer: "速射の長銃", awaken: "-"
        , value: 21, disabled: null, req: "skill", unforced: true
        , target: [ { attribution: [ "銃士" ] } ]
        , tooltip: "[スキル・全体] 属性：銃士の攻撃硬直11f化"
        , unitInfo: {
            unitName: "速射の長銃", deployType: "近接型", rarity: "-"
            , unitClass: { selected: "速射の長銃" }
            , attribution: [], note: []
            , WT: 1, CT: 0, dur: Infinity
        }
    }
    , {
        id: null, buffer: "猛撃の砲弾", awaken: "-"
        , value: 21, disabled: null, req: "skill", unforced: true
        , target: [ { attribution: [ "砲兵" ] } ]
        , tooltip: "[スキル・全体] 属性：砲兵の攻撃硬直11f化"
        , unitInfo: {
            unitName: "猛撃の砲弾", deployType: "近接型", rarity: "-"
            , unitClass: { selected: "猛撃の砲弾" }
            , attribution: [], note: []
            , WT: 1, CT: 0, dur: Infinity
        }
    }
    , {
        id: null, buffer: "秋祭の大魔女デスピア", awaken: "通常"
        , value: 11, disabled: null, req: "skill"
        , target: [ { attribution: [ "ハロウィン" ] } ]
        , tooltip: "[スキル・全体] 属性：ハロウィンの攻撃硬直6f化"
        , unitInfo: {
            unitName: "秋祭の大魔女デスピア", deployType: "遠距離型", rarity: "黒"
            , unitClass: { selected: "ソーサレス" }
            , attribution: [ "人間", "魔術師", "ハロウィン" ]
            , note: [ "女性" ]
            , WT: 1, CT: 40, dur: 30
        }
    }
    , {
        id: null, buffer: "聖夜の炸裂海賊デューオ", awaken: "通常"
        , value: 16, disabled: null, req: "skill"
        , target: [ { attribution: [ "クリスマス" ] } ]
        , tooltip: "[スキル・全体] 属性：クリスマスの攻撃硬直8f化"
        , unitInfo: {
            unitName: "聖夜の炸裂海賊デューオ", deployType: "遠距離型", rarity: "黒"
            , unitClass: { selected: "パイレーツ系" }
            , attribution: [ "人間", "クリスマス" ]
            , note: [ "女性" ]
            , WT: 1, CT: 70, dur: Infinity
        }
    }
    , {
        id: null, buffer: "時の調停者トワ", awaken: "通常", showAwaken: true
        , value: 11, disabled: null, req: "skill"
        , target: [
            { unitClass: [
                "ウィッチ系", "ちびウィッチ", "ちびアークウィッチ", "ウィッチ", "アークウィッチ", "ホーリーウィッチ", "ソーサレス"
                , "クロノウィッチ系", "ちびクロノウィッチ", "ちびアーククロノウィッチ", "クロノウィッチ", "アーククロノウィッチ", "クロノマスター", "クロノマンサー"
            ] }
        ]
        , compound: { haste: [ { buffer: "時の調停者トワ" } ] }
        , tooltip: "\
            [スキル・全体] クラス：ウィッチ系・<br>\
            　　　　　　　　　　　 クロノウィッチ系の攻撃硬直6f化\
        "
        , unitInfo: {
            unitName: "時の調停者トワ", deployType: "遠距離型", rarity: "黒"
            , unitClass: { selected: "クロノマスター" }
            , attribution: [ "人間", "魔術師" ]
            , note: [ "女性" ]
            , WT: 1, CT: 30, dur: 25
        }
    }
    , {
        id: null, buffer: "時の調停者トワ", awaken: "覚醒", showAwaken: true
        , value: 11, disabled: null, req: "skill"
        , target: [ { attribution: [ "魔術師" ] } ]
        , compound: { haste: [ { buffer: "時の調停者トワ" } ] }
        , tooltip: "\
            [スキル・射程内] 属性：魔術師の攻撃硬直6f化\
        "
        , unitInfo: {
            unitName: "時の調停者トワ", deployType: "遠距離型", rarity: "黒"
            , unitClass: { selected: "クロノマスター" }
            , attribution: [ "人間", "魔術師" ]
            , note: [ "女性" ]
            , WT: 5, CT: 45, dur: 25
        }
    }
    , {
        id: null, buffer: "胡喜美", awaken: "通常"
        , value: 21, disabled: null, req: "skill"
        , target: [ { attribution: [ "仙人" ] } ]
        , tooltip: "[スキル・全体] 属性：仙人の攻撃硬直11f化"
        , unitInfo: {
            unitName: "胡喜美", deployType: "近接型", rarity: "白"
            , unitClass: { selected: "邪仙系" }
            , attribution: [ "華の国", "仙人" ]
            , note: [ "女性" ]
            , WT: 20, CT: 40, dur: 25
        }
    }
    , {
        id: null, buffer: "婚礼つむじ風金糸雀姉妹", awaken: "通常"
        , value: 11, disabled: null, req: "skill"
        , target: [ { unitClass: [ "かまいたち系", "ちびかまいたち", "ちび疾風かまいたち", "かまいたち", "疾風かまいたち", "風刃かまいたち", "夜風闇刃かまいたち" ] } ]
        , tooltip: "[スキル・範囲] クラス：かまいたち系の攻撃硬直6f化"
        , unitInfo: {
            unitName: "婚礼つむじ風金糸雀姉妹", deployType: "近接型", rarity: "白"
            , unitClass: { selected: "かまいたち系" }
            , attribution: [ "東の国", "妖怪", "ジューンブライド" ]
            , note: [ "女性" ]
            , WT: 20, CT: 40, dur: 25
        }
    }
    , {
        id: null, buffer: "弓兵の湯浴みソーマ", awaken: "覚醒"
        , value: 4, disabled: null, req: "skill"
        , target: [
            { unitClass: [ "アーチャー系", "下級アーチャー", "ちびアーチャー", "ちびアルテミス", "アーチャー", "アルテミス", "セレーネ", "ラピッドシューター" ] }
        ]
        , tooltip: "[スキル・射程内] クラス：アーチャー系の攻撃硬直2f化"
        , unitInfo: {
            unitName: "弓兵の湯浴みソーマ", deployType: "遠距離型", rarity: "白"
            , unitClass: { selected: "ラピッドシューター" }
            , attribution: [ "人間", "弓兵", "温泉" ]
            , note: [ "女性" ]
            , WT: 27.5, CT: 55, dur: 18
        }
    }
    , {
        id: null, buffer: "疾風軍師の祝福祭シナト", awaken: "覚醒"
        , value: 2, disabled: null, req: "skill"
        , compound: { rCTdepType: { "近接型": 45, "遠距離型": 35, "遠近距離型": 35 } }
        , tooltip: "[スキル・射程内] 全味方の攻撃硬直1f化"
        , unitInfo: {
            unitName: "疾風軍師の祝福祭シナト", deployType: "遠距離型", rarity: "白"
            , unitClass: { selected: "バトルストラテジスト" }
            , attribution: [ "東の国", "人間", "エッグハント" ]
            , note: [ "女性" ]
            , WT: 80, CT: 160, dur: 10
        }
    }
    , {
        id: null, buffer: "お祭り夕涼みココロ", awaken: "覚醒"
        , value: 11, disabled: null, req: "skill"
        , target: [ { deployType: [ "遠距離型" ] , attribution: [ "サマー" ] } ]
        , tooltip: "[スキル・射程内] 属性：サマーの遠距離ユニットの攻撃硬直6f化"
        , unitInfo: {
            unitName: "お祭り夕涼みココロ", deployType: "遠距離型", rarity: "白"
            , unitClass: { selected: "クロノマスター" }
            , attribution: [ "人間", "魔術師", "サマー" ]
            , note: [ "女性" ]
            , WT: 20, CT: 40, dur: 15
        }
    }
    , {
        id: null, buffer: "付与魔術師ハーニィ", awaken: "通常"
        , value: 11, disabled: null, req: "skill"
        , target: [ { deployType: [ "近接型" ] } ]
        , tooltip: "[スキル・射程内] 近接ユニットの攻撃硬直6f化"
        , unitInfo: {
            unitName: "付与魔術師ハーニィ", deployType: "遠距離型", rarity: "白"
            , unitClass: { selected: "グランドエンチャンター" }
            , attribution: [ "砂漠の国", "人間", "魔術師" ]
            , note: [ "女性" ]
            , WT: 37.5, CT: 75, dur: 12
        }
    }
];

// 特攻付与リスト
lists.buff.giveDmgMul = {};
lists.buff.giveDmgMul.jap = "特攻付与";
lists.buff.giveDmgMul.list = [
    {
        id: null, buffer: "超古代発明家アルレット", awaken: "未", showAwaken: true
        , value: 15, disabled: null, req: "team"
        , compound: { rWT: [ { buffer: "発明家" } ] }
        , tooltip: "\
            [編成] 飛行敵に対して<br>\
            　　　 全味方の攻撃力が15%上昇\
        "
    }
    , {
        id: null, buffer: "超古代発明家アルレット", awaken: "覚醒", showAwaken: true
        , value: 20, disabled: null, req: "team"
        , compound: { rWT: [ { buffer: "大発明家" } ] }
        , tooltip: "\
            [編成] 飛行敵に対して<br>\
            　　　 全味方の攻撃力が20%上昇\
        "
    }
    , {
        id: null, buffer: "狩人浴衣ヴィクトリア", awaken: "覚醒"
        , value: 8, disabled: null, req: "team"
        , tooltip: "\
            [編成] アンデッド・魔法敵に対して<br>\
            　　　 全味方の攻撃力が8%上昇\
        "
    }
    , {
        id: null, buffer: "奇想の発明家タバサ", awaken: "未", showAwaken: true
        , value: 10, disabled: null, req: "team"
        , compound: { rWT: [ { buffer: "発明家" } ] }
        , tooltip: "\
            [編成] 神獣・魔獣・妖獣・獣・獣人・水棲に対して<br>\
            　　　 全味方の攻撃力が10%上昇\
        "
    }
    , {
        id: null, buffer: "奇想の発明家タバサ", awaken: "覚醒", showAwaken: true
        , value: 15, disabled: null, req: "team"
        , compound: { rWT: [ { buffer: "超発明王" } ] }
        , tooltip: "\
            [編成] 神獣・魔獣・妖獣・獣・獣人・水棲に対して<br>\
            　　　 全味方の攻撃力が15%上昇\
        "
    }
    , {
        id: null, buffer: "帝国発明家ヘンドリカ", awaken: "未", showAwaken: true
        , value: 10, disabled: null, req: "team"
        , compound: { rWT: [ { buffer: "発明家" } ] }
        , tooltip: "[編成] 天使に対して全味方の攻撃力が10%上昇"
    }
    , {
        id: null, buffer: "帝国発明家ヘンドリカ", awaken: "覚醒", showAwaken: true
        , value: 15, disabled: null, req: "team"
        , compound: { rWT: [ { buffer: "超発明王" } ] }
        , tooltip: "\
            [編成] 天使に対して全味方の攻撃力が15%上昇<br>\
            　　　 竜族に対して属性：白の帝国の攻撃力が15%上昇<br>\
            　　　 (敵の属性は特に指定してないので、2行目は特に意味ない)\
        "
    }
    , {
        id: null, buffer: "天性の発明家マギー", awaken: "未", showAwaken: true
        , value: 10, disabled: null, req: "team"
        , compound: { rWT: [ { buffer: "発明家" } ] }
        , tooltip: "\
            [編成] アーマー・ゴーレムに対して<br>\
            　　　 全味方の攻撃力が10%上昇\
        "
    }
    , {
        id: null, buffer: "天性の発明家マギー", awaken: "覚醒", showAwaken: true
        , value: 15, disabled: null, req: "team"
        , compound: { rWT: [ { buffer: "大機関博士" } ] }
        , tooltip: "\
            [編成] アーマー・ゴーレムに対して<br>\
            　　　 全味方の攻撃力が15%上昇\
        "
    }
    , {
        id: null, buffer: "魔電流の発明家レクテ", awaken: "未", showAwaken: true
        , value: 10, disabled: null, req: "team"
        , compound: { rWT: [ { buffer: "発明家" } ] }
        , tooltip: "\
            [編成] デーモンに対して<br>\
            　　　 全味方の攻撃力が10%上昇\
        "
    }
    , {
        id: null, buffer: "魔電流の発明家レクテ", awaken: "覚醒", showAwaken: true
        , value: 15, disabled: null, req: "team"
        , compound: { rWT: [ { buffer: "大機関博士" } ] }
        , tooltip: "\
            [編成] デーモンに対して<br>\
            　　　 全味方の攻撃力が15%上昇\
        "
    }
    , {
        id: null, buffer: "氷竜魔術士カラザ", awaken: "覚醒"
        , value: 15, disabled: null, req: "team"
        , target: [ { attribution: [ "ドラゴン" ] } ]
        , compound: { haste: [ { buffer: "エルダードラゴンメイガス" } ] }
        , tooltip: "\
            [編成] 地上敵に対して<br>\
            　　　 属性：ドラゴンの攻撃力が15%上昇\
        "
    }
];

// 被ダメ増加リスト
lists.buff.takenDmg = {};
lists.buff.takenDmg.jap = "被ダメ増加";
lists.buff.takenDmg.list = [
    {
        id: null, buffer: "カースウィスパラー", isClass: true, awaken: "覚醒"
        , value: 20, disabled: null, req: "deploy"
        , compound: { takenDmg: [ { buffer: "災禍を律す者モルフェサ" } ] }
        , tooltip: "[射程内] 被ダメージが20%上昇"
    }
    , {
        id: null, buffer: "災禍を律す者モルフェサ", rarity: "黒", awaken: "通常", showAwaken: true
        , value: 30, disabled: null, req: "skill"
        , compound: { takenDmg: [ { buffer: "カースウィスパラー" } ] }
        , tooltip: "[スキル・射程内] 被ダメージが30%上昇"
        , unitInfo: {
            unitName: "災禍を律す者モルフェサ", deployType: "遠距離型", rarity: "黒"
            , unitClass: { selected: "カースウィスパラー" }
            , attribution: [ "人間", "魔術師", "英傑" ]
            , note: [ "女性" ]
            , WT: 1, CT: 80, dur: Infinity
        }
    }
    , {
        id: null, buffer: "災禍を律す者モルフェサ", rarity: "黒", awaken: "覚醒", showAwaken: true
        , value: 60, disabled: null, req: "skill"
        , compound: { takenDmg: [ { buffer: "カースウィスパラー" } ] }
        , tooltip: "[スキル・射程内] 被ダメージが60%上昇"
        , unitInfo: {
            unitName: "災禍を律す者モルフェサ", deployType: "遠距離型", rarity: "黒"
            , unitClass: { selected: "カースウィスパラー" }
            , attribution: [ "人間", "魔術師", "英傑" ]
            , note: [ "女性" ]
            , WT: 5, CT: 45, dur: 40
        }
    }
    , {
        id: null, buffer: "災禍を律す者モルフェサ", rarity: "白", awaken: "通常", showAwaken: true
        , value: 30, disabled: null, req: "skill"
        , compound: { takenDmg: [ { buffer: "カースウィスパラー" } ] }
        , tooltip: "[スキル・射程内] 被ダメージが30%上昇"
        , unitInfo: {
            unitName: "災禍を律す者モルフェサ", deployType: "遠距離型", rarity: "白"
            , unitClass: { selected: "カースウィスパラー" }
            , attribution: [ "人間", "魔術師", "英傑" ]
            , note: [ "女性" ]
            , WT: 30, CT: 48, dur: 40
        }
    }
    , {
        id: null, buffer: "災禍を律す者モルフェサ", rarity: "白", awaken: "覚醒", showAwaken: true
        , value: 40, disabled: null, req: "skill"
        , compound: { takenDmg: [ { buffer: "カースウィスパラー" } ] }
        , tooltip: "[スキル・射程内] 被ダメージが40%上昇"
        , unitInfo: {
            unitName: "災禍を律す者モルフェサ", deployType: "遠距離型", rarity: "白"
            , unitClass: { selected: "カースウィスパラー" }
            , attribution: [ "人間", "魔術師", "英傑" ]
            , note: [ "女性" ]
            , WT: 27.5, CT: 44, dur: 20
        }
    }
    , {
        id: null, buffer: "乙女の守護者アデライド", awaken: "未", showAwaken: true
        , value: 5, disabled: null, req: "deploy"
        , tooltip: "[射程内] 被ダメージが5%上昇"
    }
    , {
        id: null, buffer: "乙女の守護者アデライド", awaken: "覚醒", showAwaken: true
        , value: 10, disabled: null, req: "deploy"
        , compound: { takenDmg: [ { buffer: "乙女の守護者アデライド", req: "skill" } ] }
        , tooltip: "[射程内] 被ダメージが5%上昇"
    }
    , {
        id: null, buffer: "乙女の守護者アデライド", awaken: "覚醒"
        , value: 50, disabled: null, req: "skill"
        , compound: { takenDmg: [ { buffer: "乙女の守護者アデライド", awaken: "覚醒", req: "deploy" } ] }
        , tooltip: "[スキル・射程内] 被ダメージが50%上昇"
        , unitInfo: {
            unitName: "乙女の守護者アデライド", deployType: "近接型", rarity: "黒"
            , unitClass: { selected: "グランドナイト" }
            , attribution: [ "人間", "重装", "バレンタイン" ]
            , note: [ "女性", "状態異常無効" ]
            , WT: 5, CT: 45, dur: 15
        }
    }
    , {
        id: null, buffer: "魔神の残滓ウェパル", awaken: "未", showAwaken: true
        , value: 7, disabled: null, req: "deploy"
        , tooltip: "[全体] 被ダメージが7%上昇"
    }
    , {
        id: null, buffer: "魔神の残滓ウェパル", awaken: "覚醒", showAwaken: true
        , value: 10, disabled: null, req: "deploy"
        , compound: { takenDmg: [ { buffer: "魔神の残滓ウェパル", req: "skill" } ] }
        , tooltip: "[全体] 被ダメージが10%上昇"
    }
    , {
        id: null, buffer: "魔神の残滓ウェパル", awaken: "覚醒"
        , value: 30, disabled: null, req: "skill"
        , compound: { takenDmg: [ { buffer: "魔神の残滓ウェパル", awaken: "覚醒", req: "deploy" } ] }
        , tooltip: "[スキル・全体] 被ダメージが30%上昇"
        , unitInfo: {
            unitName: "魔神の残滓ウェパル", deployType: "近接型", rarity: "黒"
            , unitClass: { selected: "デモンリドゥ" }
            , attribution: [ "デーモン", "魔界", "深海" ]
            , note: [ "女性", "状態異常無効", "魔界適応", "深海適応" ]
            , WT: 5, CT: 60, dur: 15
        }
    }
    , {
        id: null, buffer: "激励の踊り子シャルキー", awaken: "覚醒"
        , value: 10, disabled: null, req: "skill"
        , tooltip: "[スキル・射程内] 被ダメージが10%上昇"
        , unitInfo: {
            unitName: "激励の踊り子シャルキー", deployType: "遠距離型", rarity: "黒"
            , unitClass: { selected: "ダンサー" }
            , attribution: [ "人間", "魔界" ]
            , note: [ "女性", "状態異常無効", "魔界適応" ]
            , WT: 5, CT: 50, dur: 50
        }
    }
    , {
        id: null, buffer: "叡智の管理者プリニース", awaken: "未", showAwaken: true
        , value: 10, disabled: null, req: "deploy"
        , tooltip: "[射程内] 被ダメージが10%上昇"
    }
    , {
        id: null, buffer: "叡智の管理者プリニース", awaken: "覚醒", showAwaken: true
        , value: 15, disabled: null, req: "deploy"
        , tooltip: "[射程内] 被ダメージが15%上昇"
    }
];

// 鈍化(マップ)軽減リスト
lists.buff.redMapEff = {};
lists.buff.redMapEff.jap = "鈍化(マップ)軽減";
lists.buff.redMapEff.list = [
    {
        id: null, buffer: "制海の銃", awaken: "-"
        , map: "深海", value: 100, disabled: null, req: "skill"
        , target: [
            { unitClass: [
                "セーラー系", "ちびセーラー", "ちびセーラーエリート", "セーラー", "セーラーエリート", "アドミラル", "ドレッドノート"
                , "パイレーツ系", "ちびパイレーツ", "ちびキングオブパイレーツ", "下級パイレーツ", "パイレーツ", "キングオブパイレーツ", "ネプチューン", "エル・ドラゴ"
            ] }
        ]
        , tooltip: "[スキル・全体] クラス：セーラー系・パイレーツ系の深海の影響を100%軽減"
        , unitInfo: {
            unitName: "制海の銃", deployType: "近接型", rarity: "-"
            , unitClass: { selected: "制海の銃" }
            , attribution: [], note: []
            , WT: 1, CT: 0, dur: Infinity
        }
    }
    , {
        id: null, buffer: "王子【海鎮】", awaken: null
        , map: "深海", value: 50, disabled: null, req: "deploy"
        , tooltip: "[配置] 全味方の深海の影響を50%軽減"
    }
    , {
        id: null, buffer: "大海を征く者イヴリール", rarity: "黒", awaken: "通常"
        , map: "深海", value: 70, disabled: null, req: "skill"
        , tooltip: "[スキル・全体] 全味方の深海の影響を70%軽減"
        , unitInfo: {
            unitName: "大海を征く者イヴリール", deployType: "遠距離型", rarity: "黒"
            , unitClass: { selected: "未踏海域の覇者系" }
            , attribution: [ "人間", "深海", "英傑" ]
            , note: [ "女性", "深海適応" ]
            , WT: 1, CT: 80, dur: Infinity
        }
    }
    , {
        id: null, buffer: "大海神の娘 乙姫", awaken: "通常"
        , map: "深海", value: 100, disabled: null, req: "skill"
        , tooltip: "[スキル・全体] 全味方の深海の影響を100%軽減"
        , unitInfo: {
            unitName: "大海神の娘 乙姫", deployType: "近接型", rarity: "黒"
            , unitClass: { selected: "儀仗軍神系" }
            , attribution: [ "神" ]
            , note: [ "女性", "深海適応" ]
            , WT: 1, CT: 60, dur: 60
        }
    }
    , {
        id: null, buffer: "紫鱗の海巫女ハルフゥ", awaken: "覚醒"
        , map: "深海", value: 30, disabled: null, req: "team"
        , tooltip: "[編成] 全味方の深海の影響を30%軽減"
    }
    , {
        id: null, buffer: "渦潮の亜神メシナ", awaken: "未", showAwaken: true
        , map: "深海", value: 30, disabled: null, req: "deploy"
        , tooltip: "[配置] 全味方の深海の影響を30%軽減"
    }
    , {
        id: null, buffer: "渦潮の亜神メシナ", awaken: "覚醒", showAwaken: true
        , map: "深海", value: 50, disabled: null, req: "deploy"
        , tooltip: "[配置] 全味方の深海の影響を50%軽減"
    }
];