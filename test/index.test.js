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