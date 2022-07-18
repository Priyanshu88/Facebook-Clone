import { Button } from '@mui/material';
import React from 'react';
import "./Login.css";
import {auth, provider} from "./firebase";
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer';

    function Login() {

        const[state, dispatch]  = useStateValue();

        const signIn = () => {
            // sign in.....
            auth
            .signInWithPopup(provider)
            .then((result) => {

                dispatch ({
                    type: actionTypes.SET_USER,
                    user: result.user,
                });

                console.log(result.user);
            })
            .catch((error) => alert(error.message));
        };

    return (
        <div className="login">
            <div className="login__logo">
                <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1200px-Facebook_f_logo%282019%29.svg.png"
                alt=""
                />

                <img
                src="https://upload.wikimedia.org/wikipedia/commons/archive/8/89/20200802174122%21Facebook_Logo_%282019%29.svg"
                alt=""
                />
            </div>
            <Button type="submit" onClick={signIn}>
                Sign In
            </Button>
        </div>
    )
    }

    export default Login