import { useForm } from "react-hook-form"
import { useNavigate } from "react-router"
import { useContext } from "react"

import { UserContext } from "../../store/user-context"

function Login() {
    const { register, handleSubmit, error } = useForm();
    const navigate = useNavigate();
    const userCtx = useContext(UserContext);

    function submitHandler(data) {
        console.log(data);

        let dataToSend = {
            user: {
                email: data.email,
                password: data.password
            }
        };

        fetch('http://localhost:4000/users/sign_in', {
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
            console.log('login error:', error);
        });
    }

    return (
        <div className="auth-container">
            <h1 className="auth-title">Login</h1>

            <form className="auth-form" onSubmit={handleSubmit(submitHandler)}>
                <div className="form-group mb-3">
                    <label htmlFor="email">Email</label>
                    <input type='email' className="form-control" {...register('email')} />
                    {error && error.email && <p className="error-text">{error.email.message}</p>}
                </div>

                <div className="form-group mb-4">
                    <label htmlFor="password">Password</label>
                    <input type='password' className="form-control" {...register('password')} />
                    {error && error.password && <p className="error-text">{error.password.message}</p>}
                </div>

                <button type="submit" className="btn btn-primary">Login</button>
            </form>
        </div>
    )
}

export default Login