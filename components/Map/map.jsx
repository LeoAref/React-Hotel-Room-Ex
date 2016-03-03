'use strict';

var React = require('react');

var Map = React.createClass({
    render: function () {
        var mapUrl = this.props.mapUrl;
        
        return (
            <div className="map">
                <h5 className="map__toggle visible-md"><button className="btn"><i className="fa fa-map-marker"></i>Show on map</button></h5>
                <iframe className="map__iframe hidden-md" src={mapUrl} style={{border: 0}} frameBorder="0" allowFullScreen></iframe>
            </div>
        );
    }
});

module.exports = Map;