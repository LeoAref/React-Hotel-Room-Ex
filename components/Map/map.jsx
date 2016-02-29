'use strict';

var React = require('react'),
    ReactDOM = require('react-dom');

var Map = React.createClass({
    render: function () {
        return (
            <div className="map">
                <h5 className="map__toggle visible-md"><button className="btn"><i className="fa fa-map-marker"></i>Show on map</button></h5>
                <iframe className="map__iframe hidden-md" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7960.387502861651!2d4.890019312232696!3d52.37068989840174!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam%2C+Netherlands!5e0!3m2!1sen!2seg!4v1456559274513" style={{border: 0}} frameBorder="0" allowFullScreen></iframe>
            </div>
        );
    }
});

module.exports = Map;