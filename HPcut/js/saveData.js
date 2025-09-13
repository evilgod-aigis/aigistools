// ブラウザ対応宣言
window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;

funcs.saveData = {};
const saveData = {
    db: null, objStoreName: "data", data: null
}
// DB接続
funcs.saveData.OpenDB = () => {
    if(!window.indexedDB) {
        Initialize();
        return;
    }
    const request = indexedDB.open("aigis_HPcut");
    request.onupgradeneeded = e => {
        saveData.db = e.target.result;
        saveData.db.onerror = e => {}
        if(!saveData.db.objectStoreNames.contains(saveData.objStoreName)) {
            const objStoreKey = { keyPath: "dataName" };
            const obj = saveData.db.createObjectStore(saveData.objStoreName, objStoreKey);
        }
    }
    request.onsuccess = e => {
        saveData.db = e.target.result;
        funcs.saveData.GetAllData();
    }
    request.onerror = e => Initialize();
}
// データ追加
funcs.saveData.AddData = (dataName, data) => {
    if(!saveData.db) return;
    const transaction = saveData.db.transaction(saveData.objStoreName, "readwrite");
    const objStore = transaction.objectStore(saveData.objStoreName);
    const request = objStore.add({ dataName: dataName, data: data });
    request.onsuccess = e => {}
    request.onerror = e => {
        if(request.error.name == "ConstraintError") e.preventDefault();
    }
}
// データ取得(saveData.dataに格納)
funcs.saveData.GetAllData = () => {
    if(!saveData.db) return;
    const transaction = saveData.db.transaction(saveData.objStoreName, "readonly");
    const objStore = transaction.objectStore(saveData.objStoreName);
    const request = objStore.getAll();
    request.onsuccess = e => {
        const dataArray = e.target.result;
        if(dataArray.length) {
            saveData.data = _.reduce(dataArray, (result, data) => {
                result[data.dataName] = data.data;
                return result
            }, {});
            Initialize();
        } else
            DeleteAllData(funcs.saveData.CreateDataArea);
    }
    request.onerror = e => {}
}
// データエリア作成
funcs.saveData.CreateDataArea = (dataName = null) => {
    const isNull = dataName === null;
    if(isNull || dataName === "buffChecked") {
        const buffChecked = _.reduce(lists.buff, (result, buff, buffType) => {
            if(buffType !== "rCTdepType")
                result[buffType] = _.reduce(buff.list, (obj, bufferInfo) => {
                    obj[bufferInfo.display] = false;
                    return obj;
                }, {});
            return result;
        }, {});
        funcs.saveData.AddData("buffChecked", buffChecked);
    }
    if(isNull || dataName === "rCTdepType")
        funcs.saveData.AddData("rCTdepType", lists.buff.rCTdepType.list);
    if(isNull || dataName === "numeral") {
        const numeral = _.reduce(num, (result, obj, key) => {
            result[key] = { value: obj.value };
            if("use" in obj) result[key].use = obj.use;
            if("value2" in obj) result[key].value2 = obj.value2;
            return result;
        }, {});
        funcs.saveData.AddData("numeral", numeral);
    }
    if(isNull || dataName === "units") {
        const units = _.reduce(lists.units, (result, units, type) => {
            result[type] = _.reduce(units.list, (result2, unit) => {
                if(!("added" in unit)) {
                    const unitName = unit.unitInfo.unitName;
                    result2[unitName] = {
                        class: unit.unitInfo.unitClass.selected
                        , aff: unit.unitInfo.affection.percentage
                        , skill: unit.skill.selected
                        , hidden: unit.hidden
                    }
                    const dmgMuls = _.reduce(unit.skill.detail, (result3, skills, state) => {
                        const dmgMul = _.reduce(skills, (result4, skill, index) => {
                            if("dmgMul" in skill) result4[index] = skill.dmgMul.checked;
                            return result4;
                        }, {});
                        if(_.size(dmgMul)) result3[state] = dmgMul;
                        return result3
                    }, {});
                    if(_.size(dmgMuls)) result2[unitName].dmgMul = dmgMuls;
                }
                return result2;
            }, {});
            return result;
        }, {});
        funcs.saveData.AddData("units", units);
    }
    if(isNull || dataName === "added") {
        const added = _.reduce(lists.units, (result, units, type) => {
            result[type] = [];
            return result;
        }, {});
        funcs.saveData.AddData("added", added);
    }
    if(isNull || dataName === "customFlow")
        funcs.saveData.AddData("customFlow", lists.customFlow);
    if(isNull || dataName === "graphSequent")
        funcs.saveData.AddData("graphSequent", true);
    if(isNull)
        funcs.saveData.GetAllData();
}
// データ更新
funcs.saveData.UpdateData = (dataName, path, value) => {
    if(!saveData.db) return;
    const transaction = saveData.db.transaction(saveData.objStoreName, "readwrite");
    const objStore = transaction.objectStore(saveData.objStoreName);
    const request = objStore.get(dataName);
    request.onsuccess = e => {
        const obj = e.target.result;
        if(obj !== undefined) {
            if(path) _.set(obj.data, path, value);
            else obj.data = value;
            const requestUpdate = objStore.put(obj);
            requestUpdate.onsuccess = e => {}
            requestUpdate.onerror = e => {}
        }
    }
    request.onerror = e => {}
}
// データ削除
funcs.saveData.DeleteData = (dataName, path = null) => {
    if(!saveData.db) return;
    const transaction = saveData.db.transaction(saveData.objStoreName, "readwrite");
    const objStore = transaction.objectStore(saveData.objStoreName);
    if(path) {
        const request = objStore.get(dataName);
        request.onsuccess = e => {
            const obj = e.target.result;
            if(obj === undefined) {}
            else {
                _.unset(obj.data, path);
                if(_.endsWith(path, "]")) {
                    const pathBeforeArray = _.dropRight(_.dropRightWhile(path, c => c !== "[")).join("");
                    if(pathBeforeArray === "")
                        _.pull(obj.data, undefined);
                    else
                        _.pull(_.get(obj.data, pathBeforeArray), undefined);
                }
                const requestUpdate = objStore.put(obj);
                requestUpdate.onsuccess = e => {}
                requestUpdate.onerror = e => {}
            }
        }
        request.onerror = e => {}
    } else {
        const request = objStore.delete(dataName);
        request.onsuccess = e => {}
        request.onerror = e => {}
    }
}
// 全データ削除
const DeleteAllData = (arg = null) => {
    if(!saveData.db) return;
    const transaction = saveData.db.transaction(saveData.objStoreName, "readwrite");
    const objStore = transaction.objectStore(saveData.objStoreName);
    const request = objStore.clear();
    request.onsuccess = e => typeof arg === "function" ? arg() : !arg ? saveData.db = null : true
    request.onerror = e => {}
}