//https://www.reddit.com/r/dailyprogrammer/comments/5seexn/20170206_challenge_302_easy_spelling_with/

'use strict'

class PeriodicTable {
	constructor() {
		this.elements = [{
			"name": "Hydro­gen",
			"symbol": "H",
		},{
			"name": "He­lium",
			"symbol": "He",
		},{
			"name": "Lith­ium",
			"symbol": "Li",
		},{
			"name": "Beryl­lium",
			"symbol": "Be",
		},{
			"name": "Boron",
			"symbol": "B",
		},{
			"name": "Carbon",
			"symbol": "C",
		},{
			"name": "Nitro­gen",
			"symbol": "N",
		},{
			"name": "Oxy­gen",
			"symbol": "O",
		},{
			"name": "Fluor­ine",
			"symbol": "F",
		},{
			"name": "Neon",
			"symbol": "Ne",
		},{
			"name": "So­dium",
			"symbol": "Na",
		},{
			"name": "Magne­sium",
			"symbol": "Mg",
		},{
			"name": "Alumin­ium",
			"symbol": "Al",
		},{
			"name": "Sili­con",
			"symbol": "Si",
		},{
			"name": "Phos­phorus",
			"symbol": "P",
		},{
			"name": "Sulfur",
			"symbol": "S",
		},{
			"name": "Chlor­ine",
			"symbol": "Cl",
		},{
			"name": "Argon",
			"symbol": "Ar",
		},{
			"name": "Potas­sium",
			"symbol": "K",
		},{
			"name": "Cal­cium",
			"symbol": "Ca",
		},{
			"name": "Scan­dium",
			"symbol": "Sc",
		},{
			"name": "Tita­nium",
			"symbol": "Ti",
		},{
			"name": "Vana­dium",
			"symbol": "V",
		},{
			"name": "Chrom­ium",
			"symbol": "Cr",
		},{
			"name": "Manga­nese",
			"symbol": "Mn",
		},{
			"name": "Iron",
			"symbol": "Fe",
		},{
			"name": "Cobalt",
			"symbol": "Co",
		},{
			"name": "Nickel",
			"symbol": "Ni",
		},{
			"name": "Copper",
			"symbol": "Cu",
		},{
			"name": "Zinc",
			"symbol": "Zn",
		},{
			"name": "Gallium",
			"symbol": "Ga",
		},{
			"name": "Germa­nium",
			"symbol": "Ge",
		},{
			"name": "Arsenic",
			"symbol": "As",
		},{
			"name": "Sele­nium",
			"symbol": "Se",
		},{
			"name": "Bromine",
			"symbol": "Br",
		},{
			"name": "Kryp­ton",
			"symbol": "Kr",
		},{
			"name": "Rubid­ium",
			"symbol": "Rb",
		},{
			"name": "Stront­ium",
			"symbol": "Sr",
		},{
			"name": "Yttrium",
			"symbol": "Y",
		},{
			"name": "Zirco­nium",
			"symbol": "Zr",
		},{
			"name": "Nio­bium",
			"symbol": "Nb",
		},{
			"name": "Molyb­denum",
			"symbol": "Mo",
		},{
			"name": "Tech­netium",
			"symbol": "Tc",
		},{
			"name": "Ruthe­nium",
			"symbol": "Ru",
		},{
			"name": "Rho­dium",
			"symbol": "Rh",
		},{
			"name": "Pallad­ium",
			"symbol": "Pd",
		},{
			"name": "Silver",
			"symbol": "Ag",
		},{
			"name": "Cad­mium",
			"symbol": "Cd",
		},{
			"name": "Indium",
			"symbol": "In",
		},{
			"name": "Tin",
			"symbol": "Sn",
		},{
			"name": "Anti­mony",
			"symbol": "Sb",
		},{
			"name": "Tellur­ium",
			"symbol": "Te",
		},{
			"name": "Iodine",
			"symbol": "I",
		},{
			"name": "Xenon",
			"symbol": "Xe",
		},{
			"name": "Cae­sium",
			"symbol": "Cs",
		},{
			"name": "Ba­rium",
			"symbol": "Ba",
		},{
			"name": "Lan­thanum",
			"symbol": "La",
		},{
			"name": "Cerium",
			"symbol": "Ce",
		},{
			"name": "Praseo­dymium",
			"symbol": "Pr",
		},{
			"name": "Neo­dymium",
			"symbol": "Nd",
		},{
			"name": "Prome­thium",
			"symbol": "Pm",
		},{
			"name": "Sama­rium",
			"symbol": "Sm",
		},{
			"name": "Europ­ium",
			"symbol": "Eu",
		},{
			"name": "Gadolin­ium",
			"symbol": "Gd",
		},{
			"name": "Ter­bium",
			"symbol": "Tb",
		},{
			"name": "Dyspro­sium",
			"symbol": "Dy",
		},{
			"name": "Hol­mium",
			"symbol": "Ho",
		},{
			"name": "Erbium",
			"symbol": "Er",
		},{
			"name": "Thulium",
			"symbol": "Tm",
		},{
			"name": "Ytter­bium",
			"symbol": "Yb",
		},{
			"name": "Lute­tium",
			"symbol": "Lu",
		},{
			"name": "Haf­nium",
			"symbol": "Hf",
		},{
			"name": "Tanta­lum",
			"symbol": "Ta",
		},{
			"name": "Tung­sten",
			"symbol": "W",
		},{
			"name": "Rhe­nium",
			"symbol": "Re",
		},{
			"name": "Os­mium",
			"symbol": "Os",
		},{
			"name": "Iridium",
			"symbol": "Ir",
		},{
			"name": "Plat­inum",
			"symbol": "Pt",
		},{
			"name": "Gold",
			"symbol": "Au",
		},{
			"name": "Mer­cury",
			"symbol": "Hg",
		},{
			"name": "Thallium",
			"symbol": "Tl",
		},{
			"name": "Lead",
			"symbol": "Pb",
		},{
			"name": "Bis­muth",
			"symbol": "Bi",
		},{
			"name": "Polo­nium",
			"symbol": "Po",
		},{
			"name": "Asta­tine",
			"symbol": "At",
		},{
			"name": "Radon",
			"symbol": "Rn",
		},{
			"name": "Fran­cium",
			"symbol": "Fr",
		},{
			"name": "Ra­dium",
			"symbol": "Ra",
		},{
			"name": "Actin­ium",
			"symbol": "Ac",
		},{
			"name": "Thor­ium",
			"symbol": "Th",
		},{
			"name": "Protac­tinium",
			"symbol": "Pa",
		},{
			"name": "Ura­nium",
			"symbol": "U",
		},{
			"name": "Neptu­nium",
			"symbol": "Np",
		},{
			"name": "Pluto­nium",
			"symbol": "Pu",
		},{
			"name": "Ameri­cium",
			"symbol": "Am",
		},{
			"name": "Curium",
			"symbol": "Cm",
		},{
			"name": "Berkel­ium",
			"symbol": "Bk",
		},{
			"name": "Califor­nium",
			"symbol": "Cf",
		},{
			"name": "Einstei­nium",
			"symbol": "Es",
		},{
			"name": "Fer­mium",
			"symbol": "Fm",
		},{
			"name": "Mende­levium",
			"symbol": "Md",
		},{
			"name": "Nobel­ium",
			"symbol": "No",
		},{
			"name": "Lawren­cium",
			"symbol": "Lr",
		},{
			"name": "Ruther­fordium",
			"symbol": "Rf",
		},{
			"name": "Dub­nium",
			"symbol": "Db",
		},{
			"name": "Sea­borgium",
			"symbol": "Sg",
		},{
			"name": "Bohr­ium",
			"symbol": "Bh",
		},{
			"name": "Has­sium",
			"symbol": "Hs",
		},{
			"name": "Meit­nerium",
			"symbol": "Mt",
		},{
			"name": "Darm­stadtium",
			"symbol": "Ds",
		},{
			"name": "Roent­genium",
			"symbol": "Rg",
		},{
			"name": "Coper­nicium",
			"symbol": "Cn",
		},{
			"name": "Unun­trium",
			"symbol": "Uut",
		},{
			"name": "Flerov­ium",
			"symbol": "Fl",
		},{
			"name": "Unun­pentium",
			"symbol": "Uup",
		},{
			"name": "Liver­morium",
			"symbol": "Lv",
		},{
			"name": "Unun­septium",
			"symbol": "Uus",
		},{
			"name": "Unun­octium",
			"symbol": "Uuo",
		}]
	}

