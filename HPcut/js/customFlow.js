lists.customFlow = [];
lists.customFlowLog = [];
graph.gantt = {
    unitType: [ "onSkillAct", "onHit", "buffer" ]
    , unitType_jap: { onSkillAct: "スキル発動時発生型", onHit: "攻撃ヒット時発生型", buffer: "バッファー" }
    , bars: null, unitIndex: null
    , toFrame: px => Math.round(px / document.getElementsByClassName("ganttBarArea")[0].clientWidth * num.timeCap.value * graph.fps)
    , toPx: frame => frame / graph.fps * document.getElementsByClassName("ganttBarArea")[0].clientWidth / num.timeCap.value
    , minPx: null
    , Bar: class {
        constructor(parent, cl, fromX, toX, barsArray, barIndex) {
            this._parent = parent;
            this._index = barIndex;
            this._barsArray = barsArray;
            this._cl = cl;
            this._fromX = fromX;
            this._toX = toX;
            this._length = toX - fromX;
            this._prevBar = null;
            this._nextBar = null;
            if(barsArray.length > 1) {
                this._prevBar = barsArray[barIndex - 1];
                this._nextBar = barsArray[barIndex];
                this._prevBar.nextBar = this;
                this._nextBar.prevBar = this;
                this._fromX = Math.max(fromX, this._prevBar.toX);
                this._toX = Math.min(toX, this._nextBar.fromX);
                this._length = this._toX - this._fromX;
            }
            this._elementize();
            if(barsArray.length > 1) {
                this._leftEnd = new graph.gantt.BarEnd(this, "left");
                this._rightEnd = new graph.gantt.BarEnd(this, "right");
                this._children = [ this._leftEnd.asElement, this._rightEnd.asElement ];
                let nextBar = this._nextBar;
                while(nextBar) {
                    ++nextBar.index;
                    nextBar = nextBar.nextBar;
                }
            }
        }
        _elementize() {
            if(this._elem) return;
            this._elem = document.createElement("div");
            this._elem.classList.add("ganttBar", this._cl);
            this._elem.style.width = `${this._length}px`;
            this._elem.style.left = `${this._fromX}px`;
            if(this._barsArray.length > 1) {
                this._elem.style.cursor = "pointer";
                this._tooltip = new graph.gantt.Tooltip(this);
                if(isPC) {
                    this._elem.addEventListener("mouseover", this);
                    this._elem.addEventListener("mousedown", this);
                    this._elem.addEventListener("dragstart", () => false);
                } else
                    this._elem.addEventListener("touchstart", this);
                this._parent.insertBefore(this._elem, this.nextBar.asElement);
            } else this._parent.appendChild(this._elem);
        }
        handleEvent(e) {
            e.stopPropagation();
            switch(e.type) {
                case "touchstart":
                    this._tooltip.asElement.style.display = "block";
                case "mousedown":
                    e.preventDefault();
                    if(e.button === 1) {
                        _.forEach(this._children, elem => elem.remove());
                        this._elem.remove();
                        let nextBar = this._nextBar;
                        nextBar.prevBar = this._prevBar;
                        this._prevBar.nextBar = nextBar;
                        while(nextBar) {
                            --nextBar.index;
                            nextBar = nextBar.nextBar;
                        }
                        this._barsArray.splice(this._index, 1);
                        break;
                    }
                    this._shiftX = e.clientX - this._elem.getBoundingClientRect().left;
                    if(isPC) {
                        document.addEventListener("mousemove", this);
                        document.addEventListener("mouseup", this);
                    } else {
                        document.addEventListener("touchmove", this);
                        document.addEventListener("touchout", this);
                    }
                    break;
                case "mousemove":
                case "touchmove":
                    let newLeft = e.clientX - this._parent.getBoundingClientRect().left - this._shiftX;
                    const leftEdge = this._prevBar.toX + graph.gantt.minPx;
                    const rightEdge = this._nextBar.fromX - this._length - graph.gantt.minPx;
                    if(newLeft < leftEdge) newLeft = leftEdge;
                    else if(newLeft > rightEdge) newLeft = rightEdge;
                    this._fromX = newLeft;
                    this._toX = newLeft + this._length;
                    this._elem.style.left = `${newLeft}px`;
                    this._tooltip.depFrame = graph.gantt.toFrame(this._fromX);
                    this._tooltip.wdFrame = graph.gantt.toFrame(this._toX);
                    break;
                case "mouseup":
                    document.removeEventListener("mousemove", this);
                    document.removeEventListener("mouseup", this);
                    break;
                case "touchout":
                    document.removeEventListener("touchmove", this);
                    document.removeEventListener("touchout", this);
                    break;
                case "mouseover":
                    this._tooltip.asElement.style.display = "block";
                    break;
            }
        }
        get parent()    { return this._parent; }
        get children()  { return this._children; }
        get index()     { return this._index; }
        get fromX()     { return this._fromX; }
        get toX()       { return this._toX; }
        get length()    { return this._length; }
        get asElement() { return this._elem; }
        get leftEnd()   { return this._leftEnd; }
        get rightEnd()  { return this._rightEnd; }
        get tooltip()   { return this._tooltip; }
        get prevBar()   { return this._prevBar; }
        get nextBar()   { return this._nextBar; }
        
        set index(index)     { this._index = index; }
        set fromX(fromX) {
            this._fromX = fromX;
            this._length = this.toX - this.fromX;
            this._elem.style.width = `${this._length}px`;
            this._elem.style.left = `${this._fromX}px`;
        }
        set toX(toX) {
            this._toX   = toX;
            this._length = this.toX - this.fromX;
            this._elem.style.width = `${this._length}px`;
        }
        set prevBar(prevBar) { this._prevBar = prevBar; }
        set nextBar(nextBar) { this._nextBar = nextBar; }
    }
    , BarEnd: class {
        constructor(bar, end) {
            this._bar = bar;
            this._parent = bar.asElement;
            this._end = end;
            this._elementize();
        }
        _elementize() {
            if(this._elem) return;
            this._elem = document.createElement("div");
            this._elem.classList.add("end", this._end);
            if(isPC) {
                this._elem.addEventListener("mousedown", this);
                this._elem.addEventListener("dragstart", () => false);
            } else
                this._elem.addEventListener("touchstart", this);
            this._parent.appendChild(this._elem);
        }
        handleEvent(e) {
            switch(e.type) {
                case "mousedown":
                case "touchstart":
                    e.preventDefault();
                    if(e.button !== 1) e.stopPropagation();
                    this._shiftX = this._end === "left"
                        ? e.clientX - this._parent.getBoundingClientRect().left
                        : this._parent.getBoundingClientRect().right - e.clientX;
                    if(isPC) {
                        document.addEventListener("mousemove", this);
                        document.addEventListener("mouseup", this);
                    } else {
                        document.addEventListener("touchmove", this);
                        document.addEventListener("touchout", this);
                    }
                    break;
                case "mousemove":
                case "touchmove":
                    switch(this._end) {
                        case "left": {
                            let newLeftEnd = e.clientX - this._bar.parent.getBoundingClientRect().left - this._shiftX;
                            const leftEdge = this._bar.prevBar.toX + graph.gantt.minPx;
                            const rightEdge = this._bar.toX - graph.gantt.minPx;
                            if(newLeftEnd < leftEdge) newLeftEnd = leftEdge;
                            else if(newLeftEnd > rightEdge) newLeftEnd = rightEdge;
                            this._bar.fromX = newLeftEnd;
                            this._bar.asElement.style.left = `${newLeftEnd}px`;
                            this._bar.tooltip.depFrame = graph.gantt.toFrame(this._bar.fromX);
                            break;
                        }
                        case "right": {
                            let newRightEnd = e.clientX - this._bar.parent.getBoundingClientRect().left + this._shiftX;
                            const rightEdge = this._bar.nextBar.fromX - graph.gantt.minPx;
                            const leftEdge = this._bar.fromX + graph.gantt.minPx;
                            if(newRightEnd > rightEdge) newRightEnd = rightEdge;
                            else if(newRightEnd < leftEdge) newRightEnd = leftEdge;
                            this._bar.toX = newRightEnd;
                            this._bar.tooltip.wdFrame = graph.gantt.toFrame(this._bar.toX);
                            break;
                        }
                    }
                    break;
                case "mouseup":
                    document.removeEventListener("mousemove", this);
                    document.removeEventListener("mouseup", this);
                    break;
                case "touchout":
                    document.removeEventListener("touchmove", this);
                    document.removeEventListener("touchout", this);
                    break;
            }
        }
        get bar()       { return this._bar; }
        get parent()    { return this._parent; }
        get end()       { return this._end; }
        get asElement() { return this._elem; }
    }
    , Tooltip: class {
        constructor(bar) {
            this._bar = bar;
            this._parent = bar.asElement;
            this._depFrame = graph.gantt.toFrame(bar.fromX);
            this._wdFrame = graph.gantt.toFrame(bar.toX);
            this._elementize();
        }
        _elementize() {
            if(this._elem) return;
            this._elem = document.createElement("div");
            this._elem.classList.add("tooltip-bar");
            this._elem.style.display = "none";
            
            const CreateInput = (div, ev, tUnit) => {
                const frame = `${ev}Frame`;
                const prop = `_${ev}${tUnit}Input`;
                this[prop] = document.createElement("input");
                this[prop].type = "number";
                this[prop].classList.add(`${ev}Input`, tUnit.toLowerCase());
                this[prop].addEventListener("change", this);
                div.appendChild(this[prop]);
                const newSpan = document.createElement("span");
                switch(tUnit) {
                    case "Sec":
                        this[prop].value = Math.floor(this[frame] / graph.fps);
                        newSpan.innerText = "秒";
                        break;
                    case "Frame":
                        this[prop].value = this[frame] % graph.fps;
                        newSpan.innerText = "f";
                        break;
                }
                div.appendChild(newSpan);
            }
            
            let newDiv = document.createElement("div");
            newDiv.innerHTML = "配置";
            CreateInput(newDiv, "dep", "Sec");
            CreateInput(newDiv, "dep", "Frame");
            this._elem.appendChild(newDiv);
            
            newDiv = document.createElement("div");
            newDiv.innerHTML = "撤退";
            CreateInput(newDiv, "wd", "Sec");
            CreateInput(newDiv, "wd", "Frame");
            this._elem.appendChild(newDiv);
            
            if(isPC) this._elem.addEventListener("mousedown", this);
            else this._elem.addEventListener("touchstart", this);
            this._parent.appendChild(this._elem);
        }
        handleEvent(e) {
            switch(e.type) {
                case "change":
                    if(e.target.classList[1] === "frame") funcs.LimitNum_int(e.target, 0, 29);
                    switch(e.target.classList[0]) {
                        case "depInput": {
                            let frame = Math.floor(this._depSecInput.value * graph.fps) + Number(this._depFrameInput.value);
                            const minFrame = graph.gantt.toFrame(this._bar.prevBar.toX) + 1;
                            const maxFrame = this._wdFrame - 1;
                            if(frame < minFrame) frame = minFrame;
                            else if(frame > maxFrame) frame = maxFrame;
                            this.depFrame = frame;
                            this._bar.fromX = graph.gantt.toPx(this._depFrame);
                            break;
                        }
                        case "wdInput": {
                            let frame = Math.floor(this._wdSecInput.value * graph.fps) + Number(this._wdFrameInput.value);
                            const minFrame = this._depFrame + 1;
                            const maxFrame = graph.gantt.toFrame(this._bar.nextBar.fromX) - 1;
                            if(frame > maxFrame) frame = maxFrame;
                            else if(frame < minFrame) frame = minFrame;
                            this.wdFrame = frame;
                            this._bar.toX = graph.gantt.toPx(this._wdFrame);
                            break;
                        }
                    }
                    break;
                case "mousedown":
                case "touchstart":
                    e.stopPropagation();
                    break;
            }
        }
        get bar()       { return this._bar; }
        get parent()    { return this._parent; }
        get depFrame()  { return this._depFrame; }
        get wdFrame()   { return this._wdFrame; }
        get depSec()    { return Math.floor(this._depFrame / graph.fps); }
        get wdSec()     { return Math.floor(this._wdFrame / graph.fps); }
        get asElement() { return this._elem; }
        
        set depFrame(depFrame) {
            this._depFrame = depFrame;
            this._depSecInput.value = Math.floor(this._depFrame / graph.fps);
            this._depFrameInput.value = this._depFrame % graph.fps;
        }
        set wdFrame(wdFrame) {
            this._wdFrame = wdFrame;
            this._wdSecInput.value = Math.floor(this._wdFrame / graph.fps);
            this._wdFrameInput.value = this._wdFrame % graph.fps;
        }
    }
}

