import React from "react";

export default function RestaurantData() {
	return (
		<div>
			<h2> Restaurant Data </h2>
			<div className="restaurant_data_cont">
				{/* Map the below div against your restaurant Data */}
				<div className="restaurant_item">
					<img className="image" alt="img" width="70%" />
					<div className="name"> </div>
					<div className="type"> </div>
					<div className="rating"> </div>
					<div className="number_of_votes"> </div>
				</div>
			</div>
		</div>
	);
}
