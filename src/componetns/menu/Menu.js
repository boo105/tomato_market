import React from "react";

const Menu = () => {
    return (
        <div className="menuContainer">
            <div className="top">
                <div className="title">
                    <span>Tomato-Market</span>
                </div>
                <div className="sign">
                    <button className ="signBtn" onClick={() => window.location.href = "/signIn"}>로그인</button>
                    <button className ="signBtn"  onClick={() => window.location.href = "/signUp"}>회원가입</button>
                </div>
            </div>
            <div className="category innerContainer">
                <ul>
                    <li><span>중고거래</span></li>
                    <li><span>무료나눔</span></li>
                    <li><span>QNA</span></li>
                </ul>
            </div>
        </div>
    );
};

export default Menu;