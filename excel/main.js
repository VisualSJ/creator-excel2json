'use strict';

const Excel = require('./lib/excel');

module.exports = {
	load () {
	},

	unload () {
	},

	messages: {
		'open' () {
			Editor.Panel.open('excel');
		},

		'import-file' (event, file) {
			Excel.imoprt(file, function (error, json) {
				if (error) {
					Editor.error(error);
				}
				event.reply && event.reply(error, json);
			});
		}
	}
};