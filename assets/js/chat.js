/* Whatsapp Chat Widget by www.bloggermix.com */
$(document).on('click', '#send-it', function () {
    var a = document.getElementById('chat-input');
    if ('' != a.value) {
        var b = $('#get-number').text(),
            c = document.getElementById('chat-input').value,
            d = 'https://web.whatsapp.com/send',
            e = b,
            f = '&text=' + c;
        if (
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
                navigator.userAgent
            )
        )
            var d = 'whatsapp://send';
        var g = d + '?phone=+31 6 29320129' + e + f;
        window.open(g, '_blank');
    }
}),
    $(document).on('click', '.informasi', function () {
        (document.getElementById('get-number').innerHTML = $(this)
            .children('.my-number')
            .text()),
            $('.start-chat,.get-new').addClass('show').removeClass('hide'),
            $('.home-chat,.head-home').addClass('hide').removeClass('show'),
            (document.getElementById('get-nama').innerHTML = $(this)
                .children('.info-chat')
                .children('.chat-nama')
                .text()),
            (document.getElementById('get-label').innerHTML = $(this)
                .children('.info-chat')
                .children('.chat-label')
                .text());
    }),
    $(document).on('click', '.close-chat', function () {
        $('#whatsapp-chat').addClass('hide').removeClass('show');
    }),
    $(document).on('click', '.blantershow-chat', function () {
        $('#whatsapp-chat').addClass('show').removeClass('hide');
    });

let x = document.getElementById('timi');
var wtp_time = new Date();
var hours = wtp_time.getHours();
var minutes = wtp_time.getMinutes();
x.innerHTML = hours + ':' + minutes;
