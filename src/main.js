import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { convertDay } from './weekday.js';

$(document).ready(function() {
$("#weekdayForm").submit(function(){
  event.preventDefault();
  var date = $("input[type='date']").val();



  var dayResult = convertDay(date);

  $(".answer").show();
  $("#weekdayAnswer").text(dayResult);
});
});
