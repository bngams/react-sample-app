import React, { Component } from 'react'
import Welcome from '../user/welcome/Welcome'
import Clock from '../utils/Clock'
import './Header.css'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <Welcome name="Boris" avatarUrl="https://picsum.photos/200" />
                <Clock />
            </div>
        )
    }
}
