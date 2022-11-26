import './App.scss';
import { useState } from 'react';
import { Routes, Route } from 'react-router';
import { getPath } from 'utils/helpers';

import AuthPage from 'pages/auth/auth.page';
import HomePage from 'pages/home/home.page';


const App = () => {

	const [ auth, setAuth ] = useState( false );

	return (
		<div className="App">

		{	( !auth )
			? (
				<Routes>
					<Route path={ getPath('/') } element={ <AuthPage onAuth={ a => setAuth(a) } /> } />
				</Routes>
			) : (
				<Routes>
					<Route path={ getPath('/') } element={ <HomePage /> } />
				</Routes>
			)
		}
		</div>		
	);
};

export default App;
