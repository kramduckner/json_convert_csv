var json2csv = require('./json_convert_csv.js');
var fs = require('fs');

var JSON = {hotdog: '3', bananas: '5', koala_bears: '2', ant_meat: '3', bread: '5'};
var arrayJSON = { 'prop1': ["elem1", "elem2", "elem3"], 'prop2': ["elem4", "elem5", "elem6"], 'prop3': ["elem7", "elem8", "elem9"] };


var string1 = "hotdog,bananas,koala_bears,ant_meat,bread, \n 3,5,2,3,5,\n";

var string2 = "prop1,prop2,prop3, \n elem1,elem4,elem7, \n elem2,elem5,elem8, \n elem3,elem6,elem9,\n";
 
var newString = json2csv.concatenateStrings(string1, string2);


json2csv.JSONArraysToCsv(arrayJSON, true, function(str){

	console.log(str)

});


json2csv.JSONToCsv(JSON, true, function(str){
	
	console.log(str)

});



console.log(newString);


