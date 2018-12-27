import React from 'react';
import Category from './Category';
import CategoryForm from './CategoryForm';

class App extends React.Component {



	constructor(props) {
		super(props);
		this.state = {
			categories: [],
			category: ""
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount() {
		console.log('Component did mount');
	}

	componentDidUpdate() {
		console.log('Component updated');
	}

	renderContent() {
		if (this.state.categories) {
			for (const [i, category] of this.state.categories.entries()) {
				const balance = category.balance;
				const name = category.name;
				return <Category name={name} balance={balance} />;
			}
		}
	}

	handleChange(event) {
		this.setState({category: event.target.value})
	}

	handleSubmit(event) {
		event.preventDefault();
		this.setState({
			categories: [...this.state.categories, this.state.category]
		})
	}

	render() {
		return (
			<div className="col-sm-2 col-md-3 col-lg-3 category-box">
				<nav id="category-nav">
					<div id='root'>
						<div id="category-container">
							<div id="category-header">
								<h4><b>Categories</b></h4>
							</div>
							<div className="panel body" id="categories">
								<div className="card z-depth-4">
									<div>
									  <form onSubmit={this.handleSubmit} className="fixed" method="POST" id="category-form">
									    <div className="form-group" id="form-group-div">
									        <input className="form-control category-input" placeholder="Food" type="text" id="category-input" autoComplete="off" value={this.state.value} onChange={this.handleChange}/>
									    </div>
									  </form>
									</div>
								</div>
								<div className="list-group" id="category-list">
									{this.renderContent()}
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