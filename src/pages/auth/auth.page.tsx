import './auth.styles.scss';

import image from 'assets/auth-image.jpg';

import { Button, Input, Typography, Checkbox } from 'antd';
import { useEffect, useState } from 'react';

const { Title } = Typography;


const AuthPage = () => {

	const [ authData, setAuthData ] = useState({
		name		: ''	,
		email		: ''	,
		password	: ''	,
		remember	: false	,
	});

	const [ name, setName ] = useState('');
	const [ email, setEmail ] = useState('');
	const [ password, setPassword ] = useState('');
	const [ remember, setNRemember ] = useState( false );

	const submitAuthData = () => {
		let errors: string[] = [];

		if ( name === '' ) 		errors.push('Invalid or empty name'	);
		if ( email === '' ) 	errors.push('Invalid or empty email');
		if ( password === '' ) 	errors.push('Invalid password'		);
	
		if ( errors.length > 0 ) {
			alert( errors.join('\n') );

		} else {
			setAuthData({
				name		: name		,
				email		: email		,
				password	: password	,
				remember	: remember	,
			});

			console.log( authData );
		};
	};

	useEffect( () => {
		setAuthData({
			name		: name		,
			email		: email		,
			password	: password	,
			remember	: remember	,
		});

		// console.log( authData );
	}, [ email, name, password, remember ]);

	return (
		<div className={'auth-page'}>

			<div className={'auth-form'}>

				<div className={'auth-header'}>

					<Title className={'app-title'} level={4}> {'Lost & Found'} </Title>

					<div className={'auth-title'}>
						<Title level={2}> {"Sign Up to"}	</Title>
						<Title level={2}> {"Lost & Found"}	</Title>
					</div>
				</div>

				<div className={'auth-input'}>
					
					<Input placeholder='name'		type={'text'}
						onInput={ e => setName(( e.target as HTMLInputElement ).value )}
					/>
					
					<Input placeholder='email'		type={'email'}
						onInput={ e => setEmail(( e.target as HTMLInputElement ).value )}
					/>
					
					<Input placeholder='password'	type={'password'}
						onInput={ e => setPassword(( e.target as HTMLInputElement ).value )}
					/>
					
					<Checkbox
						onChange={ e => setNRemember( e.target.checked )}
					> {'Remember me'} </Checkbox>
				</div>

				<div className={'auth-buttons'}>

					<Button className={'btn-submit'}
						onMouseDown={ () => submitAuthData() }
					> {'Login'} </Button>

					<Button className={'btn-cancel'}> {'Sign Up'}	</Button>
				</div>

			</div>

			<div className={'auth-image'}>
				<img src={ image } alt={'login-background'} />
			</div>

		</div>
	);
};

export default ( AuthPage );