import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/home';
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
