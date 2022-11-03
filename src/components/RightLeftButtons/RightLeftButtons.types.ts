import IButtonProps from "../Button/Button.types";

export default interface IRightLeftButtonsProps {
    text: string,
    onUpdateText: (text: string) => void
    rightButtons?: IButtonProps[]
    leftButtons?: IButtonProps[]
}
