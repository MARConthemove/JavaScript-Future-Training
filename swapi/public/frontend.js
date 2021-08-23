const SWAPI_URL = "https://swapi.api.webmasters-akademie.dev/planets/"

let planetList = []

const showPlanets = document.querySelector("#planet_list").innerHTML = planetList.join(', ')

const fetchPlanets = () => {
    new Promise((resolve, reject) => {
        fetch(SWAPI_URL)
            .then(res => res.json())
            .then(res => )
    })
}
