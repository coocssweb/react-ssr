import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import { Route, NavLink, Switch } from 'react-router-dom';
// import Home from '@containers/home';
// import Demo from '@containers/demo';
import Home from '../pages/home';
import Demo from '../pages/demo';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className="">
                <div className="layout">
                    <div>Section Layout</div>
                    <ul className="links">
                        <li><NavLink to="/">Home</NavLink></li>
                        <li><NavLink to="/demo">About</NavLink></li>
                    </ul>
                    <div className="content">

                    </div>
                </div>
            </div>
        );
    }
}

export default Index;
