// слайдер
function sliderEngine(sliderDescription, prevItem, nextItem) {
    let description = document.querySelectorAll(sliderDescription);
    let prevButton = document.querySelector(prevItem);
    let nextButton = document.querySelector(nextItem);
    let currentItem = 0;

    function next(e) {
        if (currentItem === description.length - 1) {
            description[currentItem].classList.remove('sliding');

            currentItem = 0;
            description[currentItem].classList.add('sliding');
        } else {
            showItem(this.id);
        }
    }

    function prev(e) {
        if (currentItem < description.length) {
            if (currentItem <= 0) {
                description[currentItem].classList.remove('sliding');
                currentItem = description.length - 1;
                description[currentItem].classList.add('sliding');
            } else {
                showItem(this.id);
            }
        }
    }

    function showItem(elemID) {
        if (elemID === 'prev') {
            description[currentItem].classList.remove('sliding');
            currentItem--;
            description[currentItem].classList.add('sliding');
        } else if (elemID === 'next') {
            description[currentItem].classList.remove('sliding');
            currentItem++;
            description[currentItem].classList.add('sliding');
        }
    }

    if (nextButton) {
        nextButton.addEventListener('click', next);
    }

    if (prevButton) {
        prevButton.addEventListener('click', prev);
    }
}

window.addEventListener('DOMContentLoaded', () => {
    sliderEngine(
        '.reviews__item', 
        '.reviews__slider-button--prev',
        '.reviews__slider-button--next'
    );
});

//пульсирующая кнопка
function pulse() {
    let buttons, buttonPulse;

    buttons = document.querySelectorAll('.button');

    buttonPulse = function(e) {
        [].forEach.call(buttons, function(item) {
            item.classList.remove('button--active');
        });

        this.classList.add('button--active');

        let addElem = document.querySelector('.button__pulse');
        let styleElem = addElem.style;

        let maxValue = Math.max(this.clientWidth, this.clientHeight);
        let px = 'px';
        let rect = this.getBoundingClientRect();

        styleElem.width = styleElem.height = maxValue + px;
        styleElem.left = e.clientX - rect.left - (maxValue / 2) + px;
        styleElem.top = e.clientY - rect.top - (maxValue / 2) + px;

        this.appendChild(addElem, addElem);
    }

    Array.prototype.forEach.call(buttons, function(item) {
        item.addEventListener('click', buttonPulse);
    });
}

window.addEventListener('DOMContentLoaded', () => {
    pulse();
});

// мобильное меню
function mobileMenu(button, block) {
    const mobileBtn = document.querySelector(button);
    const mobileBlock = document.querySelector(block);
    

    mobileBtn.addEventListener('click', function(event) {
        mobileBlock.classList.toggle('mobile-menu-block--visible');
        event.target.classList.toggle('mobile-menu-button--close');
    });
}

window.addEventListener('DOMContentLoaded', () => {
    mobileMenu(
        '.mobile-menu-button',
        '.mobile-menu-block'
    );
})