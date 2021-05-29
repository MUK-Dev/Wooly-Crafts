import React, { Component } from "react";
import classes from "./Products.module.css";
import CollectionsBG from "../../components/CollectionsBG/CollectionsBG";
import Input from "../../components/Input/Input";
import SizedBox from "../../components/SizedBox/SizedBox";
import BigHeading from "../../components/BigHeading/BigHeading";
import Row from "../../components/Row/Row";
import TwoColumnOnSmall from "../../components/TwoColumnOnSmall/TwoColumnOnSmall";
import ProductCard from "../../components/ProductCard/ProductCard";
import Center from "../../components/Center/Center";
import axios from "../../axios";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import SmallHeading from "../../components/SmallHeading/SmallHeading";

class Collections extends Component {
	state = {
		searchField: {
			elementType: "inputSearch",
			label: "Search",
			elementConfig: {
				type: "text",
			},
			value: "",
		},
		products: [],
		showSpinner: false,
		responseMessage: null,
	};

	componentDidMount() {
		this.setState({ showSpinner: true });
		axios
			.post("/search")
			.then((res) => {
				this.setState({ products: res.data, showSpinner: false });
			})
			.catch((err) => {
				console.log(err);
				this.setState({
					responseMessage: "Something went wrong...",
					showSpinner: false,
				});
			});
	}

	inputChangedHandler = (event) => {
		const updatedForm = { ...this.state.searchField };
		updatedForm.value = event.target.value;
		this.setState({ searchField: updatedForm, showSpinner: true });
		const searchName = {
			searchTerm: updatedForm.value,
		};
		axios
			.post("/search", searchName)
			.then((res) => {
				this.setState({ products: res.data, showSpinner: false });
			})
			.catch((err) => {
				console.log(err);
				this.setState({
					responseMessage: "Something went wrong...",
					showSpinner: false,
				});
			});
	};

	render() {
		return (
			<div className={classes.Collections}>
				<CollectionsBG />
				<Input
					elementType={this.state.searchField.elementType}
					elementConfig={this.state.searchField.elementConfig}
					value={this.state.searchField.value}
					label={this.state.searchField.label}
					changed={(event) => this.inputChangedHandler(event)}
				/>
				<SizedBox height="50px" />
				{this.state.responseMessage ? (
					<BigHeading>{this.state.responseMessage}</BigHeading>
				) : (
					<BigHeading>Collections</BigHeading>
				)}
				{this.state.showSpinner ? (
					<LoadingSpinner />
				) : (
					<Center>
						{this.state.products.length !== 0 ? (
							<Row>
								{this.state.products.reverse().map((product) => {
									return (
										<div key={product._id}>
											<TwoColumnOnSmall>
												<ProductCard
													productId={product._id}
													title={product.name}
													price={product.price}
													sold={product.soldOut}
													image={product.images[0]}
												/>
											</TwoColumnOnSmall>
										</div>
									);
								})}
							</Row>
						) : (
							<SmallHeading>No Products Found...</SmallHeading>
						)}
					</Center>
				)}
			</div>
		);
	}
}

export default Collections;
