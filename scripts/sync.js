import { existsSync, lstatSync, readFileSync, readdirSync } from 'fs';

import fs from 'fs';
import metadataParser from 'markdown-yaml-metadata-parser';
import path from 'path';

(async function () {
	// const title = 'Frequently Asked React Interview Questions';
	const resources = [];
	const fromDir = (startPath, filter, callback) => {
		if (!existsSync(startPath)) {
			console.log('no dir ', startPath);
			return;
		}
		const files = readdirSync(startPath);
		for (let i = 0; i < files.length; i++) {
			const filename = path.join(startPath, files[i]);
			const stat = lstatSync(filename);
			if (stat.isDirectory()) {
				fromDir(filename, filter, (res) => {
					callback?.(res);
				}); //recurse
			} else if (filename.endsWith(filter)) {
				callback?.(filename);
			}
		}
	};
	const topics = {};
	fromDir(`./contents`, '.md', (filename) => {
		const res = filename.split('/');
		const section = res[1];
		const fileContentString = readFileSync(filename, 'utf8');
		const result = metadataParser(fileContentString)?.metadata;
		const content = metadataParser(fileContentString)?.content;
		const payload = {
			title: result.title,
			content: content,
			section,
			source: result?.source
		};
		topics[section] = [...(topics[section] || []), payload];
	});
	// const tableOfContentsStringForMarkdown = Object.values(topics)
	// 	.flat(Infinity)
	// 	.map((y, i) => `- [${i + 1} ${y?.title}](#${slugify(y?.title)})\n`)
	// 	.join('');
	// const topicsStringForMarkdown = Object.values(topics)
	// 	.flat(Infinity)
	// 	.map((y, yIndex) => `${yIndex + 1}. ### ${y?.title}\n${y?.content}\n`)
	// 	.join('');
	// const resourcesStringForMarkdown = resources
	// 	.map((y, yIndex) => `- [${y.title}](${y.url}) \n`)
	// 	.join('');
	// Write the file
	// fs.writeFileSync(
	// 	'./README.md',
	// 	`# ${title} \n ### Resources \n${resourcesStringForMarkdown} \n\n ## Table of Contents\n\n${tableOfContentsStringForMarkdown}<br/><br/><br/><br/>\n\n${topicsStringForMarkdown}`
	// )
	fs.writeFileSync('./static/topics.json', JSON.stringify(topics));
	console.log(`🎯 Sync Successfully completed - ${Object.values(topics).flat(Infinity).length}`);
})();
// mark string to slug
function slugify(text) {
	return text
		.toString()
		.toLowerCase()
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		.replace(/\-\-+/g, '-') // Replace multiple - with single -
		.replace(/^-+/, '') // Trim - from start of text
		.replace(/-+$/, ''); // Trim - from end of text
}
