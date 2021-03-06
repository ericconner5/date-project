
export default class PlanetaryAgeCalculator {
  constructor(userAge, userLifeExpectancy) {
    this.userAge = userAge;
    this.userLifeExpectancy = userLifeExpectancy;
  }

  earthYears() {
    return this.userAge;
  }

  earthLifeExpectancy() {
    if (this.userAge < this.userLifeExpectancy) {
      return this.userLifeExpectancy - this.userAge;
    } else {
      return 'You are ' + (this.userAge - this.userLifeExpectancy) + ' years over your life expectancy!';
    }


  }

  mercuryYears() {
    return this.userAge * 0.24;
  }

  mercuryLifeExpectancy() {
    return this.userLifeExpectancy * 0.24;
  }

  venusYears() {
    return this.userAge * 0.62;
  }

  venusLifeExpectancy() {
    return this.userLifeExpectancy * 0.62;
  }

  marsYears() {
    return this.userAge * 1.88;
  }

  marsLifeExpectancy() {
    return this.userLifeExpectancy * 1.88;
  }

  jupiterYears() {
    return this.userAge * 11.86;
  }

  jupiterLifeExpectancy() {
    return this.userLifeExpectancy * 11.86;
  }


  // earthOverLifeExpectancy() {
  //   if (this.userAge < this.userLifeExpectancy) {
  //     return this.userLifeExpectancy - this.userAge;
  //   } else {
  //     return this.userAge - this.userLifeExpectancy;
  //   }
  // }

}
