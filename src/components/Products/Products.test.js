import React from "react";
import Products from "./Products";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  let testData = [
    { name: "name", productid: 1 },
    { name: "name2", productid: 2 }
  ];
  shallow(<Products items={testData} />);
});
