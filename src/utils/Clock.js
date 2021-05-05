import React, { Component } from 'react'

export default class Clock extends Component {
    constructor(props) {
        // call React.Component constructor
        // allow React to keep and do its logic
        super(props);

        // create state obj with date
        this.state = {
            date: new Date()
            // date: props.date // other alternative
        }
    }

    render() {
        return (
            <h2>{this.state.date.toLocaleTimeString()}</h2>
        )
    }

    // component ready
    componentDidMount() {
        // 
        console.log('componentDidMount');
        this.timer = setInterval(() => {
            console.log('interval');
            this.tick()
        }, 1000);
    }

    // component delete
    componentWillUnmount() {
        clearInterval(this.timer);
    }

    tick() {
        this.setState({
            date: new Date()
        });
    }
}
