import React from "react";

const LoginPage = () => {
    return (
        <div className="innerContainer">
            <div className="loginContainer">
                <div className="left">
                </div>
                <div className="right">
                    <form action="/" method="post">
                        <div className="loginInput">
                            <input type="text" placeholder="아이디"></input>
                            <input type="password" placeholder="비밀번호"></input>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;