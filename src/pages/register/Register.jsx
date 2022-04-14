import './register.css'

export default function Register() {
    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">MakhmoodSocial</h3>
                    <span className="loginDesc">
                        Talking with friends on MakhmoodSocial
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input className="loginInput" placeholder='username'></input>
                        <input className="loginInput" placeholder='email'></input>
                        <input className="loginInput" placeholder='password'></input>
                        <input className="loginInput" placeholder='password again'></input>
                        <button className="loginButton">Sign up</button>
                        <button className="loginRegisterButton">Log into your account</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
