import "./register.css";

export default function Register() {
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
                    <input placeholder="Username" className="loginInput" />
                    <input type="email" placeholder="Email" className="loginInput" />
                    <input type="Password" placeholder="Password" className="loginInput" />
                    <input type="Password" placeholder="Password Again" className="loginInput" />
                    <button className="loginButton">Sign Up</button>
                    <button className="loginRegisterButton">Log In to your Accout</button>
                </div>
            </div>
        </div>
    </div>

  )
}
