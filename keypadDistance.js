function distance(ip) {
	var kp = [
			'1', '2', '3',
			'4', '5', '6',
			'7', '8', '9',
			'.', '0'
		],
		coords = {},
		getx = function(p){
			return Math.floor(kp.indexOf(p) / 3)
		},
		gety = function(p){
			return kp.indexOf(p) - (getx(p) * 3)
		},
		round = function(n) {
			return Math.round(n * 100) / 100
		},
		distance = 0

	for (var i=0;i<ip.length;i++) {
		var c1 = ip.slice(i, i+1),
			p1 = coords[c1] ? coords[c1] : [getx(c1),gety(c1)],
			message = '"'+c1+'" is at ('+p1[0]+','+p1[1]+')'
			coords[c1] = p1
		
		if (i>0) {
			var c2 = ip.slice(i+1, i+2),
				p2 = (coords[c2]) ? coords[c2] : [getx(c2),gety(c2)],
				x = [p1[0],p2[0]], y = [p1[1], p2[1]],
				A = Math.abs(x[0] - x[1]),
				B = Math.abs(y[0] - y[1]),
				C = Math.sqrt(A * A + B * B)

			distance += C

			coords[c2] = p2
			if (i<ip.length-1)
				message += '; distance from "'+c1+'" to "'+c2+'" is '+round(C)+'cm'
			else if (i == ip.length-1)
				message += '; total distance traveled is '+round(distance)+'cm'

			console.log(message)
		}
	}

	return round(distance) + 'cm'
}