import React from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { onCategoryFormSubmit } from '../actions';

class CategoryForm extends React.Component {

	state = {category: ''};

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.category);
		this.setState({category: ''});
		this.categoryForm.reset();
	};

	renderInput({input}) {
		return <input {...input}/>;
	}

	render() {
		return (
	      <div className="card z-depth-4">
	        <div>
						{/* <form onSubmit={this.onFormSubmit} className="fixed" id="category-form" ref={(el) => this.categoryForm = el}> */}
						<form>
							<Field name="categoryName" component={this.renderInput} />
	            {/* <div className="form-group" id="form-group-div">
									<input className="form-control category-input" 
										placeholder="Food" 
										type="text" 
										id="category-input" 
										autoComplete="off"
										onChange={(e) =>
											this.setState({category: e.target.value})
										} 
									/>
	            </div> */}
	          </form>
	        </div>
	      </div>
			)
	}
}

export default reduxForm({
	form: 'categoryForm'
})(CategoryForm);