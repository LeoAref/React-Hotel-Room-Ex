'use strict';

var React = require('react'),
    ReactDOM = require('react-dom');

var Facilities = React.createClass({
    render: function () {
        return (
            <div className="facilities">
                <ul className="facilities__list clearfix">
                    <li className="facilities__list__item"><i className="fa fa-wifi"></i>Free Wifi</li>
                    <li className="facilities__list__item"><i className="fa fa-car"></i>Parking</li>
                    <li className="facilities__list__item"><i className="fa fa-heart"></i>Spa</li>
                    <li className="facilities__list__item"><i className="fa fa-photo"></i>Terras</li>
                    <li className="facilities__list__item"><i className="fa fa-refresh"></i>Airconditioning</li>
                    <li className="facilities__list__all">View all Facilities</li>
                </ul>
            </div>
        );
    }
});

module.exports = Facilities;