import React, { useState } from 'react'

const Test = () => {
    const [enteredValues, setEnteredValues] = useState({
        email: '',
        firstname: '',
        lastname: ''
    })

    const handleOnChange = (identifier, value) => {
        setEnteredValues((prevValues) => ({
            ...prevValues,
            [identifier]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(enteredValues);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='email' name='email' onChange={(event) => handleOnChange('email', event.target.value)}
                    value={enteredValues.email}
                />
                <input type='text' name='firstname' onChange={(event) => handleOnChange('firstname', event.target.value)}
                    value={enteredValues.firstname}
                />
                <input type='text' name='lastname' onChange={() => handleOnChange('lastname', event.target.value)}
                    value={enteredValues.lastname}
                />
                <button type='button' >Submit</button>
            </form>
        </div>
    )
}

export default Test