import React, { Component } from "react";
import axios from "axios";

class CreateTablePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: "",
      time: "",
      address: "",
      city: "",
      userId: "",
      foodAndDrinks: [
        {
          dishType: "hotDish",
          nameToDisplay: "Hot dish",
          isSelected: false,
          isVegetarian: false,
          isVegan: false,
          isGlutenFree: false
        },
        {
          dishType: "coldDish",
          nameToDisplay: "Cold dish",
          isSelected: false,
          isVegetarian: false,
          isVegan: false,
          isGlutenFree: false
        },
        {
          dishType: "snack",
          nameToDisplay: "Snack",
          isSelected: false,
          isVegetarian: false,
          isVegan: false,
          isGlutenFree: false
        },
        {
          dishType: "desert",
          nameToDisplay: "Desert",
          isSelected: false,
          isVegetarian: false,
          isVegan: false,
          isGlutenFree: false
        },
        {
          dishType: "nonAlcohol",
          nameToDisplay: "Non-alcoholic drinks",
          isSelected: false
        },
        {
          dishType: "alcohol",
          nameToDisplay: "Alcoholic drinks",
          isSelected: false
        }
      ],
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
        }).catch(err => console.log(err));
      });
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  createTable = props => {};

  render() {
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
        </form>

        <h2>I will bring this to the table:</h2>

        {/* <li>hot dish</li>
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
            </select> */}
        {/* <ul>
            <li>
              <label>drinks non-alcohol</label>
              <input value={this.state.value} onChange={this.handleChange} />
            </li>
            <li>
              <label>drinks alcohol</label>
              <input value={this.state.value} onChange={this.handleChange} />
            </li>
          </ul> */}

        {this.state.foodAndDrinks.map(dishObject => {
          return (
            <form>
              <label>
                {dishObject.nameToDisplay}
                <input
                  checked={dishObject.isSelected}
                  type="radio"
                  name="hotDish"
                  id=""
                />
              </label>
              <label>
                Vegetarian
                <input
                  checked={dishObject.isVegetarian}
                  value="Vegetarian"
                  type="radio"
                  name="isVegetarian"
                  id=""
                />
              </label>
              <label>
                Vegan
                <input
                  checked={dishObject.isVegan}
                  value="Vegan"
                  type="radio"
                  name="isVegan"
                  id=""
                />
              </label>

              <label>
                Gluten-free
                <input
                  checked={dishObject.isGlutenFree}
                  value="Gluten-free"
                  type="radio"
                  name="isGlutenFree"
                  id=""
                />
              </label>
            </form>
          );
        })}
      </div>
    );
  }

  updateTable = props => {
    return;
  };

  deleteTable = props => {
    return;
  };
}

export default CreateTablePage;
