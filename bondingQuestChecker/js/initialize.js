window.addEventListener("DOMContentLoaded", () => {
    saveData.Construct();
    
    const checkStateArea = document.getElementById("check-state-area");
    const buttons = checkStateArea.getElementsByTagName("button");
    const input = checkStateArea.getElementsByTagName("input")[0];
    const report = document.getElementById("report");
    const displayTime = 2000;
    /*
        let usedCHAR = "";
        for(let bit1 = 0b000; bit1 <= 0b111; ++bit1) {
            if(bit1 === 0b011 || bit1 === 0b100) continue;
            for(let bit2 = 0b000; bit2 <= 0b111; ++bit2) {
                if(bit2 === 0b011 || bit2 === 0b100) continue;
                usedCHAR += saveData.To64base([ bit1, bit2 ]);
            }
        }
        usedCHAR = Array.from(usedCHAR).sort((a, b) => saveData.CHAR.indexOf(a) - saveData.CHAR.indexOf(b)).join("");
        const usedMarker = _.reduce(saveData.compressChars, (text, marker) => text += marker, "");
    */
    const usedCHAR = "01256789adefghtlmnEFGJKLMNORSTUVWZ$=";
    const usedMarker = "~_-^&#!?";
    // コピー
    buttons[0].addEventListener("click", () => {
        const newSpan = document.createElement("span");
        if(!navigator.clipboard)
            newSpan.innerHTML = "お使いのブラウザは対応していません";
        else
            navigator.clipboard.writeText(input.value).then(
                () => newSpan.innerHTML = "コピー完了"
                , () => newSpan.innerHTML = "コピー失敗"
            );
        report.appendChild(newSpan);
        setTimeout(() => report.removeChild(newSpan), displayTime);
    });
    // 出力
    buttons[1].addEventListener("click", () => {
        const text = input.value = saveData.checkbox.data_short;
        const newSpan = document.createElement("span");
        newSpan.innerHTML = text === "" ? "(必要ありますか…？)": `出力！(${text.length}文字)`;
        report.appendChild(newSpan);
        setTimeout(() => report.removeChild(newSpan), displayTime);
    });
    // 元に戻す
    buttons[2].addEventListener("click", () => {
        if(!("data_tmp" in saveData.checkbox)) return;
        saveData.checkbox.data = saveData.checkbox.data_tmp;
        saveData.Save("checkbox", saveData.checkbox.data);
        saveData.checkbox.Load();
        table.ToggleCheckbox.load();
        buttons[2].disabled = true;
        delete saveData.checkbox.data_tmp;
        const newSpan = document.createElement("span");
        newSpan.innerHTML = "元に戻しました";
        report.appendChild(newSpan);
        setTimeout(() => report.removeChild(newSpan), displayTime);
    });
    // 読み込む
    buttons[3].addEventListener("click", () => {
        const text = input.value;
        const newSpan = document.createElement("span");
        if(text === "") newSpan.innerHTML = "";
        else if(text === saveData.checkbox.data_short)
            newSpan.innerHTML = "変化なし";
        else {
            let canLoad = true;
            let state = -1;
            let conti = "";
            _.forEach(text, char => {
                if(state === -1 && _.includes(usedCHAR, char)) return;
                const index = usedMarker.indexOf(char);
                const isNum = /[\d]/.test(char);
                if(index === -1 && !isNum) return canLoad = false;
                if(state === -1) {
                    if(index % 2) return canLoad = false;
                    state = index;
                    return;
                }
                if(isNum) conti += char;
                else if(index === state + 1 && /^[1-9]\d*/.test(conti)) state = -1;
                else return canLoad = false;
            });
            if(canLoad) {
                saveData.checkbox.data_tmp = saveData.checkbox.data_short;
                saveData.checkbox.data = text;
                saveData.checkbox.Load();
                saveData.Save("checkbox", saveData.checkbox.data_short);
                table.ToggleCheckbox.load();
                buttons[2].disabled = false;
                input.value = "";
                newSpan.innerHTML = "読み込み完了";
            } else newSpan.innerHTML = "不正な文字列";
        }
        report.appendChild(newSpan);
        setTimeout(() => report.removeChild(newSpan), displayTime);
    });
});