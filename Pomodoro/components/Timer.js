import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

function printZero(num){
    return num > 9 ? num : "0" + num;
}

function secondesConvertion(secondes) {
    const m = printZero(Math.floor((secondes / 60)));
    const s = printZero(Math.floor(secondes % 60));
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
            <View style={{ alignSelf: 'center' }}>
                <Text style={time/60 > 20  ? styles.red: styles.pink}>{secondesConvertion(time)}</Text>
                <Text style={styles.description}>{this.props.work ? "SESSION DE TRAVAIL !" : "SESSION DE PAUSE !"}</Text>
            </View>
        );
      }
}

const styles = StyleSheet.create({
    red: {
        color: 'red', 
        fontSize: 130,
        fontWeight: 'bold',
      },
    pink: {
        color: 'pink',
        fontSize: 130,
        fontWeight: 'bold',
      },
      description: {
        fontSize: 28,
        textAlign: 'center',
      }
});

export default Timer;