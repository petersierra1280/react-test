import React from "react";

class ReactButton extends React.Component {
  render() {
    return <Button>I <Heart/> React</Button>;
  }
}

const Heart = () => <span>&hearts;</span>

class Button extends React.Component {
  render() {
      return <button>{this.props.children}</button>
  }
}

export default ReactButton;
