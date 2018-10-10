function Add(numbers){
	
	if(numbers.length === 0){
	return 0;
	}
	
	else if(numbers.include(","){
		var numberArray = numbers.split(",");
		return parseInt(numberArray[0]) + parseInt(numberArray[1]);
	}
	
	else{
	return parseInt(number);
	}
	
}

module.exports = add;
