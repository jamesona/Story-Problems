function isMagic(input) {
	var numbers = [].concat.apply([], input),
		max = numbers.length,
		side = Math.sqrt(max),
		sum = side*(side*side + 1)/2,
		add = function(a, b){
			return a+b
		}, rows = function(){
			for (var x=0; x<side; x++)  {
				var total = 0
				for (var y=0; y<side; y++) {
					total+=numbers[side*x+y]
				}
				if (total !== sum) {
					console.log('failed on row '+x+'. Expected '+sum+' but got '+total)
					return false
				}
			}
			return true
		}, columns = function(){
			for (var y=0; y<side; y++)  {
				var total = 0
				for (var x=0; x<side; x++) {
					total+=numbers[side*x+y]
				}
				if (total !== sum) {
					console.log('failed on column '+y)
					return false
				}
			}
			return true
		}, diagonalOne = function() {
			var total = 0
			for (var i=0; i<side; i++)  {
				total+=numbers[side*i+i]
			}
			if (total !== sum) {
				console.log("failed top-left to bottom-right")
				return false
			}
			return true
		}, diagonalTwo = function() {
			var total = 0
			for (var i=0; i<side; i++)  {
				total+=numbers[side*i+side-i-1]
			}
			if (total !== sum) {
				console.log("failed top-right to bottom-left")
				return false
			}
			return true
		}

	if (side % 1 != 0) throw new RangeError('The supplied array was not square.')

	for (var i=1; i<max; i++) {
		if (!input.indexOf(i) == -1) throw new RangeError('The supplied square did not contain all numbers 1-'+max+'.')
	}
	
	if (rows() && columns() && diagonalOne() && diagonalTwo()) return true;

	return false;
}