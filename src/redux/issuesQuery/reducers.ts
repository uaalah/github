import { IReduxIssueQueryState, ReduxIssueQueryActions } from "./models";
import defaultState from "./state";
import { ReduxIssueQueryType } from "./types";


export default function issueQueryReducer(state: IReduxIssueQueryState = defaultState, action: ReduxIssueQueryActions) {
  switch (action.type) {
    case ReduxIssueQueryType.SET_WORD:
      return { ...state, word: action.payload }
    case ReduxIssueQueryType.SET_STATUS:
      return { ...state, status: action.payload }
    default:
      return state
  }
}