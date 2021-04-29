import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                'apiKey': 'YOUR_API_KEY',
                'clientId': '5767760932-uqe73v6dds29v4gc4m6f2fnkr8rm8ml0.apps.googleusercontent.com',
                'scope': 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        })
    }

    onAuthChange = (isSignIn) => {
        if (isSignIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    getUserStatus = () => {
        if (this.props.isSignedIn === null) {
            return '';
        } else if (this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignOutClick}>
                    <i className="icon google"></i>
                    Sign out
                </button>
            );
        } else if (!this.props.isSignedIn) {
            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="icon google"></i>
                    Sign in
                </button>
            );
        }
    }

    render() {
        return (
            <Link to="/" className="item">{this.getUserStatus()}</Link>
        )
    }
}

const mapStateToProps = state => {
    return {
        isSignedIn: state.auth.isSignedIn
    }
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
