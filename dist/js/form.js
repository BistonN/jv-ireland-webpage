function redirectToAboutUs() {
    window.location.href = "#form";
}

document.addEventListener("DOMContentLoaded", function () {
    const submitButton = document.getElementById('submitButton');

    submitButton.addEventListener('click', function (event) {
        event.preventDefault();

        const form = document.getElementById('myForm');

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || phone === '' || message === '') {
            // highlightEmptyFields();
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const formData = {
            'Name': name,
            'Email': email,
            'Phone': phone,
            'Message': message
        };

        form.reset();
        try {
            sendFormToFormSubmit(formData);
            showToast('Your email has been sent successfully. Thank you for contacting us and we will be in touch soon.');
        } catch (error) {
            showToast('The system is undergoing maintenance. Please try again later or contact us on 083 065 9688');
            console.log(error);
        }
    });
});

// function highlightEmptyFields() {
//     const form = document.getElementById('myForm');
//     const inputs = form.querySelectorAll('input');
//     console.log(inputs)
//     inputs.forEach(input => {
//         if (input.value.trim() === '') {
//             input.classList.add('invalid');
//             const errorMessage = document.getElementById(`${input.id}-error`);
//             errorMessage.style.display = 'block';
//         } else {
//             input.classList.remove('invalid');
//             const errorMessage = document.getElementById(`${input.id}-error`);
//             errorMessage.style.display = 'none';
//         }
//     });
// }

// function showToast(text) {
//     var x = document.getElementById("snackbar");
//     x.innerHTML = text
//     x.className = "show";
//     setTimeout(function () { x.className = x.className.replace("show", ""); }, 9000);
// }

function sendFormToFormSubmit(formData) {
    const formSubmitEndpoint = 'https://formsubmit.co/biston.nunes@gmail.com';

    const hiddenForm = document.createElement('form');
    hiddenForm.setAttribute('method', 'POST');
    hiddenForm.setAttribute('action', formSubmitEndpoint);
    hiddenForm.setAttribute('enctype', 'multipart/form-data');

    const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');
    const csrfInput = document.createElement('input');
    csrfInput.setAttribute('type', 'hidden');
    csrfInput.setAttribute('name', '_token');
    csrfInput.setAttribute('value', csrfToken);
    hiddenForm.appendChild(csrfInput);

    for (const key in formData) {
        if (formData.hasOwnProperty(key)) {
            const input = document.createElement('input');
            input.setAttribute('type', 'hidden');
            input.setAttribute('name', key);
            input.setAttribute('value', formData[key]);
            hiddenForm.appendChild(input);
        }
    }

    document.body.appendChild(hiddenForm);
    hiddenForm.submit();
}