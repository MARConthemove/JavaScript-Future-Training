{
    const init = () => {
        numbersListener()
        operatorsListener()
        equalListener()
    }

    // querySelectors:
    const numbersSelectorArr = () => Array.from(document.querySelectorAll('.char.number'))

    const operatorsSelectorArr = () =>
        Array.from(document.querySelectorAll('.char.operator'))

    const equalSelector = () => document.querySelector('.char.equal')

    // eventListener:
    const numbersListener = () => numbersSelectorArr().forEach(element => {
        element.addEventListener('click', numbersFunc)
    })

    const operatorsListener = () => operatorsSelectorArr().forEach(element => {
        element.addEventListener('click', operatorsFunc)
    })

    const equalListener = () => equalSelector().addEventListener('click', equalFunc)

    // functions:
    const numbersFunc = (event) => {
        (event) => console.log(event)
    }

    const operatorsFunc = (event) => {
        (event) => console.log(event)
    }

    const equalFunc = (event) => {
        console.log(event)
    }

    init()
}
