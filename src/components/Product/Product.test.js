import React from "react";
import Product from "./Product";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<Product />);
});
