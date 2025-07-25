const buff = {};

// 編成
buff.team = [
    {
        name: "王子【砂漠】", cl: "王子"
        , stats: { hp: "+10%", atk: "+10%" }
        , target: { home: [ "砂漠の国" ] }
    }
    , {
        name: "王子【砂漠】", cl: "王子"
        , stats: { hp: "+20%", atk: "+20%" }
        , target: { home: [ "砂漠の国" ] }
        , note: "Lv3以上"
    }
    , {
        name: "王子【獣装】", cl: "王子"
        , stats: { hp: "+10%", atk: "+10%" }
        , target: { race: [ "獣人" ] }
    }
    , {
        name: "王子【獣装】", cl: "王子"
        , stats: { hp: "+20%", atk: "+20%" }
        , target: { race: [ "獣人" ] }
        , note: "Lv3以上"
    }
    , {
        name: "王子【ダーク】", cl: "王子"
        , stats: { hp: "+10%" }
        , target: [
            { race: [ "デーモン系", "オーク", "ゴブリン" ] }
            , { others: [ "アンデッド" ] }
        ]
    }
    , {
        name: "王子【ナンディ】", cl: "王子"
        , stats: { atk: "+7%", def: "+7%" }
        , target: { year: [ "2021年" ] }
    }
    , {
        name: "王子【ナンディ】", cl: "王子"
        , stats: { hp: "+10%", atk: "+10%", def: "+10%" }
        , target: { year: [ "2021年" ] }
        , note: "Lv3以上"
    }
    , {
        name: "王子【海鎮】", cl: "王子"
        , stats: { atk: "+10%" }
        , target: [
            { cl: [ "セーラー", "アクアナイト", "パイレーツ" ] }
            , { race: [ "魚人" ] }
        ]
    }
    , {
        name: "王子【海鎮】", cl: "王子"
        , stats: { hp: "+10%", atk: "+20%" }
        , target: [
            { cl: [ "セーラー", "アクアナイト", "パイレーツ" ] }
            , { race: [ "魚人" ] }
        ]
        , note: "Lv3以上"
    }
    , {
        name: "王子【ドゥン】", cl: "王子"
        , stats: { atk: "+7%", def: "+7%" }
        , target: { year: [ "2022年" ] }
    }
    , {
        name: "王子【ドゥン】", cl: "王子"
        , stats: { hp: "+10%", atk: "+10%", def: "+10%" }
        , target: { year: [ "2022年" ] }
        , note: "Lv3以上"
    }
    , {
        name: "王子【焔竜】", cl: "王子"
        , stats: { hp: "+7%", atk: "+15%" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "王子【焔竜】", cl: "王子"
        , stats: { hp: "+10%", atk: "+20%" }
        , target: { others: [ "ドラゴン" ] }
        , note: "Lv3以上"
    }
    , {
        name: "王子【水着】", cl: "王子"
        , stats: { atk: "+10%" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "王子【天羽々斬】", cl: "王子"
        , stats: { hp: "+15%", atk: "+7%" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "王子【天羽々斬】", cl: "王子"
        , stats: { hp: "+20%", atk: "+10%" }
        , target: { home: [ "東の国" ] }
        , note: "Lv3以上"
    }
    , {
        name: "王子【正月】", cl: "王子"
        , stats: { hp: "+10%", def: "+10%" }
        , target: { season: [ "お正月" ] }
    }
    , {
        name: "王子【玉兎】", cl: "王子"
        , stats: { atk: "+7%", def: "+7%" }
        , target: { year: [ "2023年" ] }
    }
    , {
        name: "王子【玉兎】", cl: "王子"
        , stats: { atk: "+7%", def: "+7%" }
        , stats: { hp: "+10%", atk: "+10%", def: "+10%" }
        , target: { year: [ "2023年" ] }
        , note: "Lv3以上"
    }
    , {
        name: "王子【麒麟】", cl: "王子"
        , stats: { hp: "+10%", atk: "+10%" }
        , target: { home: [ "華の国" ] }
    }
    , {
        name: "王子【対魔忍】", cl: "王子"
        , stats: { atk: "+15%" }
        , target: {
            cl: [
                "忍者", "鬼刃忍"
                , "対魔忍 超人【対魔忍】", "対魔忍 魔性【対魔忍】", "対魔忍 精神【対魔忍】", "対魔忍 科学【対魔忍】"
                , "対魔忍 自然【対魔忍】"
            ]
        }
    }
    , {
        name: "王子【竜王】", cl: "王子"
        , stats: { atk: "+7%", def: "+7%" }
        , target: { year: [ "2024年" ] }
    }
    , {
        name: "王子【竜王】", cl: "王子"
        , stats: { hp: "+10%", atk: "+10%", def: "+10%" }
        , target: { year: [ "2024年" ] }
        , note: "Lv3以上"
    }
    , {
        name: "王子【不死】", cl: "王子"
        , stats: { hp: "+15%", atk: "+7%" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "王子【不死】", cl: "王子"
        , stats: { hp: "+15%", atk: "+12%" }
        , target: { others: [ "アンデッド" ] }
        , note: "Lv3以上"
    }
    , {
        name: "王子【聖夜】", cl: "王子"
        , stats: { hp: "+15%" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "王子【翼蛇】", cl: "王子"
        , stats: { atk: "+7%", def: "+7%" }
        , target: { year: [ "2013年", "2025年" ] }
    }
    , {
        name: "ちび王子", cl: "王子"
        , stats: { atk: "+15%" }
        , target: { others: [ "ちび" ] }
    }
    , {
        name: "ロイジィ", rarity: "黒", cl: "エレメンタルハーミット", AW: "覚醒"
        , stats: { cost: "-3" }
        , target: { others: [ "コスト回復スキル持ち" ] }
    }
    , {
        name: "アルティア", rarity: "黒", cl: "ソルジャー", AW: "未"
        , stats: { hp: "+15%" }
        , target: { cl: [ "ソルジャー" ] }
    }
    , {
        name: "アルティア", rarity: "黒", cl: "ソルジャー", AW: "覚醒"
        , stats: { hp: "+20%" }
        , target: { cl: [ "ソルジャー", "ヘビーアーマー" ] }
    }
    , {
        name: "アルティア/サマー", rarity: "黒", cl: "ソルジャー", AW: "未"
        , stats: { hp: "+15%" }
        , target: { season: [ "サマー" ], depType: [ "近接" ] }
    }
    , {
        name: "アルティア/サマー", rarity: "黒", cl: "ソルジャー", AW: "覚醒"
        , stats: { hp: "+20%" }
        , target: { season: [ "サマー" ], depType: [ "近接" ] }
    }
    , {
        name: "アリア/新装", rarity: "黒", cl: "ソルジャー", AW: "覚醒"
        , stats: { def: "+7%" }
        , target: { home: [ "王国" ] }
    }
    , {
        name: "ケイティ/新装", rarity: "黒", cl: "ソルジャー", AW: "未"
        , stats: { atk: "+4%" }
        , target: { home: [ "王国" ] }
    }
    , {
        name: "ケイティ/新装", rarity: "黒", cl: "ソルジャー", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { home: [ "王国" ] }
    }
    , {
        name: "リーゼロッテ", rarity: "白", cl: "ソルジャー", AW: "覚醒"
        , stats: { def: "+5%", mr: "+5" }
        , target: { cl: [ "ソルジャー", "ヘビーアーマー" ] }
    }
    , {
        name: "ジェイク", rarity: "白", cl: "ソルジャー", AW: "覚醒"
        , stats: { hp: "+7%" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "ケイティ/お正月", rarity: "白", cl: "ソルジャー", AW: "覚醒"
        , stats: { mr: "+10" }
        , target: { cl: [ "ソルジャー" ] }
    }
    , {
        name: "フィリス/浴衣", rarity: "金", cl: "ソルジャー", AW: "未"
        , stats: { hp: "+15%", def: "+15%" }
        , target: { rarity: [ "銅", "鉄" ] }
    }
    , {
        name: "フィリス/浴衣", rarity: "金", cl: "ソルジャー", AW: "覚醒"
        , stats: { hp: "+20%", def: "+20%" }
        , target: { rarity: [ "銅", "鉄" ] }
    }
    , {
        name: "ちびアルティア", rarity: "ちび", cl: "ソルジャー"
        , stats: { hp: "+15%" }
        , target: { cl: [ "ソルジャー" ] }
    }
    , {
        name: "ミランダ", rarity: "白", cl: "ヘビーアーマー", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { cl: [ "ヘビーアーマー", "神官戦士" ] }
    }
    , {
        name: "ベルニス/花嫁", rarity: "白", cl: "ヘビーアーマー", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ベルニス", rarity: "白", cl: "ヘビーアーマー", AW: "覚醒"
        , stats: { def: "+7%" }
        , target: { cl: [ "ヘビーアーマー", "重装砲兵" ] }
    }
    , {
        name: "レシア", rarity: "黒", cl: "ワルキューレ", AW: "覚醒"
        , stats: { hp: "+15%" }
        , target: { cl: [ "ワルキューレ", "ペガサスライダー", "ドラゴンライダー", "魔竜騎士" ] }
    }
    , {
        name: "キャリー/新装", rarity: "黒", cl: "ワルキューレ", AW: "未"
        , stats: { atk: "+7%" }
        , target: { others: [ "騎兵" ] }
    }
    , {
        name: "キャリー/新装", rarity: "黒", cl: "ワルキューレ", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { others: [ "騎兵" ] }
    }
    , {
        name: "ダリア", rarity: "白", cl: "ワルキューレ", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { cl: [ "ワルキューレ", "ボウライダー" ] }
    }
    , {
        name: "ピューロ/水着", rarity: "白", cl: "ワルキューレ", AW: "覚醒"
        , stats: { wt: "-30%" }
        , target: { others: [ "騎兵" ] }
    }
    , {
        name: "エレイン/バレンタイン", rarity: "白", cl: "ワルキューレ", AW: "未"
        , stats: { mr: "+5" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "エレイン/バレンタイン", rarity: "白", cl: "ワルキューレ", AW: "覚醒"
        , stats: { mr: "+7" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "オリヴィエ", rarity: "黒", cl: "プリンセス", AW: "未"
        , stats: { cost: "-1" }
        , target: { race: [ "エルフ系", "ドワーフ" ] }
    }
    , {
        name: "オリヴィエ", rarity: "黒", cl: "プリンセス", AW: "覚醒"
        , stats: { hp: "+20%", atk: "+7%", cost: "-1" }
        , target: { race: [ "エルフ系", "ドワーフ" ] }
    }
    , {
        name: "アンジェリーネ", rarity: "黒", cl: "プリンセス", AW: "未"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "アンジェリーネ", rarity: "黒", cl: "プリンセス", AW: "覚醒"
        , stats: { hp: "+7%", atk: "+7%", def: "+7%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "オリヴィエ/花嫁", rarity: "黒", cl: "プリンセス", AW: "未"
        , stats: { dur: "+20%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "オリヴィエ/花嫁", rarity: "黒", cl: "プリンセス", AW: "覚醒"
        , stats: { dur: "+30%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ヨシノ", rarity: "黒", cl: "プリンセス", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "シェリー", rarity: "白", cl: "プリンセス", AW: "覚醒"
        , stats: { hp: "+5%", atk: "+5%", def: "+5%" }
        , target: { rarity: [ "白", "青", "金", "銀", "銅", "鉄" ] }
    }
    , {
        name: "スクハ/バレンタイン", rarity: "白", cl: "プリンセス", AW: "未"
        , stats: { cost: "-4" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "スクハ/バレンタイン", rarity: "白", cl: "プリンセス", AW: "覚醒"
        , stats: { cost: "-7" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ジュリア/ハロウィン", rarity: "白", cl: "プリンセス", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { season: [ "ハロウィン" ] }
    }
    , {
        name: "ロゼット/お正月", rarity: "金", cl: "プリンセス", AW: "未"
        , stats: { atk: "+5%" }
        , target: { rarity: [ "金" ] }
    }
    , {
        name: "ロゼット/お正月", rarity: "金", cl: "プリンセス", AW: "覚醒"
        , stats: { atk: "+15%", def: "-10%" }
        , target: { rarity: [ "金" ] }
    }
    , {
        name: "ちびオリヴィエ", rarity: "ちび", cl: "プリンセス"
        , stats: { cost: "-1" }
        , target: { race: [ "エルフ系", "ドワーフ" ] }
    }
    , {
        name: "ちびロゼット", rarity: "ちび", cl: "プリンセス"
        , stats: { wt: "-30%" }
        , target: { rarity: [ "銀" ] }
    }
    , {
        name: "ちびアンジェリーネ", rarity: "ちび", cl: "プリンセス"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "ロゼット", rarity: "銀", cl: "プリンセス", AW: "未"
        , stats: { wt: "-30%" }
        , target: { rarity: [ "銀" ] }
    }
    , {
        name: "ユーフェ", rarity: "白", cl: "イモータルプリンセス", AW: "覚醒"
        , stats: { cost: "-2", poison: "-30%", abn: "-30%" }
        , target: { race: [ "ヴァンパイア" ] }
    }
    , {
        name: "スキュレ", rarity: "白", cl: "イビルプリンセス", AW: "覚醒"
        , stats: { hp: "+15%" }
        , target: { others: [ "HP回復不可" ] }
    }
    , {
        name: "ピリカ", rarity: "白", cl: "イビルプリンセス", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { race: [ "獣人" ] }
    }
    , {
        name: "スキュレ/浴衣", rarity: "白", cl: "イビルプリンセス", AW: "覚醒"
        , stats: { hp: "+5%" }
        , target: [
            { season: [ "サマー" ] }
            , { others: [ "深海" ] }
        ]
    }
    , {
        name: "レオーネ", rarity: "黒", cl: "バンデット", AW: "覚醒"
        , stats: { hp: "+10%", atk: "+10%", def: "+10%" }
        , target: { race: [ "獣人" ] }
    }
    , {
        name: "モーティマ/新装", rarity: "黒", cl: "バンデット", AW: "未"
        , stats: { atk: "+5%" }
        , target: [
            { cl: [ "ローグ", "バンデット" ] }
            , { sex: [ "男性" ] }
        ]
    }
    , {
        name: "モーティマ/新装", rarity: "黒", cl: "バンデット", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: [
            { cl: [ "ローグ", "バンデット" ] }
            , { sex: [ "男性" ] }
        ]
    }
    , {
        name: "イメリア", rarity: "白", cl: "バンデット", AW: "覚醒"
        , stats: { hp: "+15%" }
        , target: { cl: [ "バンデット" ] }
    }
    , {
        name: "リーフ/バレンタイン", rarity: "白", cl: "バンデット", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "コンラッド", rarity: "金", cl: "バンデット", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { cl: [ "ローグ", "バンデット" ] }
    }
    , {
        name: "モーティマ/姫", rarity: "金", cl: "バンデット", AW: "覚醒"
        , stats: { hp: "+5%", atk: "+5%" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "リキュノス", rarity: "白", cl: "中級竜兵", AW: "覚醒"
        , stats: { def: "+5%", poison: "-100%", abn: "-100%" }
        , target: { cl: [ "中級竜兵" ] }
    }
    , {
        name: "アーニャ", rarity: "黒", cl: "ドラゴンプリンセス", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "メリュジアナ", rarity: "白", cl: "ドラゴンプリンセス", AW: "覚醒"
        , stats: { mr: "+10", cost: "-3" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "クラシル", rarity: "白", cl: "ドラゴンプリンセス", AW: "覚醒"
        , stats: { atk: "+5%", cost: "-2" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "メリュジアナ", rarity: "白", cl: "ドラゴンプリンセス", AW: "未"
        , stats: { wt: "-20%" }
        , target: [
            { season: [ "ジューンブライド" ] }
            , { others: [ "ドラゴン" ] }
        ]
    }
    , {
        name: "メリュジアナ", rarity: "白", cl: "ドラゴンプリンセス", AW: "覚醒"
        , stats: { wt: "-25%" }
        , target: [
            { season: [ "ジューンブライド" ] }
            , { others: [ "ドラゴン" ] }
        ]
    }
    , {
        name: "ヒバリ", rarity: "黒", cl: "サムライ", AW: "覚醒"
        , stats: { cost: "-1" }
        , target: { cl: [ "サムライ" ] }
    }
    , {
        name: "シズカ", rarity: "白", cl: "サムライ", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "アカネ/温泉", rarity: "白", cl: "サムライ", AW: "覚醒"
        , stats: { hp: "+5%" }
        , target: { season: [ "温泉" ] }
    }
    , {
        name: "コジュウロウ", rarity: "金", cl: "サムライ", AW: "覚醒"
        , stats: { def: "+7%" }
        , target: { cl: [ "サムライ", "忍者" ] }
    }
    , {
        name: "エスタ", rarity: "黒", cl: "ペガサスライダー", AW: "未"
        , stats: { dur: "+20%" }
        , target: { cl: [ "ペガサスライダー" ] }
    }
    , {
        name: "エスタ", rarity: "黒", cl: "ペガサスライダー", AW: "覚醒"
        , stats: { dur: "+50%" }
        , target: { cl: [ "ペガサスライダー" ] }
    }
    , {
        name: "イザベル", rarity: "白", cl: "ペガサスライダー", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { cl: [ "ペガサスライダー", "グリフィンライダー" ] }
    }
    , {
        name: "ジーニア", rarity: "白", cl: "ペガサスライダー", AW: "覚醒"
        , stats: { range: "+30" }
        , target: { cl: [ "ペガサスライダー" ] }
    }
    , {
        name: "ちびエスタ", rarity: "ちび", cl: "ペガサスライダー"
        , stats: { dur: "+20%" }
        , target: { cl: [ "ペガサスライダー" ] }
    }
    , {
        name: "暗黒騎士", rarity: "黒", cl: "ダークファイター", AW: "未"
        , stats: { cost: "-2" }
        , target: { cl: [ "ダークファイター" ] }
    }
    , {
        name: "暗黒騎士", rarity: "黒", cl: "ダークファイター", AW: "覚醒"
        , stats: { cost: "-2", dur: "+30%" }
        , target: { cl: [ "ダークファイター" ] }
    }
    , {
        name: "ちび暗黒騎士", rarity: "ちび", cl: "ダークファイター"
        , stats: { cost: "-2" }
        , target: { cl: [ "ダークファイター" ] }
    }
    , {
        name: "ナキア", rarity: "白", cl: "アベンジャー", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { race: [ "デーモン系" ] }
    }
    , {
        name: "レティシア", rarity: "白", cl: "アベンジャー", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { cl: [ "アベンジャー", "ソードマスター", "ランスマスター" ] }
    }
    , {
        name: "レティシア/学園", rarity: "白", cl: "アベンジャー", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "リン", rarity: "白", cl: "モンク", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { cl: [ "モンク", "グラディエーター" ] }
    }
    , {
        name: "リーザ/バニー", rarity: "白", cl: "モンク", AW: "覚醒"
        , stats: { cost: "-1" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "エッグハント" ] }
        ]
    }
    , {
        name: "マオ/浴衣", rarity: "金", cl: "モンク", AW: "覚醒"
        , stats: { hp: "+15%" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "マツリ", rarity: "黒", cl: "前衛戦術家", AW: "覚醒"
        , stats: { hp: "+5%", atk: "+5%", def: "+5%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "マツリ/お正月", rarity: "黒", cl: "前衛戦術家", AW: "覚醒"
        , stats: { hp: "+15%" }
        , target: { season: [ "お正月" ] }
    }
    , {
        name: "マツリ/バレンタイン", rarity: "黒", cl: "前衛戦術家", AW: "未"
        , stats: { atk: "+4%", def: "+4%" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "マツリ/バレンタイン", rarity: "黒", cl: "前衛戦術家", AW: "覚醒"
        , stats: { atk: "+7%", def: "+7%" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "ルヴェア", rarity: "白", cl: "前衛戦術家", AW: "覚醒"
        , stats: { hp: "+7%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "サビーネ", rarity: "白", cl: "魔法剣士", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { cl: [ "魔法剣士", "ロイヤルガード" ] }
    }
    , {
        name: "シエナ", rarity: "白", cl: "魔法剣士", AW: "覚醒"
        , stats: { cost: "-1" }
        , target: { cl: [ "魔法剣士", "メイジアーマー" ] }
    }
    , {
        name: "シエナ/温泉", rarity: "白", cl: "魔法剣士", AW: "未"
        , stats: { hp: "+5%", atk: "+5%", def: "+5%", cost: "+1" }
        , target: [
            { cl: [ "魔法剣士" ] }
            , { season: [ "温泉" ] }
        ]
    }
    , {
        name: "シエナ/温泉", rarity: "白", cl: "魔法剣士", AW: "覚醒"
        , stats: { hp: "+7%", atk: "+7%", def: "+7%", cost: "+1" }
        , target: [
            { cl: [ "魔法剣士" ] }
            , { season: [ "温泉" ] }
        ]
    }
    , {
        name: "タラニア", rarity: "白", cl: "魔法剣士", AW: "覚醒"
        , stats: { atkCd: "-20%" }
        , target: { cl: [ "魔法剣士", "メイジ" ] }
    }
    , {
        name: "ソフィー/お正月", rarity: "黒", cl: "エンジェル", AW: "未"
        , stats: { poison: "-100%", abn: "-100%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ソフィー/お正月", rarity: "黒", cl: "エンジェル", AW: "覚醒"
        , stats: { hp: "+20%", atkCd: "-40%", poison: "-100%", abn: "-100%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ミルノ", rarity: "白", cl: "エンジェル", AW: "覚醒"
        , stats: { atk: "+5%", poison: "-100%", abn: "-100%" }
        , target: { cl: [ "エンジェル" ] }
    }
    , {
        name: "フォニア", rarity: "白", cl: "エンジェル", AW: "覚醒"
        , stats: { def: "+5%", mr: "+5" }
        , target: { cl: [ "エンジェル" ] }
    }
    , {
        name: "クロエ/学園", rarity: "白", cl: "エンジェル", AW: "覚醒"
        , stats: { atk: "+7%", wt: "-30%" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "ミルノ/水着", rarity: "白", cl: "エンジェル", AW: "覚醒"
        , stats: { poison: "-100%", abn: "-100%" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "ミルノ/浴衣", rarity: "白", cl: "エンジェル", AW: "未"
        , stats: { other: "" }
        , target: { season: [ "サマー" ] }
        , note: "天界-20%"
    }
    , {
        name: "ミルノ/浴衣", rarity: "白", cl: "エンジェル", AW: "覚醒"
        , stats: { other: "" }
        , target: { season: [ "サマー" ] }
        , note: "天界-30%"
    }
    , {
        name: "セフィーレ/ハロウィン", rarity: "白", cl: "エンジェル", AW: "覚醒"
        , stats: { hp: "+5%", mr: "+5" }
        , target: { season: [ "ハロウィン" ] }
    }
    , {
        name: "ボリス", rarity: "金", cl: "くぐつ使い", AW: "覚醒"
        , stats: { atk: "+5%" }
        , target: { cl: [ "くぐつ使い" ] }
    }
    , {
        name: "リーンベル", rarity: "白", cl: "セーラー", AW: "覚醒"
        , stats: { dur: "+30%" }
        , target: { cl: [ "セーラー" ] }
    }
    , {
        name: "ジャクリーヌ", rarity: "白", cl: "セーラー", AW: "覚醒"
        , stats: { poison: "-100%", abn: "-100%" }
        , target: { cl: [ "セーラー", "パイレーツ" ] }
    }
    , {
        name: "カヨウ", rarity: "黒", cl: "妖狐", AW: "覚醒"
        , stats: { hp: "+15%", atk: "+15%", def: "+15%", mr: "+10", cost: "+1" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "エクス", rarity: "黒", cl: "神官戦士", AW: "覚醒"
        , stats: { atk: "+5%", range: "+10" }
        , target: { cl: [ "神官戦士", "ヒーラー", "風水使い", "ダークプリースト" ] }
    }
    , {
        name: "エクス/バレンタイン", rarity: "黒", cl: "神官戦士", AW: "未"
        , stats: { cost: "-2" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "エクス/バレンタイン", rarity: "黒", cl: "神官戦士", AW: "覚醒"
        , stats: { cost: "-2" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "エクス/バレンタイン", rarity: "黒", cl: "神官戦士", AW: "覚醒"
        , stats: { hp: "+20%" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "エレット/バレンタイン", rarity: "白", cl: "神官戦士", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "ルチア/水着", rarity: "白", cl: "神官戦士", AW: "覚醒"
        , stats: { hp: "+5%", def: "+5%" }
        , target: [
            { cl: [ "神官戦士" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "グレース", rarity: "黒", cl: "メイジアーマー", AW: "未"
        , stats: { mr: "+5" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "グレース", rarity: "黒", cl: "メイジアーマー", AW: "覚醒"
        , stats: { mr: "+10" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "パルフィ", rarity: "白", cl: "メイジアーマー", AW: "覚醒"
        , stats: { hp: "+5%", atk: "+5%", def: "+5%" }
        , target: { cl: [ "メイジアーマー" ] }
    }
    , {
        name: "パルフィ", rarity: "白", cl: "メイジアーマー", AW: "覚醒"
        , stats: { cost: "-3" }
        , target: { cl: [ "メイジアーマー", "メイジ", "ビショップ" ] }
    }
    , {
        name: "ライチ/学園", rarity: "白", cl: "メイジアーマー", AW: "覚醒"
        , stats: { hp: "+5%", atk: "+5%", def: "+5%" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "ちびグレース", rarity: "ちび", cl: "メイジアーマー"
        , stats: { mr: "+5" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "ティファ/クリスマス", rarity: "黒", cl: "ドラゴンライダー", AW: "覚醒"
        , stats: { atk: "+10%", mr: "+5" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "スイレン/花嫁", rarity: "白", cl: "ドラゴンライダー", AW: "覚醒"
        , stats: { hp: "+5%", def: "+5%" }
        , target: [
            { cl: [ "王子" ] }
            , { season: [ "ジューンブライド" ] }
        ]
    }
    , {
        name: "リオン", rarity: "黒", cl: "ボウライダー", AW: "未"
        , stats: { cost: "-1" }
        , target: { cl: [ "ワルキューレ", "ペガサスライダー", "ドラゴンライダー", "魔竜騎士", "ボウライダー" ] }
    }
    , {
        name: "リオン", rarity: "黒", cl: "ボウライダー", AW: "覚醒"
        , stats: { atk: "+10%", cost: "-2" }
        , target: { cl: [ "ワルキューレ", "ペガサスライダー", "ドラゴンライダー", "魔竜騎士", "ボウライダー" ] }
    }
    , {
        name: "エメルダ", rarity: "黒", cl: "ボウライダー", AW: "覚醒"
        , stats: { range: "+10" }
        , target: { cl: [ "忍者", "魔法剣士", "メイジアーマー", "ボウライダー", "重装砲兵" ] }
    }
    , {
        name: "カティナ", rarity: "白", cl: "ボウライダー", AW: "覚醒"
        , stats: { atk: "+5%", dur: "+20%" }
        , target: { cl: [ "ボウライダー" ] }
    }
    , {
        name: "フラフィー", rarity: "白", cl: "ボウライダー", AW: "覚醒"
        , stats: { poison: "-20%", abn: "-20%" }
        , target: { race: [ "獣人" ] }
    }
    , {
        name: "ちびリオン", rarity: "ちび", cl: "ボウライダー"
        , stats: { cost: "-1" }
        , target: { cl: [ "ワルキューレ", "ペガサスライダー", "ドラゴンライダー", "魔竜騎士", "ボウライダー" ] }
    }
    , {
        name: "セーラ", rarity: "黒", cl: "メイド", AW: "未"
        , stats: { hp: "+10%" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "セーラ", rarity: "黒", cl: "メイド", AW: "覚醒"
        , stats: { hp: "+10%", atk: "+10%", def: "+10%" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "アリエル", rarity: "黒", cl: "メイド", AW: "未"
        , stats: { hp: "+10%", atk: "+10%" }
        , target: { cl: [ "神官戦士", "ヒーラー", "ビショップ", "ルーンアコライト", "アコライト" ] }
    }
    , {
        name: "アリエル", rarity: "黒", cl: "メイド", AW: "覚醒"
        , stats: { hp: "+15%", atk: "+15%", range: "+10" }
        , target: { cl: [ "神官戦士", "ヒーラー", "ビショップ", "ルーンアコライト", "アコライト" ] }
    }
    , {
        name: "セーラ/水着", rarity: "黒", cl: "メイド", AW: "未"
        , stats: { hp: "+10%" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { season: [ "サマー" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "セーラ/水着", rarity: "黒", cl: "メイド", AW: "覚醒"
        , stats: { hp: "+10%", atk: "+10%", def: "+10%" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { season: [ "サマー" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "ファニュア", rarity: "黒", cl: "メイド", AW: "未"
        , stats: { def: "+5%" }
        , target: [
            { race: [ "デーモン系" ] }
            , { others: [ "アンデッド" ] }
        ]
    }
    , {
        name: "ファニュア", rarity: "黒", cl: "メイド", AW: "覚醒"
        , stats: { atk: "+8%", def: "+8%" }
        , target: [
            { race: [ "デーモン系" ] }
            , { others: [ "アンデッド" ] }
        ]
    }
    , {
        name: "セーラ/クリスマス", rarity: "黒", cl: "メイド", AW: "未"
        , stats: { atk: "+5%" }
        , target: [ { sex: [ "女性" ] } ]
    }
    , {
        name: "セーラ/クリスマス", rarity: "黒", cl: "メイド", AW: "未"
        , stats: { atk: "+10%" }
        , target: [
            { season: [ "クリスマス" ] }
            , { others: [ "高貴" ] }
        ]
    }
    , {
        name: "セーラ/クリスマス", rarity: "黒", cl: "メイド", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: [ { sex: [ "女性" ] } ]
    }
    , {
        name: "セーラ/クリスマス", rarity: "黒", cl: "メイド", AW: "覚醒"
        , stats: { atk: "+20%" }
        , target: [
            { season: [ "クリスマス" ] }
            , { others: [ "高貴" ] }
        ]
    }
    , {
        name: "シャーリー", rarity: "白", cl: "メイド", AW: "未"
        , stats: { dur: "+20%" }
        , target: { cl: [ "メイジ" ] }
    }
    , {
        name: "シャーリー", rarity: "白", cl: "メイド", AW: "未"
        , stats: { atk: "+7%" }
        , target: { cl: [ "ビショップ" ] }
    }
    , {
        name: "シャーリー", rarity: "白", cl: "メイド", AW: "未"
        , stats: { cost: "-3" }
        , target: { cl: [ "サモナー" ] }
    }
    , {
        name: "シャーリー", rarity: "白", cl: "メイド", AW: "未"
        , stats: { atk: "+5%" }
        , target: { cl: [ "エレメンタラー" ] }
    }
    , {
        name: "シャーリー", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { dur: "+35%" }
        , target: { cl: [ "メイジ" ] }
    }
    , {
        name: "シャーリー", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { atk: "+13%" }
        , target: { cl: [ "ビショップ" ] }
    }
    , {
        name: "シャーリー", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { cost: "-5" }
        , target: { cl: [ "サモナー" ] }
    }
    , {
        name: "シャーリー", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { cl: [ "エレメンタラー" ] }
    }
    , {
        name: "アイリーン", rarity: "白", cl: "メイド", AW: "未"
        , stats: { dur: "+20%" }
        , target: { cl: [ "ローグ" ] }
    }
    , {
        name: "アイリーン", rarity: "白", cl: "メイド", AW: "未"
        , stats: { hp: "+7%" }
        , target: { cl: [ "バンデット" ] }
    }
    , {
        name: "アイリーン", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { dur: "+20%" }
        , target: { cl: [ "ローグ" ] }
    }
    , {
        name: "アイリーン", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { hp: "+7%" }
        , target: { cl: [ "バンデット" ] }
    }
    , {
        name: "アイリーン", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { atk: "+5%" }
        , target: { cl: [ "パイレーツ" ] }
    }
    , {
        name: "アイリーン", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { cost: "-1" }
        , target: { cl: [ "シーフ" ] }
    }
    , {
        name: "リーナ", rarity: "白", cl: "メイド", AW: "未"
        , stats: { atk: "+7%" }
        , target: { race: [ "エルフ系", "ドワーフ", "ゴブリン" ] }
    }
    , {
        name: "リーナ", rarity: "白", cl: "メイド", AW: "未"
        , stats: { hp: "+10%" }
        , target: { race: [ "オーク" ] }
    }
    , {
        name: "リーナ", rarity: "白", cl: "メイド", AW: "未"
        , stats: { poison: "-100%", abn: "-100%" }
        , target: { race: [ "獣人" ] }
    }
    , {
        name: "リーナ", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { race: [ "エルフ系", "ドワーフ", "ゴブリン" ] }
    }
    , {
        name: "リーナ", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { hp: "+15%" }
        , target: { race: [ "オーク" ] }
    }
    , {
        name: "リーナ", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { poison: "-100%", abn: "-100%" }
        , target: { race: [ "獣人" ] }
    }
    , {
        name: "マリカ", rarity: "白", cl: "メイド", AW: "未"
        , stats: { atk: "+5%", def: "+5%", range: "+10" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "マリカ", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { atk: "+7%", def: "+7%", range: "+15" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "サクラ", rarity: "白", cl: "メイド", AW: "未"
        , stats: { atk: "+8%", def: "+8%" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "サクラ", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { atk: "+13%", def: "+13%" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "マリカ/水着", rarity: "白", cl: "メイド", AW: "未"
        , stats: { def: "+5%" }
        , target: { season: [ "サマー" ], depType: [ "近接" ] }
    }
    , {
        name: "マリカ/水着", rarity: "白", cl: "メイド", AW: "未"
        , stats: { range: "+5" }
        , target: { season: [ "サマー" ], depType: [ "遠距離" ] }
    }
    , {
        name: "マリカ/水着", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { def: "+7%" }
        , target: [
            { home: [ "白の帝国" ], depType: [ "近接" ] }
            , { season: [ "サマー" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "マリカ/水着", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { range: "+10" }
        , target: [
            { home: [ "白の帝国" ], depType: [ "遠距離" ] }
            , { season: [ "サマー" ], depType: [ "遠距離" ] }
        ]
    }
    , {
        name: "ソーマ/メイド", rarity: "白", cl: "メイド", AW: "未"
        , stats: { hp: "+5%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ソーマ/メイド", rarity: "白", cl: "メイド", AW: "未"
        , stats: { atk: "+3%" }
        , target: { others: [ "弓兵" ] }
    }
    , {
        name: "ソーマ/メイド", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ソーマ/メイド", rarity: "白", cl: "メイド", AW: "覚醒"
        , stats: { atk: "+5%" }
        , target: { others: [ "弓兵" ] }
    }
    /*
    , {
        name: "ヒカゲ", rarity: "青", cl: "メイド", AW: "未"
        , stats: { atk: "+5%", def: "+5%", cost: "-2" }
        , target: { unitName: [ "カグヤ" ] }
    }
    , {
        name: "ヒカゲ", rarity: "青", cl: "メイド", AW: "未"
        , stats: { atk: "+10%", def: "+10%", cost: "-2" }
        , target: { unitName: [ "カグヤ" ] }
    }
    */
    , {
        name: "ちびセーラ", rarity: "ちび", cl: "メイド"
        , stats: { hp: "+10%" }
        , target: [
            { cl: [ "王子", "皇帝" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "ちびアリエル", rarity: "ちび", cl: "メイド"
        , stats: { hp: "+10%", atk: "+10%" }
        , target: { cl: [ "神官戦士", "ヒーラー", "ビショップ", "ルーンアコライト", "アコライト" ] }
    }
    , {
        name: "エマ/温泉", rarity: "黒", cl: "ヴァンパイアロード", AW: "未"
        , stats: { atkCd: "-20%" }
        , target: [
            { season: [ "温泉" ] }
            , { others: [ "アンデッド" ] }
        ]
    }
    , {
        name: "エマ/温泉", rarity: "黒", cl: "ヴァンパイアロード", AW: "覚醒"
        , stats: { atkCd: "-20%" }
        , target: [
            { season: [ "温泉" ] }
            , { others: [ "アンデッド" ] }
        ]
    }
    , {
        name: "ジークリンデ", rarity: "黒", cl: "ソードマスター", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "ジークリンデ/水着", rarity: "黒", cl: "ソードマスター", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "サンドラ/水着", rarity: "白", cl: "ソードマスター", AW: "覚醒"
        , stats: { wt: "-30%" }
        , target: [
            { cl: [ "ソードマスター" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "ヴァイス/水着", rarity: "白", cl: "ソードマスター", AW: "覚醒"
        , stats: { cost: "-1" }
        , target: { season: [ "サマー" ], depType: [ "近接" ] }
    }
    , {
        name: "アリシア", rarity: "白", cl: "ロイヤルガード", AW: "未"
        , stats: { atk: "+3%", def: "+3%" }
        , target: { cl: [ "ワルキューレ", "ペガサスライダー", "ドラゴンライダー", "魔竜騎士", "ロイヤルガード"] }
    }
    , {
        name: "アリシア", rarity: "白", cl: "ロイヤルガード", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { cl: [ "ワルキューレ", "ペガサスライダー", "ドラゴンライダー", "魔竜騎士", "ロイヤルガード"] }
    }
    , {
        name: "ちびアリシア", rarity: "ちび", cl: "ロイヤルガード"
        , stats: { atk: "+3%", def: "+3%" }
        , target: { cl: [ "ワルキューレ", "ペガサスライダー", "ドラゴンライダー", "魔竜騎士", "ロイヤルガード"] }
    }
    , {
        name: "ゼパリエッテ", rarity: "黒", cl: "魔神", AW: "覚醒"
        , stats: { hp: "+7%", atk: "+7%", def: "+7%" }
        , target: [
            { sex: [ "男性" ] }
            , { others: [ "魔界" ] }
        ]
    }
    , {
        name: "サオシュ/温泉", rarity: "白", cl: "魔神", AW: "覚醒"
        , stats: { poison: "-100%", abn: "-100%" }
        , target: { race: [ "デーモン系" ] }
    }
    , {
        name: "ベルーフェ/学園", rarity: "白", cl: "魔神", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: [
            { race: [ "デーモン系" ] }
            , { season: [ "学園" ] }
        ]
    }
    , {
        name: "グレーテル/クリスマス", rarity: "白", cl: "ダークストーカー", AW: "覚醒"
        , stats: { hp: "+5%" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "シノ", rarity: "黒", cl: "ぬらりひょん", AW: "未"
        , stats: { cost: "-1" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "シノ", rarity: "黒", cl: "ぬらりひょん", AW: "覚醒"
        , stats: { atk: "+7%", cost: "-2" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "カスミ", rarity: "白", cl: "ぬらりひょん", AW: "覚醒"
        , stats: { hp: "+5%", atk: "+5%", def: "+5%" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "ちびシノ", rarity: "ちび", cl: "ぬらりひょん"
        , stats: { cost: "-1" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "ヴァネッサ", rarity: "黒", cl: "重装砲兵", AW: "未"
        , stats: { hp: "+7%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "ヴァネッサ", rarity: "黒", cl: "重装砲兵", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "ちびヴァネッサ", rarity: "ちび", cl: "重装砲兵"
        , stats: { hp: "+7%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "リンドウ", rarity: "白", cl: "鬼", AW: "覚醒"
        , stats: { cost: "-5" }
        , target: { cl: [ "鬼", "雷公", "風伯" ] }
    }
    , {
        name: "サザンカ", rarity: "白", cl: "鬼", AW: "覚醒"
        , stats: { hp: "+7%" }
        , target: [
            { cl: [ "鬼" ] }
            , { home: [ "白の帝国" ] }
        ]
    }
    , {
        name: "アクラ", rarity: "白", cl: "鬼", AW: "覚醒"
        , stats: { atk: "+5%" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "アリーセ", rarity: "白", cl: "インペリアルナイト", AW: "覚醒"
        , stats: { hp: "+7%", atk: "+7%" }
        , target: { cl: [ "インペリアルナイト" ] }
    }
    , {
        name: "ホムラ", rarity: "白", cl: "天狗", AW: "覚醒"
        , stats: { cost: "-2" }
        , target: { cl: [ "天狗" ] }
    }
    , {
        name: "ホムラ/学園", rarity: "白", cl: "天狗", AW: "覚醒"
        , stats: { mr: "+10" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "ティニー", rarity: "黒", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+5%", def: "+5%" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ティニー", rarity: "黒", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ウルカノ", rarity: "黒", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+5%", def: "+5%" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "遠距離" ] }
        ]
    }
    , {
        name: "ウルカノ", rarity: "黒", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "遠距離" ] }
        ]
    }
    , {
        name: "ウルカノ/花嫁", rarity: "黒", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+8%", def: "+8%" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ] }
        ]
    }
    , {
        name: "ウルカノ/花嫁", rarity: "黒", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+10%", def: "+10%" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ] }
        ]
    }
    , {
        name: "サンディー", rarity: "白", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { cl: [
            "王子", "ソルジャー", "サムライ", "ダークファイター"
            , "前衛戦術家", "ソードマスター", "インペリアルナイト"
        ] }
    }
    , {
        name: "サンディー", rarity: "白", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%", mr: "+5" }
        , target: { cl: [
            "王子", "ソルジャー", "サムライ", "ダークファイター"
            , "前衛戦術家", "ソードマスター", "インペリアルナイト"
        ] }
    }
    , {
        name: "キャラット", rarity: "白", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { cl: [
            "王子", "ヘビーアーマー", "神官戦士", "メイジアーマー"
            , "ロイヤルガード", "重装砲兵", "グランドナイト"
        ]}
    }
    , {
        name: "キャラット", rarity: "白", cl: "鍛冶職人", AW: "覚醒"
        , stats: { hp: "+5%", atk: "+5%", def: "+5%" }
        , target: { cl: [
            "王子", "ヘビーアーマー", "神官戦士", "メイジアーマー"
            , "ロイヤルガード", "重装砲兵", "グランドナイト"
        ] }
    }
    , {
        name: "ルミアン", rarity: "白", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { cl: [
            "王子", "ワルキューレ", "ペガサスライダー", "ドラゴンライダー"
            , "魔竜騎士", "ボウライダー", "グリフィンライダー"
        ] }
    }
    , {
        name: "ルミアン", rarity: "白", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%", cost: "-1" }
        , target: { cl: [
            "王子", "ワルキューレ", "ペガサスライダー", "ドラゴンライダー"
            , "魔竜騎士", "ボウライダー", "グリフィンライダー"
        ] }
    }
    , {
        name: "フィスティア", rarity: "白", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { cl: [
            "王子", "バンデット", "アベンジャー", "モンク"
            , "グラディエーター", "モンスターブレイカー"
        ] }
    }
    , {
        name: "フィスティア", rarity: "白", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { cl: [
            "王子", "バンデット", "アベンジャー", "モンク"
            , "グラディエーター", "モンスターブレイカー"
        ] }
    }
    , {
        name: "ミスリア", rarity: "白", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+5%", def: "+5%" }
        , target: [
            { cl: [ "王子", "魔法剣士" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "ミスリア", rarity: "白", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%", mr: "+10" }
        , target: [
            { cl: [ "王子", "魔法剣士" ] }
            , { others: [ "全プリンセス系" ] }
        ]
    }
    , {
        name: "グラティア", rarity: "白", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+5%", def: "+5%" }
        , target: [
            { cl: [ "王子" ] }
            , { home: [ "白の帝国" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "グラティア", rarity: "白", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+5%", def: "+10%" }
        , target: [
            { cl: [ "王子" ] }
            , { home: [ "白の帝国" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "グラティア/水着", rarity: "白", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+5%", def: "+5%" }
        , target: [
            { cl: [ "王子" ] }
            , { season: [ "サマー" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "グラティア/水着", rarity: "白", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+10%", def: "+5%" }
        , target: [
            { cl: [ "王子" ] }
            , { home: [ "白の帝国" ], depType: [ "近接" ] }
            , { season: [ "サマー" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ゴルドー", rarity: "金", cl: "鍛冶職人", AW: "未"
        , stats: { atk: "+5%", def: "+5%" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "男性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ゴルドー", rarity: "金", cl: "鍛冶職人", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "男性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "ちびティニー", rarity: "ちび", cl: "鍛冶職人"
        , stats: { atk: "+5%", def: "+5%" }
        , target: [
            { cl: [ "王子" ] }
            , { sex: [ "女性" ], depType: [ "近接" ] }
        ]
    }
    , {
        name: "アナトリア", rarity: "黒", cl: "グラディエーター", AW: "覚醒"
        , stats: { atk: "+12%", def: "+12%" }
        , target: { race: [ "オーク", "ゴブリン" ] }
    }
    , {
        name: "レイメイ", rarity: "白", cl: "キョンシー", AW: "覚醒"
        , stats: { hp: "+5%", atk: "+5%", def: "+5%" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "レミィ", rarity: "黒", cl: "雷公", AW: "未"
        , stats: { atk: "+10%" }
        , target: { cl: [ "雷公", "風伯" ] }
    }
    , {
        name: "レミィ", rarity: "黒", cl: "雷公", AW: "覚醒"
        , stats: { atk: "+10%", range: "+20" }
        , target: { cl: [ "雷公", "風伯" ] }
    }
    , {
        name: "レミィ/ハロウィン", rarity: "黒", cl: "雷公", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: [
            { season: [ "ハロウィン" ] }
            , { others: [ "飛行" ] }
        ]
    }
    , {
        name: "ちびレミィ", rarity: "ちび", cl: "雷公"
        , stats: { atk: "+10%" }
        , target: { cl: [ "雷公", "風伯" ] }
    }
    , {
        name: "クーコ", rarity: "黒", cl: "風伯", AW: "未"
        , stats: { hp: "+10%", def: "+10%" }
        , target: { cl: [ "雷公", "風伯" ] }
    }
    , {
        name: "クーコ", rarity: "黒", cl: "風伯", AW: "覚醒"
        , stats: { hp: "+10%", def: "+10%", poison: "-100%", abn: "-100%" }
        , target: { cl: [ "雷公", "風伯" ] }
    }
    , {
        name: "ちびクーコ", rarity: "ちび", cl: "風伯"
        , stats: { hp: "+10%", def: "+10%" }
        , target: { cl: [ "雷公", "風伯" ] }
    }
    , {
        name: "アデライド", rarity: "黒", cl: "グランドナイト", AW: "未"
        , stats: { range: "+5" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "アデライド", rarity: "黒", cl: "グランドナイト", AW: "覚醒"
        , stats: { range: "+10" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "ちびアデライド", rarity: "ちび", cl: "グランドナイト", AW: "未"
        , stats: { range: "+5" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "クゥイル", rarity: "白", cl: "グリフィンライダー", AW: "覚醒"
        , stats: { cost: "-2" }
        , target: { cl: [ "ペガサスライダー", "グリフィンライダー" ] }
    }
    , {
        name: "クゥイル/お正月", rarity: "白", cl: "グリフィンライダー", AW: "覚醒"
        , stats: { hp: "+5%", atk: "+5%", cost: "+1" }
        , target: [
            { season: [ "お正月" ] }
            , { others: [ "騎兵" ] }
        ]
    }
    , {
        name: "太公望", rarity: "白", cl: "真人", AW: "覚醒"
        , stats: { hp: "+5%" }
        , target: { cl: [ "仙人", "仙猿", "真人" ] }
    }
    , {
        name: "太公望/お正月", rarity: "白", cl: "真人", AW: "未"
        , stats: { def: "+5%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "太公望/お正月", rarity: "白", cl: "真人", AW: "覚醒"
        , stats: { def: "+7%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "普賢", rarity: "白", cl: "真人", AW: "覚醒"
        , stats: { def: "+5%" }
        , target: { cl: [ "仙人", "仙猿", "真人" ] }
    }
    , {
        name: "王妃人", rarity: "白", cl: "邪仙", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { race: [ "仙人", "妖怪" ] }
    }
    , {
        name: "胡喜美", rarity: "白", cl: "邪仙", AW: "覚醒"
        , stats: { hp: "+10%", atk: "+5%", def: "+5%" }
        , target: { race: [ "仙人" ] }
    }
    , {
        name: "趙紅明", rarity: "白", cl: "邪仙", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { others: [ "GG持ち" ] }
    }
    , {
        name: "シャディア", rarity: "黒", cl: "魔王親衛隊", AW: "覚醒"
        , stats: { hp: "+15%" }
        , target: { others: [ "魔界" ] }
    }
    , {
        name: "シャディア/お正月", rarity: "黒", cl: "魔王親衛隊", AW: "覚醒"
        , stats: { atk: "+10%", def: "+10%" }
        , target: { season: [ "お正月" ] }
    }
    , {
        name: "雷鳴大妖ぬえ", cl: "ぬえ", AW: "覚2a"
        , stats: { atkCd: "-20%" }
        , target: { race: [ "妖怪" ] }
        , note: "ぬえ系"
    }
    , {
        name: "シロガネ/学園", rarity: "白", cl: "鬼刃忍", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: [
            { home: [ "東の国" ] }
            , { season: [ "学園" ] }
        ]
    }
    , {
        name: "イルムガルト", rarity: "白", cl: "デーモンロード", AW: "覚醒"
        , stats: { cost: "-1", wt: "-30%" }
        , target: { race: [ "デーモン系", "オーク", "ゴブリン" ] }
    }
    , {
        name: "アブグルント", rarity: "白", cl: "デーモンロード", AW: "覚醒"
        , stats: { atk: "+5%" }
        , target: [
            { home: [ "白の帝国" ] }
            , { race: [ "デーモン系" ] }
        ]
    }
    , {
        name: "ロゼリン", rarity: "黒", cl: "デモンルーン", AW: "覚醒"
        , stats: { mr: "+5" }
        , target: { others: [ "魔界" ] }
    }
    , {
        name: "ヴィアベル", rarity: "黒", cl: "アクアナイト", AW: "未"
        , stats: { def: "+15%", cost: "-1" }
        , target: { others: [ "深海" ] }
    }
    , {
        name: "ヴィアベル", rarity: "黒", cl: "アクアナイト", AW: "覚醒"
        , stats: { def: "+20%", cost: "-2" }
        , target: { others: [ "深海" ] }
    }
    , {
        name: "ちびヴィアベル", rarity: "ちび", cl: "アクアナイト"
        , stats: { def: "+15%", cost: "-1" }
        , target: { others: [ "深海" ] }
    }
    , {
        name: "アレクシア", rarity: "白", cl: "テンプルナイト", AW: "覚醒"
        , stats: { hp: "+7%" }
        , target: { cl: [ "テンプルナイト" ] }
    }
    , {
        name: "シラヌイ/浴衣", rarity: "白", cl: "ぬりかべ", AW: "覚醒"
        , stats: { def: "+5%" }
        , target: [
            { race: [ "妖怪" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "カザキリ", rarity: "白", cl: "霊刀つくもがみ", AW: "未"
        , stats: { other: "" }
        , target: { home: [ "東の国" ], depType: [ "近接" ] }
        , note: "追撃(24%)付与"
    }
    , {
        name: "カザキリ", rarity: "白", cl: "霊刀つくもがみ", AW: "覚醒"
        , stats: { other: "" }
        , target: { home: [ "東の国" ], depType: [ "近接" ] }
        , note: "追撃(24%)付与"
    }
    , {
        name: "シラハユリ", rarity: "白", cl: "霊刀つくもがみ", AW: "覚醒"
        , stats: { atk: "+10%", def: "-10%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "コウメ", rarity: "白", cl: "戦巫女", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { cl: [ "戦巫女", "シャーマン", "陰陽師", "符術士" ] }
    }
    , {
        name: "ジンレイ", rarity: "黒", cl: "武侠", AW: "未"
        , stats: { atk: "+5%" }
        , target: { home: [ "華の国" ] }
    }
    , {
        name: "ジンレイ", rarity: "黒", cl: "武侠", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { home: [ "華の国" ] }
    }
    , {
        name: "フェイロン", rarity: "白", cl: "武侠", AW: "覚醒"
        , stats: { hp: "+5%" }
        , target: { home: [ "華の国" ] }
    }
    , {
        name: "シャジャル", rarity: "黒", cl: "サベージファイター", AW: "未"
        , stats: { atk: "+10%", def: "+10%" }
        , target: { home: [ "砂漠の国" ] }
    }
    , {
        name: "シャジャル", rarity: "黒", cl: "サベージファイター", AW: "覚醒"
        , stats: { hp: "+15%", atk: "+15%", def: "+15%" }
        , target: { home: [ "砂漠の国" ] }
    }
    , {
        name: "ファルア", rarity: "白", cl: "サベージファイター", AW: "覚醒"
        , stats: { atk: "+5%" }
        , target: { home: [ "砂漠の国" ] }
    }
    , {
        name: "ナシート", rarity: "白", cl: "サベージファイター", AW: "未"
        , stats: { wt: "-30%" }
        , target: { home: [ "砂漠の国" ] }
    }
    , {
        name: "ナシート", rarity: "白", cl: "サベージファイター", AW: "覚醒"
        , stats: { wt: "-50%" }
        , target: { home: [ "砂漠の国" ] }
    }
    , {
        name: "シェラハウト", rarity: "白", cl: "サベージファイター", AW: "未"
        , stats: { hp: "+3%", def: "+3%" }
        , target: { home: [ "砂漠の国" ] }
    }
    , {
        name: "シェラハウト", rarity: "白", cl: "サベージファイター", AW: "覚醒"
        , stats: { hp: "+5%", def: "+5%" }
        , target: { home: [ "砂漠の国" ] }
    }
    , {
        name: "ティルト", rarity: "黒", cl: "ハデスソルジャー", AW: "覚醒"
        , stats: { hp: "+15%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "ティルト/水着", rarity: "黒", cl: "ハデスソルジャー", AW: "未"
        , stats: { atk: "+7%", mr: "+7" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "ティルト/水着", rarity: "黒", cl: "ハデスソルジャー", AW: "覚醒"
        , stats: { atk: "+10%", mr: "+10" }
        , target: [
            { home: [ "白の帝国" ] }
            , { season: [ "サマー" ] }
        ]
    }
    , {
        name: "ヘーレ", rarity: "白", cl: "隧道掘削兵", AW: "未"
        , stats: { hp: "+5%", def: "+5%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "ヘーレ", rarity: "白", cl: "隧道掘削兵", AW: "覚醒"
        , stats: { hp: "+7%", def: "+7%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "レジナレア", rarity: "白", cl: "シールダー", AW: "未"
        , stats: { hp: "+5%" }
        , target: { cl: [ "ヘビーアーマー", "シールダー" ] }
    }
    , {
        name: "レジナレア", rarity: "白", cl: "シールダー", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { cl: [ "ヘビーアーマー", "シールダー" ] }
    }
    , {
        name: "女王子", rarity: "黒", cl: "女王子", AW: "覚醒"
        , stats: { hp: "+5%", mr: "+5" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "ダーク王子", rarity: "黒", cl: "ダーク王子", AW: "未"
        , stats: { atk: "+3%", def: "+3%" }
        , target: { others: [ "魔界" ] }
    }
    , {
        name: "ダーク王子", rarity: "黒", cl: "ダーク王子", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { others: [ "魔界" ] }
    }
    , {
        name: "ちびダーク王子", rarity: "ちび", cl: "ダーク王子"
        , stats: { atk: "+3%", def: "+3%" }
        , target: { others: [ "魔界" ] }
    }
    , {
        name: "リムリィ/水着", rarity: "白", cl: "処刑人", AW: "未"
        , stats: { atk: "+7%" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "リムリィ/水着", rarity: "白", cl: "処刑人", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "ユリクセス", rarity: "黒", cl: "神話の継承者", AW: "覚醒"
        , stats: { hp: "+15%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "カルペム", rarity: "黒", cl: "衛士", AW: "未"
        , stats: { def: "+10%" }
        , target: [
            { home: [ "白の帝国" ] }
            , { others: [ "ドラゴン" ] }
        ]
    }
    , {
        name: "カルペム", rarity: "黒", cl: "衛士", AW: "覚醒"
        , stats: { def: "+15%" }
        , target: [
            { home: [ "白の帝国" ] }
            , { others: [ "ドラゴン" ] }
        ]
    }
    , {
        name: "ちびチェインソン男", rarity: "ちび", cl: "チェインソン男"
        , stats: { atk: "+5%", mr: "+5" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "白の皇帝", rarity: "黒", cl: "皇帝", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "ダイオージ", rarity: "金", cl: "試験型英雄騎"
        , stats: { hp: "+5%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ちびダイオージ", rarity: "ちび", cl: "試験型英雄騎"
        , stats: { hp: "+5%" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "龍宮城の宴", rarity: "金", cl: "龍宮城の宴"
        , stats: { cost: "-1" }
        , target: [
            { season: [ "サマー" ] }
            , { others: [ "深海" ] }
        ]
    }
    , {
        name: "アーシェラ", rarity: "黒", cl: "アーチャー", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { others: [ "弓兵" ] }
    }
    , {
        name: "ナナリー/浴衣", rarity: "黒", cl: "アーチャー", AW: "未"
        , stats: { cost: "-1" }
        , target: { rarity: [ "白", "青", "金", "銀", "銅", "鉄" ] }
    }
    , {
        name: "ナナリー/浴衣", rarity: "黒", cl: "アーチャー", AW: "覚醒"
        , stats: { cost: "-2", wt: "-25%" }
        , target: { rarity: [ "白", "青", "金", "銀", "銅", "鉄" ] }
    }
    , {
        name: "ナナリー/花嫁", rarity: "黒", cl: "アーチャー", AW: "覚醒"
        , stats: { range: "+15" }
        , target: { season: [ "ジューンブライド" ] }
    }
    , {
        name: "ソーマ/新装", rarity: "黒", cl: "アーチャー", AW: "未"
        , stats: { range: "+10" }
        , target: { others: [ "弓兵" ], depType: [ "遠距離" ] }
    }
    , {
        name: "ソーマ/新装", rarity: "黒", cl: "アーチャー", AW: "覚醒"
        , stats: { range: "+15" }
        , target: { others: [ "弓兵" ], depType: [ "遠距離" ] }
    }
    , {
        name: "ダニエラ/新装", rarity: "黒", cl: "アーチャー", AW: "覚醒"
        , stats: { atkCd: "-20%" }
        , target: { others: [ "弓兵" ] }
    }
    , {
        name: "スピカ", rarity: "白", cl: "アーチャー", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { cl: [ "アーチャー", "レンジャー" ] }
    }
    , {
        name: "オスカー", rarity: "白", cl: "アーチャー", AW: "覚醒"
        , stats: { def: "+5%", mr: "+5" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "ベラ/浴衣", rarity: "白", cl: "アーチャー", AW: "覚醒"
        , stats: { cost: "-2" }
        , target: { season: [ "サマー" ], depType: [ "遠距離" ] }
    }
    , {
        name: "ポミエ/バレンタイン", rarity: "白", cl: "アーチャー", AW: "覚醒"
        , stats: { hp: "+5%", mr: "+5" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "クレア/学園", rarity: "白", cl: "アーチャー", AW: "覚醒"
        , stats: { cost: "-1" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "キャロット/バレンタイン", rarity: "白", cl: "アーチャー", AW: "未"
        , stats: { hp: "+7%" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "キャロット/バレンタイン", rarity: "白", cl: "アーチャー", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "シャオ", rarity: "金", cl: "アーチャー", AW: "覚醒"
        , stats: { hp: "+15%" }
        , target: { cl: [ "前衛戦術家" ] }
    }
    , {
        name: "エステル", rarity: "黒", cl: "メイジ", AW: "未"
        , stats: { atk: "+7%" }
        , target: { cl: [ "魔法剣士", "メイジアーマー", "メイジ", "ビショップ" ] }
    }
    , {
        name: "エステル", rarity: "黒", cl: "メイジ", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: { cl: [ "魔法剣士", "メイジアーマー", "メイジ", "ビショップ" ] }
    }
    , {
        name: "テュト", rarity: "黒", cl: "メイジ", AW: "未"
        , stats: { atk: "+5%" }
        , target: { others: [ "魔術師" ] }
    }
    , {
        name: "テュト", rarity: "黒", cl: "メイジ", AW: "覚醒"
        , stats: { atk: "+5%" }
        , target: { others: [ "魔術師" ] }
    }
    , {
        name: "ガラニア", rarity: "白", cl: "メイジ", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { cl: [ "メイジ", "砲術士" ] }
    }
    , {
        name: "キャンディ", rarity: "白", cl: "メイジ", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { cl: [ "メイジ", "ウィッチ", "クロノウィッチ", "ドラゴンメイジ" ] }
    }
    , {
        name: "イルマ", rarity: "白", cl: "メイジ", AW: "未"
        , stats: { cost: "-1" }
        , target: { home: [ "白の帝国" ], depType: [ "遠距離" ] }
    }
    , {
        name: "イルマ", rarity: "白", cl: "メイジ", AW: "覚醒"
        , stats: { cost: "-2" }
        , target: { home: [ "白の帝国" ], depType: [ "遠距離" ] }
    }
    , {
        name: "イルマ/バニー", rarity: "白", cl: "メイジ", AW: "未"
        , stats: { cost: "-1" }
        , target: { others: [ "魔術師" ], depType: [ "遠距離" ] }
    }
    , {
        name: "イルマ/バニー", rarity: "白", cl: "メイジ", AW: "覚醒"
        , stats: { cost: "-2" }
        , target: { others: [ "魔術師" ], depType: [ "遠距離" ] }
    }
    , {
        name: "マーヤ/水着", rarity: "金", cl: "メイジ", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "ミェール", rarity: "金", cl: "メイジ", AW: "覚醒"
        , stats: { mr: "+5" }
        , target: { others: [ "魔術師" ] }
    }
    , {
        name: "ちびエステル", rarity: "ちび", cl: "メイジ"
        , stats: { atk: "+7%" }
        , target: { cl: [ "魔法剣士", "メイジアーマー", "メイジ", "ビショップ" ] }
    }
    , {
        name: "ちびテュト", rarity: "ちび", cl: "メイジ"
        , stats: { atk: "+5%" }
        , target: { others: [ "魔術師" ] }
    }
    , {
        name: "イリス/お正月", rarity: "黒", cl: "ヒーラー", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { season: [ "お正月" ] }
    }
    , {
        name: "アウローラ", rarity: "黒", cl: "ヒーラー", AW: "覚醒"
        , stats: { hp: "+10%", mr: "+10" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "ドゥマルデ", rarity: "黒", cl: "ヒーラー", AW: "覚醒"
        , stats: { def: "+7%" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "ユーノ", rarity: "白", cl: "ヒーラー", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { cl: [ "ヒーラー", "ダークプリースト" ] }
    }
    , {
        name: "エリアス", rarity: "白", cl: "ヒーラー", AW: "覚醒"
        , stats: { hp: "+5%", mr: "+5" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "イーリス/水着", rarity: "白", cl: "ヒーラー", AW: "覚醒"
        , stats: { hp: "+5%", mr: "+5" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "ロベルト", rarity: "金", cl: "ヒーラー", AW: "覚醒"
        , stats: { hp: "+15%" }
        , target: { sex: [ "男性" ] }
    }
    , {
        name: "デスピア", rarity: "黒", cl: "ウィッチ", AW: "覚醒"
        , stats: { range: "+10" }
        , target: { cl: [ "メイジ", "ウィッチ" ] }
    }
    , {
        name: "ベリンダ", rarity: "白", cl: "ウィッチ", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { cl: [ "ウィッチ", "クロノウィッチ" ] }
    }
    , {
        name: "ユーティ/花嫁", rarity: "白", cl: "ウィッチ", AW: "覚醒"
        , stats: { hp: "+5%", atk: "+5%" }
        , target: { season: [ "ジューンブライド" ] }
    }
    , {
        name: "ミネルバ", rarity: "黒", cl: "パイレーツ", AW: "覚醒"
        , stats: { range: "+10" }
        , target: { cl: [ "パイレーツ", "砲術士", "マーチャント" ] }
    }
    , {
        name: "アネリア", rarity: "白", cl: "パイレーツ", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { cl: [ "パイレーツ", "モンスタースレイヤー" ] }
    }
    , {
        name: "モニカ", rarity: "金", cl: "パイレーツ", AW: "覚醒"
        , stats: { mr: "+5" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: [ "エルダードラゴン", "シャーマン" ], cl: "ドラゴンシャーマン", AW: "覚2a"
        , stats: { mr: "+10" }
        , target: { others: [ "ドラゴン" ] }
        , note: "ドラゴンシャーマン系"
    }
    , {
        name: "エキドナ", rarity: "白", cl: "ドラゴンシャーマン", AW: "覚醒"
        , stats: { hp: "+5%", def: "+5%" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "ルビナス", rarity: "白", cl: "ドラゴンシャーマン", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "スー", rarity: "黒", cl: "ヴァンパイアハンター", AW: "覚醒"
        , stats: { range: "+10" }
        , target: { cl: [ "アーチャー", "ヴァンパイアハンター", "レンジャー" ] }
    }
    , {
        name: "クルス/クリスマス", rarity: "黒", cl: "ヴァンパイアハンター", AW: "覚醒"
        , stats: { atkCd: "-20%" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "ルマリア", rarity: "白", cl: "ヴァンパイアハンター", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { cl: [ "ヴァンパイアハンター" ] }
    }
    , {
        name: "イヨ", rarity: "黒", cl: "シャーマン", AW: "未"
        , stats: { hp: "+5%" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "イヨ", rarity: "黒", cl: "シャーマン", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "カグラ", rarity: "白", cl: "シャーマン", AW: "覚醒"
        , stats: { atk: "+5%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: "エターナー", rarity: "黒", cl: "ビショップ", AW: "覚醒"
        , stats: { atk: "+10%", range: "+10" }
        , target: { cl: [ "ビショップ" ] }
    }
    , {
        name: "エターナー/花嫁", rarity: "黒", cl: "ビショップ", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "セレイナ", rarity: "白", cl: "ビショップ", AW: "覚醒"
        , stats: { cost: "-1" }
        , target: { cl: [ "エンジェル" ] }
    }
    , {
        name: "ソレーユ", rarity: "金", cl: "ビショップ", AW: "覚醒"
        , stats: { atk: "+5%", cost: "-3" }
        , target: { cl: [ "メイジ", "ビショップ" ] }
    }
    , {
        name: "アイシャ/学園", rarity: "黒", cl: "後衛戦術家", AW: "覚醒"
        , stats: { def: "+10%" }
        , target: { home: [ "華の国" ] }
    }
    , {
        name: "レオナ", rarity: "白", cl: "後衛戦術家", AW: "覚醒"
        , stats: { def: "+7%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "シナト", rarity: "白", cl: "後衛戦術家", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { cl: [ "前衛戦術家", "後衛戦術家" ] }
    }
    , {
        name: "シナト/バニー", rarity: "白", cl: "後衛戦術家", AW: "未"
        , stats: { atk: "+5%" }
        , target: [
            { cl: [ "前衛戦術家", "後衛戦術家" ] }
            , { season: [ "エッグハント" ] }
        ]
    }
    , {
        name: "シナト/バニー", rarity: "白", cl: "後衛戦術家", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: [
            { cl: [ "前衛戦術家", "後衛戦術家" ] }
            , { season: [ "エッグハント" ] }
        ]
    }
    , {
        name: "タマミ", rarity: "白", cl: "陰陽師", AW: "覚醒"
        , stats: { wt: "-25%" }
        , target: { rarity: [ "白" ] }
    }
    , {
        name: "ファルネ/花嫁", rarity: "黒", cl: "サモナー", AW: "未"
        , stats: { mr: "+5" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "ファルネ/花嫁", rarity: "黒", cl: "サモナー", AW: "覚醒"
        , stats: { mr: "+10" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "ミア", rarity: "白", cl: "風水使い", AW: "覚醒"
        , stats: { atk: "+5%" }
        , target: { others: [ "GG持ち" ] }
    }
    , {
        name: "ピピン", rarity: "白", cl: "風水使い", AW: "覚醒"
        , stats: { atk: "+5%", dur: "+20%" }
        , target: { cl: [ "風水使い" ] }
    }
    , {
        name: "クーシン", rarity: "白", cl: "風水使い", AW: "覚醒"
        , stats: { hp: "+5%", def: "+5%" }
        , target: { cl: [ "モンク", "風水使い" ] }
    }
    , {
        name: "エイプリル", rarity: "白", cl: "砲術士", AW: "覚醒"
        , stats: { atkCd: "-30%" }
        , target: { cl: [ "重装砲兵", "砲術士", "モンスタースレイヤー" ] }
    }
    , {
        name: "スミレ", rarity: "白", cl: "砲術士", AW: "覚醒"
        , stats: { hp: "+10%", atk: "+5%" }
        , target: { home: [ "東の国" ] }
    }
    , {
        name: "カノン/温泉", rarity: "白", cl: "砲術士", AW: "未"
        , stats: { cost: "-2" }
        , target: { cl: [ "重装砲兵", "砲術士" ] }
    }
    , {
        name: "カノン/温泉", rarity: "白", cl: "砲術士", AW: "覚醒"
        , stats: { cost: "-3" }
        , target: { cl: [ "重装砲兵", "砲術士" ] }
    }
    , {
        name: "メル/浴衣", rarity: "白", cl: "砲術士", AW: "未"
        , stats: { wt: "-10%" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "メル/浴衣", rarity: "白", cl: "砲術士", AW: "覚醒"
        , stats: { wt: "-15%" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "ナターリエ/水着", rarity: "白", cl: "ダンサー", AW: "覚醒"
        , stats: { def: "+4%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "ナターリエ/水着", rarity: "白", cl: "ダンサー", AW: "覚醒"
        , stats: { atk: "+4%" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "ブレリア/クリスマス", rarity: "白", cl: "ダンサー", AW: "覚醒"
        , stats: { cost: "-2" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "ワルツ/バレンタイン", rarity: "白", cl: "ダンサー", AW: "覚醒"
        , stats: { atk: "+7%", cost: "-1" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "ナターリエ", rarity: "金", cl: "ダンサー", AW: "覚醒"
        , stats: { cost: "-1" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "アンナ", rarity: "黒", cl: "政務官", AW: "未"
        , stats: { rege: [ "30/秒", "15/15f" ] }
        , target: { cl: [ "王子" ] }
        , note: "HPアップ系称号"
    }
    , {
        name: "アンナ", rarity: "黒", cl: "政務官", AW: "未"
        , stats: { other: "" }
        , target: { cl: [ "王子" ] }
        , note: [ "攻撃アップ系称号", "魔法化" ]
    }
    , {
        name: "アンナ", rarity: "黒", cl: "政務官", AW: "未"
        , stats: { other: "" }
        , target: { cl: [ "王子" ] }
        , note: [ "防御アップ系称号", "ブロック数+1" ]
    }
    , {
        name: "アンナ", rarity: "黒", cl: "政務官", AW: "未"
        , stats: { mr: "+10" }
        , target: { cl: [ "王子" ] }
        , note: "スキル強化系称号"
    }
    , {
        name: "アンナ", rarity: "黒", cl: "政務官", AW: "未"
        , stats: { cost: "-3" }
        , target: { cl: [ "王子" ] }
        , note: "特殊称号"
    }
    , {
        name: "アンナ", rarity: "黒", cl: "政務官", AW: "覚醒"
        , stats: { rege: [ "60/秒", "30/15f" ] }
        , target: { cl: [ "王子" ] }
        , note: "HPアップ系称号"
    }
    , {
        name: "アンナ", rarity: "黒", cl: "政務官", AW: "覚醒"
        , stats: { atk: "+7%", other: "" }
        , target: { cl: [ "王子" ] }
        , note: [ "攻撃アップ系称号", "魔法化" ]
    }
    , {
        name: "アンナ", rarity: "黒", cl: "政務官", AW: "覚醒"
        , stats: { def: "+7%", other: "" }
        , target: { cl: [ "王子" ] }
        , note: [ "防御アップ系称号", "ブロック数+1" ]
    }
    , {
        name: "アンナ", rarity: "黒", cl: "政務官", AW: "覚醒"
        , stats: { mr: "+20" }
        , target: { cl: [ "王子" ] }
        , note: "スキル強化系称号"
    }
    , {
        name: "アンナ", rarity: "黒", cl: "政務官", AW: "覚醒"
        , stats: { cost: "-5" }
        , target: { cl: [ "王子" ] }
        , note: "特殊称号"
    }
    , {
        name: "アンナ/学園", rarity: "黒", cl: "政務官", AW: "覚醒"
        , stats: { cost: "-1" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "メルアビス/水着", rarity: "黒", cl: "ネクロマンサー", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: [
            { cl: [ "ネクロマンサー" ] }
            , { others: [ "アンデッド" ] }
        ]
    }
    , {
        name: "トワ/学園", rarity: "黒", cl: "クロノウィッチ", AW: "未"
        , stats: { dur: "+10%" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "トワ/学園", rarity: "黒", cl: "クロノウィッチ", AW: "覚醒"
        , stats: { dur: "+15%" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "ココロ", rarity: "白", cl: "クロノウィッチ", AW: "覚醒"
        , stats: { cost: "-1" }
        , target: { cl: [ "ウィッチ", "クロノウィッチ" ] }
    }
    , {
        name: "ププル", rarity: "白", cl: "ドルイド", AW: "覚醒"
        , stats: { def: "+5%", mr: "+5" }
        , target: { race: [ "エルフ系", "ドワーフ" ] }
    }
    , {
        name: "ローリエ/バレンタイン", rarity: "白", cl: "ドルイド", AW: "未"
        , stats: { cost: "-1" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "ローリエ/バレンタイン", rarity: "白", cl: "ドルイド", AW: "覚醒"
        , stats: { cost: "-2" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "メープル/クリスマス", rarity: "白", cl: "ドルイド", AW: "覚醒"
        , stats: { atk: "+3%" }
        , target: [
            { cl: [ "ドルイド", "レンジャー" ] }
            , { season: [ "クリスマス" ] }
            , { others: [ "騎兵" ] }
        ]
    }
    , {
        name: "ロヴィニア/学園", rarity: "黒", cl: "レンジャー", AW: "未"
        , stats: { poison: "-80%", abn: "-80%" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "ロヴィニア/学園", rarity: "黒", cl: "レンジャー", AW: "覚醒"
        , stats: { poison: "-100%", abn: "-100%" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "フウカ/お正月", rarity: "金", cl: "レンジャー", AW: "覚醒"
        , stats: { cost: "-1" }
        , target: { season: [ "お正月" ] }
    }
    , {
        name: "オロチヒメ/お正月", rarity: "黒", cl: "呪術使い", AW: "未"
        , stats: { poison: "-100%", abn: "-100%" }
        , target: { season: [ "お正月" ] }
    }
    , {
        name: "オロチヒメ/お正月", rarity: "黒", cl: "呪術使い", AW: "覚醒"
        , stats: { poison: "-100%", abn: "-100%" }
        , target: { season: [ "お正月" ] }
    }
    , {
        name: "ダークサクセサー", cl: "ダークプリースト", AW: "覚2b"
        , stats: { atk: "+10%", def: "+10%" }
        , target: [
            { cl: [ "ダークファイター" ] }
            , { others: [ "魔界" ] }
        ]
        , note: "ダークプリースト系"
    }
    , {
        name: "ベルゼッタ", rarity: "白", cl: "ダークプリースト", AW: "覚醒"
        , stats: { atk: "+15%", cost: "+2" }
        , target: { cl: [ "ヒーラー", "ダークプリースト" ] }
    }
    , {
        name: "プシュケ", rarity: "白", cl: "ダークプリースト", AW: "覚醒"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { race: [ "デーモン系" ] }
    }
    , {
        name: "邪狼の使徒", cl: "フェンリルシャーマン", AW: "覚2b"
        , stats: { atk: "+10%", def: "+10%" }
        , target: { race: [ "獣人" ] }
        , note: "フェンリルシャーマン系"
    }
    , {
        name: "ソシエ/ハロウィン", rarity: "黒", cl: "モンスタースレイヤー", AW: "未"
        , stats: { range: "+5" }
        , target: { season: [ "ハロウィン" ] }
    }
    , {
        name: "ソシエ/ハロウィン", rarity: "黒", cl: "モンスタースレイヤー", AW: "覚醒"
        , stats: { range: "+10" }
        , target: { season: [ "ハロウィン" ] }
    }
    , {
        name: "ヒルデ", rarity: "白", cl: "モンスタースレイヤー", AW: "覚醒"
        , stats: { atk: "+5%" }
        , target: { home: [ "白の帝国" ], depType: [ "遠距離" ] }
    }
    , {
        name: "ラピス/水着", rarity: "黒", cl: "デモンサモナー", AW: "未"
        , stats: { def: "+7%" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "ラピス/水着", rarity: "黒", cl: "デモンサモナー", AW: "覚醒"
        , stats: { def: "+10%" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "ラピス/お正月", rarity: "黒", cl: "デモンサモナー", AW: "未"
        , stats: { mr: "+5" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "ラピス/お正月", rarity: "黒", cl: "デモンサモナー", AW: "未"
        , stats: { range: "+5" }
        , target: { season: [ "お正月" ] }
    }
    , {
        name: "ラピス/お正月", rarity: "黒", cl: "デモンサモナー", AW: "覚醒"
        , stats: { mr: "+10" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "ラピス/お正月", rarity: "黒", cl: "デモンサモナー", AW: "覚醒"
        , stats: { range: "+10" }
        , target: { season: [ "お正月" ] }
    }
    , {
        name: "ラピス/クリスマス", rarity: "黒", cl: "デモンサモナー", AW: "未"
        , stats: { atk: "+5%" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "ラピス/クリスマス", rarity: "黒", cl: "デモンサモナー", AW: "未"
        , stats: { hp: "+7%" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "ラピス/クリスマス", rarity: "黒", cl: "デモンサモナー", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { sex: [ "女性" ] }
    }
    , {
        name: "ラピス/クリスマス", rarity: "黒", cl: "デモンサモナー", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "リヴル", rarity: "白", cl: "デモンサモナー", AW: "覚醒"
        , stats: { mr: "+5", dur: "+20%" }
        , target: { cl: [ "デモンサモナー" ] }
    }
    , {
        name: "リヴル/ハロウィン", rarity: "白", cl: "デモンサモナー", AW: "覚醒"
        , stats: { hp: "+10%", poison: "-100%", abn: "-100%" }
        , target: { season: [ "ハロウィン" ] }
    }
    , {
        name: "スピリア/水着", rarity: "黒", cl: "ライフリンカー", AW: "覚醒"
        , stats: { hp: "+20%", mr: "+5" }
        , target: { season: [ "サマー" ] }
    }
    , {
        name: "シアーシャ", rarity: "白", cl: "ライフリンカー", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { cl: [ "ライフリンカー" ] }
    }
    , {
        name: "ルスティ", rarity: "白", cl: "ライフリンカー", AW: "未"
        , stats: { hp: "+7%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "ルスティ", rarity: "白", cl: "ライフリンカー", AW: "覚醒"
        , stats: { hp: "+7%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "サルース", rarity: "青", cl: "ライフリンカー", AW: "覚醒"
        , stats: { range: "+10" }
        , target: { cl: [ "ライフリンカー" ] }
    }
    , {
        name: "エレオノーラ", rarity: "黒", cl: "ルーンアコライト", AW: "未"
        , stats: { poison: "-100%", abn: "-100%" }
        , target: { home: [ "白の帝国" ], depType: [ "近接" ] }
    }
    , {
        name: "エレオノーラ", rarity: "黒", cl: "ルーンアコライト", AW: "覚醒"
        , stats: { poison: "-100%", abn: "-100%" }
        , target: { home: [ "白の帝国" ], depType: [ "近接" ] }
    }
    , {
        name: "エレオノーラ/バニー", rarity: "黒", cl: "ルーンアコライト", AW: "未"
        , stats: { poison: "-50%", abn: "-50%" }
        , target: { others: [ "聖職者" ] }
    }
    , {
        name: "エレオノーラ/バニー", rarity: "黒", cl: "ルーンアコライト", AW: "覚醒"
        , stats: { poison: "-100%", abn: "-100%" }
        , target: { others: [ "聖職者" ] }
    }
    , {
        name: "シャイーナ", rarity: "白", cl: "ルーンアコライト", AW: "覚醒"
        , stats: { hp: "+7%", mr: "+5" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "エリス", rarity: "白", cl: "ルーンアコライト", AW: "覚醒"
        , stats: { cost: "-1" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "アレイダ", rarity: "黒", cl: "ロード", AW: "未"
        , stats: { atkCd: "-25%" }
        , target: { home: [ "白の帝国" ], depType: [ "近接" ] }
    }
    , {
        name: "アレイダ", rarity: "黒", cl: "ロード", AW: "覚醒"
        , stats: { atkCd: "-35%" }
        , target: { home: [ "白の帝国" ], depType: [ "近接" ] }
    }
    , {
        name: "リンクス", rarity: "黒", cl: "ロード", AW: "未"
        , stats: { atkCd: "-25%" }
        , target: { race: [ "獣人" ] }
    }
    , {
        name: "リンクス", rarity: "黒", cl: "ロード", AW: "覚醒"
        , stats: { atkCd: "-35%" }
        , target: { race: [ "獣人" ] }
    }
    , {
        name: "グリム/学園", rarity: "黒", cl: "異界召喚士", AW: "未"
        , stats: { mr: "+7" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "グリム/学園", rarity: "黒", cl: "異界召喚士", AW: "覚醒"
        , stats: { mr: "+10" }
        , target: { season: [ "学園" ] }
    }
    , {
        name: "発明家", cl: "発明家", AW: "未"
        , stats: { atk: "+5%", wt: "-20%" }
        , target: { others: [ "機械" ] }
    }
    , {
        name: "大発明家", cl: "発明家", AW: "覚1"
        , stats: { atk: "+10%", wt: "-30%" }
        , target: { others: [ "機械" ] }
        , note: "発明家系"
    }
    , {
        name: "超発明王", cl: "発明家", AW: "覚2a"
        , stats: { atk: "+10%", wt: "-45%" }
        , target: { others: [ "機械" ] }
        , note: "発明家系"
    }
    , {
        name: "大機関博士", cl: "発明家", AW: "覚2b"
        , stats: { atk: "+10%", wt: "-30%" }
        , target: { others: [ "機械" ] }
        , note: "発明家系"
    }
    , {
        name: "アルレット", rarity: "黒", cl: "発明家", AW: "覚醒"
        , stats: { cost: "-2" }
        , target: { others: [ "機械" ] }
    }
    , {
        name: "イヲナミ", rarity: "白", cl: "シービショップ", AW: "未"
        , stats: { hp: "+5%" }
        , target: { others: [ "深海" ] }
    }
    , {
        name: "イヲナミ", rarity: "白", cl: "シービショップ", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { others: [ "深海" ] }
    }
    , {
        name: "シュカ", rarity: "白", cl: "霊宝つくもがみ", AW: "未"
        , stats: { atk: "-20%", def: "-20%", other: "" }
        , target: { depType: [ "近接" ] }
        , note: "GG付与"
    }
    , {
        name: "シュカ", rarity: "白", cl: "霊宝つくもがみ", AW: "覚醒"
        , stats: { atk: "-15%", def: "-15%", other: "" }
        , target: { depType: [ "近接" ] }
        , note: "GG付与"
    }
    , {
        name: "トリシャ", rarity: "黒", cl: "ドラゴンメイジ", AW: "未"
        , stats: { atk: "+5%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "トリシャ", rarity: "黒", cl: "ドラゴンメイジ", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { home: [ "白の帝国" ] }
    }
    , {
        name: "ロカ", rarity: "白", cl: "ドラゴンメイジ", AW: "覚醒"
        , stats: { def: "+7%" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "カラザ/バニー", rarity: "白", cl: "ドラゴンメイジ", AW: "未"
        , stats: { hp: "+5%" }
        , target: [
            { others: [ "ドラゴン" ] }
            , { season: [ "エッグハント" ] }
        ]
    }
    , {
        name: "カラザ/バニー", rarity: "白", cl: "ドラゴンメイジ", AW: "覚醒"
        , stats: { hp: "+7%" }
        , target: [
            { others: [ "ドラゴン" ] }
            , { season: [ "エッグハント" ] }
        ]
    }
    , {
        name: "ロカ/花嫁", rarity: "白", cl: "ドラゴンメイジ", AW: "未"
        , stats: { cost: "-1" }
        , target: { season: [ "ジューンブライド" ] }
    }
    , {
        name: "ロカ/花嫁", rarity: "白", cl: "ドラゴンメイジ", AW: "覚醒"
        , stats: { cost: "-2" }
        , target: [
            { cl: [ "王子" ] }
            , { season: [ "ジューンブライド" ] }
        ]
    }
    , {
        name: "ジゼル", rarity: "黒", cl: "ドラグーン", AW: "覚醒"
        , stats: { cost: "-3" }
        , target: { others: [ "ドラゴン" ] }
    }
    , {
        name: "イーファ/お正月", rarity: "黒", cl: "ドラグーン", AW: "未"
        , stats: { atkCd: "-20%" }
        , target: [
            { season: [ "お正月" ] }
            , { others: [ "ドラゴン" ] }
        ]
    }
    , {
        name: "イーファ/お正月", rarity: "黒", cl: "ドラグーン", AW: "覚醒"
        , stats: { atkCd: "-30%" }
        , target: [
            { season: [ "お正月" ] }
            , { others: [ "ドラゴン" ] }
        ]
    }
    , {
        name: "エンジュ/花嫁", rarity: "黒", cl: "座敷わらし", AW: "未"
        , stats: { def: "+5%", mr: "+3" }
        , target: { season: [ "ジューンブライド" ] }
    }
    , {
        name: "エンジュ/花嫁", rarity: "黒", cl: "座敷わらし", AW: "覚醒"
        , stats: { def: "+10%", mr: "+5" }
        , target: { season: [ "ジューンブライド" ] }
    }
    , {
        name: "アスバール", rarity: "黒", cl: "魔界総帥", AW: "未"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { others: [ "魔界" ] }
    }
    , {
        name: "アスバール", rarity: "黒", cl: "魔界総帥", AW: "覚醒"
        , stats: { atk: "+10%", def: "+10%" }
        , target: { others: [ "魔界" ] }
    }
    , {
        name: "アスバール/水着", rarity: "黒", cl: "魔界総帥", AW: "覚醒"
        , stats: { hp: "+10%", atk: "+10%" }
        , target: [
            { season: [ "サマー" ] }
            , { others: [ "魔界" ] }
        ]
    }
    , {
        name: "ちびアスバール", rarity: "ちび", cl: "魔界総帥"
        , stats: { atk: "+10%", def: "+10%" }
        , target: { others: [ "魔界" ] }
    }
    , {
        name: "リッチ", rarity: "黒", cl: "リッチ【闇の軍勢】", AW: "未"
        , stats: { atkCd: "-15%" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "リッチ", rarity: "黒", cl: "リッチ【闇の軍勢】", AW: "覚醒"
        , stats: { atkCd: "-15%" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "パラベル", rarity: "白", cl: "ガンスリンガー", AW: "未"
        , stats: { atk: "+5%" }
        , target: { others: [ "銃士" ] }
    }
    , {
        name: "パラベル", rarity: "白", cl: "ガンスリンガー", AW: "覚醒"
        , stats: { atk: "+7%" }
        , target: { others: [ "銃士" ] }
    }
    , {
        name: "シルヴィーナ", rarity: "白", cl: "ガンスリンガー", AW: "覚醒"
        , stats: { hp: "+5%" }
        , target: [
            { sex: [ "男性" ] }
            , { others: [ "銃士" ] }
        ]
    }
    , {
        name: "アイギス神殿", rarity: "黒", cl: "アイギス神殿", AW: "未"
        , stats: { atk: "+7%", cost: "-5" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "アイギス神殿", rarity: "黒", cl: "アイギス神殿", AW: "覚醒"
        , stats: { atk: "+10%", cost: "-8" }
        , target: { cl: [ "王子" ] }
    }
    , {
        name: "リノ/アイドル", rarity: "白", cl: "アイドル召喚士", AW: "覚醒"
        , stats: { cost: "-1" }
        , target: { sex: [ "男性" ] }
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
        name: "アンナホープネス", rarity: "金", cl: "試験型支援騎"
        , stats: { atk: "+10%" }
        , target: { cl: [ "試験型英雄騎" ] }
    }
    , {
        name: "ヤシマ", rarity: "黒", cl: "妖狸", AW: "覚醒"
        , stats: { hp: "+20%" }
        , target: { race: [ "妖怪" ] }
    }
    , {
        name: "パリオス/ハロウィン", rarity: "黒", cl: "スカイウォリアー", AW: "覚醒"
        , stats: { atk: "+10%" }
        , target: [
            { race: [ "鳥人" ] }
            , { season: [ "ハロウィン" ] }
        ]
    }
    , {
        name: "ラシティ", rarity: "黒", cl: "スカイシューター", AW: "覚醒"
        , stats: { other: "" }
        , target: { others: [ "弓兵" ] }
        , note: "天界-100%"
    }
    , {
        name: "アエロ/クリスマス", rarity: "金", cl: "スカイシューター", AW: "覚醒"
        , stats: { hp: "+5%" }
        , target: { season: [ "クリスマス" ] }
    }
    , {
        name: "ミリアム/バレンタイン", rarity: "白", cl: "スカウト", AW: "未"
        , stats: { hp: "+3%", atk: "+3%" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "ミリアム/バレンタイン", rarity: "白", cl: "スカウト", AW: "覚醒"
        , stats: { hp: "+5%", atk: "+5%" }
        , target: { season: [ "バレンタイン" ] }
    }
    , {
        name: "フェニカ", rarity: "黒", cl: "スカイヒーラー", AW: "未"
        , stats: { hp: "+10%" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "フェニカ", rarity: "黒", cl: "スカイヒーラー", AW: "覚醒"
        , stats: { hp: "+15%" }
        , target: { depType: [ "遠距離" ] }
    }
    , {
        name: "アヴィリコ", rarity: "白", cl: "エアセイラー", AW: "覚醒"
        , stats: { hp: "+10%", def: "+5%" }
        , target: { others: [ "機械" ] }
    }
    , {
        name: "アルスラーン", rarity: "白", cl: "王太子", AW: "未"
        , stats: { atk: "+5%", def: "+5%" }
        , target: { home: [ "パルス王国" ] }
    }
    , {
        name: "魔想志津香", rarity: "黒", cl: "魔法使い【ランス】", AW: "未"
        , stats: { range: "+10" }
        , target: { others: [ "魔術師" ] }
    }
    , {
        name: "趙雲", rarity: "白", cl: "武将【恋姫】", AW: "覚醒"
        , stats: { cost: "-2" }
        , target: { home: [ "恋姫" ] }
    }
    , {
        name: "劉備", rarity: "黒", cl: "君主【恋姫】", AW: "未"
        , stats: { def: "+7%" }
        , target: { home: [ "恋姫" ] }
    }
    , {
        name: "劉備", rarity: "黒", cl: "君主【恋姫】", AW: "覚醒"
        , stats: { def: "+10%" }
        , target: { home: [ "恋姫" ] }
    }
    , {
        name: "諸葛亮", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒"
        , stats: { atk: "+10%", def: "+10%" }
        , target: { home: [ "恋姫" ], depType: [ "近接" ] }
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "未"
        , stats: { hp: "+7%", atk: "+7%" }
        , target: { home: [ "恋姫" ] }
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒"
        , stats: { hp: "+10%", atk: "+10%" }
        , target: { home: [ "恋姫" ] }
    }
    , {
        name: "賈駆", rarity: "白", cl: "軍師【恋姫】", AW: "未"
        , stats: { mr: "+5" }
        , target: { home: [ "恋姫" ] }
    }
    , {
        name: "賈駆", rarity: "白", cl: "軍師【恋姫】", AW: "覚醒"
        , stats: { mr: "+10" }
        , target: { home: [ "恋姫" ] }
    }
    , {
        name: "董卓 仲穎", rarity: "黒", cl: "暴君【恋姫】", AW: "未"
        , stats: { hp: "+7%" }
        , target: { home: [ "恋姫" ] }
    }
    , {
        name: "董卓 仲穎", rarity: "黒", cl: "暴君【恋姫】", AW: "覚醒"
        , stats: { hp: "+10%" }
        , target: { home: [ "恋姫" ] }
    }
    , {
        name: "エリザベス", rarity: "黒", cl: "王女【七つの大罪】", AW: "未"
        , stats: { def: "+10%", mr: "+5" }
        , target: { others: [ "＜七つの大罪＞" ] }
    }
    , {
        name: "エリザベス", rarity: "黒", cl: "王女【七つの大罪】", AW: "覚醒"
        , stats: { def: "+10%", mr: "+5" }
        , target: { others: [ "＜七つの大罪＞" ] }
    }
    , {
        name: "ゲーテ", rarity: "黒", cl: "戯曲作家【GBM】", AW: "未"
        , stats: { hp: "+5%", atk: "+5%" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "ゲーテ", rarity: "黒", cl: "戯曲作家【GBM】", AW: "覚醒"
        , stats: { hp: "+10%", atk: "+10%" }
        , target: { others: [ "アンデッド" ] }
    }
    , {
        name: "心ある虫【GBM】", cl: "心ある虫【GBM】", AW: "未"
        , stats: { hp: "+5%" }
        , target: { depType: [ "近接" ] }
    }
    , {
        name: [ "ぐりむぁの", "お手伝い【GBM】" ], cl: "心ある虫【GBM】", AW: "覚1"
        , stats: { hp: "+10%" }
        , target: { depType: [ "近接" ] }
        , note: "心ある虫【GBM】系"
    }
    , {
        name: "ラヴクラフト", rarity: "白", cl: "水底の支配者【GBM】", AW: "覚醒"
        , stats: { atk: "+5%" }
        , target: { cl: [ "セーラー", "パイレーツ" ] }
    }
    , {
        name: "芙蓉", rarity: "白", cl: "鬼【ななリン】", AW: "未"
        , stats: { hp: "+7%" }
        , target: { cl: [ "鬼【ななリン】" ] }
    }
    , {
        name: "芙蓉", rarity: "白", cl: "鬼【ななリン】", AW: "覚醒"
        , stats: { hp: "+10%", atk: "+10%", def: "+10%" }
        , target: { cl: [ "鬼【ななリン】" ] }
    }
    , {
        name: "井河アサギ", rarity: "黒", cl: "対魔忍 超人【対魔忍】", AW: "覚醒"
        , stats: { wt: "-40%" }
        , target: { depType: [ "近接" ] }
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
    
    eva nul draw
    
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
    
    note
    
    正月 水着 浴衣 バニー 花嫁

*/