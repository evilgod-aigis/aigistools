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
        date: "2024/12/02(月)"
        , detail: [
            "プリニースのスキル(人間、デーモン、神に対してアビリティ*1.5)が検索に掛からなかった不具合を修正(ご指摘感謝です)"
        ]
    }
    , {
        date: "2024/11/28(木)"
        , detail: [
            "王子【雷霆】を追加"
        ]
    }
    , {
        date: "2024/11/21(木)"
        , detail: [
            "エフトラ/最終決戦仕様[黒]を追加"
            , "バランス調整を反映"
        ]
    }
    , {
        date: "2024/11/14(木)"
        , detail: [
            "シャルキー/新装を追加"
        ]
    }
    , {
        date: "2024/11/01(金)"
        , detail: [
            "トリックオアトリートを追加"
        ]
    }
    , {
        date: "2024/10/30(水)"
        , detail: [
            "ヘルメルクを追加"
        ]
    }
    , {
        date: "2024/10/23(水)"
        , detail: [
            "アイレン、コハル/ハロウィンを追加"
        ]
    }
    , {
        date: "2024/10/10(木)"
        , detail: [
            "アミーを追加"
        ]
    }
    , {
        date: "2024/09/26(木)"
        , detail: [
            "初代皇帝系クラス第二覚醒、ヴィラヘルム、天墜神星を追加"
        ]
    }
    , {
        date: "2024/09/12(木)"
        , detail: [
            "キャリー/新装、マーガレット/新装を追加"
            , "バランス調整を反映"
        ]
    }
    , {
        date: "2024/09/01(日)"
        , detail: [
            "妖精の丘を追加"
        ]
    }
    , {
        date: "2024/08/29(木)"
        , detail: [
            "伏綺[黒]を追加"
            , "クラスチェンジの廃止を反映(CC前・CC後・覚醒前→未、CC55→未55、覚醒後→覚醒)"
            , "フィルタの不具合を修正"
        ]
    }
    , {
        date: "2024/08/22(木)"
        , detail: [
            "妖糸使い系クラス第二覚醒、ララネ、デステリカ、クローシェ、ちびクロノシアを追加"
        ]
    }
    , {
        date: "2024/08/16(金)"
        , detail: [
            "センカ、ヴィクトリア/浴衣を追加"
        ]
    }
    , {
        date: "2024/08/01(木)"
        , detail: [
            "ストレイソッド、クレール/浴衣を追加"
        ]
    }
    , {
        date: "2024/07/25(木)"
        , detail: [
            "ユリクセスを追加"
        ]
    }
    , {
        date: "2024/07/04(木)"
        , detail: [
            "コーネリア/水着、ティルト/水着、アスバール/水着、ソラス/水着[白]、ユッタ/水着、リムリィ/水着を追加"
        ]
    }
    , {
        date: "2024/06/27(木)"
        , detail: [
            "ソーマ/新装、プリニースを追加"
        ]
    }
    , {
        date: "2024/06/20(木)"
        , detail: [
            "ヤハール/花嫁を追加"
        ]
    }
    , {
        date: "2024/06/13(木)"
        , detail: [
            "アサル/新装、リズナ・ランフビットを追加"
        ]
    }
    , {
        date: "2024/06/01(土)"
        , detail: [
            "ちびフェリシアを追加"
        ]
    }
    , {
        date: "2024/05/30(木)"
        , detail: [
            "コロッサス系クラス第二覚醒、フェリスを追加"
        ]
    }
    , {
        date: "2024/05/23(木)"
        , detail: [
            "バランス調整を反映"
            , "フィルタ周りの不具合修正を兼ねてコード刷新"
        ]
    }
    , {
        date: "2024/05/16(木)"
        , detail: [
            "バランス調整を反映"
        ]
    }
    , {
        date: "2024/04/25(木)"
        , detail: [
            "アルコゥ[黒]を追加"
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
            "アイシャ/学園、グリム/学園のトークンを追加"
        ]
    }
    , {
        date: "2024/04/04(木)"
        , detail: [
            "イルマ/バニーを追加"
        ]
    }
    , {
        date: "2024/04/01(月)"
        , detail: [
            "ディアボロスを追加"
        ]
    }
    , {
        date: "2024/03/21(木)"
        , detail: [
            "「死亡時」デバフを分離・新設"
            , "オルフィーのトークン、キンドライヒ、ラビリスを追加"
        ]
    }
    , {
        date: "2024/03/14(木)"
        , detail: [
            "カウリオを追加"
        ]
    }
    , {
        date: "2024/03/01(金)"
        , detail: [
            "シルヴァーナの名前の間違いを修正(ご指摘感謝です)"
        ]
    }
    , {
        date: "2024/02/29(木)"
        , detail: [
            "ちびアラン、ちびシビラの数値を修正"
        ]
    }
    , {
        date: "2024/02/15(木)"
        , detail: [
            "カゴメ、ルイゼット、シルヴァーナを追加"
        ]
    }
    , {
        date: "2024/01/25(木)"
        , detail: [
            "雪娘系クラス第二覚醒、しづり、レクテを追加"
        ]
    }
    , {
        date: "2024/01/11(木)"
        , detail: [
            "アナトリア/温泉を追加"
        ]
    }
    , {
        date: "2024/01/04(木)"
        , detail: [
            "ちびスカーを追加"
        ]
    }
    , {
        date: "2024/01/01(月)"
        , detail: [
            "シルヴィア/お正月を追加"
        ]
    }
    , {
        date: "2023/12/28(木)"
        , detail: [
            "邪仙系クラス第二覚醒、聞忠を追加"
        ]
    }
    , {
        date: "2023/12/07(木)"
        , detail: [
            "エアセイラー系クラス第二覚醒を追加"
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
            "ちびツムジを追加"
        ]
    }
    , {
        date: "2023/11/30(木)"
        , detail: [
            "不具合修正を反映(神話の継承者)"
        ]
    }
    , {
        date: "2023/11/22(水)"
        , detail: [
            "「反撃」デバフを新設"
            , "カオスルーラー、時の俯瞰者、ウェパル、イコル、クロノシアを追加"
        ]
    }
    , {
        date: "2023/11/16(木)"
        , detail: [
            "白の帝国城を追加"
        ]
    }
    , {
        date: "2023/11/09(木)"
        , detail: [
            "クロリス/私服、ちび暗黒騎士を追加"
        ]
    }
    , {
        date: "2023/11/01(水)"
        , detail: [
            "ランシェ[黒][白]、イヴリール[白]、ちびランヒルドを追加"
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
            "呂布 奉先を追加"
        ]
    }
    , {
        date: "2023/10/12(木)"
        , detail: [
            "ウィリアス/ハロウィン、コレット/ハロウィンを追加"
        ]
    }
    , {
        date: "2023/09/28(木)"
        , detail: [
            "対象属性に「冥界人」を追加"
            , "隧道掘削兵系クラス第二覚醒、ガンスリンガー系クラス第二覚醒、ミュレ、ジェニーを追加"
        ]
    }
    , {
        date: "2023/09/21(木)"
        , detail: [
            "バランス調整を反映"
        ]
    }
    , {
        date: "2023/09/14(木)"
        , detail: [
            "ノストラを追加"
        ]
    }
    , {
        date: "2023/09/01(金)"
        , detail: [
            "桃源郷を追加"
        ]
    }
    , {
        date: "2023/08/31(木)"
        , detail: [
            "バランス調整を反映"
        ]
    }
    , {
        date: "2023/08/24(木)"
        , detail: [
            "デューオ/浴衣、メル/浴衣を追加"
        ]
    }
    , {
        date: "2023/08/18(金)"
        , detail: [
            "リムリィ、レオナ/私服、鬼崎きららを追加"
        ]
    }
    , {
        date: "2023/08/10(木)"
        , detail: [
            "ちびゴブリン博士を追加"
        ]
    }
    , {
        date: "2023/08/04(金)"
        , detail: [
            "ハリンヘイム、対魔忍キャラを追加"
        ]
    }
    , {
        date: "2023/07/20(木)"
        , detail: [
            "サティンを追加"
            , "バランス調整を反映"
        ]
    }
    , {
        date: "2023/07/13(木)"
        , detail: [
            "王子【麒麟】、サナラ/水着[白]を追加"
        ]
    }
    , {
        date: "2023/07/01(土)"
        , detail: [
            "ちびハリナを追加"
        ]
    }
    , {
        date: "2023/06/29(木)"
        , detail: [
            "ダーク王子、リッチ、トラム/水着[白]、ホルテウス/水着[白]を追加"
        ]
    }
    , {
        date: "2023/06/15(木)"
        , detail: [
            "迷宮の悪霊系クラス第二覚醒のトークンを追加"
        ]
    }
    , {
        date: "2023/06/15(木)"
        , detail: [
            "英傑の塔のトークンを追加"
        ]
    }
    , {
        date: "2023/06/08(木)"
        , detail: [
            "バランス調整を反映"
        ]
    }
    , {
        date: "2023/06/01(木)"
        , detail: [
            "アラン/闘兵、元始天尊、乙姫のトークンを追加"
        ]
    }
    , {
        date: "2023/05/25(木)"
        , detail: [
            "レナータ/ジューンブライドのトークンを追加"
        ]
    }
    , {
        date: "2023/05/18(木)"
        , detail: [
            "一目の竜系クラス第二覚醒を追加"
            , "バランス調整を反映"
        ]
    }
    , {
        date: "2023/05/04(木)"
        , detail: [
            "ロヴィニア/学園、レティシア/学園、ちびヴィアベルを追加"
        ]
    }
    , {
        date: "2023/04/13(木)"
        , detail: [
            "魔法使い【ランス】、ホーネット派魔人【ランス】、見当かなみを追加"
        ]
    }
    , {
        date: "2023/04/06(木)"
        , detail: [
            "王子【ドゥン】、モルフェサ[白]、ちびアランを追加"
        ]
    }
    , {
        date: "2023/04/01(土)"
        , detail: [
            "ちびチヨメを追加"
        ]
    }
    , {
        date: "2023/03/30(木)"
        , detail: [
            "「被ダメージ」デバフをとりあえず新設"
            , "カースウィスパラー、モルフェサ[黒]を追加"
        ]
    }
    , {
        date: "2023/03/16(木)"
        , detail: [
            "バランス調整を反映"
        ]
    }
    , {
        date: "2023/03/09(木)"
        , detail: [
            "ランヒルド/バニーを追加"
        ]
    }
    , {
        date: "2023/02/23(木)"
        , detail: [
            "隧道掘削兵、ティルト、トリシャ、デリア、ヘーレ、ハイデマリーを追加"
        ]
    }
    , {
        date: "2023/02/16(木)"
        , detail: [
            "支援工兵系クラス第二覚醒を追加"
            , "バランス調整を反映"
        ]
    }
    , {
        date: "2023/02/02(木)"
        , detail: [
            "雪娘、ふゆのを追加"
        ]
    }
    , {
        date: "2023/01/26(木)"
        , detail: [
            "カーニアを追加"
            , "バランス調整を反映"
        ]
    }
    , {
        date: "2023/01/19(木)"
        , detail: [
            "スカイウォリアー系クラス第二覚醒、エス★エフを追加"
        ]
    }
    , {
        date: "2023/01/01(日)"
        , detail: [
            "メシナ/お正月を追加"
        ]
    }
    , {
        date: "2022/12/30(金)"
        , detail: [
            "魔界総帥、アスバールを追加"
        ]
    }
    , {
        date: "2022/12/21(水)"
        , detail: [
            "ローズ/クリスマスを追加"
        ]
    }
    , {
        date: "2022/12/15(木)"
        , detail: [
            "スカウト系クラス第二覚醒を追加"
        ]
    }
    , {
        date: "2022/12/08(木)"
        , detail: [
            "リヴン[白]のトークン、山ン本五郎左衛門[白]を追加"
        ]
    }
    , {
        date: "2022/11/24(木)"
        , detail: [
            "防御デバフの分類に「死亡時」を追加(暫定的)"
            , "スチームナイト系クラス第二覚醒、リヴン[黒]のトークンを追加"
        ]
    }
    , {
        date: "2022/11/17(木)"
        , detail: [
            "ヤハール、コレットを追加"
        ]
    }
    , {
        date: "2022/11/10(木)"
        , detail: [
            "バランス調整を反映"
        ]
    }
    , {
        date: "2022/11/02(水)"
        , detail: [
            "検索条件に状態を追加"
            , "サベージクラッシャー、ナシートを追加"
        ]
    }
    , {
        date: "2022/10/27(木)"
        , detail: [
            "孫堅 文台、クルスを追加"
        ]
    }
    , {
        date: "2022/10/20(木)"
        , detail: [
            "犬神系クラス第二覚醒を追加"
        ]
    }
    , {
        date: "2022/10/13(木)"
        , detail: [
            "恋姫キャラを追加"
            , "バランス調整を反映"
        ]
    }
    , {
        date: "2022/09/22(木)"
        , detail: [
            "シービショップ系クラス第二覚醒、マギーを追加"
        ]
    }
    , {
        date: "2022/09/15(木)"
        , detail: [
            "サベージファイター、レフカ、ちびシビラを追加"
        ]
    }
    , {
        date: "2022/09/01(木)"
        , detail: [
            "ちびルヴェアを追加"
        ]
    }
    , {
        date: "2022/08/18(木)"
        , detail: [
            "ロミルダを追加"
        ]
    }
    , {
        date: "2022/08/10(水)"
        , detail: [
            "検索条件に攻撃属性を追加"
            , "スキュレ/浴衣、フーイェンを追加"
        ]
    }
    , {
        date: "2022/07/28(木)"
        , detail: [
            "シラヌイ/浴衣、ラトゥール、ラトゥール/浴衣を追加"
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
        date: "2022/07/21(木)"
        , detail: [
            "ヴァイス/水着をとりあえず追加"
        ]
    }
    , {
        date: "2022/07/20(水)"
        , detail: [
            "スイレン、ちびスイレンを追加"
        ]
    }
    , {
        date: "2022/07/19(火)"
        , detail: [
            "ラヴクラフトのデバフ対象に属性「水棲」を追加(情報提供感謝です)"
        ]
    }
];