function quicksort(arr){
	if (arr.length < 2) return arr
	var pivot = arr.shift(), length = arr.length,
		midpoint = Math.floor(length / 2), sorted = []

	while (arr.length) {
		var number = arr.shift()
		if (number > pivot) 
			sorted.push(number) // add it to the end
		else
			sorted.unshift(number) // add it to the beginning
	}

	var S = sorted.slice(0, midpoint), G = sorted.slice(midpoint, length),
		arr = quicksort(S).concat(quicksort(G)).concat(pivot)
	return arr
}

var list = [
		55,23,34,51,94,55,61,94,22,55,4,38,13,59,68,59,
		95,46,86,38,99,36,22,95,81,79,81,32,33,7,12,85,
		98,18,16,41,61,69,85,12,78,36,4,79,34,29,82,2,97,
		76,72,62,42,11,66,36,21,47,38,77,22,10,8,71,2,4,
		43,88,77,75,78,68,13,71,65,37,51,33,34,6,32,35,
		68,33,64,49,50,56,53,49,15,65,36,58,89,99,14,95,
		15,56
	]

console.log(quicksort(list))
