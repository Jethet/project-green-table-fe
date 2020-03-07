// TableDetailsPage

import React from "react";
import axios from "axios";

function TableDetails() {
  const { id } = this.props.match.params;

  axios
    .get(`http://localhost:5000/api/table/${id}`)
    .then(apiResponse => {
      const theTable = apiResponse.data;
      this.setState(theTable);
    })
    .catch(err => console.log(err));
}

export default TableDetails;
