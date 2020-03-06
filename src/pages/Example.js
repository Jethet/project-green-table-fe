handleFormSubmit = event => {
  event.preventDefault();
  const { title, description } = this.state;

  axios
    .post("http://localhost:5000/api/projects", {
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
        foodAndDrinks: [{}, {}, {}, {}, {}, {}],
        guests: []
      });
    })
    .catch(err => console.log(err));
};
