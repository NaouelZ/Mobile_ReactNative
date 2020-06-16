import React, {Component} from 'react';
import { StyleSheet, Text, View, Alert , TouchableOpacity, TextInput } from 'react-native';
import Timer from './Timer';

class Pomodoro extends Component {
  constructor(props) {
    super(props);
    this.state = {  
        time:   0,
        workTime: 1200,
        breakTime: 5,
        chronoStart : false,
        work : true,
        email: '',
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
    Alert.alert('Session terminé !');
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

  handleChangeWorkTime = text => {
    this.stopChrono;
    this.setState({workTime:  parseInt(text)*60});
    this.setDefaultTime();
  };

  handleChangeBreakTime = text => {
    this.stopChrono;
    this.setState({breakTime:  parseInt(text)*60});
    this.setDefaultTime();
  };

  render () {
  const { time, work } = this.state;

  return (
    <View>
        <Timer time={time} work={work} />

        <View style={{ paddingLeft: 50, paddingRight: 50, minWidth: 150, flexDirection: 'row', justifyContent: 'space-between'}} >

        <TouchableOpacity style={styles.button} onPress={this.playChrono}>
          <Text style={{ fontSize: 20, margin: 5, color: "white" }}> Start </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.stopChrono}>
          <Text style={{ fontSize: 20, margin: 5, color: "white" }}> Stop </Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={this.resetChrono}>
          <Text style={{ fontSize: 20, margin: 5, color: "white" }}> Reset </Text>
        </TouchableOpacity>

        </View>

        <Text style={styles.input}> Saisisez le temps de travail en minute :</Text>

        <TextInput style = {styles.input}
               style={{ marginLeft: 30, marginRight: 30, padding: 5, borderColor: 'white', borderWidth: 1, backgroundColor: 'white' }}
               underlineColorAndroid = "transparent"
               placeholder = "Entrer votre temps en minutes..."
               onChangeText = {(text) => this.handleChangeWorkTime(text)}
               keyboardType='numeric'
        />

        <Text style={styles.input}> Saisisez le temps de pause en minute :</Text>


        <TextInput style = {styles.input}
              style={{ marginLeft: 30, marginRight: 30, padding: 5, height: 40, borderColor: 'white', borderWidth: 1, backgroundColor: 'white' }}
              underlineColorAndroid = "transparent"
              placeholder = "Entrer votre temps en minutes..."
              onChangeText = {(text) => this.handleChangeBreakTime(text)}
              keyboardType='numeric'
        />
        
    </View>
  );
  }
}

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    backgroundColor: "#C03828",
    fontWeight: 'bold',
    color: "white",
    borderRadius: 3,
    padding: 5,
    margin: 10,
  },
  input: {
    textAlign: 'center',
    fontSize: 16,
    color: '#211A1A',
    margin: 5,
  },
  inputMinutes: {
    width: 50,
  }
});

export default Pomodoro;