/**
 * Created by yhshen on 2017/3/21.
 */

// let add = require('./add'),
//     chai = require('chai'),
//     expect = chai.expect,
//     should = chai.should(),
//     assert = chai.assert;

import add from './add'
import chai from 'chai'

let expect = chai.expect,
    should = chai.should(),
    assert = chai.assert;

describe('加法函数的测试', () => {
    it('使用 expect 风格', () => {
        expect(add(1, 1)).to.be.equal(2);
    });

    it('使用 should 风格', () => {
        add(1, 1).should.equal(2);
    });

    it('使用 assert 风格', () => {
        assert.equal(add(1, 1), 2);
    });
});