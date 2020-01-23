import React from "react";
import { shallow } from "enzyme";

import Text from "./text";

describe("Test Component", () => {
  let props: any;

  beforeEach(() => {
    props = {};
  });

  const renderWrapper = () => shallow(<Text {...props} />);

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
