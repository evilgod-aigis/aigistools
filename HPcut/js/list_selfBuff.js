lists.selfBuff = {};

// 初動短縮リスト
lists.selfBuff.rWT = [
    { id: null, buffer: "ナイトアサシン", value: 50 }
    , { id: null, buffer: "エンフォーサー", value: 50 }
    , { id: null, buffer: "アベンジャー系", value: 80 }
    , { id: null, buffer: "アベンジャー", value: 80 }
    , { id: null, buffer: "デスアベンジャー", value: 80 }
    , { id: null, buffer: "ヴェンデッタ", value: 80 }
    , { id: null, buffer: "リヴェンジェンス", value: 80 }
    , { id: null, buffer: "戦術科教師ケイティ", value: 50 }
    , { id: null, buffer: "休息の教官ケイティ", value: 80 }
    , { id: null, buffer: "聖夜の天才戦術家ヘレナ", value: 20 }
    , { id: null, buffer: "雷光の魔剣士タラニア", value: 50 }
    , { id: null, buffer: "主天使セフィーレ", value: 60 }
    , { id: null, buffer: "堕天系お掃除当番クロエ", value: 50 }
    , { id: null, buffer: "帝国機甲士クリスタ", value: 30 }
    , { id: null, buffer: "聖闇の送り主グレーテル", value: 25 }
    , { id: null, buffer: "封機の剣士エレカ", value: 60 }
    , { id: null, buffer: "普賢", value: 40 }
    , { id: null, buffer: "信仰の槍士コルム", value: 50 }
    , { id: null, buffer: "帝国魔術師イルマ", value: 50 }
    , { id: null, buffer: "炎のサンタ召喚士ソラノ", value: 40 }
    , { id: null, buffer: "甘美な踊り子マーニー", value: 60 }
    , { id: null, buffer: "恋の応援団シャルキー", value: 70 }
    , { id: null, buffer: "お祭り夕涼みココロ", value: 50 }
    , { id: null, buffer: "氷霊応援団ユキヒメ", value: 60 }
    , { id: null, buffer: "妖狸スズネ", value: 20 }
    , { id: null, buffer: "筆頭飛行士オヴェリー", value: 40 }
];

// 再動短縮リスト
lists.selfBuff.rCT = [
    { id: null, buffer: "ギガントハンマー", value: 45 }
    , { id: null, buffer: "ダイショーグン", value: 45 }
    , { id: null, buffer: "修羅", value: 45 }
    , { id: null, buffer: "ボウライダーマスター", value: 45 }
    , { id: null, buffer: "デッドリーエッジ", value: 40 }
    , { id: null, buffer: "剣神", value: 50 }
    , { id: null, buffer: "天魔天狗", value: 45 }
    , { id: null, buffer: "ラピッドシューター", value: 45 }
    , { id: null, buffer: "ネプチューン", value: 45 }
    , { id: null, buffer: "悟得陰陽頭", value: 45 }
    , { id: null, buffer: "クロノマスター", value: 45 }
    , { id: null, buffer: "ヘビートリガー", value: 45 }
    , { id: null, buffer: "マヨヒガわらし", value: 45 }
    , { id: null, buffer: "聖女イリス", value: 40 }
];

// スキル時間延長リスト
lists.selfBuff.skillExtend = [
    { id: null, buffer: "イモータルオリジン", value: 30 }
    , { id: null, buffer: "ファフニール", value: 20 }
    , { id: null, buffer: "ダイショーグン", value: 30 }
    , { id: null, buffer: "ペガサスマスター", value: 70 }
    , { id: null, buffer: "アズライール", value: -20 }
    , { id: null, buffer: "ドールマスター", value: 30 }
    , { id: null, buffer: "アドミラル", value: 30 }
    , { id: null, buffer: "神仙", value: 50 }
    , { id: null, buffer: "天魔天狗", value: 25 }
    , { id: null, buffer: "オンスロート", value: 30 }
    , { id: null, buffer: "アビスレイダー", value: 30 }
    , { id: null, buffer: "ソーサレス", value: 30 }
    , { id: null, buffer: "ロードオブヘルメス", value: 30 }
    , { id: null, buffer: "ヘビートリガー", value: 30 }
    , { id: null, buffer: "魔導鎧娘アルマ", value: 20 }
    , { id: null, buffer: "伏龍の軍師アイシャ", value: 20 }
    , { id: null, buffer: "水霊使いセノーテ", value: 15 }
];

