import React from "react"

class Add extends React.Component {
    state = {
        newItemText: ""
    }

    updateNewItemText =(event)=> {
        this.setState({
            newItemText: event.target.value
        })
    }
    handleClick= (event) => {
        this.props.addNewTaskFunc(this.state.newItemText);
        this.setState({
            newItemText:""
        })
    }
    render(){
        return (
    <form>
  <div className="row">
    <div className="col-8">
      <input type="text" className="form-control"
       placeholder="Add list"
       value={this.state.newItemText}
       onChange={this.updateNewItemText}
       ></input>
    </div>
    
    
    <button type="button" 
    className="btn btn-primary" 
    data-toggle="button" aria-pressed="false"
      onClick={this.handleClick} disabled={this.state.newItemText.lenght ===0}>
 Add
</button>
  
  </div>
</form>
            

        );
    }
}
export default Add;
