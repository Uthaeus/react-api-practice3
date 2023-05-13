import { useForm } from "react-hook-form";

function Signup() {
    const { register, handleSubmit, error } = useForm();

    function submitHandler(data) {
        if (data.password !== data.confirmPassword) {
            alert('Passwords do not match');
            return;
        }
        console.log(data);
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