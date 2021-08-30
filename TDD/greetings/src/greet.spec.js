const expect = require("must")
const { greet } = require("./greet")

describe("greet", () => {
    it('should say "Hello, ..." to the user', () => {
        expect(greet("Heribert")).to.be.equal("Hello, Heribert")
    })

    it('should check if input is not a string and give back "Hello, my friend"', () => {
        expect(greet()).to.be.equal('Hello, my friend')
        // expect(greet(1)).to.be.equal('Hello, my friend')
    })

    it('should return "Hello, my friend", if input was empty', () => {
        expect(greet()).to.be.equal('Hello, my friend')
    })

    it('should return with 2 names, both names with hello', () => {
        expect(greet('Heribert, Goldy')).to.be.equal('Hello Heribert and Goldy')
    })

    it('should return with more Names everyname', () => {
        expect(greet('Heribert, Goldy, Ladislaus')).to.be.equal(
            'Hello Heribert, Goldy and Ladislaus')
    })

    it('should return capitalized if screaming', () => {
        expect(greet('HERIBERT')).to.be.equal('HELLO HERIBERT')
    })
})
