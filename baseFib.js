'use strict'

// https://www.reddit.com/r/dailyprogrammer/comments/5196fi/20160905_challenge_282_easy_unusual_bases/

var convert = function(base, number) {
	var getFib = function(count){
		var fib = [1, 1, 1]
		for (var i = 1; i < count; i++) {
		fib[2] = fib[0] + fib[1]
		fib[0] = fib[1]; fib[1] = fib[2]
		}

		return fib[2]
	}, getIndex = function(input){
		var out
		for (var i = 0; input >= getFib(i); i++) {
			var out = i
		}

		return out
	}

	if (base == 10) {
		var max = getIndex(number), binary = [], sum = []
		binary[max] = 0; binary.fill(0)

		while (number > 0) {
			var index = getIndex(number),
				fib = getFib(index)

			binary[index] = 1
			number -= fib
			sum[index] = fib
		}

		console.log(binary.reverse().join(''))
	} else {
		var sum = 0, numbers = number.toString().split('').reverse()

		numbers.map((v,i,a)=>{
			if (v == 1) {
				sum += getFib(i)
			}
		})

		console.log(sum)
	}

}

convert(process.argv[2], process.argv[3])
