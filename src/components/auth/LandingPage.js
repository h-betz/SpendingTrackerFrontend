import React from 'react';
import {connect} from 'react-redux';
import LoginCreate from './LoginCreate';
import Modal from '../Modal';
import history from '../../history';

class LandingPage extends React.Component {

    render() {
        return (
            <div>
                <LoginCreate />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.isSignedIn
    };
}

export default connect(mapStateToProps, {})(LandingPage);