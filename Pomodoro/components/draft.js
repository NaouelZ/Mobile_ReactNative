import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {  
        time:   0,
        workTime: 1200,
        breakTime: 500,
        chronoStart : false,
        work : true,
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
    this.setState({ work: !this.state.work});
    this.setDefaultTime();
    this.playChrono();
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

  render () {
  const { time, work } = this.state;

  return (
    <View>
        <Timer time={time} work={work} />

        <Button style={styles.btn}  onPress={this.playChrono}>Start</Button>
        <Button style={styles.btn}  onPress={this.stopChrono}>Stop</Button>
        <Button style={styles.btn}  onPress={this.resetChrono} >Reset</Button>

        <OptionButton  name="travail" changeTime={this.handleChangeWorkTime} />
        <OptionButton  name="pause"   changeTime={this.handleChangeBreakTime} />

    </View>
  );
  }
}
/*
const styles = StyleSheet.create({
    btn: {
      margin: '28px',
      cursor: 'pointer',
      fontSize: '18px',
      minWidth: '250px',
      outline: 0,
      border: '5px solid #F6F5F6',
      color: '#F6F5F6',
      fontWeight: 'bold',
      padding: '15px',
      borderRadius: '6px',
      transition: '0.2s all ease-in',
  },
  input: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0 auto 8px',
    fontSize: '30px',
    textAlign: 'left',
    color: 'white',
    clear: 'both',
  }
});
*/

export default Pomodoro;