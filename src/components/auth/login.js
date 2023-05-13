import { useForm } from "react-hook-form"

function Login() {
    const { register, handleSubmit, error } = useForm();

    function submitHandler(data) {
        console.log(data);
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