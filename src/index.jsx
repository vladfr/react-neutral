import { render } from 'react-dom'
import { AppContainer } from 'react-hot-loader'

import './scss/main.scss'

import App from './App'
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById('root');
const load = () => render((
  <BrowserRouter>
    <App />
  </BrowserRouter>
), root);

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', load);
}

load();
