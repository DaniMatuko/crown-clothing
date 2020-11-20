import React, { Component } from "react";
import FormInput from "../../components/form-input/form-input";
import CustomButton from "../../components/custom-button/custom-button";
import "./signin.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";
class SignIn extends Component {
  constructor() {
    super();

    this.state = {
      email: "",
      password: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({ email: "", password: "" });
  };

  handelChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Email"
            type="email"
            name="email"
            value={this.state.email}
            handleChange={this.handelChange}
            required
          />

          <FormInput
            label="Password"
            type="password"
            name="password"
            value={this.state.password}
            handleChange={this.handelChange}
            required
          />
          <div className="buttons">
            <CustomButton type="submit" name="submit" value="Submit Form">
              Sing In
            </CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              type="submit"
              name="submit"
              value="Submit Form"
              isGoogleSignIn
            >
              Sing In With Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}

export default SignIn;
