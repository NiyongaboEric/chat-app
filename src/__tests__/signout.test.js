import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Signout from '../components/user/signout/signout';
import { Redirect } from 'react-router-dom'

Enzyme.configure({ adapter: new Adapter() });


describe('Signout', () => {
  const wrapper = shallow(<Signout />);
  it('Should signout match snapshoot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should look like', () => {
    const compareMarkup=<Redirect to="/signin"/>;
    expect(wrapper.contains(compareMarkup)).toEqual(true);
  });

  it('Should redirect rendered ', () => {
    expect(wrapper.find(Redirect)).toHaveLength(1);
  });
});
