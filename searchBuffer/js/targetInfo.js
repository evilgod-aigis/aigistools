const target = {};

target.word = {
    rarity: "レアリティ", depType: "配置", cl: "クラス", sex: "性別"
    , home: "所属", race: "種族", season: "季節", others: "その他"
    , year: "実装年"
};

target.rarity = [ "黒", "白", "青", "金", "銀", "銅", "鉄" ];
target.depType = [ "近接", "遠距離", "遠近距離" ];
target.cl = {
    "近接": {
        prince: [ "王子" ]
        , hero: [
            "魔竜騎士", "バーバリアンクイーン", "古代魔導機兵", "銀腕の神話", "ウェポンマスター", "魔導生命体", "アヤカシの王", "黎明の翼"
            , "トゥルーブラッド", "暁光の神話", "神獣騎士", "王国軍初代副司令", "大華の神話", "マギステルミリトゥム", "光槍ビルガの継承者", "祖竜"
            , "開天の神話", "魔境の主", "侍従の英雄譚", "キングダムガード"
        ]
        , normal: [
            "ソルジャー", "ヘビーアーマー", "ワルキューレ", "ローグ", "プリンセス", "ヴァンパイアプリンセス", "イモータルプリンセス", "イビルプリンセス"
            , "バンデット", "中級竜兵", "ドラゴンプリンセス", "サムライ", "忍者", "ペガサスライダー", "ダークファイター", "アベンジャー", "モンク"
            , "前衛戦術家", "魔法剣士", "エンジェル", "くぐつ使い", "セーラー", "妖狐", "神官戦士", "メイジアーマー", "ドラゴンライダー", "ボウライダー"
            , "メイド", "ヴァンパイアロード", "ソードマスター", "ロイヤルガード", "仙人", "魔神", "仙猿", "戦の聖霊", "ダークストーカー", "ぬらりひょん"
            , "重装砲兵", "鬼", "インペリアルナイト", "天狗", "鍛冶職人", "グラディエーター", "キョンシー", "雷公", "モンスターブレイカー", "風伯"
            , "グランドナイト", "グリフィンライダー", "サッパー", "真人", "邪仙", "魔王親衛隊", "ぬえ", "鬼刃忍", "ランスマスター", "デーモンロード"
            , "犬神", "料理人", "デモンルーン", "スチームナイト", "エンプレス", "かまいたち", "シーソルジャー", "アクアナイト", "テンプルナイト"
            , "迷宮の悪霊", "オートマタ", "ぬりかべ", "霊刀つくもがみ", "戦巫女", "シャークウォリアー", "儀仗軍神", "武侠", "サベージファイター"
            , "ハデスソルジャー", "隧道掘削兵", "シールダー", "女王子", "一目の竜", "天尊", "ダーク王子", "処刑人", "白の帝国城", "神話の継承者"
            , "デモンリドゥ", "カオスルーラー", "衛士", "コロッサス", "妖糸使い", "憤怒の海神", "初代皇帝", "王城", "夜の魔女", "統帥の塔", "西の守護虎"
            , "東の守護龍", "サキュバス", "北の守護亀蛇", "飛電客"
            , "混沌霊使い【魔蛸】", "冥府の騎士【円卓】"
            , "小悪魔アイドル", "王国民的アイドル"
            , "グレーターデーモン", "ガオレオン", "デーモンシェフ", "チェインソン男", "グラシャラボラス", "皇帝"
            , "試作型英雄騎"
        ]
        , collabo: [
            "ねんどろいどプリンセス"
            , "王太子"
            , "ホーネット派魔人【ランス】", "忍者【ランス】", "上杉家当主【ランス】", "ゼス警察長官【ランス】", "逃亡悪魔【ランス】", "旅人【ランス】"
            , "武将【恋姫】", "君主【恋姫】", "奸雄【恋姫】", "勇士【恋姫】", "小覇王【恋姫】", "王女【恋姫】"
            , "騎士【七つの大罪】", "盗賊【七つの大罪】", "巨人【七つの大罪】", "妖精【七つの大罪】"
            , "騎士【封緘】"
            , "怪盗【GBM】", "戯曲作家【GBM】", "物語を渡る者【GBM】", "心ある虫【GBM】", "刑事【GBM】"
            , "鬼【ななリン】"
            , "黒竜娘【モンスター娘TD】", "鉄腕娘【モンスター娘TD】"
            , "対魔忍 超人【対魔忍】", "対魔忍 魔性【対魔忍】", "対魔忍 精神【対魔忍】", "対魔忍 科学【対魔忍】"
            , "天才魔道士/燈火の魔女", "リナの保護者/流離いの剣姫", "セイルーンの巫女/拳の聖女", "孤高の魔剣士/魔法剣の使い手"
        ]
    }
    , "遠距離": {
        prince: []
        , hero: [
            "占星術師", "チェイスハンター", "ジオマンサー", "転生魔導士", "ファラオ", "ピューティアー", "カースウィスパラー", "未踏海域の覇者", "ギアマンサー"
            , "悲哀の騎士", "黒鴉の神話", "時間の操者"
        ]
        , normal: [
            "アーチャー", "メイジ", "ヒーラー", "ウィッチ", "パイレーツ", "ドラゴンシャーマン", "ヴァンパイアハンター", "シャーマン", "ビショップ"
            , "後衛戦術家", "陰陽師", "サモナー", "風水使い", "砲術士", "ダンサー", "政務官", "ネクロマンサー", "クロノウィッチ", "ドルイド"
            , "アルケミスト", "レンジャー", "シーフ", "呪術使い", "魔物使い", "ダークプリースト", "エンチャンター", "マーチャント", "フェンリルシャーマン"
            , "モンスタースレイヤー", "デモンサモナー", "エレメンタラー", "猫又", "道化師", "ライフリンカー", "幻獣使い", "ルーンアコライト", "ロード"
            , "支援工兵", "デモンシャーマン", "異界召喚士", "シービショップ", "発明家", "符術士", "狛犬", "儀式魔術師", "幻術士", "ハーバリスト"
            , "霊宝つくもがみ", "スカラー", "夜行さん", "ドラグーン", "ドラゴンメイジ", "座敷わらし", "魔界総帥", "雪娘", "英傑の塔", "リッチ【闇の軍勢】"
            , "政務官【闇の軍勢】", "ガンスリンガー", "時の俯瞰者", "アイギス神殿", "ハデスシャーマン", "メディック", "豊穣神", "吟遊詩人", "呪命師"
            , "悪疫の王", "蟲使い", "ポーター", "育成の聖霊", "炉の亜神", "永き夢の亜神", "月の神"
            , "妖精術師【冥府館】"
            , "アイドル召喚士"
            , "支援の聖霊", "ゴブリン博士", "メカゴブリンクイーン", "オルカレクス"
            , "試作型支援騎"
        ]
        , collabo: [
            "アコライト", "魔法使い【ランス】", "初代大統領【ランス】", "ホーネット派代表【ランス】"
            , "軍師【恋姫】", "暴君【恋姫】", "弓将【恋姫】"
            , "王女【七つの大罪】"
            , "傀儡人形【封緘】"
            , "水底の支配者【GBM】", "錬金術師【GBM】"
            , "新米刑事【流星WA】", "交通課職員【流星WA】"
            , "百腕娘【モンスター娘TD】", "淫魔娘【モンスター娘TD】", "蠅王娘【モンスター娘TD】"
            , "白蛇の魔道士/氷岩のゴーレム使い"
        ]
    }
    , "遠近距離": {
        prince: []
        , hero: [
            "異世界戦士", "盤上の支配者", "エレメンタルハーミット"
        ]
        , normal: [
            "妖狸", "ロケットトルーパー", "スカイウォリアー", "スカイシューター", "スカウト", "スカイヒーラー", "エアセイラー", "古代戦艦管理頭脳"
            , "ドラゴンノーブル", "南の守護鳥"
            , "冬姫【白面金毛】"
            , "帝国アイドル"
        ]
        , collabo: [
            "不死鳥娘【モンスター娘TD】"
            , "対魔忍 自然【対魔忍】"
        ]
    }
};
target.sex = [ "男性", "女性" ];
target.home = [ "王国", "白の帝国", "砂漠の国", "東の国", "華の国", "パルス王国", "恋姫" ];
target.race = [
    "聖霊", "人間", "獣人", "竜人", "エルフ系", "ドワーフ", "ヴァンパイア", "デーモン系", "天使", "妖怪", "仙人"
    , "オーク", "ゴブリン", "鳥人", "魚人", "神", "天界人", "冥界人", "サキュバス", "半神", "ねんどろいど"
];
target.season = [ "お正月", "温泉", "バレンタイン", "学園", "エッグハント", "ジューンブライド", "サマー", "ハロウィン", "クリスマス" ];
target.others = [
    "英傑", "ちび", "弓兵", "魔術師", "アンデッド", "機械", "騎兵", "重装", "聖職者", "魔界", "ドラゴン", "砲兵", "銃士", "飛行", "深海", "高貴"
    , "ジャイアント"
    , "＜七つの大罪＞"
    /*, "竜族"*/, "全プリンセス系", "GG持ち", "コスト回復スキル持ち", "HP回復不可", "魔界適応", "深海適応", "天界適応"
];
const YEAR_RELEASE = 2013;
target.year = _.map(
    [...new Array((new Date()).getFullYear() - YEAR_RELEASE + 1)]
    , (_, i) => `${YEAR_RELEASE + i}年`
);
target.selected = {};

