/*
 * Convert array to tree, array item id is related pid default;
 * Defined yourself related params in parameter you can;
 * put child item into children field;
 * @params {Array} arr = [{id:1,pid:0,name:'level 1'},{id:2,pid:1,name:'level 2'},...]
 * @return {Array}
 * */
function array2tree(arr, keyName = 'id', parentKeyName = 'pid') {
    if (!Array.isArray(arr)) {
        console.error('params arr need Array');
        return false;
    }
    for(let i = 0; i < arr.length; i++){
        if (!(keyName in arr[i]) || !(parentKeyName in arr[i])) {
            console.error(`params index ${i} has not key ${keyName} or ${parentKeyName}`);
            console.log(i);
            return false;
            break;
        }
    }
    let map = {};
    arr.forEach(v=> {
        v.children = [];
        map[v[keyName]] = v;
    });
    map[0] = {[keyName]: 0, name: 'root', children: []};
    arr.forEach(v=> {
        map[v[parentKeyName]].children.push(v);
    });
    return map[0].children;
}
module.exports = array2tree;
