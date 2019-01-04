import React from 'react';

class CategoryCard extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <a className="category-link">
                <div className="card z-depth-4">
                    <div className="container">
                        <h4>
                            <b>{this.props.category.name}</b>
                        </h4>
                        <p className="balance">
                            <i>Balance: {this.props.category.balance}</i>
                        </p>
                    </div>
                </div>
            </a>
        );
    }

}

export default CategoryCard;