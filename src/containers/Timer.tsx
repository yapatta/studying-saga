import {Dispatch} from 'redux';
import {connect} from 'react-redux';
import Timer from '../components/Timer';
import {reset, start, tick, stop} from '../actions/timer';
import {AppState} from '../reducer/reducers';

export interface StateProps {
  timeLeft: number;
  isCounting: boolean;
}

interface DispatchProps {
  reset: () => void;
  start: () => void;
  stop: () => void;
}

const mapStateToProps = (state: AppState): StateProps => ({
  timeLeft: state.timerReducer.timeLeft,
  isCounting: state.timerReducer.isCounting,
});

const mapDispatchToProps = (dispatch: Dispatch): DispatchProps => ({
  reset: () => {
    dispatch(reset());
  },
  start: () => {
    const intervalID = window.setInterval(() => dispatch(tick()), 1000);

    dispatch(start(intervalID));
  },
  stop: () => {
    dispatch(stop());
  },
});
/*
const useTimer = (limitSec: number): UserTimer => {
  const [timeLeft, setTime] = useState(limitSec);
  const [isCounting, setIsCounting] = useState(false);
  const [timerId, setTimerId]: [number, any] = useState(0);

  const reset = () => {
    if (isCounting) {
      if (timerId !== 0) {
        clearInterval(timerId);
        setTimerId(0);
      }
      setIsCounting(false);
    }
    setTime(limitSec);
  };

  const tick = () => {
    setTime(prevTime => (prevTime === 0 ? limitSec : prevTime - 1));
  };

  const start = () => {
    if (!isCounting) {
      const tmpId = setInterval(tick, 1000);
      setTimerId(tmpId);
      setIsCounting(true);
    } else {
      clearInterval(timerId);
      setTimerId(0);
      setIsCounting(false);
    }
  };

  return {timeLeft, isCounting, reset, start};
};

const AppContainer: FC = () => {
  const LIMIT = 60;
  const resTimer = useTimer(LIMIT);

  return (
    <Timer
      timeLeft={resTimer.timeLeft}
      isCounting={resTimer.isCounting}
      reset={resTimer.reset}
      start={resTimer.start}
    />
  );
};
*/

export default connect(mapStateToProps, mapDispatchToProps)(Timer);
