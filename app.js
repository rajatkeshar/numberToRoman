var prompt = require('prompt');

prompt.start();

prompt.get([{
		name: 'get',
		description: 'Enter Number: ',
		type: 'number',
		required: true
	}], function(err, result) {
			if(isNaN(result.get) || result.get <= 0) {
				return console.log("Input must be a positive number");
			} 
			console.log("Roman representation: ", printRoman(result.get));
});

var printRoman = function(num) {
  var lookupSet = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1};
  var result = '';
  for (var i in lookupSet ) {
    while ( num >= lookupSet[i] ) {
      result += i;
      num -= lookupSet[i];
    }
  }
  return result;
}


