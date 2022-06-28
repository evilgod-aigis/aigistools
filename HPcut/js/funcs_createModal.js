funcs.createHTML.modal = {};

//必須マーク表示イベント追加
funcs.createHTML.modal.AddEvent_deactivate = () => {
    const reqTerms = document.getElementsByClassName("reqTerm");
    const reqInputs = document.getElementsByClassName("reqInput");
    
    _.forEach(reqInputs, (elem, i) => {
        elem.addEventListener("input", () => {
            if(elem.value === "") {
                reqTerms[i].classList.add("reqMark");
            } else {
                reqTerms[i].classList.remove("reqMark");
            }
        });
    });
}
//次の要素を活性化/非活性化(モーダル用)
funcs.createHTML.modal.ToggleActive = thisElem => {
    const next = thisElem.nextElementSibling;
    if(thisElem.checked) {
        next.classList.remove("inactive");
        const reqTerms = next.getElementsByClassName("reqTerm");
        const reqInputs = next.getElementsByClassName("reqInput");
        _.forEach(reqInputs, (elem, i) => {
            if(elem.value === "") {
                reqTerms[i].classList.add("reqMark");
            }
        });
    } else {
        next.classList.add("inactive");
        const reqMarks = next.getElementsByClassName("reqMark");
        _.forEach(reqMarks, elem => reqMarks[0].classList.remove("reqMark"));
    }
}

//属性の選択肢を生成
funcs.createHTML.modal.CreateAttrOptions = (createAttr1 = false) => {
    const [elem_attr1, ...elems_attr2] = Array.from(document.getElementsByClassName("modalAttr"));
    let option;
    if(createAttr1) {
        elem_attr1.innerHTML = "";
        option = document.createElement("option");
        option.value = "";
        option.innerHTML = "";
        elem_attr1.appendChild(option);
        
        lists.attr1.forEach(opt => {
            option = document.createElement("option");
            option.value = opt;
            option.innerHTML = opt;
            elem_attr1.appendChild(option);
        });
    }
    
    elems_attr2.forEach(elem_attr2 => {
        const val = elem_attr2.value;
        elem_attr2.innerHTML = "";
        option = document.createElement("option");
        option.value = "";
        option.innerHTML = "";
        elem_attr2.appendChild(option);
        
        const selected = _.compact(elems_attr2.map(elem => elem.value));
        const opts = _.difference(lists.attr2, selected);
        opts.forEach(opt => {
            option = document.createElement("option");
            option.value = opt;
            option.innerHTML = opt;
            option.selected = opt === val;
            elem_attr2.appendChild(option);
        });
    });
}
//その他の選択肢を生成
funcs.createHTML.modal.CreateNoteOptions = () => {
    const elems_note = Array.from(document.getElementsByClassName("modalNote"));
    let option;
    elems_note.forEach(elem_note => {
        const val = elem_note.value;
        elem_note.innerHTML = "";
        option = document.createElement("option");
        option.value = "";
        option.innerHTML = "";
        elem_note.appendChild(option);
        
        const selected = _.compact(elems_note.map(elem => elem.value));
        let opts = _.difference(lists.note, selected);
        if(selected.includes("女性") || selected.includes("男性")) {
            const sex = [ "女性", "男性" ];
            opts = _.union(sex, opts)
            if(!sex.includes(val)) {
                opts = _.difference(opts, sex);
            }
        }
        opts.forEach(opt => {
            option = document.createElement("option");
            option.value = opt;
            option.innerHTML = opt;
            option.selected = opt === val;
            elem_note.appendChild(option);
        });
    });
}

