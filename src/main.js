import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
export { userInput };
import { mercuryAge } from './business.js';
export { newUserAge };
export { userLifeExpectancy };

let userAge = [];
let newUserAge = [];
let userLifeExpectancy = [];
let userInput = [];

$(document).ready(function() {
  $("#the-form").submit(function() {
    event.preventDefault();
    userAge = $('#user-age').val();
    userLifeExpectancy = $('#user-life-expectancy').val();
    let newUserAge = this.userAge;
    // class userInput {
    //   constructor(userAge, userLifeExpectancy) {
    //     this.userAge = userAge;
    //     this.userLifeExpectancy = userLifeExpectancy;
    //   }
    // }
    // const userAge = this.userAge;

    $('#result').empty();

    $('#result').append('<li>Your Earth Age: ' + userAge + '</li>');
    $('#result').append('<li>Your Earthly Life Expectancy: ' + userLifeExpectancy + '</li>');
    $('#result').append('<li> Your Mercury Age: ' + mercuryAge + '</li>');

  });
});


//below can be used to get local age if needed....
// var userAgeLocal = "#user-age".getTimezoneOffest;


// below can be modified somewhat to get other planet ages
// $('#result').append('<li>Your Earth Age ' + 'userAge.getFullYear()</li>');
