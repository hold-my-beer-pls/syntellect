import React from "react";
import IButtonProps from "./Button.types";
import "./Button.less"

/**
 * Кнопка с текстом
 * @param text текст в кнопке
 * @param onClick обрапотчик клика
 * @constructor
 */
export const Button: React.FC<IButtonProps> = ({text, onClick}) => {
    return(
        <button onClick={onClick}>
            {text}
        </button>
    )
}
