function add (numbers){	
	if(numbers.length === 0){
	return 0;
	}
	
	else if(numbers.startsWith("//")){	//different delimiter
		var index = numbers.indexOf("\n");
		var delimiter = numbers.substring(2, index);
		var splitter = new RegExp("["+delimiter+"\n,]+", "g");
		var numberArray = numbers.substring(index).split(splitter);
		return sum(numberArray);
	}

	if(numbers.includes(",") || numbers.includes("\n")){ 	// , or \n are the delimiters
		var numberArray = numbers.split(/[\n,]+/);
		
		if(numbers.includes("-")){			// negative number check
			var errorList = "";
			for(var i = 0; i < numberArray.length; i++){
				if(numberArray[i].includes("-")){	//
					if(errorList == ""){
						errorList += numberArray[i];
					}
					else{
						errorList += (", " +  numberArray[i]);
					}
				}
			}
			throw "Negatives not allowed: " + errorList;
		}
		return sum(numberArray);
	}

	else{
		if(parseInt(numbers) <= 1000)	// ignores numbers over 1000
			return parseInt(numbers);	// if it has no delimiter
		else
			return 0;
	}
}

function sum(numberArray){		//sums up all the numbers
	var total = 0;
	for(var i = 0; i < numberArray.length; i++){
		if(parseInt(numberArray[i]) <= 1000)		//ignores numbers over 1000
			total += parseInt(numberArray[i]);
	}
	return total;
}

module.exports = add;