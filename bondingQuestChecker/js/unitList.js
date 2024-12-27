const unitList = [
    // 2013
    { id: 0x0000, implDate: "2013/11/26", implDate_bq: "2018/04/19", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ヘビーアーマー", name: "ディーナ", modifier: "怪力少女" }
    , { id: 0x0001, implDate: "2013/11/26", implDate_bq: "2017/10/26", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ワルキューレ", name: "クリッサ", modifier: "一角獣騎士" }
    , { id: 0x0002, implDate: "2013/11/26", implDate_bq: "2016/02/25", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ローグ", name: "ベルナ", modifier: "盗賊" }
    , { id: 0x0003, implDate: "2013/11/26", implDate_bq: "2020/11/19", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "プリンセス", name: "シビラ" }
    , { id: 0x0004, implDate: "2013/11/26", implDate_bq: "2016/08/04", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "アーチャー", name: "ナナリー", modifier: "白き射手" }
    , { id: 0x0005, implDate: "2013/11/26", implDate_bq: "2016/02/25", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ヒーラー", name: "イリス", modifier: "聖女" }
    , { id: 0x0006, implDate: "2013/11/26", implDate_bq: "2016/03/10", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ウィッチ", name: "デスピア", modifier: "魔女" }
    , { id: 0x0007, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ソルジャー", name: "ジェローム", modifier: "用兵家", male: 1 }
    , { id: 0x0008, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ワルキューレ", name: "テティス", modifier: "白百合騎士" }
    , { id: 0x0009, implDate: "2013/11/26", implDate_bq: "2017/04/13", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ワルキューレ", name: "ダリア", modifier: "黒槍騎士" }
    , { id: 0x000a, implDate: "2013/11/26", implDate_bq: "2016/04/14", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ローグ", name: "シプリア", modifier: "盗賊" }
    , { id: 0x000b, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "プリンセス", name: "リリア" }
    , { id: 0x000c, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "プリンセス", name: "シェリー" }
    , { id: 0x000d, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "アーチャー", name: "バシラ", modifier: "神速の射手" }
    , { id: 0x000e, implDate: "2013/11/26", implDate_bq: "2016/02/25", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ヒーラー", name: "カミラ", modifier: "癒し手" }
    , { id: 0x000f, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ウィッチ", name: "フィグネリア", modifier: "魔女" }
    , { id: 0x0010, implDate: "2013/11/26", implDate_bq: "2016/06/09", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ウィッチ", name: "アデル", modifier: "魔女" }
    , { id: 0x0011, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "ソルジャー", name: "ユリアン", modifier: "兵士長", male: 1 }
    , { id: 0x0012, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "ヘビーアーマー", name: "ギャレット", modifier: "破壊者", male: 1 }
    , { id: 0x0013, implDate: "2013/11/26", implDate_bq: "2016/02/25", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "ヘビーアーマー", name: "ベルニス", modifier: "大盾の乙女" }
    , { id: 0x0014, implDate: "2013/11/26", implDate_bq: "2017/06/29", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "ワルキューレ", name: "キャリー", modifier: "槍騎兵" }
    , { id: 0x0015, implDate: "2013/11/26", implDate_bq: "2017/05/25", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "ローグ", name: "キュテリ", modifier: "怪盗" }
    , { id: 0x0016, implDate: "2013/11/26", implDate_bq: "2021/03/18", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "ローグ", name: "ベティ", modifier: "盗賊" }
    , { id: 0x0017, implDate: "2013/11/26", implDate_bq: "2016/02/25", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "プリンセス", name: "テミス" }
    , { id: 0x0018, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "バンデット", name: "コンラッド", modifier: "山賊王", male: 1 }
    , { id: 0x0019, implDate: "2013/11/26", implDate_bq: "2019/09/26", obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "アーチャー", name: "クレア", modifier: "鋼鉄弓" }
    , { id: 0x001a, implDate: "2013/11/26", implDate_bq: "2018/03/15", obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "アーチャー", name: "ベラ", modifier: "狩人" }
    , { id: 0x001b, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "メイジ", name: "バルバストラフ", modifier: "賢者", male: 1 }
    , { id: 0x001c, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "メイジ", name: "サイラス", modifier: "黒衣の", male: 1 }
    , { id: 0x001d, implDate: "2013/11/26", implDate_bq: "2016/05/12", obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "ヒーラー", name: "イーリス", modifier: "癒し手" }
    , { id: 0x001e, implDate: "2013/11/26", implDate_bq: "2024/11/14", obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "ヒーラー", name: "フェドラ", modifier: "狂聖女" }
    , { id: 0x001f, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ソルジャー", name: "クレイブ", modifier: "傭兵", male: 1 }
    , { id: 0x0020, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ソルジャー", name: "フィリス", modifier: "新緑の兵士" }
    , { id: 0x0021, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ヘビーアーマー", name: "ベルナール", modifier: "金色の盾", male: 1 }
    , { id: 0x0022, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ヘビーアーマー", name: "レアン", modifier: "鋼鉄の女" }
    , { id: 0x0023, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ワルキューレ", name: "エレイン", modifier: "槍騎兵" }
    , { id: 0x0024, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ワルキューレ", name: "ミーシャ", modifier: "見習い騎兵" }
    , { id: 0x0025, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ローグ", name: "セシリー", modifier: "暗殺者" }
    , { id: 0x0026, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ローグ", name: "ハリッサ", modifier: "女盗賊" }
    , { id: 0x0027, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "バンデット", name: "モーティマ", modifier: "山賊頭", male: 1 }
    , { id: 0x0028, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "バンデット", name: "フューネス", modifier: "狂戦士", male: 1 }
    , { id: 0x0029, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "アーチャー", name: "ソーマ", modifier: "弓兵" }
    , { id: 0x002a, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "アーチャー", name: "ダニエラ", modifier: "弓兵" }
    , { id: 0x002b, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "メイジ", name: "ヴァレリー", modifier: "魔導師", male: 1 }
    , { id: 0x002c, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "ヒーラー", name: "アリサ", modifier: "癒し手" }
    , { id: 0x002d, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "ヒーラー", name: "ドルカ", modifier: "癒し手" }
    , { id: 0x002e, implDate: "2013/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "ウィッチ", name: "カリオペ", modifier: "魔女" }
    , { id: 0x002f, implDate: "2013/11/26", implDate_bq: "2016/03/10", obtain: [ "ev", "drop" ], rarity: "g" , depType: "rear", class: "ウィッチ", name: "クロリス", modifier: "白き魔女" }
    , { id: 0x0030, implDate: "2013/11/28", implDate_bq: "2016/03/10", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "アーチャー", name: "ヴィクトリア", modifier: "魔狩人" }
    , { id: 0x0031, implDate: "2013/12/03", implDate_bq: "2017/01/19", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "メイジ", name: "ガラニア", modifier: "神秘の探究者" }
    , { id: 0x0032, implDate: "2013/12/03", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "メイジ", name: "メーリス", modifier: "見習い魔術師" }
    , { id: 0x0033, implDate: "2013/12/17", implDate_bq: "2017/08/10", obtain: [ "ev", "star" ], rarity: "g" , depType: "van" , class: "ソルジャー", name: "アリア", modifier: "副官" }
    , { id: 0x0034, implDate: "2013/12/17", implDate_bq: "2016/12/08", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "バンデット", name: "ライラ", modifier: "女山賊" }
    , { id: 0x0035, implDate: "2013/12/17", implDate_bq: "2016/03/10", obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "ウィッチ", name: "ベリンダ", modifier: "白き魔女" }
    , { id: 0x0036, implDate: "2013/12/20", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "ジェリウス", modifier: "光の盾", male: 1 }
    , { id: 0x0037, implDate: "2013/12/20", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "アーチャー", name: "ストレイ", modifier: "狩人", male: 1 }
    , { id: 0x0038, implDate: "2013/12/27", implDate_bq: "2018/06/14", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "バンデット", name: "セリア", modifier: "聖霊の友" }
    , { id: 0x0039, implDate: "2013/12/27", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "ヒーラー", name: "クリストファー", modifier: "神官", male: 1 }
    
    // 2014
    , { id: 0x003a, implDate: "2014/01/06", implDate_bq: "2018/06/14", obtain: [ "sp", "gift" ], rarity: "p" , depType: "rear", class: "メイジ", name: "モルディベート" }
    , { id: 0x003b, implDate: "2014/01/08", implDate_bq: "2016/02/25", obtain: [ "tr", "demo" ], rarity: "p" , depType: "van" , class: "サムライ", name: "アカネ", modifier: "剣士" }
    , { id: 0x003c, implDate: "2014/01/08", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "パイレーツ", name: "モニカ", modifier: "駆け出し海賊" }
    , { id: 0x003d, implDate: "2014/01/14", implDate_bq: "2016/04/28", obtain: [ "tr", "demo" ], rarity: "b" , depType: "van" , class: "忍者", name: "サキ", modifier: "忍者" }
    , { id: 0x003e, implDate: "2014/01/16", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "パイレーツ", name: "ミネルバ", modifier: "伝説の海賊" }
    , { id: 0x003f, implDate: "2014/01/16", implDate_bq: "2017/10/26", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "パイレーツ", name: "レイチェル", modifier: "海賊" }
    , { id: 0x0040, implDate: "2014/01/22", implDate_bq: "2016/08/04", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "マリーベル", modifier: "聖戦士" }
    , { id: 0x0041, implDate: "2014/01/29", implDate_bq: "2017/06/29", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "サムライ", name: "サクヤ", modifier: "薙刀剣士" }
    , { id: 0x0042, implDate: "2014/01/29", implDate_bq: "2016/04/28", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "忍者", name: "ヒナ", modifier: "忍者" }
    , { id: 0x0043, implDate: "2014/02/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "中級竜兵", name: "ガドラス", modifier: "青竜の", male: 1 }
    , { id: 0x0044, implDate: "2014/02/12", implDate_bq: null        , obtain: [ "ev", "else" ], rarity: "b" , depType: "van" , class: "ドラゴンプリンセス", name: "アーニャ", modifier: "竜姫" }
    , { id: 0x0045, implDate: "2014/02/12", implDate_bq: "2017/06/29", obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "ドラゴンシャーマン", name: "エキドナ", modifier: "竜巫女" }
    , { id: 0x0046, implDate: "2014/02/18", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "サムライ", name: "シズカ", modifier: "姫侍" }
    , { id: 0x0047, implDate: "2014/02/18", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "サムライ", name: "コジュウロウ", modifier: "侍剣士", male: 1 }
    , { id: 0x0048, implDate: "2014/02/18", implDate_bq: "2016/11/02", obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "メイジ", name: "オデット", modifier: "秘法の伝承者" }
    , { id: 0x0049, implDate: "2014/02/25", implDate_bq: "2016/11/02", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ヴァンパイアハンター", name: "エリザベート", modifier: "賞金稼ぎ" }
    , { id: 0x004a, implDate: "2014/02/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "ヴァンパイアハンター", name: "ヴィンセント", modifier: "復讐者", male: 1 }
    , { id: 0x004b, implDate: "2014/03/11", implDate_bq: "2019/10/24", obtain: [ "ev", "item" ], rarity: "b" , depType: "van" , class: "イモータルプリンセス", name: "カルマ", modifier: "純白の花嫁" }
    , { id: 0x004c, implDate: "2014/03/11", implDate_bq: "2017/10/26", obtain: [ "ev", "item" ], rarity: "p" , depType: "van" , class: "ヴァンパイアプリンセス", name: "カルマ", modifier: "黒衣の花嫁" }
    , { id: 0x004d, implDate: "2014/03/11", implDate_bq: "2017/05/25", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ペガサスライダー", name: "リディ", modifier: "天駆ける騎士" }
    , { id: 0x004e, implDate: "2014/03/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "ヒーラー", name: "ロベルト", modifier: "癒しの獅子", male: 1 }
    , { id: 0x004f, implDate: "2014/03/11", implDate_bq: "2019/10/24", obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "シャーマン", name: "シホ", modifier: "巫女" }
    , { id: 0x0050, implDate: "2014/03/22", implDate_bq: null        , obtain: [ "tr", "demo" ], rarity: "g" , depType: "van" , class: "忍者", name: "ヒエン", modifier: "忍者", male: 1 }
    , { id: 0x0051, implDate: "2014/03/25", implDate_bq: "2016/12/08", obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "ウィッチ", name: "ユユ", modifier: "ハーフエルフの" }
    , { id: 0x0052, implDate: "2014/03/25", implDate_bq: "2019/09/26", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "ダークファイター", name: "ユリナ", modifier: "暗黒騎士" }
    , { id: 0x0053, implDate: "2014/03/25", implDate_bq: "2017/03/14", obtain: [ "tr", "demo" ], rarity: "p" , depType: "rear", class: "アーチャー", name: "スピカ", modifier: "妖精郷の射手" }
    , { id: 0x0054, implDate: "2014/04/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "プリンセス", name: "オリヴィエ" }
    , { id: 0x0055, implDate: "2014/04/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ビショップ", name: "マリウス", modifier: "妖精司教", male: 1 }
    , { id: 0x0056, implDate: "2014/04/01", implDate_bq: null        , obtain: [ "tr", "demo" ], rarity: "p" , depType: "rear", class: "ヒーラー", name: "シーディス", modifier: "妖精女王" }
    , { id: 0x0057, implDate: "2014/04/10", implDate_bq: "2017/07/12", obtain: [ "ev", "else" ], rarity: "g" , depType: "van" , class: "ソルジャー", name: "ケイティ", modifier: "戦術教官" }
    , { id: 0x0058, implDate: "2014/04/15", implDate_bq: "2016/04/14", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "アベンジャー", name: "ロアナ", modifier: "ダークエルフの" }
    , { id: 0x0059, implDate: "2014/04/15", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ソルジャー", name: "ロザリー", modifier: "妖精郷の戦士" }
    , { id: 0x005a, implDate: "2014/04/15", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "アーチャー", name: "ローレン", modifier: "妖精郷の射手", male: 1 }
    , { id: 0x005b, implDate: "2014/04/15", implDate_bq: "2016/12/08", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "モンク", name: "リン", modifier: "武闘家" }
    , { id: 0x005c, implDate: "2014/04/22", implDate_bq: "2017/02/09", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "前衛戦術家", name: "ウズメ", modifier: "地の軍師" }
    , { id: 0x005d, implDate: "2014/04/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "サムライ", name: "サノスケ", modifier: "足軽頭", male: 1 }
    , { id: 0x005e, implDate: "2014/05/07", implDate_bq: "2017/08/10", obtain: [ "ev", "item" ], rarity: "p" , depType: "rear", class: "後衛戦術家", name: "レン", modifier: "天の軍師" }
    , { id: 0x005f, implDate: "2014/05/07", implDate_bq: "2017/01/19", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "陰陽師", name: "ミコト", modifier: "陰陽師" }
    , { id: 0x0060, implDate: "2014/05/07", implDate_bq: "2017/07/12", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "モンク", name: "ジーナ", modifier: "格闘士" }
    , { id: 0x0061, implDate: "2014/05/07", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "メイジ", name: "パレス", modifier: "魔術師" }
    , { id: 0x0062, implDate: "2014/05/07", implDate_bq: "2016/09/08", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "魔法剣士", name: "シャルロット", modifier: "魔法剣士" }
    , { id: 0x0063, implDate: "2014/05/15", implDate_bq: "2017/01/19", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "アベンジャー", name: "ドロシー", modifier: "大地の妖精" }
    , { id: 0x0064, implDate: "2014/05/30", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "ウィッチ", name: "ネーニャ", modifier: "猫魔女" }
    , { id: 0x0065, implDate: "2014/05/30", implDate_bq: "2017/10/26", obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "サモナー", name: "ソラノ", modifier: "召喚士" }
    , { id: 0x0066, implDate: "2014/06/05", implDate_bq: "2017/07/12", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "メイジ", name: "サーシャ", modifier: "幻惑の魔術師" }
    , { id: 0x0067, implDate: "2014/06/05", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "パイレーツ", name: "ジョヴァンニ", modifier: "海賊", male: 1 }
    , { id: 0x0068, implDate: "2014/06/05", implDate_bq: "2017/04/13", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "ローグ", name: "エイダ", modifier: "獣人" }
    , { id: 0x0069, implDate: "2014/06/19", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "忍者", name: "カゲロウ", modifier: "忍者" }
    , { id: 0x006a, implDate: "2014/06/26", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "シャーマン", name: "カグラ", modifier: "巫女" }
    , { id: 0x006b, implDate: "2014/06/26", implDate_bq: "2017/10/26", obtain: [ "ev", "star" ], rarity: "g" , depType: "rear", class: "ビショップ", name: "ノエル", modifier: "妖精司祭" }
    , { id: 0x006c, implDate: "2014/06/26", implDate_bq: "2016/04/14", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "エンジェル", name: "ソフィー", modifier: "堕天使" }
    , { id: 0x006d, implDate: "2014/06/26", implDate_bq: "2017/07/12", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "エンジェル", name: "クロエ", modifier: "堕天使" }
    , { id: 0x006e, implDate: "2014/07/03", implDate_bq: "2017/03/14", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "ペガサスライダー", name: "ステラ", modifier: "見習い天馬騎士" }
    , { id: 0x006f, implDate: "2014/07/17", implDate_bq: "2019/05/23", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "魔法剣士", name: "ホルエス", modifier: "熱砂の剣士" }
    , { id: 0x0070, implDate: "2014/07/17", implDate_bq: "2016/06/16", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "風水使い", name: "マール", modifier: "風水士" }
    , { id: 0x0071, implDate: "2014/07/17", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ソルジャー", name: "グスタフ", modifier: "ドワーフ戦士", male: 1 }
    , { id: 0x0072, implDate: "2014/07/17", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "パイレーツ", name: "ヴェロッテ", modifier: "海賊" }
    , { id: 0x0073, implDate: "2014/07/17", implDate_bq: "2016/05/12", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "くぐつ使い", name: "リッカ", modifier: "機甲士" }
    , { id: 0x0074, implDate: "2014/07/31", implDate_bq: null        , obtain: [ "tr", "demo" ], rarity: "p" , depType: "rear", class: "砲術士", name: "ジャンナ", modifier: "閃の撃砲" }
    , { id: 0x0075, implDate: "2014/08/07", implDate_bq: "2016/06/09", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ダンサー", name: "マーニー", modifier: "踊り子" }
    , { id: 0x0076, implDate: "2014/08/15", implDate_bq: "2016/05/12", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "サモナー", name: "ファルネ", modifier: "召喚士" }
    , { id: 0x0077, implDate: "2014/08/21", implDate_bq: "2018/04/19", obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "パイレーツ", name: "ベアトリカ", modifier: "紅の海賊" }
    , { id: 0x0078, implDate: "2014/08/21", implDate_bq: "2017/06/29", obtain: [ "ev", "star" ], rarity: "g" , depType: "van" , class: "セーラー", name: "マリエ", modifier: "見習い水兵" }
    , { id: 0x0079, implDate: "2014/08/21", implDate_bq: "2017/05/25", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "サムライ", name: "チズル", modifier: "流浪の武芸者" }
    , { id: 0x007a, implDate: "2014/08/21", implDate_bq: "2016/05/12", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "忍者", name: "アザミ", modifier: "忍者" }
    , { id: 0x007b, implDate: "2014/08/28", implDate_bq: "2021/08/12", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "モンク", name: "ウル", modifier: "猛き爪獣" }
    , { id: 0x007c, implDate: "2014/08/28", implDate_bq: "2016/09/08", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ヒーラー", name: "サーリア", modifier: "慈愛の祈り" }
    , { id: 0x007d, implDate: "2014/09/11", implDate_bq: "2017/02/09", obtain: [ "ev", "item" ], rarity: "p" , depType: "van" , class: "プリンセス", name: "クローディア" }
    , { id: 0x007e, implDate: "2014/09/11", implDate_bq: "2017/02/09", obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "砲術士", name: "ゾラ", modifier: "魔砲士" }
    , { id: 0x007f, implDate: "2014/09/11", implDate_bq: "2017/05/25", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "サムライ", name: "モミジ", modifier: "剣豪" }
    , { id: 0x0080, implDate: "2014/09/18", implDate_bq: "2017/05/25", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ビショップ", name: "パトラ", modifier: "太陽神官" }
    , { id: 0x0081, implDate: "2014/09/18", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ソルジャー", name: "アサル", modifier: "砂漠の戦士" }
    , { id: 0x0082, implDate: "2014/09/18", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ローグ", name: "バラッド", modifier: "盗賊", male: 1 }
    , { id: 0x0083, implDate: "2014/09/18", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "ヴァンパイアハンター", name: "フーリ", modifier: "吸血鬼狩人" }
    , { id: 0x0084, implDate: "2014/09/20", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "van" , class: "妖狐", name: "たまも", modifier: "妖狐" }
    , { id: 0x0085, implDate: "2014/09/29", implDate_bq: null        , obtain: [ "tr", "demo" ], rarity: "g" , depType: "van" , class: "アベンジャー", name: "ザラーム", modifier: "仮面の復讐者", male: 1 }
    , { id: 0x0086, implDate: "2014/10/02", implDate_bq: "2017/05/25", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "魔法剣士", name: "サビーネ", modifier: "宮廷剣士" }
    , { id: 0x0087, implDate: "2014/10/02", implDate_bq: "2017/07/12", obtain: [ "ev", "else" ], rarity: "p" , depType: "van" , class: "セーラー", name: "ビエラ", modifier: "水兵", extra: { obtain: [ "tr", "demo" ] } }
    , { id: 0x0088, implDate: "2014/10/02", implDate_bq: "2017/08/10", obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "アーチャー", name: "リタ", modifier: "漆黒の射手" }
    , { id: 0x0089, implDate: "2014/10/09", implDate_bq: "2017/11/22", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "後衛戦術家", name: "アイシャ", modifier: "伏龍の軍師" }
    , { id: 0x008a, implDate: "2014/10/23", implDate_bq: "2016/11/02", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "前衛戦術家", name: "シュウカ", modifier: "亡国の将" }
    , { id: 0x008b, implDate: "2014/10/23", implDate_bq: "2016/11/02", obtain: [ "ev", "star" ], rarity: "g" , depType: "rear", class: "アーチャー", name: "シャオ", modifier: "彩華の射手" }
    , { id: 0x008c, implDate: "2014/10/23", implDate_bq: "2017/02/09", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ソルジャー", name: "ゼノビア", modifier: "剣の聖女" }
    , { id: 0x008d, implDate: "2014/10/23", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "ヴァンパイアハンター", name: "フラン", modifier: "混血の狩人" }
    , { id: 0x008e, implDate: "2014/10/30", implDate_bq: "2016/08/04", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "パイレーツ", name: "アネリア", modifier: "姫海賊" }
    , { id: 0x008f, implDate: "2014/11/13", implDate_bq: "2018/03/15", obtain: [ "ev", "item" ], rarity: "p" , depType: "van" , class: "バンデット", name: "イメリア", modifier: "姫山賊" }
    , { id: 0x0090, implDate: "2014/11/13", implDate_bq: "2017/02/09", obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "ダンサー", name: "ワルツ", modifier: "情熱の踊り子" }
    , { id: 0x0091, implDate: "2014/11/20", implDate_bq: "2016/08/04", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ペガサスライダー", name: "エスタ", modifier: "天馬騎士団長" }
    , { id: 0x0092, implDate: "2014/11/27", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "砲術士", name: "パーシス", modifier: "砲兵" }
    , { id: 0x0093, implDate: "2014/11/29", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "van" , class: "プリンセス", name: "カグヤ", modifier: "月姫", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x0094, implDate: "2014/12/04", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "rear", class: "政務官", name: "アンナ", modifier: "政務官" }
    , { id: 0x0095, implDate: "2014/12/04", implDate_bq: "2017/07/12", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "神官戦士", name: "フラメル", modifier: "神官戦士" }
    , { id: 0x0096, implDate: "2014/12/18", implDate_bq: "2017/09/21", obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "ネクロマンサー", name: "メメント", modifier: "死霊魔術師" }
    , { id: 0x0097, implDate: "2014/12/18", implDate_bq: "2016/08/04", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "メイジアーマー", name: "ジェシカ", modifier: "魔導重装兵" }
    , { id: 0x0098, implDate: "2014/12/18", implDate_bq: "2017/07/12", obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "風水使い", name: "クルル", modifier: "風水士" }
    , { id: 0x0099, implDate: "2014/12/18", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "砲術士", name: "メル", modifier: "砲術士" }
    , { id: 0x009a, implDate: "2014/12/18", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "ウィッチ", name: "エリザ", modifier: "凍氷の守り手" }
    , { id: 0x009b, implDate: "2014/12/25", implDate_bq: "2016/12/08", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "前衛戦術家", name: "マツリ", modifier: "朱鎧の智将" }
    , { id: 0x009c, implDate: "2014/12/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "モンク", name: "ダン", modifier: "格闘家", male: 1 }
    , { id: 0x009d, implDate: "2014/12/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "魔法剣士", name: "リカルド", modifier: "魔法剣士", male: 1 }
    , { id: 0x009e, implDate: "2014/12/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "エンジェル", name: "ニエル", modifier: "堕天使" }
    , { id: 0x009f, implDate: "2014/12/25", implDate_bq: "2017/03/14", obtain: [ "tr", "demo" ], rarity: "g" , depType: "rear", class: "ウィッチ", name: "リュリュ", modifier: "聖夜の魔女", latent: "クリスマス" }
    
    // 2015
    , { id: 0x00a0, implDate: "2015/01/04", implDate_bq: "2017/07/12", obtain: [ "tr", "demo" ], rarity: "g" , depType: "van" , class: "エンジェル", name: "エルン", modifier: "堕天使" }
    , { id: 0x00a1, implDate: "2015/01/08", implDate_bq: "2017/08/10", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "魔法剣士", name: "アネモネ", modifier: "魔法剣士" }
    , { id: 0x00a2, implDate: "2015/01/08", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "ワルキューレ", name: "エミリア", modifier: "戦乙女" }
    , { id: 0x00a3, implDate: "2015/01/15", implDate_bq: "2016/11/02", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ダークファイター", name: "コーネリア", modifier: "叛逆の騎士" }
    , { id: 0x00a4, implDate: "2015/01/22", implDate_bq: "2017/07/12", obtain: [ "ev", "else" ], rarity: "p" , depType: "rear", class: "ダンサー", name: "ハナ", modifier: "祝祭の踊り子" }
    , { id: 0x00a5, implDate: "2015/01/29", implDate_bq: "2018/06/14", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "ダークファイター", name: "エルヴァ", modifier: "副団長" }
    , { id: 0x00a6, implDate: "2015/01/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "メイジアーマー", name: "グレース", modifier: "魔導鎧姫" }
    , { id: 0x00a7, implDate: "2015/01/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "神官戦士", name: "エーテル", modifier: "修道戦士" }
    , { id: 0x00a8, implDate: "2015/01/29", implDate_bq: "2016/05/12", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "バンデット", name: "ロロネ", modifier: "山賊娘" }
    , { id: 0x00a9, implDate: "2015/02/05", implDate_bq: "2018/03/15", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "風水使い", name: "ミア", modifier: "花鏡の風水士" }
    , { id: 0x00aa, implDate: "2015/02/05", implDate_bq: "2016/06/02", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "神官戦士", name: "エレット", modifier: "神官戦士" }
    , { id: 0x00ab, implDate: "2015/02/09", implDate_bq: "2017/06/29", obtain: [ "sp", "code" ], rarity: "s" , depType: "rear", class: "クロノウィッチ", name: "リゼット", modifier: "時の魔女" }
    , { id: 0x00ac, implDate: "2015/02/19", implDate_bq: null        , obtain: [ "ev", "item" ], rarity: "b" , depType: "rear", class: "ヒーラー", name: "リアナ", modifier: "至宝の使い手" }
    , { id: 0x00ad, implDate: "2015/02/19", implDate_bq: "2016/08/04", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ネクロマンサー", name: "アニエス", modifier: "死霊魔術師" }
    , { id: 0x00ae, implDate: "2015/02/19", implDate_bq: "2018/03/15", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "ドラゴンライダー", name: "ルシル", modifier: "竜騎士" }
    , { id: 0x00af, implDate: "2015/02/26", implDate_bq: "2018/06/14", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ヘビーアーマー", name: "ディーネ", modifier: "鉄腕乙女" }
    , { id: 0x00b0, implDate: "2015/03/05", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ボウライダー", name: "デイジー", modifier: "弓騎兵" }
    , { id: 0x00b1, implDate: "2015/03/19", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "ドルイド", name: "ププル", modifier: "巫女姫" }
    , { id: 0x00b2, implDate: "2015/03/19", implDate_bq: "2019/04/18", obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "レンジャー", name: "フウカ", modifier: "緑森の番人" }
    , { id: 0x00b3, implDate: "2015/03/19", implDate_bq: "2017/09/21", obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "アルケミスト", name: "コリン", modifier: "白衣の錬金術士" }
    , { id: 0x00b4, implDate: "2015/03/26", implDate_bq: "2018/03/15", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ヴァンパイアハンター", name: "スー", modifier: "霊鳥の射手" }
    , { id: 0x00b5, implDate: "2015/03/30", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "van" , class: "メイド", name: "ヒカゲ", modifier: "庭番女官", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x00b6, implDate: "2015/04/02", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "忍者", name: "サイゾウ", modifier: "忍者", male: 1 }
    , { id: 0x00b7, implDate: "2015/04/02", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "アーチャー", name: "カズハ", modifier: "弓武者" }
    , { id: 0x00b8, implDate: "2015/04/02", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "ビショップ", name: "フドウ", modifier: "破魔僧正", male: 1 }
    , { id: 0x00b9, implDate: "2015/04/09", implDate_bq: "2018/12/27", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "ヴァンパイアロード", name: "エデン", modifier: "吸血鬼" }
    , { id: 0x00ba, implDate: "2015/04/09", implDate_bq: "2016/11/02", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "シャーマン", name: "キキョウ", modifier: "黒紫の巫女" }
    , { id: 0x00bb, implDate: "2015/04/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "サムライ", name: "イロハ", modifier: "侍剣士" }
    , { id: 0x00bc, implDate: "2015/04/13", implDate_bq: null        , obtain: [ "tr", "demo" ], rarity: "g" , depType: "van" , class: "ドラゴンライダー", name: "アベル", modifier: "竜騎士", male: 1 }
    , { id: 0x00bd, implDate: "2015/04/16", implDate_bq: "2017/04/13", obtain: [ "ev", "subj" ], rarity: "g" , depType: "rear", class: "パイレーツ", name: "モーレット", modifier: "爆裂海賊", extra: { obtain: [ "tr", "demo" ] } }
    , { id: 0x00be, implDate: "2015/04/16", implDate_bq: "2017/09/21", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "妖狐", name: "イナリ", modifier: "妖狐" }
    , { id: 0x00bf, implDate: "2015/04/30", implDate_bq: "2017/03/14", obtain: [ "ev", "item" ], rarity: "b" , depType: "van" , class: "忍者", name: "ナギ", modifier: "封妖の忍者" }
    , { id: 0x00c0, implDate: "2015/04/30", implDate_bq: "2018/09/20", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "メイジ", name: "エステル", modifier: "魔法皇女" }
    , { id: 0x00c1, implDate: "2015/04/30", implDate_bq: "2016/12/08", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "ミランダ", modifier: "聖鎚闘士" }
    , { id: 0x00c2, implDate: "2015/05/07", implDate_bq: "2017/01/19", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "アルケミスト", name: "シャルル", modifier: "神秘の術士" }
    , { id: 0x00c3, implDate: "2015/05/07", implDate_bq: "2017/11/22", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "ソードマスター", name: "サンドラ", modifier: "剣士" }
    , { id: 0x00c4, implDate: "2015/05/21", implDate_bq: "2017/09/21", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "モンク", name: "モモ", modifier: "鉄甲闘士" }
    , { id: 0x00c5, implDate: "2015/05/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ボウライダー", name: "リオン", modifier: "月影の弓騎兵" }
    , { id: 0x00c6, implDate: "2015/05/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ドラゴンライダー", name: "エレニア", modifier: "雷竜騎士" }
    , { id: 0x00c7, implDate: "2015/06/11", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "ビショップ", name: "ポーラ", modifier: "旅の司祭" }
    , { id: 0x00c8, implDate: "2015/06/11", implDate_bq: "2021/01/14", obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "シーフ", name: "レダ", modifier: "お宝泥棒" }
    , { id: 0x00c9, implDate: "2015/06/25", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "神官戦士", name: "セラ", modifier: "神官戦士" }
    , { id: 0x00ca, implDate: "2015/06/28", implDate_bq: "2017/02/09", obtain: [ "tr", "demo" ], rarity: "g" , depType: "van" , class: "メイジアーマー", name: "ライチ", modifier: "妖精魔鎧兵" }
    , { id: 0x00cb, implDate: "2015/07/02", implDate_bq: "2019/08/15", obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "ドルイド", name: "ローリエ", modifier: "森の守り手" }
    , { id: 0x00cc, implDate: "2015/07/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "呪術使い", name: "エヴァ", modifier: "呪術師" }
    , { id: 0x00cd, implDate: "2015/07/16", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "van" , class: "くぐつ使い", name: "フィー", modifier: "機甲騎士" }
    , { id: 0x00ce, implDate: "2015/07/23", implDate_bq: "2017/12/28", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "ソードマスター", name: "グローリア", modifier: "剣士" }
    , { id: 0x00cf, implDate: "2015/07/23", implDate_bq: "2017/08/10", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ソルジャー", name: "アルティア", modifier: "光の守護者" }
    , { id: 0x00d0, implDate: "2015/07/23", implDate_bq: "2017/07/12", obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "砲術士", name: "カノン", modifier: "爆砲の新兵" }
    , { id: 0x00d1, implDate: "2015/07/24", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "rear", class: "魔物使い", name: "スイル", modifier: "魔物使い" }
    , { id: 0x00d2, implDate: "2015/07/30", implDate_bq: "2017/11/22", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ソードマスター", name: "レイブン", modifier: "剣士" }
    , { id: 0x00d3, implDate: "2015/08/13", implDate_bq: "2018/02/01", obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "ダークプリースト", name: "ベルディナート", modifier: "闇司祭" }
    , { id: 0x00d4, implDate: "2015/08/13", implDate_bq: "2016/08/04", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ドラゴンシャーマン", name: "ルビナス", modifier: "竜巫女" }
    , { id: 0x00d5, implDate: "2015/08/13", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "セーラー", name: "リーンベル", modifier: "提督" }
    , { id: 0x00d6, implDate: "2015/08/20", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "バンデット", name: "アマンダ", modifier: "新世代山賊" }
    , { id: 0x00d7, implDate: "2015/08/27", implDate_bq: "2018/02/01", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "シーフ", name: "アニータ", modifier: "閃光の泥棒" }
    , { id: 0x00d8, implDate: "2015/08/27", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "プリンセス", name: "ロゼット" }
    , { id: 0x00d9, implDate: "2015/08/29", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "van" , class: "ロイヤルガード", name: "パテル", modifier: "姫騎士", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x00da, implDate: "2015/09/10", implDate_bq: null        , obtain: [ "ev", "item" ], rarity: "p" , depType: "rear", class: "風水使い", name: "ピピン", modifier: "風水士" }
    , { id: 0x00db, implDate: "2015/09/14", implDate_bq: "2018/04/19", obtain: [ "tr", "demo" ], rarity: "g" , depType: "rear", class: "呪術使い", name: "ミトラ", modifier: "呪術師" }
    , { id: 0x00dc, implDate: "2015/09/16", implDate_bq: "2018/02/01", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "エンチャンター", name: "エルシャ", modifier: "付与魔術師" }
    , { id: 0x00dd, implDate: "2015/09/16", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "魔法剣士", name: "カシス", modifier: "魔法剣士" }
    , { id: 0x00de, implDate: "2015/09/16", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "ビショップ", name: "シャロン", modifier: "司祭" }
    , { id: 0x00df, implDate: "2015/09/17", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "van" , class: "ソードマスター", name: "ミーティア", modifier: "剣士", extra: { obtain: [ "tr", "demo" ] } }
    , { id: 0x00e0, implDate: "2015/09/24", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ボウライダー", name: "カティナ", modifier: "弓騎兵" }
    , { id: 0x00e1, implDate: "2015/09/24", implDate_bq: "2017/01/19", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "ペガサスライダー", name: "イザベル", modifier: "帝国天馬騎士", latent: "白の帝国" }
    , { id: 0x00e2, implDate: "2015/10/01", implDate_bq: "2017/10/26", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "モンク", name: "アリス", modifier: "武王姫" }
    , { id: 0x00e3, implDate: "2015/10/15", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "レンジャー", name: "リコラ", modifier: "聖森の番人" }
    , { id: 0x00e4, implDate: "2015/10/15", implDate_bq: "2017/03/14", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "メイド", name: "シャーリー", modifier: "術士女官" }
    , { id: 0x00e5, implDate: "2015/10/15", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "ヒーラー", name: "ユーノ", modifier: "背反の癒し手" }
    , { id: 0x00e6, implDate: "2015/10/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "ウィッチ", name: "メローネ", modifier: "魔女" }
    , { id: 0x00e7, implDate: "2015/10/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "アルケミスト", name: "テルマ", modifier: "錬金術士" }
    , { id: 0x00e8, implDate: "2015/10/29", implDate_bq: "2017/02/09", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "仙人", name: "ナタク", modifier: "紅輪の道士" }
    , { id: 0x00e9, implDate: "2015/11/05", implDate_bq: "2017/08/10", obtain: [ "ev", "subj" ], rarity: "p" , depType: "van" , class: "プリンセス", name: "ルイーズ", extra: { obtain: [ "tr", "demo" ] } }
    , { id: 0x00ea, implDate: "2015/11/05", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ヘビーアーマー", name: "ダナン", modifier: "密林の守護者" }
    , { id: 0x00eb, implDate: "2015/11/05", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ボウライダー", name: "ルナール", modifier: "密林の弓騎兵" }
    , { id: 0x00ec, implDate: "2015/11/12", implDate_bq: "2017/04/13", obtain: [ "ev", "item" ], rarity: "b" , depType: "rear", class: "ビショップ", name: "エターナー", modifier: "魔導司祭" }
    , { id: 0x00ed, implDate: "2015/11/12", implDate_bq: "2016/12/08", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ドラゴンライダー", name: "ナディア", modifier: "角竜騎士" }
    , { id: 0x00ee, implDate: "2015/11/12", implDate_bq: "2017/01/19", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "ソルジャー", name: "リーゼロッテ", modifier: "帝国兵長", latent: "白の帝国" }
    , { id: 0x00ef, implDate: "2015/11/19", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "魔神", name: "ラクシャーサ", modifier: "鬼神姫" }
    , { id: 0x00f0, implDate: "2015/11/19", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "アベンジャー", name: "リスティス", modifier: "魔界闘士" }
    , { id: 0x00f1, implDate: "2015/11/19", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "b" , depType: "van" , class: "ダークファイター", name: "暗黒騎士", male: 1 }
    , { id: 0x00f2, implDate: "2015/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ワルキューレ", name: "チグリ", modifier: "密林の槍騎兵" }
    , { id: 0x00f3, implDate: "2015/12/03", implDate_bq: "2017/11/22", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ローグ", name: "ジュノン", modifier: "秘刃の暗殺者" }
    , { id: 0x00f4, implDate: "2015/12/03", implDate_bq: "2024/12/12", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "忍者", name: "カナメ", modifier: "封妖の忍者" }
    , { id: 0x00f5, implDate: "2015/12/17", implDate_bq: "2017/04/13", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "メイド", name: "アイリーン", modifier: "召使い" }
    , { id: 0x00f6, implDate: "2015/12/17", implDate_bq: "2019/07/25", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "マーチャント", name: "トトノ", modifier: "行商人" }
    , { id: 0x00f7, implDate: "2015/12/17", implDate_bq: "2017/12/28", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "ボウライダー", name: "サラサ", modifier: "聖夜の弓騎兵", latent: "クリスマス" }
    , { id: 0x00f8, implDate: "2015/12/26", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "rear", class: "フェンリルシャーマン", name: "プニル", modifier: "魔狼巫女", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x00f9, implDate: "2015/12/29", implDate_bq: "2018/08/23", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "魔法剣士", name: "イングリッド", modifier: "魔戦団長" }
    
    // 2016
    , { id: 0x00fa, implDate: "2016/01/14", implDate_bq: "2018/04/19", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "神官戦士", name: "フェルミ", modifier: "神官戦士" }
    , { id: 0x00fb, implDate: "2016/01/28", implDate_bq: "2018/02/01", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "仙猿", name: "ファー", modifier: "仙猿" }
    , { id: 0x00fc, implDate: "2016/01/28", implDate_bq: "2019/09/26", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "妖狐", name: "カヨウ", modifier: "九尾狐" }
    , { id: 0x00fd, implDate: "2016/01/28", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "呪術使い", name: "レヴィ", modifier: "忘我の呪術師" }
    , { id: 0x00fe, implDate: "2016/02/04", implDate_bq: "2019/01/31", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "プリンセス", name: "メルヴィナ" }
    , { id: 0x00ff, implDate: "2016/02/18", implDate_bq: "2018/04/19", obtain: [ "ev", "item" ], rarity: "b" , depType: "rear", class: "ネクロマンサー", name: "メトゥス", modifier: "反魂の死霊術師" }
    , { id: 0x0100, implDate: "2016/02/18", implDate_bq: "2019/06/20", obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "エンチャンター", name: "リルケ", modifier: "付与魔術師" }
    , { id: 0x0101, implDate: "2016/02/18", implDate_bq: "2018/10/18", obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "パイレーツ", name: "サブリナ", modifier: "私掠船長" }
    , { id: 0x0102, implDate: "2016/02/25", implDate_bq: "2016/12/08", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "クロノウィッチ", name: "トワ", modifier: "時の調停者" }
    , { id: 0x0103, implDate: "2016/02/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "メイジ", name: "マーヤ", modifier: "魔術師" }
    , { id: 0x0104, implDate: "2016/03/03", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "b" , depType: "van" , class: "戦の聖霊", name: "シンシア", modifier: "戦の聖霊" }
    , { id: 0x0105, implDate: "2016/03/10", implDate_bq: "2017/08/10", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "メイジアーマー", name: "パルフィ", modifier: "魔鎧乙女" }
    , { id: 0x0106, implDate: "2016/03/10", implDate_bq: "2017/01/19", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "バンデット", name: "リーフ", modifier: "山賊娘" }
    , { id: 0x0107, implDate: "2016/03/24", implDate_bq: "2019/02/21", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "プリンセス", name: "スクハ" }
    , { id: 0x0108, implDate: "2016/03/24", implDate_bq: "2018/07/12", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ヴァンパイアロード", name: "ラキュア", modifier: "吸血鬼" }
    , { id: 0x0109, implDate: "2016/03/24", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "神官戦士", name: "ニコラウス", modifier: "神官戦士", male: 1 }
    , { id: 0x010a, implDate: "2016/03/24", implDate_bq: "2017/03/14", obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "ヴァンパイアハンター", name: "ルマリア", modifier: "聖なる復讐者" }
    , { id: 0x010b, implDate: "2016/03/31", implDate_bq: "2017/06/29", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "メイド", name: "セーラ", modifier: "王宮侍女武官" }
    , { id: 0x010c, implDate: "2016/03/31", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "van" , class: "エンジェル", name: "パフィリア", modifier: "堕天使" }
    , { id: 0x010d, implDate: "2016/04/07", implDate_bq: "2017/03/14", obtain: [ "sp", "gift" ], rarity: "p" , depType: "rear", class: "後衛戦術家", name: "レオナ", modifier: "帝国軍師", latent: "白の帝国", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x010e, implDate: "2016/04/14", implDate_bq: "2018/03/15", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "エンジェル", name: "ミルノ", modifier: "天使長" }
    , { id: 0x010f, implDate: "2016/04/14", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "サモナー", name: "リノ", modifier: "見習い召喚士" }
    , { id: 0x0110, implDate: "2016/04/21", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "レンジャー", name: "スプラ", modifier: "神森の守護妖精" }
    , { id: 0x0111, implDate: "2016/04/21", implDate_bq: "2018/04/19", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "前衛戦術家", name: "ヘレナ", modifier: "天才戦術家" }
    , { id: 0x0112, implDate: "2016/04/21", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "b" , depType: "rear", class: "政務官", name: "アンナ", qualifier: "（給仕服）", derivation: "メイド" }
    , { id: 0x0113, implDate: "2016/04/28", implDate_bq: "2017/07/12", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "魔物使い", name: "モルテナ", modifier: "魔物使い" }
    , { id: 0x0114, implDate: "2016/04/30", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "rear", class: "モンスタースレイヤー", name: "ラーティ", modifier: "竜殺し", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x0115, implDate: "2016/05/12", implDate_bq: null        , obtain: [ "ev", "item" ], rarity: "b" , depType: "van" , class: "ワルキューレ", name: "レシア", modifier: "英霊の守り手" }
    , { id: 0x0116, implDate: "2016/05/12", implDate_bq: "2017/04/13", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "ドルチェ", modifier: "悪魔ハンター" }
    , { id: 0x0117, implDate: "2016/05/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ヘビーアーマー", name: "ドワイト", modifier: "帝国重装歩兵", latent: "白の帝国", male: 1 }
    , { id: 0x0118, implDate: "2016/05/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "モンク", name: "マオ", modifier: "見習い拳士" }
    , { id: 0x0119, implDate: "2016/05/16", implDate_bq: null        , obtain: [ "tr", "demo" ], rarity: "g" , depType: "van" , class: "くぐつ使い", name: "ボリス", modifier: "機甲技師", male: 1 }
    , { id: 0x011a, implDate: "2016/05/26", implDate_bq: "2017/05/25", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "風水使い", name: "リンネ", modifier: "刻詠の風水士" }
    , { id: 0x011b, implDate: "2016/05/26", implDate_bq: "2018/10/18", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "砲術士", name: "フレデリカ", modifier: "極重巨砲" }
    , { id: 0x011c, implDate: "2016/06/02", implDate_bq: "2018/03/15", obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "クロノウィッチ", name: "ココロ", modifier: "時の魔女" }
    , { id: 0x011d, implDate: "2016/06/02", implDate_bq: "2018/07/12", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "セーラー", name: "アメリ", modifier: "航海士" }
    , { id: 0x011e, implDate: "2016/06/02", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ボウライダー", name: "ミゲル", modifier: "弓騎兵", male: 1 }
    , { id: 0x011f, implDate: "2016/06/02", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "ソルジャー", name: "ジェイク", modifier: "冒険者", male: 1 }
    , { id: 0x0120, implDate: "2016/06/02", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "アーチャー", name: "オスカー", modifier: "冒険者", male: 1 }
    , { id: 0x0121, implDate: "2016/06/03", implDate_bq: "2018/07/12", obtain: [ "sp", "code" ], rarity: "p" , depType: "van" , class: "ダークストーカー", name: "グレーテル", modifier: "闇使い", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x0122, implDate: "2016/06/09", implDate_bq: "2017/12/28", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ドルイド", name: "メープル", modifier: "大自然の乙女" }
    , { id: 0x0123, implDate: "2016/06/23", implDate_bq: "2019/02/21", obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "レーゼル", modifier: "帝国猟兵", latent: "白の帝国" }
    , { id: 0x0124, implDate: "2016/06/23", implDate_bq: "2017/11/22", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "ボウライダー", name: "マーガレット", modifier: "輝弓士" }
    , { id: 0x0125, implDate: "2016/06/23", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "p" , depType: "van" , class: "ロイヤルガード", name: "アリシア", modifier: "近衛騎士" }
    , { id: 0x0126, implDate: "2016/06/30", implDate_bq: "2018/07/12", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "アルケミスト", name: "マキナ", modifier: "錬金技工士" }
    , { id: 0x0127, implDate: "2016/06/30", implDate_bq: "2017/11/22", obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "ビショップ", name: "セレイナ", modifier: "聖職者" }
    , { id: 0x0128, implDate: "2016/07/07", implDate_bq: "2023/07/13", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ウィッチ", name: "プリム", modifier: "幻光の魔女" }
    , { id: 0x0129, implDate: "2016/07/21", implDate_bq: "2019/03/22", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "ワルキューレ", name: "メイリン", modifier: "虎姫" }
    , { id: 0x012a, implDate: "2016/07/21", implDate_bq: "2018/06/14", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "魔法剣士", name: "シエナ", modifier: "闇の魔剣士" }
    , { id: 0x012b, implDate: "2016/07/21", implDate_bq: "2017/06/29", obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "レンジャー", name: "アイーダ", modifier: "闇の森の番人" }
    , { id: 0x012c, implDate: "2016/07/28", implDate_bq: "2018/07/12", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ロイヤルガード", name: "ミレイユ", modifier: "近衛騎士団長" }
    , { id: 0x012d, implDate: "2016/07/28", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "van" , class: "ねんどろいどプリンセス", name: "ねんどろいどシビラ", collabo: 1 }
    , { id: 0x012e, implDate: "2016/08/02", implDate_bq: null        , obtain: [ "tr", "demo" ], rarity: "g" , depType: "van" , class: "中級竜兵", name: "ゴライア", modifier: "闇竜の", male: 1 }
    , { id: 0x012f, implDate: "2016/08/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ダークプリースト", name: "ベルゼッタ", modifier: "闇の大司教" }
    , { id: 0x0130, implDate: "2016/08/25", implDate_bq: "2017/07/12", obtain: [ "ev", "item" ], rarity: "b" , depType: "van" , class: "サムライ", name: "ヒバリ", modifier: "鬼切の使い手" }
    , { id: 0x0131, implDate: "2016/08/25", implDate_bq: "2017/09/21", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "アーチャー", name: "アーシェラ", modifier: "神業の狩人" }
    , { id: 0x0132, implDate: "2016/08/25", implDate_bq: "2017/12/28", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ドルイド", name: "フィオレ", modifier: "森の隠者" }
    , { id: 0x0133, implDate: "2016/08/26", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "van" , class: "魔神", name: "ルル", modifier: "裏切りの魔神" }
    , { id: 0x0134, implDate: "2016/09/08", implDate_bq: "2017/09/21", obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "ヒーラー", name: "エリアス", modifier: "帝国治癒士", latent: "白の帝国" }
    , { id: 0x0135, implDate: "2016/09/08", implDate_bq: "2018/02/01", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "ヘビーアーマー", name: "マチルダ", modifier: "重歩兵長" }
    , { id: 0x0136, implDate: "2016/09/08", implDate_bq: "2018/04/19", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "中級竜兵", name: "イグニス", modifier: "火竜の" }
    , { id: 0x0137, implDate: "2016/09/15", implDate_bq: "2017/09/21", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "デモンサモナー", name: "リヴル", modifier: "悪魔召喚士" }
    , { id: 0x0138, implDate: "2016/09/29", implDate_bq: "2018/05/17", obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "エンチャンター", name: "メレディス", modifier: "付与魔術師" }
    , { id: 0x0139, implDate: "2016/09/29", implDate_bq: "2017/04/13", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "くぐつ使い", name: "ウェンディ", modifier: "天才機甲士" }
    , { id: 0x013a, implDate: "2016/09/30", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "van" , class: "モンク", name: "リーエン", modifier: "雷の宝具使い", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x013b, implDate: "2016/10/13", implDate_bq: "2017/12/28", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ダンサー", name: "ビビアン", modifier: "異邦の踊り子" }
    , { id: 0x013c, implDate: "2016/10/20", implDate_bq: "2018/06/14", obtain: [ "ev", "item" ], rarity: "b" , depType: "van" , class: "ぬらりひょん", name: "シノ", modifier: "ぬらりひょんの娘" }
    , { id: 0x013d, implDate: "2016/10/20", implDate_bq: "2018/07/12", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "重装砲兵", name: "レギーナ", modifier: "重装砲兵" }
    , { id: 0x013e, implDate: "2016/10/27", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ダークプリースト", name: "ドロテア", modifier: "闇エルフの女王" }
    , { id: 0x013f, implDate: "2016/11/10", implDate_bq: "2017/10/26", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "メイジアーマー", name: "エーリカ", modifier: "南瓜魔導鎧兵", latent: "ハロウィン" }
    , { id: 0x0140, implDate: "2016/11/10", implDate_bq: "2018/09/20", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "鬼", name: "イツキ", modifier: "鬼娘" }
    , { id: 0x0141, implDate: "2016/11/10", implDate_bq: "2018/09/20", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "神官戦士", name: "ルチア", modifier: "帝国神官戦士", latent: "白の帝国" }
    , { id: 0x0142, implDate: "2016/11/30", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "van" , class: "ドラゴンプリンセス", name: "シャルム", modifier: "炎の竜皇女", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x0143, implDate: "2016/12/01", implDate_bq: "2018/05/17", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "プリンセス", name: "アンジェリーネ", latent: "白の帝国" }
    , { id: 0x0144, implDate: "2016/12/01", implDate_bq: "2018/05/17", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ソードマスター", name: "ジークリンデ", modifier: "帝国剣士", latent: "白の帝国" }
    , { id: 0x0145, implDate: "2016/12/01", implDate_bq: "2017/03/14", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "重装砲兵", name: "エルミラ", modifier: "帝国重装砲兵", latent: "白の帝国" }
    , { id: 0x0146, implDate: "2016/12/01", implDate_bq: "2019/09/26", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "インペリアルナイト", name: "ヴィオラ", modifier: "帝国騎士", latent: "白の帝国" }
    , { id: 0x0147, implDate: "2016/12/01", implDate_bq: "2018/05/17", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "レンジャー", name: "ローザ", modifier: "帝国遊撃兵", latent: "白の帝国" }
    , { id: 0x0148, implDate: "2016/12/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "ラルフ", modifier: "帝国狙撃兵", latent: "白の帝国", male: 1 }
    , { id: 0x0149, implDate: "2016/12/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "中級竜兵", name: "サーベイン", modifier: "帝国竜人", latent: "白の帝国", male: 1 }
    , { id: 0x014a, implDate: "2016/12/01", implDate_bq: "2018/05/17", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "セーラー", name: "フレイ", modifier: "帝国水兵", latent: "白の帝国" }
    , { id: 0x014b, implDate: "2016/12/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "重装砲兵", name: "ゲオルグ", modifier: "帝国重装砲兵", latent: "白の帝国", male: 1 }
    , { id: 0x014c, implDate: "2016/12/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ペガサスライダー", name: "クラーラ", modifier: "帝国天馬騎士", latent: "白の帝国" }
    , { id: 0x014d, implDate: "2016/12/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "インペリアルナイト", name: "ルークス", modifier: "帝国騎士", latent: "白の帝国", male: 1 }
    , { id: 0x014e, implDate: "2016/12/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "レンジャー", name: "エリック", modifier: "帝国遊撃兵", latent: "白の帝国", male: 1 }
    , { id: 0x014f, implDate: "2016/12/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "エンチャンター", name: "ヒース", modifier: "帝国付与魔術師", latent: "白の帝国", male: 1 }
    , { id: 0x0150, implDate: "2016/12/08", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "van" , class: "皇帝", name: "白の皇帝", latent: "白の帝国", male: 1 }
    , { id: 0x0151, implDate: "2016/12/08", implDate_bq: "2018/08/23", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "エレメンタラー", name: "ロレッタ", modifier: "火霊使い" }
    , { id: 0x0152, implDate: "2016/12/22", implDate_bq: null        , obtain: [ "ev", "item" ], rarity: "p" , depType: "rear", class: "マーチャント", name: "エイミー", modifier: "武器商人" }
    , { id: 0x0153, implDate: "2016/12/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "ヒーラー", name: "アリサ", modifier: "聖夜の癒し手", derivation: "クリスマス" }
    , { id: 0x0154, implDate: "2016/12/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "風水使い", name: "フェイ", modifier: "門弟の風水士" }
    , { id: 0x0155, implDate: "2016/12/29", implDate_bq: "2017/12/28", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "鬼", name: "鬼刃姫", modifier: "酒呑童子の娘 " }
    , { id: 0x0156, implDate: "2016/12/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "デモンサモナー", name: "ラピス", modifier: "大悪魔召喚士" }
    , { id: 0x0157, implDate: "2016/12/29", implDate_bq: null        , obtain: [ "ev", "else" ], rarity: "b" , depType: "rear", class: "政務官", name: "アンナ", modifier: "水着の政務官", derivation: "水着", extra: { obtain: [ "sp", "gift" ] } }
    
    // 2017
    , { id: 0x0158, implDate: "2017/01/01", implDate_bq: null        , obtain: [ "ev", "else" ], rarity: "g" , depType: "van" , class: "ヘビーアーマー", name: "レアン", modifier: "年賀の祝盾", derivation: "お正月" }
    , { id: 0x0159, implDate: "2017/01/05", implDate_bq: "2018/12/27", obtain: [ "tr", "rain" ], rarity: "g" , depType: "rear", class: "アーチャー", name: "ソーマ", modifier: "新春の弓巫女", derivation: "お正月" }
    , { id: 0x015a, implDate: "2017/01/12", implDate_bq: "2018/07/12", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "天狗", name: "コノハ", modifier: "天狗" }
    , { id: 0x015b, implDate: "2017/01/26", implDate_bq: "2019/04/18", obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "アオバ", modifier: "討妖の狙撃手" }
    , { id: 0x015c, implDate: "2017/01/26", implDate_bq: "2018/10/18", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ヴァンパイアプリンセス", name: "シルヴィア", modifier: "紅血の皇女" }
    , { id: 0x015d, implDate: "2017/01/30", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "van" , class: "イビルプリンセス", name: "トコヨ", modifier: "降魔の戦姫", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x015e, implDate: "2017/02/02", implDate_bq: "2021/09/16", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "鍛冶職人", name: "サンディー", modifier: "鍛冶職人" }
    , { id: 0x015f, implDate: "2017/02/16", implDate_bq: "2019/04/18", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "グラディエーター", name: "ドゥーラ", modifier: "オークの剣士" }
    , { id: 0x0160, implDate: "2017/02/16", implDate_bq: "2018/10/18", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "魔神", name: "バロウス", modifier: "魔眼の魔神" }
    , { id: 0x0161, implDate: "2017/02/16", implDate_bq: "2017/11/22", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "ローグ", name: "セブン", modifier: "盗賊" }
    , { id: 0x0162, implDate: "2017/02/23", implDate_bq: "2019/01/31", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "猫又", name: "コハル", modifier: "猫又" }
    , { id: 0x0163, implDate: "2017/02/23", implDate_bq: "2018/10/18", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "エレメンタラー", name: "シャオメイ", modifier: "土霊使い" }
    , { id: 0x0164, implDate: "2017/02/27", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "van" , class: "アベンジャー", name: "ウリデム", modifier: "狂獣" }
    , { id: 0x0165, implDate: "2017/03/09", implDate_bq: "2018/06/14", obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "ビショップ", name: "レーヴ", modifier: "神殿書記官" }
    , { id: 0x0166, implDate: "2017/03/09", implDate_bq: "2018/02/01", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "キョンシー", name: "レイメイ", modifier: "雷爪道士" }
    , { id: 0x0167, implDate: "2017/03/23", implDate_bq: "2018/02/01", obtain: [ "ev", "item" ], rarity: "b" , depType: "rear", class: "ドラゴンシャーマン", name: "ハクノカミ", modifier: "古代龍" }
    , { id: 0x0168, implDate: "2017/03/23", implDate_bq: "2018/11/22", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "妖狐", name: "キュウビ", modifier: "帝国妖狐", latent: "白の帝国" }
    , { id: 0x0169, implDate: "2017/03/23", implDate_bq: "2018/11/22", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "前衛戦術家", name: "レオラ", modifier: "帝国元帥", latent: "白の帝国" }
    , { id: 0x016a, implDate: "2017/03/23", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "道化師", name: "モトリー", modifier: "帝国道化師", latent: "白の帝国" }
    , { id: 0x016b, implDate: "2017/03/23", implDate_bq: "2017/12/28", obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "ドルイド", name: "ミステル", modifier: "帝国神樹使い", latent: "白の帝国" }
    , { id: 0x016c, implDate: "2017/03/23", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "ドルイド", name: "ソラーレ", modifier: "帝国神樹使い", latent: "白の帝国" }
    , { id: 0x016d, implDate: "2017/03/30", implDate_bq: "2019/01/31", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "メイジアーマー", name: "シルセス", modifier: "星天の魔導鎧" }
    , { id: 0x016e, implDate: "2017/03/30", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "rear", class: "エレメンタラー", name: "ハルカ", modifier: "帝国風霊使い", latent: "白の帝国", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x016f, implDate: "2017/04/06", implDate_bq: "2018/08/23", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ぬらりひょん", name: "カスミ", modifier: "ぬらりひょんの娘" }
    , { id: 0x0170, implDate: "2017/04/20", implDate_bq: "2018/08/23", obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "陰陽師", name: "コヨミ", modifier: "陰陽師" }
    , { id: 0x0171, implDate: "2017/04/20", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "エレメンタラー", name: "クラリーチェ", modifier: "闇霊使い" }
    , { id: 0x0172, implDate: "2017/04/20", implDate_bq: "2018/12/27", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "モンク", name: "ベストラ", modifier: "オークの格闘家" }
    , { id: 0x0173, implDate: "2017/04/27", implDate_bq: "2020/01/16", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ドラゴンライダー", name: "ティファ", modifier: "聖銀竜の騎士" }
    , { id: 0x0174, implDate: "2017/05/11", implDate_bq: "2019/03/22", obtain: [ "ev", "item" ], rarity: "p" , depType: "rear", class: "デモンサモナー", name: "ヴェルティ", modifier: "悪魔召喚士" }
    , { id: 0x0175, implDate: "2017/05/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "鍛冶職人", name: "ゴルドー", modifier: "鍛冶職人", male: 1 }
    , { id: 0x0176, implDate: "2017/05/18", implDate_bq: "2018/09/20", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "雷公", name: "ラミィ", modifier: "雷神の娘" }
    , { id: 0x0177, implDate: "2017/05/25", implDate_bq: "2019/03/22", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "モンスタースレイヤー", name: "ソシエ", modifier: "聖魔殺しの銃手" }
    , { id: 0x0178, implDate: "2017/06/01", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "モンスターブレイカー", name: "エレーヌ", modifier: "封印剣の使い手" }
    , { id: 0x0179, implDate: "2017/06/01", implDate_bq: "2019/11/14", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "神官戦士", name: "エクス", modifier: "神官戦士団長" }
    , { id: 0x017a, implDate: "2017/06/08", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "ドラゴンライダー", name: "リエーレ", modifier: "竜騎士" }
    , { id: 0x017b, implDate: "2017/06/15", implDate_bq: "2019/02/21", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "道化師", name: "リェプル", modifier: "白兎の道化師" }
    , { id: 0x017c, implDate: "2017/06/29", implDate_bq: "2020/08/13", obtain: [ "ev", "item" ], rarity: "p" , depType: "van" , class: "風伯", name: "フーコ", modifier: "風神の娘" }
    , { id: 0x017d, implDate: "2017/06/29", implDate_bq: "2020/02/13", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ダンサー", name: "ミヤビ", modifier: "神和ぎの踊り子" }
    , { id: 0x017e, implDate: "2017/07/06", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "前衛戦術家", name: "ナルサス", modifier: "未来の宮廷画家", male: 1, collabo: 1 }
    , { id: 0x017f, implDate: "2017/07/06", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "アーチャー", name: "ファランギース", modifier: "神の射手", collabo: 1 }
    , { id: 0x0180, implDate: "2017/07/06", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "エレメンタラー", name: "セノーテ", modifier: "水霊使い" }
    , { id: 0x0181, implDate: "2017/07/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "王太子", name: "アルスラーン", modifier: "王太子", male: 1, collabo: 1 }
    , { id: 0x0182, implDate: "2017/07/20", implDate_bq: "2019/05/23", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "くぐつ使い", name: "ティアル", modifier: "天駆の機甲士" }
    , { id: 0x0183, implDate: "2017/07/20", implDate_bq: "2018/05/17", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ソードマスター", name: "リシェルテ", modifier: "純白の剣士" }
    , { id: 0x0184, implDate: "2017/07/20", implDate_bq: "2019/06/20", obtain: [ "ev", "drop" ], rarity: "g" , depType: "van" , class: "ソルジャー", name: "フィリス", modifier: "浴衣の兵長", derivation: "浴衣" }
    , { id: 0x0185, implDate: "2017/07/27", implDate_bq: null        , obtain: [ "ev", "subj" ], rarity: "b" , depType: "van" , class: "ロイヤルガード", name: "ダリューン", modifier: "黒衣の騎士", male: 1, collabo: 1 }
    , { id: 0x0186, implDate: "2017/07/27", implDate_bq: "2018/08/23", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "セーラー", name: "イブキ", modifier: "海軍元帥" }
    , { id: 0x0187, implDate: "2017/08/10", implDate_bq: "2018/09/20", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "ローグ", name: "サヨ", modifier: "義賊" }
    , { id: 0x0188, implDate: "2017/08/10", implDate_bq: "2020/03/12", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ビショップ", name: "ポーラ", modifier: "常夏の兎司祭", derivation: "水着" }
    , { id: 0x0189, implDate: "2017/08/10", implDate_bq: "2020/07/16", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "ワルキューレ", name: "エレイン", modifier: "夏陽の騎馬乙女", derivation: "水着" }
    , { id: 0x018a, implDate: "2017/08/10", implDate_bq: "2018/08/23", obtain: [ "ev", "eles" ], rarity: "g" , depType: "rear", class: "アーチャー", name: "ダニエラ", modifier: "夜涼の射的兵", derivation: "浴衣", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x018b, implDate: "2017/08/24", implDate_bq: "2018/10/18", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "メイド", name: "リーナ", modifier: "妖魔の侍女" }
    , { id: 0x018c, implDate: "2017/08/31", implDate_bq: "2019/04/18", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "鍛冶職人", name: "ティニー", modifier: "ドワーフの姫" }
    , { id: 0x018d, implDate: "2017/09/14", implDate_bq: "2018/08/23", obtain: [ "ev", "item" ], rarity: "b" , depType: "van" , class: "グラディエーター", name: "アナトリア", modifier: "オークの英雄" }
    , { id: 0x018e, implDate: "2017/09/14", implDate_bq: "2019/02/21", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ダークストーカー", name: "シェイド", modifier: "闇使いの剣士" }
    , { id: 0x018f, implDate: "2017/09/14", implDate_bq: "2020/08/13", obtain: [ "ev", "drop" ], rarity: "g" , depType: "rear", class: "ウィッチ", name: "カリオペ", modifier: "麦わら帽の魔女", derivation: "サマー" }
    , { id: 0x0190, implDate: "2017/09/21", implDate_bq: "2018/11/22", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "中級竜兵", name: "ヴルム", modifier: "帝国銀竜", latent: "白の帝国" }
    , { id: 0x0191, implDate: "2017/09/21", implDate_bq: "2020/03/12", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "魔神", name: "メフィスト", modifier: "帝国魔神団長", latent: "白の帝国" }
    , { id: 0x0192, implDate: "2017/09/21", implDate_bq: "2018/11/22", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "アルケミスト", name: "ヘルミーネ", modifier: "帝国錬金術士", latent: "白の帝国" }
    , { id: 0x0193, implDate: "2017/09/21", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "メイジアーマー", name: "ルーテ", modifier: "帝国魔鎧兵", latent: "白の帝国" }
    , { id: 0x0194, implDate: "2017/09/30", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "van" , class: "モンスターブレイカー", name: "フォルテ", modifier: "帝国封印剣士", latent: "白の帝国", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x0195, implDate: "2017/10/05", implDate_bq: "2019/06/20", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "インペリアルナイト", name: "アリーセ", modifier: "帝国騎士", latent: "白の帝国" }
    , { id: 0x0196, implDate: "2017/10/05", implDate_bq: "2020/02/13", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "モンスターブレイカー", name: "ラテリア", modifier: "封獣の剣士" }
    , { id: 0x0197, implDate: "2017/10/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびケイティ" }
    , { id: 0x0198, implDate: "2017/10/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "アーチャー", name: "ちびナナリー" }
    , { id: 0x0199, implDate: "2017/10/19", implDate_bq: "2018/09/20", obtain: [ "ev", "item" ], rarity: "b" , depType: "rear", class: "シーフ", name: "サバル", modifier: "黒猫大怪盗" }
    , { id: 0x019a, implDate: "2017/10/19", implDate_bq: "2019/05/23", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "マーチャント", name: "ディエーラ", modifier: "隊商長" }
    , { id: 0x019b, implDate: "2017/10/26", implDate_bq: "2019/10/24", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "イビルプリンセス", name: "ミサ", modifier: "祝祭の南瓜姫", latent: "ハロウィン" }
    , { id: 0x019c, implDate: "2017/10/26", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "b" , depType: "rear", class: "政務官", name: "アンナ", modifier: "戦場の政務官", derivation: "軍服", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x019d, implDate: "2017/10/27", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "van" , class: "グランドナイト", name: "レイファ", modifier: "スズランの騎士" }
    , { id: 0x019e, implDate: "2017/11/02", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "魔物使い", name: "ブランシュ", modifier: "魔物使い" }
    , { id: 0x019f, implDate: "2017/11/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ワルキューレ", name: "ちびキャリー" }
    , { id: 0x01a0, implDate: "2017/11/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ウィッチ", name: "ちびデスピア" }
    , { id: 0x01a1, implDate: "2017/11/11", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "p" , depType: "van" , class: "エンジェル", name: "フォニア", modifier: "堕天使", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x01a2, implDate: "2017/11/16", implDate_bq: "2019/06/20", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ドラゴンプリンセス", name: "エルドラ", modifier: "金色の竜姫" }
    , { id: 0x01a3, implDate: "2017/11/22", implDate_bq: "2019/04/18", obtain: [ "ev", "item" ], rarity: "p" , depType: "van" , class: "妖狐", name: "堕姫", modifier: "妖狐 " }
    , { id: 0x01a4, implDate: "2017/11/22", implDate_bq: "2020/06/11", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "グリフィンライダー", name: "リュクス", modifier: "鷲獅騎兵" }
    , { id: 0x01a5, implDate: "2017/11/30", implDate_bq: "2019/08/15", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "呪術使い", name: "オロチヒメ", modifier: "蛇霊の呪術師" }
    , { id: 0x01a6, implDate: "2017/12/07", implDate_bq: "2018/05/17", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "ロイヤルガード", name: "ネフティ", modifier: "聖槍の守護者" }
    , { id: 0x01a7, implDate: "2017/12/07", implDate_bq: "2018/12/27", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "ベルニス", modifier: "聖鈴の大盾", derivation: "クリスマス" }
    , { id: 0x01a8, implDate: "2017/12/07", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "魔法剣士", name: "シャルロット", modifier: "聖夜の魔剣", derivation: "クリスマス" }
    , { id: 0x01a9, implDate: "2017/12/07", implDate_bq: "2018/12/27", obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "ダークプリースト", name: "プシュケ", modifier: "闇司祭" }
    , { id: 0x01aa, implDate: "2017/12/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "メイド", name: "ちびセーラ" }
    , { id: 0x01ab, implDate: "2017/12/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "アーチャー", name: "ちびソーマ" }
    , { id: 0x01ac, implDate: "2017/12/14", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "モンスターブレイカー", name: "テンマ", modifier: "封鎧の剣士" }
    , { id: 0x01ad, implDate: "2017/12/15", implDate_bq: "2019/06/20", obtain: [ "sp", "gift" ], rarity: "p" , depType: "van" , class: "ローグ", name: "シプリア", modifier: "聖夜の盗賊", derivation: "クリスマス" }
    , { id: 0x01ae, implDate: "2017/12/28", implDate_bq: "2018/09/20", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "重装砲兵", name: "フリーデ", modifier: "帝国重装砲兵", latent: "白の帝国" }
    , { id: 0x01af, implDate: "2017/12/28", implDate_bq: "2019/02/21", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "天狗", name: "クラマ", modifier: "黒翼の大天狗" }
    , { id: 0x01b0, implDate: "2017/12/28", implDate_bq: "2021/03/18", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "エンチャンター", name: "アンリ", modifier: "付与魔術師" }
    
    // 2018
    , { id: 0x01b1, implDate: "2018/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ヒーラー", name: "イリス", modifier: "春着の聖女", derivation: "お正月" }
    , { id: 0x01b2, implDate: "2018/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ソルジャー", name: "ケイティ", modifier: "年賀の教官", derivation: "お正月" }
    , { id: 0x01b3, implDate: "2018/01/01", implDate_bq: "2019/01/31", obtain: [ "ev", "else" ], rarity: "g" , depType: "rear", class: "ヒーラー", name: "イーリス", modifier: "新春の癒し手", derivation: "お正月" }
    , { id: 0x01b4, implDate: "2018/01/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "サムライ", name: "ちびシズカ" }
    , { id: 0x01b5, implDate: "2018/01/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "妖狐", name: "ちびカヨウ" }
    , { id: 0x01b6, implDate: "2018/01/11", implDate_bq: "2020/09/17", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "グランドナイト", name: "シェルト", modifier: "守護騎士" }
    , { id: 0x01b7, implDate: "2018/01/25", implDate_bq: "2019/01/31", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "キョンシー", name: "ランファ", modifier: "屍骸道士" }
    , { id: 0x01b8, implDate: "2018/01/25", implDate_bq: "2018/12/27", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ヴァンパイアロード", name: "エマ", modifier: "絢爛の吸血鬼" }
    , { id: 0x01b9, implDate: "2018/02/01", implDate_bq: "2019/03/22", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ダークストーカー", name: "チャーミィ", modifier: "闇使い" }
    , { id: 0x01ba, implDate: "2018/02/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびオリヴィエ" }
    , { id: 0x01bb, implDate: "2018/02/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ロイヤルガード", name: "ちびアリシア" }
    , { id: 0x01bc, implDate: "2018/02/08", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "モンク", name: "アリス", modifier: "一途な武王姫", derivation: "バレンタイン" }
    , { id: 0x01bd, implDate: "2018/02/08", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "サモナー", name: "リノ", modifier: "恋する召喚士", derivation: "バレンタイン" }
    , { id: 0x01be, implDate: "2018/02/09", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "p" , depType: "rear", class: "アコライト", name: "シィル", modifier: "ゼス王国の少女", collabo: 1 }
    , { id: 0x01bf, implDate: "2018/02/15", implDate_bq: "2018/10/18", obtain: [ "ev", "item" ], rarity: "p" , depType: "van" , class: "鬼", name: "リンドウ", modifier: "蒼角の鬼娘" }
    , { id: 0x01c0, implDate: "2018/02/15", implDate_bq: "2019/02/21", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "鍛冶職人", name: "キャラット", modifier: "鍛冶職人" }
    , { id: 0x01c1, implDate: "2018/02/15", implDate_bq: "2019/01/31", obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "レンジャー", name: "リナリア", modifier: "魔界森の番人" }
    , { id: 0x01c2, implDate: "2018/02/16", implDate_bq: "2019/02/21", obtain: [ "sp", "gift" ], rarity: "p" , depType: "rear", class: "ウィッチ", name: "リュリュ", modifier: "甘菓子の魔女", derivation: "バレンタイン" }
    , { id: 0x01c3, implDate: "2018/02/22", implDate_bq: "2018/12/27", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "パイレーツ", name: "デューオ", modifier: "無双の海賊" }
    , { id: 0x01c4, implDate: "2018/03/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "ダンサー", name: "シャルキー", modifier: "踊り子" }
    , { id: 0x01c5, implDate: "2018/03/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "モンク", name: "ちびモモ" }
    , { id: 0x01c6, implDate: "2018/03/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "砲術士", name: "ちびフレデリカ" }
    , { id: 0x01c7, implDate: "2018/03/08", implDate_bq: "2021/10/14", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "サッパー", name: "ドリー", modifier: "技工兵" }
    , { id: 0x01c8, implDate: "2018/03/15", implDate_bq: "2019/03/22", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "道化師", name: "ワンダーハート", modifier: "道化師" }
    , { id: 0x01c9, implDate: "2018/03/29", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "真人", name: "太公望" }
    , { id: 0x01ca, implDate: "2018/03/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "キョンシー", name: "スーシェン", modifier: "屍仙道士" }
    , { id: 0x01cb, implDate: "2018/03/29", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "グランドナイト", name: "サリス", modifier: "亡国の守護騎士" }
    , { id: 0x01cc, implDate: "2018/03/30", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "rear", class: "ライフリンカー", name: "サルース", modifier: "神鎖の救命師" }
    , { id: 0x01cd, implDate: "2018/04/05", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "メイジ", name: "メーリス", modifier: "魔学の研修生", derivation: "学園" }
    , { id: 0x01ce, implDate: "2018/04/05", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "ウィッチ", name: "ネーニャ", modifier: "勤勉猫魔女", derivation: "学園" }
    , { id: 0x01cf, implDate: "2018/04/05", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "g" , depType: "rear", class: "パイレーツ", name: "ジョヴァンニ", modifier: "海賊番長", derivation: "学園", male: 1 }
    , { id: 0x01d0, implDate: "2018/04/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ヘビーアーマー", name: "ちびベルニス" }
    , { id: 0x01d1, implDate: "2018/04/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ダークファイター", name: "ちびコーネリア" }
    , { id: 0x01d2, implDate: "2018/04/19", implDate_bq: "2019/04/18", obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "アルケミスト", name: "レーレン", modifier: "錬金講師" }
    , { id: 0x01d3, implDate: "2018/04/19", implDate_bq: "2019/06/20", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "モンスターブレイカー", name: "ティール", modifier: "封鋼の剣士" }
    , { id: 0x01d4, implDate: "2018/04/26", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "b" , depType: "rear", class: "政務官", name: "アンナ", modifier: "アイドル政務官", derivation: "アイドル", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x01d5, implDate: "2018/04/26", implDate_bq: "2019/07/25", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "雷公", name: "レミィ", modifier: "雷神の娘" }
    , { id: 0x01d6, implDate: "2018/04/26", implDate_bq: "2019/07/25", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "風伯", name: "クーコ", modifier: "風神の娘" }
    , { id: 0x01d7, implDate: "2018/05/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ワルキューレ", name: "ちびクリッサ" }
    , { id: 0x01d8, implDate: "2018/05/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "砲術士", name: "ちびメル" }
    , { id: 0x01d9, implDate: "2018/05/10", implDate_bq: "2019/05/23", obtain: [ "ev", "item" ], rarity: "p" , depType: "rear", class: "風水使い", name: "メイファ", modifier: "風詠みの少女" }
    , { id: 0x01da, implDate: "2018/05/10", implDate_bq: "2019/11/14", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "インペリアルナイト", name: "ディアナ", modifier: "帝国騎士団長", latent: "白の帝国" }
    , { id: 0x01db, implDate: "2018/05/10", implDate_bq: "2018/11/22", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "モンク", name: "リーザ", modifier: "帝国拳士", latent: "白の帝国" }
    , { id: 0x01dc, implDate: "2018/05/10", implDate_bq: "2018/11/22", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "メイド", name: "マリカ", modifier: "帝国武術女官", latent: "白の帝国" }
    , { id: 0x01dd, implDate: "2018/05/10", implDate_bq: "2018/11/22", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "ヘビーアーマー", name: "フィリーネ", modifier: "帝国重装歩兵", latent: "白の帝国" }
    , { id: 0x01de, implDate: "2018/05/11", implDate_bq: null        , obtain: [ "ev", "else" ], rarity: "g" , depType: "van" , class: "天狗", name: "グレン", modifier: "天狗", male: 1 }
    , { id: 0x01df, implDate: "2018/05/24", implDate_bq: "2019/03/22", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ダークファイター", name: "ダルク", modifier: "暗黒騎士" }
    , { id: 0x01e0, implDate: "2018/05/26", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "rear", class: "道化師", name: "プリスナ", modifier: "歪み角の" }
    , { id: 0x01e1, implDate: "2018/05/31", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "邪仙", name: "金光聖菩" }
    , { id: 0x01e2, implDate: "2018/06/07", implDate_bq: "2019/03/22", obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "ヴァンパイアハンター", name: "ヒューナ", modifier: "凶鳥の射手" }
    , { id: 0x01e3, implDate: "2018/06/07", implDate_bq: "2019/01/31", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "プリンセス", name: "ジュリア" }
    , { id: 0x01e4, implDate: "2018/06/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ローグ", name: "ちびベルナ" }
    , { id: 0x01e5, implDate: "2018/06/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "サムライ", name: "ちびチズル" }
    , { id: 0x01e6, implDate: "2018/06/14", implDate_bq: "2019/04/18", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "中級竜兵", name: "リキュノス", modifier: "蒼竜の" }
    , { id: 0x01e7, implDate: "2018/06/21", implDate_bq: "2019/05/23", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "エンジェル", name: "セフィーレ", modifier: "主天使" }
    , { id: 0x01e8, implDate: "2018/06/28", implDate_bq: "2021/04/15", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "鍛冶職人", name: "ルミアン", modifier: "鍛冶職人" }
    , { id: 0x01e9, implDate: "2018/06/28", implDate_bq: "2020/06/11", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "風水使い", name: "リンネ", modifier: "刻詠の花嫁", derivation: "花嫁" }
    , { id: 0x01ea, implDate: "2018/07/05", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "アベンジャー", name: "ナキア", modifier: "黒渦角の" }
    , { id: 0x01eb, implDate: "2018/07/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "エンジェル", name: "ちびソフィー" }
    , { id: 0x01ec, implDate: "2018/07/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "サモナー", name: "ちびリノ" }
    , { id: 0x01ed, implDate: "2018/07/12", implDate_bq: null        , obtain: [ "ev", "item" ], rarity: "b" , depType: "rear", class: "サモナー", name: "ファルネ", modifier: "花嫁姿の召喚士", derivation: "花嫁" }
    , { id: 0x01ee, implDate: "2018/07/12", implDate_bq: "2021/01/14", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "魔神", name: "ベルーフェ", modifier: "怠惰の魔神" }
    , { id: 0x01ef, implDate: "2018/07/19", implDate_bq: "2020/02/13", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "幻獣使い", name: "ホリー", modifier: "幻獣使い" }
    , { id: 0x01f0, implDate: "2018/07/19", implDate_bq: "2019/06/20", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "ワルキューレ", name: "キャリー", modifier: "渚の槍騎兵", derivation: "水着" }
    , { id: 0x01f1, implDate: "2018/07/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "武将【恋姫】", name: "関羽", collabo: 1 }
    , { id: 0x01f2, implDate: "2018/07/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "軍師【恋姫】", name: "諸葛亮", collabo: 1 }
    , { id: 0x01f3, implDate: "2018/07/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "武将【恋姫】", name: "趙雲", collabo: 1 }
    , { id: 0x01f4, implDate: "2018/07/27", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "b" , depType: "van" , class: "君主【恋姫】", name: "孫堅", collabo: 1 }
    , { id: 0x01f5, implDate: "2018/08/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "エンジェル", name: "ちびエルン" }
    , { id: 0x01f6, implDate: "2018/08/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ビショップ", name: "ちびエターナー" }
    , { id: 0x01f7, implDate: "2018/08/09", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "君主【恋姫】", name: "孫権", collabo: 1 }
    , { id: 0x01f8, implDate: "2018/08/09", implDate_bq: "2019/08/15", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "アーチャー", name: "ナナリー", modifier: "白浴衣の弓乙女", derivation: "浴衣" }
    , { id: 0x01f9, implDate: "2018/08/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "ヴァンパイアハンター", name: "フーリ", modifier: "海辺の彩り狩人", derivation: "水着" }
    , { id: 0x01fa, implDate: "2018/08/09", implDate_bq: null        , obtain: [ "ev", "popu" ], rarity: "p" , depType: "rear", class: "魔物使い", name: "シュシュ", modifier: "兎耳の魔物使い" }
    , { id: 0x01fb, implDate: "2018/08/23", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "サモナー", name: "アクアマリー", modifier: "召喚士" }
    , { id: 0x01fc, implDate: "2018/08/30", implDate_bq: "2019/12/19", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "レンジャー", name: "ロヴィニア", modifier: "陽炎の森番" }
    , { id: 0x01fd, implDate: "2018/09/06", implDate_bq: "2021/12/09", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "真人", name: "竜吉公主" }
    , { id: 0x01fe, implDate: "2018/09/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "モンク", name: "ちびアリス" }
    , { id: 0x01ff, implDate: "2018/09/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "メイジ", name: "ちびメーリス" }
    , { id: 0x0200, implDate: "2018/09/13", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "道化師", name: "紅牡丹", modifier: "千両かぶき姫 " }
    , { id: 0x0201, implDate: "2018/09/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "エレメンタラー", name: "ユキヒメ", modifier: "氷霊使い" }
    , { id: 0x0202, implDate: "2018/09/20", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ライフリンカー", name: "ルメディア", modifier: "命鎖使い" }
    , { id: 0x0203, implDate: "2018/09/20", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "シーフ", name: "ピッキー", modifier: "新進の泥棒" }
    , { id: 0x0204, implDate: "2018/09/27", implDate_bq: "2020/12/17", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ネクロマンサー", name: "メルアビス", modifier: "冥霊魔術師" }
    , { id: 0x0205, implDate: "2018/10/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "クロノウィッチ", name: "アーリー", modifier: "時の魔女" }
    , { id: 0x0206, implDate: "2018/10/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびアルティア" }
    , { id: 0x0207, implDate: "2018/10/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ローグ", name: "ちびセシリー" }
    , { id: 0x0208, implDate: "2018/10/11", implDate_bq: "2019/05/23", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "サッパー", name: "マイン", modifier: "技工兵" }
    , { id: 0x0209, implDate: "2018/10/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "イモータルプリンセス", name: "カルマ", modifier: "南瓜祭の花嫁", derivation: "ハロウィン" }
    , { id: 0x020a, implDate: "2018/10/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "パイレーツ", name: "ヴェロッテ", modifier: "仮装海賊", derivation: "ハロウィン" }
    , { id: 0x020b, implDate: "2018/10/25", implDate_bq: "2020/02/13", obtain: [ "ev", "item" ], rarity: "b" , depType: "van" , class: "アベンジャー", name: "ノワール", modifier: "降魔の復讐者" }
    , { id: 0x020c, implDate: "2018/10/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "騎士【七つの大罪】", name: "メリオダス", male: 1, collabo: 1 }
    , { id: 0x020d, implDate: "2018/10/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "王女【七つの大罪】", name: "エリザベス", collabo: 1 }
    , { id: 0x020e, implDate: "2018/10/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "アーチャー", name: "キャロップ", modifier: "獣耳の射手" }
    , { id: 0x020f, implDate: "2018/10/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "盗賊【七つの大罪】", name: "バン", male: 1, collabo: 1 }
    , { id: 0x0210, implDate: "2018/10/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "巨人【七つの大罪】", name: "ディアンヌ", collabo: 1 }
    , { id: 0x0211, implDate: "2018/10/25", implDate_bq: "2019/05/23", obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "メイジ", name: "キャンディ", modifier: "お菓子魔術師", latent: "ハロウィン" }
    , { id: 0x0212, implDate: "2018/11/01", implDate_bq: null        , obtain: [ "ev", "else" ], rarity: "b" , depType: "van" , class: "妖精【七つの大罪】", name: "キング", male: 1, collabo: 1 }
    , { id: 0x0213, implDate: "2018/11/01", implDate_bq: "2019/11/14", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "サムライ", name: "ジュウベエ", modifier: "東国の大剣豪" }
    , { id: 0x0214, implDate: "2018/11/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "アーチャー", name: "ちびスピカ" }
    , { id: 0x0215, implDate: "2018/11/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびイリス" }
    , { id: 0x0216, implDate: "2018/11/15", implDate_bq: "2021/02/18", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "グリフィンライダー", name: "クゥイル", modifier: "鷲獅騎兵" }
    , { id: 0x0217, implDate: "2018/11/15", implDate_bq: "2019/12/19", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "グラディエーター", name: "バルバラ", modifier: "猛勇剣闘士" }
    , { id: 0x0218, implDate: "2018/11/15", implDate_bq: "2020/01/16", obtain: [ "sp", "gift" ], rarity: "b" , depType: "rear", class: "幻獣使い", name: "シンフー", modifier: "霊麟幻獣使", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x0219, implDate: "2018/11/22", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "p" , depType: "van" , class: "モンク", name: "バイン", modifier: "兎耳武闘家" }
    , { id: 0x021a, implDate: "2018/11/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ヒーラー", name: "アウローラ", modifier: "帝国治癒士長", latent: "白の帝国" }
    , { id: 0x021b, implDate: "2018/11/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "くぐつ使い", name: "クリスタ", modifier: "帝国機甲士", latent: "白の帝国" }
    , { id: 0x021c, implDate: "2018/11/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "マーチャント", name: "ターニャ", modifier: "帝国商人", latent: "白の帝国" }
    , { id: 0x021d, implDate: "2018/11/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "ダンサー", name: "ナターリエ", modifier: "帝国の舞姫", latent: "白の帝国" }
    , { id: 0x021e, implDate: "2018/11/29", implDate_bq: "2020/10/15", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ボウライダー", name: "エメルダ", modifier: "翠森の弓騎兵" }
    , { id: 0x021f, implDate: "2018/11/29", implDate_bq: "2020/01/16", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "道化師", name: "リズリー", modifier: "希代の天才道化" }
    , { id: 0x0220, implDate: "2018/11/29", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "gc", depType: "rear", class: "デモンサモナー", name: "ちびラピス", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x0221, implDate: "2018/12/06", implDate_bq: "2019/09/26", obtain: [ "ev", "star" ], rarity: "b" , depType: "van" , class: "魔王親衛隊", name: "シャディア", modifier: "魔王親衛隊" }
    , { id: 0x0222, implDate: "2018/12/06", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "メイド", name: "アリエル", modifier: "神癒の召使" }
    , { id: 0x0223, implDate: "2018/12/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびテミス" }
    , { id: 0x0224, implDate: "2018/12/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ロイヤルガード", name: "ちびミレイユ" }
    , { id: 0x0225, implDate: "2018/12/07", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "b" , depType: "rear", class: "傀儡人形【封緘】", name: "リリカ", collabo: 1 }
    , { id: 0x0226, implDate: "2018/12/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "陰陽師", name: "タマミ", modifier: "陰陽師" }
    , { id: 0x0227, implDate: "2018/12/30", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "騎士【封緘】", name: "ダルフィア", collabo: 1 }
    , { id: 0x0228, implDate: "2018/12/30", implDate_bq: "2020/12/17", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ダークファイター", name: "コーネリア", modifier: "暗黒聖夜騎士", derivation: "クリスマス" }
    , { id: 0x0229, implDate: "2018/12/30", implDate_bq: "2019/12/19", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "砲術士", name: "カノン", modifier: "聖夜の祝星砲", derivation: "クリスマス" }
    , { id: 0x022a, implDate: "2018/12/30", implDate_bq: "2019/11/14", obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "ヒーラー", name: "カミラ", modifier: "聖祭の癒し手", derivation: "クリスマス" }
    
    // 2019
    , { id: 0x022b, implDate: "2019/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "鬼", name: "鬼刃姫/お正月", modifier: "年賀の着衣始 ", derivation: "お正月" }
    , { id: 0x022c, implDate: "2019/01/01", implDate_bq: "2020/01/16", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "マーチャント", name: "トトノ", modifier: "迎春の祝商人", derivation: "お正月" }
    , { id: 0x022d, implDate: "2019/01/02", implDate_bq: null        , obtain: [ "ev", "else" ], rarity: "g" , depType: "van" , class: "プリンセス", name: "ロゼット", modifier: "晴着の花姫", derivation: "お正月" }
    , { id: 0x022e, implDate: "2019/01/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "アベンジャー", name: "ちびドロシー" }
    , { id: 0x022f, implDate: "2019/01/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "陰陽師", name: "ちびミコト" }
    , { id: 0x0230, implDate: "2019/01/10", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "エレメンタラー", name: "ジルヴァ", modifier: "雷霊使い" }
    , { id: 0x0231, implDate: "2019/01/17", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "妖狐", name: "イズナ", modifier: "妖狐" }
    , { id: 0x0232, implDate: "2019/01/24", implDate_bq: "2020/09/17", obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "幻獣使い", name: "カリン", modifier: "幻獣使い" }
    , { id: 0x0233, implDate: "2019/01/24", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ドラゴンプリンセス", name: "メリュジアナ", modifier: "竜姫" }
    , { id: 0x0234, implDate: "2019/01/31", implDate_bq: "2021/08/12", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ライフリンカー", name: "スピリア", modifier: "魂鎖の紡ぎ手" }
    , { id: 0x0235, implDate: "2019/02/07", implDate_bq: "2019/08/15", obtain: [ "ev", "item" ], rarity: "p" , depType: "van" , class: "天狗", name: "ホムラ", modifier: "天狗" }
    , { id: 0x0236, implDate: "2019/02/07", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "エンジェル", name: "ソフィー", modifier: "恋慕の堕天使", derivation: "バレンタイン" }
    , { id: 0x0237, implDate: "2019/02/07", implDate_bq: "2019/11/14", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ダンサー", name: "マーニー", modifier: "甘美な踊り子", derivation: "バレンタイン" }
    , { id: 0x0238, implDate: "2019/02/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "バンデット", name: "ちびアマンダ" }
    , { id: 0x0239, implDate: "2019/02/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "エンジェル", name: "ちびクロエ" }
    , { id: 0x023a, implDate: "2019/02/21", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "バンデット", name: "リーフ", modifier: "甘恋の山賊娘", derivation: "バレンタイン" }
    , { id: 0x023b, implDate: "2019/02/21", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ドラゴンライダー", name: "スイレン", modifier: "水龍騎士" }
    , { id: 0x023c, implDate: "2019/02/21", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "マーチャント", name: "ミネット", modifier: "ねこみみ商人" }
    , { id: 0x023d, implDate: "2019/02/21", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "ビショップ", name: "ソレーユ", modifier: "見習い司祭" }
    , { id: 0x023e, implDate: "2019/02/21", implDate_bq: "2019/09/26", obtain: [ "ev", "popu" ], rarity: "p" , depType: "rear", class: "ルーンアコライト", name: "ソニア", modifier: "智慧の信徒" }
    , { id: 0x023f, implDate: "2019/02/25", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "van" , class: "ダークファイター", name: "アリエッタ", modifier: "迅雷の黒騎士" }
    , { id: 0x0240, implDate: "2019/02/28", implDate_bq: "2020/11/19", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "サッパー", name: "シャール", modifier: "爆突工兵" }
    , { id: 0x0241, implDate: "2019/03/07", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "セーラー", name: "ジャクリーヌ", modifier: "航海士" }
    , { id: 0x0242, implDate: "2019/03/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ペガサスライダー", name: "ちびリディ" }
    , { id: 0x0243, implDate: "2019/03/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "仙人", name: "ちびナタク" }
    , { id: 0x0244, implDate: "2019/03/14", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ペガサスライダー", name: "ジーニア", modifier: "天馬騎士副団長" }
    , { id: 0x0245, implDate: "2019/03/21", implDate_bq: "2020/06/11", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "魔神", name: "マンモン", modifier: "強欲の魔神" }
    , { id: 0x0246, implDate: "2019/03/21", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "後衛戦術家", name: "シナト", modifier: "疾風の軍師" }
    , { id: 0x0247, implDate: "2019/03/28", implDate_bq: "2021/06/17", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "グランドナイト", name: "アデライド", modifier: "王宮守護騎士" }
    , { id: 0x0248, implDate: "2019/04/04", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "邪仙", name: "王妃人" }
    , { id: 0x0249, implDate: "2019/04/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "クロノウィッチ", name: "トワ", modifier: "時空魔法の優等生", derivation: "学園" }
    , { id: 0x024a, implDate: "2019/04/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "エンジェル", name: "クロエ", modifier: "堕天系お掃除当番", derivation: "学園" }
    , { id: 0x024b, implDate: "2019/04/04", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "g" , depType: "van" , class: "ワルキューレ", name: "ミーシャ", modifier: "騎兵科新入生", derivation: "学園" }
    , { id: 0x024c, implDate: "2019/04/04", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "g" , depType: "van" , class: "魔法剣士", name: "リカルド", modifier: "魔法科剣士", derivation: "学園", male: 1 }
    , { id: 0x024d, implDate: "2019/04/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "魔法剣士", name: "ちびイングリッド" }
    , { id: 0x024e, implDate: "2019/04/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "サモナー", name: "ちびソラノ" }
    , { id: 0x024f, implDate: "2019/04/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "グリフィンライダー", name: "プルーム", modifier: "鷲獅騎兵" }
    , { id: 0x0250, implDate: "2019/04/18", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "鍛冶職人", name: "フィスティア", modifier: "手甲鍛冶師" }
    , { id: 0x0251, implDate: "2019/04/25", implDate_bq: "2019/10/24", obtain: [ "ev", "item" ], rarity: "p" , depType: "van" , class: "ヴァンパイアプリンセス", name: "エストリエ", modifier: "可憐な吸血姫" }
    , { id: 0x0252, implDate: "2019/04/25", implDate_bq: "2022/03/10", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ルーンアコライト", name: "エレオノーラ", modifier: "帝国司教", latent: "白の帝国" }
    , { id: 0x0253, implDate: "2019/04/25", implDate_bq: "2019/10/24", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ソードマスター", name: "ヴァイス", modifier: "帝国剣士", latent: "白の帝国" }
    , { id: 0x0254, implDate: "2019/04/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "ヒルデ", modifier: "帝国狙撃兵", latent: "白の帝国" }
    , { id: 0x0255, implDate: "2019/04/25", implDate_bq: "2021/05/13", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "ワルキューレ", name: "メーア", modifier: "帝国槍騎士", latent: "白の帝国" }
    , { id: 0x0256, implDate: "2019/04/25", implDate_bq: null        , obtain: [ "ev", "else" ], rarity: "g" , depType: "van" , class: "ローグ", name: "ヴィクター", modifier: "帝国暗部", latent: "白の帝国", male: 1 }
    , { id: 0x0257, implDate: "2019/05/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ローグ", name: "ちびキュテリ" }
    , { id: 0x0258, implDate: "2019/05/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "前衛戦術家", name: "ちびマツリ" }
    , { id: 0x0259, implDate: "2019/05/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "イビルプリンセス", name: "スキュレ", modifier: "海魔の麗姫" }
    , { id: 0x025a, implDate: "2019/05/16", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "砲術士", name: "エイプリル", modifier: "砲術教官" }
    , { id: 0x025b, implDate: "2019/05/23", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "忍者", name: "ハツネ", modifier: "くノ一" }
    , { id: 0x025c, implDate: "2019/05/30", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "エイル", modifier: "滅蟲の狙撃手" }
    , { id: 0x025d, implDate: "2019/05/30", implDate_bq: "2020/03/12", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ダークストーカー", name: "アンブレ", modifier: "冥闇の剣士" }
    , { id: 0x025e, implDate: "2019/05/30", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "ボウライダー", name: "フラフィー", modifier: "純白の獣人" }
    , { id: 0x025f, implDate: "2019/06/06", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "怪盗【GBM】", name: "ルパン", collabo: 1 }
    , { id: 0x0260, implDate: "2019/06/06", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "戯曲作家【GBM】", name: "ゲーテ", collabo: 1 }
    , { id: 0x0261, implDate: "2019/06/06", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "水底の支配者【GBM】", name: "ラヴクラフト", collabo: 1 }
    , { id: 0x0262, implDate: "2019/06/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびイーリス" }
    , { id: 0x0263, implDate: "2019/06/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "後衛戦術家", name: "ちびアイシャ" }
    , { id: 0x0264, implDate: "2019/06/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "メイジアーマー", name: "アルマ", modifier: "魔導鎧娘" }
    , { id: 0x0265, implDate: "2019/06/20", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "rear", class: "錬金術師【GBM】", name: "ファウスト", collabo: 1 }
    , { id: 0x0266, implDate: "2019/06/20", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "イモータルプリンセス", name: "ユーフェ", modifier: "紅剣の不死姫" }
    , { id: 0x0267, implDate: "2019/06/27", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "プリンセス", name: "オリヴィエ", modifier: "誓いの妖精姫", derivation: "花嫁" }
    , { id: 0x0268, implDate: "2019/06/27", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ロイヤルガード", name: "アリシア", modifier: "契りの近衛騎士", derivation: "花嫁" }
    , { id: 0x0269, implDate: "2019/07/04", implDate_bq: null        , obtain: [ "ev", "item" ], rarity: "b" , depType: "van" , class: "ローグ", name: "ベルナ", modifier: "赤き盗賊花嫁", derivation: "花嫁" }
    , { id: 0x026a, implDate: "2019/07/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "真人", name: "織姫" }
    , { id: 0x026b, implDate: "2019/07/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびゼノビア" }
    , { id: 0x026c, implDate: "2019/07/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "セーラー", name: "ちびイブキ" }
    , { id: 0x026d, implDate: "2019/07/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ヴァンパイアプリンセス", name: "シルヴィア", modifier: "涼風の吸血姫", derivation: "水着" }
    , { id: 0x026e, implDate: "2019/07/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "陰陽師", name: "ミコト", modifier: "波打ち際の陰陽師", derivation: "水着" }
    , { id: 0x026f, implDate: "2019/07/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "デモンサモナー", name: "ラピス", modifier: "夏海の大悪魔", derivation: "水着" }
    , { id: 0x0270, implDate: "2019/07/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "エンジェル", name: "ミルノ", modifier: "水着の天使長", derivation: "水着" }
    , { id: 0x0271, implDate: "2019/07/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ソードマスター", name: "サンドラ", modifier: "波斬りの剣士", derivation: "水着" }
    , { id: 0x0272, implDate: "2019/07/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "アーチャー", name: "リタ", modifier: "陽影の弓射手", derivation: "水着" }
    , { id: 0x0273, implDate: "2019/07/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "ドルチェ", modifier: "火遊びハンター", derivation: "水着" }
    , { id: 0x0274, implDate: "2019/07/11", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "g" , depType: "rear", class: "メイジ", name: "マーヤ", modifier: "炎夏の魔術師", derivation: "水着" }
    , { id: 0x0275, implDate: "2019/07/25", implDate_bq: "2021/07/15", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "鍛冶職人", name: "ミスリア", modifier: "魔剣鍛冶師" }
    , { id: 0x0276, implDate: "2019/07/25", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "p" , depType: "van" , class: "グランドナイト", name: "フルーリオ", modifier: "守護騎士" }
    , { id: 0x0277, implDate: "2019/08/01", implDate_bq: "2021/07/15", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "イビルプリンセス", name: "ピリカ", modifier: "狼剣の魔姫" }
    , { id: 0x0278, implDate: "2019/08/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "奸雄【恋姫】", name: "曹操", collabo: 1 }
    , { id: 0x0279, implDate: "2019/08/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "勇士【恋姫】", name: "呂布", collabo: 1 }
    , { id: 0x027a, implDate: "2019/08/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "武将【恋姫】", name: "馬超", collabo: 1 }
    , { id: 0x027b, implDate: "2019/08/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "魔法剣士", name: "ちびシャルロット" }
    , { id: 0x027c, implDate: "2019/08/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "魔物使い", name: "ちびモルテナ" }
    , { id: 0x027d, implDate: "2019/08/02", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "b" , depType: "van" , class: "君主【恋姫】", name: "劉備", collabo: 1 }
    , { id: 0x027e, implDate: "2019/08/15", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "軍師【恋姫】", name: "鳳統", collabo: 1 }
    , { id: 0x027f, implDate: "2019/08/15", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "エンチャンター", name: "ハーニィ", modifier: "付与魔術師" }
    , { id: 0x0280, implDate: "2019/08/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "雷公", name: "ラミィ", modifier: "雷雲の浴衣", derivation: "浴衣" }
    , { id: 0x0281, implDate: "2019/08/22", implDate_bq: "2021/08/12", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "風伯", name: "フーコ", modifier: "風雲の浴衣", derivation: "浴衣" }
    , { id: 0x0282, implDate: "2019/08/22", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "gc", depType: "van" , class: "邪仙", name: "ちび金光聖菩", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x0283, implDate: "2019/08/29", implDate_bq: "2021/09/16", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "真人", name: "清源妙道真君" }
    , { id: 0x0284, implDate: "2019/09/05", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ぬらりひょん", name: "サギリ", modifier: "ぬらりひょんの娘" }
    , { id: 0x0285, implDate: "2019/09/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "天狗", name: "ちびコノハ" }
    , { id: 0x0286, implDate: "2019/09/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "クロノウィッチ", name: "ちびトワ" }
    , { id: 0x0287, implDate: "2019/09/12", implDate_bq: "2020/04/16", obtain: [ "ev", "star" ], rarity: "g" , depType: "van" , class: "モンク", name: "マオ", modifier: "浴衣の見返り拳士", derivation: "浴衣" }
    , { id: 0x0288, implDate: "2019/09/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "邪仙", name: "胡喜美" }
    , { id: 0x0289, implDate: "2019/09/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ルーンアコライト", name: "シャイーナ", modifier: "聖魔の信徒" }
    , { id: 0x028a, implDate: "2019/09/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "ヴァンパイアハンター", name: "ピックル", modifier: "新米狩人" }
    , { id: 0x028b, implDate: "2019/09/12", implDate_bq: "2021/04/15", obtain: [ "ev", "popu" ], rarity: "p" , depType: "rear", class: "後衛戦術家", name: "イリオス", modifier: "オークの軍師" }
    , { id: 0x028c, implDate: "2019/09/19", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ドルイド", name: "メリーファ", modifier: "眠りの森巫女" }
    , { id: 0x028d, implDate: "2019/09/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "鬼刃忍", name: "セツナ", modifier: "鬼刃忍" }
    , { id: 0x028e, implDate: "2019/10/03", implDate_bq: "2020/04/16", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ランスマスター", name: "フィロ", modifier: "天穿の槍士" }
    , { id: 0x028f, implDate: "2019/10/03", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "妖狐", name: "ちびキュウビ", latent: "白の帝国" }
    , { id: 0x0290, implDate: "2019/10/03", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ビショップ", name: "ちびポーラ" }
    , { id: 0x0291, implDate: "2019/10/10", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "メイジ", name: "フローガ", modifier: "紅の魔術師" }
    , { id: 0x0292, implDate: "2019/10/10", implDate_bq: "2021/10/14", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ウィッチ", name: "デスピア", modifier: "秋祭の大魔女", derivation: "ハロウィン" }
    , { id: 0x0293, implDate: "2019/10/10", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ヴァンパイアロード", name: "エデン", modifier: "秋夜の吸血鬼", derivation: "ハロウィン" }
    , { id: 0x0294, implDate: "2019/10/17", implDate_bq: "2020/10/15", obtain: [ "ev", "drop" ], rarity: "g" , depType: "van" , class: "ボウライダー", name: "ルナール", modifier: "仮装の弓騎兵", derivation: "ハロウィン" }
    , { id: 0x0295, implDate: "2019/10/24", implDate_bq: "2022/10/13", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "モンスターブレイカー", name: "エレカ", modifier: "封機の剣士" }
    , { id: 0x0296, implDate: "2019/10/31", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "rear", class: "占星術師", name: "ソラス", modifier: "星を詠む者" }
    , { id: 0x0297, implDate: "2019/10/31", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "rear", class: "チェイスハンター", name: "ユージェン", modifier: "影を継ぐ者" }
    , { id: 0x0298, implDate: "2019/10/31", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "bh", depType: "van" , class: "魔竜騎士", name: "アトナテス", modifier: "深淵を知る者", male: 1 }
    , { id: 0x0299, implDate: "2019/10/31", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "van" , class: "魔竜騎士", name: "アトナテス", modifier: "深淵を知る者", male: 1 }
    , { id: 0x029a, implDate: "2019/10/31", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "rear", class: "占星術師", name: "ソラス", modifier: "星を詠む者" }
    , { id: 0x029b, implDate: "2019/10/31", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "rear", class: "チェイスハンター", name: "ユージェン", modifier: "影を継ぐ者" }
    , { id: 0x029c, implDate: "2019/11/07", implDate_bq: "2020/07/16", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "前衛戦術家", name: "ルヴェア", modifier: "戦場指揮官" }
    , { id: 0x029d, implDate: "2019/11/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ヘビーアーマー", name: "ちびレアン" }
    , { id: 0x029e, implDate: "2019/11/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ダークプリースト", name: "ちびドロテア" }
    , { id: 0x029f, implDate: "2019/11/14", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ダークファイター", name: "ヘイオス", modifier: "光闇の騎士" }
    , { id: 0x02a0, implDate: "2019/11/21", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "呪術使い", name: "カタラ", modifier: "呪術師" }
    , { id: 0x02a1, implDate: "2019/11/21", implDate_bq: "2023/02/09", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ロード", name: "アレイダ", modifier: "帝国辺境総督", latent: "白の帝国" }
    , { id: 0x02a2, implDate: "2019/11/21", implDate_bq: "2022/08/10", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "支援工兵", name: "パトリシア", modifier: "帝国防塞工兵", latent: "白の帝国" }
    , { id: 0x02a3, implDate: "2019/11/21", implDate_bq: "2021/05/13", obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "アーチャー", name: "エルネスタ", modifier: "帝国弓兵", latent: "白の帝国" }
    , { id: 0x02a4, implDate: "2019/11/21", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "p" , depType: "van" , class: "ドラゴンプリンセス", name: "クラシル", modifier: "翠色の竜姫" }
    , { id: 0x02a5, implDate: "2019/11/28", implDate_bq: "2020/04/16", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "バンデット", name: "レオーネ", modifier: "百獣の覇者" }
    , { id: 0x02a6, implDate: "2019/11/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "エレメンタラー", name: "ルフレ", modifier: "光霊使い" }
    , { id: 0x02a7, implDate: "2019/11/30", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "s" , depType: "rear", class: "デモンシャーマン", name: "リィーリ", modifier: "魔神の落胤", latent: "白の帝国", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x02a8, implDate: "2019/12/05", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "ph", depType: "rear", class: "ジオマンサー", name: "サナラ", modifier: "大地を紡ぐ者" }
    , { id: 0x02a9, implDate: "2019/12/05", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "g" , depType: "van" , class: "神官戦士", name: "エーテル", modifier: "聖光の修道戦士", derivation: "クリスマス" }
    , { id: 0x02aa, implDate: "2019/12/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ヴァンパイアプリンセス", name: "ちびシルヴィア" }
    , { id: 0x02ab, implDate: "2019/12/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ドルイド", name: "ちびメープル" }
    , { id: 0x02ac, implDate: "2019/12/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "パイレーツ", name: "デューオ", modifier: "聖夜の炸裂海賊", derivation: "クリスマス" }
    , { id: 0x02ad, implDate: "2019/12/12", implDate_bq: "2020/12/17", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "サモナー", name: "ソラノ", modifier: "炎のサンタ召喚士", derivation: "クリスマス" }
    , { id: 0x02ae, implDate: "2019/12/26", implDate_bq: "2021/06/17", obtain: [ "ev", "item" ], rarity: "p" , depType: "both", class: "妖狸", name: "スズネ", modifier: "妖狸" }
    , { id: 0x02af, implDate: "2019/12/26", implDate_bq: "2022/12/08", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "デーモンロード", name: "ハルモニア", modifier: "調停の魔将" }
    , { id: 0x02b0, implDate: "2019/12/26", implDate_bq: "2021/02/18", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "異界召喚士", name: "グリム", modifier: "異界召喚士" }
    
    // 2020
    , { id: 0x02b1, implDate: "2020/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ドラゴンプリンセス", name: "エルドラ", modifier: "振袖の金竜姫", derivation: "お正月" }
    , { id: 0x02b2, implDate: "2020/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "呪術使い", name: "オロチヒメ", modifier: "迎春の呪姫", derivation: "お正月" }
    , { id: 0x02b3, implDate: "2020/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ローグ", name: "ジュノン", modifier: "晴着の看板娘", derivation: "お正月" }
    , { id: 0x02b4, implDate: "2020/01/02", implDate_bq: null        , obtain: [ "ev", "else" ], rarity: "g" , depType: "rear", class: "レンジャー", name: "フウカ", modifier: "破魔の森番", derivation: "お正月" }
    , { id: 0x02b5, implDate: "2020/01/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "メイジアーマー", name: "ちびシルセス" }
    , { id: 0x02b6, implDate: "2020/01/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "風水使い", name: "ちびピピン" }
    , { id: 0x02b7, implDate: "2020/01/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "道化師", name: "ラトゥール", modifier: "不敗の賭博師" }
    , { id: 0x02b8, implDate: "2020/01/16", implDate_bq: "2023/06/15", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "犬神", name: "シロ", modifier: "犬神" }
    , { id: 0x02b9, implDate: "2020/01/17", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "b" , depType: "rear", class: "新米刑事【流星WA】", name: "クラリス", qualifier: "・ツァインブルグ", collabo: 1 }
    , { id: 0x02ba, implDate: "2020/01/23", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "サムライ", name: "ハナダ", modifier: "さすらいの剣士" }
    , { id: 0x02bb, implDate: "2020/01/30", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "rear", class: "交通課職員【流星WA】", name: "四ノ宮小町", collabo: 1 }
    , { id: 0x02bc, implDate: "2020/01/30", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "料理人", name: "オーガスタ", modifier: "天界のシェフ" }
    , { id: 0x02bd, implDate: "2020/02/06", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "神官戦士", name: "エクス", modifier: "恋慕の神官戦士", derivation: "バレンタイン" }
    , { id: 0x02be, implDate: "2020/02/06", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ボウライダー", name: "エメルダ", modifier: "恋煩いの弓騎兵", derivation: "バレンタイン" }
    , { id: 0x02bf, implDate: "2020/02/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびロゼット" }
    , { id: 0x02c0, implDate: "2020/02/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "マーチャント", name: "ちびディエーラ" }
    , { id: 0x02c1, implDate: "2020/02/20", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "g" , depType: "rear", class: "ダンサー", name: "シャルキー", modifier: "恋の応援団", derivation: "バレンタイン" }
    , { id: 0x02c2, implDate: "2020/02/20", implDate_bq: "2021/11/11", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "魔法剣士", name: "タラニア", modifier: "雷光の魔剣士" }
    , { id: 0x02c3, implDate: "2020/02/20", implDate_bq: "2023/01/12", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "デモンルーン", name: "エフネ", modifier: "悪魔妖術師" }
    , { id: 0x02c4, implDate: "2020/02/20", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "ダンサー", name: "ブレリア", modifier: "紅の踊り子" }
    , { id: 0x02c5, implDate: "2020/02/20", implDate_bq: null        , obtain: [ "ev", "popu" ], rarity: "p" , depType: "van" , class: "魔神", name: "サオシュ", modifier: "魔神憑き" }
    , { id: 0x02c6, implDate: "2020/02/20", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "gc", depType: "van" , class: "キョンシー", name: "ちびスーシェン", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x02c7, implDate: "2020/02/27", implDate_bq: "2022/09/08", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "スチームナイト", name: "イザムバード", modifier: "蒸気騎士" }
    , { id: 0x02c8, implDate: "2020/03/05", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "both", class: "ロケットトルーパー", name: "オヴェリー", modifier: "筆頭飛行士" }
    , { id: 0x02c9, implDate: "2020/03/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "パイレーツ", name: "ちびサブリナ" }
    , { id: 0x02ca, implDate: "2020/03/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "アルケミスト", name: "ちびマキナ" }
    , { id: 0x02cb, implDate: "2020/03/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "道化師", name: "リズリー", modifier: "湯けむり奇術師", derivation: "温泉" }
    , { id: 0x02cc, implDate: "2020/03/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "レアン", modifier: "鉄泉の守護者", derivation: "温泉" }
    , { id: 0x02cd, implDate: "2020/03/19", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ルーンアコライト", name: "エリス", modifier: "業火の信徒" }
    , { id: 0x02ce, implDate: "2020/03/26", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "魔物使い", name: "シュシュ", modifier: "湯上り魔物使い", derivation: "温泉" }
    , { id: 0x02cf, implDate: "2020/03/26", implDate_bq: "2022/04/14", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ぬえ", name: "ツグミ", modifier: "夜鳥" }
    , { id: 0x02d0, implDate: "2020/04/02", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "エンチャンター", name: "アンリ", modifier: "頭脳派の体育祭", derivation: "学園" }
    , { id: 0x02d1, implDate: "2020/04/02", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "エレメンタラー", name: "ユキヒメ", modifier: "氷霊応援団", derivation: "学園" }
    , { id: 0x02d2, implDate: "2020/04/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "鍛冶職人", name: "ちびティニー" }
    , { id: 0x02d3, implDate: "2020/04/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ヴァンパイアハンター", name: "ちびフーリ" }
    , { id: 0x02d4, implDate: "2020/04/09", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "g" , depType: "van" , class: "バンデット", name: "モーティマ", modifier: "姫装山賊", derivation: "姫", male: 1, extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x02d5, implDate: "2020/04/16", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "メイジアーマー", name: "ライチ", modifier: "魔鎧科新入生", derivation: "学園" }
    , { id: 0x02d6, implDate: "2020/04/16", implDate_bq: "2024/09/12", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "エンプレス", name: "ハリナ", modifier: "亡国の女皇", latent: "白の帝国" }
    , { id: 0x02d7, implDate: "2020/04/16", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "サッパー", name: "カトリーナ", modifier: "帝国工兵", latent: "白の帝国" }
    , { id: 0x02d8, implDate: "2020/04/16", implDate_bq: "2023/09/14", obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "インペリアルナイト", name: "ゲルトルート", modifier: "帝国騎士", latent: "白の帝国" }
    , { id: 0x02d9, implDate: "2020/04/16", implDate_bq: "2023/06/15", obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "デモンサモナー", name: "アイラ", modifier: "迷子の悪魔召喚士" }
    , { id: 0x02da, implDate: "2020/04/30", implDate_bq: "2023/10/12", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "デモンルーン", name: "エスネア", modifier: "黒翼の魔兵" }
    , { id: 0x02db, implDate: "2020/05/07", implDate_bq: null        , obtain: [ "ev", "item" ], rarity: "b" , depType: "rear", class: "アルケミスト", name: "ニコル", modifier: "錬金調合師" }
    , { id: 0x02dc, implDate: "2020/05/07", implDate_bq: null        , obtain: [ "sp", "eles" ], rarity: "gc", depType: "van" , class: "中級竜兵", name: "ちびヴルム", latent: "白の帝国" }
    , { id: 0x02dd, implDate: "2020/05/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "後衛戦術家", name: "ちびレオナ", latent: "白の帝国" }
    , { id: 0x02de, implDate: "2020/05/14", implDate_bq: "2022/04/14", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "砲術士", name: "スミレ", modifier: "大砲組頭" }
    , { id: 0x02df, implDate: "2020/05/21", implDate_bq: "2022/07/14", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "スチームナイト", name: "ベアッカ", modifier: "蒸気騎士" }
    , { id: 0x02e0, implDate: "2020/05/28", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "アベンジャー", name: "レティシア", modifier: "蒼紅の復讐者" }
    , { id: 0x02e1, implDate: "2020/05/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "van" , class: "バーバリアンクイーン", name: "トゥアン", modifier: "万慧を砕く者" }
    , { id: 0x02e2, implDate: "2020/05/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "rear", class: "ジオマンサー", name: "サナラ", modifier: "大地を紡ぐ者" }
    , { id: 0x02e3, implDate: "2020/05/28", implDate_bq: "2024/01/11", obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "メイジアーマー", name: "フィナン", modifier: "信仰の魔鎧兵" }
    , { id: 0x02e4, implDate: "2020/05/28", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "van" , class: "バーバリアンクイーン", name: "トゥアン", modifier: "万慧を砕く者" }
    , { id: 0x02e5, implDate: "2020/06/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ワルキューレ", name: "ちびエレイン" }
    , { id: 0x02e6, implDate: "2020/06/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ドルイド", name: "ちびフィオレ" }
    , { id: 0x02e7, implDate: "2020/06/11", implDate_bq: "2022/06/09", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ビショップ", name: "エターナー", modifier: "久遠の花嫁", derivation: "花嫁" }
    , { id: 0x02e8, implDate: "2020/06/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "くぐつ使い", name: "リッカ", modifier: "双花の結婚式", derivation: "花嫁" }
    , { id: 0x02e9, implDate: "2020/06/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ドラゴンライダー", name: "スイレン", modifier: "清心の花嫁", derivation: "花嫁" }
    , { id: 0x02ea, implDate: "2020/06/18", implDate_bq: "2022/06/09", obtain: [ "ev", "item" ], rarity: "b" , depType: "rear", class: "マーチャント", name: "ディエーラ", modifier: "約束の花嫁", derivation: "花嫁" }
    , { id: 0x02eb, implDate: "2020/06/18", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "物語を渡る者【GBM】", name: "グリモワール", collabo: 1 }
    , { id: 0x02ec, implDate: "2020/06/18", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "心ある虫【GBM】", name: "虫子", collabo: 1 }
    , { id: 0x02ed, implDate: "2020/06/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "both", class: "妖狸", name: "ヤシマ", modifier: "妖狸" }
    , { id: 0x02ee, implDate: "2020/07/02", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "刑事【GBM】", name: "ガニマール", collabo: 1 }
    , { id: 0x02ef, implDate: "2020/07/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "エンチャンター", name: "ちびアンリ" }
    , { id: 0x02f0, implDate: "2020/07/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "エレメンタラー", name: "ちびクラリーチェ" }
    , { id: 0x02f1, implDate: "2020/07/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "妖狐", name: "キュウビ", modifier: "妖狐の海水浴", derivation: "水着", latent: "白の帝国" }
    , { id: 0x02f2, implDate: "2020/07/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ソードマスター", name: "ジークリンデ", modifier: "真夏の剣聖", derivation: "水着", latent: "白の帝国" }
    , { id: 0x02f3, implDate: "2020/07/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ルーンアコライト", name: "エレオノーラ", modifier: "砂浜の司教", derivation: "水着", latent: "白の帝国" }
    , { id: 0x02f4, implDate: "2020/07/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ソルジャー", name: "リーゼロッテ", modifier: "海の看板娘", derivation: "水着", latent: "白の帝国" }
    , { id: 0x02f5, implDate: "2020/07/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "セーラー", name: "フレイ", modifier: "水兵の夏休み", derivation: "水着", latent: "白の帝国" }
    , { id: 0x02f6, implDate: "2020/07/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "後衛戦術家", name: "レオナ", modifier: "軍師の息抜き", derivation: "水着", latent: "白の帝国" }
    , { id: 0x02f7, implDate: "2020/07/22", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "前衛戦術家", name: "レオラ", modifier: "魅惑の夏元帥", derivation: "水着", latent: "白の帝国" }
    , { id: 0x02f8, implDate: "2020/07/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "犬神", name: "ツムジ", modifier: "犬神" }
    , { id: 0x02f9, implDate: "2020/07/26", implDate_bq: null        , obtain: [ "ev", "else" ], rarity: "g" , depType: "van" , class: "ランスマスター", name: "コルム", modifier: "信仰の槍士" }
    , { id: 0x02fa, implDate: "2020/07/30", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "魔神", name: "メフィスト", modifier: "魔神の水遊び", derivation: "水着", latent: "白の帝国" }
    , { id: 0x02fb, implDate: "2020/07/30", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "インペリアルナイト", name: "ディアナ", modifier: "誘惑の日差し", derivation: "水着", latent: "白の帝国" }
    , { id: 0x02fc, implDate: "2020/07/30", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ヒーラー", name: "アウローラ", modifier: "砂浜に咲く花", derivation: "水着", latent: "白の帝国" }
    , { id: 0x02fd, implDate: "2020/07/30", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ワルキューレ", name: "メーア", modifier: "完全無欠の夏休み", derivation: "水着", latent: "白の帝国" }
    , { id: 0x02fe, implDate: "2020/07/30", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ヒーラー", name: "エリアス", modifier: "夏風の治癒士", derivation: "水着", latent: "白の帝国" }
    , { id: 0x02ff, implDate: "2020/07/30", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ダンサー", name: "ナターリエ", modifier: "真夏の公演", derivation: "水着", latent: "白の帝国" }
    , { id: 0x0300, implDate: "2020/08/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびリーゼロッテ", latent: "白の帝国" }
    , { id: 0x0301, implDate: "2020/08/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "魔神", name: "ちびメフィスト", latent: "白の帝国" }
    , { id: 0x0302, implDate: "2020/08/13", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "レンジャー", name: "ローザ", modifier: "真夏のいざない", derivation: "水着", latent: "白の帝国" }
    , { id: 0x0303, implDate: "2020/08/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ライフリンカー", name: "スピリア", modifier: "宵の花鎖", derivation: "浴衣" }
    , { id: 0x0304, implDate: "2020/08/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "神官戦士", name: "フェルミ", modifier: "祭夜の神官戦士", derivation: "浴衣" }
    , { id: 0x0305, implDate: "2020/08/13", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "重装砲兵", name: "レギーナ", modifier: "夜祭の重装砲兵", derivation: "浴衣" }
    , { id: 0x0306, implDate: "2020/08/27", implDate_bq: "2024/01/11", obtain: [ "sh"         ], rarity: "b" , depType: "both", class: "ロケットトルーパー", name: "クレール", modifier: "飛行警備隊長" }
    , { id: 0x0307, implDate: "2020/09/03", implDate_bq: "2024/02/08", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "邪仙", name: "趙紅明" }
    , { id: 0x0308, implDate: "2020/09/03", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "モンスターブレイカー", name: "ちびテンマ" }
    , { id: 0x0309, implDate: "2020/09/03", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびリアナ" }
    , { id: 0x030a, implDate: "2020/09/10", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "ソルジャー", name: "ノーマ", modifier: "紅蓮の兵士長" }
    , { id: 0x030b, implDate: "2020/09/10", implDate_bq: "2022/09/08", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "料理人", name: "タオパオ", modifier: "炎の厨師" }
    , { id: 0x030c, implDate: "2020/09/10", implDate_bq: "2023/03/16", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "かまいたち", name: "金糸雀姉妹", modifier: "かまいたち" }
    , { id: 0x030d, implDate: "2020/09/10", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "料理人", name: "ヤマブキ", modifier: "東の料理番" }
    , { id: 0x030e, implDate: "2020/09/10", implDate_bq: null        , obtain: [ "ev", "popu" ], rarity: "b" , depType: "rear", class: "ロード", name: "メアリ", modifier: "翠花の領主" }
    , { id: 0x030f, implDate: "2020/09/10", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "gc", depType: "van" , class: "料理人", name: "ちびオーガスタ", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x0310, implDate: "2020/09/17", implDate_bq: "2022/07/14", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "発明家", name: "タバサ", modifier: "奇想の発明家" }
    , { id: 0x0311, implDate: "2020/09/17", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "アクアナイト", name: "マルスィ", modifier: "潜水騎士" }
    , { id: 0x0312, implDate: "2020/09/17", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "rear", class: "シービショップ", name: "リバン", modifier: "見習い海巫女" }
    , { id: 0x0313, implDate: "2020/09/24", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ランスマスター", name: "トモエ", modifier: "風花の槍士" }
    , { id: 0x0314, implDate: "2020/10/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "符術士", name: "アキラ", modifier: "符術士" }
    , { id: 0x0315, implDate: "2020/10/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ヘビーアーマー", name: "ちびディーナ" }
    , { id: 0x0316, implDate: "2020/10/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "パイレーツ", name: "ちびミネルバ" }
    , { id: 0x0317, implDate: "2020/10/08", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "モンスターブレイカー", name: "レンゲ", modifier: "封妖の弓士" }
    , { id: 0x0318, implDate: "2020/10/08", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ドラゴンシャーマン", name: "ペドラ", modifier: "易占竜" }
    , { id: 0x0319, implDate: "2020/10/15", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ダークストーカー", name: "アンブレ", modifier: "怪夜の仮装剣士", derivation: "ハロウィン" }
    , { id: 0x031a, implDate: "2020/10/15", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ネクロマンサー", name: "メメント", modifier: "菓子祭の魔術師", derivation: "ハロウィン" }
    , { id: 0x031b, implDate: "2020/10/29", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "デモンサモナー", name: "リヴル", modifier: "秋祭の召喚士", derivation: "ハロウィン" }
    , { id: 0x031c, implDate: "2020/10/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "van" , class: "古代魔導機兵", name: "アージェ", modifier: "万機の祖たる者" }
    , { id: 0x031d, implDate: "2020/10/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "rear", class: "転生魔導士", name: "アンブローズ", modifier: "巡り咲く者" }
    , { id: 0x031e, implDate: "2020/10/29", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "van" , class: "古代魔導機兵", name: "アージェ", modifier: "万機の祖たる者" }
    , { id: 0x031f, implDate: "2020/10/29", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "rear", class: "転生魔導士", name: "アンブローズ", modifier: "巡り咲く者" }
    , { id: 0x0320, implDate: "2020/11/05", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "アクアナイト", name: "セディナ", modifier: "潜泳騎士" }
    , { id: 0x0321, implDate: "2020/11/05", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "both", class: "スカイウォリアー", name: "鳥人戦士", modifier: "鳶翼の", male: 1 }
    , { id: 0x0322, implDate: "2020/11/05", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "both", class: "スカイシューター", name: "アエロ", modifier: "雀翼の射手" }
    , { id: 0x0323, implDate: "2020/11/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびアンジェリーネ", latent: "白の帝国" }
    , { id: 0x0324, implDate: "2020/11/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ソードマスター", name: "ちびジークリンデ", latent: "白の帝国" }
    , { id: 0x0325, implDate: "2020/11/12", implDate_bq: "2022/01/13", obtain: [ "ev", "star" ], rarity: "p" , depType: "both", class: "スカイウォリアー", name: "ライノー", modifier: "鷲翼の戦士" }
    , { id: 0x0326, implDate: "2020/11/12", implDate_bq: "2021/11/11", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "メイジ", name: "テュト", modifier: "妖精賢者" }
    , { id: 0x0327, implDate: "2020/11/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "アーチャー", name: "ポミエ", modifier: "紅玉の射手" }
    , { id: 0x0328, implDate: "2020/11/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "ヒーラー", name: "シンディ", modifier: "治癒術士" }
    , { id: 0x0329, implDate: "2020/11/19", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "プリンセス", name: "ヨシノ" }
    , { id: 0x032a, implDate: "2020/11/26", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "both", class: "スカイシューター", name: "オーキュ", modifier: "覚賀鳥の射手" }
    , { id: 0x032b, implDate: "2020/11/26", implDate_bq: "2022/08/10", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "幻獣使い", name: "ツキコ", modifier: "彷徨の幻獣使い", latent: "白の帝国" }
    , { id: 0x032c, implDate: "2020/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "発明家", name: "ヘンドリカ", modifier: "帝国発明家", latent: "白の帝国" }
    , { id: 0x032d, implDate: "2020/11/26", implDate_bq: "2022/03/10", obtain: [ "sh"         ], rarity: "p" , depType: "both", class: "スカウト", name: "カーナ", modifier: "帝国斥候", latent: "白の帝国" }
    , { id: 0x032e, implDate: "2020/11/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "both", class: "ロケットトルーパー", name: "ケイトリッジ", modifier: "帝国飛行士", latent: "白の帝国" }
    , { id: 0x032f, implDate: "2020/12/03", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ローグ", name: "ちびジュノン" }
    , { id: 0x0330, implDate: "2020/12/03", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ドラゴンライダー", name: "ちびティファ" }
    , { id: 0x0331, implDate: "2020/12/10", implDate_bq: "2023/12/14", obtain: [ "ev", "star" ], rarity: "b" , depType: "both", class: "スカイウォリアー", name: "パリオス", modifier: "白翼の戦士" }
    , { id: 0x0332, implDate: "2020/12/10", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "ph", depType: "van" , class: "銀腕の神話", name: "トラム", modifier: "銀腕を掲げし者" }
    , { id: 0x0333, implDate: "2020/12/10", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ドラゴンライダー", name: "ティファ", modifier: "聖なる銀夜", derivation: "クリスマス" }
    , { id: 0x0334, implDate: "2020/12/10", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ダンサー", name: "ブレリア", modifier: "聖夜の踊り子", derivation: "クリスマス" }
    , { id: 0x0335, implDate: "2020/12/24", implDate_bq: null        , obtain: [ "ev", "item" ], rarity: "b" , depType: "van" , class: "ダークファイター", name: "ヘイオス", modifier: "光と闇の聖夜", derivation: "クリスマス" }
    , { id: 0x0336, implDate: "2020/12/24", implDate_bq: "2022/10/13", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "シービショップ", name: "ハルフゥ", modifier: "紫鱗の海巫女" }
    , { id: 0x0337, implDate: "2020/12/24", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "狛犬", name: "コマ", modifier: "狛犬" }
    , { id: 0x0338, implDate: "2020/12/24", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ウィッチ", name: "ユーティ", modifier: "森の魔女" }
    , { id: 0x0339, implDate: "2020/12/24", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "シーソルジャー", name: "オーベッド", modifier: "魚人戦士", male: 1 }
    
    // 2021
    , { id: 0x033a, implDate: "2021/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "魔王親衛隊", name: "シャディア", modifier: "晴着の親衛隊", derivation: "お正月" }
    , { id: 0x033b, implDate: "2021/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "異界召喚士", name: "グリム", modifier: "新春召喚始め", derivation: "お正月" }
    , { id: 0x033c, implDate: "2021/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "デモンルーン", name: "エフネ", modifier: "悪魔の新春祝い", derivation: "お正月" }
    , { id: 0x033d, implDate: "2021/01/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "魔王親衛隊", name: "ちびシャディア" }
    , { id: 0x033e, implDate: "2021/01/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "呪術使い", name: "ちびオロチヒメ" }
    , { id: 0x033f, implDate: "2021/01/14", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ヴァンパイアロード", name: "エマ", modifier: "湯けむり吸血鬼", derivation: "温泉" }
    , { id: 0x0340, implDate: "2021/01/14", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "魔神", name: "サオシュ", modifier: "温泉の魔神憑き", derivation: "温泉" }
    , { id: 0x0341, implDate: "2021/01/28", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "アーチャー", name: "ソーマ", modifier: "弓兵の湯浴み", derivation: "温泉" }
    , { id: 0x0342, implDate: "2021/01/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "忍者", name: "チヨメ", modifier: "くノ一" }
    , { id: 0x0343, implDate: "2021/02/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "テレーゼ", modifier: "陽光の獅盾" }
    , { id: 0x0344, implDate: "2021/02/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ヴァンパイアロード", name: "ちびエマ" }
    , { id: 0x0345, implDate: "2021/02/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ネクロマンサー", name: "ちびメメント" }
    , { id: 0x0346, implDate: "2021/02/10", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "ワルキューレ", name: "スルーズ", modifier: "天槍騎士団スルーズ" }
    , { id: 0x0347, implDate: "2021/02/10", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "料理人", name: "オーガスタ", modifier: "神業菓子職人", derivation: "バレンタイン" }
    , { id: 0x0348, implDate: "2021/02/10", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "前衛戦術家", name: "ルヴェア", modifier: "慕情の指揮官", derivation: "バレンタイン" }
    , { id: 0x0349, implDate: "2021/02/25", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "神官戦士", name: "エレット", modifier: "内緒の告白", derivation: "バレンタイン" }
    , { id: 0x034a, implDate: "2021/02/25", implDate_bq: "2021/12/09", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "キョンシー", name: "フーロン", modifier: "幽境道士" }
    , { id: 0x034b, implDate: "2021/02/25", implDate_bq: "2022/02/10", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "フェンリルシャーマン", name: "ツァーユ", modifier: "白狼の朋" }
    , { id: 0x034c, implDate: "2021/02/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "料理人", name: "キホル", modifier: "魔界料理人" }
    , { id: 0x034d, implDate: "2021/02/25", implDate_bq: "2023/08/10", obtain: [ "ev", "popu" ], rarity: "b" , depType: "van" , class: "鬼刃忍", name: "タチバナ", modifier: "鬼刃忍" }
    , { id: 0x034e, implDate: "2021/02/25", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "gc", depType: "rear", class: "エレメンタラー", name: "ちびルフレ", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x034f, implDate: "2021/03/04", implDate_bq: "2023/04/13", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "スチームナイト", name: "ユカリ", modifier: "蒸気武者" }
    , { id: 0x0350, implDate: "2021/03/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "アーチャー", name: "ちびアーシェラ" }
    , { id: 0x0351, implDate: "2021/03/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ダンサー", name: "ちびミヤビ" }
    , { id: 0x0352, implDate: "2021/03/18", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "メイド", name: "サクラ", modifier: "東国武装女中" }
    , { id: 0x0353, implDate: "2021/03/25", implDate_bq: "2022/01/13", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "エレメンタラー", name: "ニーヴ", modifier: "混沌霊使い" }
    , { id: 0x0354, implDate: "2021/04/01", implDate_bq: "2024/03/14", obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "テンプルナイト", name: "アレクシア", modifier: "背教の騎士" }
    , { id: 0x0355, implDate: "2021/04/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ウィッチ", name: "リエーフ", modifier: "百獣の魔術師" }
    , { id: 0x0356, implDate: "2021/04/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "ソルジャー", name: "アビー", modifier: "新米兵士" }
    , { id: 0x0357, implDate: "2021/04/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ドラゴンプリンセス", name: "ちびエルドラ" }
    , { id: 0x0358, implDate: "2021/04/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "神官戦士", name: "ちびセラ" }
    , { id: 0x0359, implDate: "2021/04/07", implDate_bq: null        , obtain: [ "ev", "else" ], rarity: "b" , depType: "van" , class: "迷宮の悪霊", name: "ニミュエ", modifier: "孤独な迷宮守", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x035a, implDate: "2021/04/08", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "p" , depType: "van" , class: "オートマタ", name: "ルイン", modifier: "自動人形", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x035b, implDate: "2021/04/08", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "デモンルーン", name: "エスネア", modifier: "魔界からの留学", derivation: "学園" }
    , { id: 0x035c, implDate: "2021/04/08", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "マーチャント", name: "ミネット", modifier: "ねこみみ購買部", derivation: "学園" }
    , { id: 0x035d, implDate: "2021/04/22", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "天狗", name: "ホムラ", modifier: "茜色の女番長", derivation: "学園" }
    , { id: 0x035e, implDate: "2021/04/22", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "天狗", name: "グレン", modifier: "仮面の天狗教師", derivation: "学園", male: 1 }
    , { id: 0x035f, implDate: "2021/04/22", implDate_bq: "2023/08/10", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ぬりかべ", name: "シラヌイ", modifier: "ぬりかべ" }
    , { id: 0x0360, implDate: "2021/04/22", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "かまいたち", name: "紫苑姉妹", modifier: "かまいたち" }
    , { id: 0x0361, implDate: "2021/04/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "van" , class: "銀腕の神話", name: "トラム", modifier: "銀腕を掲げし者" }
    , { id: 0x0362, implDate: "2021/04/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "van" , class: "ウェポンマスター", name: "アルヴァ", modifier: "万刃を担う者" }
    , { id: 0x0363, implDate: "2021/04/28", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "van" , class: "ウェポンマスター", name: "アルヴァ", modifier: "万刃を担う者" }
    , { id: 0x0364, implDate: "2021/05/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "鬼", name: "ちび鬼刃姫" }
    , { id: 0x0365, implDate: "2021/05/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "風水使い", name: "ちびリンネ" }
    , { id: 0x0366, implDate: "2021/05/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "鬼【ななリン】", name: "葵", collabo: 1 }
    , { id: 0x0367, implDate: "2021/05/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "鬼【ななリン】", name: "アイリス", collabo: 1 }
    , { id: 0x0368, implDate: "2021/05/27", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "鬼【ななリン】", name: "芙蓉", collabo: 1 }
    , { id: 0x0369, implDate: "2021/05/27", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "アーチャー", name: "ナナリー", modifier: "白き花嫁", derivation: "花嫁" }
    , { id: 0x036a, implDate: "2021/05/27", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ドラゴンプリンセス", name: "メリュジアナ", modifier: "竜姫婚姻譚", derivation: "花嫁" }
    , { id: 0x036b, implDate: "2021/05/27", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "中級竜兵", name: "ウィリアス", modifier: "緑竜の" }
    , { id: 0x036c, implDate: "2021/05/27", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "メイジ", name: "ミェール", modifier: "駆け出し魔術師" }
    , { id: 0x036d, implDate: "2021/06/03", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "くぐつ使い", name: "ちびウェンディ" }
    , { id: 0x036e, implDate: "2021/06/03", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "重装砲兵", name: "ちびエルミラ", latent: "白の帝国" }
    , { id: 0x036f, implDate: "2021/06/10", implDate_bq: null        , obtain: [ "ev", "item" ], rarity: "b" , depType: "van" , class: "メイジアーマー", name: "シルセス", modifier: "星天の花嫁", derivation: "花嫁" }
    , { id: 0x0370, implDate: "2021/06/10", implDate_bq: "2024/06/13", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "儀式魔術師", name: "ヘカティエ", modifier: "冥界の魔術師", latent: "白の帝国" }
    , { id: 0x0371, implDate: "2021/06/10", implDate_bq: "2023/02/09", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "料理人", name: "ユッタ", modifier: "帝国料理人", latent: "白の帝国" }
    , { id: 0x0372, implDate: "2021/06/10", implDate_bq: "2024/09/12", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "幻術士", name: "マルティナ", modifier: "帝国幻術士", latent: "白の帝国" }
    , { id: 0x0373, implDate: "2021/06/10", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "重装砲兵", name: "シュペット", modifier: "帝国重装砲兵", latent: "白の帝国" }
    , { id: 0x0374, implDate: "2021/06/10", implDate_bq: "2024/04/11", obtain: [ "tr", "dark" ], rarity: "b" , depType: "rear", class: "ダークプリースト", name: "マレブランケ", modifier: "魔神副団長", latent: "白の帝国" }
    , { id: 0x0375, implDate: "2021/06/24", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "アクアナイト", name: "ヴィアベル", modifier: "潜航騎士" }
    , { id: 0x0376, implDate: "2021/06/24", implDate_bq: null        , obtain: [ "sh"         ], rarity: "sl", depType: "van" , class: "アクアナイト", name: "キュステ", modifier: "新人潜水騎士" }
    , { id: 0x0377, implDate: "2021/07/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "メイド", name: "セーラ", modifier: "水着の筆頭侍女", derivation: "水着" }
    , { id: 0x0378, implDate: "2021/07/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "グラディエーター", name: "アナトリア", modifier: "灼熱の夏英雄", derivation: "水着" }
    , { id: 0x0379, implDate: "2021/07/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "幻獣使い", name: "ツキコ", modifier: "八咫の夏陽", derivation: "水着", latent: "白の帝国" }
    , { id: 0x037a, implDate: "2021/07/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ロード", name: "アレイダ", modifier: "海遊総督", derivation: "水着", latent: "白の帝国" }
    , { id: 0x037b, implDate: "2021/07/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "くぐつ使い", name: "クリスタ", modifier: "満喫海遊び", derivation: "水着", latent: "白の帝国" }
    , { id: 0x037c, implDate: "2021/07/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ボウライダー", name: "マーガレット", modifier: "夏の輝き", derivation: "水着" }
    , { id: 0x037d, implDate: "2021/07/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "インペリアルナイト", name: "アリーセ", modifier: "清爽騎士", derivation: "水着", latent: "白の帝国" }
    , { id: 0x037e, implDate: "2021/07/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "グリフィンライダー", name: "クゥイル", modifier: "真夏に薫る風", derivation: "水着" }
    , { id: 0x037f, implDate: "2021/07/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "グリフィンライダー", name: "ちびリュクス" }
    , { id: 0x0380, implDate: "2021/07/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ヴァンパイアハンター", name: "ちびスー" }
    , { id: 0x0381, implDate: "2021/07/15", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "rear", class: "ネクロマンサー", name: "メルアビス", modifier: "冥霊たちの夏", derivation: "水着" }
    , { id: 0x0382, implDate: "2021/07/15", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "ヒーラー", name: "イーリス", modifier: "癒しの涼波", derivation: "水着" }
    , { id: 0x0383, implDate: "2021/07/21", implDate_bq: "2022/02/10", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "シーソルジャー", name: "フィーヌ", modifier: "翠玉の深海兵" }
    , { id: 0x0384, implDate: "2021/07/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ローグ", name: "シネイド", modifier: "影刃の工作員" }
    , { id: 0x0385, implDate: "2021/07/29", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "b" , depType: "rear", class: "ヒーラー", name: "ドゥマルデ", modifier: "異端審問官", male: 1 }
    , { id: 0x0386, implDate: "2021/08/05", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "幻術士", name: "リュティエ", modifier: "向日葵の幻" }
    , { id: 0x0387, implDate: "2021/08/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "神官戦士", name: "ちびエクス" }
    , { id: 0x0388, implDate: "2021/08/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "猫又", name: "ちびコハル" }
    , { id: 0x0389, implDate: "2021/08/12", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "ハーバリスト", name: "ローズ", modifier: "王宮薬草師" }
    , { id: 0x038a, implDate: "2021/08/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "雷公", name: "レミィ", modifier: "雷雲の浴衣", derivation: "浴衣" }
    , { id: 0x038b, implDate: "2021/08/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "風伯", name: "クーコ", modifier: "風雲の浴衣", derivation: "浴衣" }
    , { id: 0x038c, implDate: "2021/08/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "クロノウィッチ", name: "ココロ", modifier: "お祭り夕涼み", derivation: "浴衣" }
    , { id: 0x038d, implDate: "2021/08/12", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "アーチャー", name: "ベラ", modifier: "晩夏の狩人", derivation: "浴衣" }
    , { id: 0x038e, implDate: "2021/08/26", implDate_bq: "2024/10/10", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "霊刀つくもがみ", name: "ユキザクラ", modifier: "呪刀付喪神" }
    , { id: 0x038f, implDate: "2021/08/26", implDate_bq: "2024/10/10", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "霊刀つくもがみ", name: "フジムラサキ", modifier: "名刀付喪神" }
    , { id: 0x0390, implDate: "2021/09/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "雷公", name: "ちびレミィ" }
    , { id: 0x0391, implDate: "2021/09/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "風伯", name: "ちびクーコ" }
    , { id: 0x0392, implDate: "2021/09/09", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "霊刀つくもがみ", name: "カザキリ", modifier: "斬刀付喪神カザキリ" }
    , { id: 0x0393, implDate: "2021/09/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "ワルキューレ", name: "ピューロ", modifier: "純真の槍騎兵" }
    , { id: 0x0394, implDate: "2021/09/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "シーソルジャー", name: "リトヴァ", modifier: "淡紅の深海兵" }
    , { id: 0x0395, implDate: "2021/09/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "パイレーツ", name: "カリナ", modifier: "可憐海賊" }
    , { id: 0x0396, implDate: "2021/09/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "both", class: "スカイシューター", name: "フーザント", modifier: "黒翼の射手" }
    , { id: 0x0397, implDate: "2021/09/16", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "霊宝つくもがみ", name: "シュカ", modifier: "分福茶釜付喪神" }
    , { id: 0x0398, implDate: "2021/09/22", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "スカラー", name: "アナベラ", modifier: "知識の求道者" }
    , { id: 0x0399, implDate: "2021/09/22", implDate_bq: "2022/05/12", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "モンスターブレイカー", name: "ランヒルド", modifier: "封魔の剣士" }
    , { id: 0x039a, implDate: "2021/09/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "戦巫女", name: "コウメ", modifier: "戦巫女" }
    , { id: 0x039b, implDate: "2021/09/22", implDate_bq: "2022/05/12", obtain: [ "sh"         ], rarity: "p" , depType: "both", class: "スカウト", name: "ミリアム", modifier: "鷹目の偵察兵" }
    , { id: 0x039c, implDate: "2021/09/22", implDate_bq: null        , obtain: [ "ev", "popu" ], rarity: "b" , depType: "van" , class: "重装砲兵", name: "ヴァネッサ", modifier: "鋼の重装砲兵" }
    , { id: 0x039d, implDate: "2021/09/22", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "gc", depType: "van" , class: "キョンシー", name: "ちびフーロン", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x039e, implDate: "2021/09/30", implDate_bq: "2023/03/16", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "夜行さん", name: "ヨユキ", modifier: "夜行さん現当主" }
    , { id: 0x039f, implDate: "2021/10/07", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "料理人", name: "アヅミ", modifier: "山姫" }
    , { id: 0x03a0, implDate: "2021/10/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "メイジアーマー", name: "ちびグレース" }
    , { id: 0x03a1, implDate: "2021/10/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "モンスタースレイヤー", name: "ちびソシエ" }
    , { id: 0x03a2, implDate: "2021/10/14", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "both", class: "スカイウォリアー", name: "パリオス", modifier: "悪戯な白翼", derivation: "ハロウィン" }
    , { id: 0x03a3, implDate: "2021/10/14", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ローグ", name: "セブン", modifier: "仮装盗賊", derivation: "ハロウィン" }
    , { id: 0x03a4, implDate: "2021/10/28", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "エンジェル", name: "セフィーレ", modifier: "天使の悪戯", derivation: "ハロウィン" }
    , { id: 0x03a5, implDate: "2021/10/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ソルジャー", name: "マルゴット", modifier: "帝国教導隊長", latent: "白の帝国" }
    , { id: 0x03a6, implDate: "2021/10/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "サッパー", name: "カテリナ", modifier: "帝国筆頭工兵", latent: "白の帝国" }
    , { id: 0x03a7, implDate: "2021/10/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "エルデ", modifier: "帝国重装騎士", latent: "白の帝国" }
    , { id: 0x03a8, implDate: "2021/10/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "メイジ", name: "イルマ", modifier: "帝国魔術師", latent: "白の帝国" }
    , { id: 0x03a9, implDate: "2021/10/28", implDate_bq: null        , obtain: [ "tr", "dark" ], rarity: "p" , depType: "van" , class: "鬼", name: "サザンカ", modifier: "帝国鬼娘", latent: "白の帝国" }
    , { id: 0x03aa, implDate: "2021/11/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ペガサスライダー", name: "ちびエスタ" }
    , { id: 0x03ab, implDate: "2021/11/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "パイレーツ", name: "ちびデューオ" }
    , { id: 0x03ac, implDate: "2021/11/11", implDate_bq: "2022/12/08", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "デモンシャーマン", name: "レライエ", modifier: "魔神の共鳴者" }
    , { id: 0x03ad, implDate: "2021/11/11", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "魔法剣士", name: "マリレーヌ", modifier: "聖樹の魔剣士" }
    , { id: 0x03ae, implDate: "2021/11/18", implDate_bq: "2023/11/09", obtain: [ "ev", "subj" ], rarity: "b" , depType: "rear", class: "幻術士", name: "タリエ", modifier: "奇譚の幻術士タリエ" }
    , { id: 0x03af, implDate: "2021/11/18", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "p" , depType: "rear", class: "ライフリンカー", name: "シアーシャ", modifier: "絆鎖の救命師" }
    , { id: 0x03b0, implDate: "2021/11/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "van" , class: "魔導生命体", name: "ラーワル", modifier: "魔導を宿す者" }
    , { id: 0x03b1, implDate: "2021/11/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "rear", class: "ファラオ", name: "ホルテウス", modifier: "獅子女の覇者" }
    , { id: 0x03b2, implDate: "2021/11/25", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "rear", class: "ファラオ", name: "ホルテウス", modifier: "獅子女の覇者" }
    , { id: 0x03b3, implDate: "2021/12/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "メイジ", name: "ちびエステル" }
    , { id: 0x03b4, implDate: "2021/12/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ネクロマンサー", name: "ちびメトゥス" }
    , { id: 0x03b5, implDate: "2021/12/09", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "rear", class: "ハーバリスト", name: "ラタトスク", modifier: "世界樹の聖霊" }
    , { id: 0x03b6, implDate: "2021/12/09", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "ph", depType: "van" , class: "魔導生命体", name: "ラーワル", modifier: "魔導を宿す者" }
    , { id: 0x03b7, implDate: "2021/12/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "スカラー", name: "フェリシア", modifier: "魔性の獣学者" }
    , { id: 0x03b8, implDate: "2021/12/09", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "神官戦士", name: "ルチア", modifier: "水辺の神官戦士", derivation: "水着", latent: "白の帝国" }
    , { id: 0x03b9, implDate: "2021/12/09", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "b" , depType: "van" , class: "シャークウォリアー", name: "スカー", modifier: "怒りの鮫戦士", male: 1 }
    , { id: 0x03ba, implDate: "2021/12/16", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "メイジ", name: "テュト", modifier: "祝福の贈り人", derivation: "クリスマス" }
    , { id: 0x03bb, implDate: "2021/12/16", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "サッパー", name: "ドリー", modifier: "聖なる技巧兵", derivation: "クリスマス" }
    , { id: 0x03bc, implDate: "2021/12/29", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "前衛戦術家", name: "ヘレナ", modifier: "聖夜の天才戦術家", derivation: "クリスマス" }
    , { id: 0x03bd, implDate: "2021/12/29", implDate_bq: "2023/07/13", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "オートマタ", name: "アルタ", modifier: "薔薇の自動人形" }
    , { id: 0x03be, implDate: "2021/12/29", implDate_bq: "2023/04/13", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "戦巫女", name: "タツミ", modifier: "影炎の戦巫女" }
    
    // 2022
    , { id: 0x03bf, implDate: "2022/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "前衛戦術家", name: "マツリ", modifier: "智将の筆始め", derivation: "お正月" }
    , { id: 0x03c0, implDate: "2022/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "デモンサモナー", name: "ラピス", modifier: "大悪魔の初詣", derivation: "お正月" }
    , { id: 0x03c1, implDate: "2022/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "真人", name: "太公望", modifier: "謹賀祝仙女 ", derivation: "お正月" }
    , { id: 0x03c2, implDate: "2022/01/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "レンジャー", name: "ちびロヴィニア" }
    , { id: 0x03c3, implDate: "2022/01/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "マーチャント", name: "ちびトトノ" }
    , { id: 0x03c4, implDate: "2022/01/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "忍者", name: "チヨメ", modifier: "湯けむりくノ一", derivation: "温泉" }
    , { id: 0x03c5, implDate: "2022/01/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "砲術士", name: "カノン", modifier: "砲術娘の温泉旅行", derivation: "温泉" }
    , { id: 0x03c6, implDate: "2022/01/27", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "シーソルジャー", name: "フィーヌ", modifier: "翠玉の温泉兵", derivation: "温泉" }
    , { id: 0x03c7, implDate: "2022/01/27", implDate_bq: "2024/02/08", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ワルキューレ", name: "フリア", modifier: "放浪の聖騎兵" }
    , { id: 0x03c8, implDate: "2022/01/27", implDate_bq: "2024/07/11", obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "シービショップ", name: "ムイル", modifier: "深慮の海巫女" }
    , { id: 0x03c9, implDate: "2022/02/03", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "サムライ", name: "ヒバリ", modifier: "思慕の剣豪", derivation: "バレンタイン" }
    , { id: 0x03ca, implDate: "2022/02/03", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "プリンセス", name: "スクハ", modifier: "恋慕の剣姫", derivation: "バレンタイン" }
    , { id: 0x03cb, implDate: "2022/02/03", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ヘビーアーマー", name: "ちびディーネ" }
    , { id: 0x03cc, implDate: "2022/02/03", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "モンスタースレイヤー", name: "ちびドルチェ" }
    , { id: 0x03cd, implDate: "2022/02/17", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "アーチャー", name: "ポミエ", modifier: "恋心の射手", derivation: "バレンタイン" }
    , { id: 0x03ce, implDate: "2022/02/17", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "グランドナイト", name: "アスラハ", modifier: "熱砂の騎士" }
    , { id: 0x03cf, implDate: "2022/02/17", implDate_bq: "2023/11/09", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ドラゴンメイジ", name: "カラザ", modifier: "氷竜魔術士" }
    , { id: 0x03d0, implDate: "2022/02/17", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "both", class: "スカイウォリアー", name: "ポタル", modifier: "木兎翼の戦士" }
    , { id: 0x03d1, implDate: "2022/02/17", implDate_bq: null        , obtain: [ "ev", "popu" ], rarity: "b" , depType: "rear", class: "ドラグーン", name: "ジゼル", modifier: "焔の竜砲騎兵" }
    , { id: 0x03d2, implDate: "2022/02/17", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "gc", depType: "rear", class: "儀式魔術師", name: "ちびヘカティエ", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x03d3, implDate: "2022/02/24", implDate_bq: "2022/11/10", obtain: [ "sh"         ], rarity: "b" , depType: "both", class: "スカウト", name: "レナータ", modifier: "天眼の偵察者" }
    , { id: 0x03d4, implDate: "2022/03/03", implDate_bq: "2024/08/16", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ドラゴンシャーマン", name: "ラウラ", modifier: "白の竜巫女", latent: "白の帝国" }
    , { id: 0x03d5, implDate: "2022/03/03", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "支援工兵", name: "マルレーン", modifier: "帝国建機工兵", latent: "白の帝国" }
    , { id: 0x03d6, implDate: "2022/03/03", implDate_bq: "2024/04/11", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "デーモンロード", name: "イルムガルト", modifier: "闇炎の魔将", latent: "白の帝国" }
    , { id: 0x03d7, implDate: "2022/03/03", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "戦巫女", name: "カオル", modifier: "帝国戦巫女", latent: "白の帝国" }
    , { id: 0x03d8, implDate: "2022/03/03", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "中級竜兵", name: "ちびリキュノス" }
    , { id: 0x03d9, implDate: "2022/03/03", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ボウライダー", name: "ちびリオン" }
    , { id: 0x03da, implDate: "2022/03/03", implDate_bq: null        , obtain: [ "tr", "dark" ], rarity: "p" , depType: "rear", class: "シーフ", name: "レーネ", modifier: "帝都の大泥棒", latent: "白の帝国" }
    , { id: 0x03db, implDate: "2022/03/17", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ダークファイター", name: "コーネリア", modifier: "暗黒学園騎士", derivation: "学園" }
    , { id: 0x03dc, implDate: "2022/03/17", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ソルジャー", name: "ケイティ", modifier: "戦術科教師", derivation: "学園" }
    , { id: 0x03dd, implDate: "2022/03/17", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "p" , depType: "van" , class: "バンデット", name: "モーティマ", modifier: "山賊食堂", derivation: "学園", male: 1 }
    , { id: 0x03de, implDate: "2022/03/31", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "アーチャー", name: "クレア", modifier: "鋼鉄の弓術部員", derivation: "学園" }
    , { id: 0x03df, implDate: "2022/03/31", implDate_bq: "2022/11/10", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "かまいたち", name: "群青姉妹", modifier: "かまいたち" }
    , { id: 0x03e0, implDate: "2022/04/01", implDate_bq: "2023/05/11", obtain: [ "ev", "subj" ], rarity: "b" , depType: "rear", class: "発明家", name: "アルレット", modifier: "超古代発明家" }
    , { id: 0x03e1, implDate: "2022/04/07", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "鬼", name: "アクラ", modifier: "紫炎の鬼傭兵" }
    , { id: 0x03e2, implDate: "2022/04/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "グラディエーター", name: "ちびアナトリア" }
    , { id: 0x03e3, implDate: "2022/04/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "真人", name: "ちび竜吉公主" }
    , { id: 0x03e4, implDate: "2022/04/14", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "エレメンタラー", name: "ニーヴ", modifier: "混沌うさぎの祝祭", derivation: "バニー" }
    , { id: 0x03e5, implDate: "2022/04/14", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "魔法剣士", name: "タラニア", modifier: "黒兎の魔剣士", derivation: "バニー" }
    , { id: 0x03e6, implDate: "2022/04/28", implDate_bq: null        , obtain: [ "ev", "item" ], rarity: "p" , depType: "van" , class: "バンデット", name: "リーフ", modifier: "卵祭りの山賊娘", derivation: "バニー" }
    , { id: 0x03e7, implDate: "2022/04/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "rear", class: "ピューティアー", name: "イムラウ", modifier: "生命を謳う者" }
    , { id: 0x03e8, implDate: "2022/04/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "both", class: "異世界戦士", name: "エフトラ", modifier: "世界を超える者" }
    , { id: 0x03e9, implDate: "2022/04/28", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "rear", class: "ピューティアー", name: "イムラウ", modifier: "生命を謳う者" }
    , { id: 0x03ea, implDate: "2022/05/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ソードマスター", name: "ちびヴァイス", latent: "白の帝国" }
    , { id: 0x03eb, implDate: "2022/05/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ルーンアコライト", name: "ちびエレオノーラ", latent: "白の帝国" }
    , { id: 0x03ec, implDate: "2022/05/12", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "ph", depType: "both", class: "異世界戦士", name: "エフトラ", modifier: "世界を超える者" }
    , { id: 0x03ed, implDate: "2022/05/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ドラゴンメイジ", name: "ロカ", modifier: "土竜魔術士" }
    , { id: 0x03ee, implDate: "2022/05/19", implDate_bq: "2024/05/09", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ドラグーン", name: "ミカ", modifier: "流浪の竜砲騎兵" }
    , { id: 0x03ef, implDate: "2022/05/26", implDate_bq: "2024/11/14", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "儀式魔術師", name: "メシナ", modifier: "渦潮の亜神" }
    , { id: 0x03f0, implDate: "2022/06/02", implDate_bq: "2023/01/12", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "儀仗軍神", name: "アラン", modifier: "銀月の亜神" }
    , { id: 0x03f1, implDate: "2022/06/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "サムライ", name: "ちびジュウベエ" }
    , { id: 0x03f2, implDate: "2022/06/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "忍者", name: "ちびハツネ" }
    , { id: 0x03f3, implDate: "2022/06/09", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "van" , class: "エンジェル", name: "シェミア", modifier: "堕天使" }
    , { id: 0x03f4, implDate: "2022/06/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "キョンシー", name: "フーロン", modifier: "幽境新婦", derivation: "花嫁" }
    , { id: 0x03f5, implDate: "2022/06/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "ベルニス", modifier: "婚礼の大盾", derivation: "花嫁" }
    , { id: 0x03f6, implDate: "2022/06/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ウィッチ", name: "ユーティ", modifier: "ひだまりの花嫁", derivation: "花嫁" }
    , { id: 0x03f7, implDate: "2022/06/23", implDate_bq: null        , obtain: [ "ev", "item" ], rarity: "b" , depType: "rear", class: "狛犬", name: "コマ", modifier: "白無垢の狛犬", derivation: "花嫁" }
    , { id: 0x03f8, implDate: "2022/06/23", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "料理人", name: "アシュリン", modifier: "常夜の料理人" }
    , { id: 0x03f9, implDate: "2022/06/30", implDate_bq: "2024/12/12", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ドラグーン", name: "イーファ", modifier: "紫風の竜砲騎兵" }
    , { id: 0x03fa, implDate: "2022/07/07", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "テンプルナイト", name: "デシレア", modifier: "光剣の神聖騎士" }
    , { id: 0x03fb, implDate: "2022/07/07", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ソルジャー", name: "アルティア", modifier: "潮風の守護者", derivation: "水着" }
    , { id: 0x03fc, implDate: "2022/07/07", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "真人", name: "清源妙道真君", modifier: "夏の賢仙 ", derivation: "水着" }
    , { id: 0x03fd, implDate: "2022/07/07", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "エンプレス", name: "ハリナ", modifier: "女皇の夏季休暇", derivation: "水着", latent: "白の帝国" }
    , { id: 0x03fe, implDate: "2022/07/07", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "儀式魔術師", name: "ヘカティエ", modifier: "夏の月下冥神", derivation: "水着", latent: "白の帝国" }
    , { id: 0x03ff, implDate: "2022/07/07", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "忍者", name: "ハツネ", modifier: "水遁遊戯", derivation: "水着" }
    , { id: 0x0400, implDate: "2022/07/07", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "メイド", name: "マリカ", modifier: "浜辺の武術女官", derivation: "水着", latent: "白の帝国" }
    , { id: 0x0401, implDate: "2022/07/07", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "真人", name: "竜吉公主", modifier: "夏陽海仙 ", derivation: "水着" }
    , { id: 0x0402, implDate: "2022/07/07", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "支援工兵", name: "パトリシア", modifier: "砂浜の工作兵", derivation: "水着", latent: "白の帝国" }
    , { id: 0x0403, implDate: "2022/07/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ドラゴンライダー", name: "ちびスイレン" }
    , { id: 0x0404, implDate: "2022/07/07", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "グランドナイト", name: "ちびアデライド" }
    , { id: 0x0405, implDate: "2022/07/21", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "van" , class: "バンデット", name: "レオーネ", modifier: "真夏の覇者", derivation: "水着" }
    , { id: 0x0406, implDate: "2022/07/21", implDate_bq: null        , obtain: [ "ev", "subj" ], rarity: "p" , depType: "van" , class: "ソードマスター", name: "ヴァイス", modifier: "白き浜辺の剣士", derivation: "水着", latent: "白の帝国" }
    , { id: 0x0407, implDate: "2022/07/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ヒーラー", name: "リアナ", modifier: "癒しの夕涼み", derivation: "浴衣" }
    , { id: 0x0408, implDate: "2022/07/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ぬりかべ", name: "シラヌイ", modifier: "祭夜のぬりかべ", derivation: "浴衣" }
    , { id: 0x0409, implDate: "2022/07/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "道化師", name: "ラトゥール", modifier: "不敗の縁日", derivation: "浴衣" }
    , { id: 0x040a, implDate: "2022/08/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "インペリアルナイト", name: "ちびディアナ", latent: "白の帝国" }
    , { id: 0x040b, implDate: "2022/08/04", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "レンジャー", name: "ちびローザ", latent: "白の帝国" }
    , { id: 0x040c, implDate: "2022/08/10", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "イビルプリンセス", name: "スキュレ", modifier: "夏祭りの金魚姫", derivation: "浴衣" }
    , { id: 0x040d, implDate: "2022/08/10", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "武侠", name: "フーイェン", modifier: "豪放遊侠" }
    , { id: 0x040e, implDate: "2022/08/10", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "rear", class: "砲術士", name: "リーシェ", modifier: "新米砲術士" }
    , { id: 0x040f, implDate: "2022/08/18", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "神官戦士", name: "トゥーダ", modifier: "帝国神官戦士長", latent: "白の帝国" }
    , { id: 0x0410, implDate: "2022/08/18", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "クロノウィッチ", name: "ロミルダ", modifier: "帝国時術士", latent: "白の帝国" }
    , { id: 0x0411, implDate: "2022/08/18", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "忍者", name: "ウルスラ", modifier: "帝国忍者", latent: "白の帝国" }
    , { id: 0x0412, implDate: "2022/08/18", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "デーモンロード", name: "アブグルント", modifier: "深潭の魔将", latent: "白の帝国" }
    , { id: 0x0413, implDate: "2022/08/18", implDate_bq: null        , obtain: [ "tr", "dark" ], rarity: "p" , depType: "van" , class: "鍛冶職人", name: "グラティア", modifier: "帝国鍛冶師", latent: "白の帝国" }
    , { id: 0x0414, implDate: "2022/09/01", implDate_bq: "2024/03/14", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ロード", name: "リンクス", modifier: "金獣の領主" }
    , { id: 0x0415, implDate: "2022/09/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "both", class: "スカイシューター", name: "ラシティ", modifier: "黒翼の精鋭射手" }
    , { id: 0x0416, implDate: "2022/09/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "前衛戦術家", name: "ちびルヴェア" }
    , { id: 0x0417, implDate: "2022/09/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "スチームナイト", name: "ちびイザムバード" }
    , { id: 0x0418, implDate: "2022/09/08", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ドラゴンメイジ", name: "コラリー", modifier: "風竜魔術士" }
    , { id: 0x0419, implDate: "2022/09/15", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "both", class: "スカイヒーラー", name: "レフカ", modifier: "鶚翼の癒し手" }
    , { id: 0x041a, implDate: "2022/09/15", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "座敷わらし", name: "エンジュ", modifier: "座敷わらし" }
    , { id: 0x041b, implDate: "2022/09/15", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "サベージファイター", name: "ファルア", modifier: "砂漠の勇士" }
    , { id: 0x041c, implDate: "2022/09/15", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "符術士", name: "リャオレン", modifier: "符術士" }
    , { id: 0x041d, implDate: "2022/09/15", implDate_bq: null        , obtain: [ "ev", "popu" ], rarity: "b" , depType: "van" , class: "シーソルジャー", name: "ムルーア", modifier: "朱珠の深海兵長" }
    , { id: 0x041e, implDate: "2022/09/15", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびシビラ", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x041f, implDate: "2022/09/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "発明家", name: "マギー", modifier: "天性の発明家" }
    , { id: 0x0420, implDate: "2022/09/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "モンスタースレイヤー", name: "ソシエ", modifier: "南瓜に潜む狙撃手", derivation: "ハロウィン" }
    , { id: 0x0421, implDate: "2022/09/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "モンク", name: "ウル", modifier: "仮装祭りの爪獣", derivation: "ハロウィン" }
    , { id: 0x0422, implDate: "2022/09/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "デモンシャーマン", name: "レライエ", modifier: "お菓子の共鳴者", derivation: "ハロウィン" }
    , { id: 0x0423, implDate: "2022/10/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "イビルプリンセス", name: "ちびミサ" }
    , { id: 0x0424, implDate: "2022/10/06", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "シャーマン", name: "ちびキキョウ" }
    , { id: 0x0425, implDate: "2022/10/13", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "プリンセス", name: "ジュリア", modifier: "絢爛仮装姫", derivation: "ハロウィン" }
    , { id: 0x0426, implDate: "2022/10/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "武将【恋姫】", name: "関羽 雲長", collabo: 1 }
    , { id: 0x0427, implDate: "2022/10/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "小覇王【恋姫】", name: "孫策 伯符", collabo: 1 }
    , { id: 0x0428, implDate: "2022/10/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "軍師【恋姫】", name: "諸葛亮 孔明", collabo: 1 }
    , { id: 0x0429, implDate: "2022/10/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "暴君【恋姫】", name: "董卓 仲穎", collabo: 1 }
    , { id: 0x042a, implDate: "2022/10/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "武将【恋姫】", name: "趙雲 子龍", collabo: 1 }
    , { id: 0x042b, implDate: "2022/10/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "君主【恋姫】", name: "孫権 仲謀", collabo: 1 }
    , { id: 0x042c, implDate: "2022/10/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "弓将【恋姫】", name: "黄蓋 公覆", collabo: 1 }
    , { id: 0x042d, implDate: "2022/10/14", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "p" , depType: "van" , class: "王女【恋姫】", name: "孫尚香", collabo: 1 }
    , { id: 0x042e, implDate: "2022/10/27", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "van" , class: "君主【恋姫】", name: "孫堅 文台", collabo: 1 }
    , { id: 0x042f, implDate: "2022/10/27", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ヴァンパイアハンター", name: "クルス", modifier: "古城の探索者" }
    , { id: 0x0430, implDate: "2022/10/31", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "bh", depType: "van" , class: "アヤカシの王", name: "山ン本", qualifier: "五郎左衛門" }
    , { id: 0x0431, implDate: "2022/11/02", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "サベージファイター", name: "ナシート", modifier: "砂漠の傭兵" }
    , { id: 0x0432, implDate: "2022/11/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "イビルプリンセス", name: "ちびスキュレ" }
    , { id: 0x0433, implDate: "2022/11/02", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "シービショップ", name: "ちびハルフゥ" }
    , { id: 0x0434, implDate: "2022/11/10", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "both", class: "スカイヒーラー", name: "イエラ", modifier: "蓑鳩翼の癒し手" }
    , { id: 0x0435, implDate: "2022/11/10", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびジェローム", male: 1 }
    , { id: 0x0436, implDate: "2022/11/17", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "デーモンロード", name: "ヤハール", modifier: "炎天の魔将" }
    , { id: 0x0437, implDate: "2022/11/17", implDate_bq: "2023/05/11", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "スカラー", name: "コレット", modifier: "神話学士" }
    , { id: 0x0438, implDate: "2022/11/17", implDate_bq: null        , obtain: [ "ev", "subj" ], rarity: "b" , depType: "van" , class: "ドラゴンプリンセス", name: "ロタン", modifier: "原初の竜姫" }
    , { id: 0x0439, implDate: "2022/11/24", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "van" , class: "トゥルーブラッド", name: "リヴン", modifier: "永夜の始祖たる者" }
    , { id: 0x043a, implDate: "2022/11/24", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "van" , class: "黎明の翼", name: "ルキファ", modifier: "黎明を齎す者" }
    , { id: 0x043b, implDate: "2022/11/24", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "van" , class: "黎明の翼", name: "ルキファ", modifier: "黎明を齎す者" }
    , { id: 0x043c, implDate: "2022/11/24", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "p" , depType: "van" , class: "ダークストーカー", name: "ヘンゼル", modifier: "闇使い", male: 1 }
    , { id: 0x043d, implDate: "2022/12/01", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "bh", depType: "van" , class: "暁光の神話", name: "イルドナ", modifier: "暁光を導く者", male: 1 }
    , { id: 0x043e, implDate: "2022/12/01", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "van" , class: "暁光の神話", name: "イルドナ", modifier: "暁光を導く者", male: 1 }
    , { id: 0x043f, implDate: "2022/12/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "デーモンロード", name: "ちびハルモニア", modifier: "ちびハルモニア" }
    , { id: 0x0440, implDate: "2022/12/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ルーンアコライト", name: "ちびエリス", modifier: "ちびエリス" }
    , { id: 0x0441, implDate: "2022/12/08", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "ph", depType: "van" , class: "トゥルーブラッド", name: "リヴン", modifier: "永夜の始祖たる者リヴン" }
    , { id: 0x0442, implDate: "2022/12/08", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "デーモンロード", name: "ハルモニア", modifier: "聖夜の魔将", derivation: "クリスマス" }
    , { id: 0x0443, implDate: "2022/12/08", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ダークストーカー", name: "グレーテル", modifier: "聖闇の贈り主", derivation: "クリスマス" }
    , { id: 0x0444, implDate: "2022/12/08", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "ph", depType: "van" , class: "アヤカシの王", name: "山ン本", qualifier: "五郎左衛門" }
    , { id: 0x0445, implDate: "2022/12/08", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "van" , class: "ヘビーアーマー", name: "ちびジェリウス", male: 1 }
    , { id: 0x0446, implDate: "2022/12/21", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "ハーバリスト", name: "ローズ", modifier: "聖樹の薬草師", derivation: "クリスマス" }
    , { id: 0x0447, implDate: "2022/12/21", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "霊刀つくもがみ", name: "魔王城", collabo: 1 }
    , { id: 0x0448, implDate: "2022/12/21", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "黒竜娘【モンスター娘TD】", name: "マウロ", modifier: "ブラックドラゴン娘", collabo: 1 }
    , { id: 0x0449, implDate: "2022/12/21", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "鬼刃忍", name: "シロガネ", modifier: "鬼刃忍" }
    , { id: 0x044a, implDate: "2022/12/30", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "鍛冶職人", name: "ウルカノ", modifier: "火と鉄の亜神" }
    , { id: 0x044b, implDate: "2022/12/30", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "テンプルナイト", name: "トゥーリ", modifier: "輝天の神聖騎士" }
    , { id: 0x044c, implDate: "2022/12/30", implDate_bq: "2024/07/11", obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "魔界総帥", name: "アスバール", modifier: "嵐雨の亜神" }
    
    // 2023
    , { id: 0x044d, implDate: "2023/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "妖狐", name: "カヨウ", modifier: "大吉妖狐", derivation: "お正月" }
    , { id: 0x044e, implDate: "2023/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "儀式魔術師", name: "メシナ", modifier: "海神の曙光", derivation: "お正月" }
    , { id: 0x044f, implDate: "2023/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "ph", depType: "both", class: "異世界戦士", name: "エフトラ", modifier: "雪踏みの初詣", derivation: "お正月" }
    , { id: 0x0450, implDate: "2023/01/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびヨシノ" }
    , { id: 0x0451, implDate: "2023/01/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ドラゴンプリンセス", name: "ちびメリュジアナ" }
    , { id: 0x0452, implDate: "2023/01/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ドルイド", name: "フィオレ", modifier: "湯けむりの隠者", derivation: "温泉" }
    , { id: 0x0453, implDate: "2023/01/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "魔法剣士", name: "シエナ", modifier: "魔剣士の湯治", derivation: "温泉" }
    , { id: 0x0454, implDate: "2023/01/12", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "サムライ", name: "アカネ", modifier: "旅情の剣士", derivation: "温泉" }
    , { id: 0x0455, implDate: "2023/01/12", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "van" , class: "グレーターデーモン", name: "ちびグレーターデーモン", male: 1 }
    , { id: 0x0456, implDate: "2023/01/19", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "小悪魔アイドル", name: "エス★エフ", modifier: "Makaidol ", latent: "アイドル" }
    , { id: 0x0457, implDate: "2023/01/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "both", class: "スカイヒーラー", name: "カーニア", modifier: "鷹翼の癒し手" }
    , { id: 0x0458, implDate: "2023/02/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "イモータルプリンセス", name: "ちびユーフェ" }
    , { id: 0x0459, implDate: "2023/02/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ダークファイター", name: "ちびヘイオス" }
    , { id: 0x045a, implDate: "2023/02/02", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "アイドル召喚士", name: "リノ", modifier: "召喚系アイドル ", derivation: "アイドル" }
    , { id: 0x045b, implDate: "2023/02/02", implDate_bq: "2023/12/14", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "雪娘", name: "ふゆの", modifier: "雪女" }
    , { id: 0x045c, implDate: "2023/02/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ハーバリスト", name: "ラタトスク", modifier: "世界樹の恋路", derivation: "バレンタイン" }
    , { id: 0x045d, implDate: "2023/02/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "both", class: "スカウト", name: "ミリアム", modifier: "恋の索敵作戦", derivation: "バレンタイン" }
    , { id: 0x045e, implDate: "2023/02/09", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちび一般兵A", male: 1 }
    , { id: 0x045f, implDate: "2023/02/23", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "ドルイド", name: "ローリエ", modifier: "秘めたる想い", derivation: "バレンタイン" }
    , { id: 0x0460, implDate: "2023/02/23", implDate_bq: "2023/09/14", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ハデスソルジャー", name: "ティルト", modifier: "冥神近衛騎士", latent: "白の帝国" }
    , { id: 0x0461, implDate: "2023/02/23", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ドラゴンメイジ", name: "トリシャ", modifier: "帝国黒竜魔術士", latent: "白の帝国" }
    , { id: 0x0462, implDate: "2023/02/23", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "隧道掘削兵", name: "ヘーレ", modifier: "帝国掘削兵", latent: "白の帝国" }
    , { id: 0x0463, implDate: "2023/02/23", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ドラグーン", name: "デリア", modifier: "帝国竜砲騎兵", latent: "白の帝国" }
    , { id: 0x0464, implDate: "2023/02/23", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "van" , class: "ローグ", name: "シュテフィ", modifier: "帝国諜報兵", latent: "白の帝国" }
    , { id: 0x0465, implDate: "2023/02/23", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "p" , depType: "van" , class: "メイド", name: "ソーマ", modifier: "王宮侍女", derivation: "メイド" }
    , { id: 0x0466, implDate: "2023/02/23", implDate_bq: null        , obtain: [ "tr", "dark" ], rarity: "p" , depType: "rear", class: "砲術士", name: "ハイデマリー", modifier: "帝国砲術士", latent: "白の帝国" }
    , { id: 0x0467, implDate: "2023/03/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "風伯", name: "ちびフーコ" }
    , { id: 0x0468, implDate: "2023/03/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ランスマスター", name: "ちびトモエ" }
    , { id: 0x0469, implDate: "2023/03/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "モンスターブレイカー", name: "ランヒルド", modifier: "兎祭の封剣士", derivation: "バニー" }
    , { id: 0x046a, implDate: "2023/03/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "後衛戦術家", name: "シナト", modifier: "疾風軍師の祝福祭", derivation: "バニー" }
    , { id: 0x046b, implDate: "2023/03/09", implDate_bq: null        , obtain: [ "ev", "subj" ], rarity: "p" , depType: "rear", class: "ドラゴンメイジ", name: "カラザ", modifier: "竜兎の共宴", derivation: "バニー" }
    , { id: 0x046c, implDate: "2023/03/09", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "rear", class: "メイジ", name: "ちびヴァレリー", male: 1 }
    , { id: 0x046d, implDate: "2023/03/16", implDate_bq: "2024/06/13", obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "シールダー", name: "レジナレア", modifier: "盾騎士" }
    , { id: 0x046e, implDate: "2023/03/16", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "武侠", name: "フェイロン", modifier: "武成豪侠" }
    , { id: 0x046f, implDate: "2023/03/23", implDate_bq: "2023/10/12", obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "シービショップ", name: "イヲナミ", modifier: "龍宮の海巫女" }
    , { id: 0x0470, implDate: "2023/03/23", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "sl", depType: "van" , class: "料理人", name: "マグリカ", modifier: "下町料理人" }
    , { id: 0x0471, implDate: "2023/03/30", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "van" , class: "神獣騎士", name: "ミルドリス", modifier: "獣を統べる者" }
    , { id: 0x0472, implDate: "2023/03/30", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "rear", class: "カースウィスパラー", name: "モルフェサ", modifier: "災禍を律す者" }
    , { id: 0x0473, implDate: "2023/03/30", implDate_bq: null        , obtain: [ "tr", "else" ], rarity: "b" , depType: "van" , class: "女王子", name: "女王子", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x0474, implDate: "2023/04/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "忍者", name: "ちびチヨメ", modifier: "ちびチヨメ" }
    , { id: 0x0475, implDate: "2023/04/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "雷公", name: "ちびラミィ", modifier: "ちびラミィ" }
    , { id: 0x0476, implDate: "2023/04/06", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "van" , class: "神獣騎士", name: "ミルドリス", modifier: "獣を統べる者" }
    , { id: 0x0477, implDate: "2023/04/06", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "rear", class: "カースウィスパラー", name: "モルフェサ", modifier: "災禍を律す者" }
    , { id: 0x0478, implDate: "2023/04/06", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "gc", depType: "van" , class: "儀仗軍神", name: "ちびアラン", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x0479, implDate: "2023/04/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ホーネット派魔人【ランス】", name: "魔人サテラ", collabo: 1 }
    , { id: 0x047a, implDate: "2023/04/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "忍者【ランス】", name: "見当かなみ", collabo: 1 }
    , { id: 0x047b, implDate: "2023/04/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "魔法使い【ランス】", name: "魔想志津香", collabo: 1 }
    , { id: 0x047c, implDate: "2023/04/13", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびドゥマルデ", male: 1 }
    , { id: 0x047d, implDate: "2023/04/27", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "rear", class: "初代大統領【ランス】", name: "シーラ", qualifier: "・ヘルマン", collabo: 1 }
    , { id: 0x047e, implDate: "2023/04/27", implDate_bq: "2024/05/09", obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "サベージファイター", name: "シャジャル", modifier: "砂漠の勇者" }
    , { id: 0x047f, implDate: "2023/04/27", implDate_bq: null        , obtain: [ "tr", "mili" ], rarity: "b" , depType: "van" , class: "戦の聖霊", name: "プロエ", modifier: "戦の聖霊" }
    , { id: 0x0480, implDate: "2023/04/27", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "b" , depType: "rear", class: "アーチャー", name: "ナナリー", modifier: "白羽の休日", derivation: "私服" }
    , { id: 0x0481, implDate: "2023/05/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "真人", name: "ちび織姫" }
    , { id: 0x0482, implDate: "2023/05/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "アクアナイト", name: "ちびヴィアベル" }
    , { id: 0x0483, implDate: "2023/05/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "妖狐", name: "キュウビ", modifier: "留学妖狐", derivation: "学園" }
    , { id: 0x0484, implDate: "2023/05/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "レンジャー", name: "ロヴィニア", modifier: "陽炎の新入生", derivation: "学園" }
    , { id: 0x0485, implDate: "2023/05/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "アベンジャー", name: "レティシア", modifier: "蒼紅の女教師", derivation: "学園" }
    , { id: 0x0486, implDate: "2023/05/11", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "van" , class: "バンデット", name: "ちびモーティマ", male: 1 }
    , { id: 0x0487, implDate: "2023/05/18", implDate_bq: null        , obtain: [ "ev", "item" ], rarity: "p" , depType: "van" , class: "サムライ", name: "サクヤ", modifier: "薙刀茶道部", derivation: "学園" }
    , { id: 0x0488, implDate: "2023/05/18", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "シールダー", name: "イール", modifier: "優しき守護盾" }
    , { id: 0x0489, implDate: "2023/05/18", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "van" , class: "真人", name: "普賢" }
    , { id: 0x048a, implDate: "2023/05/18", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "b" , depType: "van" , class: "一目の竜", name: "一目連", male: 1 }
    , { id: 0x048b, implDate: "2023/05/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "both", class: "スカウト", name: "レナータ", modifier: "花嫁道の偵察者", derivation: "花嫁" }
    , { id: 0x048c, implDate: "2023/05/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ドラゴンメイジ", name: "ロカ/花嫁", modifier: "花嫁土竜", derivation: "花嫁" }
    , { id: 0x048d, implDate: "2023/05/25", implDate_bq: null        , obtain: [ "ev", "subj" ], rarity: "p" , depType: "van" , class: "かまいたち", name: "金糸雀姉妹/花嫁", modifier: "婚礼つむじ風", derivation: "花嫁" }
    , { id: 0x048e, implDate: "2023/05/25", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "p" , depType: "van" , class: "ソルジャー", name: "ケイティ", modifier: "休息の教官", derivation: "私服" }
    , { id: 0x048f, implDate: "2023/06/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "儀仗軍神", name: "乙姫", modifier: "大海神の娘 " }
    , { id: 0x0490, implDate: "2023/06/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "天尊", name: "元始天尊" }
    , { id: 0x0491, implDate: "2023/06/01", implDate_bq: null        , obtain: [ "ev", "popu" ], rarity: "b" , depType: "van" , class: "儀仗軍神", name: "アラン", modifier: "銀月大祭", derivation: "闘兵" }
    , { id: 0x0492, implDate: "2023/06/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ソードマスター", name: "ちびリシェルテ" }
    , { id: 0x0493, implDate: "2023/06/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "サモナー", name: "ちびファルネ" }
    , { id: 0x0494, implDate: "2023/06/15", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "英傑の塔", name: "英傑の塔", collabo: 1 }
    , { id: 0x0495, implDate: "2023/06/15", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "both", class: "不死鳥娘【モンスター娘TD】", name: "アテエル", modifier: "フェニックス娘", collabo: 1 }
    , { id: 0x0496, implDate: "2023/06/15", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびユリアン", male: 1 }
    , { id: 0x0497, implDate: "2023/06/21", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "b" , depType: "rear", class: "支援の聖霊", name: "戦場に集う聖霊たち" }
    , { id: 0x0498, implDate: "2023/06/29", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "rear", class: "リッチ【闇の軍勢】", name: "リッチ", modifier: "闇の墓守" }
    , { id: 0x0499, implDate: "2023/06/29", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "b" , depType: "van" , class: "ダーク王子", name: "ダーク王子", extra: { obtain: [ "tr", "rain" ] }, male: 1 }
    , { id: 0x049a, implDate: "2023/06/29", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "b" , depType: "rear", class: "政務官【闇の軍勢】", name: "ダークアンナ", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x049b, implDate: "2023/06/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "中級竜兵", name: "ヴルム", modifier: "砂浜に立つ銀竜", derivation: "水着", latent: "白の帝国" }
    , { id: 0x049c, implDate: "2023/06/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "仙人", name: "ナタク", modifier: "水辺の道士", derivation: "水着" }
    , { id: 0x049d, implDate: "2023/06/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "メイジ", name: "テュト", modifier: "青春賢者", derivation: "水着" }
    , { id: 0x049e, implDate: "2023/06/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "風水使い", name: "リンネ", modifier: "朱夏花の風水士", derivation: "水着" }
    , { id: 0x049f, implDate: "2023/06/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "ph", depType: "van" , class: "銀腕の神話", name: "トラム", modifier: "浜辺の看板娘", derivation: "水着" }
    , { id: 0x04a0, implDate: "2023/06/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "ph", depType: "rear", class: "ファラオ", name: "ホルテウス", modifier: "女王の避暑", derivation: "水着" }
    , { id: 0x04a1, implDate: "2023/06/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ワルキューレ", name: "ピューロ", modifier: "純真海日記", derivation: "水着" }
    , { id: 0x04a2, implDate: "2023/06/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "鍛冶職人", name: "グラティア", modifier: "夏空の鍛冶師", latent: "白の帝国" }
    , { id: 0x04a3, implDate: "2023/07/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "エンプレス", name: "ちびハリナ", latent: "白の帝国" }
    , { id: 0x04a4, implDate: "2023/07/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびエリアス", latent: "白の帝国" }
    , { id: 0x04a5, implDate: "2023/07/06", implDate_bq: null        , obtain: [ "ev", "maji" ], rarity: "b" , depType: "van" , class: "デーモンロード", name: "パヤモ", modifier: "深閑の魔将" }
    , { id: 0x04a6, implDate: "2023/07/13", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "ph", depType: "rear", class: "ジオマンサー", name: "サナラ", modifier: "君と最高の夏", derivation: "水着" }
    , { id: 0x04a7, implDate: "2023/07/13", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "rear", class: "ヴァンパイアハンター", name: "ちびヴィンセント", male: 1 }
    , { id: 0x04a8, implDate: "2023/07/20", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "処刑人", name: "サティン", modifier: "流浪の断罪者" }
    , { id: 0x04a9, implDate: "2023/07/20", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "ベルニス", modifier: "憧れの休日", derivation: "私服" }
    , { id: 0x04aa, implDate: "2023/07/27", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "料理人", name: "デルフィーナ", modifier: "食の芸術家" }
    , { id: 0x04ab, implDate: "2023/08/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ローグ", name: "ちびシネイド" }
    , { id: 0x04ac, implDate: "2023/08/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "グリフィンライダー", name: "ちびクゥイル" }
    , { id: 0x04ad, implDate: "2023/08/04", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "砲術士", name: "ハリンヘイム", modifier: "号砲の亜神" }
    , { id: 0x04ae, implDate: "2023/08/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "対魔忍 超人【対魔忍】", name: "井河アサギ", collabo: 1 }
    , { id: 0x04af, implDate: "2023/08/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "対魔忍 超人【対魔忍】", name: "秋山凜子", collabo: 1 }
    , { id: 0x04b0, implDate: "2023/08/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "both", class: "対魔忍 自然【対魔忍】", name: "水城ゆきかぜ", collabo: 1 }
    , { id: 0x04b1, implDate: "2023/08/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "対魔忍 魔性【対魔忍】", name: "心願寺紅", collabo: 1 }
    , { id: 0x04b2, implDate: "2023/08/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "対魔忍 魔性【対魔忍】", name: "フェリシア", collabo: 1 }
    , { id: 0x04b3, implDate: "2023/08/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "対魔忍 精神【対魔忍】", name: "ふうま時子", collabo: 1 }
    , { id: 0x04b4, implDate: "2023/08/04", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "p" , depType: "van" , class: "ロイヤルガード", name: "アリシア", modifier: "対魔忍", derivation: "対魔忍" }
    , { id: 0x04b5, implDate: "2023/08/04", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "p" , depType: "van" , class: "対魔忍 科学【対魔忍】", name: "甲河アスカ", collabo: 1 }
    , { id: 0x04b6, implDate: "2023/08/04", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "p" , depType: "both", class: "対魔忍 自然【対魔忍】", name: "井河さくら", collabo: 1 }
    , { id: 0x04b7, implDate: "2023/08/10", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "rear", class: "ゴブリン博士", name: "ちびゴブリン博士", male: 1 }
    , { id: 0x04b8, implDate: "2023/08/18", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "van" , class: "対魔忍 超人【対魔忍】", name: "鬼崎きらら", collabo: 1 }
    , { id: 0x04b9, implDate: "2023/08/18", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "処刑人", name: "リムリィ", modifier: "虚月の断罪者" }
    , { id: 0x04ba, implDate: "2023/08/18", implDate_bq: null        , obtain: [ "tr", "mili" ], rarity: "p" , depType: "rear", class: "ガンスリンガー", name: "トネール", modifier: "荒野の旋風" }
    , { id: 0x04bb, implDate: "2023/08/18", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "p" , depType: "rear", class: "後衛戦術家", name: "レオナ", modifier: "就寝前のひととき", derivation: "私服" }
    , { id: 0x04bc, implDate: "2023/08/24", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "パイレーツ", name: "デューオ", modifier: "お祭大好き海賊", derivation: "浴衣" }
    , { id: 0x04bd, implDate: "2023/08/24", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "エンジェル", name: "ミルノ", modifier: "花火空の天使長", derivation: "浴衣" }
    , { id: 0x04be, implDate: "2023/08/24", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "砲術士", name: "メル", modifier: "夏の花火師", derivation: "浴衣" }
    , { id: 0x04bf, implDate: "2023/08/31", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "van" , class: "王国軍初代副司令", name: "ヴィディア", modifier: "戦禍を断つ者" }
    , { id: 0x04c0, implDate: "2023/08/31", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "van" , class: "大華の神話", name: "徐華", modifier: "大華の母たる者 " }
    , { id: 0x04c1, implDate: "2023/08/31", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "van" , class: "王国軍初代副司令", name: "ヴィディア", modifier: "戦禍を断つ者" }
    , { id: 0x04c2, implDate: "2023/08/31", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "van" , class: "大華の神話", name: "徐華", modifier: "大華の母たる者 " }
    , { id: 0x04c3, implDate: "2023/09/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "サムライ", name: "ちびヒバリ" }
    , { id: 0x04c4, implDate: "2023/09/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "道化師", name: "ちびラトゥール" }
    , { id: 0x04c5, implDate: "2023/09/14", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "rear", class: "メイジ", name: "バスティス", modifier: "砂漠の亜神" }
    , { id: 0x04c6, implDate: "2023/09/14", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "マーチャント", name: "ノストラ", modifier: "闇商人" }
    , { id: 0x04c7, implDate: "2023/09/14", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "p" , depType: "rear", class: "ヒーラー", name: "イーリス", modifier: "癒しの囁き夜話", derivation: "私服" }
    , { id: 0x04c8, implDate: "2023/09/14", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "van" , class: "中級竜兵", name: "ちびサーベイン", male: 1 }
    , { id: 0x04c9, implDate: "2023/09/21", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "both", class: "スカイヒーラー", name: "ジタリス", modifier: "柄長翼の癒し手" }
    , { id: 0x04ca, implDate: "2023/09/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "隧道掘削兵", name: "ミュレ", modifier: "帝国掘削教官", latent: "白の帝国" }
    , { id: 0x04cb, implDate: "2023/09/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "儀式魔術師", name: "ヘリューズ", modifier: "死氷の亜神", latent: "白の帝国" }
    , { id: 0x04cc, implDate: "2023/09/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "スカラー", name: "ジェニー", modifier: "帝国人間学者", latent: "白の帝国" }
    , { id: 0x04cd, implDate: "2023/09/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ガンスリンガー", name: "パラベル", modifier: "帝国銃撃士", latent: "白の帝国" }
    , { id: 0x04ce, implDate: "2023/09/28", implDate_bq: "2024/08/16", obtain: [ "sh"         ], rarity: "p" , depType: "both", class: "エアセイラー", name: "フォーラ", modifier: "帝国飛艦士", latent: "白の帝国" }
    , { id: 0x04cf, implDate: "2023/09/28", implDate_bq: null        , obtain: [ "tr", "dark" ], rarity: "p" , depType: "van" , class: "ソードマスター", name: "イルヴィ", modifier: "創道の血統", latent: "白の帝国" }
    , { id: 0x04d0, implDate: "2023/10/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "重装砲兵", name: "ちびレギーナ" }
    , { id: 0x04d1, implDate: "2023/10/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "天狗", name: "ちびクラマ" }
    , { id: 0x04d2, implDate: "2023/10/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "雷公", name: "レミィ", modifier: "怪祭の雷雲", derivation: "ハロウィン" }
    , { id: 0x04d3, implDate: "2023/10/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "風伯", name: "クーコ", modifier: "秋祭の風雲", derivation: "ハロウィン" }
    , { id: 0x04d4, implDate: "2023/10/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "スカラー", name: "コレット", modifier: "秋の民俗学士", derivation: "ハロウィン" }
    , { id: 0x04d5, implDate: "2023/10/12", implDate_bq: null        , obtain: [ "ev", "subj" ], rarity: "p" , depType: "van" , class: "中級竜兵", name: "ウィリアス", modifier: "菓子祭の緑竜", derivation: "ハロウィン" }
    , { id: 0x04d6, implDate: "2023/10/12", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "p" , depType: "rear", class: "アーチャー", name: "ダニエラ", modifier: "晴天鍛錬の休日", derivation: "私服" }
    , { id: 0x04d7, implDate: "2023/10/12", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "rear", class: "モンスタースレイヤー", name: "ちびラルフ", male: 1 }
    , { id: 0x04d8, implDate: "2023/10/19", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "勇士【恋姫】", name: "呂布 奉先", collabo: 1 }
    , { id: 0x04d9, implDate: "2023/10/19", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "武将【恋姫】", name: "曹仁", collabo: 1 }
    , { id: 0x04da, implDate: "2023/10/19", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "p" , depType: "rear", class: "軍師【恋姫】", name: "賈駆", collabo: 1 }
    , { id: 0x04db, implDate: "2023/10/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "シャーマン", name: "ヒミコ", modifier: "星神の巫女" }
    , { id: 0x04dc, implDate: "2023/11/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "van" , class: "マギステルミリトゥム", name: "ランシェ", modifier: "勝利へ導く者" }
    , { id: 0x04dd, implDate: "2023/11/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "rear", class: "未踏海域の覇者", name: "イヴリール", modifier: "大海を征く者" }
    , { id: 0x04de, implDate: "2023/11/01", implDate_bq: null        , obtain: [ "ev", "maji" ], rarity: "b" , depType: "van" , class: "メイド", name: "ファニュア", modifier: "吸血給仕" }
    , { id: 0x04df, implDate: "2023/11/01", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "van" , class: "マギステルミリトゥム", name: "ランシェ", modifier: "勝利へ導く者" }
    , { id: 0x04e0, implDate: "2023/11/01", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "rear", class: "未踏海域の覇者", name: "イヴリール", modifier: "大海を征く者" }
    , { id: 0x04e1, implDate: "2023/11/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "エンジェル", name: "ちびミルノ" }
    , { id: 0x04e2, implDate: "2023/11/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "モンスターブレイカー", name: "ちびランヒルド" }
    , { id: 0x04e3, implDate: "2023/11/09", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "rear", class: "シャーマン", name: "イヨ", modifier: "星神の依代" }
    , { id: 0x04e4, implDate: "2023/11/09", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "p" , depType: "rear", class: "ウィッチ", name: "クロリス", modifier: "魔女のお誘い", derivation: "私服" }
    , { id: 0x04e5, implDate: "2023/11/09", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "van" , class: "ダークファイター", name: "ちび暗黒騎士", male: 1 }
    , { id: 0x04e6, implDate: "2023/11/16", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "白の帝国城", name: "白の帝国城", collabo: 1 }
    , { id: 0x04e7, implDate: "2023/11/22", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "van" , class: "神話の継承者", name: "アキレア", modifier: "武勇の半神" }
    , { id: 0x04e8, implDate: "2023/11/22", implDate_bq: null        , obtain: [ "ev", "else" ], rarity: "b" , depType: "van" , class: "デモンリドゥ", name: "ウェパル", modifier: "魔神の残滓" }
    , { id: 0x04e9, implDate: "2023/11/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "カオスルーラー", name: "イコル", modifier: "謀略の亜神" }
    , { id: 0x04ea, implDate: "2023/11/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "時の俯瞰者", name: "クロノシア", modifier: "時の亜神" }
    , { id: 0x04eb, implDate: "2023/11/30", implDate_bq: null        , obtain: [ "sp", "code" ], rarity: "ph", depType: "both", class: "異世界戦士", name: "エフトラ", modifier: "最終決戦仕様", derivation: "最終決戦仕様", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x04ec, implDate: "2023/12/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "犬神", name: "ちびツムジ" }
    , { id: 0x04ed, implDate: "2023/12/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "オートマタ", name: "ちびアルタ" }
    , { id: 0x04ee, implDate: "2023/12/07", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "van" , class: "プリンセス", name: "シビラ", modifier: "聖剣姫", derivation: "聖剣" }
    , { id: 0x04ef, implDate: "2023/12/07", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "van" , class: "神話の継承者", name: "ペルセナス", modifier: "綺譚の半神" }
    , { id: 0x04f0, implDate: "2023/12/07", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "both", class: "エアセイラー", name: "アヴィリコ", modifier: "開拓飛艦士" }
    , { id: 0x04f1, implDate: "2023/12/07", implDate_bq: null        , obtain: [ "tr", "mili" ], rarity: "p" , depType: "rear", class: "風水使い", name: "クーシン", modifier: "武門の風水士" }
    , { id: 0x04f2, implDate: "2023/12/07", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "gc", depType: "rear", class: "魔界総帥", name: "ちびアスバール", extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x04f3, implDate: "2023/12/14", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ヴァンパイアハンター", name: "クルス", modifier: "聖夜の訪問者", derivation: "クリスマス" }
    , { id: 0x04f4, implDate: "2023/12/14", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "魔物使い", name: "ブランシュ", modifier: "魔物と聖夜", derivation: "クリスマス" }
    , { id: 0x04f5, implDate: "2023/12/14", implDate_bq: null        , obtain: [ "sh"         ], rarity: "g" , depType: "both", class: "スカイシューター", name: "アエロ", modifier: "聖なる雀翼", derivation: "クリスマス" }
    , { id: 0x04f6, implDate: "2023/12/14", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "van" , class: "皇帝", name: "ちび白の皇帝", latent: "白の帝国", male: 1 }
    , { id: 0x04f7, implDate: "2023/12/28", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "幻術士", name: "マルティナ", modifier: "粉雪の夢想劇", derivation: "クリスマス" }
    , { id: 0x04f8, implDate: "2023/12/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "邪仙", name: "聞忠" }
    , { id: 0x04f9, implDate: "2023/12/28", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "武侠", name: "誅子" }
    
    // 2024
    , { id: 0x04fa, implDate: "2024/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ヴァンパイアプリンセス", name: "シルヴィア", modifier: "新年吸血道中", derivation: "お正月" }
    , { id: 0x04fb, implDate: "2024/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "儀仗軍神", name: "アラン", modifier: "祝賀の亜神", derivation: "お正月" }
    , { id: 0x04fc, implDate: "2024/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "ph", depType: "rear", class: "ピューティアー", name: "イムラウ", modifier: "迎春の巫女", derivation: "お正月" }
    , { id: 0x04fd, implDate: "2024/01/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "料理人", name: "アヅミ", modifier: "御節職人", derivation: "お正月" }
    , { id: 0x04fe, implDate: "2024/01/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "魔法剣士", name: "ちびシエナ" }
    , { id: 0x04ff, implDate: "2024/01/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "戦巫女", name: "ちびタツミ" }
    , { id: 0x0500, implDate: "2024/01/04", implDate_bq: null        , obtain: [ "ev", "shop" ], rarity: "gc", depType: "van" , class: "シャークウォリアー", name: "ちびスカー", male: 1 }
    , { id: 0x0501, implDate: "2024/01/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "グラディエーター", name: "アナトリア", modifier: "闘志の癒し湯", derivation: "温泉" }
    , { id: 0x0502, implDate: "2024/01/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ドラグーン", name: "ミカ", modifier: "温泉放浪騎", derivation: "温泉" }
    , { id: 0x0503, implDate: "2024/01/11", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "rear", class: "ビショップ", name: "ちびマリウス", male: 1 }
    , { id: 0x0504, implDate: "2024/01/25", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "モンク", name: "モモ", modifier: "温泉鉄甲", derivation: "温泉" }
    , { id: 0x0505, implDate: "2024/01/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "雪娘", name: "しづり", modifier: "冬姫" }
    , { id: 0x0506, implDate: "2024/01/25", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "p" , depType: "rear", class: "発明家", name: "レクテ", modifier: "魔電流の発明家" }
    , { id: 0x0507, implDate: "2024/01/25", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "b" , depType: "rear", class: "ウィッチ", name: "アンジェラ", modifier: "王国の魔女" }
    , { id: 0x0508, implDate: "2024/02/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "魔王親衛隊", name: "シャディア", modifier: "恋の親衛隊", derivation: "バレンタイン" }
    , { id: 0x0509, implDate: "2024/02/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "アーチャー", name: "キャロット", modifier: "ハートの射手", derivation: "バレンタイン" }
    , { id: 0x050a, implDate: "2024/02/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "デモンルーン", name: "ちびエスネア" }
    , { id: 0x050b, implDate: "2024/02/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "デモンルーン", name: "ちびエフネ" }
    , { id: 0x050c, implDate: "2024/02/08", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "van" , class: "天狗", name: "ちびグレン", male: 1 }
    , { id: 0x050d, implDate: "2024/02/15", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "ダンサー", name: "ワルツ", modifier: "恋情の踊り子", derivation: "バレンタイン" }
    , { id: 0x050e, implDate: "2024/02/15", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ぬりかべ", name: "カゴメ", modifier: "ぬりかべ" }
    , { id: 0x050f, implDate: "2024/02/15", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "処刑人", name: "ルイゼット", modifier: "緋憶の断罪者" }
    , { id: 0x0510, implDate: "2024/02/15", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "衛士", name: "ダルティエ", modifier: "萌芽の衛者" }
    , { id: 0x0511, implDate: "2024/02/15", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ガンスリンガー", name: "シルヴァーナ", modifier: "麗しき銀銃" }
    , { id: 0x0512, implDate: "2024/02/15", implDate_bq: null        , obtain: [ "ev", "popu" ], rarity: "b" , depType: "van" , class: "武侠", name: "ジンレイ", modifier: "暗天孤星" }
    , { id: 0x0513, implDate: "2024/02/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "サベージファイター", name: "シェラハウト", modifier: "砂漠の双刃" }
    , { id: 0x0514, implDate: "2024/02/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "アイギス神殿", name: "アイギス神殿", collabo: 1 }
    , { id: 0x0515, implDate: "2024/02/29", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "百腕娘【モンスター娘TD】", name: "ラキオン", modifier: "ヘカトンケイル娘", collabo: 1 }
    , { id: 0x0516, implDate: "2024/02/29", implDate_bq: null        , obtain: [ "ev", "maji" ], rarity: "b" , depType: "van" , class: "デモンルーン", name: "ロゼリン", modifier: "深紅の廻魔" }
    , { id: 0x0517, implDate: "2024/02/29", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "b" , depType: "both", class: "帝国アイドル", name: "ツキコ★トゥーダ", modifier: "帝国歌姫", latent: [ "白の帝国", "アイドル" ] }
    , { id: 0x0518, implDate: "2024/03/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "後衛戦術家", name: "ちびイリオス" }
    , { id: 0x0519, implDate: "2024/03/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ロード", name: "ちびメアリ" }
    , { id: 0x051a, implDate: "2024/03/14", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "van" , class: "王国民的アイドル", name: "女王子", modifier: "王国民的アイドル", derivation: "アイドル" }
    , { id: 0x051b, implDate: "2024/03/14", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "霊刀つくもがみ", name: "シラハユリ", modifier: "鉄刀付喪神" }
    , { id: 0x051c, implDate: "2024/03/14", implDate_bq: null        , obtain: [ "tr", "mili" ], rarity: "p" , depType: "van" , class: "シーソルジャー", name: "カウリオ", modifier: "逆戟の勇士" }
    , { id: 0x051d, implDate: "2024/03/14", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "van" , class: "ローグ", name: "ちびヴィクター", latent: "白の帝国", male: 1 }
    , { id: 0x051e, implDate: "2024/03/21", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "シールダー", name: "クリッペ", modifier: "帝国聖盾騎士", latent: "白の帝国" }
    , { id: 0x051f, implDate: "2024/03/21", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ハデスシャーマン", name: "オルフィー", modifier: "冥府の巫女", latent: "白の帝国" }
    , { id: 0x0520, implDate: "2024/03/21", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "モンク", name: "キンドライヒ", modifier: "帝国猟犬", latent: "白の帝国" }
    , { id: 0x0521, implDate: "2024/03/21", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ハデスソルジャー", name: "リチュエ", modifier: "冥界巡衛騎士", latent: "白の帝国" }
    , { id: 0x0522, implDate: "2024/03/21", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "メディック", name: "ジュディス", modifier: "帝国医官", latent: "白の帝国" }
    , { id: 0x0523, implDate: "2024/03/21", implDate_bq: null        , obtain: [ "tr", "dark" ], rarity: "b" , depType: "van" , class: "ヘビーアーマー", name: "ラビリス", modifier: "秩序の亜神", latent: "白の帝国" }
    , { id: 0x0524, implDate: "2024/04/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "デーモンロード", name: "ちびアブグルント", latent: "白の帝国" }
    , { id: 0x0525, implDate: "2024/04/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびアウローラ", latent: "白の帝国" }
    , { id: 0x0526, implDate: "2024/04/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ルーンアコライト", name: "エレオノーラ", modifier: "兎祭司教", derivation: "バニー", latent: "白の帝国" }
    , { id: 0x0527, implDate: "2024/04/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "メイジ", name: "イルマ", modifier: "帝兎の魔術師", derivation: "バニー", latent: "白の帝国" }
    , { id: 0x0528, implDate: "2024/04/04", implDate_bq: null        , obtain: [ "ev", "subj" ], rarity: "p" , depType: "van" , class: "モンク", name: "リーザ", modifier: "祝兎の拳", derivation: "バニー", latent: "白の帝国" }
    , { id: 0x0529, implDate: "2024/04/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "後衛戦術家", name: "アイシャ", modifier: "伏龍の特待生", derivation: "学園" }
    , { id: 0x052a, implDate: "2024/04/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "異界召喚士", name: "グリム", modifier: "図書室の常連", derivation: "学園" }
    , { id: 0x052b, implDate: "2024/04/11", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "鬼刃忍", name: "シロガネ", modifier: "学園裏遊戯", derivation: "学園" }
    , { id: 0x052c, implDate: "2024/04/11", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "van" , class: "重装砲兵", name: "ちびゲオルグ", latent: "白の帝国", male: 1 }
    , { id: 0x052d, implDate: "2024/04/25", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "魔神", name: "ベルーフェ", modifier: "居眠り魔神", derivation: "学園" }
    , { id: 0x052e, implDate: "2024/04/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "van" , class: "光槍ビルガの継承者", name: "オーシェン", modifier: "光を継ぐ者" }
    , { id: 0x052f, implDate: "2024/04/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "van" , class: "祖竜", name: "アルコゥ", modifier: "頂に座す者" }
    , { id: 0x0530, implDate: "2024/04/25", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "van" , class: "光槍ビルガの継承者", name: "オーシェン", modifier: "光を継ぐ者" }
    , { id: 0x0531, implDate: "2024/04/25", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "van" , class: "祖竜", name: "アルコゥ", modifier: "頂に座す者" }
    , { id: 0x0532, implDate: "2024/05/01", implDate_bq: null        , obtain: [ "sp", "eles" ], rarity: "gc", depType: "van" , class: "オートマタ", name: "ちびルイン" }
    , { id: 0x0533, implDate: "2024/05/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "幻獣使い", name: "ちびシンフー" }
    , { id: 0x0534, implDate: "2024/05/09", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "アルケミスト", name: "セリド", modifier: "詩歌と叡智の亜神" }
    , { id: 0x0535, implDate: "2024/05/09", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "ワルキューレ", name: "チャムチャム", modifier: "魔猪騎兵" }
    , { id: 0x0536, implDate: "2024/05/09", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "van" , class: "ガオレオン", name: "ちびガオレオン", male: 1 }
    , { id: 0x0537, implDate: "2024/05/16", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "豊穣神", name: "オラティル", modifier: "文明の亜神" }
    , { id: 0x0538, implDate: "2024/05/23", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "儀仗軍神", name: "祓剣主神", modifier: "剣の亜神 " }
    , { id: 0x0539, implDate: "2024/05/30", implDate_bq: null        , obtain: [ "ev", "item" ], rarity: "b" , depType: "van" , class: "コロッサス", name: "プロメ", modifier: "慈悲と焔の亜神" }
    , { id: 0x053a, implDate: "2024/05/30", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "上杉家当主【ランス】", name: "上杉謙信", collabo: 1 }
    , { id: 0x053b, implDate: "2024/05/30", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ゼス警察長官【ランス】", name: "ウルザ", qualifier: "・プラナアイス", collabo: 1 }
    , { id: 0x053c, implDate: "2024/05/30", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ホーネット派代表【ランス】", name: "ホーネット", modifier: "魔人", collabo: 1 }
    , { id: 0x053d, implDate: "2024/05/30", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "p" , depType: "van" , class: "逃亡悪魔【ランス】", name: "フェリス", collabo: 1 }
    , { id: 0x053e, implDate: "2024/06/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ドラゴンプリンセス", name: "ちびロタン" }
    , { id: 0x053f, implDate: "2024/06/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "スカラー", name: "ちびフェリシア" }
    , { id: 0x0540, implDate: "2024/06/13", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "van" , class: "旅人【ランス】", name: "リズナ", qualifier: "・ランフビット", collabo: 1 }
    , { id: 0x0541, implDate: "2024/06/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ソルジャー", name: "アサル", modifier: "太陽の戦士", derivation: "新装" }
    , { id: 0x0542, implDate: "2024/06/13", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "メイジ", name: "メーリス", modifier: "未来の大魔術師", derivation: "新装" }
    , { id: 0x0543, implDate: "2024/06/13", implDate_bq: null        , obtain: [ "ev", "drop" ], rarity: "b" , depType: "van" , class: "エンジェル", name: "ニエル", modifier: "払暁の堕天使", derivation: "新装" }
    , { id: 0x0544, implDate: "2024/06/13", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "rear", class: "メイジ", name: "ちびバルバストラフ", male: 1 }
    , { id: 0x0545, implDate: "2024/06/20", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "座敷わらし", name: "エンジュ", modifier: "婚礼座敷", derivation: "花嫁" }
    , { id: 0x0546, implDate: "2024/06/20", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "both", class: "スカイシューター", name: "ラシティ", modifier: "純白の黒翼", derivation: "花嫁" }
    , { id: 0x0547, implDate: "2024/06/20", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "シールダー", name: "レジナレア", modifier: "盾の花嫁", derivation: "花嫁" }
    , { id: 0x0548, implDate: "2024/06/20", implDate_bq: null        , obtain: [ "ev", "maji" ], rarity: "b" , depType: "van" , class: "魔神", name: "ゼパリエッテ", modifier: "愛欲の魔神" }
    , { id: 0x0549, implDate: "2024/06/20", implDate_bq: null        , obtain: [ "tr", "mili" ], rarity: "p" , depType: "van" , class: "デーモンロード", name: "ヤハール", modifier: "炎天の花嫁", derivation: "花嫁" }
    , { id: 0x054a, implDate: "2024/06/27", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "スカラー", name: "プリニース", modifier: "叡智の管理者" }
    , { id: 0x054b, implDate: "2024/06/27", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "アクアナイト", name: "ティマ", modifier: "海洋遺跡の民" }
    , { id: 0x054c, implDate: "2024/06/27", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "b" , depType: "rear", class: "アーチャー", name: "ソーマ", modifier: "精鋭弓手", derivation: "新装" }
    , { id: 0x054d, implDate: "2024/07/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ヘビーアーマー", name: "ちびテレーゼ" }
    , { id: 0x054e, implDate: "2024/07/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "メイジ", name: "ちびテュト" }
    , { id: 0x054f, implDate: "2024/07/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ダークファイター", name: "コーネリア", modifier: "烈夏の闇騎士", derivation: "水着" }
    , { id: 0x0550, implDate: "2024/07/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ヴァンパイアロード", name: "エマ", modifier: "夏の支配者", derivation: "水着" }
    , { id: 0x0551, implDate: "2024/07/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ハデスソルジャー", name: "ティルト", modifier: "ビーチの冥騎士", derivation: "水着", latent: "白の帝国" }
    , { id: 0x0552, implDate: "2024/07/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "魔界総帥", name: "アスバール", modifier: "総帥の夏休み", derivation: "水着" }
    , { id: 0x0553, implDate: "2024/07/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "ph", depType: "van" , class: "魔導生命体", name: "ラーワル", modifier: "渚の魔導生命体", derivation: "水着" }
    , { id: 0x0554, implDate: "2024/07/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "ph", depType: "rear", class: "占星術師", name: "ソラス", modifier: "星を詠む浜辺", derivation: "水着" }
    , { id: 0x0555, implDate: "2024/07/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "料理人", name: "ユッタ", modifier: "暑い夏の料理人", derivation: "水着", latent: "白の帝国" }
    , { id: 0x0556, implDate: "2024/07/04", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "処刑人", name: "リムリィ", modifier: "白浜の断罪者", derivation: "水着" }
    , { id: 0x0557, implDate: "2024/07/11", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "rear", class: "メカゴブリンクイーン", name: "ちびメカゴブリンクイーン" }
    , { id: 0x0558, implDate: "2024/07/18", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "ph", depType: "van" , class: "バーバリアンクイーン", name: "トゥアン", modifier: "南国女王", derivation: "水着" }
    , { id: 0x0559, implDate: "2024/07/18", implDate_bq: null        , obtain: [ "ev", "subj" ], rarity: "p" , depType: "van" , class: "オートマタ", name: "ルイン", modifier: "夏を知った人形", derivation: "水着" }
    , { id: 0x055a, implDate: "2024/07/25", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "神話の継承者", name: "ユリクセス", modifier: "常勝の智将" }
    , { id: 0x055b, implDate: "2024/08/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "重装砲兵", name: "ちびヴァネッサ" }
    , { id: 0x055c, implDate: "2024/08/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびカミラ" }
    , { id: 0x055d, implDate: "2024/08/01", implDate_bq: null        , obtain: [ "ev", "else" ], rarity: "p" , depType: "van" , class: "モンク", name: "エピウス", modifier: "鉄拳工匠" }   // else? star?
    , { id: 0x055e, implDate: "2024/08/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "キョンシー", name: "フーロン", modifier: "幽明の浴衣", derivation: "浴衣" }
    , { id: 0x055f, implDate: "2024/08/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "both", class: "ロケットトルーパー", name: "クレール", modifier: "夏祭り警備隊", derivation: "浴衣" }
    , { id: 0x0560, implDate: "2024/08/01", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "武侠", name: "フーイェン", modifier: "祭夜の遊侠", derivation: "浴衣" }
    , { id: 0x0561, implDate: "2024/08/08", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "rear", class: "メイジ", name: "ちびサイラス", male: 1 }
    , { id: 0x0562, implDate: "2024/08/16", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "アーチャー", name: "ヴィクトリア", modifier: "狩人浴衣", derivation: "浴衣" }
    , { id: 0x0563, implDate: "2024/08/16", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "衛士", name: "センカ", modifier: "銭雷の衛者" }
    , { id: 0x0564, implDate: "2024/08/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "シールダー", name: "サフィール", modifier: "戦華の盾騎士" }
    , { id: 0x0565, implDate: "2024/08/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "妖糸使い", name: "ララネ", modifier: "死線の操者" }
    , { id: 0x0566, implDate: "2024/08/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ガンスリンガー", name: "デステリカ", modifier: "皆殺しの凶銃" }
    , { id: 0x0567, implDate: "2024/08/22", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "妖糸使い", name: "クローシェ", modifier: "紫編の妖糸" }
    , { id: 0x0568, implDate: "2024/08/22", implDate_bq: null        , obtain: [ "ev", "popu" ], rarity: "b" , depType: "rear", class: "魔界総帥", name: "アスバール", modifier: "嵐雨神祭", derivation: "闘兵" }
    , { id: 0x0569, implDate: "2024/08/22", implDate_bq: null        , obtain: [ "sp", "gift" ], rarity: "gc", depType: "rear", class: "時の俯瞰者", name: "ちびクロノシア" }//, extra: { obtain: [ "tr", "rain" ] } }
    , { id: 0x056a, implDate: "2024/08/29", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "bh", depType: "van" , class: "開天の神話", name: "伏綺", modifier: "大華の礎たる者 " }
    , { id: 0x056b, implDate: "2024/09/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ボウライダー", name: "ちびエメルダ" }
    , { id: 0x056c, implDate: "2024/09/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "both", class: "スカイヒーラー", name: "ちびイエラ" }
    , { id: 0x056d, implDate: "2024/09/05", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "メディック", name: "セレン", modifier: "慈愛の衛生兵" }
    , { id: 0x056e, implDate: "2024/09/05", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "b" , depType: "van" , class: "憤怒の海神", name: "ジーラトス", modifier: "戦鯨の亜神", male: 1 }
    , { id: 0x056f, implDate: "2024/09/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ワルキューレ", name: "キャリー", modifier: "精鋭槍騎兵", derivation: "新装" }
    , { id: 0x0570, implDate: "2024/09/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "ボウライダー", name: "マーガレット", modifier: "光輝弓", derivation: "新装" }
    , { id: 0x0571, implDate: "2024/09/12", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "rear", class: "パイレーツ", name: "ちびジョヴァンニ", male: 1 }
    , { id: 0x0572, implDate: "2024/09/19", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "儀式魔術師", name: "イルミナ", modifier: "擬神憑き" }
    , { id: 0x0573, implDate: "2024/09/26", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "rear", class: "シャーマン", name: "天墜神星", modifier: "煌星の亜神 " }
    , { id: 0x0574, implDate: "2024/09/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "インペリアルナイト", name: "ヘイズル", modifier: "初代帝国騎士団長", latent: "白の帝国" }
    , { id: 0x0575, implDate: "2024/09/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "初代皇帝", name: "ヴィラヘルム", modifier: "初代白の皇帝", latent: "白の帝国" }
    , { id: 0x0576, implDate: "2024/09/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "グラディエーター", name: "アグナ", modifier: "帝国剣闘士", latent: "白の帝国" }
    , { id: 0x0577, implDate: "2024/09/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "デモンサモナー", name: "ザミエル", modifier: "帝国悪魔召喚士", latent: "白の帝国" }
    , { id: 0x0578, implDate: "2024/09/26", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "ライフリンカー", name: "ルスティ", modifier: "帝国命鎖使い", latent: "白の帝国" }
    , { id: 0x0579, implDate: "2024/09/26", implDate_bq: null        , obtain: [ "tr", "dark" ], rarity: "p" , depType: "rear", class: "ハデスシャーマン", name: "スイゼ", modifier: "冥庭園の巫女", latent: "白の帝国" }
    , { id: 0x057a, implDate: "2024/10/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびマルゴット", latent: "白の帝国" }
    , { id: 0x057b, implDate: "2024/10/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "神官戦士", name: "ちびルチア", latent: "白の帝国" }
    , { id: 0x057c, implDate: "2024/10/10", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "吟遊詩人", name: "アミー", modifier: "妖魔の旋律" }
    , { id: 0x057d, implDate: "2024/10/10", implDate_bq: null        , obtain: [ "tr", "mili" ], rarity: "p" , depType: "van" , class: "ランスマスター", name: "アイネ", modifier: "戦火の槍士" }
    , { id: 0x057e, implDate: "2024/10/10", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "van" , class: "忍者", name: "ちびヒエン", male: 1 }
    , { id: 0x057f, implDate: "2024/10/23", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "王城", name: "王城", collabo: 1 }
    , { id: 0x0580, implDate: "2024/10/23", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "鉄腕娘【モンスター娘TD】", name: "アイレン", modifier: "アイアンゴーレム娘", collabo: 1 }
    , { id: 0x0581, implDate: "2024/10/23", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "b" , depType: "rear", class: "猫又", name: "コハル", modifier: "悪戯な黒猫", derivation: "ハロウィン" }
    , { id: 0x0582, implDate: "2024/10/30", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "both", class: "スカウト", name: "ヘルメルク", modifier: "亜神の伝書士" }
    , { id: 0x0583, implDate: "2024/11/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "砲術士", name: "ちびカノン" }
    , { id: 0x0584, implDate: "2024/11/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "rear", class: "ドラグーン", name: "ちびイーファ" }
    , { id: 0x0585, implDate: "2024/11/07", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "rear", class: "メディック", name: "ニーカ", modifier: "新任医官" }
    , { id: 0x0586, implDate: "2024/11/14", implDate_bq: null        , obtain: [ "ev", "item" ], rarity: "p" , depType: "van" , class: "オートマタ", name: "パルセ", modifier: "飛空戦艦管理頭脳" }
    , { id: 0x0587, implDate: "2024/11/14", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "神話の継承者", name: "ヘラクレイア", modifier: "武の半神" }
    , { id: 0x0588, implDate: "2024/11/14", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "ダンサー", name: "シャルキー", modifier: "激励の踊り子", derivation: "新装" }
    , { id: 0x0589, implDate: "2024/11/14", implDate_bq: null        , obtain: [ "ev", "maji" ], rarity: "b" , depType: "rear", class: "魔物使い", name: "バスカット", modifier: "魔物使い" }
    , { id: 0x058a, implDate: "2024/11/14", implDate_bq: null        , obtain: [ "ev", "subj" ], rarity: "b" , depType: "van" , class: "テンプルナイト", name: "マージ", modifier: "雷神の騎士" }
    , { id: 0x058b, implDate: "2024/11/14", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "van" , class: "モンク", name: "ちびダン", male: 1 }
    , { id: 0x058c, implDate: "2024/11/21", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "both", class: "異世界戦士", name: "エフトラ", modifier: "最終決戦仕様", derivation: "最終決戦仕様" }
    , { id: 0x058d, implDate: "2024/11/21", implDate_bq: null        , obtain: [ "sh"         ], rarity: "bh", depType: "both", class: "盤上の支配者", name: "フィネス", modifier: "戦場を編む者" }
    , { id: 0x058e, implDate: "2024/11/21", implDate_bq: null        , obtain: [ "tr", "hero" ], rarity: "ph", depType: "both", class: "盤上の支配者", name: "フィネス", modifier: "戦場を編む者" }
    , { id: 0x058f, implDate: "2024/12/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "ぬらりひょん", name: "ちびシノ" }
    , { id: 0x0590, implDate: "2024/12/01", implDate_bq: null        , obtain: [ "sp", "else" ], rarity: "gc", depType: "van" , class: "戦巫女", name: "ちびコウメ" }
    , { id: 0x0591, implDate: "2024/12/05", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "van" , class: "ソルジャー", name: "アリア", modifier: "歴戦の副官", derivation: "新装" }
    , { id: 0x0592, implDate: "2024/12/05", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "b" , depType: "rear", class: "吟遊詩人", name: "ホルミース", modifier: "歴史の観測者" }
    , { id: 0x0593, implDate: "2024/12/12", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "van" , class: "プリンセス", name: "トレシア", modifier: "北部城塞の姫君" }
    , { id: 0x0594, implDate: "2024/12/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "メイド", name: "セーラ", modifier: "白雪の筆頭侍女", derivation: "クリスマス" }
    , { id: 0x0595, implDate: "2024/12/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "デモンサモナー", name: "ラピス", modifier: "大悪魔と雪景色", derivation: "クリスマス" }
    , { id: 0x0596, implDate: "2024/12/12", implDate_bq: null        , obtain: [ "sh"         ], rarity: "p" , depType: "van" , class: "神官戦士", name: "雪駆け神官", modifier: "ルチア", derivation: "クリスマス", latent: "白の帝国" }
    , { id: 0x0597, implDate: "2024/12/12", implDate_bq: null        , obtain: [ "sp", "shop" ], rarity: "gc", depType: "van" , class: "ダークファイター", name: "ちびデシウス", male: 1 }
    , { id: 0x0598, implDate: "2024/12/27", implDate_bq: null        , obtain: [ "ev", "star" ], rarity: "p" , depType: "rear", class: "ドルイド", name: "メープル", modifier: "聖なる森の乙女", derivation: "クリスマス" }
    , { id: 0x0599, implDate: "2024/12/27", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "van" , class: "天尊", name: "太上道君" }
    , { id: 0x059a, implDate: "2024/12/27", implDate_bq: null        , obtain: [ "sh"         ], rarity: "b" , depType: "rear", class: "天尊", name: "太上老君" }
    , { id: 0x059b, implDate: "2024/12/27", implDate_bq: null        , obtain: [ "tr", "rain" ], rarity: "b" , depType: "rear", class: "政務官", name: "アンナ", modifier: "晴れ着の政務官", derivation: "お正月" }
    
    
    
    
    /*
    [modifier][name][qualifier], [name](/[derivation])
    , { id: 0x, implDate: "", implDate_bq: "", obtain: [ "" ], rarity: "" , depType: "van" , class: "", name: "", modifier: "" }
    , { id: 0x, implDate: "", implDate_bq: "", obtain: [ "" ], rarity: "" , depType: "rear", class: "", name: "", modifier: "" }
    , { id: 0x, implDate: "", implDate_bq: "", obtain: [ "" ], rarity: "" , depType: "both", class: "", name: "", modifier: "" }
    , qualifier: ""
    , derivation: ""
    , latent: ""
    , male: 1
    , collabo: 1
    , extra: {  }
    */
];

/*

    obtain
        sh  召喚
        ev  イベント
            ドロップ drop / 試練 star / 収集 item / 大討伐 subj / 人気闘兵 popu / 魔神最終決戦 maji / 他 else
        tr  交換/帝国大戦/戦神コロシアム
            虹水晶 rain / 魔水晶 demo / 闇水晶 dark / 武勲結晶 mili / 英傑結晶 hero / 他 else
        sp  配布/覚醒ちび/課金/シリアルコード
            配布 gift / 課金 shop / シリアルコード code / 他 else
    
    rarity
        bh b ph p g s sl gc
    
    depType
        van rear both
    
    derivation
        お正月 温泉 バレンタイン 学園 バニー 花嫁 水着 浴衣 ハロウィン クリスマス 私服 (アイドル 新装 闘兵 etc...)
    
    latent    // 表示はされない
        白の帝国


*/
