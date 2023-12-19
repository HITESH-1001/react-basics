/** @format */ import React, { useState } from "react";
export default function FBC(props) {
	let [state, changeState] = useState();

	return (
		<div>
			<p>Iam FBC {props.topic}</p>
		</div>
	);
}
