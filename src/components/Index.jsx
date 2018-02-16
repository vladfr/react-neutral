import { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Index extends Component {

    login(){
        this.props.auth.login()
    }

    render() {
        return(
            <div>
                <h1>Index</h1>
                <a onClick={this.login.bind(this)}>Login</a>
            </div>
        )
    }
}