const expect = require("must")
const { greet } = require("./greet")

describe("greet", () => {
    it('should say "Hello, ..." to the user', () => {
        expect(greet("Heribert")).to.be.equal("Hello, Heribert")
    })
})
