{
    const init = () => {
        imagesEvent()
    }

    // Selectors
    const imagesSelectorArr = Array.from(document.querySelectorAll('img'))
    const informationField = document.querySelector('section#info p')

    // EventListener
    const imagesEvent = () => {
        imagesSelectorArr.forEach(element =>
            element.addEventListener('mouseenter', imageFunction))
    }

    // Functions
    const imageFunction = (event) => {
        // country flag
        const flag =
            `<img src="${event.target.dataset.countryCode}.png" alt="${event.target.dataset.flagName}">`

        // showplace
        const showplace = `<h3>${flag} ${event.target.alt}</h3>`

        // description
        const description = `<p>${event.target.dataset.description}</p>`

        informationField.innerHTML = showplace + description
    }

    init()
}

/*
    data-description="The Eiffel Tower (/ˈaɪfəl ˈtaʊər/ eye-fəl towr; French: Tour Eiffel French pronunciation: ​[tuʁ‿ɛfɛl] About this sound listen) is a wrought iron lattice tower on the Champ de Mars in Paris, France. It is named after the engineer Gustave Eiffel, whose company designed and built the tower..."

    data-country-code="fr"
    data-flag-name="French Flag"
*/
