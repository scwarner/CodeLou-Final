
var searchButton = document.getElementById('search-button');
var searchBar = document.getElementById('search-bar');


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
    $('.ticket').addClass('hideme');
    $('tbody tr:nth-child(even)').css('background-color', '#fff');
    $('tbody tr:nth-child(even)').css('color', '#333');
});

//When 'Local Shows Only' button is clicked, filters table to show rows with local concerts
$('.local-shows').on('click', function () {
  $('.away').addClass('hideme');
  $('tbody tr:nth-child(even)').css('background-color', '#fff');
  $('tbody tr:nth-child(even)').css('color', '#333');
});

//When "All Shows" button is clicked, all rows are revealed
$('.all-shows').on('click', function () {
  $('.ticket').removeClass('hideme');
  $('.away').removeClass('hideme');
  $('tbody tr:nth-child(even)').css('background-color', 'rgba(206,98,66,1)');
  $('tbody tr:nth-child(even)').css('color', '#fff');
});
