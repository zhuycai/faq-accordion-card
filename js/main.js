let faqQuestions = document.querySelectorAll('.faq > .item > .question');

faqQuestions.forEach(ele => {
    ele.addEventListener('click', function() {
        ele.classList.toggle('active');
        ele.nextElementSibling.classList.toggle('appear');
        ele.children[0].classList.toggle('arrow-reverse');
    });
});

