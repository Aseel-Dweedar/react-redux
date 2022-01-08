import React from 'react'
import items from "./item.json"
import Accordion from './components/Accordion'
import Search from './components/Search'
import Header from './components/Header'
import Routs from './components/Routs'

const App = () => {

    return (
        <div>
            <Header />
            <Routs path='/' >
                <Accordion items={items} />
            </Routs>
            <Routs path='/list' >
                <Search />
            </Routs>
        </div>
    )
}

export default App;
