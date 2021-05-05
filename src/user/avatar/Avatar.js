import React from 'react';
import './Avatar.css';

class Avatar extends React.Component {
    render() {
        if (this.props.avatarUrl) {
            return <img src={this.props.avatarUrl} alt="avatar" className="avatar" />
        }
        return <img src="img/default-avatar.png" alt="avatar" className="avatar" />
    }
}
export default Avatar;
