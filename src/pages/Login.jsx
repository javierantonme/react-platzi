import React, { useRef } from 'react';
import '../styles/Login.scss';

const Login = () => {

    const form = useRef(null);

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(form.current);
        const data = {
            usename: formData.get('email'),
            password: formData.get('password')
        }

        console.log(data);
    }

    return (
        <div>
            <div className="login">
                <div className="form-container">
                    <img src="./logos/logo_yard_sale.svg" alt="logo" className="logo" />

                    <form action="/" className="form" ref={form}>
                        <label htmlFor="email" className="label">Email address</label>
                        <input type="text" id="email" name="email" placeholder="platzi@example.cm" className="input input-email" />

                        <label htmlFor="password" className="label">Password</label>
                        <input type="password" id="password" name="password" placeholder="*********" className="input input-password" />

                        <button className="primary-button login-button" onClick={handleSubmit} >Log In</button>
                        <a href="/">Forgot my password</a>
                    </form>

                    <button className="secondary-button signup-button">Sign up</button>
                </div>
            </div>
        </div>
    )
}

export default Login;
