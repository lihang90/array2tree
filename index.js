/*
 * 把一维数组菜单，生成树型菜单
 * 通过id 与 pid 作层级对应,子项放入children内
 * @params {Array} arr = [{id:1,pid:0,name:'一级'},{id:2,pid:1,name:'二级'},...]
 * @return {Array}
 * */

function array2tree(arr) {
    if (!Array.isArray(arr)) {
        console.error('params arr need Array');
        return false;
    }
    let hasError = false;
    arr.forEach((v, i)=> {
        if (!('id' in v)) {
            console.error(`params index ${i} has not key 'id'`);
            hasError = true;
        }else if(!('pid' in v)){
            console.error(`params index ${i} has not key 'pid'`);
            hasError = true;
        }
    });
    if(hasError){return false;}

    let map = {};
    arr.forEach(v=> {
        v.children = [];
        map[v.id] = v;
    });
    map[0] = {id: 0, name: 'root', children: []};
    arr.forEach(v=> {
        map[v.pid].children.push(v);
    });
    return map[0].children;
}

module.exports = array2tree;
