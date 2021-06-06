import React from 'react';
import PropTypes from "prop-types"

const Date = ({date,handleOnDelete}) => 
   (<div className="cita" >
     <p>Pet:<span>{date.pet}</span></p>
     <p>Owner:<span>{date.owner}</span></p>
     <p>Day:<span>{date.day}</span></p>
     <p>Hour:<span>{date.hour}</span></p>
     <p>Symptom:<span>{date.symptom}</span></p>
     <button 
        className="button eliminar u-full-width"
        onClick={()=> handleOnDelete(date.id) }
        >
       Eliminar &times;
     </button>
   </div> )

 Date.propTypes={
   date: PropTypes.object.isRequired,
   handleOnDelete: PropTypes.func.isRequired
 }
export default Date;