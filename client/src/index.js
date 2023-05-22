import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRoute from './routes';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/styles.css';
import { Provider } from 'react-redux';
import ReduxStore from './store/index';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* getting the routes from routes.js */}
    <Provider store={ReduxStore()}>
			<AppRoute />
		</Provider>  </React.StrictMode>
);

