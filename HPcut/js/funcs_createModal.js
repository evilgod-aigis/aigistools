funcs.createHTML.modal = {};

// 必須マーク表示イベント追加
funcs.createHTML.modal.AddEvent_deactivate = thisElem => {
    const reqTerms = thisElem.getElementsByClassName("reqTerm");
    const reqInputs = thisElem.getElementsByClassName("reqInput");
    
    _.forEach(reqInputs, (elem, i) => {
        elem.addEventListener("input", () => {
            if(elem.value === "") reqTerms[i].classList.add("reqMark");
            else reqTerms[i].classList.remove("reqMark");
        });
    });
}
// 次の要素を活性化/非活性化(モーダル用)
funcs.createHTML.modal.ToggleActive = (thisElem, insides = 0) => {
    let outside = thisElem;
    for(let i = 0; i < insides; ++i) outside = outside.parentElement;
    const next = outside.nextElementSibling;
    const inputs = next.getElementsByTagName("input");
    const selects = next.getElementsByTagName("select");
    const buttons = next.getElementsByTagName("button");
    if(thisElem.checked) {
        next.classList.remove("inactive");
        const reqTerms = next.getElementsByClassName("reqTerm");
        const reqInputs = next.getElementsByClassName("reqInput");
        const checkboxes = next.getElementsByTagName("input[type='checkbox']");
        _.forEach(reqInputs, (elem, i) => {
            if(elem.value === "") reqTerms[i].classList.add("reqMark");
        });
        _.forEach(inputs, elem => { elem.disabled = false });
        _.forEach(selects, elem => { elem.disabled = false });
        _.forEach(buttons, elem => { elem.disabled = false });
        _.forEach(checkboxes, elem => funcs.createHTML.modal.ToggleActive(elem));
        const inactiveReqMarks = next.querySelectorAll(".inactive .reqMark");
        const inactiveInputs = next.querySelectorAll(".inactive input");
        _.forEach(inactiveReqMarks, elem => elem.classList.remove("reqMark"));
        _.forEach(inactiveInputs, elem => { elem.disabled = true });
    } else {
        next.classList.add("inactive");
        const reqMarks = next.getElementsByClassName("reqMark");
        _.forEach(reqMarks, () => reqMarks[0].classList.remove("reqMark"));
        _.forEach(inputs, elem => { elem.disabled = true });
        _.forEach(selects, elem => { elem.disabled = true });
        _.forEach(buttons, elem => { elem.disabled = true });
    }
}

// 属性の選択肢を生成
funcs.createHTML.modal.CreateAttrOptions = (createAttr1 = false) => {
    const [ elem_attr1, ...elems_attr2 ] = Array.from(document.getElementsByClassName("modalAttr"));
    let option;
    if(createAttr1) {
        elem_attr1.innerHTML = "";
        option = document.createElement("option");
        option.value = "";
        option.innerHTML = "";
        elem_attr1.appendChild(option);
        
        _.forEach(lists.attr1, opt => {
            option = document.createElement("option");
            option.value = opt;
            option.innerHTML = opt;
            elem_attr1.appendChild(option);
        });
    }
    
    _.forEach(elems_attr2, elem_attr2 => {
        const val = elem_attr2.value;
        elem_attr2.innerHTML = "";
        option = document.createElement("option");
        option.value = "";
        option.innerHTML = "";
        elem_attr2.appendChild(option);
        
        const selected = _.compact(elems_attr2.map(elem => elem.value));
        const opts = _.difference(lists.attr2, selected);
        _.forEach(opts, opt => {
            option = document.createElement("option");
            option.value = opt;
            option.innerHTML = opt;
            option.selected = opt === val;
            elem_attr2.appendChild(option);
        });
    });
}
// その他の選択肢を生成
funcs.createHTML.modal.CreateNoteOptions = () => {
    const elems_note = Array.from(document.getElementsByClassName("modalNote"));
    let option;
    _.forEach(elems_note, elem_note => {
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
        _.forEach(opts, opt => {
            option = document.createElement("option");
            option.value = opt;
            option.innerHTML = opt;
            option.selected = opt === val;
            elem_note.appendChild(option);
        });
    });
}

