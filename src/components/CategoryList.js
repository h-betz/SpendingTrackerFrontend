import React from 'react';
import { connect } from 'react-redux';
import CategoryCard from './CategoryCard';
import { onCategorySelect } from '../actions';

class CategoryList extends React.Component {

    renderList() {
        return this.props.categories.map((category) => {
            return (
                <CategoryCard category={category} onClick={() => this.props.onCategorySelect(category)} />
            );
        });
    }

    render() {
        return <div>{this.renderList()}</div>;
    }

}

const mapStateToProps = state => {
    console.log(state);
    return { categories: state.categories };  
};

export default connect(mapStateToProps, {
    onCategorySelect
}) (CategoryList);