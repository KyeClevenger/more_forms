// collaborated with josh, richard, anthony, daisy, viviana, christian, and eric

import React from 'react';

const Display =(props)=> {
    const { firstName, lastName,email, password, confirmPassword } = props
    return (
        <div>
            <div>
                <label>First Name: {firstName}</label>
            </div>
            <div>
                <label>Last Name: {lastName}</label>
            </div>
            <div>
                <label>Email: {email}</label>
            </div>
            <div>
                <label>Password: {password}</label>
            </div>
            <div>
                <label>Confirm Password: {confirmPassword}</label>
            </div>
        </div>
    )
}

export default Display;