	findSymbol(string) {
		if (string.length > 3) throw new Error("Element symbols aren't longer than three letters. Also, you should probably only use two.")

		let match = null

		this.elements.forEach((element, i, a)=>{
			if (string.toLowerCase() == element.symbol.toLowerCase())
				match = this.elements[i]
		})

		return match
	}
}

class Word {
	constructor(word) {
		this.characters = word.split('')
	}

	get string() {
		return this.characters.join('')
	}

	permute(){
		let word = this.string,
			permutations = []

		for (let i = 0; i < word.length; i++) {
			permutations.push(word[i])

			if (word.length > i+1) {
				permutations.push(word[i]+word[i+1])
			}
		}

		return permutations
	}
}

let chemify = function(input){
	let test = input,
		word = new Word(input),
		periodicTable = new PeriodicTable(),
		elements = {},
		solution = [],
		index = 0,
		output, list

	word.permute().forEach((pair)=>{
		let matchedElement = periodicTable.findSymbol(pair)

		if (matchedElement)
			elements[pair] = matchedElement
	})


	while (test.length) {
		let pairs = Object.keys(elements),
			pair = test.slice(0, 2),
			letter = test.slice(0, 1)

		if (pairs.indexOf(pair) > -1) {
			solution.push(elements[pair])
			test = test.slice(2)

			index++
		} else if (pairs.indexOf(letter) > -1) {
			solution.push(elements[letter])
			test = test.slice(1)

			index++
		} else {
			delete elements[ pairs[index--] ]
			pairs--
			test = input
			solution = []
		}
	}

	output = solution.map((element)=>{return element.symbol}).join('')
	list = JSON.stringify(solution.map((element)=>{return element.name}))

	console.log(output, list)
}

chemify(process.argv[2])
