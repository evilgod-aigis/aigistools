const debuff = {};

// 編成
debuff.team = [
    {
        name: "英傑", rarity: "黒", AW: "覚1"
        , stats: { atk: "-50%", def: "-50%", mr: "-50%" }
        , target: { attr: [ "英傑" ] }
    }
    , {
        name: "英傑", rarity: "白", AW: "覚1"
        , stats: { atk: "-40%", def: "-40%", mr: "-40%" }
        , target: { attr: [ "英傑" ] }
    }
    , {
        name: "アンブローズ", rarity: "黒", cl: "転生魔導士", AW: "覚醒後"
        , stats: { mr: "-20" }
    }
    , {
        name: "ヒバリ/バレンタイン", rarity: "黒", cl: "サムライ", AW: "覚醒前"
        , stats: { def: "-10%", mr: "-10" }
        , target: { attr: [ "妖怪" ] }
    }
    , {
        name: "ヒバリ/バレンタイン", rarity: "黒", cl: "サムライ", AW: "覚醒後"
        , stats: { def: "-20%", mr: "-20" }
        , target: { attr: [ "妖怪" ] }
    }
    , {
        name: "シルセス/花嫁", rarity: "黒", cl: "メイジアーマー", AW: "覚醒後"
        , stats: { atk: "-15%" }
        , target: { attr: [ "デーモン" ] }
    }
    , {
        name: "ダークドミネイター", cl: "ダークストーカー", AW: "覚2a"
        , stats: { atk: "-15%" }
        , target: { attr: [ "天使" ] }
        , note: "ダークストーカー系"
    }
    , {
        name: "テンマ", rarity: "黒", cl: "モンスターブレイカー", AW: "覚醒前"
        , stats: { atk: "-15%", def: "-25%" }
        , target: { attr: [ "アーマー" ] }
    }
    , {
        name: "テンマ", rarity: "黒", cl: "モンスターブレイカー", AW: "覚醒前"
        , stats: { mr: "-15" }
    }
    , {
        name: "テンマ", rarity: "黒", cl: "モンスターブレイカー", AW: "覚醒後"
        , stats: { atk: "-20%", def: "-30%" }
        , target: { attr: [ "アーマー" ] }
    }
    , {
        name: "テンマ", rarity: "黒", cl: "モンスターブレイカー", AW: "覚醒後"
        , stats: { mr: "-20" }
    }
    , {
        name: "ランヒルド", rarity: "黒", cl: "モンスターブレイカー", AW: "覚醒前"
        , stats: { atk: "-15%", mr: "-15" }
        , target: { attr: [ "デーモン" ] }
    }
    , {
        name: "ランヒルド", rarity: "黒", cl: "モンスターブレイカー", AW: "覚醒前"
        , stats: { def: "-10%" }
    }
    , {
        name: "ランヒルド", rarity: "黒", cl: "モンスターブレイカー", AW: "覚醒後"
        , stats: { atk: "-20%", mr: "-20" }
        , target: { attr: [ "デーモン" ] }
    }
    , {
        name: "ランヒルド", rarity: "黒", cl: "モンスターブレイカー", AW: "覚醒後"
        , stats: { def: "-15%" }
    }
    , {
        name: "エレーヌ", rarity: "白", cl: "モンスターブレイカー", AW: "覚醒前"
        , stats: { hp: "-10%", atk: "-20%" }
        , target: { attr: [ "巨人" ] }
    }
    , {
        name: "エレーヌ", rarity: "白", cl: "モンスターブレイカー", AW: "覚醒後"
        , stats: { hp: "-15%", atk: "-25%" }
        , target: { attr: [ "巨人" ] }
    }
    , {
        name: "ラテリア", rarity: "白", cl: "モンスターブレイカー", AW: "覚醒前"
        , stats: { hp: "-10%", atk: "-10%" }
        , target: { attr: [ "神獣", "魔獣", "妖獣", "獣", "獣人" ] }
    }
    , {
        name: "ラテリア", rarity: "白", cl: "モンスターブレイカー", AW: "覚醒後"
        , stats: { hp: "-15%", atk: "-15%" }
        , target: { attr: [ "神獣", "魔獣", "妖獣", "獣", "獣人" ] }
    }
    , {
        name: "ティール", rarity: "白", cl: "モンスターブレイカー", AW: "覚醒前"
        , stats: { atk: "-10%", def: "-10%" }
        , target: { attr: [ "ゴーレム" ] }
    }
    , {
        name: "ティール", rarity: "白", cl: "モンスターブレイカー", AW: "覚醒後"
        , stats: { atk: "-15%", def: "-15%" }
        , target: { attr: [ "ゴーレム" ] }
    }
    , {
        name: "エレカ", rarity: "白", cl: "モンスターブレイカー", AW: "覚醒前"
        , stats: { atk: "-20%" }
        , target: { attr: [ "機械" ] }
    }
    , {
        name: "エレカ", rarity: "白", cl: "モンスターブレイカー", AW: "覚醒後"
        , stats: { atk: "-25%" }
        , target: { attr: [ "機械" ] }
    }
    , {
        name: "レンゲ", rarity: "白", cl: "モンスターブレイカー", AW: "覚醒前"
        , stats: { atk: "-15%" }
        , target: { attr: [ "妖怪" ] }
    }
    , {
        name: "レンゲ", rarity: "白", cl: "モンスターブレイカー", AW: "覚醒前"
        , stats: { def: "-5%" }
    }
    , {
        name: "レンゲ", rarity: "白", cl: "モンスターブレイカー", AW: "覚醒後"
        , stats: { atk: "-20%" }
        , target: { attr: [ "妖怪" ] }
    }
    , {
        name: "レンゲ", rarity: "白", cl: "モンスターブレイカー", AW: "覚醒後"
        , stats: { def: "-10%" }
    }
    , {
        name: "フォルテ", rarity: "青", cl: "モンスターブレイカー", AW: "覚醒前"
        , stats: { hp: "-5%", def: "-10%" }
        , target: { attr: [ "妖怪", "デーモン" ] }
    }
    , {
        name: "フォルテ", rarity: "青", cl: "モンスターブレイカー", AW: "覚醒後"
        , stats: { hp: "-10%", def: "-15%" }
        , target: { attr: [ "妖怪", "デーモン" ] }
    }
    , {
        name: "ちびテンマ", rarity: "ちび", cl: "モンスターブレイカー"
        , stats: { atk: "-15%", def: "-25%" }
        , target: { attr: [ "アーマー" ] }
    }
    , {
        name: "ちびテンマ", rarity: "ちび", cl: "モンスターブレイカー"
        , stats: { mr: "-15" }
    }
    , {
        name: "シロ", rarity: "黒", cl: "犬神", AW: "覚醒前"
        , stats: { atk: "-5%", def: "-5%" }
    }
    , {
        name: "シロ", rarity: "黒", cl: "犬神", AW: "覚醒後"
        , stats: { atk: "-7%", def: "-7%" }
    }
    , {
        name: "アルタ", rarity: "黒", cl: "オートマタ", AW: "覚醒後"
        , stats: { atk: "-25%", def: "-25%" }
        , target: { attr: [ "人間", "天界人" ] }
    }
    , {
        name: "ジャッジメント", rarity: "黒", cl: "ヴァンパイアハンター", AW: "覚2b"
        , stats: { atk: "-15%" }
        , target: { attr: [ "アンデッド" ] }
        , note: "ヴァンパイアハンター系"
    }
    , {
        name: "ドルイド", cl: "ドルイド", AW: "覚醒前"
        , stats: { atk: "-20%" }
        , target: { attr: [ "植物" ] }
    }
    , {
        name: "マスタードルイド", cl: "ドルイド", AW: "覚1"
        , stats: { atk: "-20%" }
        , target: { attr: [ "植物" ] }
        , note: "ドルイド系"
    }
    , {
        name: "クイーンオブドルイド", cl: "ドルイド", AW: "覚2a"
        , stats: { atk: "-20%" }
        , target: { attr: [ "植物" ] }
        , note: "ドルイド系"
    }
    , {
        name: "フォレストクイーン", cl: "ドルイド", AW: "覚2b"
        , stats: { atk: "-20%" }
        , target: { attr: [ "植物" ] }
        , note: "ドルイド系"
    }
    , {
        name: "ヘルミーネ", rarity: "白", cl: "アルケミスト", AW: "覚醒後"
        , stats: { def: "-15%" }
    }
    , {
        name: "ローザ/水着", rarity: "白", cl: "レンジャー", AW: "覚醒後"
        , stats: { atk: "-10%", def: "-10%" }
        , target: { attr: [ "魚人", "水棲" ] }
    }
    , {
        name: "オロチヒメ", rarity: "黒", cl: "呪術使い", AW: "覚醒前"
        , stats: { atk: "-7%" }
    }
    , {
        name: "オロチヒメ", rarity: "黒", cl: "呪術使い", AW: "覚醒後"
        , stats: { atk: "-10%" }
    }
    , {
        name: "ちびオロチヒメ", rarity: "ちび", cl: "呪術使い", AW: "覚醒前"
        , stats: { atk: "-7%" }
    }
    , {
        name: "ハーニィ", rarity: "白", cl: "エンチャンター", AW: "覚醒後"
        , stats: { mr: "-30" }
        , target: { attr: [ "ゴーレム" ] }
    }
    , {
        name: "ツァーユ", rarity: "黒", cl: "フェンリルシャーマン", AW: "覚醒後"
        , stats: { atk: "-20%", def: "-20%" }
        , target: { attr: [ "天使", "神", "神獣" ] }
    }
    , {
        name: "エレオノーラ/水着", rarity: "黒", cl: "ルーンアコライト", AW: "覚醒前"
        , stats: { mr: "-15" }
    }
    , {
        name: "エレオノーラ/水着", rarity: "黒", cl: "ルーンアコライト", AW: "覚醒後"
        , stats: { mr: "-20" }
    }
    , {
        name: "エリザベス", rarity: "黒", cl: "王女【七つの大罪】", AW: "覚醒後"
        , stats: { atk: "-10%" }
        , target: { attr: [ "デーモン" ] }
    }
    , {
        name: "刑事【GBM】", cl: "刑事【GBM】", AW: "覚醒前"
        , stats: { atk: "-5%" }
    }
    , {
        name: "怪盗を追う者【GBM】", cl: "刑事【GBM】", AW: "覚1"
        , stats: { atk: "-8%" }
        , note: "刑事【GBM】系"
    }
    , {
        name: "ラヴクラフト", rarity: "白", cl: "水底の支配者【GBM】", AW: "覚醒後"
        , stats: { atk: "-15%" }
        , target: { attr: [ "魚人", "水棲" ] }
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
    
    覚醒前 覚醒後 覚1 覚2a 覚2b
    
    常時 非 通常 覚醒
    
    hp atk def mr atkCd stop other
    
    target
    
    attr 人間 ゴブリン オーク ドラゴン 妖怪
    
    巨人 ゴーレム アンデッド デーモン 魔神
    
    天使 天界人 神 神獣 魔獣 妖獣 獣 獣人
    
    植物 インセクト 魚人 水棲 機械 アーマー 英傑
    
    note
    
    正月 温泉 バレンタイン 学園 バニー
    
    花嫁 水着 浴衣 ハロウィン クリスマス

*/
