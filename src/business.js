
export default class PlanetaryAgeCalculator {
  constructor(userAge, userLifeExpectancy) {
    this.userAge = userAge;
    this.userLifeExpectancy = userLifeExpectancy;
  }

  mercuryAge() {
    return this.userAge * 0.24;
  }

  venusAge() {
    return this.userAge * 0.62;
  }

  marsAge() {
    return this.userAge * 1.88;
  }

  jupiterAge() {
    return this.userAge * 11.86;
  }


}
