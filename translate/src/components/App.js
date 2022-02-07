import React, { Component } from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
export class App extends Component {

    state = { language: "english" };

    onLanguageChange = (language) => {
        this.setState({ language })
    }

    render() {
        return (
            <div className='ui container' >App
                <div>
                    Select language:
                    <i className='flag us' onClick={() => this.onLanguageChange("english")} />
                    <i className='flag nl' onClick={() => this.onLanguageChange("dutch")} />
                </div>

                {/* Provider is a react component created automatically by react system its a property for context object */}
                {/* Provider value is responsible for updating the default value for context object */}
                <LanguageContext.Provider value={this.state.language}>
                    <UserCreate />
                </LanguageContext.Provider>

            </div>
        );
    }
}

export default App;
