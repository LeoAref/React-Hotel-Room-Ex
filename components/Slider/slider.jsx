'use strict';

var React = require('react'),
    ReactDOM = require('react-dom');

var Slider = React.createClass({
    render: function () {
        return (
            <div className="slider">
                <img className="slider__mainImg" src="http://lorempixel.com/750/420/"/>
                <ul className="slider__thums">
                    <li className="slider__thums__single"><img src="http://lorempixel.com/100/100/"/></li>
                    <li className="slider__thums__single"><img src="http://lorempixel.com/99/99/"/></li>
                    <li className="slider__thums__single slider__thums__single--active"><img src="http://lorempixel.com/98/98/"/></li>
                    <li className="slider__thums__single"><img src="http://lorempixel.com/97/97/"/></li>
                    <li className="slider__thums__single"><img src="http://lorempixel.com/96/96/"/></li>
                    <li className="slider__thums__single"><img src="http://lorempixel.com/95/95/"/></li>
                    <li className="slider__thums__single"><img src="http://lorempixel.com/94/94/"/></li>
                    <li className="slider__thums__single"><img src="http://lorempixel.com/93/93/"/></li>
                    <li className="slider__thums__single"><img src="http://lorempixel.com/92/92/"/></li>
                    <li className="slider__thums__single"><img src="http://lorempixel.com/91/91/"/></li>
                </ul>
            </div>
        );
    }
});

module.exports = Slider;