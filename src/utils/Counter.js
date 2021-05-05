import React, { Component } from 'react'

export default class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    render() {
        return (
            <div>
                <p>Vous avez cliqué {this.count} fois</p>
                <button onClick={() => this.setState({count: this.state.count + 1})}>
                    Cliquez ici
            </button>
            </div>
        )
    }
}
