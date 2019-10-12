export const mockSigninSuccess = () => ({
    response: {
        "status": 200,
        "message": "successfuly login",
        "data": {
            "id": "1",
            "fullname": "no name",
            "email": "noname@gmail.com",
            "password": "pwd",
            "username": "no user",
            "telephone": "0784",
            "image": "no",
            "createdAt": "2019-10-10T07:14:42.377Z",
            "updatedAt": "2019-10-10T07:14:42.377Z",
            "token": "no token"
        }
    }
});

export const mockSigninError = () => ({
    response: {
        "status": 400,
        "message": "Email and password not match",
    },
});
