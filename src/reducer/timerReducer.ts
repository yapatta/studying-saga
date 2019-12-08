import {Reducer} from 'redux';
import {TimerAction, TimerActionType} from '../actions/timer';

export interface TimerState {
  timeLeft: number;
  isCounting: boolean;
  timerId?: number;
}

const LIMIT = 60;

export const timerInitialState: TimerState = {
  timeLeft: LIMIT,
  isCounting: false,
  timerId: 0,
};

const timerReducer: Reducer<TimerState, TimerAction> = (
  state: TimerState = timerInitialState,
  action: TimerAction
): TimerState => {
  switch (action.type) {
    case TimerActionType.RESET:
      if (state.isCounting) {
        if (state.timerId !== 0) {
          window.clearInterval(state.timerId);
        }
      }

      return {
        ...state,
        timeLeft: LIMIT,
        isCounting: false,
        timerId: 0,
      };

    case TimerActionType.START:
      return {
        ...state,
        isCounting: true,
        timerId: action.intervalID,
      };
    case TimerActionType.TICK:
      return {
        ...state,
        timeLeft: state.timeLeft === 0 ? LIMIT : state.timeLeft - 1,
      };
    case TimerActionType.STOP:
      if (state.isCounting) {
        if (state.timerId !== 0) {
          window.clearInterval(state.timerId);
        }
      }

      return {
        ...state,
        isCounting: false,
        timerId: 0,
      };
    default: {
      const _: never = action.type;

      return state;
    }
  }
};

export default timerReducer;
