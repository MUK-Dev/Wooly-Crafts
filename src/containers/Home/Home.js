import React, { Component } from "react";
import Row from "../../components/Row/Row";
import TwoColumnsOnLarge from "../../components/TwoColumnsOnLarge/TwoColumnsOnLarge";
import Background from "../../components/Background/Background";
import BigHeading from "../../components/BigHeading/BigHeading";
import LandingImage from "../../assets/knitting.svg";
import SizedBox from "../../components/SizedBox/SizedBox";
import classes from "./Home.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import TwoColumnOnSmall from "../../components/TwoColumnOnSmall/TwoColumnOnSmall";
import Center from "../../components/Center/Center";
import IconButton from "../../components/IconButton/IconButton";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import axios from "../../axios";

class Home extends Component {
	state = {
		products: [],
		responseError: null,
		showSpinner: false,
	};

	componentDidMount() {
		this.setState({ showSpinner: true });
		axios
			.get("/products")
			.then((res) => {
				this.setState({ showSpinner: false, products: res.data });
			})
			.catch((err) => {
				console.log(err);
				this.setState({
					showSpinner: false,
					responseError: "Something Went Wrong...",
				});
			});
	}

	render() {
		return (
			<div className={classes.Home}>
				<Background />
				<Row>
					<TwoColumnsOnLarge>
						<SizedBox height="110px" width="0" />
						<h3
							className="center-align"
							style={{ margin: "0", padding: "20px", color: "#eaebed" }}
						>
							Knitted by Hand With Love
						</h3>
					</TwoColumnsOnLarge>
					<div>
						<TwoColumnsOnLarge>
							<SizedBox height="40px" width="0" />
							<img
								src={LandingImage}
								alt="Landing"
								className={[classes.Image3D, "hide-on-small-only"].join(" ")}
							/>
						</TwoColumnsOnLarge>
					</div>
				</Row>
				{this.state.showSpinner ? (
					<div>
						<SizedBox width="0" height="30px" />
						<LoadingSpinner />
						<SizedBox width="0" height="30px" />
					</div>
				) : this.state.responseError ? (
					<div>
						<SizedBox width="0" height="80px" />
						<BigHeading>{this.state.responseError}</BigHeading>
					</div>
				) : (
					<div>
						<SizedBox width="0" height="100px" />
						<BigHeading>Latest Releases</BigHeading>
						<Center>
							<Row>
								{this.state.products
									.reverse()
									.splice(0, 4)
									.map((product) => {
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
							<IconButton path="/products" iconType="list">
								All Products
							</IconButton>
						</Center>
						<SizedBox width="0" height="60px" />
					</div>
				)}
			</div>
		);
	}
}

export default Home;
