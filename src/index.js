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
  if ((parseInt(getComputedStyle(content).left)) > -800){
    let int = (parseInt(getComputedStyle(content).left) - 200);
    content.style.left = int + 'px';
  }
})
back.addEventListener('click', function() {
  if ((parseInt(getComputedStyle(content).left)) < 0){
    let int = (parseInt(getComputedStyle(content).left) + 200);
    content.style.left = int + 'px';
  }
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
})
second.addEventListener('click', function(){
  resetIndex();
  second.style['background-color'] = 'blue';
  content.style.left = '-200px';
})
third.addEventListener('click', function(){
  resetIndex();
  third.style['background-color'] = 'blue';
  content.style.left = '-400px';
})
fourth.addEventListener('click', function(){
  resetIndex();
  fourth.style['background-color'] = 'blue';
  content.style.left = '-600px';
})
fifth.addEventListener('click', function(){
  resetIndex();
  fifth.style['background-color'] = 'blue';
  content.style.left = '-800px';
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
setInterval(spinCarousel, 5000);