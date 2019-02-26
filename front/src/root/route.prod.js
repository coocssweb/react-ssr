import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Demo from '@containers/demo';

export default function () {
    return (
        <Router>
            <Route path="/" component={Demo}>
            </Route>
        </Router>
    );
};
