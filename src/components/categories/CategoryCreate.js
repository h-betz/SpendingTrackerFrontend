import React from 'react';
import { connect } from 'react-redux';
import { onCategoryFormSubmit } from '../../actions';
import CategoryForm from './CategoryForm';


class CategoryCreate extends React.Component {

    onSubmit = formValues => {
        this.props.onCategoryFormSubmit(formValues);
    }

    render() {
        return (
            <div>
                <h3>Add a Category</h3>
                <CategoryForm onSubmit={this.onSubmit} />
            </div>
        );
    }
}

export default connect(null, {onCategoryFormSubmit})(CategoryCreate);