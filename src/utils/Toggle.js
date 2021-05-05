import React, { Component } from 'react'

export default class Toggle extends Component {
    // create state active
    constructor(props) {
        // call parent constructor
        super(props);

        // state
        this.state = {
            active: true
        };

        // bind handleclick to allow this use
        this.handleClick = this.handleClick.bind(this);
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                { (this.state.active) ? 'ON' : 'OFF'}
            </button>
        )
    }

    // link to onClick event
    handleClick() {

        // update state
        this.setState({
            active: !this.state.active
        });

        // update state
        // this.setState((state) => ({
        //     active: !state.active
        // }));
    }
}
