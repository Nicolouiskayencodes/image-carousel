import './style.css';
const back = document.querySelector('#left');
const forward = document.querySelector('#right');
const content = document.querySelector('#content');
const indexButtons = document.querySelectorAll('.index');
const first = document.querySelector('#first');
const second = document.querySelector('#second');
const third = document.querySelector('#third');
const fourth = document.querySelector('#fourth');
const fifth = document.querySelector('#fifth');
forward.addEventListener('click', function() {
  spinCarousel();
  resetInterval();
})
back.addEventListener('click', function() {
  reverseCarousel();
  resetInterval();
})
function resetIndex() {
  indexButtons.forEach(element => {
    element.style['background-color'] = '#EFEFEF';
  })
}
first.addEventListener('click', function() {
  resetIndex();
  first.style['background-color'] = 'blue';
  content.style.left = '0px';
  resetInterval();
})
second.addEventListener('click', function(){
  resetIndex();
  second.style['background-color'] = 'blue';
  content.style.left = '-200px';
  resetInterval();
})
third.addEventListener('click', function(){
  resetIndex();
  third.style['background-color'] = 'blue';
  content.style.left = '-400px';
  resetInterval();
})
fourth.addEventListener('click', function(){
  resetIndex();
  fourth.style['background-color'] = 'blue';
  content.style.left = '-600px';
  resetInterval();
})
fifth.addEventListener('click', function(){
  resetIndex();
  fifth.style['background-color'] = 'blue';
  content.style.left = '-800px';
  resetInterval();
})

function spinCarousel() {
  let int = parseInt(getComputedStyle(content).left);
  if (int === 0) {
    second.click();
  } else if (int === -200) {
    third.click();
  } else if (int === -400) {
    fourth.click();
  } else if (int === -600) {
    fifth.click();
  } else if (int === -800) {
    first.click();
  }
}
function reverseCarousel() {
  let int = parseInt(getComputedStyle(content).left);
  if (int === 0) {
    fifth.click();
  } else if (int === -200) {
    first.click();
  } else if (int === -400) {
    second.click();
  } else if (int === -600) {
    third.click();
  } else if (int === -800) {
    fourth.click();
  }
}
let interval = setInterval(spinCarousel, 5000);
function resetInterval() {
  clearInterval(interval);
  interval = setInterval(spinCarousel, 5000);
}