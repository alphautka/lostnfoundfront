import { Button } from "antd";
import './home.styles.scss';

import logo from 'assets/app-logo.png';
import image from 'assets/auth-image.jpg';


const HomePage = () => {
	return (
		<div className={'home-page'}>

			<div className={'home-menu'}>

				<div className={'app-logo'}>
					<img src={ logo } alt={'app-logo'} />
				</div>

				<div className={'home-options'}>
					<Button> {'Lost something'}		</Button>
					<Button> {'Found something'}	</Button>
				</div>

			</div>

			<div className={'home-image'}>
				<img src={ image } alt={'login-background'} />
			</div>

		</div>
	);
};

export default ( HomePage );