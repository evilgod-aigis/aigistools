funcs.graph = {};
const graph = {
    root: null, chart: null, xAxis: null, yAxis: null, cursor: null, legend: null, responsive: null, exporting: null
    , clicked: { posX: undefined, posY: undefined }
    , sequent: true, fps: 30, plotTime: null, scale: null /* [f] */, strokeWidth: 2
    , borderDash: {
        onSkillAct: [
            [ 15, 3 ]
            , [ 10, 3, 3, 3 ]
            , [ 8, 3, 3, 3, 3, 3 ]
        ]
        , onHit: [
            []
            , [ 20, 2, 2, 2 ]
            , [ 15, 2, 2, 2, 2, 2 ]
        ]
    }
};

// グラフを逐次更新するか否か
funcs.graph.ToggleSequent = sequent => {
    document.getElementById("updateGraphBtn").disabled = graph.sequent = sequent;
    if(saveData.data) document.getElementById("toggleSequent").checked = !sequent;
    else if(saveData.db) funcs.saveData.UpdateData("graphSequent", null, sequent);
}
// グラフデータ作成
funcs.graph.SetGraphData = (term = null, type = null, targetUnit = null) => {
    if(_.startsWith(term, "unit_")) {
        let id;
        [ type, id ] = term.split("_")[1].split("-");
        targetUnit = _.find(lists.units[type].list, { id: Number(id) });
        term = "unit";
    }
    // テーブル書き換え
    switch(term) {
        case "init":
            funcs.createHTML.UnitsTable();
            term = "all";
            break;
        case "rWT":
        case "rCTdepType":
        case "rCT":
        case "skillExtend":
        case "skillExtendFixed":
        case "redeployInterval":
            funcs.createHTML.EditUnitsTable("timing");
            break;
        case "haste":
        case "hasteFixed":
        case "redMapEff":
        case "incAtkCooldown_enemy":
        case "incAtkCooldown_map":
            funcs.createHTML.EditUnitsTable("atkInterval");
            break;
        case "giveDmgMul":
        case "takenDmg":
            funcs.createHTML.EditUnitsTable("HPred");
            break;
        case "unit":
            funcs.createHTML.EditUnitsTable(null, type, targetUnit);
            break;
        case "add":
            funcs.createHTML.addUnitToTable(type, targetUnit);
            break;
    }
    
    funcs.unitsData.CountUnits();
    // 軽量化レベル
    const thinLv = Number(document.getElementById("shinGraph").shinGraph.value);
    const prevScale = graph.scale;
    if(thinLv) {
        // ウィンドウ幅
        const winWidth = Math.min(window.screen.width, window.innerWidth);
        // 許容プロット幅
        const plotScale = [ 1, 2, 3, 5, 6, 10, 15, 30 ];
        // 1～20
        const plotScale_tmp = Math.max(1, num.timeCap.value * graph.fps / Math.max(_.floor(winWidth, -2) * 3, 1500));
        _.forEach(plotScale, scale => {
            if(plotScale_tmp <= scale) {
                graph.scale = scale;
                return false;
            }
        });
    } else graph.scale = 1;
    // プロットタイミング
    if(prevScale !== graph.scale || term === "timeCap") {
        const timeScale = graph.fps / graph.scale;
        graph.plotTime = _.map(Array(num.timeCap.value * timeScale), (noUse, i) => (i + 1) / timeScale);
    }
    
    if(graph.sequent || term === "all" || term === "update")
        funcs.graph[document.getElementById("switchGraph").switchGraph.value](thinLv === 2, term, type, targetUnit);
}
// グラフデータ作成(個別)
funcs.graph.Individual = (isThinned, term, type, targetUnit) => {
    if(targetUnit) {
        const offset = type === "onSkillAct" ? 0 : lists.units.onSkillAct.list.length;
        const index = _.findIndex(lists.units[type].list, targetUnit);
        const unitName = targetUnit.unitInfo.unitName;
        const seriesIndex = index + offset;
        const data = funcs.graph.ClacHPchange[type](isThinned, [ targetUnit ])[unitName];
        switch(term) {
            case "unit":
                graph.chart.series.values[seriesIndex].data.setAll(data);
                return;
            case "add":
                const series = graph.chart.series.insertIndex(seriesIndex, am5xy.LineSeries.new(graph.root, {
                    name: unitName
                    , xAxis: graph.xAxis
                    , yAxis: graph.yAxis
                    , valueXField: "time"
                    , valueYField: "HP"
                    , legendValueText: `{valueY.formatNumber("###.00'%'")}`
                }));
                series.strokes.template.setAll({
                    opacity: 0.8
                    , strokeWidth: graph.strokeWidth
                    , strokeDasharray: graph.borderDash[type][2]
                });
                series.data.setAll(data);
                graph.legend.data.insertIndex(seriesIndex, series);
                const delta_h = 360.0 / lists.units[type].num.added;
                let h = 0.0;
                _.forEach(lists.units[type].list, (unit, i) => {
                    if(!("added" in unit)) return;
                    graph.chart.series.values[i + offset].set("stroke", `hsl(${h}, 100%, 50%)`);
                    h += delta_h;
                });
                return;
        }
    }
    const types = [ "onSkillAct", "onHit" ];
    const offset = { onSkillAct: 0, onHit: lists.units.onSkillAct.list.length}; 
    switch(term) {
        case "all":
            while(graph.chart.series.values.length) {
                graph.chart.series.removeIndex(0);
                graph.legend.itemContainers.removeIndex(0);
            }
            break;
        case "haste":
        case "hasteFixed":
        case "redMapEff":
        case "incAtkCooldown_enemy":
        case "incAtkCooldown_map":
            types.splice(0, 1);
            break;
    }
    _.forEach(types, type => {
        const data = funcs.graph.ClacHPchange[type](isThinned, lists.units[type].list);
        if(term === "all") {
            const division = [ "notEP", "EP", "added" ];
            const delta_h = {}, h = {};
            _.forEach(division, div => {
                delta_h[div] = 360.0 / lists.units[type].num[div];
                h[div] = 0.0;
            });
            _.forEach(lists.units[type].list, unit => {
                const divIndex =
                    "added" in unit ? 2
                    : _.includes(lists.evilPrincess, unit.unitInfo.unitClass.selected) ? 1
                    : 0;
                const div = division[divIndex];
                /*
                let rgba;
                const range = h[div] / 60;
                switch(Math.floor(range)) {
                    case 0: rgba = `#ff${(Math.round(range * 255)).toString(16).padStart(2, "0")}00`;          break;
                    case 1: rgba = `#${(Math.round((2 - range) * 255)).toString(16).padStart(2, "0")}ff00`;    break;
                    case 2: rgba = `#00ff${(Math.round((range - 2) * 255)).toString(16).padStart(2, "0")}`;    break;
                    case 3: rgba = `#00${(Math.round((4 - range) * 255)).toString(16).padStart(2, "0")}ff`;    break;
                    case 4: rgba = `#${(Math.round((range - 4) * 255)).toString(16).padStart(2, "0")}00ff`;    break;
                    case 5: rgba = `#ff00${(Math.round((6 - range) * 255)).toString(16).padStart(2, "0")}`;    break;
                }
                */
                const series = graph.chart.series.push(am5xy.LineSeries.new(graph.root, {
                    name: unit.unitInfo.unitName
                    , xAxis: graph.xAxis
                    , yAxis: graph.yAxis
                    , valueXField: "time"
                    , valueYField: "HP"
                    , stroke: `hsl(${h[div]}, 100%, 50%)`
                    , legendValueText: `{valueY.formatNumber("###.00'%'")}`
                }));
                series.strokes.template.setAll({
                    opacity: 0.8
                    , strokeWidth: graph.strokeWidth
                    , strokeDasharray: graph.borderDash[type][divIndex]
                });
                series.data.setAll(data[unit.unitInfo.unitName]);
                if(unit.hidden) series.hide();
                h[div] += delta_h[div];
            });
        } else {
            _.forEach(lists.units[type].list, (unit, index) => {
                const seriesIndex = index + offset[type];
                graph.chart.series.values[seriesIndex].data.setAll(data[unit.unitInfo.unitName]);
            });
        }
    });
    if(term === "all") graph.legend.data.setAll(graph.chart.series.values);
}

