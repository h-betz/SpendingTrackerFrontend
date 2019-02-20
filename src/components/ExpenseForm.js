import React from 'react';
import { connect } from 'react-redux';
import { onCategoryFormSubmit } from '../actions';

class ExpenseForm extends React.Component {

    state = {transactions: null};

    onFormSubmit = event => {
		event.preventDefault();
		this.props.onSubmit(this.state.category);
		this.setState({category: ''});
		this.categoryForm.reset();
	};

    render() {
        return (
            <div>
                <strong><h5>Add Transaction</h5></strong>
                <div className="addexpense-box">
                    <form onSubmit={this.onFormSubmit} id="expenseForm" className="form-inline" method="POST">
                        <label htmlFor="description">Description:</label>
                        <span style={{paddingLeft:"1em"}}></span>
                        <input className="form-control" placeholder="Description" type="text" name="description" id="description-input" autoComplete="off" />
                        <span style={{paddingLeft:"2em"}}></span>
                        <label htmlFor="amount">Amount:</label>
                        <span style={{paddingLeft:"1em"}}></span>
                        <input className="form-control" placeholder="$35.00" type="number" step="0.01" name="amount" />
                        <span style={{paddingLeft:"2em"}}></span>
                        <label htmlFor="date">Date:</label>
                        <span style={{paddingLeft:"1em"}}></span>
                        <input className="form-control" type="date" name="date" />
                        <button type="submit" className="btn btn-default" name="submit" id="submit_expense_btn">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default ExpenseForm;