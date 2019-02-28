import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import { NavLink } from 'react-router-dom';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className={className('column')}>
                <section className={className('columnBanner')}>
                    <img src="" className={className('columnBanner-photo')} />
                </section>
                <section className={className('columnType')}>
                    <span>动作</span>
                </section>
                <section className={className('columnContent')}>
                    
                </section>
            </div>
        );
    }
}

export default Index;
