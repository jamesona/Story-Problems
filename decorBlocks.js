'use strict'

let main = function(words, blocks){
	// filter out the list of possible words based on length and requirements
	let possibleWords = listPossibleWords(words, blocks)

	// for every word that remains
	possibleWords.forEach((word) => {
		// assume the word is possible
		let possible = true,
			chars = word.split(''),
			// find a list of each block that can provide each character
			solutions = findSoluions(chars, blocks)

			possible = checkSolutions()
		}

		if (possible) {} // process.stdout.write()
	})
}

let listPossibleWords = function(words, blocks) {
	let possibleWords = []
	words.forEach((word) => {
		let possible = true,
			wordChars = word.split(''),
			chars = [].concat.apply([], blocks),
			length = wordChars.length

		// if a word has more letters than we have blocks
		if (length > blocks.length){
			// it's not possible
			possible = false
		} else {
			wordChars.forEach((c) => {
				let C = c.toUpperCase()
				// if a word uses a letter we don't have
				if (chars.indexOf(C) == -1) {
					// it's not possible
					possible = false
				}
			})
		}
		// if we haven't ruled the word out yet, add it to the list
		if (possible) possibleWords.push(word)
	})

	return possibleWords
}

let findSoluions = function(characters, blocks) {
	// return an array with an index for every character
	return characters.map((c,i) => {
		// start an array of blocks that have this character
		let C = c.toUpperCase(), solutions = []

		blocks.forEach((b,j) => {
			// if this block has the character
			if (b.indexOf(C) > -1) {
				// add it to the list of possible blocks
				solutions.push(j)
			}
		})

		return solutions
	})
}

let checkSolution = function(solutions, blocks) {
	// make an array to track the status of each block
	possibleBlocks = blocks.map((b) => true)
		
	// for every letter
	solutions.forEach((character, i) => {
		// iterate over the possible blocks
		character.forEach((block,j) => {
			// if the block hasn't been used
			if (possibleBlocks[block]) {
				// mark it as used, and move on
				possibleBlocks[block] = false
			} else {
				// remove this solution, because the block isn't available
				character.splice(j, 1)
			}
			// if we don't have any solutions left, the word isn't possible
			if (solutions[i].length < 1) possible = false
		})
	})
}

let http = require('https'),
	url = "https://raw.githubusercontent.com/dolph/dictionary/master/enable1.txt",
	blocks = [
		['J','H','U','L','S','B'], 
		['O','O','O','O','N','S'], 
		['V','A','M','Y','O','O'], 
		['W','E','E',' ',' ',' ']
	], words = []

// load the word list
http.get(url, (res) => {
	let raw = '';
	res.on('data', (d) => raw += d)
	res.on('end', () => {
		let split = String(raw).split('\n')
		process.stdout.write("Received " + split.length + " words from online source...\n")
		split.forEach((v) => {
			if (v.length <= blocks.length) words.push(v)
		})

		// start the main function
		main(words, blocks)
	})
})
