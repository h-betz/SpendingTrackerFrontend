import React from 'react';
import Category from './Category';

class App extends React.Component {

	state = {
		categories: null
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