import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { onExpenseFormSubmit } from '../actions';

class ExpenseForm extends React.Component {

    state = {transactions: null};

    onSubmit(formValues) {
        console.log(formValues);
    }
    
    renderInput({input, label, meta}) {
        return (
            <div className="field">
                <label>{label}</label>
                <input {...input}/>
                <div>
                    {meta.error}
                </div>
            </div>
        )
    }

    render() {
		return (
        <form className="ui form" onSubmit={this.props.handleSubmit(this.onSubmit)} >
            <Field name="expenseDescription" component={this.renderInput} label="Description"/>
            <Field name="expenseValue" component={this.renderInput} label="Amount" />
            <Field name="expenseDate" component={this.renderInput} label="Date" />
            <button className="ui button primary">Submit</button>
        </form>
        )
	}

}

// Validate user input
const validate = (formValues) => {
    const errors = {};
    if (!formValues.expenseDescription) {
        errors.expenseDescription = "You must enter an expense description";
    }
    if (!formValues.expenseValue) {
        errors.expenseValue = "You must enter an expense amount";
    }
    if (!formValues.expenseDate) {
        errors.expenseDate = "You must enter a valid expense date";
    }
    return errors;
}

export default reduxForm({
    form: 'expenseForm',
    validate
})(ExpenseForm);