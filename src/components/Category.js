import React from 'react';

class Category extends React.Component {
	render() {
		return (
			<a className="category-link">
				<div className="card z-depth-4">
					<div className="container">
						<h4>
							<b>{this.props.name}</b>
						</h4>
						<p className="balance">
							<i>Balance: {this.props.balance}</i>
						</p>
					</div>
				</div>
			</a>
		);
	}
}

export default Category;