import React from "react";
import defaultImg from "../asset/images/default.jpg";
import Product from "./Product";

const testTrades = [
    {
        "image" : defaultImg,
        "title" : "엘지디오스 김치냉장고",
        "price" : 300000
    },
    {
        "image" : defaultImg,
        "title" : "제습기",
        "price" : 50000
    },
    {
        "image" : defaultImg,
        "title" : "엘지디오스 김치냉장고",
        "price" : 300000
    },
    {
        "image" : defaultImg,
        "title" : "엘지디오스 김치냉장고",
        "price" : 300000
    },
    {
        "image" : defaultImg,
        "title" : "엘지디오스 김치냉장고",
        "price" : 300000
    },
    {
        "image" : defaultImg,
        "title" : "엘지디오스 김치냉장고",
        "price" : 300000
    },
    {
        "image" : defaultImg,
        "title" : "엘지디오스 김치냉장고",
        "price" : 300000
    },
    {
        "image" : defaultImg,
        "title" : "엘지디오스 김치냉장고",
        "price" : 300000
    },
    {
        "image" : defaultImg,
        "title" : "엘지디오스 김치냉장고",
        "price" : 300000
    },
    {
        "image" : defaultImg,
        "title" : "엘지디오스 김치냉장고",
        "price" : 300000
    },
    {
        "image" : defaultImg,
        "title" : "엘지디오스 김치냉장고",
        "price" : 300000
    },
    {
        "image" : defaultImg,
        "title" : "엘지디오스 김치냉장고",
        "price" : 300000
    },
    {
        "image" : defaultImg,
        "title" : "엘지디오스 김치냉장고",
        "price" : 300000
    },
    {
        "image" : defaultImg,
        "title" : "엘지디오스 김치냉장고",
        "price" : 300000
    },

];

const TradeList = () => {
    return (
        <div className="tradeList_wrap">
            <div className="tradeList">
                {testTrades.map((product) => (
                    <Product product={product}/>
                ))}
            </div>
        </div>
    );
};

export default TradeList;