import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
export class Button extends Component {

    /*  use this.context and provider  */
    // static contextType = LanguageContext;

    render() {

        /*  use this.context and provider  */
        // const text = this.context === "english" ? "Submit" : "Voorleggen";

        return (
            <button className='ui button primary' >
                {/*  use Consumer property for context object  */}
                <LanguageContext.Consumer>
                    {/* always takes function with one params (value) == what ever our context value */}
                    {(value) => value === "english" ? "Submit" : "Voorleggen"}
                </LanguageContext.Consumer>
            </button>
        );
    }
}

export default Button;
