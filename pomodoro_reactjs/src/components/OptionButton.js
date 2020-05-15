import React, { Component } from 'react';
import Input from '@material-ui/core/Input';

class OptionButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            time: 20,
        };
    }

    handleChange = event => {
        this.setState({ time: event.target.value });
        event.preventDefault();

        this.props.changeTime(this.state.time);
        };

      render() {
        return (
          <div>
            <label> Saisisez le temps de {this.props.name} en minute :</label>
            <Input className="input-group" type="number" value={this.state.time} onChange={this.handleChange}/>        
          </div>
        );
      }
  }

  export default OptionButton;