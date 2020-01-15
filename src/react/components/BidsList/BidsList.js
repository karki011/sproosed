import React from "react";
import "./BidsList.css";

class BidsList extends React.Component {
  render() {
    const bids = this.props.bids
    if(this.props.isCompleted === true){
      return bids.slice(0,1).map(bid => {
        console.log(bid)
              return (
                <div className="UnderLine">
                <div className="INFO">
                  <div>{bid.groundskeeperName}</div>
                  <div className="cost">{bid.bid}</div>
                </div>
              </div>
        
                
              );
            });
    }
   
    return bids.map(bid => {
console.log(bid)
      return (
        <div className="UnderLine">
        <div className="INFO">
          <div>{bid.groundskeeperName}</div>
          <div className="cost">{bid.bid}</div>
        </div>
      </div>

        
      );
    });
  }
}



export default BidsList;
