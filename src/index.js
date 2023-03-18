import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore} from 'redux';
import { bindActionCreators } from 'redux';
import * as actions from './actions';

import reducer from './reducer';

const incr = document.getElementById('inc');
const decr = document.getElementById('dec');
const rndm = document.getElementById('rnd');
const title = document.getElementById('counter');

const store = createStore(reducer);
const { dispatch, subscribe, getState } = store;

const update = () => {
	title.textContent = getState().value;
}
subscribe(update);

// const bindActionCreator = (creator, dispatch) => (...args) => {
// 	dispatch(creator(...args));
// }

// const {incDispatch, decDispatch, rndDispatch} = bindActionCreators({
// 	incDispatch: inc,
// 	decDispatch: dec,
// 	rndDispatch: rnd
// }, dispatch);

const {inc, dec, rnd} = bindActionCreators(actions, dispatch);

// const incDispatch = bindActionCreators(inc, dispatch);
// const decDispatch = bindActionCreators(dec, dispatch);
// const rndDispatch = bindActionCreators(rnd, dispatch);

incr.addEventListener('click', inc);
decr.addEventListener('click', dec);
rndm.addEventListener('click', () => {
	const randomValue = Math.floor(Math.random() * 10);
	rnd(randomValue);
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>

        </>
    </React.StrictMode>
);