// 自作フローテーブル生成
funcs.createHTML.CustomFlowTable = () => {
    let txt = "";
    const switchGraph = document.getElementById("switchGraph");
    if(lists.customFlow.length) {
        switchGraph.parentElement.classList.remove("inactive");
        _.forEach(switchGraph.switchGraph, radio => { radio.disabled = false; });
    }
    const txt_disabled = switchGraph.switchGraph.value === "Flow" ? "" : " disabled";
    _.forEach(lists.customFlow, (flow, index) => {
        txt += `
            <tr>
                <td>#${index + 1}</td>`;
        _.forEach(flow, (arr, type) =>
            txt += `
                <td><span class="inline-block">${_.map(arr, unit => unit.display).join("、</span><span class='inline-block'>")}</span></td>`
        );
        txt += `
                <td>
                    <button type="button" class="flowLogBtn" onclick="funcs.createHTML.modal.Create_customFlowLog(${index})"${txt_disabled}>ログ</button>
                </td>
                <td>
                    <button type="button" class="editFlowBtn" onclick="funcs.createHTML.modal.Create_customFlow(${index})">編集</button>
                </td>
                <td>
                    <button type="button" class="delFlowBtn" onclick="funcs.unitsData.DeleteFlow(${index})">削除</button>
                </td>
            </tr>`;
    });
    txt += `
        <tr>
            <td colspan="7">
                <button type="button" class="addFlowBtn" onclick="funcs.createHTML.modal.Create_customFlow(${lists.customFlow.length})">追加</button>
            </td>
        </tr>
    `;
    document.getElementById("customFlowBody").innerHTML = txt;
}
// フロー削除
funcs.unitsData.DeleteFlow = index => {
    if(index >= lists.customFlow.length) return;
    
    lists.customFlow.splice(index, 1);
    funcs.createHTML.CustomFlowTable();
    if(saveData.db) funcs.saveData.DeleteData("customFlow", `[${index}]`);
    if(!lists.customFlow.length) {
        const switchGraph = document.getElementById("switchGraph");
        switchGraph.parentElement.classList.add("inactive");
        _.forEach(switchGraph.switchGraph, radio => {
            if(radio.value === "Individual") radio.checked = true;
            radio.disabled = true;
        });
        funcs.graph.SetGraphData("all");
    }
    if(document.getElementById("switchGraph").switchGraph.value === "Flow") {
        graph.chart.series.removeIndex(index);
        graph.legend.itemContainers.removeIndex(index);
        graph.chart.series.each((chartSeries, index) => chartSeries.set("name", `フロー#${index + 1}`));
    }
}

// 自作フロー作成用モーダル生成
funcs.createHTML.modal.Create_customFlow = index => {
    graph.gantt.bars = _.reduce(graph.gantt.unitType, (obj, type) => { obj[type] = {}; return obj; }, {});
    graph.gantt.unitIndex = _.reduce(graph.gantt.unitType, (obj, type) => { obj[type] = 0; return obj; }, {});
    const txt = `
        <div id="overlay" onclick="funcs.createHTML.modal.Destroy_customFlow()"></div>
        <div id="modalContent" style="width: 1000px;">
            <div id="modalHeader">
                <span>フロー作成</span>
            </div>
            <div id="modalBody" style="height: calc(95vh - 160px);">
                <details>
                    <summary>説明(折り畳み)</summary>
                    <div style="padding-left: 2em;">
                        <p>　単一の敵に対して複数のユニットを使うシミュレーション用で、各ユニットの配置・撤退のタイミングを自由に設定可能。</p>
                        <p>このフローでは、上のオプションで設定された<strong>編成バフ以外のバフと撤退再出撃は無視される</strong>。</p>
                        <p style="margin-top: 8px;">　1列目の<button type="button" class="addGanttBtn">+</button>を押すとそのタイプのユニットが追加される(<strong>15体まで</strong>)ので、セレクタからユニット名を選択。</p>
                        <p>ユニットによっては、ツールチップがセレクタの上に表示され、個別に詳細を設定可能。</p>
                        <p>編成バフは上のオプションをチェックし、それ以外は下のバッファーからタイミングを設定(<span style="background: #0cc4;">この色の背景</span>のユニットはスキルバフ)。</p>
                        <p>前衛戦術家やリズリーなどの、対象を取らない/対象が配置型であるユニットは「再動短縮(対配置型)」で設定。</p>
                        <p>モルフェサの非スキル中はカースウィスパラーの効果が適用されるなど、クラス特性などが自動的に適用される。</p>
                        <p><strong>バフ対象がいないバッファーは行動ログに表示されない。</strong></p>
                        <p style="margin-top: 8px;">　2列目は各ユニットの配置・撤退のタイミングを設定可能。<strong>ここが設定されていないユニットは自動的に排除される。</strong></p>
                        <p>空いている場所をクリック&ドラッグするとバーが出現。</p>
                        <p>出現したバーは、クリック&ドラッグで移動・伸縮、中クリックで削除可能。ツールチップからも細かく設定可能。</p>
                        <p style="margin-top: 8px;">　<button type="button" style="height: 22px; width: 8em;">決定</button>を押すのは、割合ダメージユニットを1体以上設定し、空欄のセレクタがないことを確認してから。</p>
                        <p><strong>フロー作成後、グラフの下の切り替えを「フロー」にすることでグラフが表示される。</strong></p>
                    </div>
                </details>
                <div id="modalGantt">
                    <table border="1"></table>
                </div>
            </div>
            <div id="modalFooter" style="min-height: 4em;">
                <div id="ganttAlart"></div>
                <div class="buttonArea">
                    <button type="button" onclick="funcs.graph.Decide_customFlow(${index})">決定</button>
                    <button type="button" onclick="funcs.createHTML.modal.Destroy_customFlow()">キャンセル</button>
                </div>
            </div>
        </div>
    `;
    const elem_modal = document.getElementById("modal");
    elem_modal.classList.remove("is-unshown");
    elem_modal.innerHTML = txt;
    
    funcs.createHTML.modal.SetGantt(index);
}

