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

//Function reveals or hides a certain field on the contact form depending on whether or not a checkbox is clicked
function changeFieldDisplay (checkboxName, field) {
  if (checkboxName.checked) {
    field.classList.remove('hideme');
  } else {
    field.classList.add('hideme');
  }
  return changeFieldDisplay;
}

//Reveals form questions regarding joining LMO when clicked
joinCheckBox.addEventListener('change', function () {
  changeFieldDisplay(joinCheckBox, joinField);
});

//Reveals donation information when user clicks checkbox
giveCheckBox.addEventListener('change', function () {
  changeFieldDisplay(giveCheckBox,giveField);
});

//Reveals text area for hiring information when user clicks checkbox
hireCheckBox.addEventListener('change', function () {
  changeFieldDisplay(hireCheckBox, hireField);
});

//Removes text entered in inputs and textarea when button is clicked
submitButton.addEventListener('click', function (e) {
  e.preventDefault();
      nameInput.value = '';
      emailInput.value = '';
      textField.value = '';
});
