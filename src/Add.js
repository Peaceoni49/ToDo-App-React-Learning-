import React from "react"

class Add extends React.Component {
    render(){
        return (
    <form>
  <div className="row">
    <div className="col-8">
      <input type="text" class="form-control"
       placeholder="Add list">

      </input>
    </div>
    <div>
    <button type="button" 
    className="btn btn-primary" 
    data-toggle="button" aria-pressed="false"
     autocomplete="off">
 Add
</button>
  </div>
  </div>
</form>
            

        );
    }
}
export default Add;
