import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { onCategoryFormSubmit } from '../../actions';

class CategoryForm extends React.Component {

	state = {category: ''};

	// Handle submit
	onSubmit(formValues) {
		console.log(formValues);
	}

	renderInput({input, meta}) {
		return (
			<div className="field">
				<input {...input} placeholder="Category Name"/>
			</div>
		);
	}

	render() {
		return (
				<form onSubmit={this.props.handleSubmit(this.onSubmit)} className="ui form">
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