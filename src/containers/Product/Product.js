import React, { Component } from "react";
import classes from "./Product.module.css";
import Row from "../../components/Row/Row";
import TwoColumnsOnLarge from "../../components/TwoColumnsOnLarge/TwoColumnsOnLarge";
import SmallHeading from "../../components/SmallHeading/SmallHeading";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";
import axios from "../../axios";
import { connect } from "react-redux";
import * as actionTypes from "../../reducers/actions";
import * as links from "../../serverLink";

class Product extends Component {
	state = {
		product: {},
		images: [],
		showSpinner: false,
		responseMessage: null,
	};

	componentDidMount() {
		this.setState({ showSpinner: true });
		axios
			.get(`/products/${this.props.match.params.productId}`)
			.then((res) => {
				this.setState({
					product: res.data,
					images: res.data.images,
					showSpinner: false,
				});
				this.slidesHandler();
			})
			.catch((err) => {
				this.setState({
					responseMessage: "Something went wrong",
					showSpinner: false,
				});
			});
	}

	slidesHandler = () => {
		let thumbnails = document.getElementsByClassName("thumbnail");
		let activeImages = document.getElementsByClassName("active");
		for (var i = 0; i < thumbnails.length; i++) {
			thumbnails[i].addEventListener("mouseover", function () {
				if (activeImages.length > 0) {
					activeImages[0].classList.remove("active");
				}
				this.classList.add("active");
				document.getElementById("featured").src = this.src;
			});
		}
	};

	render() {
		return (
			<div className={classes.Product}>
				{this.state.responseMessage ? (
					<SmallHeading>{this.state.responseMessage}</SmallHeading>
				) : (
					<Row>
						{this.state.showSpinner ? (
							<LoadingSpinner />
						) : (
							<TwoColumnsOnLarge>
								<ProductSlider images={this.state.images} />
							</TwoColumnsOnLarge>
						)}
						{this.state.showSpinner ? null : (
							<TwoColumnsOnLarge>
								<SmallHeading>{this.state.product.name}</SmallHeading>
								<hr />

								<p>{this.state.product.description}</p>
								<h5>Rs {this.state.product.price}</h5>
								<button
									onClick={() =>
										this.props.addToCart(
											this.state.product.name,
											this.state.product.price,
											`${links.serverLink}${this.state.images[0]}`
										)
									}
									className="waves-effect waves-light btn"
									style={{ backgroundColor: "#ff8882" }}
								>
									<i className="material-icons left">add</i>
									Add to Cart
								</button>
							</TwoColumnsOnLarge>
						)}
					</Row>
				)}
			</div>
		);
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		addToCart: (name, price, imageUrl) =>
			dispatch({
				type: actionTypes.ADD_TO_CART,
				name: name,
				price: price,
				image: imageUrl,
			}),
	};
};

export default connect(null, mapDispatchToProps)(Product);
