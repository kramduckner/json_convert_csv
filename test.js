var json2csv = require('./JSONToCsv.js');

var JSON = {hotdog: '3', bananas: '5', koala_bears: '2', ant_meat: '3', bread: '5'};


json2csv.convertToCsv(JSON, function(str){

	console.log(str)

	});

