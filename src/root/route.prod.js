import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from '../layout';

export default function () {
    return (
        <Router>
            <Route path="/" component={Layout}>
            </Route>
        </Router>
    );
};
