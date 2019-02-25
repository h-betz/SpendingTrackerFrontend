import React from 'react';
import { connect } from 'react-redux';
import CategoryCard from './CategoryCard';
import { onCategorySelect } from '../../actions';

class CategoryList extends React.Component {

    state = {categories: []};

    renderList() {
        return this.state.categories.map((category) => {
            return (
                <CategoryCard category={category} onClick={() => this.state.onCategorySelect(category)} />
            );
        });
    }

    render() {
        return <div>{this.renderList()}</div>;
    }

}

const mapStateToProps = state => {
    return { categories: state.categories };  
};

export default connect(mapStateToProps, {
    onCategorySelect
}) (CategoryList);