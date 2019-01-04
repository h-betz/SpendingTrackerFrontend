import React from 'react';

class CategoryForm extends React.Component {

	state = {category: ''};

	onFormSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.category);
	};

	render() {
		return (
	      <div className="card z-depth-4">
	        <div>
	          <form onSubmit={this.onFormSubmit} className="fixed" id="category-form">
	            <div className="form-group" id="form-group-div">
									<input className="form-control category-input" 
										placeholder="Food" 
										type="text" 
										id="category-input" 
										autoComplete="off"
										onChange={(e) =>
											this.setState({category: e.target.value})
										} 
									/>
	            </div>
	          </form>
	        </div>
	      </div>
      	)
	}
}

export default CategoryForm;