//入力エリア追加(クラス)
funcs.createHTML.modal.AddClass = thisElem => {
    const parent = thisElem.parentElement;
    parent.insertBefore(document.createElement("br"), thisElem);
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "modalClass";
    parent.insertBefore(newInput, thisElem);
}
//入力エリア追加(その他)
funcs.createHTML.modal.AddNote = thisElem => {
    const parent = thisElem.parentElement;
    parent.insertBefore(document.createElement("br"), thisElem);
    const newSelect = document.createElement("select");
    newSelect.className = "modalNote";
    newSelect.onchange = funcs.createHTML.modal.CreateNoteOptions;
    parent.insertBefore(newSelect, thisElem);
    funcs.createHTML.modal.CreateNoteOptions();
    if(parent.childElementCount / 2 === lists.note.length - 1) {
        parent.removeChild(thisElem);
    }
}
//入力エリア追加(スキル回数倍率)
funcs.createHTML.modal.AddMulByNum = (thisElem, index) => {
    const parent = thisElem.parentElement;
    const previous = thisElem.previousElementSibling;
    const preValue = previous.firstElementChild.value;
    previous.innerHTML = previous.innerHTML.replace("以降", "　　");
    previous.firstElementChild.value = preValue;
    parent.insertBefore(document.createElement("br"), thisElem);
    const newLabel = document.createElement("label");
    newLabel.style.cssText = "margin-left: 10px;";
    newLabel.className = "tooltip-ts";
    newLabel.innerHTML = `
        ${(parent.childElementCount + 1) / 2}回目以降
        <input type="number" value="1" class="modalMulByNum-${index}" onchange="funcs.LimitNum_float(this, 0)">
    `;
    parent.insertBefore(newLabel, thisElem);
    
    tippy(".tooltip-ts", {
        content: "0以上",
        placement: "top-start",
        allowHTML: true
    });
}

//スキルについて、他方を強制的にアクティブにする
funcs.createHTML.modal.ActiveOtherSkillState = (thisElem, index) => {
    const otherIndex = 1 - index;
    const elem_atkInt0 = document.getElementById(`check_modalAtkInt-${index + 1}`);
    const elem_atkInt1 = document.getElementById(`check_modalAtkInt-${otherIndex + 1}`);
    const elem_skillInfo0 = document.getElementById(`check_modalSkillInfo-${index}`);
    const elem_skillInfo1 = document.getElementById(`check_modalSkillInfo-${otherIndex}`);
    const elem_dmgMul0 = document.getElementById(`check_modalDmgMul-${index}`);
    const elem_dmgMul1 = document.getElementById(`check_modalDmgMul-${otherIndex}`);
    if(elem_atkInt0 !== null) {
        elem_atkInt0.checked = thisElem.checked;
        elem_atkInt1.checked = true;
        funcs.createHTML.modal.ToggleActive(elem_atkInt0);
        funcs.createHTML.modal.ToggleActive(elem_atkInt1);
    }
    elem_skillInfo0.checked = thisElem.checked;
    elem_skillInfo1.checked = true;
    funcs.createHTML.modal.ToggleActive(elem_skillInfo0);
    funcs.createHTML.modal.ToggleActive(elem_skillInfo1);
    
    funcs.createHTML.modal.ToggleBActive(index);
    funcs.createHTML.modal.ToggleBActive(otherIndex);
    if(thisElem.checked) {
        funcs.createHTML.modal.ToggleActive(elem_dmgMul0);
    }
    funcs.createHTML.modal.ToggleActive(elem_dmgMul1);
}
//スキルBの入力を活性化/非活性化
funcs.createHTML.modal.ToggleBActive = index => {
    const elem_trans = document.getElementsByClassName("modalTrans")[index];
    const elem_trig = document.getElementsByClassName("modalTrig")[index];
    const elem_CT_B = document.getElementsByClassName("modalCT_B")[index];
    const elem_dur_B = document.getElementsByClassName("modalDur_B")[index];
    const elems = [ elem_trig, elem_CT_B, elem_dur_B ];
    
    let active;
    switch(elem_trans.value) {
        case "交互":
        case "初回A":
            active = true;
            break;
        case "-":
        default:
            active = false;
            break;
    }
    elems.forEach(elem => {
        const elem_term = elem.previousElementSibling;
        if(active) {
            elem.disabled = false;
            if(elem.value === "") {
                elem_term.classList.add("reqMark");
            }
        } else {
            elem.disabled = true;
            elem_term.classList.remove("reqMark");
        }
    });
}

