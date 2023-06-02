import Head from 'next/head';
import Image from 'next/image';
import { Inter } from 'next/font/google';
import styles from '@/styles/Home.module.css';
import Slider from 'react-slick';
import Card1 from '@/components/Card/Card1';
import SlickSlider from '@/components/Slider/Slider';
import SlickSlider2 from '@/components/Slider/SlickSlider2';
const inter = Inter({ subsets: ['latin'] });

export default function Home() {
	return (
		<>
			<div className="top-header">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-3 col-8">
							<div className="logo">
								<a href="https://www.distinctcloud.io/" target="_blank">
									<img src="/images/logo-black.png" alt="" />
								</a>
							</div>
						</div>
						<div className="col-md-9 col-4">
							<div className="top-right">
								<div className="profile-list desktop-bar">
									<ul>
										<li className="cmmi">
											<img src="images/cmmi-logo.svg" alt="" />
										</li>
										<li className="year">
											<img src="images/25-year.svg" alt="" />
										</li>
										<li className="emp">
											<img src="images/4000.svg" alt="" />
										</li>
									</ul>
								</div>
								<div className="contact-btn">
									<a href="https://www.distinctcloud.io/" target="_blank" className="desktop">
										Contact Us
									</a>
									<a href="https://www.distinctcloud.io/" target="_blank" className="mobile">
										<img src="images/call.svg" alt="" />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="mobile-bar">
				<div className="profile-list">
					<ul>
						<li className="cmmi">
							<img src="images/cmmi-logo.svg" alt="" />
						</li>
						<li className="year">
							<img src="images/25-year.svg" alt="" />
						</li>
						<li className="emp">
							<img src="images/4000%2b.svg" alt="" />
						</li>
					</ul>
				</div>
			</div>

			<div className="banner-area">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="banner-text">
								<h2>Enabling Change, Creating Impact</h2>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="main-content">
				<div className="container pad-small-0">
					<div className="row mar-small-0">
						<div className="col-md-8 col-lg-9 col-xl-9 col-12 pad-small-10">
							<div className="main-left">
								<div className="main-top">
									<h3 className="left-line">Company Deck</h3>
									<ul>
										<li>
											<a href="presentation-english/index.html" target="_blank">
												English
											</a>
										</li>
										<li>
											<a href="presentation_french/index.html" target="_blank">
												French
											</a>
										</li>
										<li>
											<a href="presentation-german/index.html" target="_blank">
												German
											</a>
										</li>
										<li>
											<a href="presentation_spanish/index.html" target="_blank">
												Spanish
											</a>
										</li>
										<li>
											<a href="brochure-arabic/index.html" target="_blank">
												Arabic
											</a>
										</li>
									</ul>
								</div>
								<div className="main-top">
									<h3 className="left-line">Region-wise Deck</h3>
									<ul>
										<li>
											<a href="presentation-uae/UAE-Presentation.pdf" target="_blank">
												UAE
											</a>
										</li>
										<li>
											<a href="Europe-Presentation/Europe-presentation.pdf" target="_blank">
												Europe
											</a>
										</li>
										<li>
											<a href="gcc/GCC.pdf" target="_blank">
												GCC
											</a>
										</li>
										<li>
											<a href="North-America-presentation/North-America-presentation.pdf" target="_blank">
												North America
											</a>
										</li>
										<li>
											<a href="Africa-presentation/Africa-presentation.pdf" target="_blank">
												Africa
											</a>
										</li>
									</ul>
								</div>
								<div className="mobile-view">
									<div className="main-top1">
										<h3 className="left-line mob-line">Our Expertise</h3>
										<div className="portfolio-slider">
											<SlickSlider2 />
										</div>
									</div>
									<div className="main-top1">
										<h3 className="left-line mob-line">Our Portfolio</h3>
										<div className="portfolio-slider">
											<SlickSlider slideClass="slide" />
										</div>
									</div>
									<div className="main-top1">
										<h3 className="left-line mob-line">Case Studies</h3>
										<div className="cs-list">
											<ul>
												<li>
													<a href="pdf/financialservices.pdf" target="_blank">
														Financial Services
													</a>
												</li>
												<li>
													<a href="pdf/Healthcare.pdf" target="_blank">
														Healthcare/Medical
													</a>
												</li>
												<li>
													<a href="pdf/Edtech.pdf" target="_blank">
														EdTech
													</a>
												</li>
												<li>
													<a href="pdf/Retail.pdf" target="_blank">
														Retail
													</a>
												</li>
												<li>
													<a href="pdf/Ecommerce.pdf" target="_blank">
														Ecommerce
													</a>
												</li>
												<li>
													<a href="pdf/Supply-chain-logistics.pdf" target="_blank">
														Supply Chain
													</a>
												</li>
												<li>
													<a href="pdf/Realestate.pdf" target="_blank">
														Real Estate
													</a>
												</li>
												<li>
													<a href="pdf/Manufacturing.pdf" target="_blank">
														Manufacturing
													</a>
												</li>
												<li>
													<a href="pdf/Media%26Entertainment.pdf" target="_blank">
														Media & Entertainment
													</a>
												</li>
												<li>
													<a href="pdf/Telecom.pdf" target="_blank">
														Telecom
													</a>
												</li>
												<li>
													<a href="pdf/Travel-Tourism.pdf" target="_blank">
														Travel/Tourism
													</a>
												</li>
												<li>
													<a href="pdf/Aviation.pdf" target="_blank">
														Aviation
													</a>
												</li>
												<li>
													<a href="pdf/Oil%26Gas.pdf" target="_blank">
														Oil & Gas
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>

								<div className="desktop-view">
									<div className="main-top1">
										<h3 className="left-line">Our Expertise</h3>
										<div className="portfolio-slider">
											<div className="desktop-box slider">
												<Card1 slideClass="slide1" label="Ionic" img="ionic.svg" src="mobile/index.html" />
												<Card1 slideClass="slide1" label="React" img="react.svg" src="mobile/index.html" />
												<Card1 slideClass="slide1" label="Angular" img="angular.svg" src="mobile/index.html" />
												<Card1 slideClass="slide1" label="Node" img="node-js.svg" src="mobile/index.html" />
											</div>
										</div>
									</div>
									<div className="main-top1">
										<h3 className="left-line">Our Portfolio</h3>
										<div className="portfolio-slider">
											<div className="desktop-box slider">
												<Card1 slideClass="slide" label="Mobile" img="mobile.svg" src="mobile/index.html" />
												<Card1 slideClass="slide" label="Microsoft" img="portfolio2.png" src="mobile/index.html" />
												<Card1 slideClass="slide" label="PHP" img="portfolio3.png" src="mobile/index.html" />
												<Card1 slideClass="slide" label="UI/UX" img="portfolio4.png" src="mobile/index.html" />
											</div>
										</div>
									</div>
									<div className="main-top1">
										<h3 className="left-line">Case Studies</h3>
										<div className="cs-list">
											<ul>
												<li>
													<a href="pdf/financialservices.pdf" target="_blank">
														Financial Services
													</a>
												</li>
												<li>
													<a href="pdf/Healthcare.pdf" target="_blank">
														Healthcare/Medical
													</a>
												</li>
												<li>
													<a href="pdf/Edtech.pdf" target="_blank">
														EdTech
													</a>
												</li>
												<li>
													<a href="pdf/Retail.pdf" target="_blank">
														Retail
													</a>
												</li>
												<li>
													<a href="pdf/Ecommerce.pdf" target="_blank">
														Ecommerce
													</a>
												</li>
												<li>
													<a href="pdf/Supply-chain-logistics.pdf" target="_blank">
														Supply Chain
													</a>
												</li>
												<li>
													<a href="pdf/Realestate.pdf" target="_blank">
														Real Estate
													</a>
												</li>
												<li>
													<a href="pdf/Manufacturing.pdf" target="_blank">
														Manufacturing
													</a>
												</li>
												<li>
													<a href="pdf/Media%26Entertainment.pdf" target="_blank">
														Media & Entertainment
													</a>
												</li>
												<li>
													<a href="pdf/Telecom.pdf" target="_blank">
														Telecom
													</a>
												</li>
												<li>
													<a href="pdf/Travel-Tourism.pdf" target="_blank">
														Travel/Tourism
													</a>
												</li>
												<li>
													<a href="pdf/Aviation.pdf" target="_blank">
														Aviation
													</a>
												</li>
												<li>
													<a href="pdf/Oil%26Gas.pdf" target="_blank">
														Oil & Gas
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-md-4 col-lg-3 col-xl-3 col-12 p-sm-0">
							<div className="main-right">
								<div className="main-right1">
									<h3>Spotlight</h3>
									<ul>
										<li>
											<a href="#" target="_blank">
												<img src="images/COE-white.svg" alt="" />
											</a>
										</li>
										<li>
											<a href="#" target="_blank">
												<img src="images/NeoNXT-white.svg" alt="" />
											</a>
										</li>
										<li className="nucleaus">
											<a href="NeoNucleus/index.html" target="_blank">
												<img src="images/neonucleus-white.svg" alt="" />
											</a>
										</li>
										<li>
											<a href="startups/index.html" target="_blank">
												<img src="images/startup-white.svg" alt="" />
											</a>
										</li>
										<li>
											<a href="agile/index.html" target="_blank">
												<img src="images/Agile-Dev-white.svg" alt="" />
											</a>
										</li>
									</ul>
								</div>
								<div className="main-right2 filtering">
									<h3>Company Brochure</h3>
									<div className="filter-cat-results">
										<ul>
											<li>
												<a href="brochure/index.html" target="_blank" data-toggle="tooltip" data-html="true" title="Brochure - English">
													<img src="images/brochure-new.jpg" alt="" />
												</a>
											</li>
										</ul>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="footer">
				<div className="container">
					<div className="row align-items-center">
						<div className="col-md-2 col-12 p-sm-0">
							<div className="footer1">
								<h3>Clientele</h3>
								<div className="mob-arrow">
									<a href="" target="_blank">
										View All Clients
									</a>
								</div>
							</div>
						</div>
						<div className="col-md-8">
							<div className="footer2">
								<ul>
									<li>
										<span>1500+</span> Clients
									</li>
									<li>
										<span>22+</span> Diverse Industries
									</li>
									<li>
										<span>7500+</span> Projects
									</li>
									<li>
										<span>50+</span> Countries
									</li>
								</ul>
							</div>
						</div>
						<div className="col-md-2">
							<div className="footer3">
								<a href="#" target="_blank">
									View All Clients
								</a>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="copy-area">
				<div className="container">
					<div className="row">
						<div className="col-md-12 p-sm-0">
							<div className="copyright">
								<p>&copy; Distinct Cloud. All Rights Reserved.</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}
