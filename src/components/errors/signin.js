import React from 'react';

const Signin = (props) => {
    const { error } = props;
    return(
        <div style={style}>
            <p>{ error }</p>
        </div>
    );
}

const style = {
    backgroundColor: '#d64242',
    width: '100%',
    margin: 'auto',
    color: '#fff',
    borderRadius: '5px',
    padding: '10px',
}
export default Signin;
