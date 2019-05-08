import React from "react";
import Products from "./Products";
import { shallow } from "enzyme";

const articles = [
  {
    displayName: "stan smith",
    productid: "dx3694"
  },
  {
    displayName: "track",
    productid: "cx3693"
  }
];

it("renders without crashing", () => {
  expect(shallow(<Products articles={articles} />)).toMatchSnapshot();
});

// it("renders without crashing", () => {
//   let articles = [
//     { displayName: "stan smith", productid: 1 },
//     { displayName: "stan", productid: 2 }
//   ];
//   shallow(<Products items={articles} />);
// });
