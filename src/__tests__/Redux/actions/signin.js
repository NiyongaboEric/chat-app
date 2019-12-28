import React from 'react';
import { shallow, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Link, Redirect } from "react-router-dom";
import thunk from 'redux-thunk';
import configMockStore from 'redux-mock-store';

import { Signin } from '../../../components/user/signin/signin';
import expectExport from 'expect';

Enzyme.configure({ adapter: new Adapter() });

const middlewares = [thunk];
const mockStore = configMockStore(middlewares); 


const props = {
    signin: {
        email: 'example@gmail.com',
        password: 'pwd',
        message: "isMessage",
    },
    token: "mktghw",
    onSigninClick: jest.fn(),
    onhandleSubmit: jest.fn(),
    onHandleChange: jest.fn(),
    mapStateToProps: jest.fn(),
    mapDispatchToProps: jest.fn()
}

const credentials = {
    email: 'example@gmail.com',
    password: 'pwd',
}

describe('Signin', () => {
    const wrapper = shallow(<Signin {...props} />)
    test('Snapshoot', () => {
        expect(wrapper).toMatchSnapshot();
    });
});

describe('Mock store signin with state', () => {
    let component;
    component = shallow(<Signin {...props}/>);
    const e = {
        target: {
            email: 'example@gmail.com',
            password: 'pwd',
        }
    };

    it('Should submit the form', ()=> {
        const spy = jest.spyOn(component.instance(), 'onhandleSubmit');
        component.instance().forceUpdate();
        const fakeEvent = { preventDefault: ()=> credentials};
        const form = component.find("#login_form");
        form.simulate('submit', fakeEvent);
        expect(form.length).toBe(1);
        expect(spy).toHaveBeenCalled();
    });

    it('should find input fields', () => {
        const inputs = component.find('.form-input');
        expect(inputs.length).toEqual(2);
    });

    it('Should onChange method exist', () => {
        const e = {
            target: { 
                name: 'email', 
                value: 'someone@email.com' 
            }
        };
        const spyOnHandleChange = jest.spyOn(component.instance(), 'onHandleChange');
        component.instance().onHandleChange(e);
        expect(spyOnHandleChange).toHaveBeenCalledWith(e);
    });

    it('Should new email and password save in the state', ()=> {
        const email = {
            target: {
                name: 'email',
                value: 'niyo@gmail.com'
            }
        };
        const password = {
            target: {
                name: 'password',
                value: 'pwd'
            }
        };
        component.instance().onHandleChange(email);
        component.instance().onHandleChange(password);
        expect(component.state()).toEqual({ email: 'niyo@gmail.com', password: 'pwd' });
    });
});

// describe('Should test map state to props', () => {
//     let wrapper, store;

//     beforeEach(() => {
//         store = mockStore({
//             signin: {
//                 email: 'email@exampl.com',
//                 password: 'pwd',
//                 message: "I am message"
//             }
//         });
//     });

//     // wrapper = shallow(<Signin {... props} store={store}/>); 
    

//     it('Should dispatch state to props pass', () => {
//         // const spy = jest.spyOn(wrapper.instance, 'mapDispatchToProps');
//         // const button = wrapper.fin('button');
//         // button.simulate('click', )
        
//         const signinApi = () => ({ type: 'USER_SIGNIN' })

//         store.dispatch(signinApi({email: 'e', password:'r'}))
//     });

//     // it('Should map state to props pass', () => {
//         // console.log(wrapper, 'wrapper', wrapper.instance(), 'wrapper.state()',  wrapper.state(), 'wrapper.props()', wrapper.props());
//         // expect(wrapper.json()).toMatchSnapshot();
//     // });
// });

// describe('Should test map state to props', () => {
//     const wrapper = shallow(<Signin {...props}/>);
//     // console.log('before', wrapper.state(), wrapper.props());
//     // console.log('wrapper', wrapper.instance(), 'wrapper state', wrapper.state(), 'wrapper props', wrapper.props());
//     const state = {
//         signin: {
//             email: 'email@exampl.com',
//             password: 'pwd',
//         }
//     }
//     wrapper.setState(state);
//     wrapper.setProps(wrapper.state());
//     // console.log(wrapper.instance().mapStateToProps);
//     wrapper.instance().mapStateToProps(state);
//     // expect(wrapper.instance().mapStateToProps()).toHaveBeenCalledWith((state))
//     console.log('After', wrapper.state(), '22', wrapper.children());
//     // expect(wrapper.state()).t

