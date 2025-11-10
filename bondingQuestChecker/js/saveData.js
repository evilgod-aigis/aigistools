const saveData = {};
saveData.version = 5;
saveData.CHAR = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ$=";
saveData.compressChars = Object.freeze({ "0": "bc", "7": "jk", "i": "op", "U": "st", "=": "xy" });
saveData.divider = "|";

// 3bit×2を64進数に変換
saveData.To64base = (_num = [ 0b000, 0b000 ]) => saveData.CHAR[(_num[0] << 3) | _num[1]];
// 64進数を3bit×2に変換
saveData.To3bits = _char => {
    const num = saveData.CHAR.indexOf(_char);
    return [ num >> 3, num & 0b111 ];
}

/*
*   
*   col: own   [lock][check] ([ol][oc])
*   row: clear [lock][check] ([cl][cc])
*   
*     | 00| 01| 11| 10
*   --+---+---+---+---
*   00|000|001|010| -
*   --+---+---+---+---
*   01| - |101|110| -
*   --+---+---+---+---
*   11| - | - |111| -
*   --+---+---+---+---
*   10|000|001|010| -  <- 未実装ではcc=0, cl=1
*   
*   0bXYZ
*    X = [cc]
*    Y = [ol]
*    Z = [oc] && ![ol] || [cc] && [cl]
*   
*   col: YZ
*   row: X
*   
*    | 00 | 01 | 11 | 10
*   -+----+----+----+----
*   0|0000|0001|  - |0011
*   -+----+----+----+----
*   1|  - |0101|1111|0111
*   
*   [oc] = Y || Z
*   [ol] = Y
*   [cc] = X
*   [cl] = Y && Z
*   
**/

