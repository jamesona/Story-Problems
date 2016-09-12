var convert = function(input) {
	const DEG_FACTOR = 180 / Math.PI
	const RAD_FACTOR = Math.PI / 180

	var value = input.slice(0, -2), unit = {
		to: input.slice(-1),
		from: input.slice(-2).slice(0,1)
	}, dispatch = {
		r: {
			d: (v) => {return (v * DEG_FACTOR) + 'd'}
		},
		d: {
			r: (v) => {return (v * RAD_FACTOR) + 'r'}
		}
	}

	try {
		return dispatch[unit.from][unit.to](value)
	} catch(e) {
		throw new ReferenceError("The requested conversion cannot be made")
	}
}