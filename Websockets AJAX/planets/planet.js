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
    fetch(`${URL}${PlanetNames[planet]}`)
        .then(res => res.json())
        .then(res => showPlanetData(res))
        .catch(err => console.log('There was an error: ' + err))
}

const showPlanetData = res => {
    console.log(res.moons)

    const name = document.createElement('p')
    name.innerHTML = res.name

    const moons = document.createElement('p')
    moons.innerHTML = res.moons

    const axialTilt = document.createElement('p')
    axialTilt.innerHTML = res.axialTilt

    const equatorRadius = document.createElement('p')
    equatorRadius.innerHTML = equaRadius

}

console.log(planet_list)
