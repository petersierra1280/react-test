import React from 'react';

class Widget extends React.Component {
    render() {
        return (
            <input name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.update} />
        );
    }
}

Widget.propTypes = {
    type: React.PropTypes.string,
    placeholder: React.PropTypes.string,
    name: React.PropTypes.string,
}

Widget.defaultProps = {
    type: "text"    
};

export default Widget;