import React,{Fragment,useState,useEffect} from "react"
import DateForm from "./components/form/Form"
import Date from "./components/date/Dates"



function App() {

  //Citas en localStorage
  let initialDates= JSON.parse(localStorage.getItem("dates"))
  if(!initialDates) {
    initialDates = []
  }
  //Crear state del listado de dates
  const [dates,setDates]=useState(initialDates)

  //Use Effect para realizar ciertas operaciones cuando el state cambia
  useEffect(()=>{
    if(initialDates){
      localStorage.setItem("dates",JSON.stringify(dates))
    } else {
      localStorage.setItem("dates",JSON.stringify([]))
    }
  },[dates,initialDates])

  //Funcion que tome las citas actuales y agregue la nueva
  const createDate = (date)=>{
    setDates([...dates,date])
  }

  //Funcion que elimina una cita por su id
  const handleOnDelete = id =>{
    const newDates = dates.filter(cita=>cita.id !== id)
    setDates(newDates)
  }

  //Mensaje Condicional
  const title = dates.length === 0 ? "NO DATES" : "Dates" 

  return (
    <Fragment>
      <h1>Veterinary Clinics Managment</h1>
      <div className="container">
        <div className="row">
          <div className = "one-half column">
            <DateForm createDate={createDate}/>
          </div>
          <div className = "one-half column"> 
            <h2>{title}</h2>
            {dates.map(date=>(
              <Date key={date.id} date={date} handleOnDelete={handleOnDelete}/>
            ))}
          </div>
        </div>

      </div>
    </Fragment>
  );
}

export default App;
