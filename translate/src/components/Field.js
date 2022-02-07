import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
export class Field extends Component {

    /*  use this.context and provider  */
    // static contextType = LanguageContext;

    render() {

        /*  use this.context and provider  */
        // const text = this.context === "english" ? "Name" : "Naam";

        return (
            <div className='ui field'>
                {/*  use Consumer property for context object (We use Consumer when there is more one context)  */}
                <label>
                    <LanguageContext.Consumer>
                        {/* always takes function with one params (value) == what ever our context value */}
                        {(value) => value === "english" ? "Name" : "Naam"}
                    </LanguageContext.Consumer>
                </label>
                <input />
            </div>
        );

    }
}

export default Field;
