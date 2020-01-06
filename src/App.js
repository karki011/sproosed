import React from 'react';
import './App.css';
import { connect } from "react-redux"
import { basicAction } from "./redux/actionCreators"

class App extends React.Component {
  render(){
    console.log(this.props.basicReducerState)
    return (
      <div className="App">
        <h1>sproosed</h1>
        <button onClick={() => {this.props.basicAction()}}>Test</button>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);
