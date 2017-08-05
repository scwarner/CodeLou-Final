var nameInput = document.getElementById('name');
var emailInput = document.getElementById('email')
var joinCheckBox = document.getElementById('join');
var joinField = document.getElementById('join-field');
var giveCheckBox = document.getElementById('give');
var giveField = document.getElementById('donation-field');
var hireCheckBox = document.getElementById('hire');
var hireField = document.getElementById('hire-field');
var textField = document.getElementById('text-field');
var submitButton = document.getElementById('submit-button');

/************
CONTACT PAGE
************/

//Reveals form questions regarding joining LMO when clicked
joinCheckBox.addEventListener('change', function () {
  if (joinCheckBox.checked) {
  joinField.classList.remove('hideme');
} else {
  joinField.classList.add('hideme');
}

});

//Reveals donation information when user clicks checkbox
giveCheckBox.addEventListener('change', function () {
  if (giveCheckBox.checked) {
  giveField.classList.remove('hideme');
} else {
  giveField.classList.add('hideme');
}

});

//Reveals text area for hiring information when user clicks checkbox
hireCheckBox.addEventListener('change', function () {
  if (hireCheckBox.checked) {
  hireField.classList.remove('hideme');
} else {
  hireField.classList.add('hideme');
}

});

//Removes text entered in inputs and textarea when button is clicked
submitButton.addEventListener('click', function (e) {
  e.preventDefault();
      nameInput.value = '';
      emailInput.value = '';
      textField.value = '';
});
