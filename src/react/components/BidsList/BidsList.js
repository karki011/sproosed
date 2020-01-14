import React from "react";
import "./BidsList.css";

class BidsList extends React.Component {
  render() {

    const bids = this.props.bids
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
