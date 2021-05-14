import React, { Component } from "react";
import classes from "./Product.module.css";
import Row from "../../components/Row/Row";
import TwoColumnsOnLarge from "../../components/TwoColumnsOnLarge/TwoColumnsOnLarge";
import SmallHeading from "../../components/SmallHeading/SmallHeading";
import ProductSlider from "../../components/ProductSlider/ProductSlider";
import IconButton from "../../components/IconButton/IconButton";

class Product extends Component {
	componentDidMount() {
		this.slidesHandler();
	}

	slidesHandler = () => {
		let thumbnails = document.getElementsByClassName("thumbnail");

		let activeImages = document.getElementsByClassName("active");

		for (var i = 0; i < thumbnails.length; i++) {
			thumbnails[i].addEventListener("mouseover", function () {
				console.log(activeImages);

				if (activeImages.length > 0) {
					activeImages[0].classList.remove("active");
				}

				this.classList.add("active");
				document.getElementById("featured").src = this.src;
			});
		}

		let buttonRight = document.getElementById("slideRight");
		let buttonLeft = document.getElementById("slideLeft");

		buttonLeft.addEventListener("click", function () {
			document.getElementById("slider").scrollLeft -= 180;
		});

		buttonRight.addEventListener("click", function () {
			document.getElementById("slider").scrollLeft += 180;
		});
	};

	render() {
		return (
			<div className={classes.Product}>
				<Row>
					<TwoColumnsOnLarge>
						<ProductSlider />
					</TwoColumnsOnLarge>
					<TwoColumnsOnLarge>
						<SmallHeading>Product Name</SmallHeading>
						<hr />

						<p>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry. Lorem Ipsum has been the industry's standard dummy text
							ever since the 1500s, when an unknown printer took a galley of
							type and scrambled it to make a type specimen book.
						</p>
						<h5>Rs 1500</h5>
						<IconButton iconType="add">Add to Cart</IconButton>
					</TwoColumnsOnLarge>
				</Row>
			</div>
		);
	}
}

export default Product;
