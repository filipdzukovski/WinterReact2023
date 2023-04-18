import React from 'react';

export class ClassComponent extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            promenliva1: "Vrednost 1",
            username: "",
            password: ""
        }
        console.log("This is from the constructor");
    }

    componentDidMount() {
        console.log("COMP DID MOUNT")
    }

    smeniVrednost = () => {
        this.setState({
            promenliva1: 'Nova Vrednost',

        })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    // handleChangePassword = (event) => {
    //     console.log(event)
    //     this.setState({
    //         password: event.target.value
    //     })
    // }

    render() {
        console.log("COMPONENT RENDERING")
        return (
            <div id='class-comp'>
                <h2>Some Content: {this.state.promenliva1} </h2>
                <button onClick={this.smeniVrednost} >Click Me !</button>
                <br />
                <br />
                <input
                    type="text"
                    placeholder='Enter Username'
                    name="username"
                    value={this.state.username}
                    onChange={this.handleChange}
                />
                <p>{this.state.username}</p>
                <input
                    type="password"
                    placeholder='Enter Password'
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                />
                <p>{this.state.password}</p>
            </div>
        )
    }
}