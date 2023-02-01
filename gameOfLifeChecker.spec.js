import { gameOfLifeChecker } from "./gameOfLife";

let testCases = [
    {
      cell: 0,
      neighbors: [0, 1, 0] // becomes dead - was alive
    },
    {
      cell: 1,
      neighbors: [1, 1, 1] // becomes alive - was dead
    },
    {
      cell: 0,
      neighbors: [0, 0, 1] //becomes dead - was alive
    },
    {
      cell: 0,
      neighbors: [1, 0, 0] //stays dead
    },
    {
      cell: 1,
      neighbors: [0, 1, 1] //cell stays alive
    }
  ];

  var first = testCases[0].cell;
  var second = testCases[1].cell;
  var third = testCases[2].cell;
  var fourth = testCases[3].cell;
  var fifth = testCases[4].cell;

 describe("gameOfLifeChecker", () => {
  it("should return 0, because its neighbours make it dead", () => {
  expect(gameOfLifeChecker(first)).toBe(0);
  });

  it("should return 1, because its neighbours revive it", () => {
  expect(gameOfLifeChecker(second)).toBe(1);
  });

  it("should return 0, because its neighbours make it dead", () => {
  expect(gameOfLifeChecker(third)).toBe(0);
  });
  
  it("should return 0, because it stays dead", () => {
  expect(gameOfLifeChecker(fourth)).toBe(0);
  });
  
  it("should return 1, because its stays alive", () => {
  expect(gameOfLifeChecker(fifth)).toBe(1);
  });
  
  });