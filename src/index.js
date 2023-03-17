import React from 'react';
import ReactDOM from 'react-dom/client';

const initialState = 0;

const reducer = (state, action) => {
	if (action.type === 'INCREEMENT') {
		return state + 1;
	}
	return 0;
}

let state = reducer(initialState, {type: 'INCREEMENT'});
console.log(state);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <>

        </>
    </React.StrictMode>
);

