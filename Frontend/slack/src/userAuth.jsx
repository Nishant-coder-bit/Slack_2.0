import { useState } from 'react';

function UserAuth() {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSignup = async () => {
        const response = await fetch("http://localhost:3000/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userName, password })
        });

        const data = await response.text(); // Use .json() if the backend returns JSON
        setMessage(data);
    };

    const handleLogin = async () => {
        const response = await fetch("http://localhost:3000/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ userName, password })
        });

        const data = await response.text();
        if (data === "login successfull") {
            localStorage.setItem('token', 'dummy-jwt-token');
        }
        setMessage(data);
    };

    return (
        <div>
            <h2>Welcome to Bengaluru</h2>
            <input type='text' placeholder='UserName' value={userName} onChange={(e) => setUserName(e.target.value)} />
            <input type='password' placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} />
            <button onClick={handleSignup}>Sign up</button>
            <button onClick={handleLogin}>Log in</button>
            <p>{message}</p>
        </div>
    );
}

export default UserAuth;
