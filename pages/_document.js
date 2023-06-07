import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link
					href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css"
					rel="stylesheet"
					integrity="sha384-9ndCyUaIbzAi2FUVXJi0CjmCapSmO7SnpJef0486qhLnuZ2cdeRhO02iuK6FUUVM"
					crossorigin="anonymous"
				/>
				<link href="/css/slick.css" rel="stylesheet" />
				<link href="/css/home.css" rel="stylesheet" />
				<link type="text/css" rel="stylesheet" href="/css/bootstrap.min.css" />
				<link type="text/css" rel="stylesheet" href="/css/jquery.fullPage-number.css" />
				<link type="text/css" rel="stylesheet" href="/css/jquery.fancybox.min.css" />
				<link type="text/css" rel="stylesheet" href="/css/main.css" />
				<link type="text/css" rel="stylesheet" href="/css/main-new.css" />
				<link type="text/css" rel="stylesheet" href="/css/responsive.css" />
				<link type="text/css" rel="stylesheet" href="/css/animateslides.css" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
