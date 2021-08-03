{
    const init = () => {
        buttonEvent()
        sliderEvent()
    }

    // selectors:
    const buttons = () => Array.from(document.querySelectorAll('button'))
    const body = () => document.querySelector('body')
    const slideControllers = () => Array.from(document.querySelectorAll('[type=range]'))

    // eventListener
    const buttonEvent = () => buttons().forEach(element => {
        element.addEventListener('click', changeColorBackground)
    })

    const sliderEvent = () => slideControllers().forEach(element => {
        console.log(element)
        element.addEventListener('mousemove', changeColorFromSlider)
    })

    // eventFunctions
    const changeColorBackground = event => {
        console.log(event)
        // const buttonId = buttons().indexOf(event.target)
        body().style.backgroundColor = event.target.innerHTML
    }

    const changeColorFromSlider = event => {
        // event => console.log(event)
        console.time()
        // console.log(event.target.value)

        // init colors
        let colorRed = slideControllers()[0].value
        let colorGreen = slideControllers()[1].value
        let colorBlue = slideControllers()[2].value

        const backgroundColor = `rgb(${colorRed}, ${colorGreen}, ${colorBlue})`;
        console.log(backgroundColor)
        body().style.backgroundColor = backgroundColor
        console.timeEnd()
    }

    init()
}
