'use strict';

var React = require('react');

var Slider = React.createClass({
    getInitialState: function () {
        return ({
            activeThumb: 3
        });
    },
    setImage: function (index) {
        var data = this.props.data;
        
        /*
         * Later we will get {large} image src,
         * and replace it with the {main} image src
         * but we don't have actual data at this stage
         */
        
        this.setState({
            activeThumb: index
        });
    },
    render: function () {
        var data = this.props.data,
            state = this.state,
            setImage = this.setImage,
            thums = data.thumbnails.map(function(thumb, index) {
                return (
                    <li key={index} className={"slider__thums__single " + (state.activeThumb === index ? 'slider__thums__single--active' : '')}
                        onClick={setImage.bind(null, index)}><img src={thumb.small}/></li>
                )
            });
        
        return (
            <div className="slider">
                <img className="slider__mainImg" src={data.main}/>
                <ul className="slider__thums">
                    {thums}
                </ul>
            </div>
        );
    }
});

module.exports = Slider;