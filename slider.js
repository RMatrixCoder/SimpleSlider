let items = document.querySelectorAll('.item');
let totalSlide = items.length;
console.log(totalSlide);
let nextSlide = document.querySelector('.right-slide');
let prevSlide = document.querySelector('.left-slide');
let index = 0;

nextSlide.addEventListener("click", function () {
    console.log('clicked');
    next("next");
});

prevSlide.addEventListener("click", function () {
    console.log('clicked');
    next("prev");
});

function next(direction) {
    if (direction === 'next') {
        index++;
        if (index === totalSlide) {
            index = 0;
        }
    } else {
        index--;
        if (index < 0) {
            index = totalSlide - 1;
        }
    }
    for (let i = 0; i < totalSlide; i++) {
        items[i].classList.remove("active");
        items[i].querySelector('img').classList.remove("fromrightimage");
        items[i].querySelector('img').classList.remove("fromleftimage");
    }
    if (direction === 'next') {
        items[index].querySelector('img').classList.add("fromleftimage");
        console.log(items[index].querySelector('img'));
    } else {
        items[index].querySelector('img').classList.add("fromrightimage");
        console.log(items[index].querySelector('img'));
    }
    items[index].classList.add("active");
}