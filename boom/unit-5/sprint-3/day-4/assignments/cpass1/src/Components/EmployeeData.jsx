import React from "react";

export default function EmployeeData() {
	return (
		<div>
			<h2>Employee Data</h2>
			<div className="employee_data_cont">
				{/* Map the below div against yoru employee data */}
				<div className="employee" style={{ width: "250px" }}>
					<img className="image" alt="img" width="70%" />
					<div className="name"> </div>
					<div className="gender"> </div>
					<div className="department"> </div>
				</div>
			</div>
		</div>
	);
}
