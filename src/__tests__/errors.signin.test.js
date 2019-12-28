import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Signin from '../components/errors/signin';


Enzyme.configure({ adapter: new Adapter() });

const props = {
  error: "Signin failed"
};

describe('Signin Errors', () => {
  const wrapper = shallow(<Signin {...props}/>);
  it('Should errors passed', () => {
    const text = wrapper.find('div p');
    expect(text.text()).toBe(props.error);
  });
});
