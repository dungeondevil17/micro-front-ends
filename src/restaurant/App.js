import * as React from "react";
import restaurants from "../data/restaurants";

class App extends React.Component {
  constructor(props) {
    super(props);

    const { params: { id } } = props;
    const restaurantIndex = restaurants.findIndex(r => r.id === parseInt(id));
    this.restaurant = restaurantIndex > -1 ? restaurants[restaurantIndex] : {};
  }
  restaurant = {};
  render() {
    const { menuItems } = this.restaurant || {};
    return (
      <div style={{ backgroundColor: "#ed659a" }}>
        <div className="row" style={{ padding: "1rem 2rem" }}>
          <div className="col-6">
            {menuItems ? (
              menuItems.map(menuItem => (
                <div className="row" style={{ marginTop: "2rem" }}>
                  <div className="col">{menuItem.title}</div>
                  <div className="col">{menuItem.price}</div>
                  <div classNAme="col">
                    <label>Qty.</label>
                    <input type="number" title="Quantity" />
                  </div>
                </div>
              ))
            ) : null}
          </div>
          <div className="col-6">
            <img src={this.restaurant.image} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
