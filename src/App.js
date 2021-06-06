import React,{Fragment,useState} from "react"
import DateForm from "./components/form/Form"


function App() {
  //Crear state del listado de dates
  const [dates,setDates]=useState([])

  //Funcion que tome las citas actuales y agregue la nueva
  const createDate = (date)=>{
    setDates([...dates,date])
  }
  return (
    <Fragment>
      <h1>Veterinary Clinics Managment</h1>
      <div className="container">
        <div className="row">
          <div className = "one-half column">
            <DateForm createDate={createDate}/>
          </div>
          <div className = "one-half column">
            2
          </div>
        </div>

      </div>
    </Fragment>
  );
}

export default App;
