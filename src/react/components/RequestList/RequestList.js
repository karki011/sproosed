import React from "react";
import { connect } from "react-redux";
import { basicAction } from "../../redux/actionCreators";
import { Request } from "../components/index";

class RequestList extends React.Component {
  render() {
    console.log(this.props.basicReducerState);
    return getRequests.map(Request => {
      return <Request />;
    });
  }
}
const mapStateToProps = state => ({
  basicReducerState: state.basicReducer
});

const mapDispatchToProps = {
  basicAction: basicAction
};

export default connect(mapStateToProps, mapDispatchToProps)(RequestList);