// element(クラス) ⇒ key(属性等)
target.count = {};
target.count.depType = {
    "近接": {
        prince: []
        , hero: [ "盤上の支配者" ]
        , normal: [ "スカイウォリアー", "スカウト", "ドラゴンノーブル", "南の守護鳥" ]
        , collabo: [ "対魔忍 自然【対魔忍】" ]
    }
    , "遠距離": {
        prince: []
        , hero: [ "異世界戦士", "エレメンタルハーミット" ]
        , normal: [
            "ロケットトルーパー", "スカイシューター", "スカイヒーラー", "エアセイラー", "古代戦艦管理頭脳"
            , "冬姫【白面金毛】"
            , "帝国アイドル"
        ]
        , collabo: [ "不死鳥娘【モンスター娘TD】" ]
    }
};
target.count.sex = {
    "男性": [
        "王子"
        , "魔竜騎士", "暁光の神話", "シャークウォリアー", "一目の竜", "ダーク王子", "憤怒の海神"
        , "グレーターデーモン", "ガオレオン", "デーモンシェフ", "チェインソン男", "グラシャラボラス", "皇帝"
        , "王太子", "騎士【七つの大罪】", "盗賊【七つの大罪】", "妖精【七つの大罪】"
        , "永き夢の亜神"
        , "ゴブリン博士"
    ]
    , "女性": [
        "バーバリアンクイーン", "古代魔導機兵", "銀腕の神話", "ウェポンマスター", "魔導生命体", "アヤカシの王", "黎明の翼", "トゥルーブラッド", "神獣騎士"
        , "王国軍初代副司令", "大華の神話", "マギステルミリトゥム", "光槍ビルガの継承者", "祖竜", "開天の神話", "魔境の主", "侍従の英雄譚", "キングダムガード"
        , "ワルキューレ", "プリンセス", "ヴァンパイアプリンセス", "イモータルプリンセス", "イビルプリンセス", "ドラゴンプリンセス", "メイド", "エンプレス"
        , "戦巫女", "女王子", "白の帝国城", "初代皇帝", "王城", "夜の魔女", "統帥の塔", "西の守護虎", "東の守護龍", "サキュバス", "北の守護亀蛇"
        , "小悪魔アイドル", "王国民的アイドル"
        , "ねんどろいどプリンセス"
        , "ホーネット派魔人【ランス】", "忍者【ランス】"
        , "武将【恋姫】", "君主【恋姫】", "奸雄【恋姫】", "勇士【恋姫】", "小覇王【恋姫】", "王女【恋姫】"
        , "巨人【七つの大罪】"
        , "騎士【封緘】"
        , "怪盗【GBM】", "戯曲作家【GBM】", "物語を渡る者【GBM】", "心ある虫【GBM】", "刑事【GBM】"
        , "鬼【ななリン】"
        , "黒竜娘【モンスター娘TD】"
        , "対魔忍 超人【対魔忍】", "対魔忍 魔性【対魔忍】", "対魔忍 精神【対魔忍】", "対魔忍 科学【対魔忍】"
        , "天才魔道士/燈火の魔女", "セイルーンの巫女/拳の聖女"
        , "占星術師", "チェイスハンター", "ジオマンサー", "転生魔導士", "ファラオ", "ピューティアー", "カースウィスパラー", "未踏海域の覇者", "ギアマンサー"
        , "悲哀の騎士", "黒鴉の神話", "時間の操者"
        , "ウィッチ", "ドラゴンシャーマン", "シャーマン", "政務官", "ドルイド", "フェンリルシャーマン", "デモンシャーマン", "座敷わらし", "魔界総帥", "雪娘"
        , "英傑の塔", "リッチ【闇の軍勢】", "政務官【闇の軍勢】", "時の俯瞰者", "アイギス神殿", "ハデスシャーマン"
        , "妖精術師【冥府館】"
        , "アイドル召喚士"
        , "メカゴブリンクイーン"
        , "アコライト", "魔法使い【ランス】", "初代大統領【ランス】"
        , "軍師【恋姫】", "暴君【恋姫】", "弓将【恋姫】"
        , "王女【七つの大罪】"
        , "傀儡人形【封緘】"
        , "水底の支配者【GBM】", "錬金術師【GBM】"
        , "新米刑事【流星WA】", "交通課職員【流星WA】"
        , "百腕娘【モンスター娘TD】", "淫魔娘【モンスター娘TD】", "蠅王娘【モンスター娘TD】"
        , "白蛇の魔道士/氷岩のゴーレム使い"
        , "異世界戦士", "盤上の支配者", "エレメンタルハーミット"
        , "古代戦艦管理頭脳", "南の守護鳥"
        , "冬姫【白面金毛】"
        , "帝国アイドル"
        , "不死鳥娘【モンスター娘TD】"
        , "対魔忍 自然【対魔忍】"
    ]
};
target.count.home = {
    "王国": [
        "王子", "王国軍初代副司令", "マギステルミリトゥム", "侍従の英雄譚", "キングダムガード"
        , "迷宮の悪霊", "女王子", "ダーク王子", "王城", "統帥の塔", "王国民的アイドル"
        , "転生魔導士", "政務官", "英傑の塔", "政務官【闇の軍勢】", "アイギス神殿"
        , "古代戦艦管理頭脳"
    ]
    ,"白の帝国": [ "インペリアルナイト", "エンプレス", "ハデスソルジャー", "白の帝国城", "初代皇帝", "冥府の騎士【円卓】", "皇帝", "帝国アイドル" ]
    , "砂漠の国": [ "ファラオ" ]
    , "東の国": [
        "アヤカシの王", "魔境の主", "サムライ", "ぬらりひょん", "天狗", "雷公", "風伯", "ぬえ", "鬼刃忍", "犬神", "かまいたち", "ぬりかべ"
        , "シャーマン", "陰陽師", "猫又", "符術士", "狛犬", "霊宝つくもがみ", "夜行さん", "座敷わらし", "雪娘"
        , "妖狸", "冬姫【白面金毛】"
    ]
    , "華の国": [
        "大華の神話", "開天の神話"
        , "仙人", "仙猿", "キョンシー", "真人", "邪仙", "武侠", "西の守護虎", "東の守護龍", "北の守護亀蛇", "飛電客"
    ]
    , "パルス王国": [ "王太子" ]
    , "恋姫": [
        "武将【恋姫】", "君主【恋姫】", "奸雄【恋姫】", "勇士【恋姫】", "小覇王【恋姫】", "王女【恋姫】"
        , "軍師【恋姫】", "暴君【恋姫】", "弓将【恋姫】"
    ]
};
target.count.race = {
    "聖霊": [ "戦の聖霊", "育成の聖霊", "支援の聖霊" ]
    , "人間": [
        "王子"
        , "魔竜騎士", "バーバリアンクイーン", "王国軍初代副司令", "マギステルミリトゥム", "光槍ビルガの継承者", "侍従の英雄譚", "キングダムガード"
        , "女王子", "ダーク王子", "初代皇帝", "皇帝"
        , "王太子"
        , "忍者【ランス】", "上杉家当主【ランス】", "ゼス警察長官【ランス】"
        , "武将【恋姫】", "君主【恋姫】", "奸雄【恋姫】", "勇士【恋姫】", "小覇王【恋姫】", "王女【恋姫】"
        , "騎士【封緘】"
        , "怪盗【GBM】", "戯曲作家【GBM】", "物語を渡る者【GBM】", "心ある虫【GBM】", "刑事【GBM】"
        , "対魔忍 超人【対魔忍】", "対魔忍 魔性【対魔忍】", "対魔忍 精神【対魔忍】", "対魔忍 科学【対魔忍】"
        , "天才魔道士/燈火の魔女", "リナの保護者/流離いの剣姫", "セイルーンの巫女/拳の聖女"
        , "占星術師", "ジオマンサー", "転生魔導士", "ファラオ", "ピューティアー", "カースウィスパラー", "未踏海域の覇者", "ギアマンサー", "悲哀の騎士"
        , "時間の操者"
        , "政務官", "政務官【闇の軍勢】"
        , "アコライト", "魔法使い【ランス】", "初代大統領【ランス】"
        , "軍師【恋姫】", "暴君【恋姫】", "弓将【恋姫】"
        , "水底の支配者【GBM】", "錬金術師【GBM】"
        , "白蛇の魔道士/氷岩のゴーレム使い"
        , "異世界戦士", "盤上の支配者"
        , "対魔忍 自然【対魔忍】"
    ]
    , "獣人": [ "西の守護虎", "北の守護亀蛇", "ガオレオン" ]
    , "竜人": [ "祖竜", "中級竜兵", "ドラゴンプリンセス", "東の守護龍", "ドラゴンシャーマン", "ドラゴンメイジ", "黒竜娘【モンスター娘TD】" ]
    , "エルフ系": [ "ダークストーカー", "グリフィンライダー", "エンプレス", "チェイスハンター", "妖精術師【冥府館】", "エレメンタルハーミット" ]
    , "ドワーフ": []
    , "ヴァンパイア": [ "トゥルーブラッド", "ヴァンパイアプリンセス", "イモータルプリンセス", "ヴァンパイアロード" ]
    , "デーモン系": [
        "魔神", "デーモンロード", "デモンルーン", "デモンリドゥ"
        , "小悪魔アイドル"
        , "グレーターデーモン", "デーモンシェフ", "グラシャラボラス"
        , "淫魔娘【モンスター娘TD】", "蠅王娘【モンスター娘TD】"
    ]
    , "天使": [ "黎明の翼", "エンジェル" ]
    , "妖怪": [
        "アヤカシの王", "魔境の主", "妖狐", "ぬらりひょん", "鬼", "天狗", "雷公", "風伯", "ぬえ", "犬神", "かまいたち", "ぬりかべ", "霊刀つくもがみ"
        , "一目の竜", "白の帝国城", "王城", "統帥の塔"
        , "猫又", "狛犬", "霊宝つくもがみ", "夜行さん", "座敷わらし", "雪娘", "英傑の塔", "アイギス神殿"
        , "妖狸", "冬姫【白面金毛】"
    ]
    , "仙人": [ "大華の神話", "開天の神話", "仙人", "仙猿", "真人", "邪仙", "飛電客" ]
    , "オーク": []
    , "ゴブリン": [ "ゴブリン博士", "メカゴブリンクイーン" ]
    , "鳥人": [ "スカイウォリアー", "スカイシューター", "スカイヒーラー", "南の守護鳥", "不死鳥娘【モンスター娘TD】" ]
    , "魚人": [ "シーソルジャー", "シャークウォリアー", "シービショップ", "オルカレクス" ]
    , "神": [
        "銀腕の神話", "暁光の神話", "大華の神話", "開天の神話", "儀仗軍神", "天尊", "カオスルーラー", "コロッサス", "憤怒の海神", "夜の魔女"
        , "黒鴉の神話", "儀式魔術師", "魔界総帥", "時の俯瞰者", "豊穣神", "悪疫の王", "炉の亜神", "永き夢の亜神", "月の神"
    ]
    , "天界人": [ "ウェポンマスター", "神獣騎士" ]
    , "冥界人": [ "ハデスソルジャー", "冥府の騎士【円卓】", "ハデスシャーマン" ]
    , "サキュバス": [ "サキュバス" ]
    , "半神": []
    , "ねんどろいど": [ "ねんどろいどプリンセス" ]
};
target.count.others = {
    "英傑": [
        "魔竜騎士", "バーバリアンクイーン", "古代魔導機兵", "銀腕の神話", "ウェポンマスター", "魔導生命体", "アヤカシの王", "黎明の翼"
        , "トゥルーブラッド", "暁光の神話", "神獣騎士", "王国軍初代副司令", "大華の神話", "マギステルミリトゥム", "光槍ビルガの継承者", "祖竜"
        , "開天の神話", "魔境の主", "侍従の英雄譚", "キングダムガード"
        , "占星術師", "チェイスハンター", "ジオマンサー", "転生魔導士", "ファラオ", "ピューティアー", "カースウィスパラー", "未踏海域の覇者", "ギアマンサー"
        , "悲哀の騎士", "黒鴉の神話", "時間の操者"
        , "異世界戦士", "盤上の支配者", "エレメンタルハーミット"
    ]
    , "ちび": []
    , "弓兵": [ "ボウライダー", "チェイスハンター", "悲哀の騎士", "アーチャー", "レンジャー", "スカイシューター", "百腕娘【モンスター娘TD】" ]
    , "魔術師": [
        "魔導生命体"
        , "魔法剣士", "メイジアーマー", "夜の魔女"
        , "天才魔道士/燈火の魔女", "セイルーンの巫女/拳の聖女", "孤高の魔剣士/魔法剣の使い手"
        , "転生魔導士", "カースウィスパラー", "黒鴉の神話", "時間の操者"
        , "メイジ", "ウィッチ", "ビショップ", "サモナー", "ネクロマンサー", "クロノウィッチ", "呪術使い", "エンチャンター", "デモンサモナー", "異界召喚士"
        , "シービショップ", "儀式魔術師", "ドラゴンメイジ", "魔界総帥", "リッチ【闇の軍勢】", "時の俯瞰者", "豊穣神", "呪命師", "悪疫の王"
        , "妖精術師【冥府館】"
        , "アイドル召喚士"
        , "魔法使い【ランス】", "ホーネット派代表【ランス】"
        , "蠅王娘【モンスター娘TD】"
        , "白蛇の魔道士/氷岩のゴーレム使い"
        , "エレメンタルハーミット"
    ]
    , "アンデッド": [
        "トゥルーブラッド", "ヴァンパイアプリンセス", "イモータルプリンセス", "ヴァンパイアロード", "キョンシー"
        , "チェインソン男"
        , "ネクロマンサー", "リッチ【闇の軍勢】"
    ]
    , "機械": [
        "古代魔導機兵", "くぐつ使い", "サッパー", "スチームナイト", "アクアナイト", "オートマタ", "隧道掘削兵"
        , "チェインソン男"
        , "ギアマンサー", "発明家", "メカゴブリンクイーン", "オルカレクス"
        , "ロケットトルーパー", "エアセイラー", "古代戦艦管理頭脳"
    ]
    , "騎兵": [ "魔竜騎士", "神獣騎士", "ワルキューレ", "ペガサスライダー", "ドラゴンライダー", "ボウライダー", "グリフィンライダー", "ドラグーン" ]
    , "重装": [
        "マギステルミリトゥム", "キングダムガード"
        , "ヘビーアーマー", "メイジアーマー", "ロイヤルガード", "重装砲兵", "グランドナイト", "スチームナイト", "アクアナイト", "シールダー"
        , "白の帝国城", "王城"
        , "メカゴブリンクイーン"
    ]
    , "聖職者": [
        "神官戦士", "セイルーンの巫女/拳の聖女"
        , "ヒーラー", "ビショップ", "ダークプリースト" , "ルーンアコライト", "シービショップ"
        , "スカイヒーラー"
    ]
    , "魔界": [
        "魔竜騎士", "祖竜"
        , "イビルプリンセス", "中級竜兵", "ドラゴンプリンセス", "魔神", "ダークストーカー", "グラディエーター", "魔王親衛隊", "デーモンロード", "デモンルーン"
        , "ダーク王子"
        , "デモンリドゥ", "カオスルーラー"
        , "小悪魔アイドル"
        , "グレーターデーモン", "ガオレオン", "デーモンシェフ", "グラシャラボラス"
        , "ドラゴンシャーマン", "魔物使い", "ダークプリースト", "デモンサモナー", "デモンシャーマン", "異界召喚士", "魔界総帥", "政務官【闇の軍勢】"
        , "ゴブリン博士", "メカゴブリンクイーン"
        /*, "騎士【七つの大罪】"*/
    ]
    , "ドラゴン": [
        "竜人", "魔竜騎士", "祖竜", "中級竜兵", "ドラゴンプリンセス", "ドラゴンライダー", "東の守護龍"
        , "ドラゴンシャーマン", "ドラグーン", "ドラゴンメイジ"
        , "ドラゴンノーブル"
        , "黒竜娘【モンスター娘TD】"
    ]
    , "砲兵": [ "重装砲兵", "白の帝国城", "ギアマンサー", "砲術士", "ドラグーン" ]
    , "銃士": [ "セーラー", "衛士", "パイレーツ", "マーチャント", "モンスタースレイヤー", "ガンスリンガー", "ポーター", "異世界戦士", "ロケットトルーパー" ]
    , "飛行": [
        "開天の神話", "ペガサスライダー", "仙人", "仙猿", "天狗", "雷公", "風伯", "グリフィンライダー", "真人", "邪仙", "一目の竜", "天尊"
        , "グラシャラボラス"
        , "妖精【七つの大罪】"
        , "ロケットトルーパー", "スカイウォリアー", "スカイシューター", "スカイヒーラー", "エアセイラー", "古代戦艦管理頭脳", "ドラゴンノーブル", "南の守護鳥"
        , "不死鳥娘【モンスター娘TD】"
    ]
    , "深海": [
        "未踏海域の覇者"
        , "セーラー", "シーソルジャー", "アクアナイト", "シャークウォリアー", "憤怒の海神", "混沌霊使い【魔蛸】"
        , "パイレーツ", "シービショップ", "オルカレクス"
    ]
    , "高貴": [
        "王子", "バーバリアンクイーン", "銀腕の神話", "トゥルーブラッド"
        , "プリンセス", "ヴァンパイアプリンセス", "イモータルプリンセス", "イビルプリンセス", "ドラゴンプリンセス"
        , "エンプレス", "儀仗軍神", "女王子", "ダーク王子", "初代皇帝"
        , "王国民的アイドル"
        , "皇帝"
        , "ねんどろいどプリンセス"
        //, "王太子"
        , "セイルーンの巫女/拳の聖女"
        , "ファラオ", "ロード", "儀式魔術師"/*, "魔界総帥"*/
        //, "王女【七つの大罪】"
        , "ドラゴンノーブル"
    ]
    , "ジャイアント": [ "コロッサス" ]
    , "＜七つの大罪＞": [ "騎士【七つの大罪】", "盗賊【七つの大罪】", "巨人【七つの大罪】", "妖精【七つの大罪】" ]
    /*
    , "竜族": [
        "竜人", "魔竜騎士", "中級竜兵", "ドラゴンプリンセス", "ドラゴンライダー"
        , "ドラゴンシャーマン", "ドラグーン", "ドラゴンメイジ"
    ]
    */
    , "全プリンセス系": [ "プリンセス", "ヴァンパイアプリンセス", "イモータルプリンセス", "イビルプリンセス", "ドラゴンプリンセス", "ねんどろいどプリンセス" ]
    , "GG持ち": [ "バンデット", "シーフ" ]
    , "コスト回復スキル持ち": [ "王国軍初代副司令", "ソルジャー", "シーソルジャー", "マーチャント" ]
    , "HP回復不可": [
        "古代魔導機兵"
        , "ヴァンパイアプリンセス", "イモータルプリンセス", "イビルプリンセス", "くぐつ使い", "キョンシー", "デモンルーン", "オートマタ", "隧道掘削兵"
        , "小悪魔アイドル"
        , "チェインソン男"
        , "デモンシャーマン", "リッチ【闇の軍勢】"
        , "物語を渡る者【GBM】"
        , "エアセイラー"
    ]
    , "魔界適応": [
        "魔竜騎士", "黎明の翼", "神獣騎士", "祖竜"
        , "イビルプリンセス", "中級竜兵", "ドラゴンプリンセス", "魔神", "ダークストーカー", "グラディエーター", "魔王親衛隊", "デーモンロード", "デモンルーン"
        , "ダーク王子"
        , "デモンリドゥ", "カオスルーラー"
        , "小悪魔アイドル"
        , "グレーターデーモン", "ガオレオン", "デーモンシェフ", "グラシャラボラス"
        , "ドラゴンシャーマン", "魔物使い", "ダークプリースト", "デモンサモナー", "デモンシャーマン", "異界召喚士", "魔界総帥", "政務官【闇の軍勢】"
        , "ゴブリン博士", "メカゴブリンクイーン"
        , "騎士【七つの大罪】"
    ]
    , "深海適応": [
        "未踏海域の覇者"
        , "シーソルジャー", "アクアナイト", "シャークウォリアー", "憤怒の海神", "混沌霊使い【魔蛸】"
        /*, "パイレーツ"*/, "シービショップ", "オルカレクス"
    ]
    , "天界適応": [
        "銀腕の神話", "ウェポンマスター", "黎明の翼", "暁光の神話", "神獣騎士", "エンジェル", "スカイウォリアー", "スカイシューター", "スカイヒーラー"
    ]
};
// key(属性等) ⇒ element(others)
target.link = {
    race: {
        "竜人": [ "魔界", "ドラゴン", "魔界適応" ]
        , "ヴァンパイア": [ "アンデッド" ]
        , "デーモン系": [ "魔界", "魔界適応" ]
        , "天使": [ "天界適応" ]
        //, "仙人": [ "飛行" ]
        , "オーク": [ "魔界", "魔界適応" ]
        , "鳥人": [ "飛行", "天界適応" ]
        , "魚人": [ "深海", "深海適応" ]
    }
    , others: {
        "魔界": [ "魔界適応" ]
        , "深海": [ "深海適応" ]
        , "深海適応": [ "深海" ]
    }
};

