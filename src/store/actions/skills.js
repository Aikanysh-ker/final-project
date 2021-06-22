import { API_URL } from "../constants";
import { endFetch, startFetch } from "./app";
import { SET_SKILLS } from "./types";

export function setSkills(payload) {
  return {
    type: SET_SKILLS,
    payload,
  };
}

export const fetchSkills = () => (dispatch) => {
  dispatch(startFetch());
  fetch(`${API_URL}public-api/skills`)
    .then((r) => r.json())
    .then((data) => {
      dispatch(setSkills(data));
      dispatch(endFetch());
    });
};

export const addSkill = (skill) => (dispatch) => {
  dispatch(startFetch());
  let request = {
    method: "POST",
    body: JSON.stringify(skill),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(`${API_URL}public-api/skill/create`, request)
    .then((r) => r.json())
    .then((data) => {
      dispatch(addSkill(data));
      dispatch(endFetch());
    });
};

export const deleteSkill = (id) => (dispatch) => {
  dispatch(startFetch());
  let request = {
    method: "DELETE",
  };
  fetch(`${API_URL}api/admin/skill/${id}`, request)
    .then((r) => r.json())
    .then((data) => {
      dispatch(deleteSkill(data));
      dispatch(endFetch());
    });
};
