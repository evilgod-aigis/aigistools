// 全体スキル
buff.skill_gl = [
    {
        name: "王子【英雄王】", cl: "王子", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2", other: "" }
        , note: "スキルオート"
    }
    , {
        name: "王子【祝賀】", cl: "王子", skill: "通常"
        , stats: { hp: "+20%", atk: "×1.2", def: "×1.2", mr: "×1.2" }
    }
    , {
        name: "王子【正装】", cl: "王子", skill: "通常"
        , stats: { atk: [ "×1.12", "～1.2" ], def: [ "×1.12", "～1.2" ] }
        , note: "倍率+0.02/配置数"
    }
    , {
        name: "王子【双鴉】", cl: "王子", skill: "通常(奇)"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "王子【幼少】", cl: "王子", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
    }
    , {
        name: "トラム", rarity: "黒", cl: "銀腕の神話", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "150/秒", "75/15f" ] }
        , note: "永続スキル"
    }
    , {
        name: "トラム", rarity: "白", cl: "銀腕の神話", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "200/秒", "100/15f" ] }
    }
    , {
        name: "ラーワル/水着", rarity: "白", cl: "魔導生命体", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "200/秒", "?/?f" ] }
    }
    , {
        name: "アヤカシの王", cl: "アヤカシの王", AW: "覚1", skill: [ "通常", "覚醒" ]
        , stats: { atk: "×1.15" }
    }
    , {
        name: "山ン本五郎左衛門", rarity: "黒", cl: "アヤカシの王", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , note: "隠密付与"
    }
    , {
        name: "イルドナ", rarity: "黒", cl: "暁光の神話", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "イルドナ", rarity: "白", cl: "暁光の神話", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "ヴィディア", rarity: "黒", cl: "王国軍初代副司令", AW: "覚醒", skill: "覚醒(2)"
        , stats: { atk: "×1.3", def: "×1.3" }
    }
    , {
        name: "マギステルミリトゥム", cl: "マギステルミリトゥム", AW: "覚1", skill: [ "通常", "覚醒" ]
        , stats: { hp: "+30%" }
    }
    , {
        name: "伏綺", rarity: "黒", cl: "開天の神話", AW: "覚醒", skill: "通常"
        , stats: { abn: "-100%", draw: "(○)", redep: "30秒" }
    }
    , {
        name: "伏綺", rarity: "黒", cl: "開天の神話", AW: "覚醒", skill: "覚醒"
        , stats: { draw: "(○)", redep: "30秒" }
    }
    , {
        name: "伏綺", rarity: "白", cl: "開天の神話", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: { draw: "(○)", redep: "60秒" }
    }
    , {
        name: "イムラウ", rarity: "黒", cl: "ピューティアー", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "1000/秒", "2000/60f" ] }
    }
    , {
        name: "イムラウ", rarity: "黒", cl: "ピューティアー", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "300/秒", "1500/150f" ] }
        , note: "永続スキル"
    }
    , {
        name: "イムラウ/お正月", rarity: "白", cl: "ピューティアー", AW: "覚醒", skill: "通常"
        , stats: { nul: "40%" }
        , note: "永続スキル"
    }
    , {
        name: "イムラウ/お正月", rarity: "白", cl: "ピューティアー", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "150/秒", "75/15f" ] }
        , note: "永続スキル"
    }
    , {
        name: "イヴリール", rarity: "黒", cl: "未踏海域の覇者", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , note: [ "深海-70%", "永続スキル" ]
    }
    , {
        name: "イヴリール/水着", rarity: "白", cl: "未踏海域の覇者", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , note: "深海-80%"
    }
    , {
        name: "フィネス", rarity: "黒", cl: "盤上の支配者", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.2", rege: [ "80/秒", "40/15f" ], other: "" }
        , note: [ "スキルオート", "永続スキル(手動中断可能)" ]
    }
    , {
        name: "フィネス", rarity: "黒", cl: "盤上の支配者", AW: "覚醒", skill: "覚醒(3n-2)"
        , stats: { atk: "×1.3", ct: "-60%" }
        , note: "永続スキル(手動中断可能)"
    }
    , {
        name: "フィネス", rarity: "黒", cl: "盤上の支配者", AW: "覚醒", skill: "覚醒(3n-1)"
        , stats: { range: "×1.2", ct: "-60%" }
        , note: "永続スキル(手動中断可能)"
    }
    , {
        name: "フィネス", rarity: "黒", cl: "盤上の支配者", AW: "覚醒", skill: "覚醒(3n)"
        , stats: { hp: "+30%", ct: "-60%" }
        , note: "永続スキル(手動中断可能)"
    }
    , {
        name: "フィネス", rarity: "白", cl: "盤上の支配者", AW: "覚醒", skill: "通常"
        , stats: { def: "×1.2", other: "" }
        , note: [ "スキルオート", "永続スキル(手動中断可能)" ]
    }
    , {
        name: "フィネス", rarity: "白", cl: "盤上の支配者", AW: "覚醒", skill: "覚醒(偶)"
        , stats: { atk: "×1.2", def: "×1.2" }
        , note: "永続スキル(手動中断可能)"
    }
    , {
        name: "ガレア", rarity: "黒", cl: "ソルジャー", AW: "未", skill: "通常"
        , stats: { atk: "×1.2" }
        , note: "分類未確認"
    }
    , {
        name: "ガレア", rarity: "黒", cl: "ソルジャー", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.2" }
        , note: "分類未確認"
    }
    , {
        name: "ケイティ/学園", rarity: "白", cl: "ソルジャー", AW: "未", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
    }
    , {
        name: "ケイティ/学園", rarity: "白", cl: "ソルジャー", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
    }
    , {
        name: "ケイティ/私服", rarity: "白", cl: "ソルジャー", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "50/秒", "25/15f" ] }
    }
    , {
        name: "ちび一般兵A", rarity: "ちび", cl: "ソルジャー", skill: "通常"
        , stats: { draw: "○" }
    }
    , {
        name: "ちびガレア", rarity: "ちび", cl: "ソルジャー", skill: "通常"
        , stats: { atk: "×1.2" }
        , note: "分類未確認"
    }
    , {
        name: "エレイン/水着", rarity: "金", cl: "ワルキューレ", AW: "未", skill: "通常"
        , stats: { hp: "+20%" }
    }
    , {
        name: "エレイン/水着", rarity: "金", cl: "ワルキューレ", AW: "覚醒", skill: "通常"
        , stats: { hp: "+20%" }
    }
    , {
        name: "エレイン/水着", rarity: "金", cl: "ワルキューレ", AW: "覚醒", skill: "覚醒"
        , stats: { hp: "+20%" }
    }
    , {
        name: "トレシア", rarity: "白", cl: "プリンセス", AW: "覚醒", skill: "覚醒"
        , stats: { eva: "40%" }
    }
    , {
        name: "ヴルム", rarity: "黒", cl: "中級竜兵", AW: "未", skill: "通常"
        , stats: { nul: "100%" }
    }
    , {
        name: "ヴルム", rarity: "黒", cl: "中級竜兵", AW: "覚醒", skill: "通常"
        , stats: { nul: "100%" }
    }
    , {
        name: "ヴルム", rarity: "黒", cl: "中級竜兵", AW: "覚醒", skill: "覚醒"
        , stats: { nul: "100%" }
    }
    , {
        name: "ヴルム/水着", rarity: "黒", cl: "中級竜兵", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.2" }
        , target: [
            { not: [ "home" ], home: [ "白の帝国" ] }
            , { not: [ "season" ], season: [ "サマー" ] }
        ]
    }
    , {
        name: "イグニス", rarity: "白", cl: "中級竜兵", AW: "未", skill: "通常"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "イグニス", rarity: "白", cl: "中級竜兵", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "イグニス", rarity: "白", cl: "中級竜兵", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "ちびヴルム", rarity: "ちび", cl: "中級竜兵", skill: "通常"
        , stats: { nul: "100%" }
    }
    , {
        name: "エルドラ/お正月", rarity: "黒", cl: "ドラゴンプリンセス", AW: "未", skill: "通常"
        , stats: { nul: "25%" }
        , note: "永続スキル"
    }
    , {
        name: "エルドラ/お正月", rarity: "黒", cl: "ドラゴンプリンセス", AW: "覚醒", skill: "通常"
        , stats: { nul: "25%" }
        , note: "永続スキル"
    }
    , {
        name: "チヨメ/温泉", rarity: "黒", cl: "忍者", AW: "未", skill: "通常"
        , stats: { rege: [ "150/秒", "75/15f" ] }
    }
    , {
        name: "チヨメ/温泉", rarity: "黒", cl: "忍者", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "150/秒", "75/15f" ] }
    }
    , {
        name: "コーネリア", rarity: "黒", cl: "ダークファイター", AW: "覚醒", skill: "覚醒"
        , stats: { nul: "20%" }
    }
    , {
        name: "アリス/バレンタイン", rarity: "黒", cl: "モンク", AW: "未", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
        , note: "永続スキル"
    }
    , {
        name: "アリス/バレンタイン", rarity: "黒", cl: "モンク", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
        , note: "永続スキル"
    }
    , {
        name: "マツリ/お正月", rarity: "黒", cl: "前衛戦術家", AW: "覚醒", skill: "覚醒"
        , stats: { hp: "+10%", atk: "×1.1", def: "×1.1", other: "" }
        , note: [ "スキルオート", "永続スキル" ]
    }
    , {
        name: "レオラ/新装", rarity: "黒", cl: "前衛戦術家", AW: "未", skill: "通常"
        , stats: { atk: "×1.2", range: "×1.2", other: "" }
        , note: [ "スキルオート", "永続スキル", "分類未確認" ]
    }
    , {
        name: "レオラ/新装", rarity: "黒", cl: "前衛戦術家", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.2", range: "×1.2", other: "" }
        , note: [ "スキルオート", "永続スキル", "分類未確認" ]
    }
    , {
        name: "ウズメ", rarity: "白", cl: "前衛戦術家", AW: "未", skill: "通常"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "ウズメ", rarity: "白", cl: "前衛戦術家", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "ウズメ", rarity: "白", cl: "前衛戦術家", AW: "覚醒", skill: "覚醒(1)"
        , stats: { atk: "×1.25" }
    }
    , {
        name: "ウズメ", rarity: "白", cl: "前衛戦術家", AW: "覚醒", skill: "覚醒(2)"
        , stats: { atk: "×1.3" }
    }
    , {
        name: "ウズメ", rarity: "白", cl: "前衛戦術家", AW: "覚醒", skill: "覚醒(3～)"
        , stats: { atk: "×1.35" }
    }
    , {
        name: "シュウカ", rarity: "白", cl: "前衛戦術家", AW: "未", skill: "通常"
        , stats: { atk: "×1.1" }
    }
    , {
        name: "シュウカ", rarity: "白", cl: "前衛戦術家", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.1" }
    }
    , {
        name: "シュウカ", rarity: "白", cl: "前衛戦術家", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.15" }
    }
    , {
        name: "レオラ", rarity: "白", cl: "前衛戦術家", AW: "未", skill: "通常"
        , stats: { atk: "×1.15", def: "×1.15", other: "" }
        , note: [ "スキルオート", "永続スキル" ]
    }
    , {
        name: "レオラ", rarity: "白", cl: "前衛戦術家", AW: "覚醒", skill: [ "通常", "覚醒(2～)" ]
        , stats: { atk: "×1.15", def: "×1.15", other: "" }
        , note: [ "スキルオート", "永続スキル" ]
    }
    , {
        name: "レオラ", rarity: "白", cl: "前衛戦術家", AW: "覚醒", skill: "覚醒(1)"
        , stats: { atk: "×1.25", def: "×1.25" }
    }
    , {
        name: "ルヴェア", rarity: "白", cl: "前衛戦術家", AW: "未", skill: "通常"
        , stats: { atk: "×1.15" }
        , note: "永続スキル"
    }
    , {
        name: "ルヴェア", rarity: "白", cl: "前衛戦術家", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.15" }
        , note: "永続スキル"
    }
    , {
        name: "レオラ/水着", rarity: "白", cl: "前衛戦術家", AW: "未", skill: "通常"
        , stats: { other: "" }
        , note: [ "スキルオート", "永続スキル" ]
    }
    , {
        name: "レオラ/水着", rarity: "白", cl: "前衛戦術家", AW: "覚醒", skill: [ "通常", "覚醒(2～)" ]
        , stats: { other: "" }
        , note: [ "スキルオート", "永続スキル" ]
    }
    , {
        name: "ちびルヴェア", rarity: "ちび", cl: "前衛戦術家", skill: "通常"
        , stats: { atk: "×1.15" }
        , note: "永続スキル"
    }
    , {
        name: "タラニア/バニー", rarity: "白", cl: "魔法剣士", AW: "未", skill: "通常"
        , stats: { nul: "50%" }
    }
    , {
        name: "タラニア/バニー", rarity: "白", cl: "魔法剣士", AW: "覚醒", skill: "通常"
        , stats: { nul: "50%" }
    }
    , {
        name: "エクス/バニー", rarity: "黒", cl: "神官戦士", AW: "未", skill: "通常"
        , stats: { nul: "50%" }
    }
    , {
        name: "エクス/バニー", rarity: "黒", cl: "神官戦士", AW: "覚醒", skill: "通常"
        , stats: { nul: "50%" }
    }
    , {
        name: "ライチ/学園", rarity: "白", cl: "メイジアーマー", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "120/秒", "10/2.5f" ] }
    }
    , {
        name: "サラサ", rarity: "白", cl: "ボウライダー", AW: "未", skill: "通常"
        , stats: { nul: "30%" }
    }
    , {
        name: "サラサ", rarity: "白", cl: "ボウライダー", AW: "覚醒", skill: "通常"
        , stats: { nul: "30%" }
    }
    , {
        name: "サラサ", rarity: "白", cl: "ボウライダー", AW: "覚醒", skill: "覚醒"
        , stats: { nul: "50%" }
    }
    , {
        name: "セーラ/クリスマス", rarity: "黒", cl: "メイド", AW: "未", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
    }
    , {
        name: "セーラ/クリスマス", rarity: "黒", cl: "メイド", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "エマ/温泉", rarity: "黒", cl: "ヴァンパイアロード", AW: "覚醒", skill: "覚醒"
        , stats: { hp: "+40%" }
    }
    , {
        name: "プロエ", rarity: "黒", cl: "戦の聖霊", AW: "未", skill: "通常"
        , stats: { atk: "×1.1" }
    }
    , {
        name: "プロエ", rarity: "黒", cl: "戦の聖霊", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.1" }
    }
    , {
        name: "ちびプロエ", rarity: "ちび", cl: "戦の聖霊", skill: "通常"
        , stats: { atk: "×1.1" }
    }
    , {
        name: "サギリ", rarity: "白", cl: "ぬらりひょん", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , note: "隠密付与"
    }
    , {
        name: "鬼刃姫/お正月", rarity: "黒", cl: "鬼", AW: "未", skill: "通常"
        , stats: { hp: "+20%" }
        , note: "永続スキル"
    }
    , {
        name: "鬼刃姫/お正月", rarity: "黒", cl: "鬼", AW: "覚醒", skill: "通常"
        , stats: { hp: "+20%" }
        , note: "永続スキル"
    }
    , {
        name: "鬼刃姫/お正月", rarity: "黒", cl: "鬼", AW: "覚醒", skill: "覚醒"
        , stats: { hp: "+50%" }
    }
    , {
        name: "ウルカノ", rarity: "黒", cl: "鍛冶職人", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.2", def: "×1.2" }
    }
    , {
        name: "シロガネ", rarity: "白", cl: "鬼刃忍", AW: "未", skill: "通常"
        , stats: { rege: [ "80/秒", "40/15f" ] }
    }
    , {
        name: "シロガネ", rarity: "白", cl: "鬼刃忍", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "80/秒", "40/15f" ] }
    }
    , {
        name: "アイネ", rarity: "白", cl: "ランスマスター", AW: "未", skill: "通常"
        , stats: { other: "" }
        , note: [ "スキルオート", "ボムスキル" ]
    }
    , {
        name: "アイネ", rarity: "白", cl: "ランスマスター", AW: "覚醒", skill: [ "通常", "覚醒(2～)" ]
        , stats: { other: "" }
        , note: [ "スキルオート", "ボムスキル" ]
    }
    , {
        name: "デーモンロード", cl: "デーモンロード", AW: "未", skill: "通常"
        , stats: { cost: "×0.85" }
    }
    , {
        name: "デーモンハイロード", cl: "デーモンロード", AW: "覚1", skill: [ "通常", "覚醒" ]
        , stats: { cost: "×0.8" }
        , note: "デーモンロード系"
    }
    , {
        name: "デーモンエグザルテッド", cl: "デーモンロード", AW: "覚2a", skill: [ "通常", "覚醒" ]
        , stats: { cost: "×0.75" }
        , note: "デーモンロード系"
    }
    , {
        name: "デーモンキャステラン", cl: "デーモンロード", AW: "覚2b", skill: [ "通常", "覚醒" ]
        , stats: { cost: "×0.8" }
        , note: "デーモンロード系"
    }
    , {
        name: "パヤモ", rarity: "黒", cl: "デーモンロード", AW: "未", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
    }
    , {
        name: "パヤモ", rarity: "黒", cl: "デーモンロード", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
    }
    , {
        name: "アブグルント", rarity: "白", cl: "デーモンロード", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.15" }
    }
    , {
        name: "ヤハール/花嫁", rarity: "白", cl: "デーモンロード", AW: "覚醒", skill: "覚醒"
        , stats: { nul: "20%" }
    }
    , {
        name: "オーガスタ", rarity: "黒", cl: "料理人", AW: "未", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "オーガスタ", rarity: "黒", cl: "料理人", AW: "覚醒", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "オーガスタ", rarity: "黒", cl: "料理人", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.3" }
    }
    , {
        name: "デルフィーナ", rarity: "黒", cl: "料理人", AW: "未", skill: "通常"
        , stats: { atk: "×1.2", range: "×1.2", rege: [ "80/秒", "40/15f" ] }
    }
    , {
        name: "デルフィーナ", rarity: "黒", cl: "料理人", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.2", range: "×1.2", rege: [ "80/秒", "40/15f" ] }
    }
    , {
        name: "デルフィーナ", rarity: "黒", cl: "料理人", AW: "覚醒", skill: "覚醒"
        , stats: { range: "×1.1" }
        , note: "永続スキル"
    }
    , {
        name: "ちびオーガスタ", rarity: "ちび", cl: "料理人", skill: "覚醒"
        , stats: { atk: "×1.3" }
    }
    , {
        name: "アレグロ", rarity: "銅", cl: "料理人", AW: "未", skill: "通常"
        , stats: { rege: [ "20/秒", "?/?f" ] }
    }
    , {
        name: "パルセ", rarity: "白", cl: "オートマタ", AW: "覚醒", skill: "覚醒(1)"
        , stats: { range: "×1.2" }
    }
    , {
        name: "シラヌイ", rarity: "白", cl: "ぬりかべ", AW: "未", skill: "通常"
        , stats: { def: "×1.6" }
    }
    , {
        name: "シラヌイ", rarity: "白", cl: "ぬりかべ", AW: "覚醒", skill: "通常"
        , stats: { def: "×1.6" }
    }
    , {
        name: "コウメ/水着", rarity: "白", cl: "戦巫女", AW: "未", skill: "通常"
        , stats: { nul: "30%" }
    }
    , {
        name: "コウメ/水着", rarity: "白", cl: "戦巫女", AW: "覚醒", skill: "通常"
        , stats: { nul: "30%" }
    }
    , {
        name: "乙姫", rarity: "黒", cl: "儀仗軍神", AW: "未", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3", other: "" }
        , note: "深海-100%"
    }
    , {
        name: "乙姫", rarity: "黒", cl: "儀仗軍神", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3", other: "" }
        , note: "深海-100%"
    }
    , {
        name: "太上老君", rarity: "黒", cl: "天尊", AW: "未", skill: "通常"
        , stats: { hp: "+50%" }
    }
    , {
        name: "太上老君", rarity: "黒", cl: "天尊", AW: "覚醒", skill: "通常"
        , stats: { hp: "+50%" }
    }
    , {
        name: "元始天尊/温泉", rarity: "黒", cl: "天尊", AW: "覚醒", skill: "覚醒(奇)"
        , stats: { rege: [ "150/秒", "?/?f" ] }
    }
    , {
        name: "村人", rarity: "銅", cl: "村人", skill: "通常"
        , stats: { rege: [ "10/秒", "?/?f" ] }
    }
    , {
        name: "ダイオージ", rarity: "金", cl: "試験型英雄騎", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
    }
    , {
        name: "ちびダイオージ", rarity: "ちび", cl: "試験型英雄騎", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
    }
    , {
        name: "ナナリー/私服", rarity: "黒", cl: "アーチャー", AW: "覚醒", skill: "覚醒(1)"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "イリス", rarity: "黒", cl: "ヒーラー", AW: "覚醒", skill: "覚醒"
        , stats: { hp: "+30%" }
    }
    , {
        name: "リアナ", rarity: "黒", cl: "ヒーラー", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "110/秒", "55/15f" ] }
    }
    , {
        name: "アウローラ", rarity: "黒", cl: "ヒーラー", AW: "未", skill: "通常"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "アウローラ", rarity: "黒", cl: "ヒーラー", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "ドゥマルデ", rarity: "黒", cl: "ヒーラー", AW: "未", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
    }
    , {
        name: "ドゥマルデ", rarity: "黒", cl: "ヒーラー", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
    }
    , {
        name: "イーリス/私服", rarity: "白", cl: "ヒーラー", AW: "未", skill: "通常"
        , stats: { rege: [ "40/秒", "20/15f" ] }
    }
    , {
        name: "イーリス/私服", rarity: "白", cl: "ヒーラー", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "40/秒", "20/15f" ] }
    }
    , {
        name: "イーリス/お正月", rarity: "金", cl: "ヒーラー", AW: "覚醒", skill: "覚醒"
        , stats: { hp: "+20%" }
    }
    , {
        name: "シンディ", rarity: "金", cl: "ヒーラー", AW: "未", skill: "通常"
        , stats: { rege: [ "90/秒", "45/15f" ] }
    }
    , {
        name: "シンディ", rarity: "金", cl: "ヒーラー", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "90/秒", "45/15f" ] }
    }
    , {
        name: "シンディ", rarity: "金", cl: "ヒーラー", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "90/秒", "45/15f" ] }
    }
    , {
        name: "ちびドゥマルデ", rarity: "ちび", cl: "ヒーラー", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
    }
    , {
        name: "ラウラ", rarity: "黒", cl: "ドラゴンシャーマン", AW: "未", skill: "通常(3n-2)"
        , stats: { hp: "+70%" }
    }
    , {
        name: "ラウラ", rarity: "黒", cl: "ドラゴンシャーマン", AW: "未", skill: "通常(3n-1)"
        , stats: { atk: "×1.4" }
    }
    , {
        name: "ラウラ", rarity: "黒", cl: "ドラゴンシャーマン", AW: "未", skill: "通常(3n)"
        , stats: { def: "×2.0" }
    }
    , {
        name: "ラウラ", rarity: "黒", cl: "ドラゴンシャーマン", AW: "覚醒", skill: "通常(3n-2)"
        , stats: { hp: "+70%" }
    }
    , {
        name: "ラウラ", rarity: "黒", cl: "ドラゴンシャーマン", AW: "覚醒", skill: "通常(3n-1)"
        , stats: { atk: "×1.4" }
    }
    , {
        name: "ラウラ", rarity: "黒", cl: "ドラゴンシャーマン", AW: "覚醒", skill: "通常(3n)"
        , stats: { def: "×2.0" }
    }
    , {
        name: "レオナ/新装", rarity: "黒", cl: "後衛戦術家", AW: "未", skill: "通常"
        , stats: { nul: "65%" }
    }
    , {
        name: "レオナ/新装", rarity: "黒", cl: "後衛戦術家", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: { nul: "75%" }
    }
    , {
        name: "レン", rarity: "白", cl: "後衛戦術家", AW: "未", skill: "通常"
        , stats: { def: "×1.5" }
    }
    , {
        name: "レン", rarity: "白", cl: "後衛戦術家", AW: "覚醒", skill: "通常"
        , stats: { def: "×1.5" }
    }
    , {
        name: "レン", rarity: "白", cl: "後衛戦術家", AW: "覚醒", skill: "覚醒(1)"
        , stats: { def: "×1.5" }
    }
    , {
        name: "レン", rarity: "白", cl: "後衛戦術家", AW: "覚醒", skill: "覚醒(2)"
        , stats: { def: "×1.6" }
    }
    , {
        name: "レン", rarity: "白", cl: "後衛戦術家", AW: "覚醒", skill: "覚醒(3～)"
        , stats: { def: "×1.7" }
    }
    , {
        name: "レオナ", rarity: "白", cl: "後衛戦術家", AW: "未", skill: "通常"
        , stats: { nul: "75%" }
    }
    , {
        name: "レオナ", rarity: "白", cl: "後衛戦術家", AW: "覚醒", skill: "通常"
        , stats: { nul: "75%" }
    }
    , {
        name: "レオナ", rarity: "白", cl: "後衛戦術家", AW: "覚醒", skill: "覚醒"
        , stats: { nul: "75%" }
    }
   , {
        name: "レオナ/水着", rarity: "白", cl: "後衛戦術家", AW: "未", skill: "通常"
        , stats: { nul: "50%" }
    }
   , {
        name: "レオナ/水着", rarity: "白", cl: "後衛戦術家", AW: "覚醒", skill: "通常"
        , stats: { nul: "50%" }
    }
   , {
        name: "レオナ/水着", rarity: "白", cl: "後衛戦術家", AW: "覚醒", skill: "覚醒"
        , stats: { nul: "50%" }
    }
    , {
        name: "ちびレオナ", rarity: "ちび", cl: "後衛戦術家", skill: "通常"
        , stats: { nul: "75%" }
    }
    , {
        name: "ファルネ", rarity: "黒", cl: "サモナー", AW: "未", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
    }
    , {
        name: "ファルネ", rarity: "黒", cl: "サモナー", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: { rege: [ "72/秒", "36/15f" ] }
    }
    , {
        name: "ファルネ", rarity: "黒", cl: "サモナー", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: { redep: "20秒" }
        , note: [ "死亡最後1体", "スキル発動時" ]
    }
    , {
        name: "ちびファルネ", rarity: "ちび", cl: "サモナー", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
    }
    , {
        name: "ピピン", rarity: "白", cl: "風水使い", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "ミア/バレンタイン", rarity: "白", cl: "風水使い", AW: "未", skill: "通常"
        , stats: { def: "×1.2" }
        , note: "分類未確認"
    }
    , {
        name: "ミア/バレンタイン", rarity: "白", cl: "風水使い", AW: "覚醒", skill: "通常"
        , stats: { def: "×1.2" }
        , note: "分類未確認"
    }
    , {
        name: "ハナ", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "40/秒", "20/15f" ] }
    }
    , {
        name: "アンナ/アイドル", rarity: "黒", cl: "政務官", AW: "未", skill: "通常"
        , stats: { rege: [ "20/秒", "10/15f" ] }
        , note: "永続スキル"
    }
    , {
        name: "アンナ/アイドル", rarity: "黒", cl: "政務官", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "20/秒", "10/15f" ] }
        , note: "永続スキル"
    }
    , {
        name: "アンナ/アイドル", rarity: "黒", cl: "政務官", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "30/秒", "15/15f" ] }
        , note: "永続スキル"
    }
    , {
        name: "アンナ/バレンタイン", rarity: "黒", cl: "政務官", AW: "未", skill: "通常"
        , stats: { atk: "×1.1", def: "×1.1" }
        , note: "分類未確認"
    }
    , {
        name: "アンナ/バレンタイン", rarity: "黒", cl: "政務官", AW: "覚醒", skill: [ "通常", "覚醒(2～)" ]
        , stats: { atk: "×1.1", def: "×1.1" }
        , note: "分類未確認"
    }
    , {
        name: "アンナ/クリスマス", rarity: "黒", cl: "政務官", AW: "未", skill: "通常"
        , stats: { rege: [ "80/秒", "40/15f" ] }
    }
    , {
        name: "アンナ/クリスマス", rarity: "黒", cl: "政務官", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "80/秒", "40/15f" ] }
    }
    , {
        name: "シャルル", rarity: "白", cl: "アルケミスト", AW: "覚醒", skill: "覚醒"
        , stats: { def: "×1.25" }
    }
    , {
        name: "ヘルミーネ", rarity: "白", cl: "アルケミスト", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "240/秒", "120/15f" ] }
    }
    , {
        name: "アンリ/学園", rarity: "黒", cl: "エンチャンター", AW: "未", skill: "通常"
        , stats: { rege: [ "80/秒", "40/15f" ] }
    }
    , {
        name: "アンリ/学園", rarity: "黒", cl: "エンチャンター", AW: "覚醒", skill: [ "通常", "覚醒(2～)" ]
        , stats: { rege: [ "80/秒", "40/15f" ] }
    }
    , {
        name: "ミネット", rarity: "白", cl: "マーチャント", AW: "覚醒", skill: "覚醒"
        , stats: { cost: "×0.7" }
    }
    , {
        name: "ミネット/学園", rarity: "白", cl: "マーチャント", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "120/秒", "60/15f" ] }
    }
    , {
        name: "ルフレ", rarity: "黒", cl: "エレメンタラー", AW: "未", skill: "通常"
        , stats: { rege: [ "40/秒", "20/15f" ] }
        , note: "永続スキル"
    }
    , {
        name: "ルフレ", rarity: "黒", cl: "エレメンタラー", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "40/秒", "20/15f" ] }
        , note: "永続スキル"
    }
    , {
        name: "ユキヒメ/学園", rarity: "白", cl: "エレメンタラー", AW: "覚醒", skill: "覚醒(1)"
        , stats: { atk: "×1.2", def: "×1.2", mr: "×1.2" }
    }
    , {
        name: "ユキヒメ/学園", rarity: "白", cl: "エレメンタラー", AW: "覚醒", skill: "覚醒(2)"
        , stats: { atk: "×1.3", def: "×1.3", mr: "×1.2" }
    }
    , {
        name: "ユキヒメ/学園", rarity: "白", cl: "エレメンタラー", AW: "覚醒", skill: "覚醒(3～)"
        , stats: { atk: "×1.4", def: "×1.3", mr: "×1.2" }
    }
    , {
        name: "リズリー", rarity: "黒", cl: "道化師", AW: "覚醒", skill: "覚醒(1)"
        , stats: { ct: "-60%" }
    }
    , {
        name: "リズリー/温泉", rarity: "黒", cl: "道化師", AW: "未", skill: "通常"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "リズリー/温泉", rarity: "黒", cl: "道化師", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "リズリー/温泉", rarity: "黒", cl: "道化師", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "120/秒", "60/15f" ] }
        , note: "永続スキル"
    }
    , {
        name: "リェプル", rarity: "白", cl: "道化師", AW: "未", skill: "通常(1)"
        , stats: { ct: "-50%" }
        , note: "終了時、全味方のHP-50%"
    }
    , {
        name: "リェプル", rarity: "白", cl: "道化師", AW: "覚醒", skill: "通常(1)"
        , stats: { ct: "-50%" }
        , note: "終了時、全味方のHP-50%"
    }
    , {
        name: "リェプル", rarity: "白", cl: "道化師", AW: "覚醒", skill: "覚醒(1)"
        , stats: { ct: "-50%" }
        , note: [ "発動時、全味方のHP-50%", "永続スキル" ]
    }
    , {
        name: "ルメディア", rarity: "白", cl: "ライフリンカー", AW: "未", skill: "通常"
        , stats: { hp: "+20%" }
        , note: "永続スキル"
    }
    , {
        name: "ルメディア", rarity: "白", cl: "ライフリンカー", AW: "覚醒", skill: "通常"
        , stats: { hp: "+20%" }
        , note: "永続スキル"
    }
    , {
        name: "ルメディア", rarity: "白", cl: "ライフリンカー", AW: "覚醒", skill: "覚醒"
        , stats: { hp: "+40%" }
    }
    , {
        name: "サルース", rarity: "青", cl: "ライフリンカー", AW: "未", skill: "通常"
        , stats: { rege: [ "40/秒", "20/15f" ] }
    }
    , {
        name: "サルース", rarity: "青", cl: "ライフリンカー", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "40/秒", "20/15f" ] }
    }
    , {
        name: "サルース", rarity: "青", cl: "ライフリンカー", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "40/秒", "20/15f" ] }
    }
    , {
        name: "シンフー", rarity: "黒", cl: "幻獣使い", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "80/秒", "40/15f" ] }
        , note: "永続スキル"
    }
    , {
        name: "ホリー", rarity: "白", cl: "幻獣使い", AW: "未", skill: "通常"
        , stats: { redep: "15秒" }
        , note: [ "死亡・撤退最後1体", "スキル発動時", "ボムスキル" ]
    }
    , {
        name: "ホリー", rarity: "白", cl: "幻獣使い", AW: "覚醒", skill: "通常"
        , stats: { redep: "10秒" }
        , note: [ "死亡・撤退最後1体", "スキル発動時", "ボムスキル" ]
    }
    , {
        name: "ホリー", rarity: "白", cl: "幻獣使い", AW: "覚醒", skill: "覚醒"
        , stats: { redep: "10秒" }
        , note: [ "死亡・撤退最後1体", "スキル発動時" ]
    }
    , {
        name: "エレオノーラ", rarity: "黒", cl: "ルーンアコライト", AW: "覚醒", skill: "覚醒"
        , stats: { range: "×1.1" }
        , note: "永続スキル"
    }
    , {
        name: "エレオノーラ/バニー", rarity: "黒", cl: "ルーンアコライト", AW: "覚醒", skill: "覚醒"
        , stats: { hp: "+30%", range: "×1.3" }
    }
    , {
        name: "ソニア", rarity: "白", cl: "ルーンアコライト", AW: "未", skill: "通常"
        , stats: { rege: [ "80/秒", "40/15f" ] }
    }
    , {
        name: "ソニア", rarity: "白", cl: "ルーンアコライト", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "80/秒", "40/15f" ] }
    }
    , {
        name: "ソニア", rarity: "白", cl: "ルーンアコライト", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "140/秒", "70/15f" ] }
    }
    , {
        name: "シャイーナ", rarity: "白", cl: "ルーンアコライト", AW: "未", skill: "通常(1)"
        , stats: { redep: "15秒" }
        , note: [ "死亡・撤退最後3体", "スキル発動時", "ボムスキル" ]
    }
    , {
        name: "シャイーナ", rarity: "白", cl: "ルーンアコライト", AW: "覚醒", skill: "通常(1)"
        , stats: { redep: "15秒" }
        , note: [ "死亡・撤退最後3体", "スキル発動時", "ボムスキル" ]
    }
    , {
        name: "レライエ/ハロウィン", rarity: "白", cl: "デモンシャーマン", AW: "未", skill: "通常"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "レライエ/ハロウィン", rarity: "白", cl: "デモンシャーマン", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "ピュレスカ", rarity: "黒", cl: "シービショップ", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , note: [ "深海-70%", "永続スキル" ]
    }
    , {
        name: "コマ/花嫁", rarity: "黒", cl: "狛犬", AW: "覚醒", skill: "覚醒"
        , stats: { nul: "50%" }
    }
    , {
        name: "ヘカティエ", rarity: "黒", cl: "儀式魔術師", AW: "未", skill: "通常"
        , stats: { redep: "10秒" }
        , note: [ "死亡・撤退最後1体", "スキル発動時" ]
    }
    , {
        name: "ヘカティエ", rarity: "黒", cl: "儀式魔術師", AW: "覚醒", skill: "通常"
        , stats: { redep: "10秒" }
        , note: [ "死亡・撤退最後1体", "スキル発動時" ]
    }
    , {
        name: "イルミナ", rarity: "白", cl: "儀式魔術師", AW: "未", skill: "通常"
        , stats: { draw: "○" }
    }
    , {
        name: "イルミナ", rarity: "白", cl: "儀式魔術師", AW: "覚醒", skill: "通常"
        , stats: { draw: "○" }
    }
    , {
        name: "ラタトスク/バレンタイン", rarity: "黒", cl: "ハーバリスト", AW: "未", skill: "通常"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "ラタトスク/バレンタイン", rarity: "黒", cl: "ハーバリスト", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: { rege: [ "150/秒", "75/15f" ] }
    }
    , {
        name: "プリニース/クリスマス", rarity: "黒", cl: "スカラー", AW: "未", skill: "通常"
        , stats: { nul: "50%" }
    }
    , {
        name: "プリニース/クリスマス", rarity: "黒", cl: "スカラー", AW: "覚醒", skill: "通常"
        , stats: { nul: "50%" }
    }
    , {
        name: "フェリシア", rarity: "白", cl: "スカラー", AW: "未", skill: "通常"
        , stats: { nul: "30%" }
    }
    , {
        name: "フェリシア", rarity: "白", cl: "スカラー", AW: "覚醒", skill: "通常"
        , stats: { nul: "30%" }
    }
    , {
        name: "ジェニー", rarity: "白", cl: "スカラー", AW: "未", skill: "通常"
        , stats: { def: "×1.2" }
    }
    , {
        name: "ジェニー", rarity: "白", cl: "スカラー", AW: "覚醒", skill: "通常"
        , stats: { def: "×1.2" }
    }
    , {
        name: "ステルゥ", rarity: "白", cl: "スカラー", AW: "覚醒", skill: "覚醒"
        , stats: { hp: "+40%", abn: "-100%" }
    }
    , {
        name: "エンジュ", rarity: "黒", cl: "座敷わらし", AW: "未", skill: "通常"
        , stats: { hp: "+30%" }
    }
    , {
        name: "エンジュ", rarity: "黒", cl: "座敷わらし", AW: "未", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { not: [ "others" ], others: [ "GG持ち" ] }
    }
    , {
        name: "エンジュ", rarity: "黒", cl: "座敷わらし", AW: "覚醒", skill: "通常"
        , stats: { hp: "+30%" }
    }
    , {
        name: "エンジュ", rarity: "黒", cl: "座敷わらし", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { not: [ "others" ], others: [ "GG持ち" ] }
    }
    , {
        name: "エンジュ/花嫁", rarity: "黒", cl: "座敷わらし", AW: "未", skill: "通常"
        , stats: { hp: "+30%" }
    }
    , {
        name: "エンジュ/花嫁", rarity: "黒", cl: "座敷わらし", AW: "未", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { not: [ "season" ], season: [ "ジューンブライド" ] }
        , note: "分類未確認"
    }
    , {
        name: "エンジュ/花嫁", rarity: "黒", cl: "座敷わらし", AW: "覚醒", skill: "通常"
        , stats: { hp: "+30%" }
    }
    , {
        name: "エンジュ/花嫁", rarity: "黒", cl: "座敷わらし", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { not: [ "season" ], season: [ "ジューンブライド" ] }
        , note: "分類未確認"
    }
    , {
        name: "ダークアンナ", rarity: "黒", cl: "政務官【闇の軍勢】", AW: "未", skill: "通常"
        , stats: { rege: [ "72/秒", "?/?f" ] }
    }
    , {
        name: "ダークアンナ", rarity: "黒", cl: "政務官【闇の軍勢】", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "72/秒", "36/15f" ] }
    }
    , {
        name: "ダークアンナ", rarity: "黒", cl: "政務官【闇の軍勢】", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "72/秒", "36/15f" ] }
    }
    , {
        name: "クロノシア", rarity: "黒", cl: "時の俯瞰者", AW: "未", skill: "通常"
        , stats: { eva: "50%" }
    }
    , {
        name: "クロノシア", rarity: "黒", cl: "時の俯瞰者", AW: "覚醒", skill: "通常"
        , stats: { eva: "50%" }
    }
    , {
        name: "アイギス神殿", rarity: "黒", cl: "アイギス神殿", AW: "未", skill: "通常"
        , stats: { atk: "×1.3" }
    }
    , {
        name: "アイギス神殿", rarity: "黒", cl: "アイギス神殿", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.3" }
    }
    , {
        name: "ジュディス", rarity: "白", cl: "メディック", AW: "未", skill: "通常(1)"
        , stats: { redep: "20秒" }
        , note: [ "死亡最後1体", "スキル発動時" ]
    }
    , {
        name: "ジュディス", rarity: "白", cl: "メディック", AW: "覚醒", skill: [ "通常(～3)", "覚醒(～3)" ]
        , stats: { redep: "20秒" }
        , note: [ "死亡最後1体", "スキル発動時" ]
    }
    , {
        name: "プルーシア", rarity: "白", cl: "吟遊詩人", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , note: [ "スキルオート", "永続スキル" ]
    }
    , {
        name: "シトー", rarity: "黒", cl: "ポーター", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , note: [ "永続スキル", "分類未確認" ]
    }
    , {
        name: "ヒュープ", rarity: "黒", cl: "永き夢の亜神", skill: "通常"
        , stats: { rege: [ "150/秒", "?/?f" ] }
    }
    , {
        name: "フェニカ", rarity: "黒", cl: "スカイヒーラー", AW: "覚醒", skill: "覚醒(1)"
        , stats: { rege: [ "100/秒", "100/30f" ] }
        , note: "全体配置バフと合わせて200/秒"
    }
    , {
        name: "フェニカ", rarity: "黒", cl: "スカイヒーラー", AW: "覚醒", skill: "覚醒(2)"
        , stats: { rege: [ "300/秒", "300/30f" ] }
        , note: "全体配置バフと合わせて400/秒"
    }
    , {
        name: "フェニカ", rarity: "黒", cl: "スカイヒーラー", AW: "覚醒", skill: "覚醒(3)"
        , stats: { rege: [ "500/秒", "500/30f" ] }
        , note: "全体配置バフと合わせて600/秒"
    }
    , {
        name: "フェニカ", rarity: "黒", cl: "スカイヒーラー", AW: "覚醒", skill: "覚醒(4)"
        , stats: { rege: [ "700/秒", "700/30f" ] }
        , note: "全体配置バフと合わせて800/秒"
    }
    , {
        name: "フェニカ", rarity: "黒", cl: "スカイヒーラー", AW: "覚醒", skill: "覚醒(5～)"
        , stats: { rege: [ "900/秒", "900/30f" ] }
        , note: [ "全体配置バフと合わせて1000/秒", "永続スキル" ]
    }
    , {
        name: "ツキコ★トゥーダ", rarity: "黒", cl: "帝国アイドル", AW: "覚醒", skill: "覚醒"
        , stats: { nul: "10%" }
        , note: "永続スキル"
    }
    , {
        name: "劉備", rarity: "黒", cl: "君主【恋姫】", AW: "未", skill: "通常"
        , stats: { atk: "×1.15", def: "×1.15" }
    }
    , {
        name: "劉備", rarity: "黒", cl: "君主【恋姫】", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.15", def: "×1.15" }
    }
    , {
        name: "劉備", rarity: "黒", cl: "君主【恋姫】", AW: "覚醒", skill: "覚醒(奇)"
        , stats: { atk: "×1.25" }
    }
    , {
        name: "劉備", rarity: "黒", cl: "君主【恋姫】", AW: "覚醒", skill: "覚醒(偶)"
        , stats: { def: "×1.25" }
    }
    , {
        name: "孫権 仲謀", rarity: "白", cl: "君主【恋姫】", AW: "覚醒", skill: "覚醒"
        , stats: { def: "×1.3" }
        , note: [ "永続スキル", "分類未確認" ]
    }
    , {
        name: "孫策 伯符", rarity: "黒", cl: "小覇王【恋姫】", AW: "覚醒", skill: "覚醒(2)"
        , stats: { hp: "+40%" }
    }
    , {
        name: "孫策 伯符", rarity: "黒", cl: "小覇王【恋姫】", AW: "覚醒", skill: "覚醒(3～)"
        , stats: { hp: "+40%" }
        , note: "永続スキル"
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "未", skill: "通常(～2)"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "未", skill: "通常(3～)"
        , stats: { atk: "×1.2" }
        , note: "永続スキル"
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒", skill: "通常(～2)"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒", skill: "通常(3～)"
        , stats: { atk: "×1.2" }
        , note: "永続スキル"
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒", skill: "覚醒(～2)"
        , stats: { atk: "×1.3" }
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒", skill: "覚醒(3～)"
        , stats: { atk: "×1.3" }
        , note: "永続スキル"
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "未", skill: "通常(1)"
        , stats: { atk: "×1.2", draw: "(○)", redep: "40秒" }
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "未", skill: "通常(2～)"
        , stats: { atk: "×1.2", draw: "(○)", redep: "40秒" }
        , note: "永続スキル"
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒", skill: "通常(1)"
        , stats: { atk: "×1.2", draw: "(○)", redep: "40秒" }
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒", skill: "通常(2～)"
        , stats: { atk: "×1.2", draw: "(○)", redep: "40秒" }
        , note: "永続スキル"
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒", skill: "覚醒(1)"
        , stats: { atk: "×1.15", range: "×1.1" }
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒", skill: "覚醒(2～)"
        , stats: { atk: "×1.15", range: "×1.1" }
        , note: "永続スキル"
    }
    , {
        name: "賈駆", rarity: "白", cl: "軍師【恋姫】", AW: "未", skill: "通常"
        , stats: { hp: "+30%" }
    }
    , {
        name: "賈駆", rarity: "白", cl: "軍師【恋姫】", AW: "覚醒", skill: [ "通常", "覚醒(2～)" ]
        , stats: { hp: "+30%" }
    }
    , {
        name: "賈駆", rarity: "白", cl: "軍師【恋姫】", AW: "覚醒", skill: "覚醒(1)"
        , stats: { ct: "-60%" }
    }
    , {
        name: "董卓 仲穎", rarity: "黒", cl: "暴君【恋姫】", AW: "覚醒", skill: "覚醒"
        , stats: { rege: [ "80/秒", "40/15f" ] }
        , note: "永続スキル"
    }
    , {
        name: "ラヴクラフト", rarity: "白", cl: "水底の支配者【GBM】", AW: "未", skill: "通常"
        , stats: { nul: "50%" }
    }
    , {
        name: "ラヴクラフト", rarity: "白", cl: "水底の支配者【GBM】", AW: "覚醒", skill: "通常"
        , stats: { nul: "50%" }
    }
    , {
        name: "アイリス", rarity: "白", cl: "鬼【ななリン】", AW: "未", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2", eva: "50%" }
        , note: "分類未確認"
    }
    , {
        name: "アイリス", rarity: "白", cl: "鬼【ななリン】", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2", eva: "50%" }
        , note: "分類未確認"
    }
    , {
        name: "アテエル", rarity: "黒", cl: "不死鳥娘【モンスター娘TD】", AW: "未", skill: "通常"
        , stats: { redep: "10秒" }
        , note: [ "死亡・撤退最後1体", "スキル発動時" ]
    }
    , {
        name: "アテエル", rarity: "黒", cl: "不死鳥娘【モンスター娘TD】", AW: "覚醒", skill: "通常"
        , stats: { redep: "10秒" }
        , note: [ "死亡・撤退最後1体", "スキル発動時" ]
    }
    , {
        name: "フェリシア", rarity: "白", cl: "対魔忍 魔性【対魔忍】", AW: "覚醒", skill: "覚醒(～2)"
        , stats: { def: "×1.2" }
        , note: "分類未確認"
    }
    , {
        name: "フェリシア", rarity: "白", cl: "対魔忍 魔性【対魔忍】", AW: "覚醒", skill: "覚醒(3～)"
        , stats: { def: "×1.2" }
        , note: [ "永続スキル", "分類未確認" ]
    }
    , {
        name: [ "アメリア", "クノン" ], rarity: "黒", cl: "セイルーンの巫女/拳の聖女", AW: "未", skill: "通常"
        , stats: { def: "×2.0", mr: "×2.0" }
        , note: "分類未確認"
    }
    , {
        name: [ "アメリア", "クノン" ], rarity: "黒", cl: "セイルーンの巫女/拳の聖女", AW: "未", skill: "通常"
        , stats: { redep: "10秒" }
        , note: [ "死亡・撤退最後1体", "スキル発動時" ]
    }
    , {
        name: [ "アメリア", "クノン" ], rarity: "黒", cl: "セイルーンの巫女/拳の聖女", AW: "覚醒", skill: "通常"
        , stats: { def: "×2.0", mr: "×2.0" }
        , note: "分類未確認"
    }
    , {
        name: [ "アメリア", "クノン" ], rarity: "黒", cl: "セイルーンの巫女/拳の聖女", AW: "覚醒", skill: "通常"
        , stats: { redep: "10秒" }
        , note: [ "死亡・撤退最後1体", "スキル発動時" ]
    }
    , {
        name: "お神輿", rarity: "トークン", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.1" }
        , note: [ "レミィ/浴衣", "永続スキル", "分類未確認" ]
    }
    , {
        name: "村人(農夫)", rarity: "トークン", skill: "通常"
        , stats: { rege: [ "10/秒", "?/?f" ] }
        , note: "村人"
    }
    , {
        name: "村人(老人)", rarity: "トークン", skill: "通常"
        , stats: { rege: [ "10/秒", "?/?f" ] }
        , note: "村人"
    }
    , {
        name: "村人(少年)", rarity: "トークン", skill: "通常"
        , stats: { rege: [ "10/秒", "?/?f" ] }
        , note: "村人"
    }
    , {
        name: "かぼちゃ馬車", rarity: "トークン", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
        , note: [ "デスピア/ハロウィン", "永続スキル" ]
    }
    , {
        name: "神獣玉兎", rarity: "トークン", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , note: "イヨ"
    }
    , {
        name: "スチームタンク", rarity: "トークン", AW: "覚醒", skill: "通常"
        , stats: { rege: [ "120/秒", "60/15f" ] }
        , note: [ "マキナ", "永続スキル" ]
    }
    , {
        name: "湯船の獅子", rarity: "トークン", AW: "未", skill: "通常"
        , stats: { def: "×1.4" }
        , note: [ "コマ/温泉", "分類未確認" ]
    }
    , {
        name: "湯船の大獅子", rarity: "トークン", AW: "覚醒", skill: "通常"
        , stats: { def: "×1.4" }
        , note: [ "コマ/温泉", "分類未確認" ]
    }
    , {
        name: "王子【英雄王】(幻影)", rarity: "トークン", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2", other: "" }
        , note: [ "タリエ", "スキルオート" ]
    }
    , {
        name: "世界樹の苗", rarity: "トークン", AW: "覚醒", skill: "通常(1)"
        , stats: { redep: "30秒" }
        , note: [ "ラタトスク", "死亡・撤退最後1体", "スキル発動時" ]
    }
    , {
        name: "世界樹のカカオ苗", rarity: "トークン", AW: "覚醒", skill: "通常"
        , stats: { redep: "30秒" }
        , note: [ "ラタトスク/バレンタイン", "死亡・撤退最後1体", "スキル発動時", "スキル終了→HP0" ]
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒", skill: ""
        , stats: { : "" }
    }
    
    黒 白 青 金 ちび トークン
    
    未 覚醒 覚1 覚2a 覚2b
    
    常時 非 通常 覚醒
    
    hp atk def mr range cost wt ct dur atkCd
    
    rege: [ "/秒", "/f" ]
    
    poison abn eva nul redep other
    
    draw
    ○
    (○)
    
    target note 発動時 分類未確認
    
    正月 水着 浴衣 バニー 花嫁
    
    お正月 温泉 バレンタイン 学園 エッグハント
    
    ジューンブライド サマー ハロウィン クリスマス

*/