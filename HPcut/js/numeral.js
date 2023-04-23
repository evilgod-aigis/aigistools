const num = {
    timeCap: {
        value: 100
        , min: 10
        , max: 1000
        , txt: [ "秒", "", "秒" ]
        , cl: "number1"
        , type: "int"
    }
    , redeployInterval: {
        use: false
        , value: 30
        , min: 1
        , max: 1000
        , txt: [ "秒", "", "秒" ]
        , cl: "number1"
        , type: "int"
    }
    , maxHP: {
        value: 1000000
        , min: 1
        , max: 1e8 - 1//Math.floor(2 ** 32 / 100)
        , txt: [ "", "", "" ]
        , cl: "number2"
        , type: "int"
    }
    , linkedHP: {
        use: false
        , value: 100000
        , min: 1
        , max: 1e8 - 1//Math.floor(2 ** 32 / 100)
        , txt: [ "<br>本体のHPにリンクしている敵のHP" ,"HP ", "" ]
        , cl: "number2"
        , type: "int"
        , value2: 1
        , min2: 1
        , max2: 1001
        , txt2: [ "<br>本体のHPにリンクしている敵の数" ,"", "体" ]
        , cl2: "number1"
        , type2: "int"
    }
    , simultHit: {
        use: false
        , value: 2
        , min: 2
        , max: 1001
        , txt: [ "<br>射程内にいる敵の数(本体を含む)", "", "体" ]
        , cl: "number1"
        , type: "int"
    }
    , DPS: {
        value: 0
        , txt: [ "入力制限は特になし<br>マイナスにするとリジェネになる", "", "" ]
        , cl: "number2"
    }
    , incAtkCooldown_enemy: {
        value: 0
        , min: 0
        , max: 1000
        , txt: [ "f (30fps)", "", "f" ]
        , cl: "number1"
        , type: "int"
    }
    , incAtkCooldown_map: {
        map: {
            selected: '深海'
            , options: [ '深海' ]
        }
        , value: 0
        , min: 0
        , max: 1000
        , txt: [ "f (30fps)", "", "f" ]
        , cl: "number1"
        , type: "int"
    }
};