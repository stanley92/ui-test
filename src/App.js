import './App.css';

import {
    NavLink,
    Route,
    BrowserRouter as Router,
    Redirect,
} from 'react-router-dom';
import React from 'react';

import About from './About';
import Emoji from './Emoji';
import Slate from './Slate';
import Trace from './Trace';

function App () {

    return (
        <Router>
            <div className="app">
                <header className="app-header">
                    <nav className="nav-wrapper">
                        <div className="list-wrapper">
                            <div className="link-wrapper">
                                <NavLink to="/" activeClassName="active">About Me</NavLink>
                            </div>
                            <div className="link-wrapper">
                                <NavLink to="/emoji/" activeClassName="active">Emojis</NavLink>
                            </div>
                            <div className="link-wrapper">
                                <NavLink to="/trace/" activeClassName="active">Trace</NavLink>
                            </div>
                            {/*<div className="link-wrapper">*/}
                            {/*    <NavLink to="/slate/" activeClassName="active">Slate</NavLink>*/}
                            {/*</div>*/}
                        </div>
                    </nav>
                </header>
                {/*<Route path="/emoji/" component={Emoji} />*/}
                <Route path="/trace/" component={Trace} />
                {/*<Route path="/slate/" component={Slate} />*/}
                {/*<Route path="/" exact component={About} />*/}
                <Redirect to="/trace" from="/" />
            </div>
        </Router>
    );
}

export default App;
