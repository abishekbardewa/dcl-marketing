import React from 'react';
import Slider from 'react-slick';
const SlickSlider2 = () => {
	const CustomPrevArrow = (props) => {
		const { onClick } = props;
		return (
			<button className="slick-prev slick-arrow" onClick={onClick}>
				<img src="/images/left-arrow.png" alt="Previous" />
			</button>
		);
	};

	const CustomNextArrow = (props) => {
		const { onClick } = props;
		return (
			<button className="slick-next slick-arrow" onClick={onClick}>
				<img src="/images/right-arrow.png" alt="Next" />
			</button>
		);
	};
	const settings = {
		slidesToShow: 4,
		slidesToScroll: 1,
		dots: false,
		arrows: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 767,
				settings: {
					slidesToScroll: 1,
					slidesToShow: 2,
				},
			},
		],
		prevArrow: <CustomPrevArrow />,
		nextArrow: <CustomNextArrow />,
	};
	return (
		<Slider className="single-item slider" {...settings}>
			<div className="slide1">
				<div className="portfolio1">
					<a href="mobile/index.html" target="_blank">
						<img src="images/ionic.svg" alt="" />
						<p>Ionic</p>
					</a>
				</div>
			</div>

			<div className="slide1">
				<div className="portfolio1">
					<a href="microsoft/index.html" target="_blank">
						<img src="images/react.svg" alt="" />
						<p>React</p>
					</a>
				</div>
			</div>

			<div className="slide1">
				<div className="portfolio1">
					<a href="magento/index.html" target="_blank">
						<img src="images/angular.svg" alt="" />
						<p>Angular</p>
					</a>
				</div>
			</div>
			<div className="slide1">
				<div className="portfolio1">
					<a href="drupal/index.html" target="_blank">
						<img src="images/node-js.svg" alt="" />
						<p>Node</p>
					</a>
				</div>
			</div>
		</Slider>
	);
};

export default SlickSlider2;
