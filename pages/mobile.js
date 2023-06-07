import React, { useEffect, useState } from 'react';
import ReactFullpage from '@fullpage/react-fullpage';
const Mobile = () => {
	useEffect(() => {
		// document.body.classList.add('mobile-dev-page');
		document.body.style.background = '#fff';
	}, []);
	let SCROLLING_SPEED = 700;
	let fromIndex = 1;

	return (
		<ReactFullpage
			id="fullpage"
			//fullpage options
			licenseKey={'YOUR_KEY_HERE'}
			scrollHorizontally={true} /* Because we are using the extension */
			scrollHorizontallyKey={'YOUR KEY HERE'}
			sectionsColor={[]}
			sectionSelector={'.vertical-scrolling'}
			slideSelector={'.horizontal-scrolling'}
			navigation={true}
			responsiveWidth={992}
			slidesNavigation={true}
			controlArrows={false}
			slidesNavPosition="bottom"
			anchors={[
				'welcome',
				'digital-accelerators',
				'quick-facts',
				'our-services',
				'platforms-catered',
				'ios',
				'android',
				'cross-platform',
				'cross-platform1',
				'web-development',
				'our-strategy',
				'our-work-start',
				'our-work1',
				'our-work2',
				'our-work3',
				'our-work4',
				'our-work5',
				'our-work6',
				'our-work7',
				'our-work8',
				'our-work9',
				'our-work10',
				'our-work11',
				'clientele',
				'thank-you',
			]}
			navigationTooltips={[
				'Welcome',
				'Digital Accelerators',
				'Quick Facts',
				'Our Services',
				'Platforms Catered',
				'iOS',
				'Android',
				'Cross-Platform',
				'Technologies',
				'PWA',
				'Process',
				'Our Work',
				'Our Work',
				'Our Work',
				'Our Work',
				'Our Work',
				'Our Work',
				'Our Work',
				'Our Work',
				'Our Work',
				'Our Work',
				'Our Work',
				'Our Work',
				'Clientele',
				'Thank You',
			]}
			menu={'#menu'}
			scrollingSpeed={SCROLLING_SPEED}
			fitToSection={true}
			verticalCentered={false}
			lazyLoading={true}
			afterLoad={function (anchorLink, index) {}}
			onLeave={function (index, nextIndex, direction) {}}
			afterSlideLoad={function (anchorLink, index, slideAnchor, slideIndex) {
				if (!fromIndex) {
					console.log('here');
					$('.fp-section').find('.fp-slidesContainer').fadeIn(0);
					$.fn.fullpage.setScrollingSpeed(SCROLLING_SPEED);
				}
			}}
			onSlideLeave={function (anchorLink, index, slideIndex, direction) {
				fromIndex = slideIndex;
				if (!slideIndex) {
					$.fn.fullpage.setScrollingSpeed(0);
					$('.fp-section').find('.fp-slidesContainer').hide();
				}
			}}
			render={({ state, fullpageApi }) => {
				return (
					<ReactFullpage.Wrapper>
						{/* <!-------section1--------> */}
						<section className="vertical-scrolling section" data-anchor="welcome" id="section1">
							<div className="mobile-first-journey-sec">
								<div className="container-fluid">
									<div className="row row-align-center">
										<div className="col-md-8 col-lg-9 col-sm-7">
											<img src="/images/logo-black.png" alt="distinct-cloud-labs-logo" className="img-fluid neo-main-logo" />
										</div>
										<div className="col-md-4 col-lg-3 col-sm-5">
											<img src="/images/cmmi-logo-white-01.svg" className="cmmi-logo2" />
										</div>
									</div>
								</div>
								<div className="container-fluid">
									<div className="row align-items-center">
										<div className="col-lg-6 col-md-5 col-sm-5">
											<img src="/images/mobile-in-hand.png" className="img-fluid mobile-hand" />
											{/* <!-- <img src="/images/cmmi-logo-white-01.svg" className="cmmi-logo2">	 --> */}
										</div>
										<div className="col-lg-6 col-md-7 col-sm-7">
											<div className="mobile-title-section">
												<h2 className="mob-title-area">
													Get Ready For <br /> a &lsquo;<span className="mobile-first-border">Mobile-First</span> <br />
													Journey
												</h2>
												<p className="mob-caption-area">Mobile Application Development Services</p>
												{/* <!-- <img src="/images/cmmi-logo-white-01.svg" className="cmmi-logo2">	 --> */}
											</div>
										</div>
									</div>
								</div>
								<div className="mobile-footer-sec">
									<ul className="neo-bottom-details">
										<li className="neo-web-details">
											<a href="https://neosofttech.com/" target="_blank">
												www.neosofttech.com
											</a>
										</li>
										<li className="neo-mail-details">
											<a href="mailto:sales@neosofttech.com" target="_blank">
												sales@neosofttech.com
											</a>
										</li>
										<li className="neo-contact-details">
											<a href="tel:02240500600" target="_blank">
												+91 22 40500600
											</a>
										</li>
									</ul>
								</div>
							</div>
						</section>
						{/* <!-------section2--------> */}
						<section className="vertical-scrolling section" data-anchor="digital-accelerators" id="section2">
							<div className="slide-number">Digital Accelerators</div>
							<div className="digital-acc-main-area">
								<div className="container-fluid">
									<div className="row">
										<div className="col-lg-6 col-md-6 col-sm-6  digital-left-area">
											<div className="digital-accelerator-title-area">
												<h2 className="digital-acc-title">
													We’re
													<br />
													Digital
													<br />
													Accelerators
												</h2>
												<p className="digital-acc-caption">
													Building Cohesive Mobile Solutions <br />
													for Startups, SMEs, MSMEs, <br />
													Agencies & Enterprises
												</p>
												{/* <!-- <img src="/images/cmmi-logo-white-01.svg" className="cmmi-logo">		 --> */}
											</div>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-6 digital-right-area">
											<div className="digital-accelerator-content-area">
												<ul className="digital-acc-listing">
													<li className="digital-acc-listing-elements">
														<div className="digital-acc-listing-inner">
															{/* <!-- <p className="digital-acc-listing-content"><span style={{fontWeight: 600}}>CMMi Level 5</span> <br/> Rated</p> --> */}
															<p className="digital-acc-listing-content">
																<span style={{ fontWeight: 600 }}>25+ Years </span>
																<br /> of Excellence
															</p>
														</div>
													</li>
													<li className="digital-acc-listing-elements">
														<div className="digital-acc-listing-inner">
															{/* <!-- <p className="digital-acc-listing-content"><span style={{fontWeight: 600}}>25+ Years </span><br/> of Excellence</p> --> */}
															<p className="digital-acc-listing-content">
																<span style={{ fontWeight: 600 }} id="data1">
																	0
																</span>
																<br />
																Talent Pool
															</p>
														</div>
													</li>
													<li className="digital-acc-listing-elements">
														<div className="digital-acc-listing-inner">
															<p className="digital-acc-listing-content">
																<span style={{ fontWeight: 600 }} className="data5">
																	0
																</span>
																<br /> Happy Clients
															</p>
														</div>
													</li>
													<li className="digital-acc-listing-elements">
														<div className="digital-acc-listing-inner">
															<p className="digital-acc-listing-content">
																<span style={{ fontWeight: 600 }} id="data2">
																	0
																</span>
																<br /> Global Offices
															</p>
														</div>
													</li>
													<li className="digital-acc-listing-elements">
														<div className="digital-acc-listing-inner">
															<p className="digital-acc-listing-content">
																<span style={{ fontWeight: 600 }} id="data3">
																	0
																</span>
																<br />
																Development <br />
																Centers
															</p>
														</div>
													</li>
													<li className="digital-acc-listing-elements">
														<div className="digital-acc-listing-inner">
															<p className="digital-acc-listing-content">
																<span style={{ fontWeight: 600 }} id="data12"></span> <br />
																Development <br />
																Hours
															</p>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>

						{/* <!-------section2--------> */}
						<section className="vertical-scrolling section" data-anchor="quick-facts" id="section2">
							<div className="slide-number">Quick Facts</div>
							<div className="digital-acc-main-area">
								<div className="container-fluid">
									<div className="row">
										<div className="col-lg-6 col-md-6 col-sm-6  digital-left-area">
											<div className="digital-accelerator-title-area">
												<h2 className="digital-acc-title">
													We’re
													<br />
													Experts At
													<br />
													What We Do
												</h2>
												<p className="digital-acc-caption">
													We develop seamless experiences
													<br /> on any device using the best mobile <br />
													technology for your business
												</p>
											</div>
										</div>
										<div className="col-lg-6 col-md-6 col-sm-6 digital-right-area">
											<div className="digital-accelerator-content-area">
												<ul className="digital-acc-listing">
													<li className="digital-acc-listing-elements">
														<div className="digital-acc-listing-inner">
															<p className="digital-acc-listing-content">
																<span style={{ fontWeight: 600 }} id="data9">
																	0
																</span>
																<br /> Mobile Apps <br />
																Published
															</p>
														</div>
													</li>
													<li className="digital-acc-listing-elements">
														<div className="digital-acc-listing-inner">
															<p className="digital-acc-listing-content">
																<span style={{ fontWeight: 600 }} id="data10">
																	0
																</span>{' '}
																<br />
																Cross-Platform
																<br />
																Applications
															</p>
														</div>
													</li>
													<li className="digital-acc-listing-elements">
														<div className="digital-acc-listing-inner">
															{/* <!-- <p className="digital-acc-listing-content"><span style={{ fontWeight: 600 }} >300+</span><br/>Talent Pool</p> --> */}
															<p className="digital-acc-listing-content">
																<span style={{ fontWeight: 600 }}>300+</span>
																<br />
																Mobile Experts
															</p>
														</div>
													</li>
													<li className="digital-acc-listing-elements">
														<div className="digital-acc-listing-inner">
															<p className="digital-acc-listing-content">
																<span style={{ fontWeight: 600 }} className="data7">
																	0
																</span>{' '}
																<br />
																Industry Verticals
															</p>
														</div>
													</li>
													<li className="digital-acc-listing-elements">
														<div className="digital-acc-listing-inner">
															<p className="digital-acc-listing-content">
																<span style={{ fontWeight: 600 }} id="data6">
																	0
																</span>{' '}
																<br />
																Countries Served
															</p>
														</div>
													</li>
													<li className="digital-acc-listing-elements">
														<div className="digital-acc-listing-inner">
															<p className="digital-acc-listing-content">
																<span style={{ fontWeight: 600 }} id="data8">
																	0
																</span>{' '}
																<br />
																Client Retention{' '}
															</p>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</section>
					</ReactFullpage.Wrapper>
				);
			}}
		/>
	);
};

export default Mobile;
