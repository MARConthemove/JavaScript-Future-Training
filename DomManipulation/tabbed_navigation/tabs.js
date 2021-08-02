'use strict'

{
    const init = () => {
        hideAllArticles()
        showFirstArticle()
        eventAllTopics()
    }

    // Selectors for elements:
    const allArticles = () => Array.from(document.querySelectorAll('article'))
    const allTopics = () => Array.from(document.querySelectorAll('ul > li'))

    const eventAllTopics = () => allTopics().forEach(element =>
        element.addEventListener('click', activateTopic))

    const hideArticle = e => e.style.display = 'none'
    const showArticle = e => e.style.display = 'block'

    const hideAllArticles = () =>  allArticles().forEach((element) =>
        hideArticle(element)
    )

    const showFirstArticle = () => {
        showArticle(allArticles()[0])
    }

    const activateTopic = event => {
        console.log(event)
        let idTopic = allTopics().indexOf(event.target)
        allTopics().forEach(element => element.classList.remove('active'))
        allTopics()[idTopic].classList.add("active")

        hideAllArticles()
        showArticle(allArticles()[idTopic])
    }

    init()
}

