var openButton = document.querySelector('.open-icon')

openButton.addEventListener('click', function() {
  console.log('clicky!!!');
  document.querySelector('body')
  .classList
  .toggle('extra-cabins');
});

var closeButton = document.querySelector('.close-icon')

closeButton.addEventListener('click', function() {
  console.log('close it!');
  document.querySelector('body')
  .classList
  .toggle('extra-cabins');
});
