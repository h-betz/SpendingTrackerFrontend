import React from 'react';

const CategoryList = (props) => {
    const categories = props.categories.map((category) => {
        return (
        <a className="category-link">
            <div className="card z-depth-4">
                <div className="container">
                    <h4>
                        <b>{category.name}</b>
                    </h4>
                    <p className="balance">
                        <i>Balance: {category.balance}</i>
                    </p>
                </div>
            </div>
        </a>);
    });
    return <div>{categories}</div>
};

export default CategoryList;