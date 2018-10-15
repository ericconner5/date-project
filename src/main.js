import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import PlanetaryAgeCalculator from './business.js';

// export { PlanetaryAgeCalculator };



let userAge = [];
let userLifeExpectancy = [];

$(document).ready(function() {
  $("#the-form").submit(function() {
    event.preventDefault();
    userAge = $('#user-age').val();
    userLifeExpectancy = $('#user-life-expectancy').val();
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(userAge, userLifeExpectancy);





    $('#result').empty();

    $('#result').append('<li>Your Earth Age: ' + userAge + '</li>');
    $('#result').append('<li>Your Earthly Life Expectancy: ' + userLifeExpectancy + '</li>');
    $('#result').append('<li> Your Mercury Age: ' + planetaryAgeCalculator.mercuryYears() + '</li>');

  });
});


//below can be used to get local age if needed....
// var userAgeLocal = "#user-age".getTimezoneOffest;


// below can be modified somewhat to get other planet ages
// $('#result').append('<li>Your Earth Age ' + 'userAge.getFullYear()</li>');
