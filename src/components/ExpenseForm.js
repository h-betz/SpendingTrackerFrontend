import React from 'react';

class ExpenseForm extends React.Component {

    render() {
        return (
            <div>
                <strong><h5>Add Transaction</h5></strong>
                <div className="addexpense-box">
                    <form onSubmit="addExpense();return false;" id="expenseForm" className="form-inline" method="POST">
                        <label for="description">Description:</label>
                        <span style={{paddingLeft:"1em;"}}></span>
                        <input className="form-control" placeholder="Description" type="text" name="description" id="description-input" autocomplete="off" />
                        <span style={{paddingLeft:"2em;"}}></span>
                        <label for="amount">Amount:</label>
                        <span style={{paddingLeft:"1em;"}}></span>
                        <input className="form-control" placeholder="$35.00" type="number" step="0.01" name="amount" />
                        <span style={{paddingLeft:"2em;"}}></span>
                        <label for="date">Date:</label>
                        <span style={{paddingLeft:"1em;"}}></span>
                        <input className="form-control" type="date" name="date" />
                        <button type="submit" className="btn btn-default" name="submit" id="submit_expense_btn">Submit</button>
                    </form>
                </div>
            </div>
        )
    }

}

export default ExpenseForm;