target.CreateForm = () => {
    const targetInfo = document.getElementById("target-info");
    targetInfo.innerHTML = "";
    const newTable = document.createElement("table");
    newTable.setAttribute("border", "1");
    
    let newTr, newTh, newTd, newForm, newLabel, newRadio, newCheckbox;
    
    const CreateRadioForm = (category, tr, colspan) => {
        newTh = document.createElement("th");
        newTh.colSpan = colspan;
        newTh.innerHTML = target.word[category];
        tr.appendChild(newTh);
        newTd = document.createElement("td");
        newForm = document.createElement("form");
        newForm.id = `target-info_${category}`;
        
        CreateRadio(newForm, "すべて含める");
        CreateRadio(newForm, "すべて含めない");
        newForm.appendChild(document.createElement("br"));
        _.forEach(target[category], value => CreateRadio(newForm, value, category));
        newForm.options[1].checked = true;
        newTd.appendChild(newForm);
        tr.appendChild(newTd);
        newTable.appendChild(tr);
    }
    const CreateRadio = (form, value, category) => {
        newLabel = document.createElement("label");
        newRadio = document.createElement("input");
        newRadio.type = "radio";
        newRadio.name = "options";
        newRadio.value = value;
        newLabel.appendChild(newRadio);
        newLabel.innerHTML += value;
        form.appendChild(newLabel);
    }

    // all
    newTr = document.createElement("tr");
    newTh = document.createElement("th");
    newTh.colSpan = "2";
    newTh.innerHTML = "全部";
    newTr.appendChild(newTh);
    newTd = document.createElement("td");
    _.forEach({ "ON": true, "OFF": false }, (checked, text) => {
        const newButton = document.createElement("button");
        newButton.type = "button";
        newButton.setAttribute("onclick", `target.ToggleAll(${checked})`);
        newButton.innerHTML = text;
        newTd.appendChild(newButton);
    });
    
    newLabel = document.createElement("label");
    newLabel.className = "tooltip-b";
    newLabel.setAttribute(
        "data-tippy-content"
        , "ONにすると、対応しているものを自動的にチェックする<br>\
        ONにしたままの方が検索漏れが減る(と思う)<br>\
        &nbsp;&nbsp;対象：クラス、一部属性"
    );
    newCheckbox = document.createElement("input");
    newCheckbox.type = "checkbox";
    newCheckbox.id = "auto-check";
    newCheckbox.setAttribute("checked", "true");
    newLabel.appendChild(newCheckbox);
    newLabel.innerHTML += "オートチェックを有効化";
    newTd.appendChild(newLabel);
    
    newTr.appendChild(newTd);
    newTable.appendChild(newTr);
    
    // rarity
    newTr = document.createElement("tr");
    CreateRadioForm("rarity", newTr, "2");
    
    // depType
    newTr = document.createElement("tr");
    CreateRadioForm("depType", newTr, "2");
    
    // class
    newTr = document.createElement("tr");
    newTh = document.createElement("th");
    newTh.colSpan = "2";
    newTh.innerHTML = target.word["cl"];
    newTr.appendChild(newTh);
    newTd = document.createElement("td");
    const newSelect = document.createElement("select");
    newSelect.id = "target-info_cl";
    newSelect.setAttribute("onchange", "target.AutoCheck('cl', this.value)");
    newTd.appendChild(newSelect);
    newTr.appendChild(newTd);
    newTable.appendChild(newTr);
    
    // sex
    newTr = document.createElement("tr");
    CreateRadioForm("sex", newTr, "2");
    
    // attr
    newTr = document.createElement("tr");
    newTh = document.createElement("th");
    newTh.rowSpan = "4";
    newTh.innerHTML = "属性等";
    newTr.appendChild(newTh);
    // home
    CreateRadioForm("home", newTr, "1");
    // race
    newTr = document.createElement("tr");
    CreateRadioForm("race", newTr, "1");
    // season
    newTr = document.createElement("tr");
    CreateRadioForm("season", newTr, "1");
    // others
    newTr = document.createElement("tr");
    newTh = document.createElement("th");
    newTh.innerHTML = target.word["others"];
    newTr.appendChild(newTh);
    newTd = document.createElement("td");
    _.forEach({ "全部ON": true, "全部OFF": false }, (checked, text) => {
        const newButton = document.createElement("button");
        newButton.type = "button";
        newButton.setAttribute("onclick", `target.ToggleAllOthers(${checked})`);
        newButton.innerHTML = text;
        newTd.appendChild(newButton);
    });
    newForm = document.createElement("form");
    newForm.id = "target-info_others";
    _.forEach(target.others, value => {
        newLabel = document.createElement("label");
        newCheckbox = document.createElement("input");
        newCheckbox.type = "checkbox";
        newCheckbox.name = "options";
        newCheckbox.value = value;
        newLabel.appendChild(newCheckbox);
        newLabel.innerHTML += value;
        newForm.appendChild(newLabel);
    });
    newTd.appendChild(newForm);
    newTr.appendChild(newTd);
    newTable.appendChild(newTr);
    
    // year
    newTr = document.createElement("tr");
    CreateRadioForm("year", newTr, "2");
    targetInfo.appendChild(newTable);
    
    const newButton = document.createElement("button");
    newButton.type = "button";
    newButton.id = "search";
    newButton.setAttribute("onclick", "target.Search()");
    newButton.innerHTML = "検索";
    targetInfo.appendChild(newButton);
    
    const depTypeForm = document.getElementById("target-info_depType");
    _.forEach(depTypeForm.options, option =>
        option.addEventListener("change", target.CreateClassOptions)
    );
    _.forEach(target.link, (obj, cat) => {
        const form = document.getElementById(`target-info_${cat}`);
        _.forEach(form.options, opt => {
            if(opt.value in obj)
                opt.addEventListener("change", () => {
                    if(opt.checked) target.AutoCheck(cat, opt.value);
                });
        });
    });
    
    target.CreateClassOptions();
}

