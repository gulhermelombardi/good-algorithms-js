function convertToRoman(num) {
	const roman =[
		["","I","II","III","IV","V","VI","VII","VIII","IX"], //i
		["","X","XX","XXX","XL","L","LX","LXX","LXXX","XC"], //i
		["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM"], //i
		["","M","MM","MMM"]                                  //i
	]

// converts the number to an array of the strings with the units in position 0.
const converNum = num.toString().split("").reverse();

uses the position of the element and its value (string converted to number) to find its correspondent in roman
return converNum.reduce((pv, elem, i) => pv = roman[i][+elem] + pv,"");
 
}

convertToRoman(36);
