import React from "react";
import SearchBar from "./SearchBar";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  shallow(<SearchBar />);
});
