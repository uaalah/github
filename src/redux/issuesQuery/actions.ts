import { ReduxIssueQueryType } from "./types";


export function setWord(word: string) {
  return {
    type: ReduxIssueQueryType.SET_WORD,
    payload: word
  }
}
export function setStatus(status: string) {
  return {
    type: ReduxIssueQueryType.SET_STATUS,
    payload: status
  }
}