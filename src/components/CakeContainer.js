import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/index";

const CakeContainer = (props) => {
  return (
    <div>
      <h1>Number of cakes : {props.cakeCount}</h1>
      <button onClick={props.buyCake}>Buy now</button>
    </div>
  );

  
};
const mapStateToProps = (state) => {
  return {
    cakeCount: state.cake.cakeCount,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
