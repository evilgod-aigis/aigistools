//遠近距離型の強化対象としての扱い
lists.depTypeCount = {
    "近接型": [
        "スカイウォリアー系", "下級スカイウォリアー", "ちびスカイウォリアー", "ドレッドウィング", "スカイウォリアー", "スカイウォリアーチーフ", "ドレッドウィング",
        "スカウト系", "ちびスカウト", "ちびスカウトオフィサー", "スカウト", "スカウトオフィサー"
    ],
    "遠距離型": [
        "ロケットトルーパー系", "ちびロケットトルーパー", "ちびジェットトルーパー", "ロケットトルーパー", "ジェットトルーパー",
        "スカイシューター系", "下級スカイシューター", "ちびスカイシューター", "ちびアローウィング", "スカイシューター", "スカイシューターチーフ", "アローウィング",
        "異世界戦士系", "異世界戦士"
    ]
};

//特殊なスキル初動
lists.specialWT = [
    { unitName: "万刃を担う者アルヴァ", rarity: "黒", skillAwaken: "覚醒", WT: 0 },
    { unitName: "魔導鎧姫グレース", rarity: "黒", skillAwaken: "覚醒", WT: 0 },
    { unitName: "鷲獅騎兵リュクス", rarity: "黒", skillAwaken: "覚醒", WT: 0 },
    { unitName: "風竜魔術士コラリー", rarity: "白", skillAwaken: "覚醒", WT: 0 },
    { unitName: "宝船", rarity: "金", skillAwaken: "通常", WT: 0 },
];

//特殊な好感度ボーナス
lists.specialAff = {
    "再動短縮": {
        "黒": {
            0.23: [ "奇譚の幻術士タリエ" ]
        },
        "白": {},
        "金": {
            0.15: [ "新米狩人ピックル" ]
        }
    },
    "時間延長": {
        "黒": {
            0.23: [
                "赤き盗賊花嫁ベルナ", "降魔の復讐者ノワール", "鬼刃忍タチバナ",
                "至宝の使い手リアナ", "翠花の領主メアリ"
            ]
        },
        "白": {},
        "金": {}
    },
    "攻撃硬直": {
        "黒": {
            0.17: [
                "純白の花嫁カルマ", "鋼の重装砲兵ヴァネッサ", "夜鳥ツグミ",
                "花嫁姿の召喚士ファルネ", "冥霊たちの夏メルアビス", "錬金調合師ニコル", "焔の竜砲騎兵ジゼル"
            ]
        },
        "白": {},
        "金": {}
    }
};