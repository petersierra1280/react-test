import React from 'react';
import PropTypes from 'prop-types';

class Widget extends React.Component {
    render() {
        return (
            <input name={this.props.name} type={this.props.type} placeholder={this.props.placeholder} onChange={this.props.update} />
        );
    }
}

Widget.propTypes = {
    type: PropTypes.string,
    placeholder: PropTypes.string,
    name: PropTypes.string,
}

Widget.defaultProps = {
    type: "text"    
};

export default Widget;