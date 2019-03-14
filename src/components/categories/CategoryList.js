import React from 'react';
import { connect } from 'react-redux';
import CategoryCard from './CategoryCard';
import CategoryCreate from './CategoryCreate';
import { onCategorySelect, fetchCategories } from '../../actions';

class CategoryList extends React.Component {

    state = {categories: []};

    componentDidMount() {
        this.props.fetchCategories();
    }

    renderList() {
        return this.state.categories.map((category) => {
            return (
                <CategoryCard category={category} onClick={() => this.state.onCategorySelect(category)} />
            );
        });
    }

    render() {
        const signedIn = this.props.signedIn;
        if (!signedIn) {
            return <div></div>;
        }
        return (
            <div>
                <div>
                    <CategoryCreate />
                </div>
                <div>
                    {this.renderList()}
                </div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return { 
        categories: state.categories,
        isSignedIn: state.auth.isSignedIn
    };  
};

export default connect(mapStateToProps, {
    onCategorySelect, fetchCategories
}) (CategoryList);