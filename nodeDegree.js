var nodes = {}

var fs = require('fs')

function applyLink(a, b) {
	if (!nodes.hasOwnProperty(a) || nodes[a].constructor != Array) {
		nodes[a] = []
	}

	if (nodes[a].indexOf(b) < 0) {
		nodes[a].push(b)
	}

	if (!nodes.hasOwnProperty(b) || nodes[b].constructor != Array) {
		nodes[b] = []
	}

	if (nodes[b].indexOf(a) < 0) {
		nodes[b].push(a)
	}
}

var file = fs.openSync('./nodes.txt', 'r')

fs.readFile(file, 'utf8',function(e, d){
	if (e) throw (e)

	var input = d.split('\n'),
		count = parseInt(input[0]),
		pairs = input.slice(1, input.length)

	pairs.forEach(function(v, i, a){
		pair = v.split(' ')
		applyLink(pair[0], pair[1])
	})

	Object.keys(nodes).forEach(function(k, i, o){
		console.log('Node '+k+' has a degree of '+nodes[k].length)
	})
})