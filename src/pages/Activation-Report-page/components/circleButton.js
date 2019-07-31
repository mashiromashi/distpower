import React from 'react';

const BtnStyle = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 10,
    margin: 'auto',
    width: '80%',
    height: '50%',
    borderRadius: '50%',
    fontSize: 12,
    fontWeight: 'bold'
}

const circleButton = (props) => {
    let disable = "";

    if (props.lock === true) {
        disable = "disabled";
    }

    return (
        <div>
            <button className={props.classes} style={BtnStyle} disabled={disable}>
                {/* {props.btnValue}  {props.children}*/}
                {props.lock ? props.children : props.btnValue}
            </button>
        </div>
    );
}

export default circleButton;