// フロー用ガントチャート生成
funcs.createHTML.modal.SetGantt = index => {
    const gantt = document.getElementById("modalGantt");
    if(!gantt) return;
    
    const isEdited = index < lists.customFlow.length;
    
    const ganttArea = gantt.getElementsByTagName("table")[0];
    _.forEach(graph.gantt.unitType, type => {
        const newThead = document.createElement("thead");
        newThead.innerHTML = `
            <tr>
                <th>
                    ${graph.gantt.unitType_jap[type]}
                    <button type="button" class="addGanttBtn" onclick="funcs.createHTML.modal.AddGantt('${type}')">+</button>
                </th>
                <th><div class="ganttTimeArea"></div></th>
                <th></th>
            </tr>
        `;
        ganttArea.appendChild(newThead);
        const ganttTimeArea = newThead.getElementsByClassName("ganttTimeArea")[0];
        _.forEach([ 0, 50, 100 ], time => {
            const newDiv = document.createElement("div");
            newDiv.classList.add(`time-${time}`);
            newDiv.innerHTML = `${time * num.timeCap.value / 100}秒`;
            ganttTimeArea.appendChild(newDiv);
        })
        const newTbody = document.createElement("tbody");
        newTbody.id = `gantt_${type}`;
        ganttArea.appendChild(newTbody);
        
        if(isEdited) _.forEach(lists.customFlow[index][type], unit => funcs.createHTML.modal.AddGantt(type, unit));
    });
}
// ガントチャート追加
funcs.createHTML.modal.AddGantt = (type, unit = null) => {
    if(!_.includes(graph.gantt.unitType, type)) return;
    
    const tbody = document.getElementById(`gantt_${type}`);
    const unitIndex = graph.gantt.unitIndex[type];
    const id = `${type}-${unitIndex}`;
    const barsArray = [];
    
    const newTr = document.createElement("tr");
    let newTd = document.createElement("td");
    const ganttUnit = document.createElement("div");
    ganttUnit.id = `ganttUnit-${id}`;
    const unitSelector = document.createElement("select");
    unitSelector.classList.add("unitSelector");
    let txt = `
        <option value="" style="display: none;"></option>`;
    switch(type) {
        case "onSkillAct":
        case "onHit":
            _.forEach(lists.units[type].list, HPredUnit => {
                const unitName = HPredUnit.unitInfo.unitName;
                txt += `
                    <option
                        value="{ type: '${type}', id: ${HPredUnit.id} }"
                        ${unit && unitName === unit.unitInfo.unitName ? "selected" : ""}
                    >
                        ${unitName}
                    </option>`;
            });
            break;
        case "buffer":
            txt += `
                <option class="unselectable" disabled>${lists.buff.rCT.jap}</option>
                <option
                    value="{ type: '${type}', buffType: 'rCTdepType' }"
                    ${unit && unit.bufferInfo.buffer === "再動短縮(対配置型)" ? "selected" : ""}
                >
                    再動短縮(対配置型)
                </option>`;
            const selected = unit && "id" in unit.bufferInfo ? { buffType: unit.buffType, id: unit.bufferInfo.id } : {};
            _.forEach(lists.buff, (buff, buffType) => {
                if(buffType === "rCTdepType") return;
                const arr_txt = [];
                _.forEach(buff.list, bufferInfo => {
                    if(bufferInfo.req !== "deploy" && bufferInfo.req !== "skill" || bufferInfo.disabled) return;
                    if(_.some(lists.units, units => _.some(units.list, { unitInfo: { unitName: bufferInfo.buffer } }))) return;
                    arr_txt.push(`
                        <option
                            value="{ type: '${type}', buffType: '${buffType}', id: ${bufferInfo.id}}"
                            ${bufferInfo.req === "skill" ? `style="background: #0cc4;"` : ""}
                            ${buffType === selected.buffType && bufferInfo.id === selected.id ? "selected" : ""}
                        >
                            ${bufferInfo.display}
                        </option>`);
                });
                if(arr_txt.length) {
                    if(buffType !== "rCT") arr_txt.unshift(`<option class="unselectable" disabled>${buff.jap}</option>`);
                    txt += arr_txt.join("");
                }
            });
            break;
    }
    unitSelector.innerHTML = txt;
    ganttUnit.appendChild(unitSelector);
    newTd.appendChild(ganttUnit);
    
    newTr.appendChild(newTd);
    newTd = document.createElement("td");
    const ganttBarArea = document.createElement("div");
    ganttBarArea.className = "ganttBarArea";
    ganttBarArea.id = `ganttBarArea-${id}`;
    _.forEach(new Array(3), () => {
        const vLine = document.createElement("div");
        vLine.className = "vLine";
        ganttBarArea.appendChild(vLine);
    });
    newTd.appendChild(ganttBarArea);
    newTr.appendChild(newTd);
    
    newTd = document.createElement("td");
    newTd.innerHTML = `<button type="bottun" onclick="funcs.createHTML.modal.DeleteGantt(this, '${type}', ${unitIndex})">削除</button>`;
    newTr.appendChild(newTd);
    
    tbody.appendChild(newTr);
    const ganttBarAreaWidth = ganttBarArea.clientWidth - 5;
    ganttBarArea.style.width = `${ganttBarArea.clientWidth - 5}px`;
    graph.gantt.minPx = ganttBarAreaWidth / num.timeCap.value / graph.fps;
    // 左右の壁生成
    const leftWall = new graph.gantt.Bar(ganttBarArea, type, 0, 0, barsArray, 0);
    const rightWall = new graph.gantt.Bar(ganttBarArea, type, ganttBarAreaWidth, ganttBarAreaWidth, barsArray, 1);
    barsArray.push(leftWall, rightWall);
    
    graph.gantt.bars[type][unitIndex] = barsArray;
    ++graph.gantt.unitIndex[type];
    // 15体制限
    if(document.getElementsByClassName("ganttBarArea").length === 15)
        _.forEach(document.getElementById("modalGantt").getElementsByClassName("addGanttBtn"), btn => btn.disabled = true);
    
    const CreateGanttUnitTooltip = () => {  // クラス/好感度/スキル/特攻設定用ツールチップ生成
        _.forEach(unitSelector.parentElement.getElementsByClassName("tooltip-ganttUnit"), elem => elem.remove());
        const selected = new Function(`return ${unitSelector.value};`)();
        let unitInfo = null, skills = null;
        switch(selected.type) {
            case "onSkillAct":
            case "onHit": {
                const HPredUnit = _.find(lists.units[selected.type].list, { id: selected.id });
                unitInfo = HPredUnit.unitInfo;
                skills = HPredUnit.skill.detail;
                break;
            }
            case "buffer": {
                if(selected.buffType === "rCTdepType") {
                    unitInfo = "rCTdepType";
                    break;
                }
                const buffer = _.find(lists.buff[selected.buffType].list, { id: selected.id });
                if("unitInfo" in buffer) unitInfo = buffer.unitInfo;
                break;
            }
        }
        if(!unitInfo) return;
        if(unitInfo === "rCTdepType") {
            let txt = "";
            const values = [ 0, 25, 30, 35, 40, 45, 50, 60 ];
            _.forEach(lists.deployType, (depType, index) => {
                txt += `
                    <div>
                        ${depType}<select class="value_${index}">`;
                if(unit) {
                    _.forEach(values, value => {
                        if(depType === "遠近距離型" && value === 45) return;
                        txt += `
                            <option value="${value}"${value === unit.bufferInfo[depType] ? " selected" : ""}>${value}</option>`
                    });
                } else {
                    _.forEach(values, value => {
                        if(depType === "遠近距離型" && value === 45) return;
                        txt += `
                            <option value="${value}">${value}</option>`
                    });
                }
                txt += `
                        </select>%
                    </div>`;
            });
            
            const newTooltip = document.createElement("div");
            newTooltip.classList.add("tooltip-ganttUnit");
            newTooltip.style.display = "none";
            newTooltip.innerHTML = txt;
            if(isPC) newTooltip.addEventListener("mousedown", e => e.stopPropagation());
            else newTooltip.addEventListener("touchstart", e => e.stopPropagation());
            unitSelector.parentElement.appendChild(newTooltip);
            return;
        }
        
        let txt_cl = "", txt_aff = "", txt_skillAW = "", txt_dmgMul = "";
        if("options" in unitInfo.unitClass) {
            const options = unitInfo.unitClass.options;
            txt_cl = `
                <div>
                    クラス<select class="cl">`;
            _.forEach(options, cl => {
                if(unit)
                    txt_cl += `
                        <option value="${cl}"${cl === unit.unitInfo.unitClass.selected ? " selected" : ""}>${cl}</option>`;
                else
                    txt_cl += `
                        <option value="${cl}"${cl === _.last(options) ? " selected" : ""}>${cl}</option>`;
            });
            txt_cl += `
                    </select>
                </div>
            `;
        }
        const aff = "affection" in unitInfo ? unitInfo.affection : null;
        if(aff && aff.bonus && aff.bonus !== "その他") {
            const init = aff.bonus === "時間延長" && type === "onSkillAct" ? 100 : 150;
            txt_aff = `
                <div>
                    好感度<select class="aff">`;
            for(let p = 100; p <= 150; p +=10) {
                if(unit)
                    txt_aff += `
                        <option value="${p}"${p === unit.unitInfo.affection.percentage ? " selected" : ""}>${p}</option>`;
                else
                    txt_aff += `
                        <option value="${p}"${p === init ? " selected" : ""}>${p}</option>`;
            }
            txt_aff += `
                    </select>%(${aff.bonus})
                </div>
            `;
        }
        if(skills) {
            const dmgMul = _.reduce(skills, (exist, skill, state) => {
                _.forEach(skill, obj => !(exist[state] = "dmgMul" in obj));
                return exist;
            }, {});
            dmgMul.some = _.some(skills, (noUse, state) => dmgMul[state]);
            dmgMul.all = _.every(skills, (noUse, state) => dmgMul[state]);
            if(dmgMul.some) {
                txt_dmgMul = `
                    <div`;
            }
            if(_.size(skills) > 1) {
                txt_skillAW = `
                    <div>
                        スキル<select class="skill"`;
                if(dmgMul.some && !dmgMul.all) {    // スキルによる特攻の有無
                    txt_skillAW += ` onchange="`
                    _.forEach(skills, (noUse, state) =>
                        txt_skillAW += `this.value==='${state}' ? this.parentElement.nextElementSibling.style.display='${dmgMul[state] ? "block" : "none"}' : `
                    );
                    txt_skillAW += `null"`;
                    
                    if(!dmgMul["通常"]) txt_dmgMul += ` style="display: none;"`;
                }
                txt_skillAW += ">";
                _.forEach(skills, (noUse, state) => {
                    if(unit)
                        txt_skillAW += `
                            <option value="${state}"${state === unit.skill.selected ? " selected" : ""}>${state}</option>`;
                    else
                        txt_skillAW += `
                            <option value="${state}"${state === "通常" ? " selected" : ""}>${state}</option>`;
                });
                txt_skillAW += `
                        </select>
                    </div>
                `;
            }
            if(dmgMul.some) {
                txt_dmgMul += `>
                        特攻
                        <input
                            type="checkbox"
                            class="dmgMul"
                            ${unit && unit.skill.dmgMul ? "checked" : ""}
                        >
                    </div>
                `;
            }
        }
        if(txt_cl || txt_aff || txt_skillAW || txt_dmgMul) {
            const newTooltip = document.createElement("div");
            newTooltip.classList.add("tooltip-ganttUnit");
            newTooltip.style.display = "none";
            newTooltip.innerHTML = `${txt_cl}${txt_aff}${txt_skillAW}${txt_dmgMul}`;
            if(isPC) newTooltip.addEventListener("mousedown", e => e.stopPropagation());
            else newTooltip.addEventListener("touchstart", e => e.stopPropagation());
            unitSelector.parentElement.appendChild(newTooltip);
        }
    }
    
    let clickedX;
    let tmpBar = null;
    const between = [ null, null ];
    let index = 0;
    const handleEvent = e => {
        switch(e.type) {
            case "change":      // unitSelector
                CreateGanttUnitTooltip();
                break;
            case "mouseover":   // unitSelector
                _.forEach(e.target.parentElement.getElementsByClassName("tooltip-ganttUnit"), elem => elem.style.display = "block");
                break;
            case "click":       // document
                if(!e.target.closest(`#ganttUnit-${id}`))
                    _.forEach(ganttUnit.getElementsByClassName("tooltip-ganttUnit"), elem => elem.style.display = "none");
                if(!e.target.closest(`#ganttBarArea-${id}`))
                    _.forEach(ganttBarArea.getElementsByClassName("tooltip-bar"), elem => elem.style.display = "none");
                break;
            case "mousedown":   // ganttBarArea
            case "touchstart":
                e.preventDefault();
                if(e.button === 1) break;
                clickedX = e.clientX - ganttBarArea.getBoundingClientRect().left;
                _.forEach(barsArray, bar => {   // どのバーの間をクリックしたか判断
                    between[0] = between[1];
                    between[1] = bar;
                    if(clickedX >= bar.toX) {
                        ++index;
                        return;
                    }
                    if(clickedX > bar.fromX) {
                        between[0] = between[1] = null;
                        index = 0;
                    }
                    return false;
                });
                if(!between[0] || !between[1]) break;   // バーがあるところは生成不可
                tmpBar = document.createElement("div");
                tmpBar.classList.add("ganttBar", type);
                tmpBar.style.opacity = "40%";
                tmpBar.style.width = "0px";
                tmpBar.style.left = `${clickedX}px`;
                ganttBarArea.appendChild(tmpBar);
                if(isPC) {
                    document.addEventListener("mousemove", handleEvent);
                    document.addEventListener("mouseup", handleEvent);
                } else {
                    document.addEventListener("touchmove", handleEvent);
                    document.addEventListener("touchout", handleEvent);
                }
                break;
            case "mousemove":   // ganttBarArea => document
            case "touchmove":
                let movedEnd = e.clientX - ganttBarArea.getBoundingClientRect().left;
                let dX = movedEnd - clickedX;
                if(dX >= 0) {   // 右に動かした
                    const rightEdge = between[1].fromX - graph.gantt.minPx;
                    if(movedEnd > rightEdge) dX = rightEdge - clickedX;
                    tmpBar.style.width = `${dX}px`;
                } else {        // 左に動かした
                    const leftEdge = between[0].toX + graph.gantt.minPx;
                    if(movedEnd < leftEdge) {
                        movedEnd = leftEdge;
                        dX = movedEnd - clickedX;
                    }
                    tmpBar.style.width = `${-dX}px`;
                    tmpBar.style.left = `${movedEnd}px`;
                }
                break;
            case "mouseup":     // ganttBarArea => document
            case "touchout":
                const fromX = tmpBar.getBoundingClientRect().left - ganttBarArea.getBoundingClientRect().left;
                const toX = fromX + tmpBar.clientWidth;
                barsArray.splice(index, 0, new graph.gantt.Bar(ganttBarArea, type, fromX, toX, barsArray, index));
                tmpBar.remove();
                tmpBar = null;
                between[0] = between[1] = null;
                index = 0;
                if(isPC) {
                    document.removeEventListener("mousemove", handleEvent);
                    document.removeEventListener("mouseup", handleEvent);
                } else {
                    document.removeEventListener("touchmove", handleEvent);
                    document.removeEventListener("touchout", handleEvent);
                }
                break;
        }
    }
    //unitSelector.addEventListener("change", handleEvent);
    unitSelector.addEventListener("change", CreateGanttUnitTooltip);
    if(isPC) {
        unitSelector.addEventListener("mouseover", handleEvent);
        ganttBarArea.addEventListener("mousedown", handleEvent);
        ganttBarArea.addEventListener("dragstart", () => false);
    } else {
        unitSelector.addEventListener("touchstart", e =>
            _.forEach(e.target.parentElement.getElementsByClassName("tooltip-ganttUnit"), elem => elem.style.display = "block")
        );
        ganttBarArea.addEventListener("touchstart", handleEvent);
    }
    document.removeEventListener("click", handleEvent);
    document.addEventListener("click", handleEvent);
    
    if(unit) {
        _.forEach(unit.deploy, (range, index) => {
            const barIndex = index + 1;
            const fromX = graph.gantt.toPx(range[0]);
            if(fromX > ganttBarAreaWidth) return false;
            const toX = graph.gantt.toPx(range[1]);
            barsArray.splice(barIndex, 0, new graph.gantt.Bar(ganttBarArea, type, fromX, toX, barsArray, barIndex));
        });
        CreateGanttUnitTooltip();
    }
}
// ガントチャート削除
funcs.createHTML.modal.DeleteGantt = (thisElem, type, unitIndex) => {
    if(!_.includes(graph.gantt.unitType, type)) return;
    if(!graph.gantt.bars) return;
    
    _.forEach(graph.gantt.bars[type][unitIndex], bar => { delete bar; });
    delete graph.gantt.bars[type][unitIndex];
    thisElem.parentElement.parentElement.remove();
    _.forEach(document.getElementById("modalGantt").getElementsByClassName("addGanttBtn"), btn => { btn.disabled = false });
}
// モーダル消去
funcs.createHTML.modal.Destroy_customFlow = () => {
    _.forEach(graph.gantt.bars, unitBars => {
        _.forEach(unitBars, barsArray => {
            _.forEach(barsArray, bar => { delete bar; });
        });
    });
    graph.gantt.bars = null;
    graph.gantt.unitIndex = null;
    const elem_modal = document.getElementById("modal");
    if(elem_modal) {
        elem_modal.classList.add("is-unshown");
        elem_modal.innerHTML = "";
    }
}
// フロー決定
funcs.graph.Decide_customFlow = index => {
    const unitSelectors = document.getElementsByClassName("unitSelector");
    if(!unitSelectors.length || !_.some(graph.gantt.bars, (bars, type) => !(type === "buffer") && _.some(bars, arr => arr.length > 2))) {
        document.getElementById("ganttAlart").innerHTML = "※少なくとも割合ダメージユニットを1体設定する必要があります";
        return;
    } else if(_.some(unitSelectors, select => !select.value)) {
        document.getElementById("ganttAlart").innerHTML = "※選択されていないユニット名があります";
        return;
    }
    
    const flow = _.reduce(graph.gantt.unitType, (obj, type) => { obj[type] = []; return obj; }, {});
    // 同名ユニットの数
    const sameUnitCount = {};
    _.forEach(graph.gantt.bars, (bars, type) => {
        switch(type) {
            case "onSkillAct":
            case "onHit":
                _.forEach(bars, (arr, unitIndex) => {
                    const unit = {};
                    unit.deploy = _.reduce(arr, (result, bar) => {
                        if(bar.tooltip) result.push([ bar.tooltip.depFrame, bar.tooltip.wdFrame ]);
                        return result;
                    }, []);
                    if(!unit.deploy) return;
                    const ganttUnit = document.getElementById(`ganttUnit-${type}-${unitIndex}`);
                    const selected = new Function(`return ${ganttUnit.getElementsByClassName("unitSelector")[0].value};`)();
                    const selectedUnit = _.find(lists.units[type].list, { id: selected.id });
                    const ganttUnitTooltip = ganttUnit.getElementsByClassName("tooltip-ganttUnit")[0];
                    const selectedDetail = !ganttUnitTooltip ? {} : _.reduce(
                        ganttUnitTooltip.getElementsByTagName("select")
                        , (result, elem) => {
                            result[elem.classList[0]] = elem.value;
                            return result;
                        }
                        , {}
                    );
                    const checkboxDetail = !ganttUnitTooltip ? {} : _.reduce(
                        ganttUnitTooltip.getElementsByTagName("input")
                        , (result, elem) => {
                            result[elem.classList[0]] = elem.checked;
                            return result;
                        }
                        , {}
                    );
                    unit.id = `${type}_${selectedUnit.id}`;
                    if(unit.id in sameUnitCount) ++sameUnitCount[unit.id][0];
                    else sameUnitCount[unit.id] = [ 1, 1 ];
                    unit.unitInfo = _.cloneDeep(selectedUnit.unitInfo);
                    if("cl" in selectedDetail) unit.unitInfo.unitClass.selected = selectedDetail.cl;
                    if("buff" in selectedUnit) {
                        const buffs = _.reduce(selectedUnit.buff, (result, buff, buffType) => {
                            const arr = _.compact([
                                _.find(buff, { buffer: unit.unitInfo.unitName })
                                , _.find(buff, { buffer: unit.unitInfo.unitClass.selected })
                            ]);
                            if(arr.length) result[buffType] = arr;
                            return result;
                        }, {});
                        if(_.size(buffs)) unit.buff = buffs;
                    }
                    if("selfBuff" in selectedUnit) {
                        const selfBuffs = _.reduce(selectedUnit.selfBuff, (result, selfBuff, buffType) => {
                            const arr = _.compact([
                                _.find(selfBuff, { buffer: unit.unitInfo.unitName })
                                , _.find(selfBuff, { buffer: unit.unitInfo.unitClass.selected })
                            ]);
                            if(arr.length) result[buffType] = arr;
                            return result;
                        }, {});
                        if(_.size(selfBuffs)) unit.selfBuff = selfBuffs;
                    }
                    if("aff" in selectedDetail) unit.unitInfo.affection.percentage = Number(selectedDetail.aff);
                    unit.skill = {};
                    unit.skill.selected = "skill" in selectedDetail ? selectedDetail.skill : selectedUnit.skill.selected;
                    unit.skill.detail = {};
                    unit.skill.detail[unit.skill.selected] = _.cloneDeep(selectedUnit.skill.detail[unit.skill.selected]);
                    if("dmgMul" in checkboxDetail) unit.skill.dmgMul = checkboxDetail.dmgMul;
                    unit.deploy.push([ Infinity, Infinity ]);
                    flow[type].push(unit);
                });
                break;
            case "buffer":
                _.forEach(bars, (arr, unitIndex) => {
                    const unit = {};
                    unit.deploy = _.reduce(arr, (result, bar) => {
                        if(bar.tooltip) result.push([ bar.tooltip.depFrame, bar.tooltip.wdFrame ]);
                        return result;
                    }, []);
                    if(!unit.deploy.length) return;
                    const ganttUnit = document.getElementById(`ganttUnit-${type}-${unitIndex}`);
                    const selected = new Function(`return ${ganttUnit.getElementsByClassName("unitSelector")[0].value};`)();
                    const ganttUnitTooltip = ganttUnit.getElementsByClassName("tooltip-ganttUnit")[0];
                    const selectedDetail = !ganttUnitTooltip ? {} : _.reduce(
                        ganttUnitTooltip.getElementsByTagName("select")
                        , (result, elem) => {
                            result[elem.classList[0]] = elem.value;
                            return result;
                        }, {}
                    );
                    unit.buffType = selected.buffType;
                    unit.id = unit.buffType;
                    if(unit.buffType === "rCTdepType") {
                        unit.bufferInfo = {
                            buffer: "再動短縮(対配置型)"
                            , "近接型": Number(selectedDetail.value_0)
                            , "遠距離型": Number(selectedDetail.value_1)
                            , "遠近距離型": Number(selectedDetail.value_2)
                        };
                    } else {
                        unit.bufferInfo = _.find(lists.buff[unit.buffType].list, { id: selected.id });
                        unit.id += `_${unit.bufferInfo.id}`;
                        if("unitInfo" in unit.bufferInfo) {
                            unit.unitInfo = unit.bufferInfo.unitInfo;
                            if("cl" in selectedDetail) unit.unitInfo.unitClass.selected = selectedDetail.cl;
                        }
                    }
                    if(unit.id in sameUnitCount) ++sameUnitCount[unit.id][0];
                    else sameUnitCount[unit.id] = [ 1, 1 ];
                    unit.deploy.push([ Infinity, Infinity ]);
                    flow[type].push(unit);
                });
                break;
        }
    });
    _.forEach(flow, (units, type) => {
        switch(type) {
            case "onSkillAct":
            case "onHit":
                _.forEach(units, unit => {
                    const txt_num = sameUnitCount[unit.id][0] > 1 ? `(${sameUnitCount[unit.id][1]++})` : "";
                    unit.display = `${unit.unitInfo.unitName}${txt_num}`;
                });
                break;
            case "buffer":
                _.forEach(units, unit => {
                    const txt_num = sameUnitCount[unit.id][0] > 1 ? `(${sameUnitCount[unit.id][1]++})` : "";
                    unit.display = `${unit.bufferInfo.display}${txt_num}`;
                });
                break;
        }
    })
    
    lists.customFlow.splice(index, 1, flow);
    funcs.createHTML.modal.Destroy_customFlow();
    funcs.createHTML.CustomFlowTable();
    if(saveData.db) funcs.saveData.UpdateData("customFlow", `[${index}]`, flow);
    if(document.getElementById("switchGraph").switchGraph.value === "Flow")
        funcs.graph.SetGraphData(index);
}

