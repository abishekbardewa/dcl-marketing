import React from 'react';

const Card1 = ({ label, img, link, slideClass }) => {
	return (
		<div className={slideClass}>
			<div className="portfolio1">
				<a href={link} target="_blank">
					<img src={'/images/' + img} alt="" />
					<p>{label}</p>
				</a>
			</div>
		</div>
	);
};

export default Card1;
