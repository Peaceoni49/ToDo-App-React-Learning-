import React from "react"
class Complete extends React.Component {
    render() {
        return (
            <div className="count">
      <div className= "text">
          <p className={this.props.completed ? "competed" :""}>
              {this.props.text}
          </p>
      
      </div>
      
      <div className= "click">
      
      <button className="deleteItem" onClick={this.props.handleDelete}>Delete
      </button>
      </div>
</div>
        );
    }
}
export default Complete;