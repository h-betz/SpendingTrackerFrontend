import React from 'react';
import Category from './Category';

class App extends React.Component {

	state = {
		categories: []
	};

	constructor(props) {
		super(props);
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

	render() {
		return (
			<div className="list-group" id="category-list">
				{this.renderContent()}
			</div>
		)
	}

}

export default App;