// 一括ON/OFF
target.ToggleAll = _checked => {
    const index = _checked ? 0 : 1;
    const categories = [ "rarity", "depType", "sex", "home", "race", "season", "year" ];
    _.forEach(categories, category => {
        const form = document.getElementById(`target-info_${category}`);
        form.options[index].checked = true;
    });
    target.CreateClassOptions();
    const clSelect = document.getElementById("target-info_cl");
    clSelect.children[index].selected = true;
    target.ToggleAllOthers(_checked);
}

// クラスの選択肢生成
target.CreateClassOptions = () => {
    const clSelect = document.getElementById("target-info_cl");
    const depTypeForm = document.getElementById("target-info_depType");
    const depType = depTypeForm.options.value;
    const CreateOption = (value, selected) => {
        const match = selected === value;
        const newOption = document.createElement("option");
        newOption.value = value;
        newOption.selected = match;
        newOption.innerHTML = value;
        if(value !== "すべて含める" && value !== "すべて含めない") newOption.innerHTML += "系";
        clSelect.add(newOption);
        return match;
    }
    const selected = clSelect.value;
    clSelect.innerHTML = "";
    if(depType === "すべて含めない") {
        CreateOption("すべて含める", "すべて含める");
        CreateOption("すべて含めない", "すべて含めない");
        clSelect.disabled = true;
        return;
    }
    clSelect.disabled = false;
    let include = false;
    include |= CreateOption("すべて含める", selected);
    include |= CreateOption("すべて含めない", selected);
    const clCategory = [ "prince", "hero", "normal", "collabo" ];
    if(depType === "すべて含める") {
        _.forEach(clCategory, cat => {
            _.forEach(target.cl["近接"][cat], cl => include |= CreateOption(cl, selected));
            _.forEach(target.cl["遠距離"][cat], cl => include |= CreateOption(cl, selected));
            _.forEach(target.cl["遠近距離"][cat], cl => include |= CreateOption(cl, selected));
        });
    } else if(depType === "遠近距離") {
        _.forEach(clCategory, cat =>
            _.forEach(target.cl["遠近距離"][cat], cl => include |= CreateOption(cl, selected))
        );
    } else {
        _.forEach(clCategory, cat => {
            _.forEach(target.cl[depType][cat], cl => include |= CreateOption(cl, selected));
            _.forEach(target.count.depType[depType][cat], cl => include |= CreateOption(cl, selected));
        });
    }
    if(!include) clSelect.value = "すべて含めない";
}

