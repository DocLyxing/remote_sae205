

function previous() {
    const sliderWidth = document.querySelector('.slide').offsetWidth;
    document.querySelector('.slider-content').scrollLeft -= sliderWidth;
}

function next() {
    const sliderWidth = document.querySelector('.slide').offsetWidth;
    document.querySelector('.slider-content').scrollLeft += sliderWidth;
}

