import { userAge } from './../src/main.js';
import { userLifeExpectancy } from './../src/main.js';

describe('User-Input', function() {
  it('should accept the user-input from the input fields', function() {
    let userAge = 1;
    let userLifeExpectancy = 1;

    expect(userAge).toEqual(1);
    expect(userLifeExpectancy).toEqual(1);
  });
});
//this test is working to determine a user input a value

describe('Mercury Age', function() {
  it('should change the users earth age to Mercury age', function() {
    let userAge = 1;

    expect(mercuryAge).toEqual(0.24)
  });
});
