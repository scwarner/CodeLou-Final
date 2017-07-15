var joinCheckBox = document.getElementById('join');
var joinField = document.getElementById('join-field');
var giveCheckBox = document.getElementById('give');
var giveField = document.getElementById('donation-field');
var hireCheckBox = document.getElementById('hire');
var hireField = document.getElementById('hire-field')

/************
CONTACT PAGE
************/

//Reveals form questions regarding joining LMO when clicked
joinCheckBox.addEventListener('click', function () {
  joinField.style.display = 'block';
});

//Reveals donation information when user clicks checkbox
giveCheckBox.addEventListener('click', function () {
  giveField.style.display = 'block';
});

hireCheckBox.addEventListener('click', function () {
  hireField.style.display = 'block';
});
