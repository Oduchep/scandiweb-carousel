import React from "react";
import "./App.css";
import { CarouselSlider, CarouselItem } from "./components/carousel-slider";
import image1 from "./images/pexels-1.jpg";

function App() {
	return (
		<div className="container-div">
			<CarouselSlider>
				<CarouselItem>
					<p>
						The greatest glory in living lies not in never falling, but in rising every time we fall. <br />
						<br />
						<em>-Nelson Mandela</em>
					</p>
				</CarouselItem>
				<CarouselItem>
					<p>
						Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other
						people's thinking. <br />
						<br />
						<em>-Steve Jobs</em>
					</p>
				</CarouselItem>
				<CarouselItem>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc et purus eros. Maecenas bibendum bibendum justo, ut lobortis nunc dapibus
						id. Aenean sodales nisl porta risus gravida tincidunt. Integer semper, purus sit amet dictum commodo, tellus velit scelerisque purus, nec
						tincidunt sem orci eget ante. Etiam a mauris cursus, pellentesque lacus in, ultrices erat. Maecenas faucibus, sem vitae tempus imperdiet,
						lectus ante aliquet velit, sit amet egestas arcu metus ac tellus. Morbi vitae placerat sem, ut tristique nulla.
					</p>
				</CarouselItem>
				<CarouselItem>
					<img src={image1} width="100%" />
				</CarouselItem>
			</CarouselSlider>
		</div>
	);
}

export { App };
