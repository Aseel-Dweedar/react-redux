import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
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
                    <Switch>
                        <Route path="/" exact component={StreamList} />
                        <Route path="/stream/new" exacts component={StreamCreate} />
                        <Route path="/stream/edit/:id" exacts component={StreamEdit} />
                        <Route path="/stream/delete/:id" exacts component={StreamDelete} />
                        <Route path="/stream/:id" exacts component={StreamShow} />
                    </Switch>
                </div>
            </Router>
        </div >
    );
}

export default App;
