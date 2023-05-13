import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { useContext } from "react";

import { UserContext } from "../../store/user-context";

function Signup() {
    const { register, handleSubmit, error } = useForm();
    const navigate = useNavigate();
    const userCtx = useContext(UserContext);

    function submitHandler(data) {
        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        console.log(data);

        let dataToSend = {
            user: {
                email: data.email,
                username: data.username,
                password: data.password
            }
        };

        fetch('http://localhost:4000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataToSend)
        })
        .then(response => {
            if (response.ok) {
                let token = response.headers.get('Authorization').split(' ')[1];
                localStorage.setItem('practice_token', token);
                return response.json();
            }
        })
        .then(data => {
            userCtx.userLogin(data.status.data);
            navigate('/');
        })
        .catch(error => {
            console.log('sign in error:', error);
        });
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Signup</h1>

            <form className="auth-form" onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type='email' className="form-control" {...register('email')} />
                    {error && error.email && <p className="error-text">{error.email.message}</p>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="username">Username</label>
                    <input type='text' className="form-control" {...register('username')} />
                    {error && error.username && <p className="error-text">{error.username.message}</p>}
                </div>

                <div className="form-group mb-3">
                    <label htmlFor="password">Password</label>
                    <input type='password' className="form-control" {...register('password')} />
                    {error && error.password && <p className="error-text">{error.password.message}</p>}
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input type='password' className="form-control" {...register('confirmPassword')} />
                    {error && error.confirmPassword && <p className="error-text">{error.confirmPassword.message}</p>}
                </div>

                <button type="submit" className="btn btn-primary">Signup</button>
            </form>
        </div>
    );
}

export default Signup;