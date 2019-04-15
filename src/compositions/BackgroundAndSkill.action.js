import axios from "axios";

import { handleErrors } from "../helpers/utils";
import { toastError } from "../helpers/toasters";
import { GET_BACKGROUNDS_SKILLS } from "./constants/actionTypes";

export const getSkillAndBackground = payload => ({
  type: GET_BACKGROUNDS_SKILLS.default,
  payload
});

const skillAndBackground = cb => dispatch => {
  const url_skills = `${process.env.REACT_APP_BASE}/lists/skills`;
  const url_backgrounds = `${process.env.REACT_APP_BASE}/lists/backgrounds`;

  const backgrounds = axios({
    url: url_backgrounds,
    method: "GET",
    params: { access_token: process.env.REACT_APP_ACCESS_TOKEN }
  });

  const skills = axios({
    url: url_skills,
    method: "GET",
    params: { access_token: process.env.REACT_APP_ACCESS_TOKEN }
  });

  const all = [backgrounds, skills];
  const payload = Promise.all(all);

  dispatch(getSkillAndBackground(payload))
    .then(() => cb && cb())
    .catch(err => {
      handleErrors(err, toastError);
    });
};

export default skillAndBackground;
