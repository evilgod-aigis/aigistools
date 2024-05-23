const updateHistory = [
    /*
    {
        date: ""
        , detail: [
            ""
        ]
    }
    , 
    */
    {
        date: "2024/05/23(木)"
        , detail: [
            "祓剣主神を追加"
            , "調整を反映"
            , "フィルタ周りの不具合修正を兼ねてコード刷新"
        ]
    }
    , {
        date: "2024/05/16(木)"
        , detail: [
            "遠距離クラスに「豊穣神」を追加"
            , "調整を反映"
        ]
    }
    , {
        date: "2024/05/09(木)"
        , detail: [
            "近接クラスに「ガオレオン」を追加"
            , "ちびガオレオンを追加"
        ]
    }
    , {
        date: "2024/05/01(水)"
        , detail: [
            "王国学園を追加"
        ]
    }
    , {
        date: "2024/04/25(木)"
        , detail: [
            "近接クラスに「光槍ビルガの継承者」「祖竜」を追加"
            , "ベルーフェ/学園、オーシェン、アルコゥを追加"
        ]
    }
    , {
        date: "2024/04/18(木)"
        , detail: [
            "発明家系クラス第二覚醒を追加"
        ]
    }
    , {
        date: "2024/04/11(木)"
        , detail: [
            "アイシャ/学園、グリム/学園、シロガネ/学園を追加"
        ]
    }
    , {
        date: "2024/04/04(木)"
        , detail: [
            "エレオノーラ/バニー、イルマ/バニー、リーザ/バニー、ダイオージ、アンナホープネスを追加"
            , "ミスを修正"
        ]
    }
    , {
        date: "2024/04/01(月)"
        , detail: [
            "ちびアブグルントを追加"
        ]
    }
    , {
        date: "2024/03/21(木)"
        , detail: [
            "遠距離クラスに「ハデスシャーマン」「メディック」を追加"
        ]
    }
    , {
        date: "2024/03/14(木)"
        , detail: [
            "近接クラスに「王国民的アイドル」を追加"
            , "女王子/アイドル、シラハユリを追加"
        ]
    }
    , {
        date: "2024/03/01(金)"
        , detail: [
            "ちびイリオスを追加"
            , "シルヴァーナの名前の間違いを修正(ご指摘感謝です)"
        ]
    }
    , {
        date: "2024/02/29(木)"
        , detail: [
            "遠距離クラスに「アイギス神殿」を追加"
            , "遠近距離クラスに「帝国アイドル」を追加"
            , "ロゼリン、アイギス神殿、ツキコ★トゥーダを追加"
        ]
    }
    , {
        date: "2024/02/22(木)"
        , detail: [
            "シェラハウトを追加"
        ]
    }
    , {
        date: "2024/02/15(木)"
        , detail: [
            "近接クラスに「衛士」を追加"
            , "カゴメ、ジンレイ、ルイゼット、ダルティエ、ワルツ/バレンタイン、シルヴィーナを追加"
        ]
    }
    , {
        date: "2024/02/01(木)"
        , detail: [
            "迷い家、シャディア/バレンタイン、キャロット/バレンタインを追加"
        ]
    }
    , {
        date: "2024/01/25(木)"
        , detail: [
            "しづりのトークン、モモ/温泉を追加"
        ]
    }
    , {
        date: "2024/01/11(木)"
        , detail: [
            "アナトリア/温泉、ミカ/温泉を追加"
        ]
    }
    , {
        date: "2024/01/01(月)"
        , detail: [
            "王子【竜王】、イムラウ/お正月、アラン/お正月、アヅミ/お正月を追加"
        ]
    }
    , {
        date: "2023/12/28(木)"
        , detail: [
            "誅子、聞忠、マルティナ/クリスマスを追加"
        ]
    }
    , {
        date: "2023/12/21(木)"
        , detail: [
            "調整を反映(竜族→ドラゴン、深海適応→深海)"
        ]
    }
    , {
        date: "2023/12/14(木)"
        , detail: [
            "クルス/クリスマス、アエロ/クリスマス、ちび白の皇帝を追加"
        ]
    }
    , {
        date: "2023/12/07(木)"
        , detail: [
            "シビラ/聖剣、クーシン、アヴィリコ、ちびアスバールを追加"
        ]
    }
    , {
        date: "2023/12/03(日)"
        , detail: [
            "フィルタ周りの不具合を修正・最適化"
        ]
    }
    , {
        date: "2023/12/01(金)"
        , detail: [
            "アイギス像を追加"
        ]
    }
    , {
        date: "2023/11/16(木)"
        , detail: [
            "エフトラ/最終決戦仕様を追加"
        ]
    }
    , {
        date: "2023/11/22(水)"
        , detail: [
            "近接クラスに「神話の継承者」「デモンリドゥ」「カオスルーラー」を追加"
            , "遠距離クラスに「時の俯瞰者」を追加"
            , "属性等>種族に「半神」を追加"
            , "政務官系クラス第一覚醒、神話の継承者、アンナ(覚醒後)、アキレア、クロノシアを追加"
        ]
    }
    , {
        date: "2023/11/16(木)"
        , detail: [
            "近接クラスに「白の帝国城」を追加"
            , "白の帝国城を追加"
        ]
    }
    , {
        date: "2023/11/09(木)"
        , detail: [
            "イヨ、クロリス/私服、ちび暗黒騎士を追加"
        ]
    }
    , {
        date: "2023/11/01(水)"
        , detail: [
            "近接クラスに「マギステルミリトゥム」を追加"
            , "遠距離クラスに「未踏海域の覇者」を追加"
            , "ランシェ、イヴリール、ファニュア、王国軍旗を追加"
        ]
    }
    , {
        date: "2023/10/26(木)"
        , detail: [
            "ヒミコを追加"
        ]
    }
    , {
        date: "2023/10/19(木)"
        , detail: [
            "属性等>所属に「王国」を追加"
            , "属性等>その他に「高貴」を追加"
            , "賈駆を追加"
        ]
    }
    , {
        date: "2023/10/12(木)"
        , detail: [
            "ウィリアス/ハロウィン、レミィ/ハロウィン、コレット/ハロウィンを追加"
            , "調整を反映"
        ]
    }
    , {
        date: "2023/09/28(木)"
        , detail: [
            "遠近距離クラスに「エアセイラー」を追加"
            , "ヘリューズ、ジェニー、パラベルを追加"
        ]
    }
    , {
        date: "2023/09/21(木)"
        , detail: [
            "ジタリスを追加"
            , "調整を反映"
        ]
    }
    , {
        date: "2023/09/14(木)"
        , detail: [
            "バスティスを追加"
        ]
    }
    , {
        date: "2023/08/31(木)"
        , detail: [
            "近接クラスに「王国軍初代副司令」「大華の神話」を追加"
            , "王子(【焔竜】【天羽々斬】)、ヴィディア、徐華を追加"
        ]
    }
    , {
        date: "2023/08/24(木)"
        , detail: [
            "ミルノ/浴衣、メル/浴衣を追加"
        ]
    }
    , {
        date: "2023/08/18(金)"
        , detail: [
            "遠距離クラスに「ガンスリンガー」を追加"
            , "属性等>その他に「深海」を追加"
        ]
    }
    , {
        date: "2023/08/10(木)"
        , detail: [
            "遠距離クラスに「ゴブリン博士」を追加"
            , "王子【対魔忍】、ちびゴブリン博士を追加"
        ]
    }
    , {
        date: "2023/08/04(金)"
        , detail: [
            "近接クラスに「対魔忍 超人【対魔忍】」「対魔忍 魔性【対魔忍】」「対魔忍 精神【対魔忍】」「対魔忍 科学【対魔忍】」を追加"
            , "遠近距離クラスに「対魔忍 自然【対魔忍】」を追加"
            , "対魔忍キャラを追加"
        ]
    }
    , {
        date: "2023/07/27(木)"
        , detail: [
            "デルフィーナを追加"
        ]
    }
    , {
        date: "2023/07/20(木)"
        , detail: [
            "近接クラスに「処刑人」を追加"
            , "属性等>その他に「飛行」を追加"
            , "夜行さん系クラス第二覚醒を追加"
            , "調整を反映"
        ]
    }
    , {
        date: "2023/07/13(木)"
        , detail: [
            "王子【麒麟】、サナラ/水着[白]を追加"
        ]
    }
    , {
        date: "2023/07/06(木)"
        , detail: [
            "パヤモを追加"
        ]
    }
    , {
        date: "2023/07/01(土)"
        , detail: [
            "海の家を追加"
        ]
    }
    , {
        date: "2023/06/29(木)"
        , detail: [
            "近接クラスに「ダーク王子」を追加"
            , "遠距離クラスに「リッチ【闇の軍勢】」「政務官【闇の軍勢】」を追加"
            , "政務官【闇の軍勢】、ダーク王子、ダークアンナ、リッチ、ヴルム/水着、ナタク/水着、テュト/水着、リンネ/水着、トラム/水着、ホルテウス/水着、ピューロ/水着、グラティア/水着を追加"
        ]
    }
    , {
        date: "2023/06/22(木)"
        , detail: [
            "遠距離クラスに「支援の聖霊」を追加"
        ]
    }
    , {
        date: "2023/06/15(木)"
        , detail: [
            "遠距離クラスに「英傑の塔」を追加"
            , "遠近距離クラスに「不死鳥娘【モンスター娘TD】」を追加"
            , "英傑の塔を追加"
        ]
    }
    , {
        date: "2023/06/08(木)"
        , detail: [
            "属性等>その他に「砲兵」「銃士」を追加"
        ]
    }
    , {
        date: "2023/06/01(木)"
        , detail: [
            "近接クラスに「天尊」を追加"
        ]
    }
    , {
        date: "2023/05/25(木)"
        , detail: [
            "レナータ/ジューンブライド、ロカ/ジューンブライド、金糸雀姉妹/ジューンブライドを追加"
        ]
    }
    , {
        date: "2023/05/18(木)"
        , detail: [
            "近接クラスに「一目の竜」を追加"
            , "サクヤ/学園、普賢を追加"
            , "調整を反映"
        ]
    }
    , {
        date: "2023/05/04(木)"
        , detail: [
            "キュウビ/学園、ロヴィニア/学園、レティシア/学園、ちびヴィアベル、魔王の玉座を追加"
        ]
    }
    , {
        date: "2023/04/27(木)"
        , detail: [
            "遠距離クラスに「初代大統領【ランス】」を追加"
            , "シャジャル、ナナリー/私服を追加"
            , "調整を反映"
        ]
    }
    , {
        date: "2023/04/13(木)"
        , detail: [
            "近接クラスに「ホーネット派魔人【ランス】」「忍者【ランス】」を追加"
            , "遠距離クラスに「魔法使い【ランス】」を追加"
            , "魔想志津香を追加"
        ]
    }
    , {
        date: "2023/04/06(木)"
        , detail: [
            "王子(【ナンディ】【海鎮】【ドゥン】)、ミルドリス[白]、モルフェサ[白]を追加"
        ]
    }
    , {
        date: "2023/03/30(木)"
        , detail: [
            "近接クラスに「神獣騎士」「女王子」を追加"
            , "遠距離クラスに「カースウィスパラー」を追加"
            , "ミルドリス[黒]、モルフェサ[黒]、女王子を追加"
        ]
    }
    , {
        date: "2023/03/23(木)"
        , detail: [
            "イヲナミ、マグリカ、アレグロを追加"
        ]
    }
    , {
        date: "2023/03/16(木)"
        , detail: [
            "近接クラスに「シールダー」を追加"
            , "レジナレア、フェイロンを追加"
            , "調整を反映"
        ]
    }
    , {
        date: "2023/03/09(木)"
        , detail: [
            "シナト/バニー、カラザ/バニーを追加"
        ]
    }
    , {
        date: "2023/03/01(水)"
        , detail: [
            "帝国軍旗を追加"
        ]
    }
    , {
        date: "2023/02/23(木)"
        , detail: [
            "属性等>種族に「冥界人」を追加"
            , "近接クラスに「ハデスソルジャー」「隧道掘削兵」を追加"
            , "ティルト、トリシャ、デリア、ヘーレ、ソーマ/メイド、ローリエ/バレンタインを追加"
        ]
    }
    , {
        date: "2023/02/09(木)"
        , detail: [
            "ラタトスク/バレンタイン、ミリアム/バレンタインを追加"
        ]
    }
    , {
        date: "2023/02/02(木)"
        , detail: [
            "遠距離クラスに「雪娘」「アイドル召喚士」を追加"
            , "リノ/アイドルを追加"
        ]
    }
    , {
        date: "2023/01/20(金)"
        , detail: [
            "「その他バフ」で、バフ区分ごとに太線で分かれるように変更"
        ]
    }
    , {
        date: "2023/01/19(木)"
        , detail: [
            "近接クラスに「小悪魔アイドル」を追加"
            , "エス★エフを追加"
        ]
    }
    , {
        date: "2023/01/12(木)"
        , detail: [
            "近接クラスに「グレーターデーモン」を追加"
            , "アカネ/温泉、シエナ/温泉を追加"
        ]
    }
    , {
        date: "2023/01/03(火)"
        , detail: [
            "王子【玉兎】を追加"
        ]
    }
    , {
        date: "2023/01/01(日)"
        , detail: [
            "メシナ/お正月、エフトラ/お正月、ちびヨシノを追加"
        ]
    }
    , {
        date: "2022/12/31(土)"
        , detail: [
            "王子【正月】、トゥーリを追加"
        ]
    }
    , {
        date: "2022/12/30(金)"
        , detail: [
            "遠距離クラスに「魔界総帥」を追加"
            , "アスバール、ウルカノを追加"
        ]
    }
    , {
        date: "2022/12/21(水)"
        , detail: [
            "近接クラスに「黒竜娘【モンスター娘TD】」を追加"
            , "ローズ/クリスマスを追加"
        ]
    }
    , {
        date: "2022/12/08(木)"
        , detail: [
            "リヴン[白]、山ン本五郎左衛門[白]、グレーテル/クリスマスを追加"
        ]
    }
    , {
        date: "2022/12/01(木)"
        , detail: [
            "近接クラスに「暁光の神話」を追加"
            , "イルドナを追加"
        ]
    }
    , {
        date: "2022/11/24(木)"
        , detail: [
            "近接クラスに「アヤカシの王(追加し忘れてた)」「トゥルーブラッド」「黎明の翼」を追加"
            , "王子【英魂】、リヴン[黒]、ルキファ[黒]を追加"
        ]
    }
    , {
        date: "2022/11/18(金)"
        , detail: [
            "リンクミスを訂正(ご指摘感謝です)"
        ]
    }
    , {
        date: "2022/11/17(木)"
        , detail: [
            "属性等>その他に「ドラゴン」を追加(「竜族」は同範囲っぽいけどロタン以外のバフ範囲は未調整なので残留)"
            , "ロタン、ヤハール、コレットを追加"
            , "調整を反映"
        ]
    }
    , {
        date: "2022/11/10(木)"
        , detail: [
            "属性等>その他に「聖職者」「魔界」を追加"
            , "調整を反映"
        ]
    }
    , {
        date: "2022/11/02(水)"
        , detail: [
            "ナシートを追加"
        ]
    }
    , {
        date: "2022/10/31(月)"
        , detail: [
            "山ン本五郎左衛門[黒]を追加"
        ]
    }
    , {
        date: "2022/10/13(木)"
        , detail: [
            "近接クラスに「小覇王【恋姫】」を追加"
            , "遠距離クラスに「暴君【恋姫】」「弓将【恋姫】」を追加"
            , "属性>出身の名称を属性>所属に変更"
            , "属性>所属に「恋姫」を追加"
            , "ジュリア/ハロウィン、恋姫キャラを追加"
            , "調整を反映"
        ]
    }
    , {
        date: "2022/10/06(木)"
        , detail: [
            "調整を反映"
        ]
    }
    , {
        date: "2022/09/29(木)"
        , detail: [
            "王子【天羽々斬】、ソシエ/ハロウィン、レライエ/ハロウィンを追加"
        ]
    }
    , {
        date: "2022/09/22(木)"
        , detail: [
            "マギーを追加"
        ]
    }
    , {
        date: "2022/09/15(木)"
        , detail: [
            "近接クラスに「サベージファイター」を追加"
            , "遠距離クラスに「座敷わらし」を追加"
            , "遠近距離クラスに「スカイヒーラー」を追加"
            , "属性等>その他に「騎兵」「重装」を追加"
            , "ファルア、エンジュを追加"
        ]
    }
    , {
        date: "2022/09/08(木)"
        , detail: [
            "コラリーを追加"
        ]
    }
    , {
        date: "2022/09/01(木)"
        , detail: [
            "リンクス、ラシティを追加"
        ]
    }
    , {
        date: "2022/08/25(木)"
        , detail: [
            "白の皇帝(覚醒後)を追加"
        ]
    }
    , {
        date: "2022/08/18(木)"
        , detail: [
            "グラティア、トゥーダ、ロミルダ、アブグルントを追加"
        ]
    }
    , {
        date: "2022/08/10(水)"
        , detail: [
            "近接クラスに「武侠」を追加"
            , "属性等>出身に「華の国」を追加"
        ]
    }
    , {
        date: "2022/07/28(木)"
        , detail: [
            "リアナ/浴衣、シラヌイ/浴衣を追加"
        ]
    }
    , {
        date: "2022/07/24(日)"
        , detail: [
            "開発環境がPCになったので全コードを見直し・最適化"
            , "ついでに抜け落ち、間違い、不具合を修正"
            , "一部スキル効果時間を「備考」に記載 (永続・ボム：好感度や第二覚醒で変化しないもの)"
        ]
    }
    , {
        date: "2022/07/22(金)"
        , detail: [
            "アリシア、ちびアリシアを追加"
        ]
    }
    , {
        date: "2022/07/21(木)"
        , detail: [
            "ヴァイス/水着を追加"
            , "雷鳴大妖ぬえを追加"
        ]
    }
];