// 属性スキル
buff.skill_cat = [
    {
        name: "王子【水着】", cl: "王子", skill: "通常(偶)"
        , stats: { atk: "×1.1" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "王子【天羽々斬】", cl: "王子", skill: "通常(～2)"
        , stats: { def: "×1.3" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "王子【天羽々斬】", cl: "王子", skill: "通常(3～)"
        , stats: { def: "×1.3" }
        , target: { home: [ "東の国" ] }
        , note: "永続"
    }
    , {
        name: "王子【天羽々斬】", cl: "王子", skill: "通常(～2)"
        , stats: { def: "×1.4" }
        , target: { home: [ "東の国" ] }
        , note: "Lv4"
    }
    , {
        name: "王子【天羽々斬】", cl: "王子", skill: "通常(3～)"
        , stats: { def: "×1.4" }
        , target: { home: [ "東の国" ] }
        , note: [ "永続", "Lv4" ]
    }
    , {
        name: "ちび王子", cl: "王子", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { others: [ "ちび" ] }
    }
    , {
        name: "アルヴァ", rarity: "黒", cl: "ウェポンマスター", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×2.0" }
        , target: { cl: [ "ソルジャー", "ヘビーアーマー", "ワルキューレ", "バンデット", "アーチャー" ] }
    }
    , {
        name: "アルヴァ", rarity: "白", cl: "ウェポンマスター", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { cl: [ "ダークファイター", "アベンジャー", "ボウライダー", "ロイヤルガード" ] }
    }
    , {
        name: "ラーワル", rarity: "黒", cl: "魔導生命体", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×5.0", def: "×5.0" }
        , target: { cl: [ "魔導生命体" ] }
    }
    , {
        name: "ラーワル", rarity: "白", cl: "魔導生命体", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+300%", def: "×4.0" }
        , target: { cl: [ "魔導生命体" ] }
    }
    , {
        name: "マルゴット", rarity: "黒", cl: "ソルジャー", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.2" }
        , target: { depType: [ "近接" ] }
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "マルゴット", rarity: "黒", cl: "ソルジャー", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.2" }
        , target: { depType: [ "近接" ] }
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "アルティア/水着", rarity: "黒", cl: "ソルジャー", AW: "覚醒前", skill: "通常"
        , stats: { cost: "-30%" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "アルティア/水着", rarity: "黒", cl: "ソルジャー", AW: "覚醒後", skill: "通常"
        , stats: { cost: "-30%" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "アルティア/水着", rarity: "黒", cl: "ソルジャー", AW: "覚醒後", skill: "覚醒"
        , stats: { cost: "-30%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "ケイティ/正月", rarity: "白", cl: "ソルジャー", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+50%", atk: "×1.5", def: "×1.5" }
        , target: { cl: [ "ソルジャー" ] }
        , note: "永続"
    }
    , {
        name: "ノーマ", rarity: "白", cl: "ソルジャー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { cl: [ "魔神", "ダークストーカー", "デモンサモナー" ] }
    }
    , {
        name: "フリア", rarity: "黒", cl: "ワルキューレ", AW: "覚醒前", skill: "通常"
        , stats: { draw: "(○)", redep: "40秒" }
        , target: { race: [ "人間", "天使", "鳥人"/*, "半神"*/ ] }
        , note: "永続"
    }
    , {
        name: "フリア", rarity: "黒", cl: "ワルキューレ", AW: "覚醒後", skill: "通常"
        , stats: { draw: "(○)", redep: "40秒" }
        , target: { race: [ "人間", "天使", "鳥人"/*, "半神"*/ ] }
        , note: "永続"
    }
    , {
        name: "ヨシノ", rarity: "黒", cl: "プリンセス", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.5" }
        , target: { cl: [ "サムライ", "忍者" ] }
    }
    , {
        name: "ヨシノ", rarity: "黒", cl: "プリンセス", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.5" }
        , target: { cl: [ "サムライ", "忍者" ] }
    }
    , {
        name: "ヨシノ", rarity: "黒", cl: "プリンセス", AW: "覚醒後", skill: "通常"
        , stats: { cost: "-50%" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "ヨシノ", rarity: "黒", cl: "プリンセス", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3", cost: "-50%", redep: "40秒" }
        , target: { home: [ "東の国" ] }
        , note: "永続"
    }
    , {
        name: "シビラ/聖剣", rarity: "黒", cl: "プリンセス", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×2.0" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "シビラ/聖剣", rarity: "黒", cl: "プリンセス", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×2.0" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ロゼット/正月", rarity: "金", cl: "プリンセス", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: [
            { rarity: [ "金", "銀", "銅", "鉄" ] }
            , { season: [ "お正月" ] }
        ]
    }
    , {
        name: "ロゼット/正月", rarity: "金", cl: "プリンセス", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: [
            { rarity: [ "金", "銀", "銅", "鉄" ] }
            , { season: [ "お正月" ] }
        ]
    }
    , {
        name: "ロゼット/正月", rarity: "金", cl: "プリンセス", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.4", def: "×1.4" }
        , target: { rarity: [ "金", "銀", "銅", "鉄" ] }
        , note: "終了時、対象のHP-70%"
    }
    , {
        name: "ちびヨシノ", rarity: "ちび", cl: "プリンセス", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.5" }
        , target: { cl: [ "サムライ", "忍者" ] }
    }
    , {
        name: "ピリカ", rarity: "白", cl: "イビルプリンセス", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.4", other: "" }
        , target: { race: [ "獣人" ] }
        , note: "オート"
    }
    , {
        name: "アマンダ", rarity: "黒", cl: "バンデット", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+70%", cost: "-30%" }
        , target: { cl: [ "バンデット" ] }
        , note: "永続"
    }
    , {
        name: "ヴルム/水着", rarity: "黒", cl: "中級竜兵", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.4" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "ロタン", rarity: "黒", cl: "ドラゴンプリンセス", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "ロタン", rarity: "黒", cl: "ドラゴンプリンセス", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "ヒバリ/バレンタイン", rarity: "黒", cl: "サムライ", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.1", def: "×1.1" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ヒバリ/バレンタイン", rarity: "黒", cl: "サムライ", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.1", def: "×1.1" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "コーネリア/クリスマス", rarity: "黒", cl: "ダークファイター", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.4" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "ヘイオス/クリスマス", rarity: "黒", cl: "ダークファイター", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.5" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "ヘイオス/クリスマス", rarity: "黒", cl: "ダークファイター", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.5" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "ナキア", rarity: "白", cl: "アベンジャー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.4" }
        , target: { race: [ "デーモン系" ] }
    }
    , {
        name: "アリス/バレンタイン", rarity: "黒", cl: "モンク", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.25", def: "×1.25" }
        , target: { cl: [ "王子" ] }
        , note: "永続"
    }
    , {
        name: "アリス/バレンタイン", rarity: "黒", cl: "モンク", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.25", def: "×1.25" }
        , target: { cl: [ "王子" ] }
        , note: "永続"
    }
    , {
        name: "アリス/バレンタイン", rarity: "黒", cl: "モンク", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.25", def: "×1.25" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ヘレナ", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.25" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "ヘレナ", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.25" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "レオラ/水着", rarity: "白", cl: "前衛戦術家", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "サマー" ] }
        ]
        , note: "永続"
    }
    , {
        name: "レオラ/水着", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "サマー" ] }
        ]
        , note: "永続"
    }
    , {
        name: "レオラ/水着", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "ヘレナ/クリスマス", rarity: "白", cl: "前衛戦術家", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.8", def: "×1.8", draw: "○" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "ヘレナ/クリスマス", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.8", def: "×1.8", draw: "○" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "ヘレナ/クリスマス", rarity: "白", cl: "前衛戦術家", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×2.5", draw: "○" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "リッカ/花嫁", rarity: "白", cl: "魔法剣士", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.7" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "リッカ/花嫁", rarity: "白", cl: "魔法剣士", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.7" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ミルノ/浴衣", rarity: "白", cl: "エンジェル", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , target: { season: [ "サマー" ] }
        , note: "範囲"
    }
    , {
        name: "イブキ", rarity: "黒", cl: "セーラー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3", other: "" }
        , target: { depType: [ "遠距離" ] }
        , note: "オート"
    }
    , {
        name: "イブキ", rarity: "黒", cl: "セーラー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3", other: "" }
        , target: { depType: [ "遠距離" ] }
        , note: "オート"
    }
    , {
        name: "ちびイブキ", rarity: "ちび", cl: "セーラー", skill: "通常"
        , stats: { atk: "×1.3", other: "" }
        , target: { depType: [ "遠距離" ] }
        , note: "オート"
    }
    , {
        name: "キュウビ/学園", rarity: "黒", cl: "妖狐", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "学園" ] }
        ]
        , note: "分類未確認"
    }
    , {
        name: "キュウビ/学園", rarity: "黒", cl: "妖狐", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "学園" ] }
        ]
        , note: "分類未確認"
    }
    , {
        name: "イズナ", rarity: "白", cl: "妖狐", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "イズナ", rarity: "白", cl: "妖狐", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "イズナ", rarity: "白", cl: "妖狐", AW: "覚醒後", skill: "覚醒(1)"
        , stats: { atk: "×1.1", other: "" }
        , target: { race: [ "妖怪" ] }
        , note: "オート"
    }
    , {
        name: "イズナ", rarity: "白", cl: "妖狐", AW: "覚醒後", skill: "覚醒(2)"
        , stats: { atk: "×1.3", other: "" }
        , target: { race: [ "妖怪" ] }
        , note: "オート"
    }
    , {
        name: "イズナ", rarity: "白", cl: "妖狐", AW: "覚醒後", skill: "覚醒(3～)"
        , stats: { atk: "×1.5", other: "" }
        , target: { race: [ "妖怪" ] }
        , note: "オート"
    }
    , {
        name: "エレット/バレンタイン", rarity: "白", cl: "神官戦士", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.6" }
        , target: { season: [ "バレンタイン" ] }
        , note: "範囲"
    }
    , {
        name: "エレット/バレンタイン", rarity: "白", cl: "神官戦士", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.6" }
        , target: { season: [ "バレンタイン" ] }
        , note: "範囲"
    }
    , {
        name: "シルセス/花嫁", rarity: "黒", cl: "メイジアーマー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.2", abn: "-100%" }
        , target: { sex: [ "女性" ] }
        , note: "範囲"
    }
    , {
        name: "フィナン", rarity: "白", cl: "メイジアーマー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.4" }
        , target: { cl: [ "ヘビーアーマー", "神官戦士", "メイジアーマー", "重装砲兵" ] }
    }
    , {
        name: "フィナン", rarity: "白", cl: "メイジアーマー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.4" }
        , target: { cl: [ "ヘビーアーマー", "神官戦士", "メイジアーマー", "重装砲兵" ] }
    }
    , {
        name: "フィナン", rarity: "白", cl: "メイジアーマー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , target: { cl: [ "ヘビーアーマー", "神官戦士", "メイジアーマー", "重装砲兵" ] }
        , note: "永続"
    }
    , {
        name: "セーラ", rarity: "黒", cl: "メイド", AW: "覚醒前", skill: "通常"
        , stats: { def: "×2.0" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "セーラ", rarity: "黒", cl: "メイド", AW: "覚醒後", skill: "通常"
        , stats: { def: "×2.0" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "セーラ", rarity: "黒", cl: "メイド", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×2.0", def: "×1.5" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "アリエル", rarity: "黒", cl: "メイド", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.5" }
        , target: { cl: [ "神官戦士", "ヒーラー", "ビショップ", "ルーンアコライト", "アコライト" ] }
        , note: "永続"
    }
    , {
        name: "アリエル", rarity: "黒", cl: "メイド", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.5" }
        , target: { cl: [ "神官戦士", "ヒーラー", "ビショップ", "ルーンアコライト", "アコライト" ] }
        , note: "永続"
    }
    , {
        name: "アリエル", rarity: "黒", cl: "メイド", AW: "覚醒後", skill: "覚醒(～2)"
        , stats: { atk: "×1.8", def: "×1.8", mr: "×1.8", other: "" }
        , target: { cl: [ "神官戦士", "ヒーラー", "ビショップ", "ルーンアコライト", "アコライト" ] }
        , note: "隠密付与"
    }
    , {
        name: "アリエル", rarity: "黒", cl: "メイド", AW: "覚醒後", skill: "覚醒(3～)"
        , stats: { atk: "×1.8", def: "×1.8", mr: "×1.8", other: "" }
        , target: { cl: [ "神官戦士", "ヒーラー", "ビショップ", "ルーンアコライト", "アコライト" ] }
        , note: "隠密付与"
        , note: "永続"
    }
    , {
        name: "セーラ/水着", rarity: "黒", cl: "メイド", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.5" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { season: [ "サマー" ] }
            , { others: [ "全プリンセス系" ] }
        ]
        , note: "分類未確認"
    }
    , {
        name: "セーラ/水着", rarity: "黒", cl: "メイド", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.5" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { season: [ "サマー" ] }
            , { others: [ "全プリンセス系" ] }
        ]
        , note: "分類未確認"
    }
    , {
        name: "セーラ/水着", rarity: "黒", cl: "メイド", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { season: [ "サマー" ] }
            , { others: [ "全プリンセス系" ] }
        ]
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "ファニュア", rarity: "黒", cl: "メイド", AW: "覚醒前", skill: "通常"
        , stats: { abn: "-100%" }
        , target: [
            { race: [ "デーモン系" ] }
            , { others: [ "アンデッド" ] }
        ]
    }
    , {
        name: "ファニュア", rarity: "黒", cl: "メイド", AW: "覚醒後", skill: "通常"
        , stats: { abn: "-100%" }
        , target: [
            { race: [ "デーモン系" ] }
            , { others: [ "アンデッド" ] }
        ]
    }
    , {
        name: "ファニュア", rarity: "黒", cl: "メイド", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+30%", atk: "×1.3" }
        , target: [
            { race: [ "デーモン系" ] }
            , { others: [ "アンデッド" ] }
        ]
        , note: "分類未確認"
    }
    , {
        name: "リーナ", rarity: "白", cl: "メイド", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.4", def: "×1.4" }
        , target: { race: [ "獣人", "エルフ系", "ドワーフ", "オーク", "ゴブリン" ] }
    }
    , {
        name: "サクラ", rarity: "白", cl: "メイド", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.4" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "サクラ", rarity: "白", cl: "メイド", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.4" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "サクラ", rarity: "白", cl: "メイド", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.2" }
        , target: { home: [ "東の国" ] }
        , note: "永続"
    }
    , {
        name: "ソーマ/メイド", rarity: "白", cl: "メイド", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: [
            { cl: [ "王子" ] }
            , { others: [ "弓兵" ] }
        ]
    }
    , {
        name: "ちびセーラ", rarity: "ちび", cl: "メイド", skill: "通常"
        , stats: { def: "×1.8" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "アリシア", rarity: "白", cl: "ロイヤルガード", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×2.0" }
        , target: { cl: [
            "王子", "ワルキューレ", "ペガサスライダー"
            , "ドラゴンライダー", "魔竜騎士", "ロイヤルガード"
        ] }
    }
    , {
        name: "アリシア", rarity: "白", cl: "ロイヤルガード", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×2.0" }
        , target: { cl: [
            "王子", "ワルキューレ", "ペガサスライダー"
            , "ドラゴンライダー", "魔竜騎士", "ロイヤルガード"
        ] }
    }
    , {
        name: "ちびアリシア", rarity: "ちび", cl: "ロイヤルガード", skill: "通常"
        , stats: { atk: "×2.0" }
        , target: { cl: [
            "王子", "ワルキューレ", "ペガサスライダー"
            , "ドラゴンライダー", "魔竜騎士", "ロイヤルガード"
        ] }
    }
    , {
        name: "ナタク/水着", rarity: "黒", cl: "仙人", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.5" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "ナタク/水着", rarity: "黒", cl: "仙人", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.5" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "メフィスト/水着", rarity: "黒", cl: "魔神", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.5" }
        , target: [
            { race: [ "デーモン系", "オーク", "ゴブリン" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "メフィスト/水着", rarity: "黒", cl: "魔神", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.5" }
        , target: [
            { race: [ "デーモン系", "オーク", "ゴブリン" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "カスミ", rarity: "白", cl: "ぬらりひょん", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "カスミ", rarity: "白", cl: "ぬらりひょん", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "カスミ", rarity: "白", cl: "ぬらりひょん", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+10%", atk: "×1.1", def: "×1.1" }
        , target: { race: [ "妖怪" ] }
        , note: "永続"
    }
    , {
        name: "ディアナ", rarity: "黒", cl: "インペリアルナイト", AW: "覚醒前", skill: "通常"
        , stats: { cost: "-30%" }
        , target: { home: [ "白の帝国" ] }
        , note: "永続"
    }
    , {
        name: "ディアナ", rarity: "黒", cl: "インペリアルナイト", AW: "覚醒後", skill: "通常"
        , stats: { cost: "-30%" }
        , target: { home: [ "白の帝国" ] }
        , note: "永続"
    }
    , {
        name: "ティニー", rarity: "黒", cl: "鍛冶職人", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.3" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ティニー", rarity: "黒", cl: "鍛冶職人", AW: "覚1", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.3" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ティニー", rarity: "黒", cl: "鍛冶職人", AW: "覚1", skill: "覚醒"
        , stats: { atk: "×1.3", def: "×1.2" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ティニー", rarity: "黒", cl: "鍛冶職人", AW: "覚2a", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ティニー", rarity: "黒", cl: "鍛冶職人", AW: "覚2a", skill: "覚醒"
        , stats: { atk: "×1.4", def: "×1.2" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ティニー", rarity: "黒", cl: "鍛冶職人", AW: "覚2b", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.4" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ティニー", rarity: "黒", cl: "鍛冶職人", AW: "覚2b", skill: "覚醒"
        , stats: { atk: "×1.4", def: "×1.3" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ウルカノ", rarity: "黒", cl: "鍛冶職人", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "遠距離" ] }
        ]
    }
    , {
        name: "ウルカノ", rarity: "黒", cl: "鍛冶職人", AW: "覚1", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "遠距離" ] }
        ]
    }
    , {
        name: "ウルカノ", rarity: "黒", cl: "鍛冶職人", AW: "覚1", skill: "覚醒"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "遠距離" ] }
        ]
    }
    , {
        name: "ウルカノ", rarity: "黒", cl: "鍛冶職人", AW: "覚2a", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.2" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "遠距離" ] }
        ]
    }
    , {
        name: "ウルカノ", rarity: "黒", cl: "鍛冶職人", AW: "覚2a", skill: "覚醒"
        , stats: { atk: "×1.3", def: "×1.2" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "遠距離" ] }
        ]
    }
    , {
        name: "ウルカノ", rarity: "黒", cl: "鍛冶職人", AW: "覚2b", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "遠距離" ] }
        ]
    }
    , {
        name: "ウルカノ", rarity: "黒", cl: "鍛冶職人", AW: "覚2b", skill: "覚醒"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "遠距離" ] }
        ]
    }
    , {
        name: "サンディー", rarity: "白", cl: "鍛冶職人", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { cl: [
            "王子", "ソルジャー", "サムライ", "ダークファイター"
            , "前衛戦術家", "ソードマスター", "インペリアルナイト"
        ] }
    }
    , {
        name: "サンディー", rarity: "白", cl: "鍛冶職人", AW: "覚1", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { cl: [
            "王子", "ソルジャー", "サムライ", "ダークファイター"
            , "前衛戦術家", "ソードマスター", "インペリアルナイト"
        ] }
    }
    , {
        name: "サンディー", rarity: "白", cl: "鍛冶職人", AW: "覚1", skill: "覚醒"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { cl: [
            "王子", "ソルジャー", "サムライ", "ダークファイター"
            , "前衛戦術家", "ソードマスター", "インペリアルナイト"
        ] }
        , note: "永続"
    }
    , {
        name: "サンディー", rarity: "白", cl: "鍛冶職人", AW: "覚2a", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.2" }
        , target: { cl: [
            "王子", "ソルジャー", "サムライ", "ダークファイター"
            , "前衛戦術家", "ソードマスター", "インペリアルナイト"
        ] }
    }
    , {
        name: "サンディー", rarity: "白", cl: "鍛冶職人", AW: "覚2a", skill: "覚醒"
        , stats: { atk: "×1.3", def: "×1.2" }
        , target: { cl: [
            "王子", "ソルジャー", "サムライ", "ダークファイター"
            , "前衛戦術家", "ソードマスター", "インペリアルナイト"
        ] }
        , note: "永続"
    }
    , {
        name: "キャラット", rarity: "白", cl: "鍛冶職人", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { cl: [
            "王子", "ヘビーアーマー", "神官戦士", "メイジアーマー"
            , "ロイヤルガード", "重装砲兵", "グランドナイト"
        ] }
    }
    , {
        name: "キャラット", rarity: "白", cl: "鍛冶職人", AW: "覚1", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { cl: [
            "王子", "ヘビーアーマー", "神官戦士", "メイジアーマー"
            , "ロイヤルガード", "重装砲兵", "グランドナイト"
        ] }
    }
    , {
        name: "キャラット", rarity: "白", cl: "鍛冶職人", AW: "覚1", skill: "覚醒"
        , stats: { atk: "×1.2", def: "×1.4" }
        , target: { cl: [
            "王子", "ヘビーアーマー", "神官戦士", "メイジアーマー"
            , "ロイヤルガード", "重装砲兵", "グランドナイト"
        ] }
    }
    , {
        name: "キャラット", rarity: "白", cl: "鍛冶職人", AW: "覚2b", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: { cl: [
            "王子", "ヘビーアーマー", "神官戦士", "メイジアーマー"
            , "ロイヤルガード", "重装砲兵", "グランドナイト"
        ] }
    }
    , {
        name: "キャラット", rarity: "白", cl: "鍛冶職人", AW: "覚2b", skill: "覚醒"
        , stats: { atk: "×1.3", def: "×1.5" }
        , target: { cl: [
            "王子", "ヘビーアーマー", "神官戦士", "メイジアーマー"
            , "ロイヤルガード", "重装砲兵", "グランドナイト"
        ] }
    }
    , {
        name: "ルミアン", rarity: "白", cl: "鍛冶職人", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { cl: [
            "王子", "ワルキューレ", "ペガサスライダー", "ドラゴンライダー"
            , "魔竜騎士", "ボウライダー", "グリフィンライダー"
        ] }
    }
    , {
        name: "ルミアン", rarity: "白", cl: "鍛冶職人", AW: "覚1", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { cl: [
            "王子", "ワルキューレ", "ペガサスライダー", "ドラゴンライダー"
            , "魔竜騎士", "ボウライダー", "グリフィンライダー"
        ] }
    }
    , {
        name: "ルミアン", rarity: "白", cl: "鍛冶職人", AW: "覚1", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , target: { cl: [
            "王子", "ワルキューレ", "ペガサスライダー", "ドラゴンライダー"
            , "魔竜騎士", "ボウライダー", "グリフィンライダー"
        ] }
    }
    , {
        name: "ルミアン", rarity: "白", cl: "鍛冶職人", AW: "覚2a", skill: "通常"
        , stats: { atk: "×1.4" }
        , target: { cl: [
            "王子", "ワルキューレ", "ペガサスライダー", "ドラゴンライダー"
            , "魔竜騎士", "ボウライダー", "グリフィンライダー"
        ] }
    }
    , {
        name: "ルミアン", rarity: "白", cl: "鍛冶職人", AW: "覚2a", skill: "覚醒"
        , stats: { atk: "×1.4" }
        , target: { cl: [
            "王子", "ワルキューレ", "ペガサスライダー", "ドラゴンライダー"
            , "魔竜騎士", "ボウライダー", "グリフィンライダー"
        ] }
    }
    , {
        name: "フィスティア", rarity: "白", cl: "鍛冶職人", AW: "覚醒前", skill: "通常"
        , stats: { hp: "+40%", atk: "×1.2" }
        , target: { cl: [
            "王子", "バンデット", "アベンジャー", "モンク"
            , "グラディエーター", "モンスターブレイカー"
        ] }
    }
    , {
        name: "フィスティア", rarity: "白", cl: "鍛冶職人", AW: "覚1", skill: "通常"
        , stats: { hp: "+40%", atk: "×1.2", dur: "+5秒" }
        , target: { cl: [
            "王子", "バンデット", "アベンジャー", "モンク"
            , "グラディエーター", "モンスターブレイカー"
        ] }
    }
    , {
        name: "フィスティア", rarity: "白", cl: "鍛冶職人", AW: "覚1", skill: "覚醒"
        , stats: { hp: "+30%", atk: "×1.3", dur: "+5秒" }
        , target: { cl: [
            "王子", "バンデット", "アベンジャー", "モンク"
            , "グラディエーター", "モンスターブレイカー"
        ] }
    }
    , {
        name: "フィスティア", rarity: "白", cl: "鍛冶職人", AW: "覚2a", skill: "通常"
        , stats: { hp: "+40%", atk: "×1.3", dur: "+5秒" }
        , target: { cl: [
            "王子", "バンデット", "アベンジャー", "モンク"
            , "グラディエーター", "モンスターブレイカー"
        ] }
    }
    , {
        name: "フィスティア", rarity: "白", cl: "鍛冶職人", AW: "覚2a", skill: "覚醒"
        , stats: { hp: "+30%", atk: "×1.4", dur: "+5秒" }
        , target: { cl: [
            "王子", "バンデット", "アベンジャー", "モンク"
            , "グラディエーター", "モンスターブレイカー"
        ] }
    }
    , {
        name: "ミスリア", rarity: "白", cl: "鍛冶職人", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: [
            { cl: [ "王子", "魔法剣士" ] }
            , { others: [ "全プリンセス系" ] }
        ]
        , note: "永続"
    }
    , {
        name: "ミスリア", rarity: "白", cl: "鍛冶職人", AW: "覚1", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: [
            { cl: [ "王子", "魔法剣士" ] }
            , { others: [ "全プリンセス系" ] }
        ]
        , note: "永続"
    }
    , {
        name: "ミスリア", rarity: "白", cl: "鍛冶職人", AW: "覚2a", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.2" }
        , target: [
            { cl: [ "王子", "魔法剣士" ] }
            , { others: [ "全プリンセス系" ] }
        ]
        , note: "永続"
    }
    , {
        name: "グラティア", rarity: "白", cl: "鍛冶職人", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: [
            { cl: [ "王子" ] }
            , { home: [ "白の帝国" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "グラティア", rarity: "白", cl: "鍛冶職人", AW: "覚1", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: [
            { cl: [ "王子" ] }
            , { home: [ "白の帝国" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "グラティア", rarity: "白", cl: "鍛冶職人", AW: "覚1", skill: "覚醒"
        , stats: { atk: "×1.3", def: "×1.1" }
        , target: [
            { cl: [ "王子" ] }
            , { home: [ "白の帝国" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "グラティア", rarity: "白", cl: "鍛冶職人", AW: "覚醒", skill: "覚醒"
        , stats: { ct: "-60%" }
        , target: { cl: [ "皇帝" ] }
    }
    , {
        name: "グラティア", rarity: "白", cl: "鍛冶職人", AW: "覚2b", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: [
            { cl: [ "王子" ] }
            , { home: [ "白の帝国" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "グラティア", rarity: "白", cl: "鍛冶職人", AW: "覚2b", skill: "覚醒"
        , stats: { atk: "×1.4", def: "×1.2" }
        , target: [
            { cl: [ "王子" ] }
            , { home: [ "白の帝国" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "グラティア/水着", rarity: "白", cl: "鍛冶職人", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.1" }
        , target: [
            { cl: [ "王子" ] }
            , { season: [ "サマー" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "グラティア/水着", rarity: "白", cl: "鍛冶職人", AW: "覚1", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.1" }
        , target: [
            { cl: [ "王子" ] }
            , { home: [ "白の帝国" ], depType: [ "近接" ] }
            , { season: [ "サマー" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "グラティア/水着", rarity: "白", cl: "鍛冶職人", AW: "覚1", skill: "覚醒"
        , stats: { atk: "×1.3", ct: "-50%" }
        , target: [
            { cl: [ "王子" ] }
            , { home: [ "白の帝国" ], depType: [ "近接" ] }
            , { season: [ "サマー" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "グラティア/水着", rarity: "白", cl: "鍛冶職人", AW: "覚2a", skill: "通常"
        , stats: { atk: "×1.4", def: "×1.1" }
        , target: [
            { cl: [ "王子" ] }
            , { home: [ "白の帝国" ], depType: [ "近接" ] }
            , { season: [ "サマー" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "グラティア/水着", rarity: "白", cl: "鍛冶職人", AW: "覚2a", skill: "覚醒"
        , stats: { atk: "×1.4", ct: "-50%" }
        , target: [
            { cl: [ "王子" ] }
            , { home: [ "白の帝国" ], depType: [ "近接" ] }
            , { season: [ "サマー" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ゴルドー", rarity: "金", cl: "鍛冶職人", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "男性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ゴルドー", rarity: "金", cl: "鍛冶職人", AW: "覚1", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "男性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ゴルドー", rarity: "金", cl: "鍛冶職人", AW: "覚1", skill: "覚醒"
        , stats: { hp: "+30%", atk: "×1.2", def: "×1.2" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "男性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ゴルドー", rarity: "金", cl: "鍛冶職人", AW: "覚2b", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "男性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ゴルドー", rarity: "金", cl: "鍛冶職人", AW: "覚2b", skill: "覚醒"
        , stats: { hp: "+30%", atk: "×1.3", def: "×1.3" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "男性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ちびティニー", rarity: "ちび", cl: "鍛冶職人", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.3" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "アスラハ", rarity: "黒", cl: "グランドナイト", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.4", range: "×1.3" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "アスラハ", rarity: "黒", cl: "グランドナイト", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.4", range: "×1.3" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "サリス", rarity: "白", cl: "グランドナイト", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { cl: [ "グランドナイト" ] }
    }
    , {
        name: "レイファ", rarity: "青", cl: "グランドナイト", AW: "覚醒後", skill: [ "通常", "覚醒" ]
        , stats: { atk: "×1.15" }
        , target: { race: [ "獣人" ] }
    }
    , {
        name: "プルーム", rarity: "白", cl: "グリフィンライダー", AW: "覚醒前", skill: "通常"
        , stats: { hp: "+30%", atk: "×1.5" }
        , target: { race: [ "エルフ系", "ドワーフ" ] }
    }
    , {
        name: "プルーム", rarity: "白", cl: "グリフィンライダー", AW: "覚醒後", skill: "通常"
        , stats: { hp: "+30%", atk: "×1.5" }
        , target: { race: [ "エルフ系", "ドワーフ" ] }
    }
    , {
        name: "胡喜美", rarity: "白", cl: "邪仙", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.5", atkCd: "11f化" }
        , target: { race: [ "仙人" ] }
    }
    , {
        name: "胡喜美", rarity: "白", cl: "邪仙", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.5", atkCd: "11f化" }
        , target: { race: [ "仙人" ] }
    }
    , {
        name: "趙紅明", rarity: "白", cl: "邪仙", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { others: [ "GG持ち" ] }
    }
    , {
        name: "趙紅明", rarity: "白", cl: "邪仙", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { others: [ "GG持ち" ] }
    }
    , {
        name: "シャディア/バレンタイン", rarity: "黒", cl: "魔王親衛隊", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.8" }
        , target: { cl: [ "王子" ] }
        , note: "分類未確認"
    }
    , {
        name: "シャディア/バレンタイン", rarity: "黒", cl: "魔王親衛隊", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.8" }
        , target: { cl: [ "王子" ] }
        , note: "分類未確認"
    }
    , {
        name: "ツグミ", rarity: "黒", cl: "ぬえ", AW: "覚醒前", skill: "通常"
        , stats: { draw: "(○)", redep: "30秒" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "ツグミ", rarity: "黒", cl: "ぬえ", AW: "覚醒後", skill: "通常"
        , stats: { draw: "(○)", redep: "30秒" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "ツグミ", rarity: "黒", cl: "ぬえ", AW: "覚醒後", skill: "覚醒"
        , stats: { draw: "(○)", redep: "30秒" }
        , target: { race: [ "妖怪" ] }
        , note: "永続"
    }
    , {
        name: "パヤモ", rarity: "黒", cl: "デーモンロード", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+20%", def: "×1.2" }
        , target: { others: [ "魔界" ] }
    }
    , {
        name: "イルムガルト", rarity: "白", cl: "デーモンロード", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.6", mr: "+15" }
        , target: { race: [ "デーモン系", "オーク", "ゴブリン" ] }
    }
    , {
        name: "イルムガルト", rarity: "白", cl: "デーモンロード", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.6", mr: "+15" }
        , target: { race: [ "デーモン系", "オーク", "ゴブリン" ] }
    }
    , {
        name: "アブグルント", rarity: "白", cl: "デーモンロード", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.4" }
        , target: [
            { home: [ "白の帝国" ] }
            , { race: [ "デーモン系" ] }
        ]
    }
    , {
        name: "アブグルント", rarity: "白", cl: "デーモンロード", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.4" }
        , target: [
            { home: [ "白の帝国" ] }
            , { race: [ "デーモン系" ] }
        ]
    }
    , {
        name: "オーガスタ/バレンタイン", rarity: "黒", cl: "料理人", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "タオパオ", rarity: "白", cl: "料理人", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { others: [ "魔術師" ] }
    }
    , {
        name: "タオパオ", rarity: "白", cl: "料理人", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { others: [ "魔術師" ] }
    }
    , {
        name: "ユッタ", rarity: "白", cl: "料理人", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "アヅミ", rarity: "白", cl: "料理人", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "アヅミ", rarity: "白", cl: "料理人", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "アシュリン", rarity: "白", cl: "料理人", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { others: [ "アンデッド" ] }
        , note: "永続"
    }
    , {
        name: "アヅミ/お正月", rarity: "白", cl: "料理人", AW: "覚醒前", skill: "通常"
        , stats: { hp: "+40%" }
        , target: [
            { race: [ "妖怪" ] }
            , { season: [ "お正月" ] }
        ]
    }
    , {
        name: "アヅミ/お正月", rarity: "白", cl: "料理人", AW: "覚醒後", skill: "通常"
        , stats: { hp: "+40%" }
        , target: [
            { cl: [ "王子" ] }
            , { race: [ "妖怪" ] }
            , { season: [ "お正月" ] }
        ]
    }
    , {
        name: "アヅミ/お正月", rarity: "白", cl: "料理人", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+20%", atk: "×1.1", def: "×1.1" }
        , target: [
            { cl: [ "王子" ] }
            , { race: [ "妖怪" ] }
            , { season: [ "お正月" ] }
        ]
        , note: "永続"
    }
    , {
        name: "ヤマブキ", rarity: "金", cl: "料理人", AW: "覚醒前", skill: "通常"
        , stats: { range: "×1.2" }
        , target: { others: [ "弓兵" ] }
    }
    , {
        name: "ヤマブキ", rarity: "金", cl: "料理人", AW: "覚醒後", skill: "通常"
        , stats: { range: "×1.2" }
        , target: { others: [ "弓兵" ] }
    }
    , {
        name: "ヤマブキ", rarity: "金", cl: "料理人", AW: "覚醒後", skill: "覚醒"
        , stats: { range: "×1.1" }
        , target: { others: [ "弓兵" ] }
        , note: "永続"
    }
    , {
        name: "マグリカ", rarity: "銀", cl: "料理人", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { rarity: [ "銀" ] }
    }
    , {
        name: "エフネ/正月", rarity: "白", cl: "デモンルーン", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.6" }
        , target: [
            { race: [ "デーモン系" ] }
            , { season: [ "お正月" ] }
        ]
        , note: "範囲"
    }
    , {
        name: "ハリナ/水着", rarity: "黒", cl: "エンプレス", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.4", def: "×1.4" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "フィーヌ/温泉", rarity: "白", cl: "シーソルジャー", AW: "覚醒後", skill: "覚醒"
        , stats: { cost: "-30%" }
        , target: { others: [ "深海" ] }
    }
    , {
        name: "カゴメ", rarity: "黒", cl: "ぬりかべ", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.5" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "カゴメ", rarity: "黒", cl: "ぬりかべ", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.5" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "カザキリ", rarity: "白", cl: "霊刀つくもがみ", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.1" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "カオル", rarity: "白", cl: "戦巫女", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.5" }
        , target: { home: [ "白の帝国" ] }
        , note: "範囲"
    }
    , {
        name: "アラン", rarity: "黒", cl: "儀仗軍神", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.8" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "アラン", rarity: "黒", cl: "儀仗軍神", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.8" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "アラン/お正月", rarity: "黒", cl: "儀仗軍神", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.5" }
        , target: [
            { race: [ "神", "半神" ] }
            , { season: [ "お正月" ] }
        ]
        , note: "範囲"
    }
    , {
        name: "アラン/お正月", rarity: "黒", cl: "儀仗軍神", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.5" }
        , target: [
            { race: [ "神", "半神" ] }
            , { season: [ "お正月" ] }
        ]
        , note: "範囲"
    }
    , {
        name: "アラン/お正月", rarity: "黒", cl: "儀仗軍神", AW: "覚醒後", skill: "覚醒(1)"
        , stats: { atk: "×1.2" }
        , target: [
            { race: [ "神", "半神" ] }
            , { season: [ "お正月" ] }
        ]
        , note: "範囲"
    }
    , {
        name: "アラン/お正月", rarity: "黒", cl: "儀仗軍神", AW: "覚醒後", skill: "覚醒(2～)"
        , stats: { atk: "×1.3" }
        , target: [
            { race: [ "神", "半神" ] }
            , { season: [ "お正月" ] }
        ]
        , note: "範囲"
    }
    , {
        name: "誅子", rarity: "黒", cl: "武侠", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: { home: [ "華の国" ] }
        , note: "永続"
    }
    , {
        name: "誅子", rarity: "黒", cl: "武侠", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: { home: [ "華の国" ] }
        , note: "永続"
    }
    , {
        name: "女王子", rarity: "黒", cl: "女王子", AW: "覚醒前", skill: "通常"
        , stats: { hp: "+50%", atk: "×1.2", def: "×1.2" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "女王子", rarity: "黒", cl: "女王子", AW: "覚醒後", skill: "通常"
        , stats: { hp: "+50%", atk: "×1.2", def: "×1.2" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "ダーク王子", rarity: "黒", cl: "ダーク王子", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: [
            { cl: [ "政務官【闇の軍勢】" ] }
            , { race: [ "デーモン系", "ゴブリン", "オーク" ] }
            , { others: [ "アンデッド", "魔界" ] }
        ]
    }
    , {
        name: "ダーク王子", rarity: "黒", cl: "ダーク王子", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: [
            { cl: [ "政務官【闇の軍勢】" ] }
            , { race: [ "デーモン系", "ゴブリン", "オーク" ] }
            , { others: [ "アンデッド", "魔界" ] }
        ]
    }
    , {
        name: "アキレア", rarity: "黒", cl: "神話の継承者", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { race: [ "人間", "神", "半神" ] }
    }
    , {
        name: "アキレア", rarity: "黒", cl: "神話の継承者", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { race: [ "人間", "神", "半神" ] }
    }
    , {
        name: "白の皇帝", rarity: "黒", cl: "皇帝", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "白の皇帝", rarity: "黒", cl: "皇帝", AW: "覚醒後", skill: [ "通常", "覚醒" ]
        , stats: { atk: "×1.35", def: "×1.35" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "ちび白の皇帝", rarity: "ちび", cl: "皇帝", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "キャロップ", rarity: "白", cl: "アーチャー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.4" }
        , target: { cl: [ "ボウライダー", "アーチャー" ] }
    }
    , {
        name: "キャロット/バレンタイン", rarity: "白", cl: "アーチャー", AW: "覚醒前", skill: "通常"
        , stats: { range: "×1.2" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "キャロット/バレンタイン", rarity: "白", cl: "アーチャー", AW: "覚醒後", skill: "通常"
        , stats: { range: "×1.2" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "テュト/クリスマス", rarity: "黒", cl: "メイジ", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: [
            { season: [ "クリスマス" ] }
            , { others: [ "魔術師" ] }
        ]
        , note: "永続"
    }
    , {
        name: "テュト/クリスマス", rarity: "黒", cl: "メイジ", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: [
            { season: [ "クリスマス" ] }
            , { others: [ "魔術師" ] }
        ]
        , note: "永続"
    }
    , {
        name: "テュト/水着", rarity: "黒", cl: "メイジ", AW: "覚醒後", skill: "覚醒(1)"
        , stats: { range: "×1.1" }
        , target: [
            { season: [ "サマー" ] }
            , { others: [ "魔術師" ] }
        ]
    }
    , {
        name: "テュト/水着", rarity: "黒", cl: "メイジ", AW: "覚醒後", skill: "覚醒(2)"
        , stats: { range: "×1.2" }
        , target: [
            { season: [ "サマー" ] }
            , { others: [ "魔術師" ] }
        ]
    }
    , {
        name: "テュト/水着", rarity: "黒", cl: "メイジ", AW: "覚醒後", skill: "覚醒(3～)"
        , stats: { range: "×1.3" }
        , target: [
            { season: [ "サマー" ] }
            , { others: [ "魔術師" ] }
        ]
    }
    , {
        name: "メーリス/学園", rarity: "白", cl: "メイジ", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.4" }
        , target: { cl: [ "メイジ" ] }
    }
    , {
        name: "メーリス/学園", rarity: "白", cl: "メイジ", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.4" }
        , target: { cl: [ "メイジ" ] }
    }
    , {
        name: "ドゥマルデ", rarity: "黒", cl: "ヒーラー", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.5" }
        , target: { depType: [ "近接" ] }
        , note: "範囲"
    }
    , {
        name: "リアナ/浴衣", rarity: "黒", cl: "ヒーラー", AW: "覚醒後", skill: "覚醒"
        , stats: { redep: "25秒" }
        , target: { season: [ "サマー" ] }
        , note: [ "発動時", "死亡・撤退最後1体" ]
    }
    , {
        name: "デスピア/ハロウィン", rarity: "黒", cl: "ウィッチ", AW: "覚醒前", skill: "通常"
        , stats: { atkCd: "6f化" }
        , target: { season: [ "ハロウィン" ] }
    }
    , {
        name: "デスピア/ハロウィン", rarity: "黒", cl: "ウィッチ", AW: "覚醒後", skill: "通常"
        , stats: { atkCd: "6f化" }
        , target: { season: [ "ハロウィン" ] }
    }
    , {
        name: "クロリス/私服", rarity: "白", cl: "ウィッチ", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: { cl: [ "王子" ] }
        , note: "分類未確認"
    }
    , {
        name: "クロリス/私服", rarity: "白", cl: "ウィッチ", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: { cl: [ "王子" ] }
        , note: "分類未確認"
    }
    , {
        name: "クロリス/私服", rarity: "白", cl: "ウィッチ", AW: "覚醒後", skill: "覚醒(1)"
        , stats: { ct: "-100%" }
        , target: { cl: [ "王子" ] }
        , note: "ボム"
    }
    , {
        name: "デューオ/クリスマス", rarity: "黒", cl: "パイレーツ", AW: "覚醒前", skill: "通常"
        , stats: { atkCd: "8f化", cost: "-30%" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "デューオ/クリスマス", rarity: "黒", cl: "パイレーツ", AW: "覚醒後", skill: "通常"
        , stats: { atkCd: "8f化", cost: "-30%" }
        , target: { season: [ "クリスマス" ] }
        , note: "永続"
    }
    , {
        name: "エキドナ", rarity: "白", cl: "ドラゴンシャーマン", AW: "覚醒後", skill: "覚醒"
        , stats: { def: "×1.4" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "ルビナス", rarity: "白", cl: "ドラゴンシャーマン", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.4" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "ペドラ", rarity: "白", cl: "ドラゴンシャーマン", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { others: [ "ドラゴン" ] }
        , note: "永続"
    }
    , {
        name: "シホ", rarity: "白", cl: "シャーマン", AW: "覚醒前", skill: "通常"
        , stats: { cost: "-50%" }
        , target: { cl: [ "鬼" ] }
    }
    , {
        name: "シホ", rarity: "白", cl: "シャーマン", AW: "覚醒後", skill: "通常"
        , stats: { cost: "-50%" }
        , target: { cl: [ "鬼" ] }
    }
    , {
        name: "イリオス", rarity: "白", cl: "後衛戦術家", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.4", def: "×1.4" }
        , target: { race: [ "デーモン系", "オーク", "ゴブリン" ] }
    }
    , {
        name: "イリオス", rarity: "白", cl: "後衛戦術家", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.4", def: "×1.4" }
        , target: { race: [ "デーモン系", "オーク", "ゴブリン" ] }
    }
    , {
        name: "ミコト/水着", rarity: "黒", cl: "陰陽師", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.4" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "ファルネ/花嫁", rarity: "黒", cl: "サモナー", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.2", mr: "×1.2" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "ファルネ/花嫁", rarity: "黒", cl: "サモナー", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.2", mr: "×1.2" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "ファルネ/花嫁", rarity: "黒", cl: "サモナー", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+20%", def: "×1.4", mr: "×1.4" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "ソラノ/クリスマス", rarity: "白", cl: "サモナー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { season: [ "クリスマス" ] }
        , note: "永続"
    }
    , {
        name: "ソラノ/クリスマス", rarity: "白", cl: "サモナー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2", draw: "(○)", redep: "40秒" }
        , target: { season: [ "クリスマス" ] }
        , note: "永続"
    }
    , {
        name: "ソラノ/クリスマス", rarity: "白", cl: "サモナー", AW: "覚醒後", skill: "覚醒"
        , stats: { draw: "(○)", redep: "40秒" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "リンネ/花嫁", rarity: "黒", cl: "風水使い", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.15" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "リンネ/花嫁", rarity: "黒", cl: "風水使い", AW: "覚醒後", skill: [ "通常", "覚醒" ]
        , stats: { atk: "×1.25" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "エイプリル", rarity: "白", cl: "砲術士", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3", range: "×1.2" }
        , target: { cl: [ "重装砲兵", "砲術士", "モンスタースレイヤー" ] }
        , note: "範囲"
    }
    , {
        name: "エイプリル", rarity: "白", cl: "砲術士", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3", range: "×1.2" }
        , target: { cl: [ "重装砲兵", "砲術士", "モンスタースレイヤー" ] }
        , note: "範囲"
    }
    , {
        name: "ナターリエ/水着", rarity: "白", cl: "ダンサー", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.2" }
        , target: { home: [ "白の帝国" ] }
        , note: "範囲"
    }
    , {
        name: "ナターリエ/水着", rarity: "白", cl: "ダンサー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { season: [ "サマー" ] }
        , note: "範囲"
    }
    , {
        name: "ナターリエ/水着", rarity: "白", cl: "ダンサー", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.2" }
        , target: { home: [ "白の帝国" ] }
        , note: "範囲"
    }
    , {
        name: "ナターリエ/水着", rarity: "白", cl: "ダンサー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { season: [ "サマー" ] }
        , note: "範囲"
    }
    , {
        name: "ナターリエ/水着", rarity: "白", cl: "ダンサー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3", def: "×1.3" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "ブレリア/クリスマス", rarity: "白", cl: "ダンサー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { season: [ "クリスマス" ] }
        , note: "範囲"
    }
    , {
        name: "ブレリア/クリスマス", rarity: "白", cl: "ダンサー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { season: [ "クリスマス" ] }
        , note: "範囲"
    }
    , {
        name: "ブレリア/クリスマス", rarity: "白", cl: "ダンサー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.1", def: "×1.1" }
        , target: { season: [ "クリスマス" ] }
        , note: "永続"
    }
    , {
        name: "ワルツ/バレンタイン", rarity: "白", cl: "ダンサー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: [
            { cl: [ "王子" ] }
            , { season: [ "バレンタイン" ] }
        ]
        , note: "範囲"
    }
    , {
        name: "ワルツ/バレンタイン", rarity: "白", cl: "ダンサー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: [
            { cl: [ "王子" ] }
            , { season: [ "バレンタイン" ] }
        ]
        , note: "範囲"
    }
    , {
        name: "ナターリエ", rarity: "金", cl: "ダンサー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { home: [ "白の帝国" ] }
        , note: "範囲"
    }
    , {
        name: "ナターリエ", rarity: "金", cl: "ダンサー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { home: [ "白の帝国" ] }
        , note: "範囲"
    }
    , {
        name: "ナターリエ", rarity: "金", cl: "ダンサー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.5" }
        , target: { cl: [ "皇帝" ] }
    }
    , {
        name: "シャルキー/バレンタイン", rarity: "金", cl: "ダンサー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "シャルキー/バレンタイン", rarity: "金", cl: "ダンサー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "シャルキー/バレンタイン", rarity: "金", cl: "ダンサー", AW: "覚醒後", skill: "覚醒(1)"
        , stats: { atk: "×1.3" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "シャルキー/バレンタイン", rarity: "金", cl: "ダンサー", AW: "覚醒後", skill: "覚醒(2)"
        , stats: { atk: "×1.2" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "シャルキー/バレンタイン", rarity: "金", cl: "ダンサー", AW: "覚醒後", skill: "覚醒(3～)"
        , stats: { atk: "×1.1" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "アンナ", rarity: "黒", cl: "政務官", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.5", def: "×1.5", cost: "-30%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "アンナ/メイド", rarity: "黒", cl: "政務官", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+50%", atk: "×1.5", def: "×1.5" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "アンナ/軍服", rarity: "黒", cl: "政務官", AW: "覚醒後", skill: "覚醒"
        , stats: { ct: "-50%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "メルアビス", rarity: "黒", cl: "ネクロマンサー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.4" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "メルアビス", rarity: "黒", cl: "ネクロマンサー", AW: "覚醒後", skill: "覚醒"
        , stats: { redep: "20秒" }
        , target: { others: [ "アンデッド" ] }
        , note: [ "発動時", "死亡・撤退最後1体" ]
    }
    , {
        name: "メルアビス/水着", rarity: "黒", cl: "ネクロマンサー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "メルアビス/水着", rarity: "黒", cl: "ネクロマンサー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "メルアビス/水着", rarity: "黒", cl: "ネクロマンサー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.5" }
        , target: { others: [ "アンデッド" ] }
        , note: "範囲"
    }
    , {
        name: "メメント/ハロウィン", rarity: "白", cl: "ネクロマンサー", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.5" }
        , target: [
            { season: [ "ハロウィン" ] }
            , { others: [ "アンデッド" ] }
        ]
    }
    , {
        name: "メメント/ハロウィン", rarity: "白", cl: "ネクロマンサー", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.5" }
        , target: [
            { season: [ "ハロウィン" ] }
            , { others: [ "アンデッド" ] }
        ]
    }
    , {
        name: "メメント/ハロウィン", rarity: "白", cl: "ネクロマンサー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , target: [
            { season: [ "ハロウィン" ] }
            , { others: [ "アンデッド" ] }
        ]
        , note: "永続"
    }
    , {
        name: "トワ", rarity: "黒", cl: "クロノウィッチ", AW: "覚醒前", skill: "通常"
        , stats: { atkCd: "6f化" }
        , target: { cl: [ "ウィッチ", "クロノウィッチ" ] }
    }
    , {
        name: "トワ", rarity: "黒", cl: "クロノウィッチ", AW: "覚醒後", skill: "通常"
        , stats: { atkCd: "6f化" }
        , target: { cl: [ "ウィッチ", "クロノウィッチ" ] }
    }
    , {
        name: "トワ/学園", rarity: "黒", cl: "クロノウィッチ", AW: "覚醒後", skill: "覚醒"
        , stats: { draw: "(○)", redep: "40秒" }
        , target: { depType: [ "遠距離" ] }
        , note: "手動撤退も再出撃可能"
    }
    , {
        name: "ロミルダ", rarity: "黒", cl: "クロノウィッチ", AW: "覚醒前", skill: "通常"
        , stats: { ct: "-50%" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "ロミルダ", rarity: "黒", cl: "クロノウィッチ", AW: "覚醒後", skill: "通常"
        , stats: { ct: "-50%" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "ロミルダ", rarity: "黒", cl: "クロノウィッチ", AW: "覚醒後", skill: "覚醒"
        , stats: { ct: "-50%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "ちびトワ", rarity: "ちび", cl: "クロノウィッチ", skill: "通常"
        , stats: { atkCd: "6f化" }
        , target: { cl: [ "ウィッチ", "クロノウィッチ" ] }
    }
    , {
        name: "ローリエ/バレンタイン", rarity: "白", cl: "ドルイド", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.7" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ローリエ/バレンタイン", rarity: "白", cl: "ドルイド", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.7" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "トトノ/正月", rarity: "白", cl: "マーチャント", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.4", def: "×1.4" }
        , target: { others: [ "GG持ち" ] }
        , note: "永続"
    }
    , {
        name: "ミネット", rarity: "白", cl: "マーチャント", AW: "覚醒前", skill: "通常"
        , stats: { cost: "-50%" }
        , target: { cl: [ "ソルジャー", "ワルキューレ", "ペガサスライダー", "マーチャント" ] }
    }
    , {
        name: "ミネット", rarity: "白", cl: "マーチャント", AW: "覚醒後", skill: "通常"
        , stats: { cost: "-50%" }
        , target: { cl: [ "ソルジャー", "ワルキューレ", "ペガサスライダー", "マーチャント" ] }
    }
    , {
        name: "ミネット/学園", rarity: "白", cl: "マーチャント", AW: "覚醒前", skill: "通常"
        , stats: { cost: "-50%" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "ミネット/学園", rarity: "白", cl: "マーチャント", AW: "覚醒後", skill: "通常"
        , stats: { cost: "-50%" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "ツキコ", rarity: "黒", cl: "幻獣使い", AW: "覚醒前", skill: "通常"
        , stats: { draw: "(○)", redep: "25秒" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "ツキコ", rarity: "黒", cl: "幻獣使い", AW: "覚醒後", skill: "通常"
        , stats: { draw: "(○)", redep: "25秒" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "ツキコ", rarity: "黒", cl: "幻獣使い", AW: "覚醒後", skill: "覚醒"
        , stats: { draw: "(○)", redep: "25秒" }
        , target: { home: [ "白の帝国" ] }
        , note: "永続"
    }
    , {
        name: "ツキコ/水着", rarity: "黒", cl: "幻獣使い", AW: "覚醒前", skill: "通常"
        , stats: { draw: "(○)", redep: "40秒" }
        , target: { season: [ "サマー" ] }
        , note: "永続"
    }
    , {
        name: "ツキコ/水着", rarity: "黒", cl: "幻獣使い", AW: "覚醒後", skill: "通常"
        , stats: { draw: "(○)", redep: "40秒" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "サマー" ] }
        ]
        , note: "永続"
    }
    , {
        name: "ツキコ/水着", rarity: "黒", cl: "幻獣使い", AW: "覚醒後", skill: "覚醒"
        , stats: { draw: "(○)", redep: "40秒" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "リンクス", rarity: "黒", cl: "ロード", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.5", def: "×1.5" }
        , target: { race: [ "獣人" ] }
        , note: "永続"
    }
    , {
        name: "リィーリ", rarity: "青", cl: "デモンシャーマン", AW: "覚醒前", skill: "通常"
        , stats: { hp: "+30%" }
        , target: { cl: [ "魔神" ] }
    }
    , {
        name: "リィーリ", rarity: "青", cl: "デモンシャーマン", AW: "覚醒後", skill: "通常"
        , stats: { hp: "+30%" }
        , target: { cl: [ "魔神" ] }
    }
    , {
        name: "アルレット", rarity: "黒", cl: "発明家", AW: "覚醒前", skill: "通常"
        , stats: { range: "×1.2" }
        , target: { others: [ "機械" ] }
        , note: "永続"
    }
    , {
        name: "アルレット", rarity: "黒", cl: "発明家", AW: "覚醒後", skill: "通常"
        , stats: { range: "×1.2" }
        , target: { others: [ "機械" ] }
        , note: "永続"
    }
    , {
        name: "タバサ", rarity: "白", cl: "発明家", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { others: [ "機械" ] }
    }
    , {
        name: "タバサ", rarity: "白", cl: "発明家", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { others: [ "機械" ] }
    }
    , {
        name: "タバサ", rarity: "白", cl: "発明家", AW: "覚醒後", skill: "覚醒"
        , stats: { draw: "○" }
        , target: { others: [ "機械" ] }
        , note: "永続"
    }
    , {
        name: "ヘンドリカ", rarity: "白", cl: "発明家", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { others: [ "機械" ] }
    }
    , {
        name: "ヘンドリカ", rarity: "白", cl: "発明家", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { others: [ "機械" ] }
    }
    , {
        name: "ヘンドリカ", rarity: "白", cl: "発明家", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.1", def: "×1.1" }
        , target: { others: [ "機械" ] }
        , note: "永続"
    }
    , {
        name: "マギー", rarity: "白", cl: "発明家", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+30%" }
        , target: { others: [ "機械" ] }
        , note: "永続"
    }
    , {
        name: "メシナ", rarity: "黒", cl: "儀式魔術師", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.5" }
        , target: { others: [ "深海" ] }
        , note: "永続"
    }
    , {
        name: "メシナ", rarity: "黒", cl: "儀式魔術師", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.5" }
        , target: { others: [ "深海" ] }
        , note: "永続"
    }
    , {
        name: "メシナ/お正月", rarity: "黒", cl: "儀式魔術師", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.5" }
        , target: { season: [ "お正月" ] }
        , note: "分類未確認"
    }
    , {
        name: "メシナ/お正月", rarity: "黒", cl: "儀式魔術師", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.5" }
        , target: { season: [ "お正月" ] }
        , note: "分類未確認"
    }
    , {
        name: "ヘリューズ", rarity: "黒", cl: "儀式魔術師", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.5" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "ヘリューズ", rarity: "黒", cl: "儀式魔術師", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.5" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "マルティナ/クリスマス", rarity: "白", cl: "幻術士", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "マルティナ/クリスマス", rarity: "白", cl: "幻術士", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "ラタトスク/バレンタイン", rarity: "黒", cl: "ハーバリスト", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.4" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ] }
        ]
        , note: [ "範囲", "分類未確認" ]
    }
    , {
        name: "フェリシア", rarity: "白", cl: "スカラー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.2" }
        , target: { sex: [ "女性" ] }
        , note: "範囲"
    }
    , {
        name: "コレット", rarity: "白", cl: "スカラー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "ジェニー", rarity: "白", cl: "スカラー", AW: "覚醒後", skill: "覚醒"
        , stats: { hp: "+15%" }
        , target: { home: [ "白の帝国" ] }
        , note: "永続"
    }
    , {
        name: "コレット/ハロウィン", rarity: "白", cl: "スカラー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "ヨユキ", rarity: "黒", cl: "夜行さん", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.5", cost: "-30%" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "ヨユキ", rarity: "黒", cl: "夜行さん", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.5", cost: "-30%" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "ヨユキ", rarity: "黒", cl: "夜行さん", AW: "覚醒後", skill: "覚醒"
        , stats: { cost: "-30%" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "コラリー", rarity: "白", cl: "ドラゴンメイジ", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , target: { others: [ "ドラゴン" ] }
        , note: "分類未確認"
    }
    , {
        name: "ロカ/花嫁", rarity: "白", cl: "ドラゴンメイジ", AW: "覚醒前", skill: "通常"
        , stats: { def: "×1.2" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "ロカ/花嫁", rarity: "白", cl: "ドラゴンメイジ", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.2" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "ミカ/温泉", rarity: "白", cl: "ドラグーン", AW: "覚醒後", skill: "覚醒"
        , stats: { rege: [ "30/秒", "?/?f" ] }
        , target: [
            { season: [ "温泉" ] }
            , { others: [ "騎兵" ] }
        ]
        , note: "永続"
    }
    , {
        name: "エンジュ", rarity: "黒", cl: "座敷わらし", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.5" }
        , target: { others: [ "GG持ち" ] }
    }
    , {
        name: "エンジュ", rarity: "黒", cl: "座敷わらし", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.5", def: "×1.5" }
        , target: { others: [ "GG持ち" ] }
    }
    , {
        name: "英傑の塔", rarity: "黒", cl: "英傑の塔", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.5", def: "×1.5" }
        , target: { others: [ "英傑" ] }
        , note: "分類未確認"
    }
    , {
        name: "ダークアンナ", rarity: "黒", cl: "政務官【闇の軍勢】", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { others: [ "魔界" ] }
    }
    , {
        name: "ダークアンナ", rarity: "黒", cl: "政務官【闇の軍勢】", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.3" }
        , target: { others: [ "魔界" ] }
    }
    , {
        name: "ダークアンナ", rarity: "黒", cl: "政務官【闇の軍勢】", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×2.0" }
        , target: { cl: [ "ダーク王子" ] }
    }
    , {
        name: "シルヴィーナ", rarity: "白", cl: "ガンスリンガー", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , target: { others: [ "銃士" ] }
        , note: "分類未確認"
    }
    , {
        name: "クロノシア", rarity: "黒", cl: "時の俯瞰者", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.5", range: "×1.4" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "ちびゴブリン博士", rarity: "ちび", cl: "ゴブリン博士", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: [
            { race: [ "ゴブリン" ] }
            , { others: [ "機械" ] }
        ]
        , note: "分類未確認"
    }
    , {
        name: "レナータ", rarity: "黒", cl: "スカウト", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.5", range: "×1.3" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "レナータ", rarity: "黒", cl: "スカウト", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.5", range: "×1.3" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "レナータ", rarity: "黒", cl: "スカウト", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.2" }
        , target: { depType: [ "遠距離" ] }
        , note: "永続"
    }
    , {
        name: "レナータ/花嫁", rarity: "黒", cl: "スカウト", AW: "覚醒前", skill: "通常"
        , stats: { hp: "+30%", atk: "×1.3" }
        , target: { season: [ "ジューンブライド" ] }
    }
    , {
        name: "レナータ/花嫁", rarity: "黒", cl: "スカウト", AW: "覚醒後", skill: "通常"
        , stats: { hp: "+30%", atk: "×1.3" }
        , target: { season: [ "ジューンブライド" ] }
    }
    , {
        name: "カーナ", rarity: "白", cl: "スカウト", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "カーナ", rarity: "白", cl: "スカウト", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "カーナ", rarity: "白", cl: "スカウト", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.5", range: "×1.3" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "ミリアム", rarity: "白", cl: "スカウト", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { depType: [ "遠距離" ] }
        , note: "永続"
    }
    , {
        name: "ミリアム", rarity: "白", cl: "スカウト", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { depType: [ "遠距離" ] }
        , note: "永続"
    }
    , {
        name: "ミリアム", rarity: "白", cl: "スカウト", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.1", range: "×1.1" }
        , target: { depType: [ "遠距離" ] }
        , note: "永続"
    }
    , {
        name: "ミリアム/バレンタイン", rarity: "白", cl: "スカウト", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { depType: [ "遠距離" ] }
        , note: "分類未確認"
    }
    , {
        name: "ミリアム/バレンタイン", rarity: "白", cl: "スカウト", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { depType: [ "遠距離" ] }
        , note: "分類未確認"
    }
    , {
        name: "ミリアム/バレンタイン", rarity: "白", cl: "スカウト", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , target: { season: [ "バレンタイン" ] }
        , note: "分類未確認"
    }
    , {
        name: "ミリアム/バレンタイン", rarity: "白", cl: "スカウト", AW: "覚醒後", skill: "覚醒"
        , stats: { range: "×1.2" }
        , target: { depType: [ "遠距離" ] }
        , note: "分類未確認"
    }
    , {
        name: "アヴィリコ", rarity: "白", cl: "エアセイラー", AW: "覚醒前", skill: "通常"
        , stats: { hp: "+20%", def: "×1.2" }
        , target: { others: [ "機械" ] }
        , note: "永続"
    }
    , {
        name: "アヴィリコ", rarity: "白", cl: "エアセイラー", AW: "覚醒後", skill: "通常"
        , stats: { hp: "+20%", def: "×1.2" }
        , target: { others: [ "機械" ] }
        , note: "永続"
    }
    , {
        name: "ツキコ★トゥーダ", rarity: "黒", cl: "帝国アイドル", AW: "覚醒後", skill: "通常"
        , stats: { def: "×1.8" }
        , target: { depType: [ "近接" ] }
        , note: "分類未確認"
    }
    , {
        name: "帝国軍旗", rarity: "金", cl: "帝国軍旗", skill: "通常"
        , stats: { atk: "×1.2" }
        , target: { home: [ "白の帝国" ] }
        , note: [ "範囲", "永続", "終了時、対象のHP-90%", "分類未確認" ]
    }
    , {
        name: "王国軍旗", rarity: "金", cl: "王国軍旗", skill: "通常"
        , stats: { atk: "×1.1", def: "×1.1" }
        , target: { home: [ "王国" ] }
        , note: [ "範囲", "永続", "終了時、対象のHP-90%", "分類未確認" ]
    }
    , {
        name: "アルスラーン", rarity: "白", cl: "王太子", AW: "覚醒前", skill: "通常"
        , stats: { hp: "+50%" }
        , target: { home: [ "パルス王国" ] }
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒前", skill: "通常(～2)"
        , stats: { draw: "○" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒前", skill: "通常(3～)"
        , stats: { draw: "○" }
        , target: { depType: [ "近接" ] }
        , note: "永続"
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒後", skill: "通常(～2)"
        , stats: { draw: "○" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒後", skill: "通常(3～)"
        , stats: { draw: "○" }
        , target: { depType: [ "近接" ] }
        , note: "永続"
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒後", skill: "覚醒(～2)"
        , stats: { draw: "(○)", redep: "40秒" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒後", skill: "覚醒(3～)"
        , stats: { draw: "(○)", redep: "40秒" }
        , target: { depType: [ "近接" ] }
        , note: "永続"
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒後", skill: "覚醒(1)"
        , stats: { ct: "-50%" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒後", skill: "覚醒(2～)"
        , stats: { ct: "-50%" }
        , target: { depType: [ "遠距離" ] }
        , note: "永続"
    }
    , {
        name: "鳳統", rarity: "白", cl: "軍師【恋姫】", AW: "覚醒前", skill: "通常"
        , stats: { draw: "○" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "鳳統", rarity: "白", cl: "軍師【恋姫】", AW: "覚醒後", skill: "通常"
        , stats: { draw: "○" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "鳳統", rarity: "白", cl: "軍師【恋姫】", AW: "覚醒後", skill: "覚醒"
        , stats: { draw: "(○)", redep: "40秒" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "董卓 仲穎", rarity: "黒", cl: "暴君【恋姫】", AW: "覚醒後", skill: "覚醒"
        , stats: { atk: "×1.4", def: "×1.4" }
        , target: { home: [ "恋姫" ] }
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "雪の精霊", rarity: "トークン", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.2", range: "×1.3" }
        , target: { cl: [ "雪娘" ] }
        , note: [ "しづり", "範囲", "永続", "分類未確認" ]
    }
    , {
        name: "冬の精霊", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.4", range: "×1.5" }
        , target: { cl: [ "雪娘" ] }
        , note: [ "しづり", "範囲", "永続", "分類未確認" ]
    }
    , {
        name: "阿形の獅子", rarity: "トークン", AW: "覚醒前", skill: "通常"
        , stats: { atk: "×1.4", def: "×1.4" }
        , target: { cl: [ "狛犬" ] }
        , note: "コマ"
    }
    , {
        name: "阿形の大獅子", rarity: "トークン", AW: "覚醒後", skill: "通常"
        , stats: { atk: "×1.4", def: "×1.4" }
        , target: { cl: [ "狛犬" ] }
        , note: "コマ"
    }
    , {
        name: "夜行わらし【戦支度】", rarity: "トークン", AW: "覚2b", skill: "通常"
        , stats: { atk: "×1.2", def: "×1.2" }
        , target: { cl: [ "夜行さん" ] }
        , note: [ "絢爛千妖夜行", "(夜行さん系)", "永続" ]
    }
    , {
        name: "夜行わらし【馬廻】", rarity: "トークン", AW: "覚2b", skill: "通常"
        , stats: { range: "×1.4", atkCd: "-50%" }
        , target: { cl: [ "夜行さん" ] }
        , note: [ "絢爛千妖夜行", "(夜行さん系)", "永続" ]
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒後", skill: ""
        , stats: { : "" }
        , target: { : [ "" ] }
        , target: [
            { : [ "" ] }
            , { : [ "" ] }
        ]
    }
    
    黒 白 青 金 ちび 銀 銅 鉄 トークン
    
    CC前 CC後 覚醒前 覚醒後 覚1 覚2a 覚2b
    
    常時 非 通常 覚醒
    
    hp atk def mr range cost wt ct dur atkCd
    
    rege: [ "/秒", "/f" ]
    
    poison: "-100%", abn: "-100%"
    
    eva nul redep
    
    draw
    ○
    (○)
    
    other
    
    depType 近接 遠距離 遠近距離
    
    sex 男性 女性
    
    home 白の帝国 砂漠の国 東の国 パルス王国
    
    race 聖霊 人間 獣人 竜人 エルフ系 ドワーフ ヴァンパイア
    
    デーモン系 天使 妖怪 仙人 オーク ゴブリン 鳥人 魚人
    
    神 天界人 ねんどろいど
    
    season お正月 温泉 バレンタイン 学園 エッグハント
    
    ジューンブライド サマー ハロウィン クリスマス
    
    others 英傑 ちび 弓兵 魔術師 アンデッド 機械 騎兵 重装 聖職者 魔界 ドラゴン ＜七つの大罪＞
    
    全プリンセス系 GG持ち HP回復不可 魔界適応 深海適応 天界適応
    
    year 年
    
    note 範囲 分類未確認
    
    正月 水着 浴衣 バニー 花嫁

*/