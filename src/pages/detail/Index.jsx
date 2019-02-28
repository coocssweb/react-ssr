import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movie: props.movie
        };
    }

    component

    handleTodoClick () {
        alert('想看');
    }

    handleDoneClick () {
        alert('看过');
    }

    handleBackClick () {

    }

    render() {
        let { movie } = this.state;
        return (
            <div className={className('detail')}>
                <h1 className={className('detail-title')}>{ movie.title }</h1>
                <div className={className('detail-info clearfix')}>
                    <img src={ movie.photo } className={className('detail-photo')} />
                    <div className={className('detail-left')}>
                        <div className={className('detail-rating')}>
                             { movie.score } 分
                        </div>
                        <p className={className('detail-meta')}>
                            { movie.meta }
                        </p>
                    </div>
                </div>
                <div className={className('detail-btns')}>
                    <button className={className('detail-btn')}
                            onClick={this.handleTodoClick.bind(this)}>想看</button>
                    <button className={className('detail-btn')}
                            onClick={this.handleDoneClick.bind(this)}>看过</button>
                </div>
                <div className="detail-desc">
                    { movie.desc }
                </div>

                <button className={className('detail-back')} onClick={this.handleBackClick.bind(this)}>返回首页</button>
            </div>
        );
    }
}

export default Index;
