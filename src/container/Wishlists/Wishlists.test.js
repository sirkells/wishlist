import React from "react";
import Wishlists from "./Wishlists";
import { store } from "../../store";
import { shallow } from "enzyme";
// import Adapter from "enzyme-adapter-react-16";
// configure({ adapter: new Adapter() });

it("renders without crashing", () => {
  shallow(<Wishlists store={store} />);
});
