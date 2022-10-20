lists.selfBuff = {};

//初動短縮リスト
lists.selfBuff.rWT = [
    { id: null, buffer: "ナイトアサシン", rate: 50 },
    { id: null, buffer: "エンフォーサー", rate: 50 },
    { id: null, buffer: "アベンジャー系", rate: 80 },
    { id: null, buffer: "アベンジャー", rate: 80 },
    { id: null, buffer: "デスアベンジャー", rate: 80 },
    { id: null, buffer: "ヴェンデッタ", rate: 80 },
    { id: null, buffer: "リヴェンジェンス", rate: 80 },
    { id: null, buffer: "戦術科教師ケイティ", rate: 50 },
    { id: null, buffer: "聖夜の天才戦術家ヘレナ", rate: 20 },
    { id: null, buffer: "雷光の魔剣士タラニア", rate: 50 },
    { id: null, buffer: "主天使セフィーレ", rate: 60 },
    { id: null, buffer: "堕天系お掃除当番クロエ", rate: 50 },
    { id: null, buffer: "帝国機甲士クリスタ", rate: 30 },
    { id: null, buffer: "封機の剣士エレカ", rate: 60 },
    { id: null, buffer: "信仰の槍士コルム", rate: 50 },
    { id: null, buffer: "帝国魔術師イルマ", rate: 50 },
    { id: null, buffer: "炎のサンタ召喚士ソラノ", rate: 40 },
    { id: null, buffer: "甘美な踊り子マーニー", rate: 60 },
    { id: null, buffer: "恋の応援団シャルキー", rate: 70 },
    { id: null, buffer: "お祭り夕涼みココロ", rate: 50 },
    { id: null, buffer: "氷霊応援団ユキヒメ", rate: 60 },
    { id: null, buffer: "妖狸スズネ", rate: 20 },
    { id: null, buffer: "筆頭飛行士オヴェリー", rate: 40 }
];

//再動短縮リスト
lists.selfBuff.rCT = [
    { id: null, buffer: "ギガントハンマー", rate: 45 },
    { id: null, buffer: "ダイショーグン", rate: 45 },
    { id: null, buffer: "修羅", rate: 45 },
    { id: null, buffer: "ボウライダーマスター", rate: 45 },
    { id: null, buffer: "デッドリーエッジ", rate: 40 },
    { id: null, buffer: "剣神", rate: 40 },
    { id: null, buffer: "天魔天狗", rate: 45 },
    { id: null, buffer: "ラピッドシューター", rate: 45 },
    { id: null, buffer: "ネプチューン", rate: 45 },
    { id: null, buffer: "悟得陰陽頭", rate: 45 },
    { id: null, buffer: "クロノマスター", rate: 45 },
    { id: null, buffer: "ヘビートリガー", rate: 45 },
    { id: null, buffer: "聖女イリス", rate: 40 }
];

//スキル時間延長リスト
lists.selfBuff.skillExtend = [
    { id: null, buffer: "イモータルオリジン", rate: 30 },
    { id: null, buffer: "ファフニール", rate: 20 },
    { id: null, buffer: "ダイショーグン", rate: 30 },
    { id: null, buffer: "ペガサスマスター", rate: 70 },
    { id: null, buffer: "アズライール", rate: -20 },
    { id: null, buffer: "ドールマスター", rate: 30 },
    { id: null, buffer: "アドミラル", rate: 30 },
    { id: null, buffer: "神仙", rate: 50 },
    { id: null, buffer: "天魔天狗", rate: 25 },
    { id: null, buffer: "オンスロート", rate: 30 },
    { id: null, buffer: "アビスレイダー", rate: 30 },
    { id: null, buffer: "ソーサレス", rate: 30 },
    { id: null, buffer: "ロードオブヘルメス", rate: 30 },
    { id: null, buffer: "ヘビートリガー", rate: 30 },
    { id: null, buffer: "魔導鎧娘アルマ", rate: 20 },
    { id: null, buffer: "伏龍の軍師アイシャ", rate: 20 },
    { id: null, buffer: "水霊使いセノーテ", rate: 15 }
];

//硬直短縮リスト
lists.selfBuff.haste = [
    { id: null, buffer: "鉄泉の守護者レアン", rate: 40 },
    { id: null, buffer: "晴着の看板娘ジュノン", rate: 40 },
    //{ id: null, buffer: "水龍騎士スイレン", rate: 50 },
    //{ id: null, buffer: "屍骸道士ランファ", rate: 60 },
    { id: null, buffer: "絆鎖の救命師シアーシャ", rate: 40 }
];

//硬直短縮(固定値化)リスト
lists.selfBuff.hasteFixed = [
    { id: null, buffer: "お犬さま", atkCooldown: 26 }
];

//鈍化(マップ)軽減リスト
lists.selfBuff.redMapEff = [
    { id: null, buffer: "セーラー系", map: "深海", rate: 50 },
    { id: null, buffer: "ちびセーラー", map: "深海", rate: 50 },
    { id: null, buffer: "ちびセーラーエリート", map: "深海", rate: 50 },
    { id: null, buffer: "セーラー", map: "深海", rate: 50 },
    { id: null, buffer: "セーラーチーフ", map: "深海", rate: 50 },
    { id: null, buffer: "セーラーエリート", map: "深海", rate: 50 },
    { id: null, buffer: "アドミラル", map: "深海", rate: 50 },
    { id: null, buffer: "ドレッドノート", map: "深海", rate: 50 },
    { id: null, buffer: "パイレーツ系", map: "深海", rate: 50 },
    { id: null, buffer: "下級パイレーツ", map: "深海", rate: 50 },
    { id: null, buffer: "ちびパイレーツ", map: "深海", rate: 50 },
    { id: null, buffer: "ちびキングオブパイレーツ", map: "深海", rate: 50 },
    { id: null, buffer: "パイレーツ", map: "深海", rate: 50 },
    { id: null, buffer: "キャプテン", map: "深海", rate: 50 },
    { id: null, buffer: "キングオブパイレーツ", map: "深海", rate: 50 },
    { id: null, buffer: "ネプチューン", map: "深海", rate: 50 },
    { id: null, buffer: "エル・ドラゴ", map: "深海", rate: 50 },
    //{ id: null, buffer: "水遁遊戯ハツネ", skill: "覚醒", map: "深海", rate: 50 },
    { id: null, buffer: "夏陽海仙 竜吉公主", map: "深海", rate: 50 }
];