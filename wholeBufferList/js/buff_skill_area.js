// 範囲スキル
buff.skill_area = [
    {
        name: "王子", cl: "王子", skill: "通常"
        , stats: { atk: [ "×1.12", "～1.21" ], def: [ "×1.12", "～1.21" ] }
        , note: [ "全体", "永続" ]
    }
    , {
        name: "王子【玉兎】", cl: "王子", skill: "通常"
        , stats: { atk: "×1.25", def: "×1.25" }
    }
    , {
        name: "王子【宣誓】", cl: "王子", skill: "通常"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "山ン本五郎左衛門", rarity: "白", cl: "アヤカシの王", AW: "覚醒後", skill: "覚醒"
        , stats: { other: "" }
        , note: "隠密付与"
    }
    , {
        name: "ランシェ", rarity: "黒", cl: "マギステルミリトゥム", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×2.0" }
        , note: "全体"
    }
    , {
        name: "イムラウ", rarity: "黒", cl: "ピューティアー", AW: "覚醒後", skill: "通常"
        , stats: { def: "×2.5", mr: "×2.5" }
    }
    , {
        name: "イムラウ", rarity: "黒", cl: "ピューティアー", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+30%", atk: "×1.3" }
        , note: "永続"
    }
    , {
        name: "イムラウ", rarity: "白", cl: "ピューティアー", AW: "覚醒後", skill: "通常"
        , stats: { def: "×2.8", mr: "×1.5" }
    }
    , {
        name: "イムラウ", rarity: "白", cl: "ピューティアー", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.5", mr: "×2.8" }
    }
    , {
        name: "イムラウ/お正月", rarity: "白", cl: "ピューティアー", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+20%", def: "×1.3" }
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "ベルニス/花嫁", rarity: "白", cl: "ヘビーアーマー", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "シビラ/聖剣", rarity: "黒", cl: "プリンセス", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { not: [ "cl" ], cl: [ "王子" ] }
    }
    , {
        name: "シビラ/聖剣", rarity: "黒", cl: "プリンセス", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { not: [ "cl" ], cl: [ "王子" ] }
    }
    , {
        name: "ヘイオス/クリスマス", rarity: "黒", cl: "ダークファイター", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.5" }
    }
    , {
        name: "ルヴェア", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.4" }
        , note: "発動時配置6人以上"
    }
    , {
        name: "ルヴェア", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.7" }
        , note: "発動時配置5人以下"
    }
    , {
        name: "マリレーヌ", rarity: "白", cl: "魔法剣士", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "40/秒", "20/15f" ] }
    }
    , {
        name: "マリレーヌ", rarity: "白", cl: "魔法剣士", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "40/秒", "20/15f" ] }
    }
    , {
        name: "シエナ/温泉", rarity: "白", cl: "魔法剣士", AW: "覚醒前", skill: "通常"
        , stats: { mr: "×1.4" }
    }
    , {
        name: "シエナ/温泉", rarity: "白", cl: "魔法剣士", AW: "覚醒後", skill: "通常"
        , stats: { mr: "×1.4" }
    }
    , {
        name: "エクス", rarity: "黒", cl: "神官戦士", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.5" }
        , note: "永続"
    }
    , {
        name: "エクス", rarity: "黒", cl: "神官戦士", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.5" }
        , note: "永続"
    }
    , {
        name: "エクス", rarity: "黒", cl: "神官戦士", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×2.0" }
    }
    , {
        name: "エクス/バレンタイン", rarity: "黒", cl: "神官戦士", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×2.5" }
        , note: "分類未確認"
    }
    , {
        name: "エレット/バレンタイン", rarity: "白", cl: "神官戦士", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { not: [ "season" ], season: [ "バレンタイン" ] }
    }
    , {
        name: "エレット/バレンタイン", rarity: "白", cl: "神官戦士", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { not: [ "season" ], season: [ "バレンタイン" ] }
    }
    , {
        name: "ちびエクス", rarity: "ちび", cl: "神官戦士", skill: "通常"
        , stats: { def: "×1.5" }
        , note: "永続"
    }
    , {
        name: "グレーテル/クリスマス", rarity: "白", cl: "ダークストーカー", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.4" }
    }
    , {
        name: "グレーテル/クリスマス", rarity: "白", cl: "ダークストーカー", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.4" }
    }
    , {
        name: "クラマ", rarity: "黒", cl: "天狗", AW: "覚醒前", skill: "通常"
        , stats: { other: "" }
        , note: "隠密付与"
    }
    , {
        name: "クラマ", rarity: "黒", cl: "天狗", AW: "覚醒後", skill: [ "通常", "覚醒" ]
        , stats: { other: "" }
        , note: "隠密付与"
    }
    , {
        name: "ちびクラマ", rarity: "ちび", cl: "天狗", skill: "通常"
        , stats: { other: "" }
        , note: "隠密付与"
    }
    , {
        name: "レミィ", rarity: "黒", cl: "雷公", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , note: "永続"
    }
    , {
        name: "エレカ", rarity: "白", cl: "モンスターブレイカー", AW: "覚醒後", skill: "覚醒"
        , stats: { other: "" }
        , note: "貫通化"
    }
    , {
        name: "クーコ", rarity: "黒", cl: "風伯", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.9" }
        , note: "永続"
    }
    , {
        name: "クーコ/浴衣", rarity: "黒", cl: "風伯", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.3" }
    }
    , {
        name: "クーコ/浴衣", rarity: "黒", cl: "風伯", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.3" }
        , note: "永続"
    }
    , {
        name: "クーコ/ハロウィン", rarity: "黒", cl: "風伯", AW: "覚醒後", skill: "覚醒"
        , stats: { mr: "×1.4" }
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "清源妙道真君/水着", rarity: "黒", cl: "真人", AW: "覚醒前", skill: "通常"
        , stats: { hp: "+30%" }
        , note: "永続"
    }
    , {
        name: "清源妙道真君/水着", rarity: "黒", cl: "真人", AW: "覚醒後", skill: "通常"
        , stats: { hp: "+30%" }
        , note: "永続"
    }
    , {
        name: "太公望/正月", rarity: "白", cl: "真人", AW: "覚醒後", skill: "覚醒"
        , stats: { abn: "-100%" }
    }
    , {
        name: "タチバナ", rarity: "黒", cl: "鬼刃忍", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.6" }
    }
    , {
        name: "ハルモニア/クリスマス", rarity: "黒", cl: "デーモンロード", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "ハルモニア/クリスマス", rarity: "黒", cl: "デーモンロード", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "エスネア", rarity: "黒", cl: "デモンルーン", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.5" }
    }
    , {
        name: "ハリナ/水着", rarity: "黒", cl: "エンプレス", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: [
            { not: [ "season" ], season: [ "サマー" ] }
            , { not: [ "home" ], home: [ "帝国" ] }
        ]
    }
    , {
        name: "タツミ", rarity: "黒", cl: "戦巫女", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.4", eva: "30%" }
        , note: "永続"
    }
    , {
        name: "タツミ", rarity: "黒", cl: "戦巫女", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.4", eva: "30%" }
        , note: "永続"
    }
    , {
        name: "タツミ", rarity: "黒", cl: "戦巫女", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.4", def: "×1.7" }
    }
    , {
        name: "コウメ", rarity: "白", cl: "戦巫女", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.8" }
        , note: "分類未確認"
    }
    , {
        name: "コウメ", rarity: "白", cl: "戦巫女", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.8" }
        , note: "分類未確認"
    }
    , {
        name: "コウメ", rarity: "白", cl: "戦巫女", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.5" }
        , note: "分類未確認"
    }
    , {
        name: "ちびタツミ", rarity: "ちび", cl: "戦巫女", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.4", eva: "30%" }
        , note: "永続"
    }
    , {
        name: "誅子", rarity: "黒", cl: "武侠", AW: "覚醒後", skill: "覚醒(4n)"
        , stats: { atk: "×1.15" }
    }
    , {
        name: "ダルティエ", rarity: "白", cl: "衛士", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.4" }
        , note: "分類未確認"
    }
    , {
        name: "ナナリー/私服", rarity: "黒", cl: "アーチャー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
        , note: "分類未確認"
    }
    , {
        name: "ナナリー/私服", rarity: "黒", cl: "アーチャー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
        , note: "分類未確認"
    }
    , {
        name: "リタ/水着", rarity: "白", cl: "アーチャー", AW: "覚醒前", skill: "通常"
        , stats: { other: "" }
        , note: "隠密付与"
    }
    , {
        name: "リタ/水着", rarity: "白", cl: "アーチャー", AW: "覚醒後", skill: "通常"
        , stats: { other: "" }
        , note: "隠密付与"
    }
    , {
        name: "サーシャ", rarity: "白", cl: "メイジ", AW: "覚醒前", skill: "通常"
        , stats: { eva: "50%" }
    }
    , {
        name: "サーシャ", rarity: "白", cl: "メイジ", AW: "覚醒後", skill: "通常"
        , stats: { eva: "50%" }
    }
    , {
        name: "サーシャ", rarity: "白", cl: "メイジ", AW: "覚醒後", skill: "覚醒"
        , stats: { eva: "50%" }
    }
    , {
        name: "イリス", rarity: "黒", cl: "ヒーラー", AW: "覚醒前", skill: "通常"
        , stats: { def: "×2.0", rege: [ "60/秒", "30/15f" ] }
    }
    , {
        name: "イリス", rarity: "黒", cl: "ヒーラー", AW: "覚醒後", skill: "通常"
        , stats: { def: "×2.0", rege: [ "60/秒", "30/15f" ] }
    }
    , {
        name: "イリス", rarity: "黒", cl: "ヒーラー", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×2.5" }
    }
    , {
        name: "リアナ", rarity: "黒", cl: "ヒーラー", AW: "覚醒前", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "リアナ", rarity: "黒", cl: "ヒーラー", AW: "覚醒後", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "リアナ", rarity: "黒", cl: "ヒーラー", AW: "覚醒後", skill: "覚醒"
        , stats: { abn: "-100%" }
    }
    , {
        name: "アウローラ", rarity: "黒", cl: "ヒーラー", AW: "覚醒前", skill: "通常"
        , stats: { mr: "×2.0" }
    }
    , {
        name: "アウローラ", rarity: "黒", cl: "ヒーラー", AW: "覚醒後", skill: "通常"
        , stats: { mr: "×2.0" }
    }
    , {
        name: "アウローラ", rarity: "黒", cl: "ヒーラー", AW: "覚醒後", skill: "覚醒"
        , stats: { mr: "×2.0" }
    }
    , {
        name: "アウローラ/水着", rarity: "黒", cl: "ヒーラー", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.5" }
    }
    , {
        name: "リアナ/浴衣", rarity: "黒", cl: "ヒーラー", AW: "覚醒前", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "リアナ/浴衣", rarity: "黒", cl: "ヒーラー", AW: "覚醒後", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "シンディ", rarity: "金", cl: "ヒーラー", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.5" }
    }
    , {
        name: "ちびイリス", rarity: "ちび", cl: "ヒーラー", skill: "通常"
        , stats: { def: "×2.0", rege: [ "60/秒", "30/15f" ] }
    }
    , {
        name: "ちびリアナ", rarity: "ちび", cl: "ヒーラー", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "アンジェラ", rarity: "黒", cl: "ウィッチ", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , note: "分類未確認"
    }
    , {
        name: "クルス/クリスマス", rarity: "黒", cl: "ヴァンパイアハンター", AW: "覚醒前", skill: "通常"
        , stats: { hp: "+50%", atk: "×1.5" }
    }
    , {
        name: "クルス/クリスマス", rarity: "黒", cl: "ヴァンパイアハンター", AW: "覚醒後", skill: "通常"
        , stats: { hp: "+50%", atk: "×1.5" }
    }
    , {
        name: "クルス/クリスマス", rarity: "黒", cl: "ヴァンパイアハンター", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , note: "永続"
    }
    , {
        name: "ピックル", rarity: "金", cl: "ヴァンパイアハンター", AW: "覚醒後", skill: "覚醒"
        , stats: { other: "" }
        , note: [ "オート", "永続" ]
    }
    , {
        name: "キキョウ", rarity: "黒", cl: "シャーマン", AW: "覚醒後", skill: "通常(奇)"
        , stats: { def: "×1.1" }
    }
    , {
        name: "キキョウ", rarity: "黒", cl: "シャーマン", AW: "覚醒後", skill: "通常(偶)"
        , stats: { atk: "×1.1" }
    }
    , {
        name: "シナト", rarity: "白", cl: "後衛戦術家", AW: "覚醒後", skill: "覚醒"
        , stats: { ct: "-100%" }
        , note: "ボム"
    }
    , {
        name: "レオナ/水着", rarity: "白", cl: "後衛戦術家", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3" }
    }
    , {
        name: "シナト/バニー", rarity: "白", cl: "後衛戦術家", AW: "覚醒後", skill: "覚醒"
        , stats: { atkCd: "1f化" }
    }
    , {
        name: "リンネ", rarity: "黒", cl: "風水使い", AW: "覚醒前", skill: "通常"
        , stats: { eva: "50%" }
    }
    , {
        name: "リンネ", rarity: "黒", cl: "風水使い", AW: "覚醒後", skill: "通常"
        , stats: { eva: "50%" }
    }
    , {
        name: "リンネ", rarity: "黒", cl: "風水使い", AW: "覚醒後", skill: "覚醒"
        , stats: { eva: "30%" }
        , note: "永続"
    }
    , {
        name: "リンネ/花嫁", rarity: "黒", cl: "風水使い", AW: "覚醒前", skill: "通常"
        , stats: { eva: "50%" }
    }
    , {
        name: "リンネ/花嫁", rarity: "黒", cl: "風水使い", AW: "覚醒後", skill: "通常"
        , stats: { eva: "50%" }
    }
    , {
        name: "リンネ/花嫁", rarity: "黒", cl: "風水使い", AW: "覚醒後", skill: "覚醒"
        , stats: { eva: "100%" }
    }
    , {
        name: "リンネ/水着", rarity: "黒", cl: "風水使い", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", eva: "50%" }
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "リンネ/水着", rarity: "黒", cl: "風水使い", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2", eva: "50%" }
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "リンネ/水着", rarity: "黒", cl: "風水使い", AW: "覚醒後", skill: "覚醒(4～)"
        , stats: { eva: "30%" }
    }
    , {
        name: "クーシン", rarity: "白", cl: "風水使い", AW: "覚醒前", skill: "通常"
        , stats: { rege: [ "150/秒", "75/15f" ] }
    }
    , {
        name: "クーシン", rarity: "白", cl: "風水使い", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "150/秒", "75/15f" ] }
    }
    , {
        name: "ちびリンネ", rarity: "ちび", cl: "風水使い", skill: "通常"
        , stats: { eva: "50%" }
    }
    , {
        name: "ハリンヘイム", rarity: "白", cl: "砲術士", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+20%" }
    }
    , {
        name: "ワルツ/バレンタイン", rarity: "白", cl: "ダンサー", AW: "覚醒後", skill: "覚醒"
        , stats: { eva: "50%" }
    }
    , {
        name: "アーリー", rarity: "白", cl: "クロノウィッチ", AW: "覚醒前", skill: "通常"
        , stats: { other: "" }
        , note: [ "発動時オート", "ボム" ]
    }
    , {
        name: "アーリー", rarity: "白", cl: "クロノウィッチ", AW: "覚醒後", skill: "通常"
        , stats: { other: "" }
        , note: [ "発動時オート", "ボム" ]
    }
    , {
        name: "フィオレ", rarity: "黒", cl: "ドルイド", AW: "覚醒後", skill: [ "通常", "覚醒" ]
        , stats: { other: "" }
        , note: "隠密付与"
    }
    , {
        name: "フィオレ/温泉", rarity: "黒", cl: "ドルイド", AW: "覚醒前", skill: "通常"
        , stats: { other: "" }
        , note: "隠密付与"
    }
    , {
        name: "フィオレ/温泉", rarity: "黒", cl: "ドルイド", AW: "覚醒後", skill: "通常"
        , stats: { other: "" }
        , note: "隠密付与"
    }
    , {
        name: "レーレン", rarity: "白", cl: "アルケミスト", AW: "覚醒後", skill: "覚醒"
        , stats: { abn: "-100%" }
        , note: "ボム"
    }
    , {
        name: "ブランシュ", rarity: "白", cl: "魔物使い", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "ブランシュ", rarity: "白", cl: "魔物使い", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "ベルディナート", rarity: "白", cl: "ダークプリースト", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.7" }
    }
    , {
        name: "ディエーラ", rarity: "黒", cl: "マーチャント", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.2" }
    }
    , {
        name: "ディエーラ", rarity: "黒", cl: "マーチャント", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.2" }
    }
    , {
        name: "ちびディエーラ", rarity: "ちび", cl: "マーチャント", skill: "通常"
        , stats: { def: "×1.2" }
    }
    , {
        name: "ラピス", rarity: "黒", cl: "デモンサモナー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.5" }
    }
    , {
        name: "ラピス", rarity: "黒", cl: "デモンサモナー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.5" }
    }
    , {
        name: "ラピス", rarity: "黒", cl: "デモンサモナー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.5", mr: "×1.4" }
    }
    , {
        name: "ラピス/水着", rarity: "黒", cl: "デモンサモナー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.5" }
    }
    , {
        name: "ラピス/水着", rarity: "黒", cl: "デモンサモナー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.5" }
    }
    , {
        name: "ラピス/水着", rarity: "黒", cl: "デモンサモナー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3", mr: "×1.3" }
        , note: "永続"
    }
    , {
        name: "ラピス/正月", rarity: "黒", cl: "デモンサモナー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.4", mr: "×1.4" }
        , note: "分類未確認"
    }
    , {
        name: "ラピス/正月", rarity: "黒", cl: "デモンサモナー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.4", mr: "×1.4" }
        , note: "分類未確認"
    }
    , {
        name: "ラピス/正月", rarity: "黒", cl: "デモンサモナー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.2" }
        , note: "永続"
    }
    , {
        name: "リヴル/ハロウィン", rarity: "白", cl: "デモンサモナー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.5" }
        , note: "範囲"
    }
    , {
        name: "ちびラピス", rarity: "ちび", cl: "デモンサモナー", skill: "覚醒"
        , stats: { atk: "×1.5", mr: "×1.4" }
    }
    , {
        name: "シャオメイ", rarity: "白", cl: "エレメンタラー", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.5" }
    }
    , {
        name: "セノーテ", rarity: "白", cl: "エレメンタラー", AW: "覚醒後", skill: "覚醒"
        , stats: { abn: "-100%" }
    }
    , {
        name: "ユキヒメ/学園", rarity: "白", cl: "エレメンタラー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3", mr: "×1.3" }
    }
    , {
        name: "ユキヒメ/学園", rarity: "白", cl: "エレメンタラー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3", mr: "×1.3" }
    }
    , {
        name: "リズリー", rarity: "黒", cl: "道化師", AW: "覚醒前", skill: "通常"
        , stats: { ct: "-50%", eva: "50%" }
        , note: "永続"
    }
    , {
        name: "リズリー", rarity: "黒", cl: "道化師", AW: "覚醒後", skill: "通常"
        , stats: { ct: "-50%", eva: "50%" }
        , note: "永続"
    }
    , {
        name: "リズリー", rarity: "黒", cl: "道化師", AW: "覚醒後", skill: "覚醒"
        , stats: { eva: "50%" }
    }
    , {
        name: "リズリー/温泉", rarity: "黒", cl: "道化師", AW: "覚醒前", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "リズリー/温泉", rarity: "黒", cl: "道化師", AW: "覚醒後", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "リズリー/温泉", rarity: "黒", cl: "道化師", AW: "覚醒後", skill: "覚醒"
        , stats: { ct: "-60%", abn: "-100%" }
        , note: "永続"
    }
    , {
        name: "スピリア", rarity: "黒", cl: "ライフリンカー", AW: "覚醒前", skill: "通常"
        , stats: { hp: "+20%" }
    }
    , {
        name: "スピリア", rarity: "黒", cl: "ライフリンカー", AW: "覚醒後", skill: "通常"
        , stats: { hp: "+20%" }
    }
    , {
        name: "シンフー", rarity: "黒", cl: "幻獣使い", AW: "覚醒前", skill: "通常"
        , stats: { draw: "(○)", redep: "60秒" }
    }
    , {
        name: "シンフー", rarity: "黒", cl: "幻獣使い", AW: "覚醒後", skill: "通常"
        , stats: { draw: "(○)", redep: "60秒" }
    }
    , {
        name: "シンフー", rarity: "黒", cl: "幻獣使い", AW: "覚醒後", skill: "覚醒"
        , stats: { draw: "(○)", redep: "60秒" }
        , note: "永続"
    }
    , {
        name: "ツキコ", rarity: "黒", cl: "幻獣使い", AW: "覚醒前", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "ツキコ", rarity: "黒", cl: "幻獣使い", AW: "覚醒後", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "ツキコ/水着", rarity: "黒", cl: "幻獣使い", AW: "覚醒前", skill: "通常"
        , stats: { abn: "-100%" }
        , note: "永続"
    }
    , {
        name: "ツキコ/水着", rarity: "黒", cl: "幻獣使い", AW: "覚醒後", skill: "通常"
        , stats: { abn: "-100%" }
        , note: "永続"
    }
    , {
        name: "ホリー", rarity: "白", cl: "幻獣使い", AW: "覚醒後", skill: "覚醒"
        , stats: { abn: "-100%" }
    }
    , {
        name: "カリン", rarity: "白", cl: "幻獣使い", AW: "覚醒後", skill: [ "通常", "覚醒" ]
        , stats: { draw: "○" }
    }
    , {
        name: "エレオノーラ", rarity: "黒", cl: "ルーンアコライト", AW: "覚醒前", skill: "通常"
        , stats: { range: "×1.2" }
    }
    , {
        name: "エレオノーラ", rarity: "黒", cl: "ルーンアコライト", AW: "覚醒後", skill: "通常"
        , stats: { range: "×1.2" }
    }
    , {
        name: "エレオノーラ/水着", rarity: "黒", cl: "ルーンアコライト", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3", range: "×1.3" }
    }
    , {
        name: "ソニア", rarity: "白", cl: "ルーンアコライト", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.8" }
    }
    , {
        name: "ちびエレオノーラ", rarity: "ちび", cl: "ルーンアコライト", skill: "通常"
        , stats: { range: "×1.2" }
    }
    , {
        name: "メアリ", rarity: "黒", cl: "ロード", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.6" }
    }
    , {
        name: "リンクス", rarity: "黒", cl: "ロード", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.4" }
    }
    , {
        name: "リンクス", rarity: "黒", cl: "ロード", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.4" }
    }
    , {
        name: "マギー", rarity: "白", cl: "発明家", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.3" }
        , note: "分類未確認"
    }
    , {
        name: "マギー", rarity: "白", cl: "発明家", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.3" }
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "ハルフゥ", rarity: "黒", cl: "シービショップ", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×2.0", mr: "×1.8" }
    }
    , {
        name: "コマ", rarity: "黒", cl: "狛犬", AW: "覚醒後", skill: "覚醒"
        , stats: { abn: "-100%" }
    }
    , {
        name: "コマ/花嫁", rarity: "黒", cl: "狛犬", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "コマ/花嫁", rarity: "黒", cl: "狛犬", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
    }
    , {
        name: "大魔導神", cl: "儀式魔術師", AW: "覚2b", skill: [ "通常", "覚醒" ]
        , stats: { atk: "×1.12" }
        , note: "儀式魔術師系"
    }
    , {
        name: "マルティナ", rarity: "白", cl: "幻術士", AW: "覚醒前", skill: "通常"
        , stats: { eva: "50%" }
    }
    , {
        name: "マルティナ", rarity: "白", cl: "幻術士", AW: "覚醒後", skill: "通常"
        , stats: { eva: "50%" }
    }
    , {
        name: "マルティナ", rarity: "白", cl: "幻術士", AW: "覚醒後", skill: "覚醒"
        , stats: { eva: "70%" }
    }
    , {
        name: "ラタトスク", rarity: "黒", cl: "ハーバリスト", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.4", mr: "×1.4", rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "ラタトスク", rarity: "黒", cl: "ハーバリスト", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.4", mr: "×1.4", rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "ラタトスク/バレンタイン", rarity: "黒", cl: "ハーバリスト", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , note: "分類未確認"
    }
    , {
        name: "ラタトスク/バレンタイン", rarity: "黒", cl: "ハーバリスト", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , note: "分類未確認"
    }
    , {
        name: "ローズ", rarity: "白", cl: "ハーバリスト", AW: "覚醒前", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "ローズ", rarity: "白", cl: "ハーバリスト", AW: "覚醒後", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "ローズ", rarity: "白", cl: "ハーバリスト", AW: "覚醒後", skill: "覚醒"
        , stats: { abn: "-100%" }
        , note: "ボム"
    }
    , {
        name: "ローズ/クリスマス", rarity: "白", cl: "ハーバリスト", AW: "覚醒前", skill: "通常"
        , stats: { eva: "30%" }
    }
    , {
        name: "ローズ/クリスマス", rarity: "白", cl: "ハーバリスト", AW: "覚醒後", skill: "通常"
        , stats: { eva: "30%" }
    }
    , {
        name: "シュカ", rarity: "白", cl: "霊宝つくもがみ", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
    }
    , {
        name: "シュカ", rarity: "白", cl: "霊宝つくもがみ", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
    }
    , {
        name: "エンジュ", rarity: "黒", cl: "座敷わらし", AW: "覚醒後", skill: "覚醒"
        , stats: { abn: "-100%" }
    }
    , {
        name: "アナベラ", rarity: "白", cl: "スカラー", AW: "覚醒前", skill: "通常"
        , stats: { eva: "30%" }
    }
    , {
        name: "アナベラ", rarity: "白", cl: "スカラー", AW: "覚醒後", skill: "通常"
        , stats: { eva: "30%" }
    }
    , {
        name: "アイギス神殿", rarity: "黒", cl: "アイギス神殿", AW: "覚醒後", skill: "覚醒"
        , stats: { range: "×1.2" }
    }
    , {
        name: "ジュディス", rarity: "白", cl: "メディック", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.4" }
    }
    , {
        name: "戦場に集う聖霊たち", rarity: "黒", cl: "支援の聖霊", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3", rege: [ "100/秒", "50/15f" ] }
    }
    , {
        name: "アエロ/クリスマス", rarity: "金", cl: "スカイシューター", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.07" }
    }
    , {
        name: "アエロ/クリスマス", rarity: "金", cl: "スカイシューター", AW: "覚醒後", skill: [ "通常", "覚醒" ]
        , stats: { atk: "×1.12" }
    }
    , {
        name: "カーニア", rarity: "黒", cl: "スカイヒーラー", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "250/秒", "125/15f" ] }
        , note: "永続"
    }
    , {
        name: "イエラ", rarity: "白", cl: "スカイヒーラー", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.3" }
    }
    , {
        name: "イエラ", rarity: "白", cl: "スカイヒーラー", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.3" }
    }
    , {
        name: "イエラ", rarity: "白", cl: "スカイヒーラー", AW: "覚醒後", skill: "覚醒(3～)"
        , stats: { atk: "×1.2", def: "×1.2" }
    }
    , {
        name: "ツキコ★トゥーダ", rarity: "黒", cl: "帝国アイドル", AW: "覚醒後", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "ツキコ★トゥーダ", rarity: "黒", cl: "帝国アイドル", AW: "覚醒後", skill: "覚醒"
        , stats: { abn: "-100%" }
        , note: "永続"
    }
    , {
        name: "迷い家", rarity: "金", cl: "迷い家", skill: "通常"
        , stats: { atk: "×0.0", other: "" }
        , note: "隠密付与"
    }
    , {
        name: "シーラ・ヘルマン", rarity: "黒", cl: "初代大統領【ランス】", AW: "覚醒前", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "シーラ・ヘルマン", rarity: "黒", cl: "初代大統領【ランス】", AW: "覚醒後", skill: "通常"
        , stats: { abn: "-100%" }
    }
    , {
        name: "孫策 伯符", rarity: "黒", cl: "小覇王【恋姫】", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , note: "分類未確認"
    }
    , {
        name: "孫策 伯符", rarity: "黒", cl: "小覇王【恋姫】", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , note: "分類未確認"
    }
    , {
        name: "董卓 仲穎", rarity: "黒", cl: "暴君【恋姫】", AW: "覚醒前", skill: "通常"
        , stats: { other: "" }
        , note: "貫通化"
    }
    , {
        name: "董卓 仲穎", rarity: "黒", cl: "暴君【恋姫】", AW: "覚醒後", skill: "通常"
        , stats: { other: "" }
        , note: "貫通化"
    }
    , {
        name: "エリザベス", rarity: "黒", cl: "王女【七つの大罪】", AW: "覚醒前", skill: "通常"
        , stats: { abn: "-100%" }
        , note: "ボム"
    }
    , {
        name: "エリザベス", rarity: "黒", cl: "王女【七つの大罪】", AW: "覚醒後", skill: "通常"
        , stats: { abn: "-100%" }
        , note: "ボム"
    }
    , {
        name: [ "クラリス・", "ツァインブルグ" ], rarity: "黒", cl: "新米刑事【流星WA】", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.5", mr: "×1.4" }
    }
    , {
        name: [ "クラリス・", "ツァインブルグ" ], rarity: "黒", cl: "新米刑事【流星WA】", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.5", mr: "×1.4" }
    }
    , {
        name: "アテエル", rarity: "黒", cl: "不死鳥娘【モンスター娘TD】", AW: "覚醒後", skill: "覚醒"
        , stats: { draw: "(○)", redep: "25秒" }
    }
    , {
        name: "守護の聖樹", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { def: "×2.0" }
        , note: [ "ベルニス/クリスマス", "永続(自壊)" ]
    }
    , {
        name: "お守りエッグ", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , note: [ "リーフ/バニー", "タラニア/バニー", "ニーヴ/バニー", "永続" ]
    }
    , {
        name: "破魔の聖樹", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.4" }
        , note: [ "シャルロット/クリスマス", "永続(自壊)" ]
    }
    , {
        name: "かまいたちユキ", rarity: "トークン", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.6", mr: "×1.6" }
        , note: "群青姉妹"
    }
    , {
        name: "疾風かまいたちユキ", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.6", mr: "×1.6" }
        , note: "群青姉妹"
    }
    , {
        name: "門松トークン", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { rege: [ "20/秒", "?/?f" ] }
        , note: "アラン/お正月"
    }
    , {
        name: "シャドー", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { other: "" }
        , note: [ "リタ/水着", "隠密付与", "永続(自壊)" ]
    }
    , {
        name: "破魔の風鈴", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { abn: "-100%", rege: [ "40/秒", "20/15f" ] }
        , note: "リアナ/浴衣"
    }
    , {
        name: "かぼちゃ馬車", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
        , note: [ "デスピア/ハロウィン", "永続" ]
    }
    , {
        name: "ウェディングケーキ", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3" }
        , note: [ "エターナー/花嫁", "永続" ]
    }
    , {
        name: "ルベドアタノール", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.5" }
        , note: [ "ニコル", "永続" ]
    }
    , {
        name: "アウローラ(幻影)", rarity: "トークン", AW: "覚醒前", skill: "通常"
        , stats: { mr: "×2.0" }
        , note: "マルティナ"
    }
    , {
        name: "アウローラ(幻影)", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { mr: "×2.0" }
        , note: "マルティナ"
    }
    , {
        name: "ツキコ(幻影)", rarity: "トークン", AW: "覚醒前", skill: "通常"
        , stats: { abn: "-100%" }
        , note: "マルティナ/クリスマス"
    }
    , {
        name: "ツキコ(幻影)", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { abn: "-100%" }
        , note: "マルティナ/クリスマス"
    }
    , {
        name: "世界樹の苗", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3" }
        , note: "ラタトスク"
    }
    , {
        name: "きらめく聖樹", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { eva: "30%" }
        , note: "ローズ/クリスマス"
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
    
    target note 全体 発動時 分類未確認
    
    正月 水着 浴衣 バニー 花嫁
    
    お正月 温泉 バレンタイン 学園 エッグハント
    
    ジューンブライド サマー ハロウィン クリスマス

*/