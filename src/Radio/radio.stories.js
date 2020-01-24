import React from 'react';
import {Radio} from '../index';
import {Section} from '../index';

export default {
  title: 'Radio'
};

const options = [
  { value: 'yes', label: 'yes'},
  { value: 'no', label: 'no'},
];

export const Theme = () => <Section title='Radios' titleScroll={true} >
                              <Radio options = {options}/>
                            </Section>;

