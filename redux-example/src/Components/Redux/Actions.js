export const Increment=()=> async dispatch=>{
    dispatch({
        type: "Increment"
    })
}

export const Decrement=()=> async dispatch=>{
    dispatch({
        type: "Decrement"
    })
}

// export default {Increment, Decrement}