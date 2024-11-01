import React from "react";
import "./Text.css";



const Text = ({ fontSize, color, align }) => {
    const style = {
        fontSize: fontSize,
        color: color,
        textAlign: align,
    };

    return <h1 style={style}>This is a Heading</h1>;
};

export default Text;
