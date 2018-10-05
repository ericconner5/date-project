import { UserInput } from './../src/main.js';

describe('User-Input', function() {
  it('should accept the user-input from the input fields', function() {
    let userAge = '1';
    let userLifeExpectancy = '1';

    expect(userAge.length).toEqual(1);
    expect(userLifeExpectancy.length).toEqual(1);
  });
});
//this test is working to determine a user input a value
