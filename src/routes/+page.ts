/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	let data = [];
	try {
		const res = await fetch(`/data.json`).then((res) => {
			return res.json();
		});
		data = res;
	} catch (error) {}
	return { data };
}
