import React from "react";

//include images into your bundle
import Jumbotron from "./Jumbotron";
import Card from "./Card"

//create your first component
const Home = () => {
	return (
		<div className = "container mt-5">
			<Jumbotron/>
			<Card/>
		</div>
	);
};

export default Home;