
var numbers = "1,-4,-9";

function add (numbers){
	
	if(numbers.length === 0){
	return 0;
	}
	

	
	else if(numbers.includes(",") || numbers.includes("\n")){
		var numberArray = numbers.split(/[\n,]+/);
		
		if(numbers.includes("-")){
			var errorList = "";
			for(var i = 0; i < numberArray.length; i++){
				if(numberArray[i].includes("-")){
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
		return parseInt(numbers);
	}
	
}

function sum(numberArray){
	var total = 0;
	for(var i = 0; i < numberArray.length; i++){
		total += parseInt(numberArray[i]);
	}
	return total;
}

module.exports = add;
