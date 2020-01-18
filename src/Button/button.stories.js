import React from "react";
import {Button} from "../index";

export default {
  title: "Button"
};

export const Theme = () => <section>
                              <Button> Normal </Button>
                              <Button theme="is-primary"> Primary </Button>
                              <Button theme="is-warning"> Warning </Button>
                              <Button theme="is-success"> Success </Button>
                              <Button theme="is-error"> Error </Button>
                              <Button theme="is-disabled"> Disabled </Button>
                            </section>;

