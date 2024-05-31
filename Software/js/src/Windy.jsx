import React from "react";

import FanItem from "./FanItem";

const FANS = [{
	id:0,
	name:"Fan 0",
},
{
id:1,
name:"Fan 1",
},{
id:2,
name:"Fan 2"
}]

export default function Windy(props){
	
	return (
		<section className="windy">
			Blow, Blow
			{FANS.map((v, i) => <FanItem {...v} key={v.id} />)}
		</section>
	);
}