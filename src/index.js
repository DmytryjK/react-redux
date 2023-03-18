import React from 'react';
import ReactDOM from 'react-dom/client';
import {legacy_createStore as createStore} from 'redux'

const initialState = {value: 0};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case 'INC':
			return {
				...state,
				value: state.value + 1
			};
		case 'DEC':
			return {
				...state,
				value: state.value - 1
			};
		case 'RND':
			return {
				...state,
				value: state.value * action.payload
			};
		default:
			return state;
	}
}

const incr = document.getElementById('inc');
const decr = document.getElementById('dec');
const rndm = document.getElementById('rnd');
const title = document.getElementById('counter');

const store = createStore(reducer);

const update = () => {
	title.textContent = store.getState().value;
}

store.subscribe(update);

const inc = () => ({type: 'INC'})
const dec = () => ({type: 'DEC'})
const rnd = (randomValue) => ({type: 'RND', payload: randomValue});

incr.addEventListener('click', () => {
	store.dispatch(inc());
})
decr.addEventListener('click', () => {
	store.dispatch(dec());
})
rndm.addEventListener('click', () => {
	const randomValue = Math.floor(Math.random() - 10);

	store.dispatch(rnd(randomValue));
})


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>

        </>
    </React.StrictMode>
);

