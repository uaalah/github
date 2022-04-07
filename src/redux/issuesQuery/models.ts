import { ReduxIssueQueryType } from "./types";

export interface IReduxIssueQueryState {
  word: string;
  status: "open" | "closed"
}

interface IRWordAction {
  type: ReduxIssueQueryType.SET_WORD;
  payload: string
}
interface IRStateAction {
  type: ReduxIssueQueryType.SET_STATUS;
  payload: "open" | "closed"
}

export type ReduxIssueQueryActions = 
  | IRWordAction
  | IRStateAction
