import { useEffect } from "react";
import DaumPostcode from "react-daum-postcode";

const Post = ({setAddress, setZoneCode,setModal}) => {

    const handleComplete = (data) => {
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
        //fullAddress -> 전체 주소반환
    }
    return (<DaumPostcode onComplete={handleComplete} className="post-code" submitMode={false}/>);
}

export default Post;