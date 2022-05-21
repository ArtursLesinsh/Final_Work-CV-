const form = document.getElementById('comments_form');
const comment_block = document.querySelector('.comments');
const comment_template = comment_block.querySelector('.template');

xhttp.get('api.php?name=get-comments', function (response) {
    for (let comment of response.comments){
        addComment(comment.author, comment.message, comment.phone_number, comment.email)
    }
})

form.onsubmit = function (event) {
    event.preventDefault();
    xhttp.postForm(this, function (response) {
        addComment(response.author, response.message, response.phone_number, response.email);
    });
};

function addComment(author, message, phone_number, email) {
    const new_comment = comment_template.cloneNode(true);
    new_comment.classList.remove('template');
    new_comment.querySelector('.author').textContent = author;
    new_comment.querySelector('.message').textContent = message;
    new_comment.querySelector('.phone_number').textContent = phone_number;
    new_comment.querySelector('.email').textContent = email;

    comment_block.append(new_comment)
}