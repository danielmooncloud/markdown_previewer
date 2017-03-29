import React from "react";
import ReactDOM from "react-dom";
import "./scss/application.scss";
import initialText from "./data/initialText.jsx";
import Application from "./components/Application.jsx";


ReactDOM.render(<Application initialText={initialText}/>, document.getElementById("container"));



