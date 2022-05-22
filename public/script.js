const form = document.getElementById('comments_form');
const comment_block = document.querySelector('.comments');

xhttp.get('api.php?name=get-comments', function (response) {
    for (let comment of response.comments) {
        addComment(comment.id, comment.author, comment.message, comment.phone_number, comment.email);
    }
});

form.onsubmit = function (event) {
    event.preventDefault();
    submitForm(this);
};

function submitForm (form) {
    xhttp.postForm(form, function (response) {});
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