import IButtonProps from "../Button/Button.types";

export default interface IRightLeftButtonsProps {
    controlName: string
    rightButtons?: IButtonProps[]
    leftButtons?: IButtonProps[]
}
