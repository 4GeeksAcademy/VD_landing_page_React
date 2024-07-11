import React from "react";

//include images into your bundle
import Navbar from "./navbar.jsx"
import Jumbutron from "./jumbutron.jsx"
import Card from "./card.jsx"
import Footer from "./footer.jsx"
//create your first component
const Home = () => {
	return (
		<div className="">
			<Navbar />
			<div className="container">
				<Jumbutron />
				<div className="container d-flex m-2">
					<Card />
					<Card />
					<Card />
					<Card />
				</div>
			</div>

			<Footer />

		</div>
	);
};

export default Home;