// クラス選択時、他のオプションを自動的にON
target.AutoCheck = (_category, _selected) => {
    const valid = document.getElementById("auto-check");
    if(!valid.checked) return;
    
    if(_category === "cl") {
        /*
        // depType
        const depType = _.findKey(target.cl, depType => _.includes(_.flatten(_.toArray(depType)), _selected));
        if(depType === undefined) return;
        const depTypeForm = document.getElementById("target-info_depType");
        _.forEach(depTypeForm.options, opt => { opt.checked = opt.value === depType; });
        */
        
        // sex, home, race
        _.forEach([ "sex", "home", "race" ], category => {
            const key = _.findKey(target.count[category], arr => _.includes(arr, _selected));
            if(key === undefined) return;
            const form = document.getElementById(`target-info_${category}`);
            _.forEach(form.options, opt => { opt.checked = opt.value === key; });
        });
        
        // others
        const othersForm = document.getElementById("target-info_others");
        _.forEach(othersForm.options, opt => {
            if(_.includes(target.count.others[opt.value], _selected)) opt.checked = true;
        });
    } else {
        const othersForm = document.getElementById("target-info_others");
        _.forEach(othersForm.options, opt => {
            if(_.includes(target.link[_category][_selected], opt.value)) opt.checked = true;
        });
    }
}

