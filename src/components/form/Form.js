import React, {Fragment,useState} from 'react';
import uuid from "uuid/dist/v4"
import PropTypes from "prop-types"


const DateForm = ({createDate}) =>{

  //Crear State de Cita
  const [date,setDate]=useState({
    pet:"",
    owner:"",
    day:"",
    hour:"",
    symptom:""
  })

  //Crear State de errores
  const [error,setError]=useState(false)


  //Función que se ejecuta cada vez que el usuario escribe un input
  const handleChange = (e) =>{
    setDate({
      ...date,
      [e.target.name]: e.target.value     
    })
  }

  //extrar los valores
  const {pet,owner,day,hour,symptom} = date

  //Cuando el usuario clickea add date
  const submitDate = (e) =>{

    e.preventDefault();
       
    //Validar los campos
    if(pet.trim()==="" || owner.trim()===""|| day.trim()==="" || hour.trim()==="" || symptom.trim()===""  ) {
      setError(true)
      //agregro un return para que no se siga ejecutando el código
      return;
    }
    //Eliminar el mensaje previo
    setError(false);

    //Asignar un ID
    date.id= uuid()
    console.log(date)

    //Crear la cita
    createDate(date)

    //Reiniciar el form
    setDate({
      pet:"",
      owner:"",
      day:"",
      hour:"",
      symptom:""
    })
  }


  return (
    <Fragment>
      <h2>Create a Date</h2>

      {error ? <p className="alerta-error">Todos los campos son obligatorios</p>
      :null}
      
      <form
          onSubmit={submitDate}
      >
        <label>Patient Name</label>
        <input
            type="text"
            name="pet"
            className="u-full-width"
            placeholder="Bessie"
            onChange={handleChange}
            value={pet}
        />
        <label>Owner Name</label>
        <input
            type="text"
            name="owner"
            className="u-full-width"
            placeholder="Dron Daper"
            onChange={handleChange}
            value={owner}
        />
        <label>Date</label>
        <input
            type="date"
            name="day"
            className="u-full-width"
            onChange={handleChange}
            value={day}
        />
        <label>Hour</label>
        <input
            type="time"
            name="hour"
            className="u-full-width"
            onChange={handleChange}
            value={hour}
        />
        <textarea 
            name="symptom"
            className="u-full-width"
            placeholder="What's happening?"
            onChange={handleChange}
            value={symptom}
        ></textarea>
        <button 
            type="sumbit"
            className="u-full-width button-primary"
        >Add Date</button>  
      </form>
    </Fragment>
  )
}

DateForm.propTypes = {
  crearDate: PropTypes.func.isRequired
}
export default DateForm