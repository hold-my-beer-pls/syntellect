import React from "react";
import IRightLeftButtonsProps from "./RightLeftButtons.types";
import "./RightLeftButtons.css"
import {Button} from "../Button";
import IButtonProps from "../Button/Button.types";

/**
 * Текстовый импут с кнопками по бокам
 * @param text текст внутри инпута
 * @param onUpdateText обработчик текста инпута
 * @param rightButtons набор кнопок справа
 * @param leftButtons набор кнопок слева
 * @constructor
 */
export const RightLeftButtons: React.FC<IRightLeftButtonsProps> = ({text, onUpdateText, rightButtons, leftButtons}) => {

    const changeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onUpdateText(e.target.value)
    }

    return(
        <>
            {
                leftButtons?.map((item: IButtonProps) =>
                    <Button key={Math.random().toString()} text={item.text} onClick={item.onClick} />
                )
            }
            <input type="text" value={text} onChange={changeTextHandler}/>
            {
                rightButtons?.map((item: IButtonProps) =>
                    <Button key={Math.random().toString()} text={item.text} onClick={item.onClick} />
                )
            }
        </>
    )
}
