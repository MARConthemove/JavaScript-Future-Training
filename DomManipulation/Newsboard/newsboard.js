'use strict'

{
    const init = () => {
        showNumberOfAvailableMessages()
        showMessageByNumber(currentMessageNumber)
        $('body').addEventListener('keyup', handleKeyPress)
        $('[title=next]').addEventListener('click', nextMessage)
        $('[title=prev]').addEventListener('click', prevMessage)
        $('[title=first]').addEventListener('click', firstMessage)
        $('[title=last]').addEventListener('click', lastMessage)
    }

    const initProgressbar = () => {
        progressbar().max = messages.length
        progressbar().value = 1
    }

    const handleKeyPress = e => {
        console.log(e)
        if(e.key === 'ArrowRight') nextMessage(e)
        if(e.key === 'ArrowLeft') prevMessage(e)
        if(e.key === 'ArrowRight' && e.altKey === true) lastMessage(e)
        if(e.key === 'ArrowLeft' && e.altKey === true) firstMessage(e)
    }

    const showNumberOfAvailableMessages = () =>
        ($('.message_number').innerHTML = messages.length)


    const nextMessage = e => showMessageForEvent(e, (currentMessageNumber += 1))
    const prevMessage = e => showMessageForEvent(e, (currentMessageNumber -= 1))
    const firstMessage = e => showMessageForEvent(e, (currentMessageNumber = 1))
    const lastMessage = e =>
        showMessageForEvent(e, (currentMessageNumber = messages.length))

    const showMessageForEvent = (e, targetMessageNumber) => {
        showMessageByNumber(targetMessageNumber)
        e.preventDefault()
    }


    const showMessageByNumber = (messageNumber) =>
        ($(".newsboard_content").innerHTML = messages[messageNumber - 1])

    const progressbar = () => $("messages_progress")
    const $ = q => document.querySelector(q)
    const $$ = q => document.querySelectorAll(q)

    const incCurrentMessageNumber = () => (progressbar().value += 1)
    const decCurrentMessageNumber = () => (progressbar().value -= 1)

    const messages = [
      `<h1>This is a test</h1>
    <h2>All assignmnent are automatically graded with 0 points</h2>
    <p>Duis pretium ornare odio nec cursus. Nulla quis dolor vitae nulla condimentum maximus nec vitae purus. Curabitur ut mi non nulla molestie porta. Curabitur dignissim lacinia condimentum. In hac habitasse platea dictumst. Mauris ut urna magna. Mauris venenatis eu quam nec posuere. Nulla facilisi. Donec convallis sodales massa, et consequat nunc vehicula malesuada.</p>
    <p class="newsboard_footer">9/25/2015 by N. O'body</p>`,

      `<h1>Madness!</h1>
    <h2>How to earn a fortune, with a complete stupid idea</h2>
    <p>Ut molestie elementum risus, eget rutrum dui tristique id. Duis ac elit a mi convallis lacinia. Sed at ultricies magna. Pellentesque nisl est, mattis eget porta eu, rhoncus in urna. Integer faucibus lectus nec malesuada tempus. Duis consectetur sollicitudin ultricies. Cras massa nulla, aliquet vitae interdum quis, venenatis at quam.</p>
    <p class="newsboard_footer">08/13/20156 by Dr. Ken Hurt</p>`,

      `<h1>I did something, and you will never guess what happened next...</h1>
    <h2>Donec tristique, leo at suscipit pellentesque, mauris neque congue leo!</h2>
    <p>Aenean egestas mauris at neque egestas hendrerit id ut erat. Donec iaculis ornare gravida. Vestibulum condimentum, tortor nec eleifend consectetur, justo lacus dignissim ante, eget commodo enim urna sollicitudin arcu. Odio eu leo pulvinar rutrum sed a turpis. Nunc dui tortor, rutrum vitae gravida quis, hendrerit a massa. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas</p>
    <p>Integer non venenatis tellus. Phasellus tellus leo, suscipit ac vulputate non, varius nec eros. Etiam scelerisque nisi arcu, interdum tempus dui volutpat vel. Donec eget posuere nulla. Etiam ornare dapibus tortor, ac sollicitudin nisi porta a. Donec tristique, leo at suscipit pellentesque, mauris neque congue leo, sed tempor massa justo a ligula. Curabitur vitae rhoncus lacus, quis varius felis. Ut tincidunt sit amet nisl finibus tempus. Curabitur mollis sit amet leo a sagittis.</p>
    <p class="newsboard_footer">2015/06/02 by Chris P. Bacon</p>`,
    ];

    let currentMessageNumber = 1

    init()
}
