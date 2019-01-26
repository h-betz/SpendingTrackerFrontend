import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryList = ({categories, onCategorySelect}) => {
    const renderedList = categories.map((category) => {
        return <CategoryCard category={category} onCategorySelect={onCategorySelect} />;
    })
    return <div>{renderedList}</div>
};

export default CategoryList;