const form = document.getElementById('comments_form');
const comment_block = document.querySelector('.comments');
const comment_template = comment_block.querySelector('.template');

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
    xhttp.postForm(form, function (response) {
        addComment(response.id, response.author, response.message, response.phone_number, response.email);
    });
}

function addComment(id, author, message, phone_number, email) {
    const new_comment = comment_template.cloneNode(true);
    new_comment.classList.remove('template');
    new_comment.querySelector('.author').textContent = author;
    new_comment.querySelector('.message').textContent = message;
    new_comment.querySelector('.phone_number').textContent = phone_number;
    new_comment.querySelector('.email').textContent = email;
    new_comment.dataset.id = id;

    new_comment.querySelector(' .delete').onclick = function (event) {
        const data = new FormData();
        data.set('id', id);

        xhttp.post('api.php?name=delete-comment', data, function (response) {
            new_comment.remove();
        });
    };

    comment_block.append(new_comment);
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