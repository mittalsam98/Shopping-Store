import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import RandomItem from './randomItem.jsx';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const mapStateToProps = (state) => {
    return {
        items: state.items
    };
}

class Home extends React.Component {
    render() {
        return (
            <div>
                <div className="home-hero">
                    <Carousel  autoPlay={true} stopOnHover={false} showThumbs={false}  infiniteLoop={true} transitionTime={1000} interval={4000} className="home-hero-message">
                        <div>
                            <img src={require("../../images/hero2.jpg")} />
                        </div>
                        <div>
                            <img src={require("../../images/hero1.jpg")} />
                        </div>
                        <div>
                            <img src={require("../../images/hero3.jpg")} />
                        </div>
                    </Carousel>
                        {/* <h1>now open in Seattle!</h1>
                        <Link className="hero-button" to="/new-arrivals">Shop the New Arrivals</Link>
                    <span>Photo by <a href="https://unsplash.com/@fng137" target="new">Felipe Galvan</a></span> */}
                </div>
                <RandomItem />
            </div>
            
        );
    }
}

export default connect(mapStateToProps)(withRouter(Home));