import { combineReducers, compose, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { loadState } from '../services/localStorage';
import { IReduxIssueQueryState } from './issuesQuery/models';
import issueQueryReducer from './issuesQuery/reducers';


declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const RootReducer = combineReducers({
  issueQuery: issueQueryReducer,
});

export type RootState = ReturnType<typeof RootReducer>

export interface IState {
  issueQuery: IReduxIssueQueryState
}

const initialState: IState = loadState();

const githubStore = createStore(
  RootReducer,
  initialState,
  composeWithDevTools()
)

export default githubStore;