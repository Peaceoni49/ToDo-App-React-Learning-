import React from "react"
class CountIncomp extends React.Component {
   render() {
       return(
        <button type="button" 
        className="btn btn-primary btn-lg btn-block">
            You have {this.props.count} incomplete task</button>

       );
   } 
}
export default CountIncomp;