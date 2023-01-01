export const prerender = false;
/** @type {import('./$types').PageLoad} */
export async function load({ params, url }) {
	console.log('🚀 ~ file: +page.ts:4 ~ load ~ url', url);
	const res = await fetch(`${url.origin}/topics.json`);
	const data = await res.json();
	return {
		data: data[params.slug]
	};
}
