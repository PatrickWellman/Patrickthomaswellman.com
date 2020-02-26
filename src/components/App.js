import React from 'react';
import Landing from './Landing';
import ImageGrid from './ImageGrid';
import Navigation from './Navigation';

import '../App.css';

const App = () => {
	return (
		<div>
			<Navigation />
			<Landing />
			<ImageGrid />
			
		</div>
	);
};

export default App;
