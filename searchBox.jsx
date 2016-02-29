'use strict';

var React = require('react'),
    ReactDOM = require('react-dom');

// Components
var Header = require('./components/Header/header.jsx'),
    Slider = require('./components/Slider/slider.jsx'),
    Search = require('./components/Search/search.jsx'),
    ReviewsSummary = require('./components/ReviewsSummary/reviewsSummary.jsx'),
    Facilities = require('./components/Facilities/facilities.jsx'),
    Map = require('./components/Map/map.jsx');

var RoomPage = React.createClass({
	render: function () {
		return (
            <div className="container">
                <Header />
                
                <section className="searchContainer clearfix">
                    <div className="searchContainer__left col-xs-12 col-md-8">
                        <Slider />
                        <Search />
                    </div>
                    <div className="searchContainer__right col-xs-12 col-md-4">
                        <ReviewsSummary />
                        <Facilities />
                        <Map />
                    </div>
                </section>
            </div>
		);
	}
});

ReactDOM.render(React.createElement(RoomPage, null), document.getElementById('RoomPageReact'));