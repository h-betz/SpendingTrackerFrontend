import React from 'react';
import ReactDOM from 'react-dom';
import GoogleAuth from './GoogleAuth';

const Modal = props => {
    const signUp = "Sign Up";
    const signIn = "Sign In";
    return ReactDOM.createPortal(
        <div onClick={props.onDismiss} className="ui dimmer modals visible active">
            <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                <center>            
                    <h3>Sign In</h3>
                    <GoogleAuth text={signIn}/>
                    <br />
                    Or
                    <h3>Sign Up</h3>
                    <GoogleAuth text={signUp}/>
                </center>            
            </div>
        </div>, 
        document.querySelector('#modal')
    );
};

export default Modal;