// 入力エリア追加(クラス)
funcs.createHTML.modal.AddClass = thisElem => {
    const classDiv = thisElem.parentElement;
    classDiv.insertBefore(document.createElement("br"), thisElem);
    const newInput = document.createElement("input");
    newInput.type = "text";
    newInput.className = "modalClass";
    classDiv.insertBefore(newInput, thisElem);
}
// 入力エリア追加(その他)
funcs.createHTML.modal.AddNote = thisElem => {
    const notesDiv = thisElem.parentElement;
    notesDiv.insertBefore(document.createElement("br"), thisElem);
    const newSelect = document.createElement("select");
    newSelect.className = "modalNote";
    newSelect.onchange = funcs.createHTML.modal.CreateNoteOptions;
    notesDiv.insertBefore(newSelect, thisElem);
    funcs.createHTML.modal.CreateNoteOptions();
    if(notesDiv.childElementCount / 2 === lists.note.length - 1) {
        notesDiv.removeChild(thisElem);
    }
}
// スキルセット追加
funcs.createHTML.modal.AddSkill = (type, index) => {
    if(!(type in lists.units)) return;
    
    const isOnSkillAct = type === "onSkillAct";
    const skillInfoDiv = document.getElementById(`modalSkillInfo-${index}`);
    const skillInfoInsides = skillInfoDiv.getElementsByTagName("div");
    const skillsDiv = skillInfoInsides[1];
    const nSet = skillsDiv.childElementCount + 1;
    if(nSet === 2 && window.innerWidth > 600) {
        const dblSetWidth = skillsDiv.children[0].offsetWidth * 2;
        skillInfoDiv.style.width = `${skillInfoInsides[0].clientWidth + dblSetWidth + 40}px`;
        skillsDiv.style.width = `${dblSetWidth + 30}px`;
    }
    const newDiv = document.createElement("div");
    newDiv.className = "modalOptset3";
    newDiv.innerHTML = `
        セット${nSet}
        <!--次回スキル-->
        <span style="margin-left: 10px;">
            (次回：セット
        </span>
        <input
            type="number"
            class="modalNext tooltip-ts"
            data-tippy-content="\
                0～${nSet + 1}<br>\
                次回スキルが変化する場合はそのセット数を入力<br>\
                次のスキルがない場合は0を入力<br>\
                変化しない場合はこのセット数を入力(デフォルト)<br>\
                つながっていないセットは自動的に排除される\
            "
            value=${nSet}
            onchange="funcs.LimitNum_int(this, 0, ${nSet + 1})"
        >)
        <!--対象-->
        <div class="box">
            <span style="margin-right: 5px;">
                対象
            </span>
            <select
                class="modalTarget tooltip-ts"
                data-tippy-content="\
                    ${isOnSkillAct ? "全員/全敵：「HPリンク」適用可<br>" : ""}\
                    射程内${isOnSkillAct ? "" : "　&ensp;"}：「引き付け(敵)」適用可<br>\
                "
                onchange="funcs.createHTML.modal.ToggleHPredActive(this)"
            >
                <option value="">HP減少なし</option>
                ${isOnSkillAct ?  "<option value='全員'>全員</option>" : ""}
                ${isOnSkillAct ?  "<option value='全敵'>全敵</option>" : ""}
                <option value='射程内'>射程内</option>
            </select>
            <span class="inactive">
                <span style="margin-right: 5px;">
                    ヒット数
                </span>
                <input
                    type="number"
                    class="tooltip-ts modalSimult"
                    data-tippy-content="0以下にすると射程内全員"
                    value=0
                    onchange="funcs.LimitNum_int(this)"
                    disabled
                >
            </span>
        </div>
        <!--再動/継続-->
        <div class="box">
            <span class="reqTerm reqMark">
                再動
            </span>
            <input
                type="number"
                class="modalCT reqInput tooltip-ts"
                data-tippy-content="0～1,000秒<br>好感度150%ボーナス・アビリティの補正なしのベースの秒数を入力"
                onchange="funcs.LimitNum_int(this, 0, 1000)"
            >秒
            <span class="reqTerm reqMark" style="margin-left: 5px;">
                継続
            </span>
            <input
                type="number"
                class="modalDur reqInput tooltip-ts"
                data-tippy-content="\
                    1～1,000秒<br>\
                    5秒未満はボムスキルと判断(ボムスキルの継続時間はくろもじ屋'参照)<br>\
                    スキル継続時間が無限の場合は適当に大きな数値を入れればおｋ<br>\
                    1回のみの場合は上の「次回：セット」を0に設定<br>\
                    好感度150%ボーナス・アビリティの補正なしのベースの秒数を入力\
                "
                onchange="funcs.LimitNum_int(this, 1, 1000)"
            >秒
        </div>
        <!--特殊な初動-->
        <div class="box">
            <label
                for="check_modalWT-${index}-${nSet}"
                class="tooltip-ts"
                data-tippy-content="\
                    アルヴァ(黒)の覚醒スキルのように初動が特殊になるもの<br>\
                    クラスや覚醒前・後のアビリティによる初動-〇%は対象外(自動で短縮される)
                "
            >
                特殊な初動
            </label>
            <input
                type="checkbox"
                id="check_modalWT-${index}-${nSet}"
                class="check_modalWT"
                onchange="funcs.createHTML.modal.ToggleActive(this)"
            >
            <span class="inactive">
                <span class="reqTerm"></span>
                <input
                    type="number"
                    class="modalWT reqInput tooltip-ts"
                    data-tippy-content="0～1,000秒<br>好感度150%ボーナス・アビリティの補正なしのベースの秒数を入力"
                    onchange="funcs.LimitNum_int(this, 0, 1000)"
                    disabled
                >秒
            </span>
        </div>
        <!--HP減少率-->
        <div class="box inactive">
            <span class="reqTerm" style="margin-right: 5px;">
                HP減少率
            </span>
            <input
                type="number"
                class="modalHPred reqInput tooltip-ts"
                data-tippy-content="0～100%<br>補正なしのベースの数値(%)を入力<br>0%はHP減少なしと判断"
                onchange="funcs.LimitNum_float(this, 0, 100)"
                disabled
            >%
        </div>
        <!--特攻-->
        <div class="box">
            <label for="check_modalDmgMul-${index}-${nSet}">
                特攻
            </label>
            <input
                type="checkbox"
                id="check_modalDmgMul-${index}-${nSet}"
                class="check_modalDmgMul"
                onchange="funcs.createHTML.modal.ToggleActive(this)"
            >
            <span class="inactive">
                <label class="tooltip-ts" data-tippy-content="0以上">
                    <span class="reqTerm">
                        倍率
                    </span>
                    <input type="number" class="modalDmgMul reqInput" onchange="funcs.LimitNum_float(this, 0)" disabled>
                </label>
                <label style="margin-left: 10px;" class="tooltip-ts" data-tippy-content="特に設定する必要なし<br>ツールチップに反映されるだけ">
                    <span>
                        対象
                    </span>
                    <input type="text" class="modalDmgMulTarget" disabled>
                </label>
            </span>
        </div>
        <!--敵HP-->
        <div class="box">
            <span
                class="tooltip-ts"
                data-tippy-content="\
                    敵の残りHPで攻撃に倍率が乗るもの<br>\
                    イビルプリンセス系は自動的に反映されるので入力不要<br>\
                    「HP[%]以下」で同じものがあれば「倍率」の高いほうを採用"
            >
                <label for="check_modalHPremMul-${index}-${nSet}">
                    敵HP
                </label>
                <input
                    type="checkbox"
                    id="check_modalHPremMul-${index}-${nSet}"
                    class="check_modalHPremMul"
                    onchange="funcs.createHTML.modal.ToggleActive(this, 1)"
                >
            </span>
            <table class="inactive" style="display:inline-table; text-align: center;">
                <tbody>
                    <tr><td>HP[%]以下</td><td>倍率</td><td></td></tr>
                    <tr>
                        <td>
                            <label class="tooltip-ts" data-tippy-content="0～100%">
                                <span class="reqTerm"></span>
                                <input
                                    type="number"
                                    class="modalHPremMul-border reqInput"
                                    onchange="funcs.LimitNum_int(this, 0, 100)"
                                    disabled
                                >
                            </label>
                        </td>
                        <td>
                            <label style="margin-left: 10px;" class="tooltip-ts" data-tippy-content="0以上">
                                <span class="reqTerm"></span>
                                <input
                                    type="number"
                                    class="modalHPremMul-mul reqInput"
                                    onchange="funcs.LimitNum_float(this, 0)"
                                    disabled
                                >
                            </label>
                        </td>
                        <td><button type="button" style="margin-left: 5px;" onclick="funcs.createHTML.modal.AddHPremMul(this)">追加</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    `;
    
    skillsDiv.appendChild(newDiv);
    funcs.createHTML.modal.AddEvent_deactivate(newDiv);
    
    tippy(".tooltip-ts", {
        placement: "top-start"
        , allowHTML: true
        , maxWidth: "1000px"
    });
}
// 入力エリア追加(敵HP残量)
funcs.createHTML.modal.AddHPremMul = thisElem => {
    const HPremMulTbody = thisElem.closest("tbody");
    const newTr = document.createElement("tr");
    newTr.innerHTML = `
        <td>
            <label class="tooltip-ts" data-tippy-content="0～100%">
                <span class="reqTerm reqMark"></span>
                <input
                    type="number"
                    class="modalHPremMul-border reqInput"
                    onchange="funcs.LimitNum_int(this, 0, 100)"
                >
            </label>
        </td>
        <td>
            <label style="margin-left: 10px;" class="tooltip-ts" data-tippy-content="0以上">
                <span class="reqTerm reqMark"></span>
                <input
                    type="number"
                    class="modalHPremMul-mul reqInput"
                    onchange="funcs.LimitNum_float(this, 0)"
                >
            </label>
        </td>`;
    newTr.appendChild(thisElem);
    HPremMulTbody.appendChild(newTr);
    funcs.createHTML.modal.AddEvent_deactivate(newTr);
}

