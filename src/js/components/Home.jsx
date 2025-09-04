import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div class="container">
			<div class="jumbotron p-5 border border-danger" >
				<h1 class="fs-1">A Warm Welcome</h1>
				<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus odio 
					in vel tenetur voluptatum reiciendis, deleniti aut, quam distinctio aspernatur 
					error dolore cum consequuntur molestias pariatur! Debitis rerum rem est!</p>
				<a class="btn btn-primary btn-lg" >Call to Action</a>
			</div>
		</div>
	);
};

export default Home;