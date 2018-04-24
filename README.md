# array2tree

![](https://travis-ci.org/lihang90/array2tree.svg?branch=master)
[![npm](https://img.shields.io/npm/v/array2tree.svg)](https://www.npmjs.com/package/array2tree)
![npm](https://img.shields.io/npm/dm/array2tree.svg)


[中文.md](https://github.com/lihang90/array2tree/blob/master/中文.md)<br/>
[https://github.com/lihang90/array2tree](https://github.com/lihang90/array2tree)

Convert array to tree, array item id is related pid.


Just like
```javascript
[
    {
        id: 1,
        pid: 0,
        name: 'level 1'
    },
    {
        id: 2,
        pid: 1,
        name: 'level 2'
    }
    ...
]
```

convert to

```javascript
[{
    id: 1,
    pid: 0,
    name: 'level 1',
    children: [
        {
            id: 2,
            pid: 1,
            name: 'level 2',
            children: [...]
        }
    ]
},...]
```

## How to use

* npm intall
```
$ npm install array2tree --save
```

* use
```javascript
const array2tree = require('array2tree');

const twoLevelArr = [
    {
        id: 1,
        pid: 0,
        name: 'level 1'
    },
    {
        id: 2,
        pid: 1,
        name: 'level 2'
    },
    {
        id: 3,
        pid: 2,
        name: 'level 3'
    }
];

const tree = array2tree(twoLevelArr);

console.log(tree);
/*
    [{
        id: 1,
        pid: 0,
        name: 'level 1',
        children: [
            {
                id: 2,
                pid: 1,
                name: 'level 2',
                children: [
                    {
                        id: 3,
                        pid: 2,
                        name: 'level 3',
                        children: []
                    }
                ]
            }
        ]
    }]
*/
```

## How to test

```
$ npm install && npm test
```