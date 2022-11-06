import React, {useEffect} from "react";
import {observer} from "mobx-react";
import IRightLeftButtonsProps from "./RightLeftButtons.types";
import "./RightLeftButtons.css"
import {Button} from "../Button";
import IButtonProps from "../Button/Button.types";
import {inputControlStore} from "../../stores";

/**
 * Текстовый импут с кнопками по бокам
 * @param text текст внутри инпута
 * @param onUpdateText обработчик текста инпута
 * @param rightButtons набор кнопок справа
 * @param leftButtons набор кнопок слева
 * @constructor
 */
export const RightLeftButtons: React.FC<IRightLeftButtonsProps> = observer(({leftButtons, rightButtons, controlName}) => {
    useEffect(() => {
        inputControlStore.setText(controlName, controlName)
    }, [])

    const changeTextHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        inputControlStore.setText(e.target.value, controlName)
    }

    return(
        <>
            {
                leftButtons?.map((item: IButtonProps) =>
                    <Button key={Math.random().toString()} text={item.text} onClick={item.onClick} />
                )
            }
            <input type="text" value={inputControlStore.text[controlName] || ''} onChange={changeTextHandler}/>
            {
                rightButtons?.map((item: IButtonProps) =>
                    <Button key={Math.random().toString()} text={item.text} onClick={item.onClick} />
                )
            }
        </>
    )
})
