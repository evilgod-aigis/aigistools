const unitList = [
    // 2013
    { id: 0x0000, implDate: "2013/11/26", implDate_bq: "2018/04/19", obtain: "sh", rarity: "b" , depType: "van" , class: "ヘビーアーマー", name: "ディーナ", fullName: "怪力少女ディーナ" }
    , { id: 0x0001, implDate: "2013/11/26", implDate_bq: "2017/10/26", obtain: "sh", rarity: "b" , depType: "van" , class: "ワルキューレ", name: "クリッサ", fullName: "一角獣騎士クリッサ" }
    , { id: 0x0002, implDate: "2013/11/26", implDate_bq: "2016/02/25", obtain: "sh", rarity: "b" , depType: "van" , class: "ローグ", name: "ベルナ", fullName: "盗賊ベルナ" }
    , { id: 0x0003, implDate: "2013/11/26", implDate_bq: "2020/11/19", obtain: "sh", rarity: "b" , depType: "van" , class: "プリンセス", name: "シビラ", fullName: "シビラ" }
    , { id: 0x0004, implDate: "2013/11/26", implDate_bq: "2016/08/04", obtain: "sh", rarity: "b" , depType: "rear", class: "アーチャー", name: "ナナリー", fullName: "白き射手ナナリー" }
    , { id: 0x0005, implDate: "2013/11/26", implDate_bq: "2016/02/25", obtain: "sh", rarity: "b" , depType: "rear", class: "ヒーラー", name: "イリス", fullName: "聖女イリス" }
    , { id: 0x0006, implDate: "2013/11/26", implDate_bq: "2016/03/10", obtain: "sh", rarity: "b" , depType: "rear", class: "ウィッチ", name: "デスピア", fullName: "魔女デスピア" }
    , { id: 0x0007, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ソルジャー", name: "ジェローム", fullName: "用兵家ジェローム", male: 1 }
    , { id: 0x0008, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ワルキューレ", name: "テティス", fullName: "白百合騎士テティス" }
    , { id: 0x0009, implDate: "2013/11/26", implDate_bq: "2017/04/13", obtain: "sh", rarity: "p" , depType: "van" , class: "ワルキューレ", name: "ダリア", fullName: "黒槍騎士ダリア" }
    , { id: 0x000a, implDate: "2013/11/26", implDate_bq: "2016/04/14", obtain: "sh", rarity: "p" , depType: "van" , class: "ローグ", name: "シプリア", fullName: "盗賊シプリア" }
    , { id: 0x000b, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "プリンセス", name: "リリア", fullName: "リリア" }
    , { id: 0x000c, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "プリンセス", name: "シェリー", fullName: "シェリー" }
    , { id: 0x000d, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "アーチャー", name: "バシラ", fullName: "神速の射手バシラ" }
    , { id: 0x000e, implDate: "2013/11/26", implDate_bq: "2016/02/25", obtain: "sh", rarity: "p" , depType: "rear", class: "ヒーラー", name: "カミラ", fullName: "癒し手カミラ" }
    , { id: 0x000f, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ウィッチ", name: "フィグネリア", fullName: "魔女フィグネリア" }
    , { id: 0x0010, implDate: "2013/11/26", implDate_bq: "2016/06/09", obtain: "sh", rarity: "p" , depType: "rear", class: "ウィッチ", name: "アデル", fullName: "魔女アデル" }
    , { id: 0x0011, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "ソルジャー", name: "ユリアン", fullName: "兵士長ユリアン", male: 1 }
    , { id: 0x0012, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "ヘビーアーマー", name: "ギャレット", fullName: "破壊者ギャレット", male: 1 }
    , { id: 0x0013, implDate: "2013/11/26", implDate_bq: "2016/02/25", obtain: "sh", rarity: "g" , depType: "van" , class: "ヘビーアーマー", name: "ベルニス", fullName: "大盾の乙女ベルニス" }
    , { id: 0x0014, implDate: "2013/11/26", implDate_bq: "2017/06/29", obtain: "sh", rarity: "g" , depType: "van" , class: "ワルキューレ", name: "キャリー", fullName: "槍騎兵キャリー" }
    , { id: 0x0015, implDate: "2013/11/26", implDate_bq: "2017/05/25", obtain: "sh", rarity: "g" , depType: "van" , class: "ローグ", name: "キュテリ", fullName: "怪盗キュテリ" }
    , { id: 0x0016, implDate: "2013/11/26", implDate_bq: "2021/03/18", obtain: "sh", rarity: "g" , depType: "van" , class: "ローグ", name: "ベティ", fullName: "盗賊ベティ" }
    , { id: 0x0017, implDate: "2013/11/26", implDate_bq: "2016/02/25", obtain: "sh", rarity: "g" , depType: "van" , class: "プリンセス", name: "テミス", fullName: "テミス" }
    , { id: 0x0018, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "バンデット", name: "コンラッド", fullName: "山賊王コンラッド", male: 1 }
    , { id: 0x0019, implDate: "2013/11/26", implDate_bq: "2019/09/26", obtain: "sh", rarity: "g" , depType: "rear", class: "アーチャー", name: "クレア", fullName: "鋼鉄弓クレア" }
    , { id: 0x001a, implDate: "2013/11/26", implDate_bq: "2018/03/15", obtain: "sh", rarity: "g" , depType: "rear", class: "アーチャー", name: "ベラ", fullName: "狩人ベラ" }
    , { id: 0x001b, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "メイジ", name: "バルバストラフ", fullName: "賢者バルバストラフ", male: 1 }
    , { id: 0x001c, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "メイジ", name: "サイラス", fullName: "黒衣のサイラス", male: 1 }
    , { id: 0x001d, implDate: "2013/11/26", implDate_bq: "2016/05/12", obtain: "sh", rarity: "g" , depType: "rear", class: "ヒーラー", name: "イーリス", fullName: "癒し手イーリス" }
    , { id: 0x001e, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ヒーラー", name: "フェドラ", fullName: "狂聖女フェドラ" }
    , { id: 0x001f, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ソルジャー", name: "クレイブ", fullName: "傭兵クレイブ", male: 1 }
    , { id: 0x0020, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ソルジャー", name: "フィリス", fullName: "新緑の兵士フィリス" }
    , { id: 0x0021, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ヘビーアーマー", name: "ベルナール", fullName: "金色の盾ベルナール", male: 1 }
    , { id: 0x0022, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ヘビーアーマー", name: "レアン", fullName: "鋼鉄の女レアン" }
    , { id: 0x0023, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ワルキューレ", name: "エレイン", fullName: "槍騎兵エレイン" }
    , { id: 0x0024, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ワルキューレ", name: "ミーシャ", fullName: "見習い騎兵ミーシャ" }
    , { id: 0x0025, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ローグ", name: "セシリー", fullName: "暗殺者セシリー" }
    , { id: 0x0026, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ローグ", name: "ハリッサ", fullName: "女盗賊ハリッサ" }
    , { id: 0x0027, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "バンデット", name: "モーティマ", fullName: "山賊頭モーティマ", male: 1 }
    , { id: 0x0028, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "バンデット", name: "フューネス", fullName: "狂戦士フューネス", male: 1 }
    , { id: 0x0029, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "アーチャー", name: "ソーマ", fullName: "弓兵ソーマ" }
    , { id: 0x002a, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "アーチャー", name: "ダニエラ", fullName: "弓兵ダニエラ" }
    , { id: 0x002b, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "メイジ", name: "ヴァレリー", fullName: "魔導師ヴァレリー", male: 1 }
    , { id: 0x002c, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ヒーラー", name: "アリサ", fullName: "癒し手アリサ" }
    , { id: 0x002d, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ヒーラー", name: "ドルカ", fullName: "癒し手ドルカ" }
    , { id: 0x002e, implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ウィッチ", name: "カリオペ", fullName: "魔女カリオペ" }
    , { id: 0x002f, implDate: "2013/11/26", implDate_bq: "2016/03/10", obtain: "ev", rarity: "g" , depType: "rear", class: "ウィッチ", name: "クロリス", fullName: "白き魔女クロリス" }
    , { id: 0x0030, implDate: "2013/11/28", implDate_bq: "2016/03/10", obtain: "sh", rarity: "p" , depType: "rear", class: "アーチャー", name: "ヴィクトリア", fullName: "魔狩人ヴィクトリア" }
    , { id: 0x0031, implDate: "2013/12/03", implDate_bq: "2017/01/19", obtain: "sh", rarity: "p" , depType: "rear", class: "メイジ", name: "ガラニア", fullName: "神秘の探究者ガラニア" }
    , { id: 0x0032, implDate: "2013/12/03", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "メイジ", name: "メーリス", fullName: "見習い魔術師メーリス" }
    , { id: 0x0033, implDate: "2013/12/17", implDate_bq: "2017/08/10", obtain: "ev", rarity: "g" , depType: "van" , class: "ソルジャー", name: "アリア", fullName: "副官アリア" }
    , { id: 0x0034, implDate: "2013/12/17", implDate_bq: "2016/12/08", obtain: "sh", rarity: "p" , depType: "van" , class: "バンデット", name: "ライラ", fullName: "女山賊ライラ" }
    , { id: 0x0035, implDate: "2013/12/17", implDate_bq: "2016/03/10", obtain: "ev", rarity: "p" , depType: "rear", class: "ウィッチ", name: "ベリンダ", fullName: "白き魔女ベリンダ" }
    , { id: 0x0036, implDate: "2013/12/20", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "ジェリウス", fullName: "光の盾ジェリウス", male: 1 }
    , { id: 0x0037, implDate: "2013/12/20", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "アーチャー", name: "ストレイ", fullName: "狩人ストレイ", male: 1 }
    , { id: 0x0038, implDate: "2013/12/27", implDate_bq: "2018/06/14", obtain: "sh", rarity: "p" , depType: "van" , class: "バンデット", name: "セリア", fullName: "聖霊の友セリア" }
    , { id: 0x0039, implDate: "2013/12/27", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ヒーラー", name: "クリストファー", fullName: "神官クリストファー", male: 1 }
    
    // 2014
    , { id: 0x003a, implDate: "2014/01/06", implDate_bq: "2018/06/14", obtain: "ev", rarity: "p" , depType: "rear", class: "メイジ", name: "モルディベート", fullName: "モルディベート" }
    , { id: 0x003b, implDate: "2014/01/08", implDate_bq: "2016/02/25", obtain: "sh", rarity: "p" , depType: "van" , class: "サムライ", name: "アカネ", fullName: "剣士アカネ" }
    , { id: 0x003c, implDate: "2014/01/08", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "パイレーツ", name: "モニカ", fullName: "駆け出し海賊モニカ" }
    , { id: 0x003d, implDate: "2014/01/14", implDate_bq: "2016/04/28", obtain: "tr", rarity: "b" , depType: "van" , class: "忍者", name: "サキ", fullName: "忍者サキ" }
    , { id: 0x003e, implDate: "2014/01/16", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "パイレーツ", name: "ミネルバ", fullName: "伝説の海賊ミネルバ" }
    , { id: 0x003f, implDate: "2014/01/16", implDate_bq: "2017/10/26", obtain: "sh", rarity: "p" , depType: "rear", class: "パイレーツ", name: "レイチェル", fullName: "海賊レイチェル" }
    , { id: 0x0040, implDate: "2014/01/22", implDate_bq: "2016/08/04", obtain: "sh", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "マリーベル", fullName: "聖戦士マリーベル" }
    , { id: 0x0041, implDate: "2014/01/29", implDate_bq: "2017/06/29", obtain: "sh", rarity: "p" , depType: "van" , class: "サムライ", name: "サクヤ", fullName: "薙刀剣士サクヤ" }
    , { id: 0x0042, implDate: "2014/01/29", implDate_bq: "2016/04/28", obtain: "sh", rarity: "p" , depType: "van" , class: "忍者", name: "ヒナ", fullName: "忍者ヒナ" }
    , { id: 0x0043, implDate: "2014/02/04", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "中級竜兵", name: "ガドラス", fullName: "青竜のガドラス", male: 1 }
    , { id: 0x0044, implDate: "2014/02/12", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "ドラゴンプリンセス", name: "アーニャ", fullName: "竜姫アーニャ" }
    , { id: 0x0045, implDate: "2014/02/12", implDate_bq: "2017/06/29", obtain: "ev", rarity: "p" , depType: "rear", class: "ドラゴンシャーマン", name: "エキドナ", fullName: "竜巫女エキドナ" }
    , { id: 0x0046, implDate: "2014/02/18", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "サムライ", name: "シズカ", fullName: "姫侍シズカ" }
    , { id: 0x0047, implDate: "2014/02/18", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "サムライ", name: "コジュウロウ", fullName: "侍剣士コジュウロウ", male: 1 }
    , { id: 0x0048, implDate: "2014/02/18", implDate_bq: "2016/11/02", obtain: "ev", rarity: "p" , depType: "rear", class: "メイジ", name: "オデット", fullName: "秘法の伝承者オデット" }
    , { id: 0x0049, implDate: "2014/02/25", implDate_bq: "2016/11/02", obtain: "sh", rarity: "p" , depType: "rear", class: "ヴァンパイアハンター", name: "エリザベート", fullName: "賞金稼ぎエリザベート" }
    , { id: 0x004a, implDate: "2014/02/25", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ヴァンパイアハンター", name: "ヴィンセント", fullName: "復讐者ヴィンセント", male: 1 }
    , { id: 0x004b, implDate: "2014/03/11", implDate_bq: "2019/10/24", obtain: "ev", rarity: "b" , depType: "van" , class: "イモータルプリンセス", name: "カルマ", fullName: "純白の花嫁カルマ" }
    , { id: 0x004c, implDate: "2014/03/11", implDate_bq: "2017/10/26", obtain: "ev", rarity: "p" , depType: "van" , class: "ヴァンパイアプリンセス", name: "カルマ", fullName: "黒衣の花嫁カルマ" }
    , { id: 0x004d, implDate: "2014/03/11", implDate_bq: "2017/05/25", obtain: "sh", rarity: "p" , depType: "van" , class: "ペガサスライダー", name: "リディ", fullName: "天駆ける騎士リディ" }
    , { id: 0x004e, implDate: "2014/03/11", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ヒーラー", name: "ロベルト", fullName: "癒しの獅子ロベルト", male: 1 }
    , { id: 0x004f, implDate: "2014/03/11", implDate_bq: "2019/10/24", obtain: "ev", rarity: "p" , depType: "rear", class: "シャーマン", name: "シホ", fullName: "巫女シホ" }
    , { id: 0x0050, implDate: "2014/03/22", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "van" , class: "忍者", name: "ヒエン", fullName: "忍者ヒエン", male: 1 }
    , { id: 0x0051, implDate: "2014/03/25", implDate_bq: "2016/12/08", obtain: "sh", rarity: "g" , depType: "rear", class: "ウィッチ", name: "ユユ", fullName: "ハーフエルフのユユ" }
    , { id: 0x0052, implDate: "2014/03/25", implDate_bq: "2019/09/26", obtain: "ev", rarity: "p" , depType: "van" , class: "ダークファイター", name: "ユリナ", fullName: "暗黒騎士ユリナ" }
    , { id: 0x0053, implDate: "2014/03/25", implDate_bq: "2017/03/14", obtain: "tr", rarity: "p" , depType: "rear", class: "アーチャー", name: "スピカ", fullName: "妖精郷の射手スピカ" }
    , { id: 0x0054, implDate: "2014/04/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "プリンセス", name: "オリヴィエ", fullName: "オリヴィエ" }
    , { id: 0x0055, implDate: "2014/04/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ビショップ", name: "マリウス", fullName: "妖精司教マリウス", male: 1 }
    , { id: 0x0056, implDate: "2014/04/01", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "ヒーラー", name: "シーディス", fullName: "妖精女王シーディス" }
    , { id: 0x0057, implDate: "2014/04/10", implDate_bq: "2017/07/12", obtain: "ev", rarity: "g" , depType: "van" , class: "ソルジャー", name: "ケイティ", fullName: "戦術教官ケイティ" }
    , { id: 0x0058, implDate: "2014/04/15", implDate_bq: "2016/04/14", obtain: "ev", rarity: "p" , depType: "van" , class: "アベンジャー", name: "ロアナ", fullName: "ダークエルフのロアナ" }
    , { id: 0x0059, implDate: "2014/04/15", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ソルジャー", name: "ロザリー", fullName: "妖精郷の戦士ロザリー" }
    , { id: 0x005a, implDate: "2014/04/15", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "アーチャー", name: "ローレン", fullName: "妖精郷の射手ローレン", male: 1 }
    , { id: 0x005b, implDate: "2014/04/15", implDate_bq: "2016/12/08", obtain: "ev", rarity: "p" , depType: "van" , class: "モンク", name: "リン", fullName: "武闘家リン" }
    , { id: 0x005c, implDate: "2014/04/22", implDate_bq: "2017/02/09", obtain: "sh", rarity: "p" , depType: "van" , class: "前衛戦術家", name: "ウズメ", fullName: "地の軍師ウズメ" }
    , { id: 0x005d, implDate: "2014/04/22", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "サムライ", name: "サノスケ", fullName: "足軽頭サノスケ", male: 1 }
    , { id: 0x005e, implDate: "2014/05/07", implDate_bq: "2017/08/10", obtain: "ev", rarity: "p" , depType: "rear", class: "後衛戦術家", name: "レン", fullName: "天の軍師レン" }
    , { id: 0x005f, implDate: "2014/05/07", implDate_bq: "2017/01/19", obtain: "sh", rarity: "b" , depType: "rear", class: "陰陽師", name: "ミコト", fullName: "陰陽師ミコト" }
    , { id: 0x0060, implDate: "2014/05/07", implDate_bq: "2017/07/12", obtain: "sh", rarity: "g" , depType: "van" , class: "モンク", name: "ジーナ", fullName: "格闘士ジーナ" }
    , { id: 0x0061, implDate: "2014/05/07", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "メイジ", name: "パレス", fullName: "魔術師パレス" }
    , { id: 0x0062, implDate: "2014/05/07", implDate_bq: "2016/09/08", obtain: "ev", rarity: "p" , depType: "van" , class: "魔法剣士", name: "シャルロット", fullName: "魔法剣士シャルロット" }
    , { id: 0x0063, implDate: "2014/05/15", implDate_bq: "2017/01/19", obtain: "sh", rarity: "g" , depType: "van" , class: "アベンジャー", name: "ドロシー", fullName: "大地の妖精ドロシー" }
    , { id: 0x0064, implDate: "2014/05/30", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ウィッチ", name: "ネーニャ", fullName: "猫魔女ネーニャ" }
    , { id: 0x0065, implDate: "2014/05/30", implDate_bq: "2017/10/26", obtain: "ev", rarity: "p" , depType: "rear", class: "サモナー", name: "ソラノ", fullName: "召喚士ソラノ" }
    , { id: 0x0066, implDate: "2014/06/05", implDate_bq: "2017/07/12", obtain: "sh", rarity: "p" , depType: "rear", class: "メイジ", name: "サーシャ", fullName: "幻惑の魔術師サーシャ" }
    , { id: 0x0067, implDate: "2014/06/05", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "パイレーツ", name: "ジョヴァンニ", fullName: "海賊ジョヴァンニ", male: 1 }
    , { id: 0x0068, implDate: "2014/06/05", implDate_bq: "2017/04/13", obtain: "ev", rarity: "p" , depType: "van" , class: "ローグ", name: "エイダ", fullName: "獣人エイダ" }
    , { id: 0x0069, implDate: "2014/06/19", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "忍者", name: "カゲロウ", fullName: "忍者カゲロウ" }
    , { id: 0x006a, implDate: "2014/06/26", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "シャーマン", name: "カグラ", fullName: "巫女カグラ" }
    , { id: 0x006b, implDate: "2014/06/26", implDate_bq: "2017/10/26", obtain: "ev", rarity: "g" , depType: "rear", class: "ビショップ", name: "ノエル", fullName: "妖精司祭ノエル" }
    , { id: 0x006c, implDate: "2014/06/26", implDate_bq: "2016/04/14", obtain: "sh", rarity: "b" , depType: "van" , class: "エンジェル", name: "ソフィー", fullName: "堕天使ソフィー" }
    , { id: 0x006d, implDate: "2014/06/26", implDate_bq: "2017/07/12", obtain: "ev", rarity: "p" , depType: "van" , class: "エンジェル", name: "クロエ", fullName: "堕天使クロエ" }
    , { id: 0x006e, implDate: "2014/07/03", implDate_bq: "2017/03/14", obtain: "sh", rarity: "g" , depType: "van" , class: "ペガサスライダー", name: "ステラ", fullName: "見習い天馬騎士ステラ" }
    , { id: 0x006f, implDate: "2014/07/17", implDate_bq: "2019/05/23", obtain: "ev", rarity: "p" , depType: "van" , class: "魔法剣士", name: "ホルエス", fullName: "熱砂の剣士ホルエス" }
    , { id: 0x0070, implDate: "2014/07/17", implDate_bq: "2016/06/16", obtain: "sh", rarity: "p" , depType: "rear", class: "風水使い", name: "マール", fullName: "風水士マール" }
    , { id: 0x0071, implDate: "2014/07/17", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ソルジャー", name: "グスタフ", fullName: "ドワーフ戦士グスタフ", male: 1 }
    , { id: 0x0072, implDate: "2014/07/17", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "パイレーツ", name: "ヴェロッテ", fullName: "海賊ヴェロッテ" }
    , { id: 0x0073, implDate: "2014/07/17", implDate_bq: "2016/05/12", obtain: "ev", rarity: "p" , depType: "van" , class: "くぐつ使い", name: "リッカ", fullName: "機甲士リッカ" }
    , { id: 0x0074, implDate: "2014/07/31", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "砲術士", name: "ジャンナ", fullName: "閃の撃砲ジャンナ" }
    , { id: 0x0075, implDate: "2014/08/07", implDate_bq: "2016/06/09", obtain: "sh", rarity: "p" , depType: "rear", class: "ダンサー", name: "マーニー", fullName: "踊り子マーニー" }
    , { id: 0x0076, implDate: "2014/08/15", implDate_bq: "2016/05/12", obtain: "sh", rarity: "b" , depType: "rear", class: "サモナー", name: "ファルネ", fullName: "召喚士ファルネ" }
    , { id: 0x0077, implDate: "2014/08/21", implDate_bq: "2018/04/19", obtain: "ev", rarity: "p" , depType: "rear", class: "パイレーツ", name: "ベアトリカ", fullName: "紅の海賊ベアトリカ" }
    , { id: 0x0078, implDate: "2014/08/21", implDate_bq: "2017/06/29", obtain: "ev", rarity: "g" , depType: "van" , class: "セーラー", name: "マリエ", fullName: "見習い水兵マリエ" }
    , { id: 0x0079, implDate: "2014/08/21", implDate_bq: "2017/05/25", obtain: "sh", rarity: "g" , depType: "van" , class: "サムライ", name: "チズル", fullName: "流浪の武芸者チズル" }
    , { id: 0x007a, implDate: "2014/08/21", implDate_bq: "2016/05/12", obtain: "ev", rarity: "p" , depType: "van" , class: "忍者", name: "アザミ", fullName: "忍者アザミ" }
    , { id: 0x007b, implDate: "2014/08/28", implDate_bq: "2021/08/12", obtain: "sh", rarity: "p" , depType: "van" , class: "モンク", name: "ウル", fullName: "猛き爪獣ウル" }
    , { id: 0x007c, implDate: "2014/08/28", implDate_bq: "2016/09/08", obtain: "sh", rarity: "p" , depType: "rear", class: "ヒーラー", name: "サーリア", fullName: "慈愛の祈りサーリア" }
    , { id: 0x007d, implDate: "2014/09/11", implDate_bq: "2017/02/09", obtain: "ev", rarity: "p" , depType: "van" , class: "プリンセス", name: "クローディア", fullName: "クローディア" }
    , { id: 0x007e, implDate: "2014/09/11", implDate_bq: "2017/02/09", obtain: "sh", rarity: "g" , depType: "rear", class: "砲術士", name: "ゾラ", fullName: "魔砲士ゾラ" }
    , { id: 0x007f, implDate: "2014/09/11", implDate_bq: "2017/05/25", obtain: "ev", rarity: "p" , depType: "van" , class: "サムライ", name: "モミジ", fullName: "剣豪モミジ" }
    , { id: 0x0080, implDate: "2014/09/18", implDate_bq: "2017/05/25", obtain: "sh", rarity: "p" , depType: "rear", class: "ビショップ", name: "パトラ", fullName: "太陽神官パトラ" }
    , { id: 0x0081, implDate: "2014/09/18", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ソルジャー", name: "アサル", fullName: "砂漠の戦士アサル" }
    , { id: 0x0082, implDate: "2014/09/18", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ローグ", name: "バラッド", fullName: "盗賊バラッド", male: 1 }
    , { id: 0x0083, implDate: "2014/09/18", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ヴァンパイアハンター", name: "フーリ", fullName: "吸血鬼狩人フーリ" }
    , { id: 0x0084, implDate: "2014/09/20", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "妖狐", name: "たまも", fullName: "妖狐たまも" }
    , { id: 0x0085, implDate: "2014/09/29", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "van" , class: "アベンジャー", name: "ザラーム", fullName: "仮面の復讐者ザラーム", male: 1 }
    , { id: 0x0086, implDate: "2014/10/02", implDate_bq: "2017/05/25", obtain: "sh", rarity: "p" , depType: "van" , class: "魔法剣士", name: "サビーネ", fullName: "宮廷剣士サビーネ" }
    , { id: 0x0087, implDate: "2014/10/02", implDate_bq: "2017/07/12", obtain: "tr", rarity: "p" , depType: "van" , class: "セーラー", name: "ビエラ", fullName: "水兵ビエラ" }
    , { id: 0x0088, implDate: "2014/10/02", implDate_bq: "2017/08/10", obtain: "ev", rarity: "p" , depType: "rear", class: "アーチャー", name: "リタ", fullName: "漆黒の射手リタ" }
    , { id: 0x0089, implDate: "2014/10/09", implDate_bq: "2017/11/22", obtain: "sh", rarity: "b" , depType: "rear", class: "後衛戦術家", name: "アイシャ", fullName: "伏龍の軍師アイシャ" }
    , { id: 0x008a, implDate: "2014/10/23", implDate_bq: "2016/11/02", obtain: "ev", rarity: "p" , depType: "van" , class: "前衛戦術家", name: "シュウカ", fullName: "亡国の将シュウカ" }
    , { id: 0x008b, implDate: "2014/10/23", implDate_bq: "2016/11/02", obtain: "ev", rarity: "g" , depType: "rear", class: "アーチャー", name: "シャオ", fullName: "彩華の射手シャオ" }
    , { id: 0x008c, implDate: "2014/10/23", implDate_bq: "2017/02/09", obtain: "sh", rarity: "p" , depType: "van" , class: "ソルジャー", name: "ゼノビア", fullName: "剣の聖女ゼノビア" }
    , { id: 0x008d, implDate: "2014/10/23", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ヴァンパイアハンター", name: "フラン", fullName: "混血の狩人フラン" }
    , { id: 0x008e, implDate: "2014/10/30", implDate_bq: "2016/08/04", obtain: "sh", rarity: "p" , depType: "rear", class: "パイレーツ", name: "アネリア", fullName: "姫海賊アネリア" }
    , { id: 0x008f, implDate: "2014/11/13", implDate_bq: "2018/03/15", obtain: "ev", rarity: "p" , depType: "van" , class: "バンデット", name: "イメリア", fullName: "姫山賊イメリア" }
    , { id: 0x0090, implDate: "2014/11/13", implDate_bq: "2017/02/09", obtain: "ev", rarity: "p" , depType: "rear", class: "ダンサー", name: "ワルツ", fullName: "情熱の踊り子ワルツ" }
    , { id: 0x0091, implDate: "2014/11/20", implDate_bq: "2016/08/04", obtain: "sh", rarity: "b" , depType: "van" , class: "ペガサスライダー", name: "エスタ", fullName: "天馬騎士団長エスタ" }
    , { id: 0x0092, implDate: "2014/11/27", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "砲術士", name: "パーシス", fullName: "砲兵パーシス" }
    , { id: 0x0093, implDate: "2014/11/29", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "プリンセス", name: "カグヤ", fullName: "月姫カグヤ" }
    , { id: 0x0094, implDate: "2014/12/04", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "政務官", name: "アンナ", fullName: "政務官アンナ" }
    , { id: 0x0095, implDate: "2014/12/04", implDate_bq: "2017/07/12", obtain: "sh", rarity: "p" , depType: "van" , class: "神官戦士", name: "フラメル", fullName: "神官戦士フラメル" }
    , { id: 0x0096, implDate: "2014/12/18", implDate_bq: "2017/09/21", obtain: "ev", rarity: "p" , depType: "rear", class: "ネクロマンサー", name: "メメント", fullName: "死霊魔術師メメント" }
    , { id: 0x0097, implDate: "2014/12/18", implDate_bq: "2016/08/04", obtain: "sh", rarity: "p" , depType: "van" , class: "メイジアーマー", name: "ジェシカ", fullName: "魔導重装兵ジェシカ" }
    , { id: 0x0098, implDate: "2014/12/18", implDate_bq: "2017/07/12", obtain: "sh", rarity: "g" , depType: "rear", class: "風水使い", name: "クルル", fullName: "風水士クルル" }
    , { id: 0x0099, implDate: "2014/12/18", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "砲術士", name: "メル", fullName: "砲術士メル" }
    , { id: 0x009a, implDate: "2014/12/18", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ウィッチ", name: "エリザ", fullName: "凍氷の守り手エリザ" }
    , { id: 0x009b, implDate: "2014/12/25", implDate_bq: "2016/12/08", obtain: "sh", rarity: "b" , depType: "van" , class: "前衛戦術家", name: "マツリ", fullName: "朱鎧の智将マツリ" }
    , { id: 0x009c, implDate: "2014/12/25", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "モンク", name: "ダン", fullName: "格闘家ダン", male: 1 }
    , { id: 0x009d, implDate: "2014/12/25", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "魔法剣士", name: "リカルド", fullName: "魔法剣士リカルド", male: 1 }
    , { id: 0x009e, implDate: "2014/12/25", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "エンジェル", name: "ニエル", fullName: "堕天使ニエル" }
    , { id: 0x009f, implDate: "2014/12/25", implDate_bq: "2017/03/14", obtain: "tr", rarity: "g" , depType: "rear", class: "ウィッチ", name: "リュリュ", fullName: "聖夜の魔女リュリュ" }
    
    // 2015
    , { id: 0x00a0, implDate: "2015/01/04", implDate_bq: "2017/07/12", obtain: "tr", rarity: "g" , depType: "van" , class: "エンジェル", name: "エルン", fullName: "堕天使エルン" }
    , { id: 0x00a1, implDate: "2015/01/08", implDate_bq: "2017/08/10", obtain: "sh", rarity: "g" , depType: "van" , class: "魔法剣士", name: "アネモネ", fullName: "魔法剣士アネモネ" }
    , { id: 0x00a2, implDate: "2015/01/08", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "ワルキューレ", name: "エミリア", fullName: "戦乙女エミリア" }
    , { id: 0x00a3, implDate: "2015/01/15", implDate_bq: "2016/11/02", obtain: "sh", rarity: "b" , depType: "van" , class: "ダークファイター", name: "コーネリア", fullName: "叛逆の騎士コーネリア" }
    , { id: 0x00a4, implDate: "2015/01/22", implDate_bq: "2017/07/12", obtain: "ev", rarity: "p" , depType: "rear", class: "ダンサー", name: "ハナ", fullName: "祝祭の踊り子ハナ" }
    , { id: 0x00a5, implDate: "2015/01/29", implDate_bq: "2018/06/14", obtain: "ev", rarity: "p" , depType: "van" , class: "ダークファイター", name: "エルヴァ", fullName: "副団長エルヴァ" }
    , { id: 0x00a6, implDate: "2015/01/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "メイジアーマー", name: "グレース", fullName: "魔導鎧姫グレース" }
    , { id: 0x00a7, implDate: "2015/01/29", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "神官戦士", name: "エーテル", fullName: "修道戦士エーテル" }
    , { id: 0x00a8, implDate: "2015/01/29", implDate_bq: "2016/05/12", obtain: "ev", rarity: "p" , depType: "van" , class: "バンデット", name: "ロロネ", fullName: "山賊娘ロロネ" }
    , { id: 0x00a9, implDate: "2015/02/05", implDate_bq: "2018/03/15", obtain: "sh", rarity: "p" , depType: "rear", class: "風水使い", name: "ミア", fullName: "花鏡の風水士ミア" }
    , { id: 0x00aa, implDate: "2015/02/05", implDate_bq: "2016/06/02", obtain: "sh", rarity: "g" , depType: "van" , class: "神官戦士", name: "エレット", fullName: "神官戦士エレット" }
    , { id: 0x00ab, implDate: "2015/02/09", implDate_bq: "2017/06/29", obtain: "sp", rarity: "s" , depType: "rear", class: "クロノウィッチ", name: "リゼット", fullName: "時の魔女リゼット" }
    , { id: 0x00ac, implDate: "2015/02/19", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "ヒーラー", name: "リアナ", fullName: "至宝の使い手リアナ" }
    , { id: 0x00ad, implDate: "2015/02/19", implDate_bq: "2016/08/04", obtain: "sh", rarity: "p" , depType: "rear", class: "ネクロマンサー", name: "アニエス", fullName: "死霊魔術師アニエス" }
    , { id: 0x00ae, implDate: "2015/02/19", implDate_bq: "2018/03/15", obtain: "ev", rarity: "p" , depType: "van" , class: "ドラゴンライダー", name: "ルシル", fullName: "竜騎士ルシル" }
    , { id: 0x00af, implDate: "2015/02/26", implDate_bq: "2018/06/14", obtain: "sh", rarity: "b" , depType: "van" , class: "ヘビーアーマー", name: "ディーネ", fullName: "鉄腕乙女ディーネ" }
    , { id: 0x00b0, implDate: "2015/03/05", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ボウライダー", name: "デイジー", fullName: "弓騎兵デイジー" }
    , { id: 0x00b1, implDate: "2015/03/19", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ドルイド", name: "ププル", fullName: "巫女姫ププル" }
    , { id: 0x00b2, implDate: "2015/03/19", implDate_bq: "2019/04/18", obtain: "sh", rarity: "g" , depType: "rear", class: "レンジャー", name: "フウカ", fullName: "緑森の番人フウカ" }
    , { id: 0x00b3, implDate: "2015/03/19", implDate_bq: "2017/09/21", obtain: "ev", rarity: "p" , depType: "rear", class: "アルケミスト", name: "コリン", fullName: "白衣の錬金術士コリン" }
    , { id: 0x00b4, implDate: "2015/03/26", implDate_bq: "2018/03/15", obtain: "sh", rarity: "b" , depType: "rear", class: "ヴァンパイアハンター", name: "スー", fullName: "霊鳥の射手スー" }
    , { id: 0x00b5, implDate: "2015/03/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "メイド", name: "ヒカゲ", fullName: "庭番女官ヒカゲ" }
    , { id: 0x00b6, implDate: "2015/04/02", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "忍者", name: "サイゾウ", fullName: "忍者サイゾウ", male: 1 }
    , { id: 0x00b7, implDate: "2015/04/02", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "アーチャー", name: "カズハ", fullName: "弓武者カズハ" }
    , { id: 0x00b8, implDate: "2015/04/02", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ビショップ", name: "フドウ", fullName: "破魔僧正フドウ", male: 1 }
    , { id: 0x00b9, implDate: "2015/04/09", implDate_bq: "2018/12/27", obtain: "ev", rarity: "p" , depType: "van" , class: "ヴァンパイアロード", name: "エデン", fullName: "吸血鬼エデン" }
    , { id: 0x00ba, implDate: "2015/04/09", implDate_bq: "2016/11/02", obtain: "sh", rarity: "b" , depType: "rear", class: "シャーマン", name: "キキョウ", fullName: "黒紫の巫女キキョウ" }
    , { id: 0x00bb, implDate: "2015/04/09", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "サムライ", name: "イロハ", fullName: "侍剣士イロハ" }
    , { id: 0x00bc, implDate: "2015/04/13", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "van" , class: "ドラゴンライダー", name: "アベル", fullName: "竜騎士アベル", male: 1 }
    , { id: 0x00bd, implDate: "2015/04/16", implDate_bq: "2017/04/13", obtain: "ev", rarity: "g" , depType: "rear", class: "パイレーツ", name: "モーレット", fullName: "爆裂海賊モーレット" }
    , { id: 0x00be, implDate: "2015/04/16", implDate_bq: "2017/09/21", obtain: "sh", rarity: "p" , depType: "van" , class: "妖狐", name: "イナリ", fullName: "妖狐イナリ" }
    , { id: 0x00bf, implDate: "2015/04/30", implDate_bq: "2017/03/14", obtain: "ev", rarity: "b" , depType: "van" , class: "忍者", name: "ナギ", fullName: "封妖の忍者ナギ" }
    , { id: 0x00c0, implDate: "2015/04/30", implDate_bq: "2018/09/20", obtain: "sh", rarity: "b" , depType: "rear", class: "メイジ", name: "エステル", fullName: "魔法皇女エステル" }
    , { id: 0x00c1, implDate: "2015/04/30", implDate_bq: "2016/12/08", obtain: "ev", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "ミランダ", fullName: "聖鎚闘士ミランダ" }
    , { id: 0x00c2, implDate: "2015/05/07", implDate_bq: "2017/01/19", obtain: "sh", rarity: "p" , depType: "rear", class: "アルケミスト", name: "シャルル", fullName: "神秘の術士シャルル" }
    , { id: 0x00c3, implDate: "2015/05/07", implDate_bq: "2017/11/22", obtain: "ev", rarity: "p" , depType: "van" , class: "ソードマスター", name: "サンドラ", fullName: "剣士サンドラ" }
    , { id: 0x00c4, implDate: "2015/05/21", implDate_bq: "2017/09/21", obtain: "sh", rarity: "g" , depType: "van" , class: "モンク", name: "モモ", fullName: "鉄甲闘士モモ" }
    , { id: 0x00c5, implDate: "2015/05/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ボウライダー", name: "リオン", fullName: "月影の弓騎兵リオン" }
    , { id: 0x00c6, implDate: "2015/05/28", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ドラゴンライダー", name: "エレニア", fullName: "雷竜騎士エレニア" }
    , { id: 0x00c7, implDate: "2015/06/11", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ビショップ", name: "ポーラ", fullName: "旅の司祭ポーラ" }
    , { id: 0x00c8, implDate: "2015/06/11", implDate_bq: "2021/01/14", obtain: "sh", rarity: "g" , depType: "rear", class: "シーフ", name: "レダ", fullName: "お宝泥棒レダ" }
    , { id: 0x00c9, implDate: "2015/06/25", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "神官戦士", name: "セラ", fullName: "神官戦士セラ" }
    , { id: 0x00ca, implDate: "2015/06/28", implDate_bq: "2017/02/09", obtain: "tr", rarity: "g" , depType: "van" , class: "メイジアーマー", name: "ライチ", fullName: "妖精魔鎧兵ライチ" }
    , { id: 0x00cb, implDate: "2015/07/02", implDate_bq: "2019/08/15", obtain: "sh", rarity: "g" , depType: "rear", class: "ドルイド", name: "ローリエ", fullName: "森の守り手ローリエ" }
    , { id: 0x00cc, implDate: "2015/07/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "呪術使い", name: "エヴァ", fullName: "呪術師エヴァ" }
    , { id: 0x00cd, implDate: "2015/07/16", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "くぐつ使い", name: "フィー", fullName: "機甲騎士フィー" }
    , { id: 0x00ce, implDate: "2015/07/23", implDate_bq: "2017/12/28", obtain: "ev", rarity: "p" , depType: "van" , class: "ソードマスター", name: "グローリア", fullName: "剣士グローリア" }
    , { id: 0x00cf, implDate: "2015/07/23", implDate_bq: "2017/08/10", obtain: "sh", rarity: "b" , depType: "van" , class: "ソルジャー", name: "アルティア", fullName: "光の守護者アルティア" }
    , { id: 0x00d0, implDate: "2015/07/23", implDate_bq: "2017/07/12", obtain: "ev", rarity: "p" , depType: "rear", class: "砲術士", name: "カノン", fullName: "爆砲の新兵カノン" }
    , { id: 0x00d1, implDate: "2015/07/24", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "rear", class: "魔物使い", name: "スイル", fullName: "魔物使いスイル" }
    , { id: 0x00d2, implDate: "2015/07/30", implDate_bq: "2017/11/22", obtain: "sh", rarity: "p" , depType: "van" , class: "ソードマスター", name: "レイブン", fullName: "剣士レイブン" }
    , { id: 0x00d3, implDate: "2015/08/13", implDate_bq: "2018/02/01", obtain: "ev", rarity: "p" , depType: "rear", class: "ダークプリースト", name: "ベルディナート", fullName: "闇司祭ベルディナート" }
    , { id: 0x00d4, implDate: "2015/08/13", implDate_bq: "2016/08/04", obtain: "sh", rarity: "p" , depType: "rear", class: "ドラゴンシャーマン", name: "ルビナス", fullName: "竜巫女ルビナス" }
    , { id: 0x00d5, implDate: "2015/08/13", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "セーラー", name: "リーンベル", fullName: "提督リーンベル" }
    , { id: 0x00d6, implDate: "2015/08/20", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "バンデット", name: "アマンダ", fullName: "新世代山賊アマンダ" }
    , { id: 0x00d7, implDate: "2015/08/27", implDate_bq: "2018/02/01", obtain: "sh", rarity: "p" , depType: "rear", class: "シーフ", name: "アニータ", fullName: "閃光の泥棒アニータ" }
    , { id: 0x00d8, implDate: "2015/08/27", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "プリンセス", name: "ロゼット", fullName: "ロゼット" }
    , { id: 0x00d9, implDate: "2015/08/29", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "ロイヤルガード", name: "パテル", fullName: "姫騎士パテル" }
    , { id: 0x00da, implDate: "2015/09/10", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "風水使い", name: "ピピン", fullName: "風水士ピピン" }
    , { id: 0x00db, implDate: "2015/09/14", implDate_bq: "2018/04/19", obtain: "tr", rarity: "g" , depType: "rear", class: "呪術使い", name: "ミトラ", fullName: "呪術師ミトラ" }
    , { id: 0x00dc, implDate: "2015/09/16", implDate_bq: "2018/02/01", obtain: "sh", rarity: "p" , depType: "rear", class: "エンチャンター", name: "エルシャ", fullName: "付与魔術師エルシャ" }
    , { id: 0x00dd, implDate: "2015/09/16", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "魔法剣士", name: "カシス", fullName: "魔法剣士カシス" }
    , { id: 0x00de, implDate: "2015/09/16", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ビショップ", name: "シャロン", fullName: "司祭シャロン" }
    , { id: 0x00df, implDate: "2015/09/17", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "ソードマスター", name: "ミーティア", fullName: "剣士ミーティア" }
    , { id: 0x00e0, implDate: "2015/09/24", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ボウライダー", name: "カティナ", fullName: "弓騎兵カティナ" }
    , { id: 0x00e1, implDate: "2015/09/24", implDate_bq: "2017/01/19", obtain: "ev", rarity: "p" , depType: "van" , class: "ペガサスライダー", name: "イザベル", fullName: "帝国天馬騎士イザベル" }
    , { id: 0x00e2, implDate: "2015/10/01", implDate_bq: "2017/10/26", obtain: "sh", rarity: "b" , depType: "van" , class: "モンク", name: "アリス", fullName: "武王姫アリス" }
    , { id: 0x00e3, implDate: "2015/10/15", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "レンジャー", name: "リコラ", fullName: "聖森の番人リコラ" }
    , { id: 0x00e4, implDate: "2015/10/15", implDate_bq: "2017/03/14", obtain: "sh", rarity: "p" , depType: "van" , class: "メイド", name: "シャーリー", fullName: "術士女官シャーリー" }
    , { id: 0x00e5, implDate: "2015/10/15", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ヒーラー", name: "ユーノ", fullName: "背反の癒し手ユーノ" }
    , { id: 0x00e6, implDate: "2015/10/22", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ウィッチ", name: "メローネ", fullName: "魔女メローネ" }
    , { id: 0x00e7, implDate: "2015/10/22", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "アルケミスト", name: "テルマ", fullName: "錬金術士テルマ" }
    , { id: 0x00e8, implDate: "2015/10/29", implDate_bq: "2017/02/09", obtain: "sh", rarity: "b" , depType: "van" , class: "仙人", name: "ナタク", fullName: "紅輪の道士ナタク" }
    , { id: 0x00e9, implDate: "2015/11/05", implDate_bq: "2017/08/10", obtain: "ev", rarity: "p" , depType: "van" , class: "プリンセス", name: "ルイーズ", fullName: "ルイーズ" }
    , { id: 0x00ea, implDate: "2015/11/05", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ヘビーアーマー", name: "ダナン", fullName: "密林の守護者ダナン" }
    , { id: 0x00eb, implDate: "2015/11/05", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ボウライダー", name: "ルナール", fullName: "密林の弓騎兵ルナール" }
    , { id: 0x00ec, implDate: "2015/11/12", implDate_bq: "2017/04/13", obtain: "ev", rarity: "b" , depType: "rear", class: "ビショップ", name: "エターナー", fullName: "魔導司祭エターナー" }
    , { id: 0x00ed, implDate: "2015/11/12", implDate_bq: "2016/12/08", obtain: "sh", rarity: "p" , depType: "van" , class: "ドラゴンライダー", name: "ナディア", fullName: "角竜騎士ナディア" }
    , { id: 0x00ee, implDate: "2015/11/12", implDate_bq: "2017/01/19", obtain: "ev", rarity: "p" , depType: "van" , class: "ソルジャー", name: "リーゼロッテ", fullName: "帝国兵長リーゼロッテ" }
    , { id: 0x00ef, implDate: "2015/11/19", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "魔神", name: "ラクシャーサ", fullName: "鬼神姫ラクシャーサ" }
    , { id: 0x00f0, implDate: "2015/11/19", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "アベンジャー", name: "リスティス", fullName: "魔界闘士リスティス" }
    , { id: 0x00f1, implDate: "2015/11/19", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "van" , class: "ダークファイター", name: "暗黒騎士", fullName: "暗黒騎士", male: 1 }
    , { id: 0x00f2, implDate: "2015/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ワルキューレ", name: "チグリ", fullName: "密林の槍騎兵チグリ" }
    , { id: 0x00f3, implDate: "2015/12/03", implDate_bq: "2017/11/22", obtain: "sh", rarity: "p" , depType: "van" , class: "ローグ", name: "ジュノン", fullName: "秘刃の暗殺者ジュノン" }
    , { id: 0x00f4, implDate: "2015/12/03", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "忍者", name: "カナメ", fullName: "封妖の忍者カナメ" }
    , { id: 0x00f5, implDate: "2015/12/17", implDate_bq: "2017/04/13", obtain: "ev", rarity: "p" , depType: "van" , class: "メイド", name: "アイリーン", fullName: "召使いアイリーン" }
    , { id: 0x00f6, implDate: "2015/12/17", implDate_bq: "2019/07/25", obtain: "sh", rarity: "p" , depType: "rear", class: "マーチャント", name: "トトノ", fullName: "行商人トトノ" }
    , { id: 0x00f7, implDate: "2015/12/17", implDate_bq: "2017/12/28", obtain: "ev", rarity: "p" , depType: "van" , class: "ボウライダー", name: "サラサ", fullName: "聖夜の弓騎兵サラサ" }
    , { id: 0x00f8, implDate: "2015/12/26", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "rear", class: "フェンリルシャーマン", name: "プニル", fullName: "魔狼巫女プニル" }
    , { id: 0x00f9, implDate: "2015/12/29", implDate_bq: "2018/08/23", obtain: "sh", rarity: "b" , depType: "van" , class: "魔法剣士", name: "イングリッド", fullName: "魔戦団長イングリッド" }
    
    // 2016
    , { id: 0x00fa, implDate: "2016/01/14", implDate_bq: "2018/04/19", obtain: "sh", rarity: "p" , depType: "van" , class: "神官戦士", name: "フェルミ", fullName: "神官戦士フェルミ" }
    , { id: 0x00fb, implDate: "2016/01/28", implDate_bq: "2018/02/01", obtain: "ev", rarity: "p" , depType: "van" , class: "仙猿", name: "ファー", fullName: "仙猿ファー" }
    , { id: 0x00fc, implDate: "2016/01/28", implDate_bq: "2019/09/26", obtain: "sh", rarity: "b" , depType: "van" , class: "妖狐", name: "カヨウ", fullName: "九尾狐カヨウ" }
    , { id: 0x00fd, implDate: "2016/01/28", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "呪術使い", name: "レヴィ", fullName: "忘我の呪術師レヴィ" }
    , { id: 0x00fe, implDate: "2016/02/04", implDate_bq: "2019/01/31", obtain: "sh", rarity: "p" , depType: "van" , class: "プリンセス", name: "メルヴィナ", fullName: "メルヴィナ" }
    , { id: 0x00ff, implDate: "2016/02/18", implDate_bq: "2018/04/19", obtain: "ev", rarity: "b" , depType: "rear", class: "ネクロマンサー", name: "メトゥス", fullName: "反魂の死霊術師メトゥス" }
    , { id: 0x0100, implDate: "2016/02/18", implDate_bq: "2019/06/20", obtain: "sh", rarity: "g" , depType: "rear", class: "エンチャンター", name: "リルケ", fullName: "付与魔術師リルケ" }
    , { id: 0x0101, implDate: "2016/02/18", implDate_bq: "2018/10/18", obtain: "ev", rarity: "p" , depType: "rear", class: "パイレーツ", name: "サブリナ", fullName: "私掠船長サブリナ" }
    , { id: 0x0102, implDate: "2016/02/25", implDate_bq: "2016/12/08", obtain: "sh", rarity: "b" , depType: "rear", class: "クロノウィッチ", name: "トワ", fullName: "時の調停者トワ" }
    , { id: 0x0103, implDate: "2016/02/25", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "メイジ", name: "マーヤ", fullName: "魔術師マーヤ" }
    , { id: 0x0104, implDate: "2016/03/03", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "van" , class: "戦の聖霊", name: "シンシア", fullName: "戦の聖霊シンシア" }
    , { id: 0x0105, implDate: "2016/03/10", implDate_bq: "2017/08/10", obtain: "sh", rarity: "p" , depType: "van" , class: "メイジアーマー", name: "パルフィ", fullName: "魔鎧乙女パルフィ" }
    , { id: 0x0106, implDate: "2016/03/10", implDate_bq: "2017/01/19", obtain: "sh", rarity: "g" , depType: "van" , class: "バンデット", name: "リーフ", fullName: "山賊娘リーフ" }
    , { id: 0x0107, implDate: "2016/03/24", implDate_bq: "2019/02/21", obtain: "ev", rarity: "p" , depType: "van" , class: "プリンセス", name: "スクハ", fullName: "スクハ" }
    , { id: 0x0108, implDate: "2016/03/24", implDate_bq: "2018/07/12", obtain: "sh", rarity: "p" , depType: "van" , class: "ヴァンパイアロード", name: "ラキュア", fullName: "吸血鬼ラキュア" }
    , { id: 0x0109, implDate: "2016/03/24", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "神官戦士", name: "ニコラウス", fullName: "神官戦士ニコラウス", male: 1 }
    , { id: 0x010a, implDate: "2016/03/24", implDate_bq: "2017/03/14", obtain: "ev", rarity: "p" , depType: "rear", class: "ヴァンパイアハンター", name: "ルマリア", fullName: "聖なる復讐者ルマリア" }
    , { id: 0x010b, implDate: "2016/03/31", implDate_bq: "2017/06/29", obtain: "sh", rarity: "b" , depType: "van" , class: "メイド", name: "セーラ", fullName: "王宮侍女武官セーラ" }
    , { id: 0x010c, implDate: "2016/03/31", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "エンジェル", name: "パフィリア", fullName: "堕天使パフィリア" }
    , { id: 0x010d, implDate: "2016/04/07", implDate_bq: "2017/03/14", obtain: "tr", rarity: "p" , depType: "rear", class: "後衛戦術家", name: "レオナ", fullName: "帝国軍師レオナ" }
    , { id: 0x010e, implDate: "2016/04/14", implDate_bq: "2018/03/15", obtain: "ev", rarity: "p" , depType: "van" , class: "エンジェル", name: "ミルノ", fullName: "天使長ミルノ" }
    , { id: 0x010f, implDate: "2016/04/14", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "サモナー", name: "リノ", fullName: "見習い召喚士リノ" }
    , { id: 0x0110, implDate: "2016/04/21", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "レンジャー", name: "スプラ", fullName: "神森の守護妖精スプラ" }
    , { id: 0x0111, implDate: "2016/04/21", implDate_bq: "2018/04/19", obtain: "ev", rarity: "p" , depType: "van" , class: "前衛戦術家", name: "ヘレナ", fullName: "天才戦術家ヘレナ" }
    , { id: 0x0112, implDate: "2016/04/21", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "rear", class: "政務官", name: "アンナ/メイド", fullName: "アンナ（給仕服）" }
    , { id: 0x0113, implDate: "2016/04/28", implDate_bq: "2017/07/12", obtain: "sh", rarity: "b" , depType: "rear", class: "魔物使い", name: "モルテナ", fullName: "魔物使いモルテナ" }
    , { id: 0x0114, implDate: "2016/04/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "rear", class: "モンスタースレイヤー", name: "ラーティ", fullName: "竜殺しラーティ" }
    , { id: 0x0115, implDate: "2016/05/12", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "ワルキューレ", name: "レシア", fullName: "英霊の守り手レシア" }
    , { id: 0x0116, implDate: "2016/05/12", implDate_bq: "2017/04/13", obtain: "sh", rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "ドルチェ", fullName: "悪魔ハンタードルチェ" }
    , { id: 0x0117, implDate: "2016/05/12", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ヘビーアーマー", name: "ドワイト", fullName: "帝国重装歩兵ドワイト", male: 1 }
    , { id: 0x0118, implDate: "2016/05/12", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "モンク", name: "マオ", fullName: "見習い拳士マオ" }
    , { id: 0x0119, implDate: "2016/05/16", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "van" , class: "くぐつ使い", name: "ボリス", fullName: "機甲技師ボリス", male: 1 }
    , { id: 0x011a, implDate: "2016/05/26", implDate_bq: "2017/05/25", obtain: "sh", rarity: "b" , depType: "rear", class: "風水使い", name: "リンネ", fullName: "刻詠の風水士リンネ" }
    , { id: 0x011b, implDate: "2016/05/26", implDate_bq: "2018/10/18", obtain: "sh", rarity: "b" , depType: "rear", class: "砲術士", name: "フレデリカ", fullName: "極重巨砲フレデリカ" }
    , { id: 0x011c, implDate: "2016/06/02", implDate_bq: "2018/03/15", obtain: "ev", rarity: "p" , depType: "rear", class: "クロノウィッチ", name: "ココロ", fullName: "時の魔女ココロ" }
    , { id: 0x011d, implDate: "2016/06/02", implDate_bq: "2018/07/12", obtain: "sh", rarity: "p" , depType: "van" , class: "セーラー", name: "アメリ", fullName: "航海士アメリ" }
    , { id: 0x011e, implDate: "2016/06/02", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ボウライダー", name: "ミゲル", fullName: "弓騎兵ミゲル", male: 1 }
    , { id: 0x011f, implDate: "2016/06/02", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "ソルジャー", name: "ジェイク", fullName: "冒険者ジェイク", male: 1 }
    , { id: 0x0120, implDate: "2016/06/02", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "アーチャー", name: "オスカー", fullName: "冒険者オスカー", male: 1 }
    , { id: 0x0121, implDate: "2016/06/03", implDate_bq: "2018/07/12", obtain: "tr", rarity: "p" , depType: "van" , class: "ダークストーカー", name: "グレーテル", fullName: "闇使いグレーテル" }
    , { id: 0x0122, implDate: "2016/06/09", implDate_bq: "2017/12/28", obtain: "sh", rarity: "p" , depType: "rear", class: "ドルイド", name: "メープル", fullName: "大自然の乙女メープル" }
    , { id: 0x0123, implDate: "2016/06/23", implDate_bq: "2019/02/21", obtain: "ev", rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "レーゼル", fullName: "帝国猟兵レーゼル" }
    , { id: 0x0124, implDate: "2016/06/23", implDate_bq: "2017/11/22", obtain: "sh", rarity: "g" , depType: "van" , class: "ボウライダー", name: "マーガレット", fullName: "輝弓士マーガレット" }
    , { id: 0x0125, implDate: "2016/06/23", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "van" , class: "ロイヤルガード", name: "アリシア", fullName: "近衛騎士アリシア" }
    , { id: 0x0126, implDate: "2016/06/30", implDate_bq: "2018/07/12", obtain: "sh", rarity: "b" , depType: "rear", class: "アルケミスト", name: "マキナ", fullName: "錬金技工士マキナ" }
    , { id: 0x0127, implDate: "2016/06/30", implDate_bq: "2017/11/22", obtain: "ev", rarity: "p" , depType: "rear", class: "ビショップ", name: "セレイナ", fullName: "聖職者セレイナ" }
    , { id: 0x0128, implDate: "2016/07/07", implDate_bq: "2023/07/13", obtain: "sh", rarity: "p" , depType: "rear", class: "ウィッチ", name: "プリム", fullName: "幻光の魔女プリム" }
    , { id: 0x0129, implDate: "2016/07/21", implDate_bq: "2019/03/22", obtain: "ev", rarity: "p" , depType: "van" , class: "ワルキューレ", name: "メイリン", fullName: "虎姫メイリン" }
    , { id: 0x012a, implDate: "2016/07/21", implDate_bq: "2018/06/14", obtain: "sh", rarity: "p" , depType: "van" , class: "魔法剣士", name: "シエナ", fullName: "闇の魔剣士シエナ" }
    , { id: 0x012b, implDate: "2016/07/21", implDate_bq: "2017/06/29", obtain: "ev", rarity: "p" , depType: "rear", class: "レンジャー", name: "アイーダ", fullName: "闇の森の番人アイーダ" }
    , { id: 0x012c, implDate: "2016/07/28", implDate_bq: "2018/07/12", obtain: "sh", rarity: "b" , depType: "van" , class: "ロイヤルガード", name: "ミレイユ", fullName: "近衛騎士団長ミレイユ" }
    , { id: 0x012d, implDate: "2016/07/28", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "ねんどろいどプリンセス", name: "ねんどろいどシビラ", fullName: "ねんどろいどシビラ", collabo: 1 }
    , { id: 0x012e, implDate: "2016/08/02", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "van" , class: "中級竜兵", name: "ゴライア", fullName: "闇竜のゴライア", male: 1 }
    , { id: 0x012f, implDate: "2016/08/12", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ダークプリースト", name: "ベルゼッタ", fullName: "闇の大司教ベルゼッタ" }
    , { id: 0x0130, implDate: "2016/08/25", implDate_bq: "2017/07/12", obtain: "ev", rarity: "b" , depType: "van" , class: "サムライ", name: "ヒバリ", fullName: "鬼切の使い手ヒバリ" }
    , { id: 0x0131, implDate: "2016/08/25", implDate_bq: "2017/09/21", obtain: "sh", rarity: "b" , depType: "rear", class: "アーチャー", name: "アーシェラ", fullName: "神業の狩人アーシェラ" }
    , { id: 0x0132, implDate: "2016/08/25", implDate_bq: "2017/12/28", obtain: "sh", rarity: "b" , depType: "rear", class: "ドルイド", name: "フィオレ", fullName: "森の隠者フィオレ" }
    , { id: 0x0133, implDate: "2016/08/26", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "魔神", name: "ルル", fullName: "裏切りの魔神ルル" }
    , { id: 0x0134, implDate: "2016/09/08", implDate_bq: "2017/09/21", obtain: "ev", rarity: "p" , depType: "rear", class: "ヒーラー", name: "エリアス", fullName: "帝国治癒士エリアス" }
    , { id: 0x0135, implDate: "2016/09/08", implDate_bq: "2018/02/01", obtain: "sh", rarity: "g" , depType: "van" , class: "ヘビーアーマー", name: "マチルダ", fullName: "重歩兵長マチルダ" }
    , { id: 0x0136, implDate: "2016/09/08", implDate_bq: "2018/04/19", obtain: "ev", rarity: "p" , depType: "van" , class: "中級竜兵", name: "イグニス", fullName: "火竜のイグニス" }
    , { id: 0x0137, implDate: "2016/09/15", implDate_bq: "2017/09/21", obtain: "sh", rarity: "p" , depType: "rear", class: "デモンサモナー", name: "リヴル", fullName: "悪魔召喚士リヴル" }
    , { id: 0x0138, implDate: "2016/09/29", implDate_bq: "2018/05/17", obtain: "ev", rarity: "p" , depType: "rear", class: "エンチャンター", name: "メレディス", fullName: "付与魔術師メレディス" }
    , { id: 0x0139, implDate: "2016/09/29", implDate_bq: "2017/04/13", obtain: "sh", rarity: "b" , depType: "van" , class: "くぐつ使い", name: "ウェンディ", fullName: "天才機甲士ウェンディ" }
    , { id: 0x013a, implDate: "2016/09/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "モンク", name: "リーエン", fullName: "雷の宝具使いリーエン" }
    , { id: 0x013b, implDate: "2016/10/13", implDate_bq: "2017/12/28", obtain: "sh", rarity: "p" , depType: "rear", class: "ダンサー", name: "ビビアン", fullName: "異邦の踊り子ビビアン" }
    , { id: 0x013c, implDate: "2016/10/20", implDate_bq: "2018/06/14", obtain: "ev", rarity: "b" , depType: "van" , class: "ぬらりひょん", name: "シノ", fullName: "ぬらりひょんの娘シノ" }
    , { id: 0x013d, implDate: "2016/10/20", implDate_bq: "2018/07/12", obtain: "sh", rarity: "p" , depType: "van" , class: "重装砲兵", name: "レギーナ", fullName: "重装砲兵レギーナ" }
    , { id: 0x013e, implDate: "2016/10/27", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ダークプリースト", name: "ドロテア", fullName: "闇エルフの女王ドロテア" }
    , { id: 0x013f, implDate: "2016/11/10", implDate_bq: "2017/10/26", obtain: "ev", rarity: "p" , depType: "van" , class: "メイジアーマー", name: "エーリカ", fullName: "南瓜魔導鎧兵エーリカ" }
    , { id: 0x0140, implDate: "2016/11/10", implDate_bq: "2018/09/20", obtain: "sh", rarity: "p" , depType: "van" , class: "鬼", name: "イツキ", fullName: "鬼娘イツキ" }
    , { id: 0x0141, implDate: "2016/11/10", implDate_bq: "2018/09/20", obtain: "ev", rarity: "p" , depType: "van" , class: "神官戦士", name: "ルチア", fullName: "帝国神官戦士ルチア" }
    , { id: 0x0142, implDate: "2016/11/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "ドラゴンプリンセス", name: "シャルム", fullName: "炎の竜皇女シャルム" }
    , { id: 0x0143, implDate: "2016/12/01", implDate_bq: "2018/05/17", obtain: "sh", rarity: "b" , depType: "van" , class: "プリンセス", name: "アンジェリーネ", fullName: "アンジェリーネ" }
    , { id: 0x0144, implDate: "2016/12/01", implDate_bq: "2018/05/17", obtain: "sh", rarity: "b" , depType: "van" , class: "ソードマスター", name: "ジークリンデ", fullName: "帝国剣士ジークリンデ" }
    , { id: 0x0145, implDate: "2016/12/01", implDate_bq: "2017/03/14", obtain: "sh", rarity: "b" , depType: "van" , class: "重装砲兵", name: "エルミラ", fullName: "帝国重装砲兵エルミラ" }
    , { id: 0x0146, implDate: "2016/12/01", implDate_bq: "2019/09/26", obtain: "sh", rarity: "p" , depType: "van" , class: "インペリアルナイト", name: "ヴィオラ", fullName: "帝国騎士ヴィオラ" }
    , { id: 0x0147, implDate: "2016/12/01", implDate_bq: "2018/05/17", obtain: "sh", rarity: "p" , depType: "rear", class: "レンジャー", name: "ローザ", fullName: "帝国遊撃兵ローザ" }
    , { id: 0x0148, implDate: "2016/12/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "ラルフ", fullName: "帝国狙撃兵ラルフ", male: 1 }
    , { id: 0x0149, implDate: "2016/12/01", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "中級竜兵", name: "サーベイン", fullName: "帝国竜人サーベイン", male: 1 }
    , { id: 0x014a, implDate: "2016/12/01", implDate_bq: "2018/05/17", obtain: "sh", rarity: "g" , depType: "van" , class: "セーラー", name: "フレイ", fullName: "帝国水兵フレイ" }
    , { id: 0x014b, implDate: "2016/12/01", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "重装砲兵", name: "ゲオルグ", fullName: "帝国重装砲兵ゲオルグ", male: 1 }
    , { id: 0x014c, implDate: "2016/12/01", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ペガサスライダー", name: "クラーラ", fullName: "帝国天馬騎士クラーラ" }
    , { id: 0x014d, implDate: "2016/12/01", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "インペリアルナイト", name: "ルークス", fullName: "帝国騎士ルークス", male: 1 }
    , { id: 0x014e, implDate: "2016/12/01", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "レンジャー", name: "エリック", fullName: "帝国遊撃兵エリック", male: 1 }
    , { id: 0x014f, implDate: "2016/12/01", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "エンチャンター", name: "ヒース", fullName: "帝国付与魔術師ヒース", male: 1 }
    , { id: 0x0150, implDate: "2016/12/08", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "皇帝", name: "白の皇帝", fullName: "白の皇帝", male: 1 }
    , { id: 0x0151, implDate: "2016/12/08", implDate_bq: "2018/08/23", obtain: "sh", rarity: "p" , depType: "rear", class: "エレメンタラー", name: "ロレッタ", fullName: "火霊使いロレッタ" }
    , { id: 0x0152, implDate: "2016/12/22", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "マーチャント", name: "エイミー", fullName: "武器商人エイミー" }
    , { id: 0x0153, implDate: "2016/12/22", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ヒーラー", name: "アリサ/クリスマス", fullName: "聖夜の癒し手アリサ" }
    , { id: 0x0154, implDate: "2016/12/22", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "風水使い", name: "フェイ", fullName: "門弟の風水士フェイ" }
    , { id: 0x0155, implDate: "2016/12/29", implDate_bq: "2017/12/28", obtain: "sh", rarity: "b" , depType: "van" , class: "鬼", name: "鬼刃姫", fullName: "酒呑童子の娘 鬼刃姫" }
    , { id: 0x0156, implDate: "2016/12/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "デモンサモナー", name: "ラピス", fullName: "大悪魔召喚士ラピス" }
    , { id: 0x0157, implDate: "2016/12/29", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "政務官", name: "アンナ/水着", fullName: "水着の政務官アンナ" }
    
    // 2017
    , { id: 0x0158, implDate: "2017/01/01", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "van" , class: "ヘビーアーマー", name: "レアン/お正月", fullName: "年賀の祝盾レアン" }
    , { id: 0x0159, implDate: "2017/01/05", implDate_bq: "2018/12/27", obtain: "tr", rarity: "g" , depType: "rear", class: "アーチャー", name: "ソーマ/お正月", fullName: "新春の弓巫女ソーマ" }
    , { id: 0x015a, implDate: "2017/01/12", implDate_bq: "2018/07/12", obtain: "sh", rarity: "p" , depType: "van" , class: "天狗", name: "コノハ", fullName: "天狗コノハ" }
    , { id: 0x015b, implDate: "2017/01/26", implDate_bq: "2019/04/18", obtain: "ev", rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "アオバ", fullName: "討妖の狙撃手アオバ" }
    , { id: 0x015c, implDate: "2017/01/26", implDate_bq: "2018/10/18", obtain: "sh", rarity: "b" , depType: "van" , class: "ヴァンパイアプリンセス", name: "シルヴィア", fullName: "紅血の皇女シルヴィア" }
    , { id: 0x015d, implDate: "2017/01/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "イビルプリンセス", name: "トコヨ", fullName: "降魔の戦姫トコヨ" }
    , { id: 0x015e, implDate: "2017/02/02", implDate_bq: "2021/09/16", obtain: "sh", rarity: "p" , depType: "van" , class: "鍛冶職人", name: "サンディー", fullName: "鍛冶職人サンディー" }
    , { id: 0x015f, implDate: "2017/02/16", implDate_bq: "2019/04/18", obtain: "ev", rarity: "p" , depType: "van" , class: "グラディエーター", name: "ドゥーラ", fullName: "オークの剣士ドゥーラ" }
    , { id: 0x0160, implDate: "2017/02/16", implDate_bq: "2018/10/18", obtain: "sh", rarity: "p" , depType: "van" , class: "魔神", name: "バロウス", fullName: "魔眼の魔神バロウス" }
    , { id: 0x0161, implDate: "2017/02/16", implDate_bq: "2017/11/22", obtain: "ev", rarity: "p" , depType: "van" , class: "ローグ", name: "セブン", fullName: "盗賊セブン" }
    , { id: 0x0162, implDate: "2017/02/23", implDate_bq: "2019/01/31", obtain: "sh", rarity: "b" , depType: "rear", class: "猫又", name: "コハル", fullName: "猫又コハル" }
    , { id: 0x0163, implDate: "2017/02/23", implDate_bq: "2018/10/18", obtain: "sh", rarity: "p" , depType: "rear", class: "エレメンタラー", name: "シャオメイ", fullName: "土霊使いシャオメイ" }
    , { id: 0x0164, implDate: "2017/02/27", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "アベンジャー", name: "ウリデム", fullName: "狂獣ウリデム" }
    , { id: 0x0165, implDate: "2017/03/09", implDate_bq: "2018/06/14", obtain: "ev", rarity: "p" , depType: "rear", class: "ビショップ", name: "レーヴ", fullName: "神殿書記官レーヴ" }
    , { id: 0x0166, implDate: "2017/03/09", implDate_bq: "2018/02/01", obtain: "sh", rarity: "p" , depType: "van" , class: "キョンシー", name: "レイメイ", fullName: "雷爪道士レイメイ" }
    , { id: 0x0167, implDate: "2017/03/23", implDate_bq: "2018/02/01", obtain: "ev", rarity: "b" , depType: "rear", class: "ドラゴンシャーマン", name: "ハクノカミ", fullName: "古代龍ハクノカミ" }
    , { id: 0x0168, implDate: "2017/03/23", implDate_bq: "2018/11/22", obtain: "sh", rarity: "b" , depType: "van" , class: "妖狐", name: "キュウビ", fullName: "帝国妖狐キュウビ" }
    , { id: 0x0169, implDate: "2017/03/23", implDate_bq: "2018/11/22", obtain: "sh", rarity: "p" , depType: "van" , class: "前衛戦術家", name: "レオラ", fullName: "帝国元帥レオラ" }
    , { id: 0x016a, implDate: "2017/03/23", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "道化師", name: "モトリー", fullName: "帝国道化師モトリー" }
    , { id: 0x016b, implDate: "2017/03/23", implDate_bq: "2017/12/28", obtain: "sh", rarity: "g" , depType: "rear", class: "ドルイド", name: "ミステル", fullName: "帝国神樹使いミステル" }
    , { id: 0x016c, implDate: "2017/03/23", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ドルイド", name: "ソラーレ", fullName: "帝国神樹使いソラーレ" }
    , { id: 0x016d, implDate: "2017/03/30", implDate_bq: "2019/01/31", obtain: "sh", rarity: "b" , depType: "van" , class: "メイジアーマー", name: "シルセス", fullName: "星天の魔導鎧シルセス" }
    , { id: 0x016e, implDate: "2017/03/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "rear", class: "エレメンタラー", name: "ハルカ", fullName: "帝国風霊使いハルカ" }
    , { id: 0x016f, implDate: "2017/04/06", implDate_bq: "2018/08/23", obtain: "sh", rarity: "p" , depType: "van" , class: "ぬらりひょん", name: "カスミ", fullName: "ぬらりひょんの娘カスミ" }
    , { id: 0x0170, implDate: "2017/04/20", implDate_bq: "2018/08/23", obtain: "ev", rarity: "p" , depType: "rear", class: "陰陽師", name: "コヨミ", fullName: "陰陽師コヨミ" }
    , { id: 0x0171, implDate: "2017/04/20", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "エレメンタラー", name: "クラリーチェ", fullName: "闇霊使いクラリーチェ" }
    , { id: 0x0172, implDate: "2017/04/20", implDate_bq: "2018/12/27", obtain: "ev", rarity: "p" , depType: "van" , class: "モンク", name: "ベストラ", fullName: "オークの格闘家ベストラ" }
    , { id: 0x0173, implDate: "2017/04/27", implDate_bq: "2020/01/16", obtain: "sh", rarity: "b" , depType: "van" , class: "ドラゴンライダー", name: "ティファ", fullName: "聖銀竜の騎士ティファ" }
    , { id: 0x0174, implDate: "2017/05/11", implDate_bq: "2019/03/22", obtain: "ev", rarity: "p" , depType: "rear", class: "デモンサモナー", name: "ヴェルティ", fullName: "悪魔召喚士ヴェルティ" }
    , { id: 0x0175, implDate: "2017/05/11", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "鍛冶職人", name: "ゴルドー", fullName: "鍛冶職人ゴルドー", male: 1 }
    , { id: 0x0176, implDate: "2017/05/18", implDate_bq: "2018/09/20", obtain: "sh", rarity: "p" , depType: "van" , class: "雷公", name: "ラミィ", fullName: "雷神の娘ラミィ" }
    , { id: 0x0177, implDate: "2017/05/25", implDate_bq: "2019/03/22", obtain: "sh", rarity: "b" , depType: "rear", class: "モンスタースレイヤー", name: "ソシエ", fullName: "聖魔殺しの銃手ソシエ" }
    , { id: 0x0178, implDate: "2017/06/01", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "モンスターブレイカー", name: "エレーヌ", fullName: "封印剣の使い手エレーヌ" }
    , { id: 0x0179, implDate: "2017/06/01", implDate_bq: "2019/11/14", obtain: "sh", rarity: "b" , depType: "van" , class: "神官戦士", name: "エクス", fullName: "神官戦士団長エクス" }
    , { id: 0x017a, implDate: "2017/06/08", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ドラゴンライダー", name: "リエーレ", fullName: "竜騎士リエーレ" }
    , { id: 0x017b, implDate: "2017/06/15", implDate_bq: "2019/02/21", obtain: "sh", rarity: "p" , depType: "rear", class: "道化師", name: "リェプル", fullName: "白兎の道化師リェプル" }
    , { id: 0x017c, implDate: "2017/06/29", implDate_bq: "2020/08/13", obtain: "ev", rarity: "p" , depType: "van" , class: "風伯", name: "フーコ", fullName: "風神の娘フーコ" }
    , { id: 0x017d, implDate: "2017/06/29", implDate_bq: "2020/02/13", obtain: "sh", rarity: "b" , depType: "rear", class: "ダンサー", name: "ミヤビ", fullName: "神和ぎの踊り子ミヤビ" }
    , { id: 0x017e, implDate: "2017/07/06", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "前衛戦術家", name: "ナルサス", fullName: "未来の宮廷画家ナルサス", male: 1, collabo: 1 }
    , { id: 0x017f, implDate: "2017/07/06", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "アーチャー", name: "ファランギース", fullName: "神の射手ファランギース", collabo: 1 }
    , { id: 0x0180, implDate: "2017/07/06", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "エレメンタラー", name: "セノーテ", fullName: "水霊使いセノーテ" }
    , { id: 0x0181, implDate: "2017/07/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "王太子", name: "アルスラーン", fullName: "王太子アルスラーン", male: 1, collabo: 1 }
    , { id: 0x0182, implDate: "2017/07/20", implDate_bq: "2019/05/23", obtain: "ev", rarity: "p" , depType: "van" , class: "くぐつ使い", name: "ティアル", fullName: "天駆の機甲士ティアル" }
    , { id: 0x0183, implDate: "2017/07/20", implDate_bq: "2018/05/17", obtain: "sh", rarity: "p" , depType: "van" , class: "ソードマスター", name: "リシェルテ", fullName: "純白の剣士リシェルテ" }
    , { id: 0x0184, implDate: "2017/07/20", implDate_bq: "2019/06/20", obtain: "ev", rarity: "g" , depType: "van" , class: "ソルジャー", name: "フィリス/浴衣", fullName: "浴衣の兵長フィリス" }
    , { id: 0x0185, implDate: "2017/07/27", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "ロイヤルガード", name: "ダリューン", fullName: "黒衣の騎士ダリューン", male: 1, collabo: 1 }
    , { id: 0x0186, implDate: "2017/07/27", implDate_bq: "2018/08/23", obtain: "sh", rarity: "b" , depType: "van" , class: "セーラー", name: "イブキ", fullName: "海軍元帥イブキ" }
    , { id: 0x0187, implDate: "2017/08/10", implDate_bq: "2018/09/20", obtain: "ev", rarity: "p" , depType: "van" , class: "ローグ", name: "サヨ", fullName: "義賊サヨ" }
    , { id: 0x0188, implDate: "2017/08/10", implDate_bq: "2020/03/12", obtain: "sh", rarity: "p" , depType: "rear", class: "ビショップ", name: "ポーラ/水着", fullName: "常夏の兎司祭ポーラ" }
    , { id: 0x0189, implDate: "2017/08/10", implDate_bq: "2020/07/16", obtain: "sh", rarity: "g" , depType: "van" , class: "ワルキューレ", name: "エレイン/水着", fullName: "夏陽の騎馬乙女エレイン" }
    , { id: 0x018a, implDate: "2017/08/10", implDate_bq: "2018/08/23", obtain: "tr", rarity: "g" , depType: "rear", class: "アーチャー", name: "ダニエラ/浴衣", fullName: "夜涼の射的兵ダニエラ" }
    , { id: 0x018b, implDate: "2017/08/24", implDate_bq: "2018/10/18", obtain: "sh", rarity: "p" , depType: "van" , class: "メイド", name: "リーナ", fullName: "妖魔の侍女リーナ" }
    , { id: 0x018c, implDate: "2017/08/31", implDate_bq: "2019/04/18", obtain: "sh", rarity: "b" , depType: "van" , class: "鍛冶職人", name: "ティニー", fullName: "ドワーフの姫ティニー" }
    , { id: 0x018d, implDate: "2017/09/14", implDate_bq: "2018/08/23", obtain: "ev", rarity: "b" , depType: "van" , class: "グラディエーター", name: "アナトリア", fullName: "オークの英雄アナトリア" }
    , { id: 0x018e, implDate: "2017/09/14", implDate_bq: "2019/02/21", obtain: "sh", rarity: "p" , depType: "van" , class: "ダークストーカー", name: "シェイド", fullName: "闇使いの剣士シェイド" }
    , { id: 0x018f, implDate: "2017/09/14", implDate_bq: "2020/08/13", obtain: "ev", rarity: "g" , depType: "rear", class: "ウィッチ", name: "カリオペ/サマー", fullName: "麦わら帽の魔女カリオペ" }
    , { id: 0x0190, implDate: "2017/09/21", implDate_bq: "2018/11/22", obtain: "sh", rarity: "b" , depType: "van" , class: "中級竜兵", name: "ヴルム", fullName: "帝国銀竜ヴルム" }
    , { id: 0x0191, implDate: "2017/09/21", implDate_bq: "2020/03/12", obtain: "sh", rarity: "b" , depType: "van" , class: "魔神", name: "メフィスト", fullName: "帝国魔神団長メフィスト" }
    , { id: 0x0192, implDate: "2017/09/21", implDate_bq: "2018/11/22", obtain: "sh", rarity: "p" , depType: "rear", class: "アルケミスト", name: "ヘルミーネ", fullName: "帝国錬金術士ヘルミーネ" }
    , { id: 0x0193, implDate: "2017/09/21", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "メイジアーマー", name: "ルーテ", fullName: "帝国魔鎧兵ルーテ" }
    , { id: 0x0194, implDate: "2017/09/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "モンスターブレイカー", name: "フォルテ", fullName: "帝国封印剣士フォルテ" }
    , { id: 0x0195, implDate: "2017/10/05", implDate_bq: "2019/06/20", obtain: "ev", rarity: "p" , depType: "van" , class: "インペリアルナイト", name: "アリーセ", fullName: "帝国騎士アリーセ" }
    , { id: 0x0196, implDate: "2017/10/05", implDate_bq: "2020/02/13", obtain: "sh", rarity: "p" , depType: "van" , class: "モンスターブレイカー", name: "ラテリア", fullName: "封獣の剣士ラテリア" }
    , { id: 0x0197, implDate: "2017/10/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびケイティ", fullName: "ちびケイティ" }
    , { id: 0x0198, implDate: "2017/10/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "アーチャー", name: "ちびナナリー", fullName: "ちびナナリー" }
    , { id: 0x0199, implDate: "2017/10/19", implDate_bq: "2018/09/20", obtain: "ev", rarity: "b" , depType: "rear", class: "シーフ", name: "サバル", fullName: "黒猫大怪盗サバル" }
    , { id: 0x019a, implDate: "2017/10/19", implDate_bq: "2019/05/23", obtain: "sh", rarity: "b" , depType: "rear", class: "マーチャント", name: "ディエーラ", fullName: "隊商長ディエーラ" }
    , { id: 0x019b, implDate: "2017/10/26", implDate_bq: "2019/10/24", obtain: "sh", rarity: "b" , depType: "van" , class: "イビルプリンセス", name: "ミサ", fullName: "祝祭の南瓜姫ミサ" }
    , { id: 0x019c, implDate: "2017/10/26", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "rear", class: "政務官", name: "アンナ/軍服", fullName: "戦場の政務官アンナ" }
    , { id: 0x019d, implDate: "2017/10/27", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "グランドナイト", name: "レイファ", fullName: "スズランの騎士レイファ" }
    , { id: 0x019e, implDate: "2017/11/02", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "魔物使い", name: "ブランシュ", fullName: "魔物使いブランシュ" }
    , { id: 0x019f, implDate: "2017/11/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ワルキューレ", name: "ちびキャリー", fullName: "ちびキャリー" }
    , { id: 0x01a0, implDate: "2017/11/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ウィッチ", name: "ちびデスピア", fullName: "ちびデスピア" }
    , { id: 0x01a1, implDate: "2017/11/11", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "エンジェル", name: "フォニア", fullName: "堕天使フォニア" }
    , { id: 0x01a2, implDate: "2017/11/16", implDate_bq: "2019/06/20", obtain: "sh", rarity: "b" , depType: "van" , class: "ドラゴンプリンセス", name: "エルドラ", fullName: "金色の竜姫エルドラ" }
    , { id: 0x01a3, implDate: "2017/11/22", implDate_bq: "2019/04/18", obtain: "ev", rarity: "p" , depType: "van" , class: "妖狐", name: "堕姫", fullName: "妖狐 堕姫" }
    , { id: 0x01a4, implDate: "2017/11/22", implDate_bq: "2020/06/11", obtain: "sh", rarity: "b" , depType: "van" , class: "グリフィンライダー", name: "リュクス", fullName: "鷲獅騎兵リュクス" }
    , { id: 0x01a5, implDate: "2017/11/30", implDate_bq: "2019/08/15", obtain: "sh", rarity: "b" , depType: "rear", class: "呪術使い", name: "オロチヒメ", fullName: "蛇霊の呪術師オロチヒメ" }
    , { id: 0x01a6, implDate: "2017/12/07", implDate_bq: "2018/05/17", obtain: "ev", rarity: "p" , depType: "van" , class: "ロイヤルガード", name: "ネフティ", fullName: "聖槍の守護者ネフティ" }
    , { id: 0x01a7, implDate: "2017/12/07", implDate_bq: "2018/12/27", obtain: "sh", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "ベルニス/クリスマス", fullName: "聖鈴の大盾ベルニス" }
    , { id: 0x01a8, implDate: "2017/12/07", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "魔法剣士", name: "シャルロット/クリスマス", fullName: "聖夜の魔剣シャルロット" }
    , { id: 0x01a9, implDate: "2017/12/07", implDate_bq: "2018/12/27", obtain: "ev", rarity: "p" , depType: "rear", class: "ダークプリースト", name: "プシュケ", fullName: "闇司祭プシュケ" }
    , { id: 0x01aa, implDate: "2017/12/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "メイド", name: "ちびセーラ", fullName: "ちびセーラ" }
    , { id: 0x01ab, implDate: "2017/12/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "アーチャー", name: "ちびソーマ", fullName: "ちびソーマ" }
    , { id: 0x01ac, implDate: "2017/12/14", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "モンスターブレイカー", name: "テンマ", fullName: "封鎧の剣士テンマ" }
    , { id: 0x01ad, implDate: "2017/12/15", implDate_bq: "2019/06/20", obtain: "sp", rarity: "p" , depType: "van" , class: "ローグ", name: "シプリア/クリスマス", fullName: "聖夜の盗賊シプリア" }
    , { id: 0x01ae, implDate: "2017/12/28", implDate_bq: "2018/09/20", obtain: "ev", rarity: "p" , depType: "van" , class: "重装砲兵", name: "フリーデ", fullName: "帝国重装砲兵フリーデ" }
    , { id: 0x01af, implDate: "2017/12/28", implDate_bq: "2019/02/21", obtain: "sh", rarity: "b" , depType: "van" , class: "天狗", name: "クラマ", fullName: "黒翼の大天狗クラマ" }
    , { id: 0x01b0, implDate: "2017/12/28", implDate_bq: "2021/03/18", obtain: "sh", rarity: "b" , depType: "rear", class: "エンチャンター", name: "アンリ", fullName: "付与魔術師アンリ" }
    
    // 2018
    , { id: 0x01b1, implDate: "2018/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ヒーラー", name: "イリス/お正月", fullName: "春着の聖女イリス" }
    , { id: 0x01b2, implDate: "2018/01/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ソルジャー", name: "ケイティ/お正月", fullName: "年賀の教官ケイティ" }
    , { id: 0x01b3, implDate: "2018/01/01", implDate_bq: "2019/01/31", obtain: "ev", rarity: "g" , depType: "rear", class: "ヒーラー", name: "イーリス/お正月", fullName: "新春の癒し手イーリス" }
    , { id: 0x01b4, implDate: "2018/01/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "サムライ", name: "ちびシズカ", fullName: "ちびシズカ" }
    , { id: 0x01b5, implDate: "2018/01/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "妖狐", name: "ちびカヨウ", fullName: "ちびカヨウ" }
    , { id: 0x01b6, implDate: "2018/01/11", implDate_bq: "2020/09/17", obtain: "sh", rarity: "p" , depType: "van" , class: "グランドナイト", name: "シェルト", fullName: "守護騎士シェルト" }
    , { id: 0x01b7, implDate: "2018/01/25", implDate_bq: "2019/01/31", obtain: "ev", rarity: "p" , depType: "van" , class: "キョンシー", name: "ランファ", fullName: "屍骸道士ランファ" }
    , { id: 0x01b8, implDate: "2018/01/25", implDate_bq: "2018/12/27", obtain: "sh", rarity: "b" , depType: "van" , class: "ヴァンパイアロード", name: "エマ", fullName: "絢爛の吸血鬼エマ" }
    , { id: 0x01b9, implDate: "2018/02/01", implDate_bq: "2019/03/22", obtain: "sh", rarity: "p" , depType: "van" , class: "ダークストーカー", name: "チャーミィ", fullName: "闇使いチャーミィ" }
    , { id: 0x01ba, implDate: "2018/02/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびオリヴィエ", fullName: "ちびオリヴィエ" }
    , { id: 0x01bb, implDate: "2018/02/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ロイヤルガード", name: "ちびアリシア", fullName: "ちびアリシア" }
    , { id: 0x01bc, implDate: "2018/02/08", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "モンク", name: "アリス/バレンタイン", fullName: "一途な武王姫アリス" }
    , { id: 0x01bd, implDate: "2018/02/08", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "サモナー", name: "リノ/バレンタイン", fullName: "恋する召喚士リノ" }
    , { id: 0x01be, implDate: "2018/02/09", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "アコライト", name: "シィル", fullName: "ゼス王国の少女シィル", collabo: 1 }
    , { id: 0x01bf, implDate: "2018/02/15", implDate_bq: "2018/10/18", obtain: "ev", rarity: "p" , depType: "van" , class: "鬼", name: "リンドウ", fullName: "蒼角の鬼娘リンドウ" }
    , { id: 0x01c0, implDate: "2018/02/15", implDate_bq: "2019/02/21", obtain: "sh", rarity: "p" , depType: "van" , class: "鍛冶職人", name: "キャラット", fullName: "鍛冶職人キャラット" }
    , { id: 0x01c1, implDate: "2018/02/15", implDate_bq: "2019/01/31", obtain: "ev", rarity: "p" , depType: "rear", class: "レンジャー", name: "リナリア", fullName: "魔界森の番人リナリア" }
    , { id: 0x01c2, implDate: "2018/02/16", implDate_bq: "2019/02/21", obtain: "sp", rarity: "p" , depType: "rear", class: "ウィッチ", name: "リュリュ/バレンタイン", fullName: "甘菓子の魔女リュリュ" }
    , { id: 0x01c3, implDate: "2018/02/22", implDate_bq: "2018/12/27", obtain: "sh", rarity: "b" , depType: "rear", class: "パイレーツ", name: "デューオ", fullName: "無双の海賊デューオ" }
    , { id: 0x01c4, implDate: "2018/03/01", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ダンサー", name: "シャルキー", fullName: "踊り子シャルキー" }
    , { id: 0x01c5, implDate: "2018/03/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "モンク", name: "ちびモモ", fullName: "ちびモモ" }
    , { id: 0x01c6, implDate: "2018/03/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "砲術士", name: "ちびフレデリカ", fullName: "ちびフレデリカ" }
    , { id: 0x01c7, implDate: "2018/03/08", implDate_bq: "2021/10/14", obtain: "sh", rarity: "p" , depType: "van" , class: "サッパー", name: "ドリー", fullName: "技工兵ドリー" }
    , { id: 0x01c8, implDate: "2018/03/15", implDate_bq: "2019/03/22", obtain: "sh", rarity: "p" , depType: "rear", class: "道化師", name: "ワンダーハート", fullName: "道化師ワンダーハート" }
    , { id: 0x01c9, implDate: "2018/03/29", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "真人", name: "太公望", fullName: "太公望" }
    , { id: 0x01ca, implDate: "2018/03/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "キョンシー", name: "スーシェン", fullName: "屍仙道士スーシェン" }
    , { id: 0x01cb, implDate: "2018/03/29", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "グランドナイト", name: "サリス", fullName: "亡国の守護騎士サリス" }
    , { id: 0x01cc, implDate: "2018/03/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "rear", class: "ライフリンカー", name: "サルース", fullName: "神鎖の救命師サルース" }
    , { id: 0x01cd, implDate: "2018/04/05", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "メイジ", name: "メーリス/学園", fullName: "魔学の研修生メーリス" }
    , { id: 0x01ce, implDate: "2018/04/05", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ウィッチ", name: "ネーニャ/学園", fullName: "勤勉猫魔女ネーニャ" }
    , { id: 0x01cf, implDate: "2018/04/05", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "rear", class: "パイレーツ", name: "ジョヴァンニ/学園", fullName: "海賊番長ジョヴァンニ", male: 1 }
    , { id: 0x01d0, implDate: "2018/04/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ヘビーアーマー", name: "ちびベルニス", fullName: "ちびベルニス" }
    , { id: 0x01d1, implDate: "2018/04/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ダークファイター", name: "ちびコーネリア", fullName: "ちびコーネリア" }
    , { id: 0x01d2, implDate: "2018/04/19", implDate_bq: "2019/04/18", obtain: "ev", rarity: "p" , depType: "rear", class: "アルケミスト", name: "レーレン", fullName: "錬金講師レーレン" }
    , { id: 0x01d3, implDate: "2018/04/19", implDate_bq: "2019/06/20", obtain: "sh", rarity: "p" , depType: "van" , class: "モンスターブレイカー", name: "ティール", fullName: "封鋼の剣士ティール" }
    , { id: 0x01d4, implDate: "2018/04/26", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "rear", class: "政務官", name: "アンナ/アイドル", fullName: "アイドル政務官アンナ" }
    , { id: 0x01d5, implDate: "2018/04/26", implDate_bq: "2019/07/25", obtain: "sh", rarity: "b" , depType: "van" , class: "雷公", name: "レミィ", fullName: "雷神の娘レミィ" }
    , { id: 0x01d6, implDate: "2018/04/26", implDate_bq: "2019/07/25", obtain: "sh", rarity: "b" , depType: "van" , class: "風伯", name: "クーコ", fullName: "風神の娘クーコ" }
    , { id: 0x01d7, implDate: "2018/05/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ワルキューレ", name: "ちびクリッサ", fullName: "ちびクリッサ" }
    , { id: 0x01d8, implDate: "2018/05/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "砲術士", name: "ちびメル", fullName: "ちびメル" }
    , { id: 0x01d9, implDate: "2018/05/10", implDate_bq: "2019/05/23", obtain: "ev", rarity: "p" , depType: "rear", class: "風水使い", name: "メイファ", fullName: "風詠みの少女メイファ" }
    , { id: 0x01da, implDate: "2018/05/10", implDate_bq: "2019/11/14", obtain: "sh", rarity: "b" , depType: "van" , class: "インペリアルナイト", name: "ディアナ", fullName: "帝国騎士団長ディアナ" }
    , { id: 0x01db, implDate: "2018/05/10", implDate_bq: "2018/11/22", obtain: "sh", rarity: "p" , depType: "van" , class: "モンク", name: "リーザ", fullName: "帝国拳士リーザ" }
    , { id: 0x01dc, implDate: "2018/05/10", implDate_bq: "2018/11/22", obtain: "sh", rarity: "p" , depType: "van" , class: "メイド", name: "マリカ", fullName: "帝国武術女官マリカ" }
    , { id: 0x01dd, implDate: "2018/05/10", implDate_bq: "2018/11/22", obtain: "sh", rarity: "g" , depType: "van" , class: "ヘビーアーマー", name: "フィリーネ", fullName: "帝国重装歩兵フィリーネ" }
    , { id: 0x01de, implDate: "2018/05/11", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "van" , class: "天狗", name: "グレン", fullName: "天狗グレン", male: 1 }
    , { id: 0x01df, implDate: "2018/05/24", implDate_bq: "2019/03/22", obtain: "sh", rarity: "p" , depType: "van" , class: "ダークファイター", name: "ダルク", fullName: "暗黒騎士ダルク" }
    , { id: 0x01e0, implDate: "2018/05/26", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "rear", class: "道化師", name: "プリスナ", fullName: "歪み角のプリスナ" }
    , { id: 0x01e1, implDate: "2018/05/31", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "邪仙", name: "金光聖菩", fullName: "金光聖菩" }
    , { id: 0x01e2, implDate: "2018/06/07", implDate_bq: "2019/03/22", obtain: "ev", rarity: "p" , depType: "rear", class: "ヴァンパイアハンター", name: "ヒューナ", fullName: "凶鳥の射手ヒューナ" }
    , { id: 0x01e3, implDate: "2018/06/07", implDate_bq: "2019/01/31", obtain: "sh", rarity: "p" , depType: "van" , class: "プリンセス", name: "ジュリア", fullName: "ジュリア" }
    , { id: 0x01e4, implDate: "2018/06/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ローグ", name: "ちびベルナ", fullName: "ちびベルナ" }
    , { id: 0x01e5, implDate: "2018/06/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "サムライ", name: "ちびチズル", fullName: "ちびチズル" }
    , { id: 0x01e6, implDate: "2018/06/14", implDate_bq: "2019/04/18", obtain: "sh", rarity: "p" , depType: "van" , class: "中級竜兵", name: "リキュノス", fullName: "蒼竜のリキュノス" }
    , { id: 0x01e7, implDate: "2018/06/21", implDate_bq: "2019/05/23", obtain: "sh", rarity: "p" , depType: "van" , class: "エンジェル", name: "セフィーレ", fullName: "主天使セフィーレ" }
    , { id: 0x01e8, implDate: "2018/06/28", implDate_bq: "2021/04/15", obtain: "ev", rarity: "p" , depType: "van" , class: "鍛冶職人", name: "ルミアン", fullName: "鍛冶職人ルミアン" }
    , { id: 0x01e9, implDate: "2018/06/28", implDate_bq: "2020/06/11", obtain: "sh", rarity: "b" , depType: "rear", class: "風水使い", name: "リンネ/花嫁", fullName: "刻詠の花嫁リンネ" }
    , { id: 0x01ea, implDate: "2018/07/05", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "アベンジャー", name: "ナキア", fullName: "黒渦角のナキア" }
    , { id: 0x01eb, implDate: "2018/07/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "エンジェル", name: "ちびソフィー", fullName: "ちびソフィー" }
    , { id: 0x01ec, implDate: "2018/07/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "サモナー", name: "ちびリノ", fullName: "ちびリノ" }
    , { id: 0x01ed, implDate: "2018/07/12", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "サモナー", name: "ファルネ/花嫁", fullName: "花嫁姿の召喚士ファルネ" }
    , { id: 0x01ee, implDate: "2018/07/12", implDate_bq: "2021/01/14", obtain: "sh", rarity: "p" , depType: "van" , class: "魔神", name: "ベルーフェ", fullName: "怠惰の魔神ベルーフェ" }
    , { id: 0x01ef, implDate: "2018/07/19", implDate_bq: "2020/02/13", obtain: "sh", rarity: "p" , depType: "rear", class: "幻獣使い", name: "ホリー", fullName: "幻獣使いホリー" }
    , { id: 0x01f0, implDate: "2018/07/19", implDate_bq: "2019/06/20", obtain: "ev", rarity: "p" , depType: "van" , class: "ワルキューレ", name: "キャリー/水着", fullName: "渚の槍騎兵キャリー" }
    , { id: 0x01f1, implDate: "2018/07/26", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "武将【恋姫】", name: "関羽", fullName: "関羽", collabo: 1 }
    , { id: 0x01f2, implDate: "2018/07/26", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "軍師【恋姫】", name: "諸葛亮", fullName: "諸葛亮", collabo: 1 }
    , { id: 0x01f3, implDate: "2018/07/26", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "武将【恋姫】", name: "趙雲", fullName: "趙雲", collabo: 1 }
    , { id: 0x01f4, implDate: "2018/07/27", implDate_bq: null        , obtain: "sp", rarity: "b" , depType: "van" , class: "君主【恋姫】", name: "孫堅", fullName: "孫堅", collabo: 1 }
    , { id: 0x01f5, implDate: "2018/08/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "エンジェル", name: "ちびエルン", fullName: "ちびエルン" }
    , { id: 0x01f6, implDate: "2018/08/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ビショップ", name: "ちびエターナー", fullName: "ちびエターナー" }
    , { id: 0x01f7, implDate: "2018/08/09", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "君主【恋姫】", name: "孫権", fullName: "孫権", collabo: 1 }
    , { id: 0x01f8, implDate: "2018/08/09", implDate_bq: "2019/08/15", obtain: "sh", rarity: "b" , depType: "rear", class: "アーチャー", name: "ナナリー/浴衣", fullName: "白浴衣の弓乙女ナナリー" }
    , { id: 0x01f9, implDate: "2018/08/09", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ヴァンパイアハンター", name: "フーリ/水着", fullName: "海辺の彩り狩人フーリ" }
    , { id: 0x01fa, implDate: "2018/08/09", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "魔物使い", name: "シュシュ", fullName: "兎耳の魔物使いシュシュ" }
    , { id: 0x01fb, implDate: "2018/08/23", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "サモナー", name: "アクアマリー", fullName: "召喚士アクアマリー" }
    , { id: 0x01fc, implDate: "2018/08/30", implDate_bq: "2019/12/19", obtain: "sh", rarity: "b" , depType: "rear", class: "レンジャー", name: "ロヴィニア", fullName: "陽炎の森番ロヴィニア" }
    , { id: 0x01fd, implDate: "2018/09/06", implDate_bq: "2021/12/09", obtain: "sh", rarity: "p" , depType: "van" , class: "真人", name: "竜吉公主", fullName: "竜吉公主" }
    , { id: 0x01fe, implDate: "2018/09/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "モンク", name: "ちびアリス", fullName: "ちびアリス" }
    , { id: 0x01ff, implDate: "2018/09/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "メイジ", name: "ちびメーリス", fullName: "ちびメーリス" }
    , { id: 0x0200, implDate: "2018/09/13", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "道化師", name: "紅牡丹", fullName: "千両かぶき姫 紅牡丹" }
    , { id: 0x0201, implDate: "2018/09/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "エレメンタラー", name: "ユキヒメ", fullName: "氷霊使いユキヒメ" }
    , { id: 0x0202, implDate: "2018/09/20", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ライフリンカー", name: "ルメディア", fullName: "命鎖使いルメディア" }
    , { id: 0x0203, implDate: "2018/09/20", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "シーフ", name: "ピッキー", fullName: "新進の泥棒ピッキー" }
    , { id: 0x0204, implDate: "2018/09/27", implDate_bq: "2020/12/17", obtain: "sh", rarity: "b" , depType: "rear", class: "ネクロマンサー", name: "メルアビス", fullName: "冥霊魔術師メルアビス" }
    , { id: 0x0205, implDate: "2018/10/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "クロノウィッチ", name: "アーリー", fullName: "時の魔女アーリー" }
    , { id: 0x0206, implDate: "2018/10/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびアルティア", fullName: "ちびアルティア" }
    , { id: 0x0207, implDate: "2018/10/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ローグ", name: "ちびセシリー", fullName: "ちびセシリー" }
    , { id: 0x0208, implDate: "2018/10/11", implDate_bq: "2019/05/23", obtain: "ev", rarity: "p" , depType: "van" , class: "サッパー", name: "マイン", fullName: "技工兵マイン" }
    , { id: 0x0209, implDate: "2018/10/11", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "イモータルプリンセス", name: "カルマ/ハロウィン", fullName: "南瓜祭の花嫁カルマ" }
    , { id: 0x020a, implDate: "2018/10/11", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "パイレーツ", name: "ヴェロッテ/ハロウィン", fullName: "仮装海賊ヴェロッテ" }
    , { id: 0x020b, implDate: "2018/10/25", implDate_bq: "2020/02/13", obtain: "ev", rarity: "b" , depType: "van" , class: "アベンジャー", name: "ノワール", fullName: "降魔の復讐者ノワール" }
    , { id: 0x020c, implDate: "2018/10/25", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "騎士【七つの大罪】", name: "メリオダス", fullName: "メリオダス", male: 1, collabo: 1 }
    , { id: 0x020d, implDate: "2018/10/25", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "王女【七つの大罪】", name: "エリザベス", fullName: "エリザベス", collabo: 1 }
    , { id: 0x020e, implDate: "2018/10/25", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "アーチャー", name: "キャロップ", fullName: "獣耳の射手キャロップ" }
    , { id: 0x020f, implDate: "2018/10/25", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "盗賊【七つの大罪】", name: "バン", fullName: "バン", male: 1, collabo: 1 }
    , { id: 0x0210, implDate: "2018/10/25", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "巨人【七つの大罪】", name: "ディアンヌ", fullName: "ディアンヌ", collabo: 1 }
    , { id: 0x0211, implDate: "2018/10/25", implDate_bq: "2019/05/23", obtain: "ev", rarity: "p" , depType: "rear", class: "メイジ", name: "キャンディ", fullName: "お菓子魔術師キャンディ" }
    , { id: 0x0212, implDate: "2018/11/01", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "妖精【七つの大罪】", name: "キング", fullName: "キング", male: 1, collabo: 1 }
    , { id: 0x0213, implDate: "2018/11/01", implDate_bq: "2019/11/14", obtain: "sh", rarity: "b" , depType: "van" , class: "サムライ", name: "ジュウベエ", fullName: "東国の大剣豪ジュウベエ" }
    , { id: 0x0214, implDate: "2018/11/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "アーチャー", name: "ちびスピカ", fullName: "ちびスピカ" }
    , { id: 0x0215, implDate: "2018/11/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびイリス", fullName: "ちびイリス" }
    , { id: 0x0216, implDate: "2018/11/15", implDate_bq: "2021/02/18", obtain: "ev", rarity: "p" , depType: "van" , class: "グリフィンライダー", name: "クゥイル", fullName: "鷲獅騎兵クゥイル" }
    , { id: 0x0217, implDate: "2018/11/15", implDate_bq: "2019/12/19", obtain: "sh", rarity: "p" , depType: "van" , class: "グラディエーター", name: "バルバラ", fullName: "猛勇剣闘士バルバラ" }
    , { id: 0x0218, implDate: "2018/11/15", implDate_bq: "2020/01/16", obtain: "tr", rarity: "b" , depType: "rear", class: "幻獣使い", name: "シンフー", fullName: "霊麟幻獣使シンフー" }
    , { id: 0x0219, implDate: "2018/11/22", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "van" , class: "モンク", name: "バイン", fullName: "兎耳武闘家バイン" }
    , { id: 0x021a, implDate: "2018/11/22", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ヒーラー", name: "アウローラ", fullName: "帝国治癒士長アウローラ" }
    , { id: 0x021b, implDate: "2018/11/22", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "くぐつ使い", name: "クリスタ", fullName: "帝国機甲士クリスタ" }
    , { id: 0x021c, implDate: "2018/11/22", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "マーチャント", name: "ターニャ", fullName: "帝国商人ターニャ" }
    , { id: 0x021d, implDate: "2018/11/22", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ダンサー", name: "ナターリエ", fullName: "帝国の舞姫ナターリエ" }
    , { id: 0x021e, implDate: "2018/11/29", implDate_bq: "2020/10/15", obtain: "sh", rarity: "b" , depType: "van" , class: "ボウライダー", name: "エメルダ", fullName: "翠森の弓騎兵エメルダ" }
    , { id: 0x021f, implDate: "2018/11/29", implDate_bq: "2020/01/16", obtain: "sh", rarity: "b" , depType: "rear", class: "道化師", name: "リズリー", fullName: "希代の天才道化リズリー" }
    , { id: 0x0220, implDate: "2018/11/29", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "rear", class: "デモンサモナー", name: "ちびラピス", fullName: "ちびラピス" }
    , { id: 0x0221, implDate: "2018/12/06", implDate_bq: "2019/09/26", obtain: "ev", rarity: "b" , depType: "van" , class: "魔王親衛隊", name: "シャディア", fullName: "魔王親衛隊シャディア" }
    , { id: 0x0222, implDate: "2018/12/06", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "メイド", name: "アリエル", fullName: "神癒の召使アリエル" }
    , { id: 0x0223, implDate: "2018/12/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびテミス", fullName: "ちびテミス" }
    , { id: 0x0224, implDate: "2018/12/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ロイヤルガード", name: "ちびミレイユ", fullName: "ちびミレイユ" }
    , { id: 0x0225, implDate: "2018/12/07", implDate_bq: null        , obtain: "sp", rarity: "b" , depType: "rear", class: "傀儡人形【封緘】", name: "リリカ", fullName: "リリカ", collabo: 1 }
    , { id: 0x0226, implDate: "2018/12/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "陰陽師", name: "タマミ", fullName: "陰陽師タマミ" }
    , { id: 0x0227, implDate: "2018/12/30", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "騎士【封緘】", name: "ダルフィア", fullName: "ダルフィア", collabo: 1 }
    , { id: 0x0228, implDate: "2018/12/30", implDate_bq: "2020/12/17", obtain: "sh", rarity: "b" , depType: "van" , class: "ダークファイター", name: "コーネリア/クリスマス", fullName: "暗黒聖夜騎士コーネリア" }
    , { id: 0x0229, implDate: "2018/12/30", implDate_bq: "2019/12/19", obtain: "sh", rarity: "p" , depType: "rear", class: "砲術士", name: "カノン/クリスマス", fullName: "聖夜の祝星砲カノン" }
    , { id: 0x022a, implDate: "2018/12/30", implDate_bq: "2019/11/14", obtain: "ev", rarity: "p" , depType: "rear", class: "ヒーラー", name: "カミラ/クリスマス", fullName: "聖祭の癒し手カミラ" }
    
    // 2019
    , { id: 0x022b, implDate: "2019/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "鬼", name: "鬼刃姫/お正月", fullName: "年賀の着衣始 鬼刃姫" }
    , { id: 0x022c, implDate: "2019/01/01", implDate_bq: "2020/01/16", obtain: "sh", rarity: "p" , depType: "rear", class: "マーチャント", name: "トトノ/お正月", fullName: "迎春の祝商人トトノ" }
    , { id: 0x022d, implDate: "2019/01/02", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "van" , class: "プリンセス", name: "ロゼット/お正月", fullName: "晴着の花姫ロゼット" }
    , { id: 0x022e, implDate: "2019/01/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "アベンジャー", name: "ちびドロシー", fullName: "ちびドロシー" }
    , { id: 0x022f, implDate: "2019/01/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "陰陽師", name: "ちびミコト", fullName: "ちびミコト" }
    , { id: 0x0230, implDate: "2019/01/10", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "エレメンタラー", name: "ジルヴァ", fullName: "雷霊使いジルヴァ" }
    , { id: 0x0231, implDate: "2019/01/17", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "妖狐", name: "イズナ", fullName: "妖狐イズナ" }
    , { id: 0x0232, implDate: "2019/01/24", implDate_bq: "2020/09/17", obtain: "ev", rarity: "p" , depType: "rear", class: "幻獣使い", name: "カリン", fullName: "幻獣使いカリン" }
    , { id: 0x0233, implDate: "2019/01/24", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ドラゴンプリンセス", name: "メリュジアナ", fullName: "竜姫メリュジアナ" }
    , { id: 0x0234, implDate: "2019/01/31", implDate_bq: "2021/08/12", obtain: "sh", rarity: "b" , depType: "rear", class: "ライフリンカー", name: "スピリア", fullName: "魂鎖の紡ぎ手スピリア" }
    , { id: 0x0235, implDate: "2019/02/07", implDate_bq: "2019/08/15", obtain: "ev", rarity: "p" , depType: "van" , class: "天狗", name: "ホムラ", fullName: "天狗ホムラ" }
    , { id: 0x0236, implDate: "2019/02/07", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "エンジェル", name: "ソフィー/バレンタイン", fullName: "恋慕の堕天使ソフィー" }
    , { id: 0x0237, implDate: "2019/02/07", implDate_bq: "2019/11/14", obtain: "sh", rarity: "p" , depType: "rear", class: "ダンサー", name: "マーニー/バレンタイン", fullName: "甘美な踊り子マーニー" }
    , { id: 0x0238, implDate: "2019/02/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "バンデット", name: "ちびアマンダ", fullName: "ちびアマンダ" }
    , { id: 0x0239, implDate: "2019/02/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "エンジェル", name: "ちびクロエ", fullName: "ちびクロエ" }
    , { id: 0x023a, implDate: "2019/02/21", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "バンデット", name: "リーフ/バレンタイン", fullName: "甘恋の山賊娘リーフ" }
    , { id: 0x023b, implDate: "2019/02/21", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ドラゴンライダー", name: "スイレン", fullName: "水龍騎士スイレン" }
    , { id: 0x023c, implDate: "2019/02/21", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "マーチャント", name: "ミネット", fullName: "ねこみみ商人ミネット" }
    , { id: 0x023d, implDate: "2019/02/21", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ビショップ", name: "ソレーユ", fullName: "見習い司祭ソレーユ" }
    , { id: 0x023e, implDate: "2019/02/21", implDate_bq: "2019/09/26", obtain: "ev", rarity: "p" , depType: "rear", class: "ルーンアコライト", name: "ソニア", fullName: "智慧の信徒ソニア" }
    , { id: 0x023f, implDate: "2019/02/25", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "ダークファイター", name: "アリエッタ", fullName: "迅雷の黒騎士アリエッタ" }
    , { id: 0x0240, implDate: "2019/02/28", implDate_bq: "2020/11/19", obtain: "sh", rarity: "b" , depType: "van" , class: "サッパー", name: "シャール", fullName: "爆突工兵シャール" }
    , { id: 0x0241, implDate: "2019/03/07", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "セーラー", name: "ジャクリーヌ", fullName: "航海士ジャクリーヌ" }
    , { id: 0x0242, implDate: "2019/03/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ペガサスライダー", name: "ちびリディ", fullName: "ちびリディ" }
    , { id: 0x0243, implDate: "2019/03/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "仙人", name: "ちびナタク", fullName: "ちびナタク" }
    , { id: 0x0244, implDate: "2019/03/14", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ペガサスライダー", name: "ジーニア", fullName: "天馬騎士副団長ジーニア" }
    , { id: 0x0245, implDate: "2019/03/21", implDate_bq: "2020/06/11", obtain: "ev", rarity: "p" , depType: "van" , class: "魔神", name: "マンモン", fullName: "強欲の魔神マンモン" }
    , { id: 0x0246, implDate: "2019/03/21", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "後衛戦術家", name: "シナト", fullName: "疾風の軍師シナト" }
    , { id: 0x0247, implDate: "2019/03/28", implDate_bq: "2021/06/17", obtain: "sh", rarity: "b" , depType: "van" , class: "グランドナイト", name: "アデライド", fullName: "王宮守護騎士アデライド" }
    , { id: 0x0248, implDate: "2019/04/04", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "邪仙", name: "王妃人", fullName: "王妃人" }
    , { id: 0x0249, implDate: "2019/04/04", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "クロノウィッチ", name: "トワ/学園", fullName: "時空魔法の優等生トワ" }
    , { id: 0x024a, implDate: "2019/04/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "エンジェル", name: "クロエ/学園", fullName: "堕天系お掃除当番クロエ" }
    , { id: 0x024b, implDate: "2019/04/04", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "van" , class: "ワルキューレ", name: "ミーシャ/学園", fullName: "騎兵科新入生ミーシャ" }
    , { id: 0x024c, implDate: "2019/04/04", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "van" , class: "魔法剣士", name: "リカルド/学園", fullName: "魔法科剣士リカルド", male: 1 }
    , { id: 0x024d, implDate: "2019/04/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "魔法剣士", name: "ちびイングリッド", fullName: "ちびイングリッド" }
    , { id: 0x024e, implDate: "2019/04/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "サモナー", name: "ちびソラノ", fullName: "ちびソラノ" }
    , { id: 0x024f, implDate: "2019/04/11", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "グリフィンライダー", name: "プルーム", fullName: "鷲獅騎兵プルーム" }
    , { id: 0x0250, implDate: "2019/04/18", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "鍛冶職人", name: "フィスティア", fullName: "手甲鍛冶師フィスティア" }
    , { id: 0x0251, implDate: "2019/04/25", implDate_bq: "2019/10/24", obtain: "ev", rarity: "p" , depType: "van" , class: "ヴァンパイアプリンセス", name: "エストリエ", fullName: "可憐な吸血姫エストリエ" }
    , { id: 0x0252, implDate: "2019/04/25", implDate_bq: "2022/03/10", obtain: "sh", rarity: "b" , depType: "rear", class: "ルーンアコライト", name: "エレオノーラ", fullName: "帝国司教エレオノーラ" }
    , { id: 0x0253, implDate: "2019/04/25", implDate_bq: "2019/10/24", obtain: "sh", rarity: "p" , depType: "van" , class: "ソードマスター", name: "ヴァイス", fullName: "帝国剣士ヴァイス" }
    , { id: 0x0254, implDate: "2019/04/25", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "ヒルデ", fullName: "帝国狙撃兵ヒルデ" }
    , { id: 0x0255, implDate: "2019/04/25", implDate_bq: "2021/05/13", obtain: "sh", rarity: "g" , depType: "van" , class: "ワルキューレ", name: "メーア", fullName: "帝国槍騎士メーア" }
    , { id: 0x0256, implDate: "2019/04/25", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "van" , class: "ローグ", name: "ヴィクター", fullName: "帝国暗部ヴィクター", male: 1 }
    , { id: 0x0257, implDate: "2019/05/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ローグ", name: "ちびキュテリ", fullName: "ちびキュテリ" }
    , { id: 0x0258, implDate: "2019/05/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "前衛戦術家", name: "ちびマツリ", fullName: "ちびマツリ" }
    , { id: 0x0259, implDate: "2019/05/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "イビルプリンセス", name: "スキュレ", fullName: "海魔の麗姫スキュレ" }
    , { id: 0x025a, implDate: "2019/05/16", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "砲術士", name: "エイプリル", fullName: "砲術教官エイプリル" }
    , { id: 0x025b, implDate: "2019/05/23", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "忍者", name: "ハツネ", fullName: "くノ一ハツネ" }
    , { id: 0x025c, implDate: "2019/05/30", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "エイル", fullName: "滅蟲の狙撃手エイル" }
    , { id: 0x025d, implDate: "2019/05/30", implDate_bq: "2020/03/12", obtain: "sh", rarity: "b" , depType: "van" , class: "ダークストーカー", name: "アンブレ", fullName: "冥闇の剣士アンブレ" }
    , { id: 0x025e, implDate: "2019/05/30", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "ボウライダー", name: "フラフィー", fullName: "純白の獣人フラフィー" }
    , { id: 0x025f, implDate: "2019/06/06", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "怪盗【GBM】", name: "ルパン", fullName: "ルパン", collabo: 1 }
    , { id: 0x0260, implDate: "2019/06/06", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "戯曲作家【GBM】", name: "ゲーテ", fullName: "ゲーテ", collabo: 1 }
    , { id: 0x0261, implDate: "2019/06/06", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "水底の支配者【GBM】", name: "ラヴクラフト", fullName: "ラヴクラフト", collabo: 1 }
    , { id: 0x0262, implDate: "2019/06/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびイーリス", fullName: "ちびイーリス" }
    , { id: 0x0263, implDate: "2019/06/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "後衛戦術家", name: "ちびアイシャ", fullName: "ちびアイシャ" }
    , { id: 0x0264, implDate: "2019/06/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "メイジアーマー", name: "アルマ", fullName: "魔導鎧娘アルマ" }
    , { id: 0x0265, implDate: "2019/06/20", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "錬金術師【GBM】", name: "ファウスト", fullName: "ファウスト", collabo: 1 }
    , { id: 0x0266, implDate: "2019/06/20", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "イモータルプリンセス", name: "ユーフェ", fullName: "紅剣の不死姫ユーフェ" }
    , { id: 0x0267, implDate: "2019/06/27", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "プリンセス", name: "オリヴィエ/花嫁", fullName: "誓いの妖精姫オリヴィエ" }
    , { id: 0x0268, implDate: "2019/06/27", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ロイヤルガード", name: "アリシア/花嫁", fullName: "契りの近衛騎士アリシア" }
    , { id: 0x0269, implDate: "2019/07/04", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "ローグ", name: "ベルナ/花嫁", fullName: "赤き盗賊花嫁ベルナ" }
    , { id: 0x026a, implDate: "2019/07/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "真人", name: "織姫", fullName: "織姫" }
    , { id: 0x026b, implDate: "2019/07/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびゼノビア", fullName: "ちびゼノビア" }
    , { id: 0x026c, implDate: "2019/07/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "セーラー", name: "ちびイブキ", fullName: "ちびイブキ" }
    , { id: 0x026d, implDate: "2019/07/11", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ヴァンパイアプリンセス", name: "シルヴィア/水着", fullName: "涼風の吸血姫シルヴィア" }
    , { id: 0x026e, implDate: "2019/07/11", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "陰陽師", name: "ミコト/水着", fullName: "波打ち際の陰陽師ミコト" }
    , { id: 0x026f, implDate: "2019/07/11", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "デモンサモナー", name: "ラピス/水着", fullName: "夏海の大悪魔ラピス" }
    , { id: 0x0270, implDate: "2019/07/11", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "エンジェル", name: "ミルノ/水着", fullName: "水着の天使長ミルノ" }
    , { id: 0x0271, implDate: "2019/07/11", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ソードマスター", name: "サンドラ/水着", fullName: "波斬りの剣士サンドラ" }
    , { id: 0x0272, implDate: "2019/07/11", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "アーチャー", name: "リタ/水着", fullName: "陽影の弓射手リタ" }
    , { id: 0x0273, implDate: "2019/07/11", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "ドルチェ/水着", fullName: "火遊びハンタードルチェ" }
    , { id: 0x0274, implDate: "2019/07/11", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "rear", class: "メイジ", name: "マーヤ/水着", fullName: "炎夏の魔術師マーヤ" }
    , { id: 0x0275, implDate: "2019/07/25", implDate_bq: "2021/07/15", obtain: "sh", rarity: "p" , depType: "van" , class: "鍛冶職人", name: "ミスリア", fullName: "魔剣鍛冶師ミスリア" }
    , { id: 0x0276, implDate: "2019/07/25", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "van" , class: "グランドナイト", name: "フルーリオ", fullName: "守護騎士フルーリオ" }
    , { id: 0x0277, implDate: "2019/08/01", implDate_bq: "2021/07/15", obtain: "ev", rarity: "p" , depType: "van" , class: "イビルプリンセス", name: "ピリカ", fullName: "狼剣の魔姫ピリカ" }
    , { id: 0x0278, implDate: "2019/08/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "奸雄【恋姫】", name: "曹操", fullName: "曹操", collabo: 1 }
    , { id: 0x0279, implDate: "2019/08/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "勇士【恋姫】", name: "呂布", fullName: "呂布", collabo: 1 }
    , { id: 0x027a, implDate: "2019/08/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "武将【恋姫】", name: "馬超", fullName: "馬超", collabo: 1 }
    , { id: 0x027b, implDate: "2019/08/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "魔法剣士", name: "ちびシャルロット", fullName: "ちびシャルロット" }
    , { id: 0x027c, implDate: "2019/08/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "魔物使い", name: "ちびモルテナ", fullName: "ちびモルテナ" }
    , { id: 0x027d, implDate: "2019/08/02", implDate_bq: null        , obtain: "sp", rarity: "b" , depType: "van" , class: "君主【恋姫】", name: "劉備", fullName: "劉備", collabo: 1 }
    , { id: 0x027e, implDate: "2019/08/15", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "軍師【恋姫】", name: "鳳統", fullName: "鳳統", collabo: 1 }
    , { id: 0x027f, implDate: "2019/08/15", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "エンチャンター", name: "ハーニィ", fullName: "付与魔術師ハーニィ" }
    , { id: 0x0280, implDate: "2019/08/22", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "雷公", name: "ラミィ/浴衣", fullName: "雷雲の浴衣ラミィ" }
    , { id: 0x0281, implDate: "2019/08/22", implDate_bq: "2021/08/12", obtain: "sh", rarity: "p" , depType: "van" , class: "風伯", name: "フーコ/浴衣", fullName: "風雲の浴衣フーコ" }
    , { id: 0x0282, implDate: "2019/08/22", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "van" , class: "邪仙", name: "ちび金光聖菩", fullName: "ちび金光聖菩" }
    , { id: 0x0283, implDate: "2019/08/29", implDate_bq: "2021/09/16", obtain: "sh", rarity: "b" , depType: "van" , class: "真人", name: "清源妙道真君", fullName: "清源妙道真君" }
    , { id: 0x0284, implDate: "2019/09/05", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ぬらりひょん", name: "サギリ", fullName: "ぬらりひょんの娘サギリ" }
    , { id: 0x0285, implDate: "2019/09/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "天狗", name: "ちびコノハ", fullName: "ちびコノハ" }
    , { id: 0x0286, implDate: "2019/09/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "クロノウィッチ", name: "ちびトワ", fullName: "ちびトワ" }
    , { id: 0x0287, implDate: "2019/09/12", implDate_bq: "2020/04/16", obtain: "ev", rarity: "g" , depType: "van" , class: "モンク", name: "マオ/浴衣", fullName: "浴衣の見返り拳士マオ" }
    , { id: 0x0288, implDate: "2019/09/12", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "邪仙", name: "胡喜美", fullName: "胡喜美" }
    , { id: 0x0289, implDate: "2019/09/12", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ルーンアコライト", name: "シャイーナ", fullName: "聖魔の信徒シャイーナ" }
    , { id: 0x028a, implDate: "2019/09/12", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ヴァンパイアハンター", name: "ピックル", fullName: "新米狩人ピックル" }
    , { id: 0x028b, implDate: "2019/09/12", implDate_bq: "2021/04/15", obtain: "ev", rarity: "p" , depType: "rear", class: "後衛戦術家", name: "イリオス", fullName: "オークの軍師イリオス" }
    , { id: 0x028c, implDate: "2019/09/19", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ドルイド", name: "メリーファ", fullName: "眠りの森巫女メリーファ" }
    , { id: 0x028d, implDate: "2019/09/26", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "鬼刃忍", name: "セツナ", fullName: "鬼刃忍セツナ" }
    , { id: 0x028e, implDate: "2019/10/03", implDate_bq: "2020/04/16", obtain: "sh", rarity: "p" , depType: "van" , class: "ランスマスター", name: "フィロ", fullName: "天穿の槍士フィロ" }
    , { id: 0x028f, implDate: "2019/10/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "妖狐", name: "ちびキュウビ", fullName: "ちびキュウビ" }
    , { id: 0x0290, implDate: "2019/10/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ビショップ", name: "ちびポーラ", fullName: "ちびポーラ" }
    , { id: 0x0291, implDate: "2019/10/10", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "メイジ", name: "フローガ", fullName: "紅の魔術師フローガ" }
    , { id: 0x0292, implDate: "2019/10/10", implDate_bq: "2021/10/14", obtain: "sh", rarity: "b" , depType: "rear", class: "ウィッチ", name: "デスピア/ハロウィン", fullName: "秋祭の大魔女デスピア" }
    , { id: 0x0293, implDate: "2019/10/10", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ヴァンパイアロード", name: "エデン/ハロウィン", fullName: "秋夜の吸血鬼エデン" }
    , { id: 0x0294, implDate: "2019/10/17", implDate_bq: "2020/10/15", obtain: "ev", rarity: "g" , depType: "van" , class: "ボウライダー", name: "ルナール/ハロウィン", fullName: "仮装の弓騎兵ルナール" }
    , { id: 0x0295, implDate: "2019/10/24", implDate_bq: "2022/10/13", obtain: "sh", rarity: "p" , depType: "van" , class: "モンスターブレイカー", name: "エレカ", fullName: "封機の剣士エレカ" }
    , { id: 0x0296, implDate: "2019/10/31", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "rear", class: "占星術師", name: "ソラス", fullName: "星を詠む者ソラス" }
    , { id: 0x0297, implDate: "2019/10/31", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "rear", class: "チェイスハンター", name: "ユージェン", fullName: "影を継ぐ者ユージェン" }
    , { id: 0x0298, implDate: "2019/10/31", implDate_bq: null        , obtain: "tr", rarity: "bh", depType: "van" , class: "魔竜騎士", name: "アトナテス", fullName: "深淵を知る者アトナテス", male: 1 }
    , { id: 0x0299, implDate: "2019/10/31", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "魔竜騎士", name: "アトナテス", fullName: "深淵を知る者アトナテス", male: 1 }
    , { id: 0x029a, implDate: "2019/10/31", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "rear", class: "占星術師", name: "ソラス", fullName: "星を詠む者ソラス" }
    , { id: 0x029b, implDate: "2019/10/31", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "rear", class: "チェイスハンター", name: "ユージェン", fullName: "影を継ぐ者ユージェン" }
    , { id: 0x029c, implDate: "2019/11/07", implDate_bq: "2020/07/16", obtain: "sh", rarity: "p" , depType: "van" , class: "前衛戦術家", name: "ルヴェア", fullName: "戦場指揮官ルヴェア" }
    , { id: 0x029d, implDate: "2019/11/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ヘビーアーマー", name: "ちびレアン", fullName: "ちびレアン" }
    , { id: 0x029e, implDate: "2019/11/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ダークプリースト", name: "ちびドロテア", fullName: "ちびドロテア" }
    , { id: 0x029f, implDate: "2019/11/14", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ダークファイター", name: "ヘイオス", fullName: "光闇の騎士ヘイオス" }
    , { id: 0x02a0, implDate: "2019/11/21", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "呪術使い", name: "カタラ", fullName: "呪術師カタラ" }
    , { id: 0x02a1, implDate: "2019/11/21", implDate_bq: "2023/02/09", obtain: "sh", rarity: "b" , depType: "rear", class: "ロード", name: "アレイダ", fullName: "帝国辺境総督アレイダ" }
    , { id: 0x02a2, implDate: "2019/11/21", implDate_bq: "2022/08/10", obtain: "sh", rarity: "p" , depType: "rear", class: "支援工兵", name: "パトリシア", fullName: "帝国防塞工兵パトリシア" }
    , { id: 0x02a3, implDate: "2019/11/21", implDate_bq: "2021/05/13", obtain: "sh", rarity: "g" , depType: "rear", class: "アーチャー", name: "エルネスタ", fullName: "帝国弓兵エルネスタ" }
    , { id: 0x02a4, implDate: "2019/11/21", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "van" , class: "ドラゴンプリンセス", name: "クラシル", fullName: "翠色の竜姫クラシル" }
    , { id: 0x02a5, implDate: "2019/11/28", implDate_bq: "2020/04/16", obtain: "sh", rarity: "b" , depType: "van" , class: "バンデット", name: "レオーネ", fullName: "百獣の覇者レオーネ" }
    , { id: 0x02a6, implDate: "2019/11/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "エレメンタラー", name: "ルフレ", fullName: "光霊使いルフレ" }
    , { id: 0x02a7, implDate: "2019/11/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "rear", class: "デモンシャーマン", name: "リィーリ", fullName: "魔神の落胤リィーリ" }
    , { id: 0x02a8, implDate: "2019/12/05", implDate_bq: null        , obtain: "ev", rarity: "ph", depType: "rear", class: "ジオマンサー", name: "サナラ", fullName: "大地を紡ぐ者サナラ" }
    , { id: 0x02a9, implDate: "2019/12/05", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "van" , class: "神官戦士", name: "エーテル/クリスマス", fullName: "聖光の修道戦士エーテル" }
    , { id: 0x02aa, implDate: "2019/12/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ヴァンパイアプリンセス", name: "ちびシルヴィア", fullName: "ちびシルヴィア" }
    , { id: 0x02ab, implDate: "2019/12/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ドルイド", name: "ちびメープル", fullName: "ちびメープル" }
    , { id: 0x02ac, implDate: "2019/12/12", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "パイレーツ", name: "デューオ/クリスマス", fullName: "聖夜の炸裂海賊デューオ" }
    , { id: 0x02ad, implDate: "2019/12/12", implDate_bq: "2020/12/17", obtain: "sh", rarity: "p" , depType: "rear", class: "サモナー", name: "ソラノ/クリスマス", fullName: "炎のサンタ召喚士ソラノ" }
    , { id: 0x02ae, implDate: "2019/12/26", implDate_bq: "2021/06/17", obtain: "ev", rarity: "p" , depType: "both", class: "妖狸", name: "スズネ", fullName: "妖狸スズネ" }
    , { id: 0x02af, implDate: "2019/12/26", implDate_bq: "2022/12/08", obtain: "sh", rarity: "b" , depType: "van" , class: "デーモンロード", name: "ハルモニア", fullName: "調停の魔将ハルモニア" }
    , { id: 0x02b0, implDate: "2019/12/26", implDate_bq: "2021/02/18", obtain: "sh", rarity: "b" , depType: "rear", class: "異界召喚士", name: "グリム", fullName: "異界召喚士グリム" }
    
    // 2020
    , { id: 0x02b1, implDate: "2020/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ドラゴンプリンセス", name: "エルドラ/お正月", fullName: "振袖の金竜姫エルドラ" }
    , { id: 0x02b2, implDate: "2020/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "呪術使い", name: "オロチヒメ/お正月", fullName: "迎春の呪姫オロチヒメ" }
    , { id: 0x02b3, implDate: "2020/01/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ローグ", name: "ジュノン/お正月", fullName: "晴着の看板娘ジュノン" }
    , { id: 0x02b4, implDate: "2020/01/02", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "rear", class: "レンジャー", name: "フウカ/お正月", fullName: "破魔の森番フウカ" }
    , { id: 0x02b5, implDate: "2020/01/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "メイジアーマー", name: "ちびシルセス", fullName: "ちびシルセス" }
    , { id: 0x02b6, implDate: "2020/01/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "風水使い", name: "ちびピピン", fullName: "ちびピピン" }
    , { id: 0x02b7, implDate: "2020/01/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "道化師", name: "ラトゥール", fullName: "不敗の賭博師ラトゥール" }
    , { id: 0x02b8, implDate: "2020/01/16", implDate_bq: "2023/06/15", obtain: "sh", rarity: "b" , depType: "van" , class: "犬神", name: "シロ", fullName: "犬神シロ" }
    , { id: 0x02b9, implDate: "2020/01/17", implDate_bq: null        , obtain: "sp", rarity: "b" , depType: "rear", class: "新米刑事【流星WA】", name: "クラリス", fullName: "クラリス・ツァインブルグ", collabo: 1 }
    , { id: 0x02ba, implDate: "2020/01/23", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "サムライ", name: "ハナダ", fullName: "さすらいの剣士ハナダ" }
    , { id: 0x02bb, implDate: "2020/01/30", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "交通課職員【流星WA】", name: "四ノ宮小町", fullName: "四ノ宮小町", collabo: 1 }
    , { id: 0x02bc, implDate: "2020/01/30", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "料理人", name: "オーガスタ", fullName: "天界のシェフオーガスタ" }
    , { id: 0x02bd, implDate: "2020/02/06", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "神官戦士", name: "エクス/バレンタイン", fullName: "恋慕の神官戦士エクス" }
    , { id: 0x02be, implDate: "2020/02/06", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ボウライダー", name: "エメルダ/バレンタイン", fullName: "恋煩いの弓騎兵エメルダ" }
    , { id: 0x02bf, implDate: "2020/02/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびロゼット", fullName: "ちびロゼット" }
    , { id: 0x02c0, implDate: "2020/02/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "マーチャント", name: "ちびディエーラ", fullName: "ちびディエーラ" }
    , { id: 0x02c1, implDate: "2020/02/20", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "rear", class: "ダンサー", name: "シャルキー/バレンタイン", fullName: "恋の応援団シャルキー" }
    , { id: 0x02c2, implDate: "2020/02/20", implDate_bq: "2021/11/11", obtain: "sh", rarity: "p" , depType: "van" , class: "魔法剣士", name: "タラニア", fullName: "雷光の魔剣士タラニア" }
    , { id: 0x02c3, implDate: "2020/02/20", implDate_bq: "2023/01/12", obtain: "sh", rarity: "p" , depType: "van" , class: "デモンルーン", name: "エフネ", fullName: "悪魔妖術師エフネ" }
    , { id: 0x02c4, implDate: "2020/02/20", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ダンサー", name: "ブレリア", fullName: "紅の踊り子ブレリア" }
    , { id: 0x02c5, implDate: "2020/02/20", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "魔神", name: "サオシュ", fullName: "魔神憑きサオシュ" }
    , { id: 0x02c6, implDate: "2020/02/20", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "van" , class: "キョンシー", name: "ちびスーシェン", fullName: "ちびスーシェン" }
    , { id: 0x02c7, implDate: "2020/02/27", implDate_bq: "2022/09/08", obtain: "sh", rarity: "b" , depType: "van" , class: "スチームナイト", name: "イザムバード", fullName: "蒸気騎士イザムバード" }
    , { id: 0x02c8, implDate: "2020/03/05", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "both", class: "ロケットトルーパー", name: "オヴェリー", fullName: "筆頭飛行士オヴェリー" }
    , { id: 0x02c9, implDate: "2020/03/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "パイレーツ", name: "ちびサブリナ", fullName: "ちびサブリナ" }
    , { id: 0x02ca, implDate: "2020/03/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "アルケミスト", name: "ちびマキナ", fullName: "ちびマキナ" }
    , { id: 0x02cb, implDate: "2020/03/12", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "道化師", name: "リズリー/温泉", fullName: "湯けむり奇術師リズリー" }
    , { id: 0x02cc, implDate: "2020/03/12", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "レアン/温泉", fullName: "鉄泉の守護者レアン" }
    , { id: 0x02cd, implDate: "2020/03/19", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ルーンアコライト", name: "エリス", fullName: "業火の信徒エリス" }
    , { id: 0x02ce, implDate: "2020/03/26", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "魔物使い", name: "シュシュ/温泉", fullName: "湯上り魔物使いシュシュ" }
    , { id: 0x02cf, implDate: "2020/03/26", implDate_bq: "2022/04/14", obtain: "sh", rarity: "b" , depType: "van" , class: "ぬえ", name: "ツグミ", fullName: "夜鳥ツグミ" }
    , { id: 0x02d0, implDate: "2020/04/02", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "エンチャンター", name: "アンリ/学園", fullName: "頭脳派の体育祭アンリ" }
    , { id: 0x02d1, implDate: "2020/04/02", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "エレメンタラー", name: "ユキヒメ/学園", fullName: "氷霊応援団ユキヒメ" }
    , { id: 0x02d2, implDate: "2020/04/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "鍛冶職人", name: "ちびティニー", fullName: "ちびティニー" }
    , { id: 0x02d3, implDate: "2020/04/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヴァンパイアハンター", name: "ちびフーリ", fullName: "ちびフーリ" }
    , { id: 0x02d4, implDate: "2020/04/09", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "van" , class: "バンデット", name: "モーティマ/姫", fullName: "姫装山賊モーティマ", male: 1 }
    , { id: 0x02d5, implDate: "2020/04/16", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "メイジアーマー", name: "ライチ/学園", fullName: "魔鎧科新入生ライチ" }
    , { id: 0x02d6, implDate: "2020/04/16", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "エンプレス", name: "ハリナ", fullName: "亡国の女皇ハリナ" }
    , { id: 0x02d7, implDate: "2020/04/16", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "サッパー", name: "カトリーナ", fullName: "帝国工兵カトリーナ" }
    , { id: 0x02d8, implDate: "2020/04/16", implDate_bq: "2023/09/14", obtain: "sh", rarity: "g" , depType: "van" , class: "インペリアルナイト", name: "ゲルトルート", fullName: "帝国騎士ゲルトルート" }
    , { id: 0x02d9, implDate: "2020/04/16", implDate_bq: "2023/06/15", obtain: "ev", rarity: "p" , depType: "rear", class: "デモンサモナー", name: "アイラ", fullName: "迷子の悪魔召喚士アイラ" }
    , { id: 0x02da, implDate: "2020/04/30", implDate_bq: "2023/10/12", obtain: "sh", rarity: "b" , depType: "van" , class: "デモンルーン", name: "エスネア", fullName: "黒翼の魔兵エスネア" }
    , { id: 0x02db, implDate: "2020/05/07", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "アルケミスト", name: "ニコル", fullName: "錬金調合師ニコル" }
    , { id: 0x02dc, implDate: "2020/05/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "中級竜兵", name: "ちびヴルム", fullName: "ちびヴルム" }
    , { id: 0x02dd, implDate: "2020/05/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "後衛戦術家", name: "ちびレオナ", fullName: "ちびレオナ" }
    , { id: 0x02de, implDate: "2020/05/14", implDate_bq: "2022/04/14", obtain: "sh", rarity: "p" , depType: "rear", class: "砲術士", name: "スミレ", fullName: "大砲組頭スミレ" }
    , { id: 0x02df, implDate: "2020/05/21", implDate_bq: "2022/07/14", obtain: "sh", rarity: "p" , depType: "van" , class: "スチームナイト", name: "ベアッカ", fullName: "蒸気騎士ベアッカ" }
    , { id: 0x02e0, implDate: "2020/05/28", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "アベンジャー", name: "レティシア", fullName: "蒼紅の復讐者レティシア" }
    , { id: 0x02e1, implDate: "2020/05/28", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "バーバリアンクイーン", name: "トゥアン", fullName: "万慧を砕く者トゥアン" }
    , { id: 0x02e2, implDate: "2020/05/28", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "rear", class: "ジオマンサー", name: "サナラ", fullName: "大地を紡ぐ者サナラ" }
    , { id: 0x02e3, implDate: "2020/05/28", implDate_bq: "2024/01/11", obtain: "ev", rarity: "p" , depType: "van" , class: "メイジアーマー", name: "フィナン", fullName: "信仰の魔鎧兵フィナン" }
    , { id: 0x02e4, implDate: "2020/05/28", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "バーバリアンクイーン", name: "トゥアン", fullName: "万慧を砕く者トゥアン" }
    , { id: 0x02e5, implDate: "2020/06/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ワルキューレ", name: "ちびエレイン", fullName: "ちびエレイン" }
    , { id: 0x02e6, implDate: "2020/06/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ドルイド", name: "ちびフィオレ", fullName: "ちびフィオレ" }
    , { id: 0x02e7, implDate: "2020/06/11", implDate_bq: "2022/06/09", obtain: "sh", rarity: "b" , depType: "rear", class: "ビショップ", name: "エターナー/花嫁", fullName: "久遠の花嫁エターナー" }
    , { id: 0x02e8, implDate: "2020/06/11", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "くぐつ使い", name: "リッカ/花嫁", fullName: "双花の結婚式リッカ" }
    , { id: 0x02e9, implDate: "2020/06/11", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ドラゴンライダー", name: "スイレン/花嫁", fullName: "清心の花嫁スイレン" }
    , { id: 0x02ea, implDate: "2020/06/18", implDate_bq: "2022/06/09", obtain: "ev", rarity: "b" , depType: "rear", class: "マーチャント", name: "ディエーラ/花嫁", fullName: "約束の花嫁ディエーラ" }
    , { id: 0x02eb, implDate: "2020/06/18", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "物語を渡る者【GBM】", name: "グリモワール", fullName: "グリモワール", collabo: 1 }
    , { id: 0x02ec, implDate: "2020/06/18", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "心ある虫【GBM】", name: "虫子", fullName: "虫子", collabo: 1 }
    , { id: 0x02ed, implDate: "2020/06/25", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "both", class: "妖狸", name: "ヤシマ", fullName: "妖狸ヤシマ" }
    , { id: 0x02ee, implDate: "2020/07/02", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "刑事【GBM】", name: "ガニマール", fullName: "ガニマール", collabo: 1 }
    , { id: 0x02ef, implDate: "2020/07/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "エンチャンター", name: "ちびアンリ", fullName: "ちびアンリ" }
    , { id: 0x02f0, implDate: "2020/07/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "エレメンタラー", name: "ちびクラリーチェ", fullName: "ちびクラリーチェ" }
    , { id: 0x02f1, implDate: "2020/07/09", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "妖狐", name: "キュウビ/水着", fullName: "妖狐の海水浴キュウビ" }
    , { id: 0x02f2, implDate: "2020/07/09", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ソードマスター", name: "ジークリンデ/水着", fullName: "真夏の剣聖ジークリンデ" }
    , { id: 0x02f3, implDate: "2020/07/09", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ルーンアコライト", name: "エレオノーラ/水着", fullName: "砂浜の司教エレオノーラ" }
    , { id: 0x02f4, implDate: "2020/07/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ソルジャー", name: "リーゼロッテ/水着", fullName: "海の看板娘リーゼロッテ" }
    , { id: 0x02f5, implDate: "2020/07/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "セーラー", name: "フレイ/水着", fullName: "水兵の夏休みフレイ" }
    , { id: 0x02f6, implDate: "2020/07/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "後衛戦術家", name: "レオナ/水着", fullName: "軍師の息抜きレオナ" }
    , { id: 0x02f7, implDate: "2020/07/22", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "前衛戦術家", name: "レオラ/水着", fullName: "魅惑の夏元帥レオラ" }
    , { id: 0x02f8, implDate: "2020/07/22", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "犬神", name: "ツムジ", fullName: "犬神ツムジ" }
    , { id: 0x02f9, implDate: "2020/07/26", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "van" , class: "ランスマスター", name: "コルム", fullName: "信仰の槍士コルム" }
    , { id: 0x02fa, implDate: "2020/07/30", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "魔神", name: "メフィスト/水着", fullName: "魔神の水遊びメフィスト" }
    , { id: 0x02fb, implDate: "2020/07/30", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "インペリアルナイト", name: "ディアナ/水着", fullName: "誘惑の日差しディアナ" }
    , { id: 0x02fc, implDate: "2020/07/30", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ヒーラー", name: "アウローラ/水着", fullName: "砂浜に咲く花アウローラ" }
    , { id: 0x02fd, implDate: "2020/07/30", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ワルキューレ", name: "メーア/水着", fullName: "完全無欠の夏休みメーア" }
    , { id: 0x02fe, implDate: "2020/07/30", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ヒーラー", name: "エリアス/水着", fullName: "夏風の治癒士エリアス" }
    , { id: 0x02ff, implDate: "2020/07/30", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ダンサー", name: "ナターリエ/水着", fullName: "真夏の公演ナターリエ" }
    , { id: 0x0300, implDate: "2020/08/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびリーゼロッテ", fullName: "ちびリーゼロッテ" }
    , { id: 0x0301, implDate: "2020/08/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "魔神", name: "ちびメフィスト", fullName: "ちびメフィスト" }
    , { id: 0x0302, implDate: "2020/08/13", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "レンジャー", name: "ローザ/水着", fullName: "真夏のいざないローザ" }
    , { id: 0x0303, implDate: "2020/08/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ライフリンカー", name: "スピリア/浴衣", fullName: "宵の花鎖スピリア" }
    , { id: 0x0304, implDate: "2020/08/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "神官戦士", name: "フェルミ/浴衣", fullName: "祭夜の神官戦士フェルミ" }
    , { id: 0x0305, implDate: "2020/08/13", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "重装砲兵", name: "レギーナ/浴衣", fullName: "夜祭の重装砲兵レギーナ" }
    , { id: 0x0306, implDate: "2020/08/27", implDate_bq: "2024/01/11", obtain: "sh", rarity: "b" , depType: "both", class: "ロケットトルーパー", name: "クレール", fullName: "飛行警備隊長クレール" }
    , { id: 0x0307, implDate: "2020/09/03", implDate_bq: "2024/02/08", obtain: "sh", rarity: "p" , depType: "van" , class: "邪仙", name: "趙紅明", fullName: "趙紅明" }
    , { id: 0x0308, implDate: "2020/09/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "モンスターブレイカー", name: "ちびテンマ", fullName: "ちびテンマ" }
    , { id: 0x0309, implDate: "2020/09/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびリアナ", fullName: "ちびリアナ" }
    , { id: 0x030a, implDate: "2020/09/10", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "ソルジャー", name: "ノーマ", fullName: "紅蓮の兵士長ノーマ" }
    , { id: 0x030b, implDate: "2020/09/10", implDate_bq: "2022/09/08", obtain: "sh", rarity: "p" , depType: "van" , class: "料理人", name: "タオパオ", fullName: "炎の厨師タオパオ" }
    , { id: 0x030c, implDate: "2020/09/10", implDate_bq: "2023/03/16", obtain: "sh", rarity: "p" , depType: "van" , class: "かまいたち", name: "金糸雀姉妹", fullName: "かまいたち金糸雀姉妹" }
    , { id: 0x030d, implDate: "2020/09/10", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "料理人", name: "ヤマブキ", fullName: "東の料理番ヤマブキ" }
    , { id: 0x030e, implDate: "2020/09/10", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "ロード", name: "メアリ", fullName: "翠花の領主メアリ" }
    , { id: 0x030f, implDate: "2020/09/10", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "van" , class: "料理人", name: "ちびオーガスタ", fullName: "ちびオーガスタ" }
    , { id: 0x0310, implDate: "2020/09/17", implDate_bq: "2022/07/14", obtain: "sh", rarity: "p" , depType: "rear", class: "発明家", name: "タバサ", fullName: "奇想の発明家タバサ" }
    , { id: 0x0311, implDate: "2020/09/17", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "アクアナイト", name: "マルスィ", fullName: "潜水騎士マルスィ" }
    , { id: 0x0312, implDate: "2020/09/17", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "シービショップ", name: "リバン", fullName: "見習い海巫女リバン" }
    , { id: 0x0313, implDate: "2020/09/24", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ランスマスター", name: "トモエ", fullName: "風花の槍士トモエ" }
    , { id: 0x0314, implDate: "2020/10/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "符術士", name: "アキラ", fullName: "符術士アキラ" }
    , { id: 0x0315, implDate: "2020/10/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ヘビーアーマー", name: "ちびディーナ", fullName: "ちびディーナ" }
    , { id: 0x0316, implDate: "2020/10/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "パイレーツ", name: "ちびミネルバ", fullName: "ちびミネルバ" }
    , { id: 0x0317, implDate: "2020/10/08", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "モンスターブレイカー", name: "レンゲ", fullName: "封妖の弓士レンゲ" }
    , { id: 0x0318, implDate: "2020/10/08", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ドラゴンシャーマン", name: "ペドラ", fullName: "易占竜ペドラ" }
    , { id: 0x0319, implDate: "2020/10/15", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ダークストーカー", name: "アンブレ/ハロウィン", fullName: "怪夜の仮装剣士アンブレ" }
    , { id: 0x031a, implDate: "2020/10/15", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ネクロマンサー", name: "メメント/ハロウィン", fullName: "菓子祭の魔術師メメント" }
    , { id: 0x031b, implDate: "2020/10/29", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "デモンサモナー", name: "リヴル/ハロウィン", fullName: "秋祭の召喚士リヴル" }
    , { id: 0x031c, implDate: "2020/10/29", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "古代魔導機兵", name: "アージェ", fullName: "万機の祖たる者アージェ" }
    , { id: 0x031d, implDate: "2020/10/29", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "rear", class: "転生魔導士", name: "アンブローズ", fullName: "巡り咲く者アンブローズ" }
    , { id: 0x031e, implDate: "2020/10/29", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "古代魔導機兵", name: "アージェ", fullName: "万機の祖たる者アージェ" }
    , { id: 0x031f, implDate: "2020/10/29", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "rear", class: "転生魔導士", name: "アンブローズ", fullName: "巡り咲く者アンブローズ" }
    , { id: 0x0320, implDate: "2020/11/05", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "アクアナイト", name: "セディナ", fullName: "潜泳騎士セディナ" }
    , { id: 0x0321, implDate: "2020/11/05", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "both", class: "スカイウォリアー", name: "鳥人戦士", fullName: "鳶翼の鳥人戦士", male: 1 }
    , { id: 0x0322, implDate: "2020/11/05", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "both", class: "スカイシューター", name: "アエロ", fullName: "雀翼の射手アエロ" }
    , { id: 0x0323, implDate: "2020/11/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびアンジェリーネ", fullName: "ちびアンジェリーネ" }
    , { id: 0x0324, implDate: "2020/11/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソードマスター", name: "ちびジークリンデ", fullName: "ちびジークリンデ" }
    , { id: 0x0325, implDate: "2020/11/12", implDate_bq: "2022/01/13", obtain: "ev", rarity: "p" , depType: "both", class: "スカイウォリアー", name: "ライノー", fullName: "鷲翼の戦士ライノー" }
    , { id: 0x0326, implDate: "2020/11/12", implDate_bq: "2021/11/11", obtain: "sh", rarity: "b" , depType: "rear", class: "メイジ", name: "テュト", fullName: "妖精賢者テュト" }
    , { id: 0x0327, implDate: "2020/11/12", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "アーチャー", name: "ポミエ", fullName: "紅玉の射手ポミエ" }
    , { id: 0x0328, implDate: "2020/11/12", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ヒーラー", name: "シンディ", fullName: "治癒術士シンディ" }
    , { id: 0x0329, implDate: "2020/11/19", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "プリンセス", name: "ヨシノ", fullName: "ヨシノ" }
    , { id: 0x032a, implDate: "2020/11/26", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "both", class: "スカイシューター", name: "オーキュ", fullName: "覚賀鳥の射手オーキュ" }
    , { id: 0x032b, implDate: "2020/11/26", implDate_bq: "2022/08/10", obtain: "sh", rarity: "b" , depType: "rear", class: "幻獣使い", name: "ツキコ", fullName: "彷徨の幻獣使いツキコ" }
    , { id: 0x032c, implDate: "2020/11/26", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "発明家", name: "ヘンドリカ", fullName: "帝国発明家ヘンドリカ" }
    , { id: 0x032d, implDate: "2020/11/26", implDate_bq: "2022/03/10", obtain: "sh", rarity: "p" , depType: "both", class: "スカウト", name: "カーナ", fullName: "帝国斥候カーナ" }
    , { id: 0x032e, implDate: "2020/11/26", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "both", class: "ロケットトルーパー", name: "ケイトリッジ", fullName: "帝国飛行士ケイトリッジ" }
    , { id: 0x032f, implDate: "2020/12/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ローグ", name: "ちびジュノン", fullName: "ちびジュノン" }
    , { id: 0x0330, implDate: "2020/12/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ドラゴンライダー", name: "ちびティファ", fullName: "ちびティファ" }
    , { id: 0x0331, implDate: "2020/12/10", implDate_bq: "2023/12/14", obtain: "ev", rarity: "b" , depType: "both", class: "スカイウォリアー", name: "パリオス", fullName: "白翼の戦士パリオス" }
    , { id: 0x0332, implDate: "2020/12/10", implDate_bq: null        , obtain: "ev", rarity: "ph", depType: "van" , class: "銀腕の神話", name: "トラム", fullName: "銀腕を掲げし者トラム" }
    , { id: 0x0333, implDate: "2020/12/10", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ドラゴンライダー", name: "ティファ/クリスマス", fullName: "聖なる銀夜ティファ" }
    , { id: 0x0334, implDate: "2020/12/10", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ダンサー", name: "ブレリア/クリスマス", fullName: "聖夜の踊り子ブレリア" }
    , { id: 0x0335, implDate: "2020/12/24", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "ダークファイター", name: "ヘイオス/クリスマス", fullName: "光と闇の聖夜ヘイオス" }
    , { id: 0x0336, implDate: "2020/12/24", implDate_bq: "2022/10/13", obtain: "sh", rarity: "b" , depType: "rear", class: "シービショップ", name: "ハルフゥ", fullName: "紫鱗の海巫女ハルフゥ" }
    , { id: 0x0337, implDate: "2020/12/24", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "狛犬", name: "コマ", fullName: "狛犬コマ" }
    , { id: 0x0338, implDate: "2020/12/24", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ウィッチ", name: "ユーティ", fullName: "森の魔女ユーティ" }
    , { id: 0x0339, implDate: "2020/12/24", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "シーソルジャー", name: "オーベッド", fullName: "魚人戦士オーベッド", male: 1 }
    
    // 2021
    , { id: 0x033a, implDate: "2021/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "魔王親衛隊", name: "シャディア/お正月", fullName: "晴着の親衛隊シャディア" }
    , { id: 0x033b, implDate: "2021/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "異界召喚士", name: "グリム/お正月", fullName: "新春召喚始めグリム" }
    , { id: 0x033c, implDate: "2021/01/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "デモンルーン", name: "エフネ/お正月", fullName: "悪魔の新春祝いエフネ" }
    , { id: 0x033d, implDate: "2021/01/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "魔王親衛隊", name: "ちびシャディア", fullName: "ちびシャディア" }
    , { id: 0x033e, implDate: "2021/01/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "呪術使い", name: "ちびオロチヒメ", fullName: "ちびオロチヒメ" }
    , { id: 0x033f, implDate: "2021/01/14", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ヴァンパイアロード", name: "エマ/温泉", fullName: "湯けむり吸血鬼エマ" }
    , { id: 0x0340, implDate: "2021/01/14", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "魔神", name: "サオシュ/温泉", fullName: "温泉の魔神憑きサオシュ" }
    , { id: 0x0341, implDate: "2021/01/28", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "アーチャー", name: "ソーマ/温泉", fullName: "弓兵の湯浴みソーマ" }
    , { id: 0x0342, implDate: "2021/01/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "忍者", name: "チヨメ", fullName: "くノ一チヨメ" }
    , { id: 0x0343, implDate: "2021/02/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "テレーゼ", fullName: "陽光の獅盾テレーゼ" }
    , { id: 0x0344, implDate: "2021/02/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ヴァンパイアロード", name: "ちびエマ", fullName: "ちびエマ" }
    , { id: 0x0345, implDate: "2021/02/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ネクロマンサー", name: "ちびメメント", fullName: "ちびメメント" }
    , { id: 0x0346, implDate: "2021/02/10", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "ワルキューレ", name: "スルーズ", fullName: "天槍騎士団スルーズ" }
    , { id: 0x0347, implDate: "2021/02/10", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "料理人", name: "オーガスタ/バレンタイン", fullName: "神業菓子職人オーガスタ" }
    , { id: 0x0348, implDate: "2021/02/10", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "前衛戦術家", name: "ルヴェア/バレンタイン", fullName: "慕情の指揮官ルヴェア" }
    , { id: 0x0349, implDate: "2021/02/25", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "神官戦士", name: "エレット/バレンタイン", fullName: "内緒の告白エレット" }
    , { id: 0x034a, implDate: "2021/02/25", implDate_bq: "2021/12/09", obtain: "sh", rarity: "b" , depType: "van" , class: "キョンシー", name: "フーロン", fullName: "幽境道士フーロン" }
    , { id: 0x034b, implDate: "2021/02/25", implDate_bq: "2022/02/10", obtain: "sh", rarity: "b" , depType: "rear", class: "フェンリルシャーマン", name: "ツァーユ", fullName: "白狼の朋ツァーユ" }
    , { id: 0x034c, implDate: "2021/02/25", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "料理人", name: "キホル", fullName: "魔界料理人キホル" }
    , { id: 0x034d, implDate: "2021/02/25", implDate_bq: "2023/08/10", obtain: "ev", rarity: "b" , depType: "van" , class: "鬼刃忍", name: "タチバナ", fullName: "鬼刃忍タチバナ" }
    , { id: 0x034e, implDate: "2021/02/25", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "rear", class: "エレメンタラー", name: "ちびルフレ", fullName: "ちびルフレ" }
    , { id: 0x034f, implDate: "2021/03/04", implDate_bq: "2023/04/13", obtain: "sh", rarity: "p" , depType: "van" , class: "スチームナイト", name: "ユカリ", fullName: "蒸気武者ユカリ" }
    , { id: 0x0350, implDate: "2021/03/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "アーチャー", name: "ちびアーシェラ", fullName: "ちびアーシェラ" }
    , { id: 0x0351, implDate: "2021/03/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ダンサー", name: "ちびミヤビ", fullName: "ちびミヤビ" }
    , { id: 0x0352, implDate: "2021/03/18", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "メイド", name: "サクラ", fullName: "東国武装女中サクラ" }
    , { id: 0x0353, implDate: "2021/03/25", implDate_bq: "2022/01/13", obtain: "sh", rarity: "b" , depType: "rear", class: "エレメンタラー", name: "ニーヴ", fullName: "混沌霊使いニーヴ" }
    , { id: 0x0354, implDate: "2021/04/01", implDate_bq: "2024/03/14", obtain: "ev", rarity: "p" , depType: "van" , class: "テンプルナイト", name: "アレクシア", fullName: "背教の騎士アレクシア" }
    , { id: 0x0355, implDate: "2021/04/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ウィッチ", name: "リエーフ", fullName: "百獣の魔術師リエーフ" }
    , { id: 0x0356, implDate: "2021/04/01", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "ソルジャー", name: "アビー", fullName: "新米兵士アビー" }
    , { id: 0x0357, implDate: "2021/04/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ドラゴンプリンセス", name: "ちびエルドラ", fullName: "ちびエルドラ" }
    , { id: 0x0358, implDate: "2021/04/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "神官戦士", name: "ちびセラ", fullName: "ちびセラ" }
    , { id: 0x0359, implDate: "2021/04/07", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "迷宮の悪霊", name: "ニミュエ", fullName: "孤独な迷宮守ニミュエ" }
    , { id: 0x035a, implDate: "2021/04/08", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "オートマタ", name: "ルイン", fullName: "自動人形ルイン" }
    , { id: 0x035b, implDate: "2021/04/08", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "デモンルーン", name: "エスネア/学園", fullName: "魔界からの留学エスネア" }
    , { id: 0x035c, implDate: "2021/04/08", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "マーチャント", name: "ミネット/学園", fullName: "ねこみみ購買部ミネット" }
    , { id: 0x035d, implDate: "2021/04/22", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "天狗", name: "ホムラ/学園", fullName: "茜色の女番長ホムラ" }
    , { id: 0x035e, implDate: "2021/04/22", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "天狗", name: "グレン/学園", fullName: "仮面の天狗教師グレン", male: 1 }
    , { id: 0x035f, implDate: "2021/04/22", implDate_bq: "2023/08/10", obtain: "sh", rarity: "p" , depType: "van" , class: "ぬりかべ", name: "シラヌイ", fullName: "ぬりかべシラヌイ" }
    , { id: 0x0360, implDate: "2021/04/22", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "かまいたち", name: "紫苑姉妹", fullName: "かまいたち紫苑姉妹" }
    , { id: 0x0361, implDate: "2021/04/28", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "銀腕の神話", name: "トラム", fullName: "銀腕を掲げし者トラム" }
    , { id: 0x0362, implDate: "2021/04/28", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "ウェポンマスター", name: "アルヴァ", fullName: "万刃を担う者アルヴァ" }
    , { id: 0x0363, implDate: "2021/04/28", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "ウェポンマスター", name: "アルヴァ", fullName: "万刃を担う者アルヴァ" }
    , { id: 0x0364, implDate: "2021/05/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "鬼", name: "ちび鬼刃姫", fullName: "ちび鬼刃姫" }
    , { id: 0x0365, implDate: "2021/05/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "風水使い", name: "ちびリンネ", fullName: "ちびリンネ" }
    , { id: 0x0366, implDate: "2021/05/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "鬼【ななリン】", name: "葵", fullName: "葵", collabo: 1 }
    , { id: 0x0367, implDate: "2021/05/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "鬼【ななリン】", name: "アイリス", fullName: "アイリス", collabo: 1 }
    , { id: 0x0368, implDate: "2021/05/27", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "鬼【ななリン】", name: "芙蓉", fullName: "芙蓉", collabo: 1 }
    , { id: 0x0369, implDate: "2021/05/27", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "アーチャー", name: "ナナリー/花嫁", fullName: "白き花嫁ナナリー" }
    , { id: 0x036a, implDate: "2021/05/27", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ドラゴンプリンセス", name: "メリュジアナ/花嫁", fullName: "竜姫婚姻譚メリュジアナ" }
    , { id: 0x036b, implDate: "2021/05/27", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "中級竜兵", name: "ウィリアス", fullName: "緑竜のウィリアス" }
    , { id: 0x036c, implDate: "2021/05/27", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "メイジ", name: "ミェール", fullName: "駆け出し魔術師ミェール" }
    , { id: 0x036d, implDate: "2021/06/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "くぐつ使い", name: "ちびウェンディ", fullName: "ちびウェンディ" }
    , { id: 0x036e, implDate: "2021/06/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "重装砲兵", name: "ちびエルミラ", fullName: "ちびエルミラ" }
    , { id: 0x036f, implDate: "2021/06/10", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "メイジアーマー", name: "シルセス/花嫁", fullName: "星天の花嫁シルセス" }
    , { id: 0x0370, implDate: "2021/06/10", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "儀式魔術師", name: "ヘカティエ", fullName: "冥界の魔術師ヘカティエ" }
    , { id: 0x0371, implDate: "2021/06/10", implDate_bq: "2023/02/09", obtain: "sh", rarity: "p" , depType: "van" , class: "料理人", name: "ユッタ", fullName: "帝国料理人ユッタ" }
    , { id: 0x0372, implDate: "2021/06/10", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "幻術士", name: "マルティナ", fullName: "帝国幻術士マルティナ" }
    , { id: 0x0373, implDate: "2021/06/10", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "重装砲兵", name: "シュペット", fullName: "帝国重装砲兵シュペット" }
    , { id: 0x0374, implDate: "2021/06/10", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "rear", class: "ダークプリースト", name: "マレブランケ", fullName: "魔神副団長マレブランケ" }
    , { id: 0x0375, implDate: "2021/06/24", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "アクアナイト", name: "ヴィアベル", fullName: "潜航騎士ヴィアベル" }
    , { id: 0x0376, implDate: "2021/06/24", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "アクアナイト", name: "キュステ", fullName: "新人潜水騎士キュステ" }
    , { id: 0x0377, implDate: "2021/07/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "メイド", name: "セーラ/水着", fullName: "水着の筆頭侍女セーラ" }
    , { id: 0x0378, implDate: "2021/07/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "グラディエーター", name: "アナトリア/水着", fullName: "灼熱の夏英雄アナトリア" }
    , { id: 0x0379, implDate: "2021/07/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "幻獣使い", name: "ツキコ/水着", fullName: "八咫の夏陽ツキコ" }
    , { id: 0x037a, implDate: "2021/07/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ロード", name: "アレイダ/水着", fullName: "海遊総督アレイダ" }
    , { id: 0x037b, implDate: "2021/07/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "くぐつ使い", name: "クリスタ/水着", fullName: "満喫海遊びクリスタ" }
    , { id: 0x037c, implDate: "2021/07/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ボウライダー", name: "マーガレット/水着", fullName: "夏の輝きマーガレット" }
    , { id: 0x037d, implDate: "2021/07/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "インペリアルナイト", name: "アリーセ/水着", fullName: "清爽騎士アリーセ" }
    , { id: 0x037e, implDate: "2021/07/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "グリフィンライダー", name: "クゥイル/水着", fullName: "真夏に薫る風クゥイル" }
    , { id: 0x037f, implDate: "2021/07/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "グリフィンライダー", name: "ちびリュクス", fullName: "ちびリュクス" }
    , { id: 0x0380, implDate: "2021/07/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヴァンパイアハンター", name: "ちびスー", fullName: "ちびスー" }
    , { id: 0x0381, implDate: "2021/07/15", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "ネクロマンサー", name: "メルアビス/水着", fullName: "冥霊たちの夏メルアビス" }
    , { id: 0x0382, implDate: "2021/07/15", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ヒーラー", name: "イーリス/水着", fullName: "癒しの涼波イーリス" }
    , { id: 0x0383, implDate: "2021/07/21", implDate_bq: "2022/02/10", obtain: "sh", rarity: "p" , depType: "van" , class: "シーソルジャー", name: "フィーヌ", fullName: "翠玉の深海兵フィーヌ" }
    , { id: 0x0384, implDate: "2021/07/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ローグ", name: "シネイド", fullName: "影刃の工作員シネイド" }
    , { id: 0x0385, implDate: "2021/07/29", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "rear", class: "ヒーラー", name: "ドゥマルデ", fullName: "異端審問官ドゥマルデ", male: 1 }
    , { id: 0x0386, implDate: "2021/08/05", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "幻術士", name: "リュティエ", fullName: "向日葵の幻リュティエ" }
    , { id: 0x0387, implDate: "2021/08/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "神官戦士", name: "ちびエクス", fullName: "ちびエクス" }
    , { id: 0x0388, implDate: "2021/08/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "猫又", name: "ちびコハル", fullName: "ちびコハル" }
    , { id: 0x0389, implDate: "2021/08/12", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ハーバリスト", name: "ローズ", fullName: "王宮薬草師ローズ" }
    , { id: 0x038a, implDate: "2021/08/12", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "雷公", name: "レミィ/浴衣", fullName: "雷雲の浴衣レミィ" }
    , { id: 0x038b, implDate: "2021/08/12", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "風伯", name: "クーコ/浴衣", fullName: "風雲の浴衣クーコ" }
    , { id: 0x038c, implDate: "2021/08/12", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "クロノウィッチ", name: "ココロ/浴衣", fullName: "お祭り夕涼みココロ" }
    , { id: 0x038d, implDate: "2021/08/12", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "アーチャー", name: "ベラ/浴衣", fullName: "晩夏の狩人ベラ" }
    , { id: 0x038e, implDate: "2021/08/26", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "霊刀つくもがみ", name: "ユキザクラ", fullName: "呪刀付喪神ユキザクラ" }
    , { id: 0x038f, implDate: "2021/08/26", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "霊刀つくもがみ", name: "フジムラサキ", fullName: "名刀付喪神フジムラサキ" }
    , { id: 0x0390, implDate: "2021/09/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "雷公", name: "ちびレミィ", fullName: "ちびレミィ" }
    , { id: 0x0391, implDate: "2021/09/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "風伯", name: "ちびクーコ", fullName: "ちびクーコ" }
    , { id: 0x0392, implDate: "2021/09/09", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "霊刀つくもがみ", name: "カザキリ", fullName: "斬刀付喪神カザキリ" }
    , { id: 0x0393, implDate: "2021/09/09", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "ワルキューレ", name: "ピューロ", fullName: "純真の槍騎兵ピューロ" }
    , { id: 0x0394, implDate: "2021/09/09", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "シーソルジャー", name: "リトヴァ", fullName: "淡紅の深海兵リトヴァ" }
    , { id: 0x0395, implDate: "2021/09/09", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "パイレーツ", name: "カリナ", fullName: "可憐海賊カリナ" }
    , { id: 0x0396, implDate: "2021/09/09", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "both", class: "スカイシューター", name: "フーザント", fullName: "黒翼の射手フーザント" }
    , { id: 0x0397, implDate: "2021/09/16", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "霊宝つくもがみ", name: "シュカ", fullName: "分福茶釜付喪神シュカ" }
    , { id: 0x0398, implDate: "2021/09/22", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "スカラー", name: "アナベラ", fullName: "知識の求道者アナベラ" }
    , { id: 0x0399, implDate: "2021/09/22", implDate_bq: "2022/05/12", obtain: "sh", rarity: "b" , depType: "van" , class: "モンスターブレイカー", name: "ランヒルド", fullName: "封魔の剣士ランヒルド" }
    , { id: 0x039a, implDate: "2021/09/22", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "戦巫女", name: "コウメ", fullName: "戦巫女コウメ" }
    , { id: 0x039b, implDate: "2021/09/22", implDate_bq: "2022/05/12", obtain: "sh", rarity: "p" , depType: "both", class: "スカウト", name: "ミリアム", fullName: "鷹目の偵察兵ミリアム" }
    , { id: 0x039c, implDate: "2021/09/22", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "重装砲兵", name: "ヴァネッサ", fullName: "鋼の重装砲兵ヴァネッサ" }
    , { id: 0x039d, implDate: "2021/09/22", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "van" , class: "キョンシー", name: "ちびフーロン", fullName: "ちびフーロン" }
    , { id: 0x039e, implDate: "2021/09/30", implDate_bq: "2023/03/16", obtain: "sh", rarity: "b" , depType: "rear", class: "夜行さん", name: "ヨユキ", fullName: "夜行さん現当主ヨユキ" }
    , { id: 0x039f, implDate: "2021/10/07", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "料理人", name: "アヅミ", fullName: "山姫アヅミ" }
    , { id: 0x03a0, implDate: "2021/10/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "メイジアーマー", name: "ちびグレース", fullName: "ちびグレース" }
    , { id: 0x03a1, implDate: "2021/10/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "モンスタースレイヤー", name: "ちびソシエ", fullName: "ちびソシエ" }
    , { id: 0x03a2, implDate: "2021/10/14", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "both", class: "スカイウォリアー", name: "パリオス/ハロウィン", fullName: "悪戯な白翼パリオス" }
    , { id: 0x03a3, implDate: "2021/10/14", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ローグ", name: "セブン/ハロウィン", fullName: "仮装盗賊セブン" }
    , { id: 0x03a4, implDate: "2021/10/28", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "エンジェル", name: "セフィーレ/ハロウィン", fullName: "天使の悪戯セフィーレ" }
    , { id: 0x03a5, implDate: "2021/10/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ソルジャー", name: "マルゴット", fullName: "帝国教導隊長マルゴット" }
    , { id: 0x03a6, implDate: "2021/10/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "サッパー", name: "カテリナ", fullName: "帝国筆頭工兵カテリナ" }
    , { id: 0x03a7, implDate: "2021/10/28", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "エルデ", fullName: "帝国重装騎士エルデ" }
    , { id: 0x03a8, implDate: "2021/10/28", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "メイジ", name: "イルマ", fullName: "帝国魔術師イルマ" }
    , { id: 0x03a9, implDate: "2021/10/28", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "鬼", name: "サザンカ", fullName: "帝国鬼娘サザンカ" }
    , { id: 0x03aa, implDate: "2021/11/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ペガサスライダー", name: "ちびエスタ", fullName: "ちびエスタ" }
    , { id: 0x03ab, implDate: "2021/11/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "パイレーツ", name: "ちびデューオ", fullName: "ちびデューオ" }
    , { id: 0x03ac, implDate: "2021/11/11", implDate_bq: "2022/12/08", obtain: "sh", rarity: "p" , depType: "rear", class: "デモンシャーマン", name: "レライエ", fullName: "魔神の共鳴者レライエ" }
    , { id: 0x03ad, implDate: "2021/11/11", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "魔法剣士", name: "マリレーヌ", fullName: "聖樹の魔剣士マリレーヌ" }
    , { id: 0x03ae, implDate: "2021/11/18", implDate_bq: "2023/11/09", obtain: "ev", rarity: "b" , depType: "rear", class: "幻術士", name: "タリエ", fullName: "奇譚の幻術士タリエ" }
    , { id: 0x03af, implDate: "2021/11/18", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "rear", class: "ライフリンカー", name: "シアーシャ", fullName: "絆鎖の救命師シアーシャ" }
    , { id: 0x03b0, implDate: "2021/11/25", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "魔導生命体", name: "ラーワル", fullName: "魔導を宿す者ラーワル" }
    , { id: 0x03b1, implDate: "2021/11/25", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "rear", class: "ファラオ", name: "ホルテウス", fullName: "獅子女の覇者ホルテウス" }
    , { id: 0x03b2, implDate: "2021/11/25", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "rear", class: "ファラオ", name: "ホルテウス", fullName: "獅子女の覇者ホルテウス" }
    , { id: 0x03b3, implDate: "2021/12/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "メイジ", name: "ちびエステル", fullName: "ちびエステル" }
    , { id: 0x03b4, implDate: "2021/12/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ネクロマンサー", name: "ちびメトゥス", fullName: "ちびメトゥス" }
    , { id: 0x03b5, implDate: "2021/12/09", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "ハーバリスト", name: "ラタトスク", fullName: "世界樹の聖霊ラタトスク" }
    , { id: 0x03b6, implDate: "2021/12/09", implDate_bq: null        , obtain: "ev", rarity: "ph", depType: "van" , class: "魔導生命体", name: "ラーワル", fullName: "魔導を宿す者ラーワル" }
    , { id: 0x03b7, implDate: "2021/12/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "スカラー", name: "フェリシア", fullName: "魔性の獣学者フェリシア" }
    , { id: 0x03b8, implDate: "2021/12/09", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "神官戦士", name: "ルチア/水着", fullName: "水辺の神官戦士ルチア" }
    , { id: 0x03b9, implDate: "2021/12/09", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "van" , class: "シャークウォリアー", name: "スカー", fullName: "怒りの鮫戦士スカー", male: 1 }
    , { id: 0x03ba, implDate: "2021/12/16", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "メイジ", name: "テュト/クリスマス", fullName: "祝福の贈り人テュト" }
    , { id: 0x03bb, implDate: "2021/12/16", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "サッパー", name: "ドリー/クリスマス", fullName: "聖なる技巧兵ドリー" }
    , { id: 0x03bc, implDate: "2021/12/29", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "前衛戦術家", name: "ヘレナ/クリスマス", fullName: "聖夜の天才戦術家ヘレナ" }
    , { id: 0x03bd, implDate: "2021/12/29", implDate_bq: "2023/07/13", obtain: "sh", rarity: "b" , depType: "van" , class: "オートマタ", name: "アルタ", fullName: "薔薇の自動人形アルタ" }
    , { id: 0x03be, implDate: "2021/12/29", implDate_bq: "2023/04/13", obtain: "sh", rarity: "b" , depType: "van" , class: "戦巫女", name: "タツミ", fullName: "影炎の戦巫女タツミ" }
    
    // 2022
    , { id: 0x03bf, implDate: "2022/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "前衛戦術家", name: "マツリ/お正月", fullName: "智将の筆始めマツリ" }
    , { id: 0x03c0, implDate: "2022/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "デモンサモナー", name: "ラピス/お正月", fullName: "大悪魔の初詣ラピス" }
    , { id: 0x03c1, implDate: "2022/01/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "真人", name: "太公望/お正月", fullName: "謹賀祝仙女 太公望" }
    , { id: 0x03c2, implDate: "2022/01/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "レンジャー", name: "ちびロヴィニア", fullName: "ちびロヴィニア" }
    , { id: 0x03c3, implDate: "2022/01/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "マーチャント", name: "ちびトトノ", fullName: "ちびトトノ" }
    , { id: 0x03c4, implDate: "2022/01/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "忍者", name: "チヨメ/温泉", fullName: "湯けむりくノ一チヨメ" }
    , { id: 0x03c5, implDate: "2022/01/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "砲術士", name: "カノン/温泉", fullName: "砲術娘の温泉旅行カノン" }
    , { id: 0x03c6, implDate: "2022/01/27", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "シーソルジャー", name: "フィーヌ/温泉", fullName: "翠玉の温泉兵フィーヌ" }
    , { id: 0x03c7, implDate: "2022/01/27", implDate_bq: "2024/02/08", obtain: "sh", rarity: "b" , depType: "van" , class: "ワルキューレ", name: "フリア", fullName: "放浪の聖騎兵フリア" }
    , { id: 0x03c8, implDate: "2022/01/27", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "シービショップ", name: "ムイル", fullName: "深慮の海巫女ムイル" }
    , { id: 0x03c9, implDate: "2022/02/03", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "サムライ", name: "ヒバリ/バレンタイン", fullName: "思慕の剣豪ヒバリ" }
    , { id: 0x03ca, implDate: "2022/02/03", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "プリンセス", name: "スクハ/バレンタイン", fullName: "恋慕の剣姫スクハ" }
    , { id: 0x03cb, implDate: "2022/02/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ヘビーアーマー", name: "ちびディーネ", fullName: "ちびディーネ" }
    , { id: 0x03cc, implDate: "2022/02/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "モンスタースレイヤー", name: "ちびドルチェ", fullName: "ちびドルチェ" }
    , { id: 0x03cd, implDate: "2022/02/17", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "アーチャー", name: "ポミエ/バレンタイン", fullName: "恋心の射手ポミエ" }
    , { id: 0x03ce, implDate: "2022/02/17", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "グランドナイト", name: "アスラハ", fullName: "熱砂の騎士アスラハ" }
    , { id: 0x03cf, implDate: "2022/02/17", implDate_bq: "2023/11/09", obtain: "sh", rarity: "p" , depType: "rear", class: "ドラゴンメイジ", name: "カラザ", fullName: "氷竜魔術士カラザ" }
    , { id: 0x03d0, implDate: "2022/02/17", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "both", class: "スカイウォリアー", name: "ポタル", fullName: "木兎翼の戦士ポタル" }
    , { id: 0x03d1, implDate: "2022/02/17", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "ドラグーン", name: "ジゼル", fullName: "焔の竜砲騎兵ジゼル" }
    , { id: 0x03d2, implDate: "2022/02/17", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "rear", class: "儀式魔術師", name: "ちびヘカティエ", fullName: "ちびヘカティエ" }
    , { id: 0x03d3, implDate: "2022/02/24", implDate_bq: "2022/11/10", obtain: "sh", rarity: "b" , depType: "both", class: "スカウト", name: "レナータ", fullName: "天眼の偵察者レナータ" }
    , { id: 0x03d4, implDate: "2022/03/03", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ドラゴンシャーマン", name: "ラウラ", fullName: "白の竜巫女ラウラ" }
    , { id: 0x03d5, implDate: "2022/03/03", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "支援工兵", name: "マルレーン", fullName: "帝国建機工兵マルレーン" }
    , { id: 0x03d6, implDate: "2022/03/03", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "デーモンロード", name: "イルムガルト", fullName: "闇炎の魔将イルムガルト" }
    , { id: 0x03d7, implDate: "2022/03/03", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "戦巫女", name: "カオル", fullName: "帝国戦巫女カオル" }
    , { id: 0x03d8, implDate: "2022/03/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "中級竜兵", name: "ちびリキュノス", fullName: "ちびリキュノス" }
    , { id: 0x03d9, implDate: "2022/03/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ボウライダー", name: "ちびリオン", fullName: "ちびリオン" }
    , { id: 0x03da, implDate: "2022/03/03", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "シーフ", name: "レーネ", fullName: "帝都の大泥棒レーネ" }
    , { id: 0x03db, implDate: "2022/03/17", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ダークファイター", name: "コーネリア/学園", fullName: "暗黒学園騎士コーネリア" }
    , { id: 0x03dc, implDate: "2022/03/17", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ソルジャー", name: "ケイティ/学園", fullName: "戦術科教師ケイティ" }
    , { id: 0x03dd, implDate: "2022/03/17", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "バンデット", name: "モーティマ/学園", fullName: "山賊食堂モーティマ", male: 1 }
    , { id: 0x03de, implDate: "2022/03/31", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "アーチャー", name: "クレア/学園", fullName: "鋼鉄の弓術部員クレア" }
    , { id: 0x03df, implDate: "2022/03/31", implDate_bq: "2022/11/10", obtain: "sh", rarity: "b" , depType: "van" , class: "かまいたち", name: "群青姉妹", fullName: "かまいたち群青姉妹" }
    , { id: 0x03e0, implDate: "2022/04/01", implDate_bq: "2023/05/11", obtain: "ev", rarity: "b" , depType: "rear", class: "発明家", name: "アルレット", fullName: "超古代発明家アルレット" }
    , { id: 0x03e1, implDate: "2022/04/07", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "鬼", name: "アクラ", fullName: "紫炎の鬼傭兵アクラ" }
    , { id: 0x03e2, implDate: "2022/04/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "グラディエーター", name: "ちびアナトリア", fullName: "ちびアナトリア" }
    , { id: 0x03e3, implDate: "2022/04/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "真人", name: "ちび竜吉公主", fullName: "ちび竜吉公主" }
    , { id: 0x03e4, implDate: "2022/04/14", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "エレメンタラー", name: "ニーヴ/バニー", fullName: "混沌うさぎの祝祭ニーヴ" }
    , { id: 0x03e5, implDate: "2022/04/14", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "魔法剣士", name: "タラニア/バニー", fullName: "黒兎の魔剣士タラニア" }
    , { id: 0x03e6, implDate: "2022/04/28", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "バンデット", name: "リーフ/バニー", fullName: "卵祭りの山賊娘リーフ" }
    , { id: 0x03e7, implDate: "2022/04/28", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "rear", class: "ピューティアー", name: "イムラウ", fullName: "生命を謳う者イムラウ" }
    , { id: 0x03e8, implDate: "2022/04/28", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "both", class: "異世界戦士", name: "エフトラ", fullName: "世界を超える者エフトラ" }
    , { id: 0x03e9, implDate: "2022/04/28", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "rear", class: "ピューティアー", name: "イムラウ", fullName: "生命を謳う者イムラウ" }
    , { id: 0x03ea, implDate: "2022/05/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソードマスター", name: "ちびヴァイス", fullName: "ちびヴァイス" }
    , { id: 0x03eb, implDate: "2022/05/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ルーンアコライト", name: "ちびエレオノーラ", fullName: "ちびエレオノーラ" }
    , { id: 0x03ec, implDate: "2022/05/12", implDate_bq: null        , obtain: "ev", rarity: "ph", depType: "both", class: "異世界戦士", name: "エフトラ", fullName: "世界を超える者エフトラ" }
    , { id: 0x03ed, implDate: "2022/05/12", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ドラゴンメイジ", name: "ロカ", fullName: "土竜魔術士ロカ" }
    , { id: 0x03ee, implDate: "2022/05/19", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ドラグーン", name: "ミカ", fullName: "流浪の竜砲騎兵ミカ" }
    , { id: 0x03ef, implDate: "2022/05/26", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "儀式魔術師", name: "メシナ", fullName: "渦潮の亜神メシナ" }
    , { id: 0x03f0, implDate: "2022/06/02", implDate_bq: "2023/01/12", obtain: "sh", rarity: "b" , depType: "van" , class: "儀仗軍神", name: "アラン", fullName: "銀月の亜神アラン" }
    , { id: 0x03f1, implDate: "2022/06/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "サムライ", name: "ちびジュウベエ", fullName: "ちびジュウベエ" }
    , { id: 0x03f2, implDate: "2022/06/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "忍者", name: "ちびハツネ", fullName: "ちびハツネ" }
    , { id: 0x03f3, implDate: "2022/06/09", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "エンジェル", name: "シェミア", fullName: "堕天使シェミア" }
    , { id: 0x03f4, implDate: "2022/06/09", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "キョンシー", name: "フーロン/花嫁", fullName: "幽境新婦フーロン" }
    , { id: 0x03f5, implDate: "2022/06/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "ベルニス/花嫁", fullName: "婚礼の大盾ベルニス" }
    , { id: 0x03f6, implDate: "2022/06/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "魔法剣士", name: "ユーティ/花嫁", fullName: "ひだまりの花嫁ユーティ" }
    , { id: 0x03f7, implDate: "2022/06/23", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "狛犬", name: "コマ/花嫁", fullName: "白無垢の狛犬コマ" }
    , { id: 0x03f8, implDate: "2022/06/23", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "料理人", name: "アシュリン", fullName: "常夜の料理人アシュリン" }
    , { id: 0x03f9, implDate: "2022/06/30", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ドラグーン", name: "イーファ", fullName: "紫風の竜砲騎兵イーファ" }
    , { id: 0x03fa, implDate: "2022/07/07", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "テンプルナイト", name: "デシレア", fullName: "光剣の神聖騎士デシレア" }
    , { id: 0x03fb, implDate: "2022/07/07", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ソルジャー", name: "アルティア/水着", fullName: "潮風の守護者アルティア" }
    , { id: 0x03fc, implDate: "2022/07/07", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "真人", name: "清源妙道真君/水着", fullName: "夏の賢仙 清源妙道真君" }
    , { id: 0x03fd, implDate: "2022/07/07", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "エンプレス", name: "ハリナ/水着", fullName: "女皇の夏季休暇ハリナ" }
    , { id: 0x03fe, implDate: "2022/07/07", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "儀式魔術師", name: "ヘカティエ/水着", fullName: "夏の月下冥神ヘカティエ" }
    , { id: 0x03ff, implDate: "2022/07/07", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "忍者", name: "ハツネ/水着", fullName: "水遁遊戯ハツネ" }
    , { id: 0x0400, implDate: "2022/07/07", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "メイド", name: "マリカ/水着", fullName: "浜辺の武術女官マリカ" }
    , { id: 0x0401, implDate: "2022/07/07", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "真人", name: "竜吉公主/水着", fullName: "夏陽海仙 竜吉公主" }
    , { id: 0x0402, implDate: "2022/07/07", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "支援工兵", name: "パトリシア/水着", fullName: "砂浜の工作兵パトリシア" }
    , { id: 0x0403, implDate: "2022/07/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ドラゴンライダー", name: "ちびスイレン", fullName: "ちびスイレン" }
    , { id: 0x0404, implDate: "2022/07/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "グランドナイト", name: "ちびアデライド", fullName: "ちびアデライド" }
    , { id: 0x0405, implDate: "2022/07/21", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "バンデット", name: "レオーネ/水着", fullName: "真夏の覇者レオーネ" }
    , { id: 0x0406, implDate: "2022/07/21", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "ソードマスター", name: "ヴァイス/水着", fullName: "白き浜辺の剣士ヴァイス" }
    , { id: 0x0407, implDate: "2022/07/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ヒーラー", name: "リアナ/浴衣", fullName: "癒しの夕涼みリアナ" }
    , { id: 0x0408, implDate: "2022/07/28", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ぬりかべ", name: "シラヌイ/浴衣", fullName: "祭夜のぬりかべシラヌイ" }
    , { id: 0x0409, implDate: "2022/07/28", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "道化師", name: "ラトゥール/浴衣", fullName: "不敗の縁日ラトゥール" }
    , { id: 0x040a, implDate: "2022/08/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "インペリアルナイト", name: "ちびディアナ", fullName: "ちびディアナ" }
    , { id: 0x040b, implDate: "2022/08/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "レンジャー", name: "ちびローザ", fullName: "ちびローザ" }
    , { id: 0x040c, implDate: "2022/08/10", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "イビルプリンセス", name: "スキュレ/浴衣", fullName: "夏祭りの金魚姫スキュレ" }
    , { id: 0x040d, implDate: "2022/08/10", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "武侠", name: "フーイェン", fullName: "豪放遊侠フーイェン" }
    , { id: 0x040e, implDate: "2022/08/10", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "砲術士", name: "リーシェ", fullName: "新米砲術士リーシェ" }
    , { id: 0x040f, implDate: "2022/08/18", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "神官戦士", name: "トゥーダ", fullName: "帝国神官戦士長トゥーダ" }
    , { id: 0x0410, implDate: "2022/08/18", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "クロノウィッチ", name: "ロミルダ", fullName: "帝国時術士ロミルダ" }
    , { id: 0x0411, implDate: "2022/08/18", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "忍者", name: "ウルスラ", fullName: "帝国忍者ウルスラ" }
    , { id: 0x0412, implDate: "2022/08/18", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "デーモンロード", name: "アブグルント", fullName: "深潭の魔将アブグルント" }
    , { id: 0x0413, implDate: "2022/08/18", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "鍛冶職人", name: "グラティア", fullName: "帝国鍛冶師グラティア" }
    , { id: 0x0414, implDate: "2022/09/01", implDate_bq: "2024/03/14", obtain: "sh", rarity: "b" , depType: "rear", class: "ロード", name: "リンクス", fullName: "金獣の領主リンクス" }
    , { id: 0x0415, implDate: "2022/09/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "both", class: "スカイシューター", name: "ラシティ", fullName: "黒翼の精鋭射手ラシティ" }
    , { id: 0x0416, implDate: "2022/09/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "前衛戦術家", name: "ちびルヴェア", fullName: "ちびルヴェア" }
    , { id: 0x0417, implDate: "2022/09/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "スチームナイト", name: "ちびイザムバード", fullName: "ちびイザムバード" }
    , { id: 0x0418, implDate: "2022/09/08", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ドラゴンメイジ", name: "コラリー", fullName: "風竜魔術士コラリー" }
    , { id: 0x0419, implDate: "2022/09/15", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "both", class: "スカイヒーラー", name: "レフカ", fullName: "鶚翼の癒し手レフカ" }
    , { id: 0x041a, implDate: "2022/09/15", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "座敷わらし", name: "エンジュ", fullName: "座敷わらしエンジュ" }
    , { id: 0x041b, implDate: "2022/09/15", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "サベージファイター", name: "ファルア", fullName: "砂漠の勇士ファルア" }
    , { id: 0x041c, implDate: "2022/09/15", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "符術士", name: "リャオレン", fullName: "符術士リャオレン" }
    , { id: 0x041d, implDate: "2022/09/15", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "シーソルジャー", name: "ムルーア", fullName: "朱珠の深海兵長ムルーア" }
    , { id: 0x041e, implDate: "2022/09/15", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびシビラ", fullName: "ちびシビラ" }
    , { id: 0x041f, implDate: "2022/09/22", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "発明家", name: "マギー", fullName: "天性の発明家マギー" }
    , { id: 0x0420, implDate: "2022/09/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "モンスタースレイヤー", name: "ソシエ/ハロウィン", fullName: "南瓜に潜む狙撃手ソシエ" }
    , { id: 0x0421, implDate: "2022/09/29", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "モンク", name: "ウル/ハロウィン", fullName: "仮装祭りの爪獣ウル" }
    , { id: 0x0422, implDate: "2022/09/29", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "デモンシャーマン", name: "レライエ/ハロウィン", fullName: "お菓子の共鳴者レライエ" }
    , { id: 0x0423, implDate: "2022/10/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "イビルプリンセス", name: "ちびミサ", fullName: "ちびミサ" }
    , { id: 0x0424, implDate: "2022/10/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "シャーマン", name: "ちびキキョウ", fullName: "ちびキキョウ" }
    , { id: 0x0425, implDate: "2022/10/13", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "プリンセス", name: "ジュリア/ハロウィン", fullName: "絢爛仮装姫ジュリア" }
    , { id: 0x0426, implDate: "2022/10/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "武将【恋姫】", name: "関羽 雲長", fullName: "関羽 雲長", collabo: 1 }
    , { id: 0x0427, implDate: "2022/10/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "小覇王【恋姫】", name: "孫策 伯符", fullName: "孫策 伯符", collabo: 1 }
    , { id: 0x0428, implDate: "2022/10/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "軍師【恋姫】", name: "諸葛亮 孔明", fullName: "諸葛亮 孔明", collabo: 1 }
    , { id: 0x0429, implDate: "2022/10/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "暴君【恋姫】", name: "董卓 仲穎", fullName: "董卓 仲穎", collabo: 1 }
    , { id: 0x042a, implDate: "2022/10/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "武将【恋姫】", name: "趙雲 子龍", fullName: "趙雲 子龍", collabo: 1 }
    , { id: 0x042b, implDate: "2022/10/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "君主【恋姫】", name: "孫権 仲謀", fullName: "孫権 仲謀", collabo: 1 }
    , { id: 0x042c, implDate: "2022/10/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "弓将【恋姫】", name: "黄蓋 公覆", fullName: "黄蓋 公覆", collabo: 1 }
    , { id: 0x042d, implDate: "2022/10/14", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "van" , class: "王女【恋姫】", name: "孫尚香", fullName: "孫尚香", collabo: 1 }
    , { id: 0x042e, implDate: "2022/10/27", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "君主【恋姫】", name: "孫堅 文台", fullName: "孫堅 文台", collabo: 1 }
    , { id: 0x042f, implDate: "2022/10/27", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ヴァンパイアハンター", name: "クルス", fullName: "古城の探索者クルス" }
    , { id: 0x0430, implDate: "2022/10/31", implDate_bq: null        , obtain: "sp", rarity: "bh", depType: "van" , class: "アヤカシの王", name: "山ン本", fullName: "山ン本五郎左衛門" }
    , { id: 0x0431, implDate: "2022/11/02", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "サベージファイター", name: "ナシート", fullName: "砂漠の傭兵ナシート" }
    , { id: 0x0432, implDate: "2022/11/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "イビルプリンセス", name: "ちびスキュレ", fullName: "ちびスキュレ" }
    , { id: 0x0433, implDate: "2022/11/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "シービショップ", name: "ちびハルフゥ", fullName: "ちびハルフゥ" }
    , { id: 0x0434, implDate: "2022/11/10", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "both", class: "スカイヒーラー", name: "イエラ", fullName: "蓑鳩翼の癒し手イエラ" }
    , { id: 0x0435, implDate: "2022/11/10", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびジェローム", fullName: "ちびジェローム", male: 1 }
    , { id: 0x0436, implDate: "2022/11/17", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "デーモンロード", name: "ヤハール", fullName: "炎天の魔将ヤハール" }
    , { id: 0x0437, implDate: "2022/11/17", implDate_bq: "2023/05/11", obtain: "sh", rarity: "p" , depType: "rear", class: "スカラー", name: "コレット", fullName: "神話学士コレット" }
    , { id: 0x0438, implDate: "2022/11/17", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "ドラゴンプリンセス", name: "ロタン", fullName: "原初の竜姫ロタン" }
    , { id: 0x0439, implDate: "2022/11/24", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "トゥルーブラッド", name: "リヴン", fullName: "永夜の始祖たる者リヴン" }
    , { id: 0x043a, implDate: "2022/11/24", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "黎明の翼", name: "ルキファ", fullName: "黎明を齎す者ルキファ" }
    , { id: 0x043b, implDate: "2022/11/24", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "黎明の翼", name: "ルキファ", fullName: "黎明を齎す者ルキファ" }
    , { id: 0x043c, implDate: "2022/11/24", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "ダークストーカー", name: "ヘンゼル", fullName: "闇使いヘンゼル", male: 1 }
    , { id: 0x043d, implDate: "2022/12/01", implDate_bq: null        , obtain: "tr", rarity: "bh", depType: "van" , class: "暁光の神話", name: "イルドナ", fullName: "暁光を導く者イルドナ", male: 1 }
    , { id: 0x043e, implDate: "2022/12/01", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "暁光の神話", name: "イルドナ", fullName: "暁光を導く者イルドナ", male: 1 }
    , { id: 0x043f, implDate: "2022/12/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "デーモンロード", name: "ちびハルモニア", fullName: "ちびハルモニア" }
    , { id: 0x0440, implDate: "2022/12/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ルーンアコライト", name: "ちびエリス", fullName: "ちびエリス" }
    , { id: 0x0441, implDate: "2022/12/08", implDate_bq: null        , obtain: "ev", rarity: "ph", depType: "van" , class: "トゥルーブラッド", name: "リヴン", fullName: "永夜の始祖たる者リヴン" }
    , { id: 0x0442, implDate: "2022/12/08", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "デーモンロード", name: "ハルモニア/クリスマス", fullName: "聖夜の魔将ハルモニア" }
    , { id: 0x0443, implDate: "2022/12/08", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ダークストーカー", name: "グレーテル/クリスマス", fullName: "聖闇の贈り主グレーテル" }
    , { id: 0x0444, implDate: "2022/12/08", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "アヤカシの王", name: "山ン本", fullName: "山ン本五郎左衛門" }
    , { id: 0x0445, implDate: "2022/12/08", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ヘビーアーマー", name: "ちびジェリウス", fullName: "ちびジェリウス", male: 1 }
    , { id: 0x0446, implDate: "2022/12/21", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ハーバリスト", name: "ローズ/クリスマス", fullName: "聖樹の薬草師ローズ" }
    , { id: 0x0447, implDate: "2022/12/21", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "霊刀つくもがみ", name: "魔王城", fullName: "魔王城", collabo: 1 }
    , { id: 0x0448, implDate: "2022/12/21", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "黒竜娘【モンスター娘TD】", name: "マウロ", fullName: "ブラックドラゴン娘マウロ", collabo: 1 }
    , { id: 0x0449, implDate: "2022/12/21", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "鬼刃忍", name: "シロガネ", fullName: "鬼刃忍シロガネ" }
    , { id: 0x044a, implDate: "2022/12/30", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "鍛冶職人", name: "ウルカノ", fullName: "火と鉄の亜神ウルカノ" }
    , { id: 0x044b, implDate: "2022/12/30", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "テンプルナイト", name: "トゥーリ", fullName: "輝天の神聖騎士トゥーリ" }
    , { id: 0x044c, implDate: "2022/12/30", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "魔界総帥", name: "アスバール", fullName: "嵐雨の亜神アスバール" }
    
    // 2023
    , { id: 0x044d, implDate: "2023/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "妖狐", name: "カヨウ/お正月", fullName: "大吉妖狐カヨウ" }
    , { id: 0x044e, implDate: "2023/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "儀式魔術師", name: "メシナ/お正月", fullName: "海神の曙光メシナ" }
    , { id: 0x044f, implDate: "2023/01/01", implDate_bq: null        , obtain: "sh", rarity: "ph", depType: "both", class: "異世界戦士", name: "エフトラ/お正月", fullName: "雪踏みの初詣エフトラ" }
    , { id: 0x0450, implDate: "2023/01/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびヨシノ", fullName: "ちびヨシノ" }
    , { id: 0x0451, implDate: "2023/01/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ドラゴンプリンセス", name: "ちびメリュジアナ", fullName: "ちびメリュジアナ" }
    , { id: 0x0452, implDate: "2023/01/12", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ドルイド", name: "フィオレ/温泉", fullName: "湯けむりの隠者フィオレ" }
    , { id: 0x0453, implDate: "2023/01/12", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "魔法剣士", name: "シエナ/温泉", fullName: "魔剣士の湯治シエナ" }
    , { id: 0x0454, implDate: "2023/01/12", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "サムライ", name: "アカネ/温泉", fullName: "旅情の剣士アカネ" }
    , { id: 0x0455, implDate: "2023/01/12", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "グレーターデーモン", name: "ちびグレーターデーモン", fullName: "ちびグレーターデーモン", male: 1 }
    , { id: 0x0456, implDate: "2023/01/19", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "小悪魔アイドル", name: "エス★エフ", fullName: "Makaidol エス★エフ" }
    , { id: 0x0457, implDate: "2023/01/26", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "both", class: "スカイヒーラー", name: "カーニア", fullName: "鷹翼の癒し手カーニア" }
    , { id: 0x0458, implDate: "2023/02/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "イモータルプリンセス", name: "ちびユーフェ", fullName: "ちびユーフェ" }
    , { id: 0x0459, implDate: "2023/02/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ダークファイター", name: "ちびヘイオス", fullName: "ちびヘイオス" }
    , { id: 0x045a, implDate: "2023/02/02", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "アイドル召喚士", name: "リノ/アイドル", fullName: "召喚系アイドル リノ" }
    , { id: 0x045b, implDate: "2023/02/02", implDate_bq: "2023/12/14", obtain: "sh", rarity: "p" , depType: "rear", class: "雪娘", name: "ふゆの", fullName: "雪女ふゆの" }
    , { id: 0x045c, implDate: "2023/02/09", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ハーバリスト", name: "ラタトスク/バレンタイン", fullName: "世界樹の恋路ラタトスク" }
    , { id: 0x045d, implDate: "2023/02/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "both", class: "スカウト", name: "ミリアム/バレンタイン", fullName: "恋の索敵作戦ミリアム" }
    , { id: 0x045e, implDate: "2023/02/09", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちび一般兵A", fullName: "ちび一般兵A", male: 1 }
    , { id: 0x045f, implDate: "2023/02/23", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ドルイド", name: "ローリエ/バレンタイン", fullName: "秘めたる想いローリエ" }
    , { id: 0x0460, implDate: "2023/02/23", implDate_bq: "2023/09/14", obtain: "sh", rarity: "b" , depType: "van" , class: "ハデスソルジャー", name: "ティルト", fullName: "冥神近衛騎士ティルト" }
    , { id: 0x0461, implDate: "2023/02/23", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ドラゴンメイジ", name: "トリシャ", fullName: "帝国黒竜魔術士トリシャ" }
    , { id: 0x0462, implDate: "2023/02/23", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "隧道掘削兵", name: "ヘーレ", fullName: "帝国掘削兵ヘーレ" }
    , { id: 0x0463, implDate: "2023/02/23", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ドラグーン", name: "デリア", fullName: "帝国竜砲騎兵デリア" }
    , { id: 0x0464, implDate: "2023/02/23", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "ローグ", name: "シュテフィ", fullName: "帝国諜報兵シュテフィ" }
    , { id: 0x0465, implDate: "2023/02/23", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "メイド", name: "ソーマ/メイド", fullName: "王宮侍女ソーマ" }
    , { id: 0x0466, implDate: "2023/02/23", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "砲術士", name: "ハイデマリー", fullName: "帝国砲術士ハイデマリー" }
    , { id: 0x0467, implDate: "2023/03/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "風伯", name: "ちびフーコ", fullName: "ちびフーコ" }
    , { id: 0x0468, implDate: "2023/03/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ランスマスター", name: "ちびトモエ", fullName: "ちびトモエ" }
    , { id: 0x0469, implDate: "2023/03/09", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "モンスターブレイカー", name: "ランヒルド/バニー", fullName: "兎祭の封剣士ランヒルド" }
    , { id: 0x046a, implDate: "2023/03/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "後衛戦術家", name: "シナト/バニー", fullName: "疾風軍師の祝福祭シナト" }
    , { id: 0x046b, implDate: "2023/03/09", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ドラゴンメイジ", name: "カラザ/バニー", fullName: "竜兎の共宴カラザ" }
    , { id: 0x046c, implDate: "2023/03/09", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "メイジ", name: "ちびヴァレリー", fullName: "ちびヴァレリー", male: 1 }
    , { id: 0x046d, implDate: "2023/03/16", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "シールダー", name: "レジナレア", fullName: "盾騎士レジナレア" }
    , { id: 0x046e, implDate: "2023/03/16", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "武侠", name: "フェイロン", fullName: "武成豪侠フェイロン" }
    , { id: 0x046f, implDate: "2023/03/23", implDate_bq: "2023/10/12", obtain: "sh", rarity: "p" , depType: "rear", class: "シービショップ", name: "イヲナミ", fullName: "龍宮の海巫女イヲナミ" }
    , { id: 0x0470, implDate: "2023/03/23", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "料理人", name: "マグリカ", fullName: "下町料理人マグリカ" }
    , { id: 0x0471, implDate: "2023/03/30", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "神獣騎士", name: "ミルドリス", fullName: "獣を統べる者ミルドリス" }
    , { id: 0x0472, implDate: "2023/03/30", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "rear", class: "カースウィスパラー", name: "モルフェサ", fullName: "災禍を律す者モルフェサ" }
    , { id: 0x0473, implDate: "2023/03/30", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "女王子", name: "女王子", fullName: "女王子" }
    , { id: 0x0474, implDate: "2023/04/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "忍者", name: "ちびチヨメ", fullName: "ちびチヨメ" }
    , { id: 0x0475, implDate: "2023/04/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "雷公", name: "ちびラミィ", fullName: "ちびラミィ" }
    , { id: 0x0476, implDate: "2023/04/06", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "神獣騎士", name: "ミルドリス", fullName: "獣を統べる者ミルドリス" }
    , { id: 0x0477, implDate: "2023/04/06", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "rear", class: "カースウィスパラー", name: "モルフェサ", fullName: "災禍を律す者モルフェサ" }
    , { id: 0x0478, implDate: "2023/04/06", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "van" , class: "儀仗軍神", name: "ちびアラン", fullName: "ちびアラン" }
    , { id: 0x0479, implDate: "2023/04/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ホーネット派魔人【ランス】", name: "魔人サテラ", fullName: "魔人サテラ", collabo: 1 }
    , { id: 0x047a, implDate: "2023/04/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "忍者【ランス】", name: "見当かなみ", fullName: "見当かなみ", collabo: 1 }
    , { id: 0x047b, implDate: "2023/04/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "魔法使い【ランス】", name: "魔想志津香", fullName: "魔想志津香", collabo: 1 }
    , { id: 0x047c, implDate: "2023/04/13", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびドゥマルデ", fullName: "ちびドゥマルデ", male: 1 }
    , { id: 0x047d, implDate: "2023/04/27", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "初代大統領【ランス】", name: "シーラ・ヘルマン", fullName: "シーラ・ヘルマン", collabo: 1 }
    , { id: 0x047e, implDate: "2023/04/27", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "サベージファイター", name: "シャジャル", fullName: "砂漠の勇者シャジャル" }
    , { id: 0x047f, implDate: "2023/04/27", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "van" , class: "戦の聖霊", name: "プロエ", fullName: "戦の聖霊プロエ" }
    , { id: 0x0480, implDate: "2023/04/27", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "rear", class: "アーチャー", name: "ナナリー/私服", fullName: "白羽の休日ナナリー" }
    , { id: 0x0481, implDate: "2023/05/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "真人", name: "ちび織姫", fullName: "ちび織姫" }
    , { id: 0x0482, implDate: "2023/05/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "アクアナイト", name: "ちびヴィアベル", fullName: "ちびヴィアベル" }
    , { id: 0x0483, implDate: "2023/05/04", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "妖狐", name: "キュウビ/学園", fullName: "留学妖狐キュウビ" }
    , { id: 0x0484, implDate: "2023/05/04", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "レンジャー", name: "ロヴィニア/学園", fullName: "陽炎の新入生ロヴィニア" }
    , { id: 0x0485, implDate: "2023/05/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "アベンジャー", name: "レティシア/学園", fullName: "蒼紅の女教師レティシア" }
    , { id: 0x0486, implDate: "2023/05/11", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "バンデット", name: "ちびモーティマ", fullName: "ちびモーティマ", male: 1 }
    , { id: 0x0487, implDate: "2023/05/18", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "サムライ", name: "サクヤ/学園", fullName: "薙刀茶道部サクヤ" }
    , { id: 0x0488, implDate: "2023/05/18", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "シールダー", name: "イール", fullName: "優しき守護盾イール" }
    , { id: 0x0489, implDate: "2023/05/18", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "真人", name: "普賢", fullName: "普賢" }
    , { id: 0x048a, implDate: "2023/05/18", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "van" , class: "一目の竜", name: "一目連", fullName: "一目連", male: 1 }
    , { id: 0x048b, implDate: "2023/05/25", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "both", class: "スカウト", name: "レナータ/花嫁", fullName: "花嫁道の偵察者レナータ" }
    , { id: 0x048c, implDate: "2023/05/25", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ドラゴンメイジ", name: "ロカ/花嫁", fullName: "花嫁土竜ロカ" }
    , { id: 0x048d, implDate: "2023/05/25", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "かまいたち", name: "金糸雀姉妹/花嫁", fullName: "婚礼つむじ風金糸雀姉妹" }
    , { id: 0x048e, implDate: "2023/05/25", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "ソルジャー", name: "ケイティ/私服", fullName: "休息の教官ケイティ" }
    , { id: 0x048f, implDate: "2023/06/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "儀仗軍神", name: "乙姫", fullName: "大海神の娘 乙姫" }
    , { id: 0x0490, implDate: "2023/06/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "天尊", name: "元始天尊", fullName: "元始天尊" }
    , { id: 0x0491, implDate: "2023/06/01", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "儀仗軍神", name: "アラン/闘兵", fullName: "銀月大祭アラン" }
    , { id: 0x0492, implDate: "2023/06/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソードマスター", name: "ちびリシェルテ", fullName: "ちびリシェルテ" }
    , { id: 0x0493, implDate: "2023/06/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "サモナー", name: "ちびファルネ", fullName: "ちびファルネ" }
    , { id: 0x0494, implDate: "2023/06/15", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "英傑の塔", name: "英傑の塔", fullName: "英傑の塔", collabo: 1 }
    , { id: 0x0495, implDate: "2023/06/15", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "both", class: "不死鳥娘【モンスター娘TD】", name: "アテエル", fullName: "フェニックス娘アテエル", collabo: 1 }
    , { id: 0x0496, implDate: "2023/06/15", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびユリアン", fullName: "ちびユリアン", male: 1 }
    , { id: 0x0497, implDate: "2023/06/21", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "rear", class: "支援の聖霊", name: "戦場に集う聖霊たち", fullName: "戦場に集う聖霊たち" }
    , { id: 0x0498, implDate: "2023/06/29", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "リッチ【闇の軍勢】", name: "リッチ", fullName: "闇の墓守リッチ" }
    , { id: 0x0499, implDate: "2023/06/29", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "van" , class: "ダーク王子", name: "ダーク王子", fullName: "ダーク王子", male: 1 }
    , { id: 0x049a, implDate: "2023/06/29", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "rear", class: "政務官【闇の軍勢】", name: "ダークアンナ", fullName: "ダークアンナ" }
    , { id: 0x049b, implDate: "2023/06/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "中級竜兵", name: "ヴルム/水着", fullName: "砂浜に立つ銀竜ヴルム" }
    , { id: 0x049c, implDate: "2023/06/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "仙人", name: "ナタク/水着", fullName: "水辺の道士ナタク" }
    , { id: 0x049d, implDate: "2023/06/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "メイジ", name: "テュト/水着", fullName: "青春賢者テュト" }
    , { id: 0x049e, implDate: "2023/06/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "風水使い", name: "リンネ/水着", fullName: "朱夏花の風水士リンネ" }
    , { id: 0x049f, implDate: "2023/06/29", implDate_bq: null        , obtain: "sh", rarity: "ph", depType: "van" , class: "銀腕の神話", name: "トラム/水着", fullName: "浜辺の看板娘トラム" }
    , { id: 0x04a0, implDate: "2023/06/29", implDate_bq: null        , obtain: "sh", rarity: "ph", depType: "rear", class: "ファラオ", name: "ホルテウス/水着", fullName: "女王の避暑ホルテウス" }
    , { id: 0x04a1, implDate: "2023/06/29", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ワルキューレ", name: "ピューロ/水着", fullName: "純真海日記ピューロ" }
    , { id: 0x04a2, implDate: "2023/06/29", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "鍛冶職人", name: "グラティア/水着", fullName: "夏空の鍛冶師グラティア" }
    , { id: 0x04a3, implDate: "2023/07/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "エンプレス", name: "ちびハリナ", fullName: "ちびハリナ" }
    , { id: 0x04a4, implDate: "2023/07/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびエリアス", fullName: "ちびエリアス" }
    , { id: 0x04a5, implDate: "2023/07/06", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "デーモンロード", name: "パヤモ", fullName: "深閑の魔将パヤモ" }
    , { id: 0x04a6, implDate: "2023/07/13", implDate_bq: null        , obtain: "ev", rarity: "ph", depType: "rear", class: "ジオマンサー", name: "サナラ/水着", fullName: "君と最高の夏サナラ" }
    , { id: 0x04a7, implDate: "2023/07/13", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヴァンパイアハンター", name: "ちびヴィンセント", fullName: "ちびヴィンセント", male: 1 }
    , { id: 0x04a8, implDate: "2023/07/20", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "処刑人", name: "サティン", fullName: "流浪の断罪者サティン" }
    , { id: 0x04a9, implDate: "2023/07/20", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "ベルニス/私服", fullName: "憧れの休日ベルニス" }
    , { id: 0x04aa, implDate: "2023/07/27", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "料理人", name: "デルフィーナ", fullName: "食の芸術家デルフィーナ" }
    , { id: 0x04ab, implDate: "2023/08/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ローグ", name: "ちびシネイド", fullName: "ちびシネイド" }
    , { id: 0x04ac, implDate: "2023/08/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "グリフィンライダー", name: "ちびクゥイル", fullName: "ちびクゥイル" }
    , { id: 0x04ad, implDate: "2023/08/04", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "砲術士", name: "ハリンヘイム", fullName: "号砲の亜神ハリンヘイム" }
    , { id: 0x04ae, implDate: "2023/08/04", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "対魔忍 超人【対魔忍】", name: "井河アサギ", fullName: "井河アサギ", collabo: 1 }
    , { id: 0x04af, implDate: "2023/08/04", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "対魔忍 超人【対魔忍】", name: "秋山凜子", fullName: "秋山凜子", collabo: 1 }
    , { id: 0x04b0, implDate: "2023/08/04", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "both", class: "対魔忍 自然【対魔忍】", name: "水城ゆきかぜ", fullName: "水城ゆきかぜ", collabo: 1 }
    , { id: 0x04b1, implDate: "2023/08/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "対魔忍 魔性【対魔忍】", name: "心願寺紅", fullName: "心願寺紅", collabo: 1 }
    , { id: 0x04b2, implDate: "2023/08/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "対魔忍 魔性【対魔忍】", name: "フェリシア", fullName: "フェリシア", collabo: 1 }
    , { id: 0x04b3, implDate: "2023/08/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "対魔忍 精神【対魔忍】", name: "ふうま時子", fullName: "ふうま時子", collabo: 1 }
    , { id: 0x04b4, implDate: "2023/08/04", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "van" , class: "ロイヤルガード", name: "アリシア/対魔忍", fullName: "対魔忍アリシア" }
    , { id: 0x04b5, implDate: "2023/08/04", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "van" , class: "対魔忍 科学【対魔忍】", name: "甲河アスカ", fullName: "甲河アスカ", collabo: 1 }
    , { id: 0x04b6, implDate: "2023/08/04", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "both", class: "対魔忍 自然【対魔忍】", name: "井河さくら", fullName: "井河さくら", collabo: 1 }
    , { id: 0x04b7, implDate: "2023/08/10", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ゴブリン博士", name: "ちびゴブリン博士", fullName: "ちびゴブリン博士", male: 1 }
    , { id: 0x04b8, implDate: "2023/08/18", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "対魔忍 超人【対魔忍】", name: "鬼崎きらら", fullName: "鬼崎きらら", collabo: 1 }
    , { id: 0x04b9, implDate: "2023/08/18", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "処刑人", name: "リムリィ", fullName: "虚月の断罪者リムリィ" }
    , { id: 0x04ba, implDate: "2023/08/18", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "ガンスリンガー", name: "トネール", fullName: "荒野の旋風トネール" }
    , { id: 0x04bb, implDate: "2023/08/18", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "後衛戦術家", name: "レオナ/私服", fullName: "就寝前のひとときレオナ" }
    , { id: 0x04bc, implDate: "2023/08/24", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "パイレーツ", name: "デューオ/浴衣", fullName: "お祭大好き海賊デューオ" }
    , { id: 0x04bd, implDate: "2023/08/24", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "エンジェル", name: "ミルノ/浴衣", fullName: "花火空の天使長ミルノ" }
    , { id: 0x04be, implDate: "2023/08/24", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "砲術士", name: "メル/浴衣", fullName: "夏の花火師メル" }
    , { id: 0x04bf, implDate: "2023/08/31", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "王国軍初代副司令", name: "ヴィディア", fullName: "戦禍を断つ者ヴィディア" }
    , { id: 0x04c0, implDate: "2023/08/31", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "大華の神話", name: "徐華", fullName: "大華の母たる者 徐華" }
    , { id: 0x04c1, implDate: "2023/08/31", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "王国軍初代副司令", name: "ヴィディア", fullName: "戦禍を断つ者ヴィディア" }
    , { id: 0x04c2, implDate: "2023/08/31", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "大華の神話", name: "徐華", fullName: "大華の母たる者 徐華" }
    , { id: 0x04c3, implDate: "2023/09/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "サムライ", name: "ちびヒバリ", fullName: "ちびヒバリ" }
    , { id: 0x04c4, implDate: "2023/09/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "道化師", name: "ちびラトゥール", fullName: "ちびラトゥール" }
    , { id: 0x04c5, implDate: "2023/09/14", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "メイジ", name: "バスティス", fullName: "砂漠の亜神バスティス" }
    , { id: 0x04c6, implDate: "2023/09/14", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "マーチャント", name: "ノストラ", fullName: "闇商人ノストラ" }
    , { id: 0x04c7, implDate: "2023/09/14", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "ヒーラー", name: "イーリス/私服", fullName: "癒しの囁き夜話イーリス" }
    , { id: 0x04c8, implDate: "2023/09/14", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "中級竜兵", name: "ちびサーベイン", fullName: "ちびサーベイン", male: 1 }
    , { id: 0x04c9, implDate: "2023/09/21", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "both", class: "スカイヒーラー", name: "ジタリス", fullName: "柄長翼の癒し手ジタリス" }
    , { id: 0x04ca, implDate: "2023/09/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "隧道掘削兵", name: "ミュレ", fullName: "帝国掘削教官ミュレ" }
    , { id: 0x04cb, implDate: "2023/09/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "儀式魔術師", name: "ヘリューズ", fullName: "死氷の亜神ヘリューズ" }
    , { id: 0x04cc, implDate: "2023/09/28", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "スカラー", name: "ジェニー", fullName: "帝国人間学者ジェニー" }
    , { id: 0x04cd, implDate: "2023/09/28", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ガンスリンガー", name: "パラベル", fullName: "帝国銃撃士パラベル" }
    , { id: 0x04ce, implDate: "2023/09/28", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "both", class: "エアセイラー", name: "フォーラ", fullName: "帝国飛艦士フォーラ" }
    , { id: 0x04cf, implDate: "2023/09/28", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "ソードマスター", name: "イルヴィ", fullName: "創道の血統イルヴィ" }
    , { id: 0x04d0, implDate: "2023/10/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "重装砲兵", name: "ちびレギーナ", fullName: "ちびレギーナ" }
    , { id: 0x04d1, implDate: "2023/10/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "天狗", name: "ちびクラマ", fullName: "ちびクラマ" }
    , { id: 0x04d2, implDate: "2023/10/12", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "雷公", name: "レミィ/ハロウィン", fullName: "怪祭の雷雲レミィ" }
    , { id: 0x04d3, implDate: "2023/10/12", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "風伯", name: "クーコ/ハロウィン", fullName: "秋祭の風雲クーコ" }
    , { id: 0x04d4, implDate: "2023/10/12", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "スカラー", name: "コレット/ハロウィン", fullName: "秋の民俗学士コレット" }
    , { id: 0x04d5, implDate: "2023/10/12", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "中級竜兵", name: "ウィリアス/ハロウィン", fullName: "菓子祭の緑竜ウィリアス" }
    , { id: 0x04d6, implDate: "2023/10/12", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "アーチャー", name: "ダニエラ/私服", fullName: "晴天鍛錬の休日ダニエラ" }
    , { id: 0x04d7, implDate: "2023/10/12", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "モンスタースレイヤー", name: "ちびラルフ", fullName: "ちびラルフ", male: 1 }
    , { id: 0x04d8, implDate: "2023/10/19", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "勇士【恋姫】", name: "呂布 奉先", fullName: "呂布 奉先", collabo: 1 }
    , { id: 0x04d9, implDate: "2023/10/19", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "武将【恋姫】", name: "曹仁", fullName: "曹仁", collabo: 1 }
    , { id: 0x04da, implDate: "2023/10/19", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "rear", class: "軍師【恋姫】", name: "賈駆", fullName: "賈駆", collabo: 1 }
    , { id: 0x04db, implDate: "2023/10/26", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "シャーマン", name: "ヒミコ", fullName: "星神の巫女ヒミコ" }
    , { id: 0x04dc, implDate: "2023/11/01", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "マギステルミリトゥム", name: "ランシェ", fullName: "勝利へ導く者ランシェ" }
    , { id: 0x04dd, implDate: "2023/11/01", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "rear", class: "未踏海域の覇者", name: "イヴリール", fullName: "大海を征く者イヴリール" }
    , { id: 0x04de, implDate: "2023/11/01", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "メイド", name: "ファニュア", fullName: "吸血給仕ファニュア" }
    , { id: 0x04df, implDate: "2023/11/01", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "マギステルミリトゥム", name: "ランシェ", fullName: "勝利へ導く者ランシェ" }
    , { id: 0x04e0, implDate: "2023/11/01", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "rear", class: "未踏海域の覇者", name: "イヴリール", fullName: "大海を征く者イヴリール" }
    , { id: 0x04e1, implDate: "2023/11/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "エンジェル", name: "ちびミルノ", fullName: "ちびミルノ" }
    , { id: 0x04e2, implDate: "2023/11/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "モンスターブレイカー", name: "ちびランヒルド", fullName: "ちびランヒルド" }
    , { id: 0x04e3, implDate: "2023/11/09", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "シャーマン", name: "イヨ", fullName: "星神の依代イヨ" }
    , { id: 0x04e4, implDate: "2023/11/09", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "ウィッチ", name: "クロリス/私服", fullName: "魔女のお誘いクロリス" }
    , { id: 0x04e5, implDate: "2023/11/09", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ダークファイター", name: "ちび暗黒騎士", fullName: "ちび暗黒騎士", male: 1 }
    , { id: 0x04e6, implDate: "2023/11/16", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "白の帝国城", name: "白の帝国城", fullName: "白の帝国城", collabo: 1 }
    , { id: 0x04e7, implDate: "2023/11/22", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "神話の継承者", name: "アキレア", fullName: "武勇の半神アキレア" }
    , { id: 0x04e8, implDate: "2023/11/22", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "デモンリドゥ", name: "ウェパル", fullName: "魔神の残滓ウェパル" }
    , { id: 0x04e9, implDate: "2023/11/22", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "カオスルーラー", name: "イコル", fullName: "謀略の亜神イコル" }
    , { id: 0x04ea, implDate: "2023/11/22", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "時の俯瞰者", name: "クロノシア", fullName: "時の亜神クロノシア" }
    , { id: 0x04eb, implDate: "2023/11/30", implDate_bq: null        , obtain: "sp", rarity: "ph", depType: "both", class: "異世界戦士", name: "エフトラ/最終決戦仕様", fullName: "最終決戦仕様エフトラ" }
    , { id: 0x04ec, implDate: "2023/12/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "犬神", name: "ちびツムジ", fullName: "ちびツムジ" }
    , { id: 0x04ed, implDate: "2023/12/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "オートマタ", name: "ちびアルタ", fullName: "ちびアルタ" }
    , { id: 0x04ee, implDate: "2023/12/07", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "プリンセス", name: "シビラ/聖剣", fullName: "聖剣姫シビラ" }
    , { id: 0x04ef, implDate: "2023/12/07", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "神話の継承者", name: "ペルセナス", fullName: "綺譚の半神ペルセナス" }
    , { id: 0x04f0, implDate: "2023/12/07", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "both", class: "エアセイラー", name: "アヴィリコ", fullName: "開拓飛艦士アヴィリコ" }
    , { id: 0x04f1, implDate: "2023/12/07", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "風水使い", name: "クーシン", fullName: "武門の風水士クーシン" }
    , { id: 0x04f2, implDate: "2023/12/07", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "rear", class: "魔界総帥", name: "ちびアスバール", fullName: "ちびアスバール" }
    , { id: 0x04f3, implDate: "2023/12/14", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ヴァンパイアハンター", name: "クルス/クリスマス", fullName: "聖夜の訪問者クルス" }
    , { id: 0x04f4, implDate: "2023/12/14", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "魔物使い", name: "ブランシュ/クリスマス", fullName: "魔物と聖夜ブランシュ" }
    , { id: 0x04f5, implDate: "2023/12/14", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "both", class: "スカイシューター", name: "アエロ/クリスマス", fullName: "聖なる雀翼アエロ" }
    , { id: 0x04f6, implDate: "2023/12/14", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "皇帝", name: "ちび白の皇帝", fullName: "ちび白の皇帝", male: 1 }
    , { id: 0x04f7, implDate: "2023/12/28", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "幻術士", name: "マルティナ/クリスマス", fullName: "粉雪の夢想劇マルティナ" }
    , { id: 0x04f8, implDate: "2023/12/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "邪仙", name: "聞忠", fullName: "聞忠" }
    , { id: 0x04f9, implDate: "2023/12/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "武侠", name: "誅子", fullName: "誅子" }
    
    // 2024
    , { id: 0x04fa, implDate: "2024/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ヴァンパイアプリンセス", name: "シルヴィア/お正月", fullName: "新年吸血道中シルヴィア" }
    , { id: 0x04fb, implDate: "2024/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "儀仗軍神", name: "アラン/お正月", fullName: "祝賀の亜神アラン" }
    , { id: 0x04fc, implDate: "2024/01/01", implDate_bq: null        , obtain: "sh", rarity: "ph", depType: "rear", class: "ピューティアー", name: "イムラウ/お正月", fullName: "迎春の巫女イムラウ" }
    , { id: 0x04fd, implDate: "2024/01/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "料理人", name: "アヅミ/お正月", fullName: "御節職人アヅミ" }
    , { id: 0x04fe, implDate: "2024/01/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "魔法剣士", name: "ちびシエナ", fullName: "ちびシエナ" }
    , { id: 0x04ff, implDate: "2024/01/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "戦巫女", name: "ちびタツミ", fullName: "ちびタツミ" }
    , { id: 0x0500, implDate: "2024/01/04", implDate_bq: null        , obtain: "ev", rarity: "gc", depType: "van" , class: "シャークウォリアー", name: "ちびスカー", fullName: "ちびスカー", male: 1 }
    , { id: 0x0501, implDate: "2024/01/11", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "グラディエーター", name: "アナトリア/温泉", fullName: "闘志の癒し湯アナトリア" }
    , { id: 0x0502, implDate: "2024/01/11", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ドラグーン", name: "ミカ/温泉", fullName: "温泉放浪騎ミカ" }
    , { id: 0x0503, implDate: "2024/01/11", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ビショップ", name: "ちびマリウス", fullName: "ちびマリウス", male: 1 }
    , { id: 0x0504, implDate: "2024/01/25", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "モンク", name: "モモ/温泉", fullName: "温泉鉄甲モモ" }
    , { id: 0x0505, implDate: "2024/01/25", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "雪娘", name: "しづり", fullName: "冬姫しづり" }
    , { id: 0x0506, implDate: "2024/01/25", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "発明家", name: "レクテ", fullName: "魔電流の発明家レクテ" }
    , { id: 0x0507, implDate: "2024/01/25", implDate_bq: null        , obtain: "sp", rarity: "b" , depType: "rear", class: "ウィッチ", name: "アンジェラ", fullName: "王国の魔女アンジェラ" }
    , { id: 0x0508, implDate: "2024/02/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "魔王親衛隊", name: "シャディア/バレンタイン", fullName: "恋の親衛隊シャディア" }
    , { id: 0x0509, implDate: "2024/02/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "アーチャー", name: "キャロット/バレンタイン", fullName: "ハートの射手キャロップ" }
    , { id: 0x050a, implDate: "2024/02/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "デモンルーン", name: "ちびエスネア", fullName: "ちびエスネア" }
    , { id: 0x050b, implDate: "2024/02/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "デモンルーン", name: "ちびエフネ", fullName: "ちびエフネ" }
    , { id: 0x050c, implDate: "2024/02/08", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "天狗", name: "ちびグレン", fullName: "ちびグレン", male: 1 }
    , { id: 0x050d, implDate: "2024/02/15", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ダンサー", name: "ワルツ/バレンタイン", fullName: "恋情の踊り子ワルツ" }
    , { id: 0x050e, implDate: "2024/02/15", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ぬりかべ", name: "カゴメ", fullName: "ぬりかべカゴメ" }
    , { id: 0x050f, implDate: "2024/02/15", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "処刑人", name: "ルイゼット", fullName: "緋憶の断罪者ルイゼット" }
    , { id: 0x0510, implDate: "2024/02/15", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "衛士", name: "ダルティエ", fullName: "萌芽の衛者ダルティエ" }
    , { id: 0x0511, implDate: "2024/02/15", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ガンスリンガー", name: "シルヴァーナ", fullName: "麗しき銀銃シルヴァーナ" }
    , { id: 0x0512, implDate: "2024/02/15", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "武侠", name: "ジンレイ", fullName: "暗天孤星ジンレイ" }
    , { id: 0x0513, implDate: "2024/02/22", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "サベージファイター", name: "シェラハウト", fullName: "砂漠の双刃シェラハウト" }
    , { id: 0x0514, implDate: "2024/02/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "アイギス神殿", name: "アイギス神殿", fullName: "アイギス神殿", collabo: 1 }
    , { id: 0x0515, implDate: "2024/02/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "百腕娘【モンスター娘TD】", name: "ラキオン", fullName: "ヘカトンケイル娘ラキオン", collabo: 1 }
    , { id: 0x0516, implDate: "2024/02/29", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "デモンルーン", name: "ロゼリン", fullName: "深紅の廻魔ロゼリン" }
    , { id: 0x0517, implDate: "2024/02/29", implDate_bq: null        , obtain: "sp", rarity: "b" , depType: "both", class: "帝国アイドル", name: "ツキコ★トゥーダ", fullName: "帝国歌姫ツキコ★トゥーダ" }
    , { id: 0x0518, implDate: "2024/03/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "後衛戦術家", name: "ちびイリオス", fullName: "ちびイリオス" }
    , { id: 0x0519, implDate: "2024/03/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ロード", name: "ちびメアリ", fullName: "ちびメアリ" }
    , { id: 0x051a, implDate: "2024/03/14", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "王国民的アイドル", name: "女王子/アイドル", fullName: "王国民的アイドル女王子" }
    , { id: 0x051b, implDate: "2024/03/14", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "霊刀つくもがみ", name: "シラハユリ", fullName: "鉄刀付喪神シラハユリ" }
    , { id: 0x051c, implDate: "2024/03/14", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "シーソルジャー", name: "カウリオ", fullName: "逆戟の勇士カウリオ" }
    , { id: 0x051d, implDate: "2024/03/14", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ローグ", name: "ちびヴィクター", fullName: "ちびヴィクター", male: 1 }
    , { id: 0x051e, implDate: "2024/03/21", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "シールダー", name: "クリッペ", fullName: "帝国聖盾騎士クリッペ" }
    , { id: 0x051f, implDate: "2024/03/21", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ハデスシャーマン", name: "オルフィー", fullName: "冥府の巫女オルフィー" }
    , { id: 0x0520, implDate: "2024/03/21", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "モンク", name: "キンドライヒ", fullName: "帝国猟犬キンドライヒ" }
    , { id: 0x0521, implDate: "2024/03/21", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ハデスソルジャー", name: "リチュエ", fullName: "冥界巡衛騎士リチュエ" }
    , { id: 0x0522, implDate: "2024/03/21", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "メディック", name: "ジュディス", fullName: "帝国医官ジュディス" }
    , { id: 0x0523, implDate: "2024/03/21", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "van" , class: "ヘビーアーマー", name: "ラビリス", fullName: "秩序の亜神ラビリス" }
    , { id: 0x0524, implDate: "2024/04/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "デーモンロード", name: "ちびアブグルント", fullName: "ちびアブグルント" }
    , { id: 0x0525, implDate: "2024/04/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびアウローラ", fullName: "ちびアウローラ" }
    , { id: 0x0526, implDate: "2024/04/04", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ルーンアコライト", name: "エレオノーラ/バニー", fullName: "兎祭司教エレオノーラ" }
    , { id: 0x0527, implDate: "2024/04/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "メイジ", name: "イルマ/バニー", fullName: "帝兎の魔術師イルマ" }
    , { id: 0x0528, implDate: "2024/04/04", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "モンク", name: "リーザ/バニー", fullName: "祝兎の拳リーザ" }
    
    
    
    
    /*
    , { id: 0x, implDate: "", implDate_bq: "", obtain: "", rarity: "" , depType: "van" , class: "", name: "", fullName: "" }
    , { id: 0x, implDate: "", implDate_bq: "", obtain: "", rarity: "" , depType: "rear", class: "", name: "", fullName: "" }
    , { id: 0x, implDate: "", implDate_bq: "", obtain: "", rarity: "" , depType: "both", class: "", name: "", fullName: "" }
    , male: 1
    , collabo: 1
    */
];

/*

    obtain
        sh  召喚
        ev  イベント
        tr  交換
        sp  配布/パック/シリアルコード
    
    rarity
        bh b ph p g s sl gc
    
    depType
        van rear both

*/
