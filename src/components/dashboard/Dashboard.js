import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Trends from './trends/Trends';

/**
 * Contains the bulk of the application. Displays:
 *  - Category List (list of user expense categories)
 *  - Category Details Pane (section showing category transactions
 *    as well as the ability to add expenses)
 */
class Dashboard extends React.Component {

    render() {
        return (
            <div>
                <HashRouter>
                    <Route path="/trends" exact component={Trends}/>
                    <Route path="/search" exact component={Search}/>
                </HashRouter>
            </div>
        )
    }

}

export default Dashboard;