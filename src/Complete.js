import React from "react"
class Complete extends React.Component {
    render() {
        return (
            <div>
      <div className= "col-6">
          <p className={this.props.completed ? "competed" :""}>
              {this.props.text}
          </p>
      
      </div>
      
      <div className= "col">
      
      <button className="btn btn-danger" onClick={this.props.handleDelete}>Delete</button>
      </div>
</div>
        );
    }
}
export default Complete;