funcs.graph.ClacHPchange = {};
// HP遷移計算(スキル発動時発生型)
funcs.graph.ClacHPchange.onSkillAct = (isThinned, list) => {
    // 各ユニットの必要な所だけ抽出
    const data = {};
    _.forEach(list, unit => {
        const unitName = unit.unitInfo.unitName;
        const AW = unit.skill.selected;
        data[unitName] = {
            unitClass: unit.unitInfo.unitClass.selected
            , skill_arr: []
            , skill: null
            , state: "WT"   // 現在の状況 未配置(undep)/非スキル(WT/CT)/スキル中(skill)
            , left: 0       // 現在の状況の残り時間[f](30fps)
            , HP: num.maxHP.value
            , prevHP: num.maxHP.value
            , linkedHP: num.linkedHP.value
            , HPchanges: [ { time: 0, HP: 100 } ]  // 0f目
        };
        _.forEach(unit.skill.detail[AW], (obj, index) => {
            data[unitName].skill_arr.push({
                WT: Math.floor(obj.corr.WT * graph.fps)
                , CT: Math.floor(obj.corr.CT * graph.fps)
                , dur: Math.floor(obj.corr.dur * graph.fps)
                , next: obj.next
            });
            const skill = data[unitName].skill_arr[index];
            if("target" in obj) {
                skill.HPred = obj.corr.HPred / 100.0;
                if("simult" in obj) {
                    skill.simult = Math.min(num.simultHit.value, obj.simult);
                    skill.isAttracted = num.simultHit.use && skill.simult > 1;
                    skill.isLinked = num.linkedHP.use && skill.simult > 1;
                } else {
                    skill.isAttracted = false;
                    skill.isLinked = num.linkedHP.use;
                }
            }
            if(index === 0) {
                data[unitName].skill = skill;
                data[unitName].left = skill.WT;
            }
        });
    });
    
    const redep = num.redeployInterval.value * graph.fps;
    const DoT = num.DPS.value * graph.scale / graph.fps;
    const DoT_int = Math.trunc(DoT);    // 整数部分
    const DoT_dec = DoT - DoT_int;      // 小数部分
    let DoT_acc = 0.0;                  // 小数部分の蓄積
    let occurHPred = false;
    
    const SetHPchanges = (time, obj) => {
        if((!isThinned || occurHPred) && obj.HP !== obj.prevHP || !obj.HP && obj.prevHP) {
            const prevTime = time - graph.scale / graph.fps;
            if(_.last(obj.HPchanges).time === prevTime) {
                obj.HPchanges.push({ time: time, HP: obj.HP / num.maxHP.value * 100.0 });
            } else {
                obj.HPchanges.push(
                    { time: prevTime, HP: obj.prevHP / num.maxHP.value * 100.0 }
                    , { time: time, HP: obj.HP / num.maxHP.value * 100.0 }
                );
            }
            occurHPred = false;
        } else if(time >= num.timeCap.value)
            obj.HPchanges.push({ time: num.timeCap.value, HP: obj.HP / num.maxHP.value * 100.0 });
    };
    
    // グラフデータ生成
    _.forEach(graph.plotTime, time => {
        DoT_acc += DoT_dec;
        let dmgByDoT = DoT_int;
        if(Math.abs(DoT_acc) >= 1) {
            DoT_acc_int = Math.trunc(DoT_acc);
            dmgByDoT += DoT_acc_int;
            DoT_acc = DoT_acc - DoT_acc_int;
        }
        _.forEach(data, obj => {
            if(obj.HP === 0) {
                SetHPchanges(time, obj);
                return;
            }
            obj.left -= graph.scale;
            if(obj.left <= 0) {     // state終了
                const next = obj.skill_arr[obj.skill.next]; // object(obj.skill形)
                switch(obj.state) {
                    case "undep":
                        obj.state = "WT";
                        obj.left += obj.skill.WT;
                        break;
                    case "WT":
                    case "CT":
                        if("HPred" in obj.skill) {
                            let mul = funcs.graph.EvilPrincessMulti(obj.unitClass, obj.HP / num.maxHP.value);
                            if(obj.skill.isAttracted) {     // 引き付け(敵)
                                _.forEach(Array(obj.skill.simult), () =>
                                    obj.HP -= Math.max(1, Math.floor(obj.HP * obj.skill.HPred * mul))
                                );
                            } else {                        // 他
                                obj.HP -= Math.max(1, Math.floor(obj.HP * obj.skill.HPred * mul));
                                if(obj.skill.isLinked && obj.linkedHP > 0) {    // HPリンクあり
                                    mul = funcs.graph.EvilPrincessMulti(obj.unitClass, obj.linkedHP / num.linkedHP.value);
                                    const damage = Math.max(1, Math.floor(obj.linkedHP * obj.skill.HPred * mul));
                                    if("simult" in obj.skill) obj.HP -= damage * Math.min(num.linkedHP.value2, obj.skill.simult);
                                    else obj.HP -= damage * num.linkedHP.value2;
                                    obj.linkedHP -= damage;
                                }
                            }
                            occurHPred = true;
                        }
                        if(num.redeployInterval.use && (obj.skill.dur + obj.skill.CT > redep + next.WT)) {
                            // 再配置のほうが早い場合
                            obj.state = "undep";
                            obj.left += redep;
                            obj.skill = next;
                        } else {
                            obj.state = "skill";
                            obj.left += obj.skill.dur;
                        }
                        break;
                    case "skill":
                        obj.state = "CT";
                        obj.left += obj.skill.CT;
                        obj.skill = next;
                        break;
                }
            }
            if(obj.HP <= 0) {
                obj.HP = 0;
                SetHPchanges(time, obj);
                obj.prevHP = 0;
                return;
            }
            // DPS処理
            obj.HP = _.clamp(obj.HP - dmgByDoT, 0, num.maxHP.value);
            if(num.linkedHP.use && obj.linkedHP > 0) {
                const prevLinkedHP = obj.linkedHP;
                obj.linkedHP = _.clamp(obj.linkedHP - dmgByDoT, 0, num.linkedHP.value);
                if(DoT > 0) obj.HP = Math.max(0, obj.HP - (prevLinkedHP - obj.linkedHP) * num.linkedHP.value2);
            }
            SetHPchanges(time, obj);
            obj.prevHP = obj.HP;
        });
    });
    return _.reduce(data, (result, obj, unitName) => {
        result[unitName] = obj.HPchanges;
        return result;
    }, {});
}
// HP遷移計算(攻撃ヒット時発生型)
funcs.graph.ClacHPchange.onHit = (isThinned, list) => {
    // 各ユニットの必要な所だけ抽出
    const data = {};
    _.forEach(list, unit => {
        const unitName = unit.unitInfo.unitName;
        const atkInt = unit.unitInfo.atkInterval.corr;
        const AW = unit.skill.selected;
        data[unitName] = {
            unitClass: unit.unitInfo.unitClass.selected
            , atkInt: {     // *.atkInt.*[#]| 0: 攻撃発生まで, 1: 攻撃間隔
                /*
                notSkill: [
                    atkInt.notSkill.startup / 2
                    , Math.floor((atkInt.notSkill.startup + atkInt.notSkill.remain - 1) / 2) + Math.floor((atkInt.notSkill.cooldown - 1) / 2) + 2
                ]
                ,
                */
                skill: [
                    atkInt[AW].startup / 2
                    , Math.floor((atkInt[AW].startup + atkInt[AW].remain - 1) / 2) + Math.floor((atkInt[AW].cooldown - 1) / 2) + 2
                ]
            }
            , skill_arr: []
            , skill: null
            , state: "WT"   // 現在の状況 未配置(undep)/非スキル(WT/CT)/スキル中(skill)
            , left: 0       // 現在の状況の残り時間[f](30fps)
            , HP: num.maxHP.value
            , prevHP: num.maxHP.value
            , linkedHP: num.linkedHP.value
            , HPchanges: [ { time: 0, HP: 100 } ]  // 0f目
        };
        _.forEach(unit.skill.detail[AW], (obj, index) => {
            data[unitName].skill_arr.push({
                WT: Math.floor(obj.corr.WT * graph.fps)
                , CT: Math.floor(obj.corr.CT * graph.fps)
                , dur: Math.floor(obj.corr.dur * graph.fps)
                , next: obj.next
            });
            const skill = data[unitName].skill_arr[index];
            if("target" in obj) {
                skill.HPred = obj.corr.HPred / 100.0;
                if("simult" in obj) {
                    skill.simult = Math.min(num.simultHit.value, obj.simult);
                    skill.isAttracted = num.simultHit.use && skill.simult > 1;
                    skill.isLinked = num.linkedHP.use && skill.simult > 1;
                } else {
                    skill.isAttracted = false;
                    skill.isLinked = num.linkedHP.use;
                }
            }
            if(index === 0) {
                data[unitName].skill = skill;
                data[unitName].left = skill.WT;
            }
        });
    });
    
    const redep = num.redeployInterval.value * graph.fps;
    const DoT = num.DPS.value * graph.scale / graph.fps;
    const DoT_int = Math.trunc(DoT);    // 整数部分
    const DoT_dec = DoT - DoT_int;      // 小数部分
    let DoT_acc = 0.0;                  // 小数部分の蓄積
    let occurHPred = false;
    
    const SetHPchanges = (time, obj) => {
        if((!isThinned || occurHPred) && obj.HP !== obj.prevHP || !obj.HP && obj.prevHP) {
            const prevTime = time - graph.scale / graph.fps;
            if(_.last(obj.HPchanges).time === prevTime) {
                obj.HPchanges.push({ time: time, HP: obj.HP / num.maxHP.value * 100.0 });
            } else {
                obj.HPchanges.push(
                    { time: prevTime, HP: obj.prevHP / num.maxHP.value * 100.0 }
                    , { time: time, HP: obj.HP / num.maxHP.value * 100.0 }
                );
            }
            occurHPred = false;
        } else if(time >= num.timeCap.value)
            obj.HPchanges.push({ time: num.timeCap.value, HP: obj.HP / num.maxHP.value * 100.0 });
    }
    
    const ReduceHP = (obj, hit) => {
        if(hit < 1) return;
        
        let mul = 1.0;
        if(obj.skill.isAttracted) {     // 引き付け(敵)
            _.forEach(Array(hit), () => {
                //mul = funcs.graph.EvilPrincessMulti(obj.unitClass, obj.HP / num.maxHP.value);
                _.forEach(Array(obj.skill.simult), () => 
                    obj.HP -= Math.max(1, Math.floor(obj.HP * obj.skill.HPred * mul))
                );
            });
        } else {                        // 他
            _.forEach(Array(hit), () => {
                //mul = funcs.graph.EvilPrincessMulti(obj.unitClass, obj.HP / num.maxHP.value);
                obj.HP -= Math.max(1, Math.floor(obj.HP * obj.skill.HPred * mul));
            });
            if(obj.skill.isLinked && obj.linkedHP > 0) {   // HPリンクあり
                _.forEach(Array(hit), () => {
                    //mul = funcs.graph.EvilPrincessMulti(obj.unitClass, obj.linkedHP / num.linkedHP.value);
                    const damage = Math.max(1, Math.floor(obj.linkedHP * obj.skill.HPred * mul));
                    if("simult" in obj.skill) obj.HP -= damage * Math.min(num.linkedHP.value2, obj.skill.simult);
                    else obj.HP -= damage * num.linkedHP.value2;
                    obj.linkedHP -= damage;
                });
            }
        }
        occurHPred = true;
    }
    // グラフデータ生成
    _.forEach(graph.plotTime, time => {
        DoT_acc += DoT_dec;
        let dmgByDoT = DoT_int;
        if(Math.abs(DoT_acc) >= 1) {
            DoT_acc_int = Math.trunc(DoT_acc);
            dmgByDoT += DoT_acc_int;
            DoT_acc = DoT_acc - DoT_acc_int;
        }
        _.forEach(data, obj => {
            if(obj.HP === 0) {
                SetHPchanges(time, obj);
                return;
            }
            obj.left -= graph.scale;
            if("HPred" in obj.skill && obj.state === "skill") {   // スキル中hit
                if(obj.left > 0) {
                    const atkTime = obj.skill.dur - obj.left - obj.atkInt.skill[0];
                    // 前回プロット時からのヒット数 > fフレームまでの攻撃回数: Math.floor(f / obj.atkInt.skill[1]) + 1
                    const hit = Math.floor(atkTime / obj.atkInt.skill[1])
                        - Math.floor((atkTime - graph.scale) / obj.atkInt.skill[1]);
                    ReduceHP(obj, hit);
                } else {
                    const atkTime = obj.skill.dur - obj.atkInt.skill[0];
                    // 前回プロット時からのヒット数
                    const hit = Math.floor(atkTime / obj.atkInt.skill[1])
                        - Math.floor((atkTime - obj.left - graph.scale) / obj.atkInt.skill[1]);
                    ReduceHP(obj, hit);
                    const next = obj.skill_arr[obj.skill.next]; // object(obj.skill形)
                    if(num.redeployInterval.use && (obj.skill.CT > redep + next.WT)) {
                        // 再配置のほうが早い場合
                        obj.state = "undep";
                        obj.left += redep;
                    } else {
                        obj.state = "CT";
                        obj.left += obj.skill.CT;
                    }
                    obj.skill = next;
                }
            } else if(obj.left <= 0) {     // state終了
                const next = obj.skill_arr[obj.skill.next]; // object(obj.skill形)
                switch(obj.state) {
                    case "undep":
                        obj.state = "WT";
                        obj.left += obj.skill.WT;
                        break;
                    case "WT":
                    case "CT":
                        if("HPred" in obj.skill) {
                            const atkTime = -obj.left - obj.atkInt.skill[0];
                            if(atkTime >= 0) {
                                // 前回プロット時からのヒット数
                                const hit = Math.floor(atkTime / obj.atkInt.skill[1]) + 1;
                                ReduceHP(obj, hit);
                            }
                            obj.state = "skill";
                            obj.left += obj.skill.dur;
                        } else {
                            if(num.redeployInterval.use && (obj.skill.dur + obj.skill.CT > redep + next.WT)) {
                                // 再配置のほうが早い場合
                                obj.state = "undep";
                                obj.left += redep;
                                obj.skill = next;
                            } else {
                                obj.state = "skill";
                                obj.left += obj.skill.dur;
                            }
                        }
                        break;
                    case "skill":
                        obj.state = "CT";
                        obj.left += obj.skill.CT;
                        obj.skill = next;
                        break;
                }
            }
            if(obj.HP <= 0) {
                obj.HP = 0;
                SetHPchanges(time, obj);
                obj.prevHP = 0;
                return;
            }
            // DPS処理
            obj.HP = _.clamp(obj.HP - dmgByDoT, 0, num.maxHP.value);
            if(num.linkedHP.use && obj.linkedHP > 0) {
                const prevLinkedHP = obj.linkedHP;
                obj.linkedHP = _.clamp(obj.linkedHP - dmgByDoT, 0, num.linkedHP.value);
                if(DoT > 0) obj.HP = Math.max(0, obj.HP - (prevLinkedHP - obj.linkedHP) * num.linkedHP.value2);
            }
            SetHPchanges(time, obj);
            obj.prevHP = obj.HP;
        });
    });
    return _.reduce(data, (result, obj, unitName) => {
        result[unitName] = obj.HPchanges;
        return result;
    }, {});
}

