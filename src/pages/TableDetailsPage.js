// TableDetailsPage

import React from "react";
import axios from "axios";

class TableDetailsPage extends React.Component {
  state = {
    theTable: {},
    isLoading: true
  };

  componentDidMount() {
    const { id } = this.props.match.params;

    axios
      .get(`http://localhost:5000/table/${id}`)
      .then(apiResponse => {
        const theTable = apiResponse.data;
        this.setState({ theTable, isLoading: false });
      })
      .catch(err => console.log(err));
  }

  render() {
    console.log(this.state.theTable);
    const { date, time, address, city, guests, foodAndDrinks } = this.state.theTable;

    return (
    this.state.isLoading ?
      null
      :
    <div>
      <h2>{date}</h2>
      <p>Guests:</p>
      { guests.map(guest => {
        return <p>{guest.username}</p>
      }) }

      <p>food:</p>
      { foodAndDrinks.map(food => {
        return (
          <div>
            <p>{food.dishType}</p>
            <ul>
              <li>{food.isVegan ? 
              <p>vegan</p> : <p>not vegan</p>}</li>
            </ul>
          </div>
        )
      }) }

    </div>
    )
  }
}

export default TableDetailsPage;
