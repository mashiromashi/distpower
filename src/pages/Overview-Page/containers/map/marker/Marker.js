import React from 'react';
import './Marker.css';



class Marker extends React.Component{

    render(){
        let classes = "fa fa-sun-o Marker";
        if(this.props.status === 'standbyin'){
            classes += " standbyInMarket";
        }
        if(this.props.status === 'standbyoff'){
            classes += " standbyOffMarket";
        }
        if(this.props.status === 'activated'){
            classes += " activated";
        }
        if(this.props.status === 'alerts'){
            classes += " alerts";
        }
        if(this.props.status === 'offline'){
            classes += " offline";
        }
        return (
            // <div className={classes}>
            //     {/* {props.text} */}
            //     <i className="fa fa-bolt fa-1"></i>
            // </div>
            //<i className="fa fa-sun-o fa-lg"></i>
            <i className={classes} title="Google Map"></i>
        )
    }
}


export default Marker;