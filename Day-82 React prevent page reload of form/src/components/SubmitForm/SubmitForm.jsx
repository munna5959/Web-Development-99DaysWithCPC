import React from 'react';

const SubmitForm = () => {

    const submitForm = (e) => {
        e.preventDefault();
        console.log(e.target.text.value);
    }

    const nameText = (e) => {
        console.log(e.target.value);
    }

    const emailInput = (e) => {
        console.log(e.target.value);
    }

    const passwordInput = (e) => {
        console.log(e.target.value);
    }

    return (
        <div>
            <form onSubmit={submitForm}>
                <input onChange={nameText} type="text" name="text" /> <br />
                <input onChange={emailInput} type="email" name="email" /> <br />
                <input onChange={passwordInput} type="password" name="password" /> <br />
                <input type="submit" name='submit' value="Submit" />
            </form>
        </div>
    );
}

export default SubmitForm;
