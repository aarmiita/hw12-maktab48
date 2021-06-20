import React, { Component } from "react";
import { AiOutlineStar } from "react-icons/ai";

export class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {};
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
        <div className="contact-name">
          <strong>{this.props.name}</strong>
        </div>
        <div className="contact-phone">
          <span>{this.props.phone}</span>
        </div>
        <div className="btns">
          <button
            className="edit-btn"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            Edit
          </button>

          <button
            className="delete-btn"
            onClick={(e) => {
              e.stopPropagation();
              this.props.handleDelete(this.props.obj);
            }}
          >
            delete
          </button>
        </div>
      </div>
    );
  }
}

export default Contact;
