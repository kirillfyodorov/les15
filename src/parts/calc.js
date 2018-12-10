'use strict';
function calc(){
  let persons = document.querySelectorAll('.counter-block-input')[0],
    restDays = document.querySelectorAll('.counter-block-input')[1],
    place = document.getElementById('select'),
    totalValue = document.getElementById('total'),
    personsSum = 0,
    daysSum = 0,
    total = 0;
  totalValue.innerHTML = 0;

  persons.addEventListener('change', function () {
    personsSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * place.options[place.selectedIndex].value;
    }
  });

  restDays.addEventListener('change', function () {
    daysSum = +this.value;
    total = (daysSum + personsSum) * 4000;

    if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * place.options[place.selectedIndex].value;
    }
  });

  place.addEventListener('change', function () {
    if (restDays.value == '' || persons.value == '' || restDays.value == 0 || persons.value == 0) {
      totalValue.innerHTML = 0;
    } else {
      let a = total;
      totalValue.innerHTML = a * this.options[this.selectedIndex].value;
    }
  });

  persons.addEventListener('keypress', (e) => {
    if (!/\d/.test(e.key)) {
      e.preventDefault();
    }
  });

  restDays.addEventListener('keypress', (e) => {
    if (!/\d/.test(e.key)) {
      e.preventDefault();
    }
  });


}

module.exports = calc;