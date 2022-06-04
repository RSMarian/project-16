// using selectors inside the element
// traversing the dom

// select all the buttons
// loop over the buttons
// add event listeners
// make sure the parent is the question
// add .show-text to the parent

const btns = document.querySelectorAll('.question-btn');

btns.forEach(function (btn) {
    btn.addEventListener('click', function(e){
        const question = e.currentTarget.parentElement.parentElement;
        question.classList.toggle('show-text');
    });
});