// スキルについて、他方を強制的にアクティブにする
funcs.createHTML.modal.ActiveOtherSkillState = (thisElem, index) => {
    const otherIndex = 1 - index;
    const elem_atkInt0 = document.getElementById(`check_modalAtkInt-${index + 1}`);
    const elem_atkInt1 = document.getElementById(`check_modalAtkInt-${otherIndex + 1}`);
    const elem_skillInfo0 = document.getElementById(`check_modalSkillInfo-${index}`);
    const elem_skillInfo1 = document.getElementById(`check_modalSkillInfo-${otherIndex}`);
    const elem_addSkill0 = document.getElementById(`addSkill-${index}`);
    const elem_addSkill1 = document.getElementById(`addSkill-${otherIndex}`);
    if(elem_atkInt0) {
        elem_atkInt0.checked = thisElem.checked;
        elem_atkInt1.checked = true;
        funcs.createHTML.modal.ToggleActive(elem_atkInt0);
        funcs.createHTML.modal.ToggleActive(elem_atkInt1);
    }
    elem_skillInfo0.checked = thisElem.checked;
    elem_skillInfo1.checked = true;
    funcs.createHTML.modal.ToggleActive(elem_skillInfo0, 1);
    funcs.createHTML.modal.ToggleActive(elem_skillInfo1, 1);
    
    elem_addSkill0.disabled = !thisElem.checked;
    elem_addSkill1.disabled = false;
}
// HP減少率を活性化/非活性化
funcs.createHTML.modal.ToggleHPredActive = thisElem => {
    const simultDiv = thisElem.nextElementSibling;
    const skillSetDiv = thisElem.parentElement.parentElement;
    const HPredInput = skillSetDiv.getElementsByClassName("modalHPred")[0];
    const HPredSpan = HPredInput.previousElementSibling;
    const HPredDiv = HPredInput.parentElement;
    if(thisElem.value) {
        HPredDiv.classList.remove("inactive");
        if(HPredInput.value === "") HPredSpan.classList.add("reqMark");
        HPredInput.disabled = false;
        if(thisElem.value === "射程内") {
            simultDiv.classList.remove("inactive");
            simultDiv.getElementsByTagName("input")[0].disabled = false;
            return;
        }
    } else {
        HPredDiv.classList.add("inactive");
        HPredSpan.classList.remove("reqMark");
        HPredInput.disabled = true;
    }
    simultDiv.classList.add("inactive");
    simultDiv.getElementsByTagName("input")[0].disabled = true;
}

