import React from "react";
import IButtonProps from "./Button.types";
import "./Button.css"

export const Button: React.FC<IButtonProps> = ({text, onClick}) => {
    return(
        <button onClick={onClick}>
            {text}
        </button>
    )
}
