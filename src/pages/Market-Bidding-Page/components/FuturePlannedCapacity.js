import React from 'react';
import './FuturePlannedCapacity.css';
import FlexItem from './FuturePlannedCapacityFlexItem';

const FuturePlan = (props) => {
    var futureDateArray = props.futureDate;

    return (
        <div className="flexContainer">
            {futureDateArray.map((value, index) => {
                return <FlexItem key={index} date={value} />;
            })}
        </div>
    )
}

export default FuturePlan;