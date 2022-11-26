import ReactDOM from 'react-dom/client';
import reportWebVitals from 'utils/reportWebVitals';
import { BrowserRouter as Router } from "react-router-dom";

import './index.css';
import App from 'app/App';

const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);

root.render(
	<Router>
		<App />
	</Router>
);

reportWebVitals();