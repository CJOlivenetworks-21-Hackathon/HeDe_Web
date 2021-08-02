
import React, { useState, useEffect } from 'react';
// import 'css/compare.scss';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import * as common from 'components/common.jsx';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = async (event) => {
    }

    // const useEffect= (event)

    // const handleChange = (event) => {
    //     // const { email, password } = event.target;
    //     // setEmail(event.email);
    //     console.log("aaaaaaa");
    // }


    useEffect(() => {
        console.log("useEffect 호출")
    });

    return (
        <div align="center">
            <form onSubmit={handleSubmit}>
                <label>
                    email :
                    <input
                        type="text"
                        name="email"
                        value={email}
                        onChange={({ target: { value } }) => setEmail(value)}
                    />
                </label>
                <br />
                Password:
                <input
                    type="password"
                    name="password"
                    value={password}
                    onChange={({ target: { value } }) => setPassword(value)}
                />
                <br />
                <button type="submit">
                    로그인
                </button>
            </form>
        </div>
    )
}

export default Login;