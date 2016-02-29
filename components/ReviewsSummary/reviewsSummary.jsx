'use strict';

var React = require('react'),
    ReactDOM = require('react-dom');

var ReviewsSummary = React.createClass({
    render: function () {
        return (
            <div className="reviewsSummary">
                <div className="reviewsSummary__text">
                    <h3 className="reviewsSummary__text__title">Fabulous 8.8</h3>
                    <p className="reviewsSummary__text__details">
                        Very trendy<br/>
                        Good-sized beds<br/>
                        Fast check-in
                    </p>
                </div>
                <div className="reviewsSummary__count"><span>3,593 Guest Reviews</span></div>
            </div>
        );
    }
});

module.exports = ReviewsSummary;