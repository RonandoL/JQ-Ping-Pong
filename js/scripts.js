$(document).ready(function() {
    var limit = parseInt(prompt("pick a number"));
    var list = [];
    var ping = "ping"
    var pong = "pong"
    var list = $("#listItems")
    var a = 3;
    var b = 5;

    if (isNaN(limit)) {
      alert("Please enter in only a Fixed Number");
    }

    for (var i = 0; i<= limit; i++) {
        if ((i % a == 0) && (i % b == 0)) {
            list.append("<li>" + ping + "-" + pong + "</li>");
        } else if (i % a == 0) {
            list.append("<li>" + ping + "</li>")
        } else if (i % b == 0) {
            list.append("<li>" + pong + "</li>")
        } else {
          list.append("<li>" + i + "</li>")
        }
    }

});
