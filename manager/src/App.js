import React from 'react';
import { View, Text } from "react-native";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import firebase from "firebase";
import RedxThunk from "redux-thunk";
import reducers from "./reducers";
import LoginForm from './components/LoginForm'

class App extends React.Component {
    componentWillMount() {
        const config = {
            apiKey: "AIzaSyAQdvOP53mVDQk_epffpfLLtmCI27glXCE",
            authDomain: "manager-83736.firebaseapp.com",
            databaseURL: "https://manager-83736.firebaseio.com",
            projectId: "manager-83736",
            storageBucket: "manager-83736.appspot.com",
            messagingSenderId: "876860926118"
        };
        firebase.initializeApp(config);
    }
    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(RedxThunk))}>
                <LoginForm>
                </LoginForm>
            </Provider>
        );
    }
}

export default App;