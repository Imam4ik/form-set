const form = document.querySelector('form');
const submitButton = form.querySelector('button[type="submit"]');

form.addEventListener('submit', formSend);

async function formSend(e) {
    e.preventDefault();

    let formData = new FormData(form);
    const formSelect = form.querySelector('.form-select-list');

    submitButton.disabled = true;

    let response = await fetch('mailer/smart.php', {
        method: 'POST',
        body: formData
    })

    if (response.ok) {
        form.reset();
        submitButton.disabled = false;
    }
}
