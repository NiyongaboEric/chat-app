import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Advert from '../components/user/Advertise/Advert';


Enzyme.configure({ adapter: new Adapter() });


describe('Advertisment', () => {
  const wrapper = shallow(<Advert />);
  it('Should advertise match snapshoot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('Should advertise return length 0', () => {
    const text = wrapper.find('advert-message');
    expect(text.length).toBe(0);
  });

  it('Should look like', () => {
    const compareMarkup=<div className="advert-message" />;
    expect(wrapper.contains(compareMarkup)).toEqual(true);
  });

  it('Should advertise shallowed', () => {
    const text = wrapper.find('advert-message');
    expect(text.exists()).toEqual(false)
  });
});
