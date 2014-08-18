var json2csv = require('./json_convert_csv.js');
var fs = require('fs');

var JSON1 = {hotdog: '3', bananas: '5', koala_bears: '2', ant_meat: '3', bread: '5'};
var arrayJSON = { 'prop1': ["elem1", "elem2", "elem3"], 'prop2': ["elem4", "elem5", "elem6"], 'prop3': ["elem7", "elem8", "elem9"] };


var string1 = "hotdog,bananas,koala_bears,ant_meat,bread, \n 3,5,2,3,5,\n";

var string2 = "prop1,prop2,prop3, \n elem1,elem4,elem7, \n elem2,elem5,elem8, \n elem3,elem6,elem9,\n";
 
var newString = json2csv.arrayDude(string1, string2);

console.log(newString);


/*

var JSON = {
    "stuff": {
        "title": "dogs butts and cat noses",
		"computer": {
            "title": "I_am_a_computer",
			"numerical data": {
                "sample": {
                    "ID": "paul dirac",
					"pizza": "meatballs",
					"more_stuff": {
                        "elements": ["mercury", "molybdenum", "lead"],
						"random_numbers": [Math.random(), Math.random()]
                    },

                }
            }
        }
    }
}






var myObj = {};
var myObj2 = {};
myObj.title = JSON["stuff"]["title"];
myObj2.GlossSeeAlso = JSON["stuff"]["computer"]["numerical data"]["sample"]["more_stuff"]["random_numbers"];

var stringo1;
var stringo2;

fs.exists('exampl3.csv', function(exist){

	if (exist){


		json2csv.convertToCsv(myObj, false, function(str){


			stringo1 = str;


		});

		json2csv.arrayToCsv(myObj2, false, function(str){

			
			stringo2 = str;

		});

		var newString = json2csv.arrayDude(stringo1, stringo2);

		fs.appendFile('example3.csv', newString, function(err){

			if (err){
				
				console.log(err);
	
			}
			
			else{
				
				console.log('file rendered and/or edited!')		
			
			}
	
		});

	}

	else{

		json2csv.convertToCsv(myObj, true, function(str){


			stringo1 = str;


		});

		json2csv.arrayToCsv(myObj2, true, function(str){

			
			stringo2 = str;

		});

		var newString = json2csv.arrayDude(stringo1, stringo2);

		fs.appendFile('example3.csv', newString, function(err){

			if (err){
				console.log(err);
			}
			else{
				console.log('file rendered and/or edited!')		
			}
	
		});


	}
});

//Let's say you get some JSON like the example below. It's unlikely you'll want to turn everything into an excel file. For example , you might want the glossary "title" and "GlossSeeAlso" parameters and values into a spreadsheet. Unfortuantely, the best way to do this is probably populate a new object and pass that into the json_convert_csv.js API. 


*/


