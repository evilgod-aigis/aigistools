// 加算
buff.add = [
    {
        name: "王子【太鼓】", cl: "王子", skill: "通常"
        , stats: { atk: "30%", def: "30%" }
        , note: [ "範囲", "永続スキル" ]
    }
    , {
        name: "王子【ファンダム】", cl: "王子"
        , stats: { atk: "10%", def: "10%" }
        , note: "範囲"
    }
    , {
        name: "王子【ファンダム】", cl: "王子", skill: "通常(1)"
        , stats: { atk: "*3", def: "*3" }
        , note: "範囲"
    }
    , {
        name: "王子【ファンダム】", cl: "王子", skill: "通常(2)"
        , stats: { atk: "*5", def: "*5" }
        , note: "範囲"
    }
    , {
        name: "王子【ファンダム】", cl: "王子", skill: "通常(3～)"
        , stats: { atk: "*7", def: "*7" }
        , note: "範囲"
    }
    , {
        name: "トゥアン", rarity: "黒", cl: "バーバリアンクイーン", AW: "覚醒", skill: "通常"
        , stats: { atk: "10%" }
        , note: "範囲"
    }
    , {
        name: "トゥアン", rarity: "黒", cl: "バーバリアンクイーン", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "10%" }
        , note: "範囲"
    }
    , {
        name: "ヘイオス", rarity: "黒", cl: "ダークファイター", AW: "未", skill: "通常"
        , stats: { def: "50%" }
        , note: "範囲"
    }
    , {
        name: "ヘイオス", rarity: "黒", cl: "ダークファイター", AW: "覚醒", skill: "通常"
        , stats: { def: "50%" }
        , note: "範囲"
    }
    , {
        name: "ちびヘイオス", rarity: "ちび", cl: "ダークファイター", skill: "通常"
        , stats: { def: "50%" }
        , note: "範囲"
    }
    , {
        name: "エクス/バニー", rarity: "黒", cl: "神官戦士", AW: "覚醒", skill: "覚醒"
        , stats: { mr: "+10" }
        , note: [ "範囲", "永続" ]
    }
    , {
        name: "グレーテル/クリスマス", rarity: "白", cl: "ダークストーカー", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "20%" }
        , note: "範囲"
    }
    , {
        name: "ディアナ/水着", rarity: "黒", cl: "インペリアルナイト", AW: "未", skill: "通常"
        , stats: { atk: "12%" }
        , note: [ "範囲", "永続スキル" ]
    }
    , {
        name: "ディアナ/水着", rarity: "黒", cl: "インペリアルナイト", AW: "覚醒", skill: [ "通常", "覚醒(2～)" ]
        , stats: { atk: "12%" }
        , note: [ "範囲", "永続スキル" ]
    }
    , {
        name: "フーロン/浴衣", rarity: "黒", cl: "キョンシー", AW: "未"
        , stats: { atk: "3%" }
        , note: "範囲"
    }
    , {
        name: "フーロン/浴衣", rarity: "黒", cl: "キョンシー", AW: "覚醒"
        , stats: { atk: "5%" }
        , note: "範囲"
    }
    , {
        name: "フーロン/浴衣", rarity: "黒", cl: "キョンシー", AW: "覚醒", skill: "覚醒(4～)"
        , stats: { atk: "*2" }
        , note: [ "範囲", "永続スキル" ]
    }
    , {
        name: "レミィ/ハロウィン", rarity: "黒", cl: "雷公", AW: "未"
        , stats: { atk: "5%" }
        , note: "範囲"
    }
    , {
        name: "レミィ/ハロウィン", rarity: "黒", cl: "雷公", AW: "未", skill: "通常"
        , stats: { atk: "*5" }
        , note: "範囲"
    }
    , {
        name: "レミィ/ハロウィン", rarity: "黒", cl: "雷公", AW: "覚醒"
        , stats: { atk: "10%" }
        , note: "範囲"
    }
    , {
        name: "レミィ/ハロウィン", rarity: "黒", cl: "雷公", AW: "覚醒", skill: "通常"
        , stats: { atk: "*5" }
        , note: "範囲"
    }
    , {
        name: "レミィ/ハロウィン", rarity: "黒", cl: "雷公", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*2" }
        , note: [ "範囲", "永続スキル" ]
    }
    , {
        name: "アスラハ", rarity: "黒", cl: "グランドナイト", AW: "覚醒", skill: "覚醒"
        , stats: { def: "15%" }
        , note: [ "範囲", "永続スキル" ]
    }
    , {
        name: "清源妙道真君/学園", rarity: "黒", cl: "真人", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "30%", def: "30%" }
        , note: "範囲"
    }
    , {
        name: "聞忠", rarity: "黒", cl: "邪仙", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "10%", def: "30%" }
        , note: "範囲"
    }
    , {
        name: "シャディア/お正月", rarity: "黒", cl: "魔王親衛隊", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "30%" }
        , note: "範囲"
    }
    , {
        name: "大祓の巫女", cl: "戦巫女", AW: "覚2a"
        , stats: { def: "+200" }
        , note: [ "範囲", "戦巫女系" ]
    }
    , {
        name: "クローシェ", rarity: "白", cl: "妖糸使い", AW: "未", skill: "通常"
        , stats: { mr: "+10" }
        , note: "範囲"
    }
    , {
        name: "クローシェ", rarity: "白", cl: "妖糸使い", AW: "覚醒", skill: "通常"
        , stats: { mr: "+10" }
        , note: "範囲"
    }
    , {
        name: "ヴィラヘルム", rarity: "黒", cl: "初代皇帝", AW: "未"
        , stats: { atk: "7%", def: "7%" }
        , note: "範囲"
    }
    , {
        name: "ヴィラヘルム", rarity: "黒", cl: "初代皇帝", AW: "覚醒"
        , stats: { atk: "10%", def: "10%" }
        , note: "範囲"
    }
    , {
        name: "ヴィラヘルム", rarity: "黒", cl: "初代皇帝", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*1.5", def: "*1.5" }
        , note: "範囲"
    }
    , {
        name: "小悪魔アイドル", cl: "小悪魔アイドル", AW: "覚1"
        , stats: { atk: "5%", def: "5%" }
        , note: "範囲"
    }
    , {
        name: "エス★エフ", rarity: "黒", cl: "小悪魔アイドル", AW: "覚醒", skill: "通常"
        , stats: { atk: "*4" }
        , note: [ "範囲", "永続スキル" ]
    }
    , {
        name: "エス★エフ", rarity: "黒", cl: "小悪魔アイドル", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*7", def: "*7" }
        , note: "範囲"
    }
    , {
        name: "龍宮城の宴", rarity: "金", cl: "龍宮城の宴"
        , stats: { atk: "10%", def: "10%" }
    }
    , {
        name: "ソーマ/新装", rarity: "黒", cl: "アーチャー", AW: "覚醒"
        , stats: { atk: "+200" }
        , note: "範囲"
    }
    , {
        name: "ダンサー", cl: "ダンサー", AW: "未"
        , stats: { atk: "10%", def: "10%" }
        , note: "範囲"
    }
    , {
        name: "スーパーダンサー", cl: "ダンサー", AW: "覚1"
        , stats: { atk: "10%", def: "10%" }
        , note: [ "範囲", "ダンサー系" ]
    }
    , {
        name: "プリンシパル", cl: "ダンサー", AW: "覚2a"
        , stats: { atk: "13%", def: "13%" }
        , note: [ "範囲", "ダンサー系" ]
    }
    , {
        name: "グランアリエッタ", cl: "ダンサー", AW: "覚2b"
        , stats: { atk: "11%", def: "11%" }
        , note: [ "範囲", "ダンサー系" ]
    }
    , {
        name: "ミヤビ", rarity: "黒", cl: "ダンサー", AW: "未", skill: "通常"
        , stats: { atk: "*7", def: "*7" }
        , note: [ "範囲", "永続スキル" ]
    }
    , {
        name: "ミヤビ", rarity: "黒", cl: "ダンサー", AW: "覚醒", skill: "通常"
        , stats: { atk: "*7", def: "*7" }
        , note: [ "範囲", "永続スキル" ]
    }
    , {
        name: "ミヤビ", rarity: "黒", cl: "ダンサー", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*12", def: "*12" }
        , note: "範囲"
    }
    , {
        name: "シャルキー/新装", rarity: "黒", cl: "ダンサー", AW: "未", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "シャルキー/新装", rarity: "黒", cl: "ダンサー", AW: "覚醒", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "シャルキー/新装", rarity: "黒", cl: "ダンサー", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*10", def: "*5" }
        , note: [ "範囲", "永続スキル" ]
    }
    , {
        name: "マーニー", rarity: "白", cl: "ダンサー", AW: "未", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "マーニー", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "マーニー", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "覚醒(1)"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "マーニー", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "覚醒(2)"
        , stats: { atk: "*12", def: "*12" }
        , note: "範囲"
    }
    , {
        name: "マーニー", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "覚醒(3～)"
        , stats: { atk: "*13", def: "*13" }
        , note: "範囲"
    }
    , {
        name: "ワルツ", rarity: "白", cl: "ダンサー", AW: "未", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "ワルツ", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "ワルツ", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*4", def: "*4" }
        , note: [ "範囲", "永続スキル" ]
    }
    , {
        name: "ハナ", rarity: "白", cl: "ダンサー", AW: "未", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "ハナ", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "ハナ", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "ビビアン", rarity: "白", cl: "ダンサー", AW: "未", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "ビビアン", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "ビビアン", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "マーニー", rarity: "白", cl: "ダンサー", AW: "未", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "マーニー", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "マーニー", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "覚醒(奇)"
        , stats: { atk: "*5", def: "*15" }
        , note: "範囲"
    }
    , {
        name: "マーニー", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "覚醒(偶)"
        , stats: { atk: "*15", def: "*5" }
        , note: "範囲"
    }
    , {
        name: "ナターリエ/水着", rarity: "白", cl: "ダンサー", AW: "未", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "ナターリエ/水着", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: [ "通常", "覚醒(2～)" ]
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "ナターリエ/水着", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "覚醒(1)"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "ブレリア/クリスマス", rarity: "白", cl: "ダンサー", AW: "未", skill: "通常"
        , stats: { atk: "*8", def: "*8" }
        , note: "範囲"
    }
    , {
        name: "ブレリア/クリスマス", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "通常"
        , stats: { atk: "*8", def: "*8" }
        , note: "範囲"
    }
    , {
        name: "ブレリア/クリスマス", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*4", def: "*4" }
        , note: [ "範囲", "永続スキル" ]
    }
    , {
        name: "ワルツ/バレンタイン", rarity: "白", cl: "ダンサー", AW: "未", skill: "通常"
        , stats: { atk: "*7", def: "*7" }
        , note: "範囲"
    }
    , {
        name: "ワルツ/バレンタイン", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "通常"
        , stats: { atk: "*7", def: "*7" }
        , note: "範囲"
    }
    , {
        name: "ワルツ/バレンタイン", rarity: "白", cl: "ダンサー", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "ナターリエ", rarity: "金", cl: "ダンサー", AW: "未", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "ナターリエ", rarity: "金", cl: "ダンサー", AW: "覚醒", skill: "通常"
        , stats: { atk: "*10", def: "*10" }
        , note: "範囲"
    }
    , {
        name: "ナターリエ", rarity: "金", cl: "ダンサー", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*12", def: "*12" }
        , note: "範囲"
    }
    , {
        name: "シャルキー/バレンタイン", rarity: "金", cl: "ダンサー", AW: "未", skill: "通常"
        , stats: { atk: "*7", def: "*7" }
        , note: "範囲"
    }
    , {
        name: "シャルキー/バレンタイン", rarity: "金", cl: "ダンサー", AW: "覚醒", skill: "通常"
        , stats: { atk: "*7", def: "*7" }
        , note: "範囲"
    }
    , {
        name: "シャルキー/バレンタイン", rarity: "金", cl: "ダンサー", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*8", def: "*8" }
        , note: "範囲"
    }
    , {
        name: "ブレリア", rarity: "金", cl: "ダンサー", AW: "未", skill: "通常"
        , stats: { atk: "*8", def: "*8" }
        , note: "範囲"
    }
    , {
        name: "ブレリア", rarity: "金", cl: "ダンサー", AW: "覚醒", skill: "通常"
        , stats: { atk: "*8", def: "*8" }
        , note: "範囲"
    }
    , {
        name: "ブレリア", rarity: "金", cl: "ダンサー", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*10", def: "*5" }
        , note: "範囲"
    }
    , {
        name: "ちびミヤビ", rarity: "ちび", cl: "ダンサー", skill: "通常"
        , stats: { atk: "*7", def: "*7" }
        , note: [ "範囲", "永続スキル" ]
    }
    , {
        name: "シャルキー", rarity: "銀", cl: "ダンサー", AW: "未", skill: "通常"
        , stats: { atk: "*7", def: "*7" }
        , note: "範囲"
    }
    , {
        name: "アンナ/アイドル", rarity: "黒", cl: "政務官", AW: "覚醒"
        , stats: { atk: "+100", def: "+100" }
        , note: "範囲"
    }
    , {
        name: "聖獣使い", cl: "幻獣使い", AW: "覚2a"
        , stats: { mr: "+15" }
        , note: [ "範囲", "幻獣使い系" ]
    }
    , {
        name: "アスバール/闘兵", rarity: "黒", cl: "魔界総帥", AW: "覚醒"
        , stats: { mr: "+7" }
        , note: "範囲"
    }
    , {
        name: "キリエ", rarity: "黒", cl: "メディック", AW: "未"
        , stats: { atk: "+200", range: "+5" }
        , note: [ "ヒール対象(優先：攻撃力)", "継続：12.5秒" ]
    }
    , {
        name: "キリエ", rarity: "黒", cl: "メディック", AW: "未", skill: "通常"
        , stats: { atk: "*2.0" }
        , note: [ "ヒール対象(優先：攻撃力)", "継続：12.5秒" ]
    }
    , {
        name: "キリエ", rarity: "黒", cl: "メディック", AW: "覚醒"
        , stats: { atk: "+300", range: "+10" }
        , note: [ "ヒール対象(優先：攻撃力)", "継続：12.5秒" ]
    }
    , {
        name: "キリエ", rarity: "黒", cl: "メディック", AW: "覚醒", skill: "通常"
        , stats: { atk: "*2.0" }
        , note: [ "ヒール対象(優先：攻撃力)", "継続：12.5秒" ]
    }
    , {
        name: "キリエ", rarity: "黒", cl: "メディック", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*1.2", range: "*1.2" }
        , note: [ "ヒール対象(優先：攻撃力)", "継続：12.5秒", "永続スキル" ]
    }
    , {
        name: "ジュディス", rarity: "白", cl: "メディック", AW: "未"
        , stats: { atk: "+150", def: "+150" }
        , note: [ "ヒール対象(優先：防御力)", "継続：12.5秒" ]
    }
    , {
        name: "ジュディス", rarity: "白", cl: "メディック", AW: "未", skill: "通常"
        , stats: { atk: "*1.5", def: "*1.5" }
        , note: [ "ヒール対象(優先：防御力)", "継続：12.5秒" ]
    }
    , {
        name: "ジュディス", rarity: "白", cl: "メディック", AW: "覚醒"
        , stats: { atk: "+220", def: "+220" }
        , note: [ "ヒール対象(優先：防御力)", "継続：12.5秒" ]
    }
    , {
        name: "ジュディス", rarity: "白", cl: "メディック", AW: "覚醒", skill: "通常"
        , stats: { atk: "*1.5", def: "*1.5" }
        , note: [ "ヒール対象(優先：防御力)", "継続：12.5秒" ]
    }
    , {
        name: "ジュディス", rarity: "白", cl: "メディック", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*2.0", def: "*2.0" }
        , note: [ "ヒール対象(優先：防御力)", "継続：12.5秒" ]
    }
    , {
        name: "セレン", rarity: "白", cl: "メディック", AW: "未"
        , stats: { atk: "+150", def: "+150" }
        , note: [ "ヒール対象(優先：最大HP)", "継続：12.5秒" ]
    }
    , {
        name: "セレン", rarity: "白", cl: "メディック", AW: "未", skill: "通常"
        , stats: { atk: "*2.0", def: "*2.0" }
        , note: [ "ヒール対象(優先：最大HP)", "継続：12.5秒" ]
    }
    , {
        name: "セレン", rarity: "白", cl: "メディック", AW: "覚醒"
        , stats: { atk: "+220", def: "+220" }
        , note: [ "ヒール対象(優先：最大HP)", "継続：12.5秒" ]
    }
    , {
        name: "セレン", rarity: "白", cl: "メディック", AW: "覚醒", skill: "通常"
        , stats: { atk: "*2.0", def: "*2.0" }
        , note: [ "ヒール対象(優先：最大HP)", "継続：12.5秒" ]
    }
    , {
        name: "ニーカ", rarity: "白", cl: "メディック", AW: "未"
        , stats: { atk: "+90", def: "+90" }
        , note: [ "ヒール対象(優先：攻撃力)", "継続：12.5秒" ]
    }
    , {
        name: "ニーカ", rarity: "白", cl: "メディック", AW: "未", skill: "通常"
        , stats: { atk: "*1.5", def: "*1.5" }
        , note: [ "ヒール対象(優先：攻撃力)", "継続：12.5秒" ]
    }
    , {
        name: "ニーカ", rarity: "白", cl: "メディック", AW: "覚醒"
        , stats: { atk: "+160", def: "+160" }
        , note: [ "ヒール対象(優先：攻撃力)", "継続：12.5秒" ]
    }
    , {
        name: "ニーカ", rarity: "白", cl: "メディック", AW: "覚醒", skill: "通常"
        , stats: { atk: "*1.5", def: "*1.5" }
        , note: [ "ヒール対象(優先：攻撃力)", "継続：12.5秒" ]
    }
    , {
        name: "ニーカ", rarity: "白", cl: "メディック", AW: "覚醒", skill: "覚醒(1)"
        , stats: { atk: "*1.5", def: "*1.5" }
        , note: [ "ヒール対象(優先：攻撃力)", "継続：12.5秒" ]
    }
    , {
        name: "ニーカ", rarity: "白", cl: "メディック", AW: "覚醒", skill: "覚醒(2)"
        , stats: { atk: "*2.0", def: "*2.0" }
        , note: [ "ヒール対象(優先：攻撃力)", "継続：12.5秒" ]
    }
    , {
        name: "ニーカ", rarity: "白", cl: "メディック", AW: "覚醒", skill: "覚醒(3～)"
        , stats: { atk: "*2.5", def: "*2.5" }
        , note: [ "ヒール対象(優先：攻撃力)", "継続：12.5秒" ]
    }
    , {
        name: "オラティル", rarity: "黒", cl: "豊穣神", AW: "未"
        , stats: { hp: "max1000" }
    }
    , {
        name: "オラティル", rarity: "黒", cl: "豊穣神", AW: "覚醒"
        , stats: { hp: "max1500" }
    }
    , {
        name: "アイドル召喚士", cl: "アイドル召喚士", AW: "覚1"
        , stats: { atk: "5%" }
        , note: "範囲"
    }
    , {
        name: "リノ/アイドル", rarity: "白", cl: "アイドル召喚士", AW: "覚醒", skill: "通常"
        , stats: { atk: "*5" }
        , note: "範囲"
    }
    , {
        name: "リノ/アイドル", rarity: "白", cl: "アイドル召喚士", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*3" }
        , note: [ "範囲", "永続スキル" ]
    }
    , {
        name: "支援の聖霊", cl: "支援の聖霊"
        , stats: { atk: "+100", def: "+100" }
        , note: "範囲"
    }
    , {
        name: "戦場に集う聖霊たち", rarity: "黒", cl: "支援の聖霊"
        , stats: { mr: "+10" }
        , note: "範囲"
    }
    , {
        name: "ヘスペリデスの園", rarity: "金", cl: "ヘスペリデスの園"
        , stats: { hp: "max900" }
    }
    , {
        name: "セレスティアルヒーラー", cl: "スカイヒーラー", AW: "覚2b"
        , stats: { mr: "+10" }
        , note: [ "範囲", "スカイヒーラー系" ]
    }
    , {
        name: "帝国アイドル", cl: "帝国アイドル", AW: "覚1"
        , stats: { atk: "5%" }
        , note: "範囲"
    }
    , {
        name: "ツキコ★トゥーダ", rarity: "黒", cl: "帝国アイドル", AW: "覚醒", skill: "通常"
        , stats: { atk: "*5" }
        , note: "範囲"
    }
    , {
        name: "ツキコ★トゥーダ", rarity: "黒", cl: "帝国アイドル", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*7" }
        , note: [ "範囲", "永続スキル" ]
    }
    , {
        name: "関羽 雲長", rarity: "黒", cl: "武将【恋姫】", AW: "覚醒", skill: "覚醒(1)"
        , stats: { atk: "10%" }
        , note: "範囲"
    }
    , {
        name: "関羽 雲長", rarity: "黒", cl: "武将【恋姫】", AW: "覚醒", skill: "覚醒(2)"
        , stats: { atk: "20%" }
        , note: "範囲"
    }
    , {
        name: "関羽 雲長", rarity: "黒", cl: "武将【恋姫】", AW: "覚醒", skill: "覚醒(3～)"
        , stats: { atk: "30%" }
        , note: "範囲"
    }
    , {
        name: "王女【恋姫】", cl: "王女【恋姫】", AW: "未"
        , stats: { atk: "5%", def: "5%" }
        , note: "範囲"
    }
    , {
        name: "弓腰姫【恋姫】", cl: "王女【恋姫】", AW: "覚1"
        , stats: { atk: "8%", def: "8%" }
        , note: [ "範囲", "王女【恋姫】系" ]
    }
    , {
        name: "超不死鳥娘【モンスター娘TD】", cl: "不死鳥娘【モンスター娘TD】", AW: "覚1"
        , stats: { mr: "+20" }
        , note: [ "範囲", "不死鳥娘【モンスター娘TD】系" ]
    }
    , {
        name: "刀剣霊符", rarity: "トークン", AW: "未"
        , stats: { atk: "+100", def: "+100" }
        , note: [ "リャオレン", "範囲", "自壊(HP-1%/55f)", "分類未確認" ]
    }
    , {
        name: "仙刀霊符", rarity: "トークン", AW: "覚醒"
        , stats: { atk: "+200", def: "+200" }
        , note: [ "リャオレン", "範囲", "自壊(HP-1%/55f)", "分類未確認" ]
    }
    , {
        name: "オラティルの大釜", rarity: "トークン", AW: "未"
        , stats: { atk: "100%", def: "100%" }
        , note: [ "オラティル", "範囲" ]
    }
    , {
        name: "オラティルの聖大釜", rarity: "トークン", AW: "覚醒"
        , stats: { atk: "100%", def: "100%" }
        , note: [ "オラティル", "範囲" ]
    }
    , {
        name: "ポワワトークン", rarity: "トークン", AW: "未"
        , stats: { def: "+2500" }
        , note: [ "ポワワ", "重ね置き(遠近)", "自壊(HP-30/15f)" ]
    }
    , {
        name: "ポワワトークン", rarity: "トークン", AW: "覚醒"
        , stats: { def: "+3500" }
        , note: [ "ポワワ", "重ね置き(遠近)", "自壊(HP-40/15f)" ]
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒", skill: ""
        , stats: { : "" }
    }
    
    黒 白 青 金 銀 ちび
    
    未 覚醒 覚1 覚2a 覚2b
    
    常時 非 通常 覚醒
    
    hp atk def mr range 範囲 分類未確認
    
    正月 水着 浴衣 バニー 花嫁
    
    お正月 温泉 バレンタイン 学園 エッグハント
    
    ジューンブライド サマー ハロウィン クリスマス

*/