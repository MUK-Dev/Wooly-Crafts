import React, { Component } from "react";
import Row from "../../components/Row/Row";
import TwoColumnsOnLarge from "../../components/TwoColumnsOnLarge/TwoColumnsOnLarge";
import Background from "../../components/Background/Background";
import BigHeading from "../../components/BigHeading/BigHeading";
import LandingImage from "../../assets/knitting.svg";
import SizedBox from "../../components/SizedBox/SizedBox";
import classes from "./Home.module.css";
import ProductCard from "../../components/ProductCard/ProductCard";
import FourColumnOnLarge from "../../components/FourColumnOnLarge/FourColumnOnLarge";
import Center from "../../components/Center/Center";
import IconButton from "../../components/IconButton/IconButton";
import LoadingSpinner from "../../components/LoadingSpinner/LoadingSpinner";

class Home extends Component {
	state = {
		showSpinner: false,
	};

	render() {
		const landingImageClasses = [classes.Image3D, "hide-on-small-only"];
		return (
			<div>
				<Background />
				<Row>
					<TwoColumnsOnLarge>
						<SizedBox height="140px" width="0" />
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
								className={landingImageClasses.join(" ")}
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
				) : (
					<div>
						<SizedBox width="0" height="100px" />
						<BigHeading>Products Category Name</BigHeading>
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
							</Row>

							<IconButton iconType="list">All Products in Category</IconButton>
						</Center>
						<SizedBox width="0" height="60px" />
						<BigHeading>Products Category Name</BigHeading>
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
							</Row>
							<IconButton iconType="list">All Products in Category</IconButton>
						</Center>
						<SizedBox width="0" height="60px" />
					</div>
				)}
			</div>
		);
	}
}

export default Home;
