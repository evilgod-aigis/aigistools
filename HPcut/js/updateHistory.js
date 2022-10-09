const updateHistory = [
    /*
    {
        date: "",
        detail: [
            ""
        ]
    },
    */
    {
        date: "2022/10/09(日)"
        , detail: [
            "「ワンダーハート」の覚醒スキル中の攻撃間隔を修正(ご指摘感謝です)"
        ]
    },
    {
        date: "2022/10/06(木)"
        , detail: [
            "「ちびミサ」を追加"
            , "調整を反映"
        ]
    },
    {
        date: "2022/09/22(木)",
        detail: [
            "特攻付与オプションに「天性の発明家マギー」を追加"
        ]
    },
    {
        date: "2022/09/15(木)",
        detail: [
            "硬直短縮オプションに「金獣の領主リンクス」を追加"
            , "属性に「騎兵」「重装」を追加"
        ]
    },
    {
        date: "2022/08/10(水)",
        detail: [
            "「夏祭りの金魚姫スキュレ」を追加"
            , "属性に「華の国」を追加"
        ]
    },
    {
        date: "2022/07/28(木)",
        detail: [
            "硬直短縮オプションに「雷鳴大妖ぬえ」を追加"
        ]
    },
    {
        date: "2022/06/29(水)",
        detail: [
            "初動短縮オプションに「ドミヌスサクルム」「インヴィクタス」を追加"
            , "再動短縮オプションに「ドミヌスサクルム」を追加"
            , "スキル時間延長オプションに「手甲鍛冶師フィスティア」を追加"
            , "鈍化(マップ)の軽減オプションに「渦潮の亜神メシナ」を追加"
            , "コードを大幅に改修(脱Vue.js)"
        ]
    },
    {
        date: "2022/04/14(木)",
        detail: [
            "再動短縮オプションに「黒兎の魔剣士タラニア」を追加"
        ]
    },
    {
        date: "2022/04/01(金)",
        detail: [
            "特攻付与オプションに「超古代発明家アルレット」を追加"
        ]
    },
    {
        date: "2022/03/03(木)",
        detail: [
            "初動短縮オプションに「闇炎の魔将イルムガルト」を追加"
       ]
    },
    {
        date: "2022/02/18(金)",
        detail: [
            "硬直短縮オプションに「エルダードラゴンメイガス」を追加"
            , "オプションの順序を整理"
            , "ツールチップの文言を一部修正"
            , "モーダルの表示を修正"
            , "好感度150%ボーナスの処理周りを調整"
          ]
    },
    {
        date: "2022/02/04(金)",
        detail: [
            "バランス調整を反映"
            , "グラフがスマホでも崩れないよう表示を調整"
            , "グラフのプロット数・ツールチップ内の表示を調整"
            , "コンソールからユニットデータを削除した際に、グラフが生成されなくなるバグを修正"
          ]
    },
    {
        date: "2021/11/30(火)",
        detail: [
            "硬直短縮(固定値化)オプションに「叡智の杖」を追加"
            , "「迎春の呪姫オロチヒメ」の属性を修正"
       ]
    },
    {
        date: "2021/11/11(木)",
        detail: [
            "「魔神の共鳴者レライエ」を追加"
            , "グラフが見やすくなるよう調整(できてたらいいな)"
        ]
    },
    {
        date: "2021/10/24(日)",
        detail: [
            "オプション「特攻付与」追加(とりあえず最大値を適用。付与の仕方が正しいとは限らない)"
            , "「射程内/○体」かつ「引き付け(敵)」がOFFのとき、「HPリンク」を適用できるよう修正"
            , "コードを少し最適化"
        ]
    },
    {
        date: "2021/08/12(木)",
        detail: [
            "硬直短縮(固定値化)オプションに「お祭り夕涼みココロ」を追加"
            , "「ちびコハル」の好感度ボーナスの情報を更新"
        ]
    },
    {
        date: "2021/08/08(日)",
        detail: [
            "項目「その他」に「プリンセス系」を追加"
            , "スキルの最短継続時間を1秒とし、5秒未満のものをボムスキルと判定するよう変更"
        ]
    },
    {
        date: "2021/08/05(木)",
        detail: [
            "「ちびコハル」を追加"
            , "一部遠近距離型ユニットの強化対象としての扱いを反映"
            , "バフ対象に関して、全クラスにちび・覚醒ちびを一応追加"
            , "HP計算を修正(ダメージの小数処理、最小ダメージ保証など)"
            , "グラフのツールチップの表示位置を調整"
            , "コードを少し最適化(できてたらいいな)"
            , "ツールチップの文言などを少し調整"
        ]
    },
    {
        date: "2021/08/02(月)",
        detail: [
            "鈍化(マップ)の軽減オプションを追加"
            , "鈍化(マップ)の軽減オプションに「紫鱗の海巫女ハルフゥ」を追加"
            , "セーラー系・パイレーツ系に深海の悪影響を50%軽減する効果を適用"
            , "ナイトアサシン・エンフォーサーに50%初動短縮を適用"
        ]
    },
    {
        date: "2021/07/18(日)",
        detail: [
            "「HPリンク」「引き付け(敵)」を追加"
            , "属性の最大設定数を4に変更"
            , "レイアウトを一部修正"
        ]
    },
    {
        date: "2021/06/27(日)",
        detail: [
            "攻撃間隔の60fpsから30fpsへの変換方法を修正"
            , "レイアウトを一部修正"
        ]
    },
    {
        date: "2021/06/25(金)",
        detail: [
            "「深海適応」によって鈍化(マップ効果)が無効となるよう修正"
            , "「迎春の呪姫オロチヒメ」に「状態異常無効」を追加"
            , "イビルプリンセス系ユニットに「魔界適応」を追加"
            , "項目「その他」に「GG持ち」を追加"
            , "レイアウトを若干変更(特にモーダル)"
        ]
    },
    {
        date: "2021/05/28(金)",
        detail: [
            "「攻撃硬直増加」を追加"
            , "項目「その他」に「状態異常無効」を追加"
            , "グラフのツールチップをHPが昇順にソートされた状態で表示できる機能を追加"
            , "投稿フォームを追加"
        ]
    },
    {
        date: "2021/05/27(木)",
        detail: [
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