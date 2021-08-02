'use strict'

{
    // initializing js start
    const init = () => {
        initProgressbar()
        firstMessage()
        $('[title=next]').addEventListener('click', nextMessage)
        $('[title=prev]').addEventListener('click', prevMessage)
        $('[title=first]').addEventListener('click', firstMessage)
        $('[title=last]').addEventListener('click', lastMessage)
    }

    const initProgressbar = () => {
        progressbar().max = messages.length
        progressbar().value = 1
    }

    // functions progressbar
    const nextMessage = () => {
        incCurrentMessageNumber()
        update()
    }
    const prevMessage = () => {
        decCurrentMessageNumber()
        update()
    }
    const firstMessage = () => {
        setCurrentMessageNumberToFirstMessage()
        update()
    }
    const lastMessage = () => {
        setCurrentMessageNumberToLastMessage()
        update()
    }

    // handling of messages
    const showMessageButtonNumber = () => {
        $('.message_number').innerHTML = currentMessageNumber()
    }

    const incCurrentMessageNumber = () => (progressbar().value += 1)
    const decCurrentMessageNumber = () => (progressbar().value -= 1)

    const setCurrentMessageNumberToFirstMessage = () => {
        progressbar().value = 1
        update()
    }
    const setCurrentMessageNumberToLastMessage = () => {
        progressbar().value = progressbar().max
        update()
    }

    const update = () => {
        updateMessage()
        updateButtonState()
        showMessageButtonNumber()
    }

    const updateMessage = () => showMessageByNumber(currentMessageNumber())

    const updateButtonState = () => {
        buttonNext().disabled = lastMessageReached()
        buttonPrev().disabled = firstMessageReached()
        buttonLast().disabled = lastMessageReached()
        buttonFirst().disabled = firstMessageReached()
    }

    const lastMessageReached = () => currentMessageNumber() === messages.length
    const firstMessageReached = () => currentMessageNumber() === 1

    const showMessageByNumber = messageNumber => {
        $('.newsboard_content').innerHTML = messages[messageNumber - 1]
    }
    const currentMessageNumber = () => progressbar().value
    const progressbar = () => $('#messages_progress')

    const buttonNext = () => $("[title=next]")
    const buttonPrev = () => $("[title=prev]")
    const buttonFirst = () => $("[title=first]")
    const buttonLast = () => $("[title=last]")

    init()
}
