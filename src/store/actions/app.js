import { FETCH_START, FETCH_END } from "./types";

export function startFetch() {
  return {
    type: FETCH_START,
  };
}
export function endFetch() {
  return {
    type: FETCH_END,
  };
}
