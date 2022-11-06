import {injectStores} from "@mobx-devtools/tools";
import {InputControlStore} from "./InputControlStore";

const inputControlStore = new InputControlStore();
injectStores({inputControlStore})

export {inputControlStore}