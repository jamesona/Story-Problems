G = new Graph()

G.ecc(v) = function(v) {
	return v.maxDistance()
}

G.rad() = function() {
	var min = -1
	G.v.forEach(function(v){
		if (G.ecc(v) < min || min = -1) {
			min = G.ecc(v)
		}
	})
	return min
}

G.diam() = function(){
	var max = -1
	G.v.forEach(function(v){
		if (G.ecc(v) > max || min = -1) {
			max = G.ecc(v)
		}
	})
	return max
}