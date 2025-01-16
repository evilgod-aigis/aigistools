// ごちゃまぜ
debuff.mixture = [
    {
        name: "王子【巨像】", cl: "王子", skill: "通常"
        , stats: {
            def: { value: "-20%", type: "area" }
        }
        , domain: "area"
        , target: { attr: [ "天使", "人間" ] }
        , note: [ "Lv3以上", "分類未確認" ]
    }
    , {
        name: "王子【巨像】", cl: "王子", skill: "通常"
        , stats: {
            stop: { value: "239f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "天使", "人間" ] }
        , note: "発動時"
    }
    , {
        name: "王子【ダーク】", cl: "王子", skill: "通常"
        , stats: {
            atk: { value: "-40%", type: "noAttr" }
            , def: { value: "-40%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "王子【神槍】", cl: "王子", skill: "通常"
        , stats: {
            atk: { value: "-25%", type: "noAttr" }
            , def: { value: "-25%", type: "area" }
            , mr: { value: "-25%", type: "area" }
        }
        , domain: "area"
        , target: { attr: [ "神", "天使", "神獣" ] }
    }
    , {
        name: "王子【神槍】", cl: "王子", skill: "通常"
        , stats: {
            atk: { value: "-30%", type: "noAttr" }
            , def: { value: "-30%", type: "area" }
            , mr: { value: "-30%", type: "area" }
        }
        , domain: "area"
        , target: { attr: [ "神", "天使", "神獣" ] }
        , note: "Lv3以上"
    }
    , {
        name: "王子【ナンディ】", cl: "王子", skill: "通常"
        , stats: {
            atk: { value: "-30%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "王子【ドゥン】", cl: "王子", skill: "通常"
        , stats: {
            def: { value: "-40%", type: "area" }
            , mr: { value: "-40%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "王子【ドゥン】", cl: "王子", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "area" }
            , mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
        , note: [ "Lv4", "分類未確認" ]
    }
    , {
        name: "王子【水着】", cl: "王子", skill: "通常(奇)"
        , stats: {
            def: { value: "-30%", type: "area" }
            , mr: { value: "-30%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "王子【麒麟】", cl: "王子", skill: "通常"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
            , def: { value: "-30%", type: "global" }
            , mr: { value: "-30%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "トラム/水着", rarity: "白", cl: "銀腕の神話", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: {
            mr: { value: "-25%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "アルヴァ", rarity: "黒", cl: "ウェポンマスター", AW: "覚醒", skill: "覚醒"
        , stats: {
            stop: { value: "89f", type: "global" }
        }
        , domain: "global"
        , note: "発動時"
    }
    , {
        name: "魔導生命体(大)", cl: "魔導生命体", AW: "覚1"
        , stats: {
            mr: { value: "-50%", type: "clAttr" }
        }
        , domain: "area"
    }
    , {
        name: "アルコゥ", rarity: "黒", cl: "祖竜", AW: "覚醒"
        , stats: {
            mr: { value: "-30%", type: "clAttr" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "伏綺", rarity: "黒", cl: "開天の神話", AW: "覚醒", skill: "覚醒(～2)"
        , stats: {
            def: { value: "-50%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "伏綺", rarity: "黒", cl: "開天の神話", AW: "覚醒", skill: "覚醒(3～)"
        , stats: {
            def: { value: "-50%", type: "area" }
        }
        , domain: "area"
        , note: [ "永続", "分類未確認" ]
        //, note: "永続"
    }
    , {
        name: "ソラス/水着", rarity: "白", cl: "占星術師", AW: "覚醒", skill: "覚醒(偶)"
        , stats: {
            def: { value: "-20%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "ユージェン/お正月", rarity: "白", cl: "チェイスハンター", AW: "覚醒"
        , stats: {
            def: { value: "-15%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "サナラ", rarity: "黒", cl: "ジオマンサー", AW: "覚醒"
        , stats: {
            def: { value: "-20%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "サナラ/水着", rarity: "白", cl: "ジオマンサー", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-40%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "サナラ/水着", rarity: "白", cl: "ジオマンサー", AW: "覚醒", skill: "覚醒(3～)"
        , stats: {
            def: { value: "-15%", type: "area" }
        }
        , domain: "area"
        , note: "永続"
    }
    , {
        name: "ホルテウス/水着", rarity: "白", cl: "ファラオ", AW: "覚醒", skill: "覚醒"
        , stats: {
            mr: { value: "-30%", type: "area" }
        }
        , domain: "area"
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "モルフェサ", rarity: "黒", cl: "カースウィスパラー", AW: "覚醒", skill: "覚醒"
        , stats: {
            def: { value: "-50%", type: "global" }
            , mr: { value: "-50%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "モルフェサ", rarity: "白", cl: "カースウィスパラー", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "モルフェサ", rarity: "白", cl: "カースウィスパラー", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "エルデ", rarity: "白", cl: "ヘビーアーマー", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "エルデ", rarity: "白", cl: "ヘビーアーマー", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "キャリー/新装", rarity: "黒", cl: "ワルキューレ", AW: "未"
        , stats: {
            def: { value: "-30%", type: "global" }
        }
        , domain: "global"
        , note: [ "配置後30秒", "分類未確認" ]
    }
    , {
        name: "キャリー/新装", rarity: "黒", cl: "ワルキューレ", AW: "覚醒"
        , stats: {
            def: { value: "-30%", type: "global" }
        }
        , domain: "global"
        , note: [ "配置後45秒", "分類未確認" ]
    }
    , {
        name: "ジュノン/お正月", rarity: "白", cl: "ローグ", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "89f", type: "global" }
        }
        , domain: "global"
        , note: "発動時"
    }
    , {
        name: "ジュノン/お正月", rarity: "白", cl: "ローグ", AW: "覚醒", skill: "通常"
        , stats: {
            stop: { value: "89f", type: "global" }
        }
        , domain: "global"
        , note: "発動時"
    }
    , {
        name: "セブン/ハロウィン", rarity: "白", cl: "ローグ", AW: "覚醒", skill: "覚醒"
        , stats: {
            stop: { value: "119f", type: "area" }
        }
        , domain: "area"
        , note: "発動時"
    }
    , {
        name: "シビラ", rarity: "黒", cl: "プリンセス", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "シビラ", rarity: "黒", cl: "プリンセス", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "シビラ", rarity: "黒", cl: "プリンセス", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "アンジェリーネ", rarity: "黒", cl: "プリンセス", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-15%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "物理" ] }
        , note: "永続"
    }
    , {
        name: "アンジェリーネ", rarity: "黒", cl: "プリンセス", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-15%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "物理" ] }
        , note: "永続"
    }
    , {
        name: "アンジェリーネ", rarity: "黒", cl: "プリンセス", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-25%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "物理" ] }
    }
    , {
        name: "オリヴィエ/花嫁", rarity: "黒", cl: "プリンセス", AW: "覚醒", skill: "覚醒"
        , stats: {
            mr: { value: "-100%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "スクハ", rarity: "白", cl: "プリンセス", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "239f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "妖怪" ] }
        , note: "発動時"
    }
    , {
        name: "スクハ", rarity: "白", cl: "プリンセス", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: {
            stop: { value: "239f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "妖怪" ] }
        , note: "発動時"
    }
    , {
        name: "ちびシビラ", rarity: "ちび", cl: "プリンセス", skill: "覚醒"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "シルヴィア/お正月", rarity: "黒", cl: "ヴァンパイアプリンセス", AW: "覚醒", skill: "覚醒(5～)"
        , stats: {
            mr: { value: "-15", type: "fixed" }
        }
        , domain: "global"
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "エストリエ", rarity: "白", cl: "ヴァンパイアプリンセス", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: {
            stop: { value: "119f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "アンデッド" ] }
        , note: "発動時"
    }
    , {
        name: "ピリカ", rarity: "白", cl: "イビルプリンセス", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "89f", type: "global" }
        }
        , domain: "global"
        , note: "発動時"
    }
    , {
        name: "ピリカ", rarity: "白", cl: "イビルプリンセス", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: {
            stop: { value: "89f", type: "global" }
        }
        , domain: "global"
        , note: "発動時"
    }
    , {
        name: "スキュレ/浴衣", rarity: "白", cl: "イビルプリンセス", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "魔法" ] }
    }
    , {
        name: "スキュレ/浴衣", rarity: "白", cl: "イビルプリンセス", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "魔法" ] }
    }
    , {
        name: "スキュレ/浴衣", rarity: "白", cl: "イビルプリンセス", AW: "覚醒", skill: "覚醒"
        , stats: {
            def: { value: "-20%", type: "area" }
        }
        , domain: "area"
        , target: { atkAttr: [ "魔法" ] }
    }
    , {
        name: "ジュウベエ", rarity: "黒", cl: "サムライ", AW: "覚醒", skill: "覚醒(3～)"
        , stats: {
            stop: { value: "89f", type: "global" }
        }
        , domain: "global"
        , note: "発動時"
    }
    , {
        name: "チヨメ", rarity: "黒", cl: "忍者", AW: "覚醒"
        , stats: {
            def: { value: "-25%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "チヨメ/温泉", rarity: "黒", cl: "忍者", AW: "覚醒"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "エスタ", rarity: "黒", cl: "ペガサスライダー", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "エスタ", rarity: "黒", cl: "ペガサスライダー", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "コーネリア", rarity: "黒", cl: "ダークファイター", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-30%", type: "noAttr" }
            , def: { value: "-30%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "コーネリア", rarity: "黒", cl: "ダークファイター", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-30%", type: "noAttr" }
            , def: { value: "-30%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "暗黒騎士", rarity: "黒", cl: "ダークファイター", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-50%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "暗黒騎士", rarity: "黒", cl: "ダークファイター", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-50%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "コーネリア/クリスマス", rarity: "黒", cl: "ダークファイター", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "コーネリア/クリスマス", rarity: "黒", cl: "ダークファイター", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "コーネリア/水着", rarity: "黒", cl: "ダークファイター", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-40%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "コーネリア/水着", rarity: "黒", cl: "ダークファイター", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-40%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "ユリナ", rarity: "白", cl: "ダークファイター", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "ユリナ", rarity: "白", cl: "ダークファイター", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "ユリナ", rarity: "白", cl: "ダークファイター", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-20%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "物理" ] }
    }
    , {
        name: "ちびコーネリア", rarity: "ちび", cl: "ダークファイター", skill: "通常"
        , stats: {
            atk: { value: "-30%", type: "noAttr" }
            , def: { value: "-30%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "ちび暗黒騎士", rarity: "ちび", cl: "ダークファイター", skill: "通常"
        , stats: {
            atk: { value: "-50%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "キンドライヒ", rarity: "白", cl: "モンク", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-15%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "キンドライヒ", rarity: "白", cl: "モンク", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-15%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "キンドライヒ", rarity: "白", cl: "モンク", AW: "覚醒", skill: "覚醒"
        , stats: {
            stop: { value: "89f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "神獣", "魔獣", "妖獣", "獣", "獣人" ] }
        , note: "発動時"
    }
    , {
        name: "ルヴェア", rarity: "白", cl: "前衛戦術家", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-15%", type: "global" }
            , mr: { value: "-15%", type: "global" }
        }
        , domain: "global"
        , note: "永続"
    }
    , {
        name: "ルヴェア", rarity: "白", cl: "前衛戦術家", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-15%", type: "global" }
            , mr: { value: "-15%", type: "global" }
        }
        , domain: "global"
        , note: "永続"
    }
    , {
        name: "ルヴェア/バレンタイン", rarity: "白", cl: "前衛戦術家", AW: "覚醒", skill: "覚醒"
        , stats: {
            def: { value: "-30%", type: "global" }
            , mr: { value: "-30%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "ちびルヴェア", rarity: "ちび", cl: "前衛戦術家", skill: "通常"
        , stats: {
            def: { value: "-15%", type: "global" }
            , mr: { value: "-15%", type: "global" }
        }
        , domain: "global"
        , note: "永続"
    }
    , {
        name: "イングリッド", rarity: "黒", cl: "魔法剣士", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "イングリッド", rarity: "黒", cl: "魔法剣士", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "イングリッド", rarity: "黒", cl: "魔法剣士", AW: "覚醒", skill: "覚醒"
        , stats: {
            mr: { value: "-70%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "ちびイングリッド", rarity: "ちび", cl: "魔法剣士", skill: "通常"
        , stats: {
            mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "セフィーレ", rarity: "白", cl: "エンジェル", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-20", type: "fixed" }
        }
        , domain: "global"
    }
    , {
        name: "セフィーレ", rarity: "白", cl: "エンジェル", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-20", type: "fixed" }
        }
        , domain: "global"
    }
    , {
        name: "堕姫", rarity: "白", cl: "妖狐", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "149f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "人間" ] }
        , note: "発動時"
    }
    , {
        name: "堕姫", rarity: "白", cl: "妖狐", AW: "覚醒", skill: "通常"
        , stats: {
            stop: { value: "149f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "人間" ] }
        , note: "発動時"
    }
    , {
        name: "堕姫", rarity: "白", cl: "妖狐", AW: "覚醒", skill: "覚醒"
        , stats: {
            stop: { value: "149f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "人間" ] }
        , note: [ "発動時", "発動時、男性のHP-50%" ]
    }
    , {
        name: "シルセス", rarity: "黒", cl: "メイジアーマー", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-20", type: "fixed" }
        }
        , domain: "global"
        , note: "永続"
    }
    , {
        name: "シルセス", rarity: "黒", cl: "メイジアーマー", AW: "覚醒", skill: [ "通常", "覚醒(2～)" ]
        , stats: {
            mr: { value: "-20", type: "fixed" }
        }
        , domain: "global"
        , note: "永続"
    }
    , {
        name: "シルセス", rarity: "黒", cl: "メイジアーマー", AW: "覚醒", skill: "覚醒(1)"
        , stats: {
            mr: { value: "-30", type: "fixed" }
        }
        , domain: "global"
    }
    , {
        name: "シルセス/花嫁", rarity: "黒", cl: "メイジアーマー", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-70%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "シルセス/花嫁", rarity: "黒", cl: "メイジアーマー", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-70%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "ちびシルセス", rarity: "ちび", cl: "メイジアーマー", skill: "通常"
        , stats: {
            mr: { value: "-20", type: "fixed" }
        }
        , domain: "global"
        , note: "永続"
    }
    , {
        name: "スイレン", rarity: "白", cl: "ドラゴンライダー", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "スイレン", rarity: "白", cl: "ドラゴンライダー", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "ちびスイレン", rarity: "ちび", cl: "ドラゴンライダー", skill: "通常"
        , stats: {
            mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "マーガレット/新装", rarity: "黒", cl: "ボウライダー", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: {
            stop: { value: "59f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "妖怪", "デーモン" ] }
        , note: "発動時"
    }
    , {
        name: "マーガレット/水着", rarity: "白", cl: "ボウライダー", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "マーガレット/水着", rarity: "白", cl: "ボウライダー", AW: "覚醒", skill: [ "通常", "覚醒(4～)" ]
        , stats: {
            def: { value: "-50%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "サンドラ/水着", rarity: "白", cl: "ソードマスター", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "119f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "魚人", "水棲" ] }
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "サンドラ/水着", rarity: "白", cl: "ソードマスター", AW: "覚醒", skill: [ "通常", "覚醒(2～)" ]
        , stats: {
            stop: { value: "119f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "魚人", "水棲" ] }
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "シェイド", rarity: "白", cl: "ダークストーカー", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "global"
        , target: { attr: [ "天使" ] }
    }
    , {
        name: "空神", cl: "天狗", AW: "覚2a"
        , stats: {
            def: { value: "-20%", type: "area" }
        }
        , domain: "area"
        , note: "天狗系"
    }
    , {
        name: "フィスティア", rarity: "白", cl: "鍛冶職人", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "フィスティア", rarity: "白", cl: "鍛冶職人", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "ミスリア", rarity: "白", cl: "鍛冶職人", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-10", type: "fixed" }
        }
        , domain: "global"
        , note: "永続"
    }
    , {
        name: "ミスリア", rarity: "白", cl: "鍛冶職人", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-10", type: "fixed" }
        }
        , domain: "global"
        , note: "永続"
    }
    , {
        name: "シールインヘリット", cl: "モンスターブレイカー", AW: "覚2a"
        , stats: {
            atk: { value: "-7%", type: "noAttr" }
        }
        , domain: "global"
        , note: "モンスターブレイカー系"
    }
    , {
        name: "モンスターデモリッシャー", cl: "モンスターブレイカー", AW: "覚2b"
        , stats: {
            def: { value: "-15%", type: "area" }
            , mr: { value: "-15%", type: "clAttr" }
        }
        , domain: "global"
        , note: "モンスターブレイカー系"
    }
    , {
        name: "テンマ", rarity: "黒", cl: "モンスターブレイカー", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-15%", type: "area" }
            , mr: { value: "-15%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "テンマ", rarity: "黒", cl: "モンスターブレイカー", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-15%", type: "area" }
            , mr: { value: "-15%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "テンマ", rarity: "黒", cl: "モンスターブレイカー", AW: "覚醒", skill: "覚醒"
        , stats: {
            def: { value: "-25%", type: "area" }
            , mr: { value: "-25%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "ランヒルド/バニー", rarity: "黒", cl: "モンスターブレイカー", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-50%", type: "noAttr" }
            , def: { value: "-50%", type: "area" }
            , mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "アデライド", rarity: "黒", cl: "グランドナイト", AW: "覚醒", skill: "覚醒"
        , stats: {
            def: { value: "-90%", type: "area" }
            , mr: { value: "-90%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "清源妙道真君", rarity: "黒", cl: "真人", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
            , def: { value: "-20%", type: "global" }
            , mr: { value: "-20%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "清源妙道真君", rarity: "黒", cl: "真人", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
            , def: { value: "-20%", type: "global" }
            , mr: { value: "-20%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "清源妙道真君/水着", rarity: "黒", cl: "真人", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
            , def: { value: "-20%", type: "global" }
            , mr: { value: "-20%", type: "global" }
        }
        , domain: "global"
        , note: "分類未確認"
    }
    , {
        name: "太公望/お正月", rarity: "白", cl: "真人", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "global"
        , target: { attr: [ "デーモン", "アンデッド" ] }
    }
    , {
        name: "太公望/お正月", rarity: "白", cl: "真人", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "global"
        , target: { attr: [ "デーモン", "アンデッド" ] }
    }
    , {
        name: "邪鬼仙", cl: "邪仙", AW: "覚2b"
        , stats: {
            mr: { value: "-20%", type: "clAttr" }
        }
        , domain: "area"
        , note: [ "邪仙系", "分類未確認" ]
    }
    , {
        name: "王妃人", rarity: "白", cl: "邪仙", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-10", type: "fixed" }
        }
        , domain: "global"
    }
    , {
        name: "王妃人", rarity: "白", cl: "邪仙", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-10", type: "fixed" }
        }
        , domain: "global"
    }
    , {
        name: "王妃人", rarity: "白", cl: "邪仙", AW: "覚醒", skill: "覚醒"
        , stats: {
            mr: { value: "-20", type: "fixed" }
        }
        , domain: "global"
    }
    , {
        name: "ヤハール", rarity: "白", cl: "デーモンロード", AW: "覚醒", skill: "覚醒"
        , stats: {
            def: { value: "-25%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "厄神霊犬", cl: "犬神", AW: "覚2b", skill: [ "通常", "覚醒" ]
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "area"
        , note: "犬神系"
    }
    , {
        name: "アヅミ", rarity: "白", cl: "料理人", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-25%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "物理" ] }
    }
    , {
        name: "ユッタ/水着", rarity: "白", cl: "料理人", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "global" }
        }
        , domain: "global"
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "ユッタ/水着", rarity: "白", cl: "料理人", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "global" }
        }
        , domain: "global"
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "エスネア/学園", rarity: "黒", cl: "デモンルーン", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "area" }
            , mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "エスネア/学園", rarity: "黒", cl: "デモンルーン", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "area" }
            , mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "重機関騎士", cl: "スチームナイト", AW: "覚2b", skill: [ "通常", "覚醒" ]
        , stats: {
            def: { value: "-30%", type: "area" }
            , mr: { value: "-30%", type: "area" }
        }
        , domain: "area"
        , note: "スチームナイト系"
    }
    , {
        name: "イザムバード", rarity: "黒", cl: "スチームナイト", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "ハリナ", rarity: "黒", cl: "エンプレス", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-40%", type: "noAttr" }
            , def: { value: "-40%", type: "area" }
            , mr: { value: "-40%", type: "area" }
        }
        , domain: "area"
        , target: { attr: [ "デーモン", "魔神" ] }
    }
    , {
        name: "ハリナ", rarity: "黒", cl: "エンプレス", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-40%", type: "noAttr" }
            , def: { value: "-40%", type: "area" }
            , mr: { value: "-40%", type: "area" }
        }
        , domain: "area"
        , target: { attr: [ "デーモン", "魔神" ] }
    }
    , {
        name: "ハリナ", rarity: "黒", cl: "エンプレス", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-40%", type: "noAttr" }
            , def: { value: "-40%", type: "area" }
            , mr: { value: "-40%", type: "area" }
        }
        , domain: "area"
        , target: { attr: [ "天使", "神獣", "神" ] }
    }
    , {
        name: "ハリナ/水着", rarity: "黒", cl: "エンプレス", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
            , def: { value: "-20%", type: "area" }
            , mr: { value: "-20%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "ハリナ/水着", rarity: "黒", cl: "エンプレス", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
            , def: { value: "-20%", type: "area" }
            , mr: { value: "-20%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "ちびハリナ", rarity: "ちび", cl: "エンプレス", skill: "通常"
        , stats: {
            atk: { value: "-40%", type: "noAttr" }
            , def: { value: "-40%", type: "area" }
            , mr: { value: "-40%", type: "area" }
        }
        , domain: "area"
        , target: { attr: [ "デーモン", "魔神" ] }
    }
    , {
        name: "ヴィアベル", rarity: "黒", cl: "アクアナイト", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-40%", type: "noAttr" }
        }
        , domain: "global"
        , target: { attr: [ "魚人", "水棲" ] }
    }
    , {
        name: "ヴィアベル", rarity: "黒", cl: "アクアナイト", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-40%", type: "noAttr" }
        }
        , domain: "global"
        , target: { attr: [ "魚人", "水棲" ] }
    }
    , {
        name: "ヴィアベル", rarity: "黒", cl: "アクアナイト", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-25%", type: "noAttr" }
        }
        , domain: "global"
        , target: { attr: [ "魚人", "水棲" ] }
        , note: "永続"
    }
    , {
        name: "ちびヴィアベル", rarity: "ちび", cl: "アクアナイト", skill: "通常"
        , stats: {
            atk: { value: "-40%", type: "noAttr" }
        }
        , domain: "global"
        , target: { attr: [ "魚人", "水棲" ] }
    }
    , {
        name: "アルタ", rarity: "黒", cl: "オートマタ", AW: "覚醒", skill: "覚醒(1)"
        , stats: {
            atk: { value: "-30%", type: "noAttr" }
            , def: { value: "-30%", type: "area" }
        }
        , domain: "area"
        , target: { attr: [ "ゴブリン", "オーク", "ゴーレム", "巨人", "機械", "アーマー" ] }
    }
    , {
        name: "アルタ", rarity: "黒", cl: "オートマタ", AW: "覚醒", skill: "覚醒(2)"
        , stats: {
            atk: { value: "-30%", type: "noAttr" }
            , def: { value: "-30%", type: "area" }
        }
        , domain: "area"
        , target: { attr: [
            "ゴブリン", "オーク", "ゴーレム", "巨人", "機械", "アーマー"
            , "神獣", "魔獣", "妖獣", "獣", "獣人", "植物"
        ] }
    }
    , {
        name: "アルタ", rarity: "黒", cl: "オートマタ", AW: "覚醒", skill: "覚醒(3～)"
        , stats: {
            atk: { value: "-30%", type: "noAttr" }
            , def: { value: "-30%", type: "area" }
        }
        , domain: "area"
        , target: { attr: [
            "ゴブリン", "オーク", "ゴーレム", "巨人", "機械", "アーマー"
            , "神獣", "魔獣", "妖獣", "獣", "獣人", "植物"
            , "妖怪", "アンデッド", "デーモン", "天使"
        ] }
        , note: "永続"
    }
    , {
        name: "カゴメ", rarity: "黒", cl: "ぬりかべ", AW: "覚醒", skill: "覚醒"
        , stats: {
            mr: { value: "-30%", type: "global" }
        }
        , domain: "global"
        , note: "永続"
    }
    , {
        name: "シラヌイ/浴衣", rarity: "白", cl: "ぬりかべ", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "global" }
        }
        , domain: "global"
        , note: "分類未確認"
    }
    , {
        name: "シラヌイ/浴衣", rarity: "白", cl: "ぬりかべ", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "global" }
        }
        , domain: "global"
        , note: "分類未確認"
    }
    , {
        name: "アラン", rarity: "黒", cl: "儀仗軍神", AW: "覚醒", skill: "覚醒(1)"
        , stats: {
            mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "アラン", rarity: "黒", cl: "儀仗軍神", AW: "覚醒", skill: "覚醒(2)"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
            , mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "アラン", rarity: "黒", cl: "儀仗軍神", AW: "覚醒", skill: "覚醒(3～)"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
            , def: { value: "-50%", type: "area" }
            , mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "アラン/闘兵", rarity: "黒", cl: "儀仗軍神", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "area"
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "ちびアラン", rarity: "ちび", cl: "儀仗軍神", skill: "覚醒(1)"
        , stats: {
            mr: { value: "-30%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "ちびアラン", rarity: "ちび", cl: "儀仗軍神", skill: "覚醒(2)"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
            , mr: { value: "-30%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "ちびアラン", rarity: "ちび", cl: "儀仗軍神", skill: "覚醒(3～)"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
            , def: { value: "-30%", type: "area" }
            , mr: { value: "-30%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "ナシート", rarity: "白", cl: "サベージファイター", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "global" }
        }
        , domain: "global"
        , note: "分類未確認"
    }
    , {
        name: "ナシート", rarity: "白", cl: "サベージファイター", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "global" }
        }
        , domain: "global"
        , note: "分類未確認"
    }
    , {
        name: "ティルト", rarity: "黒", cl: "ハデスソルジャー", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "ティルト", rarity: "黒", cl: "ハデスソルジャー", AW: "覚醒", skill: [ "通常", "覚醒(3～)" ]
        , stats: {
            def: { value: "-30%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "元始天尊", rarity: "黒", cl: "天尊", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-60%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "元始天尊", rarity: "黒", cl: "天尊", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-60%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "元始天尊/温泉", rarity: "黒", cl: "天尊", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "global"
        , note: "分類未確認"
    }
    , {
        name: "元始天尊/温泉", rarity: "黒", cl: "天尊", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "global"
        , note: "分類未確認"
    }
    , {
        name: "ダーク王子", rarity: "黒", cl: "ダーク王子", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
            , def: { value: "-20%", type: "global" }
        }
        , domain: "global"
        , note: "分類未確認"
    }
    , {
        name: "ダーク王子", rarity: "黒", cl: "ダーク王子", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
            , def: { value: "-20%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "ユリクセス", rarity: "黒", cl: "神話の継承者", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "ウェパル", rarity: "黒", cl: "デモンリドゥ", AW: "覚醒", skill: "覚醒"
        , stats: {
            def: { value: "-20%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "イコル", rarity: "黒", cl: "カオスルーラー", AW: "未"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
            , def: { value: "-10%", type: "area" }
            , mr: { value: "-10%", type: "clAttr" }
        }
        , domain: "area"
    }
    , {
        name: "イコル", rarity: "黒", cl: "カオスルーラー", AW: "覚醒"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
            , def: { value: "-20%", type: "area" }
            , mr: { value: "-20%", type: "clAttr" }
        }
        , domain: "area"
    }
    , {
        name: "ダーク王子", rarity: "黒", cl: "ダーク王子", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-40%", type: "noAttr" }
            , def: { value: "-40%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "ルイゼット", rarity: "黒", cl: "処刑人", AW: "覚醒", skill: "覚醒"
        , stats: {
            mr: { value: "-30%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "ウィドウマイカー", cl: "妖糸使い", AW: "覚2b"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
            , def: { value: "-15%", type: "area" }
        }
        , domain: "area"
        , note: "妖糸使い系"
    }
    , {
        name: "ヴァイセカイゼリン", cl: "初代皇帝", AW: "覚2a"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "area"
        , note: "初代皇帝系"
    }
    , {
        name: "ヴィラヘルム", rarity: "黒", cl: "初代皇帝", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "ヴィラヘルム", rarity: "黒", cl: "初代皇帝", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "ヴィクトリア/浴衣", rarity: "白", cl: "アーチャー", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-25%", type: "area" }
        }
        , domain: "area"
        , target: [
            { attr: [ "アンデッド" ] }
            , { atkAttr: [ "魔法" ] }
        ]
        , note: "分類未確認"
    }
    , {
        name: "ヴィクトリア/浴衣", rarity: "白", cl: "アーチャー", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-25%", type: "area" }
        }
        , domain: "area"
        , target: [
            { attr: [ "アンデッド" ] }
            , { atkAttr: [ "魔法" ] }
        ]
        , note: "分類未確認"
    }
    , {
        name: "エステル", rarity: "黒", cl: "メイジ", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-80%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "エステル", rarity: "黒", cl: "メイジ", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-80%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "エステル", rarity: "黒", cl: "メイジ", AW: "覚醒", skill: "覚醒"
        , stats: {
            mr: { value: "-50%", type: "global" }
        }
        , domain: "global"
        , note: "永続"
    }
    , {
        name: "オデット", rarity: "白", cl: "メイジ", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "魔法" ] }
    }
    , {
        name: "オデット", rarity: "白", cl: "メイジ", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "魔法" ] }
    }
    , {
        name: "オデット", rarity: "白", cl: "メイジ", AW: "覚醒", skill: "覚醒"
        , stats: {
            mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "イルマ/バニー", rarity: "白", cl: "メイジ", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-40%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "イルマ/バニー", rarity: "白", cl: "メイジ", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-40%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "イルマ/バニー", rarity: "白", cl: "メイジ", AW: "覚醒", skill: "覚醒"
        , stats: {
            mr: { value: "-20%", type: "area" }
        }
        , domain: "area"
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "ミェール", rarity: "金", cl: "メイジ", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-15%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "物理" ] }
    }
    , {
        name: "ミェール", rarity: "金", cl: "メイジ", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-15%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "物理" ] }
    }
    , {
        name: "ミェール", rarity: "金", cl: "メイジ", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "ちびエステル", rarity: "ちび", cl: "メイジ", skill: "通常"
        , stats: {
            mr: { value: "-80%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "アウローラ/水着", rarity: "黒", cl: "ヒーラー", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "14f", type: "area" }
        }
        , domain: "area"
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "アウローラ/水着", rarity: "黒", cl: "ヒーラー", AW: "覚醒", skill: "通常"
        , stats: {
            stop: { value: "14f", type: "area" }
        }
        , domain: "area"
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "ウィッチ", cl: "ウィッチ", AW: "未"
        , stats: {
            mr: { value: "-10%", type: "clAttr" }
        }
        , domain: "area"
    }
    , {
        name: "アークウィッチ", cl: "ウィッチ", AW: "覚1"
        , stats: {
            mr: { value: "-15%", type: "clAttr" }
        }
        , domain: "area"
        , note: "ウィッチ系"
    }
    , {
        name: "ホーリーウィッチ", cl: "ウィッチ", AW: "覚2a"
        , stats: {
            mr: { value: "-20%", type: "clAttr" }
        }
        , domain: "area"
        , note: "ウィッチ系"
    }
    , {
        name: "ソーサレス", cl: "ウィッチ", AW: "覚2b"
        , stats: {
            mr: { value: "-25%", type: "clAttr" }
        }
        , domain: "area"
        , note: "ウィッチ系"
    }
    , {
        name: "デスピア/ハロウィン", rarity: "黒", cl: "ウィッチ", AW: "覚醒", skill: "覚醒"
        , stats: {
            mr: { value: "-30", type: "fixed" }
        }
        , domain: "global"
    }
    , {
        name: "リュリュ/バレンタイン", rarity: "白", cl: "ウィッチ", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-20%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "リュリュ/バレンタイン", rarity: "白", cl: "ウィッチ", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-20%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "リュリュ/バレンタイン", rarity: "白", cl: "ウィッチ", AW: "覚醒", skill: "覚醒"
        , stats: {
            mr: { value: "-40%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "カリオペ/サマー", rarity: "金", cl: "ウィッチ", AW: "覚醒", skill: "覚醒"
        , stats: {
            stop: { value: "119f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "アンデッド" ] }
        , note: "発動時"
    }
    , {
        name: "デューオ/浴衣", rarity: "黒", cl: "パイレーツ", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-70%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "デューオ/浴衣", rarity: "黒", cl: "パイレーツ", AW: "覚醒", skill: [ "通常", "覚醒(3～)" ]
        , stats: {
            def: { value: "-70%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "ジョヴァンニ/学園", rarity: "金", cl: "パイレーツ", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "119f", type: "area" }
        }
        , domain: "area"
        , note: "発動時"
    }
    , {
        name: "ジョヴァンニ/学園", rarity: "金", cl: "パイレーツ", AW: "覚醒", skill: "通常"
        , stats: {
            stop: { value: "119f", type: "area" }
        }
        , domain: "area"
        , note: "発動時"
    }
    , {
        name: "ヴェロッテ/ハロウィン", rarity: "金", cl: "パイレーツ", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "ヴェロッテ/ハロウィン", rarity: "金", cl: "パイレーツ", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "クルス", rarity: "黒", cl: "ヴァンパイアハンター", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: {
            stop: { value: "239f", type: "area" }
        }
        , domain: "area"
        , target: { attr: [ "アンデッド" ] }
        , note: "発動時"
    }
    , {
        name: "ヒューナ", rarity: "白", cl: "ヴァンパイアハンター", AW: "覚醒", skill: "覚醒"
        , stats: {
            def: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "フーリ/水着", rarity: "金", cl: "ヴァンパイアハンター", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "119f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "アンデッド" ] }
        , note: "発動時"
    }
    , {
        name: "フーリ/水着", rarity: "金", cl: "ヴァンパイアハンター", AW: "覚醒", skill: "通常"
        , stats: {
            stop: { value: "119f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "アンデッド" ] }
        , note: "発動時"
    }
    , {
        name: "フーリ/水着", rarity: "金", cl: "ヴァンパイアハンター", AW: "覚醒", skill: "覚醒"
        , stats: {
            stop: { value: "179f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "アンデッド" ] }
        , note: "発動時"
    }
    , {
        name: "ヒミコ", rarity: "黒", cl: "シャーマン", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "ヒミコ", rarity: "黒", cl: "シャーマン", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "天墜神星", rarity: "黒", cl: "シャーマン", AW: "未"
        , stats: {
            def: { value: "-10%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "天墜神星", rarity: "黒", cl: "シャーマン", AW: "覚醒"
        , stats: {
            def: { value: "-15%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "レーヴ", rarity: "白", cl: "ビショップ", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-15%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "物理" ] }
    }
    , {
        name: "レーヴ", rarity: "白", cl: "ビショップ", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-15%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "物理" ] }
    }
    , {
        name: "レーヴ", rarity: "白", cl: "ビショップ", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-20%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "物理" ] }
    }
    , {
        name: "レオナ/水着", rarity: "白", cl: "後衛戦術家", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "レオナ/水着", rarity: "白", cl: "後衛戦術家", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "レオナ/私服", rarity: "白", cl: "後衛戦術家", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "レオナ/私服", rarity: "白", cl: "後衛戦術家", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "ミコト/水着", rarity: "黒", cl: "陰陽師", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-30%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "ミコト/水着", rarity: "黒", cl: "陰陽師", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-30%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "コヨミ", rarity: "白", cl: "陰陽師", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "area" }
            , mr: { value: "-30%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "コヨミ", rarity: "白", cl: "陰陽師", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "area" }
            , mr: { value: "-30%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "コヨミ", rarity: "白", cl: "陰陽師", AW: "覚醒", skill: "覚醒"
        , stats: {
            def: { value: "-50%", type: "area" }
            , mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "タマミ", rarity: "白", cl: "陰陽師", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-30%", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "ハリンヘイム", rarity: "白", cl: "砲術士", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "ハリンヘイム", rarity: "白", cl: "砲術士", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "シャルキー/新装", rarity: "黒", cl: "ダンサー", AW: "覚醒", skill: "覚醒"
        , stats: {
            def: { value: "-20%", type: "global" }
            , mr: { value: "-20%", type: "global" }
        }
        , domain: "global"
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "ブレリア", rarity: "金", cl: "ダンサー", AW: "覚醒", skill: "覚醒"
        , stats: {
            def: { value: "-15%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "アーリー", rarity: "白", cl: "クロノウィッチ", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "89f", type: "area" }
        }
        , domain: "area"
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "アーリー", rarity: "白", cl: "クロノウィッチ", AW: "覚醒", skill: "通常"
        , stats: {
            stop: { value: "89f", type: "area" }
        }
        , domain: "area"
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "アーリー", rarity: "白", cl: "クロノウィッチ", AW: "覚醒", skill: "覚醒(1)"
        , stats: {
            stop: { value: "89f", type: "area" }
        }
        , domain: "area"
        , note: "発動時"
    }
    , {
        name: "アーリー", rarity: "白", cl: "クロノウィッチ", AW: "覚醒", skill: "覚醒(2)"
        , stats: {
            stop: { value: "149f", type: "area" }
        }
        , domain: "area"
        , note: "発動時"
    }
    , {
        name: "アーリー", rarity: "白", cl: "クロノウィッチ", AW: "覚醒", skill: "覚醒(3～)"
        , stats: {
            stop: { value: "239f", type: "area" }
        }
        , domain: "area"
        , note: "発動時"
    }
    , {
        name: "メリーファ", rarity: "白", cl: "ドルイド", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "149f", type: "area" }
        }
        , domain: "area"
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "メリーファ", rarity: "白", cl: "ドルイド", AW: "覚醒", skill: [ "通常", "覚醒(2～)" ]
        , stats: {
            stop: { value: "149f", type: "area" }
        }
        , domain: "area"
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "メリーファ", rarity: "白", cl: "ドルイド", AW: "覚醒", skill: "覚醒(1)"
        , stats: {
            stop: { value: "209f", type: "area" }
        }
        , domain: "area"
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "シャルル", rarity: "白", cl: "アルケミスト", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "シャルル", rarity: "白", cl: "アルケミスト", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "シャルル", rarity: "白", cl: "アルケミスト", AW: "覚醒", skill: "覚醒"
        , stats: {
            def: { value: "-50%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "レーレン", rarity: "白", cl: "アルケミスト", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "物理" ] }
    }
    , {
        name: "レーレン", rarity: "白", cl: "アルケミスト", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "物理" ] }
    }
    , {
        name: "ロヴィニア/学園", rarity: "黒", cl: "レンジャー", AW: "覚醒", skill: "非"
        , stats: {
            def: { value: "-15%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "ロヴィニア/学園", rarity: "黒", cl: "レンジャー", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: {
            def: { value: "-30%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "アイーダ", rarity: "白", cl: "レンジャー", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "フウカ/お正月", rarity: "金", cl: "レンジャー", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-10", type: "fixed" }
        }
        , domain: "global"
    }
    , {
        name: "フウカ/お正月", rarity: "金", cl: "レンジャー", AW: "覚醒", skill: [ "通常", "覚醒(2～)" ]
        , stats: {
            mr: { value: "-10", type: "fixed" }
        }
        , domain: "global"
    }
    , {
        name: "呪術使い", cl: "呪術使い", AW: "未"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "大呪術師長", cl: "呪術使い", AW: "覚1"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "area"
        , note: "呪術使い系"
    }
    , {
        name: "大呪術師祖", cl: "呪術使い", AW: "覚2a"
        , stats: {
            atk: { value: "-12%", type: "noAttr" }
        }
        , domain: "area"
        , note: "呪術使い系"
    }
    , {
        name: "妖厄神", cl: "呪術使い", AW: "覚2b"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
        }
        , domain: "area"
        , note: "呪術使い系"
    }
    , {
        name: "オロチヒメ", rarity: "黒", cl: "呪術使い", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "*1.5", type: "noAttr" }
        }
        , domain: "area"
        , note: "永続"
    }
    , {
        name: "オロチヒメ", rarity: "黒", cl: "呪術使い", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "*1.5", type: "noAttr" }
        }
        , domain: "area"
        , note: "永続"
    }
    , {
        name: "オロチヒメ", rarity: "黒", cl: "呪術使い", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "*3.0", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "オロチヒメ/お正月", rarity: "黒", cl: "呪術使い", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "オロチヒメ/お正月", rarity: "黒", cl: "呪術使い", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "オロチヒメ/お正月", rarity: "黒", cl: "呪術使い", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "エヴァ", rarity: "白", cl: "呪術使い", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "エヴァ", rarity: "白", cl: "呪術使い", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "エヴァ", rarity: "白", cl: "呪術使い", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "*2.5", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "レヴィ", rarity: "白", cl: "呪術使い", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "レヴィ", rarity: "白", cl: "呪術使い", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "レヴィ", rarity: "白", cl: "呪術使い", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "カタラ", rarity: "白", cl: "呪術使い", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "*1.5", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "カタラ", rarity: "白", cl: "呪術使い", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "*1.5", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "カタラ", rarity: "白", cl: "呪術使い", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "*2.5", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "ミトラ", rarity: "金", cl: "呪術使い", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "ミトラ", rarity: "金", cl: "呪術使い", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "ミトラ", rarity: "金", cl: "呪術使い", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "ちびオロチヒメ", rarity: "ちび", cl: "呪術使い", skill: "通常"
        , stats: {
            atk: { value: "*1.5", type: "noAttr" }
        }
        , domain: "area"
        , note: "永続"
    }
    , {
        name: "エンチャンター", cl: "エンチャンター", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "299f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "ゴーレム" ] }
        , note: "発動時"
    }
    , {
        name: "ハイエンチャンター", cl: "エンチャンター", AW: "覚1", skill: [ "通常", "覚醒" ]
        , stats: {
            stop: { value: "299f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "ゴーレム" ] }
        , note: [ "発動時", "エンチャンター系" ]
    }
    , {
        name: "ゴーレムマスター", cl: "エンチャンター", AW: "覚2a", skill: [ "通常", "覚醒" ]
        , stats: {
            stop: { value: "299f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "ゴーレム" ] }
        , note: [ "発動時", "エンチャンター系" ]
    }
    , {
        name: "グランドエンチャンター", cl: "エンチャンター", AW: "覚2b", skill: [ "通常", "覚醒" ]
        , stats: {
            stop: { value: "299f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "ゴーレム" ] }
        , note: [ "発動時", "エンチャンター系" ]
    }
    , {
        name: "アンリ/学園", rarity: "黒", cl: "エンチャンター", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "アンリ/学園", rarity: "黒", cl: "エンチャンター", AW: "覚醒", skill: [ "通常", "覚醒(2～)" ]
        , stats: {
            mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "ハーニィ", rarity: "白", cl: "エンチャンター", AW: "覚醒", skill: "覚醒(1)"
        , stats: {
            mr: { value: "-10%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "ハーニィ", rarity: "白", cl: "エンチャンター", AW: "覚醒", skill: "覚醒(2)"
        , stats: {
            mr: { value: "-20%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "ハーニィ", rarity: "白", cl: "エンチャンター", AW: "覚醒", skill: "覚醒(3～)"
        , stats: {
            mr: { value: "-30%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "ノストラ", rarity: "白", cl: "マーチャント", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "ツァーユ", rarity: "黒", cl: "フェンリルシャーマン", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "area"
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "ツァーユ", rarity: "黒", cl: "フェンリルシャーマン", AW: "覚1", skill: "通常"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "area"
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "ツァーユ", rarity: "黒", cl: "フェンリルシャーマン", AW: "覚1", skill: "覚醒"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "ツァーユ", rarity: "黒", cl: "フェンリルシャーマン", AW: "覚2a", skill: "通常"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "area"
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "ツァーユ", rarity: "黒", cl: "フェンリルシャーマン", AW: "覚2a", skill: "覚醒"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "ツァーユ", rarity: "黒", cl: "フェンリルシャーマン", AW: "覚2b", skill: "通常"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
            , def: { value: "-10%", type: "area" }
        }
        , domain: "area"
        , note: [ "永続", "分類未確認" ]
    }
    , {
        name: "ツァーユ", rarity: "黒", cl: "フェンリルシャーマン", AW: "覚2b", skill: "覚醒"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
            , def: { value: "-20%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "プニル", rarity: "青", cl: "フェンリルシャーマン", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "プニル", rarity: "青", cl: "フェンリルシャーマン", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "プニル", rarity: "青", cl: "フェンリルシャーマン", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "アオバ", rarity: "白", cl: "モンスタースレイヤー", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: {
            stop: { value: "239f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "妖怪" ] }
        , note: "発動時"
    }
    , {
        name: "ドルチェ/水着", rarity: "白", cl: "モンスタースレイヤー", AW: "覚醒", skill: "覚醒(1)"
        , stats: {
            stop: { value: "209f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "デーモン" ] }
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "ラピス/お正月", rarity: "黒", cl: "デモンサモナー", AW: "覚醒", skill: "覚醒"
        , stats: {
            def: { value: "-10%", type: "area" }
            , mr: { value: "-10%", type: "area" }
        }
        , domain: "area"
        , note: "永続"
    }
    , {
        name: "アイラ", rarity: "白", cl: "デモンサモナー", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "猫又", cl: "猫又", AW: "未"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
            , def: { value: "-15%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "猫ショウ", cl: "猫又", AW: "覚1"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
            , def: { value: "-20%", type: "area" }
        }
        , domain: "area"
        , note: "猫又系"
    }
    , {
        name: "もののけ猫明神", cl: "猫又", AW: "覚2a"
        , stats: {
            atk: { value: "-25%", type: "noAttr" }
            , def: { value: "-25%", type: "area" }
        }
        , domain: "area"
        , note: "猫又系"
    }
    , {
        name: "あやかし猫道中", cl: "猫又", AW: "覚2b"
        , stats: {
            atk: { value: "-22%", type: "noAttr" }
            , def: { value: "-22%", type: "area" }
        }
        , domain: "area"
        , note: "猫又系"
    }
    , {
        name: "コハル", rarity: "黒", cl: "猫又", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
            , def: { value: "*2.0", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "コハル", rarity: "黒", cl: "猫又", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
            , def: { value: "*2.0", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "コハル", rarity: "黒", cl: "猫又", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
            , def: { value: "*2.0", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "コハル/ハロウィン", rarity: "黒", cl: "猫又", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
            , def: { value: "*2.0", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "コハル/ハロウィン", rarity: "黒", cl: "猫又", AW: "覚醒", skill: [ "通常", "覚醒(4～)" ]
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
            , def: { value: "*2.0", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "コハル/ハロウィン", rarity: "黒", cl: "猫又", AW: "覚醒", skill: "覚醒(～3)"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
            , def: { value: "*2.0", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "コハル/ハロウィン", rarity: "黒", cl: "猫又", AW: "覚醒", skill: "覚醒(～3)"
        , stats: {
            stop: { value: "89f", type: "area" }
        }
        , domain: "area"
        , note: "発動時"
    }
    , {
        name: "ちびコハル", rarity: "ちび", cl: "猫又", skill: "通常"
        , stats: {
            atk: { value: "*2.0", type: "noAttr" }
            , def: { value: "*2.0", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "モトリー", rarity: "白", cl: "道化師", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "389f", type: "area" }
        }
        , domain: "area"
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "モトリー", rarity: "白", cl: "道化師", AW: "覚醒", skill: "通常"
        , stats: {
            stop: { value: "389f", type: "area" }
        }
        , domain: "area"
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "モトリー", rarity: "白", cl: "道化師", AW: "覚醒", skill: "覚醒"
        , stats: {
            stop: { value: "389f", type: "area" }
        }
        , domain: "area"
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "影獣の依代", cl: "幻獣使い", AW: "覚2b", skill: [ "通常", "覚醒" ]
        , stats: {
            mr: { value: "-15", type: "fixed" }
        }
        , domain: "global"
        , note: "幻獣使い系"
    }
    , {
        name: "カリン", rarity: "白", cl: "幻獣使い", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-30%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "魔法" ] }
    }
    , {
        name: "カリン", rarity: "白", cl: "幻獣使い", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-30%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "魔法" ] }
    }
    , {
        name: "カリン", rarity: "白", cl: "幻獣使い", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-70%", type: "limAttr" }
        }
        , domain: "global"
        , target: { atkAttr: [ "魔法" ] }
    }
    , {
        name: "パトリシア", rarity: "白", cl: "支援工兵", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "239f", type: "area" }
        }
        , domain: "area"
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "パトリシア", rarity: "白", cl: "支援工兵", AW: "覚醒", skill: "通常"
        , stats: {
            stop: { value: "239f", type: "area" }
        }
        , domain: "area"
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "レクテ", rarity: "白", cl: "発明家", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-15", type: "fixed" }
        }
        , domain: "global"
        , note: "分類未確認"
    }
    , {
        name: "レクテ", rarity: "白", cl: "発明家", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-15", type: "fixed" }
        }
        , domain: "global"
        , note: "分類未確認"
    }
    , {
        name: "レクテ", rarity: "白", cl: "発明家", AW: "覚醒", skill: "覚醒"
        , stats: {
            mr: { value: "-25%", type: "area" }
        }
        , domain: "area"
        , target: { attr: [ "デーモン" ] }
        , note: "分類未確認"
    }
    , {
        name: "ヘカティエ/水着", rarity: "黒", cl: "儀式魔術師", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-90%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "ヘカティエ/水着", rarity: "黒", cl: "儀式魔術師", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-90%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "ローズ/クリスマス", rarity: "白", cl: "ハーバリスト", AW: "覚醒", skill: "覚醒"
        , stats: {
            stop: { value: "14f", type: "area" }
        }
        , domain: "area"
        , note: [ "ボム", "発動時"]
    }
    , {
        name: "コレット", rarity: "白", cl: "スカラー", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "149f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "天使", "天界人", "神" ] }
        , note: "発動時"
    }
    , {
        name: "コレット", rarity: "白", cl: "スカラー", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: {
            stop: { value: "149f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "天使", "天界人", "神" ] }
        , note: "発動時"
    }
    , {
        name: "コレット/ハロウィン", rarity: "白", cl: "スカラー", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "149f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "妖怪", "デーモン", "アンデッド" ] }
        , note: "発動時"
    }
    , {
        name: "コレット/ハロウィン", rarity: "白", cl: "スカラー", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "global"
        , target: { attr: [ "妖怪", "デーモン", "アンデッド" ] }
    }
    , {
        name: "コレット/ハロウィン", rarity: "白", cl: "スカラー", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: {
            stop: { value: "149f", type: "global" }
        }
        , domain: "global"
        , target: { attr: [ "妖怪", "デーモン", "アンデッド" ] }
        , note: "発動時"
    }
    , {
        name: "コレット/ハロウィン", rarity: "白", cl: "スカラー", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "global"
        , target: { attr: [ "妖怪", "デーモン", "アンデッド" ] }
    }
    , {
        name: "トリシャ", rarity: "黒", cl: "ドラゴンメイジ", AW: "未"
        , stats: {
            mr: { value: "-20%", type: "clAttr" }
        }
        , domain: "area"
    }
    , {
        name: "トリシャ", rarity: "黒", cl: "ドラゴンメイジ", AW: "覚醒"
        , stats: {
            mr: { value: "-25%", type: "clAttr" }
        }
        , domain: "area"
    }
    , {
        name: "魔界総帥", cl: "魔界総帥", AW: "未"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "魔界大総帥", cl: "魔界総帥", AW: "覚1"
        , stats: {
            atk: { value: "-14%", type: "noAttr" }
        }
        , domain: "area"
        , note: "魔界総帥系"
    }
    , {
        name: "萌芽の亜神", cl: "魔界総帥", AW: "覚2a"
        , stats: {
            atk: { value: "-16%", type: "noAttr" }
        }
        , domain: "area"
        , note: "魔界総帥系"
    }
    , {
        name: "雷嵐の魔界荒神", cl: "魔界総帥", AW: "覚2b"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "area"
        , note: "魔界総帥系"
    }
    , {
        name: "アスバール", rarity: "黒", cl: "魔界総帥", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "*1.5", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "アスバール", rarity: "黒", cl: "魔界総帥", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "*1.5", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "アスバール/水着", rarity: "黒", cl: "魔界総帥", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-40%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "アスバール/水着", rarity: "黒", cl: "魔界総帥", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-40%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "雪祇の娘", cl: "雪娘", AW: "覚2b"
        , stats: {
            def: { value: "-40%", type: "area" }
        }
        , domain: "area"
        , note: [ "雪娘系", "分類未確認" ]
    }
    , {
        name: "デステリカ", rarity: "黒", cl: "ガンスリンガー", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "area" }
        }
        , domain: "area"
        , note: "永続"
    }
    , {
        name: "デステリカ", rarity: "黒", cl: "ガンスリンガー", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "area" }
        }
        , domain: "area"
        , note: "永続"
    }
    , {
        name: "シルヴァーナ", rarity: "白", cl: "ガンスリンガー", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-20%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "シルヴァーナ", rarity: "白", cl: "ガンスリンガー", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-20%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "クロノシア", rarity: "黒", cl: "時の俯瞰者", AW: "覚醒", skill: "覚醒"
        , stats: {
            stop: { value: "179f", type: "global" }
        }
        , domain: "global"
        , note: "発動時"
    }
    , {
        name: "ちびクロノシア", rarity: "ちび", cl: "時の俯瞰者", skill: "覚醒"
        , stats: {
            stop: { value: "119f", type: "global" }
        }
        , domain: "global"
        , note: "発動時"
    }
    , {
        name: "ホルミース", rarity: "黒", cl: "吟遊詩人", AW: "未"
        , stats: {
            mr: { value: "-10%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "ホルミース", rarity: "黒", cl: "吟遊詩人", AW: "覚醒"
        , stats: {
            mr: { value: "-20%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "アミー", rarity: "白", cl: "吟遊詩人", AW: "未"
        , stats: {
            def: { value: "-15%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "アミー", rarity: "白", cl: "吟遊詩人", AW: "覚醒"
        , stats: {
            def: { value: "-25%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "ヤシマ", rarity: "黒", cl: "妖狸", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "149f", type: "global" }
        }
        , domain: "global"
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "ヤシマ", rarity: "黒", cl: "妖狸", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: {
            stop: { value: "149f", type: "global" }
        }
        , domain: "global"
        , note: [ "発動時", "ボム" ]
    }
    , {
        name: "スカウト", cl: "スカウト", AW: "未"
        , stats: {
            def: { value: "-40%", type: "area" }
            , mr: { value: "-40%", type: "clAttr" }
        }
        , domain: "area"
    }
    , {
        name: "スカウトオフィサー", cl: "スカウト", AW: "覚1"
        , stats: {
            def: { value: "-50%", type: "area" }
            , mr: { value: "-50%", type: "clAttr" }
        }
        , domain: "area"
        , note: "スカウト系"
    }
    , {
        name: "スカウトジェネラル", cl: "スカウト", AW: "覚2a"
        , stats: {
            def: { value: "-55%", type: "area" }
            , mr: { value: "-55%", type: "clAttr" }
        }
        , domain: "area"
        , note: "スカウト系"
    }
    , {
        name: "ファントムリコン", cl: "スカウト", AW: "覚2b"
        , stats: {
            def: { value: "-50%", type: "area" }
            , mr: { value: "-50%", type: "clAttr" }
        }
        , domain: "area"
        , note: "スカウト系"
    }
    , {
        name: "レナータ", rarity: "黒", cl: "スカウト", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "global" }
            , mr: { value: "-50%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "レナータ", rarity: "黒", cl: "スカウト", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "global" }
            , mr: { value: "-50%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "レナータ", rarity: "黒", cl: "スカウト", AW: "覚醒", skill: "覚醒"
        , stats: {
            def: { value: "-20%", type: "global" }
            , mr: { value: "-20%", type: "global" }
        }
        , domain: "global"
        , note: "永続"
    }
    , {
        name: "ヘルメルク", rarity: "黒", cl: "スカウト", AW: "未", skill: "通常"
        , stats: {
            def: { value: "*1.6", type: "area" }
        }
        , domain: "area"
        , note: "クラス特性強化"
    }
    , {
        name: "ヘルメルク", rarity: "黒", cl: "スカウト", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "*1.6", type: "area" }
        }
        , domain: "area"
        , note: "クラス特性強化"
    }
    , {
        name: "カーナ", rarity: "白", cl: "スカウト", AW: "覚醒", skill: "覚醒"
        , stats: {
            stop: { value: "119f", type: "area" }
        }
        , domain: "area"
        , note: "発動時"
    }
    , {
        name: "カーニア", rarity: "黒", cl: "スカイヒーラー", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "カーニア", rarity: "黒", cl: "スカイヒーラー", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "カーニア", rarity: "黒", cl: "スカイヒーラー", AW: "覚醒", skill: "覚醒"
        , stats: {
            def: { value: "-30%", type: "area" }
            , mr: { value: "-30%", type: "area" }
        }
        , domain: "area"
        , note: "永続"
    }
    , {
        name: "レフカ", rarity: "白", cl: "スカイヒーラー", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "レフカ", rarity: "白", cl: "スカイヒーラー", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
        }
        , domain: "area"
    }
    , {
        name: "スカイバトルシップ", cl: "エアセイラー", AW: "覚2b"
        , stats: {
            def: { value: "-20%", type: "area" }
        }
        , domain: "area"
        , note: "エアセイラー系"
    }
    , {
        name: "桃源郷", rarity: "金", cl: "桃源郷"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "ストレイソッド", rarity: "金", cl: "ストレイソッド"
        , stats: {
            def: { value: "-20%", type: "area" }
            , mr: { value: "-10%", type: "clAttr" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "ねんどろいどシビラ", rarity: "青", cl: "ねんどろいどプリンセス", skill: "通常"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "魔法使い【ランス】", cl: "魔法使い【ランス】", AW: "未"
        , stats: {
            mr: { value: "-15%", type: "clAttr" }
        }
        , domain: "area"
    }
    , {
        name: "四魔女【ランス】", cl: "魔法使い【ランス】", AW: "覚1"
        , stats: {
            mr: { value: "-30%", type: "clAttr" }
        }
        , domain: "area"
        , note: "魔法使い【ランス】系"
    }
    , {
        name: "孫堅", rarity: "黒", cl: "君主【恋姫】", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "59f", type: "global" }
        }
        , domain: "global"
        , note: "発動時"
    }
    , {
        name: "孫堅", rarity: "黒", cl: "君主【恋姫】", AW: "覚醒", skill: "通常"
        , stats: {
            stop: { value: "59f", type: "global" }
        }
        , domain: "global"
        , note: "発動時"
    }
    , {
        name: "孫堅 文台", rarity: "黒", cl: "君主【恋姫】", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: {
            def: { value: "-20%", type: "global" }
            , mr: { value: "-20%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "孫権 仲謀", rarity: "白", cl: "君主【恋姫】", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "孫権 仲謀", rarity: "白", cl: "君主【恋姫】", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "呂布 奉先", rarity: "白", cl: "勇士【恋姫】", AW: "未"
        , stats: {
            atk: { value: "-5%", type: "noAttr" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "呂布 奉先", rarity: "白", cl: "勇士【恋姫】", AW: "覚醒"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "未", skill: "通常(1)"
        , stats: {
            def: { value: "-20%", type: "global" }
            , mr: { value: "-20%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "未", skill: "通常(2～)"
        , stats: {
            def: { value: "-20%", type: "global" }
            , mr: { value: "-20%", type: "global" }
        }
        , domain: "global"
        , note: "永続"
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒", skill: "通常(1)"
        , stats: {
            def: { value: "-20%", type: "global" }
            , mr: { value: "-20%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "諸葛亮 孔明", rarity: "黒", cl: "軍師【恋姫】", AW: "覚醒", skill: "通常(2～)"
        , stats: {
            def: { value: "-20%", type: "global" }
            , mr: { value: "-20%", type: "global" }
        }
        , domain: "global"
        , note: "永続"
    }
    , {
        name: "鳳統", rarity: "白", cl: "軍師【恋姫】", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "鳳統", rarity: "白", cl: "軍師【恋姫】", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-30%", type: "global" }
        }
        , domain: "global"
    }
    , {
        name: "鳳統", rarity: "白", cl: "軍師【恋姫】", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "黄蓋 公覆", rarity: "白", cl: "弓将【恋姫】", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-60%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "黄蓋 公覆", rarity: "白", cl: "弓将【恋姫】", AW: "覚醒", skill: "通常"
        , stats: {
            mr: { value: "-60%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "バン", rarity: "白", cl: "盗賊【七つの大罪】", AW: "覚醒", skill: "覚醒(1)"
        , stats: {
            atk: { value: "-5%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "バン", rarity: "白", cl: "盗賊【七つの大罪】", AW: "覚醒", skill: "覚醒(2)"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "バン", rarity: "白", cl: "盗賊【七つの大罪】", AW: "覚醒", skill: "覚醒(3～)"
        , stats: {
            atk: { value: "-15%", type: "noAttr" }
        }
        , domain: "global"
    }
    , {
        name: "リリカ", rarity: "黒", cl: "傀儡人形【封緘】", AW: "未"
        , stats: {
            atk: { value: "-7%", type: "noAttr" }
            , def: { value: "-7%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "リリカ", rarity: "黒", cl: "傀儡人形【封緘】", AW: "覚醒"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
            , def: { value: "-10%", type: "area" }
        }
        , domain: "area"
        , note: "分類未確認"
    }
    , {
        name: "グリモワール", rarity: "黒", cl: "物語を渡る者【GBM】", AW: "覚醒"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
            , def: { value: "-20%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "グリモワール", rarity: "黒", cl: "物語を渡る者【GBM】", AW: "覚醒", skill: "覚醒"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
            , def: { value: "-20%", type: "area" }
            , mr: { value: "-80%", type: "area" }
        }
        , domain: "area"
    }
    , {
        name: "イビルアイ", rarity: "トークン", AW: "未", skill: "通常"
        , stats: {
            stop: { value: "119f", type: "area" }
        }
        , domain: "area"
        , note: [ "アンブレ", "発動時", "ボム" ]
    }
    , {
        name: "上位イビルアイ", rarity: "トークン", AW: "覚醒", skill: "通常"
        , stats: {
            stop: { value: "119f", type: "area" }
        }
        , domain: "area"
        , note: [ "アンブレ", "発動時", "ボム" ]
    }
    , {
        name: "かまいたちトキ", rarity: "トークン", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "area" }
            , mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
        , note: "群青姉妹"
    }
    , {
        name: "疾風かまいたちトキ", rarity: "トークン", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "area" }
            , mr: { value: "-50%", type: "area" }
        }
        , domain: "area"
        , note: "群青姉妹"
    }
    , {
        name: "ゴースト", rarity: "トークン", AW: "未"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
            , def: { value: "-10%", type: "area" }
        }
        , domain: "area"
        , note: "迷宮の悪霊"
    }
    , {
        name: "ファントム", rarity: "トークン", AW: "覚1"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
            , def: { value: "-10%", type: "area" }
        }
        , domain: "area"
        , note: [ "大迷宮の守護霊", "(迷宮の悪霊系)" ]
    }
    , {
        name: "ファントム", rarity: "トークン", AW: "覚2a"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
            , def: { value: "-20%", type: "area" }
        }
        , domain: "area"
        , note: [ "巡り咲く迷宮守", "(迷宮の悪霊系)" ]
    }
    , {
        name: "キューティレイス", rarity: "トークン", AW: "覚2b"
        , stats: {
            atk: { value: "-23%", type: "noAttr" }
            , def: { value: "-23%", type: "area" }
        }
        , domain: "area"
        , note: [ "人造守護神霊", "(迷宮の悪霊系)" ]
    }
    , {
        name: "スチームタンク", rarity: "トークン", AW: "覚醒", skill: "通常"
        , stats: {
            def: { value: "-50%", type: "global" }
        }
        , domain: "global"
        , note: [ "マキナ", "永続" ]
    }
    , {
        name: [ "暗黒学ラン騎士", "【並行世界】" ], rarity: "トークン", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "global"
        , note: [ "グリム/学園", "分類未確認" ]
    }
    , {
        name: [ "暗黒裏番長デシウス", "【並行世界】" ], rarity: "トークン", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "global"
        , note: [ "グリム/学園", "分類未確認" ]
    }
    , {
        name: "ツァーユ(幻影)", rarity: "トークン", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "area"
        , note: [ "リュティエ", "永続", "分類未確認" ]
    }
    , {
        name: "雪の精霊", rarity: "トークン", AW: "未", skill: "通常"
        , stats: {
            atk: { value: "-10%", type: "noAttr" }
        }
        , domain: "area"
        , note: [ "しづり", "永続", "分類未確認" ]
    }
    , {
        name: "冬の精霊", rarity: "トークン", AW: "覚醒", skill: "通常"
        , stats: {
            atk: { value: "-20%", type: "noAttr" }
        }
        , domain: "area"
        , note: [ "しづり", "永続", "分類未確認" ]
    }
    , {
        name: "アルヴァ(幻影)", rarity: "トークン", AW: "未", skill: "覚醒"
        , stats: {
            stop: { value: "89f", type: "global" }
        }
        , domain: "global"
        , note: [ "英傑の塔", "発動時" ]
    }
    , {
        name: "アルヴァ(幻影)", rarity: "トークン", AW: "覚醒", skill: "覚醒"
        , stats: {
            stop: { value: "89f", type: "global" }
        }
        , domain: "global"
        , note: [ "英傑の塔", "発動時" ]
    }
    , {
        name: "赤魂", rarity: "トークン", AW: "未", skill: "通常"
        , stats: {
            def: { value: "-20%", type: "area" }
        }
        , domain: "area"
        , note: [ "ハデスシャーマン", "永続" ]
    }
    , {
        name: "緑魂", rarity: "トークン", AW: "未", skill: "通常"
        , stats: {
            mr: { value: "-20%", type: "area" }
        }
        , domain: "area"
        , note: [ "ハデスシャーマン", "永続" ]
    }
    , {
        name: "大赤魂", rarity: "トークン", AW: "覚1", skill: "通常"
        , stats: {
            def: { value: "-25%", type: "area" }
        }
        , domain: "area"
        , note: [ "ハデスカーディナル", "(ハデスシャーマン系)", "永続" ]
    }
    , {
        name: "大緑魂", rarity: "トークン", AW: "覚1", skill: "通常"
        , stats: {
            mr: { value: "-25%", type: "area" }
        }
        , domain: "area"
        , note: [ "ハデスカーディナル", "(ハデスシャーマン系)", "永続" ]
    }
    , {
        name: "大赤魂", rarity: "トークン", AW: "覚2a", skill: "通常"
        , stats: {
            def: { value: "-45%", type: "area" }
        }
        , domain: "area"
        , note: [ "レテマギア", "(ハデスシャーマン系)", "永続" ]
    }
    , {
        name: "大緑魂", rarity: "トークン", AW: "覚2a", skill: "通常"
        , stats: {
            mr: { value: "-45%", type: "area" }
        }
        , domain: "area"
        , note: [ "レテマギア", "(ハデスシャーマン系)", "永続" ]
    }
    , {
        name: "大赤魂", rarity: "トークン", AW: "覚2b", skill: "通常"
        , stats: {
            def: { value: "-35%", type: "area" }
        }
        , domain: "area"
        , note: [ "フィリアトリウィア", "(ハデスシャーマン系)", "永続" ]
    }
    , {
        name: "大緑魂", rarity: "トークン", AW: "覚2b", skill: "通常"
        , stats: {
            mr: { value: "-35%", type: "area" }
        }
        , domain: "area"
        , note: [ "フィリアトリウィア", "(ハデスシャーマン系)", "永続" ]
    }
    , {
        name: "自由人(幻影)", rarity: "トークン", AW: "未"
        , stats: {
            def: { value: "-40%", type: "area" }
            , mr: { value: "-40%", type: "clAttr" }
        }
        , domain: "area"
        , note: "ヘルメルク"
    }
    , {
        name: "自由人(幻影)", rarity: "トークン", AW: "覚醒"
        , stats: {
            def: { value: "-50%", type: "area" }
            , mr: { value: "-50%", type: "clAttr" }
        }
        , domain: "area"
        , note: "ヘルメルク"
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒", skill: ""
        , stats: {
            : { value: "", type: "" }
        }
        , domain: ""
        , target: { attr: [ "" ] }
        , target: [
            { : [ "" ] }
            , { : [ "" ] }
        ]
    }
    
    黒 白 青 金 ちび 銀 銅 鉄 トークン
    
    未 覚醒 覚1 覚2a 覚2b
    
    常時 非 通常 覚醒 奇 偶
    
    hp atk def mr atkCd stop other
    
    domain area global
    
    type noAttr limAttr death clAttr fixed
    
    target
    
    attr 人間 ゴブリン オーク ドラゴン 妖怪
    
    巨人 ゴーレム アンデッド デーモン 魔神
    
    天使 天界人 神 神獣 魔獣 妖獣 獣 獣人
    
    植物 インセクト 魚人 水棲 機械 アーマー 英傑
    
    atkAttr 物理 魔法 貫通
    
    cond 地上 飛行
    
    note 発動時 分類未確認
    
    正月 温泉 バレンタイン 学園 バニー
    
    花嫁 水着 浴衣 ハロウィン クリスマス

*/