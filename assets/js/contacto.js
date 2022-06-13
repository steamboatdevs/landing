const d = document;
let form = d.querySelector('#form');
const send = async () => {
    const email = d.querySelector('#email');
    const name = d.querySelector('#name');
    const message = d.querySelector('#message');
    const notification = d.querySelector('.notification');
    const config = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email.value,
            name: name.value,
            message: message.value,
        }),
    };
    data = await fetch('https://steamboat-mailer.onrender.com/mailing', config);
    res = await data.json();
    if (data.status !== 200) {
        notification.style.visibility = 'visible';
        notification.style.opacity = 1;
        notification.style.transition = '0.5s ease';
        notification.className += ' error';
        notification.innerHTML = `
            <p class="textNotification">Hubo un error al enviar el mensaje</p>
        `;
    } else {
        notification.style.visibility = 'visible';
        notification.style.opacity = 1;
        notification.style.transition = '0.5s ease';
        notification.className += ' success';
        notification.innerHTML = `
            <p class="textNotification">${res.msg}</p>
        `;
    }

    email.value = '';
    name.value = '';
    message.value = '';

    setTimeout(() => {
        notification.className = 'notification';
        notification.style.opacity = 0;
        notification.style.transition = '0.5s ease';
        notification.style.visibility = 'hidden';
        notification.innerHTML = '';
    }, 10000);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    console.log('click');
    send();
});
