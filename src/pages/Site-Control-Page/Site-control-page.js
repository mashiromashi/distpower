import React from 'react';
import Left from './components/Left';
import Right from './components/Right';
import './Site-control-page.css';

class siteControl extends React.Component{
  render(){
    return (
      <div className="row SiteControlPage">
        <div className="col-md-3">
          <Left/>
        </div>
        <div className="col-md-9">
          <Right/>
        </div>
    </div>
    )
  }
}

export default siteControl;