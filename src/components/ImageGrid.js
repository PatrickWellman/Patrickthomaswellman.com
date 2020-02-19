import React from 'react';
import Bo from '../images/IMG_0092.jpg';
import DogPics  from './DogPics';
import { Grid, Image } from 'semantic-ui-react';

class ImageGrid extends React.Component {
	render() {
		return (
			<div className="section">
				<div className="ImageGrid">
					<Grid centered columns={4}>
						<Grid.Row>
							<Grid.Column>
								<Image src={Bo} size="small" />
							</Grid.Column>
							<Grid.Column>
								<Image src={DogPics} size="small" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Bo} size="small" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Bo} size="small" />
							</Grid.Column>
						</Grid.Row>

						<Grid.Row centered columns={4}>
							<Grid.Column>
								<Image src={Bo} size="small" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Bo} size="small" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Bo} size="small" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Bo} size="small" />
							</Grid.Column>
						</Grid.Row>

						<Grid.Row centered columns={4}>
							<Grid.Column>
								<Image src={Bo} size="small" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Bo} size="small" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Bo} size="small" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Bo} size="small" />
							</Grid.Column>
						</Grid.Row>
					</Grid>

				</div>
			</div> 
		);
	}
}
	
			



export default ImageGrid;
		
					
					
						


						













					
			 


