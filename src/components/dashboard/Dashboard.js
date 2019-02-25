import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import CategoryList from '../categories/CategoryList';
import DashboardOptions from './DashboardOptions';
import Trends from '../trends/Trends';
import Search from '../search/Search';

/**
 * Contains the bulk of the application. Displays:
 *  - Category List (list of user expense categories)
 *  - Category Details Pane (section showing category transactions
 *    as well as the ability to add expenses)
 */
class Dashboard extends React.Component {

    render() {
        return (
            <div className="ui grid">
                <div className="ui row">
                    <div className="three wide column">
                        <CategoryList />
                    </div>
                    <div className="nine wide column">
                        <DashboardOptions />
                    </div>
                </div>
            </div>
        )
    }

}

export default Dashboard;