import * as utils from "./utils";

function setup() {
  const list = [
    {
      name: "kim",
      id: 1
    },
    { name: "kanye", id: 2 }
  ];

  return {
    list
  };
}

it(`should return min and max time`, () => {
  const timeFrame = utils.getTimeFrame(30, 90);
  expect(timeFrame).toHaveProperty("min");
  expect(timeFrame).toHaveProperty("max");
});

it(`should return a refined array of values depending on parameters passed`, () => {
  const expectedNames = ["kim", "kanye"];
  const expectedId = [1, 2];
  const { list } = setup();

  expect(utils.onStripByKey(list)).toEqual(expectedNames);
  expect(utils.onStripByKey(list, "id")).toEqual(expectedId);
});

it(`should format date`, () => {
  const date = "Mon Apr 15 2019 01:06:21 GMT+0100 (West Africa Standard Time)";
  const expected = "2019-04-15T";
  expect(utils.getFormattedDate(date)).toEqual(
    expect.stringContaining(expected)
  );
});

it(`should return a refined array of values containing Ids`, () => {
  const expectedNames = ["kim", "kanye"];
  const { list } = setup();

  expect(utils.getIds(expectedNames, list)).toEqual(list);
});
