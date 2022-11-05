import React from "react";
import {SearchWithHints} from "./SearchWithHints/";
import './SecondComponent.css';

/**
 * Два поиска
 * @constructor
 */
const SecondComponent = () => {
    return(
        <div className={'secondComponent'}>
            <SearchWithHints
                maxHints={3}/>
            <SearchWithHints
                maxHints={10}/>
        </div>
    )
}

export default SecondComponent