import React from "react";
import IButtonProps from "./Button.types";
import "./Button.css"

export const Button = ({text, onClick}: IButtonProps) => {
    return(
        <button onClick={onClick}>
            {text}
        </button>
    )
}
