import React from 'react';
import { connect } from 'react-redux';
import { onAuthSubmit } from '../../actions';
import LoginForm from './LoginForm';


class LoginCreate extends React.Component {

    onSubmit = formValues => {
        this.props.onAuthSubmit(formValues);
    }

    render() {
        return (
            <div>
                <h3>Login</h3>
                <LoginForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, {onAuthSubmit})(LoginCreate);