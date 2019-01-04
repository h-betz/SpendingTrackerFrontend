import React from 'react';
import CategoryCard from './CategoryCard';

const CategoryList = (props) => {
    const categories = props.categories.map((category) => {
        return <CategoryCard category={category} />;
    })
    return <div>{categories}</div>
};

export default CategoryList;