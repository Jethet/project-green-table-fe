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

    return this.state.isLoading ? null : (
      <div>
        <div className="table-details-background">
          <div className="table-details-container">
            <div>
              <h2>Details of your table:</h2>
            </div>
            <h3>{date}</h3>
            <p>Guests:</p>
            {guests.map(guest => {
              return <p>{guest.username}</p>;
            })}

            {foodAndDrinks.map(food => {
              return (
                <div>
                  <p className="food-dishtype">{food.dishType}</p>
                  <ul className="table-details-list">
                    <li>{food.isVegan ? <p>vegan</p> : <p>not vegan</p>}</li>
                    <li>
                      {food.isVegetarian ? <p>vegetarian</p> : <p>not vegetarian</p>}
                    </li>
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

export default TableDetailsPage;
