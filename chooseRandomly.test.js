const chooseRandomly = require('./chooseRandomly');


test('chooseRandomly on list with one element returns element', () => {
  expect(chooseRandomly([1])).toBe(1);
});

test('chooseRandomly with random always returning 0', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => 0;
    global.Math = mockMath;

    expect(chooseRandomly([0, 1, 2])).toBe(0);
});

test('chooseRandomly with, random mocked to return 1, to return the last element', () => {
    const mockMath = Object.create(global.Math);
    mockMath.random = () => .999; // essentialy 1
    global.Math = mockMath;

    expect(chooseRandomly([0, 1, 2])).toBe(2);
});
