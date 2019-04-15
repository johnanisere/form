import axios from "axios";

import { handleErrors } from "../helpers/utils";
import { toastError, toastSuccess } from "../helpers/toasters";
import { GET_OPPORTUNITY, UPDATE_OPPORTUNITY } from "./constants/actionTypes";

export const getOpportunityAction = payload => ({
  type: GET_OPPORTUNITY.default,
  payload
});

export const updateOpportunityAction = payload => ({
  type: UPDATE_OPPORTUNITY.default,
  payload
});
const id = 6125;
const url = `${process.env.REACT_APP_BASE}/opportunities/${id}`;

const getOpportunity = () => dispatch => {
  const payload = axios({
    url,
    method: "GET",
    params: { access_token: process.env.REACT_APP_ACCESS_TOKEN }
  });
  dispatch(getOpportunityAction(payload)).catch(err => {
    handleErrors(err, toastError);
  });
};

export const updateOpportunity = data => dispatch => {
  const payload = axios({
    url,
    data,
    method: "PATCH",
    params: { access_token: process.env.REACT_APP_ACCESS_TOKEN }
  });
  dispatch(updateOpportunityAction(payload))
    .then(() => {
      toastSuccess("Succesfully Updated");
    })
    .catch(err => {
      handleErrors(err, toastError);
    });
};

export default getOpportunity;
