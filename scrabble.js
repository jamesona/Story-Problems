function playTiles(input) {
	var db = {
		"E": {count: 12 ,value: 1},
		"A": {count: 9, value: 1},
		"I": {count: 9, value: 1},
		"O": {count: 8, value: 1},
		"N": {count: 6, value: 1},
		"R": {count: 6, value: 1},
		"T": {count: 6, value: 1},
		"L": {count: 4, value: 1},
		"S": {count: 4, value: 1},
		"U": {count: 4, value: 1},
		"D": {count: 4, value: 2},
		"G": {count: 3, value: 2},
		"_": {count: 2, value: 0},
		"B": {count: 2, value: 3},
		"C": {count: 2, value: 3},
		"M": {count: 2, value: 3},
		"P": {count: 2, value: 3},
		"F": {count: 2, value: 4},
		"H": {count: 2, value: 4},
		"V": {count: 2, value: 4},
		"W": {count: 2, value: 4},
		"Y": {count: 2, value: 4},
		"K": {count: 1, value: 5},
		"J": {count: 1, value: 8},
		"X": {count: 1, value: 8},
		"Q": {count: 1, value: 10},
		"Z": {count: 1, value: 10}
	}, tiles = input.split(''),
		remain = {},
		err = tiles.reduce(function(e, v, i, a){
		l = v.toUpperCase(), tile = db[l]
		if (e = v) e = false
		if (e) return e
		
		if (tile.count < 1) {
			return "Tried to play '" + l + "' but there aren't any left..."
		} else {
			db[l].count--
		}
	})

	if (err) {
		console.log(err)
		return 1
	}

	Object.keys(db).forEach(function(key){
		var thisTile = db[key]
		thisTile.name = key
		remain[thisTile.count] = (remain[thisTile.count]) ? remain[thisTile.count].concat(thisTile) : [thisTile]
	})

	Object.keys(remain).reverse().forEach(function(key){
		var letters = remain[key], print = key+':'
		letters.sort(function(a, b){
			return 	(a.count == b.count) ?
			 		(a.name < b.name) ? -1 : 1 :
					(a.count > b.count) ? -1 : 1
			return 0
		})

		letters.forEach(function(letter, i){
			print += ' ' + letter.name
			if (i < letters.length -1) print += ','
		})
		console.log(print)
	})	
}

if (process.argv[2]) {
	playTiles(process.argv[2])
}