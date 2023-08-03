// collaborated with josh, richard, anthony, daisy, viviana, christian, and eric

import React, { useState } from 'react';
import Display from './Display'

const UserForm = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <div>
        <form>
            <div>
                <label>Firstname: </label>
                <input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
                {
                    firstName.length < 2 ? <p style={{color:"red"}}>First Name must be at least 2 characters. </p>:<p></p>
                }
            </div>
            <div>
                <label>Lastname: </label>
                <input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
            </div>
                {
                    lastName.length < 2 ? <p style={{color:"red"}}>Last Name must be at least 2 characters. </p>:<p></p>
                }
            <div>
                <label>Email Address: </label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
                {
                    email.length < 5 ? <p style={{color:"red"}}>Email must be at least 5 characters. </p>:<p></p>
                }
            <div>
                <label>Password: </label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
                {
                    password.length < 8 ? <p style={{color:"red"}}>Password must be at least 8 characters. </p>:<p></p>
                }
            <div>
                <label>Confirm Password: </label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
            </div>
                {
                    confirmPassword.length < 8 ? <p style={{color:"red"}}>Password must be at least 8 characters. </p>:<p></p>
                }
                {
                    password !== confirmPassword? <p style={{color:"red"}}>Password and confirm password must match </p>:<p></p>
                }
        </form>
        <Display firstName={firstName} lastName={lastName} email={email} password={password} confirmPassword={confirmPassword}/>
        </div>
    );
};

export default UserForm;