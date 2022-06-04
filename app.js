// 1.traversing the dom
// 2.using selectors inside the element


// TRAVERSING DOM
// select all the buttons
// loop over the buttons
// add event listeners
// make sure the parent is the question
// add(toggle) .show-text to the parent

// const btns = document.querySelectorAll('.question-btn');

// btns.forEach(function (btn) {
//     btn.addEventListener('click', function(e){
//         const question = e.currentTarget.parentElement.parentElement;
//         question.classList.toggle('show-text');
//     });
// });


// USING SELECTORS
// select all the questions
// loop over the questions
// add event listeners which toggle .show-text



const questions = document.querySelectorAll('.question');

questions.forEach(function(question){
    // console.log(question);
    const btn = question.querySelector('.question-btn');
    // console.log(btn);

    btn.addEventListener('click', function(){
        //ONE QUESTION AT A TIME
        questions.forEach(function(item){
            console.log(item);
            if(item !== question) {
                item.classList.remove('show-text');
            }
        });

        question.classList.toggle('show-text');
    })
});




