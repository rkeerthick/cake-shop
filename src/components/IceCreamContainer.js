import React from "react";
import { connect } from "react-redux";
import { buyIceCream } from "../redux";

const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>No of iceCreams: {props.iceCreamCount}</h2>
      <button onClick={props.buyIceCream}>Buy now</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    iceCreamCount: state.iceCream.iceCreamCount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);