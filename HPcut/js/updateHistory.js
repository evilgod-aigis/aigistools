const updateHistory = [
    /*
    , {
        date: "",
        , detail: [
            ""
        ]
    }
    */
    {
        date: "2023/12/21(木)"
        , detail: [
            "調整を反映"
        ]
    }
    , {
        date: "2023/12/14(木)"
        , detail: [
            "硬直短縮オプションに「聖夜の訪問者クルス」を追加"
        ]
    }
    , {
        date: "2023/12/01(金)"
        , detail: [
            "「ちびツムジ」を追加"
        ]
    }
    , {
        date: "2023/11/22(水)"
        , detail: [
            "再動短縮オプションに「戦場の政務官アンナ」を追加"
            , "被ダメ増加オプションに「魔神の残滓ウェパル」を追加"
            , "属性に「半神」を追加"
            , "(クロノシアトークンどうしよう…)"
        ]
    }
    , {
        date: "2023/11/01(水)"
        , detail: [
            "再動短縮オプションに「迅速の王冠」を追加"
            , "鈍化(マップ)の軽減オプションに「イヴリール[黒]」を追加"
        ]
    }
    , {
        date: "2023/10/19(木)"
        , detail: [
            "属性に「王国」「高貴」を追加"
            , "属性の最大設定数を6に変更"
        ]
    }
    , {
        date: "2023/08/31(木)"
        , detail: [
            "硬直短縮(固定値化)オプションに「速射の長銃」「猛撃の砲弾」を追加"
            , "鈍化(マップ)の軽減オプションに「制海の銃」を追加"
            , "調整を反映"
        ]
    }
    , {
        date: "2023/08/24(木)"
        , detail: [
            "初動短縮オプションに「夏の花火師メル」を追加"
        ]
    }
    , {
        date: "2023/08/18(金)"
        , detail: [
            "属性に「深海」を追加"
        ]
    }
    , {
        date: "2023/08/04(金)"
        , detail: [
            "初動短縮オプションに「井河アサギ」を追加"
        ]
    }
    , {
        date: "2023/07/20(木)"
        , detail: [
            "硬直短縮オプションに「夜行わらし【馬廻】」を追加(区分が特殊なので未対応。そのうち対応予定<span style='text-decoration: line-through;'>(夜行さんで攻撃ヒット時発生型が出てきたらやるかなぁ…)</span>)"
            , "属性に「飛行」を追加"
        ]
    }
    , {
        date: "2023/06/29(木)"
        , detail: [
            "「闇の墓守リッチ」を追加"
            , "初動短縮オプションに「純真海日記ピューロ」を追加"
            , "再動短縮オプションに「夏空の鍛冶師グラティア」を追加"
            , "硬直短縮オプションに「闇の墓守リッチ」を追加"
        ]
    }
    , {
        date: "2023/06/01(木)"
        , detail: [
            "「元始天尊」を追加"
            , "鈍化(マップ)の軽減オプションに「大海神の娘 乙姫」を追加"
            , "オプションで設定された編成バフ以外のバフが適応されていた不具合を修正"
        ]
    }
    , {
        date: "2023/05/25(木)"
        , detail: [
            "硬直短縮(固定値化)オプションに「婚礼つむじ風金糸雀姉妹」を追加"
        ]
    }
    , {
        date: "2023/04/27(木)"
        , detail: [
            "調整を反映"
        ]
    }
    , {
        date: "2023/04/23(日)"
        , detail: [
            "フローを追加"
            , "グラフをamchart5に変更(2点間の値を補間して凡例に表示する方法を知っている人がいたら教えてくらはい)"
            , "コードを最適化(ほぼ全部書き換えた気がする)"
        ]
    }
    , {
        date: "2023/04/06(木)"
        , detail: [
            "再動短縮オプションに「流転の本」を追加"
            , "硬直短縮(固定値化)オプションに「狂暴の翼」を追加"
            , "被ダメ増加オプションに「災禍を律す者モルフェサ[白]」を追加"
        ]
    }
    , {
        date: "2023/03/30(木)"
        , detail: [
            "オプションに「被ダメ増加」を追加"
            , "被ダメ増加オプションに「カースウィスパラー」「災禍を律す者モルフェサ[黒]」を追加"
        ]
    }
    , {
        date: "2023/03/09(木)"
        , detail: [
            "属性に「冥界人」「ドラゴン」を追加"
            , "硬直短縮(固定値化)オプションに「疾風軍師の祝福祭シナト」を追加"
        ]
    }
    , {
        date: "2022/11/10(木)"
        , detail: [
            "属性に「聖職者」「魔界」を追加"
            , "属性の最大設定数を5に変更"
        ]
    }
    , {
        date: "2022/11/02(水)"
        , detail: [
            "「ちびスキュレ」を追加"
            , "初動短縮オプションに「ナシート」を追加"
        ]
    }
    , {
        date: "2022/10/20(木)"
        , detail: [
            "犬神系クラスに第二覚醒「お犬さま」を選択肢に追加(攻撃硬直は実測ではなく攻撃回数から逆算したから間違っているかもしれない)"
        ]
    }
    , {
        date: "2022/10/14(金)"
        , detail: [
            "硬直短縮オプションに「孫策 伯符」を追加"
        ]
    }
    , {
        date: "2022/10/13(木)"
        , detail: [
            "「孫権 仲謀」を追加"
            , "初動短縮オプションに「小覇王【恋姫】」「風雲児【恋姫】」を追加"
            , "属性に「恋姫」を追加"
        ]
    }
    , {
        date: "2022/10/09(日)"
        , detail: [
            "「ワンダーハート」の覚醒スキル中の攻撃間隔を修正(ご指摘感謝です)"
        ]
    }
    , {
        date: "2022/10/06(木)"
        , detail: [
            "「ちびミサ」を追加"
            , "調整を反映"
        ]
    }
    , {
        date: "2022/09/22(木)"
        , detail: [
            "特攻付与オプションに「天性の発明家マギー」を追加"
        ]
    }
    , {
        date: "2022/09/15(木)"
        , detail: [
            "硬直短縮オプションに「金獣の領主リンクス」を追加"
            , "属性に「騎兵」「重装」を追加"
        ]
    }
    , {
        date: "2022/08/10(水)"
        , detail: [
            "「夏祭りの金魚姫スキュレ」を追加"
            , "属性に「華の国」を追加"
        ]
    }
    , {
        date: "2022/07/28(木)"
        , detail: [
            "硬直短縮オプションに「雷鳴大妖ぬえ」を追加"
        ]
    }
    , {
        date: "2022/06/29(水)"
        , detail: [
            "初動短縮オプションに「ドミヌスサクルム」「インヴィクタス」を追加"
            , "再動短縮オプションに「ドミヌスサクルム」を追加"
            , "スキル時間延長オプションに「手甲鍛冶師フィスティア」を追加"
            , "鈍化(マップ)の軽減オプションに「渦潮の亜神メシナ」を追加"
            , "コードを大幅に改修(脱Vue.js)"
        ]
    }
    , {
        date: "2022/04/14(木)"
        , detail: [
            "再動短縮オプションに「黒兎の魔剣士タラニア」を追加"
        ]
    }
    , {
        date: "2022/04/01(金)"
        , detail: [
            "特攻付与オプションに「超古代発明家アルレット」を追加"
        ]
    }
    , {
        date: "2022/03/03(木)"
        , detail: [
            "初動短縮オプションに「闇炎の魔将イルムガルト」を追加"
       ]
    }
    , {
        date: "2022/02/18(金)"
        , detail: [
            "硬直短縮オプションに「エルダードラゴンメイガス」を追加"
            , "オプションの順序を整理"
            , "ツールチップの文言を一部修正"
            , "モーダルの表示を修正"
            , "好感度150%ボーナスの処理周りを調整"
          ]
    }
    , {
        date: "2022/02/04(金)"
        , detail: [
            "バランス調整を反映"
            , "グラフがスマホでも崩れないよう表示を調整"
            , "グラフのプロット数・ツールチップ内の表示を調整"
            , "コンソールからユニットデータを削除した際に、グラフが生成されなくなるバグを修正"
          ]
    }
    , {
        date: "2021/11/30(火)"
        , detail: [
            "硬直短縮(固定値化)オプションに「叡智の杖」を追加"
            , "「迎春の呪姫オロチヒメ」の属性を修正"
       ]
    }
    , {
        date: "2021/11/11(木)"
        , detail: [
            "「魔神の共鳴者レライエ」を追加"
            , "グラフが見やすくなるよう調整(できてたらいいな)"
        ]
    }
    , {
        date: "2021/10/24(日)"
        , detail: [
            "オプションに「特攻付与」を追加(とりあえず最大値を適用。付与の仕方が正しいとは限らない)"
            , "「射程内/○体」かつ「引き付け(敵)」がOFFのとき、「HPリンク」を適用できるよう修正"
            , "コードを少し最適化"
        ]
    }
    , {
        date: "2021/08/12(木)"
        , detail: [
            "硬直短縮(固定値化)オプションに「お祭り夕涼みココロ」を追加"
            , "「ちびコハル」の好感度ボーナスの情報を更新"
        ]
    }
    , {
        date: "2021/08/08(日)"
        , detail: [
            "項目「その他」に「プリンセス系」を追加"
            , "スキルの最短継続時間を1秒とし、5秒未満のものをボムスキルと判定するよう変更"
        ]
    }
    , {
        date: "2021/08/05(木)"
        , detail: [
            "「ちびコハル」を追加"
            , "一部遠近距離型ユニットの強化対象としての扱いを反映"
            , "バフ対象に関して、全クラスにちび・覚醒ちびを一応追加"
            , "HP計算を修正(ダメージの小数処理、最小ダメージ保証など)"
            , "グラフのツールチップの表示位置を調整"
            , "コードを少し最適化(できてたらいいな)"
            , "ツールチップの文言などを少し調整"
        ]
    }
    , {
        date: "2021/08/02(月)"
        , detail: [
            "鈍化(マップ)の軽減オプションを追加"
            , "鈍化(マップ)の軽減オプションに「紫鱗の海巫女ハルフゥ」を追加"
            , "セーラー系・パイレーツ系に深海の悪影響を50%軽減する効果を適用"
            , "ナイトアサシン・エンフォーサーに50%初動短縮を適用"
        ]
    }
    , {
        date: "2021/07/18(日)"
        , detail: [
            "「HPリンク」「引き付け(敵)」を追加"
            , "属性の最大設定数を4に変更"
            , "レイアウトを一部修正"
        ]
    }
    , {
        date: "2021/06/27(日)"
        , detail: [
            "攻撃間隔の60fpsから30fpsへの変換方法を修正"
            , "レイアウトを一部修正"
        ]
    }
    , {
        date: "2021/06/25(金)"
        , detail: [
            "「深海適応」によって鈍化(マップ効果)が無効となるよう修正"
            , "「迎春の呪姫オロチヒメ」に「状態異常無効」を追加"
            , "イビルプリンセス系ユニットに「魔界適応」を追加"
            , "項目「その他」に「GG持ち」を追加"
            , "レイアウトを若干変更(特にモーダル)"
        ]
    }
    , {
        date: "2021/05/28(金)"
        , detail: [
            "「攻撃硬直増加」を追加"
            , "項目「その他」に「状態異常無効」を追加"
            , "グラフのツールチップをHPが昇順にソートされた状態で表示できる機能を追加"
            , "投稿フォームを追加"
        ]
    }
    , {
        date: "2021/05/27(木)"
        , detail: [
            "初動短縮オプションに「竜姫婚姻譚メリュジアナ」を追加"
            , "再動短縮オプションに「天馬騎士団長エスタ」「暗黒騎士」「提督リーンベル」「弓騎兵カティナ」「術士女官シャーリー」「召使いアイリーン」「悪魔召喚士リヴル」「風水士ピピン」を追加"
            , "硬直短縮オプションに「恋慕の堕天使ソフィー」を追加"
            , "自己バフ追加"
            , "ユニットデータに項目「その他」追加"
            , "レイアウトを若干変更"
            , "硬直短縮の計算式の間違いを訂正"
        ]
    }
];