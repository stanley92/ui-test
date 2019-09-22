import './App.css';

import {
    NavLink,
    Route,
    BrowserRouter as Router
} from 'react-router-dom';
import React from 'react';

import About from './About';
import Emoji from './Emoji';
import Slate from './Slate';


function App () {

    return (
        <Router>
            <div className="app">
                <header className="app-header">
                    <nav className="nav-wrapper">
                        <div className="list-wrapper">
                            <div className="link-wrapper">
                                <NavLink to="/" exact activeClassName="active">About</NavLink>
                            </div>
                            <div className="link-wrapper">
                                <NavLink to="/emoji/" activeClassName="active">Emojis</NavLink>
                            </div>
                            <div className="link-wrapper">
                                <NavLink to="/slate/" activeClassName="active">Slate</NavLink>
                            </div>
                        </div>
                    </nav>
                </header>
                <Route path="/" exact component={About} />
                <Route path="/emoji/" component={Emoji} />
                <Route path="/slate/" component={Slate} />
            </div>
        </Router>
    );
}

export default App;
