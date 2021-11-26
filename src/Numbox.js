import React from "react";
import "./Numbox.css";

const Numboxes = (props) => {
	const numbers = props.number.replace(/,/gi, " ");
	return <div className="numbox">{numbers}</div>;
};

export default Numboxes;
