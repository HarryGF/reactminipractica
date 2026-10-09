import React, { Component } from 'react'
import './MenuRutas.css'

export default class extends Component {
    render() {
        return (
        <div id='menu'>
            <ul>
                <li>
                    <a href="/">Home</a>
                </li>
                <li>
                    <a href="/doctores">Doctores</a>
                </li>
            </ul>
        </div>
        )
    }
}
