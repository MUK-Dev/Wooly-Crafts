import React, { Component } from "react";
import classes from "./Checkout.module.css";
import Row from "../../components/Row/Row";
import TwoColumnsOnLarge from "../../components/TwoColumnsOnLarge/TwoColumnsOnLarge";
import CartItem from "../../components/CartItems/CartItem/CartItem";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Center from "../../components/Center/Center";
import SizedBox from "../../components/SizedBox/SizedBox";
import { connect } from "react-redux";
import axios from "../../axios";
import SmallHeading from "../../components/SmallHeading/SmallHeading";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import * as actionTypes from "../../reducers/actions";

class Checkout extends Component {
	state = {
		checkoutForm: {
			email: {
				elementType: "input",
				label: "Email",
				elementConfig: {
					type: "text",
				},
				value: "",
			},
			name: {
				elementType: "input",
				label: "name",
				elementConfig: {
					type: "text",
				},
				value: "",
			},
			phone: {
				elementType: "input",
				label: "phone",
				elementConfig: {
					type: "text",
				},
				value: "",
			},
			address: {
				elementType: "input",
				label: "Complete Address",
				elementConfig: {
					type: "text",
				},
				value: "",
			},
		},
		showSpinner: false,
		responseMessage: null,
	};

	componentDidMount() {
		if (this.props.isUserLoggedIn) {
			const newForm = { ...this.state.checkoutForm };
			newForm.email.value = this.props.user.email;
			newForm.email.label = "";
			newForm.name.value = this.props.user.name;
			newForm.name.label = "";
			newForm.phone.value = this.props.user.phone;
			newForm.phone.label = "";
			this.setState({ checkoutForm: newForm });
		}
	}

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedForm = { ...this.state.checkoutForm };
		const updatedElement = { ...updatedForm[inputIdentifier] };
		updatedElement.value = event.target.value;
		updatedForm[inputIdentifier] = updatedElement;
		this.setState({ checkoutForm: updatedForm });
	};

	submitHandler = (event) => {
		event.preventDefault();
		this.setState({ showSpinner: true });
		const name = this.state.checkoutForm.name.value;
		const email = this.state.checkoutForm.email.value;
		const phone = this.state.checkoutForm.phone.value;
		const address = this.state.checkoutForm.address.value;
		const orderObject = {
			name: name,
			email: email,
			phone: phone,
			address: address,
			totalBill: this.props.price + 200,
			paymentMethod: "Cash On Delivery",
			order: this.props.cartItems,
		};
		axios
			.post("/orders", orderObject)
			.then((res) => {
				this.setState({ responseMessage: res.data, showSpinner: false });
				setTimeout(() => {
					this.props.emptyCart();
					this.props.history.push("/");
				}, 1500);
			})
			.catch((err) => {
				this.setState({
					responseMessage: "Couldn't Post Order...",
					showSpinner: false,
				});
			});
	};

	render() {
		const formElementArry = [];
		for (let key in this.state.checkoutForm) {
			formElementArry.push({
				id: key,
				config: this.state.checkoutForm[key],
			});
		}
		return (
			<div className={classes.Checkout}>
				<Row>
					<TwoColumnsOnLarge>
						<SizedBox width="0" height="20px" />
						{this.props.cartItems.map((item) => {
							return (
								<div key={item.name}>
									<CartItem
										name={item.name}
										price={item.price}
										image={item.image}
									/>
								</div>
							);
						})}
					</TwoColumnsOnLarge>
					<TwoColumnsOnLarge>
						<Center>
							<p>
								<b>Payment Method:</b> Cash On Delivery
							</p>
							<p>
								<b>Shipping Fee:</b> Rs 200
							</p>
							<p>
								<b>Total Bill:</b> Rs {this.props.price + 200}
							</p>
						</Center>
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
							<Center>
								{this.state.showSpinner ? (
									<LoadingSpinner />
								) : this.state.responseMessage ? (
									<SmallHeading>{this.state.responseMessage}</SmallHeading>
								) : (
									<SubmitButton>Place Order</SubmitButton>
								)}
							</Center>
						</form>
					</TwoColumnsOnLarge>
				</Row>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		isUserLoggedIn: state.user.validated,
		user: state.user.currentUser,
		cartItems: state.cart.cartItems,
		price: state.cart.totalPrice,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		emptyCart: () => dispatch({ type: actionTypes.EMPTY_CART }),
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(Checkout);
