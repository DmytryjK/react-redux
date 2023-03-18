import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore} from 'redux';

import { Provider } from 'react-redux';

import App from './components/App';
import reducer from './reducer';

const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<React.StrictMode>
		<Provider store={store}>
			<App/>
		</Provider>
	</React.StrictMode>
);

// const { dispatch, subscribe, getState } = store;
// const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

// const incr = document.getElementById('inc');
// const decr = document.getElementById('dec');
// const rndm = document.getElementById('rnd');

// const bindActionCreator = (creator, dispatch) => (...args) => {
// 	dispatch(creator(...args));
// }

// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators({
// 	incDispatch: inc,
// 	decDispatch: dec,
// 	rndDispatch: rnd
// }, dispatch);



// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

// incr.addEventListener('click', inc);
// decr.addEventListener('click', dec);
// rndm.addEventListener('click', () => {
// 	const randomValue = Math.floor(Math.random() * 10);
// 	rnd(randomValue);
// })



