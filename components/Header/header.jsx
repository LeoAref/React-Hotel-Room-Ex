'use strict';

var React = require('react'),
    ReactDOM = require('react-dom');

var Header = React.createClass({
    render: function () {
        return (
            <header className="header">
				<h2 className="header__title">Park Plaza Victoria Amsterdam
					<ul className="header__title__rating">
						<li><i className="fa fa-star"></i></li>
						<li><i className="fa fa-star"></i></li>
						<li><i className="fa fa-star"></i></li>
						<li><i className="fa fa-star"></i></li>
						<li><i className="fa fa-star"></i></li>
					</ul>
				</h2>
				<h4 className="header__address">140 Gloucester Road, Kensington and Chelsea, London, SW7 4QH, United Kingdom <a href="#">Show on map</a></h4>
				
				<div className="header__navToggle visible-xs"><i className="fa fa-bars"></i>Menu</div>
				<ul className="header__nav">
					<li className="header__nav__link header__nav__link--active">Overview</li>
					<li className="header__nav__link"><a href="#">Rooms and Rates</a></li>
					<li className="header__nav__link"><a href="#">Facilities</a></li>
					<li className="header__nav__link"><a href="#">Reviews</a></li>
					<li className="header__nav__link"><a href="#">Map</a></li>
					<li className="header__nav__link"><a href="#">Similar Hotels</a></li>
				</ul>
			</header>
        );
    }
});

module.exports = Header;