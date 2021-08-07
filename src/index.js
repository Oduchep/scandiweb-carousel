require("file-loader?name=[name].[ext]!./index.html");
import React from "react";
import ReactDOm from "react-dom";
import { App } from "./App";

const appElement = document.getElementById("app");

ReactDOm.render(<App />, appElement);
