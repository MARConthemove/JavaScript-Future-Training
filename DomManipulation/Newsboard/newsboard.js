'use strict'

{
    // initializing js start
    const init = () => {
        showFirstMessage()
        $('[title=next]').addEventListener('click', nextMessage)
        $('[title=prev]').addEventListener('click', prevMessage)
        $('[title=first]').addEventListener('click', firstMessage)
        $('[title=last]').addEventListener('click', lastMessage)
    }

    // functions progressbar
    const firstMessage = () => {
        console.log()
    }


    init()
}
