import React from "react"
class CountIncomp extends React.Component {
   render() {
       return(
        <button type="button" 
        className="task-update" >
            You have {this.props.count} incomplete task</button>

       );
   } 
}
export default CountIncomp;