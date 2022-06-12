const d = document;
let form = d.querySelector('#form');
const send = async () => {
    const email = d.querySelector('#email');
    const name = d.querySelector('#name');
    const message = d.querySelector('#message');
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

    email.value = '';
    name.value = '';
    message.value = '';
};

form.addEventListener('submit', (e) => {
    e.preventDefault();
    send();
});
