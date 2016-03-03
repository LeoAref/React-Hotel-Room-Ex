'use strict';

var React = require('react');

// Components
var Modal = require('../Common/modal.jsx');

var Facilities = React.createClass({
    render: function () {
        var data = this.props.data,
            facilitiesList = data.map(function(facility, index) {
                return (
                    <li key={index} className="facilities__list__item"><i className={facility.class}></i>{facility.name}</li>
                )
            }),
            modal = {
                header: 'Room Facilities',
                body: facilitiesList,
                buttons: null,
                id: 'facilitiesModal'
            };
        
        return (
            <div className="facilities">
                <ul className="facilities__list clearfix">
                    {facilitiesList.slice(0, 5)}
                    <li className="facilities__list__all" data-toggle="modal" data-target="#facilitiesModal">View all Facilities</li>
                </ul>

                <Modal modal={modal} />
            </div>
        );
    }
});

module.exports = Facilities;