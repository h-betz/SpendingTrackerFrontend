import React from 'react';
import { Field, reduxForm } from 'redux-form';
import GoogleAuth from '../GoogleAuth';

class LoginForm extends React.Component {

    // Shows the errors
	renderError({error, touched}) {
		if (touched && error) {
			return (
				<div className="ui error message">
					<div className="header">
						{error}
					</div>
				</div>
			);
		}
	}

	renderInput = ({input, meta}) => {
		const className = `field ${meta.error && meta.touched ? 'error': ''}`;
		return (
			<div className={className}>
				<input {...input} placeholder="Username" autoComplete="off" />
                <input {...input} placeholder="Password" autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

    obSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <div>
                <center>
                    <div>
                        <form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
                            <Field name="username" component={this.renderInput} />
                            <Field name="password" component={this.renderInput} />
                        </form>
                    </div>
                    <GoogleAuth text="Sign In" />
                    {/* <center>
                        <div onClick={(e) => e.stopPropagation()} className="ui standard modal visible active">
                            <br />
                            <GoogleAuth text="Sign In" />
                            <br />
                            Or
                            <br />
                            <GoogleAuth text="Sign Out" />
                            <br />
                        </div>
                    </center> */}
                </center>            
            </div>
        )
    }

}

const validate = (formValues) => {
    const errors = {};

	if (!formValues.username) {
		// User did not enter user name
		errors.username = "You must enter a user name";
    }
    
    if (!formValues.password) {
        errors.password = "You must enter a password";
    }

	// TODO check repeat user names
	return errors;
}

export default reduxForm({
    form: 'loginForm',
    validate
})(LoginForm);