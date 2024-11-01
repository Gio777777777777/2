import React from "react";
import "./Button.css";

const Button = ({ backgroundColor, height, width, text }) => {
    const style = {
        backgroundColor,
        height,
        width,
    };

    return (
        <button className="button" style={style}>
            {text}
        </button>
    );
};

export default Button;
