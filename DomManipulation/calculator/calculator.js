{
    // -- initializing app --
    const init = () => {
        numbersListener()
        operatorsListener()
        equalListener()
        acListener()
        keyListener()
    }

    // -- eventListener --
    const numbersListener = () => numbersSelectorArr().forEach(element => {
        element.addEventListener('click', numbersFunc)
    })
    const operatorsListener = () => operatorsSelectorArr().forEach(element => {
        element.addEventListener('click', operatorsFunc)
    })
    const equalListener = () => equalSelector().addEventListener('click', equalFunc)
    const acListener = () => acSelector().addEventListener('click', acFunc)
    const keyListener = () => document.addEventListener('keydown', keyFunc)

    // -- querySelectors --
    const numbersSelectorArr = () => Array.from(document.querySelectorAll('.char.number'))
    const operatorsSelectorArr = () => Array.from(document.querySelectorAll(".char.operator:not(#AC)"))
    const acSelector = () => document.querySelector('#AC')
    const equalSelector = () => document.querySelector('.char.equal')
    const calculationSelector = () => document.querySelector('.calculation')
    const outputSelector = () => document.querySelector('.output')


    // -- functions --
    const numbersFunc = (event) => {
        outputSelector().firstElementChild.innerHTML += event.target.innerHTML
    }

    const operatorsFunc = (event) => {
        outputSelector().firstElementChild.innerHTML += ` ${event.target.innerHTML} `

    }
    const equalFunc = (event) => {
        let calculationOperationString = outputSelector().firstElementChild.innerHTML

        let calculationOperationStringNew = calculationOperationString
          .replace(/[x]/g, "*")
          .replace(/[÷]/g, "/")

        const calculationOperationStringSolution = outputSelector().firstElementChild.innerHTML = eval(calculationOperationStringNew)

        calculationSelector().firstElementChild.innerHTML = `${calculationOperationString} =`

        // call history function
        history(calculationOperationString)

        return calculationOperationString
    }
    const acFunc = () => {
        calculationSelector().firstElementChild.innerHTML = `Ans = ${equalFunc()}`
        outputSelector().firstElementChild.innerHTML = ''
    }

    const keyFunc = (event) => {
        console.log(event)
        console.log(event.key)
        console.log(typeof event.key)

        const calcNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        const operators = ["+", "-", "*", "/"]

        switch (event.key) {
            case calcNumbers.toString().includes(event.key):
                // outputSelector().firstElementChild.innerHTML += event.key
                numbersFunc(event.key)
                break
            case operators.includes(event.key):
                operatorsFunc(event.key)
                break
            case event.key === '=':
                equalFunc(event.key)
                break
            case event.key === 'escape':
                acFunc()
                break
            case event.key === 'ArrowUp' || 'ArrowDown':
                showHistory()
                break
            }
        }

        let historyArr = []
        const history = (calcString) => {
            historyArr.push(calcString)
            console.log(historyArr)
            return historyArr
        }

        const showHistory = () => {
            historyArr.indexOf()
        }

    // -- starting app --
    init()
}
