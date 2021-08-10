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
        if(event.type === 'keydown') {
            outputSelector().firstElementChild.innerHTML +=
              event.key
        } else {
            outputSelector().firstElementChild.innerHTML +=
              event.target.innerHTML
        }
    }

    const operatorsFunc = (event) => {
        if(event.type === 'keydown') {
            outputSelector().firstElementChild.innerHTML += ` ${event.key} `
        } else {
            outputSelector().firstElementChild.innerHTML += ` ${event.target.innerHTML} `
        }
    }

    const equalFunc = () => {
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
        // console.log(event)
        // console.log(event.key)


        const calcNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
        const operators = ["+", "-", "*", "/"]

        switch (true) {
            case calcNumbers.toString().includes(event.key):
                // outputSelector().firstElementChild.innerHTML += event.key
                numbersFunc(event)
                break
            case operators.includes(event.key):
                operatorsFunc(event)
                break
            case event.key === '=':
                equalFunc(event.key)
                break
            case event.key === 'Escape':
                acFunc()
                break
            case event.key === 'Enter':
                equalFunc()
                break
            case event.key === 'ArrowUp' || event.key === 'ArrowDown':
                showHistory(event)
                break
        }
    }

    let historyArr = []
    let actualHistoryPos = -1

    const history = (calcString) => {
        historyArr.push(calcString)
        // console.log(historyArr)
        // return historyArr
    }

    const showHistory = (event) => {
        if(historyArr.length === 0) {return}

        if(historyArr.length === 1) {
            outputSelector().firstElementChild.innerHTML = historyArr[0]
            actualHistoryPos = 0
            return
        }

        let lastIndex = historyArr.length - 1

        // First time user activate key event
        if(actualHistoryPos === -1) {
            if(event.key === 'ArrowDown') {
                return
            } else if(event.key === 'ArrowUp') {
                outputSelector().firstElementChild.innerHTML = historyArr[lastIndex - 1]
                actualHistoryPos = lastIndex - 1
                return
            }
        }
        console.log(historyArr, actualHistoryPos)

        if (event.key === "ArrowDown") {
            if(actualHistoryPos === lastIndex) {
                return
            }
            outputSelector().firstElementChild.innerHTML = historyArr[actualHistoryPos + 1]
            actualHistoryPos += 1

        } else if (event.key === "ArrowUp") {
            if(actualHistoryPos === 0) {
                return
            }
            outputSelector().firstElementChild.innerHTML = historyArr[actualHistoryPos - 1]
            actualHistoryPos -= 1
        }
    }

    // -- starting app --
    init()
}
