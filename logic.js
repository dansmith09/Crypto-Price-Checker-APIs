// Defines dateInput element
var dateInput = document.getElementById('dateInput');
var confirmButton = document.getElementById('confirmButton');
var cryptoOptionsSelect = document.getElementById('cryptoOptions');
var outputH3 = document.getElementById('outputH3');
var userSelectedDate = '';
var userSelectedCrypto = '';


function handleconfirmButton() {
    userSelectedDate = dateInput.value;
    userSelectedCrypto = cryptoOptionsSelect.value;

    var requestURL = `https://api.exchangerate.host/convert?source=crypto&from=${userSelectedCrypto}&to=USD&places=2&date=${userSelectedDate}`;

    fetch(requestURL)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
      console.log(data);
      var priceOfCrypto = data.result ;
      if (priceOfCrypto == 0) {
        outputH3.textContent = "Sorry. There is a bit of an issue... either your selected currency is $0 (we hope not) or there is a problem with our system. Please try again later.";
      } else {
        outputH3.textContent = `On ${userSelectedDate} the price of ${userSelectedCrypto} was $` + priceOfCrypto + '!';
      }
    });

}

confirmButton.addEventListener('click', handleconfirmButton);

// NOTES
// Use moment to make the dates look nicer