import Counter from "./Counter";
import * as actions from '../actions';
import { bindActionCreators } from 'redux';

{/* <Counter
    counter={getState().value}
    inc={inc}
    dec={dec}
    rnd={() => {
        const randomValue = Math.floor(Math.random() * 10);
        rnd(randomValue);
    }}/> */}

const App = ({store}) => {
    return (
        <Counter/>
    )
}

export default App;