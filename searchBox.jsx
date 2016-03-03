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

// Data
var data = require('./dummyData.json');

var RoomPage = React.createClass({
    getInitialState: function () {
        return {
            searchResults: null
        };
    },
    setSearchResults: function (searchResults) {
        this.setState({
            searchResults: searchResults
        });
    },
	render: function () {
        var searchResults;        
        
        if(this.state.searchResults) {
            searchResults = (
                <section className="searchResults well text-center">
                    Search results will be here...
                </section>
            )
        } else {
            searchResults = '';
        }
        
		return (
            <div className="container">
                <Header data={data.hotelInfo}/>
                
                <section className="searchContainer clearfix">
                    <div className="searchContainer__left col-xs-12 col-md-8">
                        <Slider data={data.slider} />
                        <Search data={data.offerWebsites} setSearchResults={this.setSearchResults}/>
                    </div>
                    <div className="searchContainer__right col-xs-12 col-md-4">
                        <ReviewsSummary />
                        <Facilities data={data.facilities}/>
                        <Map mapUrl={data.hotelInfo.mapUrl}/>
                    </div>
                </section>
                
                {searchResults}
            </div>
		);
	}
});

ReactDOM.render(React.createElement(RoomPage, null), document.getElementById('RoomPageReact'));