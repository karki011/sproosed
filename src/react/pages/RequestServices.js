import React from "react";
import { ServiceCategories, PropertyDetails } from "../components"

class RequestServices extends React.Component{
  
  render(){
    return(
      <>
        <ServiceCategories />
        <PropertyDetails />
      </>
    )
  }
}

export default RequestServices

