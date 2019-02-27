import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={className('demo')}>
                <div className={className('demo-title')}>Page Demo</div>
            </div>
        );
    }
}

export default Index;
