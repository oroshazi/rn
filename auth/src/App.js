import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase'
import { Header, Button, Card, CardSection, Spinner } from './components/common';
import LoginForm from './components/LoginForm'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: null,
        };
    }
    componentWillMount() {
        firebase.initializeApp({
            apiKey: 'AIzaSyDtFTPt0pO3Y_Bp_qO4p-48vlB6TfKwGw8',
            authDomain: 'auth-e71b6.firebaseapp.com',
            databaseURL: 'https://auth-e71b6.firebaseio.com',
            projectId: 'auth-e71b6',
            storageBucket: 'auth-e71b6.appspot.com',
            messagingSenderId: '626284798781'
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({
                    loggedIn: true,
                });
            } else {
                this.setState({
                    loggedIn: false,
                });
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <Card>
                        <CardSection>
                            <Button onPress={() => firebase.auth().signOut()}>Logout </Button>
                        </CardSection>
                    </Card>
                );
            case false: return <LoginForm />;
            default: return <Spinner size="large" />
        }
    }

    render() {
        return (
            <View>
                <Header headerText='Authentication' />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;