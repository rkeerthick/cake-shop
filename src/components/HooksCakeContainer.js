import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { buyCake } from '../redux';

const HooksCakeContainer = () => {
    const cakeCount = useSelector(state => state.cakeCount);
    const dispatch = useDispatch();
  return (
    <div>
        <h1>No of cakes : {cakeCount}</h1>
        <button onClick={() => dispatch(buyCake())}>Buy Now</button>
    </div>
  )
}

export default HooksCakeContainer