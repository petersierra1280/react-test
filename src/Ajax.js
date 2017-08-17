import React from 'react';

class Ajax extends React.Component {
    constructor() {
        super();
        this.state = { items: [] }
    }
    componentWillMount() {
        fetch('https://api.cebroker.com/v2/states')
            .then(response => response.json())
            .then(response => {
                this.setState({ items: response });
                console.log(response);
            });
    }
    filter(e) {
        this.setState({ filter: e.target.value });
    }
    render() {
        let items = this.state.items;
        if (this.state.filter) {
            items = items.filter( item => item.name.toLowerCase().includes(this.state.filter.toLowerCase()));
        }
        return (
            <div>
                <h4>List of states</h4>
                <input type="text" onChange={this.filter.bind(this)} placeholder="filter states" />
                <ul>
                    {items.map(item =>
                        <State key={item.id} state={item} />
                    )}
                </ul>
            </div>
        );
    }
}

const State = (props) => <li>{props.state.name}</li>

export default Ajax;