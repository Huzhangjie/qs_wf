const expect = require('chai').expect;
// 测试代码 先写测试 再写代码 让测试通过
// 测试驱动开发 TDD
// 测试覆盖率 95%以上可以交付
const {add, minus} = require('../main');

describe('两数相加等于和', () => {
  // 一万点伤害
  it('1+1 应该等于2', () => {
    expect(add(1,1)).to.equal(2);
  })
  it('1+2 应该等于3', () => {
    expect(add(1,2)).to.equal(3);
  })
});

describe('两数相减为差', () => {
  it('4-2=2', () => {
    expect(minus(4, 2)).to.equal(2);
  })
  it('4-1=3', () => {
    expect(minus(4, 1)).to.equal(3);
  })
})

describe("参数类型错误，返回NaN", () => {
  it('minus参数NaN', () => {
    expect(isNaN(minus("100", 2))).to.equal(true);
  })
  it('add参数数字和字符串', () => {
    expect(isNaN(add("100", 2))).to.equal(true);
  })
  it('add参数字符串和null', () => {
    expect(isNaN(add("100", null))).to.equal(true);
  })
  it('add参数null和undefined', () => {
    expect(isNaN(add(null, undefined))).to.equal(true);
  })
})