import React from 'react';
import {Button} from '../index';
import {Section} from '../index';

export default {
  title: 'Button'
};

export const Theme = () => <Section title='Buttons' titleScroll={true} >
                              <Button> Normal </Button>
                              <Button theme="is-primary"> Primary </Button>
                              <Button theme="is-warning"> Warning </Button>
                              <Button theme="is-success"> Success </Button>
                              <Button theme="is-error"> Error </Button>
                              <Button theme="is-disabled"> Disabled </Button>
                            </Section>;

