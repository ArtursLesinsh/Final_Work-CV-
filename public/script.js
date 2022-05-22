const form = document.getElementById('comments_form');
const comment_block = document.querySelector('.comments');
const popup = document.querySelector('.popup');

form.onsubmit = function (event) {
    event.preventDefault();
    submitForm(this);
};

function submitForm (form) {
    xhttp.postForm(form, function (response) {});
    popup.style.display = 'flex';
}

let alt_is_down = false;
form.querySelector('textarea').onkeydown = function (event) {
    if (event.key === 'Alt') {
        alt_is_down = true;
    }
}

form.querySelector('textarea').onkeyup = function (event) {
    if (event.key === 'Alt') {
        alt_is_down = false;
    }
    else if (event.key === 'Enter') {
        if (alt_is_down === false) {
            submitForm(form);
        }
        else {
            this.value += '\n';
        }
    }
};

popup.onclick = function(event) {
        this.style.display = 'none';
};