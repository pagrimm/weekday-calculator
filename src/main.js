import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from "jquery";
import { checkDate } from './../src/weekday-calculator.js';
import { returnDayOfWeek } from './../src/weekday-calculator.js';
import { getNumberOfDays } from './../src/weekday-calculator.js';

$(document).ready(function() {
  $("#dateForm").submit(function(event) {
    event.preventDefault();
    const day = parseInt($('#day-input').val());
    const month = $('#month').val();
    const year = parseInt($('#year-input').val());
    if (checkDate(year, month, day)) {
      // let date = new Date(year, month, day);
      const weekday = returnDayOfWeek(getNumberOfDays(year, month, day), year);
      $("#output-text").text(`The day of the week for that date is: ${weekday}`);
    } else {
      $("#output-text").text("Please enter a valid date!");
    }
  });
});