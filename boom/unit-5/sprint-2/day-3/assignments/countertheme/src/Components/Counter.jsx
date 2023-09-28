import React from "react";
import { useSelector } from "react-redux";
import CounterButtons from "./CounterButtons";
import CounterValue from "./CounterValue";
import Theme from "./Theme";
import "./counter.css";
const Counter = () => {
	const { theme } = useSelector((state) => state.theme);
	console.log(theme);
	return (
		// the following div classname should be chnaged accrding to the theme
		<>
			<Theme />
			<div
				data-testid='counter'
				className={theme === "light" ? "light_theme" : "dark_theme"}>
				<h1>Counter</h1>
				<CounterValue />
				<CounterButtons />
			</div>
		</>
	);
};

export default Counter;
