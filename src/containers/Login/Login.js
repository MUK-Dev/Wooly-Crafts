import React, { Component } from "react";
import classes from "./Login.module.css";
import SmallHeading from "../../components/SmallHeading/SmallHeading";
import handshake from "../../assets/handshake.svg";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import axios from "../../axios";
import { connect } from "react-redux";
import * as actionTypes from "../../reducers/actions";

class Login extends Component {
	state = {
		loginForm: {
			email: {
				elementType: "input",
				label: "Email",
				elementConfig: {
					type: "text",
				},
				value: "",
			},
			password: {
				elementType: "input",
				label: "Password",
				elementConfig: {
					type: "password",
				},
				value: "",
			},
		},
		showSpinner: false,
		responseMessage: "",
	};

	inputChangedHandler = (event, inputIdentifier) => {
		if (this.state.responseMessage !== "") {
			this.setState({ responseMessage: "" });
		}
		const updatedForm = { ...this.state.loginForm };
		const updatedElement = { ...updatedForm[inputIdentifier] };
		updatedElement.value = event.target.value;
		updatedForm[inputIdentifier] = updatedElement;
		this.setState({ loginForm: updatedForm });
	};

	submitHandler = (event) => {
		event.preventDefault();
		this.setState({ showSpinner: true });
		const email = this.state.loginForm.email.value;
		const password = this.state.loginForm.password.value;
		if (email !== "" && password !== "") {
			const credentials = {
				email: email,
				password: password,
			};
			axios
				.post("/login", credentials)
				.then((res) => {
					this.setState({
						responseMessage: res.data.message,
						showSpinner: false,
					});
					this.props.storeUser(res.data.userInfo, res.data.token);
					this.props.history.goBack();
				})
				.catch((err) => {
					console.log(err);
					this.setState({
						responseMessage: "Couldn't Login...",
						showSpinner: false,
					});
				});
		}
	};

	render() {
		const formElementArry = [];
		for (let key in this.state.loginForm) {
			formElementArry.push({
				id: key,
				config: this.state.loginForm[key],
			});
		}
		return (
			<div className={classes.LoginFormBody}>
				<div className={["card container", classes.Card].join(" ")}>
					<div className={classes.HeadingBG}>
						<img src={handshake} alt="HandShake" />
						<SmallHeading>Login</SmallHeading>
					</div>
					<form onSubmit={(event) => this.submitHandler(event)}>
						{formElementArry.map((element) => {
							return (
								<Input
									key={element.id}
									elementType={element.config.elementType}
									elementConfig={element.config.elementConfig}
									value={element.config.value}
									label={element.config.label}
									changed={(event) =>
										this.inputChangedHandler(event, element.id)
									}
								/>
							);
						})}
						{this.state.responseMessage ? (
							<SmallHeading>{this.state.responseMessage}</SmallHeading>
						) : (
							<SubmitButton>Submit</SubmitButton>
						)}
					</form>
				</div>
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		storeUser: (user, token) =>
			dispatch({ type: actionTypes.GET_USER, user: user, token: token }),
	};
};

export default connect(null, mapDispatchToProps)(Login);
