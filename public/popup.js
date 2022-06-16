const me_open = document.querySelector('.me_open');
const education_open = document.querySelector('.education_open');
const work_open = document.querySelector('.work_open');
const contact_open = document.querySelector('.contact_open');
const my_hobbies = document.querySelector('.hobbies');

/* Popup gunction for section "About me" */
document.querySelector('.me').onclick =  function() {
    me_open.style.display = 'flex';
};
me_open.onclick =  function(event) {
    if (event.target == this) {
        me_open.style.display = 'none';
    };
};

/* Popup gunction for section "Education" */
document.querySelector('.me1').onclick =  function() {
    education_open.style.display = 'flex';
};

document.querySelector('.education_open').onclick =  function() {
    education_open.style.display = 'none';
};

/* Popup gunction for section "Work" */
document.querySelector('.me2').onclick =  function() {
    work_open.style.display = 'flex';
};

document.querySelector('.work_open').onclick =  function() {
    work_open.style.display = 'none';
};

/* Popup gunction for section "Contacts" */
document.querySelector('.me3').onclick =  function() {
    contact_open.style.display = 'flex';
};

contact_open.onclick =  function(event) {
    if (event.target == this) {
        contact_open.style.display = 'none';
    };
};

/* Popup function for section "My hobbies" */
document.querySelector('.my_hobbies').onclick =  function() {
    my_hobbies.style.display = 'flex';
};
my_hobbies.onclick =  function(event) {
    if (event.target == this) {
        my_hobbies.style.display = 'none';
    };
};