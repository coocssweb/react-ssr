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
            <div className={className('detail')}>
                详情页
            </div>
        );
    }
}

export default Index;
