import React from "react"
import "./IncompItem.css";
class IncompItem extends React.Component {
    render() {
        return (
            
  <div>
      <div className= "col-6">
          <p className={this.props.incompleted ? "incompeted" :""}>
              {this.props.text}
          </p>
      
      </div>

      <div className= "col">
      <button className="btn btn-danger">Complete</button>
      <button className="btn btn-danger">Delete</button>
      </div>
</div>

        );
    }
}
export default IncompItem;