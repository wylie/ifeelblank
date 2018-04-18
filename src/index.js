import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';

import './_index.css';
import Wrap from './components/wrap';

ReactDOM.render(<Wrap />, document.getElementById('root'));
registerServiceWorker();
