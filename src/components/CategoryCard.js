import React from 'react';

const CategoryCard = ({category, onCategorySelect}) => {

    return (
        <a className="category-link" onClick={() => onCategorySelect(category)}>
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
        </a>
    );

}

export default CategoryCard;