// モーダル生成
funcs.createHTML.modal.Create = type => {
    if(!(type in lists.units)) return;
    
    const isOnHit = type === "onHit";
    const skillState = [ "通常", "覚醒" ];
    let txt_atkInt = "";
    if(isOnHit) {
        txt_atkInt = `
            <!--攻撃間隔-->
            <div class="modalOpt2">
                <div class="optcap9em">
                    <span class="tooltip-ts" data-tippy-content="ONにした攻撃速度情報を全て記入<br>OFFにすると記入してあっても反映されなくなる">
                        攻撃間隔：
                    </span>
                </div>
                <div class="modalOptset1">`;
        for(let i = 0; i < 3; ++i) {
            const isSkill = i === 0;
            const reqMark = isSkill ? "" : " reqMark";
            const disabled = isSkill ? " disabled" : "";
            txt_atkInt += `
                <div class="box">
                    <label
                        for="check_modalAtkInt-${i}"
                        style="margin-right: 5px;"
                        ${
                            isSkill ? `class="tooltip-ts" data-tippy-content="今のところ設定する意味はない"`
                            : ""
                        }
                    >
                        ${isSkill ? `非スキル中　` : `${skillState[i - 1]}スキル中`}
                    </label>
                    <input
                        type="checkbox"
                        id="check_modalAtkInt-${i}"
                        style="margin: 0;"
                        ${isSkill ? "" : "checked"}
                        onchange="funcs.createHTML.modal.${isSkill ? "ToggleActive(this)" : `ActiveOtherSkillState(this, ${i - 1})`}"
                    >
                    <span class="${isSkill ? "inactive" : ""}">
                        <label
                            style="margin-left: 5px;"
                            class="tooltip-ts"
                            data-tippy-content="\
                                攻撃モーションの内、近接攻撃のダメージ発生<br>\
                                または遠距離攻撃の飛び道具発生までのフレーム数<br>\
                                1f以上(30fps)\
                            "
                        >
                            <span class="reqTerm${reqMark}">攻撃発生</span>
                            <input type="number" class="modalAtkInt-${i} reqInput" onchange="funcs.LimitNum_int(this, 1)"${disabled}>
                        </label>
                        <label
                            style="margin-left: 5px;"
                            class="tooltip-ts"
                            data-tippy-content="\
                                攻撃モーションの内、攻撃発生後のフレーム数<br>\
                                1f以上(30fps)\
                            "
                        >
                            <span class="reqTerm${reqMark}">発生後</span>
                            <input type="number" class="modalAtkInt-${i} reqInput" onchange="funcs.LimitNum_int(this, 1)"${disabled}>
                        </label>
                        <label
                            style="margin-left: 5px;"
                            class="tooltip-ts"
                            data-tippy-content="\
                                攻撃モーション終了後、次の攻撃モーションを<br>\
                                始めるまでの待機フレーム数<br>\
                                1f以上(30fps)<br>\
                                好感度100%ボーナスを含み、<br>\
                                150%ボーナス・編成バフを含まない値を入力\
                            "
                        >
                            <span class="reqTerm${reqMark}">攻撃硬直</span>
                            <input type="number" class="modalAtkInt-${i} reqInput" onchange="funcs.LimitNum_int(this, 1)"${disabled}>
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
                <span>${isOnHit ? "攻撃ヒット" : "スキル発動"}時発生型 ユニットデータ入力</span>
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
                            <div class="box" style="white-space: normal;">
                                <select class="modalAttr tooltip-ts" data-tippy-content="種族"></select>
                                <select class="modalAttr tooltip-ts" data-tippy-content="種族以外" onchange="funcs.createHTML.modal.CreateAttrOptions()"></select>
                                <select class="modalAttr tooltip-ts" data-tippy-content="種族以外" onchange="funcs.createHTML.modal.CreateAttrOptions()"></select>
                                <select class="modalAttr tooltip-ts" data-tippy-content="種族以外" onchange="funcs.createHTML.modal.CreateAttrOptions()"></select>
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
                                    ${isOnHit ? `<option value="攻撃硬直">攻撃硬直</option>` : ""}
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
    
    _.forEach(skillState, (state, index) => {
        txt += `
            <div id="modalSkillInfo-${index}" class="modalOpt3">
                <div class="optcap8em">
                    <span class="inline-block">
                        <label
                            for="check_modalSkillInfo-${index}"
                            class="tooltip-ts"
                            data-tippy-content="\
                                ONにしたスキル情報の必須事項を全て記入<br>\
                                OFFにすると記入してあっても反映されなくなる\
                            "
                        >
                            ${state}スキル
                        </label>
                        <br>
                        <button
                            type="button"
                            id="addSkill-${index}"
                            style="height: 3em; width: 5em;"
                            onclick="funcs.createHTML.modal.AddSkill('${type}', ${index})"
                        >
                            セット<br>追加
                        </button>
                    </span>
                    <input
                        type="checkbox"
                        id="check_modalSkillInfo-${index}"
                        style="margin: 0;"
                        checked
                        onchange="funcs.createHTML.modal.ActiveOtherSkillState(this, ${index})"
                    >：
                </div>
                <div class="modalOptset2"></div>
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
    const elem_modal = document.getElementById("modal");
    elem_modal.classList.remove("is-unshown");
    elem_modal.innerHTML = txt;
    
    funcs.createHTML.modal.AddEvent_deactivate(elem_modal);
    funcs.createHTML.modal.CreateAttrOptions(true);
    funcs.createHTML.modal.CreateNoteOptions();
    
    document.getElementById("addSkill-0").click();
    document.getElementById("addSkill-1").click();
    
    tippy(".tooltip-ts", {
        placement: "top-start"
        , allowHTML: true
        , maxWidth: "1000px"
    });
}

// モーダル消去
funcs.createHTML.modal.Destroy = type => {
    if(!(type in lists.units)) return;
    
    const elem_modal = document.getElementById("modal");
    if(elem_modal) {
        elem_modal.classList.add("is-unshown");
        elem_modal.innerHTML = "";
    }
}