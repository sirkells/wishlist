import React from "react";
import App from "./App";
import { store } from "../../store";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<App store={store} />);
});
