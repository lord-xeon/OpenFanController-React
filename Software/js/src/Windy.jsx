import React, { useEffect } from "react";

import { useAPI } from "./AJAX";
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
	let { data, loading}  = useAPI("http://192.168.10.4:3000/api/v0/fan/status");

	console.log("data-", data);
	
	return (
		<section className="windy">
			Blow, Blow
			{FANS.map((v, i) => <FanItem {...v} key={v.id} currentValue={data?.data?.[v.id]} />)}
		</section>
	);
}