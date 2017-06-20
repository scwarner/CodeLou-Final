/*$( "button" ).click(function() {
  $( "#search" ).show();
});
*/
var searchButton = document.getElementById('search-button');
var searchBar = document.getElementById('search-bar');


searchButton.addEventListener('click', () => {
    if (searchBar.classList.contains('hideme')) {
    searchBar.classList.remove('hideme');
  } else {
    searchBar.classList.add('hideme');
  }
  if (searchBar.value !== '') {
   alert("Sorry! Search function has not been implemented.");
   searchBar.value = '';
 }
});
