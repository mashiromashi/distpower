import React, { Component } from 'react';
import './style.css';
const $ = require('jquery');


class options extends Component {

    ChangedCheckBoxForOffline() {
        var checkBoxes = $("#datatableForGeneratorBiddingPanel input[name='offered-filter-ck'][value='1']");
        if ($("#checkBoxforOffered").is(":checked")) {
            checkBoxes.prop('checked', true);
        }
        else {
            checkBoxes.prop('checked', false);
        }
    }

    ChangedCheckBoxForOffered() {
        var checkBoxes = $("#datatableForGeneratorBiddingPanel input[name='offline-filter-ck'][value='1']");
        if ($("#checkBoxforOffline").is(":checked")) {
            checkBoxes.prop('checked', true);
        }
        else {
            checkBoxes.prop('checked', false);
        }
    }

    render() {
        return (
            <div className="row Optionsform">
                <div className="col-lg-10 col-md-12">
                    <div className="row Optionsformrow">
                        <div className="col-md-4 col-sm-12">
                            <div className="row">

                                <button type="button" className="btn btn-sm btn-block btn-secondary col">Date</button>
                                <input type="date" style={{ width: '100%' }} className="col" />

                            </div>
                            <div className="row">

                                <button type="button" className="btn btn-sm btn-block col" style={{ marginTop: '0' }} disabled="disabled">Offline:200MW</button>
                                <button type="button" className="btn btn-sm btn-block col" style={{ marginTop: '0' }} disabled="disabled">Offered:180MW</button>

                            </div>
                        </div>
                        <div className="col-md-8 col-sm-12">
                            <div className="row">
                                <div className="col-4">
                                    <label className="btn btn-sm btn-block btn-secondary" htmlFor="my-file-selector" style={{ padding: '1vh' }}>
                                        <input id="my-file-selector" type="file" style={{ display: 'none' }} />
                                        Load File
                                </label>
                                </div>
                                <div className="col-4"><button type="button" className="btn btn-sm btn-block btn-secondary">Save/Save As</button></div>
                                <div className="col-4"><button type="button" className="btn btn-sm btn-block btn-success">UPDATE</button></div>
                            </div>
                            <div className="row">
                                <div className="col-4">
                                    <button type="button" className="btn btn-block btn-sm" disabled>Offline:200MW</button>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn btn-block btn-sm" disabled>Offered:180MW</button>
                                </div>
                                <div className="col-4">
                                    <button type="button" className="btn btn-block btn-sm btn-warning">SUBMIT</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-2 col-md-12">
                    <div className="row">
                        <div className="col-6 form-group">
                            <label htmlFor="checkBoxforOffered">Offered</label>
                            <input type="checkbox" className="form-control" id="checkBoxforOffered" onChange={this.ChangedCheckBoxForOffline} />
                        </div>
                        <div className="col-6 form-group">
                            <label htmlFor="checkBoxforOffline">Offline</label>
                            <input type="checkbox" className="form-control" id="checkBoxforOffline" onChange={this.ChangedCheckBoxForOffered} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default options;