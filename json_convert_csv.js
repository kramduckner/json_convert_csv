//what do you call a cell phone who can't receive phone calls?
// a phony	


module.exports = {
	
	JSONToCsv: function(obj, includeTitles, callback) {	


			var str = ''; 

			//setting up default argument for includeTitles to 'true'
			
			if (typeof includeTitles === 'function'){
				callback = makeFile;		
				makeFile = true;
			}
			
			else if (typeof includeTitles === "undefined"){   
			
				makeFile = true;
	
				}  


				if (includeTitles === true){
			
					for (item in obj){
		
						str += item + ',';
						
					}
					str += '\n';
					firstTime = false;
				}	
				
			
					for (item in obj){
				
						str += obj[item] + ',';
				
					}
				
					str += '\n';

				if (typeof callback === 'function'){
					
					callback(str);					
			}
				},


	JSONArraysToCsv: function(JSON, includeTitles, callback) { 

	var csvString = '';
	var arrayOfArrays = [];
	var bufferArray = [];
	var numOfElem = 0;
	var otherCount = 0;
	var firstIteration = true;
	var count = 0;

	if (typeof includeTitles === 'function'){  //setting up default value for makeFile argument
				callback = makeFile;		
				makeFile = true;
			}
			
			else if (typeof includeTitles === "undefined"){   
			
				makeFile = true;
	
				}  

	if (includeTitles === true){
		for (prop in JSON) {
	
			csvString += prop + ',';
		
		}
	}
	
	csvString += '\n';

	
	
	for (prop in JSON) { //need to get count for loop populating the arrayOfArrays

		count++
						
	}
	


	

	for (prop in JSON){   //populate the buffer array
	
		for (elem in JSON[prop]){
				

			bufferArray.push(JSON[prop][elem]);
			
			if (firstIteration === true){
	
				numOfElem++
			
			}
			
			
		}
			firstIteration = false;

	}	

	for (var i = 0; i < numOfElem; i++){ 


		arrayOfArrays[i] = [];

	}




	for (var i = 0; i < numOfElem; i++){  //populating the arrayOfArrays

		otherCount = i;

		for (var j = 0; j < count; j++){

			arrayOfArrays[i].push(bufferArray[otherCount]);

			otherCount = otherCount + numOfElem;					
						
		}


	}
			


	for (array in arrayOfArrays){ //finally transferring the elements in arrayOfArrays into the csv string

		for (elem in arrayOfArrays[array]){
		
		csvString += arrayOfArrays[array][elem] + ','		

			}
			
		csvString += '\n';

		}



	if (typeof callback === 'function'){
					
		callback(csvString);					
		
	}




},

 concatenateStrings: function(str1, str2){
	
	var rowCount1 = 0;
	var columnCount1 = 0;
	var rowCount2 = 0;
	var columnCount2 = 0;
	var array1 = [];
	var array2 = [];	
	var string1 = '';
	var string2 = '';
	var firstIteration1 = true;
	var firstIteration2 = true;
	var addStart;
	var numberOfRows;
	var lineCount = 0;



	for (var i =0; i < str1.length; i++){  
	
		if (str1[i] === "," && firstIteration1 === true){
		
			columnCount1++;

		}

		if (str1[i] === "\n"){
			
			firstIteration1 = false;
			rowCount1++;
		}
	}

	for (var i =0; i< str2.length; i++){  
	
		if (str2[i] === "," && firstIteration2 === true){
		
			columnCount2++;

		}

		if (str2[i] === "\n"){
			
			firstIteration2 = false;
			rowCount2 ++;
		}
	}



	if (rowCount1 > rowCount2){
	
		addStart = false;
		numberOfRows = rowCount1 - rowCount2;

	}
	else {
		addStart = true;
		numberOfRows = rowCount2 - rowCount1;
	}


	if (addStart === true) {	
		for (var i =0; i< str1.length; i++){ 
		
			if (str1[i] === '\n') {
				lineCount++;
					if (lineCount === rowCount1){
						for (var k = 0; k < numberOfRows; k ++){   

							for (var j = 0; j < columnCount1; j ++){

		
								str1 += ',';
		
							}

							if (k < numberOfRows){ 
								str1 += '\n'; 
							}
						}
					}
			}
		}		
	}



	for (var i =0; i< str1.length; i++){ 
		
		if (str1[i] !== "\n") {
				
			
		string1 += str1[i];
	
	}

			

		if (str1[i] === "\n"){ 


			array1.push(string1);
			string1 = '';
							
			
			}	 
			
		}


	



	for (var i =0; i< str2.length; i++){ 
		
		string2 += str2[i];

		if (str2[i] === "\n"){
		
			array2.push(string2);
			string2 = '';
							
			
			}	 

		}


	if (array1.length > array2.length){
	
		var length  = array1.length;

	}

	else {
	
		length = array2.length;

	}

	var stringy = '';

	for (var i = 0; i < length; i++){

		stringy += array1[i] + array2[i]; 
		
	
	}




return stringy;		

}



		
	}	
		
		
