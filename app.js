const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const mainslide = document.querySelector('.main-slide');
const container = document.querySelector('.container');
const slidesCount =  mainslide.querySelectorAll('div').length;

let activeSlideindex =0;
sidebar.style.top = `-${(slidesCount-1)*100}vh`;

upBtn.addEventListener('click', () => {
    changeSlide('up');
});

downBtn.addEventListener('click', () => {
    changeSlide('down');
});

function changeSlide(direction){
    if(direction ==='up'){
        activeSlideindex++;
        if(activeSlideindex === slidesCount)
        {
            activeSlideindex = 0;
        }
    }
    else if(direction ==='down'){
        activeSlideindex--;
        if (activeSlideindex < 0){
        activeSlideindex = slidesCount - 1;
        }
    }
    const height = container.clientHeight;
    mainslide.style.transform = `translateY(-${activeSlideindex*height}px)`;
    sidebar.style.transform = `translateY(${activeSlideindex*height}px)`;
}


