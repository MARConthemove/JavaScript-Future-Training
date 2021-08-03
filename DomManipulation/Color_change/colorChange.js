{
    const init = () => {
        buttonEvent()
    }

    // selectors:
    const buttons = () => Array.from(document.querySelectorAll('button'))
    const body = () => document.querySelector('body')

    // eventListener
    const buttonEvent = () => buttons().forEach(element => {
        element.addEventListener('click', changeColorBackground)
    })

    // eventFunctions
    const changeColorBackground = event => {
        console.log(event)
        // const buttonId = buttons().indexOf(event.target)
        body().style.backgroundColor = event.target.innerHTML
    }

    init()
}
