// 全体スキル
buff.skill_gl = [
    {
        name: "王子【英雄王】", cl: "王子", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2", other: "" }
        , note: "オート"
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
        name: "王子【幼少】", cl: "王子", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
    }
    , {
        name: "トラム", rarity: "黒", cl: "銀腕の神話", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "150/秒", "75/15f" ] }
        , note: "永続"
    }
    , {
        name: "トラム", rarity: "白", cl: "銀腕の神話", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "200/秒", "100/15f" ] }
    }
    , {
        name: "アヤカシの王", cl: "アヤカシの王", AW: "覚1", skill: [ "通常", "覚醒" ]
        , stats: { atk: "×1.15" }
    }
    , {
        name: "山ン本五郎左衛門", rarity: "黒", cl: "アヤカシの王", AW: "覚醒後", skill: "覚醒"
        , stats: { other: "" }
        , note: "隠密付与"
    }
    , {
        name: "イルドナ", rarity: "黒", cl: "暁光の神話", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "イルドナ", rarity: "白", cl: "暁光の神話", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "ヴィディア", rarity: "黒", cl: "王国軍初代副司令", AW: "覚醒後", skill: "覚醒(2)"
        , stats: { atk: "×1.3", def: "×1.3" }
    }
    , {
        name: "マギステルミリトゥム", cl: "マギステルミリトゥム", AW: "覚1", skill: [ "通常", "覚醒" ]
        , stats: { hp: "+30%" }
    }
    , {
        name: "イムラウ", rarity: "黒", cl: "ピューティアー", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "1000/秒", "2000/60f" ] }
    }
    , {
        name: "イムラウ", rarity: "黒", cl: "ピューティアー", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "300/秒", "1500/150f" ] }
        , note: "永続"
    }
    , {
        name: "イムラウ/お正月", rarity: "白", cl: "ピューティアー", AW: "覚醒後", skill: "通常"
        , stats: { nul: "40%" }
        , note: "永続"
    }
    , {
        name: "イムラウ/お正月", rarity: "白", cl: "ピューティアー", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "150/秒", "?/?f" ] }
        , note: "永続"
    }
    , {
        name: "イヴリール", rarity: "黒", cl: "未踏海域の覇者", AW: "覚醒後", skill: "通常"
        , stats: { other: "" }
        , note: [ "深海-70%", "永続" ]
    }
    , {
        name: "ケイティ/学園", rarity: "白", cl: "ソルジャー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
    }
    , {
        name: "ケイティ/学園", rarity: "白", cl: "ソルジャー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
    }
    , {
        name: "ケイティ/私服", rarity: "白", cl: "ソルジャー", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "50/秒", "25/15f" ] }
    }
    , {
        name: "ちび一般兵A", rarity: "ちび", cl: "ソルジャー", skill: "通常"
        , stats: { draw: "○" }
    }
    , {
        name: "エレイン/水着", rarity: "金", cl: "ワルキューレ", AW: "覚醒前", skill: "通常"
        , stats: { hp: "+20%" }
    }
    , {
        name: "エレイン/水着", rarity: "金", cl: "ワルキューレ", AW: "覚醒後", skill: "通常"
        , stats: { hp: "+20%" }
    }
    , {
        name: "エレイン/水着", rarity: "金", cl: "ワルキューレ", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+20%" }
    }
    , {
        name: "ヴルム", rarity: "黒", cl: "中級竜兵", AW: "覚醒前", skill: "通常"
        , stats: { nul: "100%" }
    }
    , {
        name: "ヴルム", rarity: "黒", cl: "中級竜兵", AW: "覚醒後", skill: "通常"
        , stats: { nul: "100%" }
    }
    , {
        name: "ヴルム", rarity: "黒", cl: "中級竜兵", AW: "覚醒後", skill: "覚醒"
        , stats: { nul: "100%" }
    }
    , {
        name: "ヴルム/水着", rarity: "黒", cl: "中級竜兵", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.2" }
        , target: [
            { not: [ "home" ], home: [ "白の帝国" ] }
            , { not: [ "season" ], season: [ "サマー" ] }
        ]
    }
    , {
        name: "イグニス", rarity: "白", cl: "中級竜兵", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "イグニス", rarity: "白", cl: "中級竜兵", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "イグニス", rarity: "白", cl: "中級竜兵", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "ちびヴルム", rarity: "ちび", cl: "中級竜兵", skill: "通常"
        , stats: { nul: "100%" }
    }
    , {
        name: "エルドラ/正月", rarity: "黒", cl: "ドラゴンプリンセス", AW: "覚醒前", skill: "通常"
        , stats: { nul: "25%" }
        , note: "永続"
    }
    , {
        name: "エルドラ/正月", rarity: "黒", cl: "ドラゴンプリンセス", AW: "覚醒後", skill: "通常"
        , stats: { nul: "25%" }
        , note: "永続"
    }
    , {
        name: "チヨメ/温泉", rarity: "黒", cl: "忍者", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "150/秒", "75/15f" ] }
    }
    , {
        name: "チヨメ/温泉", rarity: "黒", cl: "忍者", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "150/秒", "75/15f" ] }
    }
    , {
        name: "コーネリア", rarity: "黒", cl: "ダークファイター", AW: "覚醒後", skill: "覚醒"
        , stats: { nul: "20%" }
    }
    , {
        name: "アリス/バレンタイン", rarity: "黒", cl: "モンク", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
        , note: "永続"
    }
    , {
        name: "アリス/バレンタイン", rarity: "黒", cl: "モンク", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
        , note: "永続"
    }
    , {
        name: "マツリ/正月", rarity: "黒", cl: "前衛戦術家", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+10%", atk: "×1.1", def: "×1.1", other: "" }
        , note: [ "オート", "永続" ]
    }
    , {
        name: "ウズメ", rarity: "白", cl: "前衛戦術家", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "ウズメ", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "ウズメ", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "覚醒(1)"
        , stats: { atk: "×1.25" }
    }
    , {
        name: "ウズメ", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "覚醒(2)"
        , stats: { atk: "×1.3" }
    }
    , {
        name: "ウズメ", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "覚醒(3～)"
        , stats: { atk: "×1.35" }
    }
    , {
        name: "シュウカ", rarity: "白", cl: "前衛戦術家", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.1" }
    }
    , {
        name: "シュウカ", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.1" }
    }
    , {
        name: "シュウカ", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.15" }
    }
    , {
        name: "レオラ", rarity: "白", cl: "前衛戦術家", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.15", def: "×1.15", other: "" }
        , note: [ "オート", "永続" ]
    }
    , {
        name: "レオラ", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.15", def: "×1.15", other: "" }
        , note: [ "オート", "永続" ]
    }
    , {
        name: "レオラ", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.25", def: "×1.25" }
    }
    , {
        name: "ルヴェア", rarity: "白", cl: "前衛戦術家", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.15" }
        , note: "永続"
    }
    , {
        name: "ルヴェア", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.15" }
        , note: "永続"
    }
    , {
        name: "レオラ/水着", rarity: "白", cl: "前衛戦術家", AW: "覚醒前", skill: "通常"
        , stats: { other: "" }
        , note: [ "オート", "永続" ]
    }
    , {
        name: "レオラ/水着", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "通常"
        , stats: { other: "" }
        , note: [ "オート", "永続" ]
    }
    , {
        name: "ちびルヴェア", rarity: "ちび", cl: "前衛戦術家", skill: "通常"
        , stats: { atk: "×1.15" }
        , note: "永続"
    }
    , {
        name: "タラニア/バニー", rarity: "白", cl: "魔法剣士", AW: "覚醒前", skill: "通常"
        , stats: { nul: "50%" }
    }
    , {
        name: "タラニア/バニー", rarity: "白", cl: "魔法剣士", AW: "覚醒後", skill: "通常"
        , stats: { nul: "50%" }
    }
    , {
        name: "ライチ/学園", rarity: "白", cl: "メイジアーマー", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "120/秒", "10/2.5f" ] }
    }
    , {
        name: "サラサ", rarity: "白", cl: "ボウライダー", AW: "覚醒前", skill: "通常"
        , stats: { nul: "30%" }
    }
    , {
        name: "サラサ", rarity: "白", cl: "ボウライダー", AW: "覚醒後", skill: "通常"
        , stats: { nul: "30%" }
    }
    , {
        name: "サラサ", rarity: "白", cl: "ボウライダー", AW: "覚醒後", skill: "覚醒"
        , stats: { nul: "50%" }
    }
    , {
        name: "エマ/温泉", rarity: "黒", cl: "ヴァンパイアロード", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+40%" }
    }
    , {
        name: "プロエ", rarity: "黒", cl: "戦の聖霊", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.1" }
    }
    , {
        name: "プロエ", rarity: "黒", cl: "戦の聖霊", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.1" }
    }
    , {
        name: "サギリ", rarity: "白", cl: "ぬらりひょん", AW: "覚醒後", skill: "覚醒"
        , stats: { other: "" }
        , note: "隠密付与"
    }
    , {
        name: "鬼刃姫/正月", rarity: "黒", cl: "鬼", AW: "覚醒前", skill: "通常"
        , stats: { hp: "+20%" }
        , note: "永続"
    }
    , {
        name: "鬼刃姫/正月", rarity: "黒", cl: "鬼", AW: "覚醒後", skill: "通常"
        , stats: { hp: "+20%" }
        , note: "永続"
    }
    , {
        name: "鬼刃姫/正月", rarity: "黒", cl: "鬼", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+50%" }
    }
    , {
        name: "ウルカノ", rarity: "黒", cl: "鍛冶職人", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.2", def: "×1.2" }
    }
    , {
        name: "シロガネ", rarity: "白", cl: "鬼刃忍", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "80/秒", "40/15f" ] }
    }
    , {
        name: "シロガネ", rarity: "白", cl: "鬼刃忍", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "80/秒", "40/15f" ] }
    }
    , {
        name: "デーモンロード", cl: "デーモンロード", AW: "覚醒前", skill: "通常"
        , stats: { cost: "-15%" }
    }
    , {
        name: "デーモンハイロード", cl: "デーモンロード", AW: "覚1", skill: [ "通常", "覚醒" ]
        , stats: { cost: "-20%" }
        , note: "デーモンロード系"
    }
    , {
        name: "デーモンエグザルテッド", cl: "デーモンロード", AW: "覚2a", skill: [ "通常", "覚醒" ]
        , stats: { cost: "-25%" }
        , note: "デーモンロード系"
    }
    , {
        name: "デーモンキャステラン", cl: "デーモンロード", AW: "覚2b", skill: [ "通常", "覚醒" ]
        , stats: { cost: "-20%" }
        , note: "デーモンロード系"
    }
    , {
        name: "パヤモ", rarity: "黒", cl: "デーモンロード", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
    }
    , {
        name: "パヤモ", rarity: "黒", cl: "デーモンロード", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
    }
    , {
        name: "アブグルント", rarity: "白", cl: "デーモンロード", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.15" }
    }
    , {
        name: "オーガスタ", rarity: "黒", cl: "料理人", AW: "覚醒前", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "オーガスタ", rarity: "黒", cl: "料理人", AW: "覚醒後", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "オーガスタ", rarity: "黒", cl: "料理人", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3" }
    }
    , {
        name: "デルフィーナ", rarity: "黒", cl: "料理人", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", range: "×1.2", rege: [ "80/秒", "40/15f" ] }
        , note: "分類未確認"
    }
    , {
        name: "デルフィーナ", rarity: "黒", cl: "料理人", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2", range: "×1.2", rege: [ "80/秒", "40/15f" ] }
        , note: "分類未確認"
    }
    , {
        name: "デルフィーナ", rarity: "黒", cl: "料理人", AW: "覚醒後", skill: "覚醒"
        , stats: { range: "×1.1" }
        , note: "永続"
    }
    , {
        name: "ちびオーガスタ", rarity: "ちび", cl: "料理人", skill: "覚醒"
        , stats: { atk: "×1.3" }
    }
    , {
        name: "アレグロ", rarity: "銅", cl: "料理人", AW: "覚醒前", skill: "覚醒"
        , stats: { rege: [ "20/秒", "?/?f" ] }
    }
    , {
        name: "シラヌイ", rarity: "白", cl: "ぬりかべ", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.6" }
    }
    , {
        name: "シラヌイ", rarity: "白", cl: "ぬりかべ", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.6" }
    }
    , {
        name: "乙姫", rarity: "黒", cl: "儀仗軍神", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3", other: "" }
        , note: [ "深海-100%", "分類未確認" ]
    }
    , {
        name: "乙姫", rarity: "黒", cl: "儀仗軍神", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3", other: "" }
        , note: [ "深海-100%", "分類未確認" ]
    }
    , {
        name: "村人", rarity: "銅", cl: "村人", skill: "通常"
        , stats: { rege: [ "10/秒", "?/?f" ] }
    }
    , {
        name: "ナナリー/私服", rarity: "黒", cl: "アーチャー", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "リアナ", rarity: "黒", cl: "ヒーラー", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "110/秒", "55/15f" ] }
    }
    , {
        name: "ドゥマルデ", rarity: "黒", cl: "ヒーラー", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
    }
    , {
        name: "ドゥマルデ", rarity: "黒", cl: "ヒーラー", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
    }
    , {
        name: "イーリス/私服", rarity: "白", cl: "ヒーラー", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "40/秒", "20/15f" ] }
    }
    , {
        name: "イーリス/私服", rarity: "白", cl: "ヒーラー", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "40/秒", "20/15f" ] }
    }
    , {
        name: "イーリス/お正月", rarity: "金", cl: "ヒーラー", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+10%" }
    }
    , {
        name: "シンディ", rarity: "金", cl: "ヒーラー", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "90/秒", "45/15f" ] }
    }
    , {
        name: "シンディ", rarity: "金", cl: "ヒーラー", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "90/秒", "45/15f" ] }
    }
    , {
        name: "シンディ", rarity: "金", cl: "ヒーラー", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "90/秒", "45/15f" ] }
    }
    , {
        name: "ちびドゥマルデ", rarity: "ちび", cl: "ヒーラー", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
    }
    , {
        name: "ラウラ", rarity: "黒", cl: "ドラゴンシャーマン", AW: "覚醒前", skill: "通常(3n-2)"
        , stats: { hp: "+70%" }
    }
    , {
        name: "ラウラ", rarity: "黒", cl: "ドラゴンシャーマン", AW: "覚醒前", skill: "通常(3n-1)"
        , stats: { atk: "×1.4" }
    }
    , {
        name: "ラウラ", rarity: "黒", cl: "ドラゴンシャーマン", AW: "覚醒前", skill: "通常(3n)"
        , stats: { def: "×2.0" }
    }
    , {
        name: "ラウラ", rarity: "黒", cl: "ドラゴンシャーマン", AW: "覚醒後", skill: "通常(3n-2)"
        , stats: { hp: "+70%" }
    }
    , {
        name: "ラウラ", rarity: "黒", cl: "ドラゴンシャーマン", AW: "覚醒後", skill: "通常(3n-1)"
        , stats: { atk: "×1.4" }
    }
    , {
        name: "ラウラ", rarity: "黒", cl: "ドラゴンシャーマン", AW: "覚醒後", skill: "通常(3n)"
        , stats: { def: "×2.0" }
    }
    , {
        name: "レン", rarity: "白", cl: "後衛戦術家", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.5" }
    }
    , {
        name: "レン", rarity: "白", cl: "後衛戦術家", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.5" }
    }
    , {
        name: "レン", rarity: "白", cl: "後衛戦術家", AW: "覚醒後", skill: "覚醒(1)"
        , stats: { def: "×1.5" }
    }
    , {
        name: "レン", rarity: "白", cl: "後衛戦術家", AW: "覚醒後", skill: "覚醒(2)"
        , stats: { def: "×1.6" }
    }
    , {
        name: "レン", rarity: "白", cl: "後衛戦術家", AW: "覚醒後", skill: "覚醒(3～)"
        , stats: { def: "×1.7" }
    }
    , {
        name: "レオナ", rarity: "白", cl: "後衛戦術家", AW: "覚醒前", skill: "通常"
        , stats: { nul: "75%" }
    }
    , {
        name: "レオナ", rarity: "白", cl: "後衛戦術家", AW: "覚醒後", skill: "通常"
        , stats: { nul: "75%" }
    }
    , {
        name: "レオナ", rarity: "白", cl: "後衛戦術家", AW: "覚醒後", skill: "覚醒"
        , stats: { nul: "75%" }
    }
   , {
        name: "レオナ/水着", rarity: "白", cl: "後衛戦術家", AW: "覚醒前", skill: "通常"
        , stats: { nul: "50%" }
    }
   , {
        name: "レオナ/水着", rarity: "白", cl: "後衛戦術家", AW: "覚醒後", skill: "通常"
        , stats: { nul: "50%" }
    }
   , {
        name: "レオナ/水着", rarity: "白", cl: "後衛戦術家", AW: "覚醒後", skill: "覚醒"
        , stats: { nul: "50%" }
    }
    , {
        name: "ちびレオナ", rarity: "ちび", cl: "後衛戦術家", skill: "通常"
        , stats: { nul: "75%" }
    }
    , {
        name: "ファルネ", rarity: "黒", cl: "サモナー", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
    }
    , {
        name: "ファルネ", rarity: "黒", cl: "サモナー", AW: "覚醒後", skill: [ "通常", "覚醒" ]
        , stats: { rege: [ "72/秒", "36/15f" ] }
    }
    , {
        name: "ファルネ", rarity: "黒", cl: "サモナー", AW: "覚醒後", skill: [ "通常", "覚醒" ]
        , stats: { redep: "20秒" }
        , note: [ "発動時", "死亡最後1体" ]
    }
    , {
        name: "ちびファルネ", rarity: "ちび", cl: "サモナー", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
    }
    , {
        name: "ピピン", rarity: "白", cl: "風水使い", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "ハナ", rarity: "白", cl: "ダンサー", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "40/秒", "20/15f" ] }
    }
    , {
        name: "アンナ/アイドル", rarity: "黒", cl: "政務官", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "20/秒", "10/15f" ] }
        , note: "永続"
    }
    , {
        name: "アンナ/アイドル", rarity: "黒", cl: "政務官", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "20/秒", "10/15f" ] }
        , note: "永続"
    }
    , {
        name: "アンナ/アイドル", rarity: "黒", cl: "政務官", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "30/秒", "15/15f" ] }
        , note: "永続"
    }
    , {
        name: "シャルル", rarity: "白", cl: "アルケミスト", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.25" }
    }
    , {
        name: "ヘルミーネ", rarity: "白", cl: "アルケミスト", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "240/秒", "120/15f" ] }
    }
    , {
        name: "アンリ/学園", rarity: "黒", cl: "エンチャンター", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "80/秒", "40/15f" ] }
    }
    , {
        name: "アンリ/学園", rarity: "黒", cl: "エンチャンター", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "80/秒", "40/15f" ] }
    }
    , {
        name: "ミネット", rarity: "白", cl: "マーチャント", AW: "覚醒後", skill: "覚醒"
        , stats: { cost: "-30%" }
    }
    , {
        name: "ミネット/学園", rarity: "白", cl: "マーチャント", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "120/秒", "60/15f" ] }
    }
    , {
        name: "ルフレ", rarity: "黒", cl: "エレメンタラー", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "40/秒", "20/15f" ] }
        , note: "永続"
    }
    , {
        name: "ルフレ", rarity: "黒", cl: "エレメンタラー", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "40/秒", "20/15f" ] }
        , note: "永続"
    }
    , {
        name: "ユキヒメ/学園", rarity: "白", cl: "エレメンタラー", AW: "覚醒後", skill: "覚醒(1)"
        , stats: { atk: "×1.2", def: "×1.2", mr: "×1.2" }
    }
    , {
        name: "ユキヒメ/学園", rarity: "白", cl: "エレメンタラー", AW: "覚醒後", skill: "覚醒(2)"
        , stats: { atk: "×1.3", def: "×1.3", mr: "×1.2" }
    }
    , {
        name: "ユキヒメ/学園", rarity: "白", cl: "エレメンタラー", AW: "覚醒後", skill: "覚醒(3～)"
        , stats: { atk: "×1.4", def: "×1.3", mr: "×1.2" }
    }
    , {
        name: "リズリー", rarity: "黒", cl: "道化師", AW: "覚醒後", skill: "覚醒"
        , stats: { ct: "-60%" }
    }
    , {
        name: "リズリー/温泉", rarity: "黒", cl: "道化師", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "リズリー/温泉", rarity: "黒", cl: "道化師", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "リズリー/温泉", rarity: "黒", cl: "道化師", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "120/秒", "60/15f" ] }
        , note: "永続"
    }
    , {
        name: "リェプル", rarity: "白", cl: "道化師", AW: "覚醒前", skill: "通常"
        , stats: { ct: "-50%" }
        , note: "終了時、全味方のHP-50%"
    }
    , {
        name: "リェプル", rarity: "白", cl: "道化師", AW: "覚醒後", skill: "通常"
        , stats: { ct: "-50%" }
        , note: "終了時、全味方のHP-50%"
    }
    , {
        name: "リェプル", rarity: "白", cl: "道化師", AW: "覚醒後", skill: "覚醒"
        , stats: { ct: "-50%" }
        , note: [ "発動時、全味方のHP-50%", "永続" ]
    }
    , {
        name: "ルメディア", rarity: "白", cl: "ライフリンカー", AW: "覚醒前", skill: "通常"
        , stats: { hp: "+20%" }
        , note: "永続"
    }
    , {
        name: "ルメディア", rarity: "白", cl: "ライフリンカー", AW: "覚醒後", skill: "通常"
        , stats: { hp: "+20%" }
        , note: "永続"
    }
    , {
        name: "ルメディア", rarity: "白", cl: "ライフリンカー", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+40%" }
    }
    , {
        name: "サルース", rarity: "青", cl: "ライフリンカー", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "40/秒", "20/15f" ] }
    }
    , {
        name: "サルース", rarity: "青", cl: "ライフリンカー", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "40/秒", "20/15f" ] }
    }
    , {
        name: "サルース", rarity: "青", cl: "ライフリンカー", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "40/秒", "20/15f" ] }
    }
    , {
        name: "シンフー", rarity: "黒", cl: "幻獣使い", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "40/秒", "20/15f" ] }
        , note: "永続"
    }
    , {
        name: "ホリー", rarity: "白", cl: "幻獣使い", AW: "覚醒前", skill: "通常"
        , stats: { redep: "15秒" }
        , note: [ "発動時", "死亡・撤退最後1体", "ボム" ]
    }
    , {
        name: "ホリー", rarity: "白", cl: "幻獣使い", AW: "覚醒後", skill: "通常"
        , stats: { redep: "10秒" }
        , note: [ "発動時", "死亡・撤退最後1体", "ボム" ]
    }
    , {
        name: "ホリー", rarity: "白", cl: "幻獣使い", AW: "覚醒後", skill: "覚醒"
        , stats: { redep: "10秒" }
        , note: [ "発動時", "死亡・撤退最後1体" ]
    }
    , {
        name: "エレオノーラ", rarity: "黒", cl: "ルーンアコライト", AW: "覚醒後", skill: "覚醒"
        , stats: { range: "×1.1" }
        , note: "永続"
    }
    , {
        name: "ソニア", rarity: "白", cl: "ルーンアコライト", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "80/秒", "40/15f" ] }
    }
    , {
        name: "ソニア", rarity: "白", cl: "ルーンアコライト", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "80/秒", "40/15f" ] }
    }
    , {
        name: "ソニア", rarity: "白", cl: "ルーンアコライト", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "140/秒", "70/15f" ] }
    }
    , {
        name: "シャイーナ", rarity: "白", cl: "ルーンアコライト", AW: "覚醒前", skill: "通常"
        , stats: { redep: "15秒" }
        , note: [ "発動時", "死亡・撤退最後3体", "ボム" ]
    }
    , {
        name: "シャイーナ", rarity: "白", cl: "ルーンアコライト", AW: "覚醒後", skill: "通常"
        , stats: { redep: "15秒" }
        , note: [ "発動時", "死亡・撤退最後3体", "ボム" ]
    }
    , {
        name: "レライエ/ハロウィン", rarity: "白", cl: "デモンシャーマン", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "レライエ/ハロウィン", rarity: "白", cl: "デモンシャーマン", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "コマ/花嫁", rarity: "黒", cl: "狛犬", AW: "覚醒後", skill: "覚醒"
        , stats: { nul: "50%" }
    }
    , {
        name: "ヘカティエ", rarity: "黒", cl: "儀式魔術師", AW: "覚醒前", skill: "通常"
        , stats: { redep: "10秒" }
        , note: [ "発動時", "死亡・撤退最後1体" ]
    }
    , {
        name: "ヘカティエ", rarity: "黒", cl: "儀式魔術師", AW: "覚醒後", skill: "通常"
        , stats: { redep: "10秒" }
        , note: [ "発動時", "死亡・撤退最後1体" ]
    }
    , {
        name: "ラタトスク/バレンタイン", rarity: "黒", cl: "ハーバリスト", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "ラタトスク/バレンタイン", rarity: "黒", cl: "ハーバリスト", AW: "覚醒後", skill: [ "通常", "覚醒" ]
        , stats: { rege: [ "150/秒", "75/15f" ] }
    }
    , {
        name: "フェリシア", rarity: "白", cl: "スカラー", AW: "覚醒前", skill: "通常"
        , stats: { nul: "30%" }
    }
    , {
        name: "フェリシア", rarity: "白", cl: "スカラー", AW: "覚醒後", skill: "通常"
        , stats: { nul: "30%" }
    }
    , {
        name: "ジェニー", rarity: "白", cl: "スカラー", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.2" }
    }
    , {
        name: "ジェニー", rarity: "白", cl: "スカラー", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.2" }
    }
    , {
        name: "エンジュ", rarity: "黒", cl: "座敷わらし", AW: "覚醒前", skill: "通常"
        , stats: { hp: "+30%" }
    }
    , {
        name: "エンジュ", rarity: "黒", cl: "座敷わらし", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { not: [ "others" ], others: [ "GG持ち" ] }
    }
    , {
        name: "エンジュ", rarity: "黒", cl: "座敷わらし", AW: "覚醒後", skill: "通常"
        , stats: { hp: "+30%" }
    }
    , {
        name: "エンジュ", rarity: "黒", cl: "座敷わらし", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { not: [ "others" ], others: [ "GG持ち" ] }
    }
    , {
        name: "ダークアンナ", rarity: "黒", cl: "政務官【闇の軍勢】", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "72/秒", "?/?f" ] }
    }
    , {
        name: "ダークアンナ", rarity: "黒", cl: "政務官【闇の軍勢】", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "72/秒", "36/15f" ] }
    }
    , {
        name: "ダークアンナ", rarity: "黒", cl: "政務官【闇の軍勢】", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "72/秒", "36/15f" ] }
    }
    , {
        name: "クロノシア", rarity: "黒", cl: "時の俯瞰者", AW: "覚醒前", skill: "通常"
        , stats: { eva: "50%" }
    }
    , {
        name: "クロノシア", rarity: "黒", cl: "時の俯瞰者", AW: "覚醒後", skill: "通常"
        , stats: { eva: "50%" }
    }
    , {
        name: "アイギス神殿", rarity: "黒", cl: "アイギス神殿", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3" }
    }
    , {
        name: "アイギス神殿", rarity: "黒", cl: "アイギス神殿", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3" }
    }
    , {
        name: "ジュディス", rarity: "白", cl: "メディック", AW: "覚醒前", skill: "通常(1)"
        , stats: { redep: "20秒" }
        , note: [ "発動時", "死亡最後1体" ]
    }
    , {
        name: "ジュディス", rarity: "白", cl: "メディック", AW: "覚醒後", skill: [ "通常(～3)", "覚醒(～3)" ]
        , stats: { redep: "20秒" }
        , note: [ "発動時", "死亡最後1体" ]
    }
    , {
        name: "ツキコ★トゥーダ", rarity: "黒", cl: "帝国アイドル", AW: "覚醒後", skill: "覚醒"
        , stats: { nul: "10%" }
        , note: "永続"
    }
    , {
        name: "劉備", rarity: "黒", cl: "君主【恋姫】", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.15", def: "×1.15" }
    }
    , {
        name: "劉備", rarity: "黒", cl: "君主【恋姫】", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.15", def: "×1.15" }
    }
    , {
        name: "劉備", rarity: "黒", cl: "君主【恋姫】", AW: "覚醒後", skill: "覚醒(奇)"
        , stats: { atk: "×1.25" }
    }
    , {
        name: "劉備", rarity: "黒", cl: "君主【恋姫】", AW: "覚醒後", skill: "覚醒(偶)"
        , stats: { def: "×1.25" }
    }
    , {
        name: "孫権 仲謀", rarity: "白", cl: "君主【恋姫】", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.3" }
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "孫策 伯符", rarity: "黒", cl: "小覇王【恋姫】", AW: "覚醒後", skill: "覚醒(2)"
        , stats: { hp: "+40%" }
    }
    , {
        name: "孫策 伯符", rarity: "黒", cl: "小覇王【恋姫】", AW: "覚醒後", skill: "覚醒(3～)"
        , stats: { hp: "+40%" }
        , note: "永続"
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒前", skill: "通常(～2)"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒前", skill: "通常(3～)"
        , stats: { atk: "×1.2" }
        , note: "永続"
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒後", skill: "通常(～2)"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒後", skill: "通常(3～)"
        , stats: { atk: "×1.2" }
        , note: "永続"
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒後", skill: "覚醒(～2)"
        , stats: { atk: "×1.3" }
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒後", skill: "覚醒(3～)"
        , stats: { atk: "×1.3" }
        , note: "永続"
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒前", skill: "通常(1)"
        , stats: { atk: "×1.2", draw: "(○)", redep: "40秒" }
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒前", skill: "通常(2～)"
        , stats: { atk: "×1.2", draw: "(○)", redep: "40秒" }
        , note: "永続"
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒後", skill: "通常(1)"
        , stats: { atk: "×1.2", draw: "(○)", redep: "40秒" }
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒後", skill: "通常(2～)"
        , stats: { atk: "×1.2", draw: "(○)", redep: "40秒" }
        , note: "永続"
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒後", skill: "覚醒(1)"
        , stats: { atk: "×1.15", range: "×1.1" }
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒後", skill: "覚醒(2～)"
        , stats: { atk: "×1.15", range: "×1.1" }
        , note: "永続"
    }
    , {
        name: "賈駆", rarity: "白", cl: "軍師【恋姫】", AW: "覚醒前", skill: "通常"
        , stats: { hp: "+30%" }
    }
    , {
        name: "賈駆", rarity: "白", cl: "軍師【恋姫】", AW: "覚醒後", skill: "通常"
        , stats: { hp: "+30%" }
    }
    , {
        name: "賈駆", rarity: "白", cl: "軍師【恋姫】", AW: "覚醒後", skill: "覚醒(1)"
        , stats: { ct: "-60%" }
    }
    , {
        name: "董卓 仲穎", rarity: "黒", cl: "暴君【恋姫】", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "80/秒", "40/15f" ] }
        , note: "永続"
    }
    , {
        name: "ラヴクラフト", rarity: "白", cl: "水底の支配者【GBM】", AW: "覚醒前", skill: "通常"
        , stats: { nul: "50%" }
    }
    , {
        name: "ラヴクラフト", rarity: "白", cl: "水底の支配者【GBM】", AW: "覚醒後", skill: "通常"
        , stats: { nul: "50%" }
    }
    , {
        name: "アイリス", rarity: "白", cl: "鬼【ななリン】", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2", eva: "50%" }
        , note: "分類未確認"
    }
    , {
        name: "アイリス", rarity: "白", cl: "鬼【ななリン】", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2", eva: "50%" }
        , note: "分類未確認"
    }
    , {
        name: "アテエル", rarity: "黒", cl: "不死鳥娘【モンスター娘TD】", AW: "覚醒前", skill: "通常"
        , stats: { redep: "10秒" }
        , note: [ "発動時", "死亡・撤退最後1体" ]
    }
    , {
        name: "アテエル", rarity: "黒", cl: "不死鳥娘【モンスター娘TD】", AW: "覚醒後", skill: "通常"
        , stats: { redep: "10秒" }
        , note: [ "発動時", "死亡・撤退最後1体" ]
    }
    , {
        name: "フェリシア", rarity: "白", cl: "対魔忍 魔性【対魔忍】", AW: "覚醒後", skill: "覚醒(～2)"
        , stats: { def: "×1.2" }
        , note: "分類未確認"
    }
    , {
        name: "フェリシア", rarity: "白", cl: "対魔忍 魔性【対魔忍】", AW: "覚醒後", skill: "覚醒(3～)"
        , stats: { def: "×1.2" }
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "お神輿", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.1" }
        , note: [ "レミィ/浴衣", "永続", "分類未確認" ]
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
        name: "かぼちゃ馬車", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "60/秒", "30/15f" ] }
        , note: [ "デスピア/ハロウィン", "永続" ]
    }
    , {
        name: "神獣玉兎", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , note: [ "イヨ", "分類未確認" ]
    }
    , {
        name: "スチームタンク", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "80/秒", "40/15f" ] }
        , note: [ "マキナ", "永続" ]
    }
    , {
        name: "王子【英雄王】(幻影)", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2", other: "" }
        , note: [ "タリエ", "オート" ]
    }
    , {
        name: "世界樹の苗", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { redep: "30秒" }
        , note: [ "ラタトスク", "発動時", "死亡・撤退最後1体" ]
    }
    , {
        name: "世界樹のカカオ苗", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { redep: "30秒" }
        , note: [ "ラタトスク/バレンタイン", "発動時", "死亡・撤退最後1体" ]
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒後", skill: ""
        , stats: { : "" }
    }
    
    黒 白 青 金 ちび トークン
    
    覚醒前 覚醒後 覚1 覚2a 覚2b
    
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