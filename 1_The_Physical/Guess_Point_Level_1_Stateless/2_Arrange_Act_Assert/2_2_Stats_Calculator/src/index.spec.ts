import { StatsCalculator } from "./index"


describe('stats calculator', () => {
  it("should detect that 'StatsCalculator' is defined", () => {
    // arrange, act, assert
    expect(StatsCalculator).toBeDefined()
  })

  it("should find that '-8' is the smallest integers from the sequence '[2, 4, 21, -8, 53, 40]'", () => {
    // arrange 
    const sequence = [2, 4, 21, -8, 53, 40];
    const statsCalculator = new StatsCalculator();

    // act 
    const result = statsCalculator.minimum(sequence);
    
    // assert 
    expect(result).toBe(-8);
  });

  it("should find that '53' is the largest value in the '[2, 4, 21, -8, 53, 40]' sequence", () => {
    // arrange 
    const sequence = [2, 4, 21, -8, 53, 40];
    const statsCalculator = new StatsCalculator()

    // act 
    const result = statsCalculator.maximum(sequence);

    // assert
    expect(result).toBe(53)
  });

  it("should return '6' after counting the numbers in the sequence '[1, 2, 3, 4, 5, 6]'", () => {
    // arrange 
    const sequence = [1, 2, 3, 4, 5, 6]; 
    const statsCalculator = new StatsCalculator(); 

    // act 
    const result = statsCalculator.count(sequence); 

    // assert
    expect(result).toBe(6)
  });

  it("should return the average '18.666666666667' rounded to 12 decimal places given the sequence '[2, 4, 21, -8, 53, 40]'", () => {
    // arrange 
    const sequence = [2, 4, 21, -8, 53, 40];
    const statsCalculator = new StatsCalculator(); 

    // act 
    const result = statsCalculator.average(sequence);

    // assert 
    expect(result).toBe(18.666666666667);
  });

})