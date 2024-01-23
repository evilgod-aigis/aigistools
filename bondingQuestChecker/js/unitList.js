const unitList = [
    // 2013
    { implDate: "2013/11/26", implDate_bq: "2018/04/19", obtain: "sh", rarity: "b" , depType: "van" , class: "ヘビーアーマー", name: "ディーナ", fullName: "怪力少女ディーナ" }
    , { implDate: "2013/11/26", implDate_bq: "2017/10/26", obtain: "sh", rarity: "b" , depType: "van" , class: "ワルキューレ", name: "クリッサ", fullName: "一角獣騎士クリッサ" }
    , { implDate: "2013/11/26", implDate_bq: "2016/02/25", obtain: "sh", rarity: "b" , depType: "van" , class: "ローグ", name: "ベルナ", fullName: "盗賊ベルナ" }
    , { implDate: "2013/11/26", implDate_bq: "2020/11/19", obtain: "sh", rarity: "b" , depType: "van" , class: "プリンセス", name: "シビラ", fullName: "シビラ" }
    , { implDate: "2013/11/26", implDate_bq: "2016/08/04", obtain: "sh", rarity: "b" , depType: "rear", class: "アーチャー", name: "ナナリー", fullName: "白き射手ナナリー" }
    , { implDate: "2013/11/26", implDate_bq: "2016/02/25", obtain: "sh", rarity: "b" , depType: "rear", class: "ヒーラー", name: "イリス", fullName: "聖女イリス" }
    , { implDate: "2013/11/26", implDate_bq: "2016/03/10", obtain: "sh", rarity: "b" , depType: "rear", class: "ウィッチ", name: "デスピア", fullName: "魔女デスピア" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ソルジャー", name: "ジェローム", fullName: "用兵家ジェローム", male: 1 }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ワルキューレ", name: "テティス", fullName: "白百合騎士テティス" }
    , { implDate: "2013/11/26", implDate_bq: "2017/04/13", obtain: "sh", rarity: "p" , depType: "van" , class: "ワルキューレ", name: "ダリア", fullName: "黒槍騎士ダリア" }
    , { implDate: "2013/11/26", implDate_bq: "2016/04/14", obtain: "sh", rarity: "p" , depType: "van" , class: "ローグ", name: "シプリア", fullName: "盗賊シプリア" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "プリンセス", name: "リリア", fullName: "リリア" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "プリンセス", name: "シェリー", fullName: "シェリー" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "アーチャー", name: "バシラ", fullName: "神速の射手バシラ" }
    , { implDate: "2013/11/26", implDate_bq: "2016/02/25", obtain: "sh", rarity: "p" , depType: "rear", class: "ヒーラー", name: "カミラ", fullName: "癒し手カミラ" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ウィッチ", name: "フィグネリア", fullName: "魔女フィグネリア" }
    , { implDate: "2013/11/26", implDate_bq: "2016/06/09", obtain: "sh", rarity: "p" , depType: "rear", class: "ウィッチ", name: "アデル", fullName: "魔女アデル" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "ソルジャー", name: "ユリアン", fullName: "兵士長ユリアン", male: 1 }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "ヘビーアーマー", name: "ギャレット", fullName: "破壊者ギャレット", male: 1 }
    , { implDate: "2013/11/26", implDate_bq: "2016/02/25", obtain: "sh", rarity: "g" , depType: "van" , class: "ヘビーアーマー", name: "ベルニス", fullName: "大盾の乙女ベルニス" }
    , { implDate: "2013/11/26", implDate_bq: "2017/06/29", obtain: "sh", rarity: "g" , depType: "van" , class: "ワルキューレ", name: "キャリー", fullName: "槍騎兵キャリー" }
    , { implDate: "2013/11/26", implDate_bq: "2017/05/25", obtain: "sh", rarity: "g" , depType: "van" , class: "ローグ", name: "キュテリ", fullName: "怪盗キュテリ" }
    , { implDate: "2013/11/26", implDate_bq: "2021/03/18", obtain: "sh", rarity: "g" , depType: "van" , class: "ローグ", name: "ベティ", fullName: "盗賊ベティ" }
    , { implDate: "2013/11/26", implDate_bq: "2016/02/25", obtain: "sh", rarity: "g" , depType: "van" , class: "プリンセス", name: "テミス", fullName: "テミス" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "バンデット", name: "コンラッド", fullName: "山賊王コンラッド", male: 1 }
    , { implDate: "2013/11/26", implDate_bq: "2019/09/26", obtain: "sh", rarity: "g" , depType: "rear", class: "アーチャー", name: "クレア", fullName: "鋼鉄弓クレア" }
    , { implDate: "2013/11/26", implDate_bq: "2018/03/15", obtain: "sh", rarity: "g" , depType: "rear", class: "アーチャー", name: "ベラ", fullName: "狩人ベラ" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "メイジ", name: "バルバストラフ", fullName: "賢者バルバストラフ", male: 1 }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "メイジ", name: "サイラス", fullName: "黒衣のサイラス", male: 1 }
    , { implDate: "2013/11/26", implDate_bq: "2016/05/12", obtain: "sh", rarity: "g" , depType: "rear", class: "ヒーラー", name: "イーリス", fullName: "癒し手イーリス" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ヒーラー", name: "フェドラ", fullName: "狂聖女フェドラ" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ソルジャー", name: "クレイブ", fullName: "傭兵クレイブ", male: 1 }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ソルジャー", name: "フィリス", fullName: "新緑の兵士フィリス" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ヘビーアーマー", name: "ベルナール", fullName: "金色の盾ベルナール", male: 1 }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ヘビーアーマー", name: "レアン", fullName: "鋼鉄の女レアン" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ワルキューレ", name: "エレイン", fullName: "槍騎兵エレイン" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ワルキューレ", name: "ミーシャ", fullName: "見習い騎兵ミーシャ" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ローグ", name: "セシリー", fullName: "暗殺者セシリー" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ローグ", name: "ハリッサ", fullName: "女盗賊ハリッサ" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "バンデット", name: "モーティマ", fullName: "山賊頭モーティマ", male: 1 }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "バンデット", name: "フューネス", fullName: "狂戦士フューネス", male: 1 }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "アーチャー", name: "ソーマ", fullName: "弓兵ソーマ" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "アーチャー", name: "ダニエラ", fullName: "弓兵ダニエラ" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "メイジ", name: "ヴァレリー", fullName: "魔導師ヴァレリー", male: 1 }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ヒーラー", name: "アリサ", fullName: "癒し手アリサ" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ヒーラー", name: "ドルカ", fullName: "癒し手ドルカ" }
    , { implDate: "2013/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ウィッチ", name: "カリオペ", fullName: "魔女カリオペ" }
    , { implDate: "2013/11/26", implDate_bq: "2016/03/10", obtain: "ev", rarity: "g" , depType: "rear", class: "ウィッチ", name: "クロリス", fullName: "白き魔女クロリス" }
    , { implDate: "2013/11/28", implDate_bq: "2016/03/10", obtain: "sh", rarity: "p" , depType: "rear", class: "アーチャー", name: "ヴィクトリア", fullName: "魔狩人ヴィクトリア" }
    , { implDate: "2013/12/03", implDate_bq: "2017/01/19", obtain: "sh", rarity: "p" , depType: "rear", class: "メイジ", name: "ガラニア", fullName: "神秘の探究者ガラニア" }
    , { implDate: "2013/12/03", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "メイジ", name: "メーリス", fullName: "見習い魔術師メーリス" }
    , { implDate: "2013/12/17", implDate_bq: "2017/08/10", obtain: "ev", rarity: "g" , depType: "van" , class: "ソルジャー", name: "アリア", fullName: "副官アリア" }
    , { implDate: "2013/12/17", implDate_bq: "2016/12/08", obtain: "sh", rarity: "p" , depType: "van" , class: "バンデット", name: "ライラ", fullName: "女山賊ライラ" }
    , { implDate: "2013/12/17", implDate_bq: "2016/03/10", obtain: "ev", rarity: "p" , depType: "rear", class: "ウィッチ", name: "ベリンダ", fullName: "白き魔女ベリンダ" }
    , { implDate: "2013/12/20", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "ジェリウス", fullName: "光の盾ジェリウス", male: 1 }
    , { implDate: "2013/12/20", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "アーチャー", name: "ストレイ", fullName: "狩人ストレイ", male: 1 }
    , { implDate: "2013/12/27", implDate_bq: "2018/06/14", obtain: "sh", rarity: "p" , depType: "van" , class: "バンデット", name: "セリア", fullName: "聖霊の友セリア" }
    , { implDate: "2013/12/27", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ヒーラー", name: "クリストファー", fullName: "神官クリストファー", male: 1 }
    
    // 2014
    , { implDate: "2014/01/06", implDate_bq: "2018/06/14", obtain: "ev", rarity: "p" , depType: "rear", class: "メイジ", name: "モルディベート", fullName: "モルディベート" }
    , { implDate: "2014/01/08", implDate_bq: "2016/02/25", obtain: "sh", rarity: "p" , depType: "van" , class: "サムライ", name: "アカネ", fullName: "剣士アカネ" }
    , { implDate: "2014/01/08", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "パイレーツ", name: "モニカ", fullName: "駆け出し海賊モニカ" }
    , { implDate: "2014/01/14", implDate_bq: "2016/04/28", obtain: "tr", rarity: "b" , depType: "van" , class: "忍者", name: "サキ", fullName: "忍者サキ" }
    , { implDate: "2014/01/16", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "パイレーツ", name: "ミネルバ", fullName: "伝説の海賊ミネルバ" }
    , { implDate: "2014/01/16", implDate_bq: "2017/10/26", obtain: "sh", rarity: "p" , depType: "rear", class: "パイレーツ", name: "レイチェル", fullName: "海賊レイチェル" }
    , { implDate: "2014/01/22", implDate_bq: "2016/08/04", obtain: "sh", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "マリーベル", fullName: "聖戦士マリーベル" }
    , { implDate: "2014/01/29", implDate_bq: "2017/06/29", obtain: "sh", rarity: "p" , depType: "van" , class: "サムライ", name: "サクヤ", fullName: "薙刀剣士サクヤ" }
    , { implDate: "2014/01/29", implDate_bq: "2016/04/28", obtain: "sh", rarity: "p" , depType: "van" , class: "忍者", name: "ヒナ", fullName: "忍者ヒナ" }
    , { implDate: "2014/02/04", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "中級竜兵", name: "ガドラス", fullName: "青竜のガドラス", male: 1 }
    , { implDate: "2014/02/12", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "ドラゴンプリンセス", name: "アーニャ", fullName: "竜姫アーニャ" }
    , { implDate: "2014/02/12", implDate_bq: "2017/06/29", obtain: "ev", rarity: "p" , depType: "rear", class: "ドラゴンシャーマン", name: "エキドナ", fullName: "竜巫女エキドナ" }
    , { implDate: "2014/02/18", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "サムライ", name: "シズカ", fullName: "姫侍シズカ" }
    , { implDate: "2014/02/18", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "サムライ", name: "コジュウロウ", fullName: "侍剣士コジュウロウ", male: 1 }
    , { implDate: "2014/02/18", implDate_bq: "2016/11/02", obtain: "ev", rarity: "p" , depType: "rear", class: "メイジ", name: "オデット", fullName: "秘法の伝承者オデット" }
    , { implDate: "2014/02/25", implDate_bq: "2016/11/02", obtain: "sh", rarity: "p" , depType: "rear", class: "ヴァンパイアハンター", name: "エリザベート", fullName: "賞金稼ぎエリザベート" }
    , { implDate: "2014/02/25", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ヴァンパイアハンター", name: "ヴィンセント", fullName: "復讐者ヴィンセント", male: 1 }
    , { implDate: "2014/03/11", implDate_bq: "2019/10/24", obtain: "ev", rarity: "b" , depType: "van" , class: "イモータルプリンセス", name: "カルマ", fullName: "黒衣の花嫁カルマ" }
    , { implDate: "2014/03/11", implDate_bq: "2017/10/26", obtain: "ev", rarity: "p" , depType: "van" , class: "ヴァンパイアプリンセス", name: "カルマ", fullName: "純白の花嫁カルマ" }
    , { implDate: "2014/03/11", implDate_bq: "2017/05/25", obtain: "sh", rarity: "p" , depType: "van" , class: "ペガサスライダー", name: "リディ", fullName: "天駆ける騎士リディ" }
    , { implDate: "2014/03/11", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ヒーラー", name: "ロベルト", fullName: "癒しの獅子ロベルト", male: 1 }
    , { implDate: "2014/03/11", implDate_bq: "2019/10/24", obtain: "ev", rarity: "p" , depType: "rear", class: "シャーマン", name: "シホ", fullName: "巫女シホ" }
    , { implDate: "2014/03/22", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "van" , class: "忍者", name: "ヒエン", fullName: "忍者ヒエン", male: 1 }
    , { implDate: "2014/03/25", implDate_bq: "2016/12/08", obtain: "sh", rarity: "g" , depType: "rear", class: "ウィッチ", name: "ユユ", fullName: "ハーフエルフのユユ" }
    , { implDate: "2014/03/25", implDate_bq: "2019/09/26", obtain: "ev", rarity: "p" , depType: "van" , class: "ダークファイター", name: "ユリナ", fullName: "暗黒騎士ユリナ" }
    , { implDate: "2014/03/25", implDate_bq: "2017/03/14", obtain: "tr", rarity: "p" , depType: "rear", class: "アーチャー", name: "スピカ", fullName: "妖精郷の射手スピカ" }
    , { implDate: "2014/04/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "プリンセス", name: "オリヴィエ", fullName: "オリヴィエ" }
    , { implDate: "2014/04/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ビショップ", name: "マリウス", fullName: "妖精司教マリウス", male: 1 }
    , { implDate: "2014/04/01", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "ヒーラー", name: "シーディス", fullName: "妖精女王シーディス" }
    , { implDate: "2014/04/10", implDate_bq: "2017/07/12", obtain: "ev", rarity: "g" , depType: "van" , class: "ソルジャー", name: "ケイティ", fullName: "戦術教官ケイティ" }
    , { implDate: "2014/04/15", implDate_bq: "2016/04/14", obtain: "ev", rarity: "p" , depType: "van" , class: "アベンジャー", name: "ロアナ", fullName: "ダークエルフのロアナ" }
    , { implDate: "2014/04/15", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ソルジャー", name: "ロザリー", fullName: "妖精郷の戦士ロザリー" }
    , { implDate: "2014/04/15", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "アーチャー", name: "ローレン", fullName: "妖精郷の射手ローレン", male: 1 }
    , { implDate: "2014/04/15", implDate_bq: "2016/12/08", obtain: "ev", rarity: "p" , depType: "van" , class: "モンク", name: "リン", fullName: "武闘家リン" }
    , { implDate: "2014/04/22", implDate_bq: "2017/02/09", obtain: "sh", rarity: "p" , depType: "van" , class: "前衛戦術家", name: "ウズメ", fullName: "地の軍師ウズメ" }
    , { implDate: "2014/04/22", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "サムライ", name: "サノスケ", fullName: "足軽頭サノスケ", male: 1 }
    , { implDate: "2014/05/07", implDate_bq: "2017/08/10", obtain: "ev", rarity: "p" , depType: "rear", class: "後衛戦術家", name: "レン", fullName: "天の軍師レン" }
    , { implDate: "2014/05/07", implDate_bq: "2017/01/19", obtain: "sh", rarity: "b" , depType: "rear", class: "陰陽師", name: "ミコト", fullName: "陰陽師ミコト" }
    , { implDate: "2014/05/07", implDate_bq: "2017/07/12", obtain: "sh", rarity: "g" , depType: "van" , class: "モンク", name: "ジーナ", fullName: "格闘士ジーナ" }
    , { implDate: "2014/05/07", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "メイジ", name: "パレス", fullName: "魔術師パレス" }
    , { implDate: "2014/05/07", implDate_bq: "2016/09/08", obtain: "ev", rarity: "p" , depType: "van" , class: "魔法剣士", name: "シャルロット", fullName: "魔法剣士シャルロット" }
    , { implDate: "2014/05/15", implDate_bq: "2017/01/19", obtain: "sh", rarity: "g" , depType: "van" , class: "アベンジャー", name: "ドロシー", fullName: "大地の妖精ドロシー" }
    , { implDate: "2014/05/30", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ウィッチ", name: "ネーニャ", fullName: "猫魔女ネーニャ" }
    , { implDate: "2014/05/30", implDate_bq: "2017/10/26", obtain: "ev", rarity: "p" , depType: "rear", class: "サモナー", name: "ソラノ", fullName: "召喚士ソラノ" }
    , { implDate: "2014/06/05", implDate_bq: "2017/07/12", obtain: "sh", rarity: "p" , depType: "rear", class: "メイジ", name: "サーシャ", fullName: "幻惑の魔術師サーシャ" }
    , { implDate: "2014/06/05", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "パイレーツ", name: "ジョヴァンニ", fullName: "海賊ジョヴァンニ", male: 1 }
    , { implDate: "2014/06/05", implDate_bq: "2017/04/13", obtain: "ev", rarity: "p" , depType: "van" , class: "ローグ", name: "エイダ", fullName: "獣人エイダ" }
    , { implDate: "2014/06/19", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "忍者", name: "カゲロウ", fullName: "忍者カゲロウ" }
    , { implDate: "2014/06/26", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "シャーマン", name: "カグラ", fullName: "巫女カグラ" }
    , { implDate: "2014/06/26", implDate_bq: "2017/10/26", obtain: "ev", rarity: "g" , depType: "rear", class: "ビショップ", name: "ノエル", fullName: "妖精司祭ノエル" }
    , { implDate: "2014/06/26", implDate_bq: "2016/04/14", obtain: "sh", rarity: "b" , depType: "van" , class: "エンジェル", name: "ソフィー", fullName: "堕天使ソフィー" }
    , { implDate: "2014/06/26", implDate_bq: "2017/07/12", obtain: "ev", rarity: "p" , depType: "van" , class: "エンジェル", name: "クロエ", fullName: "堕天使クロエ" }
    , { implDate: "2014/07/03", implDate_bq: "2017/03/14", obtain: "sh", rarity: "g" , depType: "van" , class: "ペガサスライダー", name: "ステラ", fullName: "見習い天馬騎士ステラ" }
    , { implDate: "2014/07/17", implDate_bq: "2019/05/23", obtain: "ev", rarity: "p" , depType: "van" , class: "魔法剣士", name: "ホルエス", fullName: "熱砂の剣士ホルエス" }
    , { implDate: "2014/07/17", implDate_bq: "2016/06/16", obtain: "sh", rarity: "p" , depType: "rear", class: "風水使い", name: "マール", fullName: "風水士マール" }
    , { implDate: "2014/07/17", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ソルジャー", name: "グスタフ", fullName: "ドワーフ戦士グスタフ", male: 1 }
    , { implDate: "2014/07/17", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "パイレーツ", name: "ヴェロッテ", fullName: "海賊ヴェロッテ" }
    , { implDate: "2014/07/17", implDate_bq: "2016/05/12", obtain: "ev", rarity: "p" , depType: "van" , class: "くぐつ使い", name: "リッカ", fullName: "機甲士リッカ" }
    , { implDate: "2014/07/31", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "砲術士", name: "ジャンナ", fullName: "閃の撃砲ジャンナ" }
    , { implDate: "2014/08/07", implDate_bq: "2016/06/09", obtain: "sh", rarity: "p" , depType: "rear", class: "ダンサー", name: "マーニー", fullName: "踊り子マーニー" }
    , { implDate: "2014/08/15", implDate_bq: "2016/05/12", obtain: "sh", rarity: "b" , depType: "rear", class: "サモナー", name: "ファルネ", fullName: "召喚士ファルネ" }
    , { implDate: "2014/08/21", implDate_bq: "2018/04/19", obtain: "ev", rarity: "p" , depType: "rear", class: "パイレーツ", name: "ベアトリカ", fullName: "紅の海賊ベアトリカ" }
    , { implDate: "2014/08/21", implDate_bq: "2017/06/29", obtain: "ev", rarity: "g" , depType: "van" , class: "セーラー", name: "マリエ", fullName: "見習い水兵マリエ" }
    , { implDate: "2014/08/21", implDate_bq: "2017/05/25", obtain: "sh", rarity: "g" , depType: "van" , class: "サムライ", name: "チズル", fullName: "流浪の武芸者チズル" }
    , { implDate: "2014/08/21", implDate_bq: "2016/05/12", obtain: "ev", rarity: "p" , depType: "van" , class: "忍者", name: "アザミ", fullName: "忍者アザミ" }
    , { implDate: "2014/08/28", implDate_bq: "2021/08/12", obtain: "sh", rarity: "p" , depType: "van" , class: "モンク", name: "ウル", fullName: "猛き爪獣ウル" }
    , { implDate: "2014/08/28", implDate_bq: "2016/09/08", obtain: "sh", rarity: "p" , depType: "rear", class: "ヒーラー", name: "サーリア", fullName: "慈愛の祈りサーリア" }
    , { implDate: "2014/09/11", implDate_bq: "2017/02/09", obtain: "ev", rarity: "p" , depType: "van" , class: "プリンセス", name: "クローディア", fullName: "クローディア" }
    , { implDate: "2014/09/11", implDate_bq: "2017/02/09", obtain: "sh", rarity: "g" , depType: "rear", class: "砲術士", name: "ゾラ", fullName: "魔砲士ゾラ" }
    , { implDate: "2014/09/11", implDate_bq: "2017/05/25", obtain: "ev", rarity: "p" , depType: "van" , class: "サムライ", name: "モミジ", fullName: "剣豪モミジ" }
    , { implDate: "2014/09/18", implDate_bq: "2017/05/25", obtain: "sh", rarity: "p" , depType: "rear", class: "ビショップ", name: "パトラ", fullName: "太陽神官パトラ" }
    , { implDate: "2014/09/18", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ソルジャー", name: "アサル", fullName: "砂漠の戦士アサル" }
    , { implDate: "2014/09/18", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ローグ", name: "バラッド", fullName: "盗賊バラッド", male: 1 }
    , { implDate: "2014/09/18", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ヴァンパイアハンター", name: "フーリ", fullName: "吸血鬼狩人フーリ" }
    , { implDate: "2014/09/20", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "妖狐", name: "たまも", fullName: "妖狐たまも" }
    , { implDate: "2014/09/29", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "van" , class: "アベンジャー", name: "ザラーム", fullName: "仮面の復讐者ザラーム", male: 1 }
    , { implDate: "2014/10/02", implDate_bq: "2017/05/25", obtain: "sh", rarity: "p" , depType: "van" , class: "魔法剣士", name: "サビーネ", fullName: "宮廷剣士サビーネ" }
    , { implDate: "2014/10/02", implDate_bq: "2017/07/12", obtain: "tr", rarity: "p" , depType: "van" , class: "セーラー", name: "ビエラ", fullName: "水兵ビエラ" }
    , { implDate: "2014/10/02", implDate_bq: "2017/08/10", obtain: "ev", rarity: "p" , depType: "rear", class: "アーチャー", name: "リタ", fullName: "漆黒の射手リタ" }
    , { implDate: "2014/10/09", implDate_bq: "2017/11/22", obtain: "sh", rarity: "b" , depType: "rear", class: "後衛戦術家", name: "アイシャ", fullName: "伏龍の軍師アイシャ" }
    , { implDate: "2014/10/23", implDate_bq: "2016/11/02", obtain: "ev", rarity: "p" , depType: "van" , class: "前衛戦術家", name: "シュウカ", fullName: "亡国の将シュウカ" }
    , { implDate: "2014/10/23", implDate_bq: "2016/11/02", obtain: "ev", rarity: "g" , depType: "rear", class: "アーチャー", name: "シャオ", fullName: "彩華の射手シャオ" }
    , { implDate: "2014/10/23", implDate_bq: "2017/02/09", obtain: "sh", rarity: "p" , depType: "van" , class: "ソルジャー", name: "ゼノビア", fullName: "剣の聖女ゼノビア" }
    , { implDate: "2014/10/23", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ヴァンパイアハンター", name: "フラン", fullName: "混血の狩人フラン" }
    , { implDate: "2014/10/30", implDate_bq: "2016/08/04", obtain: "sh", rarity: "p" , depType: "rear", class: "パイレーツ", name: "アネリア", fullName: "姫海賊アネリア" }
    , { implDate: "2014/11/13", implDate_bq: "2018/03/15", obtain: "ev", rarity: "p" , depType: "van" , class: "バンデット", name: "イメリア", fullName: "姫山賊イメリア" }
    , { implDate: "2014/11/13", implDate_bq: "2017/02/09", obtain: "ev", rarity: "p" , depType: "rear", class: "ダンサー", name: "ワルツ", fullName: "情熱の踊り子ワルツ" }
    , { implDate: "2014/11/20", implDate_bq: "2016/08/04", obtain: "sh", rarity: "b" , depType: "van" , class: "ペガサスライダー", name: "エスタ", fullName: "天馬騎士団長エスタ" }
    , { implDate: "2014/11/27", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "砲術士", name: "パーシス", fullName: "砲兵パーシス" }
    , { implDate: "2014/11/29", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "プリンセス", name: "カグヤ", fullName: "月姫カグヤ" }
    , { implDate: "2014/12/04", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "政務官", name: "アンナ", fullName: "政務官アンナ" }
    , { implDate: "2014/12/04", implDate_bq: "2017/07/12", obtain: "sh", rarity: "p" , depType: "van" , class: "神官戦士", name: "フラメル", fullName: "神官戦士フラメル" }
    , { implDate: "2014/12/18", implDate_bq: "2017/09/21", obtain: "ev", rarity: "p" , depType: "rear", class: "ネクロマンサー", name: "メメント", fullName: "死霊魔術師メメント" }
    , { implDate: "2014/12/18", implDate_bq: "2016/08/04", obtain: "sh", rarity: "p" , depType: "van" , class: "メイジアーマー", name: "ジェシカ", fullName: "魔導重装兵ジェシカ" }
    , { implDate: "2014/12/18", implDate_bq: "2017/07/12", obtain: "sh", rarity: "g" , depType: "rear", class: "風水使い", name: "クルル", fullName: "風水士クルル" }
    , { implDate: "2014/12/18", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "砲術士", name: "メル", fullName: "砲術士メル" }
    , { implDate: "2014/12/18", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ウィッチ", name: "エリザ", fullName: "凍氷の守り手エリザ" }
    , { implDate: "2014/12/25", implDate_bq: "2016/12/08", obtain: "sh", rarity: "b" , depType: "van" , class: "前衛戦術家", name: "マツリ", fullName: "朱鎧の智将マツリ" }
    , { implDate: "2014/12/25", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "モンク", name: "ダン", fullName: "格闘家ダン", male: 1 }
    , { implDate: "2014/12/25", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "魔法剣士", name: "リカルド", fullName: "魔法剣士リカルド", male: 1 }
    , { implDate: "2014/12/25", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "エンジェル", name: "ニエル", fullName: "堕天使ニエル" }
    , { implDate: "2014/12/25", implDate_bq: "2017/03/14", obtain: "tr", rarity: "g" , depType: "rear", class: "ウィッチ", name: "リュリュ", fullName: "聖夜の魔女リュリュ" }
    
    // 2015
    , { implDate: "2015/01/04", implDate_bq: "2017/07/12", obtain: "tr", rarity: "g" , depType: "van" , class: "エンジェル", name: "エルン", fullName: "堕天使エルン" }
    , { implDate: "2015/01/08", implDate_bq: "2017/08/10", obtain: "sh", rarity: "g" , depType: "van" , class: "魔法剣士", name: "アネモネ", fullName: "魔法剣士アネモネ" }
    , { implDate: "2015/01/08", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "ワルキューレ", name: "エミリア", fullName: "戦乙女エミリア" }
    , { implDate: "2015/01/15", implDate_bq: "2016/11/02", obtain: "sh", rarity: "b" , depType: "van" , class: "ダークファイター", name: "コーネリア", fullName: "叛逆の騎士コーネリア" }
    , { implDate: "2015/01/22", implDate_bq: "2017/07/12", obtain: "ev", rarity: "p" , depType: "rear", class: "ダンサー", name: "ハナ", fullName: "祝祭の踊り子ハナ" }
    , { implDate: "2015/01/29", implDate_bq: "2018/06/14", obtain: "ev", rarity: "p" , depType: "van" , class: "ダークファイター", name: "エルヴァ", fullName: "副団長エルヴァ" }
    , { implDate: "2015/01/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "メイジアーマー", name: "グレース", fullName: "魔導鎧姫グレース" }
    , { implDate: "2015/01/29", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "神官戦士", name: "エーテル", fullName: "修道戦士エーテル" }
    , { implDate: "2015/01/29", implDate_bq: "2016/05/12", obtain: "ev", rarity: "p" , depType: "van" , class: "バンデット", name: "ロロネ", fullName: "山賊娘ロロネ" }
    , { implDate: "2015/02/05", implDate_bq: "2018/03/15", obtain: "sh", rarity: "p" , depType: "rear", class: "風水使い", name: "ミア", fullName: "花鏡の風水士ミア" }
    , { implDate: "2015/02/05", implDate_bq: "2016/06/02", obtain: "sh", rarity: "g" , depType: "van" , class: "神官戦士", name: "エレット", fullName: "神官戦士エレット" }
    , { implDate: "2015/02/09", implDate_bq: "2017/06/29", obtain: "sp", rarity: "s" , depType: "rear", class: "クロノウィッチ", name: "リゼット", fullName: "時の魔女リゼット" }
    , { implDate: "2015/02/19", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "ヒーラー", name: "リアナ", fullName: "至宝の使い手リアナ" }
    , { implDate: "2015/02/19", implDate_bq: "2016/08/04", obtain: "sh", rarity: "p" , depType: "rear", class: "ネクロマンサー", name: "アニエス", fullName: "死霊魔術師アニエス" }
    , { implDate: "2015/02/19", implDate_bq: "2018/03/15", obtain: "ev", rarity: "p" , depType: "van" , class: "ドラゴンライダー", name: "ルシル", fullName: "竜騎士ルシル" }
    , { implDate: "2015/02/26", implDate_bq: "2018/06/14", obtain: "sh", rarity: "b" , depType: "van" , class: "ヘビーアーマー", name: "ディーネ", fullName: "鉄腕乙女ディーネ" }
    , { implDate: "2015/03/05", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ボウライダー", name: "デイジー", fullName: "弓騎兵デイジー" }
    , { implDate: "2015/03/19", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ドルイド", name: "ププル", fullName: "巫女姫ププル" }
    , { implDate: "2015/03/19", implDate_bq: "2019/04/18", obtain: "sh", rarity: "g" , depType: "rear", class: "レンジャー", name: "フウカ", fullName: "緑森の番人フウカ" }
    , { implDate: "2015/03/19", implDate_bq: "2017/09/21", obtain: "ev", rarity: "p" , depType: "rear", class: "アルケミスト", name: "コリン", fullName: "白衣の錬金術士コリン" }
    , { implDate: "2015/03/26", implDate_bq: "2018/03/15", obtain: "sh", rarity: "b" , depType: "rear", class: "ヴァンパイアハンター", name: "スー", fullName: "霊鳥の射手スー" }
    , { implDate: "2015/03/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "メイド", name: "ヒカゲ", fullName: "庭番女官ヒカゲ" }
    , { implDate: "2015/04/02", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "忍者", name: "サイゾウ", fullName: "忍者サイゾウ", male: 1 }
    , { implDate: "2015/04/02", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "アーチャー", name: "カズハ", fullName: "弓武者カズハ" }
    , { implDate: "2015/04/02", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ビショップ", name: "フドウ", fullName: "破魔僧正フドウ", male: 1 }
    , { implDate: "2015/04/09", implDate_bq: "2018/12/27", obtain: "ev", rarity: "p" , depType: "van" , class: "ヴァンパイアロード", name: "エデン", fullName: "吸血鬼エデン" }
    , { implDate: "2015/04/09", implDate_bq: "2016/11/02", obtain: "sh", rarity: "b" , depType: "rear", class: "シャーマン", name: "キキョウ", fullName: "黒紫の巫女キキョウ" }
    , { implDate: "2015/04/09", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "サムライ", name: "イロハ", fullName: "侍剣士イロハ" }
    , { implDate: "2015/04/13", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "van" , class: "ドラゴンライダー", name: "アベル", fullName: "竜騎士アベル", male: 1 }
    , { implDate: "2015/04/16", implDate_bq: "2017/04/13", obtain: "ev", rarity: "g" , depType: "rear", class: "パイレーツ", name: "モーレット", fullName: "爆裂海賊モーレット" }
    , { implDate: "2015/04/16", implDate_bq: "2017/09/21", obtain: "sh", rarity: "p" , depType: "van" , class: "妖狐", name: "イナリ", fullName: "妖狐イナリ" }
    , { implDate: "2015/04/30", implDate_bq: "2017/03/14", obtain: "ev", rarity: "b" , depType: "van" , class: "忍者", name: "ナギ", fullName: "封妖の忍者ナギ" }
    , { implDate: "2015/04/30", implDate_bq: "2018/09/20", obtain: "sh", rarity: "b" , depType: "rear", class: "メイジ", name: "エステル", fullName: "魔法皇女エステル" }
    , { implDate: "2015/04/30", implDate_bq: "2016/12/08", obtain: "ev", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "ミランダ", fullName: "聖鎚闘士ミランダ" }
    , { implDate: "2015/05/07", implDate_bq: "2017/01/19", obtain: "sh", rarity: "p" , depType: "rear", class: "アルケミスト", name: "シャルル", fullName: "神秘の術士シャルル" }
    , { implDate: "2015/05/07", implDate_bq: "2017/11/22", obtain: "ev", rarity: "p" , depType: "van" , class: "ソードマスター", name: "サンドラ", fullName: "剣士サンドラ" }
    , { implDate: "2015/05/21", implDate_bq: "2017/09/21", obtain: "sh", rarity: "g" , depType: "van" , class: "モンク", name: "モモ", fullName: "鉄甲闘士モモ" }
    , { implDate: "2015/05/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ボウライダー", name: "リオン", fullName: "月影の弓騎兵リオン" }
    , { implDate: "2015/05/28", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ドラゴンライダー", name: "エレニア", fullName: "雷竜騎士エレニア" }
    , { implDate: "2015/06/11", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ビショップ", name: "ポーラ", fullName: "旅の司祭ポーラ" }
    , { implDate: "2015/06/11", implDate_bq: "2021/01/14", obtain: "sh", rarity: "g" , depType: "rear", class: "シーフ", name: "レダ", fullName: "お宝泥棒レダ" }
    , { implDate: "2015/06/25", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "神官戦士", name: "セラ", fullName: "神官戦士セラ" }
    , { implDate: "2015/06/28", implDate_bq: "2017/02/09", obtain: "tr", rarity: "g" , depType: "van" , class: "メイジアーマー", name: "ライチ", fullName: "妖精魔鎧兵ライチ" }
    , { implDate: "2015/07/02", implDate_bq: "2019/08/15", obtain: "sh", rarity: "g" , depType: "rear", class: "ドルイド", name: "ローリエ", fullName: "森の守り手ローリエ" }
    , { implDate: "2015/07/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "呪術使い", name: "エヴァ", fullName: "呪術師エヴァ" }
    , { implDate: "2015/07/16", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "くぐつ使い", name: "フィー", fullName: "機甲騎士フィー" }
    , { implDate: "2015/07/23", implDate_bq: "2017/12/28", obtain: "ev", rarity: "p" , depType: "van" , class: "ソードマスター", name: "グローリア", fullName: "剣士グローリア" }
    , { implDate: "2015/07/23", implDate_bq: "2017/08/10", obtain: "sh", rarity: "b" , depType: "van" , class: "ソルジャー", name: "アルティア", fullName: "光の守護者アルティア" }
    , { implDate: "2015/07/23", implDate_bq: "2017/07/12", obtain: "ev", rarity: "p" , depType: "rear", class: "砲術士", name: "カノン", fullName: "爆砲の新兵カノン" }
    , { implDate: "2015/07/24", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "rear", class: "魔物使い", name: "スイル", fullName: "魔物使いスイル" }
    , { implDate: "2015/07/30", implDate_bq: "2017/11/22", obtain: "sh", rarity: "p" , depType: "van" , class: "ソードマスター", name: "レイブン", fullName: "剣士レイブン" }
    , { implDate: "2015/08/13", implDate_bq: "2018/02/01", obtain: "ev", rarity: "p" , depType: "rear", class: "ダークプリースト", name: "ベルディナート", fullName: "闇司祭ベルディナート" }
    , { implDate: "2015/08/13", implDate_bq: "2016/08/04", obtain: "sh", rarity: "p" , depType: "rear", class: "ドラゴンシャーマン", name: "ルビナス", fullName: "竜巫女ルビナス" }
    , { implDate: "2015/08/13", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "セーラー", name: "リーンベル", fullName: "提督リーンベル" }
    , { implDate: "2015/08/20", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "バンデット", name: "アマンダ", fullName: "新世代山賊アマンダ" }
    , { implDate: "2015/08/27", implDate_bq: "2018/02/01", obtain: "sh", rarity: "p" , depType: "rear", class: "シーフ", name: "アニータ", fullName: "閃光の泥棒アニータ" }
    , { implDate: "2015/08/27", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "プリンセス", name: "ロゼット", fullName: "ロゼット" }
    , { implDate: "2015/08/29", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "ロイヤルガード", name: "パテル", fullName: "姫騎士パテル" }
    , { implDate: "2015/09/10", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "風水使い", name: "ピピン", fullName: "風水士ピピン" }
    , { implDate: "2015/09/14", implDate_bq: "2018/04/19", obtain: "tr", rarity: "g" , depType: "rear", class: "呪術使い", name: "ミトラ", fullName: "呪術師ミトラ" }
    , { implDate: "2015/09/16", implDate_bq: "2018/02/01", obtain: "sh", rarity: "p" , depType: "rear", class: "エンチャンター", name: "エルシャ", fullName: "付与魔術師エルシャ" }
    , { implDate: "2015/09/16", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "魔法剣士", name: "カシス", fullName: "魔法剣士カシス" }
    , { implDate: "2015/09/16", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ビショップ", name: "シャロン", fullName: "司祭シャロン" }
    , { implDate: "2015/09/17", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "ソードマスター", name: "ミーティア", fullName: "剣士ミーティア" }
    , { implDate: "2015/09/24", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ボウライダー", name: "カティナ", fullName: "弓騎兵カティナ" }
    , { implDate: "2015/09/24", implDate_bq: "2017/01/19", obtain: "ev", rarity: "p" , depType: "van" , class: "ペガサスライダー", name: "イザベル", fullName: "帝国天馬騎士イザベル" }
    , { implDate: "2015/10/01", implDate_bq: "2017/10/26", obtain: "sh", rarity: "b" , depType: "van" , class: "モンク", name: "アリス", fullName: "武王姫アリス" }
    , { implDate: "2015/10/15", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "レンジャー", name: "リコラ", fullName: "聖森の番人リコラ" }
    , { implDate: "2015/10/15", implDate_bq: "2017/03/14", obtain: "sh", rarity: "p" , depType: "van" , class: "メイド", name: "シャーリー", fullName: "術士女官シャーリー" }
    , { implDate: "2015/10/15", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ヒーラー", name: "ユーノ", fullName: "背反の癒し手ユーノ" }
    , { implDate: "2015/10/22", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ウィッチ", name: "メローネ", fullName: "魔女メローネ" }
    , { implDate: "2015/10/22", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "アルケミスト", name: "テルマ", fullName: "錬金術士テルマ" }
    , { implDate: "2015/10/29", implDate_bq: "2017/02/09", obtain: "sh", rarity: "b" , depType: "van" , class: "仙人", name: "ナタク", fullName: "紅輪の道士ナタク" }
    , { implDate: "2015/11/05", implDate_bq: "2017/08/10", obtain: "ev", rarity: "p" , depType: "van" , class: "プリンセス", name: "ルイーズ", fullName: "ルイーズ" }
    , { implDate: "2015/11/05", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ヘビーアーマー", name: "ダナン", fullName: "密林の守護者ダナン" }
    , { implDate: "2015/11/05", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ボウライダー", name: "ルナール", fullName: "密林の弓騎兵ルナール" }
    , { implDate: "2015/11/12", implDate_bq: "2017/04/13", obtain: "ev", rarity: "b" , depType: "rear", class: "ビショップ", name: "エターナー", fullName: "魔導司祭エターナー" }
    , { implDate: "2015/11/12", implDate_bq: "2016/12/08", obtain: "sh", rarity: "p" , depType: "van" , class: "ドラゴンライダー", name: "ナディア", fullName: "角竜騎士ナディア" }
    , { implDate: "2015/11/12", implDate_bq: "2017/01/19", obtain: "ev", rarity: "p" , depType: "van" , class: "ソルジャー", name: "リーゼロッテ", fullName: "帝国兵長リーゼロッテ" }
    , { implDate: "2015/11/19", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "魔神", name: "ラクシャーサ", fullName: "鬼神姫ラクシャーサ" }
    , { implDate: "2015/11/19", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "アベンジャー", name: "リスティス", fullName: "魔界闘士リスティス" }
    , { implDate: "2015/11/19", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "van" , class: "ダークファイター", name: "暗黒騎士", fullName: "暗黒騎士", male: 1 }
    , { implDate: "2015/11/26", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ワルキューレ", name: "チグリ", fullName: "密林の槍騎兵チグリ" }
    , { implDate: "2015/12/03", implDate_bq: "2017/11/22", obtain: "sh", rarity: "p" , depType: "van" , class: "ローグ", name: "ジュノン", fullName: "秘刃の暗殺者ジュノン" }
    , { implDate: "2015/12/03", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "忍者", name: "カナメ", fullName: "封妖の忍者カナメ" }
    , { implDate: "2015/12/17", implDate_bq: "2017/04/13", obtain: "ev", rarity: "p" , depType: "van" , class: "メイド", name: "アイリーン", fullName: "召使いアイリーン" }
    , { implDate: "2015/12/17", implDate_bq: "2019/07/25", obtain: "sh", rarity: "p" , depType: "rear", class: "マーチャント", name: "トトノ", fullName: "行商人トトノ" }
    , { implDate: "2015/12/17", implDate_bq: "2017/12/28", obtain: "ev", rarity: "p" , depType: "van" , class: "ボウライダー", name: "サラサ", fullName: "聖夜の弓騎兵サラサ" }
    , { implDate: "2015/12/26", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "rear", class: "フェンリルシャーマン", name: "プニル", fullName: "魔狼巫女プニル" }
    , { implDate: "2015/12/29", implDate_bq: "2018/08/23", obtain: "sh", rarity: "b" , depType: "van" , class: "魔法剣士", name: "イングリッド", fullName: "魔戦団長イングリッド" }
    
    // 2016
    , { implDate: "2016/01/14", implDate_bq: "2018/04/19", obtain: "sh", rarity: "p" , depType: "van" , class: "神官戦士", name: "フェルミ", fullName: "神官戦士フェルミ" }
    , { implDate: "2016/01/28", implDate_bq: "2018/02/01", obtain: "ev", rarity: "p" , depType: "van" , class: "仙猿", name: "ファー", fullName: "仙猿ファー" }
    , { implDate: "2016/01/28", implDate_bq: "2019/09/26", obtain: "sh", rarity: "b" , depType: "van" , class: "妖狐", name: "カヨウ", fullName: "九尾狐カヨウ" }
    , { implDate: "2016/01/28", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "呪術使い", name: "レヴィ", fullName: "忘我の呪術師レヴィ" }
    , { implDate: "2016/02/04", implDate_bq: "2019/01/31", obtain: "sh", rarity: "p" , depType: "van" , class: "プリンセス", name: "メルヴィナ", fullName: "メルヴィナ" }
    , { implDate: "2016/02/18", implDate_bq: "2018/04/19", obtain: "ev", rarity: "b" , depType: "rear", class: "ネクロマンサー", name: "メトゥス", fullName: "反魂の死霊術師メトゥス" }
    , { implDate: "2016/02/18", implDate_bq: "2019/06/20", obtain: "sh", rarity: "g" , depType: "rear", class: "エンチャンター", name: "リルケ", fullName: "付与魔術師リルケ" }
    , { implDate: "2016/02/18", implDate_bq: "2018/10/18", obtain: "ev", rarity: "p" , depType: "rear", class: "パイレーツ", name: "サブリナ", fullName: "私掠船長サブリナ" }
    , { implDate: "2016/02/25", implDate_bq: "2016/12/08", obtain: "sh", rarity: "b" , depType: "rear", class: "クロノウィッチ", name: "トワ", fullName: "時の調停者トワ" }
    , { implDate: "2016/02/25", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "メイジ", name: "マーヤ", fullName: "魔術師マーヤ" }
    , { implDate: "2016/03/03", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "van" , class: "戦の聖霊", name: "シンシア", fullName: "戦の聖霊シンシア" }
    , { implDate: "2016/03/10", implDate_bq: "2017/08/10", obtain: "sh", rarity: "p" , depType: "van" , class: "メイジアーマー", name: "パルフィ", fullName: "魔鎧乙女パルフィ" }
    , { implDate: "2016/03/10", implDate_bq: "2017/01/19", obtain: "sh", rarity: "g" , depType: "van" , class: "バンデット", name: "リーフ", fullName: "山賊娘リーフ" }
    , { implDate: "2016/03/24", implDate_bq: "2019/02/21", obtain: "ev", rarity: "p" , depType: "van" , class: "プリンセス", name: "スクハ", fullName: "スクハ" }
    , { implDate: "2016/03/24", implDate_bq: "2018/07/12", obtain: "sh", rarity: "p" , depType: "van" , class: "ヴァンパイアロード", name: "ラキュア", fullName: "吸血鬼ラキュア" }
    , { implDate: "2016/03/24", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "神官戦士", name: "ニコラウス", fullName: "神官戦士ニコラウス", male: 1 }
    , { implDate: "2016/03/24", implDate_bq: "2017/03/14", obtain: "ev", rarity: "p" , depType: "rear", class: "ヴァンパイアハンター", name: "ルマリア", fullName: "聖なる復讐者ルマリア" }
    , { implDate: "2016/03/31", implDate_bq: "2017/06/29", obtain: "sh", rarity: "b" , depType: "van" , class: "メイド", name: "セーラ", fullName: "王宮侍女武官セーラ" }
    , { implDate: "2016/03/31", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "エンジェル", name: "パフィリア", fullName: "堕天使パフィリア" }
    , { implDate: "2016/04/07", implDate_bq: "2017/03/14", obtain: "tr", rarity: "p" , depType: "rear", class: "後衛戦術家", name: "レオナ", fullName: "帝国軍師レオナ" }
    , { implDate: "2016/04/14", implDate_bq: "2018/03/15", obtain: "ev", rarity: "p" , depType: "van" , class: "エンジェル", name: "ミルノ", fullName: "天使長ミルノ" }
    , { implDate: "2016/04/14", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "サモナー", name: "リノ", fullName: "見習い召喚士リノ" }
    , { implDate: "2016/04/21", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "レンジャー", name: "スプラ", fullName: "神森の守護妖精スプラ" }
    , { implDate: "2016/04/21", implDate_bq: "2018/04/19", obtain: "ev", rarity: "p" , depType: "van" , class: "前衛戦術家", name: "ヘレナ", fullName: "天才戦術家ヘレナ" }
    , { implDate: "2016/04/21", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "rear", class: "政務官", name: "アンナ/メイド", fullName: "アンナ（給仕服）" }
    , { implDate: "2016/04/28", implDate_bq: "2017/07/12", obtain: "sh", rarity: "b" , depType: "rear", class: "魔物使い", name: "モルテナ", fullName: "魔物使いモルテナ" }
    , { implDate: "2016/04/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "rear", class: "モンスタースレイヤー", name: "ラーティ", fullName: "竜殺しラーティ" }
    , { implDate: "2016/05/12", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "ワルキューレ", name: "レシア", fullName: "英霊の守り手レシア" }
    , { implDate: "2016/05/12", implDate_bq: "2017/04/13", obtain: "sh", rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "ドルチェ", fullName: "悪魔ハンタードルチェ" }
    , { implDate: "2016/05/12", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ヘビーアーマー", name: "ドワイト", fullName: "帝国重装歩兵ドワイト", male: 1 }
    , { implDate: "2016/05/12", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "モンク", name: "マオ", fullName: "見習い拳士マオ" }
    , { implDate: "2016/05/16", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "van" , class: "くぐつ使い", name: "ボリス", fullName: "機甲技師ボリス", male: 1 }
    , { implDate: "2016/05/26", implDate_bq: "2017/05/25", obtain: "sh", rarity: "b" , depType: "rear", class: "風水使い", name: "リンネ", fullName: "刻詠の風水士リンネ" }
    , { implDate: "2016/05/26", implDate_bq: "2018/10/18", obtain: "sh", rarity: "b" , depType: "rear", class: "砲術士", name: "フレデリカ", fullName: "極重巨砲フレデリカ" }
    , { implDate: "2016/06/02", implDate_bq: "2018/03/15", obtain: "ev", rarity: "p" , depType: "rear", class: "クロノウィッチ", name: "ココロ", fullName: "時の魔女ココロ" }
    , { implDate: "2016/06/02", implDate_bq: "2018/07/12", obtain: "sh", rarity: "p" , depType: "van" , class: "セーラー", name: "アメリ", fullName: "航海士アメリ" }
    , { implDate: "2016/06/02", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ボウライダー", name: "ミゲル", fullName: "弓騎兵ミゲル", male: 1 }
    , { implDate: "2016/06/02", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "ソルジャー", name: "ジェイク", fullName: "冒険者ジェイク", male: 1 }
    , { implDate: "2016/06/02", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "アーチャー", name: "オスカー", fullName: "冒険者オスカー", male: 1 }
    , { implDate: "2016/06/03", implDate_bq: "2018/07/12", obtain: "tr", rarity: "p" , depType: "van" , class: "ダークストーカー", name: "グレーテル", fullName: "闇使いグレーテル" }
    , { implDate: "2016/06/09", implDate_bq: "2017/12/28", obtain: "sh", rarity: "p" , depType: "rear", class: "ドルイド", name: "メープル", fullName: "大自然の乙女メープル" }
    , { implDate: "2016/06/23", implDate_bq: "2019/02/21", obtain: "ev", rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "レーゼル", fullName: "帝国猟兵レーゼル" }
    , { implDate: "2016/06/23", implDate_bq: "2017/11/22", obtain: "sh", rarity: "g" , depType: "van" , class: "ボウライダー", name: "マーガレット", fullName: "輝弓士マーガレット" }
    , { implDate: "2016/06/23", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "van" , class: "ロイヤルガード", name: "アリシア", fullName: "近衛騎士アリシア" }
    , { implDate: "2016/06/30", implDate_bq: "2018/07/12", obtain: "sh", rarity: "b" , depType: "rear", class: "アルケミスト", name: "マキナ", fullName: "錬金技工士マキナ" }
    , { implDate: "2016/06/30", implDate_bq: "2017/11/22", obtain: "ev", rarity: "p" , depType: "rear", class: "ビショップ", name: "セレイナ", fullName: "聖職者セレイナ" }
    , { implDate: "2016/07/07", implDate_bq: "2023/07/13", obtain: "sh", rarity: "p" , depType: "rear", class: "ウィッチ", name: "プリム", fullName: "幻光の魔女プリム" }
    , { implDate: "2016/07/21", implDate_bq: "2019/03/22", obtain: "ev", rarity: "p" , depType: "van" , class: "ワルキューレ", name: "メイリン", fullName: "虎姫メイリン" }
    , { implDate: "2016/07/21", implDate_bq: "2018/06/14", obtain: "sh", rarity: "p" , depType: "van" , class: "魔法剣士", name: "シエナ", fullName: "闇の魔剣士シエナ" }
    , { implDate: "2016/07/21", implDate_bq: "2017/06/29", obtain: "ev", rarity: "p" , depType: "rear", class: "レンジャー", name: "アイーダ", fullName: "闇の森の番人アイーダ" }
    , { implDate: "2016/07/28", implDate_bq: "2018/07/12", obtain: "sh", rarity: "b" , depType: "van" , class: "ロイヤルガード", name: "ミレイユ", fullName: "近衛騎士団長ミレイユ" }
    , { implDate: "2016/07/28", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "ねんどろいどプリンセス", name: "ねんどろいどシビラ", fullName: "ねんどろいどシビラ", collabo: 1 }
    , { implDate: "2016/08/02", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "van" , class: "中級竜兵", name: "ゴライア", fullName: "闇竜のゴライア", male: 1 }
    , { implDate: "2016/08/12", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ダークプリースト", name: "ベルゼッタ", fullName: "闇の大司教ベルゼッタ" }
    , { implDate: "2016/08/25", implDate_bq: "2017/07/12", obtain: "ev", rarity: "b" , depType: "van" , class: "サムライ", name: "ヒバリ", fullName: "鬼切の使い手ヒバリ" }
    , { implDate: "2016/08/25", implDate_bq: "2017/09/21", obtain: "sh", rarity: "b" , depType: "rear", class: "アーチャー", name: "アーシェラ", fullName: "神業の狩人アーシェラ" }
    , { implDate: "2016/08/25", implDate_bq: "2017/12/28", obtain: "sh", rarity: "b" , depType: "rear", class: "ドルイド", name: "フィオレ", fullName: "森の隠者フィオレ" }
    , { implDate: "2016/08/26", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "魔神", name: "ルル", fullName: "裏切りの魔神ルル" }
    , { implDate: "2016/09/08", implDate_bq: "2017/09/21", obtain: "ev", rarity: "p" , depType: "rear", class: "ヒーラー", name: "エリアス", fullName: "帝国治癒士エリアス" }
    , { implDate: "2016/09/08", implDate_bq: "2018/02/01", obtain: "sh", rarity: "g" , depType: "van" , class: "ヘビーアーマー", name: "マチルダ", fullName: "重歩兵長マチルダ" }
    , { implDate: "2016/09/08", implDate_bq: "2018/04/19", obtain: "ev", rarity: "p" , depType: "van" , class: "中級竜兵", name: "イグニス", fullName: "火竜のイグニス" }
    , { implDate: "2016/09/15", implDate_bq: "2017/09/21", obtain: "sh", rarity: "p" , depType: "rear", class: "デモンサモナー", name: "リヴル", fullName: "悪魔召喚士リヴル" }
    , { implDate: "2016/09/29", implDate_bq: "2018/05/17", obtain: "ev", rarity: "p" , depType: "rear", class: "エンチャンター", name: "メレディス", fullName: "付与魔術師メレディス" }
    , { implDate: "2016/09/29", implDate_bq: "2017/04/13", obtain: "sh", rarity: "b" , depType: "van" , class: "くぐつ使い", name: "ウェンディ", fullName: "天才機甲士ウェンディ" }
    , { implDate: "2016/09/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "モンク", name: "リーエン", fullName: "雷の宝具使いリーエン" }
    , { implDate: "2016/10/13", implDate_bq: "2017/12/28", obtain: "sh", rarity: "p" , depType: "rear", class: "ダンサー", name: "ビビアン", fullName: "異邦の踊り子ビビアン" }
    , { implDate: "2016/10/20", implDate_bq: "2018/06/14", obtain: "ev", rarity: "b" , depType: "van" , class: "ぬらりひょん", name: "シノ", fullName: "ぬらりひょんの娘シノ" }
    , { implDate: "2016/10/20", implDate_bq: "2018/07/12", obtain: "sh", rarity: "p" , depType: "van" , class: "重装砲兵", name: "レギーナ", fullName: "重装砲兵レギーナ" }
    , { implDate: "2016/10/27", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ダークプリースト", name: "ドロテア", fullName: "闇エルフの女王ドロテア" }
    , { implDate: "2016/11/10", implDate_bq: "2017/10/26", obtain: "ev", rarity: "p" , depType: "van" , class: "メイジアーマー", name: "エーリカ", fullName: "南瓜魔導鎧兵エーリカ" }
    , { implDate: "2016/11/10", implDate_bq: "2018/09/20", obtain: "sh", rarity: "p" , depType: "van" , class: "鬼", name: "イツキ", fullName: "鬼娘イツキ" }
    , { implDate: "2016/11/10", implDate_bq: "2018/09/20", obtain: "ev", rarity: "p" , depType: "van" , class: "神官戦士", name: "ルチア", fullName: "帝国神官戦士ルチア" }
    , { implDate: "2016/11/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "ドラゴンプリンセス", name: "シャルム", fullName: "炎の竜皇女シャルム" }
    , { implDate: "2016/12/01", implDate_bq: "2018/05/17", obtain: "sh", rarity: "b" , depType: "van" , class: "プリンセス", name: "アンジェリーネ", fullName: "アンジェリーネ" }
    , { implDate: "2016/12/01", implDate_bq: "2018/05/17", obtain: "sh", rarity: "b" , depType: "van" , class: "ソードマスター", name: "ジークリンデ", fullName: "帝国剣士ジークリンデ" }
    , { implDate: "2016/12/01", implDate_bq: "2017/03/14", obtain: "sh", rarity: "b" , depType: "van" , class: "重装砲兵", name: "エルミラ", fullName: "帝国重装砲兵エルミラ" }
    , { implDate: "2016/12/01", implDate_bq: "2019/09/26", obtain: "sh", rarity: "p" , depType: "van" , class: "インペリアルナイト", name: "ヴィオラ", fullName: "帝国騎士ヴィオラ" }
    , { implDate: "2016/12/01", implDate_bq: "2018/05/17", obtain: "sh", rarity: "p" , depType: "rear", class: "レンジャー", name: "ローザ", fullName: "帝国遊撃兵ローザ" }
    , { implDate: "2016/12/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "ラルフ", fullName: "帝国狙撃兵ラルフ", male: 1 }
    , { implDate: "2016/12/01", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "中級竜兵", name: "サーベイン", fullName: "帝国竜人サーベイン", male: 1 }
    , { implDate: "2016/12/01", implDate_bq: "2018/05/17", obtain: "sh", rarity: "g" , depType: "van" , class: "セーラー", name: "フレイ", fullName: "帝国水兵フレイ" }
    , { implDate: "2016/12/01", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "重装砲兵", name: "ゲオルグ", fullName: "帝国重装砲兵ゲオルグ", male: 1 }
    , { implDate: "2016/12/01", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ペガサスライダー", name: "クラーラ", fullName: "帝国天馬騎士クラーラ" }
    , { implDate: "2016/12/01", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "インペリアルナイト", name: "ルークス", fullName: "帝国騎士ルークス", male: 1 }
    , { implDate: "2016/12/01", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "レンジャー", name: "エリック", fullName: "帝国遊撃兵エリック", male: 1 }
    , { implDate: "2016/12/01", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "エンチャンター", name: "ヒース", fullName: "帝国付与魔術師ヒース", male: 1 }
    , { implDate: "2016/12/08", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "皇帝", name: "白の皇帝", fullName: "白の皇帝", male: 1 }
    , { implDate: "2016/12/08", implDate_bq: "2018/08/23", obtain: "sh", rarity: "p" , depType: "rear", class: "エレメンタラー", name: "ロレッタ", fullName: "火霊使いロレッタ" }
    , { implDate: "2016/12/22", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "マーチャント", name: "エイミー", fullName: "武器商人エイミー" }
    , { implDate: "2016/12/22", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ヒーラー", name: "アリサ/クリスマス", fullName: "聖夜の癒し手アリサ" }
    , { implDate: "2016/12/22", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "風水使い", name: "フェイ", fullName: "門弟の風水士フェイ" }
    , { implDate: "2016/12/29", implDate_bq: "2017/12/28", obtain: "sh", rarity: "b" , depType: "van" , class: "鬼", name: "鬼刃姫", fullName: "酒呑童子の娘 鬼刃姫" }
    , { implDate: "2016/12/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "デモンサモナー", name: "ラピス", fullName: "大悪魔召喚士ラピス" }
    , { implDate: "2016/12/29", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "政務官", name: "アンナ/水着", fullName: "水着の政務官アンナ" }
    
    // 2017
    , { implDate: "2017/01/01", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "van" , class: "ヘビーアーマー", name: "レアン/お正月", fullName: "年賀の祝盾レアン" }
    , { implDate: "2017/01/05", implDate_bq: "2018/12/27", obtain: "tr", rarity: "g" , depType: "rear", class: "アーチャー", name: "ソーマ/お正月", fullName: "新春の弓巫女ソーマ" }
    , { implDate: "2017/01/12", implDate_bq: "2018/07/12", obtain: "sh", rarity: "p" , depType: "van" , class: "天狗", name: "コノハ", fullName: "天狗コノハ" }
    , { implDate: "2017/01/26", implDate_bq: "2019/04/18", obtain: "ev", rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "アオバ", fullName: "討妖の狙撃手アオバ" }
    , { implDate: "2017/01/26", implDate_bq: "2018/10/18", obtain: "sh", rarity: "b" , depType: "van" , class: "ヴァンパイアプリンセス", name: "シルヴィア", fullName: "紅血の皇女シルヴィア" }
    , { implDate: "2017/01/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "イビルプリンセス", name: "トコヨ", fullName: "降魔の戦姫トコヨ" }
    , { implDate: "2017/02/02", implDate_bq: "2021/09/16", obtain: "sh", rarity: "p" , depType: "van" , class: "鍛冶職人", name: "サンディー", fullName: "鍛冶職人サンディー" }
    , { implDate: "2017/02/16", implDate_bq: "2019/04/18", obtain: "ev", rarity: "p" , depType: "van" , class: "グラディエーター", name: "ドゥーラ", fullName: "オークの剣士ドゥーラ" }
    , { implDate: "2017/02/16", implDate_bq: "2018/10/18", obtain: "sh", rarity: "p" , depType: "van" , class: "魔神", name: "バロウス", fullName: "魔眼の魔神バロウス" }
    , { implDate: "2017/02/16", implDate_bq: "2017/11/22", obtain: "ev", rarity: "p" , depType: "van" , class: "ローグ", name: "セブン", fullName: "盗賊セブン" }
    , { implDate: "2017/02/23", implDate_bq: "2019/01/31", obtain: "sh", rarity: "b" , depType: "rear", class: "猫又", name: "コハル", fullName: "猫又コハル" }
    , { implDate: "2017/02/23", implDate_bq: "2018/10/18", obtain: "sh", rarity: "p" , depType: "rear", class: "エレメンタラー", name: "シャオメイ", fullName: "土霊使いシャオメイ" }
    , { implDate: "2017/02/27", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "アベンジャー", name: "ウリデム", fullName: "狂獣ウリデム" }
    , { implDate: "2017/03/09", implDate_bq: "2018/06/14", obtain: "ev", rarity: "p" , depType: "rear", class: "ビショップ", name: "レーヴ", fullName: "神殿書記官レーヴ" }
    , { implDate: "2017/03/09", implDate_bq: "2018/02/01", obtain: "sh", rarity: "p" , depType: "van" , class: "キョンシー", name: "レイメイ", fullName: "雷爪道士レイメイ" }
    , { implDate: "2017/03/23", implDate_bq: "2018/02/01", obtain: "ev", rarity: "b" , depType: "rear", class: "ドラゴンシャーマン", name: "ハクノカミ", fullName: "古代龍ハクノカミ" }
    , { implDate: "2017/03/23", implDate_bq: "2018/11/22", obtain: "sh", rarity: "b" , depType: "van" , class: "妖狐", name: "キュウビ", fullName: "帝国妖狐キュウビ" }
    , { implDate: "2017/03/23", implDate_bq: "2018/11/22", obtain: "sh", rarity: "p" , depType: "van" , class: "前衛戦術家", name: "レオラ", fullName: "帝国元帥レオラ" }
    , { implDate: "2017/03/23", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "道化師", name: "モトリー", fullName: "帝国道化師モトリー" }
    , { implDate: "2017/03/23", implDate_bq: "2017/12/28", obtain: "sh", rarity: "g" , depType: "rear", class: "ドルイド", name: "ミステル", fullName: "帝国神樹使いミステル" }
    , { implDate: "2017/03/23", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ドルイド", name: "ソラーレ", fullName: "帝国神樹使いソラーレ" }
    , { implDate: "2017/03/30", implDate_bq: "2019/01/31", obtain: "sh", rarity: "b" , depType: "van" , class: "メイジアーマー", name: "シルセス", fullName: "星天の魔導鎧シルセス" }
    , { implDate: "2017/03/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "rear", class: "エレメンタラー", name: "ハルカ", fullName: "帝国風霊使いハルカ" }
    , { implDate: "2017/04/06", implDate_bq: "2018/08/23", obtain: "sh", rarity: "p" , depType: "van" , class: "ぬらりひょん", name: "カスミ", fullName: "ぬらりひょんの娘カスミ" }
    , { implDate: "2017/04/20", implDate_bq: "2018/08/23", obtain: "ev", rarity: "p" , depType: "rear", class: "陰陽師", name: "コヨミ", fullName: "陰陽師コヨミ" }
    , { implDate: "2017/04/20", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "エレメンタラー", name: "クラリーチェ", fullName: "闇霊使いクラリーチェ" }
    , { implDate: "2017/04/20", implDate_bq: "2018/12/27", obtain: "ev", rarity: "p" , depType: "van" , class: "モンク", name: "ベストラ", fullName: "オークの格闘家ベストラ" }
    , { implDate: "2017/04/27", implDate_bq: "2020/01/16", obtain: "sh", rarity: "b" , depType: "van" , class: "ドラゴンライダー", name: "ティファ", fullName: "聖銀竜の騎士ティファ" }
    , { implDate: "2017/05/11", implDate_bq: "2019/03/22", obtain: "ev", rarity: "p" , depType: "rear", class: "デモンサモナー", name: "ヴェルティ", fullName: "悪魔召喚士ヴェルティ" }
    , { implDate: "2017/05/11", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "鍛冶職人", name: "ゴルドー", fullName: "鍛冶職人ゴルドー", male: 1 }
    , { implDate: "2017/05/18", implDate_bq: "2018/09/20", obtain: "sh", rarity: "p" , depType: "van" , class: "雷公", name: "ラミィ", fullName: "雷神の娘ラミィ" }
    , { implDate: "2017/05/25", implDate_bq: "2019/03/22", obtain: "sh", rarity: "b" , depType: "rear", class: "モンスタースレイヤー", name: "ソシエ", fullName: "聖魔殺しの銃手ソシエ" }
    , { implDate: "2017/06/01", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "モンスターブレイカー", name: "エレーヌ", fullName: "封印剣の使い手エレーヌ" }
    , { implDate: "2017/06/01", implDate_bq: "2019/11/14", obtain: "sh", rarity: "b" , depType: "van" , class: "神官戦士", name: "エクス", fullName: "神官戦士団長エクス" }
    , { implDate: "2017/06/08", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "ドラゴンライダー", name: "リエーレ", fullName: "竜騎士リエーレ" }
    , { implDate: "2017/06/15", implDate_bq: "2019/02/21", obtain: "sh", rarity: "p" , depType: "rear", class: "道化師", name: "リェプル", fullName: "白兎の道化師リェプル" }
    , { implDate: "2017/06/29", implDate_bq: "2020/08/13", obtain: "ev", rarity: "p" , depType: "van" , class: "風伯", name: "フーコ", fullName: "風神の娘フーコ" }
    , { implDate: "2017/06/29", implDate_bq: "2020/02/13", obtain: "sh", rarity: "b" , depType: "rear", class: "ダンサー", name: "ミヤビ", fullName: "神和ぎの踊り子ミヤビ" }
    , { implDate: "2017/07/06", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "前衛戦術家", name: "ナルサス", fullName: "未来の宮廷画家ナルサス", male: 1, collabo: 1 }
    , { implDate: "2017/07/06", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "アーチャー", name: "ファランギース", fullName: "神の射手ファランギース", collabo: 1 }
    , { implDate: "2017/07/06", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "エレメンタラー", name: "セノーテ", fullName: "水霊使いセノーテ" }
    , { implDate: "2017/07/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "王太子", name: "アルスラーン", fullName: "王太子アルスラーン", male: 1, collabo: 1 }
    , { implDate: "2017/07/20", implDate_bq: "2019/05/23", obtain: "ev", rarity: "p" , depType: "van" , class: "くぐつ使い", name: "ティアル", fullName: "天駆の機甲士ティアル" }
    , { implDate: "2017/07/20", implDate_bq: "2018/05/17", obtain: "sh", rarity: "p" , depType: "van" , class: "ソードマスター", name: "リシェルテ", fullName: "純白の剣士リシェルテ" }
    , { implDate: "2017/07/20", implDate_bq: "2019/06/20", obtain: "ev", rarity: "g" , depType: "van" , class: "ソルジャー", name: "フィリス/浴衣", fullName: "浴衣の兵長フィリス" }
    , { implDate: "2017/07/27", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "ロイヤルガード", name: "ダリューン", fullName: "黒衣の騎士ダリューン", male: 1, collabo: 1 }
    , { implDate: "2017/07/27", implDate_bq: "2018/08/23", obtain: "sh", rarity: "b" , depType: "van" , class: "セーラー", name: "イブキ", fullName: "海軍元帥イブキ" }
    , { implDate: "2017/08/10", implDate_bq: "2018/09/20", obtain: "ev", rarity: "p" , depType: "van" , class: "ローグ", name: "サヨ", fullName: "義賊サヨ" }
    , { implDate: "2017/08/10", implDate_bq: "2020/03/12", obtain: "sh", rarity: "p" , depType: "rear", class: "ビショップ", name: "ポーラ/水着", fullName: "常夏の兎司祭ポーラ" }
    , { implDate: "2017/08/10", implDate_bq: "2020/07/16", obtain: "sh", rarity: "g" , depType: "van" , class: "ワルキューレ", name: "エレイン/水着", fullName: "夏陽の騎馬乙女エレイン" }
    , { implDate: "2017/08/10", implDate_bq: "2018/08/23", obtain: "tr", rarity: "g" , depType: "rear", class: "アーチャー", name: "ダニエラ/浴衣", fullName: "夜涼の射的兵ダニエラ" }
    , { implDate: "2017/08/24", implDate_bq: "2018/10/18", obtain: "sh", rarity: "p" , depType: "van" , class: "メイド", name: "リーナ", fullName: "妖魔の侍女リーナ" }
    , { implDate: "2017/08/31", implDate_bq: "2019/04/18", obtain: "sh", rarity: "b" , depType: "van" , class: "鍛冶職人", name: "ティニー", fullName: "ドワーフの姫ティニー" }
    , { implDate: "2017/09/14", implDate_bq: "2018/08/23", obtain: "ev", rarity: "b" , depType: "van" , class: "グラディエーター", name: "アナトリア", fullName: "オークの英雄アナトリア" }
    , { implDate: "2017/09/14", implDate_bq: "2019/02/21", obtain: "sh", rarity: "p" , depType: "van" , class: "ダークストーカー", name: "シェイド", fullName: "闇使いの剣士シェイド" }
    , { implDate: "2017/09/14", implDate_bq: "2020/08/13", obtain: "ev", rarity: "g" , depType: "rear", class: "ウィッチ", name: "カリオペ/サマー", fullName: "麦わら帽の魔女カリオペ" }
    , { implDate: "2017/09/21", implDate_bq: "2018/11/22", obtain: "sh", rarity: "b" , depType: "van" , class: "中級竜兵", name: "ヴルム", fullName: "帝国銀竜ヴルム" }
    , { implDate: "2017/09/21", implDate_bq: "2020/03/12", obtain: "sh", rarity: "b" , depType: "van" , class: "魔神", name: "メフィスト", fullName: "帝国魔神団長メフィスト" }
    , { implDate: "2017/09/21", implDate_bq: "2018/11/22", obtain: "sh", rarity: "p" , depType: "rear", class: "アルケミスト", name: "ヘルミーネ", fullName: "帝国錬金術士ヘルミーネ" }
    , { implDate: "2017/09/21", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "メイジアーマー", name: "ルーテ", fullName: "帝国魔鎧兵ルーテ" }
    , { implDate: "2017/09/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "モンスターブレイカー", name: "フォルテ", fullName: "帝国封印剣士フォルテ" }
    , { implDate: "2017/10/05", implDate_bq: "2019/06/20", obtain: "ev", rarity: "p" , depType: "van" , class: "インペリアルナイト", name: "アリーセ", fullName: "帝国騎士アリーセ" }
    , { implDate: "2017/10/05", implDate_bq: "2020/02/13", obtain: "sh", rarity: "p" , depType: "van" , class: "モンスターブレイカー", name: "ラテリア", fullName: "封獣の剣士ラテリア" }
    , { implDate: "2017/10/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびケイティ", fullName: "ちびケイティ" }
    , { implDate: "2017/10/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "アーチャー", name: "ちびナナリー", fullName: "ちびナナリー" }
    , { implDate: "2017/10/19", implDate_bq: "2018/09/20", obtain: "ev", rarity: "b" , depType: "rear", class: "シーフ", name: "サバル", fullName: "黒猫大怪盗サバル" }
    , { implDate: "2017/10/19", implDate_bq: "2019/05/23", obtain: "sh", rarity: "b" , depType: "rear", class: "マーチャント", name: "ディエーラ", fullName: "隊商長ディエーラ" }
    , { implDate: "2017/10/26", implDate_bq: "2019/10/24", obtain: "sh", rarity: "b" , depType: "van" , class: "イビルプリンセス", name: "ミサ", fullName: "祝祭の南瓜姫ミサ" }
    , { implDate: "2017/10/26", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "rear", class: "政務官", name: "アンナ/軍服", fullName: "戦場の政務官アンナ" }
    , { implDate: "2017/10/27", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "グランドナイト", name: "レイファ", fullName: "スズランの騎士レイファ" }
    , { implDate: "2017/11/02", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "魔物使い", name: "ブランシュ", fullName: "魔物使いブランシュ" }
    , { implDate: "2017/11/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ワルキューレ", name: "ちびキャリー", fullName: "ちびキャリー" }
    , { implDate: "2017/11/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ウィッチ", name: "ちびデスピア", fullName: "ちびデスピア" }
    , { implDate: "2017/11/11", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "エンジェル", name: "フォニア", fullName: "堕天使フォニア" }
    , { implDate: "2017/11/16", implDate_bq: "2019/06/20", obtain: "sh", rarity: "b" , depType: "van" , class: "ドラゴンプリンセス", name: "エルドラ", fullName: "金色の竜姫エルドラ" }
    , { implDate: "2017/11/22", implDate_bq: "2019/04/18", obtain: "ev", rarity: "p" , depType: "van" , class: "妖狐", name: "堕姫", fullName: "妖狐 堕姫" }
    , { implDate: "2017/11/22", implDate_bq: "2020/06/11", obtain: "sh", rarity: "b" , depType: "van" , class: "グリフィンライダー", name: "リュクス", fullName: "鷲獅騎兵リュクス" }
    , { implDate: "2017/11/30", implDate_bq: "2019/08/15", obtain: "sh", rarity: "b" , depType: "rear", class: "呪術使い", name: "オロチヒメ", fullName: "蛇霊の呪術師オロチヒメ" }
    , { implDate: "2017/12/07", implDate_bq: "2018/05/17", obtain: "ev", rarity: "p" , depType: "van" , class: "ロイヤルガード", name: "ネフティ", fullName: "聖槍の守護者ネフティ" }
    , { implDate: "2017/12/07", implDate_bq: "2018/12/27", obtain: "sh", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "ベルニス/クリスマス", fullName: "聖鈴の大盾ベルニス" }
    , { implDate: "2017/12/07", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "魔法剣士", name: "シャルロット/クリスマス", fullName: "聖夜の魔剣シャルロット" }
    , { implDate: "2017/12/07", implDate_bq: "2018/12/27", obtain: "ev", rarity: "p" , depType: "rear", class: "ダークプリースト", name: "プシュケ", fullName: "闇司祭プシュケ" }
    , { implDate: "2017/12/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "メイド", name: "ちびセーラ", fullName: "ちびセーラ" }
    , { implDate: "2017/12/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "アーチャー", name: "ちびソーマ", fullName: "ちびソーマ" }
    , { implDate: "2017/12/14", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "モンスターブレイカー", name: "テンマ", fullName: "封鎧の剣士テンマ" }
    , { implDate: "2017/12/15", implDate_bq: "2019/06/20", obtain: "sp", rarity: "p" , depType: "van" , class: "ローグ", name: "シプリア/クリスマス", fullName: "聖夜の盗賊シプリア" }
    , { implDate: "2017/12/28", implDate_bq: "2018/09/20", obtain: "ev", rarity: "p" , depType: "van" , class: "重装砲兵", name: "フリーデ", fullName: "帝国重装砲兵フリーデ" }
    , { implDate: "2017/12/28", implDate_bq: "2019/02/21", obtain: "sh", rarity: "b" , depType: "van" , class: "天狗", name: "クラマ", fullName: "黒翼の大天狗クラマ" }
    , { implDate: "2017/12/28", implDate_bq: "2021/03/18", obtain: "sh", rarity: "b" , depType: "rear", class: "エンチャンター", name: "アンリ", fullName: "付与魔術師アンリ" }
    
    // 2018
    , { implDate: "2018/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ヒーラー", name: "イリス/お正月", fullName: "春着の聖女イリス" }
    , { implDate: "2018/01/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ソルジャー", name: "ケイティ/お正月", fullName: "年賀の教官ケイティ" }
    , { implDate: "2018/01/01", implDate_bq: "2019/01/31", obtain: "ev", rarity: "g" , depType: "rear", class: "ヒーラー", name: "イーリス/お正月", fullName: "新春の癒し手イーリス" }
    , { implDate: "2018/01/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "サムライ", name: "ちびシズカ", fullName: "ちびシズカ" }
    , { implDate: "2018/01/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "妖狐", name: "ちびカヨウ", fullName: "ちびカヨウ" }
    , { implDate: "2018/01/11", implDate_bq: "2020/09/17", obtain: "sh", rarity: "p" , depType: "van" , class: "グランドナイト", name: "シェルト", fullName: "守護騎士シェルト" }
    , { implDate: "2018/01/25", implDate_bq: "2019/01/31", obtain: "ev", rarity: "p" , depType: "van" , class: "キョンシー", name: "ランファ", fullName: "屍骸道士ランファ" }
    , { implDate: "2018/01/25", implDate_bq: "2018/12/27", obtain: "sh", rarity: "b" , depType: "van" , class: "ヴァンパイアロード", name: "エマ", fullName: "絢爛の吸血鬼エマ" }
    , { implDate: "2018/02/01", implDate_bq: "2019/03/22", obtain: "sh", rarity: "p" , depType: "van" , class: "ダークストーカー", name: "チャーミィ", fullName: "闇使いチャーミィ" }
    , { implDate: "2018/02/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびオリヴィエ", fullName: "ちびオリヴィエ" }
    , { implDate: "2018/02/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ロイヤルガード", name: "ちびアリシア", fullName: "ちびアリシア" }
    , { implDate: "2018/02/08", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "モンク", name: "アリス/バレンタイン", fullName: "一途な武王姫アリス" }
    , { implDate: "2018/02/08", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "サモナー", name: "リノ/バレンタイン", fullName: "恋する召喚士リノ" }
    , { implDate: "2018/02/09", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "アコライト", name: "シィル", fullName: "ゼス王国の少女シィル", collabo: 1 }
    , { implDate: "2018/02/15", implDate_bq: "2018/10/18", obtain: "ev", rarity: "p" , depType: "van" , class: "鬼", name: "リンドウ", fullName: "蒼角の鬼娘リンドウ" }
    , { implDate: "2018/02/15", implDate_bq: "2019/02/21", obtain: "sh", rarity: "p" , depType: "van" , class: "鍛冶職人", name: "キャラット", fullName: "鍛冶職人キャラット" }
    , { implDate: "2018/02/15", implDate_bq: "2019/01/31", obtain: "ev", rarity: "p" , depType: "rear", class: "レンジャー", name: "リナリア", fullName: "魔界森の番人リナリア" }
    , { implDate: "2018/02/16", implDate_bq: "2019/02/21", obtain: "sp", rarity: "p" , depType: "rear", class: "ウィッチ", name: "リュリュ/バレンタイン", fullName: "甘菓子の魔女リュリュ" }
    , { implDate: "2018/02/22", implDate_bq: "2018/12/27", obtain: "sh", rarity: "b" , depType: "rear", class: "パイレーツ", name: "デューオ", fullName: "無双の海賊デューオ" }
    , { implDate: "2018/03/01", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "ダンサー", name: "シャルキー", fullName: "踊り子シャルキー" }
    , { implDate: "2018/03/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "モンク", name: "ちびモモ", fullName: "ちびモモ" }
    , { implDate: "2018/03/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "砲術士", name: "ちびフレデリカ", fullName: "ちびフレデリカ" }
    , { implDate: "2018/03/08", implDate_bq: "2021/10/14", obtain: "sh", rarity: "p" , depType: "van" , class: "サッパー", name: "ドリー", fullName: "技工兵ドリー" }
    , { implDate: "2018/03/15", implDate_bq: "2019/03/22", obtain: "sh", rarity: "p" , depType: "rear", class: "道化師", name: "ワンダーハート", fullName: "道化師ワンダーハート" }
    , { implDate: "2018/03/29", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "真人", name: "太公望", fullName: "太公望" }
    , { implDate: "2018/03/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "キョンシー", name: "スーシェン", fullName: "屍仙道士スーシェン" }
    , { implDate: "2018/03/29", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "グランドナイト", name: "サリス", fullName: "亡国の守護騎士サリス" }
    , { implDate: "2018/03/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "rear", class: "ライフリンカー", name: "サルース", fullName: "神鎖の救命師サルース" }
    , { implDate: "2018/04/05", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "メイジ", name: "メーリス/学園", fullName: "魔学の研修生メーリス" }
    , { implDate: "2018/04/05", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ウィッチ", name: "ネーニャ", fullName: "勤勉猫魔女ネーニャ" }
    , { implDate: "2018/04/05", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "rear", class: "パイレーツ", name: "ジョヴァンニ", fullName: "海賊番長ジョヴァンニ", male: 1 }
    , { implDate: "2018/04/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ヘビーアーマー", name: "ちびベルニス", fullName: "ちびベルニス" }
    , { implDate: "2018/04/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ダークファイター", name: "ちびコーネリア", fullName: "ちびコーネリア" }
    , { implDate: "2018/04/19", implDate_bq: "2019/04/18", obtain: "ev", rarity: "p" , depType: "rear", class: "アルケミスト", name: "レーレン", fullName: "錬金講師レーレン" }
    , { implDate: "2018/04/19", implDate_bq: "2019/06/20", obtain: "sh", rarity: "p" , depType: "van" , class: "モンスターブレイカー", name: "ティール", fullName: "封鋼の剣士ティール" }
    , { implDate: "2018/04/26", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "rear", class: "政務官", name: "アンナ/アイドル", fullName: "アイドル政務官アンナ" }
    , { implDate: "2018/04/26", implDate_bq: "2019/07/25", obtain: "sh", rarity: "b" , depType: "van" , class: "雷公", name: "レミィ", fullName: "雷神の娘レミィ" }
    , { implDate: "2018/04/26", implDate_bq: "2019/07/25", obtain: "sh", rarity: "b" , depType: "van" , class: "風伯", name: "クーコ", fullName: "風神の娘クーコ" }
    , { implDate: "2018/05/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ワルキューレ", name: "ちびクリッサ", fullName: "ちびクリッサ" }
    , { implDate: "2018/05/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "砲術士", name: "ちびメル", fullName: "ちびメル" }
    , { implDate: "2018/05/10", implDate_bq: "2019/05/23", obtain: "ev", rarity: "p" , depType: "rear", class: "風水使い", name: "メイファ", fullName: "風詠みの少女メイファ" }
    , { implDate: "2018/05/10", implDate_bq: "2019/11/14", obtain: "sh", rarity: "b" , depType: "van" , class: "インペリアルナイト", name: "ディアナ", fullName: "帝国騎士団長ディアナ" }
    , { implDate: "2018/05/10", implDate_bq: "2018/11/22", obtain: "sh", rarity: "p" , depType: "van" , class: "モンク", name: "リーザ", fullName: "帝国拳士リーザ" }
    , { implDate: "2018/05/10", implDate_bq: "2018/11/22", obtain: "sh", rarity: "p" , depType: "van" , class: "メイド", name: "マリカ", fullName: "帝国武術女官マリカ" }
    , { implDate: "2018/05/10", implDate_bq: "2018/11/22", obtain: "sh", rarity: "g" , depType: "van" , class: "ヘビーアーマー", name: "フィリーネ", fullName: "帝国重装歩兵フィリーネ" }
    , { implDate: "2018/05/11", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "van" , class: "天狗", name: "グレン", fullName: "天狗グレン", male: 1 }
    , { implDate: "2018/05/24", implDate_bq: "2019/03/22", obtain: "sh", rarity: "p" , depType: "van" , class: "ダークファイター", name: "ダルク", fullName: "暗黒騎士ダルク" }
    , { implDate: "2018/05/26", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "rear", class: "道化師", name: "プリスナ", fullName: "歪み角のプリスナ" }
    , { implDate: "2018/05/31", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "邪仙", name: "金光聖菩", fullName: "金光聖菩" }
    , { implDate: "2018/06/07", implDate_bq: "2019/03/22", obtain: "ev", rarity: "p" , depType: "rear", class: "ヴァンパイアハンター", name: "ヒューナ", fullName: "凶鳥の射手ヒューナ" }
    , { implDate: "2018/06/07", implDate_bq: "2019/01/31", obtain: "sh", rarity: "p" , depType: "van" , class: "プリンセス", name: "ジュリア", fullName: "ジュリア" }
    , { implDate: "2018/06/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ローグ", name: "ちびベルナ", fullName: "ちびベルナ" }
    , { implDate: "2018/06/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "サムライ", name: "ちびチズル", fullName: "ちびチズル" }
    , { implDate: "2018/06/14", implDate_bq: "2019/04/18", obtain: "sh", rarity: "p" , depType: "van" , class: "中級竜兵", name: "リキュノス", fullName: "蒼竜のリキュノス" }
    , { implDate: "2018/06/21", implDate_bq: "2019/05/23", obtain: "sh", rarity: "p" , depType: "van" , class: "エンジェル", name: "セフィーレ", fullName: "主天使セフィーレ" }
    , { implDate: "2018/06/28", implDate_bq: "2021/04/15", obtain: "ev", rarity: "p" , depType: "van" , class: "鍛冶職人", name: "ルミアン", fullName: "鍛冶職人ルミアン" }
    , { implDate: "2018/06/28", implDate_bq: "2020/06/11", obtain: "sh", rarity: "b" , depType: "rear", class: "風水使い", name: "リンネ/花嫁", fullName: "刻詠の花嫁リンネ" }
    , { implDate: "2018/07/05", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "アベンジャー", name: "ナキア", fullName: "黒渦角のナキア" }
    , { implDate: "2018/07/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "エンジェル", name: "ちびソフィー", fullName: "ちびソフィー" }
    , { implDate: "2018/07/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "サモナー", name: "ちびリノ", fullName: "ちびリノ" }
    , { implDate: "2018/07/12", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "サモナー", name: "ファルネ/花嫁", fullName: "花嫁姿の召喚士ファルネ" }
    , { implDate: "2018/07/12", implDate_bq: "2021/01/14", obtain: "sh", rarity: "p" , depType: "van" , class: "魔神", name: "ベルーフェ", fullName: "怠惰の魔神ベルーフェ" }
    , { implDate: "2018/07/19", implDate_bq: "2020/02/13", obtain: "sh", rarity: "p" , depType: "rear", class: "幻獣使い", name: "ホリー", fullName: "幻獣使いホリー" }
    , { implDate: "2018/07/19", implDate_bq: "2019/06/20", obtain: "ev", rarity: "p" , depType: "van" , class: "ワルキューレ", name: "キャリー", fullName: "渚の槍騎兵キャリー" }
    , { implDate: "2018/07/26", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "武将【恋姫】", name: "関羽", fullName: "関羽", collabo: 1 }
    , { implDate: "2018/07/26", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "軍師【恋姫】", name: "諸葛亮", fullName: "諸葛亮", collabo: 1 }
    , { implDate: "2018/07/26", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "武将【恋姫】", name: "趙雲", fullName: "趙雲", collabo: 1 }
    , { implDate: "2018/07/27", implDate_bq: null        , obtain: "sp", rarity: "b" , depType: "van" , class: "君主【恋姫】", name: "孫堅", fullName: "孫堅", collabo: 1 }
    , { implDate: "2018/08/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "エンジェル", name: "ちびエルン", fullName: "ちびエルン" }
    , { implDate: "2018/08/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ビショップ", name: "ちびエターナー", fullName: "ちびエターナー" }
    , { implDate: "2018/08/09", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "君主【恋姫】", name: "孫権", fullName: "孫権", collabo: 1 }
    , { implDate: "2018/08/09", implDate_bq: "2019/08/15", obtain: "sh", rarity: "b" , depType: "rear", class: "アーチャー", name: "ナナリー/浴衣", fullName: "白浴衣の弓乙女ナナリー" }
    , { implDate: "2018/08/09", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ヴァンパイアハンター", name: "フーリ/水着", fullName: "海辺の彩り狩人フーリ" }
    , { implDate: "2018/08/09", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "魔物使い", name: "シュシュ", fullName: "兎耳の魔物使いシュシュ" }
    , { implDate: "2018/08/23", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "サモナー", name: "アクアマリー", fullName: "召喚士アクアマリー" }
    , { implDate: "2018/08/30", implDate_bq: "2019/12/19", obtain: "sh", rarity: "b" , depType: "rear", class: "レンジャー", name: "ロヴィニア", fullName: "陽炎の森番ロヴィニア" }
    , { implDate: "2018/09/06", implDate_bq: "2021/12/09", obtain: "sh", rarity: "p" , depType: "van" , class: "真人", name: "竜吉公主", fullName: "竜吉公主" }
    , { implDate: "2018/09/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "モンク", name: "ちびアリス", fullName: "ちびアリス" }
    , { implDate: "2018/09/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "メイジ", name: "ちびメーリス", fullName: "ちびメーリス" }
    , { implDate: "2018/09/13", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "道化師", name: "紅牡丹", fullName: "千両かぶき姫 紅牡丹" }
    , { implDate: "2018/09/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "エレメンタラー", name: "ユキヒメ", fullName: "氷霊使いユキヒメ" }
    , { implDate: "2018/09/20", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ライフリンカー", name: "ルメディア", fullName: "命鎖使いルメディア" }
    , { implDate: "2018/09/20", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "シーフ", name: "ピッキー", fullName: "新進の泥棒ピッキー" }
    , { implDate: "2018/09/27", implDate_bq: "2020/12/17", obtain: "sh", rarity: "b" , depType: "rear", class: "ネクロマンサー", name: "メルアビス", fullName: "冥霊魔術師メルアビス" }
    , { implDate: "2018/10/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "クロノウィッチ", name: "アーリー", fullName: "時の魔女アーリー" }
    , { implDate: "2018/10/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびアルティア", fullName: "ちびアルティア" }
    , { implDate: "2018/10/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ローグ", name: "ちびセシリー", fullName: "ちびセシリー" }
    , { implDate: "2018/10/11", implDate_bq: "2019/05/23", obtain: "ev", rarity: "p" , depType: "van" , class: "サッパー", name: "マイン", fullName: "技工兵マイン" }
    , { implDate: "2018/10/11", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "イモータルプリンセス", name: "カルマ/ハロウィン", fullName: "南瓜祭の花嫁カルマ" }
    , { implDate: "2018/10/11", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "パイレーツ", name: "ヴェロッテ/ハロウィン", fullName: "仮装海賊ヴェロッテ" }
    , { implDate: "2018/10/25", implDate_bq: "2020/02/13", obtain: "ev", rarity: "b" , depType: "van" , class: "アベンジャー", name: "ノワール", fullName: "降魔の復讐者ノワール" }
    , { implDate: "2018/10/25", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "騎士【七つの大罪】", name: "メリオダス", fullName: "メリオダス", male: 1, collabo: 1 }
    , { implDate: "2018/10/25", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "王女【七つの大罪】", name: "エリザベス", fullName: "エリザベス", collabo: 1 }
    , { implDate: "2018/10/25", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "アーチャー", name: "キャロップ", fullName: "獣耳の射手キャロップ" }
    , { implDate: "2018/10/25", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "盗賊【七つの大罪】", name: "バン", fullName: "バン", male: 1, collabo: 1 }
    , { implDate: "2018/10/25", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "巨人【七つの大罪】", name: "ディアンヌ", fullName: "ディアンヌ", collabo: 1 }
    , { implDate: "2018/10/25", implDate_bq: "2019/05/23", obtain: "ev", rarity: "p" , depType: "rear", class: "メイジ", name: "キャンディ", fullName: "お菓子魔術師キャンディ" }
    , { implDate: "2018/11/01", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "妖精【七つの大罪】", name: "キング", fullName: "キング", male: 1, collabo: 1 }
    , { implDate: "2018/11/01", implDate_bq: "2019/11/14", obtain: "sh", rarity: "b" , depType: "van" , class: "サムライ", name: "ジュウベエ", fullName: "東国の大剣豪ジュウベエ" }
    , { implDate: "2018/11/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "アーチャー", name: "ちびスピカ", fullName: "ちびスピカ" }
    , { implDate: "2018/11/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびイリス", fullName: "ちびイリス" }
    , { implDate: "2018/11/15", implDate_bq: "2021/02/18", obtain: "ev", rarity: "p" , depType: "van" , class: "グリフィンライダー", name: "クゥイル", fullName: "鷲獅騎兵クゥイル" }
    , { implDate: "2018/11/15", implDate_bq: "2019/12/19", obtain: "sh", rarity: "p" , depType: "van" , class: "グラディエーター", name: "バルバラ", fullName: "猛勇剣闘士バルバラ" }
    , { implDate: "2018/11/15", implDate_bq: "2020/01/16", obtain: "tr", rarity: "b" , depType: "rear", class: "幻獣使い", name: "シンフー", fullName: "霊麟幻獣使シンフー" }
    , { implDate: "2018/11/22", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "van" , class: "モンク", name: "バイン", fullName: "兎耳武闘家バイン" }
    , { implDate: "2018/11/22", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ヒーラー", name: "アウローラ", fullName: "帝国治癒士長アウローラ" }
    , { implDate: "2018/11/22", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "くぐつ使い", name: "クリスタ", fullName: "帝国機甲士クリスタ" }
    , { implDate: "2018/11/22", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "マーチャント", name: "ターニャ", fullName: "帝国商人ターニャ" }
    , { implDate: "2018/11/22", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ダンサー", name: "ナターリエ", fullName: "帝国の舞姫ナターリエ" }
    , { implDate: "2018/11/29", implDate_bq: "2020/10/15", obtain: "sh", rarity: "b" , depType: "van" , class: "ボウライダー", name: "エメルダ", fullName: "翠森の弓騎兵エメルダ" }
    , { implDate: "2018/11/29", implDate_bq: "2020/01/16", obtain: "sh", rarity: "b" , depType: "rear", class: "道化師", name: "リズリー", fullName: "希代の天才道化リズリー" }
    , { implDate: "2018/11/29", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "rear", class: "デモンサモナー", name: "ちびラピス", fullName: "ちびラピス" }
    , { implDate: "2018/12/06", implDate_bq: "2019/09/26", obtain: "ev", rarity: "b" , depType: "van" , class: "魔王親衛隊", name: "シャディア", fullName: "魔王親衛隊シャディア" }
    , { implDate: "2018/12/06", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "メイド", name: "アリエル", fullName: "神癒の召使アリエル" }
    , { implDate: "2018/12/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびテミス", fullName: "ちびテミス" }
    , { implDate: "2018/12/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ロイヤルガード", name: "ちびミレイユ", fullName: "ちびミレイユ" }
    , { implDate: "2018/12/07", implDate_bq: null        , obtain: "sp", rarity: "b" , depType: "rear", class: "傀儡人形【封緘】", name: "リリカ", fullName: "リリカ", collabo: 1 }
    , { implDate: "2018/12/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "陰陽師", name: "タマミ", fullName: "陰陽師タマミ" }
    , { implDate: "2018/12/30", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "騎士【封緘】", name: "ダルフィア", fullName: "ダルフィア", collabo: 1 }
    , { implDate: "2018/12/30", implDate_bq: "2020/12/17", obtain: "sh", rarity: "b" , depType: "van" , class: "ダークファイター", name: "コーネリア/クリスマス", fullName: "暗黒聖夜騎士コーネリア" }
    , { implDate: "2018/12/30", implDate_bq: "2019/12/19", obtain: "sh", rarity: "p" , depType: "rear", class: "砲術士", name: "カノン", fullName: "聖夜の祝星砲カノン" }
    , { implDate: "2018/12/30", implDate_bq: "2019/11/14", obtain: "ev", rarity: "p" , depType: "rear", class: "ヒーラー", name: "カミラ", fullName: "聖祭の癒し手カミラ" }
    
    // 2019
    , { implDate: "2019/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "鬼", name: "鬼刃姫/お正月", fullName: "年賀の着衣始 鬼刃姫" }
    , { implDate: "2019/01/01", implDate_bq: "2020/01/16", obtain: "sh", rarity: "p" , depType: "rear", class: "マーチャント", name: "トトノ/お正月", fullName: "迎春の祝商人トトノ" }
    , { implDate: "2019/01/02", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "van" , class: "プリンセス", name: "ロゼット/お正月", fullName: "晴着の花姫ロゼット" }
    , { implDate: "2019/01/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "アベンジャー", name: "ちびドロシー", fullName: "ちびドロシー" }
    , { implDate: "2019/01/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "陰陽師", name: "ちびミコト", fullName: "ちびミコト" }
    , { implDate: "2019/01/10", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "エレメンタラー", name: "ジルヴァ", fullName: "雷霊使いジルヴァ" }
    , { implDate: "2019/01/17", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "妖狐", name: "イズナ", fullName: "妖狐イズナ" }
    , { implDate: "2019/01/24", implDate_bq: "2020/09/17", obtain: "ev", rarity: "p" , depType: "rear", class: "幻獣使い", name: "カリン", fullName: "幻獣使いカリン" }
    , { implDate: "2019/01/24", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ドラゴンプリンセス", name: "メリュジアナ", fullName: "竜姫メリュジアナ" }
    , { implDate: "2019/01/31", implDate_bq: "2021/08/12", obtain: "sh", rarity: "b" , depType: "rear", class: "ライフリンカー", name: "スピリア", fullName: "魂鎖の紡ぎ手スピリア" }
    , { implDate: "2019/02/07", implDate_bq: "2019/08/15", obtain: "ev", rarity: "p" , depType: "van" , class: "天狗", name: "ホムラ", fullName: "天狗ホムラ" }
    , { implDate: "2019/02/07", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "エンジェル", name: "ソフィー/バレンタイン", fullName: "恋慕の堕天使ソフィー" }
    , { implDate: "2019/02/07", implDate_bq: "2019/11/14", obtain: "sh", rarity: "p" , depType: "rear", class: "ダンサー", name: "マーニー/バレンタイン", fullName: "甘美な踊り子マーニー" }
    , { implDate: "2019/02/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "バンデット", name: "ちびアマンダ", fullName: "ちびアマンダ" }
    , { implDate: "2019/02/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "エンジェル", name: "ちびクロエ", fullName: "ちびクロエ" }
    , { implDate: "2019/02/21", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "バンデット", name: "リーフ/バレンタイン", fullName: "甘恋の山賊娘リーフ" }
    , { implDate: "2019/02/21", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ドラゴンライダー", name: "スイレン", fullName: "水龍騎士スイレン" }
    , { implDate: "2019/02/21", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "マーチャント", name: "ミネット", fullName: "ねこみみ商人ミネット" }
    , { implDate: "2019/02/21", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ビショップ", name: "ソレーユ", fullName: "見習い司祭ソレーユ" }
    , { implDate: "2019/02/21", implDate_bq: "2019/09/26", obtain: "ev", rarity: "p" , depType: "rear", class: "ルーンアコライト", name: "ソニア", fullName: "智慧の信徒ソニア" }
    , { implDate: "2019/02/25", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "van" , class: "ダークファイター", name: "アリエッタ", fullName: "迅雷の黒騎士アリエッタ" }
    , { implDate: "2019/02/28", implDate_bq: "2020/11/19", obtain: "sh", rarity: "b" , depType: "van" , class: "サッパー", name: "シャール", fullName: "爆突工兵シャール" }
    , { implDate: "2019/03/07", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "セーラー", name: "ジャクリーヌ", fullName: "航海士ジャクリーヌ" }
    , { implDate: "2019/03/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ペガサスライダー", name: "ちびリディ", fullName: "ちびリディ" }
    , { implDate: "2019/03/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "仙人", name: "ちびナタク", fullName: "ちびナタク" }
    , { implDate: "2019/03/14", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ペガサスライダー", name: "ジーニア", fullName: "天馬騎士副団長ジーニア" }
    , { implDate: "2019/03/21", implDate_bq: "2020/06/11", obtain: "ev", rarity: "p" , depType: "van" , class: "魔神", name: "マンモン", fullName: "強欲の魔神マンモン" }
    , { implDate: "2019/03/21", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "後衛戦術家", name: "シナト", fullName: "疾風の軍師シナト" }
    , { implDate: "2019/03/28", implDate_bq: "2021/06/17", obtain: "sh", rarity: "b" , depType: "van" , class: "グランドナイト", name: "アデライド", fullName: "王宮守護騎士アデライド" }
    , { implDate: "2019/04/04", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "邪仙", name: "王妃人", fullName: "王妃人" }
    , { implDate: "2019/04/04", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "クロノウィッチ", name: "トワ/学園", fullName: "時空魔法の優等生トワ" }
    , { implDate: "2019/04/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "エンジェル", name: "クロエ/学園", fullName: "堕天系お掃除当番クロエ" }
    , { implDate: "2019/04/04", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "van" , class: "ワルキューレ", name: "ミーシャ/学園", fullName: "騎兵科新入生ミーシャ" }
    , { implDate: "2019/04/04", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "van" , class: "魔法剣士", name: "リカルド/学園", fullName: "魔法科剣士リカルド", male: 1 }
    , { implDate: "2019/04/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "魔法剣士", name: "ちびイングリッド", fullName: "ちびイングリッド" }
    , { implDate: "2019/04/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "サモナー", name: "ちびソラノ", fullName: "ちびソラノ" }
    , { implDate: "2019/04/11", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "グリフィンライダー", name: "プルーム", fullName: "鷲獅騎兵プルーム" }
    , { implDate: "2019/04/18", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "鍛冶職人", name: "フィスティア", fullName: "手甲鍛冶師フィスティア" }
    , { implDate: "2019/04/25", implDate_bq: "2019/10/24", obtain: "ev", rarity: "p" , depType: "van" , class: "ヴァンパイアプリンセス", name: "エストリエ", fullName: "可憐な吸血姫エストリエ" }
    , { implDate: "2019/04/25", implDate_bq: "2022/03/10", obtain: "sh", rarity: "b" , depType: "rear", class: "ルーンアコライト", name: "エレオノーラ", fullName: "帝国司教エレオノーラ" }
    , { implDate: "2019/04/25", implDate_bq: "2019/10/24", obtain: "sh", rarity: "p" , depType: "van" , class: "ソードマスター", name: "ヴァイス", fullName: "帝国剣士ヴァイス" }
    , { implDate: "2019/04/25", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "ヒルデ", fullName: "帝国狙撃兵ヒルデ" }
    , { implDate: "2019/04/25", implDate_bq: "2021/05/13", obtain: "sh", rarity: "g" , depType: "van" , class: "ワルキューレ", name: "メーア", fullName: "帝国槍騎士メーア" }
    , { implDate: "2019/04/25", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "van" , class: "ローグ", name: "ヴィクター", fullName: "帝国暗部ヴィクター", male: 1 }
    , { implDate: "2019/05/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ローグ", name: "ちびキュテリ", fullName: "ちびキュテリ" }
    , { implDate: "2019/05/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "前衛戦術家", name: "ちびマツリ", fullName: "ちびマツリ" }
    , { implDate: "2019/05/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "イビルプリンセス", name: "スキュレ", fullName: "海魔の麗姫スキュレ" }
    , { implDate: "2019/05/16", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "砲術士", name: "エイプリル", fullName: "砲術教官エイプリル" }
    , { implDate: "2019/05/23", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "忍者", name: "ハツネ", fullName: "くノ一ハツネ" }
    , { implDate: "2019/05/30", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "エイル", fullName: "滅蟲の狙撃手エイル" }
    , { implDate: "2019/05/30", implDate_bq: "2020/03/12", obtain: "sh", rarity: "b" , depType: "van" , class: "ダークストーカー", name: "アンブレ", fullName: "冥闇の剣士アンブレ" }
    , { implDate: "2019/05/30", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "ボウライダー", name: "フラフィー", fullName: "純白の獣人フラフィー" }
    , { implDate: "2019/06/06", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "怪盗【GBM】", name: "ルパン", fullName: "ルパン", collabo: 1 }
    , { implDate: "2019/06/06", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "戯曲作家【GBM】", name: "ゲーテ", fullName: "ゲーテ", collabo: 1 }
    , { implDate: "2019/06/06", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "水底の支配者【GBM】", name: "ラヴクラフト", fullName: "ラヴクラフト", collabo: 1 }
    , { implDate: "2019/06/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびイーリス", fullName: "ちびイーリス" }
    , { implDate: "2019/06/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "後衛戦術家", name: "ちびアイシャ", fullName: "ちびアイシャ" }
    , { implDate: "2019/06/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "メイジアーマー", name: "アルマ", fullName: "魔導鎧娘アルマ" }
    , { implDate: "2019/06/20", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "錬金術師【GBM】", name: "ファウスト", fullName: "ファウスト", collabo: 1 }
    , { implDate: "2019/06/20", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "イモータルプリンセス", name: "ユーフェ", fullName: "紅剣の不死姫ユーフェ" }
    , { implDate: "2019/06/27", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "プリンセス", name: "オリヴィエ/花嫁", fullName: "誓いの妖精姫オリヴィエ" }
    , { implDate: "2019/06/27", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ロイヤルガード", name: "アリシア/花嫁", fullName: "契りの近衛騎士アリシア" }
    , { implDate: "2019/07/04", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "ローグ", name: "ベルナ/花嫁", fullName: "赤き盗賊花嫁ベルナ" }
    , { implDate: "2019/07/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "真人", name: "織姫", fullName: "織姫" }
    , { implDate: "2019/07/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびゼノビア", fullName: "ちびゼノビア" }
    , { implDate: "2019/07/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "セーラー", name: "ちびイブキ", fullName: "ちびイブキ" }
    , { implDate: "2019/07/11", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ヴァンパイアプリンセス", name: "シルヴィア/水着", fullName: "涼風の吸血姫シルヴィア" }
    , { implDate: "2019/07/11", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "陰陽師", name: "ミコト/水着", fullName: "波打ち際の陰陽師ミコト" }
    , { implDate: "2019/07/11", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "デモンサモナー", name: "ラピス/水着", fullName: "夏海の大悪魔ラピス" }
    , { implDate: "2019/07/11", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "エンジェル", name: "ミルノ/水着", fullName: "水着の天使長ミルノ" }
    , { implDate: "2019/07/11", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ソードマスター", name: "サンドラ/水着", fullName: "波斬りの剣士サンドラ" }
    , { implDate: "2019/07/11", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "アーチャー", name: "リタ/水着", fullName: "陽影の弓射手リタ" }
    , { implDate: "2019/07/11", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "モンスタースレイヤー", name: "ドルチェ/水着", fullName: "火遊びハンタードルチェ" }
    , { implDate: "2019/07/11", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "rear", class: "メイジ", name: "マーヤ/水着", fullName: "炎夏の魔術師マーヤ" }
    , { implDate: "2019/07/25", implDate_bq: "2021/07/15", obtain: "sh", rarity: "p" , depType: "van" , class: "鍛冶職人", name: "ミスリア", fullName: "魔剣鍛冶師ミスリア" }
    , { implDate: "2019/07/25", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "van" , class: "グランドナイト", name: "フルーリオ", fullName: "守護騎士フルーリオ" }
    , { implDate: "2019/08/01", implDate_bq: "2021/07/15", obtain: "ev", rarity: "p" , depType: "van" , class: "イビルプリンセス", name: "ピリカ", fullName: "狼剣の魔姫ピリカ" }
    , { implDate: "2019/08/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "奸雄【恋姫】", name: "曹操", fullName: "曹操", collabo: 1 }
    , { implDate: "2019/08/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "勇士【恋姫】", name: "呂布", fullName: "呂布", collabo: 1 }
    , { implDate: "2019/08/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "武将【恋姫】", name: "馬超", fullName: "馬超", collabo: 1 }
    , { implDate: "2019/08/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "魔法剣士", name: "ちびシャルロット", fullName: "ちびシャルロット" }
    , { implDate: "2019/08/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "魔物使い", name: "ちびモルテナ", fullName: "ちびモルテナ" }
    , { implDate: "2019/08/02", implDate_bq: null        , obtain: "sp", rarity: "b" , depType: "van" , class: "君主【恋姫】", name: "劉備", fullName: "劉備", collabo: 1 }
    , { implDate: "2019/08/15", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "軍師【恋姫】", name: "鳳統", fullName: "鳳統", collabo: 1 }
    , { implDate: "2019/08/15", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "エンチャンター", name: "ハーニィ", fullName: "付与魔術師ハーニィ" }
    , { implDate: "2019/08/22", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "雷公", name: "ラミィ/浴衣", fullName: "雷雲の浴衣ラミィ" }
    , { implDate: "2019/08/22", implDate_bq: "2021/08/12", obtain: "sh", rarity: "p" , depType: "van" , class: "風伯", name: "フーコ/浴衣", fullName: "風雲の浴衣フーコ" }
    , { implDate: "2019/08/22", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "van" , class: "邪仙", name: "ちび金光聖菩", fullName: "ちび金光聖菩" }
    , { implDate: "2019/08/29", implDate_bq: "2021/09/16", obtain: "sh", rarity: "b" , depType: "van" , class: "真人", name: "清源妙道真君", fullName: "清源妙道真君" }
    , { implDate: "2019/09/05", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ぬらりひょん", name: "サギリ", fullName: "ぬらりひょんの娘サギリ" }
    , { implDate: "2019/09/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "天狗", name: "ちびコノハ", fullName: "ちびコノハ" }
    , { implDate: "2019/09/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "クロノウィッチ", name: "ちびトワ", fullName: "ちびトワ" }
    , { implDate: "2019/09/12", implDate_bq: "2020/04/16", obtain: "ev", rarity: "g" , depType: "van" , class: "モンク", name: "マオ/浴衣", fullName: "浴衣の見返り拳士マオ" }
    , { implDate: "2019/09/12", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "邪仙", name: "胡喜美", fullName: "胡喜美" }
    , { implDate: "2019/09/12", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ルーンアコライト", name: "シャイーナ", fullName: "聖魔の信徒シャイーナ" }
    , { implDate: "2019/09/12", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ヴァンパイアハンター", name: "ピックル", fullName: "新米狩人ピックル" }
    , { implDate: "2019/09/12", implDate_bq: "2021/04/15", obtain: "ev", rarity: "p" , depType: "rear", class: "後衛戦術家", name: "イリオス", fullName: "オークの軍師イリオス" }
    , { implDate: "2019/09/19", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ドルイド", name: "メリーファ", fullName: "眠りの森巫女メリーファ" }
    , { implDate: "2019/09/26", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "鬼刃忍", name: "セツナ", fullName: "鬼刃忍セツナ" }
    , { implDate: "2019/10/03", implDate_bq: "2020/04/16", obtain: "sh", rarity: "p" , depType: "van" , class: "ランスマスター", name: "フィロ", fullName: "天穿の槍士フィロ" }
    , { implDate: "2019/10/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "妖狐", name: "ちびキュウビ", fullName: "ちびキュウビ" }
    , { implDate: "2019/10/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ビショップ", name: "ちびポーラ", fullName: "ちびポーラ" }
    , { implDate: "2019/10/10", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "メイジ", name: "フローガ", fullName: "紅の魔術師フローガ" }
    , { implDate: "2019/10/10", implDate_bq: "2021/10/14", obtain: "sh", rarity: "b" , depType: "rear", class: "ウィッチ", name: "デスピア/ハロウィン", fullName: "秋祭の大魔女デスピア" }
    , { implDate: "2019/10/10", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ヴァンパイアロード", name: "エデン/ハロウィン", fullName: "秋夜の吸血鬼エデン" }
    , { implDate: "2019/10/17", implDate_bq: "2020/10/15", obtain: "ev", rarity: "g" , depType: "van" , class: "ボウライダー", name: "ルナール/ハロウィン", fullName: "仮装の弓騎兵ルナール" }
    , { implDate: "2019/10/24", implDate_bq: "2022/10/13", obtain: "sh", rarity: "p" , depType: "van" , class: "モンスターブレイカー", name: "エレカ", fullName: "封機の剣士エレカ" }
    , { implDate: "2019/10/31", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "rear", class: "占星術師", name: "ソラス", fullName: "星を詠む者ソラス" }
    , { implDate: "2019/10/31", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "rear", class: "チェイスハンター", name: "ユージェン", fullName: "影を継ぐ者ユージェン" }
    , { implDate: "2019/10/31", implDate_bq: null        , obtain: "tr", rarity: "bh", depType: "van" , class: "魔竜騎士", name: "アトナテス", fullName: "深淵を知る者アトナテス", male: 1 }
    , { implDate: "2019/10/31", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "魔竜騎士", name: "アトナテス", fullName: "深淵を知る者アトナテス", male: 1 }
    , { implDate: "2019/10/31", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "rear", class: "占星術師", name: "ソラス", fullName: "星を詠む者ソラス" }
    , { implDate: "2019/10/31", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "rear", class: "チェイスハンター", name: "ユージェン", fullName: "影を継ぐ者ユージェン" }
    , { implDate: "2019/11/07", implDate_bq: "2020/07/16", obtain: "sh", rarity: "p" , depType: "van" , class: "前衛戦術家", name: "ルヴェア", fullName: "戦場指揮官ルヴェア" }
    , { implDate: "2019/11/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ヘビーアーマー", name: "ちびレアン", fullName: "ちびレアン" }
    , { implDate: "2019/11/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ダークプリースト", name: "ちびドロテア", fullName: "ちびドロテア" }
    , { implDate: "2019/11/14", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ダークファイター", name: "ヘイオス", fullName: "光闇の騎士ヘイオス" }
    , { implDate: "2019/11/21", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "呪術使い", name: "カタラ", fullName: "呪術師カタラ" }
    , { implDate: "2019/11/21", implDate_bq: "2023/02/09", obtain: "sh", rarity: "b" , depType: "rear", class: "ロード", name: "アレイダ", fullName: "帝国辺境総督アレイダ" }
    , { implDate: "2019/11/21", implDate_bq: "2022/08/10", obtain: "sh", rarity: "p" , depType: "rear", class: "支援工兵", name: "パトリシア", fullName: "帝国防塞工兵パトリシア" }
    , { implDate: "2019/11/21", implDate_bq: "2021/05/13", obtain: "sh", rarity: "g" , depType: "rear", class: "アーチャー", name: "エルネスタ", fullName: "帝国弓兵エルネスタ" }
    , { implDate: "2019/11/21", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "van" , class: "ドラゴンプリンセス", name: "クラシル", fullName: "翠色の竜姫クラシル" }
    , { implDate: "2019/11/28", implDate_bq: "2020/04/16", obtain: "sh", rarity: "b" , depType: "van" , class: "バンデット", name: "レオーネ", fullName: "百獣の覇者レオーネ" }
    , { implDate: "2019/11/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "エレメンタラー", name: "ルフレ", fullName: "光霊使いルフレ" }
    , { implDate: "2019/11/30", implDate_bq: null        , obtain: "sp", rarity: "s" , depType: "rear", class: "デモンシャーマン", name: "リィーリ", fullName: "魔神の落胤リィーリ" }
    , { implDate: "2019/12/05", implDate_bq: null        , obtain: "ev", rarity: "ph", depType: "rear", class: "ジオマンサー", name: "サナラ", fullName: "大地を紡ぐ者サナラ" }
    , { implDate: "2019/12/05", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "van" , class: "神官戦士", name: "エーテル/クリスマス", fullName: "聖光の修道戦士エーテル" }
    , { implDate: "2019/12/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ヴァンパイアプリンセス", name: "ちびシルヴィア", fullName: "ちびシルヴィア" }
    , { implDate: "2019/12/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ドルイド", name: "ちびメープル", fullName: "ちびメープル" }
    , { implDate: "2019/12/12", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "パイレーツ", name: "デューオ/クリスマス", fullName: "聖夜の炸裂海賊デューオ" }
    , { implDate: "2019/12/12", implDate_bq: "2020/12/17", obtain: "sh", rarity: "p" , depType: "rear", class: "サモナー", name: "ソラノ/クリスマス", fullName: "炎のサンタ召喚士ソラノ" }
    , { implDate: "2019/12/26", implDate_bq: "2021/06/17", obtain: "ev", rarity: "p" , depType: "both", class: "妖狸", name: "スズネ", fullName: "妖狸スズネ" }
    , { implDate: "2019/12/26", implDate_bq: "2022/12/08", obtain: "sh", rarity: "b" , depType: "van" , class: "デーモンロード", name: "ハルモニア", fullName: "調停の魔将ハルモニア" }
    , { implDate: "2019/12/26", implDate_bq: "2021/02/18", obtain: "sh", rarity: "b" , depType: "rear", class: "異界召喚士", name: "グリム", fullName: "異界召喚士グリム" }
    
    // 2020
    , { implDate: "2020/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ドラゴンプリンセス", name: "エルドラ/お正月", fullName: "振袖の金竜姫エルドラ" }
    , { implDate: "2020/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "呪術使い", name: "オロチヒメ/お正月", fullName: "迎春の呪姫オロチヒメ" }
    , { implDate: "2020/01/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ローグ", name: "ジュノン/お正月", fullName: "晴着の看板娘ジュノン" }
    , { implDate: "2020/01/02", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "rear", class: "レンジャー", name: "フウカ/お正月", fullName: "破魔の森番フウカ" }
    , { implDate: "2020/01/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "メイジアーマー", name: "ちびシルセス", fullName: "ちびシルセス" }
    , { implDate: "2020/01/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "風水使い", name: "ちびピピン", fullName: "ちびピピン" }
    , { implDate: "2020/01/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "道化師", name: "ラトゥール", fullName: "不敗の賭博師ラトゥール" }
    , { implDate: "2020/01/16", implDate_bq: "2023/06/15", obtain: "sh", rarity: "b" , depType: "van" , class: "犬神", name: "シロ", fullName: "犬神シロ" }
    , { implDate: "2020/01/17", implDate_bq: null        , obtain: "sp", rarity: "b" , depType: "rear", class: "新米刑事【流星WA】", name: "クラリス", fullName: "クラリス・ツァインブルグ", collabo: 1 }
    , { implDate: "2020/01/23", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "サムライ", name: "ハナダ", fullName: "さすらいの剣士ハナダ" }
    , { implDate: "2020/01/30", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "交通課職員【流星WA】", name: "四ノ宮小町", fullName: "四ノ宮小町", collabo: 1 }
    , { implDate: "2020/01/30", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "料理人", name: "オーガスタ", fullName: "天界のシェフオーガスタ" }
    , { implDate: "2020/02/06", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "神官戦士", name: "エクス/バレンタイン", fullName: "恋慕の神官戦士エクス" }
    , { implDate: "2020/02/06", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ボウライダー", name: "エメルダ/バレンタイン", fullName: "恋煩いの弓騎兵エメルダ" }
    , { implDate: "2020/02/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびロゼット", fullName: "ちびロゼット" }
    , { implDate: "2020/02/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "マーチャント", name: "ちびディエーラ", fullName: "ちびディエーラ" }
    , { implDate: "2020/02/20", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "rear", class: "ダンサー", name: "シャルキー/バレンタイン", fullName: "恋の応援団シャルキー" }
    , { implDate: "2020/02/20", implDate_bq: "2021/11/11", obtain: "sh", rarity: "p" , depType: "van" , class: "魔法剣士", name: "タラニア", fullName: "雷光の魔剣士タラニア" }
    , { implDate: "2020/02/20", implDate_bq: "2023/01/12", obtain: "sh", rarity: "p" , depType: "van" , class: "デモンルーン", name: "エフネ", fullName: "悪魔妖術師エフネ" }
    , { implDate: "2020/02/20", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ダンサー", name: "ブレリア", fullName: "紅の踊り子ブレリア" }
    , { implDate: "2020/02/20", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "魔神", name: "サオシュ", fullName: "魔神憑きサオシュ" }
    , { implDate: "2020/02/20", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "van" , class: "キョンシー", name: "ちびスーシェン", fullName: "ちびスーシェン" }
    , { implDate: "2020/02/27", implDate_bq: "2022/09/08", obtain: "sh", rarity: "b" , depType: "van" , class: "スチームナイト", name: "イザムバード", fullName: "蒸気騎士イザムバード" }
    , { implDate: "2020/03/05", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "both", class: "ロケットトルーパー", name: "オヴェリー", fullName: "筆頭飛行士オヴェリー" }
    , { implDate: "2020/03/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "パイレーツ", name: "ちびサブリナ", fullName: "ちびサブリナ" }
    , { implDate: "2020/03/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "アルケミスト", name: "ちびマキナ", fullName: "ちびマキナ" }
    , { implDate: "2020/03/12", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "道化師", name: "リズリー/温泉", fullName: "湯けむり奇術師リズリー" }
    , { implDate: "2020/03/12", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "レアン/温泉", fullName: "鉄泉の守護者レアン" }
    , { implDate: "2020/03/19", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ルーンアコライト", name: "エリス", fullName: "業火の信徒エリス" }
    , { implDate: "2020/03/26", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "魔物使い", name: "シュシュ/温泉", fullName: "湯上り魔物使いシュシュ" }
    , { implDate: "2020/03/26", implDate_bq: "2022/04/14", obtain: "sh", rarity: "b" , depType: "van" , class: "ぬえ", name: "ツグミ", fullName: "夜鳥ツグミ" }
    , { implDate: "2020/04/02", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "エンチャンター", name: "アンリ/学園", fullName: "頭脳派の体育祭アンリ" }
    , { implDate: "2020/04/02", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "エレメンタラー", name: "ユキヒメ/学園", fullName: "氷霊応援団ユキヒメ" }
    , { implDate: "2020/04/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "鍛冶職人", name: "ちびティニー", fullName: "ちびティニー" }
    , { implDate: "2020/04/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヴァンパイアハンター", name: "ちびフーリ", fullName: "ちびフーリ" }
    , { implDate: "2020/04/09", implDate_bq: null        , obtain: "tr", rarity: "g" , depType: "van" , class: "バンデット", name: "モーティマ/姫", fullName: "姫装山賊モーティマ", male: 1 }
    , { implDate: "2020/04/16", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "メイジアーマー", name: "ライチ/学園", fullName: "魔鎧科新入生ライチ" }
    , { implDate: "2020/04/16", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "エンプレス", name: "ハリナ", fullName: "亡国の女皇ハリナ" }
    , { implDate: "2020/04/16", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "サッパー", name: "カトリーナ", fullName: "帝国工兵カトリーナ" }
    , { implDate: "2020/04/16", implDate_bq: "2023/09/14", obtain: "sh", rarity: "g" , depType: "van" , class: "インペリアルナイト", name: "ゲルトルート", fullName: "帝国騎士ゲルトルート" }
    , { implDate: "2020/04/16", implDate_bq: "2023/06/15", obtain: "ev", rarity: "p" , depType: "rear", class: "デモンサモナー", name: "アイラ", fullName: "迷子の悪魔召喚士アイラ" }
    , { implDate: "2020/04/30", implDate_bq: "2023/10/12", obtain: "sh", rarity: "b" , depType: "van" , class: "デモンルーン", name: "エスネア", fullName: "黒翼の魔兵エスネア" }
    , { implDate: "2020/05/07", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "アルケミスト", name: "ニコル", fullName: "錬金調合師ニコル" }
    , { implDate: "2020/05/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "中級竜兵", name: "ちびヴルム", fullName: "ちびヴルム" }
    , { implDate: "2020/05/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "後衛戦術家", name: "ちびレオナ", fullName: "ちびレオナ" }
    , { implDate: "2020/05/14", implDate_bq: "2022/04/14", obtain: "sh", rarity: "p" , depType: "rear", class: "砲術士", name: "スミレ", fullName: "大砲組頭スミレ" }
    , { implDate: "2020/05/21", implDate_bq: "2022/07/14", obtain: "sh", rarity: "p" , depType: "van" , class: "スチームナイト", name: "ベアッカ", fullName: "蒸気騎士ベアッカ" }
    , { implDate: "2020/05/28", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "アベンジャー", name: "レティシア", fullName: "蒼紅の復讐者レティシア" }
    , { implDate: "2020/05/28", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "バーバリアンクイーン", name: "トゥアン", fullName: "万慧を砕く者トゥアン" }
    , { implDate: "2020/05/28", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "rear", class: "ジオマンサー", name: "サナラ", fullName: "大地を紡ぐ者サナラ" }
    , { implDate: "2020/05/28", implDate_bq: "2024/01/11", obtain: "ev", rarity: "p" , depType: "van" , class: "メイジアーマー", name: "フィナン", fullName: "信仰の魔鎧兵フィナン" }
    , { implDate: "2020/05/28", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "バーバリアンクイーン", name: "トゥアン", fullName: "万慧を砕く者トゥアン" }
    , { implDate: "2020/06/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ワルキューレ", name: "ちびエレイン", fullName: "ちびエレイン" }
    , { implDate: "2020/06/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ドルイド", name: "ちびフィオレ", fullName: "ちびフィオレ" }
    , { implDate: "2020/06/11", implDate_bq: "2022/06/09", obtain: "sh", rarity: "b" , depType: "rear", class: "ビショップ", name: "エターナー/花嫁", fullName: "久遠の花嫁エターナー" }
    , { implDate: "2020/06/11", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "くぐつ使い", name: "リッカ/花嫁", fullName: "双花の結婚式リッカ" }
    , { implDate: "2020/06/11", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ドラゴンライダー", name: "スイレン/花嫁", fullName: "清心の花嫁スイレン" }
    , { implDate: "2020/06/18", implDate_bq: "2022/06/09", obtain: "ev", rarity: "b" , depType: "rear", class: "マーチャント", name: "ディエーラ/花嫁", fullName: "約束の花嫁ディエーラ" }
    , { implDate: "2020/06/18", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "物語を渡る者【GBM】", name: "グリモワール", fullName: "グリモワール", collabo: 1 }
    , { implDate: "2020/06/18", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "心ある虫【GBM】", name: "虫子", fullName: "虫子", collabo: 1 }
    , { implDate: "2020/06/25", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "both", class: "妖狸", name: "ヤシマ", fullName: "妖狸ヤシマ" }
    , { implDate: "2020/07/02", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "刑事【GBM】", name: "ガニマール", fullName: "ガニマール", collabo: 1 }
    , { implDate: "2020/07/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "エンチャンター", name: "ちびアンリ", fullName: "ちびアンリ" }
    , { implDate: "2020/07/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "エレメンタラー", name: "ちびクラリーチェ", fullName: "ちびクラリーチェ" }
    , { implDate: "2020/07/09", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "妖狐", name: "キュウビ/水着", fullName: "妖狐の海水浴キュウビ" }
    , { implDate: "2020/07/09", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ソードマスター", name: "ジークリンデ/水着", fullName: "真夏の剣聖ジークリンデ" }
    , { implDate: "2020/07/09", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ルーンアコライト", name: "エレオノーラ/水着", fullName: "砂浜の司教エレオノーラ" }
    , { implDate: "2020/07/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ソルジャー", name: "リーゼロッテ/水着", fullName: "海の看板娘リーゼロッテ" }
    , { implDate: "2020/07/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "セーラー", name: "フレイ/水着", fullName: "水兵の夏休みフレイ" }
    , { implDate: "2020/07/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "後衛戦術家", name: "レオナ/水着", fullName: "軍師の息抜きレオナ" }
    , { implDate: "2020/07/22", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "前衛戦術家", name: "レオラ/水着", fullName: "魅惑の夏元帥レオラ" }
    , { implDate: "2020/07/22", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "犬神", name: "ツムジ", fullName: "犬神ツムジ" }
    , { implDate: "2020/07/26", implDate_bq: null        , obtain: "ev", rarity: "g" , depType: "van" , class: "ランスマスター", name: "コルム", fullName: "信仰の槍士コルム" }
    , { implDate: "2020/07/30", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "魔神", name: "メフィスト/水着", fullName: "魔神の水遊びメフィスト" }
    , { implDate: "2020/07/30", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "インペリアルナイト", name: "ディアナ/水着", fullName: "誘惑の日差しディアナ" }
    , { implDate: "2020/07/30", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ヒーラー", name: "アウローラ/水着", fullName: "砂浜に咲く花アウローラ" }
    , { implDate: "2020/07/30", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ワルキューレ", name: "メーア/水着", fullName: "完全無欠の夏休みメーア" }
    , { implDate: "2020/07/30", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ヒーラー", name: "エリアス/水着", fullName: "夏風の治癒士エリアス" }
    , { implDate: "2020/07/30", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ダンサー", name: "ナターリエ/水着", fullName: "真夏の公演ナターリエ" }
    , { implDate: "2020/08/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびリーゼロッテ", fullName: "ちびリーゼロッテ" }
    , { implDate: "2020/08/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "魔神", name: "ちびメフィスト", fullName: "ちびメフィスト" }
    , { implDate: "2020/08/13", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "レンジャー", name: "ローザ/水着", fullName: "真夏のいざないローザ" }
    , { implDate: "2020/08/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ライフリンカー", name: "スピリア/浴衣", fullName: "宵の花鎖スピリア" }
    , { implDate: "2020/08/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "神官戦士", name: "フェルミ/浴衣", fullName: "祭夜の神官戦士フェルミ" }
    , { implDate: "2020/08/13", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "重装砲兵", name: "レギーナ/浴衣", fullName: "夜祭の重装砲兵レギーナ" }
    , { implDate: "2020/08/27", implDate_bq: "2024/01/11", obtain: "sh", rarity: "b" , depType: "both", class: "ロケットトルーパー", name: "クレール", fullName: "飛行警備隊長クレール" }
    , { implDate: "2020/09/03", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "邪仙", name: "趙紅明", fullName: "趙紅明" }
    , { implDate: "2020/09/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "モンスターブレイカー", name: "ちびテンマ", fullName: "ちびテンマ" }
    , { implDate: "2020/09/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびリアナ", fullName: "ちびリアナ" }
    , { implDate: "2020/09/10", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "ソルジャー", name: "ノーマ", fullName: "紅蓮の兵士長ノーマ" }
    , { implDate: "2020/09/10", implDate_bq: "2022/09/08", obtain: "sh", rarity: "p" , depType: "van" , class: "料理人", name: "タオパオ", fullName: "炎の厨師タオパオ" }
    , { implDate: "2020/09/10", implDate_bq: "2023/03/16", obtain: "sh", rarity: "p" , depType: "van" , class: "かまいたち", name: "金糸雀姉妹", fullName: "かまいたち金糸雀姉妹" }
    , { implDate: "2020/09/10", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "料理人", name: "ヤマブキ", fullName: "東の料理番ヤマブキ" }
    , { implDate: "2020/09/10", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "ロード", name: "メアリ", fullName: "翠花の領主メアリ" }
    , { implDate: "2020/09/10", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "van" , class: "料理人", name: "ちびオーガスタ", fullName: "ちびオーガスタ" }
    , { implDate: "2020/09/17", implDate_bq: "2022/07/14", obtain: "sh", rarity: "p" , depType: "rear", class: "発明家", name: "タバサ", fullName: "奇想の発明家タバサ" }
    , { implDate: "2020/09/17", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "アクアナイト", name: "マルスィ", fullName: "潜水騎士マルスィ" }
    , { implDate: "2020/09/17", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "rear", class: "シービショップ", name: "リバン", fullName: "見習い海巫女リバン" }
    , { implDate: "2020/09/24", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ランスマスター", name: "トモエ", fullName: "風花の槍士トモエ" }
    , { implDate: "2020/10/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "符術士", name: "アキラ", fullName: "符術士アキラ" }
    , { implDate: "2020/10/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ヘビーアーマー", name: "ちびディーナ", fullName: "ちびディーナ" }
    , { implDate: "2020/10/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "パイレーツ", name: "ちびミネルバ", fullName: "ちびミネルバ" }
    , { implDate: "2020/10/08", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "モンスターブレイカー", name: "レンゲ", fullName: "封妖の弓士レンゲ" }
    , { implDate: "2020/10/08", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ドラゴンシャーマン", name: "ペドラ", fullName: "易占竜ペドラ" }
    , { implDate: "2020/10/15", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ダークストーカー", name: "アンブレ/ハロウィン", fullName: "怪夜の仮装剣士アンブレ" }
    , { implDate: "2020/10/15", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ネクロマンサー", name: "メメント/ハロウィン", fullName: "菓子祭の魔術師メメント" }
    , { implDate: "2020/10/29", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "デモンサモナー", name: "リヴル/ハロウィン", fullName: "秋祭の召喚士リヴル" }
    , { implDate: "2020/10/29", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "古代魔導機兵", name: "アージェ", fullName: "万機の祖たる者アージェ" }
    , { implDate: "2020/10/29", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "rear", class: "転生魔導士", name: "アンブローズ", fullName: "巡り咲く者アンブローズ" }
    , { implDate: "2020/10/29", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "古代魔導機兵", name: "アージェ", fullName: "万機の祖たる者アージェ" }
    , { implDate: "2020/10/29", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "rear", class: "転生魔導士", name: "アンブローズ", fullName: "巡り咲く者アンブローズ" }
    , { implDate: "2020/11/05", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "アクアナイト", name: "セディナ", fullName: "潜泳騎士セディナ" }
    , { implDate: "2020/11/05", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "both", class: "スカイウォリアー", name: "鳥人戦士", fullName: "鳶翼の鳥人戦士", male: 1 }
    , { implDate: "2020/11/05", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "both", class: "スカイシューター", name: "アエロ", fullName: "雀翼の射手アエロ" }
    , { implDate: "2020/11/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびアンジェリーネ", fullName: "ちびアンジェリーネ" }
    , { implDate: "2020/11/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソードマスター", name: "ちびジークリンデ", fullName: "ちびジークリンデ" }
    , { implDate: "2020/11/12", implDate_bq: "2022/01/13", obtain: "ev", rarity: "p" , depType: "both", class: "スカイウォリアー", name: "ライノー", fullName: "鷲翼の戦士ライノー" }
    , { implDate: "2020/11/12", implDate_bq: "2021/11/11", obtain: "sh", rarity: "b" , depType: "rear", class: "メイジ", name: "テュト", fullName: "妖精賢者テュト" }
    , { implDate: "2020/11/12", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "アーチャー", name: "ポミエ", fullName: "紅玉の射手ポミエ" }
    , { implDate: "2020/11/12", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "ヒーラー", name: "シンディ", fullName: "治癒術士シンディ" }
    , { implDate: "2020/11/19", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "プリンセス", name: "ヨシノ", fullName: "ヨシノ" }
    , { implDate: "2020/11/26", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "both", class: "スカイシューター", name: "オーキュ", fullName: "覚賀鳥の射手オーキュ" }
    , { implDate: "2020/11/26", implDate_bq: "2022/08/10", obtain: "sh", rarity: "b" , depType: "rear", class: "幻獣使い", name: "ツキコ", fullName: "彷徨の幻獣使いツキコ" }
    , { implDate: "2020/11/26", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "発明家", name: "ヘンドリカ", fullName: "帝国発明家ヘンドリカ" }
    , { implDate: "2020/11/26", implDate_bq: "2022/03/10", obtain: "sh", rarity: "p" , depType: "both", class: "スカウト", name: "カーナ", fullName: "帝国斥候カーナ" }
    , { implDate: "2020/11/26", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "both", class: "ロケットトルーパー", name: "ケイトリッジ", fullName: "帝国飛行士ケイトリッジ" }
    , { implDate: "2020/12/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ローグ", name: "ちびジュノン", fullName: "ちびジュノン" }
    , { implDate: "2020/12/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ドラゴンライダー", name: "ちびティファ", fullName: "ちびティファ" }
    , { implDate: "2020/12/10", implDate_bq: "2023/12/14", obtain: "ev", rarity: "b" , depType: "both", class: "スカイウォリアー", name: "パリオス", fullName: "白翼の戦士パリオス" }
    , { implDate: "2020/12/10", implDate_bq: null        , obtain: "ev", rarity: "ph", depType: "van" , class: "銀腕の神話", name: "トラム", fullName: "銀腕を掲げし者トラム" }
    , { implDate: "2020/12/10", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ドラゴンライダー", name: "ティファ/クリスマス", fullName: "聖なる銀夜ティファ" }
    , { implDate: "2020/12/10", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ダンサー", name: "ブレリア/クリスマス", fullName: "聖夜の踊り子ブレリア" }
    , { implDate: "2020/12/24", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "ダークファイター", name: "ヘイオス/クリスマス", fullName: "光と闇の聖夜ヘイオス" }
    , { implDate: "2020/12/24", implDate_bq: "2022/10/13", obtain: "sh", rarity: "b" , depType: "rear", class: "シービショップ", name: "ハルフゥ", fullName: "紫鱗の海巫女ハルフゥ" }
    , { implDate: "2020/12/24", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "狛犬", name: "コマ", fullName: "狛犬コマ" }
    , { implDate: "2020/12/24", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ウィッチ", name: "ユーティ", fullName: "森の魔女ユーティ" }
    , { implDate: "2020/12/24", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "シーソルジャー", name: "オーベッド", fullName: "魚人戦士オーベッド", male: 1 }
    
    // 2021
    , { implDate: "2021/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "魔王親衛隊", name: "シャディア/お正月", fullName: "晴着の親衛隊シャディア" }
    , { implDate: "2021/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "異界召喚士", name: "グリム/お正月", fullName: "新春召喚始めグリム" }
    , { implDate: "2021/01/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "デモンルーン", name: "エフネ/お正月", fullName: "悪魔の新春祝いエフネ" }
    , { implDate: "2021/01/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "魔王親衛隊", name: "ちびシャディア", fullName: "ちびシャディア" }
    , { implDate: "2021/01/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "呪術使い", name: "ちびオロチヒメ", fullName: "ちびオロチヒメ" }
    , { implDate: "2021/01/14", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ヴァンパイアロード", name: "エマ/温泉", fullName: "湯けむり吸血鬼エマ" }
    , { implDate: "2021/01/14", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "魔神", name: "サオシュ/温泉", fullName: "温泉の魔神憑きサオシュ" }
    , { implDate: "2021/01/28", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "アーチャー", name: "ソーマ/温泉", fullName: "弓兵の湯浴みソーマ" }
    , { implDate: "2021/01/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "忍者", name: "チヨメ", fullName: "くノ一チヨメ" }
    , { implDate: "2021/02/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "テレーゼ", fullName: "陽光の獅盾テレーゼ" }
    , { implDate: "2021/02/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ヴァンパイアロード", name: "ちびエマ", fullName: "ちびエマ" }
    , { implDate: "2021/02/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ネクロマンサー", name: "ちびメメント", fullName: "ちびメメント" }
    , { implDate: "2021/02/10", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "ワルキューレ", name: "スルーズ", fullName: "天槍騎士団スルーズ" }
    , { implDate: "2021/02/10", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "料理人", name: "オーガスタ/バレンタイン", fullName: "神業菓子職人オーガスタ" }
    , { implDate: "2021/02/10", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "前衛戦術家", name: "ルヴェア/バレンタイン", fullName: "慕情の指揮官ルヴェア" }
    , { implDate: "2021/02/25", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "神官戦士", name: "エレット/バレンタイン", fullName: "内緒の告白エレット" }
    , { implDate: "2021/02/25", implDate_bq: "2021/12/09", obtain: "sh", rarity: "b" , depType: "van" , class: "キョンシー", name: "フーロン", fullName: "幽境道士フーロン" }
    , { implDate: "2021/02/25", implDate_bq: "2022/02/10", obtain: "sh", rarity: "b" , depType: "rear", class: "フェンリルシャーマン", name: "ツァーユ", fullName: "白狼の朋ツァーユ" }
    , { implDate: "2021/02/25", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "料理人", name: "キホル", fullName: "魔界料理人キホル" }
    , { implDate: "2021/02/25", implDate_bq: "2023/08/10", obtain: "ev", rarity: "b" , depType: "van" , class: "鬼刃忍", name: "タチバナ", fullName: "鬼刃忍タチバナ" }
    , { implDate: "2021/02/25", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "rear", class: "エレメンタラー", name: "ちびルフレ", fullName: "ちびルフレ" }
    , { implDate: "2021/03/04", implDate_bq: "2023/04/13", obtain: "sh", rarity: "p" , depType: "van" , class: "スチームナイト", name: "ユカリ", fullName: "蒸気武者ユカリ" }
    , { implDate: "2021/03/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "アーチャー", name: "ちびアーシェラ", fullName: "ちびアーシェラ" }
    , { implDate: "2021/03/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ダンサー", name: "ちびミヤビ", fullName: "ちびミヤビ" }
    , { implDate: "2021/03/18", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "メイド", name: "サクラ", fullName: "東国武装女中サクラ" }
    , { implDate: "2021/03/25", implDate_bq: "2022/01/13", obtain: "sh", rarity: "b" , depType: "rear", class: "エレメンタラー", name: "ニーヴ", fullName: "混沌霊使いニーヴ" }
    , { implDate: "2021/04/01", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "テンプルナイト", name: "アレクシア", fullName: "背教の騎士アレクシア" }
    , { implDate: "2021/04/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ウィッチ", name: "リエーフ", fullName: "百獣の魔術師リエーフ" }
    , { implDate: "2021/04/01", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "ソルジャー", name: "アビー", fullName: "新米兵士アビー" }
    , { implDate: "2021/04/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ドラゴンプリンセス", name: "ちびエルドラ", fullName: "ちびエルドラ" }
    , { implDate: "2021/04/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "神官戦士", name: "ちびセラ", fullName: "ちびセラ" }
    , { implDate: "2021/04/07", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "迷宮の悪霊", name: "ニミュエ", fullName: "孤独な迷宮守ニミュエ" }
    , { implDate: "2021/04/08", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "オートマタ", name: "ルイン", fullName: "自動人形ルイン" }
    , { implDate: "2021/04/08", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "デモンルーン", name: "エスネア/学園", fullName: "魔界からの留学エスネア" }
    , { implDate: "2021/04/08", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "マーチャント", name: "ミネット/学園", fullName: "ねこみみ購買部ミネット" }
    , { implDate: "2021/04/22", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "天狗", name: "ホムラ/学園", fullName: "茜色の女番長ホムラ" }
    , { implDate: "2021/04/22", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "天狗", name: "グレン/学園", fullName: "仮面の天狗教師グレン", male: 1 }
    , { implDate: "2021/04/22", implDate_bq: "2023/08/10", obtain: "sh", rarity: "p" , depType: "van" , class: "ぬりかべ", name: "シラヌイ", fullName: "ぬりかべシラヌイ" }
    , { implDate: "2021/04/22", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "かまいたち", name: "紫苑姉妹", fullName: "かまいたち紫苑姉妹" }
    , { implDate: "2021/04/28", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "銀腕の神話", name: "トラム", fullName: "銀腕を掲げし者トラム" }
    , { implDate: "2021/04/28", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "ウェポンマスター", name: "アルヴァ", fullName: "万刃を担う者アルヴァ" }
    , { implDate: "2021/04/28", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "ウェポンマスター", name: "アルヴァ", fullName: "万刃を担う者アルヴァ" }
    , { implDate: "2021/05/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "鬼", name: "ちび鬼刃姫", fullName: "ちび鬼刃姫" }
    , { implDate: "2021/05/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "風水使い", name: "ちびリンネ", fullName: "ちびリンネ" }
    , { implDate: "2021/05/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "鬼【ななリン】", name: "葵", fullName: "葵", collabo: 1 }
    , { implDate: "2021/05/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "鬼【ななリン】", name: "アイリス", fullName: "アイリス", collabo: 1 }
    , { implDate: "2021/05/27", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "鬼【ななリン】", name: "芙蓉", fullName: "芙蓉", collabo: 1 }
    , { implDate: "2021/05/27", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "アーチャー", name: "ナナリー/花嫁", fullName: "白き花嫁ナナリー" }
    , { implDate: "2021/05/27", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ドラゴンプリンセス", name: "メリュジアナ/花嫁", fullName: "竜姫婚姻譚メリュジアナ" }
    , { implDate: "2021/05/27", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "中級竜兵", name: "ウィリアス", fullName: "緑竜のウィリアス" }
    , { implDate: "2021/05/27", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "メイジ", name: "ミェール", fullName: "駆け出し魔術師ミェール" }
    , { implDate: "2021/06/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "くぐつ使い", name: "ちびウェンディ", fullName: "ちびウェンディ" }
    , { implDate: "2021/06/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "重装砲兵", name: "ちびエルミラ", fullName: "ちびエルミラ" }
    , { implDate: "2021/06/10", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "メイジアーマー", name: "シルセス/花嫁", fullName: "星天の花嫁シルセス" }
    , { implDate: "2021/06/10", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "儀式魔術師", name: "ヘカティエ", fullName: "冥界の魔術師ヘカティエ" }
    , { implDate: "2021/06/10", implDate_bq: "2023/02/09", obtain: "sh", rarity: "p" , depType: "van" , class: "料理人", name: "ユッタ", fullName: "帝国料理人ユッタ" }
    , { implDate: "2021/06/10", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "幻術士", name: "マルティナ", fullName: "帝国幻術士マルティナ" }
    , { implDate: "2021/06/10", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "重装砲兵", name: "シュペット", fullName: "帝国重装砲兵シュペット" }
    , { implDate: "2021/06/10", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "rear", class: "ダークプリースト", name: "マレブランケ", fullName: "魔神副団長マレブランケ" }
    , { implDate: "2021/06/24", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "アクアナイト", name: "ヴィアベル", fullName: "潜航騎士ヴィアベル" }
    , { implDate: "2021/06/24", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "アクアナイト", name: "キュステ", fullName: "新人潜水騎士キュステ" }
    , { implDate: "2021/07/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "メイド", name: "セーラ/水着", fullName: "水着の筆頭侍女セーラ" }
    , { implDate: "2021/07/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "グラディエーター", name: "アナトリア/水着", fullName: "灼熱の夏英雄アナトリア" }
    , { implDate: "2021/07/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "幻獣使い", name: "ツキコ/水着", fullName: "八咫の夏陽ツキコ" }
    , { implDate: "2021/07/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ロード", name: "アレイダ/水着", fullName: "海遊総督アレイダ" }
    , { implDate: "2021/07/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "くぐつ使い", name: "クリスタ/水着", fullName: "満喫海遊びクリスタ" }
    , { implDate: "2021/07/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ボウライダー", name: "マーガレット/水着", fullName: "夏の輝きマーガレット" }
    , { implDate: "2021/07/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "インペリアルナイト", name: "アリーセ/水着", fullName: "清爽騎士アリーセ" }
    , { implDate: "2021/07/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "グリフィンライダー", name: "クゥイル/水着", fullName: "真夏に薫る風クゥイル" }
    , { implDate: "2021/07/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "グリフィンライダー", name: "ちびリュクス", fullName: "ちびリュクス" }
    , { implDate: "2021/07/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヴァンパイアハンター", name: "ちびスー", fullName: "ちびスー" }
    , { implDate: "2021/07/15", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "ネクロマンサー", name: "メルアビス/水着", fullName: "冥霊たちの夏メルアビス" }
    , { implDate: "2021/07/15", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ヒーラー", name: "イーリス/水着", fullName: "癒しの涼波イーリス" }
    , { implDate: "2021/07/21", implDate_bq: "2022/02/10", obtain: "sh", rarity: "p" , depType: "van" , class: "シーソルジャー", name: "フィーヌ", fullName: "翠玉の深海兵フィーヌ" }
    , { implDate: "2021/07/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ローグ", name: "シネイド", fullName: "影刃の工作員シネイド" }
    , { implDate: "2021/07/29", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "rear", class: "ヒーラー", name: "ドゥマルデ", fullName: "異端審問官ドゥマルデ", male: 1 }
    , { implDate: "2021/08/05", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "幻術士", name: "リュティエ", fullName: "向日葵の幻リュティエ" }
    , { implDate: "2021/08/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "神官戦士", name: "ちびエクス", fullName: "ちびエクス" }
    , { implDate: "2021/08/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "猫又", name: "ちびコハル", fullName: "ちびコハル" }
    , { implDate: "2021/08/12", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ハーバリスト", name: "ローズ", fullName: "王宮薬草師ローズ" }
    , { implDate: "2021/08/12", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "雷公", name: "レミィ/浴衣", fullName: "雷雲の浴衣レミィ" }
    , { implDate: "2021/08/12", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "風伯", name: "クーコ/浴衣", fullName: "風雲の浴衣クーコ" }
    , { implDate: "2021/08/12", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "クロノウィッチ", name: "ココロ/浴衣", fullName: "お祭り夕涼みココロ" }
    , { implDate: "2021/08/12", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "アーチャー", name: "ベラ/浴衣", fullName: "晩夏の狩人ベラ" }
    , { implDate: "2021/08/26", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "霊刀つくもがみ", name: "ユキザクラ", fullName: "呪刀付喪神ユキザクラ" }
    , { implDate: "2021/08/26", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "霊刀つくもがみ", name: "フジムラサキ", fullName: "名刀付喪神フジムラサキ" }
    , { implDate: "2021/09/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "雷公", name: "ちびレミィ", fullName: "ちびレミィ" }
    , { implDate: "2021/09/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "風伯", name: "ちびクーコ", fullName: "ちびクーコ" }
    , { implDate: "2021/09/09", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "霊刀つくもがみ", name: "カザキリ", fullName: "斬刀付喪神カザキリ" }
    , { implDate: "2021/09/09", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "ワルキューレ", name: "ピューロ", fullName: "純真の槍騎兵ピューロ" }
    , { implDate: "2021/09/09", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "シーソルジャー", name: "リトヴァ", fullName: "淡紅の深海兵リトヴァ" }
    , { implDate: "2021/09/09", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "パイレーツ", name: "カリナ", fullName: "可憐海賊カリナ" }
    , { implDate: "2021/09/09", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "both", class: "スカイシューター", name: "フーザント", fullName: "黒翼の射手フーザント" }
    , { implDate: "2021/09/16", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "霊宝つくもがみ", name: "シュカ", fullName: "分福茶釜付喪神シュカ" }
    , { implDate: "2021/09/22", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "スカラー", name: "アナベラ", fullName: "知識の求道者アナベラ" }
    , { implDate: "2021/09/22", implDate_bq: "2022/05/12", obtain: "sh", rarity: "b" , depType: "van" , class: "モンスターブレイカー", name: "ランヒルド", fullName: "封魔の剣士ランヒルド" }
    , { implDate: "2021/09/22", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "戦巫女", name: "コウメ", fullName: "戦巫女コウメ" }
    , { implDate: "2021/09/22", implDate_bq: "2022/05/12", obtain: "sh", rarity: "p" , depType: "both", class: "スカウト", name: "ミリアム", fullName: "鷹目の偵察兵ミリアム" }
    , { implDate: "2021/09/22", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "重装砲兵", name: "ヴァネッサ", fullName: "鋼の重装砲兵ヴァネッサ" }
    , { implDate: "2021/09/22", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "van" , class: "キョンシー", name: "ちびフーロン", fullName: "ちびフーロン" }
    , { implDate: "2021/09/30", implDate_bq: "2023/03/16", obtain: "sh", rarity: "b" , depType: "rear", class: "夜行さん", name: "ヨユキ", fullName: "夜行さん現当主ヨユキ" }
    , { implDate: "2021/10/07", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "料理人", name: "アヅミ", fullName: "山姫アヅミ" }
    , { implDate: "2021/10/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "メイジアーマー", name: "ちびグレース", fullName: "ちびグレース" }
    , { implDate: "2021/10/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "モンスタースレイヤー", name: "ちびソシエ", fullName: "ちびソシエ" }
    , { implDate: "2021/10/14", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "both", class: "スカイウォリアー", name: "パリオス/ハロウィン", fullName: "悪戯な白翼パリオス" }
    , { implDate: "2021/10/14", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ローグ", name: "セブン/ハロウィン", fullName: "仮装盗賊セブン" }
    , { implDate: "2021/10/28", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "エンジェル", name: "セフィーレ/ハロウィン", fullName: "天使の悪戯セフィーレ" }
    , { implDate: "2021/10/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ソルジャー", name: "マルゴット", fullName: "帝国教導隊長マルゴット" }
    , { implDate: "2021/10/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "サッパー", name: "カテリナ", fullName: "帝国筆頭工兵カテリナ" }
    , { implDate: "2021/10/28", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "エルデ", fullName: "帝国重装騎士エルデ" }
    , { implDate: "2021/10/28", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "メイジ", name: "イルマ", fullName: "帝国魔術師イルマ" }
    , { implDate: "2021/10/28", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "鬼", name: "サザンカ", fullName: "帝国鬼娘サザンカ" }
    , { implDate: "2021/11/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ペガサスライダー", name: "ちびエスタ", fullName: "ちびエスタ" }
    , { implDate: "2021/11/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "パイレーツ", name: "ちびデューオ", fullName: "ちびデューオ" }
    , { implDate: "2021/11/11", implDate_bq: "2022/12/08", obtain: "sh", rarity: "p" , depType: "rear", class: "デモンシャーマン", name: "レライエ", fullName: "魔神の共鳴者レライエ" }
    , { implDate: "2021/11/11", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "魔法剣士", name: "マリレーヌ", fullName: "聖樹の魔剣士マリレーヌ" }
    , { implDate: "2021/11/18", implDate_bq: "2023/11/09", obtain: "ev", rarity: "b" , depType: "rear", class: "幻術士", name: "タリエ", fullName: "奇譚の幻術士タリエ" }
    , { implDate: "2021/11/18", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "rear", class: "ライフリンカー", name: "シアーシャ", fullName: "絆鎖の救命師シアーシャ" }
    , { implDate: "2021/11/25", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "魔導生命体", name: "ラーワル", fullName: "魔導を宿す者ラーワル" }
    , { implDate: "2021/11/25", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "rear", class: "ファラオ", name: "ホルテウス", fullName: "獅子女の覇者ホルテウス" }
    , { implDate: "2021/11/25", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "rear", class: "ファラオ", name: "ホルテウス", fullName: "獅子女の覇者ホルテウス" }
    , { implDate: "2021/12/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "メイジ", name: "ちびエステル", fullName: "ちびエステル" }
    , { implDate: "2021/12/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ネクロマンサー", name: "ちびメトゥス", fullName: "ちびメトゥス" }
    , { implDate: "2021/12/09", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "ハーバリスト", name: "ラタトスク", fullName: "世界樹の聖霊ラタトスク" }
    , { implDate: "2021/12/09", implDate_bq: null        , obtain: "ev", rarity: "ph", depType: "van" , class: "魔導生命体", name: "ラーワル", fullName: "魔導を宿す者ラーワル" }
    , { implDate: "2021/12/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "スカラー", name: "フェリシア", fullName: "魔性の獣学者フェリシア" }
    , { implDate: "2021/12/09", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "神官戦士", name: "ルチア/水着", fullName: "水辺の神官戦士ルチア" }
    , { implDate: "2021/12/09", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "van" , class: "シャークウォリアー", name: "スカー", fullName: "怒りの鮫戦士スカー", male: 1 }
    , { implDate: "2021/12/16", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "メイジ", name: "テュト/クリスマス", fullName: "祝福の贈り人テュト" }
    , { implDate: "2021/12/16", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "サッパー", name: "ドリー/クリスマス", fullName: "聖なる技巧兵ドリー" }
    , { implDate: "2021/12/29", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "前衛戦術家", name: "ヘレナ/クリスマス", fullName: "聖夜の天才戦術家ヘレナ" }
    , { implDate: "2021/12/29", implDate_bq: "2023/07/13", obtain: "sh", rarity: "b" , depType: "van" , class: "オートマタ", name: "アルタ", fullName: "薔薇の自動人形アルタ" }
    , { implDate: "2021/12/29", implDate_bq: "2023/04/13", obtain: "sh", rarity: "b" , depType: "van" , class: "戦巫女", name: "タツミ", fullName: "影炎の戦巫女タツミ" }
    
    // 2022
    , { implDate: "2022/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "前衛戦術家", name: "マツリ/お正月", fullName: "智将の筆始めマツリ" }
    , { implDate: "2022/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "デモンサモナー", name: "ラピス/お正月", fullName: "大悪魔の初詣ラピス" }
    , { implDate: "2022/01/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "真人", name: "太公望/お正月", fullName: "謹賀祝仙女 太公望" }
    , { implDate: "2022/01/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "レンジャー", name: "ちびロヴィニア", fullName: "ちびロヴィニア" }
    , { implDate: "2022/01/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "マーチャント", name: "ちびトトノ", fullName: "ちびトトノ" }
    , { implDate: "2022/01/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "忍者", name: "チヨメ/温泉", fullName: "湯けむりくノ一チヨメ" }
    , { implDate: "2022/01/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "砲術士", name: "カノン/温泉", fullName: "砲術娘の温泉旅行カノン" }
    , { implDate: "2022/01/27", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "シーソルジャー", name: "フィーヌ/温泉", fullName: "翠玉の温泉兵フィーヌ" }
    , { implDate: "2022/01/27", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ワルキューレ", name: "フリア", fullName: "放浪の聖騎兵フリア" }
    , { implDate: "2022/01/27", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "シービショップ", name: "ムイル", fullName: "深慮の海巫女ムイル" }
    , { implDate: "2022/02/03", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "サムライ", name: "ヒバリ/バレンタイン", fullName: "思慕の剣豪ヒバリ" }
    , { implDate: "2022/02/03", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "プリンセス", name: "スクハ/バレンタイン", fullName: "恋慕の剣姫スクハ" }
    , { implDate: "2022/02/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ヘビーアーマー", name: "ちびディーネ", fullName: "ちびディーネ" }
    , { implDate: "2022/02/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "モンスタースレイヤー", name: "ちびドルチェ", fullName: "ちびドルチェ" }
    , { implDate: "2022/02/17", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "アーチャー", name: "ポミエ/バレンタイン", fullName: "恋心の射手ポミエ" }
    , { implDate: "2022/02/17", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "グランドナイト", name: "アスラハ", fullName: "熱砂の騎士アスラハ" }
    , { implDate: "2022/02/17", implDate_bq: "2023/11/09", obtain: "sh", rarity: "p" , depType: "rear", class: "ドラゴンメイジ", name: "カラザ", fullName: "氷竜魔術士カラザ" }
    , { implDate: "2022/02/17", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "both", class: "スカイウォリアー", name: "ポタル", fullName: "木兎翼の戦士ポタル" }
    , { implDate: "2022/02/17", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "ドラグーン", name: "ジゼル", fullName: "焔の竜砲騎兵ジゼル" }
    , { implDate: "2022/02/17", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "rear", class: "儀式魔術師", name: "ちびヘカティエ", fullName: "ちびヘカティエ" }
    , { implDate: "2022/02/24", implDate_bq: "2022/11/10", obtain: "sh", rarity: "b" , depType: "both", class: "スカウト", name: "レナータ", fullName: "天眼の偵察者レナータ" }
    , { implDate: "2022/03/03", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ドラゴンシャーマン", name: "ラウラ", fullName: "白の竜巫女ラウラ" }
    , { implDate: "2022/03/03", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "支援工兵", name: "マルレーン", fullName: "帝国建機工兵マルレーン" }
    , { implDate: "2022/03/03", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "デーモンロード", name: "イルムガルト", fullName: "闇炎の魔将イルムガルト" }
    , { implDate: "2022/03/03", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "戦巫女", name: "カオル", fullName: "帝国戦巫女カオル" }
    , { implDate: "2022/03/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "中級竜兵", name: "ちびリキュノス", fullName: "ちびリキュノス" }
    , { implDate: "2022/03/03", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ボウライダー", name: "ちびリオン", fullName: "ちびリオン" }
    , { implDate: "2022/03/03", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "シーフ", name: "レーネ", fullName: "帝都の大泥棒レーネ" }
    , { implDate: "2022/03/17", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ダークファイター", name: "コーネリア/学園", fullName: "暗黒学園騎士コーネリア" }
    , { implDate: "2022/03/17", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ソルジャー", name: "ケイティ/学園", fullName: "戦術科教師ケイティ" }
    , { implDate: "2022/03/17", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "バンデット", name: "モーティマ/学園", fullName: "山賊食堂モーティマ", male: 1 }
    , { implDate: "2022/03/31", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "アーチャー", name: "クレア/学園", fullName: "鋼鉄の弓術部員クレア" }
    , { implDate: "2022/03/31", implDate_bq: "2022/11/10", obtain: "sh", rarity: "b" , depType: "van" , class: "かまいたち", name: "群青姉妹", fullName: "かまいたち群青姉妹" }
    , { implDate: "2022/04/01", implDate_bq: "2023/05/11", obtain: "ev", rarity: "b" , depType: "rear", class: "発明家", name: "アルレット", fullName: "超古代発明家アルレット" }
    , { implDate: "2022/04/07", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "鬼", name: "アクラ", fullName: "紫炎の鬼傭兵アクラ" }
    , { implDate: "2022/04/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "グラディエーター", name: "ちびアナトリア", fullName: "ちびアナトリア" }
    , { implDate: "2022/04/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "真人", name: "ちび竜吉公主", fullName: "ちび竜吉公主" }
    , { implDate: "2022/04/14", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "エレメンタラー", name: "ニーヴ/バニー", fullName: "混沌うさぎの祝祭ニーヴ" }
    , { implDate: "2022/04/14", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "魔法剣士", name: "タラニア/バニー", fullName: "黒兎の魔剣士タラニア" }
    , { implDate: "2022/04/28", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "バンデット", name: "リーフ/バニー", fullName: "卵祭りの山賊娘リーフ" }
    , { implDate: "2022/04/28", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "rear", class: "ピューティアー", name: "イムラウ", fullName: "生命を謳う者イムラウ" }
    , { implDate: "2022/04/28", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "both", class: "異世界戦士", name: "エフトラ", fullName: "世界を超える者エフトラ" }
    , { implDate: "2022/04/28", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "rear", class: "ピューティアー", name: "イムラウ", fullName: "生命を謳う者イムラウ" }
    , { implDate: "2022/05/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソードマスター", name: "ちびヴァイス", fullName: "ちびヴァイス" }
    , { implDate: "2022/05/05", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ルーンアコライト", name: "ちびエレオノーラ", fullName: "ちびエレオノーラ" }
    , { implDate: "2022/05/12", implDate_bq: null        , obtain: "ev", rarity: "ph", depType: "both", class: "異世界戦士", name: "エフトラ", fullName: "世界を超える者エフトラ" }
    , { implDate: "2022/05/12", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ドラゴンメイジ", name: "ロカ", fullName: "土竜魔術士ロカ" }
    , { implDate: "2022/05/19", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ドラグーン", name: "ミカ", fullName: "流浪の竜砲騎兵ミカ" }
    , { implDate: "2022/05/26", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "儀式魔術師", name: "メシナ", fullName: "渦潮の亜神メシナ" }
    , { implDate: "2022/06/02", implDate_bq: "2023/01/12", obtain: "sh", rarity: "b" , depType: "van" , class: "儀仗軍神", name: "アラン", fullName: "銀月の亜神アラン" }
    , { implDate: "2022/06/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "サムライ", name: "ちびジュウベエ", fullName: "ちびジュウベエ" }
    , { implDate: "2022/06/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "忍者", name: "ちびハツネ", fullName: "ちびハツネ" }
    , { implDate: "2022/06/09", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "エンジェル", name: "シェミア", fullName: "堕天使シェミア" }
    , { implDate: "2022/06/09", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "キョンシー", name: "フーロン/花嫁", fullName: "幽境新婦フーロン" }
    , { implDate: "2022/06/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "ベルニス/花嫁", fullName: "婚礼の大盾ベルニス" }
    , { implDate: "2022/06/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "魔法剣士", name: "ユーティ/花嫁", fullName: "ひだまりの花嫁ユーティ" }
    , { implDate: "2022/06/23", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "狛犬", name: "コマ/花嫁", fullName: "白無垢の狛犬コマ" }
    , { implDate: "2022/06/23", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "料理人", name: "アシュリン", fullName: "常夜の料理人アシュリン" }
    , { implDate: "2022/06/30", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ドラグーン", name: "イーファ", fullName: "紫風の竜砲騎兵イーファ" }
    , { implDate: "2022/07/07", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "テンプルナイト", name: "デシレア", fullName: "光剣の神聖騎士デシレア" }
    , { implDate: "2022/07/07", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ソルジャー", name: "アルティア/水着", fullName: "潮風の守護者アルティア" }
    , { implDate: "2022/07/07", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "真人", name: "清源妙道真君/水着", fullName: "夏の賢仙 清源妙道真君" }
    , { implDate: "2022/07/07", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "エンプレス", name: "ハリナ/水着", fullName: "女皇の夏季休暇ハリナ" }
    , { implDate: "2022/07/07", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "儀式魔術師", name: "ヘカティエ/水着", fullName: "夏の月下冥神ヘカティエ" }
    , { implDate: "2022/07/07", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "忍者", name: "ハツネ/水着", fullName: "水遁遊戯ハツネ" }
    , { implDate: "2022/07/07", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "メイド", name: "マリカ/水着", fullName: "浜辺の武術女官マリカ" }
    , { implDate: "2022/07/07", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "真人", name: "竜吉公主/水着", fullName: "夏陽海仙 竜吉公主" }
    , { implDate: "2022/07/07", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "支援工兵", name: "パトリシア/水着", fullName: "砂浜の工作兵パトリシア" }
    , { implDate: "2022/07/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ドラゴンライダー", name: "ちびスイレン", fullName: "ちびスイレン" }
    , { implDate: "2022/07/07", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "グランドナイト", name: "ちびアデライド", fullName: "ちびアデライド" }
    , { implDate: "2022/07/21", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "バンデット", name: "レオーネ/水着", fullName: "真夏の覇者レオーネ" }
    , { implDate: "2022/07/21", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "ソードマスター", name: "ヴァイス/水着", fullName: "白き浜辺の剣士ヴァイス" }
    , { implDate: "2022/07/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ヒーラー", name: "リアナ/浴衣", fullName: "癒しの夕涼みリアナ" }
    , { implDate: "2022/07/28", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ぬりかべ", name: "シラヌイ/浴衣", fullName: "祭夜のぬりかべシラヌイ" }
    , { implDate: "2022/07/28", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "道化師", name: "ラトゥール/浴衣", fullName: "不敗の縁日ラトゥール" }
    , { implDate: "2022/08/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "インペリアルナイト", name: "ちびディアナ", fullName: "ちびディアナ" }
    , { implDate: "2022/08/04", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "レンジャー", name: "ちびローザ", fullName: "ちびローザ" }
    , { implDate: "2022/08/10", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "イビルプリンセス", name: "スキュレ/浴衣", fullName: "夏祭りの金魚姫スキュレ" }
    , { implDate: "2022/08/10", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "武侠", name: "フーイェン", fullName: "豪放遊侠フーイェン" }
    , { implDate: "2022/08/10", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "rear", class: "砲術士", name: "リーシェ", fullName: "新米砲術士リーシェ" }
    , { implDate: "2022/08/18", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "神官戦士", name: "トゥーダ", fullName: "帝国神官戦士長トゥーダ" }
    , { implDate: "2022/08/18", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "クロノウィッチ", name: "ロミルダ", fullName: "帝国時術士ロミルダ" }
    , { implDate: "2022/08/18", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "忍者", name: "ウルスラ", fullName: "帝国忍者ウルスラ" }
    , { implDate: "2022/08/18", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "デーモンロード", name: "アブグルント", fullName: "深潭の魔将アブグルント" }
    , { implDate: "2022/08/18", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "鍛冶職人", name: "グラティア", fullName: "帝国鍛冶師グラティア" }
    , { implDate: "2022/09/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ロード", name: "リンクス", fullName: "金獣の領主リンクス" }
    , { implDate: "2022/09/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "both", class: "スカイシューター", name: "ラシティ", fullName: "黒翼の精鋭射手ラシティ" }
    , { implDate: "2022/09/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "前衛戦術家", name: "ちびルヴェア", fullName: "ちびルヴェア" }
    , { implDate: "2022/09/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "スチームナイト", name: "ちびイザムバード", fullName: "ちびイザムバード" }
    , { implDate: "2022/09/08", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ドラゴンメイジ", name: "コラリー", fullName: "風竜魔術士コラリー" }
    , { implDate: "2022/09/15", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "both", class: "スカイヒーラー", name: "レフカ", fullName: "鶚翼の癒し手レフカ" }
    , { implDate: "2022/09/15", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "座敷わらし", name: "エンジュ", fullName: "座敷わらしエンジュ" }
    , { implDate: "2022/09/15", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "サベージファイター", name: "ファルア", fullName: "砂漠の勇士ファルア" }
    , { implDate: "2022/09/15", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "符術士", name: "リャオレン", fullName: "符術士リャオレン" }
    , { implDate: "2022/09/15", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "シーソルジャー", name: "ムルーア", fullName: "朱珠の深海兵長ムルーア" }
    , { implDate: "2022/09/15", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびシビラ", fullName: "ちびシビラ" }
    , { implDate: "2022/09/22", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "発明家", name: "マギー", fullName: "天性の発明家マギー" }
    , { implDate: "2022/09/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "モンスタースレイヤー", name: "ソシエ/ハロウィン", fullName: "南瓜に潜む狙撃手ソシエ" }
    , { implDate: "2022/09/29", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "モンク", name: "ウル/ハロウィン", fullName: "仮装祭りの爪獣ウル" }
    , { implDate: "2022/09/29", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "デモンシャーマン", name: "レライエ/ハロウィン", fullName: "お菓子の共鳴者レライエ" }
    , { implDate: "2022/10/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "イビルプリンセス", name: "ちびミサ", fullName: "ちびミサ" }
    , { implDate: "2022/10/06", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "シャーマン", name: "ちびキキョウ", fullName: "ちびキキョウ" }
    , { implDate: "2022/10/13", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "プリンセス", name: "ジュリア/ハロウィン", fullName: "絢爛仮装姫ジュリア" }
    , { implDate: "2022/10/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "武将【恋姫】", name: "関羽 雲長", fullName: "関羽 雲長", collabo: 1 }
    , { implDate: "2022/10/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "小覇王【恋姫】", name: "孫策 伯符", fullName: "孫策 伯符", collabo: 1 }
    , { implDate: "2022/10/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "軍師【恋姫】", name: "諸葛亮 孔明", fullName: "諸葛亮 孔明", collabo: 1 }
    , { implDate: "2022/10/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "暴君【恋姫】", name: "董卓 仲穎", fullName: "董卓 仲穎", collabo: 1 }
    , { implDate: "2022/10/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "武将【恋姫】", name: "趙雲 子龍", fullName: "趙雲 子龍", collabo: 1 }
    , { implDate: "2022/10/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "君主【恋姫】", name: "孫権 仲謀", fullName: "孫権 仲謀", collabo: 1 }
    , { implDate: "2022/10/13", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "弓将【恋姫】", name: "黄蓋 公覆", fullName: "黄蓋 公覆", collabo: 1 }
    , { implDate: "2022/10/14", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "van" , class: "王女【恋姫】", name: "孫尚香", fullName: "孫尚香", collabo: 1 }
    , { implDate: "2022/10/27", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "君主【恋姫】", name: "孫堅 文台", fullName: "孫堅 文台", collabo: 1 }
    , { implDate: "2022/10/27", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ヴァンパイアハンター", name: "クルス", fullName: "古城の探索者クルス" }
    , { implDate: "2022/10/31", implDate_bq: null        , obtain: "sp", rarity: "bh", depType: "van" , class: "アヤカシの王", name: "山ン本", fullName: "山ン本五郎左衛門" }
    , { implDate: "2022/11/02", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "サベージファイター", name: "ナシート", fullName: "砂漠の傭兵ナシート" }
    , { implDate: "2022/11/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "イビルプリンセス", name: "ちびスキュレ", fullName: "ちびスキュレ" }
    , { implDate: "2022/11/02", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "シービショップ", name: "ちびハルフゥ", fullName: "ちびハルフゥ" }
    , { implDate: "2022/11/10", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "both", class: "スカイヒーラー", name: "イエラ", fullName: "蓑鳩翼の癒し手イエラ" }
    , { implDate: "2022/11/10", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびジェローム", fullName: "ちびジェローム", male: 1 }
    , { implDate: "2022/11/17", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "デーモンロード", name: "ヤハール", fullName: "炎天の魔将ヤハール" }
    , { implDate: "2022/11/17", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ドラゴンプリンセス", name: "ロタン", fullName: "原初の竜姫ロタン" }
    , { implDate: "2022/11/17", implDate_bq: "2023/05/11", obtain: "sh", rarity: "p" , depType: "rear", class: "スカラー", name: "コレット", fullName: "神話学士コレット" }
    , { implDate: "2022/11/24", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "トゥルーブラッド", name: "リヴン", fullName: "永夜の始祖たる者リヴン" }
    , { implDate: "2022/11/24", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "黎明の翼", name: "ルキファ", fullName: "黎明を齎す者ルキファ" }
    , { implDate: "2022/11/24", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "黎明の翼", name: "ルキファ", fullName: "黎明を齎す者ルキファ" }
    , { implDate: "2022/11/24", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "ダークストーカー", name: "ヘンゼル", fullName: "闇使いヘンゼル", male: 1 }
    , { implDate: "2022/12/01", implDate_bq: null        , obtain: "tr", rarity: "bh", depType: "van" , class: "暁光の神話", name: "イルドナ", fullName: "暁光を導く者イルドナ", male: 1 }
    , { implDate: "2022/12/01", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "暁光の神話", name: "イルドナ", fullName: "暁光を導く者イルドナ", male: 1 }
    , { implDate: "2022/12/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "デーモンロード", name: "ちびハルモニア", fullName: "ちびハルモニア" }
    , { implDate: "2022/12/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ルーンアコライト", name: "ちびエリス", fullName: "ちびエリス" }
    , { implDate: "2022/12/08", implDate_bq: null        , obtain: "ev", rarity: "ph", depType: "van" , class: "トゥルーブラッド", name: "リヴン", fullName: "永夜の始祖たる者リヴン" }
    , { implDate: "2022/12/08", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "デーモンロード", name: "ハルモニア/クリスマス", fullName: "聖夜の魔将ハルモニア" }
    , { implDate: "2022/12/08", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ダークストーカー", name: "グレーテル/クリスマス", fullName: "聖闇の贈り主グレーテル" }
    , { implDate: "2022/12/08", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "アヤカシの王", name: "山ン本", fullName: "山ン本五郎左衛門" }
    , { implDate: "2022/12/08", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ヘビーアーマー", name: "ちびジェリウス", fullName: "ちびジェリウス", male: 1 }
    , { implDate: "2022/12/21", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ハーバリスト", name: "ローズ/クリスマス", fullName: "聖樹の薬草師ローズ" }
    , { implDate: "2022/12/21", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "霊刀つくもがみ", name: "魔王城", fullName: "魔王城", collabo: 1 }
    , { implDate: "2022/12/21", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "黒竜娘【モンスター娘TD】", name: "マウロ", fullName: "ブラックドラゴン娘マウロ", collabo: 1 }
    , { implDate: "2022/12/21", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "鬼刃忍", name: "シロガネ", fullName: "鬼刃忍シロガネ" }
    , { implDate: "2022/12/30", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "鍛冶職人", name: "ウルカノ", fullName: "火と鉄の亜神ウルカノ" }
    , { implDate: "2022/12/30", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "テンプルナイト", name: "トゥーリ", fullName: "輝天の神聖騎士トゥーリ" }
    , { implDate: "2022/12/30", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "魔界総帥", name: "アスバール", fullName: "嵐雨の亜神アスバール" }
    
    // 2023
    , { implDate: "2023/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "妖狐", name: "カヨウ/お正月", fullName: "大吉妖狐カヨウ" }
    , { implDate: "2023/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "儀式魔術師", name: "メシナ/お正月", fullName: "海神の曙光メシナ" }
    , { implDate: "2023/01/01", implDate_bq: null        , obtain: "sh", rarity: "ph", depType: "both", class: "異世界戦士", name: "エフトラ/お正月", fullName: "雪踏みの初詣エフトラ" }
    , { implDate: "2023/01/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "プリンセス", name: "ちびヨシノ", fullName: "ちびヨシノ" }
    , { implDate: "2023/01/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ドラゴンプリンセス", name: "ちびメリュジアナ", fullName: "ちびメリュジアナ" }
    , { implDate: "2023/01/12", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ドルイド", name: "フィオレ/温泉", fullName: "湯けむりの隠者フィオレ" }
    , { implDate: "2023/01/12", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "魔法剣士", name: "シエナ/温泉", fullName: "魔剣士の湯治シエナ" }
    , { implDate: "2023/01/12", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "サムライ", name: "アカネ/温泉", fullName: "旅情の剣士アカネ" }
    , { implDate: "2023/01/12", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "グレーターデーモン", name: "ちびグレーターデーモン", fullName: "ちびグレーターデーモン", male: 1 }
    , { implDate: "2023/01/19", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "小悪魔アイドル", name: "エス★エフ", fullName: "Makaidol エス★エフ" }
    , { implDate: "2023/01/26", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "both", class: "スカイヒーラー", name: "カーニア", fullName: "鷹翼の癒し手カーニア" }
    , { implDate: "2023/02/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "イモータルプリンセス", name: "ちびユーフェ", fullName: "ちびユーフェ" }
    , { implDate: "2023/02/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ダークファイター", name: "ちびヘイオス", fullName: "ちびヘイオス" }
    , { implDate: "2023/02/02", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "アイドル召喚士", name: "リノ/アイドル", fullName: "召喚系アイドル リノ" }
    , { implDate: "2023/02/02", implDate_bq: "2023/12/14", obtain: "sh", rarity: "p" , depType: "rear", class: "雪娘", name: "ふゆの", fullName: "雪女ふゆの" }
    , { implDate: "2023/02/09", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ハーバリスト", name: "ラタトスク/バレンタイン", fullName: "世界樹の恋路ラタトスク" }
    , { implDate: "2023/02/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "both", class: "スカウト", name: "ミリアム/バレンタイン", fullName: "恋の索敵作戦ミリアム" }
    , { implDate: "2023/02/09", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちび一般兵A", fullName: "ちび一般兵A", male: 1 }
    , { implDate: "2023/02/23", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ドルイド", name: "ローリエ/バレンタイン", fullName: "秘めたる想いローリエ" }
    , { implDate: "2023/02/23", implDate_bq: "2023/09/14", obtain: "sh", rarity: "b" , depType: "van" , class: "ハデスソルジャー", name: "ティルト", fullName: "冥神近衛騎士ティルト" }
    , { implDate: "2023/02/23", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ドラゴンメイジ", name: "トリシャ", fullName: "帝国黒竜魔術士トリシャ" }
    , { implDate: "2023/02/23", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "隧道掘削兵", name: "ヘーレ", fullName: "帝国掘削兵ヘーレ" }
    , { implDate: "2023/02/23", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ドラグーン", name: "デリア", fullName: "帝国竜砲騎兵デリア" }
    , { implDate: "2023/02/23", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "van" , class: "ローグ", name: "シュテフィ", fullName: "帝国諜報兵シュテフィ" }
    , { implDate: "2023/02/23", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "メイド", name: "ソーマ/メイド", fullName: "王宮侍女ソーマ" }
    , { implDate: "2023/02/23", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "砲術士", name: "ハイデマリー", fullName: "帝国砲術士ハイデマリー" }
    , { implDate: "2023/03/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "風伯", name: "ちびフーコ", fullName: "ちびフーコ" }
    , { implDate: "2023/03/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ランスマスター", name: "ちびトモエ", fullName: "ちびトモエ" }
    , { implDate: "2023/03/09", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "モンスターブレイカー", name: "ランヒルド/バニー", fullName: "兎祭の封剣士ランヒルド" }
    , { implDate: "2023/03/09", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "後衛戦術家", name: "シナト/バニー", fullName: "疾風軍師の祝福祭シナト" }
    , { implDate: "2023/03/09", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "ドラゴンメイジ", name: "カラザ/バニー", fullName: "竜兎の共宴カラザ" }
    , { implDate: "2023/03/09", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "メイジ", name: "ちびヴァレリー", fullName: "ちびヴァレリー", male: 1 }
    , { implDate: "2023/03/16", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "シールダー", name: "レジナレア", fullName: "盾騎士レジナレア" }
    , { implDate: "2023/03/16", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "武侠", name: "フェイロン", fullName: "武成豪侠フェイロン" }
    , { implDate: "2023/03/23", implDate_bq: "2023/10/12", obtain: "sh", rarity: "p" , depType: "rear", class: "シービショップ", name: "イヲナミ", fullName: "龍宮の海巫女イヲナミ" }
    , { implDate: "2023/03/23", implDate_bq: null        , obtain: "sh", rarity: "sl", depType: "van" , class: "料理人", name: "マグリカ", fullName: "下町料理人マグリカ" }
    , { implDate: "2023/03/30", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "神獣騎士", name: "ミルドリス", fullName: "獣を統べる者ミルドリス" }
    , { implDate: "2023/03/30", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "rear", class: "カースウィスパラー", name: "モルフェサ", fullName: "災禍を律す者モルフェサ" }
    , { implDate: "2023/03/30", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "女王子", name: "女王子", fullName: "女王子" }
    , { implDate: "2023/04/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "忍者", name: "ちびチヨメ", fullName: "ちびチヨメ" }
    , { implDate: "2023/04/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "雷公", name: "ちびラミィ", fullName: "ちびラミィ" }
    , { implDate: "2023/04/06", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "神獣騎士", name: "ミルドリス", fullName: "獣を統べる者ミルドリス" }
    , { implDate: "2023/04/06", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "rear", class: "カースウィスパラー", name: "モルフェサ", fullName: "災禍を律す者モルフェサ" }
    , { implDate: "2023/04/06", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "van" , class: "儀仗軍神", name: "ちびアラン", fullName: "ちびアラン" }
    , { implDate: "2023/04/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ホーネット派魔人【ランス】", name: "魔人サテラ", fullName: "魔人サテラ", collabo: 1 }
    , { implDate: "2023/04/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "忍者【ランス】", name: "見当かなみ", fullName: "見当かなみ", collabo: 1 }
    , { implDate: "2023/04/13", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "魔法使い【ランス】", name: "魔想志津香", fullName: "魔想志津香", collabo: 1 }
    , { implDate: "2023/04/13", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびドゥマルデ", fullName: "ちびドゥマルデ", male: 1 }
    , { implDate: "2023/04/27", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "初代大統領【ランス】", name: "シーラ・ヘルマン", fullName: "シーラ・ヘルマン", collabo: 1 }
    , { implDate: "2023/04/27", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "サベージファイター", name: "シャジャル", fullName: "砂漠の勇者シャジャル" }
    , { implDate: "2023/04/27", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "van" , class: "戦の聖霊", name: "プロエ", fullName: "戦の聖霊プロエ" }
    , { implDate: "2023/04/27", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "rear", class: "アーチャー", name: "ナナリー/私服", fullName: "白羽の休日ナナリー" }
    , { implDate: "2023/05/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "真人", name: "ちび織姫", fullName: "ちび織姫" }
    , { implDate: "2023/05/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "アクアナイト", name: "ちびヴィアベル", fullName: "ちびヴィアベル" }
    , { implDate: "2023/05/04", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "妖狐", name: "キュウビ/学園", fullName: "留学妖狐キュウビ" }
    , { implDate: "2023/05/04", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "レンジャー", name: "ロヴィニア/学園", fullName: "陽炎の新入生ロヴィニア" }
    , { implDate: "2023/05/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "アベンジャー", name: "レティシア/学園", fullName: "蒼紅の女教師レティシア" }
    , { implDate: "2023/05/11", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "バンデット", name: "ちびモーティマ", fullName: "ちびモーティマ", male: 1 }
    , { implDate: "2023/05/18", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "サムライ", name: "サクヤ/学園", fullName: "薙刀茶道部サクヤ" }
    , { implDate: "2023/05/18", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "シールダー", name: "イール", fullName: "優しき守護盾イール" }
    , { implDate: "2023/05/18", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "真人", name: "普賢", fullName: "普賢" }
    , { implDate: "2023/05/18", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "van" , class: "一目の竜", name: "一目連", fullName: "一目連", male: 1 }
    , { implDate: "2023/05/25", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "both", class: "スカウト", name: "レナータ/花嫁", fullName: "花嫁道の偵察者レナータ" }
    , { implDate: "2023/05/25", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ドラゴンメイジ", name: "ロカ/花嫁", fullName: "花嫁土竜ロカ" }
    , { implDate: "2023/05/25", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "かまいたち", name: "金糸雀姉妹/花嫁", fullName: "婚礼つむじ風金糸雀姉妹" }
    , { implDate: "2023/05/25", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "ソルジャー", name: "ケイティ/私服", fullName: "休息の教官ケイティ" }
    , { implDate: "2023/06/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "儀仗軍神", name: "乙姫", fullName: "大海神の娘 乙姫" }
    , { implDate: "2023/06/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "天尊", name: "元始天尊", fullName: "元始天尊" }
    , { implDate: "2023/06/01", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "儀仗軍神", name: "アラン/闘兵", fullName: "銀月大祭アラン" }
    , { implDate: "2023/06/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソードマスター", name: "ちびリシェルテ", fullName: "ちびリシェルテ" }
    , { implDate: "2023/06/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "サモナー", name: "ちびファルネ", fullName: "ちびファルネ" }
    , { implDate: "2023/06/15", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "英傑の塔", name: "英傑の塔", fullName: "英傑の塔", collabo: 1 }
    , { implDate: "2023/06/15", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "both", class: "不死鳥娘【モンスター娘TD】", name: "アテエル", fullName: "フェニックス娘アテエル", collabo: 1 }
    , { implDate: "2023/06/15", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ソルジャー", name: "ちびユリアン", fullName: "ちびユリアン", male: 1 }
    , { implDate: "2023/06/21", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "rear", class: "支援の聖霊", name: "戦場に集う聖霊たち", fullName: "戦場に集う聖霊たち" }
    , { implDate: "2023/06/29", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "リッチ【闇の軍勢】", name: "リッチ", fullName: "闇の墓守リッチ" }
    , { implDate: "2023/06/29", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "van" , class: "ダーク王子", name: "ダーク王子", fullName: "ダーク王子", male: 1 }
    , { implDate: "2023/06/29", implDate_bq: null        , obtain: "tr", rarity: "b" , depType: "rear", class: "政務官【闇の軍勢】", name: "ダークアンナ", fullName: "ダークアンナ" }
    , { implDate: "2023/06/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "中級竜兵", name: "ヴルム/水着", fullName: "砂浜に立つ銀竜ヴルム" }
    , { implDate: "2023/06/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "仙人", name: "ナタク/水着", fullName: "水辺の道士ナタク" }
    , { implDate: "2023/06/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "メイジ", name: "テュト/水着", fullName: "青春賢者テュト" }
    , { implDate: "2023/06/29", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "風水使い", name: "リンネ/水着", fullName: "朱夏花の風水士リンネ" }
    , { implDate: "2023/06/29", implDate_bq: null        , obtain: "sh", rarity: "ph", depType: "van" , class: "銀腕の神話", name: "トラム/水着", fullName: "浜辺の看板娘トラム" }
    , { implDate: "2023/06/29", implDate_bq: null        , obtain: "sh", rarity: "ph", depType: "rear", class: "ファラオ", name: "ホルテウス/水着", fullName: "女王の避暑ホルテウス" }
    , { implDate: "2023/06/29", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "ワルキューレ", name: "ピューロ/水着", fullName: "純真海日記ピューロ" }
    , { implDate: "2023/06/29", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "鍛冶職人", name: "グラティア/水着", fullName: "夏空の鍛冶師グラティア" }
    , { implDate: "2023/07/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "エンプレス", name: "ちびハリナ", fullName: "ちびハリナ" }
    , { implDate: "2023/07/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヒーラー", name: "ちびエリアス", fullName: "ちびエリアス" }
    , { implDate: "2023/07/06", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "デーモンロード", name: "パヤモ", fullName: "深閑の魔将パヤモ" }
    , { implDate: "2023/07/13", implDate_bq: null        , obtain: "ev", rarity: "ph", depType: "rear", class: "ジオマンサー", name: "サナラ/水着", fullName: "君と最高の夏サナラ" }
    , { implDate: "2023/07/13", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ヴァンパイアハンター", name: "ちびヴィンセント", fullName: "ちびヴィンセント", male: 1 }
    , { implDate: "2023/07/20", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "処刑人", name: "サティン", fullName: "流浪の断罪者サティン" }
    , { implDate: "2023/07/20", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "ヘビーアーマー", name: "ベルニス/私服", fullName: "憧れの休日ベルニス" }
    , { implDate: "2023/07/27", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "料理人", name: "デルフィーナ", fullName: "食の芸術家デルフィーナ" }
    , { implDate: "2023/08/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ローグ", name: "ちびシネイド", fullName: "ちびシネイド" }
    , { implDate: "2023/08/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "グリフィンライダー", name: "ちびクゥイル", fullName: "ちびクゥイル" }
    , { implDate: "2023/08/04", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "砲術士", name: "ハリンヘイム", fullName: "号砲の亜神ハリンヘイム" }
    , { implDate: "2023/08/04", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "対魔忍 超人【対魔忍】", name: "井河アサギ", fullName: "井河アサギ", collabo: 1 }
    , { implDate: "2023/08/04", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "対魔忍 超人【対魔忍】", name: "秋山凜子", fullName: "秋山凜子", collabo: 1 }
    , { implDate: "2023/08/04", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "both", class: "対魔忍 自然【対魔忍】", name: "水城ゆきかぜ", fullName: "水城ゆきかぜ", collabo: 1 }
    , { implDate: "2023/08/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "対魔忍 魔性【対魔忍】", name: "心願寺紅", fullName: "心願寺紅", collabo: 1 }
    , { implDate: "2023/08/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "対魔忍 魔性【対魔忍】", name: "フェリシア", fullName: "フェリシア", collabo: 1 }
    , { implDate: "2023/08/04", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "対魔忍 精神【対魔忍】", name: "ふうま時子", fullName: "ふうま時子", collabo: 1 }
    , { implDate: "2023/08/04", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "van" , class: "ロイヤルガード", name: "アリシア/対魔忍", fullName: "対魔忍アリシア" }
    , { implDate: "2023/08/04", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "van" , class: "対魔忍 科学【対魔忍】", name: "甲河アスカ", fullName: "甲河アスカ", collabo: 1 }
    , { implDate: "2023/08/04", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "both", class: "対魔忍 自然【対魔忍】", name: "井河さくら", fullName: "井河さくら", collabo: 1 }
    , { implDate: "2023/08/10", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ゴブリン博士", name: "ちびゴブリン博士", fullName: "ちびゴブリン博士", male: 1 }
    , { implDate: "2023/08/18", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "対魔忍 超人【対魔忍】", name: "鬼崎きらら", fullName: "鬼崎きらら", collabo: 1 }
    , { implDate: "2023/08/18", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "処刑人", name: "リムリィ", fullName: "虚月の断罪者リムリィ" }
    , { implDate: "2023/08/18", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "ガンスリンガー", name: "トネール", fullName: "荒野の旋風トネール" }
    , { implDate: "2023/08/18", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "後衛戦術家", name: "レオナ/私服", fullName: "就寝前のひとときレオナ" }
    , { implDate: "2023/08/24", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "パイレーツ", name: "デューオ/浴衣", fullName: "お祭大好き海賊デューオ" }
    , { implDate: "2023/08/24", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "エンジェル", name: "ミルノ/浴衣", fullName: "花火空の天使長ミルノ" }
    , { implDate: "2023/08/24", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "砲術士", name: "メル/浴衣", fullName: "夏の花火師メル" }
    , { implDate: "2023/08/31", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "王国軍初代副司令", name: "ヴィディア", fullName: "戦禍を断つ者ヴィディア" }
    , { implDate: "2023/08/31", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "大華の神話", name: "徐華", fullName: "大華の母たる者 徐華" }
    , { implDate: "2023/08/31", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "王国軍初代副司令", name: "ヴィディア", fullName: "戦禍を断つ者ヴィディア" }
    , { implDate: "2023/08/31", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "大華の神話", name: "徐華", fullName: "大華の母たる者 徐華" }
    , { implDate: "2023/09/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "サムライ", name: "ちびヒバリ", fullName: "ちびヒバリ" }
    , { implDate: "2023/09/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "道化師", name: "ちびラトゥール", fullName: "ちびラトゥール" }
    , { implDate: "2023/09/14", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "メイジ", name: "バスティス", fullName: "砂漠の亜神バスティス" }
    , { implDate: "2023/09/14", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "マーチャント", name: "ノストラ", fullName: "闇商人ノストラ" }
    , { implDate: "2023/09/14", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "ヒーラー", name: "イーリス/私服", fullName: "癒しの囁き夜話イーリス" }
    , { implDate: "2023/09/14", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "中級竜兵", name: "ちびサーベイン", fullName: "ちびサーベイン", male: 1 }
    , { implDate: "2023/09/21", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "both", class: "スカイヒーラー", name: "ジタリス", fullName: "柄長翼の癒し手ジタリス" }
    , { implDate: "2023/09/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "隧道掘削兵", name: "ミュレ", fullName: "帝国掘削教官ミュレ" }
    , { implDate: "2023/09/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "儀式魔術師", name: "ヘリューズ", fullName: "死氷の亜神ヘリューズ" }
    , { implDate: "2023/09/28", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "スカラー", name: "ジェニー", fullName: "帝国人間学者ジェニー" }
    , { implDate: "2023/09/28", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ガンスリンガー", name: "パラベル", fullName: "帝国銃撃士パラベル" }
    , { implDate: "2023/09/28", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "both", class: "エアセイラー", name: "フォーラ", fullName: "帝国飛艦士フォーラ" }
    , { implDate: "2023/09/28", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "van" , class: "ソードマスター", name: "イルヴィ", fullName: "創道の血統イルヴィ" }
    , { implDate: "2023/10/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "重装砲兵", name: "ちびレギーナ", fullName: "ちびレギーナ" }
    , { implDate: "2023/10/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "天狗", name: "ちびクラマ", fullName: "ちびクラマ" }
    , { implDate: "2023/10/12", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "雷公", name: "レミィ/ハロウィン", fullName: "怪祭の雷雲レミィ" }
    , { implDate: "2023/10/12", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "風伯", name: "クーコ/ハロウィン", fullName: "秋祭の風雲クーコ" }
    , { implDate: "2023/10/12", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "スカラー", name: "コレット/ハロウィン", fullName: "秋の民俗学士コレット" }
    , { implDate: "2023/10/12", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "中級竜兵", name: "ウィリアス/ハロウィン", fullName: "菓子祭の緑竜ウィリアス" }
    , { implDate: "2023/10/12", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "アーチャー", name: "ダニエラ/私服", fullName: "晴天鍛錬の休日ダニエラ" }
    , { implDate: "2023/10/12", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "モンスタースレイヤー", name: "ちびラルフ", fullName: "ちびラルフ", male: 1 }
    , { implDate: "2023/10/19", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "勇士【恋姫】", name: "呂布 奉先", fullName: "呂布 奉先", collabo: 1 }
    , { implDate: "2023/10/19", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "武将【恋姫】", name: "曹仁", fullName: "曹仁", collabo: 1 }
    , { implDate: "2023/10/19", implDate_bq: null        , obtain: "sp", rarity: "p" , depType: "rear", class: "軍師【恋姫】", name: "賈駆", fullName: "賈駆", collabo: 1 }
    , { implDate: "2023/10/26", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "シャーマン", name: "ヒミコ", fullName: "星神の巫女ヒミコ" }
    , { implDate: "2023/11/01", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "van" , class: "マギステルミリトゥム", name: "ランシェ", fullName: "勝利へ導く者ランシェ" }
    , { implDate: "2023/11/01", implDate_bq: null        , obtain: "sh", rarity: "bh", depType: "rear", class: "未踏海域の覇者", name: "イヴリール", fullName: "大海を征く者イヴリール" }
    , { implDate: "2023/11/01", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "メイド", name: "ファニュア", fullName: "吸血給仕ファニュア" }
    , { implDate: "2023/11/01", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "van" , class: "マギステルミリトゥム", name: "ランシェ", fullName: "勝利へ導く者ランシェ" }
    , { implDate: "2023/11/01", implDate_bq: null        , obtain: "tr", rarity: "ph", depType: "rear", class: "未踏海域の覇者", name: "イヴリール", fullName: "大海を征く者イヴリール" }
    , { implDate: "2023/11/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "エンジェル", name: "ちびミルノ", fullName: "ちびミルノ" }
    , { implDate: "2023/11/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "モンスターブレイカー", name: "ちびランヒルド", fullName: "ちびランヒルド" }
    , { implDate: "2023/11/09", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "rear", class: "シャーマン", name: "イヨ", fullName: "星神の依代イヨ" }
    , { implDate: "2023/11/09", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "ウィッチ", name: "クロリス/私服", fullName: "魔女のお誘いクロリス" }
    , { implDate: "2023/11/09", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "ダークファイター", name: "ちび暗黒騎士", fullName: "ちび暗黒騎士", male: 1 }
    , { implDate: "2023/11/16", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "白の帝国城", name: "白の帝国城", fullName: "白の帝国城", collabo: 1 }
    , { implDate: "2023/11/22", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "神話の継承者", name: "アキレア", fullName: "武勇の半神アキレア" }
    , { implDate: "2023/11/22", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "デモンリドゥ", name: "ウェパル", fullName: "魔神の残滓ウェパル" }
    , { implDate: "2023/11/22", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "カオスルーラー", name: "イコル", fullName: "謀略の亜神イコル" }
    , { implDate: "2023/11/22", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "時の俯瞰者", name: "クロノシア", fullName: "時の亜神クロノシア" }
    , { implDate: "2023/11/30", implDate_bq: null        , obtain: "sp", rarity: "ph", depType: "both", class: "異世界戦士", name: "エフトラ/最終決戦仕様", fullName: "最終決戦仕様エフトラ" }
    , { implDate: "2023/12/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "犬神", name: "ちびツムジ", fullName: "ちびツムジ" }
    , { implDate: "2023/12/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "オートマタ", name: "ちびアルタ", fullName: "ちびアルタ" }
    , { implDate: "2023/12/07", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "プリンセス", name: "シビラ/聖剣", fullName: "聖剣姫シビラ" }
    , { implDate: "2023/12/07", implDate_bq: null        , obtain: "ev", rarity: "b" , depType: "van" , class: "神話の継承者", name: "ペルセナス", fullName: "綺譚の半神ペルセナス" }
    , { implDate: "2023/12/07", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "both", class: "エアセイラー", name: "アヴィリコ", fullName: "開拓飛艦士アヴィリコ" }
    , { implDate: "2023/12/07", implDate_bq: null        , obtain: "tr", rarity: "p" , depType: "rear", class: "風水使い", name: "クーシン", fullName: "武門の風水士クーシン" }
    , { implDate: "2023/12/07", implDate_bq: null        , obtain: "tr", rarity: "gc", depType: "rear", class: "魔界総帥", name: "ちびアスバール", fullName: "ちびアスバール" }
    , { implDate: "2023/12/14", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "rear", class: "ヴァンパイアハンター", name: "クルス/クリスマス", fullName: "聖夜の訪問者クルス" }
    , { implDate: "2023/12/14", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "魔物使い", name: "ブランシュ/クリスマス", fullName: "魔物と聖夜ブランシュ" }
    , { implDate: "2023/12/14", implDate_bq: null        , obtain: "sh", rarity: "g" , depType: "both", class: "スカイシューター", name: "アエロ/クリスマス", fullName: "聖なる雀翼アエロ" }
    , { implDate: "2023/12/14", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "皇帝", name: "ちび白の皇帝", fullName: "ちび白の皇帝", male: 1 }
    , { implDate: "2023/12/28", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "rear", class: "幻術士", name: "マルティナ/クリスマス", fullName: "粉雪の夢想劇マルティナ" }
    , { implDate: "2023/12/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "邪仙", name: "聞忠", fullName: "聞忠" }
    , { implDate: "2023/12/28", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "武侠", name: "誅子", fullName: "誅子" }
    
    // 2024
    , { implDate: "2024/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "ヴァンパイアプリンセス", name: "シルヴィア/お正月", fullName: "新年吸血道中シルヴィア" }
    , { implDate: "2024/01/01", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "儀仗軍神", name: "アラン/お正月", fullName: "祝賀の亜神アラン" }
    , { implDate: "2024/01/01", implDate_bq: null        , obtain: "sh", rarity: "ph", depType: "rear", class: "ピューティアー", name: "イムラウ/お正月", fullName: "迎春の巫女イムラウ" }
    , { implDate: "2024/01/01", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "van" , class: "料理人", name: "アヅミ/お正月", fullName: "御節職人アヅミ" }
    , { implDate: "2024/01/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "魔法剣士", name: "ちびシエナ", fullName: "ちびシエナ" }
    , { implDate: "2024/01/01", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "van" , class: "戦巫女", name: "ちびタツミ", fullName: "ちびタツミ" }
    , { implDate: "2024/01/04", implDate_bq: null        , obtain: "ev", rarity: "gc", depType: "van" , class: "シャークウォリアー", name: "ちびスカー", fullName: "ちびスカー", male: 1 }
    , { implDate: "2024/01/11", implDate_bq: null        , obtain: "sh", rarity: "b" , depType: "van" , class: "グラディエーター", name: "アナトリア/温泉", fullName: "闘志の癒し湯アナトリア" }
    , { implDate: "2024/01/11", implDate_bq: null        , obtain: "sh", rarity: "p" , depType: "rear", class: "ドラグーン", name: "ミカ/温泉", fullName: "温泉放浪騎ミカ" }
    , { implDate: "2024/01/11", implDate_bq: null        , obtain: "sp", rarity: "gc", depType: "rear", class: "ビショップ", name: "ちびマリウス", fullName: "ちびマリウス", male: 1 }
    , { implDate: "2024/01/25", implDate_bq: null        , obtain: "ev", rarity: "p" , depType: "van" , class: "モンク", name: "モモ/温泉", fullName: "温泉鉄甲モモ" }
    
    
    /*
    , { implDate: "", implDate_bq: "", obtain: "", rarity: "" , depType: "van" , class: "", name: "", fullName: "" }
    , { implDate: "", implDate_bq: "", obtain: "", rarity: "" , depType: "rear", class: "", name: "", fullName: "" }
    , { implDate: "", implDate_bq: "", obtain: "", rarity: "" , depType: "both", class: "", name: "", fullName: "" }
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
