'use strict'

// init:
const URL = 'https://solar.api.webmasters-akademie.dev/bodies/'

const PlanetNames = {
    Earth: 'terre',
    Venus: 'venus',
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
        .then(res => document.querySelector('#information-field').innerHTML = showPlanetData(res)) //create planet information
        .catch(err => console.log('There was an error: ' + err))
}

const showPlanetData = res => {
    console.log(res)

    const planetString = `
        <p>${res.name}</p>
        <p>${showMoons(res.moons)}</p>
        <p>${res.axialTilt}</p>
        <p>${res.equaRadius}</p>`

    return planetString
}

const showMoons = moons => {
    let moonString = ''
    if (moons === null) { return ''}
        moons.forEach(moon => moonString += ' ' + moon.moon)
        return moonString
}

console.log(planet_list)
