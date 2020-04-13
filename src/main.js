import { userHandler } from './simon';
import './styles.css';

$("document").ready(function () {
  $("#formOne").submit(function (event) {
    event.preventDefault();
    var firstTry = userHandler();
    console.log(firstTry);
  });

  $("#guessButton").click(function () {
    var uInput = $("#formText").val();
    var uHandle = userHandler(uInput);

    if (uHandle === 'w') {
      $("#output").text("You Win");

    } else if (lose === 'f') {
      $("#output").text("you lose");

    } else {
      $("#output").text(uHandle);
    }
  });
});
