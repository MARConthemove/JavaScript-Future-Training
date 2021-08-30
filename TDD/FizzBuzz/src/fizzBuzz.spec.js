const expect = require('must')
const { fizzbuzz } = require('./fizzBuzz')

describe('fizzBuzz', () => {
    it('should return normal number', () => {
        expect(fizzbuzz(1)).to.be.equal(1)
    });

    it('should return fizz if the number is a multiple of 3', () => {
        expect(fizzbuzz(3)).to.be.equal('fizz')
        expect(fizzbuzz(6)).to.be.equal('fizz')
    });

    it('should return fizz if the number is a multiple of 5', () => {
        expect(fizzbuzz(20)).to.be.equal('buzz')
        expect(fizzbuzz(40)).to.be.equal('buzz')
    });

    it('should return fizzbuzz if the number is a multiple of 3 and 5', () => {
        expect(fizzbuzz(15)).to.be.equal('fizzbuzz')
        expect(fizzbuzz(30)).to.be.equal('fizzbuzz')
    });

    it('should return fizz if the number 3 is included', () => {
        expect(fizzbuzz(13)).to.be.equal('fizz')
    })

    it('should return bazz if the  number is a multiple of 7', () => {
        expect(fizzbuzz(14)).to.be.equal('bazz')
    })
});