// 硬直短縮リスト
lists.selfBuff.haste = [
    { id: null, buffer: "白羽の休日ナナリー", value: 25 }
    , { id: null, buffer: "鉄泉の守護者レアン", value: 40 }
    , { id: null, buffer: "晴着の看板娘ジュノン", value: 40 }
    //, { id: null, buffer: "水龍騎士スイレン", value: 50 }
    //, { id: null, buffer: "屍骸道士ランファ", value: 60 }
    , { id: null, buffer: "絆鎖の救命師シアーシャ", value: 40 }
];

// 硬直短縮(固定値化)リスト
lists.selfBuff.hasteFixed = [
    { id: null, buffer: "レギンレイヴ", value: 26, change: "cooldown" }
    , { id: null, buffer: "エンフォーサー", value: 21, change: "cooldown" }
    , { id: null, buffer: "忍神", value: 5, change: "cooldown" }
    , { id: null, buffer: "ヴェンデッタ", value: 26, change: "cooldown" }
    , { id: null, buffer: "ゴッドウォリアー", value: 11, change: "cooldown" }
    , { id: null, buffer: "ボウライダーマスター", value: 7, change: "remain" }
    , { id: null, buffer: "ボウストームキャバリア", value: 26, change: "cooldown" }
    , { id: null, buffer: "剣神", value: 26, change: "cooldown" }
    , { id: null, buffer: "オークブレイバー", value: 8, change: "remain" }
    , { id: null, buffer: "シナツヒコ", value: 31, change: "cooldown" }
    , { id: null, buffer: "お犬さま", value: 26, change: "cooldown" }
    , { id: null, buffer: "アクアナイト", value: 25, change: "cooldown" }
    //, { id: null, buffer: "サベージジェネラル", value: null, change: "cooldown" }
    , { id: null, buffer: "ラピッドシューター", value: 26, change: "cooldown" }
    , { id: null, buffer: "メイジデストラクト", value: 77, change: "cooldown" }
    , { id: null, buffer: "極神竜巫女", value: 81, change: "cooldown" }
    , { id: null, buffer: "グランドサモナー", value: 101, change: "cooldown" }
    , { id: null, buffer: "ハイキャノンマスター", value: 71, change: "cooldown" }
    , { id: null, buffer: "超重巨砲士", value: 121, change: "cooldown" }
    , { id: null, buffer: "宮廷道化師", value: 26, change: "cooldown" }
    //, { id: null, buffer: "エルダードラゴンメイガス", value: null, change: "cooldown" }   //-20%っぽい
];

// 鈍化(マップ)軽減リスト
lists.selfBuff.redMapEff = [
    { id: null, buffer: "セーラー系", map: "深海", value: 50 }
    , { id: null, buffer: "ちびセーラー", map: "深海", value: 50 }
    , { id: null, buffer: "ちびセーラーエリート", map: "深海", value: 50 }
    , { id: null, buffer: "セーラー", map: "深海", value: 50 }
    , { id: null, buffer: "セーラーチーフ", map: "深海", value: 50 }
    , { id: null, buffer: "セーラーエリート", map: "深海", value: 50 }
    , { id: null, buffer: "アドミラル", map: "深海", value: 50 }
    , { id: null, buffer: "ドレッドノート", map: "深海", value: 50 }
    , { id: null, buffer: "パイレーツ系", map: "深海", value: 50 }
    , { id: null, buffer: "下級パイレーツ", map: "深海", value: 50 }
    , { id: null, buffer: "ちびパイレーツ", map: "深海", value: 50 }
    , { id: null, buffer: "ちびキングオブパイレーツ", map: "深海", value: 50 }
    , { id: null, buffer: "パイレーツ", map: "深海", value: 50 }
    , { id: null, buffer: "キャプテン", map: "深海", value: 50 }
    , { id: null, buffer: "キングオブパイレーツ", map: "深海", value: 50 }
    , { id: null, buffer: "ネプチューン", map: "深海", value: 50 }
    , { id: null, buffer: "エル・ドラゴ", map: "深海", value: 50 }
    //, { id: null, buffer: "水遁遊戯ハツネ", skill: "覚醒", map: "深海", value: 50 }
    , { id: null, buffer: "夏陽海仙 竜吉公主", map: "深海", value: 50 }
];