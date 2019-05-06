import React from "react";
import SearchBar from "./SearchBar";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<SearchBar />);
});
