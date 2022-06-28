const funcs = {};

//id付け
funcs.SetID = list => list.forEach((elem, i) => elem.id = i)

//入力制限
funcs.LimitNum_int = (thisElem, min, max) => {
    const val = parseInt(thisElem.value);
    if(Number.isNaN(val) || val < min) {
        thisElem.value = min;
    } else if(val > max){
        thisElem.value = max;
    }
}
funcs.LimitNum_float = (thisElem, min, max) => {
    const val = parseFloat(thisElem.value);
    if(Number.isNaN(val) || val < min) {
        thisElem.value = min;
    } else if(val > max){
        thisElem.value = max;
    }
}