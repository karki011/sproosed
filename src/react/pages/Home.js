import React from 'react';
import { connect } from "react-redux"
import { basicAction } from "../../redux/actionCreators"
import {RequestList} from "../components/index"

class Home extends React.Component {
  render(){
    console.log(this.props.basicReducerState)
    return (
      <div className="App">
                <h1>My Requests</h1>
                <button>Request Services</button>
                <h3>Open Requests</h3>
                <RequestList />
                <h3>Past Jobs</h3>
                <RequestList />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  basicReducerState: state.basicReducer
})

const mapDispatchToProps = {
  basicAction: basicAction
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
