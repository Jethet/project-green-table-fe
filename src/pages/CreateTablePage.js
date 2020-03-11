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
      invitedFriend: "",
      allUsers: [],
      allInvitedFriends: []
    };
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = () => {
    axios
      .get("http://localhost:5000/profile/all", { withCredentials: true })
      .then(users => {
        console.log("users :", users.data);
        this.setState({
          allUsers: users.data
        });
      })
      .catch(error => console.log(error));
  };

  handleSubmit = event => {
    event.preventDefault();
    const {
      date,
      time,
      address,
      city,
      userId,
      foodAndDrinks,
      allInvitedFriends
    } = this.state;

    const allInvitedFriendsIds = allInvitedFriends.map(el => {
      return el._id;
    });
    const selectedFoodAndDrinks = foodAndDrinks.filter(el => {
      return el.isSelected;
    });
    axios
      .post(
        `${process.env.REACT_APP_API_URL}/table`,
        {
          date,
          time,
          address,
          city,
          userId,
          foodAndDrinksArray: selectedFoodAndDrinks,
          guestsIdsArray: allInvitedFriendsIds
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

  addFriend = event => {
    event.preventDefault();
    const { value } = event.target;
    const { allInvitedFriends } = this.state;
    axios
      .get(`http://localhost:5000/profile/${value}`)
      .then(user => {
        console.log("userbyUsername :", user.data);
        const newAllInvitedFriends = allInvitedFriends;
        newAllInvitedFriends.push(...user.data);
        this.setState(
          {
            allInvitedFriends: newAllInvitedFriends,
            invitedFriend: ""
          }
          // () => console.log("allInvitedFriends :", allInvitedFriends)
        );
      })
      .catch(error => console.log(error));
  };

  createTable = props => {};

  render() {
    console.log("this.state.allUsers :", this.state.allUsers);
    console.log("this.state.allUsers.length :", this.state.allUsers.length);
    return (
      <div className="table-background">
        <div className="table-container">
          <div id="create-page-header">
            <h1>Create a table!</h1>
          </div>
          <div className="create-table-form">
            <form onSubmit={this.handleSubmit}>
              <div id="date-address">
                <ul>
                  <li className="form-fields">
                    <label className="table-form-label">Date:</label>
                    <input
                      type="date"
                      name="date"
                      value={this.state.date}
                      onChange={this.handleChange}
                    />
                  </li>
                  <li className="form-fields">
                    <label className="table-form-label">Time:</label>
                    <input
                      type="time"
                      name="time"
                      value={this.state.time}
                      onChange={this.handleChange}
                    />
                  </li>
                  <li className="form-fields">
                    <label className="table-form-label">Address:</label>
                    <input
                      type="text"
                      name="address"
                      value={this.state.address}
                      onChange={this.handleChange}
                    />
                  </li>
                  <li className="form-fields">
                    <label className="table-form-label">City:</label>
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
              <div>
                <button
                  onClick={this.addFriend}
                  value={this.state.invitedFriend}
                  id="invite-friends"
                >
                  Invite friends
                </button>
                <input
                  type="text"
                  onChange={this.handleChange}
                  name="invitedFriend"
                  value={this.state.invitedFriend}
                  list="friends"
                />
                <datalist id="friends">
                  {this.state.allUsers.length
                    ? this.state.allUsers.map(user => {
                        return <option key={user._id} value={`${user.username}`} />;
                      })
                    : null}
                </datalist>
                {this.state.allInvitedFriends.map(oneUser => {
                  return <p>{oneUser.username}</p>;
                })}
                <h4>(these friends will get an invite)</h4>
              </div>
            </form>

            <h3>I will bring this to the table:</h3>
            {this.state.foodAndDrinks.map(dishObject => {
              return (
                <form>
                  <label>
                    <input
                      checked={dishObject.isSelected}
                      type="radio"
                      name={`${dishObject.dishType}#isSelected`}
                      onChange={this.handleTickBox}
                    />
                    {dishObject.nameToDisplay}
                  </label>

                  <label>
                    <input
                      checked={dishObject.isVegetarian}
                      value="Vegetarian"
                      type="radio"
                      name={`${dishObject.dishType}#isVegetarian`}
                      onChange={this.handleTickBox}
                    />
                    Vegetarian
                  </label>
                  <label>
                    <input
                      checked={dishObject.isVegan}
                      value="Vegan"
                      type="radio"
                      name={`${dishObject.dishType}#isVegan`}
                      onChange={this.handleTickBox}
                    />
                    Vegan
                  </label>

                  <label>
                    <input
                      checked={dishObject.isGlutenFree}
                      value="Gluten-free"
                      type="radio"
                      name={`${dishObject.dishType}#isGlutenFree`}
                      onChange={this.handleTickBox}
                    />
                    Gluten-free
                  </label>
                </form>
              );
            })}
          </div>
        </div>
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
