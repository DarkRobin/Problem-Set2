var firstReverse = function(str){
	return str.reverse();
};


console.log(firstReverse(['one', 'two', 'three', 'four', 'five']));
console.log(firstReverse(['way', 'this', 'go', 'can', 'words']));




var swapCase = function(swaping){
	var temp = "";

	for ( var i = 0; i < swaping.length; i++){

		var letter = swaping[i];

		if (letter === letter.toUpperCase()){
			// += is short hand for temp = temp + swaping[i].toLowerCase()
			temp += letter.toLowerCase();
		}
		else {
			temp += letter.toUpperCase();
		}
		
	}
	
	return temp;
};


console.log(swapCase("Hello World"));












