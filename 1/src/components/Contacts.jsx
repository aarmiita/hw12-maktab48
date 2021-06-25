import React, { Component } from "react";
import Contact from "./Contact";
class Contacts extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <>
        <div className="home">
          {this.props.contactsList
            .filter((val) => {
              if (this.props.search === "") {
                return val;
              } else if (
                val.name.toLowerCase().includes(this.props.search.toLowerCase())
              ) {
                return val;
              }
            })
            .map((obj, index) => {
              return (
                <Contact
                  obj={obj}
                  key={index}
                  name={obj.name}
                  phone={obj.phone}
                  avatar={obj.avatar}
                  contactId={obj.id}
                  handleDelete={() => this.props.delete(obj.id)}
                  handleEdit={() => this.props.editContact(obj)}
                  view={() => this.props.view(obj)}
                  editSingleTask={() => this.props.editSingleTask(obj)}
                  editname={this.props.editname}
                  editphone={this.props.editphone}
                  updateSingleContact={this.props.updateSingleContact}
                  saveSingleContact={() => this.props.saveSingleContact()}
                />
              );
            })}
        </div>
      </>
    );
  }
}

export default Contacts;
