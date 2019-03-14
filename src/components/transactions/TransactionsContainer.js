import React from 'react';
import TransactionCreate from './TransactionCreate';
import TransactionsTable from './TransactionsTable';

class TransactionsContainer extends React.Component {

    render() {
        return (
            <div>
                <TransactionCreate />
                <TransactionsTable />
            </div>
        );
    }

}

export default TransactionsContainer;