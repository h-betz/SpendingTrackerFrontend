import axios from 'axios';
import React from 'react';
import CategoryList from './CategoryList';
import CategoryForm from './CategoryForm';
import Dashboard from './Dashboard';

const App = () => {
	return (
		<div className="container-fluid">
			<div className="row">
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
										<CategoryList categories={this.state.categories} onCategorySelect={this.onCategorySelect}/>
									</div>
								</div>
							</div>
						</div>
					</nav>
				</div>
				<Dashboard category={this.state.selectedCategory} />
			</div>
		</div>
	)
}

// class App extends React.Component {

// 	state = {
// 		categories: [],
// 		selectedCategory: null,
// 	};

// 	onFormSubmit = async (category) =>{
// 		category = {
// 			name: category,
// 			balance: 0
// 		}
// 		this.setState(previousState => ({
// 			categories: [...previousState.categories, category]
// 		}));
// 	}

// 	// onCategorySelect = (category) => {
// 	// 	this.setState({selectedCategory: category});
// 	// 	console.log(this.state.selectedCategory);
// 	// }

// 	render() {
// 		return (
// 			<div className="container-fluid">
// 				<div className="row">
// 					<div className="col-sm-2 col-md-3 col-lg-3 category-box">
// 						<nav id="category-nav">
// 							<div id='nav-root'>
// 								<div id="category-container">
// 									<div id="category-header">
// 										<h4><b>Categories</b></h4>
// 									</div>
// 									<div className="panel body" id="categories">
// 										<div className="card z-depth-4">
// 											<CategoryForm onSubmit={this.onFormSubmit}/>
// 										</div>
// 										<div className="list-group" id="category-list">
// 											<CategoryList categories={this.state.categories} onCategorySelect={this.onCategorySelect}/>
// 										</div>
// 									</div>
// 								</div>
// 							</div>
// 						</nav>
// 					</div>
// 					<Dashboard category={this.state.selectedCategory} />
// 				</div>
// 			</div>
// 		)
// 	}

// }

export default App;