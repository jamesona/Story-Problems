//https://www.reddit.com/r/dailyprogrammer/comments/5j6ggm/20161219_challenge_296_easy_the_twelve_days_of/
'use strict'

let days = [
	{
		day: 'zeroth', number: 'zero', gift: null,
	},	{
		day: 'first', number: 'and a', gift: 'Partridge in a Pear Tree',
	},	{
		day: 'second', number: 'two', gift: 'Turtle Doves',
	},	{
		day: 'third', number: 'three', gift: 'French Hens',
	},	{
		day: 'fourth', number: 'four', gift: 'Calling Birds',
	},	{
		day: 'fifth', number: 'five', gift: 'Golden Rings',
	},	{
		day: 'sixth', number: 'six', gift: 'Geese a Laying',
	},	{
		day: 'seventh', number: 'seven', gift: 'Swans a Swimming',
	},	{
		day: 'eigth', number: 'eight', gift: 'Maids a Milking',
	},	{
		day: 'ninth', number: 'nine', gift: 'Ladies Dancing',
	},	{
		day: 'tenth', number: 'ten', gift: 'Lords a Leaping',
	},	{
		day: 'eleventh', number: 'eleven', gift: 'Pipers Piping',
	},	{
		day: 'twelfth', number: 'twelve', gift: 'Drummers Drumming'
	}
]

for (let day = 1; day < days.length; day++){
	let counter = day
	console.log('On the ' + days[day].day + ' day of Christmas\nmy true love gave to me:')
	while (counter > 0) {
 		let count = (day == 1 && counter == 1) ? 'a' : days[counter].number
 		console.log(count + ' ' + days[counter--].gift)
	}
	console.log()
}
