import React, { Component } from "react";
import React from "react";
import axios from "axios";

class TableForm extends React.component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
      address: "",
      city: "",
      userId: "",
      foodAndDrinks: [],
      guests: []
    };
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      date,
      time,
      address,
      city,
      userId,
      foodAndDrinks,
      guests
    } = this.state;
    axios
      .post("http://localhost:5000/api/table", {
        date,
        time,
        address,
        city,
        userId,
        foodAndDrinks,
        guests
      })
      .then(() => {
        // this.props.getData();
        this.setState({
          date: "",
          time: "",
          address: "",
          city: "",
          userId: "",
          foodAndDrinks: [],
          guests: []
        });
      });
  }

  createTable = props => {
    render();
    {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <h1>Create a table!</h1>
            <ul>
              <li>
                <label>Date:</label>
                <input
                  type="date"
                  value={this.state.date}
                  onChange={this.handleChange}
                />
              </li>
              <li>
                <label>Time:</label>
                <input
                  type="time"
                  value={this.state.time}
                  onChange={this.handleChange}
                />
              </li>
              <li>
                <label>Address:</label>
                <input
                  type="text"
                  value={this.state.address}
                  onChange={this.handleChange}
                />
              </li>
              <li>
                <label>City:</label>
                <input
                  type="text"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
              </li>
            </ul>

            <h2>I will bring this to the table:</h2>
            <ul>
              <li>hot dish</li>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-free</option>
              </select>

              <li>cold dish</li>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-free</option>
              </select>
              <li>snack</li>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-free</option>
              </select>
              <li>desert</li>
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="vegetarian">Vegetarian</option>
                <option value="vegan">Vegan</option>
                <option value="gluten-free">Gluten-free</option>
              </select>
              <li>
                <label>drinks non-alcohol</label>
                <input value={this.state.value} onChange={this.handleChange} />
              </li>
              <li>
                <label>drinks alcohol</label>
                <input value={this.state.value} onChange={this.handleChange} />
              </li>
            </ul>
          </form>
        </div>
      );
    }
  };

  updateTable = props => {
    return;
  };

  deleteTable = props => {
    return;
  };
}

export default CreateTablePage;
