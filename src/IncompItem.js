import React from "react"
class IncompItem extends React.Component {
    render() {
        return (
            <ul class="list-group">
  <div>
      <li className="list-group-item">Take out the trash</li>
  <button type="button" className="btn btn-primary btn-lg">Complete</button>
<button type="button" classNmae="btn btn-secondary btn-lg">Delete</button>
</div>
</ul>
        );
    }
}
export default IncompItem;