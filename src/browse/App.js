import * as React from "react";
import restaurants from "../data/restaurants";
import { Link, Router } from "react-router-dom";

class App extends React.Component {
  render() {
    return (
      <div
        style={{
          display: "flex",
          textAlign: "center",
          justifyContent: "center",
          backgroundColor: "ed8744"
        }}
      >
        {restaurants.map(restaurant => (
          <div
            style={{
              margin: "1.5rem"
            }}
          >
            <Router history={this.props.history}>
              <Link to={`/restaurant/${restaurant.id}`}>
                <h1> {restaurant.name} </h1> <img src={restaurant.image} />
                <h3> {restaurant.description} </h3>
              </Link>
            </Router>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
