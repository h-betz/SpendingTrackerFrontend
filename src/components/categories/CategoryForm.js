import React from 'react';
import { Field, reduxForm } from 'redux-form';

class CategoryForm extends React.Component {

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
				<input {...input} placeholder="Category Name" autoComplete="off" />
				{this.renderError(meta)}
			</div>
		);
	};

	onSubmit = formValues => {
		this.props.onSubmit(formValues);
	}

	render() {
		return (
				<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form error">
					<Field name="categoryName" component={this.renderInput} />
				</form>
			)
	}
}

// Validate form values
const validate = (formValues) => {
	const errors = {};

	if (!formValues.categoryName) {
		// User did not enter category name
		errors.categoryName = "You must enter a category name";
	}

	// TODO check repeat category names
	return errors;
};

export default reduxForm({
	form: 'categoryForm',
	validate
})(CategoryForm);