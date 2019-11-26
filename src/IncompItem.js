import React from "react"
import "./IncompItem.css";


class IncompItem extends React.Component {
    handleDelete = () => {
        this.props.deleteTaskFunc(this.props.id);
    }
    handleComplete =() => {
        this.props.completeTaskFunc(this.props.id);   
    }
    render() {
        return (
            
<div className="count">      
    <div className="text">
      <p className={this.props.incompleted ? "incompeted" :""}>
              {this.props.text} </p>
              </div>
              
     
        <div className="click">
            {!this.props.completed && (
      <button className="completeItem" onClick={this.handleComplete}>Complete</button>
      )}
      <button className="deleteItem" onClick={this.handleDelete}>Delete
      </button>
        </div>
      
      
    </div>
    

        );
    }
}
export default IncompItem;