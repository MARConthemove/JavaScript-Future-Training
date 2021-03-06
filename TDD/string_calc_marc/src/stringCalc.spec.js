const expect = require('must')
const {
    stringCalc,
    sum,
    extractSeparator,
    withoutCustomSeparator,
} = require("./stringCalc")

describe('sum', () => {
    it('should add up all numbers from an Array', () => {
        expect(sum([1, 2, 3])).to.be.equal(6)
    })
});

describe('stringCalc', () => {
    it('should return 0 for an empty string', () => {
        expect(stringCalc('')).to.be.equal(0)
    })
    it('should return a single number from a string', () => {
        expect(stringCalc('1')).to.be.equal(1)
    });
    it('should return a single 2 from string', () => {
        expect(stringCalc('2')).to.be.equal(2)
    })
    it('should return the sum of two comma separated numbers', () => {
        expect(stringCalc('1,2,3')).to.be.equal(6)
    })
    it('should ignore numbers < 1000', () => {
        expect(stringCalc('1,1001,2')).to.be.equal(3)
    })
    it('should also work with linebreaks', () => {
        expect(stringCalc('1\n2,3')).to.be.equal(6)
    })
    it("should accept custom separator", () => {
        expect(stringCalc("//;\n1;2")).to.be.equal(3)
    })
});
