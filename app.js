const btns = document.querySelectorAll('.btns button');
const cat = document.querySelector('.cat');

btns.forEach((btn) => {
    btn.addEventListener('click', function() {

        if(this.getAttribute('data-add')) {
            cat.classList.add(this.getAttribute('data-add'));
        }

        if(this.getAttribute('data-remove')) {
            cat.classList.remove(this.getAttribute('data-remove'));
        }
    })
})