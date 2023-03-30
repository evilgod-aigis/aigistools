const num = {
    redeployInterval: {
        use: false,
        value: 30,
        min: 1,
        max: 1000,
        txt: [ "秒", "", "秒" ],
        cl: "number1",
        type: "int",
        updateTable: [ true, true ]
    },
    timeCap: {
        value: 300,
        min: 10,
        max: 1000,
        txt: [ "秒", "", "秒" ],
        cl: "number1",
        type: "int"
    },
    maxHP: {
        value: 100000,
        min: 1,
        max: Math.floor(2 ** 32 / 100),
        txt: [ "", "", "" ],
        cl: "number2",
        type: "int"
    },
    linkedHP: {
        use: false,
        value: 10000,
        min: 1,
        max: Math.floor(2 ** 32 / 100),
        txt: [ "<br>本体のHPにリンクしている敵の合計HP" ,"HP ", "" ],
        cl: "number2",
        type: "int"
    },
    simultHit: {
        use: false,
        value: 2,
        min: 2,
        max: 1001,
        txt: [ "<br>射程内にいる敵の数(本体を含む)", "", "体" ],
        cl: "number1",
        type: "int"
    },
    DPS: {
        value: 0,
        txt: [ "入力制限は特になし<br>マイナスにするとリジェネになる", "", "" ],
        cl: "number2"
    },
    incAtkCooldown_enemy: {
        value: 0,
        min: 0,
        max: 1000,
        txt: [ "f (30fps)", "", "f" ],
        cl: "number1",
        type: "int",
        updateTable: [ false, true ]
    },
    incAtkCooldown_map: {
        map: {
            selected: '深海',
            options: [ '深海' ]
        },
        value: 0,
        min: 0,
        max: 1000,
        txt: [ "f (30fps)", "", "f" ],
        cl: "number1",
        type: "int",
        updateTable: [ false, true ]
    }
};