import React from "react";
import "./BidsList.css";

class BidsList extends React.Component {
  render() {
    const bids = this.props.bids
    return bids.map(bid => {
      return (
        <div className="BidWrap" key={bid.id}>
        <div className="INFO">
          <div>{bid.groundskeeperName}</div>
          <div className="cost">{bid.bid}</div>
        </div>
        {!this.props.isCompleted && <div className="accept" onClick={()=>{this.props.acceptBid(this.props.requestID, bid.id)}}>ACCEPT</div>}
      </div>

        
      );
    });
  }
}



export default BidsList;
