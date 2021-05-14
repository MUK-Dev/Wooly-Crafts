import React, { Component } from "react";
import classes from "./Products.module.css";
import CollectionsBG from "../../components/CollectionsBG/CollectionsBG";
import Input from "../../components/Input/Input";
import SizedBox from "../../components/SizedBox/SizedBox";
import BigHeading from "../../components/BigHeading/BigHeading";
import Row from "../../components/Row/Row";
import FourColumnOnLarge from "../../components/FourColumnOnLarge/FourColumnOnLarge";
import ProductCard from "../../components/ProductCard/ProductCard";
import Center from "../../components/Center/Center";

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
	};

	inputChangedHandler = (event) => {
		const updatedForm = { ...this.state.searchField };
		updatedForm.value = event.target.value;
		this.setState({ searchField: updatedForm });
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
				<BigHeading>Collections</BigHeading>
				<Center>
					<Row>
						<FourColumnOnLarge>
							<ProductCard />
						</FourColumnOnLarge>
						<FourColumnOnLarge>
							<ProductCard />
						</FourColumnOnLarge>
						<FourColumnOnLarge>
							<ProductCard />
						</FourColumnOnLarge>
						<FourColumnOnLarge>
							<ProductCard />
						</FourColumnOnLarge>
						<FourColumnOnLarge>
							<ProductCard />
						</FourColumnOnLarge>
						<FourColumnOnLarge>
							<ProductCard />
						</FourColumnOnLarge>
						<FourColumnOnLarge>
							<ProductCard />
						</FourColumnOnLarge>
						<FourColumnOnLarge>
							<ProductCard />
						</FourColumnOnLarge>
						<FourColumnOnLarge>
							<ProductCard />
						</FourColumnOnLarge>
						<FourColumnOnLarge>
							<ProductCard />
						</FourColumnOnLarge>
					</Row>
				</Center>
			</div>
		);
	}
}

export default Collections;
