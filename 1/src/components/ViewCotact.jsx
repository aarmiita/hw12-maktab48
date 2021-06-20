import React, { Component } from "react";
class ViewCotact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="view">
        {this.props.showEditTask && (
          <div className="edit-form">
            <div className="inputs">
              <label>Name</label>
              <input
                type="text"
                name="name"
                value={this.props.editData.name}
                onChange={this.props.update}
              />
            </div>
            <div className="inputs">
              <label>Phone</label>
              <input
                type="text"
                name="phone"
                value={this.props.editData.phone}
                onChange={this.props.update}
              />
            </div>
            <div className="inputs">
              <label>Email</label>
              <input
                type="text"
                name="email"
                value={this.props.editData.email}
                onChange={this.props.update}
              />
            </div>
            <div className="inputs">
              <label>Address</label>
              <input
                type="text"
                name="address"
                value={this.props.editData.address}
                onChange={this.props.update}
              />
            </div>
            <div className="view-button">
              <button onClick={this.props.save}>Save</button>
            </div>
          </div>
        )}
        {this.props.contactView.map((obj) => {
          return (
            <div className="sub-view" key={obj.id}>
              <div>
                <img src={obj.avatar} alt="profile" />
              </div>
              <div>Name : {obj.name}</div>
              <div>Phone : {obj.phone}</div>
              <div>Email : {obj.email}</div>
              <div>Address : {obj.address}</div>
              <div className="view-btn">
                <button
                  className="edit-view"
                  onClick={() => this.props.editContact(obj)}
                >
                  Edit
                </button>
                <button
                  className="delete-view"
                  onClick={() => this.props.deleteView(obj.id)}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default ViewCotact;
