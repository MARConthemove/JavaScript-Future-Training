const expect = require('must')

describe('dec', () => {
    it('should lower by 1', () => {
        expect(dec(1)).to.be.equal(0)
    })
})

dec = v => v - 1
