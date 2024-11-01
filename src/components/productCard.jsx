import React from "react";
import "./ProductCard.css";

const ProductCard = ({ price, quantity, name, description, color }) => {
    return (
        <div className="product-card" style={{ borderColor: color }}>
            <h2>{name}</h2>
            <p>{description}</p>
            <p>Price: ${price}</p>
            <p>Quantity: {quantity}</p>
            <p>color:blue</p>
            <p>size:30sm</p>
        </div>
    );
};

export default ProductCard;
