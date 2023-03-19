import { connect } from "react-redux";
import * as actions from '../actions';
// import { bindActionCreators } from "redux";

const Counter = ({counter, inc, dec, rnd}) => {

    return (
        <div className="jumbotron">
            <h1>{counter}</h1>
            <button onClick={dec} id="dec" className="btn btn-primary">DEC</button>
            <button onClick={inc} id="inc" className="btn btn-primary">INC</button>
            <button onClick={rnd} id="rnd" className="btn btn-primary">RND</button>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        counter: state.value
    }
}

// const mapDispatchToProps = (dispatch) => { //МОЖНО НЕ ПИСАТЬ ЭТУ ФУНКЦИЮ, А ПРОСТО 2-м АРГУМЕНТОМ ПЕРЕДАВАТЬ ЭКШЕНЫ В КОННЕКТ.
//     return bindActionCreators(actions, dispatch);
//     // return {
//     //     // inc: () => dispatch(inc()), 
//     //     // dec: () => dispatch(dec()), 
//     //     // rnd: () => {
//     //     //     const randomValue = Math.floor(Math.random() * 10); 
//     //     //     dispatch(rnd(randomValue));
//     //     // }
//     //     inc, 
//     //     dec,
//     //     rnd
//     // }
// }

export default connect(mapStateToProps, actions)(Counter);