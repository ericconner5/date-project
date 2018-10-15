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
    $('#result').append('<li> Your Remaining Years to Live on Earth: ' + (planetaryAgeCalculator.earthLifeExpectancy()) + '</li>');
    $('#result').append('<li> Your Mercury Age: ' + planetaryAgeCalculator.mercuryYears() + '</li>');
    $('#result').append('<li> Your Remaining Years to Live on Mercury: ' + (planetaryAgeCalculator.mercuryLifeExpectancy() - planetaryAgeCalculator.mercuryYears()) + '</li>');

    $('#result').append('<li> Your Venus Age: ' + planetaryAgeCalculator.venusYears() + '</li>');
    $('#result').append('<li> Your Remaining Years to Live on Venus: ' + (planetaryAgeCalculator.venusLifeExpectancy() - planetaryAgeCalculator.venusYears()) + '</li>');

    $('#result').append('<li> Your Mars Age: ' + planetaryAgeCalculator.marsYears() + '</li>');
    $('#result').append('<li> Your Remaining Years to Live on Mars: ' + (planetaryAgeCalculator.marsLifeExpectancy() - planetaryAgeCalculator.marsYears()) + '</li>');

    $('#result').append('<li> Your Jupiter Age: ' + planetaryAgeCalculator.jupiterYears() + '</li>');
    $('#result').append('<li> Your Remaining Years to Live on Jupiter: ' + (planetaryAgeCalculator.jupiterLifeExpectancy() - planetaryAgeCalculator.jupiterYears()) + '</li>');
  });
});


//below can be used to get local age if needed....
// var userAgeLocal = "#user-age".getTimezoneOffest;


// below can be modified somewhat to get other planet ages
// $('#result').append('<li>Your Earth Age ' + 'userAge.getFullYear()</li>');
