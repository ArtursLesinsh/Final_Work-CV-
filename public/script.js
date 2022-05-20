const form = document.getElementById('comments_form');
const comment_block = document.querySelector('.comments');
const comment_template = comment_block.querySelector('.template');

form.onsubmit = function (event) {
    event.preventDefault();
    const data = new FormData(this);
    addComment(data.get('author'), data.get('message'), data.get('phone_number'), data.get('email'))
}

function addComment(author, message, phone_number, email) {
    const new_comment = comment_template.cloneNode(true);
    new_comment.classList.remove('template');
    new_comment.querySelector('.message').textContent = message;

    comment_block.append(new_comment)
}