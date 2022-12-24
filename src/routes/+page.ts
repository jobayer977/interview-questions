/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
	let data = [];
	try {
		const res = await fetch(`/data.json`).then((res) => {
			console.log('🚀 ~ file: +page.ts:7 ~ load ~ res', res);
			return res.json();
		});
		data = res;
	} catch (error) {}
	return { data };
}
