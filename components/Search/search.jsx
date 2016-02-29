'use strict';

var React = require('react'),
    ReactDOM = require('react-dom');

var Search = React.createClass({
    render: function () {
        return (
            <div className="search">
                <h2 className="search__title">Select dates to view all prices</h2>
                <h5 className="search__subTitle">Park Plaza Victoria Amsterdam</h5>
                <form className="search__form">
                    <div className="row form-group">
                        <div className="col-xs-6">
                            <div className="customField">
                                <label className="fa fa-calendar" htmlFor="checkIn"></label>
                                <input className="form-control" id="checkIn" placeholder="Check-in"/>
                                <label className="fa fa-sort" htmlFor="checkIn"></label>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className="customField">
                                <label className="fa fa-calendar" htmlFor="checkOut"></label>
                                <input className="form-control" id="checkOut" placeholder="Check-out"/>
                                <label className="fa fa-sort" htmlFor="checkOut"></label>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <div className="customField select">
                            <label className="fa fa-users" htmlFor="selectField"></label>
                            <select className="form-control" id="selectField">
                                <option>2 Guests, 1 Room</option>
                                <option>3 Guests, 1 Room</option>
                                <option>4 Guests, 2 Rooms</option>
                            </select>
                            <label className="fa fa-sort" htmlFor="selectField"></label>
                        </div>
                    </div>
                    <button className="btn">Compare all prices</button>
                </form>
                <div className="search__footer">
                    <h5 className="search__footer__title">The best prices are offered by:</h5>
                    <div className="search__footer__websites clearfix">
                        <div className="col-xs-4"><div className="content"><img src="http://logonoid.com/images/hotels-com-logo.png"/></div></div>
                        <div className="col-xs-4"><div className="content"><img src="http://r-ec.bstatic.com/static/img/tfl/group_logos/logo_rentalcars/6bc5ec89d870111592a378bbe7a2086f0b01abc4.png"/></div></div>
                        <div className="col-xs-4"><div className="content"><img src="http://r-ec.bstatic.com/static/img/tfl/group_logos/logo_opentable/a4b50503eda6c15773d6e61c238230eb42fb050d.png"/></div></div>
                    </div>
                    <h5 className="search__footer__others">and 4 other websites!</h5>
                </div>
            </div>
        );
    }
});

module.exports = Search;