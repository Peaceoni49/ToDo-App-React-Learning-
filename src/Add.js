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
    
    
    <div className="item">

    <input type="text" className="input_text"
       placeholder="Add list"
       value={this.state.newItemText}
       onChange={this.updateNewItemText}
       ></input>

    <button className="editButton"
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
