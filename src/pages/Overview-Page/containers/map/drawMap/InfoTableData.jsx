import React from 'react';
import './DrawMap.css';

const td = (props) =>{
    let classes = props.dClass;
 
    return (
        <tr className={classes}>
            <th>{props.dOne}</th>
            <td>{props.dTwo}</td>
        </tr>
    )
}

export default td;