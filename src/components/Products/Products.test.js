import React from "react";
import Products from "./Products";
import { shallow } from "enzyme";

it("renders without crashing", () => {
  let testData = [
    { name: "name", productid: 1 },
    { name: "name2", productid: 2 }
  ];
  shallow(<Products items={testData} />);
});
