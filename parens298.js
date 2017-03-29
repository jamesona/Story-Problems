'use strict'

module.exports = function(input) {
	return optimize(mapParens({
		contents: input,
		index: 0,
		read: function() {
			return this.contents.charAt(this.index++)
		}
	}))
}

function mapParens(buffer) {
	let map = [], c

	while (c = buffer.read()) {
		if (c == ')')
			break

		if (c == '(')
			map.push(mapParens(buffer))
		else
			map.push(c)
	}

	return map
}

function optimize(map, recursed) {
	if (map.length == 0)
		return ""

	if (map.length == 1 && Array.isArray(map[0]) && recursed)
		return optimize(map[0], true)

	let out = ''

	map.forEach(function(item) {
		if (typeof item  == 'string') {
			out += item
		} else {
			let parsedItem = optimize(item, true)
			if (parsedItem.length) {
				out += '(' + parsedItem + ')'
			}
		}
	})

	return out
}



console.log(
	module.exports(process.argv[2])
)
