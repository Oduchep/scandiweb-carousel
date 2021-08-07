import React, { useState } from "react";
import "./carousel-slider.css";

export const CarouselItem = ({ children, width }) => {
	const mainItemStyle = {
		width: width,
	};

	return (
		<div className="main-item" style={mainItemStyle}>
			{children}
		</div>
	);
};

const CarouselSlider = ({ children }) => {
	const [translateX, setTranslateX] = useState(0);

	const carourelItemStyle = {
		transform: `translateX(-${translateX * 100}%)`,
	};

	const updatetranslateX = (newTranslateX) => {
		if (newTranslateX >= React.Children.count(children)) {
			newTranslateX = 0;
		} else if (newTranslateX < 0) {
			newTranslateX = React.Children.count(children) - 1;
		}

		setTranslateX(newTranslateX);
	};

	return (
		<div className="carousel-slider">
			<div className="carousel-item" style={carourelItemStyle}>
				{React.Children.map(children, (child) => {
					return React.cloneElement(child, { width: "100%" });
				})}
			</div>

			<button className="btn-scroll btn-scroll-left" onClick={() => updatetranslateX(translateX - 1)}>
				<i className="arrow left"></i>
			</button>

			<div className="carousel-indicators">
				{React.Children.map(children, (item, index) => {
					return (
						<button
							className={`${index === translateX ? "indicator-active indicator" : "indicator"}`}
							onClick={() => updatetranslateX(index)}></button>
					);
				})}
			</div>

			<button className="btn-scroll btn-scroll-right" onClick={() => updatetranslateX(translateX + 1)}>
				<i className="arrow right"></i>
			</button>
		</div>
	);
};

export { CarouselSlider };
