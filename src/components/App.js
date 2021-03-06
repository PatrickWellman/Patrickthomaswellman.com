import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './LandingComps/Landing';
import ChefStuff from './NavComponents/ChefStuff';
import CrustToCrumbs from './NavComponents/CrustToCrumbs';
import Resume from './NavComponents/Resume';
import '../components/CSS/App.css';

const App = () => {
	return (
		<div>
			<Router>
				<Switch>
					<Route exact path="/">
						<Landing />
					</Route>
					<Route exact path="/crusttocrumbs">
						<CrustToCrumbs />
					</Route>
					<Route exact path="/chefstuff">
						<ChefStuff />
					</Route>
				
					<Route exact path="/resume">
						<Resume />
					</Route>
				</Switch>
			</Router>
			
		</div>
	);
};

export default App;



	