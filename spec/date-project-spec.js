import PlanetaryAgeCalculator from '../src/business.js';



describe('PlanetaryAgeCalculator', function() {
  it('should instantiate PlanetaryAgeCalculator object', function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 1);

    expect(planetaryAgeCalculator instanceof PlanetaryAgeCalculator).toBe(true);
  });
//this test is working to determine a user input a value

  it('should set userAge to be 1',
  function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 2);
    expect(planetaryAgeCalculator.userAge).toBe(1);
  })

  it('should set userLifeExpectancy to be 2',
  function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 2);
    expect(planetaryAgeCalculator.userLifeExpectancy).toBe(2);
  })


  it('should change the users earth age to Mercury age', function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 2);
    expect(planetaryAgeCalculator.mercuryAge()).toEqual(0.24)
  });

  it('should change the users earth age to Venus age', function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 2);
    expect(planetaryAgeCalculator.venusAge()).toEqual(0.62)
  });

  it('should change the users earth age to Mars age', function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 2);
    expect(planetaryAgeCalculator.marsAge()).toEqual(1.88)
  });

  it('should change the users earth age to Jupiter age', function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 2);
    expect(planetaryAgeCalculator.jupiterAge()).toEqual(11.86)
  });







});
