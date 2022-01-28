const togglePassword = document.querySelectorAll('#togglePassword');
const password = document.querySelectorAll('#id_password');
togglePassword.forEach((toggle,ind)=>
{
    toggle.addEventListener('click', function (e) {
        // Toggle the type attribute
        const type = password[ind].getAttribute(
            'type') === 'password' ? 'text' : 'password';
        password[ind].setAttribute('type', type);
        // Toggle the eye slash icon
        if (toggle.src.match(
    "./icons/hidden.svg")) {
            toggle.src =
    "./icons/show.svg";
        } else {
            toggle.src =
    "./icons/hidden.svg";
        }
    });
})









