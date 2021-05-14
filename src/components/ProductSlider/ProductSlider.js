import React from "react";
import RightArrow from "../../assets/arrow-right.png";
import LeftArrow from "../../assets/arrow-left.png";
import SampleImage from "../../assets/paperPlane.svg";
import SampleImage1 from "../../assets/sampleimg4.png";
import SampleImage2 from "../../assets/handshake.svg";
import SampleImage3 from "../../assets/knitting.svg";
import classes from "./ProductSlider.css";

const productSlider = (props) => (
	<div className="column">
		<div id="slide-wrapper">
			<img id="slideLeft" className="arrow" src={LeftArrow} />
			<div id="slider">
				<img className="thumbnail active" src={SampleImage} />
				<img className="thumbnail" src={SampleImage1} />
				<img className="thumbnail" src={SampleImage2} />
				<img className="thumbnail" src={SampleImage3} />
			</div>
			<img id="slideRight" className="arrow" src={RightArrow} />
		</div>
		<img id="featured" src={SampleImage} />
	</div>
);

export default productSlider;
