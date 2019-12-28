import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Main from '../components/dashboard/main.page';


Enzyme.configure({ adapter: new Adapter() });


describe('MyComponent', () => {
  it('Should show text', () => {
    const wrapper = shallow(<Main />);
    const message = wrapper.find('div');
    expect(message.text()).toBe('Welcome to Home - Dashboard');
  });
  it('Message length should be 27', () => {
    const wrapper = shallow(<Main />);
    const message = wrapper.find('div');
    expect(message.text().length).toBe(27);
  });
});
