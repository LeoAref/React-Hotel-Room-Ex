'use strict';

var React = require('react');

// Components
var Modal = require('../Common/modal.jsx'),
    DayPicker = require('react-day-picker').default,
    DateUtils = require('react-day-picker').DateUtils,
    moment = require('moment');

var Search = React.createClass({
    getInitialState: function () {
        return ({
            from: null,
            to: null,
            formFieldInvalid: null,
            toFieldInvalid: null
        });
    },
    openPickerModal: function () {
        $('#pickerModal').modal();
    },
    handleDayClick: function (e, day, modifiers) {
        var range = DateUtils.addDayToRange(day, this.state);
        this.setState(range, function () {
            this.validForm();
        });
    },
    validForm: function () {
        this.setState({
            formFieldInvalid: this.state.from === null,
            toFieldInvalid: this.state.to === null
        });
        
        return this.state.from && this.state.to;
    },
    handleFormSubmit: function (e) {
        e.preventDefault();
        
        if(this.validForm()) {
            this.setState({
                loading: true
            });
            
            setTimeout(function () {
                
                this.setState({
                    loading: false
                });
                
                // Set searchResults into the root component
                this.props.setSearchResults([]);
                
            }.bind(this), 3000);
        }
    },
    handleReset: function () {
        this.setState({
            from: null,
            to: null,
            formFieldInvalid: null,
            toFieldInvalid: null
        });
    },
    isSelected: function (that, state, day) {
        return DateUtils.isDayInRange(day, state);
    },
    render: function () {
        var data = this.props.data,
            state = this.state,
            openPickerModal = this.openPickerModal,
            handleDayClick = this.handleDayClick,
            handleFormSubmit = this.handleFormSubmit,
            handleReset = this.handleReset,
            websites = data.map(function(website, index) {
                return (
                    <div key={index} className="search__footer__websites__single col-xs-4"><div className="content"><img src={website.img}/></div></div>
                )
            }),
            websitesModal = {
                header: 'Offer Websites',
                body: websites,
                buttons: null,
                id: 'websitesModal'
            },
            pickerModal = {
                header: 'Please pick from and to dates',
                body: (
                    <div>
                        <DayPicker numberOfMonths={ 2 } modifiers={{disabled: DateUtils.isPastDay, selected: this.isSelected.bind(null, this, state)}} 
                            onDayClick={handleDayClick}/>
                    </div>
                ),
                buttons: (
                    <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={handleReset}>Reset & Close</button>
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Save changes</button>
                    </div>
                ),
                id: 'pickerModal'
            };
        
        return (
            <div className={"search " + (state.loading ? 'search--loading' : '')}>
                <h2 className="search__title">Select dates to view all prices</h2>
                <h5 className="search__subTitle">Park Plaza Victoria Amsterdam</h5>
                <form className="search__form" onSubmit={handleFormSubmit}>
                    <div className="row form-group">
                        <div className="col-xs-6">
                            <div className={"customField " + (state.formFieldInvalid ? 'customField--error' : '')} onClick={openPickerModal}>
                                <label className="fa fa-calendar" htmlFor="checkIn"></label>
                                <input className="form-control" id="checkIn" placeholder="Check-in" 
                                    onChange={openPickerModal} value={state.from ? moment(state.from).format('L') : ''}/>
                                <label className="fa fa-sort" htmlFor="checkIn"></label>
                            </div>
                        </div>
                        <div className="col-xs-6">
                            <div className={"customField " + (state.toFieldInvalid ? 'customField--error' : '')} onClick={openPickerModal}>
                                <label className="fa fa-calendar" htmlFor="checkOut"></label>
                                <input className="form-control" id="checkOut" placeholder="Check-out" 
                                    onChange={openPickerModal} value={state.to ? moment(state.to).format('L') : ''}/>
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
                        {websites.slice(0, 3)}
                    </div>
                    <h5 className="search__footer__others" data-toggle="modal" data-target="#websitesModal">and 4 other websites!</h5>
                </div>
                
                <Modal modal={websitesModal} />
                <Modal modal={pickerModal} />
            </div>
        );
    }
});

module.exports = Search;