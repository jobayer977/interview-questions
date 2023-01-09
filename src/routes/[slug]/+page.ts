/** @type {import('./$types').PageLoad} */
export async function load({ params, url, fetch }) {
	const res = await fetch(`${url.origin}/topics.json`);
	const data = await res.json();
	const sectionDataRes = await fetch(`${url.origin}/sections.json`);
	const items = await sectionDataRes.json();
	const sectionData = items.find((item: any) => item?.contentFolder === params.slug);
	return {
		data: data[params.slug],
		sectionData
	};
}
