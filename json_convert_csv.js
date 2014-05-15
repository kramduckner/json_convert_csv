	
module.exports = {
	convertToCsv: function(obj, blah) {	
			var firstTime = true;

			var str = '';
				if (firstTime === true){
			
					for (item in obj){
		
						str += item + ',';
						
					}

				}	
					str += '\r\n';
			
					for (item in obj){
				
						str += obj[item] + ',';
				
					}
				
				console.log(typeof blah);
				if (typeof blah === 'function'){
					
					blah(str)					
			}
				}

		
	}	
		
		
