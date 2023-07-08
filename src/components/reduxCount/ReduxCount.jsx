
import React from "react";
import { useSelector, useDispatch } from "react-redux"; 
import {plus, minus} from '../../features/CountSlice';
//npm install react-redux
//npm install @reduxjs/toolkit

const ReduxCount = () => {
    const {count} = useSelector(state => state.countSlice)
    const dispatch = useDispatch()
    return (
        <div style={{
            display:'flex',
            alignItems:"center",
            justifyContent:"center"
        }}>
            <button onClick={() => dispatch(minus(count -1))}>minus</button>
            <h1>{count}</h1>
            <button onClick={() => dispatch(plus(count + 1))}>plus</button>
        </div>
    )

}
export default ReduxCount;

