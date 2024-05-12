import React, { useState } from 'react';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import "../../theme.js"
// import "../../global.css"

const AdminLoginForm = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [rememberMe, setRememberMe] = useState(false);

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleRememberMeChange = (e) => {
        setRememberMe(e.target.checked);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    return (
        <div style={{ maxWidth: '400px', margin: '0 auto', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#292C6A', color: "#FFFFFF" }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <AccountCircleIcon style={{ fontSize: '9rem' }} />
            </div>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="username" style={{ display: 'block', fontWeight: 'semi-bold' }}>Username:</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                </div>
                <div style={{ marginBottom: '15px' }}>
                    <label htmlFor="password" style={{ display: 'block', fontWeight: 'semi-bold' }}>Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }} />
                </div>
                <div style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} style={{ marginRight: '5px' }} />
                    <label htmlFor="rememberMe" style={{ fontWeight: 'semi-bold' }}>Remember me</label>
                </div>
            
                <button type="submit" style={{ width: '100%', padding: '10px',marginBottom: '15px', border: 'none', borderRadius: '5px', backgroundColor: '#FBAF1A', color: '#fff', cursor: 'pointer' }}>Login</button>
                <div style={{  textAlign: 'center' }}>
                    <a href="/forgot-password" style={{ color: '#FFFFFF', textDecoration: 'none' }}>Forgot Password?</a>
                </div>
            </form>
        </div>
    );
};

export default AdminLoginForm;
