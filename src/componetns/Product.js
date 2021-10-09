import React from "react";


const Product = ({product}) => {
    return (
        <div className="product">
            <img src={product.image}></img>
            <div className="info">
                <div className="title">
                    <span>{product.title}</span>
                </div>
                <div className="price">
                    <span>{product.price}원</span>
                </div>
            </div>            
        </div>
    );
};

export default Product;