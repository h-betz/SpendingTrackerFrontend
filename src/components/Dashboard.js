import React from 'react';
import ExpenseForm from './ExpenseForm';
import DashboardOptions from './DashboardOptions';
import TransactionsTable from './TransactionsTable';

class Dashboard extends React.Component {

    render() {
        return (
            <div className="col-sm-10 col-md-10 col-lg-9" id="main-dashboard">
                <DashboardOptions />
                <TransactionsTable />
            </div>
        )
    }

}

export default Dashboard;