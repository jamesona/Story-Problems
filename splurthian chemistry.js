evalSym = function(ele, sym){
	var ele = ele.toLowerCase(),
		sym = sym.toLowerCase(),
		valid = true

	// check that the symbol is two letters
	if (sym.length == 2) {

		// check that both letters are in the name, and appear in order
		var first = ele.indexOf(sym[0]), second = ele.indexOf(sym[1], first + 1)
		if (first > -1 && second > -1) {

			// check if letters are the same
			if (sym[0] == sym[1]) {
				
				// if they are, make sure the name has two of the letter
				var occur = (ele.match(new RegExp(sym[0], 'g')) || []).length
				if (occur < 2) {
					valid = false
					console.log("There was only 1 "+sym[0]+" in "+ele)
				}
			}
		} else {
			valid = false
			console.log("Letters were not both in the name, or not in order")
		}
	} else {
		valid = false
		console.log("Symbol was not exactly two letters")
	}
	return valid
}