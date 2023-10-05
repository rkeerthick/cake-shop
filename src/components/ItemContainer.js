import React from 'react'
import { connect } from 'react-redux'
import { buyCake, buyIceCream } from '../redux'

const ItemContainer = (props) => {
  return (
    <div>
        <h1>Item - {props.item}</h1>
        <button onClick={props.dispatchItem}>Buy </button>
    </div>
  )
}

const mapStateToProps = (state, props) => {
    const itemState = props.cake ? state.cake.cakeCount : state.iceCream.iceCreamCount;
    return {
        item: itemState
    }
}

const mapDispatchToProps = (dispatch, props) => {
    const itemDispatch = props.cake ? () => dispatch(buyCake()) : () => dispatch(buyIceCream);
    return {
        dispatchItem: itemDispatch
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer)