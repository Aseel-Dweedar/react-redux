import React, { Component } from 'react';
import { connect } from "react-redux";
import { signIn } from '../actions';
import { signOut } from '../actions';
export class GoogleAuth extends Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: "574592045772-i2mkkv0h2odmigavpch43l1qc2vsil8o.apps.googleusercontent.com",
                scope: "email"
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.signIn(this.auth.currentUser.get().getId());
        } else {
            this.props.signOut();
        }
    };

    OnSignInClick = () => {
        this.auth.signIn();
    }

    OnSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {
        if (this.props.isSignedIn === null) {
            return null;
        } else if (this.props.isSignedIn) {
            return <button onClick={this.OnSignOutClick} className='ui red google button' >
                <i className='google icon' />
                Sign Out
            </button>
        } else {
            return <button onClick={this.OnSignInClick} className='ui red google button' >
                <i className='google icon' />
                Sign In with Google
            </button>
        }
    }

    render() {
        return <div>{this.renderAuthButton()}</div>;
    }
}

const mapStateToProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn };
}

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
