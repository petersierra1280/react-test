import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Widget from './Widget';
import Wrapper from './ReactButton';
import Ajax from './Ajax';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      name: 'State text',
      age: '25'
    };
  }
  update (e) {
    const targetName = e.target.name;
    const value = targetName === 'name' ? this.name : this.age;    

    this.setState({
      [targetName]: ReactDOM.findDOMNode(value).value
    });
  }
  render() {  
    return (
      <div>
        <h3>Props:</h3>
        <span>Name: {this.props.name}</span>
        <br />
        <span>Age: {this.props.age}</span>
        <hr />
        <h3>State:</h3>
        <span>Name (state): {this.state.name}</span>
        <br />
        <span>Age (state): {this.state.age}</span>
        <hr />
        <h3>Inputs:</h3>
        <Widget name="name" placeholder="name input" ref={ comp => this.name = comp } update={this.update.bind(this)} />
        <br />
        <Widget name="age" type="number" placeholder="age input" ref={ comp => this.age = comp } update={this.update.bind(this)} />
        <hr />
        <Wrapper />
        <hr />
        <Ajax />
      </div>
    );
  }
}

App.propTypes = {
  name: PropTypes.string,
  //example of making a property required (without using .isRequired)
  age(props, propName, component) {
    if (!(propName in props) || !props[propName]) {
      return Error(`Missing property ${propName}`);
    }
  }
};

App.defaultProps = {
  name: "Default text"
};

export default App;
