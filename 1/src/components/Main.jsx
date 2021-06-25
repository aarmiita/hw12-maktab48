import React, { Component } from "react";
import contacts from "./json/contacts.json";
import { AiFillHome } from "react-icons/ai";
import { IoShareOutline } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineInsertRowRight } from "react-icons/ai";
import { BsFilter } from "react-icons/bs";
import { BsColumns } from "react-icons/bs";
import Contacts from "./Contacts";
import ViewCotact from "./ViewCotact";
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      contactsList: [],
      showModal: false,
      singleContact: {
        id: "",
        name: "",
        phone: "",
        email: "",
        address: "",
        avatar: "",
      },
      showEditTask: false,
      editData: {
        id: -1,
        name: "",
        phone: "",
        email: "",
        address: "",
      },
      view: [],
      editSingleContact: {
        id: "",
        name: "",
        phone: "",
        email: "",
        address: "",
        avatar: "",
      },
    };
    this.editContact = this.editContact.bind(this);
    this.save = this.save.bind(this);
    this.onSave = this.onSave.bind(this);
  }
  editContact(obj) {
    this.setState({ editData: obj, showEditTask: true });
  }
  onUpdate(e) {
    let object = { ...this.state.editData };
    object[e.target.name] = e.target.value;
    this.setState({ editData: object });
    console.log(e.target.value);
  }
  save() {
    this.onSave(this.state.editData);
    this.setState({
      editData: { id: -1, name: "", phone: "", email: "", address: "" },
      showEditTask: false,
    });
  }
  onSave(editData) {
    let list = [...this.state.contactsList];
    let objIndex = list.findIndex((obj) => obj.id == editData.id);
    list.splice(objIndex, 1, editData);
    console.log(list);
    this.setState({
      view: [editData],
      contactsList: list,
    });
  }
  getData() {
    setTimeout(() => {
      console.log("Our data is fetched");
      this.setState({
        contactsList: contacts,
      });
    }, 1000);
  }

  componentDidMount() {
    this.getData();
  }
  delete(id) {
    const newContacts = this.state.contactsList.filter(
      (item) => item.id !== id
    );
    const newView = this.state.view.filter((item) => item.id !== id);
    this.setState({
      contactsList: newContacts,
      view: newView,
    });

    // console.log(id);
  }

  update(e) {
    let id = this.state.contactsList.length + 1;
    let obj = { ...this.state.singleContact };
    obj[e.target.name] = e.target.value;
    this.setState({
      singleContact: {
        ...obj,
        id: id,
        avatar: `https://i.pravatar.cc/150?img=${id}`,
      },
    });
  }
  handleAdd(e) {
    let list = [...this.state.contactsList];
    this.setState({
      contactsList: [...list, this.state.singleContact],
      singleContact: {
        id: "",
        name: "",
        phone: "",
        email: "",
        address: "",
        avatar: "",
      },
      showModal: false,
    });
  }
  viewContact(obj) {
    this.setState({
      view: [obj],
    });
  }
  deleteView(id) {
    // console.log(id);
    const newContacts = this.state.contactsList.filter(
      (item) => item.id !== id
    );
    this.setState({
      contactsList: newContacts,
      view: [],
    });
  }

  onSearch(e) {
    this.setState({
      search: e.target.value,
    });
  }
  editSingleTask(obj) {
    this.setState({ editSingleContact: obj });
    console.log(this.editSingleContact);
  }
  updateSingleContact(e) {
    let object = { ...this.state.editSingleContact };
    object[e.target.name] = e.target.value;
    this.setState({ editSingleContact: object });
  }
  saveSingleContact() {
    let list = [...this.state.contactsList];
    let objIndex = list.findIndex(
      (obj) => obj.id == this.state.editSingleContact.id
    );
    list.splice(objIndex, 1, this.state.editSingleContact);
    const newView = this.state.view.filter(
      (item) => item.id === this.state.editSingleContact.id
    );
    newView.map((item) => {
      return (
        (item.phone = this.state.editSingleContact.phone),
        (item.name = this.state.editSingleContact.name)
      );
    });
    console.log(newView);
    this.setState({
      contactsList: list,
    });
  }

  render() {
    return (
      <div className="App">
        <ViewCotact
          contactView={this.state.view}
          deleteView={this.deleteView.bind(this)}
          editData={this.state.editData}
          editContact={this.editContact}
          save={this.save}
          update={this.onUpdate.bind(this)}
          showEditTask={this.state.showEditTask}
        />
        <div className="container">
          <header className="header">
            <div className="menu">
              <AiOutlineMenu />
            </div>
            <div className="input">
              <input
                type="text"
                placeholder="search by name"
                onChange={this.onSearch.bind(this)}
              />
            </div>
            <div className="filter">
              <BsFilter />
            </div>
          </header>
          <div className="top">
            <div>Cotacts :({this.state.contactsList.length})</div>
            <div className="sub-top">
              <div>
                <AiOutlineInsertRowRight />
              </div>
              <div>
                <BsColumns />
              </div>
            </div>
          </div>
          <Contacts
            contactsList={this.state.contactsList}
            delete={this.delete.bind(this)}
            view={this.viewContact.bind(this)}
            search={this.state.search}
            editSingleTask={this.editSingleTask.bind(this)}
            editname={this.state.editSingleContact.name}
            editphone={this.state.editSingleContact.phone}
            updateSingleContact={this.updateSingleContact.bind(this)}
            saveSingleContact={this.saveSingleContact.bind(this)}
          />
          <footer className="footer">
            <div className="home-btn">
              <AiFillHome />
            </div>
            <div
              className="add-btn"
              onClick={() =>
                this.setState({ showModal: !this.state.showModal })
              }
            >
              +
            </div>
            <div className="share-btn">
              <IoShareOutline />
            </div>
          </footer>
          {this.state.showModal && (
            <div className="modal">
              <form
                className="form"
                onSubmit={(e) => {
                  e.preventDefault();
                }}
              >
                <div className="form-control">
                  <input
                    type="text"
                    name="name"
                    value={this.state.singleContact.name}
                    onChange={this.update.bind(this)}
                    placeholder="Enter Name"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="phone"
                    value={this.state.singleContact.phone}
                    onChange={this.update.bind(this)}
                    placeholder="Enter Email"
                    required
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="email"
                    value={this.state.singleContact.email}
                    onChange={this.update.bind(this)}
                    placeholder="Enter Phonenumber"
                  />
                </div>
                <div className="form-control">
                  <input
                    type="text"
                    name="address"
                    value={this.state.singleContact.address}
                    onChange={this.update.bind(this)}
                    placeholder="Enter Address"
                  />
                </div>
                <div className="form-control">
                  <button type="submit" onClick={this.handleAdd.bind(this)}>
                    Add Contact
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default Main;
