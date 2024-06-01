import { useState, useEffect } from "react";

export function useAPI(url, method = "get", options = {}){
	const [data, setData] = useState(null);
	const [isLoading, setIsLoading] = useState(true);

	async function fetchSomething(what){
		let resp = await fetch(what, { method, ...options })
			, data = await resp.json()
			;

		setData(data);
		setIsLoading(false);
	}

	useEffect(() => { fetchSomething(url); }, []);

	return { data, isLoading };
}
