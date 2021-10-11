import React, { useState } from "react";
import Modal from "../componetns/Modal";
import Post from "../componetns/Post";
import Postcode from "@actbase/react-daum-postcode";
import axios from "axios";

const RegisterPage = () => {

    const [isModal, setModal] = useState(false);
    const [address,setAddress] = useState("");
    const [zoneCode,setZoneCode] = useState("");

    const [passwordValidate,setPasswordValidate] = useState(true);
    const [pwdValidate,setPwdValidate] = useState(true);
    const [idValidate,setIdValidate] = useState(true);
    const [emailValidate,setEmailValidate] = useState(true);
    const [nickValidate,setNickValidate] = useState(true);
    const [addressValidate,setAddressValidate] = useState(true);

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    } 

    const postSelected = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';
        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
            setAddress(fullAddress);
            setZoneCode(data.zonecode);
            setModal(false);
        }
    }

    const checkRequire= (text,setFunction) => {
        if(text === "")
        {
            setFunction(false);
            return false
        }
        else 
        {
            setFunction(true);
            return true;
        }
    };

    const idConfrim = () => {
        let id = document.querySelector("#id");
        
        if (checkRequire(id.value,setIdValidate))
        {
            return id.value;
        }
    };

    const passwordCheck = () => {
        let password = document.querySelector("#password");
        
        if (checkRequire(password.value,setPasswordValidate))
            return password.value
    };

    const emailConfrim = () => {
        let email = document.querySelector("#email");
        
        if (checkRequire(email.value,setEmailValidate))
            return email.value
    };

    const nickConfrim = () => {
        let nick = document.querySelector("#nick");
        
        if (checkRequire(nick.value,setNickValidate))
            return nick.value
    };

    const addressConfirm = () => {
        let address = document.querySelector("#address");

        if(checkRequire(address.value,setAddressValidate))
            return address.value
    }

    const passwordConfirmChange = () => {
        let pwd = document.querySelector("#password");
        let pwdConfirm = document.querySelector("#passwordConfirm");
        console.log(pwdConfirm.value)

        if(pwd.value !== pwdConfirm.value)
        {
            setPwdValidate(false)
        }
        else 
        {
            setPwdValidate(true)
        }
    };

    const submit = (e) => {
        e.preventDefault();
        
        let id = idConfrim();
        let password = passwordCheck();
        let email = emailConfrim();
        let nick = nickConfrim();
        let address = addressConfirm();
        
        if(id != undefined && password != undefined && email != undefined && nick != undefined && address != undefined)
        {
            let address2 = document.querySelector("#address2")
            let zonecode = document.querySelector("#zonecode")
            
            address2 = address2.value;
            zonecode = zonecode.value;

            if(address2 !== "")
            {
                const userData = {
                    u_id : id,
                    u_pass : password,
                    u_email : email,
                    u_nick : nick,
                    u_address : address,
                    u_address2 : address2,
                    u_zonecode : zonecode
                }
            
                axios.post('http://localhost:4000/api/register',userData).then(res => {
                    console.log(res.data)
                });
            }
        }
    };

    return (
        <div className="innerContainer">
            <div className = "registerCotainer">
                <form action="/" method="post" onSubmit={submit}>
                    <div className="inputInfo">
                        <label>아이디</label>
                        <input type="text" name="id" onBlur = {idConfrim} id="id"></input>
                        <span className={idValidate ? "disable" : "invalid"}>아이디를 입력해주세요.</span>
                    </div>
                    <div className="inputInfo">
                        <label>비밀번호</label>
                        <input type="password" name="password" id="password" onBlur={passwordCheck}></input>
                        <span className={passwordValidate ? "disable" : "invalid"}>비밀번호를 입력해주세요.</span>
                    </div>
                    <div className="inputInfo">
                        <label>비밀번호 확인</label>
                        <input type="password" name="passwordConfirm" onBlur={passwordConfirmChange} id="passwordConfirm"></input>
                        <span className={pwdValidate ? "disable" : "invalid"}>비밀번호가 다릅니다.</span>
                    </div>
                    <div className="inputInfo">
                        <label>이메일</label>
                        <input type="text" name="email" onBlur={emailConfrim} id="email"></input>
                        <span className={emailValidate ? "disable" : "invalid"}>이메일을 입력해주세요.</span>
                    </div>
                    <div className="inputInfo">
                        <label>닉네임</label>
                        <input type="text" name="nick" onBlur={nickConfrim} id="nick"></input>
                        <span className={nickValidate ? "disable" : "invalid"}>닉네임을 입력해주세요.</span>
                    </div>
                    <div className="inputInfo">
                        <label>주소</label>
                        <button type="button" onClick={openModal}>주소 검색하기</button>
                        <Modal visible={isModal} onClose={closeModal}>
                            <Postcode style={{width: 320, maxWidth : 480}} onSelected={postSelected}/>
                        </Modal>

                        <input type="text" value={zoneCode} name="zonecode" id="zonecode" readOnly/>
                        <input type="text" value={address} name="address" id="address" readOnly/>
                        <input type="text" name="address2" id="address2"/>
                        <span className={addressValidate ? "disable" : "invalid"}>주소를 입력해주세요.</span>
                    </div>
                    <button type="submit">회원가입</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;