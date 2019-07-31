import React from 'react';
import './Activation-Report-page.css';
import EMCNemReport from './containers/EMCNemReport/EMCNemReport';
import SettlementReport from './containers/SettlementReport/SettlementReport';
import ServieOrderReport from './containers/ServiceOrderReport/ServiceOrderReport';
import SiteAvilibilityReport from './containers/SiteAvailibilityReport/SiteAvailibilityReport';
import QuarterlyRevenueReport from './containers/QuarterlyRevenueReport/QuarterlyRevenueReport';
import MscpReport from './containers/MscpReport/MscpReport';
import Activation from './containers/Activation/Activation';
import Deactivation from './containers/Deactivation/Deactivation';
import ActivationReport from './containers/ActivationReport/ActivationReport';
import DateTime from '../../common/js/DataTime';
import GaugeChart from '../Market-Bidding-Page/components/gaugeChart';


class activationReport extends React.Component{
  render(){
    return (
      <div className="row activationReport">
          <div className="col-md-8">
                  <div className="card-columns">
                    <div className="card border-primary">
                      <div className="card-header text-center bg-primary">EMC's NEMS REPORT</div>
                            <div className="card-body">
                              <EMCNemReport/>
                            </div>
                    </div>
                    <div className="card border-info">
                      <div className="card-header text-center bg-info">SETTLEMENT REPORT</div>
                      <div className="card-body">
                            <SettlementReport/>
                      </div>
                    </div>
                    <div className="card border-primary">
                      <div className="card-header text-center bg-primary">SERVICE ORDER REPORT</div>
                      <div className="card-body">
                          <ServieOrderReport/>
                      </div>
                    </div>
                    <div className="card border-info">
                      <div className="card-header text-center bg-info">SITE AVAILBILITY REPORT</div>
                      <div className="card-body">
                          <SiteAvilibilityReport/>
                      </div>
                    </div>
                    <div className="card border-primary">
                      <div className="card-header text-center bg-primary">QUARTERLY REVENUE REPORT</div>
                      {/* <div className="card-body" style={{height:204}}> */}
                      <div className="card-body" >
                          <QuarterlyRevenueReport/>
                      </div>
                    </div>
                    <div className="card border-warning">
                      <div className="card-header text-center bg-warning">MSCP REPORT</div>
                      <div className="card-body">
                        <MscpReport/>
                      </div>
                    </div> 
                </div>
          </div>
          <div className="col-md-4 col-sm-12">
                   {/* <div className="GaugeChart"></div> */}
                   <div className="card border-light gaugeChart">
                      <div className="card-header" style={{color:'black'}}>Date : <DateTime/></div>
                      <div className="card-body" style={{padding:0}}>
                      <span className="badge badge-pill badge-light" style={{margin:'10px 0px 0px 10px',border:'1px solid'}}>
                            118<br/><small>Number of sites</small>
                      </span>
                          <GaugeChart paddingBottom='30'/>
                      </div>
                    </div>
                    <div className="card border-danger mb-0">
                      <div className="card-header text-center bg-danger">ACTIVATION</div>
                      <div className="card-body">
                        <Activation/>
                      </div>
                    </div>
                    <div className="card border-primary mb-0">
                      <div className="card-header text-center bg-primary">DE-ACTIVATION</div>
                      <div className="card-body">
                        <Deactivation/>
                      </div>
                    </div>
                    <div className="card border-success mb-2">
                      <div className="card-header text-center bg-success">ACTIVATION REPORT</div>
                      <div className="card-body">
                        <ActivationReport/>
                      </div>
                    </div> 
          </div>
        </div>
    )
  }
}

export default activationReport;