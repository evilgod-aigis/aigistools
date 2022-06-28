funcs.graph = {};
const graph = {
    canvas: null, plotNum: 0, pointHitRadius: 0,
    hidden: { onSkillAct: false, onHit: false },
    sortGraphTooltip: false
}

//グラフデータ作成
funcs.graph.SetGraphData = (updateTable = [ false, false ]) => {
    funcs.unitsData.CountUnits();
    const execSetters = updateTable[0] || updateTable[1];
    const evilPrincess = [
        "ちびイビルプリンセス",
        "ちびイビルクイーン",
        "イビルプリンセス",
        "イビルクイーン",
        "イビルシーカー",
        "デスブリンガー",
    ];
    const borderDash = [
        [
            [ 15, 3 ],
            [ 10, 3, 3, 3 ],
            [ 8, 3, 3, 3, 3, 3 ]
        ],
        [
            [],
            [ 20, 2, 2, 2 ],
            [ 15, 2, 2, 2, 2, 2 ]
        ]
    ];
    //ウィンドウ幅
    const winWidth = Math.min(window.screen.width, window.innerWidth);
    //プロット数
    graph.plotNum = _.clamp(_.floor(winWidth, -2) * 3, 1500, num.timeCap.value * 30);
    graph.pointHitRadius = _.clamp(_.floor(0.08 + 100 / graph.plotNum, 2), 0.1, 1.0);
    graph.canvas.data.datasets.splice(0);
    graph.canvas.data.labels.splice(0);
    [...new Array(graph.plotNum + 1)].forEach((_, i) =>
        graph.canvas.data.labels.push(i * num.timeCap.value / graph.plotNum)
    );
    [ "onSkillAct", "onHit" ].forEach((type, index_type) => {
        let i_notEP = 0;
        let i_EP = 0;
        let i_added = 0;
        let h;
        let index_bd;
        lists.units[type].list.forEach(unit => {
            if(execSetters) {
                funcs.unitsData.SetFirstTime(unit);
                funcs.unitsData.SetInterval(unit, type);
                funcs.unitsData.SetAtkInterval(unit);
                funcs.unitsData.SetHPred(unit);
            }
            
            if(unit.added) {
                //追加分
                h = 360 * i_added / lists.units[type].num.added;
                index_bd = 2;
                ++i_added;
            } else if(_.includes(evilPrincess, unit.unitInfo.unitClass.selected)) {
                //イビルプリンセス系
                h = 360 * i_EP / lists.units[type].num.EP;
                index_bd = 1;
                ++i_EP;
            } else {
                //非イビルプリンセス系
                h = 360 * i_notEP / lists.units[type].num.notEP;
                index_bd = 0;
                ++i_notEP;
            }
            graph.canvas.data.datasets.push({
                label: unit.unitInfo.unitName,
                data: funcs.graph.ClacHPchange[type](unit),
                borderColor: `hsla(${h}, 100%, 50%, 0.7)`,
                backgroundColor: `hsla(${h}, 100%, 50%, 0.7)`,
                borderDash: borderDash[index_type][index_bd],
                pointRadius: 0,
                pointHitRadius: graph.pointHitRadius,
                hidden: graph.hidden[type]
            });
        });
        if(updateTable[index_type]) {
            funcs.createHTML.UnitsTable(type);
        }
    });
    graph.canvas.update();
}

