import * as React from "react";
import { Route, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import MicroFrontend from "./MicroFrontend";

const HOST_BROWSE = "http://localhost:8080";
const HOST_RESTAURANT = "http://localhost:8080";

const Browse = ({ history }) => (
  <MicroFrontend history={history} name="Browse" host={HOST_BROWSE} />
);

const Restaurant = ({ history, match: { params } }) => (
  <MicroFrontend
    history={history}
    name="Restaurant"
    host={HOST_RESTAURANT}
    params={{ ...params }}
  />
);

const NavLink = ({ name, route }) => (
  <Link
    style={{ padding: "0.5rem", fontSize: "2rem", textTransform: "uppercase" }}
    to={route}
  >
    {name}
  </Link>
);

const AppHeader = () => (
  <div
    style={{
      display: "inline-block",
      backgroundColor: "#332211",
      width: "100%",
      height: "48px"
    }}
  >
    <NavLink route="/" name="Browse Restaurants" />
    <NavLink route="/random" name="Surprise Me" />
    <NavLink route="/about" name="About Us" />
  </div>
);

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <AppHeader />
          <Switch>
            <Route exact path="/" component={Browse} />
            <Route path="/restaurant/:id" component={Restaurant} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