// イビルプリンセス系クラスの倍率
funcs.graph.EvilPrincessMulti = (unitClass, HPrate) => {
    if(_.includes(lists.evilPrincess, unitClass)) {
        if(unitClass === "デスブリンガー") {
            if(HPrate < 0.31) return 2.3;
            if(HPrate < 0.51) return 2.0;
            if(HPrate < 0.71) return 1.7;
            if(HPrate < 0.91) return 1.4;
        } else {
            if(HPrate < 0.31) return 2.0;
            if(HPrate < 0.51) return 1.7;
            if(HPrate < 0.71) return 1.4;
            if(HPrate < 0.91) return 1.2;
        }
    }
    return 1.0;
}

// グラフ作成
funcs.graph.SetChart = () => {
    if(graph.root) return;
    graph.root = am5.Root.new("chart");
    graph.root.setThemes([ am5themes_Animated.new(graph.root) ]);
    
    graph.exporting = am5plugins_exporting.Exporting.new(graph.root, {
        menu: am5plugins_exporting.ExportingMenu.new(graph.root, {})
    });
    
    graph.chart = graph.root.container.children.push(am5xy.XYChart.new(graph.root, {
        layout: graph.root.horizontalLayout
    }));
    graph.chart.plotContainer.set("cursorOverStyle", "crosshair");  // カーソル十字
    // ctrl + ホイールで拡大・縮小
    graph.chart.plotContainer.events.on("wheel", e => {
        if (e.originalEvent.ctrlKey) {
            e.originalEvent.preventDefault();
            graph.chart.set("wheelX", "panX");
            graph.chart.set("wheelY", "zoomX");
        } else {
            graph.chart.set("wheelX", "none");
            graph.chart.set("wheelY", "none");
        }
    });
    graph.chart.set("scrollbarX", am5.Scrollbar.new(graph.root, {
        orientation: "horizontal"
    }));
    // 横軸
    graph.xAxis = graph.chart.xAxes.push(am5xy.ValueAxis.new(graph.root, {
        strictMinMaxSelection: true
        , numberFormat: "####.#'秒'"
        , renderer: am5xy.AxisRendererX.new(graph.root, {})
        , tooltip: am5.Tooltip.new(graph.root, {
            exportable: true
        })
        , extraTooltipPrecision: 1
    }));
    graph.xAxis.children.push((am5.Label.new(graph.root, {
        text: "時間"
        , x: am5.p50
        , centerX: am5.p50
    })));
    // 縦軸
    graph.yAxis = graph.chart.yAxes.push(am5xy.ValueAxis.new(graph.root, {
        min: 0
        , max: 100
        , numberFormat: "###.#'%'"
        , renderer: am5xy.AxisRendererY.new(graph.root, {})
        , tooltip: am5.Tooltip.new(graph.root, {
            exportable: true
        })
        , extraTooltipPrecision: 1
    }));
    graph.yAxis.children.unshift((am5.Label.new(graph.root, {
        text: "HP"
        , rotation: -90
        , y: am5.p50
        , centerX: am5.p50
    })));
    
    graph.cursor = graph.chart.set("cursor", am5xy.XYCursor.new(graph.root, {
        behavior: "none"
        , exportable: true
    }));
    graph.cursor.lineX.setAll({
        strokeWidth: 1.5
        , strokeDasharray: []
    });
    graph.cursor.lineY.setAll({
        strokeWidth: 1.5
        , strokeDasharray: []
    });
    // クリックした位置にカーソル固定
    graph.chart.plotContainer.events.on("click", () => {
        graph.clicked.posX = graph.cursor.getPrivate("positionX");
        graph.clicked.posY = graph.cursor.getPrivate("positionY");
        graph.cursor.setAll({
            /*
            positionX: graph.clicked.posX
            , positionY: graph.clicked.posY
            */
            alwaysShow: true
        });
    });
    // カーソル固定解除
    graph.chart.plotContainer.events.on("dblclick", () => {
        graph.clicked.posX = undefined;
        graph.clicked.posY = undefined;
        graph.cursor.setAll({
            positionX: undefined
            , positionY: undefined
            , alwaysShow: false
        });
    });
    // カーソルがグラフ上にある時は追従
    graph.chart.plotContainer.events.on("pointerover", () => {
        graph.cursor.setAll({
            positionX: undefined
            , positionY: undefined
        });
    });
    // カーソルがグラフから外れると固定有効に
    graph.chart.plotContainer.events.on("pointerout", () => {
        graph.cursor.setAll({
            positionX: graph.clicked.posX
            , positionY: graph.clicked.posY
        });
    });
    /*
    // データ補間(凡例の値を書き換えられないものか…)
    graph.cursor.events.on("cursormoved", e => {
        const posX = e.target.getPrivate("positionX");
        const time = graph.yAxis.positionToValue(posX) * num.timeCap.value / 100.0;
        graph.chart.series.each((chartSeries, i) => {
            const unitName = chartSeries.get("name");
            const between = [ null, { time: 0, HP: 100 } ];
            _.forEach(chartSeries.dataItems, item => {
                between[0] = between[1];
                between[1] = item.dataContext;
                if(between[1].time >= time) return false;
            });
            const HP = (between[1].HP - between[0].HP) / (between[1].time - between[0].time) * (time - between[0].time) + between[0].HP;
            //if(!i) console.log(chartSeries.get("legendDataItem").get("valueLabel").dataItem.dataContext.HP);
            chartSeries.get("legendDataItem").get("valueLabel").dataItem.dataContext.HP = HP;
        });
    });
    */
    
    graph.legend = graph.chart.children.push(am5.Legend.new(graph.root, {
        width: 270
        , paddingTop: 30
        , paddingLeft: 15
        , verticalScrollbar: am5.Scrollbar.new(graph.root, {
            orientation: "vertical"
        })
    }));
    graph.legend.itemContainers.template.events.on("click", e => {
        const unitName = e.target.dataItem.dataContext.get("name");
        let unit = _.find(lists.units.onSkillAct.list, { unitInfo: { unitName: unitName } });
        if(unit) unit.hidden = !unit.hidden;
        else {
            unit = _.find(lists.units.onHit.list, { unitInfo: { unitName: unitName } });
            if(unit) unit.hidden = !unit.hidden;
        }
    });
    // マウスオーバー中の凡例のデータのみ強調
    graph.legend.itemContainers.template.events.on("pointerover", e => {
        const series = e.target.dataItem.dataContext;
        graph.chart.series.each(chartSeries => {
            if(chartSeries.uid !== series.uid) {
                chartSeries.strokes.template.setAll({
                    opacity: 0.3
                    , strokeWidth: 1
                });
            } else {
                chartSeries.strokes.template.setAll({
                    opacity: 1
                    , strokeWidth: 4
                });
            }
        });
    });
    // 強調解除
    graph.legend.itemContainers.template.events.on("pointerout", () => {
        graph.chart.series.each(chartSeries => {
            chartSeries.strokes.template.setAll({
                opacity: 0.8
                , strokeWidth: graph.strokeWidth
            });
        });
    });
    graph.legend.labels.template.setAll({
        width: 200
    });
    graph.legend.markers.template.setAll({
        width: 30
    });
    graph.legend.valueLabels.template.setAll({
        width: am5.p100
        , textAlign: "right"
    });
    
    // レスポンシブ設定
    graph.responsive = am5themes_Responsive.newEmpty(graph.root);
    graph.responsive.addRule({
        relevant: am5themes_Responsive.widthXL
        , applying: () => {
            graph.chart.set("layout", graph.root.verticalLayout);
            graph.legend.setAll({
                width: null
                , paddingTop: 0
                , paddingLeft: 0
                , verticalScrollbar: null
            });
            const height = Math.min(window.screen.height, window.innerHeight) / 1.8;
            graph.root.dom.style.height = `${height + graph.legend.height()}px`;
            graph.chart.seriesContainer.set("height", height);
        }
        , removing: () => {
            graph.chart.set("layout", graph.root.horizontalLayout);
            graph.legend.setAll({
                width: 270
                , paddingTop: 30
                , paddingLeft: 15
                , verticalScrollbar: am5.Scrollbar.new(graph.root, {
                    orientation: "vertical"
                })
            });
            const height = Math.min(window.screen.height, window.innerHeight);
            graph.root.dom.style.height = "100vh";
            graph.chart.seriesContainer.set("height", height);
        }
    });
    graph.root.setThemes([ am5themes_Animated.new(graph.root), graph.responsive ]);
    
    funcs.graph.SetGraphData("init");
}

