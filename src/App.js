import Form from './Form/Form';
import './App.css';
import { useState } from 'react';


function App() {

  const [userSubmitObject, setUserSubmitObject] = useState({ person : [] })


  const UserSubmitHandler = (value) => {
    console.log(value);
    let personObject = userSubmitObject["person"];
    personObject.push(value);
    setUserSubmitObject({person: personObject});
  }

  return (
    <div className="App">
      <Form submitTransfer = {UserSubmitHandler}/>
      {
        userSubmitObject.person.map(
          (item, index) => 
          <div key={index}>
            <p>{item.name}</p>
            <p>{item.age}</p>
            <p>{item.year}</p>
          </div>
        )
      }

    </div>
  );
}

export default App;
