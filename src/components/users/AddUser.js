import Card from "../UI/Card";
import React, {useState, useRef} from "react";
import classes from './Adduser.module.css';
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = props => {
    const nameInputRef = useRef();
    const ageInputRef = useRef();

    const addUserHandler = event => {
        event.preventDefault();
        const enteredInputName = nameInputRef.current.value
        const enteredUserAge = ageInputRef.current.value

        if(enteredInputName.trim().length === 0 || enteredUserAge.trim().length === 0){
            setError({
                title: 'Invalid Input',
                message: 'Please enter a valid name and age (non-empty values).'
            });
            return;
        }
        if(enteredUserAge < 1){
            setError({
                title:'Invalid Age',
                message:'Please enter a valid age (> 0)'
            })
            return;
        }
        props.onAddUser(enteredInputName, enteredUserAge)
        nameInputRef.current.value = ''
        ageInputRef.current.value = ''
        
    }

    const [error, setError] = useState();

    const errorHandler = () => {
        setError(null)
    }

return (
        <div>
            { error &&
                <ErrorModal 
                title={error.title}
                 message={error.message}
                 onConfirm={errorHandler}/>
            }
            
            <Card className={classes.input}>
            <form onSubmit={addUserHandler}>
                <label htmlFor="username"> UserName</label>
                <input 
                id="username"
                type="text"
                ref={nameInputRef} 
                />

                <label htmlFor="age"> Age (years)</label>    
                <input
                id="age"
                type='number'
                ref={ageInputRef}
                />     

                <Button type="submit" >Add user</Button>
            </form>
            </Card>
        </div>
        
    );
}

export default AddUser;