// グラフデータ作成(フロー)
funcs.graph.Flow = (isThinned, index) => {
    const buffTypes = Object.keys(lists.buff);
    // buffers[reqType][buffType] -> array
    //    team     : 配列内はlists.buff[buffType].listの各バッファーの情報
    //    otherwise: 配列内 id: 配置ユニットのid, bufferInfo: バッファー情報, target: バフ対象のid(array)
    const buffers = _.reduce([ "team", "deploy", "skill" ], (reqTypes, reqType) => {
        reqTypes[reqType] = _.reduce(buffTypes, (types, buffType) => {
            types[buffType] = [];
            return types;
        }, {});
        return reqTypes;
    }, {});
    _.forEach(buffers.team, (buff, buffType) => {
        _.forEach(_.filter(document.getElementById(buffType).getElementsByTagName("input"), elem => elem.checked), elem =>
            buff.push(_.find(lists.buff[buffType].list, { id: Number(elem.value) }))
        )
    });
    
    if(!Number.isFinite(index)) {
        const delta_h = 360.0 / lists.customFlow.length;
        let h = 0.0;
        while(graph.chart.series.values.length) {
            graph.chart.series.removeIndex(0);
            graph.legend.itemContainers.removeIndex(0);
        }
        lists.customFlowLog.splice(0);
        _.forEach(lists.customFlow, (flow, index) => {
            const data = funcs.graph.FlowSub(isThinned, flow, index, buffTypes, _.cloneDeep(buffers));
            
            /*
            let rgba;
            const range = h / 60;
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
                name: `フロー#${index + 1}`
                , xAxis: graph.xAxis
                , yAxis: graph.yAxis
                , valueXField: "time"
                , valueYField: "HP"
                , stroke: `hsl(${h}, 100%, 50%)`
                , legendValueText: `{valueY.formatNumber("###.00'%'")}`
            }));
            series.strokes.template.setAll({
                opacity: 0.8
                , strokeWidth: graph.strokeWidth
            });
            series.data.setAll(data);
            h += delta_h;
        });
        graph.legend.data.setAll(graph.chart.series.values);
    } else if(index === graph.chart.series.length) {
        const flow = lists.customFlow[index];
        const data = funcs.graph.FlowSub(isThinned, flow, index, buffTypes, _.cloneDeep(buffers));
        
        const series = graph.chart.series.push(am5xy.LineSeries.new(graph.root, {
            name: `フロー#${index + 1}`
            , xAxis: graph.xAxis
            , yAxis: graph.yAxis
            , valueXField: "time"
            , valueYField: "HP"
            , legendValueText: `{valueY.formatNumber("###.00'%'")}`
        }));
        series.strokes.template.setAll({
            opacity: 0.8
            , strokeWidth: graph.strokeWidth
        });
        series.data.setAll(data);
        graph.legend.data.push(series);
        const delta_h = 360.0 / lists.customFlow.length;
        let h = 0.0;
        graph.chart.series.each(chartSeries => {
            chartSeries.set("stroke", `hsl(${h}, 100%, 50%)`);
            h += delta_h;
        });
    } else {
        const flow = lists.customFlow[index];
        const data = funcs.graph.FlowSub(isThinned, flow, index, buffTypes, _.cloneDeep(buffers));
        graph.chart.series.values[index].data.setAll(data);
    }
}
funcs.graph.FlowSub = (isThinned, flow, index, buffTypes, buffers) => {
    // buffed[reqType][buffType][バフを受けるユニットのid] ->
    //    team     : バフ値
    //    otherwise: [バッファーのid] -> バフ値
    const buffed = _.reduce([ "team", "deploy", "skill" ], (reqTypes, reqType) => {
        reqTypes[reqType] = _.reduce(buffTypes, (types, buffType) => {
            types[buffType] = {};
            return types;
        }, {});
        return reqTypes;
    }, {});
    
    // バッファーの情報を抽出
    _.forEach(flow, (units, type) => {
        switch(type) {
            case "onSkillAct":
            case "onHit":
                _.forEach(units, (unit, unitIndex) => {
                    if("buff" in unit) {
                        const id = `${type}_${unitIndex}`;
                        _.forEach(unit.buff, (buff, buffType) => {
                            if(buffType === "rCTdepType") {
                                buffers.deploy.rCTdepType.push({ id: id, bufferInfo: buff.rCTdepType[unit.unitInfo.unitClass.selected] });
                                return;
                            }
                            _.forEach(buff, bufferInfo => {
                                const req = bufferInfo.req;
                                if(req === "team") {
                                    if(!_.some(buffers.team[buffType], { buffer: bufferInfo.buffer }))
                                        buffers.team[buffType].push(bufferInfo);
                                } else buffers[req][buffType].push({ id: id, bufferInfo: bufferInfo });
                            });
                        });
                    }
                });
                return;
            case "buffer":
                _.forEach(units, (unit, unitIndex) => {
                    const id = `${type}_${unitIndex}`;
                    if(unit.buffType === "rCTdepType") {
                        buffers.deploy.rCTdepType.push({ id: id, bufferInfo: unit.bufferInfo });
                        return;
                    }
                    buffers[unit.bufferInfo.req][unit.buffType].push({ id: id, bufferInfo: unit.bufferInfo });
                    if("compound" in unit.bufferInfo) {
                        _.forEach(unit.bufferInfo.compound, (compObj, compType) => {
                            if(compType === "rCTdepType") {
                                buffers.deploy.rCTdepType.push({ id: id, bufferInfo: compObj });
                                return;
                            }
                            _.forEach(compObj, comp => {
                                _.forEach(comp.target, compBuffer => {
                                    if(compBuffer.when < 1) return;
                                    const req = compBuffer.bufferInfo.req;
                                    if(req === "team") {
                                        if(!_.some(buffers.team[compType], { buffer: compBuffer.bufferInfo.buffer }))
                                            buffers.team[compType].push(compBuffer.bufferInfo);
                                    } else buffers[req][compType].push({ id: id, bufferInfo: compBuffer.bufferInfo });
                                });
                            });
                        });
                    }
                })
                return;
        }
    });
    
    // 各ユニットの必要な所だけ抽出
    const data = {};
    const buffChangedTarget = _.reduce(buffTypes, (types, buffType) => {
        if(buffType === "rCTdepType") return types;
        types[buffType] = [];
        return types;
    }, {});
    _.forEach(flow, (units, type) => {
        switch(type) {
            case "onSkillAct":
            case "onHit":
                const isOnHit = type === "onHit";
                _.forEach(units, (unit, unitIndex) => {
                    funcs.unitsData.CorrectSkill(unit, false);
                    funcs.unitsData.CorrectAtkInterval(unit, false);
                    funcs.unitsData.SetHPred(unit, false);
                    const id = `${type}_${unitIndex}`;
                    const unitName = unit.unitInfo.unitName;
                    const unitClass = unit.unitInfo.unitClass.selected;
                    const AW = unit.skill.selected;
                    data[id] = {
                        type: type
                        , unitName: unit.display
                        , unitClass: unitClass
                        , skill_arr: []
                        , skill: null
                        , deploy: unit.deploy
                        , depIndex: 0
                        , state: {      // 現在の状況
                            deploy: false
                            , WT: false
                            , CT: false
                            , skill: false
                        }
                        , left: {       // 現在の状況の残り時間[f](30fps)
                            deploy: unit.deploy[0][0]
                        }
                    };
                    if(isOnHit) {
                        const atkInt = unit.unitInfo.atkInterval.corr;
                        data[id].atkInt = {     // *.atkInt.*[#]| 0: 攻撃発生まで, 1: 攻撃間隔
                            corr: {
                                /*
                                notSkill: [
                                    Math.floor(atkInt.notSkill.startup / 2)
                                    , Math.floor((atkInt.notSkill.startup + atkInt.notSkill.remain - 1) / 2)
                                        + Math.floor((atkInt.notSkill.cooldown - 1) / 2)
                                        + 2
                                ]
                                ,
                                */
                                skill: [
                                    Math.floor(atkInt[AW].startup / 2)
                                    , Math.floor((atkInt[AW].startup + atkInt[AW].remain - 1) / 2)
                                        + Math.floor((atkInt[AW].cooldown - 1) / 2)
                                        + 2
                                ]
                            }
                            , uncorr: {
                                /*
                                notSkill: atkInt.notSkill
                                ,
                                */
                                skill: atkInt[AW]
                            }
                        };
                        data[id].immunity = {
                            status: _.includes(unit.unitInfo.note, "状態異常無効")
                            , deepSea: _.includes(unit.unitInfo.note, "深海適応")
                        };
                        data[id].left.atkInt = Infinity;
                    }
                    const IsUnrelated = buffType => !isOnHit && (_.includes(buffType, "haste") || buffType === "redMapEff")
                    // 被バフ
                    _.forEach(buffers, (buff, reqType) => {
                        switch(reqType) {
                            case "team":
                                _.forEach(buff, (arr, buffType) => {
                                    if(IsUnrelated(buffType)) return;
                                    let value = 0;
                                    _.forEach(arr, bufferInfo => value = Math.max(value, bufferInfo.value * funcs.unitsData.IsTarget(unit, bufferInfo)));
                                    buffed.team[buffType][id] = _.includes(buffType, "Fixed") ? value : value / 100.0;
                                    if(buffType === "skillExtendFixed") buffed.team[buffType][id] *= graph.fps;
                                });
                                if(buffed.team.rCTdepType[id])
                                    buffed.team.rCT[id] = Math.max(buffed.team.rCTdepType[id], buffed.team.rCT[id]);
                                _.forEach(buffChangedTarget, (target, buffTypes) => {
                                    if(buffed.team[buffTypes][id]) target.push(id);
                                });
                                break;
                            case "deploy":
                            case "skill":
                                _.forEach(buff, (arr, buffType) => {
                                    if(IsUnrelated(buffType)) return;
                                    const buffedInfo = {};
                                    if(buffType === "rCTdepType") {
                                        _.forEach(arr, buffer => {
                                            if(!("target" in buffer)) buffer.target = [];
                                            buffer.target.push(id);
                                            buffedInfo[buffer.id] = buffer.bufferInfo[unit.unitInfo.deployType] / 100.0;
                                        });
                                    } else {
                                        _.forEach(arr, buffer => {
                                            if(funcs.unitsData.IsTarget(unit, buffer.bufferInfo)) {
                                                if(!("target" in buffer)) buffer.target = [];
                                                buffer.target.push(id);
                                                const value = buffer.bufferInfo.value;
                                                buffedInfo[buffer.id] = _.includes(buffType, "Fixed") ? value : value / 100.0;
                                                if(buffType === "skillExtendFixed") buffed.team[buffType][id] *= graph.fps;
                                            }
                                        });
                                    }
                                    if(_.size(buffedInfo)) buffed[reqType][buffType][id] = buffedInfo;
                                });
                                _.forEach(buffed[reqType].rCTdepType[id], (value, bufferID) => {
                                    if(id in buffed[reqType].rCT) {
                                        if(bufferID in buffed[reqType].rCT[id])
                                            buffed[reqType].rCT[id][bufferID] = Math.max(value, buffed[reqType].rCT[id][bufferID]);
                                        else buffed[reqType].rCT[id][bufferID] = value;
                                    } else {
                                        buffed[reqType].rCT[id] = {};
                                        buffed[reqType].rCT[id][bufferID] = value;
                                    }
                                });
                                break;
                        }
                    });
                    // 自己バフ
                    data[id].selfBuff = _.reduce(buffTypes, (result, buffType) => {
                        if(IsUnrelated(buffType)) return result;
                        result[buffType] = 0;
                        if(buffType !== "rCTdepType" && buffType !== "hasteFixed" && "selfBuff" in unit && buffType in unit.selfBuff) {
                            let value = [ 0, 0 ];
                            bufferInfo = _.find(unit.selfBuff[buffType], { buffer: unitName });
                            if(bufferInfo) value[0] = bufferInfo.value;
                            bufferInfo = _.find(unit.selfBuff[buffType], { buffer: unitClass });
                            if(bufferInfo) value[1] = bufferInfo.value;
                            result[buffType] = _.sum(value);
                            if(buffType === "skillExtendFixed") result[buffType] *= graph.fps;
                            else result[buffType] /= 100.0;
                        }
                        return result;
                    }, {});
                    const buff = {
                        WT: (1.0 - Math.max(data[id].selfBuff.rWT, buffed.team.rWT[id]))
                        , CT: (1.0 - Math.max(data[id].selfBuff.rCT, buffed.team.rCT[id]))
                        , dur: [
                            (1.0 + data[id].selfBuff.skillExtend) * (1.0 + buffed.team.skillExtend[id])
                            , data[id].selfBuff.skillExtendFixed + buffed.team.skillExtendFixed[id]
                        ]
                    }
                    _.forEach(unit.skill.detail[AW], (obj, index) => {
                        const time = {
                            WT: Math.floor(obj.corr.WT * graph.fps)
                            , CT: Math.floor(obj.corr.CT * graph.fps)
                            , dur: Math.floor(obj.corr.dur * graph.fps)
                        }
                        const skill = {
                            corr: {
                                WT: Math.floor(time.WT * buff.WT)
                                , CT: Math.floor(time.CT * buff.CT)
                                , dur: Math.floor(time.dur * buff.dur[0] + buff.dur[1])
                            }
                            , uncorr: {
                                WT: time.WT
                                , CT: time.CT
                                , dur: time.dur
                            }
                            , next: obj.next
                        };
                        data[id].skill_arr.push(skill);
                        if("target" in obj) {
                            skill.uncorr.HPred = obj.uncorr.HPred / 100.0;
                            skill.corr.HPred = obj.uncorr.HPred / 100.0;
                            if("dmgMul" in obj && unit.skill.dmgMul) skill.dmgMul = obj.dmgMul.mul;
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
                            data[id].skill = skill;
                            data[id].left.skill = Infinity;
                        }
                    });
                });
                break;
            case "buffer":
                _.forEach(units, (unit, unitIndex) => {
                    const id = `${type}_${unitIndex}`;
                    const buffer = unit.bufferInfo.buffer;
                    data[id] = {
                        type: type
                        , req: unit.bufferInfo.req
                        , buffer: unit.display
                        , deploy: unit.deploy
                        , depIndex: 0
                        , state: {      // 現在の状況
                            deploy: false
                        }
                        , left: {       // 現在の状況の残り時間[f](30fps)
                            deploy: unit.deploy[0][0]
                        }
                    };
                    if(data[id].req !== "skill") return;
                    const IsUnrelated = buffType => buffType !== "rWT" && !_.includes(buffType, "rCT") && !_.includes(buffType, "skill");
                    const unitClass = unit.unitInfo.unitClass.selected;
                    data[id].unitClass = unitClass;
                    data[id].state.WT = false;
                    data[id].state.CT = false;
                    data[id].state.skill = false;
                    data[id].left.skill = 0;
                    // 被バフ
                    _.forEach(buffers, (buff, reqType) => {
                        switch(reqType) {
                            case "team":
                                _.forEach(buff, (arr, buffType) => {
                                    if(IsUnrelated(buffType)) return;
                                    let value = 0;
                                    _.forEach(arr, bufferInfo => value = Math.max(value, bufferInfo.value * funcs.unitsData.IsTarget(unit, bufferInfo)));
                                    buffed.team[buffType][id] = _.includes(buffType, "Fixed") ? value : value / 100.0;
                                    if(buffType === "skillExtendFixed") buffed.team[buffType][id] *= graph.fps;
                                });
                                if(buffed.team.rCTdepType[id])
                                    buffed.team.rCT[id] = Math.max(buffed.team.rCTdepType[id], buffed.team.rCT[id]);
                                _.forEach(buffChangedTarget, (target, buffTypes) => {
                                    if(buffed.team[buffTypes][id]) target.push(id);
                                });
                                break;
                            case "deploy":
                            case "skill":
                                _.forEach(buff, (arr, buffType) => {
                                    if(IsUnrelated(buffType)) return;
                                    const buffedInfo = {};
                                    if(buffType === "rCTdepType") {
                                        _.forEach(arr, buffer => {
                                            if(!("target" in buffer)) buffer.target = [];
                                            buffer.target.push(id);
                                            buffedInfo[buffer.id] = buffer.bufferInfo[unit.unitInfo.deployType] / 100.0;
                                        });
                                    } else {
                                        _.forEach(arr, buffer => {
                                            if(funcs.unitsData.IsTarget(unit, buffer.bufferInfo)) {
                                                if(!("target" in buffer)) buffer.target = [];
                                                buffer.target.push(id);
                                                const value = buffer.bufferInfo.value;
                                                buffedInfo[buffer.id] = _.includes(buffType, "Fixed") ? value : value / 100.0;
                                                if(buffType === "skillExtendFixed") buffed.team[buffType][id] *= graph.fps;
                                            }
                                        });
                                    }
                                    if(_.size(buffedInfo)) buffed[reqType][buffType][id] = buffedInfo;
                                });
                                _.forEach(buffed[reqType].rCTdepType[id], (value, bufferID) => {
                                    if(id in buffed[reqType].rCT) {
                                        if(bufferID in buffed[reqType].rCT[id])
                                            buffed[reqType].rCT[id][bufferID] = Math.max(value, buffed[reqType].rCT[id][bufferID]);
                                        else buffed[reqType].rCT[id][bufferID] = value;
                                    } else {
                                        buffed[reqType].rCT[id] = {};
                                        buffed[reqType].rCT[id][bufferID] = value;
                                    }
                                });
                                break;
                        }
                    });
                    // 自己バフ
                    data[id].selfBuff = _.reduce(buffTypes, (result, buffType) => {
                        if(IsUnrelated(buffType)) return result;
                        result[buffType] = 0;
                        if(buffType !== "rCTdepType" && "selfBuff" in unit && buffType in unit.selfBuff) {
                            let value = [ 0, 0 ];
                            bufferInfo = _.find(unit.selfBuff[buffType], { buffer: buffer });
                            if(bufferInfo) value[0] = bufferInfo.value;
                            bufferInfo = _.find(unit.selfBuff[buffType], { buffer: unitClass });
                            if(bufferInfo) value[1] = bufferInfo.value;
                            result[buffType] = _.sum(value);
                            if(buffType === "skillExtendFixed") result[buffType] *= graph.fps;
                            else result[buffType] /= 100.0;
                        }
                        return result;
                    }, {});
                    const buff = {
                        WT: (1.0 - Math.max(data[id].selfBuff.rWT, buffed.team.rWT[id]))
                        , CT: (1.0 - Math.max(data[id].selfBuff.rCT, buffed.team.rCT[id]))
                        , dur: [
                            (1.0 + data[id].selfBuff.skillExtend) * (1.0 + buffed.team.skillExtend[id])
                            , data[id].selfBuff.skillExtendFixed + buffed.team.skillExtendFixed[id]
                        ]
                    }
                    const time = {
                        WT: Math.floor(unit.unitInfo.WT * graph.fps)
                        , CT: Math.floor(unit.unitInfo.CT * graph.fps)
                        , dur: Math.floor(unit.unitInfo.dur * graph.fps)
                    }
                    data[id].skill = {
                        corr: {
                            WT: Math.floor(time.WT * buff.WT)
                            , CT: Math.floor(time.CT * buff.CT)
                            , dur: Math.floor(time.dur * buff.dur[0] + buff.dur[1])
                        }
                        , uncorr: {
                            WT: time.WT
                            , CT: time.CT
                            , dur: time.dur
                        }
                    };
                    data[id].left.skill = Infinity;
                });
                break;
        }
    });
    _.forEach(buffed, obj => delete obj.rCTdepType);
    // 対象のいないバッファーの情報を削除
    _.forEach(
        _.reduce(data, (result, unit, id) => {
            const buff = {};
            _.forEach(buffers, (buffs, reqType) => {
                if(reqType === "team") return;
                buff[reqType] = {};
                _.forEach(buffs, (arr, buffType) => {
                    const target = [];
                    _.forEachRight(arr, (obj, index) => {
                        if(obj.id !== id) return;
                        if("target" in obj) {
                            target.push(...obj.target);
                        } else arr.splice(index, 1);
                    });
                    if(target.length) {
                        if(buffType === "rCTdepType") buffType = "rCT";
                        buff[reqType][buffType] = _.uniq(target);
                        //if(unit.left[reqType] === 0 || unit.state[reqType]) buffChangedTarget[buffType].push(...buff[reqType][buffType]);
                    }
                });
                if(!_.size(buff[reqType])) delete buff[reqType];
            });
            if(_.size(buff)) unit.buff = buff;
            else {
                if(unit.type === "buffer") result.push(id);
            }
            return result;
        }, [])
        , id => {
            delete data[id];
            _.forEach(data, unit => {
                if("buff" in unit) _.forEach(unit.buff, buffs => _.forEach(buffs, target => _.remove(target, targetID => targetID === id)));
            });
            _.forEach(buffChangedTarget, target => _.remove(target, targetID => targetID === id));
        }
    );
    buffers = null;
    
    const conversion = { rWT: "WT", rCT: "CT" };
    const waitBuff = _.reduce(data, (result, unit, id) => {
        if(!("skill" in unit)) return result;
        result[id] = { rWT: [ 1, false ], rCT: [ 1, false ] };
        return result;
    }, []);
    const durBuff = _.reduce(data, (result, unit, id) => {
        if(!("skill" in unit)) return result;
        result[id] = { skillExtend: 1, skillExtendFixed: 0 };
        return result;
    }, []);
    const atkIntBuff = _.reduce(data, (result, unit, id) => {
        if(!("atkInt" in unit)) return result;
        result[id] = { haste: 1, hasteFixed: 0, redMapEff: 1 };
        return result;
    }, []);
    const dmgMulBuff = _.reduce(data, (result, unit, id) => {
        if(unit.type === "buffer") return result;
        result[id] = { giveDmgMul: 1, takenDmg: 1 };
        return result;
    }, []);
    const ApplyBuff = (changed = {}) => {
        if(!_.size(changed)) {
            _.forEach(buffChangedTarget, (target, buffType) => {
                _.forEach(_.uniq(target), id => {
                    const selfBuff = data[id].selfBuff[buffType];
                    const team = buffed.team[buffType][id];
                    const [ deploy, skill ] = _.map([ "deploy", "skill" ], reqType =>
                            _.reduce(buffed[reqType][buffType][id], (buffValue, value, bufferID) => {
                                if(data[bufferID].state[reqType] && buffValue < value) buffValue = value;
                                return buffValue;
                            }, 0)
                        );
                    let buffValue = Math.max(selfBuff, team, deploy, skill);
                    if(!(id in changed)) changed[id] = {};
                    switch(buffType) {
                        case "rWT":
                        case "rCT":
                            waitBuff[id][buffType][0] = 1.0 - buffValue;
                            waitBuff[id][buffType][1] = true;
                            changed[id].wait = true;
                            break;
                        case "skillExtend":
                        case "skillExtendFixed":
                            if(buffType === "skillExtend")
                                buffValue = (1.0 + selfBuff) * (1.0 + Math.max(team, deploy, skill));
                            else
                                buffValue = selfBuff + team + deploy + skill;
                            durBuff[id][buffType] = buffValue;
                            changed[id].dur = true;
                            break;
                        case "haste":
                        case "hasteFixed":
                        case "redMapEff":
                            if(_.includes(buffType, "haste")) buffValue = Math.max(team, deploy, skill);
                            if(buffType !== "hasteFixed") buffValue = 1.0 - buffValue;
                            atkIntBuff[id][buffType] = buffValue;
                            changed[id].atkInt = true;
                            break;
                        case "giveDmgMul":
                        case "takenDmg":
                            dmgMulBuff[id][buffType] = 1.0 + buffValue;
                            changed[id].dmgMul = true;
                            break;
                    }
                });
                target.splice(0);
            });
        }
        _.forEach(data, (unit, id) => {
            if(!(id in changed)) return;
            if("wait" in changed[id]) {
                _.forEach(waitBuff[id], ([ buffValue, changed ], buffType) => {
                    if(!changed) return;
                    const state = conversion[buffType];
                    const prev = unit.skill.corr[state];
                    if(unit.type === "buffer") unit.skill.corr[state] = Math.floor(unit.skill.uncorr[state] * buffValue);
                    else _.forEach(unit.skill_arr, skill => skill.corr[state] = Math.floor(skill.uncorr[state] * buffValue));
                    if(unit.state[state]) unit.left.skill -= prev - unit.skill.corr[state];
                });
            }
            if("dur" in changed[id]) {
                const prevDur = unit.skill.corr.dur;
                if(type === "buffer")
                    unit.skill.corr.dur = Math.floor(unit.skill.uncorr.dur * durBuff[id].skillExtend + durBuff[id].skillExtendFixed);
                else
                    _.forEach(unit.skill_arr, skill =>
                        skill.corr.dur = Math.floor(skill.uncorr.dur * durBuff[id].skillExtend + durBuff[id].skillExtendFixed)
                    );
                if(unit.state.skill) unit.left.skill += unit.skill.corr.dur - prevDur;
            }
            if("atkInt" in changed[id]) {
                _.forEach(unit.atkInt.uncorr, (atkInt, state) => {
                    let atkCD = atkIntBuff[id].hasteFixed
                        ? Math.floor((atkIntBuff[id].hasteFixed - 1) * atkIntBuff[id].haste + 1)
                        : Math.floor((atkInt.cooldown - 1) * Math.min(1.0 - unit.selfBuff.haste, atkIntBuff[id].haste) + 1);
                    if(!unit.immunity.status)
                        atkCD += num.incAtkCooldown_enemy.value * 2;
                    if(!unit.immunity.deepSea)
                        atkCD += Math.ceil(num.incAtkCooldown_map.value * atkIntBuff[id].redMapEff) * 2;
                    unit.atkInt.corr[state][1] = Math.floor((atkInt.startup + atkInt.remain - 1) / 2) + Math.floor((atkCD - 1) / 2) + 2;
                });
            }
            if("dmgMul" in changed[id]) {
                const giveDmgMul = dmgMulBuff[id].giveDmgMul;
                const takenDmg = dmgMulBuff[id].takenDmg;
                _.forEach(unit.skill_arr, skill => {
                    if(!("HPred" in skill.corr)) return;
                    if("dmgMul" in skill) skill.corr.HPred = skill.uncorr.HPred * Math.max(giveDmgMul, skill.dmgMul) * takenDmg;
                    else skill.corr.HPred = skill.uncorr.HPred * giveDmgMul * takenDmg;
                });
            }
        });
    }
    
    const HP = {
        main: { max: num.maxHP.value, now: num.maxHP.value, prev: num.maxHP.value, ratio(term) { return this[term] / this.max } }
        , linked: { max: num.linkedHP.value, now: num.linkedHP.value, ratio() { return this.now / this.max } }
        , changes: [ { frame: 0, time: 0, HP: 100 } ]
    };
    
    const timeCapFrame = num.timeCap.value * graph.fps;
    const DPF = num.DPS.value / graph.fps;
    const DPF_int = Math.trunc(DPF);    // 整数部分
    const DPF_dec = DPF - DPF_int;      // 小数部分
    let DPF_acc = 0.0;                  // 小数部分の蓄積
    let occurHPred = false;
    
    const SetHPchanges = frame => {
        const time = frame / graph.fps;
        if((!isThinned || occurHPred) && HP.main.now !== HP.main.prev || !HP.main.now && HP.main.prev) {
            const prevFrame = frame - graph.scale;
            if(_.last(HP.changes).frame === prevFrame) {
                HP.changes.push({ frame: frame, time: time, HP: HP.main.ratio("now") * 100.0 });
            } else {
                HP.changes.push(
                    { frame: prevFrame, time: prevFrame / graph.fps, HP: HP.main.ratio("prev") * 100.0 }
                    , { frame: frame, time: time, HP: HP.main.ratio("now") * 100.0 }
                );
            }
            occurHPred = false;
        } else if(frame === timeCapFrame)
            HP.changes.push({ frame: timeCapFrame, time: num.timeCap.value, HP: HP.main.ratio("now") * 100.0 });
    }
    
    const ReduceHP = unit => {
        if(!("HPred" in unit.skill.corr)) return null;
        
        const prevHP = HP.main.now;
        let mul = 1.0;
        if(unit.skill.isAttracted) {    // 引き付け(敵)
            mul = funcs.graph.EvilPrincessMulti(unit.unitClass, HP.main.ratio("now"));
            _.forEach(Array(unit.skill.simult), () => 
                HP.main.now -= Math.max(1, Math.floor(HP.main.now * unit.skill.corr.HPred * mul))
            );
        } else {                        // 他
            mul = funcs.graph.EvilPrincessMulti(unit.unitClass, HP.main.ratio("now"));
            HP.main.now -= Math.max(1, Math.floor(HP.main.now * unit.skill.corr.HPred * mul));
            if(unit.skill.isLinked && HP.linked.now > 0) {  // HPリンクあり
                mul = funcs.graph.EvilPrincessMulti(unit.unitClass, HP.linked.ratio());
                const damage = Math.max(1, Math.floor(HP.linked.now * unit.skill.corr.HPred * mul));
                if("simult" in unit.skill) HP.main.now -= damage * Math.min(num.linkedHP.value2, unit.skill.simult);
                else HP.main.now -= damage * num.linkedHP.value2;
                HP.linked.now -= damage;
            }
        }
        occurHPred = true;
        return prevHP - HP.main.now;
    }
    
    if(num.incAtkCooldown_enemy || num.incAtkCooldown_map)
        ApplyBuff(_.reduce(data, (changed, unit, id) => {
                if(unit.type === "onHit") changed[id] = { atkInt: true };
                return changed;
            }, {}));
    
    // 行動ログ
    //    項目：frame, id, name, type, action(, dmg), HP
    const actionLog = [];
    // グラフデータ生成
    for(let frame = 0; frame <= timeCapFrame; ) {
        if(HP.main.now === 0) {
            SetHPchanges(timeCapFrame);
            break;
        }
        DPF_acc += DPF_dec;
        let dmgByDPF = DPF_int;
        if(Math.abs(DPF_acc) >= 1) {
            DPF_acc_int = Math.trunc(DPF_acc);
            dmgByDPF += DPF_acc_int;
            DPF_acc = DPF_acc - DPF_acc_int;
        }
        ApplyBuff();
        _.forEach(data, (unit, id) => {
            // 攻撃処理
            if(unit.left.atkInt === 0) {
                const dmg = ReduceHP(unit);
                unit.left.atkInt = unit.atkInt.corr.skill[1];
                
                actionLog.push({ frame: frame, id: id, name: unit.unitName, type: unit.type, action: "attack", dmg: dmg, HP: HP.main.now });
            }
            
            // ここから次のフレームの処理
            // left処理
            --unit.left.deploy;
            if("skill" in unit) --unit.left.skill;
            if("atkInt" in unit) --unit.left.atkInt;
            
            // 配置・撤退の処理
            if(unit.left.deploy <= 0) {
                if("buff" in unit)
                    _.forEach(unit.buff.deploy, (target, buffType) => buffChangedTarget[buffType].push(...target));
                if(unit.state.deploy) {
                    // 撤退
                    actionLog.push({ frame: frame + 1, id: id, name: unit.unitName, type: unit.type, action: "withdraw", HP: HP.main.now });
                    if(unit.type === "buffer") {
                        _.last(actionLog).name = unit.buffer;
                        _.last(actionLog).type += `_${unit.req}`;
                    }
                    
                    if("skill" in unit) {
                        if("buff" in unit && unit.state.skill)  // スキル中断
                            _.forEach(unit.buff.skill, (target, buffType) => buffChangedTarget[buffType].push(...target));
                        unit.state.WT = unit.state.CT = unit.state.skill = false;
                        unit.left.skill = Infinity;
                    }
                    if("atkInt" in unit) unit.left.atkInt = Infinity;
                    unit.state.deploy = false;
                    unit.left.deploy = unit.deploy[unit.depIndex][0] - unit.deploy[unit.depIndex - 1][1];
                } else {
                    // 配置
                    actionLog.push({ frame: frame + 1, id: id, name: unit.unitName, type: unit.type, action: "deploy", HP: HP.main.now });
                    if(unit.type === "buffer") {
                        _.last(actionLog).name = unit.buffer;
                        _.last(actionLog).type += `_${unit.req}`;
                    }
                    
                    if("skill" in unit) {
                        unit.state.WT = true;
                        unit.left.skill = unit.skill.corr.WT;
                    }
                    unit.state.deploy = true;
                    unit.left.deploy = unit.deploy[unit.depIndex][1] - unit.deploy[unit.depIndex][0];
                    ++unit.depIndex;
                }
            }
            // スキルの処理
            if(unit.left.skill <= 0) {
                if("buff" in unit)
                    _.forEach(unit.buff.skill, (target, buffType) => buffChangedTarget[buffType].push(...target));
                if(unit.state.skill) {
                    // スキル終了
                    actionLog.push({ frame: frame + 1, id: id, name: unit.unitName, type: unit.type, action: "skillOff", HP: HP.main.now });
                    if(unit.type === "buffer") {
                        _.last(actionLog).name = unit.buffer;
                        _.last(actionLog).type += `_${unit.req}`;
                    }
                    
                    unit.state.CT = true;
                    unit.state.skill = false;
                    unit.left.skill = unit.skill.corr.CT;
                    if("atkInt" in unit) unit.left.atkInt = Infinity;
                } else {
                    // スキル発動
                    actionLog.push({ frame: frame + 1, id: id, name: unit.unitName, type: unit.type, action: "skillOn", HP: HP.main.now });
                    if(unit.type === "onSkillAct") _.last(actionLog).dmg = ReduceHP(unit);
                    else if(unit.type === "buffer") {
                        _.last(actionLog).name = unit.buffer;
                        _.last(actionLog).type += `_${unit.req}`;
                    }
                    
                    unit.state.WT = unit.state.CT = false;
                    unit.state.skill = true;
                    unit.left.skill = unit.skill.corr.dur;
                    if("skill_arr" in unit) unit.skill = unit.skill_arr[unit.skill.next];
                    if("atkInt" in unit) unit.left.atkInt = unit.atkInt.corr.skill[0];
                }
            }
        });
        if(HP.main.now <= 0) HP.main.now = 0;
        ++frame;
        if(frame % graph.scale === 0) {
            SetHPchanges(frame);
            HP.main.prev = HP.main.now;
        }
        if(HP.main.now === 0) {
            actionLog.push({ frame: frame, HP: 0 });
            continue;
        }
        
        // DPS処理
        HP.main.now = _.clamp(HP.main.now - dmgByDPF, 0, HP.main.max);
        if(num.linkedHP.use && HP.linked.now > 0) {
            const prevLinkedHP = HP.linked.now;
            HP.linked.now = _.clamp(HP.linked.now - dmgByDPF, 0, HP.linked.max);
            if(DPF > 0) HP.main.now = Math.max(0, HP.main.now - (prevLinkedHP - HP.linked.now) * num.linkedHP.value2);
        }
    }
    lists.customFlowLog.splice(index, 1, _.dropRightWhile(actionLog, log => log.frame > timeCapFrame));
    return HP.changes;
}

