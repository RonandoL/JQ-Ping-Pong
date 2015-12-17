$(document).ready(function() {
    var userNumber = parseInt(prompt("Submit a number"));
    var ping = "ping";
    var pong = "pong";
    var listItems = $("#listItems");
    var a = 3;
    var b = 5;

    if (isNaN(userNumber)) {
        $(".head").after("<h3 class='red'><i>Please enter only a number. Please refresh and try again.</i></h3>")
    }

    var theGuts = function() {
      if ((i % a === 0) && (i % b === 0)) {
          listItems.append("<li>" + ping + "-" + pong + "</li>");
      } else if (i % a === 0) {
          listItems.append("<li>" + ping + "</li>")
      } else if (i % b === 0) {
          listItems.append("<li>" + pong + "</li>")
      } else {
          listItems.append("<li>" + i + "</li>");
      }
    }

      if (userNumber < 0) {
        for (var i = 0; i >= userNumber; i--) {
            theGuts()
        }
      } else {
        for (var i = 0; i <= userNumber; i++) {
            theGuts()
        }
      }
});
