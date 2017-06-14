const hamburger = document.querySelector('.hamburger');

hamburger.addEventListener('click', function() {
    hamburger.classList.toggle('is-active');
})

                    // Get In Touch

var nameInp = document.querySelector('#nameInput');
var mailInp = document.querySelector('#mailInput');
var messageInp = document.querySelector('#messageInput');
var sendBtn = document.querySelector('#sendMessageButton');

sendBtn.addEventListener('click', submitForm);

function submitForm() {
    if (isInvaldInput(nameInp.value, mailInp.value, messageInp.value)) {
        alert('All fields are required!!!');
        return false
    }

    if (validateEmail(mailInp.value))
        window.open('mailto:' + mailInp.value + '?subject=' + nameInp.value + '&body=' + messageInp.value, '_self');
    else
        alert('Wrong email.');

    return false
}

function isInvaldInput() {
    var args = [].slice.call(arguments);
    return args.some(function(item) {
        return item === '';
    });
}

function validateEmail(email) {
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
}
