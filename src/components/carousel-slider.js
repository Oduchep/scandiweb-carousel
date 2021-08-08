import React, { useState } from "react";
import "./carousel-slider.css";

export const CarouselItem = ({ children }) => {
	return <div className="main-item">{children}</div>;
};

const CarouselSlider = ({ children }) => {
	const [translateX, setTranslateX] = useState(0);

	const carourelItemStyle = {
		transform: `translateX(-${translateX * 100}%)`,
	};

	const updatetranslateX = (currentTranslateX) => {
		if (currentTranslateX >= React.Children.count(children)) {
			currentTranslateX = 0;
		}
		if (currentTranslateX < 0) {
			currentTranslateX = React.Children.count(children) - 1;
		}

		setTranslateX(currentTranslateX);
		console.log(translateX);
	};

	return (
		<div className="carousel-slider">
			<div className="carousel-item" style={carourelItemStyle}>
				{React.Children.map(children, (child) => {
					return React.cloneElement(child);
				})}
			</div>

			<div className="carousel-indicators">
				{React.Children.map(children, (item, index) => {
					return (
						<button
							className={`${index === translateX ? "indicator-active indicator" : "indicator"}`}
							onClick={() => updatetranslateX(index)}></button>
					);
				})}
			</div>

			<button className="btn-scroll btn-scroll-left" onClick={() => updatetranslateX(translateX - 1)}>
				<i className="arrow left"></i>
			</button>

			<button className="btn-scroll btn-scroll-right" onClick={() => updatetranslateX(translateX + 1)}>
				<i className="arrow right"></i>
			</button>
		</div>
	);
};

export { CarouselSlider };
