var navButton = document.querySelector('.fas fa-caret-down')

navButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document.querySelector('body')
  .classList
  .toggle('extra-cabins');
});

var closeButton =
    document.querySelector('.fas fa-caret-down')

closeButton.addEventListener('click',function() {
  console.log('close it!');
  document.querySelector('body')
  .classList
  .toggle('extra-cabins');
});
