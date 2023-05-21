import "./login.css";

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">Social</h3>
                <span className="loginDesc">
                    Connect with friends
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input type="email" placeholder="Email" className="loginInput" />
                    <input type="Password" placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password</span>
                    <button className="loginRegisterButton">Create a New Accout</button>
                </div>
            </div>
        </div>
    </div>
  )
}
