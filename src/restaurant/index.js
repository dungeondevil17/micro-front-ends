import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

window.renderRestaurant = (containerId, history, params) => {
  debugger;
  ReactDOM.render(
    <App history={history} params={params} />,
    document.getElementById(containerId)
  );
};

window.unmountRestaurant = containerId =>
  ReactDOM.unmountComponentAtNode(document.getElementById(containerId));
