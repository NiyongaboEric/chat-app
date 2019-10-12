import React from 'react';
import { Redirect } from 'react-router-dom';

const Signout = () => {
    localStorage.clear('token');
    return (
        <Redirect to="/signin"/>
    );
}

export default Signout;
