import React from "react";
import { shallow } from "enzyme";
import Radio from "./radio";

describe("Test Component", () => {
  let props: any;

  beforeEach(() => {
    props = {};
  });

  const renderWrapper = () => shallow(<Radio {...props} />);

  describe("Snapshots", () => {
    it("should match snapshots as normal themed", () => {
      expect(renderWrapper()).toMatchSnapshot();
    });

    it("should match snapshots as primary themed", () => {
      props.theme = "is-primary";
      expect(renderWrapper()).toMatchSnapshot();
    });
  });
});
