import axios from 'axios';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import About from './About';
import CategoryPage from './categories/CategoryPage';
import Dashboard from './dashboard/Dashboard';
import Header from './Header';
import LandingPage from './LandingPage';
import Search from './search/Search';
import history from '../history';


const App = () => {
	return (
		<div className="ui container">
			<HashRouter history={history}>
				<div>
					<Header />
					<Route path="/" exact component={LandingPage} />
					<Route path="/about" exact component={About} />
					<Route path="/dashboard" exact component={Dashboard}/>
					<Route path="/category" exact component={CategoryPage}/>
					<Route path="/search" exact component={Search}/>
				</div>
			</HashRouter>
		</div>
	)
};

export default App;