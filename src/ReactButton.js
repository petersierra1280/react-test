import React from "react";
import ReactDOM from 'react-dom';

class ReactButton extends React.Component {
  render() {
    return <Button>I <Heart/> React</Button>;
  }
}

const Heart = () => <span>&hearts;</span>

class Button extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    }
    this.update = this.update.bind(this);
  }
  update() {
      this.setState({
        val: this.state.val + 1
      });
  }
  componentWillMount() {
    console.log('componentWillMount');
  }
  render() {
    console.log('Render!');
      return (
        <button onClick={this.update}>{this.props.children} - {this.state.val}</button>
      )
  }
  componentDidMount() {
    console.log('componentDidMount');
  }
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }
}

const containerId = "div-test";

class Wrapper extends React.Component {
  mount() {
    ReactDOM.render(<ReactButton />, document.getElementById(containerId));
  }
  unmount() {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
  }

  render() {
    return (
        <div>
          <button onClick={this.mount.bind(this)}>Mount</button>
          <button onClick={this.unmount.bind(this)}>Unmount</button>
          <div id={containerId}></div>
        </div>
    );
  }
}

export default Wrapper;
