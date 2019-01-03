import axios from 'axios';
import React from 'react';
import CategoryList from './CategoryList';
import CategoryForm from './CategoryForm';

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {
			categories: [],
		};
		this.onFormSubmit = this.onFormSubmit.bind(this);
	}

	onFormSubmit(category) {
		category = {
			name: category,
			balance: 0
		}
		this.setState(previousState => ({
			categories: [...previousState.categories, category]
		}));
	}

	render() {
		return (
			<div className="col-sm-2 col-md-3 col-lg-3 category-box">
				<nav id="category-nav">
					<div id='nav-root'>
						<div id="category-container">
							<div id="category-header">
								<h4><b>Categories</b></h4>
							</div>
							<div className="panel body" id="categories">
								<div className="card z-depth-4">
									<CategoryForm onSubmit={this.onFormSubmit}/>
								</div>
								<div className="list-group" id="category-list">
									<CategoryList categories={this.state.categories}/>
								</div>
							</div>
						</div>
					</div>
				</nav>
			</div>
		)
	}

}

export default App;