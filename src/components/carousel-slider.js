import React, { useState } from "react";
import "./carousel-slider.css";

export const CarouselItem = ({ children }) => {
	return (
		<div className="main-item">
			<div>{children}</div>
		</div>
	);
};

const CarouselSlider = ({ children }) => {
	const [translateX, setTranslateX] = useState(0);
	const [firstPosition, setFirstPosition] = useState(0);
	const [secondPosition, setSecondPosition] = useState(0);
	// const [dragging, setDragging] = useState(false)

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

	const getPositionX = (event) => {
		return event.type.includes("mouse") ? event.pageX : event.touches[0].clientX;
	};

	const touchOn = (event) => {
		setFirstPosition(getPositionX(event));
		// console.log(firstPosition);
	};

	const onMove = (event) => {
		setSecondPosition(getPositionX(event));
		// console.log(secondPosition);
	};

	const touchOff = () => {
		if (firstPosition > secondPosition) {
			console.log("it will go right");
			updatetranslateX(translateX + 1);
		}

		if (firstPosition < secondPosition) {
			console.log("it will go left");
			updatetranslateX(translateX - 1);
		}
	};

	return (
		<div
			className="carousel-slider"
			onTouchStart={touchOn}
			onMouseDown={touchOn}
			onTouchMove={onMove}
			onMouseMove={onMove}
			onTouchEnd={touchOff}
			onMouseUp={touchOff}>
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
