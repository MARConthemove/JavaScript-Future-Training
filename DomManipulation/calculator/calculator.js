{
    // -- initializing app --
    const init = () => {
        numbersListener()
        operatorsListener()
        equalListener()
        acListener()
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

        calculationSelector().firstElementChild.innerHTML =
            `${calculationOperationString} =`

        return calculationOperationString
    }
    const acFunc = () => {
        calculationSelector().firstElementChild.innerHTML = `Ans = ${equalFunc()}`
        outputSelector().firstElementChild.innerHTML = ''
    }

    // -- starting app --
    init()
}
