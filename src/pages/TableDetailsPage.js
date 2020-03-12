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
      .get(`${process.env.REACT_APP_API_URL}/table/${id}`)
      .then(apiResponse => {
        const theTable = apiResponse.data;
        this.setState({ theTable, isLoading: false });
      })
      .catch(err => console.log(err));
  }

  formatDate = d => {
    let date = new Date(d);
    let dd = date.getDate();
    let mm = date.getMonth() + 1;
    let yyyy = date.getFullYear();
    if (dd < 10) {
      dd = "0" + dd;
    }
    if (mm < 10) {
      mm = "0" + mm;
    }
    return (d = dd + "/" + mm + "/" + yyyy);
  };

  render() {
    console.log(this.state.theTable);
    const { date, time, address, city, guests, foodAndDrinks } = this.state.theTable;

    return this.state.isLoading ? null : (
      <div>
        <div className="table-details-background">
          <div className="table-details-container">
            <div>
              <h2 id="table-details-header">Details of this table:</h2>
            </div>
            <div>
              <h3>Date: {this.formatDate(date)}</h3>
              <h3>Guests:</h3>
              {guests.map(guest => {
                return <p>{guest.username}</p>;
              })}
              <br />
            </div>
            <div>
              <h3>What everyone is bringing:</h3>
            </div>
            {foodAndDrinks.map(food => {
              return (
                <div>
                  <p className="food-dishtype">{food.dishType}</p>
                  <ul className="table-details-list">
                    <li>{food.isVegan ? <p>vegan</p> : <p>not vegan</p>}</li>
                    <li>
                      {food.isVegetarian ? <p>vegetarian</p> : <p>not vegetarian</p>}
                    </li>
                    <li>
                      {food.isGlutenfree ? <p>gluten-free</p> : <p>not gluten-free</p>}
                    </li>
                    <li>
                      {food.isAlcohol ? (
                        <p>alcoholic drink</p>
                      ) : (
                        <p>non-alcoholic drink</p>
                      )}
                    </li>
                  </ul>
                  <br />
                </div>
              );
            })}
          </div>
          <button className="details-back-button" onClick={this.props.history.goBack}>
            Back
          </button>
        </div>
      </div>
    );
  }
}

export default TableDetailsPage;
