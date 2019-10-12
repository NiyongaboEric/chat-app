import * as actions from '../../../Redux/actions/signin';
import * as types from '../../../Redux/actionTypes/signinAction';
import { initialStates } from '../../../Redux/store/initialStates';
import {
    mockSigninSuccess,
    mockSigninError
 } from '../../../__mocks__/helpers';

import {
    fekeCredential,
    account,
    signinSuccessor
 } from '../../../__mocks__/index';

import configMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import expect from 'expect';
import thunk from 'redux-thunk';
import promisedMiddleware from 'redux-promise-middleware';
import axios from 'axios';
import nock from 'nock';

describe('Test signin action', () => {
    it('should create an action of a signin', () => {
        const expectedAction = {
            type: types.USER_SIGNIN,
            payload: fekeCredential,
        };
        expect(actions.signin(fekeCredential)).toEqual(expectedAction);
    });
});

describe('Test signin with Error input', () => {
    it('should fail to signin', () => {
        const expectedAction = {
            type: types.USER_SIGNIN_ERROR,
            payload: fekeCredential,
        };
        expect(actions.signinError(fekeCredential)).toEqual(expectedAction)
    });
});

const mockStore = configMockStore([thunk]);
describe('users should signin', () => {
    afterEach(() => {
        nock.cleanAll()
    });

    it('signin successful', () => {
        const response = {
            "message": "successfuly login", 
            "status": 200
        };
        nock('https://chat-app-edition-api.herokuapp.com')
        .post('/api/signin', account.credentials)
        .reply(200, response);
        const store = mockStore();
        return store
            .dispatch(actions.signinApi(account.credentials))
            .then(() => {
                localStorage.setItem('token', 'tokennn');
                expect(store.getActions()[0]).toEqual(actions.signin(response))
            })
            .catch((err) => {
                console.log('ERROROR *********', err);
            })
    });
});












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
