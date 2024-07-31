import './style.css';
const back = document.querySelector('#left');
const forward = document.querySelector('#right');
const content = document.querySelector('#content')
console.log((parseInt(getComputedStyle(content).left)));
forward.addEventListener('click', function() {
  if ((parseInt(getComputedStyle(content).left)) > -800){
    let int = (parseInt(getComputedStyle(content).left) - 200);
    console.log(int);
    content.style.left = int + 'px';
  }
})
back.addEventListener('click', function() {
  if ((parseInt(getComputedStyle(content).left)) < 0){
    let int = (parseInt(getComputedStyle(content).left) + 200);
    console.log(int);
    content.style.left = int + 'px';
  }
})