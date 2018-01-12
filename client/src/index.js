import React from 'react';
import ReactDOM from 'react-dom';
import Form from './components/Form.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Form />, document.getElementById('root'));
registerServiceWorker();