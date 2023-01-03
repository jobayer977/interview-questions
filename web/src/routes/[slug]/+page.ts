export const prerender = true;
/** @type {import('./$types').PageLoad} */
export async function load({ params, url, fetch }) {
	const res = await fetch(`${url.origin}/topics.json`);
	const data = await res.json();
	return {
		data: data[params.slug]
	};
}
