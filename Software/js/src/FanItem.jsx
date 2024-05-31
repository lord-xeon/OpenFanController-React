import React, { useState } from "react";
import CircularSlider from '@fseehawer/react-circular-slider';


export default function FanItem(props){
	let [fanName, setFanName] = useState(props.name);

	function updateFanName(value){
		setFanName(value.target?.innerText?.trim());
	}

	return (
		<article className="fan-item">
			<header>
				<h4>Fan Index {props.id}</h4>
				<h5 contentEditable onBlur={updateFanName}>{fanName}</h5>
			</header>
			
			<CircularSlider
				label="Target Speed"
				max={2500}

				onChange={ value => { console.log(value); } }
			/>
		</article>
	);
}