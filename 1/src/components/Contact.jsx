import React, { Component } from "react";
import { AiOutlineStar } from "react-icons/ai";

export class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showEditTask: false,
      edditing: false,
    };
    this.save = this.save.bind(this);
    this.handleEditTask = this.handleEditTask.bind(this);
  }
  handleEditTask() {
    this.props.editSingleTask(this.props.obj);
    this.setState({ showEditTask: true });
  }
  save() {
    this.props.saveSingleContact();
    this.setState({ showEditTask: false });
    this.setState({ edditing: true });
  }

  render() {
    return (
      <div className="contact" onClick={() => this.props.view(this.props.obj)}>
        <div className="star">
          <AiOutlineStar />
        </div>
        <div className="profile">
          <img className="profile-img" src={this.props.avatar} alt="profile" />
        </div>
        {!this.state.showEditTask ? (
          <div className="contact-name">
            <strong>{this.props.name}</strong>
          </div>
        ) : (
          <input
            name="name"
            type="text"
            value={this.props.editname}
            onChange={this.props.updateSingleContact}
            onClick={(e) => e.stopPropagation()}
          />
        )}
        {!this.state.showEditTask ? (
          <div className="contact-phone">
            <span>{this.props.phone}</span>
          </div>
        ) : (
          <input
            name="phone"
            type="text"
            value={this.props.editphone}
            onChange={this.props.updateSingleContact}
            onClick={(e) => e.stopPropagation()}
          />
        )}
        <div className="btns">
          {!this.state.showEditTask ? (
            <button
              className="edit-btn"
              onClick={(e) => {
                e.stopPropagation();
                this.handleEditTask();
              }}
            >
              Edit
            </button>
          ) : (
            <button
              className="edit-btn"
              onClick={(e) => {
                this.save();
                e.stopPropagation();
              }}
            >
              Save
            </button>
          )}

          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              this.props.handleDelete(this.props.obj);
            }}
          >
            delete
          </button>
          {this.state.edditing && <span className="edit-span">Edited</span>}
        </div>
      </div>
    );
  }
}

export default Contact;
