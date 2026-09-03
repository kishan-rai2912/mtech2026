const {add}=require('../src/Add');
const expect = require('chai').expect;
describe('Add function',function(){
    it("should return sum of two numbers",function(){
        const res=add(2,3);
        expect(res).to.equal(5);
    });
    it("should be a number",function(){
        const res=add(2,3);
        expect(res).to.be.a('number');
    });
});

const {sub}=require('../src/Add');
const assert = require('chai').assert;
describe('Subtract function',function(){
    it("should return diff of two numbers",function(){
        // const res=sub(2,3);
        // expect(res).to.equal(5);
        assert.equal(sub(12,18),-6);
    });
    it("should be a number",function(){
        const res=sub(2,3);
        assert.typeOf(res, 'number');
    });
});