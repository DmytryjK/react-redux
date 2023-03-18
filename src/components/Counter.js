
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

export default Counter;