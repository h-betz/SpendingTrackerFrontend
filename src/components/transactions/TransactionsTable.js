import React from 'react';
import ExpenseForm from './ExpenseForm';

class TransactionsTable extends React.Component {

    render() {
        return (
            <div id="wrapper">
                <div id='expense-box' className='z-depth-2 expense-box'>
                    <strong><h1 id="dash-head">Transactions</h1></strong>
                    <ExpenseForm />
                    <br/>
                    <b><i>Total:</i></b> <i>$<span id="total">0.00</span></i>
                    <div className='panel-body expenses'>
                        <table id="expense-table" className="table table-striped table-hover">
                        <thead>
                            <tr>
                                <th></th>
                                <th>Date</th>
                                <th>Description</th>
                                <th>Amount</th>
                                </tr>
                        </thead>
                        <tbody id="expense-table-body">
                        </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

}

export default TransactionsTable;