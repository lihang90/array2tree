# array2tree

![](https://travis-ci.org/JeremyWei/easy_mongo.svg?branch=master 'build passsing')

Change array to levels tree

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
