import React from 'react';
import {Button} from '../index';
import {Section} from '../index';

export default {
  title: 'Button'
};

export const Theme = () => <Section title='Buttons' titleScroll={true} >
                              <Button> Normal </Button>
                              <Button theme="primary"> Primary </Button>
                              <Button theme="warning"> Warning </Button>
                              <Button theme="success"> Success </Button>
                              <Button theme="error"> Error </Button>
                              <Button theme="disabled"> Disabled </Button>
                              <Button theme="dark"> Dark </Button>
                            </Section>;

