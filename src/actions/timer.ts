export enum TimerActionType {
  RESET = 'TIMER/RESET',
  START = 'TIMER/START',
  STOP = 'TIMER/STOP',
  TICK = 'TIMER/TICK',
}

export interface TimerAction {
  type: TimerActionType;
  intervalID?: number;
}

export const reset = (): TimerAction => {
  return {type: TimerActionType.RESET};
};

export const start = (intervalId: number): TimerAction => {
  return {
    type: TimerActionType.START,
    intervalID: intervalId,
  };
};

export const stop = (): TimerAction => {
  return {type: TimerActionType.STOP};
};

export const tick = (): TimerAction => {
  return {type: TimerActionType.TICK};
};
