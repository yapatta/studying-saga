import {combineReducers} from 'redux';
import timerReducer, {TimerState, timerInitialState} from './timerReducer';
import gitHubReducer, {GithubState, gitHubInitialState} from './gitHubReducer';

export interface AppState {
  timerReducer: TimerState;
  githubReducer: GithubState;
}

export const initialState: AppState = {
  timerReducer: {...timerInitialState},
  githubReducer: {...gitHubInitialState},
};

const reducers = combineReducers({timerReducer, gitHubReducer});

export default reducers;
