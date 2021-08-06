{
    const init = () => {
        numPadListener()
    }

    // querySelectors:
    const numSelectorsArr = () => Array.from(document.querySelectorAll(".char.number"))

    // numPadFunctions:

    // eventListener:
    const numPadListener = () => numSelectorsArr().forEach(element => {
            element.addEventListener('click', event => console.log(event))
        }
    )

    init()
}
