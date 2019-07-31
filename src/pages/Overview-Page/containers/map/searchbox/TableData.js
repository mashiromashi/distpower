import React from 'react';
import './TableData.css';

   
    
 const td = (props) => {
    let classes = props.dClass;
 
    return (
        <tr className={classes}>
            <td>{props.dOne}</td>
            <td>{props.dTwo}</td>
        </tr>
    ) ;
 
}
export default td;