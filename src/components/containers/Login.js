import React from "react";

class Login extends React.Component {
    render () {
        return (
            <div>
                <form className='form-group form'>
                    <input className='form-control' type="email" placeholder="Enter your email" name="email" required autoFocus/>
                    <br/>
                    <input className='form-control' type="password" name="password" id="password" placeholder="Enter your password" required autoFocus/>
                    <br/>
                    <button className='btn btn info' type="submit">
                        Login
                    </button>
                </form>
            </div>
        )
    }
}

export default Login;
