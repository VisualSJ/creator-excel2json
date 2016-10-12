'use strict';

const Fs = require('fs');
const Path = require('path');
const Xlsx = require('node-xlsx');

exports.imoprt = function (file, callback) {
	var json = null;

	if (!Fs.existsSync(file)) {
		return callback(new Error('找不到指定文件'), json);
	}

	var extname = Path.extname(file);

	switch (extname) {
		case '.xlsx':
			json = Xlsx.parse(file);
			break;
		default:
			callback(new Error('导入 excel 出现错误 - 未知的文件格式'), json);
	}

	callback(null, json);
};