import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import { Route, NavLink, Switch } from 'react-router-dom';
import Home from '../containers/home';
// import Demo from '@containers/demo';
// import Home from '../pages/home';
import Detail from '../containers/detail';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div id="app" className={className('layout')}>
                <Switch>
                    <Route path="/" component={Home} exact />
                    <Route path="/detail/:id" component={Detail} />
                </Switch>
            </div>
        );
    }
}

export default Index;
