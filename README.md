# array2tree

![](https://travis-ci.org/lihang90/array2tree.svg?branch=master)
[![npm](https://img.shields.io/npm/v/array2tree.svg)](https://www.npmjs.com/package/array2tree)
[![Codecov](https://img.shields.io/codecov/c/github/lihang90/array2tree.svg)](https://github.com/lihang90/array2tree/blob/master/test/index.test.js)
![npm](https://img.shields.io/npm/l/express.svg)



Convert array to tree, array item id is related pid.

Just like
```
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

```
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
}]
```

## How to use

* npm intall
```
$ npm install array2tree --save
```

* use
```
const array2tree = require('../index');

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
    }
];

const tree = array2tree(twoLevelArr);
```