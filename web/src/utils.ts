// get reading time
export const readingTime = (text: string) => {
	const wordsPerMinute = 200;
	const noOfWords = text.split(/\s/g).length;
	const minutes = noOfWords / wordsPerMinute;
	const readTime = Math.ceil(minutes);
	return `${readTime} min read`;
};