import React, {Component} from 'react';
import propTypes from 'prop-types';
import className from 'classnames';
import { NavLink } from 'react-router-dom';
import { Movie } from '../../components';

class Index extends Component {
    constructor(props) {
        super(props);
        const { staticContext = {} } = props;
        this.state = {
            bannerPhoto: staticContext.banner || window['defaultData'].banner,
            movies: staticContext.movies || window['defaultData'].movies
        };
    }

    render() {
        const { state } = this;
        let bannerPhoto = state.banner;
        let movies = state.movies;
        return (
            <div className={className('home')}>
                <section className={className('homeBanner')}>
                    <img src={bannerPhoto} className={className('homeBanner-photo')} />
                </section>
                <section className={className('homeNav')}>
                    <NavLink to="/" className={className('homeNav-link')}>
                        <div className={className('homeNav-icon')}></div>
                        <div className={className('homeNav-name')}>影院首页</div>
                    </NavLink>
                    <NavLink to="/column" className={className('homeNav-link')}>
                        <div className={className('homeNav-icon')}></div>
                        <div className={className('homeNav-name')}>精彩栏目</div>
                    </NavLink>
                    <NavLink to="javascript:;" className={className('homeNav-link')}>
                        <div className={className('homeNav-icon')}></div>
                        <div className={className('homeNav-name')}>精彩发现</div>
                    </NavLink>
                    <NavLink to="javascript:;" className={className('homeNav-link')}>
                        <div className={className('homeNav-icon')}></div>
                        <div className={className('homeNav-name')}>我关心的</div>
                    </NavLink>
                </section>
                <section className={className('homeHot')}>
                    <h2 className={className('homeHot-title')}>影院热映</h2>
                    <div className={className('homeHot-content')}>
                        {
                            movies.map((movie) => {
                                return (<Movie key={movie.id} {...movie} />)
                            })
                        }
                    </div>
                </section>
            </div>
        );
    }
}

export default Index;
