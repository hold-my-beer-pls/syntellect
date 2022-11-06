import React, {useState} from 'react';
import {RightLeftButtons} from "./RightLeftButtons";
import IButtonProps from "./Button/Button.types";
import './FirstComponent.less';

/**
 * Два компонента с кнопками
 * @constructor
 */
const FirstComponent = () => {
    const [firstControlText, setFirstControlText] = useState<string>('First example')
    const [secondControlText, setSecondControlText] = useState<string>('Second example')

    const updateFirstTextHandler = (text: string) => {
        setFirstControlText(text)
    }

    const updateSecondTextHandler = (text: string) => {
        setSecondControlText(text)
    }
    const clearTextHandler = () => {
        setFirstControlText('')
    }
    const setNewTextHandler = () => {
        setFirstControlText('hello world')
    }
    const showAlertHandler = () => {
        alert(secondControlText)
    }
    const checkNumberHandler = () => {
        if (!!Number(secondControlText)) {
            alert(secondControlText)
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
                    text={firstControlText}
                    onUpdateText={(text: string) => updateFirstTextHandler(text)}
                    rightButtons={rightButtonsFirst} />
            </div>
            <div>
                <RightLeftButtons
                    text={secondControlText}
                    onUpdateText={(text: string) => updateSecondTextHandler(text)}
                    rightButtons={rightButtonsSecond}
                    leftButtons={leftButtonsSecond}/>
            </div>
        </div>
    );
}

export default FirstComponent;
