import { IState } from "../redux";
import { IReduxIssueQueryState } from "../redux/issuesQuery/models";
import defaultState from "../redux/issuesQuery/state";

// prepare to grow
type ISaveStateProps =
  | IReduxIssueQueryState

export function saveState(objKey: string, objValue: ISaveStateProps) {
let newStatus = loadState();
newStatus = {
  ...newStatus,
  [objKey]: objValue
}
window.localStorage.setItem('gitApp', JSON.stringify(newStatus))
}

export function loadState() {
  if (window && window.localStorage) {
    const storageStatus = window.localStorage.getItem('gitApp');
    if (storageStatus) {
      console.log('storageStatus \n', JSON.parse(storageStatus))
      return JSON.parse(storageStatus);
    }
  }
  const reduxDefaultState: IState = {
    issueQuery: defaultState
  }
  console.log('gitApp default', reduxDefaultState)
  return reduxDefaultState
}