funcs.graph.ClacHPchange = {};
//HP遷移計算(スキル発動時発生型)
funcs.graph.ClacHPchange.onSkillAct = unit => {
    //const unitName = unit.unitInfo.unitName;
    const AW = unit.skill.awaken.selected;
    const index = [ "通常", "覚醒" ].indexOf(AW);
    const target = unit.skill.target[index];
    const mulByNum = unit.skill.mulByNum[index];    //array
    const lastIndex_mulByNum = mulByNum.length - 1;
    const HPred = unit.skill.HPred[index] / 100;
    const deltaTime = num.timeCap.value / graph.plotNum;
    let HP = num.maxHP.value;
    let linkedHP = num.linkedHP.value;
    let simultHit = num.simultHit.value;
    if(Number.isInteger(parseInt(target))) {
        simultHit = Math.min(simultHit, parseInt(target));
    }
    const isAttracted = num.simultHit.use && (target === "射程内" || simultHit > 1);
    const isLinked = num.linkedHP.use && (target === "全員" || target === "全敵" || target === "射程内" || simultHit > 1);
    const HPchanges = [];
    const mul = [ 1, 1 ];
    let count = 0;
    let nextTime = unit.skill.firstTime;
    const DPdT = num.DPS.value * deltaTime;
    //グラフデータ作成
    for(let time = 0; time <= num.timeCap.value; time += deltaTime) {
        if(HP === 0) {
            HPchanges.push(0);
            continue;
        }
        //HP減少発生時の処理
        if(time >= nextTime && HPred > 0) {
            mul[0] = funcs.graph.EvilPrincessMulti(unit, HP / num.maxHP.value * 100);
            mul[0] *= mulByNum[Math.min(count, lastIndex_mulByNum)];
            if(num.linkedHP.use) {
                mul[1] = funcs.graph.EvilPrincessMulti(unit, linkedHP / num.linkedHP.value * 100);
                mul[1] *= mulByNum[Math.min(count, lastIndex_mulByNum)];
            }
            if(isAttracted) {   //引き付け(敵)
                [...new Array(simultHit)].forEach(() =>
                    HP -= Math.max(1, Math.floor(HP * HPred * mul[0]))
                );
            } else {    //他
                HP -= Math.max(1, Math.floor(HP * HPred * mul[0]));
                if(isLinked && linkedHP > 0) {   //HPリンクあり
                    const damage = Math.max(1, Math.floor(linkedHP * HPred * mul[1]));
                    HP -= damage;
                    linkedHP -= damage;
                }
            }
            count++;
            nextTime += unit.skill.interval;
        }
        if(HP <= 0) {
            HP = 0;
            HPchanges.push(0);
        } else {
            HPchanges.push(HP / num.maxHP.value * 100);
            HP = _.clamp(HP - DPdT, 0, num.maxHP.value);
            if(num.linkedHP.use && linkedHP > 0) {
                const postLinkedHP = linkedHP;
                linkedHP = _.clamp(linkedHP - DPdT, 0, num.linkedHP.value);
                if(DPdT > 0) {
                    HP = Math.max(0, HP - postLinkedHP + linkedHP);
                }
            }
        }
    }
    return _.clone(HPchanges);
}
//HP遷移計算(攻撃ヒット時発生型)
funcs.graph.ClacHPchange.onHit = unit => {
    const extend = funcs.unitsData.GetRate(unit, "skillExtend");
    //const unitName = unit.unitInfo.unitName;
    const AW = unit.skill.awaken.selected;
    const index = [ "通常", "覚醒" ].indexOf(AW);
    const trigger = unit.skill.trigger[index];
    const target = unit.skill.target[index];
    const mulByNum = unit.skill.mulByNum[index];    //array
    const lastIndex_mulByNum = mulByNum.length - 1;
    const HPred = unit.skill.HPred[index] / 100;
    const deltaTime = num.timeCap.value / graph.plotNum;
    let HP = num.maxHP.value;
    let linkedHP = num.linkedHP.value;
    let simultHit = num.simultHit.value;
    if(Number.isInteger(parseInt(target))) {
        simultHit = Math.min(simultHit, parseInt(target));
    }
    const isAttracted = num.simultHit.use && (target === "射程内" || simultHit > 1);
    const isLinked = num.linkedHP.use && (target === "射程内" || simultHit > 1);
    const HPchanges = [];
    const mul = [ 1, 1 ];
    const dur = unit.skill.dur[trigger === "スキル中hitB" ? "B" : "A"] * (1 + extend);
    let count = 0;
    const nextTime = [ unit.skill.firstTime, unit.skill.firstTime + dur ];
    let isActive = false;
    let skillTimeLapse = 0;
    let hit = 0;
    //const atkStartup = unit.unitInfo.atkInterval[0].startup;
    //const atkRemain = unit.unitInfo.atkInterval[0].remain;
    //const atkMotion = Math.floor((atkStartup + atkRemain - 1) / 2);
    //const atkCooldown = Math.floor((unit.unitInfo.atkInterval[0].cooldown - 1) / 2);
    //const atkInterval = atkMotion + atkCooldown + 2;
    const atkStartupSkill = unit.unitInfo.atkInterval[1].startup;
    const atkRemainSkill = unit.unitInfo.atkInterval[1].remain;
    const atkMotionSkill = Math.floor((atkStartupSkill + atkRemainSkill - 1) / 2);
    const atkCooldownSkill = Math.floor((unit.unitInfo.atkInterval[1].cooldown - 1) / 2);
    const atkIntervalSkill = atkMotionSkill + atkCooldownSkill + 2;
    const DPdT = num.DPS.value * deltaTime;
    const ReduceHP = hit => {
        if(hit < 1) return;
        
        if(isAttracted) {  //引き付け(敵)
            [...new Array(hit * simultHit)].forEach(() =>
                HP -= Math.max(1, Math.floor(HP * HPred * mul[0]))
            );
        } else {    //他
            [...new Array(hit)].forEach(() =>
                HP -= Math.max(1, Math.floor(HP * HPred * mul[0]))
            );
            if(isLinked && linkedHP > 0) {   //HPリンクあり
                [...new Array(hit)].forEach(() => {
                    const damage = Math.max(1, Math.floor(linkedHP * HPred * mul[1]));
                    HP -= damage;
                    linkedHP -= damage;
                });
            }
        }
    }
    //グラフデータ作成
    for(let time = 0; time <= num.timeCap.value; time += deltaTime) {
        if(HP === 0) {
            HPchanges.push(0);
            continue;
        }
        if(HPred > 0) {
            if(time >= nextTime[0] && time <= nextTime[1]) {    //スキル中
                skillTimeLapse += deltaTime;
                if(!isActive) {     //スキル発動時に一度だけ処理
                    isActive = true;
                    skillTimeLapse = time - nextTime[0];
                }
                if(trigger !== "非スキル中hit") {
                    mul[0] = funcs.graph.EvilPrincessMulti(unit, HP / num.maxHP.value * 100);
                    mul[0] *= mulByNum[Math.min(count, lastIndex_mulByNum)];
                    if(num.linkedHP.use) {
                        mul[1] = funcs.graph.EvilPrincessMulti(unit, linkedHP / num.linkedHP.value * 100);
                        mul[1] *= mulByNum[Math.min(count, lastIndex_mulByNum)];
                    }
                    //前回プロット時からのヒット数
                    hit = Math.floor((skillTimeLapse * 30 - atkStartupSkill / 2) / atkIntervalSkill + 1)
                        - Math.floor(((skillTimeLapse - deltaTime) * 30 - atkStartupSkill / 2) / atkIntervalSkill + 1);
                    ReduceHP(hit);
                }
            } else {    //非スキル中
                if(trigger !== "スキル中hit") {
                    //非スキル中も割合ダメージを生じるユニット用
                }
                if(isActive) {     //スキル終了時に一度だけ処理
                    count++;
                    nextTime[0] += unit.skill.interval;
                    nextTime[1] += unit.skill.interval;
                    isActive = false;
                    if(trigger !== "非スキル中hit") {
                        mul[0] = funcs.graph.EvilPrincessMulti(unit, HP / num.maxHP.value * 100);
                        mul[0] *= mulByNum[Math.min(count, lastIndex_mulByNum)];
                        if(num.linkedHP.use) {
                            mul[1] = funcs.graph.EvilPrincessMulti(unit, linkedHP / num.linkedHP.value * 100);
                            mul[1] *= mulByNum[Math.min(count, lastIndex_mulByNum)];
                        }
                        //最小プロット間隔が1/30秒ではない時にはみ出す分の計算
                        hit = Math.floor((dur * 30 - atkStartupSkill / 2) / atkIntervalSkill + 1)
                            - Math.floor((skillTimeLapse * 30 - atkStartupSkill / 2) / atkIntervalSkill + 1);
                        ReduceHP(hit);
                    }
                }
            }
        }
        if(HP <= 0) {
            HP = 0;
            HPchanges.push(0);
        } else {
            HPchanges.push(HP / num.maxHP.value * 100);
            HP = _.clamp(HP - DPdT, 0, num.maxHP.value);
            if(num.linkedHP.use && linkedHP > 0) {
                const postLinkedHP = linkedHP;
                linkedHP = _.clamp(linkedHP - DPdT, 0, num.linkedHP.value);
                if(DPdT > 0) {
                    HP = Math.max(0, HP - postLinkedHP + linkedHP);
                }
            }
        }
    }
    return _.clone(HPchanges);
}

