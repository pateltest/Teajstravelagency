function readForm() {
  var FirstName,
    LastName,
    city,
    numberofguest,
    daystaying,
    Choiceofmeal,
    Extracomments,
    Totalcostforthetrip;
  var d = new Date();
  TodayDate = d.toLocaleDateString();
  CurrentTime = d.toLocaleTimeString();

  LastName = document.reservation.lname.value;
  FirstName = document.reservation.fname.value;

  if (document.reservation.USCity[0].checked) {
    city = document.reservation.USCity[0].value;
  } else if (document.reservation.USCity[1].checked) {
    city = document.reservation.USCity[1].value;
  } else if (document.reservation.USCity[2].checked) {
    city = document.reservation.USCity[2].value;
  }

  var choicecost = 0;
  if (document.reservation.choice[0].checked) {
    choicecost = document.reservation.choice[0].value;
  } else if (document.reservation.choice[1].checked) {
    choicecost = document.reservation.choice[1].value;
  } else if (document.reservation.choice[2].checked) {
    choicecost = document.reservation.choice[2].value;
  }

  numberofguest = document.getElementById("numberofcustomers").value;
  numberofguest = parseFloat(numberofguest);

  daystaying = document.getElementById("numberofdays").value;
  daystaying = parseFloat(daystaying);

  var wifiandseat = 0;
  if (document.reservation.chkwifi.checked) {
    wifiandseat = wifiandseat + 10;
  }
  if (document.reservation.chkseat.checked) {
    wifiandseat = wifiandseat + 20;
  }

  if (document.reservation.meal[0].checked) {
    Choiceofmeal = document.reservation.meal[0].value;
  } else if (document.reservation.meal[1].checked) {
    Choiceofmeal = document.reservation.meal[1].value;
  } else if (document.reservation.meal[2].checked) {
    Choiceofmeal = document.reservation.meal[2].value;
  }

  var Extracomments = document.reservation.txtarComments.value;

  Totalcostforthetrip =
    city * numberofguest +
    choicecost * daystaying +
    Choiceofmeal * numberofguest +
    wifiandseat * numberofguest;

  document.write(
    "Dear " +
      FirstName +
      " " +
      LastName +
      ", Congratulations you have successfully booked your trip with Teaj's agency! Your trip going to cost you $" +
      Totalcostforthetrip +
      ". And you have special requested: " +
      Extracomments +
      " Good bye! Have a safe trip. Thank you for visiting Teajs's Travels and we look forward hearing back from you about your experience booking through Tejas's Travels."
  );
}
