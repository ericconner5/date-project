import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { userInput } from './business.js';

$(document).ready(function() {
  $("#the-form").submit(function() {
    event.preventDefault();
    var userAge = $('#user-age').val();
    var userLifeExpectancy = $('#user-life-expectancy').val();

    $('#result').append('<li>Your Age: ' + userAge + '</li>');
    $('#result').append('<li>Your Life Expaectancy: ' + userLifeExpectancy + '</li>');
  });
});


// var userAgeLocal = "#user-age".getTimezoneOffest;
