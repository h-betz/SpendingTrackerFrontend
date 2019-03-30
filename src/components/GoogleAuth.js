import React from 'react';
import {connect} from 'react-redux';
import { Redirect } from 'react-router-dom'
import {signIn, signOut, verifyUser} from '../actions';
// import CSRFToken from '../csrftoken';
import history from '../history';

class GoogleAuth extends React.Component {

    // Initialize our state
    state = {isSignedIn: null};

    // Perform some Google auth setup when our application is ready
    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '304267901296-2umtbmpc8iv22lu8inve47n9tqjt6gvs.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
    }

    /**
     * After user signs in, verify that the token id and user id
     * are valid. If so, then fetch the user's data (categories)
     */
    onAuthChange = isSignedIn => {
        if (isSignedIn) {
            let userId = this.auth.currentUser.get().getId();
            let tokenId = this.auth.currentUser.get().getAuthResponse()['id_token'];
            this.props.signIn();
            // TODO: After verifying user, fetch user data
            this.props.verifyUser(userId, tokenId);
            // history.push('/dashboard');
        } else {
            this.props.signOut();
        }
    };

    // Handle the user sign in click
    onSignInClick = () => {
        this.auth.signIn();
    };

    // Handle the user sign out click
    onSignOutClick = () => {
        this.auth.signOut();
    };

    // Generates the Google sign in/out button based on the user's status
    renderAuthButton() {
        if (this.props.isSignedIn == null) {
            return null;
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui blue google button" onClick={this.onSignOutClick}>
                    <i className="google icon" />
                    Sign Out
                </button>
            );
        } else {
            const text = this.props.text;
            return (
                <button className="ui blue google button" onClick={this.onSignInClick}>
                    <i className="google icon" />
                    {text}
                </button>
            );
        }
    }

    // Render auth app data
    render() {
        return (
            <div>
                {/* <CSRFToken /> */}
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {isSignedIn: state.auth.isSignedIn};
};

export default connect(
    mapStateToProps, {
        signIn,
        signOut,
        verifyUser,
    }
)(GoogleAuth);