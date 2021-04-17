module.exports = (rows) => {
	return new Promise((resolver, reject) => {
		try {
			//para exibir o está chegando na promise prepareData
			//console.log(rows);

			//dessa maneira modo antigo funcionou
			const words = rows
				.filter(FilterValidRow)
				.map((row) => row.replace(/[,?!.-]/g, ''))
				.map((row) => row.replace(/(<[^>]+)>/gi, '').trim())
				.reduce((fullText, row) => {
					return `${fullText} ${row}`;
				}, 0)
				.split(' ')
				.map((word) => word.toLowerCase());

			//programação funcional, mas não funcionou!
			/*
			const words = rows
			.filter(FilterValidRow)
			.map(removePunctuation)
			.map(removeTags)
			.reduce(mergeRows)
			.split('')
			.map((word) => word.toLowerCase());
			*/

			console.log(words);
			resolver(words);
		} catch (error) {
			reject(error);
		}
	});
};

function FilterValidRow(row) {
	const notNumber = !parseInt(row.trim());
	const notEmpty = !!row.trim();
	const notInterval = !row.includes('-->');
	return notNumber && notEmpty && notInterval;
}

const removePunctuation = (row) => row.replace(/[,?!.-]/g, '');
const removeTags = (row) => row.replace(/(<[^>]+)>/gi, '').trim();
const mergeRows = () => {
	(fullText, row) => {
		return `${fullText} ${row}`;
	},
		0;
};
