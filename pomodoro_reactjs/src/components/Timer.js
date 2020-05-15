import React, {Component} from 'react';
import "../index.css";

function printZero(num){
    return num > 9 ? num : "0" + num;
}

function secondesConvertion(minutes) {
    const m = printZero(Math.floor((minutes / 60)));
    const s = printZero(Math.floor(minutes % 60));
    return `${m}:${s}`;
  };

class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {  
            time: 0,
        };
      }

      render() {
        const { time } = this.props;
        return (
            <div className="timer">
                <p className={time < 20  ? "red" : "pink"}>{secondesConvertion(time)}</p>
                <p className="timer__description">{this.props.work ? "SESSION DE TRAVAIL !" : "SESSION DE PAUSE !"}</p>
            </div>

        );
      }
}

export default Timer;