// });

    // beforeEach(() => {
    //     const initialState = {
    //         signin: {
    //             email: 'example@gmail.com',
    //             password: 'pwd',
    //         }
    //     };
    //     store = mockStore(initialState);
    //     wrapper = shallow(
    //         <Signin {... props} store={store}/>
    //     ); 
    // });

    // it('Expect to test map state to props', () => {
    //     console.log(wrapper.props(), wrapper.props().props, wrapper.state());
    //     expect(wrapper.props().signin).toBe(props.signin);
    // });

    // test('Expect class to render', () => {
    //     expect(wrapper.find(Redirect)).toHaveLength(0);
    // })

    // const mountWrapper = mount(<Signin {...props} />)
    // test('should render signin', () => {
    //     // expect(wrapper).toMatchSnapshot();
    //     console.error('mountWrapper mountWrapper', mountWrapper);
    // });



// import * as types from '../../../Redux/actionTypes/signinAction';
// import { initialStates } from '../../../Redux/store/initialStates';
// import {
//     mockSigninSuccess,
//     mockSigninError
//  } from '../../../__mocks__/helpers';

// import {
//     fekeCredential,
//     account,
//     signinSuccessor
//  } from '../../../__mocks__/index';

// import configMockStore from 'redux-mock-store';
// import fetchMock from 'fetch-mock';
// import expect from 'expect';
// import thunk from 'redux-thunk';
// import promisedMiddleware from 'redux-promise-middleware';
// import axios from 'axios';
// import nock from 'nock';

// describe('Test signin action', () => {
//     it('should create an action of a signin', () => {
//         const expectedAction = {
//             type: types.USER_SIGNIN,
//             payload: fekeCredential,
//         };
//         expect(actions.signin(fekeCredential)).toEqual(expectedAction);
//     });
// });

// describe('Test signin with Error input', () => {
//     it('should fail to signin', () => {
//         const expectedAction = {
//             type: types.USER_SIGNIN_ERROR,
//             payload: fekeCredential,
//         };
//         expect(actions.signinError(fekeCredential)).toEqual(expectedAction)
//     });
// });

// const mockStore = configMockStore([thunk]);
// describe('users should signin', () => {
//     afterEach(() => {
//         nock.cleanAll()
//     });

//     it('signin successful', () => {
//         const response = {
//             "message": "successfuly login", 
//             "status": 200
//         };
//         nock('https://chat-app-edition-api.herokuapp.com')
//         .post('/api/signin', account.credentials)
//         .reply(200, response);
//         const store = mockStore();
//         return store
//             .dispatch(actions.signinApi(account.credentials))
//             .then(() => {
//                 localStorage.setItem('token', 'tokennn');
//                 expect(store.getActions()[0]).toEqual(actions.signin(response))
//             })
//             .catch((err) => {
//                 console.log('ERROROR *********', err);
//             })
//     });
// });












// const API_URL = 'https://chat-app-edition-api.herokuapp.com';
// const middlewares = [thunk];
// const mockStore = configMockStore(middlewares);
// describe('User signin action', () => {
//     afterEach(() => {
//         nock.cleanAll();
//     });

//     it('signin successfully', () => {
//         nock(API_URL)
//             .post('/api/signin')
//             .reply(200, { email: "test@example.com", password: "eric." })
//         const expectedAction = [{
//             type: types.USER_SIGNIN,
//             payload: {
//                 message: "successfuly login",
//                 status: 200,
//             },
//         }];
//         const store = mockStore({ });

//         return store.dispatch(actions.signinApi(account.credentials))
//             .then(() => {
//                 console.log('!!!!!!!!----', store.getActions,'---- !!!!!!!!!', store.getActions());

//                 expect(store.getActions()).toEqual(expectedAction);
//             })
//     });
// });





// const middlewares = [thunk];
// const mockStore = configMockStore(middlewares);
// describe('User signin', () => {
//     afterEach((done) => {
//         fetchMock.restore();
//         done();
//     })

//     it('User should signin succesfully', () => {
//         const url = 'https://chat-app-edition-api.herokuapp.com/api/signin';
//         const body = JSON.parse(account.credentials);
//         fetchMock.getOnce(url, {
//             signinSuccessor,
//             headers: { 'content-type': 'application/json' }
//         });

//         const expectedAction = [
//             { type: types.USER_SIGNIN, payload: body }
//         ];

//         const store = mockStore({ signin: {} });

//         return store.dispatch(actions.signinApi(body)).then(() => {
//             console.log("--------------");
//             console.error(store.getActions());
//             console.log("--------------");
//             expect(store.getActions()).toEqual(expectedAction);
//         });
//     });
// });
