// 全体配置
buff.dep_gl = [
    {
        name: "王子【英魂】", cl: "王子"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { cl: [ "ソルジャー", "ヘビーアーマー", "ワルキューレ", "アーチャー", "ヒーラー" ] }
        , note: "無差別バフと合わせて+25%"
    }
    , {
        name: "王子【英魂】", cl: "王子"
        , stats: { atk: "+5%", def: "+5%" }
        , target: [
            { cl: [ "ソルジャー" ] }
            , { others: [ "重装", "騎兵", "弓兵", "聖職者" ] }
        ]
        , note: [ "Lv3以上", "無差別バフと合わせて+25%" ]
    }
    , {
        name: "王子【ナンディ】", cl: "王子"
        , stats: { draw: "○" }
        , target: { year: [ "2021年" ] }
    }
    , {
        name: "王子【ドゥン】", cl: "王子"
        , stats: { draw: "○" }
        , target: { year: [ "2022年" ] }
    }
    , {
        name: "王子【玉兎】", cl: "王子"
        , stats: { draw: "○" }
        , target: { year: [ "2023年" ] }
    }
    , {
        name: "王子【竜王】", cl: "王子"
        , stats: { draw: "○" }
        , target: { year: [ "2024年" ] }
    }
    , {
        name: "ソラス", rarity: "白", cl: "占星術師", AW: "覚醒"
        , stats: { cost: "-10" }
        , target: { cl: [ "占星術師", "メイジ", "ウィッチ", "ビショップ", "サモナー", "クロノウィッチ" ] }
    }
    , {
        name: "モルフェサ", rarity: "白", cl: "カースウィスパラー", AW: "覚醒"
        , stats: { cost: "-5" }
        , target: {
            cl: [
                "カースウィスパラー"
                , "戦巫女"
                , "ドラゴンシャーマン", "シャーマン", "呪術使い", "フェンリルシャーマン", "デモンシャーマン"
            ]
        }
    }
    , {
        name: "アルティア", rarity: "黒", cl: "ソルジャー", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { cl: [ "ソルジャー", "ヘビーアーマー" ] }
    }
    , {
        name: "ノーマ", rarity: "白", cl: "ソルジャー", AW: "覚醒"
        , stats: { cost: "-2" }
        , target: { cl: [ "魔神", "ダークストーカー", "デモンサモナー" ] }
    }
    , {
        name: "レシア", rarity: "黒", cl: "ワルキューレ", AW: "未"
        , stats: { draw: "○" }
        , target: { cl: [ "ワルキューレ" ] }
    }
    , {
        name: "レシア", rarity: "黒", cl: "ワルキューレ", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { cl: [ "ワルキューレ", "ペガサスライダー", "ドラゴンライダー", "魔竜騎士" ] }
    }
    , {
        name: "キュテリ", rarity: "金", cl: "ローグ", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { cl: [ "ローグ", "シーフ" ] }
    }
    , {
        name: "プリンセス", cl: "プリンセス", AW: "未"
        , stats: { atk: "+10%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ハイプリンセス", cl: "プリンセス", AW: "覚1"
        , stats: { atk: "+10%" }
        , target: { cl: [ "王子" ] }
        , note: "プリンセス系"
    }
    , {
        name: "ロイヤルハイネス", cl: "プリンセス", AW: "覚2a"
        , stats: { atk: "+50%", def: "+50%" }
        , target: { cl: [ "王子" ] }
        , note: "プリンセス系"
    }
    , {
        name: "マジェスティック", cl: "プリンセス", AW: "覚2b"
        , stats: { atk: "+25%" }
        , target: { cl: [ "王子" ] }
        , note: "プリンセス系"
    }
    , {
        name: "ヨシノ", rarity: "黒", cl: "プリンセス", AW: "未"
        , stats: { draw: "○" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "ヨシノ", rarity: "黒", cl: "プリンセス", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "トレシア", rarity: "白", cl: "プリンセス", AW: "覚醒"
        , stats: { def: "+5%" }
        , target: { others: [ "高貴" ] }
    }
    , {
        name: "ちびヨシノ", rarity: "ちび", cl: "プリンセス"
        , stats: { draw: "○" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "アマンダ", rarity: "黒", cl: "バンデット", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "レオーネ/水着", rarity: "黒", cl: "バンデット", AW: "未"
        , stats: { atk: "+5%" }
        , target: [
            { race: [ "獣人" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "レオーネ/水着", rarity: "黒", cl: "バンデット", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: [
            { race: [ "獣人" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "セリア", rarity: "白", cl: "バンデット", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { cl: [ "バンデット" ] }
    }
    , {
        name: "イグニス", rarity: "白", cl: "中級竜兵", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "ウィリアス/ハロウィン", rarity: "白", cl: "中級竜兵", AW: "覚醒"
        , stats: { def: "+5%" }
        , target: { season: [ "ハロウィン" ] }
    }
    , {
        name: "エルドラ", rarity: "黒", cl: "ドラゴンプリンセス", AW: "未"
        , stats: { draw: "○" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "エルドラ", rarity: "黒", cl: "ドラゴンプリンセス", AW: "覚醒"
        , stats: { atk: "+20%", draw: "○" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "ロタン", rarity: "黒", cl: "ドラゴンプリンセス", AW: "覚醒"
        , stats: { mr: "+5" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "ちびエルドラ", rarity: "ちび", cl: "ドラゴンプリンセス"
        , stats: { draw: "○" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "ヒバリ", rarity: "黒", cl: "サムライ", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { cl: [ "サムライ" ] }
    }
    , {
        name: "ヒバリ/バレンタイン", rarity: "黒", cl: "サムライ", AW: "覚醒"
        , stats: { atk: "+10%", def: "+10%" }
        , target: { cl: [ "サムライ" ] }
    }
    , {
        name: "ハナダ", rarity: "白", cl: "サムライ", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "サクヤ/学園", rarity: "白", cl: "サムライ", AW: "未"
        , stats: { rege: [ "30/秒", "15/15f" ] }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "サクヤ/学園", rarity: "白", cl: "サムライ", AW: "覚醒"
        , stats: { rege: [ "50/秒", "25/15f" ] }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "ジーニア", rarity: "白", cl: "ペガサスライダー", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { cl: [ "ペガサスライダー" ] }
    }
    , {
        name: "ヘイオス/クリスマス", rarity: "黒", cl: "ダークファイター", AW: "未"
        , stats: { rege: [ "60/秒", "30/15f" ] }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "ヘイオス/クリスマス", rarity: "黒", cl: "ダークファイター", AW: "覚醒"
        , stats: { def: "+10%", rege: [ "60/秒", "30/15f" ] }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "アリス", rarity: "黒", cl: "モンク", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { cl: [ "モンク" ] }
    }
    , {
        name: "モモ/温泉", rarity: "白", cl: "モンク", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { season: [ "温泉" ] }
    }
    , {
        name: "エピウス", rarity: "白", cl: "モンク", AW: "未"
        , stats: { def: "5%" }
        , target: { cl: [ "モンク" ] }
    }
    , {
        name: "エピウス", rarity: "白", cl: "モンク", AW: "覚醒"
        , stats: { def: "10%" }
        , target: [
            { cl: [ "モンク" ] }
            , { others: [ "機械" ] }
        ]
    }
    , {
        name: "マツリ", rarity: "黒", cl: "前衛戦術家", AW: "未"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "マツリ", rarity: "黒", cl: "前衛戦術家", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "ヘレナ", rarity: "白", cl: "前衛戦術家", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { cl: [ "パイレーツ", "砲術士", "マーチャント" ] }
    }
    , {
        name: "レオラ/水着", rarity: "白", cl: "前衛戦術家", AW: "覚醒"
        , stats: { draw: "○" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "ルヴェア/バレンタイン", rarity: "白", cl: "前衛戦術家", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "ちびマツリ", rarity: "ちび", cl: "前衛戦術家"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "イングリッド", rarity: "黒", cl: "魔法剣士", AW: "覚醒"
        , stats: { atk: "+10%", def: "+10%" }
        , target: { cl: [ "魔法剣士", "メイジアーマー", "メイジ", "ビショップ" ] }
    }
    , {
        name: "ホルエス", rarity: "白", cl: "魔法剣士", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { home: [ "砂漠の国" ] }
    }
    , {
        name: "シエナ", rarity: "白", cl: "魔法剣士", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { cl: [ "魔法剣士", "メイジアーマー" ] }
    }
    , {
        name: "タラニア/バニー", rarity: "白", cl: "魔法剣士", AW: "未"
        , stats: { rege: [ "50/秒", "25/15f" ] }
        , target: { others: [ "魔術師" ] }
    }
    , {
        name: "タラニア/バニー", rarity: "白", cl: "魔法剣士", AW: "覚醒"
        , stats: { ct: "-30%", rege: [ "80/秒", "40/15f" ] }
        , target: { others: [ "魔術師" ] }
    }
    , {
        name: "リッカ/花嫁", rarity: "白", cl: "魔法剣士", AW: "覚醒"
        , stats: { def: "+10%" }
        , target: { season: [ "ジューンブライド" ] }
    }
    , {
        name: "アメリ", rarity: "白", cl: "セーラー", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { cl: [ "セーラー", "パイレーツ" ] }
    }
    , {
        name: "妖狐絢爛", cl: "妖狐", AW: "覚2a"
        , stats: { ct: "-50%" }
        , target: { race: [ "妖怪" ] }
        , note: "妖狐系"
    }
    , {
        name: "キュウビ", rarity: "黒", cl: "妖狐", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "キュウビ/学園", rarity: "黒", cl: "妖狐", AW: "未"
        , stats: { draw: "○" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "学園" ] }
        ]
    }
    , {
        name: "キュウビ/学園", rarity: "黒", cl: "妖狐", AW: "覚醒"
        , stats: { draw: "○" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "学園" ] }
        ]
    }
    , {
        name: "堕姫", rarity: "白", cl: "妖狐", AW: "覚醒"
        , stats: { atk: "-5%" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "堕姫", rarity: "白", cl: "妖狐", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "フェルミ", rarity: "白", cl: "神官戦士", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { cl: [ "神官戦士", "ヒーラー" ] }
    }
    , {
        name: "エレット/バレンタイン", rarity: "白", cl: "神官戦士", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "ルチア/クリスマス", rarity: "白", cl: "神官戦士", AW: "未"
        , stats: { atk: "+5%" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "クリスマス" ] }
        ]
    }
    , {
        name: "ルチア/クリスマス", rarity: "白", cl: "神官戦士", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "クリスマス" ] }
        ]
    }
    , {
        name: "シルセス/花嫁", rarity: "黒", cl: "メイジアーマー", AW: "未"
        , stats: { atk: "+7%" }
        , target: { season: [ "ジューンブライド" ] }
    }
    , {
        name: "シルセス/花嫁", rarity: "黒", cl: "メイジアーマー", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { season: [ "ジューンブライド" ] }
    }
    , {
        name: "フィナン", rarity: "白", cl: "メイジアーマー", AW: "覚醒"
        , stats: { def: "+10%" }
        , target: { cl: [ "ヘビーアーマー", "神官戦士", "メイジアーマー", "重装砲兵" ] }
    }
    , {
        name: "エメルダ/バレンタイン", rarity: "黒", cl: "ボウライダー", AW: "覚醒"
        , stats: { atk: "+20%" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "マーガレット/新装", rarity: "黒", cl: "ボウライダー", AW: "未"
        , stats: { atk: "+5%" }
        , target: { others: [ "弓兵", "騎兵", "高貴" ] }
    }
    , {
        name: "マーガレット/新装", rarity: "黒", cl: "ボウライダー", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { others: [ "弓兵", "騎兵", "高貴" ] }
    }
    , {
        name: "フラフィー", rarity: "白", cl: "ボウライダー", AW: "覚醒"
        , stats: { atk: "+5%" }
        , target: { race: [ "獣人" ] }
    }
    , {
        name: "セーラ", rarity: "黒", cl: "メイド", AW: "未"
        , stats: { cost: "-9", draw: "○" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "セーラ", rarity: "黒", cl: "メイド", AW: "覚醒"
        , stats: { cost: "-10", draw: "○" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "アリエル", rarity: "黒", cl: "メイド", AW: "未"
        , stats: { draw: "○" }
        , target: { cl: [ "神官戦士", "ヒーラー", "ビショップ", "ルーンアコライト", "アコライト" ] }
    }
    , {
        name: "アリエル", rarity: "黒", cl: "メイド", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { cl: [ "神官戦士", "ヒーラー", "ビショップ", "ルーンアコライト", "アコライト" ] }
    }
    , {
        name: "セーラ/水着", rarity: "黒", cl: "メイド", AW: "未"
        , stats: { draw: "○" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { season: [ "サマー" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "セーラ/水着", rarity: "黒", cl: "メイド", AW: "覚醒"
        , stats: { draw: "○" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { season: [ "サマー" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "ファニュア", rarity: "黒", cl: "メイド", AW: "未"
        , stats: { draw: "○" }
        , target: [
            { race: [ "デーモン系" ] }
            , { others: [ "アンデッド" ] }
        ]
    }
    , {
        name: "ファニュア", rarity: "黒", cl: "メイド", AW: "覚醒"
        , stats: { draw: "○" }
        , target: [
            { race: [ "デーモン系" ] }
            , { others: [ "アンデッド" ] }
        ]
    }
    , {
        name: "セーラ/クリスマス", rarity: "黒", cl: "メイド", AW: "未"
        , stats: { draw: "○" }
        , target: [
            { sex: [ "女性" ] }
            , { season: [ "クリスマス" ] }
            , { others: [ "高貴" ] }
        ]
    }
    , {
        name: "セーラ/クリスマス", rarity: "黒", cl: "メイド", AW: "覚醒"
        , stats: { draw: "○" }
        , target: [
            { sex: [ "女性" ] }
            , { season: [ "クリスマス" ] }
            , { others: [ "高貴" ] }
        ]
    }
    , {
        name: "シャーリー", rarity: "白", cl: "メイド", AW: "未"
        , stats: { draw: "○" }
        , target: { cl: [ "メイジ", "ビショップ", "サモナー", "エレメンタラー" ] }
    }
    , {
        name: "シャーリー", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { cl: [ "メイジ", "ビショップ", "サモナー", "エレメンタラー" ] }
    }
    , {
        name: "アイリーン", rarity: "白", cl: "メイド", AW: "未"
        , stats: { draw: "○" }
        , target: { cl: [ "ローグ", "バンデット" ] }
    }
    , {
        name: "アイリーン", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { cl: [ "ローグ", "バンデット", "パイレーツ", "シーフ" ] }
    }
    , {
        name: "リーナ", rarity: "白", cl: "メイド", AW: "未"
        , stats: { draw: "○" }
        , target: { race: [ "獣人", "エルフ系", "ドワーフ", "オーク", "ゴブリン" ] }
    }
    , {
        name: "リーナ", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { race: [ "獣人", "エルフ系", "ドワーフ", "オーク", "ゴブリン" ] }
    }
    , {
        name: "マリカ", rarity: "白", cl: "メイド", AW: "未"
        , stats: { draw: "○" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "マリカ", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "サクラ", rarity: "白", cl: "メイド", AW: "未"
        , stats: { draw: "○" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "サクラ", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "マリカ/水着", rarity: "白", cl: "メイド", AW: "未"
        , stats: { draw: "○" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "マリカ/水着", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { draw: "○" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "ソーマ/メイド", rarity: "白", cl: "メイド", AW: "未"
        , stats: { draw: "○" }
        , target: [
            { cl: [ "王子" ] }
            , { others: [ "弓兵" ] }
        ]
    }
    , {
        name: "ソーマ/メイド", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { draw: "○" }
        , target: [
            { cl: [ "王子" ] }
            , { others: [ "弓兵" ] }
        ]
    }
    /*
    , {
        name: "ヒカゲ", rarity: "青", cl: "メイド", AW: "未"
        , stats: { draw: "○" }
        , target: { unitName: [ "カグヤ" ] }
    }
    , {
        name: "ヒカゲ", rarity: "青", cl: "メイド", AW: "未"
        , stats: { draw: "○" }
        , target: { unitName: [ "カグヤ" ] }
    }
    */
    , {
        name: "ちびセーラ", rarity: "ちび", cl: "メイド"
        , stats: { draw: "○" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "カーミラ", cl: "ヴァンパイアロード", AW: "覚2a"
        , stats: { atk: "+20%" }
        , target: { others: [ "アンデッド" ] }
        , note: [ "ヴァンパイアロード系", "分類未確認" ]
    }
    , {
        name: "エマ", rarity: "黒", cl: "ヴァンパイアロード", AW: "未"
        , stats: { draw: "○" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "エマ", rarity: "黒", cl: "ヴァンパイアロード", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "エマ/水着", rarity: "黒", cl: "ヴァンパイアロード", AW: "未"
        , stats: { other: "" }
        , target: { depType: [ "近接" ] }
        , note: [ "配置時、最近2体", "HP3%ドレイン付与" ]
    }
    , {
        name: "エマ/水着", rarity: "黒", cl: "ヴァンパイアロード", AW: "覚醒"
        , stats: { other: "" }
        , target: { depType: [ "近接" ] }
        , note: [ "配置時、最近2体", "HP6%ドレイン付与" ]
    }
    , {
        name: "エデン/ハロウィン", rarity: "白", cl: "ヴァンパイアロード", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%", draw: "○" }
        , target: { season: [ "ハロウィン" ] }
    }
    , {
        name: "ちびエマ", rarity: "ちび", cl: "ヴァンパイアロード"
        , stats: { draw: "○" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "サンドラ", rarity: "白", cl: "ソードマスター", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { cl: [ "ソードマスター", "ランスマスター" ] }
    }
    , {
        name: "ミレイユ", rarity: "黒", cl: "ロイヤルガード", AW: "未"
        , stats: { draw: "○" }
        , target: { cl: [ "ヘビーアーマー", "ロイヤルガード" ] }
    }
    , {
        name: "ミレイユ", rarity: "黒", cl: "ロイヤルガード", AW: "覚醒"
        , stats: { atk: "+5%", def: "+10%", draw: "○" }
        , target: { cl: [ "ヘビーアーマー", "ロイヤルガード" ] }
    }
    , {
        name: "メフィスト", rarity: "黒", cl: "魔神", AW: "覚醒"
        , stats: { atk: "+20%", def: "+50%" }
        , target: { race: [ "デーモン系", "オーク", "ゴブリン" ] }
    }
    , {
        name: "シンシア", rarity: "黒", cl: "魔神", AW: "未"
        , stats: { atk: "+10%", def: "+10%", cost: "+5" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "シンシア", rarity: "黒", cl: "魔神", AW: "覚醒"
        , stats: { atk: "+15%", def: "+15%", cost: "+5" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: [ "妖怪総元締", "ぬらりひょん" ], cl: "ぬらりひょん", AW: "覚2b"
        , stats: { rm: "+15", rege: [ "40/秒", "20/15f" ] }
        , target: { race: [ "妖怪" ] }
        , note: "ぬらりひょん系"
    }
    , {
        name: "シノ", rarity: "黒", cl: "ぬらりひょん", AW: "未"
        , stats: { draw: "○" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "シノ", rarity: "黒", cl: "ぬらりひょん", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "サギリ", rarity: "白", cl: "ぬらりひょん", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "ちびシノ", rarity: "ちび", cl: "ぬらりひょん"
        , stats: { draw: "○" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "エルミラ", rarity: "黒", cl: "重装砲兵", AW: "覚醒"
        , stats: { atk: "+10%", def: "+10%" }
        , target: { cl: [ "重装砲兵", "インペリアルナイト", "皇帝" ] }
    }
    , {
        name: "レギーナ/浴衣", rarity: "白", cl: "重装砲兵", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "鬼刃姫/お正月", rarity: "黒", cl: "鬼", AW: "覚醒"
        , stats: { atk: "+20%" }
        , target: { season: [ "お正月" ] }
    }
    , {
        name: "アリーセ", rarity: "白", cl: "インペリアルナイト", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { cl: [ "インペリアルナイト" ] }
    }
    , {
        name: "グレン/学園", rarity: "白", cl: "天狗", AW: "覚醒"
        , stats: { atk: "+10%", draw: "○" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "グレン", rarity: "金", cl: "天狗", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { cl: [ "天狗" ] }
    }
    , {
        name: "ティニー", rarity: "黒", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+10%", def: "+10%" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ティニー", rarity: "黒", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+15%", def: "+15%", rege: [ "30/秒", "15/15f" ] }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ウルカノ", rarity: "黒", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+10%", def: "+10%" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "遠距離" ] }
        ]
    }
    , {
        name: "ウルカノ", rarity: "黒", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+15%", def: "+15%", ct: "-30%" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "遠距離" ] }
        ]
    }
    , {
        name: "サンディー", rarity: "白", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+10%", def: "+10%" }
        , target: { cl: [
            "王子", "ソルジャー", "サムライ", "ダークファイター"
            , "前衛戦術家", "ソードマスター", "インペリアルナイト"
        ] }
    }
    , {
        name: "サンディー", rarity: "白", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+15%", def: "+15%" }
        , target: { cl: [
            "王子", "ソルジャー", "サムライ", "ダークファイター"
            , "前衛戦術家", "ソードマスター", "インペリアルナイト"
        ] }
    }
    , {
        name: "キャラット", rarity: "白", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+10%", def: "+10%" }
        , target: { cl: [
            "王子", "ヘビーアーマー", "神官戦士", "メイジアーマー"
            , "ロイヤルガード", "重装砲兵", "グランドナイト"
        ] }
    }
    , {
        name: "キャラット", rarity: "白", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+15%", def: "+15%" }
        , target: { cl: [
            "王子", "ヘビーアーマー", "神官戦士", "メイジアーマー"
            , "ロイヤルガード", "重装砲兵", "グランドナイト"
        ] }
    }
    , {
        name: "ルミアン", rarity: "白", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+10%", def: "+10%" }
        , target: { cl: [
            "王子", "ワルキューレ", "ペガサスライダー", "ドラゴンライダー"
            , "魔竜騎士", "ボウライダー", "グリフィンライダー"
        ] }
    }
    , {
        name: "ルミアン", rarity: "白", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+15%", def: "+15%" }
        , target: { cl: [
            "王子", "ワルキューレ", "ペガサスライダー", "ドラゴンライダー"
            , "魔竜騎士", "ボウライダー", "グリフィンライダー"
        ] }
    }
    , {
        name: "フィスティア", rarity: "白", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+10%", def: "+10%" }
        , target: { cl: [
            "王子", "バンデット", "アベンジャー", "モンク"
            , "グラディエーター", "モンスターブレイカー"
        ] }
    }
    , {
        name: "フィスティア", rarity: "白", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+15%", def: "+15%" }
        , target: { cl: [
            "王子", "バンデット", "アベンジャー", "モンク"
            , "グラディエーター", "モンスターブレイカー"
        ] }
    }
    , {
        name: "ミスリア", rarity: "白", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+10%", def: "+10%" }
        , target: [
            { cl: [ "王子", "魔法剣士" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "ミスリア", rarity: "白", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+15%", def: "+15%" }
        , target: [
            { cl: [ "王子", "魔法剣士" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "グラティア", rarity: "白", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+10%", def: "+10%" }
        , target: [
            { cl: [ "王子" ] }
            , { home: [ "白の帝国" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "グラティア", rarity: "白", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+15%", def: "+15%" }
        , target: [
            { cl: [ "王子" ] }
            , { home: [ "白の帝国" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "グラティア/水着", rarity: "白", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+10%", def: "+10%" }
        , target: [
            { cl: [ "王子" ] }
            , { season: [ "サマー" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "グラティア/水着", rarity: "白", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+15%", def: "+15%" }
        , target: [
            { cl: [ "王子" ] }
            , { home: [ "白の帝国" ], depType: [ "近接" ] }
            , { season: [ "サマー" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ゴルドー", rarity: "金", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+10%", def: "+10%" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "男性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ゴルドー", rarity: "金", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+15%", def: "+15%" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "男性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ちびティニー", rarity: "ちび", cl: "鍛冶職人"
        , stats: { atk: "+10%", def: "+10%" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "グラディエーター", cl: "グラディエーター", AW: "未"
        , stats: { atk: "+5%" }
        , target: { others: [ "魔界" ] }
    }
    , {
        name: "筆頭剣闘士", cl: "グラディエーター", AW: "覚1"
        , stats: { atk: "+10%" }
        , target: { others: [ "魔界" ] }
        , note: "グラディエーター系"
    }
    , {
        name: "オークブレイバー", cl: "グラディエーター", AW: "覚2a"
        , stats: { atk: "+15%" }
        , target: { others: [ "魔界" ] }
        , note: "グラディエーター系"
    }
    , {
        name: "アナトリア/温泉", rarity: "黒", cl: "グラディエーター", AW: "覚醒"
        , stats: { ct: "-35%" }
        , target: [
            { season: [ "温泉" ] }
            , { others: [ "魔界" ] }
        ]
    }
    , {
        name: "サリス", rarity: "白", cl: "グランドナイト", AW: "覚醒"
        , stats: { def: "+7%" }
        , target: { cl: [ "グランドナイト" ] }
    }
    , {
        name: "フルーリオ", rarity: "白", cl: "グランドナイト", AW: "覚醒"
        , stats: { def: "+15%", cost: "+3" }
        , target: { cl: [ "ヘビーアーマー", "ロイヤルガード", "グランドナイト" ] }
    }
    , {
        name: "プルーム", rarity: "白", cl: "グリフィンライダー", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { race: [ "エルフ系", "ドワーフ" ] }
    }
    , {
        name: "織姫", rarity: "白", cl: "真人", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { race: [ "仙人" ] }
    }
    , {
        name: "太公望/お正月", rarity: "白", cl: "真人", AW: "覚醒"
        , stats: { def: "+15%", draw: "○" }
        , target: { season: [ "お正月" ], depType: [ "近接" ] }
    }
    , {
        name: "聞忠", rarity: "黒", cl: "邪仙", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "フィロ", rarity: "白", cl: "ランスマスター", AW: "覚醒"
        , stats: { ct: "-50%" }
        , target: { cl: [ "ワルキューレ", "ロイヤルガード", "ランスマスター" ] }
    }
    , {
        name: "ハルモニア", rarity: "黒", cl: "デーモンロード", AW: "覚醒"
        , stats: { atk: "+15%", def: "+15%" }
        , target: [
            { race: [ "デーモン系", "オーク", "ゴブリン" ] }
            , { others: [ "アンデッド" ] }
        ]
    }
    , {
        name: "パヤモ", rarity: "黒", cl: "デーモンロード", AW: "覚醒"
        , stats: { def: "+15%" }
        , target: { others: [ "魔界" ] }
    }
    , {
        name: "ヤハール", rarity: "白", cl: "デーモンロード", AW: "覚醒"
        , stats: { atk: "+7%", def: "+7%" }
        , target: [
            { race: [ "デーモン系" ] }
            , { others: [ "アンデッド" ] }
        ]
    }
    , {
        name: "ヤハール/花嫁", rarity: "白", cl: "デーモンロード", AW: "未"
        , stats: { cost: "-2" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ヤハール/花嫁", rarity: "白", cl: "デーモンロード", AW: "覚醒"
        , stats: { cost: "-3" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "シロ", rarity: "黒", cl: "犬神", AW: "覚醒"
        , stats: { rege: [ "40/秒", "20/15f" ] }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "ツムジ", rarity: "白", cl: "犬神", AW: "覚醒"
        , stats: { ct: "-50%" }
        , target: { cl: [ "邪仙", "犬神", "陰陽師", "呪術使い" ] }
    }
    , {
        name: "ユッタ/水着", rarity: "白", cl: "料理人", AW: "覚醒"
        , stats: { rege: [ "50/秒", "25/15f" ] }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "金糸雀姉妹/花嫁", rarity: "白", cl: "かまいたち", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%" }
        , target: [
            { race: [ "妖怪" ] }
            , { season: [ "ジューンブライド" ] }
        ]
    }
    , {
        name: "金糸雀姉妹/花嫁", rarity: "白", cl: "かまいたち", AW: "覚醒"
        , stats: { rege: [ "20/秒", "10/15f" ] }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ティマ", rarity: "白", cl: "アクアナイト", AW: "未"
        , stats: { rege: [ "50/秒", "25/15f" ] }
        , target: { others: [ "深海" ] }
    }
    , {
        name: "ティマ", rarity: "白", cl: "アクアナイト", AW: "覚醒"
        , stats: { rege: [ "80/秒", "40/15f" ] }
        , target: { others: [ "深海" ] }
    }
    , {
        name: "トゥーリ", rarity: "黒", cl: "テンプルナイト", AW: "覚醒"
        , stats: { cost: "-2" }
        , target: { cl: [ "テンプルナイト" ] }
    }
    , {
        name: "デシレア", rarity: "白", cl: "テンプルナイト", AW: "未"
        , stats: { def: "+10%" }
        , target: { cl: [ "テンプルナイト" ] }
    }
    , {
        name: "デシレア", rarity: "白", cl: "テンプルナイト", AW: "覚醒"
        , stats: { def: "+10%" }
        , target: { cl: [ "テンプルナイト" ] }
    }
    , {
        name: "パルセ", rarity: "白", cl: "オートマタ", AW: "未"
        , stats: { atk: "+7%" }
        , target: { others: [ "機械" ] }
    }
    , {
        name: "パルセ", rarity: "白", cl: "オートマタ", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { others: [ "機械" ] }
    }
    , {
        name: "シラヌイ", rarity: "白", cl: "ぬりかべ", AW: "覚醒"
        , stats: { def: "+7%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "祓剣主神", rarity: "黒", cl: "儀仗軍神", AW: "未"
        , stats: { atk: "+7%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "祓剣主神", rarity: "黒", cl: "儀仗軍神", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "フーイェン/浴衣", rarity: "白", cl: "武侠", AW: "未"
        , stats: { atk: "+5%" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "フーイェン/浴衣", rarity: "白", cl: "武侠", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: [
            { home: [ "華の国" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "シャジャル", rarity: "黒", cl: "サベージファイター", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { home: [ "砂漠の国" ] }
    }
    , {
        name: "サフィール", rarity: "黒", cl: "シールダー", AW: "覚醒"
        , stats: { def: "+10%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "レジナレア", rarity: "白", cl: "シールダー", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { cl: [ "ヘビーアーマー", "シールダー" ] }
    }
    , {
        name: "レジナレア/花嫁", rarity: "白", cl: "シールダー", AW: "覚醒"
        , stats: { def: "+10%" }
        , target: [
            { season: [ "ジューンブライド" ] }
            , { others: [ "重装" ] }
        ]
    }
    , {
        name: "女王子", rarity: "黒", cl: "女王子", AW: "未"
        , stats: { atk: "-5%" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "女王子", rarity: "黒", cl: "女王子", AW: "覚醒"
        , stats: { atk: "-5%" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "ダーク王子", rarity: "黒", cl: "ダーク王子", AW: "未"
        , stats: { atk: "+10%", def: "+10%" }
        , target: [
            { cl: [ "政務官【闇の軍勢】" ] }
            , { race: [ "デーモン系", "ゴブリン", "オーク" ] }
            , { others: [ "アンデッド" ] }
        ]
    }
    , {
        name: "ダーク王子", rarity: "黒", cl: "ダーク王子", AW: "覚醒"
        , stats: { atk: "+15%", def: "+15%" }
        , target: [
            { cl: [ "政務官【闇の軍勢】" ] }
            , { race: [ "デーモン系", "ゴブリン", "オーク" ] }
            , { others: [ "アンデッド" ] }
        ]
    }
    , {
        name: "紡がれる物語", cl: "神話の継承者", AW: "覚2a"
        , stats: { atk: "+8%" }
        , target: { depType: [ "近接" ] }
        , note: "神話の継承者系"
    }
    , {
        name: "センカ", rarity: "白", cl: "衛士", AW: "未"
        , stats: { def: "+5%" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "センカ", rarity: "白", cl: "衛士", AW: "覚醒"
        , stats: { def: "+7%" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "王城", rarity: "黒", cl: "王城", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { home: [ "王国" ] }
    }
    , {
        name: "王国民的アイドル", cl: "王国民的アイドル", AW: "覚1"
        , stats: { cost: "+3" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "女王子/アイドル", rarity: "黒", cl: "王国民的アイドル", AW: "覚醒"
        , stats: { atk: "+5%" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "女王子/アイドル", rarity: "黒", cl: "王国民的アイドル", AW: "覚醒"
        , stats: { def: "+10%" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "ちびガオレオン", rarity: "ちび", cl: "ガオレオン"
        , stats: { hp: "+5%", def: "+5%" }
        , target: { race: [ "獣人" ] }
    }
    , {
        name: "アイギス像", rarity: "金", cl: "女神像"
        , stats: { hp: "+3%", atk: "+3%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "王国学園", rarity: "金", cl: "王国の学び舎"
        , stats: { atk: "+15%", def: "+15%" }
        , target: { season: [ "学園" ] }
        , note: "無差別バフと合わせて+20%"
    }
    , {
        name: "アダマス像", rarity: "金", cl: "女神像"
        , stats: { atk: "+7%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "トリックオアトリート", rarity: "金", cl: "ハロウィン会場"
        , stats: { atk: "+10%", def: "+10%" }
        , target: { season: [ "ハロウィン" ] }
        , note: "無差別バフと合わせて+15%"
    }
    , {
        name: "ソーマ/温泉", rarity: "白", cl: "アーチャー", AW: "覚醒"
        , stats: { def: "+10%" }
        , target: { season: [ "温泉" ] }
    }
    , {
        name: "キャロット/バレンタイン", rarity: "白", cl: "アーチャー", AW: "未"
        , stats: { atk: "+3%", def: "+3%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "キャロット/バレンタイン", rarity: "白", cl: "アーチャー", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "下級メイジ", cl: "メイジ", AW: "未"
        , stats: { atk: "+10%" }
        , target: { others: [ "魔術師" ] }
    }
    , {
        name: "メイジ", cl: "メイジ", AW: "未"
        , stats: { atk: "+15%" }
        , target: { others: [ "魔術師" ] }
    }
    , {
        name: "アークメイジ", cl: "メイジ", AW: "覚1"
        , stats: { atk: "+15%" }
        , target: { others: [ "魔術師" ] }
        , note: "メイジ系"
    }
    , {
        name: "メイガスアデプト", cl: "メイジ", AW: "覚2a"
        , stats: { atk: "+20%", ct: "-50%" }
        , target: { others: [ "魔術師" ] }
        , note: "メイジ系"
    }
    , {
        name: "メイジデストラクト", cl: "メイジ", AW: "覚2b"
        , stats: { atk: "+15%" }
        , target: { others: [ "魔術師" ] }
        , note: "メイジ系"
    }
    , {
        name: "バスティス", rarity: "黒", cl: "メイジ", AW: "覚醒"
        , stats: { atk: "+10%", def: "+10%" }
        , target: [
            { home: [ "砂漠の国" ] }
            , { race: [ "獣人" ] }
        ]
    }
    , {
        name: "イーリス/お正月", rarity: "金", cl: "ヒーラー", AW: "覚醒"
        , stats: { mr: "+5" }
        , target: { cl: [ "ヒーラー" ] }
    }
    , {
        name: "クロリス/私服", rarity: "白", cl: "ウィッチ", AW: "覚醒"
        , stats: { cost: "-4" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "サブリナ", rarity: "白", cl: "パイレーツ", AW: "覚醒"
        , stats: { cost: "-3" }
        , target: { cl: [ "セーラー", "パイレーツ" ] }
    }
    , {
        name: "極神竜巫女", cl: "ドラゴンシャーマン", AW: "覚2b"
        , stats: { atk: "+5%" }
        , target: { others: [ "ドラゴン" ] }
        , note: "ドラゴンシャーマン系"
    }
    , {
        name: "フーリ/水着", rarity: "金", cl: "ヴァンパイアハンター", AW: "覚醒"
        , stats: { atk: "+5%" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "ヒミコ", rarity: "黒", cl: "シャーマン", AW: "未"
        , stats: { atk: "+10%", def: "+10%" }
        , target: [
            { home: [ "東の国" ] }
            , { race: [ "天界人" ] }
        ]
    }
    , {
        name: "ヒミコ", rarity: "黒", cl: "シャーマン", AW: "覚醒"
        , stats: { atk: "+15%", def: "+15%" }
        , target: [
            { home: [ "東の国" ] }
            , { race: [ "天界人" ] }
        ]
    }
    , {
        name: "ビショップ", cl: "ビショップ", AW: "未"
        , stats: { ct: "-20%" }
        , target: { others: [ "聖職者" ] }
    }
    , {
        name: "エルダービショップ", cl: "ビショップ", AW: "覚1"
        , stats: { ct: "-30%" }
        , target: { others: [ "聖職者" ] }
        , note: "ビショップ系"
    }
    , {
        name: "パトリアーク", cl: "ビショップ", AW: "覚2a"
        , stats: { ct: "-50%" }
        , target: { others: [ "聖職者" ] }
        , note: "ビショップ系"
    }
    , {
        name: "フィロソファー", cl: "ビショップ", AW: "覚2b"
        , stats: { ct: "-35%" }
        , target: { others: [ "聖職者" ] }
        , note: "ビショップ系"
    }
    , {
        name: "セレイナ", rarity: "白", cl: "ビショップ", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { cl: [ "エンジェル" ] }
    }
    , {
        name: "大参謀", cl: "後衛戦術家", AW: "覚2a"
        , stats: { ct: "-45%" }
        , target: { depType: [ "遠距離" ] }
        , note: "後衛戦術家系"
    }
    , {
        name: "バトルストラテジスト", cl: "後衛戦術家", AW: "覚2b"
        , stats: { ct: "-45%" }
        , target: { depType: [ "近接" ] }
        , note: "後衛戦術家系"
    }
    , {
        name: "イリオス", rarity: "白", cl: "後衛戦術家", AW: "未"
        , stats: { atk: "+10%" }
        , target: { race: [ "デーモン系", "オーク", "ゴブリン" ] }
    }
    , {
        name: "イリオス", rarity: "白", cl: "後衛戦術家", AW: "覚醒"
        , stats: { atk: "+15%" }
        , target: { race: [ "デーモン系", "オーク", "ゴブリン" ] }
    }
    , {
        name: "レオナ/水着", rarity: "白", cl: "後衛戦術家", AW: "覚醒"
        , stats: { ct: "-45%" }
        , target: [
            { home: [ "白の帝国" ], depType: [ "近接" ] }
            , { season: [ "サマー" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ちびイリオス", rarity: "ちび", cl: "後衛戦術家"
        , stats: { atk: "+10%" }
        , target: { race: [ "デーモン系", "オーク", "ゴブリン" ] }
    }
    , {
        name: "リノ", rarity: "金", cl: "サモナー", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { cl: [ "サモナー" ] }
    }
    , {
        name: "リンネ/水着", rarity: "黒", cl: "風水使い", AW: "未"
        , stats: { ct: "-30%" }
        , target: { season: [ "サマー" ], depType: [ "遠距離" ] }
    }
    , {
        name: "リンネ/水着", rarity: "黒", cl: "風水使い", AW: "覚醒"
        , stats: { ct: "-50%" }
        , target: { season: [ "サマー" ], depType: [ "遠距離" ] }
    }
    , {
        name: "マーニー", rarity: "白", cl: "ダンサー", AW: "覚醒"
        , stats: { cost: "-1" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "マーニー/バレンタイン", rarity: "白", cl: "ダンサー", AW: "覚醒"
        , stats: { def: "+10%" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "王国政務官", cl: "政務官", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { cl: [ "王子" ] }
        , note: "政務官系"
    }
    , {
        name: "アンナ/メイド", rarity: "黒", cl: "政務官", AW: "覚醒"
        , stats: { atk: "+15%", def: "+15%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "メトゥス", rarity: "黒", cl: "ネクロマンサー", AW: "覚醒"
        , stats: { atk: "+20%" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "メープル", rarity: "白", cl: "ドルイド", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { cl: [ "ワルキューレ", "ボウライダー", "ドルイド", "レンジャー" ] }
    }
    , {
        name: "ローリエ/バレンタイン", rarity: "白", cl: "ドルイド", AW: "未"
        , stats: { atk: "+5%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ローリエ/バレンタイン", rarity: "白", cl: "ドルイド", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ブランシュ", rarity: "白", cl: "魔物使い", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { race: [ "獣人" ] }
    }
    , {
        name: "ドロテア", rarity: "黒", cl: "ダークプリースト", AW: "覚醒"
        , stats: { atk: "+15%", draw: "○" }
        , target: { race: [ "エルフ系", "ドワーフ" ] }
    }
    , {
        name: "ディエーラ/花嫁", rarity: "黒", cl: "マーチャント", AW: "覚醒"
        , stats: { ct: "-45%" }
        , target: { season: [ "ジューンブライド" ] }
    }
    , {
        name: "ミネット/学園", rarity: "白", cl: "マーチャント", AW: "覚醒"
        , stats: { ct: "-40%" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "ソシエ", rarity: "黒", cl: "モンスタースレイヤー", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "ルメディア", rarity: "白", cl: "ライフリンカー", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { cl: [ "神官戦士", "ヒーラー", "ライフリンカー" ] }
    }
    , {
        name: "ソニア", rarity: "白", cl: "ルーンアコライト", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { cl: [ "神官戦士", "ヒーラー", "ビショップ", "ルーンアコライト", "アコライト" ] }
    }
    , {
        name: "マルレーン", rarity: "黒", cl: "支援工兵", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "パトリシア", rarity: "白", cl: "支援工兵", AW: "覚醒"
        , stats: { def: "+7%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "ローズ/クリスマス", rarity: "白", cl: "ハーバリスト", AW: "覚醒"
        , stats: { def: "+5%" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "夜行さん", cl: "夜行さん", AW: "未"
        , stats: { cost: "-2" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "百妖夜行", cl: "夜行さん", AW: "覚1"
        , stats: { cost: "-3" }
        , target: { race: [ "妖怪" ] }
        , note: "夜行さん系"
    }
    , {
        name: "月下夜行", cl: "夜行さん", AW: "覚2a"
        , stats: { cost: "-5" }
        , target: { race: [ "妖怪" ] }
        , note: "夜行さん系"
    }
    , {
        name: "絢爛千妖夜行", cl: "夜行さん", AW: "覚2b"
        , stats: { cost: "-3" }
        , target: { race: [ "妖怪" ] }
        , note: "夜行さん系"
    }
    , {
        name: [ "エルダードラゴン", "メイガス" ], cl: "ドラゴンメイジ", AW: "覚2a"
        , stats: { atk: "+20%", atkCd: "-20%" }
        , target: { others: [ "ドラゴン" ] }
        , note: "ドラゴンメイジ系"
    }
    , {
        name: "ドラゴンデストラクト", cl: "ドラゴンメイジ", AW: "覚2b"
        , stats: { atk: "+15%" }
        , target: { others: [ "ドラゴン" ] }
        , note: "ドラゴンメイジ系"
    }
    , {
        name: "デリア", rarity: "白", cl: "ドラグーン", AW: "覚醒"
        , stats: { mr: "+10" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "ミカ/温泉", rarity: "白", cl: "ドラグーン", AW: "未"
        , stats: { atk: "+5%" }
        , target: { season: [ "温泉" ] }
    }
    , {
        name: "ミカ/温泉", rarity: "白", cl: "ドラグーン", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { season: [ "温泉" ] }
    }
    , {
        name: "アスバール", rarity: "黒", cl: "魔界総帥", AW: "覚醒"
        , stats: { atk: "+10%", def: "+10%", draw: "○" }
        , target: { others: [ "魔界" ] }
    }
    , {
        name: "ちびアスバール", rarity: "ちび", cl: "魔界総帥"
        , stats: { atk: "+10%", def: "+10%", draw: "○" }
        , target: { others: [ "魔界" ] }
    }
    , {
        name: "スイゼ", rarity: "白", cl: "ハデスシャーマン", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { race: [ "冥界人" ] }
    }
    , {
        name: "ニーカ", rarity: "白", cl: "メディック", AW: "未"
        , stats: { atk: "+5%" }
        , target: { home: [ "王国" ] }
    }
    , {
        name: "ニーカ", rarity: "白", cl: "メディック", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { home: [ "王国" ] }
    }
    , {
        name: "ゴブリン博士", cl: "ゴブリン博士"
        , stats: { hp: "+10%", atk: "+10%" }
        , target: [
            { race: [ "ゴブリン" ] }
            , { others: [ "機械" ] }
        ]
    }
    , {
        name: "ちびメカゴブリンクイーン", rarity: "ちび", cl: "メカゴブリンクイーン"
        , stats: { ct: "-30%" }
        , target: [
            { race: [ "ゴブリン" ] }
            , { others: [ "機械" ] }
        ]
    }
    , {
        name: "魔王の玉座", rarity: "金", cl: "魔王の玉座"
        , stats: { atk: "+10%", def: "+10%" }
        , target: { others: [ "魔界" ] }
        , note: "無差別バフと合わせて+15%"
    }
    , {
        name: "海の家", rarity: "金", cl: "海の家"
        , stats: { atk: "+10%", def: "+10%" }
        , target: { season: [ "サマー" ] }
        , note: "無差別バフと合わせて+15%"
    }
    , {
        name: "パリオス", rarity: "黒", cl: "スカイウォリアー", AW: "覚醒"
        , stats: { atk: "+10%", def: "+10%", mr: "+5" }
        , target: { race: [ "鳥人" ] }
    }
    , {
        name: "スカイスプレマシー", cl: "スカイシューター", AW: "覚2a"
        , stats: { atk: "+10%" }
        , target: { others: [ "飛行" ] }
        , note: "スカイシューター系"
    }
    , {
        name: "ジタリス", rarity: "白", cl: "スカイヒーラー", AW: "未"
        , stats: { atk: "+7%" }
        , target: { race: [ "天使", "鳥人", "天界人" ] }
    }
    , {
        name: "ジタリス", rarity: "白", cl: "スカイヒーラー", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { race: [ "天使", "鳥人", "天界人" ] }
    }
    , {
        name: "帝国軍旗", rarity: "金", cl: "帝国軍旗"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "王国軍旗", rarity: "金", cl: "王国軍旗"
        , stats: { atk: "+8%", def: "+8%", rege: [ "50/秒", "?/?f" ] }
        , target: { home: [ "王国" ] }
    }
    , {
        name: "迷い家", cl: "迷い家"
        , stats: { cost: "+3" }
        , target: { others: [ "高貴" ] }
    }
    , {
        name: [ "ねんどろいど", "プリンセス" ], cl: "ねんどろいどプリンセス"
        , stats: { atk: "+10%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "王太子", cl: "王太子", AW: "未"
        , stats: { draw: "○" }
        , target: { home: [ "パルス王国" ] }
    }
    , {
        name: "ファランギース", rarity: "白", cl: "アーチャー", AW: "覚醒"
        , stats: { rege: [ "20/秒", "10/15f" ] }
        , target: { home: [ "パルス王国" ] }
    }
    , {
        name: [ "ウルザ・", "プラナアイス" ], rarity: "黒", cl: "ゼス警察長官【ランス】", AW: "覚醒"
        , stats: { draw: "○" }
        , target: {
            cl: [
                "ホーネット派魔人【ランス】", "忍者【ランス】", "上杉家当主【ランス】"
                , "ゼス警察長官【ランス】", "逃亡悪魔【ランス】", "旅人【ランス】"
                , "アコライト", "魔法使い【ランス】", "初代大統領【ランス】", "ホーネット派代表【ランス】"
            ]
        }
    }
    , {
        name: [ "リズナ・", "ランフビット" ], rarity: "黒", cl: "旅人【ランス】", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "曹操", rarity: "黒", cl: "奸雄【恋姫】", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "董卓 仲穎", rarity: "黒", cl: "暴君【恋姫】", AW: "未"
        , stats: { draw: "○" }
        , target: { home: [ "恋姫" ] }
    }
    , {
        name: "董卓 仲穎", rarity: "黒", cl: "暴君【恋姫】", AW: "覚醒"
        , stats: { draw: "○" }
        , target: { home: [ "恋姫" ] }
    }
    , {
        name: "メリオダス", rarity: "黒", cl: "騎士【七つの大罪】", AW: "未"
        , stats: { atk: "+15%" }
        , target: { others: [ "＜七つの大罪＞" ] }
    }
    , {
        name: "メリオダス", rarity: "黒", cl: "騎士【七つの大罪】", AW: "覚醒"
        , stats: { atk: "+15%" }
        , target: [
            { cl: [ "王女【七つの大罪】" ] }
            , { others: [ "＜七つの大罪＞" ] }
        ]
    }
    , {
        name: [ "クラリス・", "ツァインブルグ" ], rarity: "黒", cl: "新米刑事【流星WA】", AW: "未"
        , stats: { rege: [ "40/秒", "20/15f" ] }
        , target: { race: [ "エルフ系", "ドワーフ" ] }
    }
    , {
        name: [ "クラリス・", "ツァインブルグ" ], rarity: "黒", cl: "新米刑事【流星WA】", AW: "覚醒"
        , stats: { rege: [ "40/秒", "20/15f" ] }
        , target: { race: [ "エルフ系", "ドワーフ" ] }
    }
    , {
        name: "ふうま時子", rarity: "白", cl: "対魔忍 精神【対魔忍】", AW: "未"
        , stats: { def: "+5%" }
        , target: {
            cl: [
                "忍者", "鬼刃忍"
                , "対魔忍 超人【対魔忍】", "対魔忍 魔性【対魔忍】", "対魔忍 精神【対魔忍】", "対魔忍 科学【対魔忍】"
                , "対魔忍 自然【対魔忍】"
            ]
        }
    }
    , {
        name: "ふうま時子", rarity: "白", cl: "対魔忍 精神【対魔忍】", AW: "覚醒"
        , stats: { def: "+10%" }
        , target: {
            cl: [
                "忍者", "鬼刃忍"
                , "対魔忍 超人【対魔忍】", "対魔忍 魔性【対魔忍】", "対魔忍 精神【対魔忍】", "対魔忍 科学【対魔忍】"
                , "対魔忍 自然【対魔忍】"
            ]
        }
    }
    , {
        name: "水城ゆきかぜ", rarity: "黒", cl: "対魔忍 自然【対魔忍】", AW: "未"
        , stats: { atk: "+5%" }
        , target: {
            cl: [
                "忍者", "鬼刃忍"
                , "対魔忍 超人【対魔忍】", "対魔忍 魔性【対魔忍】", "対魔忍 精神【対魔忍】", "対魔忍 科学【対魔忍】"
                , "対魔忍 自然【対魔忍】"
            ]
        }
    }
    , {
        name: "水城ゆきかぜ", rarity: "黒", cl: "対魔忍 自然【対魔忍】", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: {
            cl: [
                "忍者", "鬼刃忍"
                , "対魔忍 超人【対魔忍】", "対魔忍 魔性【対魔忍】", "対魔忍 精神【対魔忍】", "対魔忍 科学【対魔忍】"
                , "対魔忍 自然【対魔忍】"
            ]
        }
    }
    , {
        name: "恋の応援団（霊）", rarity: "トークン", AW: "覚醒"
        , stats: { atk: "+30%", def: "+30%" }
        , target: { cl: [ "王子" ] }
        , note: [ "シャディア/バレンタイン", "分類未確認" ]
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒", skill: ""
        , stats: { : "" }
        , target: { : [ "" ] }
        , target: [
            { : [ "" ] }
            , { : [ "" ] }
        ]
    }
    
    黒 白 青 金 ちび 銀 銅 鉄 トークン
    
    未 覚醒 覚1 覚2a 覚2b
    
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
    
    note 分類未確認
    
    正月 水着 浴衣 バニー 花嫁

*/