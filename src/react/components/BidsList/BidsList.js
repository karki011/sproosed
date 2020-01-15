import React from "react";
import "./BidsList.css";

class BidsList extends React.Component {
  render() {

    const bids = this.props.bids
    return bids.map(bid => {
      return (
        <div className="UnderLine" key={bid.id}>
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
