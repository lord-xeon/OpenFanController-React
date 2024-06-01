import React, { useState } from "react";
import CircularSlider from '@fseehawer/react-circular-slider';


const DEFAULT = {
	id:0,
	name:"",
	currentValue:0,
};

export default function FanItem(props = DEFAULT){
	let [fanName, setFanName] = useState(props.name)
		, [targetValue, setTargetValue] = useState(0)
		, [isDragging, setIsDragging] = useState(false)
		;

	function updateFanName(value){
		setFanName(value.target?.innerText?.trim());
	}

	function updateFanTarget(value){
		if(!isDragging){
		}

			setTargetValue(value);
		return value;
	}

	function renderIt(...what){
		return(
		<>
			<span key="target">Target</span>
			<strong strong="value">{targetValue}</strong>
			<span key="actual">Actual</span>
			<strong key="live">{props.currentValue}</strong>
		</>);
	}

	return (
		<article className="fan-item">
			<header>
				<h4>Fan Index {props.id}</h4>
				<h5
					// contentEditable
					onBlur={updateFanName}>{fanName}</h5>
			</header>
			
			<CircularSlider
				label="Target Speed"
				max={2500}
				// appendToValue="rpm"
				renderLabelValue={renderIt()}
				// isDragging={setIsDragging}
				onChange={updateFanTarget}
			/>
		</article>
	);
}
