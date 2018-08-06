import React from "react";
import {Link} from "react-router-dom";
import {Accounts} from "meteor/accounts-base";

export default class Sign_up extends React.Component {

    constructor (props) {
        super(props);
        this.state = {
            error : "",
        }
    }

    onSubmit (e) {
        e.preventDefault();

        let email = this.refs.email.value.trim();
        let password = this.refs.password.value.trim();

        Accounts.createUser({ email, password}, (err) => {
            console.log("Sign_up callback", err);
        });

        /*this.setState({
            error : "something went wrong!",
        })*/
    }

    render() {
        return(
            <div>
                <h1> Sign up component here </h1>

                {this.state.error ? <p> {this.state.error} </p> : undefined}

                <form onSubmit={this.onSubmit.bind(this)}>
                    <input type="email" ref="email" name="email" placeholder="E-mail"/>
                    <input type="password" ref="password" name="password" placeholder="Password"/>
                    <button> Create account </button>
                </form>
                <Link to={"/"}> Have an account ?</Link>
            </div>
        )
    }
}