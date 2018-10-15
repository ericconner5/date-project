import PlanetaryAgeCalculator from '../src/business.js';



describe('PlanetaryAgeCalculator', function() {
  it('should instantiate PlanetaryAgeCalculator object', function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 2);

    expect(planetaryAgeCalculator instanceof PlanetaryAgeCalculator).toBe(true);
  });
//this test is working to determine PlanetaryAgeCalculator is an object

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

//tests to convert earth age to other planets age
  it('should change the users earth age to Mercury age', function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 2);
    expect(planetaryAgeCalculator.mercuryYears()).toEqual(0.24)
  });

  it('should change the users earth age to Venus age', function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 2);
    expect(planetaryAgeCalculator.venusYears()).toEqual(0.62)
  });

  it('should change the users earth age to Mars age', function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 2);
    expect(planetaryAgeCalculator.marsYears()).toEqual(1.88)
  });

  it('should change the users earth age to Jupiter age', function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 2);
    expect(planetaryAgeCalculator.jupiterYears()).toEqual(11.86)
  });

//life expectancy from earth to other planets tests
  it('should change the users earth life expectancy to Mercury years remaining', function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 2);
    expect(planetaryAgeCalculator.mercuryLifeExpectancy()).toEqual(0.48)
  });

  it('should change the users earth life expectancy to Venus years remaining', function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 2);
    expect(planetaryAgeCalculator.venusLifeExpectancy()).toEqual(1.24)
  });

  it('should change the users earth life expectancy to Mars years remaining', function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 2);
    expect(planetaryAgeCalculator.marsLifeExpectancy()).toEqual(3.76)
  });

  it('should change the users earth life expectancy to Jupiter years remaining', function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 2);
    expect(planetaryAgeCalculator.jupiterLifeExpectancy()).toEqual(23.72)
  });

  it('should return the difference of user age and their expected life span for user age not greater than average life span', function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(1, 4);
    expect(planetaryAgeCalculator.earthLifeExpectancy()).toBe(3)
  })

  it('should return the difference of expected life span and their user age for user age greater than average life span', function() {
    const planetaryAgeCalculator = new PlanetaryAgeCalculator(4, 1);
    expect(planetaryAgeCalculator.earthLifeExpectancy()).toEqual(3)
  })






});
