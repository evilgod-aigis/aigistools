// その他
buff.unique = [
    // 乗算マス
    {
        name: "ジオマンサートークン", rarity: "トークン", AW: "覚醒"
        , stats: { hp: "×1.4", atk: "×1.4" }
        , type: "spot_mul"
        , note: [ "サナラ[黒]", "区分：乗算マス", "継続：600秒" ]
    }
    , {
        name: "ジオマンサートークン", rarity: "トークン", AW: "覚醒"
        , stats: { hp: "×1.3", atk: "×1.3" }
        , type: "spot_mul"
        , note: [ "サナラ[白]", "区分：乗算マス", "継続：600秒" ]
    }
    , {
        name: "ジオマンサートークン", rarity: "トークン", AW: "覚醒"
        , stats: { atk: "×1.3" }
        , type: "spot_mul"
        , note: [ "サナラ/水着[白]", "区分：乗算マス", "継続：600秒" ]
    }
    , {
        name: "エクス/バニートークン", rarity: "トークン", AW: "未"
        , stats: { hp: "×1.1", atk: "×1.1", def: "×1.1" }
        , type: "spot_mul"
        , note: [ "エクス/バニー", "区分：乗算マス", "継続：?秒", "分類未確認" ]
    }
    , {
        name: "エクス/バニートークン", rarity: "トークン", AW: "覚醒"
        , stats: { hp: "×1.2", atk: "×1.2", def: "×1.2" }
        , type: "spot_mul"
        , note: [ "エクス/バニー", "区分：乗算マス", "継続：?秒", "分類未確認" ]
    }
    , {
        name: "座敷わらしトークン", rarity: "トークン", AW: "未"
        , stats: { def: "×1.2", mr: "×1.2" }
        , type: "spot_mul"
        , note: [ "座敷わらし", "区分：乗算マス", "継続：40秒" ]
    }
    , {
        name: "御屋敷わらしトークン", rarity: "トークン", AW: "覚1"
        , stats: { def: "×1.3", mr: "×1.3" }
        , type: "spot_mul"
        , note: [ "御屋敷わらし", "(座敷わらし系)", "区分：乗算マス", "継続：40秒" ]
    }
    , {
        name: "マヨヒガわらしトークン", rarity: "トークン", AW: "覚2a"
        , stats: { def: "×1.5", mr: "×1.5" }
        , type: "spot_mul"
        , note: [ "マヨヒガわらし", "(座敷わらし系)", "区分：乗算マス", "継続：40秒" ]
    }
    , {
        name: "ヤシキノカミトークン", rarity: "トークン", AW: "覚2b"
        , stats: { def: "×1.35", mr: "×1.35" }
        , type: "spot_mul"
        , note: [ "ヤシキノカミ", "(座敷わらし系)", "区分：乗算マス", "継続：80秒" ]
    }
    
    // 加算マス
    , {
        name: "ジオマンサートークン", rarity: "トークン", AW: "覚醒"
        , stats: { mr: "+15" }
        , type: "spot_add"
        , note: [ "サナラ/水着[白]", "区分：加算マス", "継続：600秒" ]
    }
    , {
        name: "エクス/バニートークン", rarity: "トークン", AW: "未"
        , stats: { mr: "+5" }
        , type: "spot_add"
        , note: [ "エクス/バニー", "区分：加算マス", "継続：?秒", "分類未確認" ]
    }
    , {
        name: "エクス/バニートークン", rarity: "トークン", AW: "覚醒"
        , stats: { mr: "+10" }
        , type: "spot_add"
        , note: [ "エクス/バニー", "区分：加算マス", "継続：?秒", "分類未確認" ]
    }
    
    // マス上書き
    , {
        name: "フリズスキャールヴ", cl: "フリズスキャールヴ"
        , stats: { other: "" }
        , type: "spot_over"
        , note: [ "区分：マス上書き(近→遠)", "隠密無効", "分類未確認" ]
    }
    , {
        name: "王国の学び舎", cl: "王国の学び舎"
        , stats: { hp: "×1.3", atk: "×1.3" }
        , type: "spot_over"
        , note: [ "区分：マス上書き(近→近)", "分類未確認" ]
    }
    , {
        name: "ハロウィン会場", cl: "ハロウィン会場"
        , stats: { hp: "×1.3", atk: "×1.3" }
        , type: "spot_over"
        , note: [ "区分：マス上書き(近→近)", "分類未確認" ]
    }
    , {
        name: "ひな壇", cl: "ひな壇"
        , stats: { atk: "×1.33", def: "×1.33", other: "" }
        , type: "spot_over"
        , note: [ "区分：マス上書き(近→近)", "悪天候-100%", "配置マスが少し右上にずれる", "分類未確認" ]
    }
    , {
        name: "龍宮城の宴", cl: "龍宮城の宴"
        , stats: { hp: "×1.3", atk: "×1.3", other: "" }
        , type: "spot_over"
        , note: [ "区分：マス上書き(近→近)", "深海-100%", "分類未確認" ]
    }
    , {
        name: "王国ランウェイ", cl: "王国ランウェイ"
        , stats: { hp: "×1.3", def: "×1.3", mr: "+5" }
        , type: "spot_over"
        , note: [ "区分：マス上書き(近→近)", "分類未確認" ]
    }
    , {
        name: "王国ファッションショー", cl: "王国ランウェイ"
        , stats: { other: "" }
        , type: "spot_over"
        , note: [ "区分：マス上書き(近→近)", "引き付け付与" ]
    }
    , {
        name: "魔王の玉座", cl: "魔王の玉座"
        , stats: { hp: "×1.3", atk: "×1.3", other: "" }
        , type: "spot_over"
        , note: [ "区分：マス上書き(遠→遠)", "魔界-100%", "分類未確認" ]
    }
    , {
        name: "海の家", cl: "海の家"
        , stats: { hp: "×1.3", atk: "×1.3" }
        , type: "spot_over"
        , note: [ "区分：マス上書き(遠→遠)", "分類未確認" ]
    }
    , {
        name: "曹家の旗", rarity: "金", cl: "曹家の旗"
        , stats: { hp: "×1.3", atk: "×1.3" }
        , type: "spot_over"
        , note: [ "区分：マス上書き(近→近)", "分類未確認" ]
    }
    , {
        name: "デッドマン号", rarity: "トークン"
        , stats: { atk: "×1.25", def: "×1.25" }
        , type: "spot_over"
        , note: [ "イヴリール[黒]", "区分：マス上書き(両→両)", "深海-100%", "分類未確認" ]
    }
    , {
        name: "デッドマン号", rarity: "トークン"
        , stats: { atk: "×0.8", def: "×0.8", other: "" }
        , type: "spot_over"
        , note: [ "イヴリール[白]", "区分：マス上書き(近→遠)", "分類未確認" ]
    }
    
    // 被ダメージ
    , {
        name: "コーネリア/水着", rarity: "黒", cl: "ダークファイター", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.4" }
        , type: "dmged"
        , note: [ "区分：被ダメージ", "範囲", "最大値(倍率+0.04/被ダメ400)", "分類未確認" ]
    }
    , {
        name: "太上老君", rarity: "黒", cl: "天尊", AW: "未", skill: "覚醒"
        , stats: { atk: "×1.2", def: "×1.2" }
        , type: "dmged"
        , note: [ "区分：被ダメージ", "範囲", "最大値(倍率+0.01/被ダメ300)", "分類未確認" ]
    }
    , {
        name: "太上老君", rarity: "黒", cl: "天尊", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.3", def: "×1.3" }
        , type: "dmged"
        , note: [ "区分：被ダメージ", "範囲", "最大値(倍率+0.01/被ダメ300)", "分類未確認" ]
    }
    
    // 時間経過
    , {
        name: "王子【授賞式】", cl: "王子"
        , stats: { atk: [ "+25%", "～40%" ], def: [ "+25%", "～40%" ] }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "最大値(+2%/4秒)", "上限+2%/配置数(範囲内)" ]
    }
    , {
        name: "トリステラ", rarity: "黒", cl: "悲哀の騎士", AW: "覚醒"
        , stats: { atk: [ "+30%", "～50%" ], def: [ "+30%", "～50%" ], mr: [ "+30%", "～50%" ] }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "最大値(+2%/4秒)", "上限+4%/配置数(範囲内)" ]
    }
    , {
        name: "トリステラ", rarity: "黒", cl: "悲哀の騎士", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "+2%/2秒" ]
    }
    , {
        name: "トリステラ", rarity: "黒", cl: "悲哀の騎士", AW: "覚醒", skill: "覚醒(1)"
        , stats: { atk: "*1.2" }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "上限(+2%/4秒)", "永続スキル(手動中断可能)", "スキル終了時強化リセット" ]
    }
    , {
        name: "トリステラ", rarity: "黒", cl: "悲哀の騎士", AW: "覚醒", skill: "覚醒(2)"
        , stats: { atk: "*1.6" }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "上限(攻撃力+2%/1f、他+2%/4秒)", "永続スキル(手動中断可能)", "スキル終了時強化リセット" ]
    }
    , {
        name: "トリステラ", rarity: "黒", cl: "悲哀の騎士", AW: "覚醒", skill: "覚醒(3～)"
        , stats: { atk: "*2.0" }
        , type: "time"
        , note: [ "区分：時間経過", "範囲", "上限(攻撃力+2%/1f、他+2%/4秒)", "永続スキル" ]
    }
    , {
        name: "クロノシア/水着トークン", rarity: "トークン", AW: "未"
        , stats: { atk: "+20%" }
        , type: "time"
        , note: [ "クロノシア/水着", "区分：時間経過", "最大値(+1%/2秒)", "重ね置き(遠近)" ]
    }
    , {
        name: "クロノシア/水着トークン", rarity: "トークン", AW: "覚醒"
        , stats: { atk: "+30%" }
        , type: "time"
        , note: [ "クロノシア/水着", "区分：時間経過", "最大値(+1%/2秒)", "重ね置き(遠近)" ]
    }
    
    // 死亡時
    , {
        name: "デモンルーン", cl: "デモンルーン", AW: "未"
        , stats: { atk: "+10%" }
        , type: "death"
        , note: [ "区分：死亡時", "死亡時", "継続：10秒" ]
    }
    , {
        name: "デモンハイルーン", cl: "デモンルーン", AW: "覚1"
        , stats: { atk: "+15%" }
        , type: "death"
        , note: [ "区分：死亡時", "死亡時", "継続：10秒", "デモンルーン系" ]
    }
    , {
        name: "デモンインフェルノ", cl: "デモンルーン", AW: "覚2a"
        , stats: { atk: "+25%" }
        , type: "death"
        , note: [ "区分：死亡時", "死亡時", "継続：15秒", "デモンルーン系" ]
    }
    , {
        name: "デモンエクリプス", cl: "デモンルーン", AW: "覚2b"
        , stats: { atk: "+15%" }
        , type: "death"
        , note: [ "区分：死亡時", "死亡時", "継続：10秒", "デモンルーン系" ]
    }
    , {
        name: "エス★エフ", rarity: "黒", cl: "小悪魔アイドル", AW: "覚醒"
        , stats: { atk: "+10%", def: "+10%" }
        , type: "death"
        , note: [ "区分：死亡時", "死亡時", "継続：30秒" ]
    }
    , {
        name: "村人", rarity: "銅", cl: "村人"
        , stats: { atk: "-2%", def: "-2%" }
        , type: "death"
        , note: [ "区分：死亡時", "死亡時", "継続：永続", "分類未確認" ]
    }
    , {
        name: "憑魔託宣者", cl: "デモンシャーマン", AW: "覚2a"
        , stats: { mr: "+5" }
        , type: "death"
        , note: [ "区分：死亡時", "死亡時", "継続：20秒", "デモンシャーマン系", "分類未確認" ]
    }
    , {
        name: "レライエ", rarity: "白", cl: "デモンシャーマン", AW: "覚醒"
        , stats: { atk: "+20%" }
        , type: "death"
        , note: [ "区分：死亡時", "死亡時", "継続：20秒" ]
    }
    , {
        name: "レライエ/ハロウィン", rarity: "白", cl: "デモンシャーマン", AW: "覚醒"
        , stats: { atk: "+15%", def: "+15%" }
        , type: "death"
        , note: [ "区分：死亡時", "死亡時", "継続：30秒" ]
    }
    , {
        name: "村人(農夫)", rarity: "トークン"
        , stats: { atk: "-2%", def: "-2%" }
        , type: "death"
        , note: [ "村人", "区分：死亡時", "死亡時", "継続：永続", "分類未確認" ]
    }
    , {
        name: "村人(老人)", rarity: "トークン"
        , stats: { atk: "-2%", def: "-2%" }
        , type: "death"
        , note: [ "村人", "区分：死亡時", "死亡時", "継続：永続", "分類未確認" ]
    }
    , {
        name: "村人(少年)", rarity: "トークン"
        , stats: { atk: "-2%", def: "-2%" }
        , type: "death"
        , note: [ "村人", "区分：死亡時", "死亡時", "継続：永続", "分類未確認" ]
    }
    , {
        name: "迷い家", rarity: "金", cl: "迷い家"
        , stats: { atk: "+20%" }
        , type: "death"
        , note: [ "区分：死亡時", "死亡時", "継続：63秒", "分類未確認" ]
    }
    
    // ルキファ死亡時
    , {
        name: "ルキファ", rarity: "黒", cl: "黎明の翼", AW: "覚醒"
        , stats: { atk: "+10%", def: "+10%" }
        , type: "Lukifer"
        , note: [ "区分：ルキファ死亡時", "死亡時範囲", "継続：永続", "3回まで累加" ]
    }
    , {
        name: "ルキファ", rarity: "白", cl: "黎明の翼", AW: "覚醒"
        , stats: { def: "+10%", mr: "+10%" }
        , type: "Lukifer"
        , note: [ "区分：ルキファ死亡時", "死亡時範囲", "継続：永続", "3回まで累加" ]
    }
    
    // 猫又
    , {
        name: "天墜神星", rarity: "黒", cl: "シャーマン", AW: "未"
        , stats: { def: "-10%" }
        , type: "nekomata"
        , note: [ "区分：猫又", "範囲" ]
    }
    , {
        name: "天墜神星", rarity: "黒", cl: "シャーマン", AW: "覚醒"
        , stats: { def: "-15%" }
        , type: "nekomata"
        , note: [ "区分：猫又", "範囲" ]
    }
    , {
        name: "猫又", cl: "猫又", AW: "未"
        , stats: { atk: "-10%", def: "-10%" }
        , type: "nekomata"
        , note: [ "区分：猫又", "範囲" ]
    }
    , {
        name: "猫ショウ", cl: "猫又", AW: "覚1"
        , stats: { atk: "-10%", def: "-10%" }
        , type: "nekomata"
        , note: [ "区分：猫又", "範囲", "猫又系" ]
    }
    , {
        name: "もののけ猫明神", cl: "猫又", AW: "覚2a"
        , stats: { atk: "-3%", def: "-3%" }
        , type: "nekomata"
        , note: [ "区分：猫又", "範囲", "猫又系" ]
    }
    , {
        name: "あやかし猫道中", cl: "猫又", AW: "覚2b"
        , stats: { atk: "-10%", def: "-10%" }
        , type: "nekomata"
        , note: [ "区分：猫又", "範囲", "猫又系" ]
    }
    , {
        name: "コハル", rarity: "黒", cl: "猫又", AW: "未", skill: "通常"
        , stats: { atk: "*2.0", def: "*2.0" }
        , type: "nekomata"
        , note: [ "区分：猫又", "範囲" ]
    }
    , {
        name: "コハル", rarity: "黒", cl: "猫又", AW: "覚醒", skill: "通常"
        , stats: { atk: "*2.0", def: "*2.0" }
        , type: "nekomata"
        , note: [ "区分：猫又", "範囲" ]
    }
    , {
        name: "コハル", rarity: "黒", cl: "猫又", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "*2.0", def: "*2.0" }
        , type: "nekomata"
        , note: [ "区分：猫又", "範囲" ]
    }
    , {
        name: "ちびコハル", rarity: "ちび", cl: "猫又", skill: "通常"
        , stats: { atk: "*2.0", def: "*2.0" }
        , type: "nekomata"
        , note: [ "区分：猫又", "範囲" ]
    }
    
    // 特効
    , {
        name: "ヴィクトリア/浴衣", rarity: "白", cl: "アーチャー", AW: "覚醒"
        , stats: { atk: "×1.08", other: "" }
        , type: "special"
        , note: [ "区分：特効(編成)", "魔法敵", "分類未確認" ]
    }
    , {
        name: "アルレット", rarity: "黒", cl: "発明家", AW: "未"
        , stats: { atk: "×1.15", other: "" }
        , type: "special"
        , note: [ "区分：特効(編成)", "飛行" ]
    }
    , {
        name: "アルレット", rarity: "黒", cl: "発明家", AW: "覚醒"
        , stats: { atk: "×1.2", other: "" }
        , type: "special"
        , note: [ "区分：特効(編成)", "飛行" ]
    }
    , {
        name: "タバサ", rarity: "白", cl: "発明家", AW: "未"
        , stats: { atk: "×1.1", other: "" }
        , type: "special"
        , note: [ "区分：特効(編成)", "神獣・魔獣・妖獣・獣・", "獣人・魚人・水棲" ]
    }
    , {
        name: "タバサ", rarity: "白", cl: "発明家", AW: "覚醒"
        , stats: { atk: "×1.15", other: "" }
        , type: "special"
        , note: [ "区分：特効(編成)", "神獣・魔獣・妖獣・獣・", "獣人・魚人・水棲" ]
    }
    , {
        name: "ヘンドリカ", rarity: "白", cl: "発明家", AW: "未"
        , stats: { atk: "×1.1", other: "" }
        , type: "special"
        , note: [ "区分：特効(編成)", "天使" ]
    }
    , {
        name: "ヘンドリカ", rarity: "白", cl: "発明家", AW: "覚醒"
        , stats: { atk: "×1.15", other: "" }
        , type: "special"
        , note: [ "区分：特効(編成)", "天使" ]
    }
    , {
        name: "マギー", rarity: "白", cl: "発明家", AW: "未"
        , stats: { atk: "×1.1", other: "" }
        , type: "special"
        , note: [ "区分：特効(編成)", "アーマー・ゴーレム" ]
    }
    , {
        name: "マギー", rarity: "白", cl: "発明家", AW: "覚醒"
        , stats: { atk: "×1.15", other: "" }
        , type: "special"
        , note: [ "区分：特効(編成)", "アーマー・ゴーレム" ]
    }
    , {
        name: "レクテ", rarity: "白", cl: "発明家", AW: "未"
        , stats: { atk: "×1.1", other: "" }
        , type: "special"
        , note: [ "区分：特効(編成)", "デーモン" ]
    }
    , {
        name: "レクテ", rarity: "白", cl: "発明家", AW: "覚醒"
        , stats: { atk: "×1.15", other: "" }
        , type: "special"
        , note: [ "区分：特効(編成)", "デーモン" ]
    }
    , {
        name: "ちびマギー", rarity: "ちび", cl: "発明家"
        , stats: { atk: "×1.1", other: "" }
        , type: "special"
        , note: [ "区分：特効(編成)", "アーマー・ゴーレム" ]
    }
    , {
        name: "ちびアルレット", rarity: "ちび", cl: "発明家"
        , stats: { atk: "×1.15", other: "" }
        , type: "special"
        , note: [ "区分：特効(編成)", "飛行" ]
    }
    
    // ダメージ上昇
    , {
        name: "メリュジアナ", rarity: "白", cl: "ドラゴンプリンセス", AW: "未", skill: "通常"
        , stats: { atk: "×1.35" }
        , type: "atk-up_mag"
        , note: "区分：ダメージ上昇(魔法)"
    }
    , {
        name: "メリュジアナ", rarity: "白", cl: "ドラゴンプリンセス", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.35" }
        , type: "atk-up_mag"
        , note: "区分：ダメージ上昇(魔法)"
    }
    , {
        name: "メリュジアナ", rarity: "白", cl: "ドラゴンプリンセス", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.2" }
        , type: "atk-up_mag"
        , note: [ "区分：ダメージ上昇(魔法)", "永続スキル" ]
    }
    , {
        name: "メリュジアナ/花嫁", rarity: "白", cl: "ドラゴンプリンセス", AW: "未", skill: "通常"
        , stats: { atk: "×1.2" }
        , type: "atk-up_mag"
        , note: [ "区分：ダメージ上昇(魔法)", "永続スキル" ]
    }
    , {
        name: "メリュジアナ/花嫁", rarity: "白", cl: "ドラゴンプリンセス", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.2" }
        , type: "atk-up_mag"
        , note: [ "区分：ダメージ上昇(魔法)", "永続スキル" ]
    }
    , {
        name: "メリュジアナ/花嫁", rarity: "白", cl: "ドラゴンプリンセス", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , type: "atk-up_mag"
        , note: [ "区分：ダメージ上昇(魔法)", "永続スキル" ]
    }
    , {
        name: "ちびメリュジアナ", rarity: "ちび", cl: "ドラゴンプリンセス", skill: "通常"
        , stats: { atk: "×1.35" }
        , type: "atk-up_mag"
        , note: "区分：ダメージ上昇(魔法)"
    }
    , {
        name: "エーリカ", rarity: "白", cl: "メイジアーマー", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.2" }
        , type: "atk-up_mag"
        , note: "区分：ダメージ上昇(魔法)"
    }
    , {
        name: "ミスリア", rarity: "白", cl: "鍛冶職人", AW: "覚1", skill: "覚醒"
        , stats: { atk: "×1.4" }
        , type: "atk-up_mag"
        , note: "区分：ダメージ上昇(魔法)"
    }
    , {
        name: "ミスリア", rarity: "白", cl: "鍛冶職人", AW: "覚2a", skill: "覚醒"
        , stats: { atk: "×1.5" }
        , type: "atk-up_mag"
        , note: "区分：ダメージ上昇(魔法)"
    }
    , {
        name: "テュト", rarity: "黒", cl: "メイジ", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.6" }
        , type: "atk-up_mag"
        , note: "区分：ダメージ上昇(魔法)"
    }
    , {
        name: "エンチャンター", cl: "エンチャンター", AW: "未", skill: "通常"
        , stats: { atk: "×1.1" }
        , type: "atk-up_mag"
        , note: "区分：ダメージ上昇(魔法)"
    }
    , {
        name: "ハイエンチャンター", cl: "エンチャンター", AW: "覚1", skill: [ "通常", "覚醒" ]
        , stats: { atk: "×1.3" }
        , type: "atk-up_mag"
        , note: [ "区分：ダメージ上昇(魔法)", "エンチャンター系" ]
    }
    , {
        name: "ゴーレムマスター", cl: "エンチャンター", AW: "覚2a", skill: [ "通常", "覚醒" ]
        , stats: { atk: "×1.35" }
        , type: "atk-up_mag"
        , note: [ "区分：ダメージ上昇(魔法)", "エンチャンター系" ]
    }
    , {
        name: "グランドエンチャンター", cl: "エンチャンター", AW: "覚2b", skill: [ "通常", "覚醒" ]
        , stats: { atk: "×1.3" }
        , type: "atk-up_mag"
        , note: [ "区分：ダメージ上昇(魔法)", "エンチャンター系" ]
    }
    , {
        name: "アンリ", rarity: "黒", cl: "エンチャンター", AW: "覚1", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , type: "atk-up_mag"
        , note: "区分：ダメージ上昇(魔法)"
    }
    , {
        name: "アンリ", rarity: "黒", cl: "エンチャンター", AW: "覚2a", skill: "覚醒"
        , stats: { atk: "×1.35" }
        , type: "atk-up_mag"
        , note: "区分：ダメージ上昇(魔法)"
    }
    , {
        name: "アンリ", rarity: "黒", cl: "エンチャンター", AW: "覚2b", skill: "覚醒"
        , stats: { atk: "×1.3" }
        , type: "atk-up_mag"
        , note: "区分：ダメージ上昇(魔法)"
    }
    , {
        name: "メシナ", rarity: "黒", cl: "儀式魔術師", AW: "覚醒", skill: "覚醒"
        , stats: { atk: "×1.2" }
        , type: "atk-up_mag"
        , note: "区分：ダメージ上昇(魔法)"
    }
    , {
        name: "魔想志津香", rarity: "黒", cl: "魔法使い【ランス】", AW: "未", skill: "通常"
        , stats: { atk: "×1.3" }
        , type: "atk-up_mag"
        , note: "区分：ダメージ上昇(魔法)"
    }
    , {
        name: "魔想志津香", rarity: "黒", cl: "魔法使い【ランス】", AW: "覚醒", skill: "通常"
        , stats: { atk: "×1.3" }
        , type: "atk-up_mag"
        , note: "区分：ダメージ上昇(魔法)"
    }
    
    // 被ダメージ軽減
    , {
        name: "ローリエ/バレンタイン", rarity: "白", cl: "ドルイド", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , type: "dmg-red_selfSkill"
        , note: [ "区分：被ダメージ軽減(自己/スキル)", "物理-20%(範囲)" ]
    }
    , {
        name: "トットン", rarity: "白", cl: "吟遊詩人", AW: "未", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red_selfSkill"
        , note: [ "区分：被ダメージ軽減(自己/スキル)", "物理-20%(範囲)" ]
    }
    , {
        name: "トットン", rarity: "白", cl: "吟遊詩人", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red_selfSkill"
        , note: [ "区分：被ダメージ軽減(自己/スキル)", "物理-20%(範囲)" ]
    }
    
    , {
        name: "王子【麒麟】", cl: "王子", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-25%(範囲)" ]
    }
    , {
        name: "王子【宣誓】", cl: "王子", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-30%(範囲)" ]
    }
    , {
        name: "オーシェン", rarity: "黒", cl: "光槍ビルガの継承者", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-40%(範囲)" ]
    }
    , {
        name: "オーシェン", rarity: "白", cl: "光槍ビルガの継承者", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-10%(範囲)" ]
    }
    , {
        name: "フィネス", rarity: "黒", cl: "盤上の支配者", AW: "覚醒", skill: "覚醒(3n)"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-20%", "永続スキル(手動中断可能)" ]
    }
    , {
        name: "ベルニス/花嫁", rarity: "白", cl: "ヘビーアーマー", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-30%(範囲)" ]
    }
    , {
        name: "エクス/バレンタイン", rarity: "黒", cl: "神官戦士", AW: "未", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-25%" ]
    }
    , {
        name: "エクス/バレンタイン", rarity: "黒", cl: "神官戦士", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-25%" ]
    }
    , {
        name: "トゥーダ", rarity: "黒", cl: "神官戦士", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-15%(範囲)", "永続スキル" ]
    }
    , {
        name: "清源妙道真君/水着", rarity: "黒", cl: "真人", AW: "未", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-15%(範囲)", "永続スキル" ]
    }
    , {
        name: "清源妙道真君/水着", rarity: "黒", cl: "真人", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-15%(範囲)", "永続スキル" ]
    }
    , {
        name: "フジムラサキ", rarity: "黒", cl: "霊刀つくもがみ", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-30%" ]
    }
    , {
        name: "タツミ", rarity: "黒", cl: "戦巫女", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-35%(範囲)" ]
    }
    , {
        name: "カオル", rarity: "白", cl: "戦巫女", AW: "未", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "魔法-40%(範囲)" ]
    }
    , {
        name: "カオル", rarity: "白", cl: "戦巫女", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "魔法-40%(範囲)" ]
    }
    , {
        name: "クリッペ", rarity: "黒", cl: "シールダー", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-50%(範囲)" ]
    }
    , {
        name: "サフィール", rarity: "黒", cl: "シールダー", AW: "未", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "物理魔法-40%(範囲)" ]
    }
    , {
        name: "サフィール", rarity: "黒", cl: "シールダー", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "物理魔法-40%(範囲)" ]
    }
    , {
        name: "統帥の塔", rarity: "黒", cl: "統帥の塔", AW: "未", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-20%(範囲)", "分類未確認" ]
    }
    , {
        name: "統帥の塔", rarity: "黒", cl: "統帥の塔", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-20%(範囲)", "分類未確認" ]
    }
    , {
        name: "ハリンヘイム", rarity: "白", cl: "砲術士", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-15%(範囲)" ]
    }
    /*
    , {
        name: "ローリエ/バレンタイン", rarity: "白", cl: "ドルイド", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "物理-20%(範囲)", "分類未確認" ]
    }
    */
    , {
        name: "ソウルレゾナンサー", cl: "ライフリンカー", AW: "覚2a", skill: [ "通常", "覚醒" ]
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-15%(範囲)", "ライフリンカー系" ]
    }
    , {
        name: "ホーリーアポストル", cl: "ルーンアコライト", AW: "覚2a", skill: [ "通常", "覚醒" ]
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "物理-20%(範囲)", "ルーンアコライト系" ]
    }
    , {
        name: "イヲナミ", rarity: "白", cl: "シービショップ", AW: "覚醒", skill: "覚醒"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "魔法-15%(範囲)", "永続スキル", "分類未確認" ]
    }
    , {
        name: "トリシャ", rarity: "黒", cl: "ドラゴンメイジ", AW: "未", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "魔法-50%(範囲)" ]
    }
    , {
        name: "トリシャ", rarity: "黒", cl: "ドラゴンメイジ", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "魔法-50%(範囲)" ]
    }
    , {
        name: "イーファ/お正月", rarity: "黒", cl: "ドラグーン", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-15%(範囲)", "分類未確認" ]
    }
    , {
        name: "アイギス神殿", rarity: "黒", cl: "アイギス神殿", AW: "未", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-30%" ]
    }
    , {
        name: "アイギス神殿", rarity: "黒", cl: "アイギス神殿", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-30%" ]
    }
    , {
        name: "ニーカ", rarity: "白", cl: "メディック", AW: "未", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "物理魔法-20%(範囲)" ]
    }
    , {
        name: "ニーカ", rarity: "白", cl: "メディック", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "物理魔法-20%(範囲)" ]
    }
    , {
        name: "魔想志津香", rarity: "黒", cl: "魔法使い【ランス】", AW: "未", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "魔法-30%(範囲)" ]
    }
    , {
        name: "魔想志津香", rarity: "黒", cl: "魔法使い【ランス】", AW: "覚醒", skill: [ "通常", "覚醒" ]
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "魔法-40%(範囲)" ]
    }
    , {
        name: "賈駆", rarity: "白", cl: "軍師【恋姫】", AW: "未", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-10%" ]
    }
    , {
        name: "賈駆", rarity: "白", cl: "軍師【恋姫】", AW: "覚醒", skill: [ "通常", "覚醒(2～)" ]
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "属性不問-10%" ]
    }
    , {
        name: "ワームトークン", rarity: "トークン", AW: "未", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "物理-20%(範囲)", "分類未確認" ]
    }
    , {
        name: "トモダチトークン", rarity: "トークン", AW: "覚醒", skill: "通常"
        , stats: { other: "" }
        , type: "dmg-red"
        , note: [ "区分：被ダメージ軽減", "物理-20%(範囲)", "分類未確認" ]
    }
];

/*

    , {
        name: "", rarity: "", cl: "", AW: "覚醒", skill: ""
        , stats: { : "" }
    }
    
    黒 白 青 金 ちび 銀 トークン
    
    未 覚醒 覚1 覚2a 覚2b
    
    常時 非 通常 覚醒
    
    hp atk def mr range cost wt ct dur atkCd
    
    rege: [ "/秒", "/f" ]
    
    poison abn eva nul redep other
    
    draw
    ○
    (○)
    
    target
    
    type
    
    spot_mul death Lukifer nekomata
    
    special atk-up_mag dmg-red_selfSkill dmg-red
    
    note
    
    範囲 死亡時 物理 魔法 属性不問 区分：
    
    正月 水着 浴衣 バニー 花嫁
    
    お正月 温泉 バレンタイン 学園 エッグハント
    
    ジューンブライド サマー ハロウィン クリスマス

*/