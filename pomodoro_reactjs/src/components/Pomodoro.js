import React, { Component } from 'react';
import Timer from './Timer';
import OptionButton from './OptionButton';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import "../index.css";

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {  
        time:   0,
        workTime: 1200,
        breakTime: 500,
        chronoStart : false,
        work : true,
        isOpen: false,
    };
    
  }

  componentDidMount() {
    this.setDefaultTime();
  }

  setDefaultTime = () =>{
    this.state.work ? this.setState({time: this.state.workTime }) : this.setState({time: this.state.breakTime });
  }

  
 decrementTime = (s) => {
  const newTime = this.state.time - 1;
  if (newTime >= 0) {
    this.setState({
      time: newTime
    });
  } else {
    clearInterval(this.timer);
    this.setState({ work: !this.state.work, isOpen: true });
    this.setDefaultTime();
  }
 }

 playChrono = () => {
    this.setState({chronoStart: true })
    this.timer = setInterval( this.decrementTime, 1000);
  } 

  stopChrono = () => { 
    clearInterval(this.timer);
    this.setState({ timerOn: false });
  }

  resetChrono = () => {
    if (this.state.work){
      this.setState({time: this.state.workTime })
     } else {
      this.setState({time: this.state.breakTime })
     }
     this.setState({chronoStart: false });
  }

  handleChangeWorkTime = work => {
    this.setState({workTime:  work*60 });
    this.setDefaultTime();
  };

  handleChangeBreakTime = pause => {
    this.setState({breakTime:  pause*60 });
    this.setDefaultTime();
  };


  handleClose = () => {
    this.setState({isOpen: false});
    this.playChrono();
  };


  render () {
  const { time, work, isOpen } = this.state;

  return (
    <div className="pomodoro">
        <Timer time={time} work={work} />

        <div class="timer_action">
        <Button className="btn" variant="contained" onClick={this.playChrono}>Start</Button>
        <Button className="btn" variant="contained" onClick={this.stopChrono}>Stop</Button>
        <Button className="btn" variant="contained" onClick={this.resetChrono} >Reset</Button>
        </div>

        <OptionButton className="input-group" name="travail" changeTime={this.handleChangeWorkTime} />
        <OptionButton className="input-group" name="pause"   changeTime={this.handleChangeBreakTime} />

        <Dialog onClose={this.handleClose} aria-labelledby="customized-dialog-title" open={isOpen}>
        <DialogContent>
          <Typography gutterBottom>
            Bravo champion ! 
            Vous venez de terminer votre session de {!work ? "travail" : "pause"}.
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={this.handleClose} color="primary">
           D'accord ! {work ? "Je me remets au travail !" : "Je vais prendre une pause !" }
          </Button>
        </DialogActions>
      </Dialog>

    </div>
  );
  }
}

export default Pomodoro;
