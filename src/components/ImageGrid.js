import React from 'react';
import Bo from '../images/IMG_0092.jpg';
import Pic2 from '../images/IMG_4611.jpg';
import Pic3 from '../images/IMG_0092.jpg';
import Pic4 from '../images/IMG_0353.jpg';
import Pic5 from '../images/IMG_4611.jpg';
import Pic6 from '../images/IMG_5929.jpg';
import Pic7 from '../images/IMG_6214.jpg';
import Pic8 from '../images/IMG_7889.jpg';
import Pic9 from '../images/IMG_6653.jpg';
import Pic10 from '../images/IMG_6662.jpg';
import Pic11 from '../images/IMG_7308.jpg';
import Pic12 from '../images/IMG_8299.jpg';
import { Grid, Image } from 'semantic-ui-react';

class ImageGrid extends React.Component {
	render() {
		return (
			<div className="section">
				<div className="ImageGrid">
					<Grid centered columns={4}>
						<Grid.Row>
							<Grid.Column>
								<Image src={Pic2} size="large
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic3} size="large
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic4} size="large
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic5} size="large
								" />
							</Grid.Column>
						</Grid.Row>

						<Grid.Row centered columns={4}>
							<Grid.Column>
								<Image src={Pic6} size="large
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic7} size="large
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic8} size="large
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic9} size="large
								" />
							</Grid.Column>
						</Grid.Row>

						<Grid.Row centered columns={4}>
							<Grid.Column>
								<Image src={Pic10} size="large
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic11} size="large
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic12} size="large
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Bo} size="large
								" />
							</Grid.Column>
						</Grid.Row>
					</Grid>
				</div>
			</div>
		);
	}
}

export default ImageGrid;
