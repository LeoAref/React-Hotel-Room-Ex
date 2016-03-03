'use strict';

var React = require('react');

var Modal = React.createClass({
    render: function () {
        var modal = this.props.modal;
        
        return (
            <div className="modal fade" id={modal.id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                            <h5 className="modal-title" id="myModalLabel">{modal.header}</h5>
                        </div>
                        <div className="modal-body clearfix">
                            {modal.body}
                        </div>
                        {modal.buttons}
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Modal;