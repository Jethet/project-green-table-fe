import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

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
          dishType: "nonAlcoholDrink",
          nameToDisplay: "Non-alcoholic drinks",
          isSelected: false
        },
        {
          dishType: "alcoholDrink",
          nameToDisplay: "Alcoholic drinks",
          isSelected: false
        }
      ],
      guests: []
    };
  }

  handleSubmit = event => {
    event.preventDefault();
    const { date, time, address, city, userId, foodAndDrinks, guests } = this.state;
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/table`,
        {
          date,
          time,
          address,
          city,
          userId,
          foodAndDrinksArray: foodAndDrinks,
          guestsIdsArray: guests
        },
        { withCredentials: true }
      )
      .then(() => {
        // this.props.getData();
        this.setState({
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
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleTickBox = event => {
    const { name, checked } = event.target;
    const values = name.split("#");
    const dishType = values[0]; // "hotDish"
    const foodPref = values[1]; //  "isVegan"

    const updatedFoodAndDrinks = this.state.foodAndDrinks.map(el => {
      if (el.dishType === dishType) {
        el[foodPref] = !el[foodPref];

        //el["isVegan"] = !el["isVegan"]
        //el.isVegan = !el.isVegan
      }
      return el;
    });
    this.setState({ foodAndDrinks: updatedFoodAndDrinks });
    console.log(dishType, foodPref);
  };

  createTable = props => {};

  render() {
    return (
      <div className="table-background">
        <div className="table-container">
          <form onSubmit={this.handleSubmit}>
            <div>
              <h1>Create a table!</h1>
            </div>
            <div id="date-address">
              <ul>
                <li>
                  <label>Date:</label>
                  <input
                    type="date"
                    name="date"
                    value={this.state.date}
                    onChange={this.handleChange}
                  />
                </li>
                <li>
                  <label>Time:</label>
                  <input
                    type="time"
                    name="time"
                    value={this.state.time}
                    onChange={this.handleChange}
                  />
                </li>
                <li>
                  <label>Address:</label>
                  <input
                    type="text"
                    name="address"
                    value={this.state.address}
                    onChange={this.handleChange}
                  />
                </li>
                <li>
                  <label>City:</label>
                  <input
                    type="text"
                    name="city"
                    value={this.state.city}
                    onChange={this.handleChange}
                  />
                </li>
              </ul>
            </div>
            <button type="submit" id="submit-table">
              Create table
            </button>
          </form>

          <h3>I will bring this to the table:</h3>
          {this.state.foodAndDrinks.map(dishObject => {
            return (
              <form>
                <label>
                  {dishObject.nameToDisplay}
                  <input
                    checked={dishObject.isSelected}
                    type="radio"
                    name={`${dishObject.dishType}#isSelected`}
                    onChange={this.handleTickBox}
                  />
                </label>

                <label>
                  Vegetarian
                  <input
                    checked={dishObject.isVegetarian}
                    value="Vegetarian"
                    type="radio"
                    name={`${dishObject.dishType}#isVegetarian`}
                    onChange={this.handleTickBox}
                  />
                </label>
                <label>
                  Vegan
                  <input
                    checked={dishObject.isVegan}
                    value="Vegan"
                    type="radio"
                    name={`${dishObject.dishType}#isVegan`}
                    onChange={this.handleTickBox}
                  />
                </label>

                <label>
                  Gluten-free
                  <input
                    checked={dishObject.isGlutenFree}
                    value="Gluten-free"
                    type="radio"
                    name={`${dishObject.dishType}#isGlutenFree`}
                    onChange={this.handleTickBox}
                  />
                </label>
              </form>
            );
            {/* <div>
              <SearchBar friendsByUsername={this.searchResult} />
            </div>; */}
          })}
        </div>
      </div>
    );
  }

  // searchResult = oneUser => {
  //   // e.preventDefault();
  //   axios
  //     .get("http://localhost:5000/", 
  //     { userName: oneUser }, { withCredentials: true })
  //     .then(result => {
  //       return result;
  //     })
  //     .catch(err => {
  //       console.log(err);
  //     });
  // };

  updateTable = props => {
    return;
  };

  deleteTable = props => {
    return;
  };
}

export default CreateTablePage;
