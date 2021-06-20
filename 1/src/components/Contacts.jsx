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
                  key={index}
                  name={obj.name}
                  phone={obj.phone}
                  avatar={obj.avatar}
                  contactId={obj.id}
                  handleDelete={() => this.props.delete(obj.id)}
                  handleEdit={() => this.props.editContact(obj)}
                  view={() => this.props.view(obj)}
                />
              );
            })}
        </div>
      </>
    );
  }
}

export default Contacts;
