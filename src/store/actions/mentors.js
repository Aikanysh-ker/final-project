import { API_URL } from "../constants";
import { endFetch, startFetch } from "./app";
import { SET_MENTORS } from "./types";

export function setMentors(payload) {
  return {
    type: SET_MENTORS,
    payload,
  };
}

export const fetchMentors = () => (dispatch) => {
  dispatch(startFetch());
  fetch(`${API_URL}public-api/RUS/mentors`)
    .then((r) => r.json())
    .then((data) => {
      dispatch(setMentors(data));
      dispatch(endFetch());
    });
};

export const addMentor = (mentor) => (dispatch) => {
  dispatch(startFetch());
  let request = {
    method: "POST",
    body: JSON.stringify(mentor),
    headers: {
      "Content-Type": "application/json",
    },
  };
  fetch(`${API_URL}public-api/mentor/create`, request)
    .then((r) => r.json())
    .then((data) => {
      dispatch(addMentor(data));
      dispatch(endFetch());
    });
};

export const deleteMentor = (id) => (dispatch) => {
  dispatch(startFetch());
  let request = {
    method: "DELETE",
  };
  fetch(`${API_URL}api/admin/mentor/${id}`, request)
    .then((r) => r.json())
    .then((data) => {
      dispatch(deleteMentor(data));
      dispatch(endFetch());
    });
};
