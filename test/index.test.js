const array2tree = require('../index');
const should = require('should');

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

describe("single array2tree", function () {
    it("The single level array has two level", function () {
        should(array2tree(twoLevelArr)).eql([{
            id: 1,
            pid: 0,
            name: 'level 1',
            children: [
                {
                    id: 2,
                    pid: 1,
                    name: 'level 2',
                    children: []
                }
            ]
        }]);
    });
});


describe('check params array', function(){
    it("params arr need array", function(){
        should(array2tree('arr')).eql(false);
    })
});

const fourLevelArr = [
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
    },
    {
        id: 4,
        pid: 3,
        name: 'level 4'
    },
];
describe("more than 3 levels", function () {
    it("The single level array more than 3 levels tree", function () {
        should(array2tree(fourLevelArr)).eql([{
            id: 1,
            pid: 0,
            name: 'level 1',
            children: [
                {
                    id: 2,
                    pid: 1,
                    name: 'level 2',
                    children: [{
                        id: 3,
                        pid: 2,
                        name: 'level 3',
                        children: [{
                            id: 4,
                            pid: 3,
                            name: 'level 4',
                            children: []
                        }]
                    }]
                }
            ]
        }]);
    });
});

const badLevelArr = [{
    pid : 1,
    name : 'level 1'
},{
    pid : 2,
    name : 'level 2'
}
];
describe("params no 'id' ", function () {
    it("params array item key has no 'id'", function () {
        should(array2tree(badLevelArr)).eql(false);
    });
});

const badParnetLevelArr = [{
    id : 1,
    name : 'level 1'
},{
    id : 2,
    name : 'level 2'
}
];
describe("params no 'pid' ", function () {
    it("params array item key has no 'pid'", function () {
        should(array2tree(badParnetLevelArr)).eql(false);
    });
});

const definedParamArr = [
    {
        myId: 1,
        parentId: 0,
        name: 'level 1'
    },
    {
        myId: 2,
        parentId: 1,
        name: 'level 2'
    }
];

describe("defined self params", function () {
    it("Defined self related params,like 'myId' and 'parentId'", function () {
        should(array2tree(definedParamArr,'myId', 'parentId')).eql([{
            myId: 1,
            parentId: 0,
            name: 'level 1',
            children: [
                {
                    myId: 2,
                    parentId: 1,
                    name: 'level 2',
                    children: []
                }
            ]
        }]);
    });
});