saveData.checkbox = {};
// 所持・クリアのチェック・ロック状況を保存
saveData.checkbox.Save = (_id, _own, _clear) => {
    const index = Math.floor(_id / 2);
    const before = saveData.checkbox.data.substring(0, index);
    let char = saveData.checkbox.data.substring(index, index + 1);
    const after = saveData.checkbox.data.substring(index + 1);
    const bitData = saveData.To3bits(char);
    const oc = _own.checked ? 1 : 0;
    const ol = _own.disabled ? 1 : 0;
    const cc = _clear.checked ? 1 : 0;
    const cl = _clear.disabled ? 1 : 0;
    bitData[_id % 2] = (cc << 2) | (ol << 1) | (oc & !ol | cc & cl);
    char = saveData.To64base(bitData);
    saveData.checkbox.data = before + char + after;
    saveData.checkbox.Compress();
    saveData.Save("checkbox", saveData.checkbox.data_short);
}
// 所持・クリアのチェック・ロック状況を読み込み
saveData.checkbox.Load = (_data = "", _version = saveData.version, _adapt = false) => {
    saveData.checkbox.Decompress(_data);
    if(_version < saveData.version) {
        switch(_version) {
            case 4:
                saveData.checkbox.Insert(0x061a);
                document.getElementById("alert").innerHTML = "\
                    <p>2025年9月以降に実装されたユニットについて、チェックがずれている可能性が高いです。</p>\
                    <p>お手数ですが、ご確認ください。</p>";
                break
        }
    }
    let id = 0;
    let exist = true;
    _.forEach(saveData.checkbox.data, char => {
        _.forEach(saveData.To3bits(char), bitData => {
            if(!unitList[id]) return exist = false;
            bit = [ bitData & 0b001, (bitData >> 1) & 0b001, (bitData >> 2) & 0b001 ];
            unitList[id].own = {
                check: bit[0] || bit[1]
                , lock: bit[1]
            };
            unitList[id].clear = {
                check: bit[2]
                , lock: bit[0] && bit[1]
            };
            ++id;
        });
        return exist;
    });
    if(exist) {
        // 保存データ < ユニット数
        while(unitList[id]) {
            unitList[id].own = { check: false, lock: false };
            unitList[id].clear = { check: false, lock: false };
            ++id;
        }
        saveData.checkbox.data = saveData.checkbox.data.padEnd(Math.ceil(id / 2), "0");
    } else {
        saveData.checkbox.data = saveData.checkbox.data.slice(0, Math.ceil(id / 2));
        if(id % 2) {
            const bitData = saveData.To3bits(_.last(saveData.checkbox.data));
            bitData[1] = 0b000;
            saveData.checkbox.data.replace(/.$/, saveData.To64base(bitData));
        }
        saveData.checkbox.Compress();
    }
    if(_adapt) {
        saveData.Save("checkbox", saveData.checkbox.data_short);
        table.ToggleCheckbox.load();
    }
}
// ユニットリストへの挿入をデータ列に適用
saveData.checkbox.Insert = (..._ids) => {
    if(Object.isFrozen(saveData) && !saveData.checkbox.data_tmp) return;
    let ids = _.reduce(_ids, (result, id) => {
        if(unitList[id]) result.push(id);
        return result;
    }, []);
    ids = _.sortBy(ids);
    // 複数挿入したとき、データ列の変化の有無が交互に出ることから、ペアを作る
    let n_insert = { all: 0, pair: 0, odd: false };
    ids = _.reduce(ids, (result, id) => {
        if(n_insert.odd) {
            result[n_insert.pair].push(id + n_insert.pair * 2);
            ++n_insert.pair;
            n_insert.odd = false;
        } else {
            result.push([ id + n_insert.pair * 2 ]);
            n_insert.odd = true;
        }
        ++n_insert.all;
        return result;
    }, []);
    // プログラムの一貫性を保つため、最後にペアができなかったときの穴埋め
    if(n_insert.odd) ids[n_insert.pair].push(unitList.length + n_insert.pair * 2);
    
    _.forEach(ids, pair => {
        const index = [ Math.floor(pair[0] / 2), Math.ceil(pair[1] / 2) ];
        const before = saveData.checkbox.data.substring(0, index[0]);
        const target = saveData.checkbox.data.substring(index[0], index[1]);
        const after = saveData.checkbox.data.substring(index[1]);
        
        const length = target.length;
        const target_bitData = _.reduce(target, (result, char, i) => {
            const bitData = saveData.To3bits(char);
            if(i === 0 && pair[0] % 2) result[0][0] = bitData[0];               // pair[0]: odd
            else result[i][1] = bitData[0];
            if(i === length - 1 && pair[1] % 2) result.push([ 0, bitData[1] ]); // pair[1]: odd
            else result.push([ bitData[1], 0 ]);
            return result;
        }, [ [ 0, 0 ] ]);
        saveData.checkbox.data = before + _.reduce(target_bitData, (result, bitData) => result += saveData.To64base(bitData), "") + after;
    });
    saveData.checkbox.Compress();
    saveData.Save("checkbox", saveData.checkbox.data_short);
}
// ユニットリストの交換をデータ列に適用
saveData.checkbox.Swap = (_id1, _id2) => {
    if(Object.isFrozen(saveData) && !saveData.checkbox.data_tmp) return;
    if(!unitList[_id1] || !unitList[_id2] || _id1 === id2) return;
    let id1, id2;
    if(_id1 < _id2) {
        id1 = _id1;
        id2 = _id2;
    } else {
        id1 = _id2;
        id2 = _id1;
    }
    
    const index1 = Math.floor(id1 / 2);
    const index2 = Math.floor(id2 / 2);
    const before = saveData.checkbox.data.substring(0, index1);
    let char1 = saveData.checkbox.data.substring(index1, index1 + 1);
    const middle = saveData.checkbox.data.substring(index1 + 1, index2);
    let char2 = saveData.checkbox.data.substring(index2, index2 + 1);
    const after = saveData.checkbox.data.substring(index2 + 1);
    const bitData1 = saveData.To3bits(char1);
    const bitData2 = saveData.To3bits(char2);
    const i1 = id1 % 2;
    const i2 = id2 % 2;
    const tmp = bitData1[i1];
    bitData1[i1] = bitData2[i2];
    bitData2[i2]= tmp;
    char1 = saveData.To64base(bitData1);
    char2 = saveData.To64base(bitData2);
    saveData.checkbox.data = before + char1 + middle + char2 + after;
    saveData.checkbox.Compress();
    saveData.Save("checkbox", saveData.checkbox.data_short);
}
// データ圧縮
saveData.checkbox.Compress = () => {
    saveData.checkbox.data_short = saveData.checkbox.data;
    // 末尾の0を省略
    while(_.last(saveData.checkbox.data_short) === "0")
        saveData.checkbox.data_short = saveData.checkbox.data_short.slice(0, -1);
    
    _.forEach(saveData.compressChars, (marker, compressChar) => {
        // 比較的多そうな07iU=を圧縮
        let length = saveData.checkbox.data_short.length;
        saveData.checkbox.data_short = _.reduce(saveData.checkbox.data_short, (result, char) => {
            --length;
            if(char === compressChar) {
                ++result.conti;
                if(!length) {
                    if(result.conti < 4) result.data += compressChar.repeat(result.conti);
                    else result.data += marker[0] + result.conti + marker[1];
                }
            } else if(result.conti < 4) {
                result.data += compressChar.repeat(result.conti) + char;
                result.conti = 0;
            } else {
                result.data += marker[0] + result.conti + marker[1] + char;
                result.conti = 0;
            }
            return result;
        }, { data: "", conti: 0 }).data;
    });
}
// データ解凍
saveData.checkbox.Decompress = (_data) => {
    saveData.checkbox.data_short = saveData.checkbox.data = _data;
    _.forEach(saveData.compressChars, (marker, compressChar) => {
        if(saveData.checkbox.data.indexOf(marker[0]) === -1) return;
        saveData.checkbox.data = _.reduce(saveData.checkbox.data.split(marker[0]), (data, text, i) => {
            if(i) {
                const [ conti, remain ] = text.split(marker[1]);
                data += compressChar.repeat(Number(conti)) + remain;
            } else data += text;
            return data;
        }, "");
    });
}

