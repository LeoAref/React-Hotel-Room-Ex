'use strict';

var React = require('react');

// Components
var Modal = require('../Common/modal.jsx');

var Header = React.createClass({
    getInitialState: function () {
        return {
            navOpened: false
        }
    },
    toggleNav: function () {
        this.setState({
            navOpened: !this.state.navOpened
        });
    },
    getRating: function (rating) {
        var result = [];
        for(var i = 0; i < rating; i++) {
            result.push(
                <li key={i}><i className="fa fa-star"></i></li>
            );
        }
        return result;
    },
    render: function () {
        var navOpened = this.state.navOpened,
            toggleNav = this.toggleNav,
            data = this.props.data,
            rating = this.getRating(data.rating),
            modal = {
                header: data.name + " on map",
                body: (
                    <iframe src={data.mapUrl} height="450" frameBorder="0" style={{border:0, width: '100%'}} allowFullScreen></iframe>
                ),
                id: "hotelMap"
            };
        
        return (
            <header className="header">
				<h2 className="header__title">{data.name}
					<ul className="header__title__rating">
						{rating}
					</ul>
				</h2>
				<h4 className="header__address">{data.address} <a href="#" data-toggle="modal" data-target="#hotelMap">Show on map</a></h4>
				
				<div className="header__navToggle visible-xs" onClick={toggleNav}><i className="fa fa-bars"></i>Menu</div>
				<ul className={"header__nav " + (navOpened ? 'opened' : '')}>
					<li className="header__nav__link header__nav__link--active">Overview</li>
					<li className="header__nav__link"><a href="#">Rooms and Rates</a></li>
					<li className="header__nav__link"><a href="#">Facilities</a></li>
					<li className="header__nav__link"><a href="#">Reviews</a></li>
					<li className="header__nav__link"><a href="#">Map</a></li>
					<li className="header__nav__link"><a href="#">Similar Hotels</a></li>
				</ul>
                
                <Modal modal={modal} />
			</header>
        );
    }
});

module.exports = Header;