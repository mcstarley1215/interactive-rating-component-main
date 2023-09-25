let submitButton = document.querySelector('.js-submit-button');
let rateBox = document.querySelector('.js-box-1');
let thankYou = document.querySelector('.js-box-2');
let span = document.querySelector('.rating'); 
let rating = ''

document.querySelectorAll('.js-selected-rate')
  .forEach((selectRate) => {
    selectRate.addEventListener('click', () => {
      rating = selectRate.innerHTML;
      selectRate.classList.add('selected');
  });
  submitButton.addEventListener('click', () => {
    rateBox.style.display = 'none';
    thankYou.style.display = 'block';
    span.innerHTML = rating;
  });
});

