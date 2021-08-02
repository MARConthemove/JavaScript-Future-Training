{
    const lampsAll = Array.from(document.querySelectorAll("[alt=lightbulb]"))

    const lightbulbON = event => {
        const lampNumber = lampsAll.indexOf(event.target)
        lampsAll.forEach(e => e.src = 'light_off.png')
        if(lampNumber !== lampsAll.length - 1) {
            lampsAll[lampNumber + 1].src = "light_on.png"
        } else {
            lampsAll[0].src = 'light_on.png'
        }

    }

    lampsAll
        .forEach((element) => {
            element.addEventListener("click", lightbulbON)
    })
}
