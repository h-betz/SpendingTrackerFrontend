import axios from 'axios';
import React from 'react';
import { Router, Route } from 'react-router-dom';
import About from './About';
import CategoryPage from './categories/CategoryPage';
import Dashboard from './dashboard/Dashboard';
import Header from './Header';
import LandingPage from './auth/LandingPage';
import Search from './search/Search';
import history from '../history';


const App = () => {
	return (
		<div className="ui container">
			<Router history={history}>
				<div>
					<Header />
					<Route path="/" exact component={LandingPage} />
					<Route path="/about" exact component={About} />
					<Route path="/dashboard" exact component={Dashboard}/>
					<Route path="/category" exact component={CategoryPage}/>
					<Route path="/search" exact component={Search}/>
				</div>
			</Router>
		</div>
	)
};

export default App;