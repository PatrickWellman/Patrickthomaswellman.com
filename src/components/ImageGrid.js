import React from 'react';
import Bo from '../images/IMG_0092.jpg';
import Pic2 from '../images/IMG_4611.jpg';
import Pic3 from '../images/IMG_0092.jpg';
import Pic4 from '../images/IMG_0353.jpg';
import Pic5 from '../images/JBF_Catbird_966.JPG';
import Pic6 from '../images/IMG_5929.jpg';
import Pic7 from '../images/IMG_6214.jpg';
import Pic8 from '../images/IMG_7889.jpg';
import Pic9 from '../images/IMG_6653.jpg';
import Pic10 from '../images/IMG_6662.jpg';
import Pic11 from '../images/IMG_7308.jpg';
import Pic12 from '../images/IMG_8299.jpg';
import Pic13 from '../images/tiffany.JPG';
import Pic14 from '../images/cookies.JPG';
import Pic15 from '../images/JBF_Catbird_920 2.JPG';
import Pic16 from '../images/IMG_2332.JPG';
import { Grid, Image } from 'semantic-ui-react';

class ImageGrid extends React.Component {
	render() {
		return (
			<div className="section">
				<div className="ImageGrid">
					<Grid centered columns={4}>
						<Grid.Row>
							<Grid.Column>
								<Image src={Pic13} size="medium
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic14} size="medium
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic15} size="medium
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic16} size="medium
								" />
							</Grid.Column>
						</Grid.Row>

						<Grid.Row>
							<Grid.Column>
								<Image src={Pic2} size="medium
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic3} size="medium
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic4} size="medium
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic5} size="medium
								" />
							</Grid.Column>
						</Grid.Row>

						<Grid.Row centered columns={4}>
							<Grid.Column>
								<Image src={Pic6} size="medium
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic7} size="medium
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic8} size="medium
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic9} size="medium
								" />
							</Grid.Column>
						</Grid.Row>

						<Grid.Row centered columns={4}>
							<Grid.Column>
								<Image src={Pic10} size="medium
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic11} size="medium
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Pic12} size="medium
								" />
							</Grid.Column>
							<Grid.Column>
								<Image src={Bo} size="medium
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
