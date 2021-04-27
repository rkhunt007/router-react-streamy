import React from 'react';
import { Link } from 'react-router-dom';

class GoogleAuth extends React.Component {

    state = { isSignedIn: null };

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                'apiKey': 'YOUR_API_KEY',
                'clientId': '5767760932-uqe73v6dds29v4gc4m6f2fnkr8rm8ml0.apps.googleusercontent.com',
                'scope': 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({ isSignedIn: this.auth.isSignedIn.get()});
            })
        })
    }

    getUserStatus() {
        console.log(this.state.isSignedIn)
        if (this.state.isSignedIn === null) {
            return 'Loading...';
        } else if (this.state.isSignedIn) {
            return 'Logged In';
        } else if (!this.state.isSignedIn) {
            return 'Not Logged In';
        }
    }

    render() {
        return (
            <Link to="/" className="item">{this.getUserStatus()}</Link>
        )
    }
}

export default GoogleAuth;
