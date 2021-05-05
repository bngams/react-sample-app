import React from 'react';
import Avatar from '../avatar/Avatar';
import './Welcome.css'

// create a component definition
class Welcome extends React.Component {
    render() {
        if (this.props.name) {
            return (
                <div className="user-welcome">
                    <Avatar avatarUrl={this.props.avatarUrl} />
                    {/* JSXComment */}
                    <h1>Bonjour, {this.formatName(this.props.name)} !</h1>
                </div>
            )
        }
        return <h1>Bonjour, Monde.</h1>
    }

    formatName(value) {
        return value.toUpperCase();
    }
}
export default Welcome;