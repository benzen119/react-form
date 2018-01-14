import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Form from './components/Form.jsx';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import thunk from 'redux-thunk';
import reducer from './reducers';
import { applyMiddleware } from 'redux';

const store = createStore(reducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
       <Form />
    </Provider>,
     document.getElementById('root'));
registerServiceWorker();
