import * as types from "./constants/actionTypes";
import {
  getOpportunityAction,
  updateOpportunityAction
} from "./Opportunity.actions";

it("should create an action to get opportunity", () => {
  const payload = "Finish docs";
  const expectedAction = {
    type: types.GET_OPPORTUNITY.default,
    payload
  };
  expect(getOpportunityAction(payload)).toEqual(expectedAction);
});

it("should create an action to update opportunity", () => {
  const payload = "Finish docs";
  const expectedAction = {
    type: types.UPDATE_OPPORTUNITY.default,
    payload
  };
  expect(updateOpportunityAction(payload)).toEqual(expectedAction);
});
