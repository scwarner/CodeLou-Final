
var searchButton = document.getElementById('search-button');
var searchBar = document.getElementById('search-bar');
var joinCheckBox = document.getElementById('join');
var joinField = document.getElementById('join-field');
var giveCheckBox = document.getElementById('give');
var giveField = document.getElementById('donation-field');
var hireCheckBox = document.getElementById('hire');
var hireField = document.getElementById('hire-field')

//Reveals search bar when search button is clicked
searchButton.addEventListener('click', () => {
    if (searchBar.classList.contains('hideme')) {
    searchBar.classList.remove('hideme');
  } else {
    searchBar.classList.add('hideme');
  }
  //If user enters text in search bar, reveals modal window with message
  if (searchBar.value !== '') {
   alert("Sorry! Search function has not been implemented.");
   searchBar.value = '';
 }
});

//Reveals form questions regarding joining LMO when clicked
joinCheckBox.addEventListener('click', () => {
  joinField.style.display = 'block';
});

//Reveals donation information when user clicks checkbox
giveCheckBox.addEventListener('click', () => {
  giveField.style.display = 'block';
});

hireCheckBox.addEventListener('click', () => {
  hireField.style.display = 'block';
});
