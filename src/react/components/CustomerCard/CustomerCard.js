import React from "react";
import "./CustomerCard.css";
// import { connect } from "react-redux";

class CustomerCard extends React.Component {
  render() {
    return (
      <>
        <div id="container">
          <div id="customerName">Rachel McLachlan</div>
          <div id="customerPicture">
            <img
              id="headshot"
              src="https://i1.wp.com/srkheadshotday.com/wp-content/uploads/Chris_Kernes_Headshot_17E9948_Crop32.jpg?ssl=1"
              alt="profile pic"
            />
          </div>
          <span id="userName">@theRealLilRaeRae</span>
          <hr className="lineBreak" />
          <div id="address">
            {" "}
            123 North South Street Blvd. Indianapolis, IN 12345
          </div>
          <div id="information">
            <p>
              My yard isn’t very big but there are a lot of mature trees on the
              property so they drop a lot of branches and leaves when it’s
              windy. There is also a small creek running through the back of the
              neighborhood that floods part of my yard when it rains really
              hard.
            </p>
          </div>
          <div id="propertyPhotos">
            Property Photos
            <hr className="lineBreak" />
            <div id="propPicContainer">
              <img
                id="frontYard"
                src="https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F37%2F2018%2F09%2F15220236%2Ffront-yard-landscaping-makeover-102276417.jpg&q=85"
                alt="property1"
                style={{ height: "124px", width: "159px" }}
              />
              <img
                id="backYard"
                src="https://www.chicagotribune.com/resizer/QVA7f5zLG4mMukVVyLa2XcQvURw=/415x233/top/arc-anglerfish-arc2-prod-tronc.s3.amazonaws.com/public/QFY5BDF64FDGREA2CJJXQJXL5Y.jpg"
                alt="property2"
                style={{ height: "124px", width: "159px" }}
              />
            </div>
          </div>
          <div id="openRequests">
            Open Requests
            <p className="text">Weed my flower bed every other weekend</p>
            <p className="date">Jan 15, 2020</p>
            <p className="text">Clear away fallen branches</p>
            <p className="date">Jan 20, 2020</p>
            <hr className="lineBreak" />
          </div>
        </div>
      </>
    );
  }
  z;
}

export default CustomerCard;