// グラフライン表示/非表示
funcs.graph.HideGraphline = (thisElem, type) => {
    if(!(type in lists.units)) return;
    
    thisElem.parentElement.innerHTML =`
        <input type="checkbox"${thisElem.checked ? " checked" : ""} onclick="funcs.graph.HideGraphline(this, '${type}')">
        <span>${thisElem.checked ? "全部非表示" : "全部表示"}</span>
    `;
    _.forEach(lists.units[type].list, unit => { unit.hidden = thisElem.checked });
    if(document.getElementById("switchGraph").switchGraph.value !== "Individual") return;
    const n_onSkillAct = lists.units.onSkillAct.list.length;
    const isOnSkillAct = type === "onSkillAct";
    graph.chart.series.each((chartSeries, i) => {
        if(i < n_onSkillAct) {
            if(isOnSkillAct) {
                if(thisElem.checked) chartSeries.hide();
                else chartSeries.appear();
            }
        } else {
            if(isOnSkillAct) return false;
            if(thisElem.checked) chartSeries.hide();
            else chartSeries.appear();
        }
    });
}

// グラフ切り替え
funcs.graph.SwitchGraph = type => {
    const flowLogBtn = document.getElementsByClassName("flowLogBtn");
    const isIndividual = type === "Individual";
    _.forEach(flowLogBtn, btn => { btn.disabled = isIndividual });
    funcs.graph.SetGraphData("all");
}