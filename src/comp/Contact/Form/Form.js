import React from "react";
import "./Form.css";

class Form extends React.Component {
  state = {
    fullname: "",
    email: "",
    phone: "",
    message: ""
  };
  handleName = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
  handleSubmit = () => {
    alert(JSON.stringify(this.state));
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Fullname</label>
          <br />
          <input
            type="text"
            name="fullname"
            value={this.state.fullname}
            placeholder="Enter Your Name"
            onChange={this.handleName}
          />{" "}
          <br />
          <label>Email ID</label>
          <br />
          <input
            type="email"
            name="email"
            value={this.state.email}
            placeholder="Enter Your Email ID"
            onChange={this.handleName}
          />{" "}
          <br />
          <label>Phone No.</label>
          <br />
          <input
            type="number"
            name="phone"
            value={this.state.phone}
            placeholder="Enter Your Mobile No"
            onChange={this.handleName}
          />{" "}
          <br />
          <label>Comments</label>
          <br />
          <textarea
            name="message"
            value={this.state.message}
            placeholder="Type Some Comments"
            onChange={this.handleName}
          />{" "}
          <br />
          <input type="submit" value="send" />
        </form>
      </div>
    );
  }
}
export default Form;
