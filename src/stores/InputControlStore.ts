import {makeAutoObservable} from 'mobx'

export class InputControlStore {
    private _inputText: any = {}

    constructor() {
        makeAutoObservable(this)
    }

    setText(text: string, key: string): void {
       this._inputText[key] = text;
    }

    get text() {
        return this._inputText
    }
}
