import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Landing from './LandingComps/Landing';
import Navigation from './LandingComps/Navigation';
import ChefStuff from './NavComponents/ChefStuff';
import CrustToCrumbs from './NavComponents/CrustToCrumbs';
import PhotoGallery from './NavComponents/PhotoGallery';
import Resume from './NavComponents/Resume';

import '../components/CSS/App.css';

const App = () => {
	return (
		<div>
			<Router>
				<Navigation />
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
					<Route exact path="/photogallery">
						<PhotoGallery />
					</Route>
					<Route exact path="/resume">
						<Resume />
					</Route>
					{/*<AboutMe />*/}
				</Switch>
			</Router>
		</div>
	);
};

export default App;
