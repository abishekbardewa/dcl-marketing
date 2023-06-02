import React from 'react';
import Slider from 'react-slick';
import Card1 from '../Card/Card1';
const SlickSlider = ({ slideClass }) => {
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
			<Card1 slideClass={slideClass} label="Mobile" img="mobile.svg" src="mobile/index.html" />
			<Card1 slideClass={slideClass} label="Microsoft" img="portfolio2.png" src="mobile/index.html" />
			<Card1 slideClass={slideClass} label="PHP" img="portfolio3.png" src="mobile/index.html" />
			<Card1 slideClass={slideClass} label="UI/UX" img="portfolio4.png" src="mobile/index.html" />
		</Slider>
	);
};

export default SlickSlider;
