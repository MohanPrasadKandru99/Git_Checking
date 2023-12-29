import React from 'react'
import { connect } from 'react-redux'
import { Decrement, Increment } from './Redux/Actions';

function ReduxDemo(props) {
    return (
        <div>
            <h1>Count:{props.counter}</h1>
            <br />
            <button onClick={() => props.Decrement()}>Decrement</button>
            <button onClick={() => props.Increment()}>Increment</button>
        </div>
    );
}
const mapStateToProps = state => ({
    counter: state
})

export default connect(mapStateToProps, { Increment, Decrement })(ReduxDemo);