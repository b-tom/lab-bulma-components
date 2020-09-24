import React from 'react';
import Nav from '../navbar/Navbar.js';
import FormField from '../formfield/FormField.js';
import CoolButton from '../coolbutton/CoolButton';

export default function Login() {
    return (
        <div>
            <Nav/>
            <FormField 
                label="Name" 
                type="text" 
                placeholder="e.g Alex Smith" 
            />
            <FormField 
                label="Email" 
                type="email" 
                placeholder="e.g. alexsmith@gmail.com" 
            />
            <FormField 
                label="Password" 
                type="password" 
                placeholder="****" 
            />
            <CoolButton isSmall isSuccess>
                Submit
            </CoolButton>
        </div>
    )
}
