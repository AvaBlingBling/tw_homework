import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'antd/dist/antd.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './web-fonts-with-css/css/fontawesome-all.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
