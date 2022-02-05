import React from 'react';
import { Router, Route } from 'react-router-dom';
import StreamList from "./streams/StreamList";
import StreamCreate from "./streams/StreamCreate";
import StreamDelete from "./streams/StreamDelete";
import StreamEdit from "./streams/StreamEdit";
import StreamShow from "./streams/StreamShow";
import Header from './Header';
import history from "../history"

function App() {
    return (
        <div className='ui container' >
            {/*
            replace browserRouter with plain Router so we can control our history
            and adding programmatic navigation -navigate the user automatically after an event-
            */}
            <Router history={history}>
                <div>
                    <Header />
                    <Route path="/" exact component={StreamList} />
                    <Route path="/stream/new" component={StreamCreate} />
                    <Route path="/stream/edit/:id" component={StreamEdit} />
                    <Route path="/stream/delete/:id" component={StreamDelete} />
                    <Route path="/stream/show/:id" component={StreamShow} />
                </div>
            </Router>
        </div >
    );
}

export default App;
