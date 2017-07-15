var subscribeBar =document.getElementById('subscribe-email');
var subscribeButton = document.getElementById('subscribe-button');

/************
HOME PAGE
************/
//Removes text entered in email input when button is clicked
subscribeButton.addEventListener('click', function () {
  if (subscribeBar.value !== '') {
    subscribeBar.value = '';
  }
});
