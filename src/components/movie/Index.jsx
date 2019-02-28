// import './index.scss';
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
        const { props } = this;
        return (
            <NavLink to={`/detail/${props.id}`} className={className('movie')}>
                <div style={{ backgroundImage: `url(${props.photo})` }} className={className('movie-photo')} />
                <div className={className('movie-info')}>
                    <h3 className={className('movie-title')}>{ props.title }</h3>
                    <div className={className('movie-rating')}>{ props.score } 分</div>
                </div>
            </NavLink>
        );
    }
}

export default Index;
