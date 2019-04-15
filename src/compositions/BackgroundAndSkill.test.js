import * as types from "./constants/actionTypes";
import actions, { getSkillAndBackground } from "./BackgroundAndSkill.action";

it("should create an action to get backgrounds and skills", () => {
  const payload = "Finish docs";
  const expectedAction = {
    type: types.GET_BACKGROUNDS_SKILLS.default,
    payload
  };
  expect(getSkillAndBackground(payload)).toEqual(expectedAction);
});
