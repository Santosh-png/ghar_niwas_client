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
        <div style={{ 
            maxWidth: '400px', 
            margin: '0 auto', 
            padding: '20px', 
            borderRadius: '10px', 
            background: 'linear-gradient(to top, rgba(41, 44, 106, 0.8), rgba(41, 44, 106, 0.6), rgba(41, 44, 106, 0.3), rgba(44, 49, 79, 0.2))', 
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            backdropFilter: 'blur(10px)',
            border: '1px solid #292C6A',
            color: '#FFF'
        }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                <AccountCircleIcon style={{ fontSize: '9rem', color: '#FFFFFF', opacity: '0.6', filter: 'drop-shadow(0 0 5px rgba(0,0,0,0.3))' }} />
            </div>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="username" style={{ display: 'block', fontWeight: 'semi-bold', marginBottom: '5px' }}>Username:</label>
                    <input type="text" id="username" value={username} onChange={handleUsernameChange} style={{ width: '100%', padding: '10px', border: '1px solid #292C6A', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.7)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', color: '#333' }} />
                </div>
                <div style={{ marginBottom: '20px' }}>
                    <label htmlFor="password" style={{ display: 'block', fontWeight: 'semi-bold', marginBottom: '5px' }}>Password:</label>
                    <input type="password" id="password" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '10px', border: '1px solid #292C6A', borderRadius: '5px', backgroundColor: 'rgba(255, 255, 255, 0.7)', boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', color: '#333' }} />
                </div>
                <div style={{ marginBottom: '20px', display: 'flex', alignItems: 'center' }}>
                    <input type="checkbox" id="rememberMe" checked={rememberMe} onChange={handleRememberMeChange} style={{ marginRight: '10px' }} />
                    <label htmlFor="rememberMe" style={{ fontWeight: 'semi-bold' }}>Remember me</label>
                </div>
            
                <button type="submit" style={{ 
                    width: '100%', 
                    padding: '10px', 
                    border: '1px solid #292C6A', 
                    borderRadius: '5px', 
                    backgroundColor: '#292C6A', 
                    color: '#fff', 
                    cursor: 'pointer', 
                    fontWeight: 'semi-bold',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
                    transition: 'background-color 0.3s ease',
                }}>Login</button>
                <div style={{ textAlign: 'center', marginTop: '10px' }}>
                    <a href="/forgot-password" style={{ color: '#FBAF1A', textDecoration: 'none', fontWeight: 'semi-bold' }}>Forgot Password?</a>
                </div>
            </form>
        </div>
    );
};

export default AdminLoginForm;
