import React from 'react';
import { connect } from "react-redux"
import { basicAction } from "../../redux/actionCreators"
import { NavBar } from "../components"
import {Request} from "../components/index"
import "./Home.css"

class Home extends React.Component {
  render(){
    console.log(this.props.basicReducerState)
    return (
      <>
      <NavBar />
      <div className="App">
                <div className="Requests">Open Requests</div>
              
                <Request />
                <Request />
                <Request />
                <a href=" " className="floating-btn">+</a>
      </div>
      </>
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
