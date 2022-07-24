const createHTML = {};

//更新履歴生成
createHTML.UpdateHistory = () => {
    const history = document.getElementById("update-history");
    if(updateHistory.length === 0) {
        history.classList.add("is-unshown");
        return;
    }
    
    const newSummary = document.createElement("summary");
    newSummary.innerHTML = "更新(折り畳み)";
    history.appendChild(newSummary);
    const newUpdateCont = document.createElement("div");
    newUpdateCont.id = "update-content";
    _.forEach(updateHistory, history => {
        const newUpdateElem = document.createElement("div");
        newUpdateElem.className = "update-elem";
        const newDate = document.createElement("div");
        newDate.className = "update-date";
        newDate.innerHTML = history.date;
        newUpdateElem.appendChild(newDate);
        const newDetail = document.createElement("div");
        newDetail.className = "update-detail";
        newDetail.innerHTML = _.map(history.detail, elem => "・" + elem).join("<br>");
        newUpdateElem.appendChild(newDetail);
        newUpdateCont.appendChild(newUpdateElem);
    });
    history.appendChild(newUpdateCont);
}