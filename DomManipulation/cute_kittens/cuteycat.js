{
    const init = () => {
        chooseCatEvent()
    }

    // Selectors
    const ourCatsSelector = () =>
        Array.from(document.querySelectorAll('#candidates > li'))

    const cutestCatsSelector = () =>
        document.querySelector('#cutest_section #cutest')

    // Events + Function
    const chooseCatEvent = () => {
        ourCatsSelector().forEach(cat => cat.addEventListener('click', pickCat))
    }

    const pickCat = event => {
        console.log(event)


        const li = event.cloneNode(true)
        console.log(li)


    }

    init()
}
