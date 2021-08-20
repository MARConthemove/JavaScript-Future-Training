'use strict'

// init:
const URL = 'https://solar.api.webmasters-akademie.dev/bodies/'

const PlanetNames = {
    Earth: 'terre',
    Mars: 'mars',
}

// selectors:
const planet_list = document.querySelectorAll("#planet-list li")


// eventListener:
planet_list.forEach((element) =>
    element
        .addEventListener("click", (event) =>
            findPlanet(event.target.innerText)))

// functions:
const findPlanet = planet => {
    // fetching data from API -> promise:
    fetch(`${URL}${PlanetNames[planet]}`)
        .then(res => res.json()) // transformation of data to json
        .then(res => showPlanetData(res)) //create planet information
        .catch(err => console.log('There was an error: ' + err))
}

const showPlanetData = res => {
    console.log(res.moons)

    // tap information from API
    const name = document.createElement('p')
    name.innerHTML = res.name

    console.log(name) // testing HTML p-tag

    const moons = document.createElement('p')
    moons.innerHTML = res.moons

    const axialTilt = document.createElement('p')
    axialTilt.innerHTML = res.axialTilt

    const equatorRadius = document.createElement('p')
    equatorRadius.innerHTML = res.equaRadius

}

console.log(planet_list)
