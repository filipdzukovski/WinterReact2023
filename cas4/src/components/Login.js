import React, { useState, useEffect } from 'react';
import { Input } from './Input';
import { Dropdown } from './Dropdown';

export const Login = () => {

    const elements = [
        { value: 1, name: "Facebook" },
        { value: 2, name: "Instagram" },
        { value: 3, name: "Snapchat" },
    ];
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [inputType, setInputType] = useState("password");
    const [selectedApp, setSelectedApp] = useState(1);

    useEffect(() => {
        console.log("Username: ", username);
        console.log("Password: ", password);
        console.log("Selected App: ", selectedApp);
    }, [username, password, selectedApp])

    function changeInputType() {
        setInputType(
            inputType === 'password' ? 'text' : 'password'
        )
    }

    return (
        <div id="login">
            <form>
                <Input
                    type='text'
                    placeholder='Enter Username'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <Input
                    type={inputType}
                    placeholder='Enter Password'
                    value={password}
                    name={"password"}
                    smeniPole={changeInputType}
                    onChange={(e) => { setPassword(e.target.value) }}
                />
                <Dropdown elements={elements} changeApp={(e) => { setSelectedApp(e.target.value) }} />
            </form>
        </div>
    )
}