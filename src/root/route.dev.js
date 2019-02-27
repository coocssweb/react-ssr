import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from '../layout';

export default function () {
    return (
        <Router>
            <Route path="/" exact component={Layout}>
            </Route>
        </Router>
    );
};
