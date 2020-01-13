import React from "react";
import { connect } from "react-redux";
import "./RequestList.css";
class RequestList extends React.Component {
  render() {
    return (
      <div className="UnderLine">
        <div className="INFO">
          <div>Grounds keeper</div>
          <div className="cost">Price</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  basicReducerState: state.basicReducer
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(RequestList);
