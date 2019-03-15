import React from 'react';
import {connect} from 'react-redux';
import Modal from './Modal';

class LandingPage extends React.Component {

    render() {
        return (
            <Modal />
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isSignedIn: state.isSignedIn
    };
}

export default connect(mapStateToProps, {})(LandingPage);