//イビルプリンセス系クラスの倍率
funcs.graph.EvilPrincessMulti = (unit, HPratio) => {
    switch(unit.unitInfo.unitClass.selected) {
        case "ちびイビルプリンセス":
        case "ちびイビルクイーン":
        case "イビルプリンセス":
        case "イビルクイーン":
        case "イビルシーカー":
            if(HPratio < 31) {
                return 2.0;
            } else if(HPratio < 51) {
                return 1.7;
            } else if(HPratio < 71) {
                return 1.4;
            } else if(HPratio < 91) {
                return 1.2;
            } else {
                return 1.0;
            }
        case "デスブリンガー":
            if(HPratio < 31) {
                return 2.3;
            } else if(HPratio < 51) {
                return 2.0;
            } else if(HPratio < 71) {
                return 1.7;
            } else if(HPratio < 91) {
                return 1.4;
            } else {
                return 1.0;
            }
        default:
            return 1.0;
    }
}

//グラフ作成
funcs.graph.Chart = () => {
    //ウィンドウ幅
    const winWidth = Math.min(window.screen.width, window.innerWidth);
    //グラフの枠線の色
    const xAxisColor = [];
    const yAxisColor = [];
    for(let i = 0; i <= 10; i++) {
        if(i === 0 || i === 10) {
            xAxisColor.push("black");
            yAxisColor.push("black");
        } else if(i === 5 && winWidth <= 500) {
            xAxisColor.push("black");
            yAxisColor.push("rgba(0, 0, 0, 0.1)")
        } else {
            xAxisColor.push("rgba(0, 0, 0, 0.1)")
            yAxisColor.push("rgba(0, 0, 0, 0.1)")
        }
    }
    //ツールチップの位置
    Chart.Tooltip.positioners.custom = function(elems, pos) {
        if (!elems.length) {
            return false;
        }
        const area = elems[0]._chart.chartArea;
        if(pos.x < (area.left + area.right) / 2) {
            return {
                x: area.right - 120,
                y: area.bottom
            };
        } else {
            return {
                x: 200,
                y: area.bottom
            };
        }
    };
    //グラフ作成
    const ctx = document.getElementById("canvas").getContext("2d");
    graph.canvas = new Chart(ctx, {
        type: "line",
        data: {
            labels: [],
            datasets: []
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            elements: {
                line: {
                    borderWidth: 3,
                    hoverBorderWidth: 5,
                    tension: 0, 
                    fill: false,
                    steppedLine: true
                }
            },
            legend: {       //凡例
                position: winWidth > 800 ? "right" : "bottom",
                labels: {
                    fontSize: winWidth > 1000 ? 16 : 10,
                    fontColor: "black"
                }
            },
            tooltips: {
                mode: "interpolate",
                intersect: false,
                position: "custom",
                titleFontFamily: "monospace, monospace",
                titleFontSize: 16,
                bodyFontFamily: "monospace, monospace",
                bodyFontSize: 14,
                custom: function(tooltipModel) {
                    tooltipModel.caretSize = 0;
                },
                callbacks: {
                    title: function (tooltipItem, data) {
                        return `${tooltipItem[0].xLabel.toFixed(2)}秒`;
                    },
                    label: function (tooltipItem, data) {
                        const tooltipLabel = [];
                        const added = [];
                        if(!_.includes(added, data.datasets[tooltipItem.datasetIndex].label)) {
                            tooltipLabel.push(
                                data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index].toFixed(2).toString().padStart(6, " ")
                                + "%: "
                                + data.datasets[tooltipItem.datasetIndex].label
                            );
                            added.push(data.datasets[tooltipItem.datasetIndex].label);
                        }
                        return tooltipLabel;
                    }
                },
                itemSort: function(item0, item1) {
                    return graph.sortGraphTooltip ? item0.yLabel - item1.yLabel : 0;
                }
            },
            scales: {
                xAxes: [ {
                    id: "x-axis",
                    scaleLabel: {
                        display: true,
                        fontSize: 16,
                        fontColor: "black",
                        labelString: "時間",
                    },
                    gridLines: {
                        color: xAxisColor,
                        drawTicks: false,
                    },
                    ticks: {
                        minRotation: 0,
                        maxRotation: 0,
                        autoSkip: true,
                        maxTicksLimit: winWidth > 560 ? 10 : 5,
                        fontSize: 14,
                        fontColor: "black",
                        padding: 10,
                        callback: function(value) {
                            return value + "秒";
                        }
                    }
                } ],
                yAxes: [ {
                    id: "y-axis",
                    scaleLabel: {
                        display: true,
                        fontSize: 16,
                        fontColor: "black",
                        labelString: "HP"
                    },
                    gridLines: {
                        color: yAxisColor,
                        drawTicks: false,
                    },
                    ticks: {
                        min: 0,
                        max: 100,
                        stepSize: 10,
                        fontSize: 14,
                        fontColor: "black",
                        padding: 10,
                        callback: function(value) {
                            return value + "%";
                        }
                    }
                } ]
            },
            plugins: {
                crosshair: {
                    line: {
                        color: "rgba(0, 0, 0, 1)",
                        width: 1
                    },
                    sync: {
                        enabled: false,
                        group: 1,
                        suppressTooltips: true
                    },
                    zoom: {
                        enabled: false
                    }
                }
            },
            animation: {
                duration: 0
            },
            responsiveAnimationDuration: 0,
        }
    });
    //グラフ保存時に背景を白にする
    Chart.plugins.register({
        beforeDraw: function(c){
            const ctx = c.chart.ctx;
            ctx.fillStyle = "white";
            ctx.fillRect(0, 0, c.chart.width, c.chart.height);
        }
    });
}

//グラフライン表示/非表示
funcs.graph.HideGraphline = (thisElem, type) => {
    if(!(type in lists.units)) return;
    
    graph.hidden[type] = thisElem.checked;
    const n_onSkillAct = lists.units.onSkillAct.list.length;
    const isOnSkillAct = type === "onSkillAct";
    _.forEach(graph.canvas.data.datasets, (elem, i) => {
        if(i < n_onSkillAct) {
            if(isOnSkillAct) {
                elem.hidden = thisElem.checked;
            }
        } else {
            if(isOnSkillAct) {
                return false;
            } else {
                elem.hidden = thisElem.checked;
            }
        }
    });
    
    thisElem.parentElement.innerHTML =`
        <input type="checkbox"${thisElem.checked ? " checked" : ""} onclick="funcs.graph.HideGraphline(this, '${type}')">
        <span>${thisElem.checked ? "全部非表示" : "全部表示"}</span>
    `;
    graph.canvas.update();
}