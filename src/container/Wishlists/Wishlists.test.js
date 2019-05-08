import React from "react";
import Wishlists from "./Wishlists";
import { store } from "../../store";
import { shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// configure({ adapter: new Adapter() });

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
  expect(
    shallow(<Wishlists store={store} articles={articles} />)
  ).toMatchSnapshot();
});