// フローの行動ログ表示
funcs.createHTML.modal.Create_customFlowLog = index => {
    const action = {
        deploy: "配置", withdraw: "撤退", skillOn: "スキル発動", skillOff: "スキル終了", attack: "攻撃"
    };
    const logs = lists.customFlowLog[index];
    const logArr = _.map(logs, log => {
        return `
            <tr${"type" in log ? ` class="${log.type}"` : ""}>
                <td>${(log.frame / graph.fps).toFixed(2)}</td>
                <td>${"name" in log ? `<div>${log.name}</div>` : ""}</td>
                <td>${
                    "action" in log
                    ? `<span>${action[log.action]}</span>${Number.isFinite(log.dmg) ? `<span>→ ダメージ：${log.dmg.toLocaleString()}</span>` : ""}`
                    : ""
                }</td>
                <td>${log.HP.toLocaleString()}</td>
            </tr>`;
    });
    
    const txt = `
        <div id="overlay" onclick="funcs.createHTML.modal.Destroy_customFlow()"></div>
        <div id="modalContent" style="width: 50em;">
            <div id="modalHeader">
                <span>フロー#${index + 1} 行動ログ</span>
            </div>
            <div id="modalBody" class="modalFlowLog">
                <table id="modalFlowLogConfig" align="center" border="1">
                    <colgroup>
                        <col class="col1">
                        <col class="col2">
                        <col class="col3">
                        <col class="col4">
                    </colgroup>
                    <tr>
                        <th>時間</th>
                        <td>
                            <form id="flowLogTimeUnit">
                                <label>
                                    <input type="radio" name="timeUnit" value="second" checked>
                                    秒
                                </label>
                                <label>
                                    <input type="radio" name="timeUnit" value="frame">
                                    フレーム
                                </label>
                            </form>
                        </td>
                        <th rowspan="2">名前<br>(凡例)</th>
                        <td rowspan="2">
                            <div class="clickable onSkillAct"><span><div>: スキル発動時発生型</div></span></div>
                            <div class="clickable onHit"><span><div>: 攻撃ヒット時発生型</div></span></div>
                            <div class="clickable buffer_deploy"><span><div>: バッファー(配置)</div></span></div>
                            <div class="clickable buffer_skill"><span><div>: バッファー(スキル)</div></span></div>
                        </td>
                    </tr>
                    <tr>
                        <th>残りHP</th>
                        <td>
                            <form id="flowLogHPdisp">
                                <label>
                                    <input type="radio" name="HPdisp" value="trueValue" checked>
                                    絶対値
                                </label>
                                <label>
                                    <input type="radio" name="HPdisp" value="percentage">
                                    相対値[%]
                                </label>
                            </form>
                        </td>
                    </tr>
                </table>
                <table id="modalFlowLogTable" align="center" border="1">
                    <colgroup>
                        <col class="col1">
                        <col class="col2">
                        <col class="col3">
                        <col class="col4">
                    </colgroup>
                    <thead>
                        <tr>
                            <th>時間[秒]</th>
                            <th>名前</th>
                            <th>行動</th>
                            <th>残りHP</th>
                        </tr>
                    </thead>
                    <tbody>${logArr.join("")}
                    </tbody>
                </table>
            </div>
            <div id="modalFooter" style="min-height: 3em;">
                <div class="buttonArea">
                    <button type="button" onclick="funcs.createHTML.modal.Destroy_customFlow()">閉じる</button>
                </div>
            </div>
        </div>
    `;
    
    const elem_modal = document.getElementById("modal");
    elem_modal.classList.remove("is-unshown");
    elem_modal.innerHTML = txt;
    
    const modalFlowLogTable = document.getElementById("modalFlowLogTable");
    const ths = modalFlowLogTable.getElementsByTagName("th");
    const tbody = modalFlowLogTable.getElementsByTagName("tbody")[0];
    const trs = tbody.children;
    const SwitchTimeUnit = e => {
        switch(e.target.value) {
            case "second":
                ths[0].innerText = "時間[秒]";
                _.forEach(trs, (tr, index) => tr.children[0].innerText = (logs[index].frame / graph.fps).toFixed(2));
                break;
            case "frame":
                ths[0].innerText = "時間[f]";
                _.forEach(trs, (tr, index) => tr.children[0].innerText = logs[index].frame.toLocaleString());
                break;
        }
    }
    const SwitchHPdisp = e => {
        switch(e.target.value) {
            case "trueValue":
                ths[3].innerText = "残りHP";
                _.forEach(trs, (tr, index) => tr.children[3].innerText = logs[index].HP.toLocaleString());
                break;
            case "percentage":
                ths[3].innerText = "残りHP[%]";
                _.forEach(trs, (tr, index) => tr.children[3].innerText = (logs[index].HP / num.maxHP.value * 100.0).toFixed(2));
                break;
        }
    }
    const ToggleDisplay = e => {
        const clickableDiv = e.currentTarget;
        const type = clickableDiv.classList[1];
        _.forEach(tbody.getElementsByClassName(type), tr => { tr.classList.toggle("is-unshown") });
        clickableDiv.getElementsByTagName("span")[0].classList.toggle("inactive");
    }
    const flowLogTimeUnit = document.getElementById("flowLogTimeUnit");
    _.forEach(flowLogTimeUnit.getElementsByTagName("input"), input => input.addEventListener("change", SwitchTimeUnit));
    const flowLogHPdisp = document.getElementById("flowLogHPdisp");
    _.forEach(flowLogHPdisp.getElementsByTagName("input"), input => input.addEventListener("change", SwitchHPdisp));
    const clickables = document.getElementById("modalFlowLogConfig").getElementsByClassName("clickable");
    _.forEach(clickables, clickableDiv => clickableDiv.addEventListener("click", ToggleDisplay));
}