//モーダル生成
funcs.createHTML.modal.Create = type => {
    if(!(type in lists.units)) return;
    
    const skillState = [ "通常", "覚醒" ];
    let txt_atkInt = "";
    if(type === "onHit") {
        txt_atkInt = `
            <!--攻撃間隔-->
            <div class="modalOpt2">
                <div class="optcap9em">
                    <span class="tooltip-ts" data-tippy-content="海外版wikiのGuides > Attack Speedを参照<br>ONにした攻撃速度情報を全て記入<br>OFFにすると記入してあっても反映されなくなる">
                        攻撃間隔：
                    </span>
                </div>
                <div class="modalOptset1">`;
        for(let i = 0; i < 3; ++i) {
            txt_atkInt += `
                <div class="box">
                    <label
                        for="check_modalAtkInt-${i}"
                        style="margin-right: 5px;"
                        ${
                            i === 0 ? `class="tooltip-ts" data-tippy-content="今のところ設定する意味はない"`
                            : ""
                        }
                    >
                        ${i === 0 ? `非スキル中　` : `${skillState[i - 1]}スキル中`}
                    </label>
                    <input
                        type="checkbox"
                        id="check_modalAtkInt-${i}"
                        style="margin: 0;"
                        ${i === 0 ? "" : "checked"}
                        onchange="funcs.createHTML.modal.${i === 0 ? "ToggleActive(this)" : `ActiveOtherSkillState(this, ${i - 1})`}"
                    >
                    <span class="${i === 0 ? "inactive" : ""}">
                        <label
                            style="margin-left: 5px;"
                            class="tooltip-ts"
                            data-tippy-content="\
                                攻撃モーションの内、近接攻撃のダメージ発生<br>\
                                または遠距離攻撃の飛び道具発生までのフレーム数<br>\
                                2f以上(60fps)\
                            "
                        >
                            <span class="reqTerm${i === 0 ? "" : " reqMark"}">攻撃発生</span>
                            <input type="number" class="modalAtkInt-${i} reqInput" onchange="funcs.LimitNum_int(this, 2)">
                        </label>
                        <label
                            style="margin-left: 5px;"
                            class="tooltip-ts"
                            data-tippy-content="\
                                攻撃モーションの内、攻撃発生後のフレーム数<br>\
                                2f以上(60fps)\
                            "
                        >
                            <span class="reqTerm${i === 0 ? "" : " reqMark"}">発生後</span>
                            <input type="number" class="modalAtkInt-${i} reqInput" onchange="funcs.LimitNum_int(this, 2)">
                        </label>
                        <label
                            style="margin-left: 5px;"
                            class="tooltip-ts"
                            data-tippy-content="\
                                攻撃モーション終了後、次の攻撃モーションを<br>\
                                始めるまでの待機フレーム数<br>\
                                2f以上(60fps)<br>\
                                好感度100%ボーナスを含み、150%ボーナス・編成バフを含まない値を入力\
                            "
                        >
                            <span class="reqTerm${i === 0 ? "" : " reqMark"}">攻撃硬直</span>
                            <input type="number" class="modalAtkInt-${i} reqInput" onchange="funcs.LimitNum_int(this, 2)">
                        </label>
                    </span>
                </div>
            `;
        }
        txt_atkInt += `</div>
            </div>
        `;
    }
    
    let txt = `
        <div id="overlay" onclick="funcs.createHTML.modal.Destroy('${type}')"></div>
        <div id="modalContent">
            <div id="modalHeader">
                <span>${type === "onSkillAct" ? "スキル発動" : "攻撃ヒット"}時発生型 ユニットデータ入力</span>
                <span style="color: red; font-size: 14px;">&nbsp;*必須</span>
            </div>
            <div id="modalBody">
                <div class="modalOpt1">
                    <!--ユニット名-->
                    <div class="modalOpt2">
                        <div class="optcap9em">
                            <span class="reqTerm reqMark">ユニット名</span>：
                        </div>
                        <div class="modalOptset1">
                            <div class="box" class="tooltip-ts" data-tippy-content="最大11文字">
                                <input type="text" id="modalName" class="reqInput" maxlength="11">
                            </div>
                        </div>
                    </div>
                    <!--属性-->
                    <div class="modalOpt2">
                        <div class="optcap9em">
                            属性：
                        </div>
                        <div class="modalOptset1">
                            <div class="box">
                                <select class="modalAttr tooltip-ts" data-tippy-content="種族"></select>
                                <select class="modalAttr tooltip-ts" data-tippy-content="種族以外" onchange="funcs.createHTML.modal.CreateAttrOptions()"></select><br>
                                <select class="modalAttr tooltip-ts" data-tippy-content="種族以外" onchange="funcs.createHTML.modal.CreateAttrOptions()"></select>
                                <select class="modalAttr tooltip-ts" data-tippy-content="種族以外" onchange="funcs.createHTML.modal.CreateAttrOptions()"></select>
                            </div>
                        </div>
                    </div>
                    <!--配置型-->
                    <div class="modalOpt2">
                        <div class="optcap9em">
                            <span class="reqTerm reqMark">配置型</span>：
                        </div>
                        <div class="modalOptset1">
                            <div class="box">
                                <select id="modalDepType" class="reqInput">
                                    <option value="" style="display: none;"></option>
                                    <option value="近接型">近接型</option>
                                    <option value="遠距離型">遠距離型</option>
                                    <option value="遠近距離型">遠近距離型</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <!--レアリティ-->
                    <div class="modalOpt2">
                        <div class="optcap9em">
                            <span class="reqTerm reqMark">レアリティ</span>：
                        </div>
                        <div class="modalOptset1">
                            <div class="box">
                                <select id="modalRarity" class="reqInput">
                                    <option value="" style="display: none;"></option>
                                    <option value="黒">黒</option>
                                    <option value="白">白</option>
                                    <option value="青">青</option>
                                    <option value="金">金</option>
                                    <option value="銀">銀</option>
                                    <option value="銅">銅</option>
                                    <option value="鉄">鉄</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <!--クラス-->
                    <div class="modalOpt2">
                        <div class="optcap9em">
                            <span class="reqTerm reqMark">クラス</span>：
                        </div>
                        <div class="modalOptset1">
                            <div class="box tooltip-ts" data-tippy-content="正確に入力しないとバフが反映されない<br>特にこだわりがなければ「[未CC(未覚醒)クラス名]系」と入力すればおｋ">
                                <input type="text" class="modalClass reqInput">
                                <button type="button" onclick="funcs.createHTML.modal.AddClass(this)">追加</button>
                            </div>
                        </div>
                    </div>
                    <!--好感度ボーナス-->
                    <div class="modalOpt2">
                        <div class="optcap9em">
                            <span class="reqTerm reqMark">好感度ボーナス</span>：
                        </div>
                        <div class="modalOptset1">
                            <div class="box">
                                <select id="modalAff" class="reqInput">
                                    <option value="" style="display: none;"></option>
                                    <option value="再動短縮">再動短縮</option>
                                    <option value="時間延長">時間延長</option>
                                    ${type === "onHit" ? `<option value="攻撃硬直">攻撃硬直</option>` : ""}
                                    <option value="その他">その他</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <!--その他-->
                    <div class="modalOpt2">
                        <div class="optcap9em">
                            その他：
                        </div>
                        <div class="modalOptset1">
                            <div class="box">
                                <select class="modalNote" onchange="funcs.createHTML.modal.CreateNoteOptions()"></select>
                                <button type="button" onclick="funcs.createHTML.modal.AddNote(this)">追加</button>
                            </div>
                        </div>
                    </div>
                    ${txt_atkInt}
                </div>
                <div class="modalOpt1">
    `;
    
    skillState.forEach((state, i) => {
        txt += `
            <div class="modalOpt3">
                <label
                    for="check_modalSkillInfo-${i}"
                    class="tooltip-ts"
                    data-tippy-content="\
                        ONにしたスキル情報の必須事項を全て記入<br>\
                        OFFにすると記入してあっても反映されなくなる\
                    "
                >
                    ${state}スキル
                </label>
                <input
                    type="checkbox"
                    id="check_modalSkillInfo-${i}"
                    style="margin: 0;"
                    checked
                    onchange="funcs.createHTML.modal.ActiveOtherSkillState(this, ${i})"
                >：
                <div class="modalOptset2">
                    <!--対象-->
                    <div class="box">
                        <span style="margin-right: 5px;">
                            対象
                        </span>
                        <label
                            class="tooltip-ts"
                            data-tippy-content="\
                                ${type === "onSkillAct" ? "全員/全敵/" : ""}射程内/○体<br>\
                                ${type === "onSkillAct" ? "　全員/全敵　：「HPリンク」適用可<br>" : ""}\
                                　射程内/○体：「引き付け(敵)」適用可<br>\
                                　他　　　　&ensp;：特になし\
                            "
                        >
                            <input type="text" class="modalTarget">
                        </label>
                    </div>
                    <!--スキル遷移-->
                    <div class="box">
                        <span
                            style="margin-right: 5px;"
                            ${
                                type === "onHit" ?
                                    `
                                        class="tooltip-ts"
                                        data-tippy-content="\
                                            攻撃ヒット時+スキル変化のユニットが今のところいないので<br>\
                                            <span style=&quot;text-decoration: line-through;&quot;>実装するのﾒﾝﾄﾞｲ</span> 実装されてない<br>\
                                            あとスキル中しか割合ダメージが発生しない\
                                        "
                                    `
                                : ""
                            }
                        >
                            スキル遷移
                        </span>
                        <select
                            class="modalTrans${type === "onSkillAct" ? " tooltip-ts" : ""}"
                            ${
                                type === "onSkillAct" ?
                                    `
                                        data-tippy-content="\
                                            -&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&ensp;：A→A→A→A→･･･<br>\
                                            交互&nbsp;&nbsp;：A→B→A→B→･･･<br>\
                                            初回A：A→B→B→B→･･･\
                                        "
                                    `
                                : "disabled"
                            }
                            onchange="funcs.createHTML.modal.ToggleBActive(${i})"
                        >
                            <option value="-">-</option>
                            <option value="交互">交互</option>
                            <option value="初回A">初回A</option>
                        </select>
                        <span class="reqTerm" style="margin: 0 5px 0 10px;">
                            HP減少発生
                        </span>
                        <select class="modalTrig reqInput" disabled>
                            <option value="" style="display: none;"></option>
                            <option value="A">A</option>
                            <option value="B">B</option>
                        </select>
                    </div>
                    <!--再動-->
                    <div class="box">
                        再動
                        <span class="reqTerm reqMark" style="margin-left: 10px;">
                            A
                        </span>
                        <input
                            type="number"
                            class="modalCT_A reqInput tooltip-ts"
                            data-tippy-content="0～1,000秒<br>好感度150%ボーナス・アビリティの補正なしのベースの秒数を入力"
                            onchange="funcs.LimitNum_int(this, 0, 1000)"
                        >秒
                        <span class="reqTerm" style="margin-left: 10px;">
                            B
                        </span>
                        <input
                            type="number"
                            class="modalCT_B reqInput tooltip-ts"
                            data-tippy-content="0～1,000秒<br>好感度150%ボーナス・アビリティの補正なしのベースの秒数を入力"
                            onchange="funcs.LimitNum_int(this, 0, 1000)"
                            disabled
                        >秒
                    </div>
                    <!--継続-->
                    <div class="box">
                        継続
                        <span class="reqTerm reqMark" style="margin-left: 10px;">
                            A
                        </span>
                        <input
                            type="number"
                            class="modalDur_A reqInput tooltip-ts"
                            data-tippy-content="\
                                1～1,000秒<br>\
                                5秒未満はボムスキルと判断(ボムスキルの継続時間はくろもじ屋'参照)<br>\
                                スキル継続時間が無限or1回のみの場合は適当に大きな数値を入れればおｋ<br>\
                                好感度150%ボーナス・アビリティの補正なしのベースの秒数を入力\
                            "
                            onchange="funcs.LimitNum_int(this, 1, 1000)"
                        >秒
                        <span class="reqTerm" style="margin-left: 10px;">
                            B
                        </span>
                        <input
                            type="number"
                            class="modalDur_B reqInput tooltip-ts"
                            data-tippy-content="\
                                1～1,000秒<br>\
                                5秒未満はボムスキルと判断(ボムスキルの継続時間はくろもじ屋'参照)<br>\
                                スキル継続時間が無限or1回のみの場合は適当に大きな数値を入れればおｋ<br>\
                                好感度150%ボーナス・アビリティの補正なしのベースの秒数を入力\
                            "
                            onchange="funcs.LimitNum_int(this, 1, 1000)"
                            disabled
                        >秒
                    </div>
                    <!--HP減少率-->
                    <div class="box">
                        <span class="reqTerm reqMark" style="margin-right: 5px;">
                            HP減少率
                        </span>
                        <input
                            type="number"
                            class="modalHPred reqInput tooltip-ts"
                            data-tippy-content="0～100%<br>補正なしのベースの数値(%)を入力"
                            onchange="funcs.LimitNum_float(this, 0, 100)"
                        >%
                    </div>
                    <!--特攻-->
                    <div class="box">
                        <label for="check_modalDmgMul-${i}">
                            特攻
                        </label>
                        <input type="checkbox" id="check_modalDmgMul-${i}" onchange="funcs.createHTML.modal.ToggleActive(this)">
                        <span class="inactive">
                            <label style="margin-left: 10px;" class="tooltip-ts" data-tippy-content="0以上">
                                <span class="reqTerm">
                                    倍率
                                </span>
                                <input type="number" class="modalDmgMul reqInput" onchange="funcs.LimitNum_float(this, 0)">
                            </label>
                            <label style="margin-left: 10px;" class="tooltip-ts" data-tippy-content="特に設定する必要なし<br>ツールチップに反映されるだけ">
                                対象
                                <input type="text" class="modalDmgMulTarget">
                            </label>
                        </span>
                    </div>
                    <!--スキル回数倍率-->
                    <div class="box">
                        <span class="inline-block tooltip-ts" data-tippy-content="アクアマリーの覚醒スキルみたいに<br>回数ごとにHP減少率が変わるとき用">
                            スキル回数倍率
                        </span>
                        <span class="inline-block">
                            <label style="margin-left: 10px;" class="tooltip-ts" data-tippy-content="0以上">
                                1回目以降
                                <input type="number" value="1" class="modalMulByNum-${i}" onchange="funcs.LimitNum_float(this, 0)">
                            </label>
                            <button type="button" style="margin-left: 5px;" onclick="funcs.createHTML.modal.AddMulByNum(this, ${i})">追加</button>
                        </span>
                    </div>
                </div>
            </div>`;
    });
    
    txt += `
                </div>
            </div>
            <div id="modalFooter">
                <div id="addUnitAlart"></div>
                <div class="buttonArea">
                    <button type="button" onclick="funcs.unitsData.AddUnit('${type}')">追加</button>
                    <button type="button" onclick="funcs.createHTML.modal.Destroy('${type}')">キャンセル</button>
                </div>
            </div>
        </div>
    `;
    const elem_modal = document.getElementById(`modal_${type}`);
    elem_modal.classList.add("isShown");
    elem_modal.innerHTML = txt;
    
    funcs.createHTML.modal.AddEvent_deactivate();
    funcs.createHTML.modal.CreateAttrOptions(true);
    funcs.createHTML.modal.CreateNoteOptions();
    
    tippy(".tooltip-ts", {
        placement: "top-start",
        allowHTML: true
    });
}

//モーダル消去
funcs.createHTML.modal.Destroy = type => {
    if(!(type in lists.units)) return;
    
    const elem_modal = document.getElementById(`modal_${type}`);
    elem_modal.classList.remove("isShown");
    elem_modal.innerHTML = "";
}