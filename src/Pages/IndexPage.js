import React from "react";
import TradeList from "../componetns/TradeList";


const IndexPage = () => {
    return (
        <div className ="innerContainer">
            <span className="middle_text">중고 거래</span>
            <TradeList/>
        </div>
    );
};

export default IndexPage;