// 属性等その他一括ON/OFF
target.ToggleAllOthers = _checked => {
    const othersForm = document.getElementById("target-info_others");
    _.forEach(othersForm.options, option => { option.checked = _checked; });
}

// 検索実行
target.Search = () => {
    const categories = [ "rarity", "depType", "sex", "home", "race", "season", "year" ];
    _.forEach(categories, category => {
        const form = document.getElementById(`target-info_${category}`);
        target.selected[category] = form.options.value;
    });
    const clSelect = document.getElementById("target-info_cl")
    target.selected.cl = clSelect.value;
    if(target.selected.cl === "すべて含める") {
        target.selected.cl = _.map(clSelect.children, option => option.value);
        _.drop(target.selected.cl, 2);
    } else if(target.selected.depType === "遠近距離") {
        const depTypeCount = _.findKey(target.count.depType, depType =>
            _.includes(_.flatten(_.toArray(depType)), target.selected.cl)
        );
        if(depTypeCount !== undefined)
            target.selected.depType = [ "遠近距離", depTypeCount ];
    }
    const othersForm = document.getElementById("target-info_others");
    target.selected.others = [];
    _.forEach(othersForm.options, option => {
        if(option.checked) target.selected.others.push(option.value);
    });
    
    const filters = document.getElementById("filters");
    const tables = document.getElementById("tables");
    filters.classList.remove("is-unshown");
    tables.classList.remove("is-unshown");
    table.CreateTable();
}

// 絞り込み用
target.IsMatch = _target => {
    let match = false;
    if(Array.isArray(_target)) {
        _.forEach(_target, and => {
            let matchSub = true;
            _.forEach(and, (arr, cat) => {
                if(target.selected[cat] === "すべて含める") {
                    matchSub &= true;
                    return;
                }
                if(target.selected[cat] === "すべて含めない") {
                    matchSub = false;
                    return false;
                }
                if(Array.isArray(target.selected[cat]))
                    matchSub &= _.reduce(target.selected[cat], (result, selected) =>
                        result |= _.includes(arr, selected)
                    , false);
                else matchSub &= _.includes(arr, target.selected[cat]);
            });
            match |= matchSub;
            if(match) return false;
        });
    } else {
        match = true;
        _.forEach(_target, (arr, cat) => {
            if(target.selected[cat] === "すべて含める") {
                match &= true;
                return;
            }
            if(target.selected[cat] === "すべて含めない") {
                match = false;
                return false;
            }
            if(Array.isArray(target.selected[cat]))
                match &= _.reduce(target.selected[cat], (result, selected) =>
                    result |= _.includes(arr, selected)
                , false);
            else match &= _.includes(arr, target.selected[cat]);
        });
    }
    return match;
}