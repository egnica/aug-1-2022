import { useState } from "react";
const Form = (props) => {

    const [buttonSwitch, setButtonSwitch] = useState(false);

    const [userName, setUserName] = useState('');
    const [userAge, setUserAge] = useState('');
    const [userYear, setUserYear] = useState('');

   

    const FormShow = () => {
        setButtonSwitch(buttonSwitch => !buttonSwitch)
    }
    const UserNameHandler = (event) => {
        setUserName(event.target.value)
    }
    const UserAgeHandler = (event) => {
        setUserAge(event.target.value)
    }
    const UserYearHandler = (event) => {
        setUserYear(event.target.value)
    }
    const UserSubmitHandler = (event) => {
        event.preventDefault();
        props.submitTransfer({
            name: userName,
            age: userAge,
            year: userYear
        })
       
     
        setButtonSwitch(buttonSwitch => !buttonSwitch)
        setUserName('');
        setUserAge('');
        setUserYear('');
    }




    return(
        <div>
            <br/>
            {!buttonSwitch &&
            <button onClick = {FormShow}>Show Form</button>
            }
                {buttonSwitch &&
                <form onSubmit = {UserSubmitHandler}>
                    <label>Enter Name: </label>
                    <input onChange = {UserNameHandler} value = {userName}/>
                    <br/><br/>
                    <label>Enter Age:</label>
                    <input onChange = {UserAgeHandler} value = {userAge}/>
                    <br/><br/>
                    <label>Enter Year:</label>
                    <input onChange = {UserYearHandler} value = {userYear}/>
                    <br/><br/>
                    <button>Submit</button>
                </form>
            }
        </div>
    )

}
export default Form; 