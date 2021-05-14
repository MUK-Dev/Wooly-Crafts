import React, { Component } from "react";
import classes from "./Checkout.module.css";
import Row from "../../components/Row/Row";
import TwoColumnsOnLarge from "../../components/TwoColumnsOnLarge/TwoColumnsOnLarge";
import CartItem from "../../components/CartItems/CartItem/CartItem";
import Input from "../../components/Input/Input";
import SubmitButton from "../../components/SubmitButton/SubmitButton";
import Center from "../../components/Center/Center";

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
			address: {
				elementType: "input",
				label: "Address",
				elementConfig: {
					type: "text",
				},
				value: "",
			},
		},
	};

	inputChangedHandler = (event, inputIdentifier) => {
		const updatedForm = { ...this.state.checkoutForm };
		const updatedElement = { ...updatedForm[inputIdentifier] };
		updatedElement.value = event.target.value;
		updatedForm[inputIdentifier] = updatedElement;
		this.setState({ checkoutForm: updatedForm });
	};

	submitHandler = (event) => {
		event.preventDefault();
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
						<CartItem />
						<CartItem />
						<CartItem />
						<CartItem />
					</TwoColumnsOnLarge>
					<TwoColumnsOnLarge>
						<Center>
							<p>
								<b>Payment Method:</b> Cash On Delivery
							</p>
							<p>
								<b>Total Bill:</b> Rs 10000
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
								<SubmitButton>Place Order</SubmitButton>
							</Center>
						</form>
					</TwoColumnsOnLarge>
				</Row>
			</div>
		);
	}
}

export default Checkout;
