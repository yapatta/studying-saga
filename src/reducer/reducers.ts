import {combineReducers} from 'redux';
import timerReducer, {TimerState, timerInitialState} from './timerReducer';
import gitHubReducer, {GitHubState, gitHubInitialState} from './gitHubReducer';

export interface AppState {
  timerReducer: TimerState;
  gitHubReducer: GitHubState;
}

export const initialState: AppState = {
  timerReducer: {...timerInitialState},
  gitHubReducer: {...gitHubInitialState},
};

const reducers = combineReducers({timerReducer, gitHubReducer});

export default reducers;
