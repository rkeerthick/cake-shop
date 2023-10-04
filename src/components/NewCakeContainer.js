import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/index";

const NewCakeContainer = (props) => {
    const [number, setNumber] = useState(1);
  return (
    <div>
      <h1>Number of cakes : {props.cakeCount}</h1>
      <input type="number" value={number} onChange={e => setNumber(e.target.value)} />
      <button onClick={() => props.buyCake(number)}>Buy {number} now</button>
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
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
