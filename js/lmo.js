
var searchButton = document.getElementById('search-button');
var searchBar = document.getElementById('search-bar');
var joinCheckBox = document.getElementById('join');
var joinField = document.getElementById('join-field');
var giveCheckBox = document.getElementById('give');
var giveField = document.getElementById('donation-field');
var hireCheckBox = document.getElementById('hire');
var hireField = document.getElementById('hire-field')

/***********
ALL PAGES
***********/

//Reveals search bar when search button is clicked
searchButton.addEventListener('click', function () {
    if (searchBar.classList.contains('hideme')) {
    searchBar.classList.remove('hideme');
  } else {
    searchBar.classList.add('hideme');
  }
  //If user enters text in search bar and then clicks search button, reveals alert with message
  if (searchBar.value !== '') {
   alert("Sorry! Search function has not been implemented.");
   searchBar.value = '';
 }
});

/************
CONCERTS PAGE
************/

//When 'Free Shows Only' button is clicked, filters table to show rows with free concerts
$('.free-shows').on('click', function () {
    $('.ticket').toggleClass('hideme');
    $('tbody tr:nth-child(even)').toggleClass('clicked');
    //$('tbody tr:nth-child(even)').css('background-color', 'white');
    //$('tbody tr:nth-child(even)').css('color', '#000');
})

//When 'Local Shows Only' button is clicked, filters table to show rows with local concerts
$('.local-shows').on('click', function () {
  $('.away').toggleClass('hideme');
})


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
