import React from 'react';
import {RightLeftButtons} from "./RightLeftButtons";
import IButtonProps from "./Button/Button.types";
import './FirstComponent.css';
import {inputControlStore} from "../stores";

const firstControlName = 'firstControl'
const secondControlName = 'secondControl'
/**
 * Два компонента с кнопками
 * @constructor
 */
const FirstComponent = () => {
    const clearTextHandler = () => {
        inputControlStore.setText('', firstControlName)
    }
    const setNewTextHandler = () => {
        inputControlStore.setText('hello world', firstControlName)
    }
    const showAlertHandler = () => {
        alert(inputControlStore.text[secondControlName])
    }
    const checkNumberHandler = () => {
        if (!!Number(inputControlStore.text[secondControlName])) {
            alert(inputControlStore.text[secondControlName])
        }
    }
    const rightButtonsFirst: IButtonProps[] = [
        {
            text: 'r1',
            onClick: clearTextHandler
        },
        {
            text: 'r2',
            onClick: setNewTextHandler
        }]
    const leftButtonsSecond: IButtonProps[] = [
        {
            text: 'l1',
            onClick: showAlertHandler
        }]
    const rightButtonsSecond: IButtonProps[] = [
        {
            text: 'r1',
            onClick: checkNumberHandler
        }]

    return (
        <div className="buttonsGroup">
            <div>
                <RightLeftButtons
                    controlName={firstControlName}
                    rightButtons={rightButtonsFirst} />
            </div>
            <div>
                <RightLeftButtons
                    controlName={secondControlName}
                    rightButtons={rightButtonsSecond}
                    leftButtons={leftButtonsSecond}/>
            </div>
        </div>
    );
}

export default FirstComponent;
