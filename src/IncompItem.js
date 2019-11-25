import React from "react"
import "./IncompItem.css";
class IncompItem extends React.Component {
    render() {
        return (
            
<div className="count">      
    <div className="text">
      <p className={this.props.incompleted ? "incompeted" :""}>
              {this.props.text} </p>
              </div>
              
     
        <div className="click">
      <button className="completeItem">Complete</button>
      <button className="deleteItem" onClick={this.props.handleDelete}>Delete
      </button>
        </div>
      
      
    </div>
    

        );
    }
}
export default IncompItem;