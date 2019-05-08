import React from "react";
import SearchBar from "./SearchBar";
import { shallow } from "enzyme";

describe("SearchBar component", () => {
  test("renders", () => {
    const wrapper = shallow(<SearchBar />);
    expect(wrapper.exists()).toBe(true);
  });
});
