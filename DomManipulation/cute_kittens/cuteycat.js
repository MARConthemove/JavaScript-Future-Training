{
    const init = () => {
        chooseCatEvent()
    }

    // Selectors
    const ourCatsSelector = () =>
        Array.from(document.querySelectorAll('#candidates > li'))

    const cutestCatsList = () =>
        document.querySelector('#cutest')

    const cutestCatsListArr = () =>
        Array.from(document.querySelectorAll('#cutest li'))

    // Events + Functions
    const chooseCatEvent = () => {
        ourCatsSelector().forEach(cat => cat.addEventListener('click', pickCat))
    }

    const pickCat = event => {
        // let liNode = ''
        // if(event.target.tagName !== 'LI'){
        //     liNode = event.target.parentNode
        // } else {
        //     liNode = event.target
        // }

        let liNode = event.target.tagName !== "LI"
            ? event.target.parentNode
            : event.target

        const li = liNode.cloneNode(true)
        // console.log(li)
        buildCutesCats(li)
    }

    const removeCutestCat = event => {
        let liNode = event.target.tagName !== "LI"
            ? event.target.parentNode
            : event.target

        liNode.parentNode.removeChild(liNode)

        // OR :
        // const indexCatLi = cutestCatsListArr().indexOf(liNode)
        // cutestCatsListArr()[indexCatLi].remove()
    }

    const buildCutesCats = htmlNode => {
        let catNamePicked = htmlNode.querySelector('span').innerText
        let checkMaxCats = Array.from(cutestCatsListArr()).length < 3
        let checkExists = !cutestCatsList().innerText.includes(catNamePicked)

        if (checkExists && checkMaxCats) {
            cutestCatsList().appendChild(htmlNode)
            htmlNode.addEventListener("click", removeCutestCat)
        }
    }

    init()
}
    // <section id="cutest_section">
    //   <h1>Cutest Cats</h1>
    //   <ul id="cutest" class="kittenlist"></ul>
    //   <p>Click to remove</p>
    // </section>;
