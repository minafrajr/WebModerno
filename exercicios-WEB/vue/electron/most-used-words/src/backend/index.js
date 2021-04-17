import { ipcMain } from 'electron';
const pathsToRows = require('./pathsToRows.js');
const prepareData = require('./prepareData');
const groupWords = require('./groupWords');

ipcMain.on('process-subtitles', (event, paths) => {
	pathsToRows(paths)
		.then((rows) => prepareData(rows))
		.then((words) => groupWords(words))
		.then((groupedWords) => event.reply('process-subtitles', groupedWords));
});
