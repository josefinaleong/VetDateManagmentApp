import React from 'react';

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

 
export default Date;