saveData.setting = {};
// 設定を保存
saveData.setting.Save = _settingName => {
    let data;
    switch(_settingName) {
        case "unitName":
            data = table.setting[_settingName];
            break;
        case "backgroundColor":
            data = _.reduce(table.setting[_settingName], (txt, value, key) => txt += `${key}:${value} `, "").trimEnd();
            break;
        case "column":
        case "rarity":
        case "sex":
        case "depType":
        case "derivation":
        case "year":
        case "year_bq":
            data = _.reduce(table.filter[_settingName], (txt, bool, key) => txt += `${key}:${bool ? 1 : 0} `, "").trimEnd();
            break;
        case "obtain":
            data = _.reduce(table.filter[_settingName], (txt1, obj, key) => {
                txt1 += `${key}:${obj.checked ? 1 : 0} `;
                txt1 += _.reduce(obj.part, (txt2, bool, part) => txt2 += `${part}:${bool ? 1 : 0} `, "");
                return txt1.replace(/.$/, "|");
            }, "").replace(/.$/, "");
            break;
        case "own":
        case "clear":
            data = table.filter[_settingName];
            break;
    }
    saveData.Save(_settingName, data);
}

// セーブ環境構築
saveData.Construct = (_canUseIndexedDB = true) => {
    if(saveData.Save) return;
    window.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
    window.IDBTransaction = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction || {READ_WRITE: "readwrite"};
    window.IDBKeyRange = window.IDBKeyRange || window.webkitIDBKeyRange || window.msIDBKeyRange;
    
    const saveItem = {
        1: {
            saveData: [ "checkbox" ]
            , setting: [ "unitName", "backgroundColor" ]
            , filter: [ "column", "rarity", "obtain", "depType", "year", "own", "clear" ]
        }
        , 2: {
            saveData: [ "checkbox" ]
            , setting: [ "unitName", "backgroundColor" ]
            , filter: [ "column", "rarity", "obtain", "depType", "year", "year_bq", "own", "clear" ]
        }
        , 3: {
            saveData: [ "checkbox" ]
            , setting: [ "unitName", "backgroundColor" ]
            , filter: [ "column", "rarity", "obtain", "depType", "derivation", "year", "year_bq", "own", "clear" ]
        }
        , 4: {
            saveData: [ "checkbox" ]
            , setting: [ "unitName", "backgroundColor" ]
            , filter: [ "column", "rarity", "sex", "obtain", "depType", "derivation", "year", "year_bq", "own", "clear" ]
        }
        , 5: {
            saveData: [ "checkbox" ]
            , setting: [ "unitName", "backgroundColor" ]
            , filter: [ "column", "rarity", "sex", "obtain", "depType", "derivation", "year", "year_bq", "own", "clear" ]
        }
    };
    
    if(_canUseIndexedDB && window.indexedDB) {
        // indexedDB利用可能
        const request = indexedDB.open("aigis_bondingQuestChecker", saveData.version);
        saveData.objStoreName = "data";
        let oldVersion = saveData.version;
        request.onupgradeneeded = e1 => {
            saveData.db = e1.target.result;
            saveData.db.onerror = e2 => saveData.Construct(false);
            // バージョン確認
            oldVersion = e1.oldVersion;
            switch(oldVersion) {
                case 0: {
                        const objStore = saveData.db.createObjectStore(saveData.objStoreName, { keyPath: "dataName" });
                        _.forEach(saveItem[saveData.version], arr =>
                            _.forEach(arr, dataName => {
                                switch(dataName) {
                                    case "unitName":
                                        objStore.put({ dataName: dataName, data: "name" });
                                        break;
                                    case "own":
                                    case "clear":
                                        objStore.put({ dataName: dataName, data: 3 });
                                        break;
                                    default:
                                        objStore.put({ dataName: dataName, data: "" });
                                }
                            })
                        );
                    }
                    break;
                case 1: {
                        const objStore = e1.target.transaction.objectStore(saveData.objStoreName);
                        objStore.get("year").onsuccess = e2 => {
                            objStore.put({ dataName: "year_bq", data: e2.target.result.data }).onsuccess = e3 => {
                                objStore.put({ dataName: "year", data: "" });
                            }
                        }
                    }
                case 2: {
                        const objStore = e1.target.transaction.objectStore(saveData.objStoreName);
                        objStore.get("obtain").onsuccess = e2 => {
                            objStore.put({ dataName: "obtain", data: e2.target.result.data.replace(/ /g, "|") });
                        }
                        objStore.put({ dataName: "derivation", data: "" });
                    }
                case 3: {
                        const objStore = e1.target.transaction.objectStore(saveData.objStoreName);
                        objStore.put({ dataName: "sex", data: "" });
                    }
                case 4: {
                        document.getElementById("alert").innerHTML = "\
                            <p>2025年9月以降に実装されたユニットについて、チェックがずれている可能性が高いです。</p>\
                            <p>お手数ですが、ご確認ください。</p>";
                    }
                    break;
            }
        }
        request.onsuccess = e1 => {
            saveData.db = e1.target.result;
            // 保存用関数定義
            saveData.Save = (_dataName, _data) => {
                const transaction = saveData.db.transaction(saveData.objStoreName, "readwrite");
                const objStore = transaction.objectStore(saveData.objStoreName);
                const request = objStore.put({ dataName: _dataName, data: _data });
                //request.onsuccess = e => {}
                //request.onerror = e => {}
            }
            // データ取得
            const transaction = saveData.db.transaction(saveData.objStoreName, "readonly");
            const objStore = transaction.objectStore(saveData.objStoreName);
            _.forEach(saveItem[saveData.version].saveData, dataName => {
                const request = objStore.get(dataName);
                request.onsuccess = e2 => saveData[dataName].Load(e2.target.result.data, oldVersion);
            });
            table.SetObjects();
            _.forEach(saveItem[saveData.version].setting, dataName => {
                const request = objStore.get(dataName);
                switch(dataName) {
                    case "unitName":
                        request.onsuccess = e2 => table.setting[dataName] = e2.target.result.data;
                        break;
                    default:
                        request.onsuccess = e2 => {
                            _.forEach(e2.target.result.data.split(" "), text => {
                                const [ key, value ] = text.split(":");
                                if(key in table.setting[dataName])
                                    table.setting[dataName][key] = value;
                            });
                        }
                }
            });
            _.forEach(saveItem[saveData.version].filter, dataName => {
                const request = objStore.get(dataName);
                switch(dataName) {
                    case "obtain":
                        request.onsuccess = e2 => {
                            _.forEach(e2.target.result.data.split("|"), text => {
                                const [ main, ...parts ] = _.map(text.split(" "), t => t.split(":"));
                                if(!(main[0] in table.filter[dataName])) return;
                                const obj = table.filter[dataName][main[0]];
                                obj.checked = main[1] === "1";
                                _.forEach(parts, ([ key, value ]) => {
                                    if(key in obj.part) obj.part[key] = value === "1";
                                });
                            });
                        }
                        break;
                    case "own":
                    case "clear":
                        request.onsuccess = e2 => table.filter[dataName] = e2.target.result.data;
                        break;
                    default:
                        request.onsuccess = e2 => {
                            _.forEach(e2.target.result.data.split(" "), text => {
                                const [ key, value ] = text.split(":");
                                if(key in table.filter[dataName])
                                    table.filter[dataName][key] = value === "1";
                            });
                        }
                }
            });
            
            // データベース削除
            saveData.DELETE = (_alert = true) => {
                if(
                    _alert
                    && confirm("本ページで保存されたデータをすべて削除します。\n再読み込みするまでデータの保存は機能しません。\n実行しますか？")
                    && confirm("本当に削除しますか？")
                ) {
                    const request = indexedDB.deleteDatabase(saveData.db.name);
                    request.onsuccess = e => window.alert("削除しました");
                    request.onerror = e => window.alert("削除に失敗しました");
                } else if(!_alert) {
                    const request = indexedDB.deleteDatabase(saveData.db.name);
                    //request.onsuccess = e => {}
                    //request.onerror = e => {}
                }
            }
            
            transaction.oncomplete = e2 => {
                Object.freeze(saveData);
                createHTML.All();
            }
        }
        request.onerror = e1 => saveData.Construct(false);
    } else {
        // indexedDB利用不可 -> localStorage
        delete saveData.db;
        delete saveData.objStoreName;
        let canUseLocalStorage = true;
        if (typeof localStorage !== "undefined") {
            try {
                localStorage.setItem("dummy", "1");
                if (localStorage.getItem("dummy") !== "1")
                    canUseLocalStorage = false;
                else localStorage.removeItem("dummy");
            } catch(e) {
                canUseLocalStorage = false;
            }
        } else canUseLocalStorage = false;
        if(!canUseLocalStorage) {
            document.getElementById("alert").innerHTML = "\
                <p>お使いのブラウザは、本ページのデータ保存に対応していない模様。</p>\
                <p>ページ下部のデータ入出力をご利用ください。</p>";
            
            saveData.Save = () => {};
            _.forEach(saveItem[saveData.version].saveData, dataName => saveData[dataName].Load());
            table.SetObjects();
            createHTML.All();
            return;
        }
        const userAgent = window.navigator.userAgent.toLowerCase();
        if (
            userAgent.indexOf("safari") !== -1
            && userAgent.indexOf("chrome") === -1
            && userAgent.indexOf("edg") === -1
            && "visualViewport" in window
        ) {
            document.getElementById("alert").innerHTML = "\
                <p>お使いのブラウザは、本ページの保存されたデータが7日間で消える可能性があります。</p>\
                <p>本ページをこまめに利用するか、ページ下部のデータ入出力をご利用ください。</p>";
            
            saveData.Save = () => {};
            _.forEach(saveItem[saveData.version].saveData, dataName => saveData[dataName].Load());
            table.SetObjects();
            createHTML.All();
            return;
        }
        
        // 保存用関数定義
        saveData.Save = (_dataName, _data) => localStorage.setItem(_dataName, _data);
        // バージョン確認
        switch(Number(localStorage.getItem("version"))) {
            case 0:
                _.forEach(saveItem[saveData.version], arr =>
                    _.forEach(arr, dataName => {
                        switch(dataName) {
                            case "unitName":
                                localStorage.setItem(dataName, "name" );
                                break;
                            case "own":
                            case "clear":
                                localStorage.setItem(dataName, 3);
                                break;
                            default:
                                localStorage.setItem(dataName, "");
                        }
                    })
                );
                localStorage.setItem("version", saveData.version);
                break;
            case 1:
                localStorage.setItem("year_bq", localStorage.getItem("year"));
                localStorage.setItem("year", "");
            case 2:
                localStorage.setItem("obtain", localStorage.getItem("obtain").replace(/ /g, "|"));
                localStorage.setItem("derivation", "");
            case 3:
                localStorage.setItem("sex", "");
                localStorage.setItem("version", saveData.version);
            case 4:
                break;
        }
        // データ取得
        _.forEach(saveItem[saveData.version].saveData, dataName => {
            const data = localStorage.getItem(dataName);
            saveData[dataName].Load(data, oldVersion);
        });
        table.SetObjects();
        _.forEach(saveItem[saveData.version].setting, dataName => {
            const data = localStorage.getItem(dataName);
            switch(dataName) {
                case "unitName":
                    table.setting[dataName] = data;
                    break;
                default:
                    _.forEach(data.split(" "), text => {
                        const [ key, value ] = text.split(":");
                        if(key in table.setting[dataName])
                            table.setting[dataName][key] = value;
                    });
            }
        });
        _.forEach(saveItem[saveData.version].filter, dataName => {
            const data = localStorage.getItem(dataName);
            switch(dataName) {
                case "obtain":
                    _.forEach(data.split("|"), text => {
                        _.forEach(_.map(text.split(" "), t => t.split(":")), ([ key, value ], i, arr) => {
                            if(i) table.filter[dataName][arr[0][0]].part[key] = value === "1";
                            else table.filter[dataName][key].checked = value === "1";
                        });
                    });
                    break;
                case "own":
                case "clear":
                    table.filter[dataName] = Number(data);
                    break;
                default:
                    _.forEach(data.split(" "), text => {
                        const [ key, value ] = text.split(":");
                        if(key in table.filter[dataName])
                            table.filter[dataName][key] = value === "1";
                    });
            }
        });
        
        // 全データ削除
        saveData.DELETE = (_alert = true) => {
            if(
                _alert
                && confirm("本ページで保存されたデータをすべて削除します。実行しますか？")
                && confirm("本当に削除しますか？")
            ) {
                localStorage.clear();
                window.alert("削除しました");
            } else if(!_alert)
                localStorage.clear();
        }
        
        Object.freeze(saveData);
        createHTML.All();
    }
}