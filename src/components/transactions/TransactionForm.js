import React from 'react';
import { Field, reduxForm } from 'redux-form';

class TransactionForm extends React.Component {

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

    renderInput = ({input, label, meta}) => {
        const className = `field ${meta.error && meta.touched ? 'error' : ''}`;
        return (
            <div className={className}>
                <label>{label}:</label>
                <input {...input} autoComplete="off" />
                {this.renderError(meta)}
            </div>
        );
    }

    onSubmit = formValues => {
        this.props.onSubmit(formValues);
    }

    render() {
        return (
            <form className="ui form error">
                <Field name="amount" component={this.renderInput} label="Amount" />
                <Field name="description" component={this.renderInput} label="Description" />
                <Field name="date" component={this.renderInput} label="Date" />
            </form>
        );
    }

}

const validate = (formValues) => {
    const errors = {};
    if (!formValues.amount) {
        errors.amount = 'You must enter an amount';
    }

    if (!formValues.date) {
        errors.date = 'You must enter a date';
    }

    if (!formValues.description) {
        errors.description = 'You must enter a description';
    }

    return errors;
}

export default reduxForm({
    form: 'TransactionForm',
    validate
})(TransactionForm);