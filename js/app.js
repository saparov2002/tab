const tabBtn1 = document.querySelector('.tab-btn1');
const tabBtn2 = document.querySelector('.tab-btn2');
const tabBtn3 = document.querySelector('.tab-btn3');
const tabBtn4 = document.querySelector('.tab-btn4');

const tabItem1 = document.querySelector('.tab-item1');
const tabItem2 = document.querySelector('.tab-item2');
const tabItem3 = document.querySelector('.tab-item3');
const tabItem4 = document.querySelector('.tab-item4');

tabBtn1.addEventListener('click', (e) => {
    e.preventDefault();
    tabItem1.classList.remove('none');
    tabItem2.classList.add('none');
    tabItem3.classList.add('none');
    tabItem4.classList.add('none');
});

tabBtn2.addEventListener('click', (e) => {
    e.preventDefault();
    tabItem1.classList.add('none');
    tabItem2.classList.remove('none');
    tabItem3.classList.add('none');
    tabItem4.classList.add('none');
});

tabBtn3.addEventListener('click', (e) => {
    e.preventDefault();
    tabItem1.classList.add('none');
    tabItem2.classList.add('none');
    tabItem3.classList.remove('none');
    tabItem4.classList.add('none');
});

tabBtn4.addEventListener('click', (e) => {
    e.preventDefault();
    tabItem1.classList.add('none');
    tabItem2.classList.add('none');
    tabItem3.classList.add('none');
    tabItem4.classList.remove('none');
});