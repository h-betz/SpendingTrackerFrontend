import React from 'react';
import {connect} from 'react-redux';
import {onExpenseFormSubmit} from '../../actions';
import TransactionForm from './TransactionForm';

class TransactionCreate extends React.Component {

    onSubmit = formValues => {
        this.props.onExpenseFormSubmit(formValues);
    }

    render() {
        return (
            <div>
                <h3>Create a Transaction</h3>
                <TransactionForm onSubmit={this.onSubmit} />
            </div>
        )
    }

}

export default connect(null, {onExpenseFormSubmit})(TransactionCreate);
