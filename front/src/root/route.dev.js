import React from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import Demo from '@containers/demo';
import DevTool from '@containers/devTool';

export default function () {
    return (
        <div>
            <Router>
                <div>
                    <Route path="/" exact component={Demo}>
                    </Route>
                </div>
            </Router>
        </div>
    );
};
