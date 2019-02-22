import axios from 'axios';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import CategoryPage from './categories/CategoryPage';
import Dashboard from './dashboard/Dashboard';
import Search from './search/Search';
import Header from './Header';

const App = () => {
	return (
		<div className="ui container">
			<HashRouter>
				<Header />
				<Route path="/" exact component={Dashboard}/>
				<Route path="/category" exact component={CategoryPage}/>
				<Route path="/search" exact component={Search}/>
			</HashRouter>
		</div>
	)
};

export default App;